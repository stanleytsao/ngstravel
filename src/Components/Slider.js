import React from 'react';
import Slider from 'react-slick';
import mainData from './mainData'

const Slideshow = ({name}) => {
	
	var sliderText;
	if (name !== "Home") {
		sliderText = name;
	} else {
		sliderText = 'Welcome';
	}

	var filterRegion = mainData.filter( function (data) {
		if (data.region === name || name === "Home") {
			return data;
		}
	})

	var sliderImages = filterRegion.slice(0,3).map((data) => (
		<img key={data.title} src={data.img} alt={data.title} height="350px"/>
	))

	var settings = {
    	adaptiveHeight: false,
    	arrows: false,
    	autoplay: true,
     	dots: false,
     	infinite: true,
     	fade: true,
     	speed: 1800,
    };

    return (
    	<div>
    		<span id="region">{sliderText}</span>
			<Slider {...settings}>
				{sliderImages}
			</Slider>
    	</div>
    	
	)		
}

export default Slideshow