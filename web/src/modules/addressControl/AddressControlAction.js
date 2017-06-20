import * as constants from '../../redux/commonConstant'


export function getAddressMsg(data) {
    return {
        types : [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path : 'getMsg',
        method : 'post',
        query : data
    }
}
export function deleteAddressMsg(data) {
    return {
        types : [constants.REMOVE_REQUEST, constants.REMOVE_SUCCESS, constants.REMOVE_FAILURE],
        path : 'remove',
        method : 'post',
        query : data
    }
}