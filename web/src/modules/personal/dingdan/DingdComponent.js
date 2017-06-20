import React ,{Component} from 'react';
import './Dingdan.scss';
import * as DingdAction from './DingdAction'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import Ddmask from '../../dialog/ddmaskComponent'
import $ from 'jquery'


let ddnum=0;

class DingdComponent extends Component{
    constructor(props){
        super(props)
        this.state={show:false,list_detail:'全部订单',
        border:`1px solid #dc586b`,border1:`none`,
        background:'#eff0f4',background1:'none',
    }
    }
    back(){
        this.props.router.push('personal')
        // window.history.back(-1); 
    }
    componentWillMount(){
        
        
    }
    componentDidMount(){
        let temp_id=sessionStorage.getItem('accountid')
        //  this.props.getorderMsg(temp_id)
        
    }
    showDetial(){
        ddnum++;
        if(ddnum%2 !==0){
            this.refs.xia.style.display='none'
            this.refs.shang.style.display='inline-block'
            this.setState({show:true})
            this.refs.ddlist.style.display='block'
            this.refs.ddlist.style.transition=`all 2s ease 1s`
           
        }else{
           this.refs.xia.style.display='inline-block'
            this.refs.shang.style.display='none'
            this.setState({show:false})
            this.refs.ddlist.style.display='none'
        }
    }
    toyxd(event){
        this.setState({list_detail:event.target.innerHTML});
        // this.setState({border:`none`,background1:`#eff0f4`})
        // this.refs.fenlei.style.border=`1px solid #dc586b`
        // this.refs.fenlei.style.background=`none`
        
      $('.ddlist span').removeClass('active')
        event.target.className='active'
        this.refs.ddlist.style.display='none'
        this.showDetial();
    }
  
    render(){
        
        return(
             <div className="dingdan">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p onClick={this.showDetial.bind(this)}>{this.state.list_detail}<span className="iconfont icon-sj-down-copy" ref='xia'></span><strong className="iconfont icon-shangsanjiao" ref='shang'></strong></p>
                    
                </header>
                <div className="ddlist" ref='ddlist'>
                    <ul>
                        <li>
                            <span onClick={this.toyxd.bind(this)} className='active'>全部订单</span>
                            <span onClick={this.toyxd.bind(this)} >已下单，等待支付</span>
                            <span onClick={this.toyxd.bind(this)} >订单已提交</span>
                        </li>    
                    </ul>
                    <ul>
                        <li>
                            <span onClick={this.toyxd.bind(this)} >零食准备中</span>
                            <span onClick={this.toyxd.bind(this)} >零食在路上</span>
                            <span onClick={this.toyxd.bind(this)} >零食已收到</span>
                        </li>
                    </ul>
                    <ul>
                        <li><span onClick={this.toyxd.bind(this)} >订单已取消</span></li>
                    </ul>
                </div>
                <Ddmask show={this.state.show}></Ddmask>
                
                <div className="dd_detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.dingdanlist.loading,
    data:state.dingdanlist.data
    
})

export default connect(mapStateToProps, DingdAction)(DingdComponent)