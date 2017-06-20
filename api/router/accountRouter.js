var db = require('../module/dbmodule');
var apiResult = require('../module/apiResult.module');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

exports.Register = function (app) {
    /**************************** account     *******************************************/
    app.post('/login', urlencodedParser, function(request, response){
        /*
        * username : ... ,
        * password : ...
        * */
        
        if(!request.body || !request.body.username){
            
            response.send(apiResult(false, '用户名不能为空！'));
            
        } else if(!request.body || !request.body.password){
            
            response.send(apiResult(false, '密码不能为空！'));
            
        } else {
            db.selectData('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        
                        response.send(apiResult(false, '用户名不存在！'));
                        
                    } else if(data[0].password != request.body.password){
                        
                        response.send(apiResult(false, '密码错误！'));
                        
                    } else {
                        response.send(result);
                    }
                }
            })
        }
    });
    
    //找回密码
     app.post('/logins', urlencodedParser, function(request, response){
        /*
        * username : ... ,
        * password : ...
        * */
        console.log('做忘记密码测试:',request.body.username)
        if(!request.body || !request.body.username){
            
            response.send(apiResult(false, '用户名不能为空！'));
            
        } else {
            db.selectData('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                    var data = result.data;
                    console.log('做忘记密码data测试:',data)
                } else {
                    var data = result.data;
                      console.log('做忘记密码data测试:',data)
                    if(!data[0]){
                        
                        response.send(apiResult(false, '用户名不存在！'));
                        
                    } else {
                        response.send(result);
                    }
                }
            })
        }
    });
    





    app.post('/register', urlencodedParser, function(request, response){
        /*
        * username : ... ,
        * password : ...
        *
        * */
        
        
        if(!request.body || !request.body.username){
            
            response.send(apiResult(false, '用户名不能为空！'));
            
        } else {
            
            db.selectData('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    
                    var data = result.data;
                    
                    if(data[0]){
                        
                        response.send(apiResult(false, '用户名已被注册'));
                        
                    } else {
                        var date = new Date();
                        
                        var data = request.body;
                        
                        var str = date.getFullYear() + '' + date.getMonth() + '' + date.getDate() + request.body.username;
                        data.accountid = str;
                        
                        db.insertData('account', data, function(insertResult){
                            
                            response.send(apiResult(true,'注册成功',null));
                            
                        })
                    }
                }
            })
        }
    })
    
    app.post('/accountmsg', urlencodedParser, function(request,response){
        
        //传入 id 其他信息
        /*
        *
        *   accountid : window.localstorage.getitem('accountid'),
        *   nickname : ... ,
        *   email : ... ,
        *
        * */
    
        if(!request.body || !request.body.accountid){
        
            response.send(apiResult(false, '没找到accountid！'));
        
        } else {
        
            db.selectData('account', {accountid: request.body.accountid}, function(result){
            
                if(!result.status){
                    
                    response.send(result);
                    
                } else {
                
                    var data = result.data;
                
                    if(!data[0]){
                    
                        response.send(apiResult(true, '无此用户！',[]));
                    
                    } else {
                        
                        //collection.update(_obj,{$set:_options},true,false);
                        //setUpdateData(_collection,_obj,_options,_callback)
                        
                        var _obj = {accountid : data[0].accountid};
                        
                        delete request.body.accountid;
                        
                        db.setUpdateData('account', _obj, request.body, function(insertResult){
                            
                            response.send(apiResult(true,'数据更新成功',null));
                            
                        })
                    }
                }
            })
        }
    })
    /******************************    cart  ***********************************/
    app.post('/cartMsg', urlencodedParser, function(request,response){
        
        //传入 id 其他信息
        /*     点击加入购物车
         *   accountid : window.localstorage.getitem('accountid'),
         *   goodsid : ... ,
         *   imgurl : ... ,
         *   title : ... ,
         *   price : ... ,
         *   num : ...
         * */
        console.log(request.body)
        if(!request.body || !request.body.accountid){
            
            response.send(apiResult(false, '没找到accountid！'));
            
        } else {
    
            db.selectData('cart', {accountid: request.body.accountid,goodsid : request.body.goodsid}, function(result){
                
                if(!result.status){
                    
                    response.send(result);
                    
                } else {
                    
                    var data = result.data;
                    
                    if(!data[0]){
                        
                        db.insertData('cart', request.body, function(insertResult){
                            
                            response.send(apiResult(true,'购物车添加成功',null));
                        })
                        
                    } else {
                        
                        //collection.update(_obj,{$set:_options},true,false);
                        //setUpdateData(_collection,_obj,_options,_callback)
                        
                        var _obj = {accountid : request.body.accountid, goodsid : request.body.goodsid};
                        
                        var num = parseInt(request.body.num) + parseInt(data[0].num);
                        
                        request.body.num = num + '';
                        
                        db.setUpdateData('cart', _obj, request.body, function(insertResult){
                            
                            response.send(apiResult(true,'购物车添加成功',null));
                            
                        })
                    }
                }
            })
        }
    })
    
    
    /********************************** address *************************************/

    app.post('/addressMsg', urlencodedParser, function(request,response){
    
        //传入 id 其他信息
        /*     点击加入购物车
         *   accountid : window.localstorage.getitem('accountid'),
         *   addressid : ... ,
         *   imgurl : ... ,
         *   title : ... ,
         *   price : ... ,
         *   num : ...
         * */
        
        // "address.$.address" : request.body.addressid
        // address : {$elemMatch : {addressid : request.body.addressid}}
        
        
        
        if(!request.body || !request.body.accountid){
        
            response.send(apiResult(false, '没找到accountid！'));
        
        } else {
            
            db.selectData('address', {accountid: request.body.accountid, addressid : request.body.addressid}, function(result){
            
                if(!result.status){
                
                    response.send(result);
                
                } else {
                    var data = result.data;
                
                    if(!data[0]){
                        
                        request.body.addressid = Date.now() + '';
                        
                        db.insertData('address', request.body, function(insertResult){
                        
                            response.send(apiResult(true,'地址添加成功',null));
                        })
                    
                    } else {
                    
                        //collection.update(_obj,{$set:_options},true,false);
                        //setUpdateData(_collection,_obj,_options,_callback)
                    
                        var _obj = {accountid : request.body.accountid, addressid : request.body.addressid};
                    
                        db.setUpdateData('address', _obj, request.body, function(insertResult){
                        
                            response.send(apiResult(true,'地址修改成功',null));
                        
                        })
                    }
                }
            })
        }
    })
    
    /********************************** order *************************************/
    
    app.post('/orderMsg', urlencodedParser, function(request,response){
        
        //传入 id 其他信息
        /*     点击加入购物车
         *   accountid : window.localstorage.getitem('accountid'),
         *   orderid : ... ,
         *   imgurl : ... ,
         *   title : ... ,
         *   price : ... ,
         *   num : ...
         * */
        
        // "address.$.address" : request.body.addressid
        // address : {$elemMatch : {addressid : request.body.addressid}}
        
        
        
        if(!request.body || !request.body.accountid){
            
            response.send(apiResult(false, '没找到accountid！'));
            
        } else {
            
            console.log('request.body',request.body)
            db.selectData('order', {accountid: request.body.accountid, orderid : request.body.orderid}, function(result){
                
                if(!result.status){
                    
                    response.send(result);
                    
                } else {
                    console.log('result',result)
                    var data = result.data;
                    
                    if(!data[0]){
                        
                        request.body.orderid = Date.now() + '';
                        
                        request.body.address = JSON.parse(request.body.address);
                        
                        request.body.goods = JSON.parse(request.body.goods);
                        
                        db.insertData('order', request.body, function(insertResult){
                            
                            response.send(apiResult(true,'订单生成成功',request.body.orderid));
                        })
                        
                    } else {
                        
                       response.send(apiResult(false,'该订单已经存在，不能修改',null))
                    }
                }
            })
        }
    })
    
    /*************************************  getMsg ***************************************/

    app.post('/getMsg', urlencodedParser, function(request,response){
    
        //传入 id 其他信息
        /*     点击加入购物车
         *   accountid : window.localstorage.getitem('accountid'),
         *   options : 'cart'
         * */
    
        // "address.$.address" : request.body.addressid
        // address : {$elemMatch : {addressid : request.body.addressid}}
    
    
    
        if(!request.body || !request.body.accountid){
        
            response.send(apiResult(false, '没找到accountid！'));
        
        } else {
    
            var _option = request.body.option;
            delete request.body.option;
            
            db.selectData(_option, request.body, function(result){
                
                console.log('getMsg',result)
                
                if(!result.status){
        
                    response.send(result);
        
                } else {
                    var data = result.data;
        
                    if(!data[0]){
            
                        response.send(apiResult(true,'未查找到任何信息',[]))
            
                    } else {
            
                        response.send(apiResult(true,null,result.data))
                    }
                }
            })
        }
    })
    
    /************************************** remove ********************************************/

    app.post('/remove', urlencodedParser, function(request,response){
    	
        //传入 id 其他信息
        /*     点击加入购物车
         *   accountid : window.localstorage.getitem('accountid'),
         *   options : 'cart'
         * */
    
        // "address.$.address" : request.body.addressid
        // address : {$elemMatch : {addressid : request.body.addressid}}
    
    
    
        if(!request.body || !request.body.accountid){
        
            response.send(apiResult(false, '没找到accountid！'));
        
        } else {
            
            var _option = request.body.option;
            delete request.body.option;
            db.removeData(_option, request.body, function(result){
    
                if(!result.status){
        
                    response.send(result);
        
                } else {
                    
                    response.send(apiResult(true,'数据删除成功'))
            
                }
            })
        }
    })
}
