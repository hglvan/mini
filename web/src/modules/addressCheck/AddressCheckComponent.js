import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as addressCheckActions from './AddressCheckAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import HeaderComponent from '../header/HeaderComponent'

import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './AddressCheck.scss'

class AddressCheckComponent extends Component{
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
        
    }

    render(){
        
        return (
            <div className="container-ts">
                <HeaderComponent title={'选择收货地址'} click={()=>{window.location.hash = '/cart'}}/>

                <div className="content-ts">
                    <dl>
                        {this.props.addressData && this.props.addressData.map(function (item) {
                            
                            return (
                                <dd ref={item.addressid} >
                                    <ul>
            
                                        <li>
                                            <span className="iconfont icon-dizhi"></span>
                                        </li>
                                        <li>
                                            <p>
                                                <span>{item.realName}</span>
                                                <label>{item.elephone}</label>
                                            </p>
                                            <p className="addressItem"><span>{item.address}</span></p>
                                        </li>
                                        <li>
                                            <span ref = {item.addressid + 1} onClick={this.tabChoiced.bind(this,item.addressid)} className='iconfont icon-gou1'></span>
                                        </li>
                                    </ul>
                                </dd>
                            )
                        }.bind(this))}
                    </dl>
                </div>

                <div className="foot-ts">
                    <a onClick={()=>{window.location.hash = '/addressControl'}}><i className="iconfont icon-shezhi"></i>管理地址</a>
                    <a><i className="iconfont icon-peisong"></i>查看配送说明</a>
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
export default connect(mapStateToProps,addressCheckActions)(AddressCheckComponent)

/*
var _this=this;

var tabList= this.state.tabs.map(function(item,index) {
    // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
    var tabStyle = item.id == this.state.currentIndex ? 'iconfont icon-gou1 active' : 'iconfont icon-gou1';
    var backStyle = item.id == this.state.currentIndex ? 'backActive' : '';
    
    return(
        <dd className={backStyle}>
            <ul>
                
                <li>
                    <span className="iconfont icon-dizhi"></span>
                </li>
                <li>
                    <p>
                        <span>{item.tabName}</span>
                        <label>{item.phone}</label>
                    </p>
                    <p className="addressItem"><span>{item.address}</span></p>
                </li>
                <li>
                    <span key={index}  onClick={this.tabChoiced.bind(_this,item.id)} className={tabStyle}></span>
                </li>
            </ul>
        </dd>
    )
    
}.bind(_this));*/
