import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Button extends React.Component { 

	handleClick() {
		console.log('Clicked');
	}

	render() {
		return <FlatButton label={this.props.name} onClick={this.handleClick} />
	}
}

export default Button