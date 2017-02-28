import React from 'react';
import Button from './Button';

const Header = () => {
	var headerButtons = {
		'Home' : '首頁',
		'Tours' : '旅遊',
		'Cruises' : '郵輪',
		'Hotels' : '酒店',
		'Taiwan' : '台灣',
		'US' : '美加',
		'Europe' : '歐洲',
		'Asia' : '亞洲',
		'Overseas' : '海外',
		'Travel to US' : '海外來美',
	};

	var nav = Object.keys(headerButtons).map(function(name){
		return (<Button key={name} name={name} />)
	});

	function toggleBurger() {
		var myButton = document.getElementsByClassName("navVert");
		// console.log(window.innerWidth);
		if (myButton["0"].style.marginTop === '-400px') {
			myButton["0"].style.marginTop = '0';
		} else {
			myButton["0"].style.marginTop = '-400px';
		}
		window.onresize = function (event) {
			if (window.innerWidth > 768) {
				myButton["0"].style.marginTop = '-400px';
			}
		}

	}

	return (
		<header className="container-fluid navbar-fixed-top">
			<div className="container">
				<div className="logo">
					<span className="logoChn">故鄉旅遊</span><br />
					<span className="logoEng">Good Shine Travel</span>
				</div>
				<div className="headerButtons">{nav}</div>
				
				<button className="lang">English</button>
				<a className="hamburger" onClick={toggleBurger} >☰</a>

			</div>
			<div className="navVert" style={{marginTop : '-400px'}} >{nav}</div>
		</header>
	)
}

export default Header