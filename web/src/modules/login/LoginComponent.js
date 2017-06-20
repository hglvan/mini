// var React = require('react')
// var Component = React.Component;
// var React, {Component} = require('react');

// var ReactRouter = require('react-route');

// var {Router, Route, Link} = ReactRouter

// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var Link = ReactRouter.Link

// import {Router, Route, Link} from 'React-Router'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../../static/styles/login.scss'
import $ from 'jquery'

// var ReactRouter = require("react-router");
// var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;
import ReactRouter,{Router, Route, hashHistory, Link, IndexRoute, browserHistory} from "react-router"





// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends React.Component {
 

    componentDidMount() {

        $('.gb').click(function() {

            $(this).hide().prev().val('');

        })


        $('.login_l').click(function(){

                history.go(-1);
        })

        $('input').focus(function(){

             $('.ts').html('');

        })
        
         var bol =false;
        $('.save').click(function(){
            console.log(99)
            if(!bol){
                $(this).css('backgroundPosition','-9.6875rem -8.96875rem');
                bol = true;
            }else{
                 $(this).css('backgroundPosition','-9.6875rem -7.6875rem');
                  bol = false;
            }
            
        })

        var bol1 =false;
        $('.sea_psw').click(function(e){
           e.preventDefault();
            if(!bol1){
                $('#pwdBox').show();
                bol1 = true;
            }else{
                  $('#pwdBox').hide();
                  $('.pswout').html('');
                  $('.czuser').val('');
                  bol1 = false;
            }
            
        })


    }

    //找回密码
    xzpws(){

        let obj = {username:this.refs.czuser.value}
        this.props.logins(obj).then(
                response => {
            if(response.body.status){
                 $('.pswout').html('密码:'+response.body.data[0].password)
            }else{
                $('.pswout').html('该用户名不存在')
            }        
      })
    }

    constructor(props){
        super(props)
    }


    showclose(){

        if (this.refs.hg.value.length) {
            $('.phone').show();
            console.log(111)
          
        } else {
            $('.phone').hide();
          
        }

        if (this.refs.psw.value.length) {
            $('.psw').show();
            console.log(111)
          
        } else {
            $('.psw').hide();
          
        }


    }


    loginHandler(){
        // console.log(loginActions)
        // this.router.push('register')
        // if(!this.refs.username){
        //     //show up dialog => username cannot empty
        //     return
        // } else if(!this.refs.password){
        //     //show up dialog => password cannot empty
        //     return 
        // }
        
       //  this.props.login(this.refs.username.value, this.refs.password.value)
       // console.log(this.props)

       if(this.refs.hg.value&&this.refs.psw.value){


        this.props.login(this.refs.hg.value, this.refs.psw.value).then(
                response => {
                    // console.log(response, response.query, response.body.message)
                    // console.log(response.body)
                    if (!response.body.status) {
                        // if (response.body.message === "") {

                        // }
                       $('.ts').html('登录失败,请检查账号或密码');
                    } else {
                        this.props.loading = true;
                        alert('登录成功');
                        window.localStorage.setItem('accountid',response.body.data[0].accountid)     
                        sessionStorage.setItem('accountid',response.body.data[0].accountid);
                        sessionStorage.setItem('usersPhone',this.refs.hg.value);
                        sessionStorage.setItem('password',this.refs.psw.value);
                        sessionStorage.setItem('nickname','cc'+parseInt(Math.random()*1000000000));
                        window.history.back(-1);                         
                        
                    }
                })
       }

    }

    render(){
        return(
            <div className="all">
                <div className="login_header">
                    <span className="login_l"></span>
                    <span className="login_vip">会员登录</span>
                    <span></span>
                </div>
                <div className="login_content">
                    <ul className="oul">
                        <li>
                            <span></span>
                            <input type="text" placeholder="请输入您的手机号码" ref='hg'onInput={this.showclose.bind(this)}/>
                            <i className="iconfont icon-cuo gb phone"></i>
                        </li>
                        <li>
                            <span className="ps"></span>
                            <input type="password" placeholder="请输入您的密码" ref='psw'onInput={this.showclose.bind(this)}/>
                            <i className="iconfont icon-cuo gb psw"></i>
                        </li>
                        <li className="gl ts"></li>
                        <li className="gl">
                            <div className="login_btn" onClick={this.loginHandler.bind(this)}>立即登录</div>
                        </li>
                        <li className="gl">
                            <span className="save"></span>
                            <i>保存登录15天</i>
                        </li>
                        <li className="gl">
                          
                            <Link to="/register" className="go_register">立即注册</Link>
                            <a href="" className="sea_psw">忘记密码？</a>
                        </li>
                    </ul>
                </div>
                <div className="login_footer">
                        <div className="qq">
                        <i className="iconfont icon-qq"></i>
                        <p>QQ登录</p>
                        </div>
                        <div className="wb">
                        <i className="iconfont icon-weibo"></i>
                        <p>微博登录</p>
                        </div>                        
                </div>
                <div id="pwdBox">
                    用户名:<input type="text" ref="czuser" className="czuser"/><input type="button" value="确认" className="xzpsw" onClick={this.xzpws.bind(this)}/>
                    <p className="pswout" ref="pswout"></p>
                </div>
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
    loading: state.login.loading
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent