import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as DetailAction from './DetailAction';
import  SpinnerComponent from '../spinner/SpinnerComponent';
import Banner from '../banner/banner';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as Constant from '../../redux/commonConstant';

import '../../font/iconfont.css';
import './Detail.scss';


class DetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            goodsnum : 0,
            num : 1,
            open : false
        }
    }
    
    componentDidMount(){
        this.props.getProduct({goodsid:'1497331479118'});
    }
    
    runBack() {
        window.history.back();
    }
    
    
    
    handleClose(){
        this.setState({open: false});
    };
    handleLogin(){
        this.props.Router.push('login');
    }
    
    cutNum() {
        let num = this.state.num;
        if(--num < 1){
            num = 1;
        }
        this.setState({num : num});
    }
    addNum() {
        let num = this.state.num;
        this.setState({num : ++num});
    }
    addToCart(){
        
        let goods = this.props.detailData[0];
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            imgurl : goods.banner[0],
            title : goods.goodstittle,
            price : goods.nowprice,
            num : this.refs.num.innerText,
            goodsid : goods.goodsid
        }
        
        this.props.writeInCart(obj);
        
        let nowNum = this.state.goodsnum + this.state.num;
        
        this.setState({goodsnum: nowNum})
        
        
    }
    
    goToCart() {
        if(!window.localStorage.getItem('accountid')){
            this.setState({open: true})
        }else {
            this.props.router.push('cart');
        }
        
    }
    render(){
        const actions = [
            <FlatButton
                label="留下"
                primary={true}
                onClick={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="现在登录"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleLogin.bind(this)}
            />,
        ];
        return (
            <div className="box ">
                <div className="box-top">
                    <div className="box-ti-top">
                        <span className="iconfont icon-fanhui" onClick={this.runBack}></span>
                        <div className="title">{this.props.detailData && this.props.detailData[0].goodstittle}</div>
                        <span className="iconfont icon-zhuye"></span>
                    </div>
                </div>
                
                <div className="detail-main">
                    <div className="banner001">
                        {
                            this.props.detailData &&　<Banner
                                imgList = {
                                    this.props.detailData[0].banner.map(function (item) {
                                        return {src : Constant.baseUrl + item }
                                    })}
                                duration ="3000"
                            />
                        }
                        
                    </div>
                    <div className="msg">
                        <div className="main-msg" ref='title'>{this.props.detailData && this.props.detailData[0].goodstittle}</div>
                        <div className="sec-msg">{this.props.detailData && this.props.detailData[0].goodsmsg}</div>
                        <div className="price">
                            <span className="goodsprice" ref='price'>{this.props.detailData && this.props.detailData[0].nowprice}</span>
                        </div>
                    </div>
                    <div className="choice">
                        <div className="goodstyle">
                            <span className="style-val">选择：</span>
                            <div className="style-choice">{this.props.detailData && this.props.detailData[0].specs1}</div>
                        </div>
                        <div className="num">
                            <span className="style-val">选择：</span>
                            <div className="style-num">
                                <i className="num-cut" onClick={this.cutNum.bind(this)}> - </i>
                                <span className="goodsnum" ref="num"> {this.state.num} </span>
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
                            { this.props.detailData && this.props.detailData[0].photos.map(function (item) {
                                var res = Constant.baseUrl + item;
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
                            <span className="num" ref='goodsnum'> {this.state.goodsnum} </span>
                        </div>
                        <div className="cart">
                            <button className="cart-btn" onClick={this.addToCart.bind(this)}>加入购物车</button>
                        </div>
                    </div>
                </div>
                <Dialog
                    title="你还未登录"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    立刻去登录？
                </Dialog>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.detail.loading,
    detailData : state.detail.detailData
})

export default connect(mapStateToProps, DetailAction)(DetailComponent);
