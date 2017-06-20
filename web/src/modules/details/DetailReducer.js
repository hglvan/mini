import * as types from '../../redux/commonConstant'

export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        case types.DETAIL_REQUEST:
            
            reSate.loading = true;
            break;
        case types.DETAIL_SUCCESS:
            if(action.body.data){
                reSate.detailData = action.body.data ;
            }
            reSate.loading = false;
            reSate.lastFetched = action.lastFetched;
            break;
        case types.DETAIL_FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
    }
    return reSate;
}