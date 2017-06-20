import React,{Component} from 'react'
import {connect} from 'react-redux'
import ReactRouter,{Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

import * as searchresultActions from './SearchresultAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import FooterComponent from '../footer/FooterComponent'
import HeaderComponent from '../header/HeaderComponent'


import '../../static/styles/rem.scss'
import '../../static/styles/reset.css'
import './Searchresult.scss'
import * as img from '../../static/data/indexImg.js'

import $ from 'jquery'
class SearchresultComponent extends React.Component{
    
    enterIndex(){
        window.location.hash = '/';
    }

    enterGoodslist(){
        window.location.hash = '/goodslist';
    }


    componentDidMount(){


        $('.listCenter').html("搜索结果(" + this.props.location.query.classify + ")");
        
        let obj = {
            keyword : this.props.location.query.classify
        }

        this.props.Searchresult(obj);
         

        $('.content-ts').on('click','.listElement-ts',function(){

            window.location.hash = '/detail?goodsid='+$(this).find('ul').attr('class');

        })
  
      
        }


    render(){
        return(
            <div className="container-ts" ref="ll">
                <HeaderComponent  click={()=>{window.location.hash = '/index'}}/>

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


//goods对象在router中定义
const mapStateToProps_root = state =>({
    loading:state.Searchresult.loading,
    data:state.Searchresult.data,
    istrue:state.Searchresult.istrue
    
})
// console.log('mapStateToProps_root')

//暴露出去
export default connect(mapStateToProps_root,searchresultActions)(SearchresultComponent)