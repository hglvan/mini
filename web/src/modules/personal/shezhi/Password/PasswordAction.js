import * as constants from '../../../../redux/commonConstant'

export function getAccount(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password}
    }
}
export function changePassword(username, password,id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'accountmsg',
        
        method: 'post',
        query: {'username' : username, 'password':password, 'accountid':id}
    }
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }