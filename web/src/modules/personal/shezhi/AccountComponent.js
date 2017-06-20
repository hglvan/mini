import React ,{Component} from 'react'
import '../../../static/styles/common.scss'
import './Account.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as AccountAction from './AccountAction'

class AccountComponent extends Component{
     constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }
    render(){
        return(
            <div className="account">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>账户设置</p>
                </header>
                <ul>
                    <Link to="personal/AccountComponent/NiComponent"><li><span>昵称</span><strong>{sessionStorage.getItem('nickname')}</strong><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                   <Link to="personal/AccountComponent/EmailComponent"><li><span>邮箱</span><strong>{sessionStorage.getItem('email')}</strong><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                    <Link to="personal/AccountComponent/PasswordComponent"><li><span>密码</span><strong>修改密码</strong><i className="icon-xiangyoujiantou iconfont"></i></li></Link>
                </ul>
               
               
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, AccountAction)(AccountComponent)