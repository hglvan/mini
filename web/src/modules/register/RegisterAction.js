import * as constants from '../../redux/commonConstant'

export function register(username, password){
	console.log('我是测试action',username, password)
    return {
        types: [constants.RREQUEST, constants.SSUCCESS, constants.FFAILURE],
        path: 'register',
        method: 'post',
        query: {username, password}
    }
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }