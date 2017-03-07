import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var Button = React.createClass({
	render() {
		return <RaisedButton label={this.props.name} />
	}
});

export default Button