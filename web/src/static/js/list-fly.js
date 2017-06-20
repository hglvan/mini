import $ from 'jquery'
import g0 from '../imgs/g0.png'
import '../../static/libs/jquery.fly'


$(function(){

    // 购物车飞入效果
    $('.content-ts').on('click','.addBtn-ts', function(event){

        var offset = $('.qty-ts').offset(), flyer = $(`<img src="${g0}">`);
        flyer.fly({
            start: {
                left: event.clientX,
                top: event.clientY,
                width: 10,
                height: 10
            },
            end: {
                left: offset.left,
                top: offset.top - window.scrollY + 5,
                width: 10,
                height: 10
            }
        },function(){
            $('.qty-ts').css('background-color','yellow')
        });

    });
})