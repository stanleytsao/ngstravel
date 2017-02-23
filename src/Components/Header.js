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
		return (<Button key={name} name={headerButtonNames[name] + name} />)
	});

	return (
		<header className="container-fluid navbar-fixed-top">
			<div className="container">
				<div className="logo">故鄉旅遊 Good Shine Travel</div>
				<div className="headerButtons">{buttons}</div>
			</div>
		</header>
	)
}

export default Header