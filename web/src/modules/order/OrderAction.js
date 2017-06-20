import * as constants from '../../redux/commonConstant'


export function sendOrdertMsg(data) {
    return {
        types : [constants.ORDER_REQUEST, constants.ORDER_SUCCESS, constants.ORDER_FAILURE],
        path : 'orderMsg',
        method : 'post',
        query : data
    }
}
export function removeCartMsg(data) {
    return {
        types : [constants.REMOVE_REQUEST, constants.REMOVE_SUCCESS, constants.REMOVE_FAILURE],
        path : 'remove',
        method : 'post',
        query : data
    }
}
