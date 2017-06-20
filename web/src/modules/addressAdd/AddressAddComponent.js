import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as addressAddActions from './AddressAddAction'
import HeaderComponent from '../header/HeaderComponent'
import SpinnerComponent from '../spinner/SpinnerComponent'

import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './AddressAdd.scss'

class AddressAddComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            realName : '',
            elephone : '',
            address : ''
        }
    }

    componentDidMount(){
        let obj = {
            accountid : window.localStorage.getItem('accountid'),
            addressid : this.props.location.query.addressid,
            option : 'address'
        }
        //console.log(this.props.location.query)
        this.props.getAddressMsg(obj)
        .then(
            response => {
                let realName = response.body.data[0].realName;
                let elephone = response.body.data[0].elephone;
                let address = response.body.data[0].address;
                this.setState({
                    realName,
                    elephone,
                    address
                })
            }
        )
    }
    componentDidUpdate(){
        if(this.refs.elephone){
            this.refs.elephone.value = this.state.elephone;
            this.refs.realName.value = this.state.realName;
            this.refs.address.value = this.state.address;
        }
    }
    writeAddress(){
        let obj = {
            accountid : this.props.addressData[0].accountid,
            addressid : this.props.addressData[0].addressid,
            realName : this.refs.realName.value,
            elephone : this.refs.elephone.value,
            address : this.refs.address.value
        }
        this.props.setAddressMsg(obj)
        .then(
            response => {
                console.log(response)
                window.location.hash = 'addresscontrol'
            }
        )
    }
    render(){

        return (
            <div className="container-ts">
                <HeaderComponent title={'地址编辑'} click={()=>{window.location.hash = '/addressControl'}}/>

                <div className="content-ts">
                    <div className="addressMsg">
                        <ul>
                            <li>
                                <span>收货人：</span>
                                <input type="text"
                                       placeholder="收货人真实姓名"
                                       ref = 'realName'
                                />
                            </li>
                            <li>
                                <span>详细地址：</span>
                                <input type="text"
                                       placeholder="写字楼、校区、大厦、街道"
                                       ref = 'address'
                                />
                            </li>
                            <li>
                                <span>收货电话：</span>
                                <input type="text"
                                       placeholder="收货人真实姓名"
                                       ref= 'elephone'
                                />
                            </li>
                        </ul>

                        <div className="saveAddress-ts"  onClick={this.writeAddress.bind(this)}>
                            保存地址
                        </div>
                    </div>
                </div>
                <SpinnerComponent show={this.props.loading}/>
            </div>

        )



    }
}

//goods对象在router中定义
const mapStateToProps = state =>({
    loading : state.addressAdd.loading,
    addressData : state.addressAdd.addressData || []
})

//暴露出去
export default connect(mapStateToProps,addressAddActions)(AddressAddComponent)