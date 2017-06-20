
import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.LIST_REQUEST:
            reState.loading = true,
            reState.istrue = false
            break
        case types.LIST_SUCCESS:
            console.log('十大列表',action.body)
            reState.data = action.body.data || []
            reState.istrue = true
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.LIST_FAILURE:
            reState.error = action.error
            reState.loading = false
            reState.istrue = false
            break
    }
    return reState;
}