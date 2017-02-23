import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';

class Ads extends React.Component {
	render(){
		return (
			<Card className="col-md-2 ads">
			    <CardTitle title="Ads" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			</Card>
		)		
	}
}

export default Ads