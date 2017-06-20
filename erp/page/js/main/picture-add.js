
$(function() {
   
    $(document).ready(function () {
        //初始化宽度、高度
        $(".widget-box").height($(window).height());
        $(".page_right_style").height($(window).height());
        $(".page_right_style").width($(window).width() - 220);
        
        //当文档窗口发生改变时 触发
        $(window).resize(function () {
            $(".widget-box").height($(window).height());
            $(".page_right_style").height($(window).height());
            $(".page_right_style").width($(window).width() - 220);
        });
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
                var zTree = $.fn.zTree.getZTreeObj("tree");
                if (treeNode.isParent) {
                    zTree.expandNode(treeNode);
                    return false;
                } else {
                    demoIframe.attr("src",treeNode.file + ".html");
                    return true;
                }
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
       
        { id:16, pId:1, name:"吃遍全球"},
       
        { id:17, pId:1, name:"优选水果"},
      
        { id:18, pId:1, name:"冰镇饮料"},
        { id:18, pId:1, name:"冰淇淋雪糕"},
        { id:18, pId:1, name:"当日炒货"},
        { id:18, pId:1, name:"咔吃咔吃"}
      
    ];
    var code;
    // function showCode(str) {
    //     if (!code) code = $("#code");
    //     code.empty();
    //     code.append("<li>"+str+"</li>");
    // }
    
    // var t = $("#treeDemo");
    // t = $.fn.zTree.init(t, setting, zNodes);
    // demoIframe = $("#testIframe");
    // var zTree = $.fn.zTree.getZTreeObj("tree");
    // console.log(111)
    //文件上传
    $('#subBtn').click(function(){
        
        $('#form-article-add').ajaxSubmit({
            type: 'post',
            url: erp.baseUrl + 'upload',
            success:function(data){
                console.log(data);
                console.log($('.formControls').find('input').val(''))
                alert('上传成功');

            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
                console.log(XmlHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })

       
    })








   

 



    
})


