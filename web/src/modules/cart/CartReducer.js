import * as types from '../../redux/commonConstant'
export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        case types.CART_REQUEST:
            reSate.loading = true;
            break;
        case types.CART_SUCCESS:
            reSate.cartData = action.body.data;
            reSate.lastFetched = action.lastFetched;
            reSate.loading = false;
            break;
        case types.CART_FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
        
        case types.ADDRESS_REQUEST:
            reSate.loading = true;
            break;
        case types.ADDRESS_SUCCESS:
            reSate.addressData = action.body.data;
            reSate.lastFetched = action.lastFetched;
            reSate.loading = false;
            break;
        case types.ADDRESS_FAILURE:
            reSate.loading = true;
            break;
        
        
    }
    return reSate;
}

