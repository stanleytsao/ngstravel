import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Ads extends React.Component {
	render(){
		return (
			<Card className="col-md-2">
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="http://placehold.it/350x150" alt="box" />
			    </CardMedia>
			    <CardTitle title="Card title" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			</Card>
		)		
	}
}

export default Ads