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
		console.log(myButton);
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
			<div className="headerButtonsVert">{buttons}</div>
		</header>
	)
}

export default Header