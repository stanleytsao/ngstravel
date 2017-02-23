import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component { 

	handleClick() {
		console.log('Clicked');
	}

	render() {
		return <RaisedButton label={this.props.name} onClick={this.handleClick} />
	}
}

export default Button