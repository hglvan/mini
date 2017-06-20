import * as types from '../../redux/commonConstant'

export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        case types.ADDRESS_REQUEST:
            reSate.loading = true;
            break;
        case types.ADDRESS_SUCCESS:
            reSate.addressData = action.body.data ;
            reSate.loading = false;
            reSate.lastFetched = action.lastFetched;
            break;
        case types.ADDRESS_FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
    }
    return reSate;
}