import * as constants from '../../redux/commonConstant'

export function getProduct(data) {
    
    return {
        types : [constants.DETAIL_REQUEST, constants.DETAIL_SUCCESS, constants.DETAIL_FAILURE],
        path : 'getProducts',
        method : 'post',
        query : data,
        
    }
}

export function writeInCart(data) {
    
    return {
        types : [constants.DETAIL_REQUEST, constants.DETAIL_SUCCESS, constants.DETAIL_FAILURE],
        path : 'cartMsg',
        method : 'post',
        query : data
    }
}