import React from 'react'
import {Route,Router,IndexRoute} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import RegisterComponent from './modules/register/RegisterComponent'
import GoodslistComponent from './modules/goodslist/GoodslistComponent'
import IndexgoodsComponent from './modules/indexgoods/IndexgoodsComponent'
import RootComponent from './modules/root/RootComponent'
import DetailComponent from './modules/details/DetailComponent';
import CartComponent from './modules/cart/CartComponent';

import AddressCheckComponent from './modules/addressCheck/AddressCheckComponent'
import AddressControlComponent from './modules/addressControl/AddressControlComponent'
import AddressAddComponent from './modules/addressAdd/AddressAddComponent'
import SearchresultComponent from './modules/searchresult/SearchresultComponent'
import OrderComponent from './modules/order/OrderComponent';



import PersonalComponent from './modules/personal/personalComponent'
import PsComponent from './modules/personal/peisong/psComponent'
import AccountComponent from './modules/personal/shezhi/AccountComponent'
import NiComponent from './modules/personal/shezhi/nicheng/NiComponent'
import EmailComponent from './modules/personal/shezhi/Email/EmailComponent'
import PasswordComponent from './modules/personal/shezhi/Password/PasswordComponent'
import LingpComponent from './modules/personal/shuoming/LingpComponent'
import KefuComponent from './modules/personal/kefu/KefuComponent'
import DingdComponent from './modules/personal/dingdan/DingdComponent'
import YueComponent from './modules/personal/yuer/YueComponent'
import YouhuiComponent from './modules/personal/youhuiquan/YouhuiComponent'
import MingxiComponent from './modules/personal/mingxi/mingxiComponent'
import LpdetailComponent from './modules/personal/lpdetail/LpdetailComponent'
import DdfirstComponent from './modules/personal/dingdan/ddfirst/ddfirstComponent'
import DdsecondComponent from './modules/personal/dingdan/ddsecond/ddsecondComponent'
import DddetailComponent from './modules/personal/dingdan/dddetail/DddetailComponent'
import ZhifubaoComponent from './modules/personal/zhifubao/zhifubaoComponent'
//写好页面加路由
export default (
    <Route path="" component={AppComponent}>
    	<Route path="/" component={RootComponent} />
		<Route path="index" component={RootComponent} />
		<Route path="goodslist" component={GoodslistComponent} />
        <Route path="list" component={IndexgoodsComponent} />
        <Route path="login" component={LoginComponent} />
       <Route path="register" component={RegisterComponent} />
        <Route path='detail' component={DetailComponent}/>
        <Route path='cart' component={CartComponent}/>
	<Route path='order' component={OrderComponent}/>
         <Route path='addressCheck' component={AddressCheckComponent}/>
        <Route path='addressControl' component={AddressControlComponent}/>
        <Route path='addressAdd' component={AddressAddComponent}/>
 <Route path="search" component={SearchresultComponent} />



       <Route path="personal" component={PersonalComponent} />
        <Route path="personal/PsComponent" component={PsComponent} />
        <Route path="personal/AccountComponent" component={AccountComponent} />
        <Route path="personal/AccountComponent/NiComponent" component={NiComponent} />    
        <Route path="personal/AccountComponent/EmailComponent" component={EmailComponent} />  
        <Route path="personal/AccountComponent/PasswordComponent" component={PasswordComponent} /> 
        <Route path="personal/LingpComponent" component={LingpComponent} /> 
        <Route path="personal/KefuComponent" component={KefuComponent} /> 
        <Route path="personal/DingdComponent" component={DingdComponent}> 
                <IndexRoute component={DdfirstComponent} />
                <Route path='Ddfirst' component={DdfirstComponent} />
                <Route path='Ddsecond' component={DdsecondComponent} />
        </Route>
        <Route path="personal/DingdComponent/Dddetail" component={DddetailComponent} /> 
        <Route path="personal/YueComponent" component={YueComponent} /> 
        <Route path="personal/zhifubao" component={ZhifubaoComponent} /> 
        <Route path="personal/YouhuiComponent" component={YouhuiComponent} /> 
        <Route path="personal/LpdetailComponent" component={LpdetailComponent} /> 
        <Route path="personal/YueComponent/MingxiComponent" component={MingxiComponent} />
    </Route>
) 
  