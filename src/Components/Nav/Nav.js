import React from 'react';
import Button from './navButton';

class Nav extends React.Component {
	render(){
		var navButtonNames = {
			'Taiwan' : '台灣',
			'US' : '美加',
			'Europe' : '歐洲',
			'Asia' : '亞洲',
			'Overseas' : '海外精選',
			'Overseas to US' : '海外來美旅遊',
		};
		
		var buttons = Object.keys(navButtonNames).map(function(name){
			return (<Button key={name} name={navButtonNames[name] + "\n" + name} />)
		});
		
		return (
			<nav>
				{buttons}
			</nav>
		)
	}
}

export default Nav