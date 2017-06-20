import React, {Component} from 'react'
import './Header.scss'

export default class Header extends Component{
    constructor(props){
        super(props)
    }
    enterIndex(){
        window.location.hash = '/';
    }
    enterGoodslist(){
        window.location.hash = '/goodslist';
    }
    render(){
               
        return (
            <header>
                <ul>
                    <li><span className="iconfont icon-fanhui listTitle" onClick={this.props.click}></span></li>
                    <li><span className="listCenter" >{this.props.title}</span></li>
                    <li><span className="listTitle"></span></li>
                </ul>
            </header>
            
        )
    }
}