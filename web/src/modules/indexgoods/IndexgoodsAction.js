import * as constants from '../../redux/commonConstant'

export function Indexgoods(data){
	console.log('data',data)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'searchProducts',
        method: 'post',
        query: data
    }
}