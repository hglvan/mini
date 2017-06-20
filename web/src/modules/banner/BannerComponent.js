import React, {Component} from 'react'
import $ from 'jquery'
import './Bannering.scss'

import banner1 from '../../static/imgs/banner1.jpg'
import banner2 from '../../static/imgs/banner2.jpg'
import banner3 from '../../static/imgs/banner3.jpg'
import banner4 from '../../static/imgs/banner4.jpg'

export default class Bannering extends Component{
    componentDidMount(){
        // 设置详情页轮播图
        var index = 0;
        show();
        
        function show(){
            if(index == $('.bigpic').find('li').length){
                index = 0;
            }else if(index < 0){
                index = $('.bigpic').find('li').length;//index=5;
            }

            $('.bigpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);

            $('.page').find('li').eq(index).addClass('active').siblings().removeClass('active');
        }
        //设置定时器
        var timer = setInterval(fAnimate,3000);
        function fAnimate(){
            index++;
            show();
        }

        $('.page').find('li').mouseenter(function(){
            index = $(this).index();
            show();
        });


        // 鼠标移入事件
        $('.bigpic').mouseenter(function(){
            clearInterval(timer);
        });
        $('.bigpic').mouseleave(function(){
            timer = setInterval(fAnimate,3000);
            show();
        })
        
    }

    render(){
        return (
        <div className="bannering">
            <div className="container">
            <div className="imgnav">
                <ul className="bigpic .clearfix">
                    <li className="active"><a><img src={banner1} /></a></li>
                    <li><a><img src={banner2} /></a></li>
                    <li><a><img src={banner3} /></a></li>
                    <li><a><img src={banner4} /></a></li>
                    
                </ul>
            
                <div className="page">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>              
            </div>
            </div>
        </div>
            
        )
    }
}