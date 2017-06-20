var mongodb = require('mongodb');
var server = new mongodb.Server('10.3.133.44',27017);
var db = new mongodb.Db('mini',server);

var apiResult = require('./apiResult.module.js');

function selectData(_collection,_data,_callback) {
    db.open(function (error,db) {
        if(error){
            _callback(apiResult(false,null,error));
            return;
        }
        db.collection(_collection,function (error,collection) {
            if(error){
                _callback(apiResult(false,null,error));
                return;
            }
         
            var data = _data || {};
            

            collection.find(data).toArray(function (error,docs) {
                if(error){
                    _callback(apiResult(false,null,error));
                    console.log('错误')
                    return;
                }
               
                _callback(apiResult(true,null,docs));
                // db.close(); 
            })
             db.close(); 
        });
       
    })
}

//数据库列表
function selectDataList(_collection,_data,_callback) {
    db.open(function (error,db) {
        if(error){
            _callback(apiResult(false,null,error));
            return;
        }
        db.collection(_collection,function (error,collection) {
            if(error){
                _callback(apiResult(false,null,error));
                return;
            }
           
            var data = _data || {};
            

            collection.find(data).toArray(function (error,docs) {
                if(error){
                    _callback(apiResult(false,null,error));
                    console.log('错误')
                    return;
                }
              
                _callback(apiResult(true,null,docs));
                db.close(); 
            })
             // db.close(); 
        });
       
    })
}


//编辑后台数据

var editDataList = function(_collection,item,newData){
        
        db.collection(_collection,function(err,collection){
            collection.update(item,{$set:newData},function(err,result){
                if(err){
                    console.log(err);
                }
            })

        }); 
};


//后台修改商品数据
var editDataList = function(_collection,data, callback){
    db.open(function(error, db){
        if(error){
            console.log('connect db:', error);
        }
        //Account => 集合名（表名）
        db.collection(_collection, function(error, collection){
            if(error){
                console.log(error)  
            } else {
                // collection.find({goodsid:data.goodsid}).toArray(function(err, docs){

                //     if(err){
                //         console.log('find err:',err);
                //     }

                    collection.update({goodsid:data.goodsid},{
                        $set:{  
                                goodstittle:data.goodstittle,
                                oldprice:data.oldprice,
                                weight:data.weight,
                                nowprice:data.nowprice,
                                goodsmsg:data.goodsmsg,
                                specs1:data.specs1,
                                specs2:data.specs2,
                                specs3:data.specs3,
                                banner:JSON.parse(data.banner),
                                photos:JSON.parse(data.photos)
                                                  
                        }},true,false);
                    callback(apiResult(true,null,null));
                    db.close();
                // });
            }
            
        })
    })  
}







function insertData(_collection,_data,_callback) {
    
    db.open(function (error,db) {
        if(error){
            _callback(apiResult(false,null,error));
            return;
        }
        db.collection(_collection,function (error,collection) {
            
            if(error){
                _callback(apiResult(false,null,error));
                return
            }
            
            collection.insert(_data,function (error,result) {
                
                if(error){
                    _callback(apiResult(false,null,error));
                    return;
                }
                _callback(apiResult(true,null,result));
                
            })
            
            db.close();
        })
        
    })
}

function setUpdateData(_collection,_obj,_options,_callback) {
    
    db.open(function (error,db) {
        
        if(error){
            _callback(apiResult(false,null,error));
            return
        }
        
        db.collection(_collection,function (error,collection) {
            
            if(error){
                _callback(apiResult(false,null,error));
                return
            }
            
            collection.update(_obj,{$set:_options},true,true);
            
            _callback(apiResult(true));
            
            db.close();
        })
    })
}

function pushUpdateData(_collection,_obj,_options,_callback) {
    db.open(function (error,db) {
        if(error){
            _callback(apiResult(false,null,error));
            return
        }
        db.collection(_collection,function (error,collection) {
            if(error){
                _callback(apiResult(false,null,error));
                return
            }
            collection.update(_obj,{$push:{_options}},true,false);
            _callback(apiResult(true));
            db.close;
        })
    })
}

function removeData(_collection,_options,_callback) {
    db.open(function (error,db) {
        if(error){
            _callback(apiResult(false,null,error));
            return
        }
        db.collection(_collection,function (error,collection) {
            if(error){
                _callback(apiResult(false,null,error));
                return
            }
            collection.remove(_options,true);
            _callback(apiResult(true));
            db.close();
        })
    })
}

exports.selectData = selectData;
exports.insertData = insertData;
exports.setUpdateData = setUpdateData;
exports.pushUpdateData = pushUpdateData;
exports.removeData = removeData;
exports.selectDataList = selectDataList;
exports.editDataList = editDataList;

/*
mongoOperate(_collection,'select',{
    
},callback)*/
