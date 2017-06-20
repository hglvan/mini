import React,{Component} from 'react'
import {connect} from 'react-redux'
import ReactRouter,{Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
import $ from 'jquery'
import * as fun from '../../static/js/index'

import * as rootActions from './RootAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/FooterComponent'
import BannerComponent from '../banner/BannerComponent'
import HeaderComponent from '../indexsearch/Search-downComponent'

import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './Root.scss'
import * as img from '../../static/data/indexImg.js'


class RootComponent extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(img.default.nav1);
        console.log(localStorage.getItem('usename'))
    }
    change(){
       
        this.props.router.push('register');
       
    }
     change1(){
       
        this.props.router.push('login');
       
    }
     enterGoodslist(){
        window.location.hash = '/goodslist';
    }

    componentDidMount(){
       //返回顶部
        fun.fly();

        //导航栏搜索入口
        $('.nav-ts ul').not($('.nav-big')).on('click','li',function(){
            window.location.hash = '/list?classify='+$(this).find('span').text();
        });
        $('.nav-big').on('click','li',function(){
            window.location.hash = '/personal/LingpComponent';
        })


        //列表搜索入口
        $('#menu').on('click','ul>li',function(){
            window.location.hash = '/list?classify=' + $(this).children('a').text();
        })

        //点击搜索入口
        $('#icon-menu').on('click',function(){
            Search();
        });
        //enter键索入口
        document.onkeydown = function(e){
            if(e.keyCode ==13){
                Search();
            }
        }

        function Search(){
            if($('#infomation').val()){
                window.location.hash = '/search?classify=' + $('#infomation').val();
                console.log($('#infomation').val(),333)
            }else{
                alert('请输入搜索关键字');
            }
        }


        //点击单个商品
        $('.goodsList-ts').on('click','ul>li>div',function(){
            window.location.hash = '/detail?goodsid='+$(this).attr('class');
        });

    }


    
 
   render(){
        return(
            <div className="container-ts">

                <header>
                    <ul>
                        <span  className="iconfont icon-fenlei" onClick={this.enterGoodslist}></span>
                        <span><i className="iconfont icon-dizhi"></i></span>
                        <span>
                            <input  id="infomation" type="text" placeholder="搜索商品名称" />
                        </span>
                        <span  className="iconfont icon-sousuo-sousuo"  id="icon-menu"></span>
                    </ul>
                </header>

                <div className="content-ts">
                    <HeaderComponent />
                    {/*--轮播图--*/}
                    <div className="banner-ts">
                        <BannerComponent />

                    </div>

                    <div className="nav-ts">
                        <ul>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav1}/></a>
                                <span>无辣不欢</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav2}/></a>
                                <span>网红爆品</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav3}/></a>
                                <span>剁手尖货</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav4}/></a>
                                <span>低卡纤身</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav5}/></a>
                                <span>吃遍全球</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav6}/></a>
                                <span>优选水果</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav7}/></a>
                                <span>冰镇饮料</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav8}/></a>
                                <span>冰淇淋雪糕</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav9}/></a>
                                <span>当日炒货</span>
                            </li>
                            <li  onClick={this.enterlist}>
                                <a><img src={img.default.nav10}/></a>
                                <span>咔吃咔吃</span>
                            </li>
                        </ul>

                        <ul className="nav-big">
                            <li><a><img src={img.default.nav11}/></a></li>
                            <li><a><img src={img.default.nav12}/></a></li>
                        </ul>
                    </div>

                    <div className="goodsList-ts">
                        <ul>
                            <li>
                                <div  className="1497255662423"><a><img src={img.default.g1}/></a></div>
                                <p><a><span>韩国进口农心牛肉味碗面</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>6.5<i>/86g</i></b><br/><strike>￥6.8</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497331215246"><a><img src={img.default.g2} /></a></div>
                                <p><a><span>农心兵卒一口脆咖喱味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>3.0<i>/70g</i></b><br/><strike>￥3.3</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497321636710" ><a><img src={img.default.g3} /></a></div>
                                <p><a><span>合味道油炸方便面香辣牛肉风味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>4.9<i>/83g</i></b><br/><strike>￥5.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497322759356" ><a><img src={img.default.g4} /></a></div>
                                <p><a><span>韩国进口烤王香脆鱼片（辣味）</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>8.8<i>/22g</i></b><br/><strike>￥9.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497323144591" ><a><img src={img.default.g5} /></a></div>
                                <p><a><span>印尼进口奥嘉莱印尼虾片火辣味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.9<i>/22g</i></b><br/><strike>￥3.3</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497323647025" ><a><img src={img.default.g6} /></a></div>
                                <p><a><span>盛禾韩拉面韩国汤味油炸型辣白菜方便面</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>8.5<i>/65g</i></b><br/><strike>￥9.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                        </ul>
                    </div>


                    <div className="nav-ts">
                        <ul className="nav-big">
                            <li><a><img src={img.default.nav13}/></a></li>
                        </ul>
                    </div>

                     <div className="goodsList-ts">
                        <ul>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497359967139" ><a><img src={img.default.g21}/></a></div>
                                <p><a><span>冰镇美年达橙味果味汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497360119261" ><a><img src={img.default.g22}/></a></div>
                                <p><a><span>冰镇美汁源果粒橙橙汁饮料</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.9<i>/450ml</i></b><br/><strike>￥3.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497360240793" ><a><img src={img.default.g23}/></a></div>
                                <p><a><span>冰镇七喜冰爽柠檬味汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497360240793" ><a><img src={img.default.g24}/></a></div>
                                <p><a><span>冰镇北冰洋橙汁汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497360504478" ><a><img src={img.default.g25}/></a></div>
                                <p><a><span>冰镇可口可乐零度汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497361039026" ><a><img src={img.default.g26}/></a></div>
                                <p><a><span>冰镇统一绿茶茉莉味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.2<i>/500ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>

                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497361236563" ><a><img src={img.default.g27}/></a></div>
                                <p><a><span>冰镇百事可乐汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497361411533" ><a><img src={img.default.g28}/></a></div>
                                <p><a><span>冰镇雪碧清爽柠檬味汽水</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/330ml</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                     
                        </ul>
                    </div>



                    <div className="nav-ts">
                        <ul className="nav-big">
                            <li><a><img src={img.default.nav14}/></a></li>
                        </ul>
                    </div>
                    <div className="goodsList-ts">
                        <ul>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497348906189"><a><img src={img.default.g31}/></a></div>
                                <p><a><span>泰国进口榴的华金枕头榴莲干</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>16.5<i>/30g</i></b><br/><strike>￥17.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497349093084" ><a><img src={img.default.g32}/></a></div>
                                <p><a><span>三只松鼠夏威夷果</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>18.5<i>/185g</i></b><br/><strike>￥19.0</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497349296880" ><a><img src={img.default.g33}/></a></div>
                                <p><a><span>洽洽焦糖瓜子</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>5.2<i>/108g</i></b><br/><strike>￥5.8</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497349513465" ><a><img src={img.default.g34}/></a></div>
                                <p><a><span>泰国进口小老板海苔原味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>8.0<i>/32g</i></b><br/><strike>￥8.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497351581786" ><a><img src={img.default.g35}/></a></div>
                                <p><a><span>台湾进口77松塔酥饼</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>16.5<i>/192g</i></b><br/><strike>￥16.8</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497351744636" ><a><img src={img.default.g36}/></a></div>
                                <p><a><span>越南进口沙巴哇综合蔬果干</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>10.9<i>/100g</i></b><br/><strike>￥12.0</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497351930327" ><a><img src={img.default.g37}/></a></div>
                                <p><a><span>印度尼西亚进口Richeese丽芝士奶酪威化</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.0<i>/58g</i></b><br/><strike>￥2.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497348206710" ><a><img src={img.default.g38}/></a></div>
                                <p><a><span>旺旺碎冰冰果味饮料柑桔味（冷冻）</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.0<i>/78ml</i></b><br/><strike>￥1.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497348611868" ><a><img src={img.default.g39}/></a></div>
                                <p><a><span>蒙牛哈蜜蜜雪糕</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.2<i>/65g</i></b><br/><strike>￥1.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497354928453" ><a><img src={img.default.g311}/></a></div>
                                <p><a><span>蒙牛冰+雪糕芒果口味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.9<i>/75g</i></b><br/><strike>￥2.0</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497355110063" ><a><img src={img.default.g312}/></a></div>
                                <p><a><span>蒙牛绿色心情</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.5<i>/70g</i></b><br/><strike>￥1.8</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497355265754" ><a><img src={img.default.g313}/></a></div>
                                <p><a><span>伊利冰工厂山楂</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.2<i>/70g</i></b><br/><strike>￥1.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-ts">
                        <ul className="nav-big">
                            <li><a><img src={img.default.nav15}/></a></li>
                        </ul>
                    </div>

                    <div className="goodsList-ts">
                        <ul>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497354381899" ><a><img src={img.default.g41}/></a></div>
                                <p><a><span>立顿黄牌精选红茶</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>11.5<i>/50g</i></b><br/><strike>￥12.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497354489589" ><a><img src={img.default.g42}/></a></div>
                                <p><a><span>三元冰岛式酸奶</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>3.9<i>/200g</i></b><br/><strike>￥4.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497354638470" ><a><img src={img.default.g43}/></a></div>
                                <p><a><span>蒙牛单果粒酸牛奶黄桃味</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.8<i>/100ml</i></b><br/><strike>2.0</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">特价</span>
                                <div className="1497354847381" ><a><img src={img.default.g44}/></a></div>
                                <p><a><span>韩国进口海牌海苔</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.5<i>/2g</i></b><br/><strike>￥1.8</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497354979780" ><a><img src={img.default.g45}/></a></div>
                                <p><a><span>鲜引力即食柠檬片</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.1<i>/16g</i></b><br/><strike>￥2.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497355144162" ><a><img src={img.default.g46}/></a></div>
                                <p><a><span>西麦西澳阳光红枣牛奶燕麦片28g</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>1.2<i>/28g</i></b><br/><strike>￥1.5</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <span className="tips-shuoming">热销</span>
                                <div className="1497355254694" ><a><img src={img.default.g47}/></a></div>
                                <p><a><span>波力海苔</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>3.0<i>/4.5g</i></b><br/><strike>￥3.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                            <li>
                                <div className="1497355457663" ><a><img src={img.default.g48}/></a></div>
                                <p><a><span>苏伯菠菜蛋花汤8g</span></a></p>
                                <p>
                                    <a><span className="price-ts">
                                        <b><em>￥</em>2.9<i>/8g</i></b><br/><strike>￥3.2</strike>
                                    </span></a>
                                    <span className="iconfont icon-gouwudai"></span>
                                </p>
                            </li>
                        </ul>
                    </div>


                    <div className="footnav-ts">
                        <ul>
                            <li  onClick={this.change1.bind(this)}><a>登录</a></li>
                            <li onClick={this.change.bind(this)}><a>注册</a></li>
                            <li ><a>联系客服</a></li>
                            <li className="toTop"><a>回到顶部</a></li>
                        </ul>
                    </div>

                    <div className="iconfont icon-dingbu toTop"></div>
                </div>

                
                <FooterComponent />
                <SpinnerComponent show={this.props.loading} />
            </div>

        )
    }
}


//rooting对象在router中定义
const mapStateToProps_root = state =>({
    loading:state.rooting.loading
})
// console.log(mapStateToProps_root)

//暴露出去
export default connect(mapStateToProps_root,rootActions)(RootComponent)