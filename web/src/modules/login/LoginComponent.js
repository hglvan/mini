import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as loginActions from './LoginAction';
import  SpinnerComponent from '../spinner/SpinnerComponent';

/*@connect(
    state => ({
    
    })
)*/


class LoginComponent extends Component{
    constructor(props){
        super(props);
    }
    
    loginHandler(){
        //console.log(this.refs.username.value,this.refs.password)
        this.props.login(this.refs.username.value, this.refs.password.value)
    }
    render(){
        return (
            <div className="box">
                <ul>
                    <li><input type="text" ref='username' /></li>
                    <li><input type="text" ref='password'/></li>
                    <li><input type="button" value='登录' onClick={this.loginHandler.bind(this)}/></li>
                    <li>{this.props.loading + ''}</li>
                </ul>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading : state.login.loading
})

export default connect(mapStateToProps, loginActions)(LoginComponent);
