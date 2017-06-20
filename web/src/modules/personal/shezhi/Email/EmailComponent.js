import React ,{Component} from 'react'
import '../../../../static/styles/common.scss'
import './Email.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as EmailAction from './EmailAction'

class EmailComponent extends Component{
     constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }
    changeemail(){
       alert('修改完成')
        let newEmail=this.refs.changeemail.value;
        sessionStorage.removeItem('email');
        sessionStorage.setItem('email',newEmail)
    }
    render(){
        return(
            <div className="email">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>修改邮箱</p>
                    <div onClick={this.changeemail.bind(this)}>确认</div>
                </header>
                <div className="change_email">
                    <span>邮箱 ：</span>
                    <input type="text" ref='changeemail' placeholder={sessionStorage.getItem('email')?sessionStorage.getItem('email'):'您还没有设置邮箱哟'} />
                </div>
                <p></p>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, EmailAction )(EmailComponent)