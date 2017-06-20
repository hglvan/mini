import React,{Component} from 'react'
import {connect} from 'react-redux'
import ReactRouter,{Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

import * as indexgoodsActions from './IndexgoodsAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/FooterComponent'


import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './Indexgoods.scss'
import * as img from '../../static/data/indexImg.js'

import $ from 'jquery'
class IndexgoodsComponent extends React.Component{
    
    enterIndex(){
        window.location.hash = '/';
    }

    enterGoodslist(){
        window.location.hash = '/goodslist';
    }


    componentDidMount(){


        $('.listCenter').html(this.props.location.query.classify).css('fontSize','18px');
        
        let obj = {
            keyword : this.props.location.query.classify
        }

         this.props.Indexgoods(obj);
         

             $('.content-ts').on('click','.listElement-ts',function(){

            window.location.hash = '/detail?goodsid='+$(this).find('ul').attr('class');

        })
              
  
      
        }


    render(){
        return(
            <div className="container-ts" ref="ll">
                <header>
                    <ul>
                        <span className="iconfont icon-fanhui listTitle" onClick={this.enterIndex}></span>
                        <span className="listCenter" ></span>
                        <span className="listTitle"></span>
                    </ul>
                </header>
                <div className="content-ts">
                {

             this.props.istrue && this.props.data.map(function(item){
                var img = 'src/static/imgs/img/'+ item.banner[0];
                             
                  return (
                    <div className="listElement-ts">

                        <div className="listImg">
                            <a><img src= {img}/></a>
                        </div>
                        <div className="listWord">
                            <div className="productTitle">
                                <ul className={item.goodsid}>
                                    <li><span>{item.goodstittle}</span></li>
                                    <li><span className="details">{item.goodsmsg}</span></li>
                                </ul>
                            </div>
                            <div className="productPrice">
                                <ul>
                                    <li><span className="qty">{item.weight}</span></li>
                                    <li><span className="price-ts">￥{item.nowprice}</span></li>
                                    <span className="addBtn-ts">加入购物车</span>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )                 
             })
        }
           
                </div>
                
                <FooterComponent />
                <SpinnerComponent show={this.props.loading} />
            </div>
        )
    }
}


//rooting对象在router中定义
const mapStateToProps_root = state =>({
    loading:state.goods.loading,
    data:state.goods.data,
    istrue:state.goods.istrue
    
})
// console.log('mapStateToProps_root')

//暴露出去
export default connect(mapStateToProps_root,indexgoodsActions)(IndexgoodsComponent)