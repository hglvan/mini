import React, { Component } from 'react';

import './banner.scss'

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state={
      step:1,
      startX:0,
      changeX:0,
      startLeft:0,
      bannerInner:null
    }
    this.autoMove = this.autoMove.bind(this);
    this.bannerStop = this.bannerStop.bind(this);
    this.bannerStart = this.bannerStart.bind(this);
    this.bannerMove = this.bannerMove.bind(this);
    this.autoTimer = null;
  }
  componentWillUnmount() {
    window.clearInterval(this.autoTimer);
    // window.autoTimer = null;
  }
  componentDidMount() {
      this.state.bannerInner = document.getElementById('bannerInner')
      let bannerInner = this.state.bannerInner
      bannerInner.style.left = -document.getElementsByClassName('imgBox')[0].offsetWidth + "px";
    const num = (this.props.imgList.length+2)*100+"%";
      bannerInner.style.width = num;
    const arryImg = document.getElementsByClassName('imgBox');
    for(let i = 0;i<arryImg.length;i++){
      arryImg[i].style.width = 100/(this.props.imgList.length+2)+"%";
    }
    // window.autoTimer = null;
    this.autoTimer = window.setInterval(this.autoMove, this.props.duration);
  }
  
  autoMove(){
    let step = this.state.step,count = this.props.imgList.length + 1;
    if (step >= (count - 1)) {
        step = 0;
        bannerInner.style.left = 0;
    }
    step++;
    this.setState({step:step},function(){
      this.focusTip();
    });
    this.animate({left: -step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 600);
  }
  focusTip(){
    let currenStep = this.state.step;
    let tipNum = document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li").length;
    for (let i = 0; i < tipNum; i++) {
        document.getElementsByClassName('bannerTip')[0].getElementsByTagName("li")[i].className = i === (currenStep-1) ? "bg" : "";
    }

  }
  animate(obj, duration) {
        let bannerInner = this.state.bannerInner
        let times = 0;
        let interval = 50;
        let oChange = {};
        let oBegin = {};
        let flag = 0;
        for (let attr in obj) {
            let target = obj[attr];
            let begin = parseFloat(getComputedStyle(bannerInner)[attr]);
            let change = target - begin;
            if (change) {
                oBegin[attr] = begin;
                oChange[attr] = change;
                flag++;
            }
        }
        if (flag == 0) {
            return;
        }
        window.clearInterval(bannerInner.timer);
        function step() { 
            times += interval;
            if (times < duration) {
                for (let attr in oChange) {
                    let value = times / duration * oChange[attr] + oBegin[attr];
                    bannerInner['style'][attr] = value + "px";
                }
            }
            else {
                for (let attr in oChange) {
                  bannerInner['style'][attr] = obj[attr] + "px";
                }
                window.clearInterval(bannerInner.timer);
                bannerInner.timer = null;
            }
        }
        bannerInner.timer = window.setInterval(step, interval);
    }
  bannerStop(e){
      let bannerInner = this.state.bannerInner
    
      window.clearInterval(this.autoTimer);
    let startX = e.touches[0].clientX;
    let startLeft = parseFloat(bannerInner.style.left);
    this.setState({
      startX:startX,
      startLeft:startLeft
    });
  }
  bannerStart(){
      let bannerInner = this.state.bannerInner
    // window.autoTimer = null;
    this.autoTimer = window.setInterval(this.autoMove, this.props.duration);
    if(this.state.changeX>(document.getElementsByClassName('imgBox')[0].offsetWidth/5)){
      let step = this.state.step,count = this.props.imgList.length + 2;
      if (step <= 1) {
          step = count-1;
          bannerInner.style.left = -step * document.getElementsByClassName('imgBox')[0].offsetWidth + "px";
      }
      step--;
      this.setState({step:step},function(){
        this.focusTip();
      });
      this.animate({left: -step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 400);
    }else if(this.state.changeX<-(document.getElementsByClassName('imgBox')[0].offsetWidth/5)){
      this.autoMove();
    }else{
      this.animate({left: -this.state.step * document.getElementsByClassName('imgBox')[0].offsetWidth}, 150);

    }
  }
  bannerMove(e){
      let bannerInner = this.state.bannerInner
    let changeX = e.touches[0].clientX - this.state.startX;
    this.setState({changeX:changeX});
    bannerInner['style']['left'] = this.state.startLeft + changeX + "px";
  }
 
  
  render() {
    const imgList = this.props.imgList;
    // console.log(this.props)
    return (
      <div className="banner" id="banner001">
        <div className="bannerInner" id="bannerInner" onTouchMove={this.bannerMove} onTouchStart={this.bannerStop} onTouchEnd={this.bannerStart}>
          {/*把第最后一张图片复制一张放最后，实现手动滑动的无缝滚动*/
            imgList.map(function(item,index){
              if(index == imgList.length-1){
              return <a className="imgBox"><img src={item.src}/></a>
              }
            })
          }
          {
            imgList.map(function(item,index){
              return <a className="imgBox"><img src={item.src}/></a>
            })
          }
          {/*把第一张图片复制一张放最后，实现无缝滚动*/
            imgList.map(function(item,index){
              if(index == 0){
              return <a className="imgBox"><img src={item.src}/></a>
              }
            })
          }
        </div>
        <ul className="bannerTip">
          {
            imgList.map(function(item,index){
              if(index==0){
                return <li className="bg"></li>
              }else{
                return <li></li>
              }
              
            })
          }
        </ul>
      </div>
    );
  }
};