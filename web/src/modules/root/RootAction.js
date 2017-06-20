import * as constants from '../../redux/commonConstant'

export function root(username,password){
	return {
		types:[constants.REQUEST,constants.SUCCESS,constants.FAILURE],
		path:'root',
		method:'post',
		query:{username,password}
	}
}

//上面root函数为例，如果return出去的对象含有path，method 元素，在api那边会检测，有则发出ajax请求；