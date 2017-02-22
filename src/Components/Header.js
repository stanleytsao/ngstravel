import React from 'react';
import Button from './Button';

class Header extends React.Component {
	render(){
		var headerButtonNames = {
			'Home' : '首頁',
			'Tours' : '旅遊',
			'Cruises' : '郵輪',
			'Hotels' : '酒店',
			'Contact' : '聯繫',
		};
		var buttons = [];

		for (name in headerButtonNames) {
			buttons.push(<Button name={headerButtonNames[name] + name} />)
		}
		
		return (
			<header>
				<h1>故鄉旅遊 Good Shine Travel</h1>
				{buttons}
			</header>
		)
	}
}

export default Header