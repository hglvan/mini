var multer = require ('multer');

var apiResult = require('../module/apiResult.module.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var db = require('../module/db.moudle.js');

var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../img')
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 

var upload = multer({ storage: storage })

exports.Register = function(app){
	app.post('/upload', upload.fields([{name:'banner',maxCount:10},{name:'photos',maxCount:18}]), function(req, res) {
		
        var banner = req.files.banner;
        var photos = req.files.photos;
        
        var arr1 = [],arr2 = [];
        
        for(var i = 0; i < banner.length; i++){
            arr1.push(banner[i].filename);
        }
        for(var j = 0; j < photos.length; j++){
            arr2.push(photos[j].filename);
        }
        
        var data = req.body;
        var date = new Date();
        data.goodsid = Date.now()+'';
    
        data.date = date.toLocaleString();
        data.banner = arr1;
        data.photos = arr2;
        
        
        
        console.log('req.body',req.body);
        
        db.dbsave('goodslist',data,function () {
            res.send('"上传成功"');
        })
        
	}.bind(db));
	
	app.post('/removeProduct', urlencodedParser, function (request,response) {
        var data = request.body;
        
        console.log('data',data)
        
        db.remove('goodslist',data);
        
        response.send(true);
    })
	
	app.post('/getProducts', urlencodedParser, function (request,response) {

	    var data = request.body;
	     console.log('getProducets',data)
        db.exists('goodslist', data,['goodsid','classify1','classify2'], function(data){
            if(data.length > 0){
                response.send(data)
            } else {
                response.send(apiResult(false));
            }
        })
    })
    
    app.post('/searchProducts', urlencodedParser, function (request,response) {
           console.log('keyword',request.body)
        var data = request.body;
        
        var keyword = data.keyword;
        
        var arr = ['无辣不欢','网红爆品','剁手尖货','低卡纤身','吃遍全球','优选水果','冰镇饮料','冰淇淋雪糕','咔吃咔吃','当日炒货'];
        
        if(arr.indexOf(keyword) > -1){
            var obj = {};
            obj.classify1 = keyword;
         
            db.exists('goodslist',obj,['classify1'],function (data) {
                if(data.length > 0){
                    console.log('data:',data);
                    response.send(data);
                } else {
                    response.send(apiResult(false, '没有找到相关的产品'));
                }
            })
        }else {
            var reg = new RegExp("^.*" + keyword + ".*$","i");
            db.search('goodslist', reg, function(data){
        
                if(data.length > 0){
                    console.log('data:',data);
                    response.send(data);
                } else {
                    response.send(apiResult(false, '没有找到相关的产品'));
                }
            })
        }
    })
    
}