import React ,{Component} from 'react'
import './dddetail.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as DddetailAction from './dddetailAction'


class DddetailComponent extends Component{
     constructor(props){
        super(props)     
    }
   componentWillMount(){  
       
   }
    componentDidMount(){      
       
    }
   back(){
        
        window.history.back(-1)
    }
    render(){
         return(
            <div className="dddetail">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>订单详情</p>
                    
                </header>
                <div className="dd_content">
                    <div className="order_part order_msg">
                        <p><span className="a_left le_sp">订单号：</span><span className="a_right">1170617143383272</span></p>
                        <p><span className="a_left">订单状态：</span><span className="a_right">已下单，等待支付</span></p>
                        <p><span className="a_left">订单金额：</span><span className="a_right">￥49.6</span></p>
                        <p><span className="a_left">支付方式：</span><span className="a_right">在线支付</span></p>
                        <p><span className="a_left">下单时间：</span><span className="a_right">2017/6/17 14:33:21</span></p>
                        <p><span className="a_left le_sp">收货人：</span><span className="a_right">234</span></p>
                        <p><span className="a_left">收货地址：</span><span className="a_right">朝阳公园南路甲2号北京市朝阳区人民法院  斯蒂芬</span></p>
                        <p><span className="a_left">送达时间：</span><span className="a_right"></span> </p>
                        <p><span className="a_left">订单备注：</span><span className="a_right"></span></p>
                    </div>
                    <div className='order_second'>
                            <div className="second_header">商品列表</div>
                            <div className="second_body">
                                <ul>
                                    <li>
                                        <div><img src={require('../../../../static/imgs/test1.jpg')} alt=""/></div>
                                        <div>
                                            <p>韩国进口农心牛肉味碗面7777777 86g</p>
                                            <span>￥6.5</span>
                                        </div>
                                        <div>
                                            <span>X 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div><img src={require('../../../../static/imgs/test1.jpg')} alt=""/></div>
                                        <div>
                                            <p>韩国进口农心牛肉味碗面888888 86g</p>
                                            <span>￥6.5</span>
                                        </div>
                                        <div>
                                            <span>X 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div><img src={require('../../../../static/imgs/test1.jpg')} alt=""/></div>
                                        <div>
                                            <p>韩国进口农心牛肉味碗面999999 86g</p>
                                            <span>￥6.5</span>
                                        </div>
                                        <div>
                                            <span>X 1</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='order_third'>
                        <div className="order_part pay_msg">
                            <p><span className="p_left">原价总额：</span><span className="p_right o_money">￥49.6</span></p>
                            <p><span className="p_left">优惠金额：</span><span className="p_right o_money">￥0.0</span></p>
                            <p><span className="p_left">优惠券金额：</span><span className="p_right o_money">-￥0.0</span></p>
                            <p><span className="p_left">运费：</span><span className="p_right o_money">￥0.0</span></p>
                            
                            <h5><span>实付款： <i id="total_money">￥49.6</i></span></h5>
                         </div>
                            
                    </div>
                </div>
                <div className='dd_footer'>
                    <div className="dd_f_left">
                        <p>付款剩余时间 : </p>
                        <p><span>5</span> 小时 <span>0</span> 分</p>
                    </div>
                    <div className="dd_f_rigth">
                        <span>去付款</span>
                        <span>取消订单</span>
                    </div>
                </div>
            </div>
            
        )
    }
       
    
}
const mapStateToProps = state => ({
     loading: state.login.loading
})
export default connect(mapStateToProps, DddetailAction)(DddetailComponent)