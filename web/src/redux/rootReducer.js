import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'
import register from '../modules/register/RegisterReducer'
import rooting from '../modules/root/RootReducer'
import detail from '../modules/details/DetailReducer';
import cart from '../modules/cart/CartReducer';
import {combineReducers} from 'redux'
import peisong from '../modules/personal/peisong/psReducer'
import personalReducer from '../modules/personal/personalReducer'
import goods from '../modules/indexgoods/IndexgoodsReducer.js'
import changePsd from '../modules/personal/shezhi/Password/PasswordReducer'
import dingdanlist from '../modules/personal/dingdan/DingdReducer'
import order from  '../modules/order/OrderReducer';


import Searchresult from '../modules/searchresult/SearchresultReducer'
import footer from '../modules/footer/FooterReducer'
import addressCheck from '../modules/addressCheck/AddressCheckReducer'
import addressControl from '../modules/addressControl/AddressControlReducer'
import addressAdd from '../modules/addressAdd/AddressAddReducer.js'


//这里是合并reducer的，写完记得合并上去
const rootReducer = combineReducers({
    login,
    router,
    register,
    detail,
    peisong,
    cart,
    rooting,
    goods,
    order,
    personalReducer,
     changePsd,
    dingdanlist,
     Searchresult,
    footer,
    addressCheck,
    addressControl,
    addressAdd
})

export default rootReducer