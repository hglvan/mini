import * as constants from '../../redux/commonConstant'

export function login(username, password){
    return {
        types: [constants.LOGIN_REQUEST, constants.LOGIN_SUCCESS, constants.LOGIN_FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password}
    }
}

export function logins(data){
    return {
        types: [constants.LOGIN_REQUEST, constants.LOGIN_SUCCESS, constants.LOGIN_FAILURE],
        path: 'logins',
        method: 'post',
        query:data
    }
}
// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }