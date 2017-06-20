import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as DetailAction from './DetailAction';
import  SpinnerComponent from '../spinner/SpinnerComponent';
import Banner from '../banner/banner';

import '../../font/iconfont.css';
import './Detail.scss';


const IMAGE_DATA = [
    {
        src: './src/static/imgs/huo_long/6520699366.jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/6520699366.jpg',
        alt: 'images-1',
    }
];
const IMAGE_DATA2 = [
    {
        src: './src/static/imgs/huo_long/276.jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/a_01(2).jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/a_02(2).jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/a_03(2).jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/a_04(2).jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/a_05(1).jpg',
        alt: 'images-1',
    },
    {
        src: './src/static/imgs/huo_long/268.jpg',
        alt: 'images-1',
    }
];

class DetailComponent extends Component{
    constructor(props){
        super(props);
    }
     change(){
        console.log(this)
        
        this.props.router.push('index')
       
    }
    componentDidMount(){
        this.props.getProduct(this.props.location.query);
        
    }
    
    runBack() {
        window.history.back();
    }
    cutNum(event) {
        var num = parseInt(this.refs.num.innerText);
        this.refs.num.innerText = --num;
        if(num <= 1){
            this.refs.num.innerText = 1;
        }
        
    }
    addToCart(){
        
        let goodsList = window.localStorage.getItem('goodsList');
        goodsList = goodsList ? JSON.parse(goodsList) : [];
        
        let obj = {
            imgurl : this.props.banner[0],
            title : this.props.data[0].goodstittle,
            price : this.props.data[0].nowprice,
            num : this.refs.num.innerText,
            id : this.props.data[0].goodsid
        }

        //判断商品是否存在
        let hasGoods = false;
        for(let i=0;i<goodsList.length;i++){
            if(goodsList[i].id === obj.id){
                hasGoods = true;
                goodsList[i].num = parseInt(goodsList[i].num) + parseInt(obj.num) ;
                // 写入本地存储
                localStorage.setItem('goodsList',JSON.stringify(goodsList));
                break;
            }
        }
        
        //如果不存在
        if(!hasGoods){
            goodsList.push(obj);
            localStorage.setItem('goodsList',JSON.stringify(goodsList));
        }
        
        localStorage.setItem('goodsList',JSON.stringify(goodsList));
        
        this.refs.goodsnum.innerText = parseInt(this.refs.goodsnum.innerText) +  parseInt(obj.num);
        console.log(window.localStorage.getItem('goodsList'))
        
    }
    addNum() {
        var num = parseInt(this.refs.num.innerText);
        this.refs.num.innerText = ++num;
    }
    goToCart() {
        window.location.href = './index.html#/cart';
    }
    render(){
        return (
            <div className="box ">
                <div className="box-top">
                    <div className="box-ti-top">
                        <span className="iconfont icon-fanhui" onClick={this.runBack}></span>
                        <div className="title">{this.props.istrue && this.props.data[0].goodstittle}</div>
                        <span className="iconfont icon-zhuye" onClick={this.change.bind(this)}></span>
                    </div>
                </div>
                
                <div className="detail-main">
                    <div className="banner001">
                        {
                            this.props.istrue && <Banner
                                show = {this.props.loading}
                                imgList = {
                                    this.props.banner.map(function (item) {
                                        return {src : './src/static/imgs/img/'+ item }
                                    })}
                                duration ="3000"
                            />
                        }
                        
                    </div>
                    <div className="msg">
                        <div className="main-msg" ref='title'>{this.props.istrue && this.props.data[0].goodstittle}</div>
                        <div className="sec-msg">{this.props.istrue && this.props.data[0].goodsmsg}</div>
                        <div className="price">
                            <span className="goodsprice" ref='price'>{this.props.istrue && this.props.data[0].nowprice}</span>
                        </div>
                    </div>
                    <div className="choice">
                        <div className="goodstyle">
                            <span className="style-val">选择：</span>
                            <div className="style-choice">{this.props.istrue && this.props.data[0].specs1}</div>
                        </div>
                        <div className="num">
                            <span className="style-val">选择：</span>
                            <div className="style-num">
                                <i className="num-cut" onClick={this.cutNum.bind(this)}> - </i>
                                <span className="goodsnum" ref="num"> 1 </span>
                                <span className="num-add" onClick={this.addNum.bind(this)}>+</span>
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <div className="other-send">
                            <span className="other-til">配送范围:</span>
                            <span className="send-place">Mini零食配送范围覆盖区</span>
                        </div>
                        <div className="other-service">
                            <span className="other-til">服<i></i>务:</span>
                            <span className="service-check">
                                <a href="javascript:void(0)">全场包邮</a>
                                <a href="javascript:void(0)">1小时速达</a>
                                <a href="javascript:void(0)">超时免单</a>
                            </span>
                            <p className="other-other">(限Mini零食配送范围)</p>
                        </div>
                    </div>
                    <div className="chioce-banner">
                        <p className="tuijian">爆品推荐</p>
                        <div className="tuodong">
                            <div className="the-banner">
                                <div className="jiangjia-goods">
                                    <div className="jiangjia-img">
                                        <a href="javascript:void(0)">
                                            <img src="./src/static/imgs/huo_long/6100349779.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <p className="jiangjia-til">
                                        冰镇庞各庄小西瓜（附赠勺子）
                                    </p>
                                    <div className="jiangjia-price">
                                        <span className="true-price">15.9</span>
                                        <span className="false-price">5.9</span>
                                    </div>
                                </div>
                                <div className="jiangjia-goods">
                                    <div className="jiangjia-img">
                                        <a href="javascript:void(0)">
                                            <img src="./src/static/imgs/huo_long/2423021384.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <p className="jiangjia-til">
                                        冰镇栗源多果多滋糖水黄桃果杯
                                    </p>
                                    <div className="jiangjia-price">
                                        <span className="true-price">5.9</span>
                                        <span className="false-price">5.9</span>
                                    </div>
                                </div>
                                <div className="jiangjia-goods">
                                    <div className="jiangjia-img">
                                        <a href="javascript:void(0)">
                                            <img src="./src/static/imgs/huo_long/3838242739.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <p className="jiangjia-til">
                                        八喜棒绿茶口味
                                    </p>
                                    <div className="jiangjia-price">
                                        <span className="true-price">5.9</span>
                                        <span className="false-price">7.9</span>
                                    </div>
                                </div>
                                <div className="jiangjia-goods">
                                    <div className="jiangjia-img">
                                        <a href="javascript:void(0)">
                                            <img src="./src/static/imgs/huo_long/9156286273.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <p className="jiangjia-til">
                                        哈根达斯冰淇淋比利时巧克力味
                                    </p>
                                    <div className="jiangjia-price">
                                        <span className="true-price">25.0</span>
                                        <span className="false-price">34.0</span>
                                    </div>
                                </div>
                                <div className="jiangjia-goods">
                                    <div className="jiangjia-img">
                                        <a href="javascript:void(0)">
                                            <img src="./src/static/imgs/huo_long/8957444382.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <p className="jiangjia-til">
                                        冰镇红牛维生素功能饮料
                                    </p>
                                    <div className="jiangjia-price">
                                        <span className="true-price">5.9</span>
                                        <span className="false-price">6.2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show-img">
                        <p className="show-til">商品详情</p>
                        <ul>
                            { this.props.istrue && this.props.photos.map(function (item) {
                                var res = './src/static/imgs/img/' + item;
                                return <li className="show-li clearfix"><img src= {res} alt={item.alt}/></li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-ft-title">
                        <div className="kefu">
                            <i className="iconfont icon-kefu"></i>
                            <span className="kefu-title">客服</span>
                        </div>
                        <div className="gouwudai">
                            <i className="iconfont icon-gouwudai"></i>
                            <span className="gowu-title" onClick={this.goToCart.bind(this)}>购物袋</span>
                            <span className="num" ref='goodsnum'>0</span>
                        </div>
                        <div className="cart">
                            <button className="cart-btn" onClick={this.addToCart.bind(this)}>加入购物车</button>
                        </div>
                    </div>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.detail.loading,
    istrue : state.detail.istrue,
    banner : state.detail.banner || [],
    data : state.detail.data,
    photos : state.detail.photos
})

export default connect(mapStateToProps, DetailAction)(DetailComponent);
