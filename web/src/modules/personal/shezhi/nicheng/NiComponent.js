import React ,{Component} from 'react'
import '../../../../static/styles/common.scss'
import './Ni.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as NiAction from './NiAction'

class NiComponent extends Component{
     constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }
    changeNi(){
        alert('修改完成')
        let newN=this.refs.changeni.value;
        sessionStorage.removeItem('nickname');
        sessionStorage.setItem('nickname',newN)
       
    }
    render(){
        return(
            <div className="nicheng">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>修改昵称</p>
                    <div onClick={this.changeNi.bind(this)}>确认</div>
                </header>
                <div className="change_ni">
                    <span>昵称 ：</span>
                    <input type="text" ref='changeni' placeholder={sessionStorage.getItem('nickname')}/>
                </div>
                <p>&nbsp;&nbsp;注：4-20个字符，可由数字、字母、下划线、"-"等组成</p>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, NiAction)(NiComponent)