import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as footerActions from './FooterAction'

import './Footer.scss'

class FooterComponent extends React.Component{
    constructor(props){
        super(props)
    }

    footerHandler(){
        var url = window.location.hash;
        //url:#/goodslist?
        
        this.props.footer(url);
    }

    componentDidMount(){
        this.footerHandler();
    }

    enterIndex(){
        window.location.hash = '/';

    }
    enterGoodslist(){
        window.location.hash = '/goodslist';
        
    }

    enterCart(){
        window.location.hash = '/cart';
    }

    entergr(){
        window.location.hash = '/personal';
    }
    render(){
               
        return (
            <footer>
                <ul>
                    <li onClick={this.enterIndex} className="isLight1">
                        <i className="iconfont icon-shouyeshouye"></i>
                        <span>首页</span>
                    </li>
                    <li onClick={this.enterGoodslist}  className="isLight2">
                        <i  className="iconfont icon-tubiao3"></i>
                        <span>分类</span>
                    </li>
                    <li  onClick={this.enterCart} className="isLight3">
                        <i  className="iconfont icon-gouwudaishi"></i>
                        <span>购物袋</span>
                        <span className="qty-ts"></span>
                    </li>
                    <li onClick={this.entergr}  className="isLight4">
                        <i  className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </li>
                </ul>
            </footer>
            
        )
    }
}


const mapStateToProps = state =>({
    light:state.footer.light
})


//暴露出去
export default connect(mapStateToProps,footerActions)(FooterComponent)