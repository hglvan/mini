import * as constants from '../../redux/commonConstant'

export function Indexgoods(data){
	console.log('data',data)
    return {
        types: [constants.LIST_REQUEST, constants.LIST_SUCCESS, constants.LIST_FAILURE],
        path: 'searchProducts',
        method: 'post',
        query: data
    }
}