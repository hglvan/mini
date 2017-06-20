import React,{Component} from 'react'
import './mingxi.scss'
import {Router,Route,Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

class MingxiComponent extends Component{
    constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }
    render(){
        return(
            <div className='mingxi'>
                 <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>账户明细</p>
                </header>
                <div className="mx_content">
                    <p>
                        <span></span>
                        <span>无明细记录</span>
                    </p>
                    <p>提示：系统只保存您最近6个月账户明细</p>
                </div>
            </div>
        )
    }
}
export default MingxiComponent 