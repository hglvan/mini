import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as addressControlActions from './AddressControlAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import HeaderComponent from '../header/HeaderComponent'

import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './AddressControl.scss'

class AddressControlComponent extends Component{
	constructor(props){
		super(props);
		//模拟数据，生成地址列表
        this.state = {
            currentIndex : window.localStorage.getItem('addressid'),
            currentCheck : window.localStorage.getItem('addressid') + 1
        }
	}
	
    componentDidMount(){
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            option : 'address'
        }
        this.props.getAddressMsg(obj);
    }
    componentDidUpdate(){
        let addressid = window.localStorage.getItem('addressid');
        let keyAddress = addressid + 1;
        
        this.refs[addressid] && this.refs[addressid].classList.add('backActive');
        this.refs[addressid] && this.refs[keyAddress].classList.add('active');
    }
    
    tabChoiced(addressid){
        
        let keyAddress = addressid + 1;
        this.refs[this.state.currentIndex] ? this.refs[this.state.currentIndex].classList.remove('backActive') : '';
        this.refs[addressid].classList.add('backActive');
        
        this.refs[this.state.currentCheck] ? this.refs[this.state.currentCheck].classList.remove('active') : '';
        this.refs[keyAddress].classList.add('active');
        
        window.localStorage.setItem('addressid',addressid);
        
        this.setState({
            currentIndex : addressid,
            currentCheck : keyAddress
        })

        this.props.setOriginAddressMsg({
            accountid : window.localStorage.getItem('accountid'),
            originAddress : addressid
        })

    }
    addressRemove(addressid){
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            addressid : addressid,
            option : 'address'
        }
        let getAdd = {
            accountid : window.localStorage.getItem('accountid'),
            option : 'address'
        }
        
        this.props.deleteAddressMsg(obj)
        .then(
            response => {
                
                this.props.getAddressMsg(getAdd)
            }
        )
        .then(
            response => {
                
                console.log(response)
            }
        )
    }
    addressEdit(addressid){
        window.location.hash = '/addressadd?addressid=' + addressid;
    }
	render(){

		return (
            <div className="container-ts">
                <HeaderComponent title={'管理地址'} click={()=>{window.location.hash = '/addressCheck'}}/>

                <div className="content-ts">
                	<div className="address-parent">
                		<div className="addAddress-ts">添加地址</div>
        
                        {this.props.addressData && this.props.addressData.map(function (item) {
            
                            return (
                                <div className="address-child" key={Math.random()}>
                                    <ul className="address-info">
                                        <li>
                                            <p>
                                                <span>{item.realName}</span>
                                                <label>{item.elephone}</label>
                                            </p>
                                            <p className="addressItem"><span>{item.address}</span></p>
                                        </li>
                                    </ul>
                                    <div className="address-operate">
                                        <span ref={item.addressid + 1}  onClick={this.tabChoiced.bind(this,item.addressid)} className='iconfont icon-gou1'></span>
                                        <span><a onClick={this.tabChoiced.bind(this,item.addressid)} ref={item.addressid}>设为默认</a></span>
                                        <span onClick={this.addressEdit.bind(this,item.addressid)}><a>编辑</a></span>
                                        <span onClick={this.addressRemove.bind(this,item.addressid)}><a>删除</a></span>
                                    </div>
                                </div>
                            )
                        }.bind(this))}
                	</div>

                </div>

                <SpinnerComponent show={this.props.loading} />
            </div>

		)

	}


}

//goods对象在router中定义
const mapStateToProps = state =>({
    loading : state.addressCheck.loading,
    addressData : state.addressCheck.addressData
})

//暴露出去
export default connect(mapStateToProps,addressControlActions)(AddressControlComponent)

/*
var _this=this;

var tabList= this.state.tabs.map(function(item,index) {
    // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
    var tabStyle = item.id == this.state.currentIndex ? 'iconfont icon-gou1 active' : 'iconfont icon-gou1';
    return (
        <div className="address-child">
            <ul className="address-info">
                <li>
                    <p>
                        <span>{item.tabName}</span>
                        <label>{item.phone}</label>
                    </p>
                    <p className="addressItem"><span>{item.address}</span></p>
                </li>
            </ul>
            <div className="address-operate">
                <span key={index}  onClick={this.tabChoiced.bind(_this,item.id)} className={tabStyle}></span>
                <span><a  onClick={this.tabChoiced.bind(_this,item.id)}>设为默认</a></span>
                <span><a>编辑</a></span>
                <span><a>删除</a></span>
            </div>
        </div>
    )
    
}.bind(_this));*/
