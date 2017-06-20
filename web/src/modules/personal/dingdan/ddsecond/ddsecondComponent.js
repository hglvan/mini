import React ,{Component} from 'react'
import './ddsecond.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as ddsecondAction from './ddsecondAction'


class DdsecondComponent extends Component{
     constructor(props){
        super(props)     
    }
   componentWillMount(){  
       
   }
    componentDidMount(){      
       
    }
   
    render(){
        return(
            <div className="ddsecond">
               77777
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
     loading: state.login.loading
})
export default connect(mapStateToProps, ddsecondAction)(DdsecondComponent)