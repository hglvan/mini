import React ,{Component} from 'react';
import './zhifubao.scss';
import ZhifubaoAction from './ZhifubaoAction'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'


class ZhifubaoComponent extends Component{
    back(){
        window.history.back(-1); 
    }
   
    render(){
        return(
             <div className="zhifubao">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>登录支付宝</p>
                    
                </header>
                <div className="zhi_content">
                    <form action="">
                        
                    </form>
                </div>
                
               
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.peisong.loading,
    
    
})

export default connect(mapStateToProps, ZhifubaoAction)(ZhifubaoComponent)