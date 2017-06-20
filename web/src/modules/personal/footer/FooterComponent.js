import React, {Component} from 'react'
import './Footer.scss'

export default class Footer extends Component{
    enterIndex(){
        window.location.hash = '/index';
    }
    enterGoodslist(){
        window.location.hash = '/goodslist';
    }
    enterPersonal(){
        window.location.hash = '/personal';
    }
    enterCart(){
        window.location.hash = '/cart';
    }
    render(){
               
        return (
            <footer>
                <ul>
                    <li onClick={this.enterIndex}>
                        <i className="iconfont icon-shouyeshouye"></i>
                        <span>首页</span>
                    </li>
                    <li onClick={this.enterGoodslist}>
                        <i  className="iconfont icon-tubiao3"></i>
                        <span>分类</span>
                    </li><li onClick={this.enterCart}>
                        <i  className="iconfont icon-gouwudaishi"></i>
                        <span>购物袋</span>
                        <span className="qty-ts"></span>
                    </li><li onClick={this.enterPersonal}>
                        <i  className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </li>
                </ul>
            </footer>
            
        )
    }
}