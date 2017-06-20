import React,{Component} from 'react'
import  $ from 'jquery'
import './search-down.css'

export default class Search extends Component{
    componentDidMount(){
		console.log('搜索');

		var menuWrapper = document.getElementById("menu-wrapper");
		var menu = document.getElementById("menu");
		var menuWrapperClassList = menuWrapper.classList;
		var backdrop = document.getElementById("menu-backdrop");
		var infomation = document.getElementById("infomation");
		
		backdrop.addEventListener('click', toggleMenu);
		document.getElementById("icon-menu").addEventListener('click',toggleMenu);
		document.getElementById("infomation").addEventListener('click',toggleMenu);

		//下沉菜单中的点击事件
		$('#menu').on('click','ul>li', function() {
			toggleMenu();
			infomation.value = $(this).children('a').text();
		});
		var busying = false;

		function toggleMenu() {
			if (busying) {
				return;
			}
			busying = true;
			if (menuWrapperClassList.contains('mui-active')) {
				document.body.classList.remove('menu-open');
				menuWrapper.className = 'menu-wrapper fade-out-up animated';
				menu.className = 'menu bounce-out-up animated';
				setTimeout(function() {
					backdrop.style.opacity = 0;
					menuWrapper.classList.add('hidden');
				}, 500);
			} else {
				document.body.classList.add('menu-open');
				menuWrapper.className = 'menu-wrapper fade-in-down animated mui-active';
				menu.className = 'menu bounce-in-down animated';
				backdrop.style.opacity = 1;
			}
			setTimeout(function() {
				busying = false;
			}, 500);
		}
	}

	render(){
		return (
			<div className="banner-ts">
				<div id="menu-wrapper" className="menu-wrapper hidden">
					<div id="menu" className="menu">
						<ul className="mui-table-view mui-table-view-inverted">
							<li className="mui-table-view-cell">
								<a href="javascript:;">无辣不欢</a><i className="hotMark">HOT</i>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">网红爆品</a>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">剁手尖货</a>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">低卡纤身</a><i className="hotMark">HOT</i>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">吃遍全球</a>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">优选水果</a>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">冰镇饮料</a><i className="hotMark">HOT</i>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">冰淇淋雪糕</a>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">当日炒货</a><i className="hotMark">HOT</i>
							</li>
							<li className="mui-table-view-cell">
								<a href="javascript:;">咔吃咔吃</a>
							</li>
						</ul>
					</div>
				</div>
				<div id="menu-backdrop" className="menu-backdrop"></div>
			</div>
			)
		}
}
