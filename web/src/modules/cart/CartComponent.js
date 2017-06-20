import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as CartAction from './CartAction';
import {router} from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import  SpinnerComponent from '../spinner/SpinnerComponent';
import '../../font/iconfont.css';
import './Cart.scss';





class CartComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalNum : Number(0),
            total : Number(0)
        };
    }
    
    componentDidMount(){
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            option : 'cart'
        }
        
        this.props.getCartMsg(obj)
        .then(
            response => {
                let total,totalNum;
                if(this.props.cartData[0]){
                    total = this.props.cartData.map(goods => ((parseFloat(goods.price) * Number(goods.num))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
                    totalNum = this.props.cartData.map(goods => (goods.num)).reduce((prev,cur) => prev + cur);
                }else {
                    total = 0;
                    totalNum = 0;
                }
    
                this.setState({
                    total,
                    totalNum
                });
                
                let obj = {
                    accountid : window.localStorage.getItem('accountid'),
                    addressid : window.localStorage.getItem('addressid'),
                    option : 'address'
                }
                
                this.props.getAddressMsg(obj)
            }
        )
    }
    
    componentDidUpdate(){
        if(!this.props.cartData[0]){
            this.refs.mainFull.style.display = 'none';
            this.refs.mainEmpty.style.display = 'block';
        }else {
            this.refs.mainFull.style.display = 'block';
            this.refs.mainEmpty.style.display = 'none';
        }
        
        
        if(!this.props.addressData[0]){
            this.refs.address.style.display = 'none';
            this.refs.addressEmpty.style.display = 'block';
        }else{
            this.refs.address.style.display = 'block';
            this.refs.addressEmpty.style.display = 'none';
        }
        
    }
    
    runBack() {
        window.history.back()
    }
    
    cutNum(goodsid) {
    
        this.props.cartData.forEach(goods =>{
            if(goods.goodsid === goodsid){
                if(goods.num > 1){
                    goods.num -= 1;
                }else{
                    goods.num = 1;
                }
            }
        })
    
        let total = this.props.cartData.map(goods => ((parseFloat(goods.price) * Number(goods.num))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
        let totalNum = this.props.cartData.map(goods => (goods.num)).reduce((prev,cur) => prev + cur);
        this.setState({
            total,
            totalNum
        });
    }
    
    addNum(goodsid) {
    
        this.props.cartData.forEach(goods =>{
            if(goods.goodsid === goodsid){
                goods.num = Number(goods.num) + 1;
            }
        })
    
        let total = this.props.cartData.map(goods => ((parseFloat(goods.price) * Number(goods.num))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
        let totalNum = this.props.cartData.map(goods => (goods.num)).reduce((prev,cur) => prev + cur);
        this.setState({
            total,
            totalNum
        });
    
    }
    
    removeDOM(goodsid){
        
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            option : 'cart',
            goodsid : goodsid
        }
        
        let carMsg = {
            accountid : window.localStorage.getItem('accountid'),
            option : 'cart'
        }
        
        this.props.deleteCartMsg(obj)
        .then(
            response => {
                this.props.getCartMsg(carMsg)
                .then(
                    response => {
                        let total = '';
                        let totalNum = '';
                        console.log(this.props.cartData)
                        if(this.props.cartData[0]){
                            total = this.props.cartData.map(goods => ((parseFloat(goods.price) * Number(goods.num))).toFixed(2)).reduce((prev,cur) => parseFloat(prev) + parseFloat(cur));
                            totalNum = this.props.cartData.map(goods => (goods.num)).reduce((prev,cur) => prev + cur);
                        }else {
                            total = 0;
                            totalNum = 0;
                        }
                        
                        this.setState({
                            total,
                            totalNum
                        });
                    }
                )
            }
        )
        
    }
    
    handleClose(){
        this.setState({open: false});
    };
    handleAddress(){
        window.location.hash = '/addressAdd'
    }
    
    moveToOrder(){
        if(!window.localStorage.getItem('addressid')){
            this.setState({open : true});
        }else {
            let obj = {
                accountid : window.localStorage.getItem('accountid'),
                goods : this.props.cartData,
                address : this.props.addressData,
                total : this.state.total,
                totalNum : this.state.totalNum
            };
    
            window.localStorage.setItem('order',JSON.stringify(obj));
            this.props.router.push('order');
            console.log(window.localStorage.getItem('order'))
        }
    }
    homeIcon(){
        window.location.hash = '/index'
    }
    
    render(){
        const actions = [
            <FlatButton
                label="留下"
                primary={true}
                onClick={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="写入地址"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleAddress.bind(this)}
            />,
        ];
        return (
            <div className="box">
                <div className="box-top">
                    <div className="box-ti-top">
                        <span className="iconfont icon-fanhui" onClick={this.runBack.bind(this)}></span>
                        <div className="title">购物袋</div>
                        <span className="iconfont icon-zhuye" onClick={this.homeIcon.bind(this)}></span>
                    </div>
                </div>
                    <div className="cart-main">
                        <div className="cart-address">
                            <div className="address-left" ref='address'>
                                <div className="menmsg clearfix">
                                    
                                    <div className="username">{this.props.addressData[0] && this.props.addressData[0].realName}</div>
                                    <div className="elephone">{this.props.addressData[0] && this.props.addressData[0].elephone}</div>
                                </div>
                                <div className="left-address clearfix">
                                    <span className="iconfont icon-dizhi"></span>
                                    <p className="left-li-add">
                                        {this.props.addressData[0] && this.props.addressData[0].address}
                                    </p>
                                </div>
                                <span className="main-msg"> <i className="iconfont icon-jinru"></i></span>
                            </div>
                            <div className="address-empty" ref="addressEmpty" onClick={this.handleAddress.bind(this)}>
                                <p>点击设置收货地址</p>
                                <span className="main-msg"> <i className="iconfont icon-jinru"></i></span>
                            </div>
                        </div>
                        <div className="main-main">
                            
                            <ul className="main-full" ref='mainFull'>
                                {this.props.cartData && this.props.cartData.map(function (item) {
                                    let str = "/src/static/imgs/img/" + item.imgurl;
        
                                    return (
                                        <li className="goods-li">
                                            <div className="goods-main">
                                                <div className="goodsimg">
                                                    <img src={str} alt=""/>
                                                </div>
                                                <div className="goodsright">
                                                    <span className="close-btn"  onClick={this.removeDOM.bind(this,item.goodsid)}>删除</span>
                                                    <div className="goodstil">{item.title}</div>
                                                    <div className="style-num">
                                                        <i className="num-cut" onClick={this.cutNum.bind(this,item.goodsid)}> - </i>
                                                        <span className="goodsnum"> {item.num} </span>
                                                        <span className="num-add" onClick={this.addNum.bind(this,item.goodsid)}> + </span>
                                                    </div>
                                                    <div className="goodsprice">{(parseFloat(item.price) * Number(item.num)).toFixed(2)}</div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }.bind(this))}
                                
                            </ul>
                            <div className="main-empty" ref='mainEmpty'>
                                <div className="empty-img1"><img src="./src/static/imgs/empty.png" alt=""/></div>
                                <div className="emtpytil">购物袋空空如也</div>
                            </div>
                        </div>
                    </div>
                    <div className="box-ti-footer">
                        <div className="footer-main">
                            <div className="footer-price">
                                <div className="true-price">{this.state.total}</div>
                                <div className="hasprice">0.0</div>
                            </div>
                            <div className="accounts-btn">
                                <button className="acc-btn" onClick={this.moveToOrder.bind(this)}>去结算</button>
                            </div>
                        </div>
                    </div>
                <Dialog
                    title="您还未有收货地址"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    现在去写入收货地址？
                </Dialog>
                <SpinnerComponent show = {this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.cart.loading,
    cartData : state.cart.cartData || [],
    addressData : state.cart.addressData || []
})

export default connect(mapStateToProps, CartAction)(CartComponent);


