import React ,{Component} from 'react'
import '../../static/styles/common.scss'
import './personal.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as personalAction from './personalAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import * as LoginAction from '../login/LoginAction'
import FooterComponent from './footer/FooterComponent'

class PersonalComponent extends Component{
     constructor(props){
        super(props)
       
        
    }
   componentWillMount(){
      
       
   }
    componentDidMount(){
        
       
    }
    change(){
        console.log(this)
        
        this.props.router.push('personal/AccountComponent')
       
    }
    tiaozhuang(){

        console.log(this.props)
        
    }
   todd(){
       this.props.router.push('personal/DingdComponent')
   }
   toyue(){
        this.props.router.push('personal/YueComponent')
   }
   toyouhui(){
       this.props.router.push('personal/YouhuiComponent')
   }
   tolingp(){
       this.props.router.push('personal/LpdetailComponent')
   }
   test(){
     
     sessionStorage.clear();
     window.location.hash="/index"
   }
   
    render(){
        return(
            <div className="personal_center">
                <header>
                    <p>我的Mini</p>
                </header>
                <div className='personal_container'>
                    <div id="banner" >
                        <div onClick={this.change.bind(this)}><link to="/login"></link></div>
                    <p onClick={this.change.bind(this)}>{sessionStorage.getItem('nickname')}</p>
                    <p onClick={this.test.bind(this)}><span>退出</span></p>
                    </div>
                    <div id="navbar">
                        <ul>
                            <li onClick={this.todd.bind(this)}><p><strong>0</strong><span>单</span></p><div><i></i>&nbsp;<span>我的订单</span></div></li>
                            <li onClick={this.toyue.bind(this)}><p><strong>￥0.00</strong><span></span></p><div><i></i>&nbsp;<span>账户余额</span></div></li>
                            <li onClick={this.toyouhui.bind(this)}><p><strong>0</strong><span>张</span></p><div><i></i>&nbsp;<span>优惠券</span></div></li>
                            <li onClick={this.tolingp.bind(this)}><p><strong>0</strong><span>张</span></p><div><i></i>&nbsp;<span>特权令牌</span></div></li>
                        </ul>
                    </div>
                    <main>
                        <ul>
                            <Link to="personal/AccountComponent"><li><strong className="iconfont icon-shezhi"></strong><p>账户设置</p><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                            <Link to="personal/KefuComponent"><li><strong className="iconfont icon-icon052"></strong><p>在线客服<span>(09:00-17:30)</span></p><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                            <li><strong className="iconfont icon-dianhua"></strong><p>电话客服</p><div>400-666-0000<i>(09:00-20:00)</i></div></li>
                            <Link to="personal/LingpComponent"><li><strong className="iconfont icon-denglvlingpai"></strong><p>特权令牌说明</p><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                            <Link to="personal/PsComponent"><li><strong className="iconfont icon-peisong"></strong><p>配送说明</p><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                        </ul>
                    </main>
                </div>
                <FooterComponent></FooterComponent>
                <SpinnerComponent show={this.props.loading}></SpinnerComponent>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
     loading: state.login.loading
})
export default connect(mapStateToProps, personalAction)(PersonalComponent)