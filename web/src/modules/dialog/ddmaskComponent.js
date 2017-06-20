import React, {Component} from 'react'
import './ddmask.scss'

export default class Ddmask extends Component{
    render(){
        if(!this.props.show){
            return null
        }        
        return (
            <div className="ddmask">
                
            </div>
        )
    }
}