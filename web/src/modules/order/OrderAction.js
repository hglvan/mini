import * as constants from '../../redux/commonConstant'


export function sendOrdertMsg(data) {
    return {
        types : [constants.ORDER_REQUEST, constants.ORDER_SUCCESS, constants.ORDER_FAILURE],
        path : 'orderMsg',
        method : 'post',
        query : data
    }
}
