import * as types from '../../redux/commonConstant'

export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        case types.REQUEST:
            reSate.loading = true;
            break;
        case types.SUCCESS:
            reSate.addressData = action.body.data ;
            reSate.loading = false;
            reSate.lastFetched = action.lastFetched;
            break;
        case types.FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
    
        case types.REMOVE_REQUEST:
            reSate.loading = true;
            break;
        case types.REMOVE_SUCCESS:
            reSate.addressData = action.body.data ;
            reSate.loading = false;
            reSate.lastFetched = action.lastFetched;
            break;
        case types.REMOVE_FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
    }
    return reSate;
}