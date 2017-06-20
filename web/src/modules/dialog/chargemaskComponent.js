import React, {Component} from 'react'
import './chargemask.scss'

export default class Chargemask extends Component{
    guanbi(){
        var newState=false;
        this.props.callbackParent(newState)
        console.log(this.props)
    }
    render(){
        if(!this.props.show){
            return null
        }        
        return (
            <div className="chargemask">
                <ul>
                    <li><h2>确认充值 &nbsp;<span>{this.props.price.old}</span></h2></li>
                    <li>(实付<span>{this.props.price.new}</span>元)</li>
                    <li><span onClick={this.guanbi.bind(this)}>取消</span><span onClick={this.guanbi.bind(this)}>确定</span></li>
                </ul>
                    

                
            </div>
        )
    }
}