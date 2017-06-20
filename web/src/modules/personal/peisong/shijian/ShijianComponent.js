import React ,{Component}from 'react';
import './shijian.scss';

class ShijianComponent extends Component{
    render(){
        if(!this.props.show3){
            return null
        }
        return(
            <div className="shijian">
               <div className="tab_down" >  
                    <h5>Mini零食配送：</h5>            
                    <p>1、周一至周日: 18:00前下单，当日送达，18:00后下单，次日送达。</p>
                    <p>2、使用加速令，1小时速达；不使用加速令，2小时速达。超时免单。<span  className="fuwukai">加速令说明&gt;</span></p>
                    <p>注：①起送时间为09:00。<br/>>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②因收货人外出，拒收，预留电话不通等非Mini零食配送因素造成的订单超时不享受免单服务！</p>
                    <h5>Mini零食配送范围外：</h5>
                    <p className="pdb">周一至周日：17:00前下单，当日出库；17:00后下单，次日出库。送达时间以第三方配送公司为准。</p>
              </div>
            
            </div>
               
        )
    }
}

export default ShijianComponent



            