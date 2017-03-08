import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import Button from './Button';

const Header = () => {
	var headerButtons = {
		'Home' : '首頁',
		'Taiwan' : '台灣',
		'US' : '美加',
		'Europe' : '歐洲',
		'Asia' : '亞洲',
		'Cruises' : '郵輪',
		'Hotels' : '酒店',
		'Overseas' : '海外',
		'Travel to US' : '海外來美',
	};

	var nav = Object.keys(headerButtons).map(function(name){
		return (<Button key={name} name={name} />)
	});

	function toggleBurger() {
		var myButton = document.getElementsByClassName("navVert")["0"].style;
		if (myButton.marginTop === '-400px') {
			myButton.marginTop = '30px';
			myButton.opacity = '0.9';
		} else {
			myButton.marginTop = '-400px';
			myButton.opacity = '0';
		}
		window.onresize = function (event) {
			if (window.innerWidth > 768) {
				myButton.marginTop = '-400px';
				myButton.opacity = '0';
			}
		}

	}
	
	return (
		<header className="container-fluid navbar-fixed-top">
			<div className="container">
				<div className="logo col-md-2">
					<span className="logoChn">故鄉旅遊</span><br />
					<span className="logoEng">Good Shine Travel</span>
				</div>
				<div className="headerButtons col-md-10 text-center">
					{nav}
					
				</div>
				<a className="hamburger" onClick={toggleBurger} >☰</a><br />
				
				<div className="navVert" style={{marginTop : '-400px', opacity : 0}} >{nav}</div>
			</div>
			
		</header>
	)
}

export default Header