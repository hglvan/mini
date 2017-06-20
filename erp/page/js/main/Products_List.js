$(function () {

    
    
    //产品 - 生成
    $.post(erp.baseUrl +'getProductsList',{},function (response) {
        console.log(response.data[1].banner)
        createGoodsList(response);

        
    });
   
     
    
    $('.btn_search').click(function () {
        console.log( $('.text_add').val())
        $.post(erp.baseUrl +'searchProducts',{
            keyword : $('.text_add').val()
        },function (response) {
            console.log('aa',response)
            if(response.data.length > 0){
                createGoodsList(response);
            }else{
                alert('暂未发现该商品');
            }
            
            
        })
    })

    $('#editbtn').html('9999')
    $('.side_list').on('click','li.level1',function(){
        event.preventDefault();
        $.post(erp.baseUrl +'searchProducts',{
            keyword : $(this).text()
        },function (response) {
            console.log(response)
            if(response.data.length > 0){
                createGoodsList(response);
            }else{
                  alert('暂未发现该商品');
            }
        
        
        })
        
    })
    
    //初始化宽度、高度
    $(".widget-box").height($(window).height()-215);
    $(".table_menu_list").width($(window).width()-260);
    $(".table_menu_list").height($(window).height()-215);
    //当文档窗口发生改变时 触发
    $(window).resize(function(){
        $(".widget-box").height($(window).height()-215);
        $(".table_menu_list").width($(window).width()-260);
        $(".table_menu_list").height($(window).height()-215);
    })
    
   /* laydate({
        elem: '#start',
        event: 'focus'
    });*/
    
    $("#products_style").fix({
        float : 'left',
        //minStatue : true,
        skin : 'green',
        durationTime :false,
        spacingw:30,//设置隐藏时的距离
        spacingh:260,//设置显示时间距
    });
    
    
    //******树状图******
    var setting = {
        view: {
            dblClickExpand: false,
            showLine: false,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable:true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: ""
            }
        },
        callback: {
            beforeClick: function(treeId, treeNode) {
            
            }
        }
    };
    
    var zNodes =[
        { id:1, pId:0, name:"商城分类列表", open:true},
        { id:11, pId:1, name:"无辣不欢"},
       
        { id:12, pId:1, name:"网红爆品"},
       
        { id:13, pId:1, name:"剁手尖货"},
       
        { id:14, pId:1, name:"低卡纤身"},
   
        { id:15, pId:1, name:"吃遍全球"},
      
        { id:17, pId:1, name:"优选水果"},
      
        { id:18, pId:1, name:"冰镇饮料"},
        { id:18, pId:1, name:"冰淇淋雪糕"},
        { id:18, pId:1, name:"当日炒货"},
        { id:18, pId:1, name:"咔吃咔吃"}
       
    ];
   
    var code;
    function showCode(str) {
        if (!code) code = $("#code");
        code.empty();
        code.append("<li>"+str+"</li>");
    }
    
    var t = $("#treeDemo");
    t = $.fn.zTree.init(t, setting, zNodes);
    demoIframe = $("#testIframe");
    $.fn.zTree.getZTreeObj("tree");
    
    
    $('table th input:checkbox').on('click' , function(){
        var that = this;
        $(this).closest('table').find('tr > td:first-child input:checkbox')
        .each(function(){
            this.checked = that.checked;
            $(this).closest('tr').toggleClass('selected');
        });
        
    });
    
    
    $('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
    function tooltip_placement(context, source) {
        var $source = $(source);
        var $parent = $source.closest('table')
        var off1 = $parent.offset();
        var w1 = $parent.width();
        
        var off2 = $source.offset();
        var w2 = $source.width();
        
        if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
        return 'left';
    }
    
    
    //面包屑返回值
    // var index = parent.layer.getFrameIndex(window.name);
    // parent.layer.iframeAuto(index);
    $('.Order_form').on('click', function(){
        var cname = $(this).attr("title");
        var chref = $(this).attr("href");
        var cnames = parent.$('.Current_page').html();
        var herf = parent.$("#iframe").attr("src");
        parent.$('#parentIframe').html(cname);
        parent.$('#iframe').attr("src",chref).ready();;
        parent.$('#parentIframe').css("display","inline-block");
        parent.$('.Current_page').attr({"name":herf,"href":"javascript:void(0)"}).css({"color":"#4c8fbd","cursor":"pointer"});
        parent.layer.close(index);
        
    });
    
    var oTable1;
    function createGoodsList(response) {
        console.log(response)
        if(oTable1){
            oTable1.fnClearTable();
            oTable1.fnDestroy();
        }
   
        $('#goodslist').html(response.data.map(function (item) {
            var price = parseInt(item.goodsprice) * 1.2;
            price = price.toFixed(2);
            // console.log(item.goodsimg)
            var place = item.goodsplace || '中国';
            console.log(item.goodstittle)
            var date = item.date || '2017-5-23 11:11:11';
            return `<tr>
                            <td width="25px"><label><input type="checkbox" class="ace" ><span class="lbl"></span></label></td>
                            <td width="80px" id="goodsID">${item.goodsid}</td>
                            <td width="80px" id="goodspic"><img src="../../img/${item.banner[0]}" alt="" style="width:120px"></td>
                            <td width="160px"><u style="cursor:pointer" class="text-primary" onclick="">${item.goodstittle}</u></td>
                            <td width="100px">${item.goodsmsg}</td>
                            <td width="100px">${item.nowprice}元</td>
                            <td width="100px">${item.weight}</td>
                            <td width="100px">${item.classify1}</td>

                            <td width="180px">${date}</td>
                           <td class="text-l" width="100px">${item.specs1}</td>
                            <td class="td-status"><span class="label label-success radius">上架中</span></td>
                            <td class="td-manage">
                            <a  id="startbtn" href="javascript:;" title="下架"  class="btn btn-xs btn-success"><i class="icon-ok bigger-120"></i></a>
                            <a title="编辑"  id="editbtn"  href="javascript:;"  class="btn btn-xs btn-info" ><i class="icon-edit bigger-120"></i></a>
                            <a title="删除" href="javascript:;"  id="removebtn" class="btn btn-xs btn-warning" ><i class="icon-trash  bigger-120"></i></a>
                            </td>
                        </tr>`;
        }).join(''));
    
        $('#goodsnum').html(response.length);
    
        $('#goodslist').on('click','#startbtn',function (e,id) {
            if($(this).attr('title') == '下架'){
                layer.confirm('确认要停用吗？',function(index){
                    $(this).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs " id="startbtn" href="javascript:;" title="上架"><i class="icon-ok bigger-120"></i></a>');
                    $(this).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已下架</span>');
                    $(this).remove();
                    layer.msg('已下架!',{icon: 5,time:1000});
                }.bind(this));
            }else{
                layer.confirm('确认要启用吗？',function(index){
                    $(this).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs btn-success" id="startbtn" href="javascript:;" title="下架"><i class="icon-ok bigger-120"></i></a>');
                    $(this).parents("tr").find(".td-status").html('<span class="label label-success radius">已上架</span>');
                    $(this).remove();
                    layer.msg('已上架!',{icon: 6,time:1000});
                }.bind(this));
            }
        })
        .on('click','#editbtn',function(){

            var goodsid =  $(this).parents('tr').find('#goodsID').html();
           
             $('.widget-box').hide();
             $('.page_right_style').show();
            $.post(erp.baseUrl +'editProductsList',{goodsid:goodsid},function (response) {
     
                         var obj = response.data[0]; 
          
                         $('#goodstitle1').val(obj.goodstittle);
                         $('#goodsmsg').val(obj.goodsmsg);
                        $('#weight').val(obj.weight);                     
                        $('#oldprice').val(obj.oldprice);
                        $('#nowprice').val(obj.nowprice);
                        $('#specs1').val(obj.specs1);
                        $('#specs2').val(obj.specs2);
                        $('#specs3').val(obj.specs3);
                        $('#classify1').val(obj.classify1);
                         var banner = obj.banner;
                         var photos = obj.photos;  
                         console.log( banner)


                        //提交编辑
                        $('#subBtn').click(function(){
                                           
                             $.post(erp.baseUrl + 'btneditProductsList',{
                                    goodsid:obj.goodsid,
                                    goodstittle: $('#goodstitle1').val(),
                                    goodsmsg:$('#goodsmsg').val(),
                                    weight: $('#weight').val(),
                                    oldprice: $('#oldprice').val(),
                                    nowprice: $('#nowprice').val(),
                                    specs1:$('#specs1').val(),
                                    specs2:$('#specs2').val(),
                                    specs3:$('#specs3').val(),
                                    banner:JSON.stringify(obj.banner),
                                    photos:JSON.stringify(obj.photos)
                                },function(res){
                                    console.log(res);
                                    if(res.status){
                                        alert('修改商品成功！')
                                        location.reload();
                                    }else{
                                        alert('修改商品失败，请重新修改！')
                                    }                                                                       
                               });   


                    









                    })


                 });

        })
        .on('click','#removebtn',function (e,id) {
            layer.confirm('确认要删除吗？',function(index){
                $(this).parents("tr").remove();
                console.log($(this).parents('tr').find('#goodsID').html())
                $.post(erp.baseUrl +'removeProduct',{
                    goodsid: $(this).parents('tr').find('#goodsID').html()
                },function (response) {
                    $('#goodsnum').html($('#goodsnum').html() - 1);

                   
                })
            
                layer.msg('已删除!',{icon:1,time:1000});
            }.bind(this));
        
        })

        //取消编辑
        $('.btn-default').click(function(){
            $('.widget-box').show();
            $('.page_right_style').hide();
        })
    




    
        /*产品-编辑*/
        function member_edit(title,url,id,w,h){
            // layer_show(title,url,w,h);
        }
    
        // $('#sample-table').dataTable().fnDestroy();
        
        oTable1 = $('#sample-table').dataTable( {
            "bDestory" : true,
            "aaSorting": [[ 1, "desc" ]],//默认第几个排序
            "bStateSave": true,//状态保存
            "aoColumnDefs": [
                //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
                {"orderable":false,"aTargets":[0,2,3,4,5,8,9]}// 制定列不参与排序
            ] } );
        
        
        
        
    }
    
  
})




