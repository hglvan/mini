import React from 'react';
import IconButton from 'material-ui/IconButton';
import '../../font/iconfont.css'
import './Login.scss'

const style = {
    //width height 是阴影扩散范围
    //fontsize 设置字体大小
    //paddingTop 自己微调
    iconfont : {
        width : 100,
        height : 100,
        fontSize : 50,
        padding : 0,
        paddingTop : 12
        
    }
}

const IconButtonExampleComplex = () => (
    <div>
        <IconButton >
            <i className="iconfont icon-dingbu"/>
        </IconButton>
        
    </div>
);

export default IconButtonExampleComplex;