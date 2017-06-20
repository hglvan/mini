import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as OrderAction from './OrderAction';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import * as Contant from '../../redux/commonConstant';

import  SpinnerComponent from '../spinner/SpinnerComponent';
import '../../font/iconfont.css';
import '../../static/styles/animate.css';
import './Order.scss';

const styles = {
    button : {
        height : 45
    }
};

class OrderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            currentCheck : 'thr',
            istrue : {fir:false,sec:false,thr:true},
            choice : 1,
            goods : [],
            address : [],
            total : '',
            totalNum : '',
            totalprice : ''
            
        }
    }
    componentDidMount(){
        let str = JSON.parse(window.localStorage.getItem('order'));
        
        /*let goods = this.state.goods;
        let address = this.state.address;
        let total = this.state.total;
        let totalNum = this.state.totalNum;*/
        
        let goods = str.goods;
        let address = str.address;
        let total = str.total;
        let totalNum = str.totalNum;
        
        let totalprice = (parseFloat(str.total) + 5.0).toFixed(2);
        this.setState({
            goods,
            address,
            total,
            totalNum,
            totalprice
        })
    }
    listdown(){
        
        this.refs.list.classList.toggle('start')
    }
    
    handleOpen(){
        let str = JSON.parse(window.localStorage.getItem('order'));
        var _page = this.refs[this.state.currentCheck].innerText;
        
        console.log(_page)
        let obj = {
            accountid : str.accountid,
            goods : JSON.stringify(str.goods),
            address : JSON.stringify(str.address),
            total : str.total,
            totalNum : str.totalNum,
            totalprice : this.state.totalprice,
            page : _page
        }
        
        this.props.sendOrdertMsg(obj)
        .then(
            response => {

                this.setState({open: true});
                window.localStorage.setItem('orderid',response.body.data);

                let obj = {
                    accountid : window.localStorage.getItem('accountid'),
                    option : 'cart'
                }

                this.props.removeCartMsg(obj)
            }
        )
        .then(
            response => {

                console.log(response)
            }
        )
    };
    
    handleClose(){
        this.setState({open: false});
    };
    handleMain(){
        this.setState({open:false})
    }
    handleDetail(){
        this.props.router.push('personal/DingdComponent')
    }
    CheckChange(str){
        let istrue = this.state.istrue;
        let currentCheck = str;
        
        for(var item in istrue){
            istrue[item] = false;
            if(item == currentCheck){
                istrue[item] = true;
                this.setState({
                    currentCheck
                })
            }
        }
    }
    
    tabs(event){
        let value = Number(event.target.getAttribute('data-id'));
        this.setState({choice : value})
        switch (value){
            case 1:
                this.props.router.push('index');
                break;
            case 2:
                this.props.router.push('goodslist');
                break;
            case 3:
                this.props.router.push('cart');
                break;
            case 4:
                this.props.router.push('personal');
                break;
        }
    }

    backIcon(){
        window.history.back(-1)
    }
    render(){
        
        const actions = [
            <FlatButton
                label="再逛一逛"
                primary={true}
                onClick={this.handleMain.bind(this)}
            />,
            <FlatButton
                label="付款"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleDetail.bind(this)}
            />,
        ];
        
        return (
            <div className="container">
                <div className="order-head">
                    <div className="head-title">
                        <div className="back-work" onClick={this.backIcon.bind(this)}>
                            <IconButton >
                                <i className="iconfont icon-fanhui"></i>
                            </IconButton>
                        </div>
                        <div className="title">
                            确认订单
                        </div>
                        <div className="list-work" onClick={this.listdown.bind(this)}>
                            <IconButton >
                                <i className="iconfont icon-fenlei"></i>
                            </IconButton>
                        </div>
                    </div>
                    <div className="head-ul" ref="list">
                        <Tabs value={this.state.choice} onClick={this.tabs.bind(this)}>
                            <Tab icon={<i className="iconfont icon-zhuye" data-id="1"/>} value={1}/>
                            <Tab icon={<i className="iconfont icon-tubiao3" data-id="2"/>} value={2}/>
                            <Tab icon={<i className="iconfont icon-gouwudai" data-id="3"/>} value={3}/>
                            <Tab icon={<i className="iconfont icon-zhanghu" data-id="4"/>} value={4}/>
                        </Tabs>
                    </div>
                </div>
                <div className="order-main">
                    <div className="order-address">
                        <div className="dr-xun">
                            <span className="dr-name">{this.state.address[0] && this.state.address[0].realName}</span>
                            <span className="dr-ele">{this.state.address[0] && this.state.address[0].elephone}</span>
                        </div>
                        <div className="dr-add">{this.state.address[0] && this.state.address[0].address}</div>
                    </div>
                    <div className="order-select">
                        <div className="or-se-ch1">
                            <div className="or-se-ch1-ti" ref="fir">账户余额支付</div>
                            <div className="or-se-ch1-money">
                                <div className="or-se-msg">
                                    当前余额:
                                    <span className="money">888.0</span>
                                    <span className="money-msg" style={{display : 'none'}}>(余额不足)</span>
                                </div>
                            </div>
                            <div className="or-se-check clearfix" >
                                <div style={styles.block} onClick={this.CheckChange.bind(this,'fir')}>
                                    <Checkbox
                                        style={styles.radioButton}
                                        checked = {this.state.istrue.fir}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="or-se-ch2">
                            <div className="or-se-ti" ref="sec">支付宝</div>
                            <div className="or-se-check clearfix">
                                
                                <div style={styles.block} onClick={this.CheckChange.bind(this,'sec')}>
                                    <Checkbox
                                        style={styles.radioButton}
                                        checked = {this.state.istrue.sec}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="or-se-ch3">
                            <div className="or-se-ti" ref='thr'>货到付款</div>
                            <div className="or-se-check clearfix">
                                <div style={styles.block} onClick={this.CheckChange.bind(this,'thr')}>
                                        <Checkbox
                                            style={styles.radioButton}
                                            checked = {this.state.istrue.thr}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-ti-msg">
                        <div className="order-xx-img">
                            <ul>
                                {this.state.goods.map(function (item) {
                                    let str = Contant.baseUrl + item.imgurl;
                                    return <li><img src= {str} alt=""/></li>
                                })}
                                
                            </ul>
                        </div>
                        <div className="order-xx-ti">
                            共 <span>{this.state.totalNum}</span> 件
                        </div>
                        <div className="order-xx-icon">
                            <IconButton >
                                <i className="iconfont icon-jinru"></i>
                            </IconButton>
                        </div>
                    </div>
                    <div className="order-dr-beizhu">
                        <label htmlFor="order-ps">备注</label>
                         <input type="text" id="order-ps" placeholder="限50字"/>
                    </div>
                    <div className="order-dr-price">
                        <div className="or-pr-msg clearfix">
                            <span className="or-pr-ti">原价总额：</span>
                            <em className="or-pr-pr goodsprice">{this.state.total}</em>
                        </div>
                        <div className="or-pr-msg clearfix">
                            <span className="or-pr-ti">运费：</span>
                            <em className="or-pr-pr goodsprice">5.0</em>
                        </div>
                    </div>
                </div>
                <div className="order-footer">
                    <div className="or-fo-tl">
                        <div className="or-fo-totalprice">
                            实付款：
                            <span className="totalprice">{this.state.totalprice}</span>
                        </div>
                        <div className="or-fo-btn">
                            <RaisedButton
                                label="提交订单"
                                primary={true}
                                fullWidth={true}
                                style = {styles.button}
                                onClick={this.handleOpen.bind(this)}
                            />
                            <Dialog
                                title="订单提交成功"
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose.bind(this)}
                            >
                                是否立刻去付款
                            </Dialog>
                        </div>
                    </div>
                    
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.order.loading,
    orderData : state.order.orderData
})

export default connect(mapStateToProps,OrderAction)(OrderComponent)

