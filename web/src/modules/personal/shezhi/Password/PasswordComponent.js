import React ,{Component} from 'react'
import '../../../../static/styles/common.scss'
import './Password.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as PasswordAction from './PasswordAction'

class PasswordComponent extends Component{
     constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }  
    change_psd(){
        let temp_psd= sessionStorage.getItem('password');
        let old=this.refs.old_psd.value;
        let newp=this.refs.new_psd.value;
        let comfirm =this.refs.comfirm.value;
        let yanzheng =this.refs.yanzheng.value;
        let reg=/^\w{6,20}$/
        if(old!==temp_psd){
            alert('原密码不正确')
            return false
        }
        if(!reg.test(newp)){
            alert('请输入6-20位密码')
        }
        if(comfirm!==newp){
            alert('请确认密码')
            return false
        }
        if(yanzheng!=='4k2742'){
            alert('验证码错误')
            return false
        }
       
        let acc_id= sessionStorage.getItem('accountid');
        this.props.changePassword(sessionStorage.getItem('usersPhone'),newp,acc_id);
        
         alert('密码修改成功')
         sessionStorage.setItem('password',newp);
         
         window.history.back(-1)
    }
    tupian(){
        alert('暂未开启此功能')
    }
    render(){
        
        return(
            <div className="password_change">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>修改密码</p>
                    <div onClick={this.change_psd.bind(this)}>确认</div>
                </header>
                <div className="change_password">
                   <form action="">
                        <input type="password" placeholder='原始密码' ref='old_psd'/>
                        <input type="password" placeholder='新密码' ref='new_psd'/>
                        <input type="password" placeholder='确认密码' ref='comfirm'/>
                   </form>
                   <div className='verify'>
                        <input type='text' placeholder='验证码' ref='yanzheng'></input>
                        <span></span>
                        <span onClick={this.tupian.bind(this)}>换一张</span>
                   </div>
                </div>
                
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    // loading: state.login.loading
    loading:state.changePsd.loading,
    data:state.changePsd.mydata
    
})
export default connect(mapStateToProps, PasswordAction )(PasswordComponent)