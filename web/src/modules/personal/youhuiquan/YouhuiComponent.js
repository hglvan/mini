import React ,{Component} from 'react';
import './Youhui.scss';
import YouhuiAction from './YouhuiAction'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'


class YouhuiComponent extends Component{
    back(){
        window.history.back(-1); 
    }
    alhave(){
        this.refs.alhave.style.borderBottom=`1px solid #bf2943`
        this.refs.alhave.style.color='#bf2943'
        this.refs.nohave.style.borderBottom=`none`
        this.refs.nohave.style.color='#000'
    }
    nohave(){
        this.refs.alhave.style.borderBottom=`none`
        this.refs.nohave.style.borderBottom=`1px solid #bf2943`
        this.refs.nohave.style.color='#bf2943'
        this.refs.alhave.style.color='#000'
    }
    render(){
        return(
             <div className="youhui">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>优惠券</p>
                    
                </header>
                <ul>
                    <li onClick={this.alhave.bind(this)} ref="alhave">可使用优惠券(<span>0</span>)</li>
                    <li onClick={this.nohave.bind(this)} ref="nohave">已使用/已过期(<span>0</span>)</li>
                </ul>
                <div className="you_content"></div>
               
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.peisong.loading,
    
    
})

export default connect(mapStateToProps, YouhuiAction)(YouhuiComponent)