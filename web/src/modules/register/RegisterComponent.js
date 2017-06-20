// var React = require('react')
// var Component = React.Component;
// var React, {Component} = require('react');

// var ReactRouter = require('react-route');

// var {Router, Route, Link} = ReactRouter

// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var Link = ReactRouter.Link

// import {Router, Route, Link} from 'React-Router'

import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as RegisterAction from './RegisterAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../../static/styles/register.scss'
import {
    Router, hashHistory, browserHistory
}
from 'react-router'
import $ from 'jquery'
    // @connect(
    //     state => ({
    //         loading: state.login.loading
    //     }),
    //     loginActions
    // )

class RegisterComponent extends React.Component {

    componentDidMount() {

        $('.gb').click(function() {

            $(this).hide().prev().val('');
        })
        $('.login_l').click(function(){
            console.log(23)
                history.go(-1);
        })

        $('input').focus(function(){

             $('.ts').html('');

        })
       var str = '0123456789';
        var rel = '';
        for (var i = 0; i < 5; i++) {
            rel += str[parseInt(Math.random() * str.length)];
        }
        $('.code').html(rel);

         var bol =false;
        $('.regsave').click(function(){
            console.log(99)
            if(!bol){
                $(this).css('backgroundPosition','-9.6875rem -8.96875rem');
                bol = true;
            }else{
                 $(this).css('backgroundPosition','-9.6875rem -7.6875rem');
                  bol = false;
            }
            

        })


    }


    constructor(props) {
        super(props)
    }


    // loginHandler() {
     
    //     this.props.login(this.refs.username.value, this.refs.password.value)
    //     console.log(this.props)
    // }

    getcode() {
        console.log(111)
        var str = '0123456789';
        var rel = '';
        for (var i = 0; i < 5; i++) {
            rel += str[parseInt(Math.random() * str.length)];
        }
        $('.code').html(rel);
    }

    showclose() {
         var bal, bal1, bal2,bal3,bal4;
        if (this.refs.hg.value.length) {
            $('.plone').show();
            bal = true;
          
        } else {
            $('.plone').hide();
            bal = false;
        }
         if (this.refs.yzm.value.length) {
          
            bal1 = true;    
        } else{
             bal1 = false;
        }
         if (this.refs.yzms.value.length) {
          
            bal2 = true;    
        } else{
             bal2 = false;
        }

        if (this.refs.psw.value.length) {
            $('.psw').show();
             bal3 = true; 
        } else {
            $('.psw').hide();
             bal3 = false;
        }
        
        if (this.refs.psws.value.length) {
            $('.psws').show();
            bal4 = true; 
        } else {
            $('.psws').hide();
             bal4 = false;
        }

        if(bal&&bal1&&bal2&&bal3&&bal4){
                $('.register_btn').css('backgroundColor','#CF596C');
        }else{
                 $('.register_btn').css('backgroundColor','#bfbfbf')
        }


    }


    ajax() {

        var bal, bal1, bal2,bal3,bal4;

        if (/^1[34578]\d{9}$/.test(this.refs.hg.value)) {

            bal = true;
        }else{
              $('.ts').html('亲亲,手机格式不对哦');
              return false;

        }

       console.log(this.refs.yzm.value == $('.code').html())
         if(this.refs.yzm.value == $('.code').html()){
                bal3 = true;
               
        }else{
            $('.ts').html('验证码不一致');
             return false;
            
        }
         if($('.code').html() == $('.jj').val()){
                bal4 = true;
               
        }else{
            $('.ts').html('验证码不一致');
             return false;
            
        }

        if (/\w{6,20}$/.test(this.refs.psw.value)) {
            bal1 = true;

        }else{
             $('.ts').html('亲亲,密码格式不对哦');
        }

       
        
        if (this.refs.psw.value == this.refs.psws.value) {
            bal2 = true;

        }else{
             $('.ts').html('亲亲,密码不一致哦');
        }

        if (bal && bal1 && bal2&&bal3&&bal4) {
            // console.log('reg',this.props.reg)
           
            this.props.register(this.refs.hg.value, this.refs.psw.value).then(
                response => {                   
                console.log('进来了',this.props.reg)
                    if (!this.props.reg) {
                       
                        alert('用户已注册')
                    } else {
                       
                        alert('注册成功');
                        hashHistory.push('login');
                    }
        })

    }
}


    render() {
       

        return ( 

        <div className="all">
            <div className="login_header">
                <span className="login_l"> </span>
                <span className="login_vip">会员注册</span>
                <span> </span>
            </div>
            <div className="register_content">
                <ul className="oul">
                    <li>
                        <span> 手机号码 </span>
                        <input type="text" placeholder="请输入您的手机号码" ref="hg" onInput={ this.showclose.bind(this)} className="plonenum" />
                        <i className="iconfont icon-cuo gb plone"></i>
                            
                    </li>
                    <li>
                        <span className="ps"> 验证码</span>                                       
                        <input type="text" placeholder="请输入验证码" className="yzm" ref='yzm' onInput={ this.showclose.bind(this)}/>
                        <i className="code" onClick={this.getcode}> 67687 </i>
                    </li>
                    <li>
                        <span> 短信校验码</span>                       
                        <input type="text" className="jj" ref='yzms' placeholder="请输入校验码" onInput={ this.showclose.bind(this)}/>
                        <i className="jym"> 获取校验码</i>                               
                    </li>
                    <li>
                        <span> 设置密码 </span>
                        <input type="password" placeholder="请输入6-20位密码" ref="psw" onInput={ this.showclose.bind(this) } />
                        <i className="iconfont icon-cuo gb psw"> </i>
                    </li>
                    <li>
                        <span> 确认密码 </span>
                        <input type="password" placeholder="再次输入密码" ref="psws" onInput={ this.showclose.bind(this) } />
                        <i className="iconfont icon-cuo gb psws"> </i>
                    </li>
                    <li className="gl ts">
                    </li>
                    <li className="gl">
                        <div className="register_btn" onClick={ this.ajax.bind(this) }>注册 </div>
                    </li>
                </ul>
            </div>
            <div className="login_footer">
                <span className="dd regsave">
                </span><span>同意</span> <a>《迷你零食用户注册协议》</a> </div>
        </div>

        )
    }


}

// <ul>
//     <li><input type="text" ref="username"/></li>
//     <li><input type="text" ref="password"/></li>
//     <li><input type="button" className="btn" value="登录" onClick={this.loginHandler.bind(this)}/></li>
//     <li>{this.props.loading + ''}</li>
// </ul>
// <SpinnerComponent show={this.props.loading}/>
const mapStateToProps = state => ({
    loading: state.register.loading,
    reg:state.register.reg,
    istrue:state.register.istrue
})
export default connect(mapStateToProps, RegisterAction)(RegisterComponent)
    // export default LoginComponent
