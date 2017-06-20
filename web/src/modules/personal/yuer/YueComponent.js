import React ,{Component} from 'react';
import './Yue.scss';
import YueAction from './YueAction'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import Yuemask from '../../dialog/ddmaskComponent'
import Chargemask from '../../dialog/chargemaskComponent'
import MingxiComponent from '../mingxi/mingxiComponent'


class YueComponent extends Component{
    constructor(props){
        super(props)
        this.state={show:false}
    }
    back(){
        window.history.back(-1); 
    }
    tomingxi(){
        
        this.props.router.push('personal/YueComponent/MingxiComponent')
    }
    tocharge(){
         this.setState({show:true})
        let first_old=this.refs.first.innerHTML;
        let first_new=this.refs.first_pay.innerHTML;
        // console.log(first_old,first_new)
        this.setState({old:first_old,new:first_new})
    }
    tocharge1(){
        this.setState({show:true})
        let second_old=this.refs.second.innerHTML;
        let second_new=this.refs.second_pay.innerHTML;
        // console.log(second_old,second_new)
        this.setState({old:second_old,new:second_new})
    }
     tocharge2(){
        this.setState({show:true})
        let third_old=this.refs.third.innerHTML;
        let third_new=this.refs.third_pay.innerHTML;
        // console.log(third_old,third_new)
        this.setState({old:third_old,new:third_new})
    }
    onChildChanged(newState){
        // console.log(this)
        this.setState({show:newState})
    }
    render(){
        return(
             <div className="yue">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>账户余额</p>
                    <h4 onClick={this.tomingxi.bind(this)}>明细</h4>
                </header>
                <div className="yue_content">
                    <div className="yue_banner">
                        <img src={require('../../../static/imgs/zengjia4.png')} alt=""/>
                    </div>
                    <div className="yue_yue">
                        <h4>可用余额：<span>￥<span>0.00</span></span></h4>
                    </div>
                    <div className="yue_charge">
                        <h5>充值</h5>
                        <div className="y_c_content">
                            <ul>
                                <li>
                                    <div><span></span></div>
                                    <div>
                                        <strong>￥<span ref="first">100</span></strong>
                                        <span>实付:￥<strong ref="first_pay">100</strong></span>
                                    </div>
                                    <div><span onClick={this.tocharge.bind(this)}>立即充值</span></div>
                                </li>
                                <li>
                                    <div>额外赠送：<span>1小时加速令1个、0元包邮令1个</span></div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <div><span></span></div>
                                    <div>
                                        <strong >￥<span ref="second">300</span></strong>
                                        <span>实付:￥<strong ref='second_pay'>285</strong></span>
                                    </div>
                                    <div><span onClick={this.tocharge1.bind(this)}>立即充值</span></div>
                                </li>
                                <li>
                                    <div>额外赠送：<span>1小时加速令2个、0元包邮令2个、9元包邮令2个</span></div>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <div><span></span></div>
                                    <div>
                                        <strong >￥<span ref="third">500</span></strong>
                                        <span>实付:￥<strong ref="third_pay">450</strong></span>
                                    </div>
                                    <div><span onClick={this.tocharge2.bind(this)}>立即充值</span></div>
                                </li>
                                <li>
                                    <div>额外赠送：<span>1小时加速令4个、0元包邮令4个</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mn_tip">
                        <h6>说明：</h6>
                        <p>1、账户余额用于支付本网站商品订单。</p>
                        <p>2、充值付款成功后，账户余额将自动增加对应的充值金额，充值完成后，恕不退款，不能转让其他账号，不能兑换现金。</p>
                        <p>3、关于账户余额的最终解释权归Mini零食所有。</p>
                    </div>
                </div>
                <Yuemask show={this.state.show}></Yuemask>
               <Chargemask show={this.state.show} callbackParent={this.onChildChanged.bind(this)} price={{old:this.state.old,new:this.state.new}}></Chargemask>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.peisong.loading,
    
    
})

export default connect(mapStateToProps, YueAction)(YueComponent)