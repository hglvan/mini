import React ,{Component} from 'react'
import './ddfirst.scss'
import { Router, Route, hashHistory, Link,router } from 'react-router'
import {connect} from 'react-redux'
import * as ddfirstAction from './ddfirstAction'


class DdfirstComponent extends Component{
     constructor(props){
        super(props)     
    }
   componentWillMount(){  
       
   }
    componentDidMount(){      
       
    }
   todddetail(){
       this.props.router.push('personal/DingdComponent/Dddetail')
   }
   topay(){
       console.log(666)
        this.props.router.push('personal/zhifubao')
   }
    render(){
        return(
            <div className="ddfirst">
               <ul>
                    <li onClick={this.todddetail.bind(this)}>
                        <div><span>订单号: </span><strong>1170617143383272</strong></div><i>已下单，等待支付</i>
                    </li>
                    <li onClick={this.todddetail.bind(this)}>
                        <div>
                            <img src={require('../../../../static/imgs/test1.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test2.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test3.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test4.jpg')} alt="泡面"/>
                        </div>
                        <p><strong>共 <span>10</span> 件</strong><span className='iconfont icon-xiangyoujiantou'></span></p>
                    </li>
                    <li>
                        <div>
                            <span>实付款 : </span>￥<strong>40.0</strong>
                        </div>
                        <div>
                            <span  onClick={this.topay.bind(this)}>去支付</span>
                            <span>取消订单</span>
                        </div>
                        
                    </li>
               </ul>
               <ul>
                    <li onClick={this.todddetail.bind(this)}>
                        <div><span>订单号: </span><strong>1170617143383272</strong></div><i>已下单，等待支付</i>
                    </li>
                    <li onClick={this.todddetail.bind(this)}>
                        <div>
                            <img src={require('../../../../static/imgs/test1.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test2.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test3.jpg')} alt="泡面"/>
                            <img src={require('../../../../static/imgs/test4.jpg')} alt="泡面"/>
                        </div>
                        <p><strong>共 <span>10</span> 件</strong><span className='iconfont icon-xiangyoujiantou'></span></p>
                    </li>
                    <li>
                        <div>
                            <span>实付款 : </span>￥<strong>40.0</strong>
                        </div>
                        <div>
                            <span onClick={this.topay.bind(this)}>去支付</span>
                            <span>取消订单</span>
                        </div>
                        
                    </li>
               </ul>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
     loading: state.login.loading
})
export default connect(mapStateToProps, ddfirstAction)(DdfirstComponent)