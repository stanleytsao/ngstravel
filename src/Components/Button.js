import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var Button = React.createClass({

	handleClick() {
		console.log('Clicked');
	},

	getInitialState() {
		return { lang : 'eng' };
	},

	render() {
		return <RaisedButton className={this.state.lang} label={this.props.name} onClick={this.handleClick} />
	}
});

export default Button