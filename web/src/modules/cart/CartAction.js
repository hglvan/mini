import * as constants from '../../redux/commonConstant'


export function getCartMsg(data) {
    return {
        types : [constants.CART_REQUEST, constants.CART_SUCCESS, constants.CART_FAILURE],
        path : 'getMsg',
        method : 'post',
        query : data
    }
}

export function deleteCartMsg(data) {
    return {
        types : [constants.CART_REQUEST, constants.CART_SUCCESS, constants.CART_FAILURE],
        path : 'remove',
        method : 'post',
        query : data
    }
}


export function getAddressMsg(data) {
    return {
        types : [constants.ADDRESS_REQUEST, constants.ADDRESS_SUCCESS, constants.ADDRESS_FAILURE],
        path : 'getMsg',
        method : 'post',
        query : data
    }
}
