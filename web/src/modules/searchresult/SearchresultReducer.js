
import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            reState.loading = true,
            reState.istrue = false
            break
        case types.SUCCESS:
            console.log('十大列表',action.body.data)

            reState.istrue = true
            reState.data = action.body.data || []
            console.log(reState,"reState")
            if(!action.body.data){
                alert('抱歉没有相关商品,搜索其他关键词试试');
                // window.location.hash = '/index';
            }
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            reState.istrue = false
            break
    }
    return reState;
}