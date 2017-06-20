//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.RREQUEST:
            console.log(types.RREQUEST)
            reState.loading = true
            break
        case types.SSUCCESS:
        console.log('7777',action.body.status)
            reState.reg = action.body.status
            reState.istrue = true
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FFAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}


