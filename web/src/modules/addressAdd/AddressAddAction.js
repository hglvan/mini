import * as constants from '../../redux/commonConstant'


export function getAddressMsg(data) {
    return {
        types : [constants.ADDRESS_REQUEST, constants.ADDRESS_SUCCESS, constants.ADDRESS_FAILURE],
        path : 'getMsg',
        method : 'post',
        query : data
    }
}

export function setAddressMsg(data) {
    return {
        types : [constants.ADDRESS_REQUEST, constants.ADDRESS_SUCCESS, constants.ADDRESS_FAILURE],
        path : 'addressMsg',
        method : 'post',
        query : data
    }
}