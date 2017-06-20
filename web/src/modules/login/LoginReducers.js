import * as types from '../../redux/commonConstant'

export default function (state = {loading : false}, action) {
    let reSate = JSON.parse(JSON.stringify(state));
    
    switch (action.type){
        case types.REQUEST:
            reSate.loading = true;
            break;
        case types.SUCCESS:
            reSate.data = action.body;
            reSate.lastFetched = action.lastFetched;
            reSate.loading = false;
            break;
        case types.FAILURE:
            reSate.error = action.error;
            reSate.loading = false;
            break;
    }
    return reSate;
}