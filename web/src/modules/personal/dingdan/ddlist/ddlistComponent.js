import React, {Component} from 'react'
import './ddlist.scss'

export default class Ddmask extends Component{
    changestyle(event){
       console.log(event.target) 
       
       event.target.style.background='none'
       event.target.style.border=`1px solid red`
       
    }
    render(){
        if(!this.props.show){
            return null
        }        
        return (
            <div className="ddlist">
                <ul>
                    <li>
                        <span>全部订单</span>
                        <span onClick={this.changestyle.bind(this)}>已下单，等待支付</span>
                        <span>订单已提交</span>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <span>零食准备中</span>
                        <span>零食在路上</span>
                        <span>零食已收到</span>
                    </li>
                </ul>
                <ul>
                    <li><span>订单已取消</span></li>
                </ul>
            </div>
        )
    }
}