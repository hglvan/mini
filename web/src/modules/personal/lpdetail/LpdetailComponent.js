import React ,{Component} from 'react';
import {Router,Route,hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import './Lpdetail.scss'
import * as LpdetailAction from './LpdetailAction'
import $ from 'jquery'

class LpdetailComponent extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $('.lp_content >ul li:first-child').addClass('active')
    }
    back(){
        window.history.back(-1); 
    }
    lpcheck(event){
        
        event.preventDefault();
       
        $('.lp_content >ul li').removeClass('active')
        
        if(event.target.tagName=='SPAN'){
            $(event.target).closest('li').addClass('active')
        }else{
             event.target.className='active'
        }
       
    }
    tolingp(){
        this.props.router.push('personal/LingpComponent')
    }
    render(){
        return(
            <div className="lpdetail">
                 <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>特权令牌</p>
                    <strong onClick={this.tolingp.bind(this)}>使用说明</strong>
                </header>
                <div className="lp_content">
                    <ul>
                        <li onClick={this.lpcheck.bind(this)}>未使用(<span>0</span>)</li>
                        <li onClick={this.lpcheck.bind(this)}>使用记录(<span>0</span>)</li>
                        <li onClick={this.lpcheck.bind(this)}>已过期(<span>0</span>)</li>
                    </ul>
                    <div className="lp_c_detail">
                        <div style={{textAlign:'center',padding:'2%'}}>您现在暂无特权令牌信息</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
     loading: state.login.loading
})
export default connect(mapStateToProps, LpdetailAction)(LpdetailComponent)

