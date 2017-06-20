import React ,{Component} from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import PsAction from './psAction'
import  './Peisong.scss'
import '../../../static/styles/common.scss'
import FanweiComponent from './fanwei/FanweiComponent'
import YunfeiComponent from './yunfei/YunfeiComponent'
import ShijianComponent from './shijian/ShijianComponent'

let num1=0;
let num2=0;
let num3=0;
class PsComponent extends Component{
     constructor(props){
        super(props)
        this.state={show1:false,show2:false,show3:false,y1:-204,y2:-204,y3:-204}
    }
   
     back(){
        window.history.back(-1); 
    }
    changebg1(){
         num1++;
       if(num1%2==0){    
          this.setState({show1:false,show2:false,show3:false,y1:-204})
       }else{
          this.setState({show1:true,show2:false,show3:false,y1:-234})
       }
       
    }
      changebg2(){
         num2++;
       if(num2%2==0){    
          this.setState({show2:false,show1:false,show3:false,y2:-204})
          
       }else{
          this.setState({show2:true,show1:false,show3:false,y2:-234})
       }
       
    }
    changebg3(){
         num3++;
       if(num3%2==0){    
          this.setState({show3:false,show1:false,show2:false,y3:-204})
       }else{
          this.setState({show3:true,show1:false,show2:false,y3:-234})
       }
       
    }
   
    render(){
        return(
            <div className="peisong">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>配送说明</p>
                </header>
               <div className="p_content">
                    <ul>
                        <li onClick={this.changebg1.bind(this)}>
                            <span>配送范围</span>
                            <i style={{backgroundPositionY:`${this.state.y1}px`}}></i>
                           
                        </li>
                         <FanweiComponent show1={this.state.show1}></FanweiComponent>
                        <li className='yunfei' onClick={this.changebg2.bind(this)}>
                            <span>配送运费</span>
                            <i style={{backgroundPositionY:`${this.state.y2}px`}}></i>
                            
                        </li>
                        <YunfeiComponent show2={this.state.show2}></YunfeiComponent>
                        <li className="shijian" onClick={this.changebg3.bind(this)}>
                            <span>配送时间</span>
                            <i style={{backgroundPositionY:`${this.state.y3}px`}}></i>
                           
                        </li>
                        <ShijianComponent show3={this.state.show3}></ShijianComponent>
                    </ul>
               </div>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.peisong.loading,
    
    
})
export default connect(mapStateToProps, PsAction)(PsComponent)

