var multer = require ('multer');

var apiResult = require('../module/apiResult.module.js');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var db = require('../module/dbmodule.js');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../web/src/static/imgs/img')
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

var upload = multer({ storage: storage })

exports.Register = function(app){
    
    app.post('/upload', upload.fields([{name:'banner',maxCount:10},{name:'photos',maxCount:18}]), function(request, response) {
        
        var banner = request.files.banner;
        var photos = request.files.photos;
        
        var arr1 = [],arr2 = [];
        
        for(var i = 0; i < banner.length; i++){
            arr1.push(banner[i].filename);
        }
        for(var j = 0; j < photos.length; j++){
            arr2.push(photos[j].filename);
        }
        
        var date = new Date();
        request.body.goodsid = Date.now()+'';
        request.body.date = date.toLocaleString();
        request.body.banner = arr1;
        request.body.photos = arr2;
        console.log('321',request.body)

        db.selectData('goodslist', {goodstittle : request.body.goodstittle}, function(result){
        console.log('result',result)
            if(!result.status){
                response.send(result);
            
            } else {
                
                var data = result.data;
                if(!data[0]){
                
                    db.insertData('goodslist', request.body, function(insertResult){
                    
                        response.send(insertResult);
                    })
                
                } else {
                
                    var _obj = {goodstittle : request.body.goodstittle};
                
                    db.setUpdateData('goodslist', _obj, request.body, function(insertResult){
                    
                        response.send(insertResult);
                    
                    })
                }
            }
        })
    });
    


    app.post('/removeProduct', urlencodedParser, function (request,response) {
        
        db.removeData('goodslist',request.body,function (result) {
            response.send(result);
        });
        
        
    })
    
    app.post('/getProducts', urlencodedParser, function (request,response) {
        db.selectData('goodslist', request.body, function(result){
            console.log(result)
            // if(!result.status){
                response.send(result)
            // }else{
            //     if(!result.data[0]){
            //         response.send(apiResult(false,'未找到相关产品'));
            //     }else{
            //         response.send(apiResult(true,null,result.data));
            //     }
            // }
        })
    })


    //后台获取数据库数据
      app.post('/getProductsList', urlencodedParser, function (request,response) {
        db.selectDataList('goodslist', request.body, function(result){
          
                response.send(result)
          
        })
    })

    //后台编辑商品列表
    app.post('/editProductsList', urlencodedParser, function (request,response) {
        console.log('goodsid',request.body)
        db.selectDataList('goodslist', request.body, function(result){
                console.log('editProductsList',result)
                response.send(result)
          
        })
    })



    // 提交修改
     app.post('/btneditProductsList', urlencodedParser, function (request,response) {
       console.log('修改',request.body)
        db.editDataList('goodslist', request.body, function(result){
                console.log('editProductsList',result)
                response.send(result)
          
        })
    })



    
    app.post('/searchProducts', urlencodedParser, function (request,response) {
        
        console.log('keyword',request.body.keyword)
        
        var arr = ['无辣不欢','网红爆品','剁手尖货','低卡纤身','吃遍全球','优选水果','冰镇饮料','冰淇淋雪糕','咔吃咔吃','当日炒货'];
        
        if(arr.indexOf(request.body.keyword) > -1){
            
            db.selectData('goodslist', {classify1 : request.body.keyword},function (result) {
                if(!result.status){
                    response.send(result)
                }else{
                    if(!result.data[0]){
                        response.send(apiResult(false,'未找到相关产品'));
                    }else{
                        response.send(apiResult(true,null,result.data));
                    }
                }
            })
        }else {
            
            var reg = new RegExp("^.*" + request.body.keyword + ".*$","i");
            db.selectData('goodslist', {"goodstittle":{$regex:reg}}, function(result){
                if(!result.status){
                    response.send(result)
                }else{
                    if(!result.data[0]){
                        response.send(apiResult(false,'未找到相关产品'));
                    }else{
                        response.send(apiResult(true,null,result.data));
                    }
                }
            })
        }
    })
   




}

