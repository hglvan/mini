import * as types from '../../redux/commonConstant'
export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        
        case types.ORDER_REQUEST:
            reSate.loading = true;
            break;
        case types.ORDER_SUCCESS:
            reSate.orderData = action.body.data;
            reSate.lastFetched = action.lastFetched;
            reSate.loading = false;
            break;
        case types.ORDER_FAILURE:
            reSate.error = action.error;
            reSate.loading = true;
            break;

        case types.REMOVE_REQUEST:
            reSate.loading = true;
            break;
        case types.REMOVE_SUCCESS:
            reSate.orderData = action.body.data;
            reSate.lastFetched = action.lastFetched;
            reSate.loading = false;
            break;
        case types.REMOVE_FAILURE:
            reSate.error = action.error;
            reSate.loading = true;
            break;
    }
    return reSate;
}

