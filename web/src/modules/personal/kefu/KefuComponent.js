import React ,{Component} from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'
import {connect} from 'react-redux'
import KefuAction from './KefuAction'
import  './Kefu.scss'
import '../../../static/styles/common.scss'

class KefuComponent extends Component{
     constructor(props){
        super(props)
    }
   back(){
        window.history.back(-1); 
    }
    tosubmit(){
        
    }
    componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route, 
        this.routerWillLeave
      )
    }
    routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      return '确认要离开？';
    }
    render(){
        return(
            <div className="kefu">
                <header>
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    <p>留言</p>
                </header>
                <main>
                    <p>零食工在线客服休息中，请您根据提示进行留言，客服上班后第一时间回复您。早9点－晚8点，您也可以拨打4006918000进行电话咨询。</p>
                    <form action="">
                        <input type="text" placeholder="请填写您的真实姓名（必填）"/><br/>
                        <input type="text" placeholder="请填写您的电话号码（必填）"/><br/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="请将您的问题详细写下，我们会尽快与您联系。(必填)"></textarea><br/>
                        <input type="text" placeholder="请填写您的电话号码（必填）"/><br/>
                        <input type="submit" value='提交' onClick={this.tosubmit.bind(this)}/>
                    </form>
                </main>
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    loading: state.login.loading
})
export default connect(mapStateToProps, KefuAction)(KefuComponent)

