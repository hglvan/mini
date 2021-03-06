
import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            reState.istrue = false
            break
        case types.SUCCESS:
        console.log('记号',action.body)
            reState.data = action.body.data[0] || []
            reState.lastFetched = action.lastFetched
            reState.loading = false
            reState.istrue = true
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}