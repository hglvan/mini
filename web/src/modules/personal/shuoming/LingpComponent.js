

import React ,{Component} from 'react'
import '../../../static/styles/common.scss'
import './Lingp.scss'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import * as LingpAction from './LingpAction'

class LingpComponent extends Component{
     constructor(props){
        super(props)
    }
    back(){
        window.history.back(-1); 
    }
    render(){
        return(
             <div className="lingpsm" style={{height:'100%'}}>
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>特权令牌说明</p>
                </header>
                
                <div className="fontWrap">
                    <h2>令牌获得方式</h2>
                    <p>用户通过<Link to='/register'>注册</Link>、<Link to='/personal/YueComponent'>充值</Link>购买并成功支付订单任一种方式，即可获得特权令牌。</p>

                    <h2>全场包邮</h2>
                    <p>1、下单时使用“0元包邮令”，则运费将减免至0元。</p>
                    <p>2、下单时使用“9元包邮令”，如订单实付金额（运费除外）大于等于9元，则运费将减免至0元。</p>
                    <p>3、下单时使用“19元包邮令”，如订单实付金额（运费除外）大于等于19元，则运费将减免至0元。</p>
                    <p>4、下单时不使用包邮令，如订单商品实收合计大于等于39元，则运费将减免至0元。</p>

                    <h2>1小时速达</h2>
                    <p>1、下单时使用“加速令”，则在Mini零食配送范围内订单将在1小时内送达。</p>
                    <p>（下单时不使用“加速令”，则在Mini零食配送范围内订单将在2小时内送达；超出Mini零食配送范围的订单送达时间以第三方快递配送时间为准）</p>

                    <h2>超时免单</h2>
                    <p>1、超时免单：若订单未按时送达，则该订单享受超时免单服务，赔付订单全部实付金额。</p>
                    <p>2、超时赔付：若订单未按时送达，则该订单享受超时赔付服务，赔付的额度随机为订单实付金额的1%~100%。</p>
                    <p>（超时免单/赔付服务仅限Mini零食配送范围内订单，在线支付超时免单/赔付的金额将直接打入您的Mini零食账户，货到付款超时免单/赔付的金额将由配送员收费时当场结算。恶劣天气等不可抗力因素导致的配送超时除外）</p>

                    <h2>令牌类型说明</h2>
                    <p>加速令（1小时速达）：下单时选用此令，订单商品将在1小时内送达。</p>
                    <p>包邮令（满0元可用）：下单时选用此令，则运费将减免至0元。</p>
                    <p>包邮令（满9元可用）：下单时选用此令，如订单实付金额（运费除外）大于等于9元，则运费将减免至0元。</p>
                    <p>包邮令（满19元可用）：下单时选用此令，如订单实付金额（运费除外）大于等于19元，则运费将减免至0元。</p>

                    <h2>令牌使用说明</h2>
                    <p>1、令牌仅限Mini零食配送范围内订单使用。</p>
                    <p>2、令牌一经使用，概不退还。</p>
                    <p>3、加速令仅限300元及以下订单使用。</p>
                    <p>4、令牌支持单独使用或组合使用，组合使用时，同一类型的令牌只能使用一张。</p>
                    <p>注：所有特权令牌及服务的最终解释权归Mini零食所有。</p>
                </div>
               <footer></footer>
               
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, LingpAction)(LingpComponent)