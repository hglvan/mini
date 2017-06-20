import React ,{Component}from 'react';
import './yunfei.scss';

class YunfeiComponent extends Component{
    render(){
        if(!this.props.show2){
            return null
        }
        return(
            <div className="yunfei">
                <div className="tab_down">
                    
                    <h5>Mini零食配送：</h5>
                    <p>使用“0元包邮令”，运费将减免至0元。</p>
                    <p>使用“9元包邮令”，如订单实付金额（运费除外）大于等于9元，运费将减免至0元。</p>
                    <p>使用“19元包邮令”，如订单实付金额（运费除外）大于等于19元，运费将减免至0元。</p>
                    <p>不使用包邮令，如订单商品实收合计大于等于39元，则运费将减免至0元；如订单商品实收合计小于39元，每单收取5元运费。</p>
                    <p><span className="fuwukai">包邮令说明&gt;</span></p>
                    <h5>Mini零食配送范围外：</h5>
                    <p>如订单商品实收合计大于等于39元，则运费将减免至0元；如订单商品实收合计小于39元，每单收取5元运费。</p>
                 </div>
            
            </div>
               
        )
    }
}

export default YunfeiComponent



            