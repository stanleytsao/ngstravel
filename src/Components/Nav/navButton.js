import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component { 

	handleClick() {
		console.log('Clicked');
	}

	render() {
		return <RaisedButton className="button" label={this.props.name} onClick={this.handleClick} />
	}
}

export default Button