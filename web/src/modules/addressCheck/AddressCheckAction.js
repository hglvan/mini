import * as constants from '../../redux/commonConstant'


export function getAddressMsg(data) {
    return {
        types : [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path : 'getMsg',
        method : 'post',
        query : data
    }
}