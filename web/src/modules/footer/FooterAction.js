
export function footer(url) {
        var str = url.substr(1);   
        var strArr = str.split('?'); 
        var lightRou = strArr[0]; //clickBtn:/goodslist
        return {
            type:lightRou
        }
    }

