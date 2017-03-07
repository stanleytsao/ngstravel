import React from 'react';
import Slider from 'react-slick';

var Slideshow = React.createClass({
	render: function () {
		var settings = {
	    	adaptiveHeight: true,
	    	arrows: false,
	    	autoplay: true,
	     	dots: false,
	     	infinite: true,
	     	fade: true,
	     	speed: 1800,
	    };
	    return (
			<Slider {...settings}>
				<img src='http://lorempixel.com/1000/300/food/1' alt="Food 1"/>
				<img src='http://lorempixel.com/1000/300/food/2' alt="Food 2"/>
				<img src='http://lorempixel.com/1000/300/food/3' alt="Food 3"/>
				<img src='http://lorempixel.com/1000/300/food/4' alt="Food 4"/>
			</Slider>
		)		
	}
});

export default Slideshow