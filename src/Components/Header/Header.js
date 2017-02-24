import React from 'react';
import Button from './headerButton';

const Header = () => {
	var headerButtonNames = {
		'Home' : '首頁',
		'Tours' : '旅遊',
		'Cruises' : '郵輪',
		'Hotels' : '酒店',
		'Contact' : '聯繫',
	};

	var buttons = Object.keys(headerButtonNames).map(function(name){
		return (<Button key={name} name={headerButtonNames[name] + "\n" + name} />)
	});

	function toggleBurger() {
		var myButton = document.getElementsByClassName("headerButtonsVert");
		// console.log(window.innerWidth);
		if (myButton["0"].style.marginTop === '-300px') {
			myButton["0"].style.marginTop = '0';
		} else {
			myButton["0"].style.marginTop = '-300px';
		}
		window.onresize = function (event) {
			if (window.innerWidth > 768) {
				myButton["0"].style.marginTop = '-300px';
			}
		}

	}

	var vertStyle = {
		marginTop: '-250px',
	}

	return (
		<header className="container-fluid navbar-fixed-top">
			<div className="container">
				<div className="logo">
					<span className="logoChn">故鄉旅遊</span>
					<span className="logoEng">Good Shine Travel</span>
				</div>
				<div className="headerButtons">{buttons}</div>
				
				<a className="hamburger" onClick={toggleBurger} >☰</a>
			</div>
			<div className="headerButtonsVert" style={vertStyle} >{buttons}</div>
		</header>
	)
}

export default Header