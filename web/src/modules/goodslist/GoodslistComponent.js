import React,{Component} from 'react'
import {connect} from 'react-redux'
import ReactRouter,{Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

import * as goodslistActions from './GoodslistAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/FooterComponent'


import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './Goodslist.scss'

class GoodslistComponent extends React.Component{
    
    enterIndex(){
        window.location.hash = '/';
    }


    render(){
        return(
            <div className="container-ts">
                <header>
                    <ul>
                        <span className="iconfont icon-fanhui listTitle" onClick={this.enterIndex}></span>
                        <span className="listCenter">零食分类</span>
                        <span className="listTitle"></span>
                    </ul>
                </header>

                <div className="content-ts">
                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-niunai"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">水果/牛奶/冰品</a></h3>
                            <span>
                                <a>优选水果<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>酸奶/乳酸饮料</a>
                            </span>
                            <span>
                                <a>纯牛奶/风味奶/奶制品</a>
                            </span>
                            <span>
                                <a>冰淇淋/雪糕/冰棍<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>冰镇饮料</a>
                            </span>
                            
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-yinliao"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">冲饮/饮料</a></h3>
                            <span>
                                <a>果汁/咖啡饮料/含乳饮料</a>
                            </span>
                            <span>
                                <a>茶/咖啡/奶茶/冲调</a>
                            </span>
                            <span>
                                <a>碳酸饮料<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>茶饮料/功能饮料</a>
                            </span>
                            
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-dangao"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">饼干/糕点/面包</a></h3>
                            <span>
                                <a>坚果味/水果味/其他口味饼干<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>奶油味/牛奶味/巧克力味饼干</a>
                            </span>
                            <span>
                                <a>曲奇/夹心/苏打饼干</a>
                            </span>
                            <span>
                                <a>西式糕点/传统点心</a>
                            </span>
                            <span>
                                <a>面包/派</a>
                            </span>
                            
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-shutiao"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">薯片/膨化/威化/蛋卷</a></h3>
                            <span>
                                <a>薯片/薯条<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>膨化食品</a>
                            </span>
                            <span>
                                <a>威化/蛋卷</a>
                            </span>
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-shuiguo"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">坚果/蜜饯果干</a></h3>
                            <span>
                                <a>坚果/干果<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>蜜饯/果干</a>
                            </span>
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-rou"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">肉类/海产品</a></h3>
                            <span>
                                <a>肉干/肉脯/肉制品</a>
                            </span>
                            <span>
                                <a>鸡/鸭制品</a>
                            </span>
                            <span>
                                <a>鱼干/海产品<i className="hotMark">HOT</i></a>
                            </span>
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-FastFood"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">代餐/方便食品</a></h3>
                            <span>
                                <a>方便面/八宝粥/糊粉麦片<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>蛋/肠/罐头</a>
                            </span>
                        
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-dou-copy"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">豆制品/菇笋/海苔</a></h3>
                            <span>
                                <a>豆干/豆制品</a>
                            </span>
                            <span>
                                <a>菇笋/藕片/海苔/海带</a>
                            </span>
                        </div>
                    </div>

                    <div className="listItem-ts">
                        <div className="listIcon">
                            <a className="iconfont icon-tangdou"></a>
                        </div>
                        <div className="listLink">
                            <h3><a className="listTitle">糖果/巧克力/果冻</a></h3>
                            <span>
                                <a>糖果/口香糖<i className="hotMark">HOT</i></a>
                            </span>
                            <span>
                                <a>巧克力/果冻/布丁</a>
                            </span>
                        </div>
                    </div>
                </div>

                <FooterComponent />
                <SpinnerComponent show={false} />
            </div>
        )
    }
}


//rooting对象在router中定义
const mapStateToProps_root = state =>({
    loading:state.rooting.loading
})
// console.log(mapStateToProps_root)

//暴露出去
export default connect(mapStateToProps_root,goodslistActions)(GoodslistComponent)