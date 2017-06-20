import * as constants from '../../../redux/commonConstant'

export function getorderMsg(temp_id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getMsg',
        method: 'post',
        query: {accountid:temp_id,options:'cart'}
    }
}

