import React from 'react';
import Button from './Button';

class Nav extends React.Component {
	render(){
		var navButtonNames = {
			'Taiwan' : '台灣',
			'US' : '美加',
			'Europe' : '歐洲',
			'Asia' : '亞洲',
			'Overseas' : '海外精選',
			'Overseas travel to the US' : '海外來美旅遊',
		};
		var buttons = [];

		for (name in navButtonNames) {
			buttons.push(<Button name={navButtonNames[name] + name} />)
		}
		
		return (
			<nav>
				{buttons}
			</nav>
		)
	}
}

export default Nav