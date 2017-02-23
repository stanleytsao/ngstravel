import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const tilesData = [
  {
    img: 'http://lorempixel.com/640/480/nature/1',
    title: 'Breakfast',
    price: '$' + Math.floor((Math.random() * 1000) + 100),
    popular: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/2',
    title: 'Tasty burger',
    price: 'pashminu',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/3',
    title: 'Camera',
    price: 'Danson67',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/4',
    title: 'Morning',
    price: 'fancycrave1',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/5',
    title: 'Hats',
    price: 'Hans',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/6',
    title: 'Honey',
    price: 'fancycravel',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/7',
    title: 'Vegetables',
    price: 'jill111',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/8',
    title: 'Water plant',
    price: 'BkrmadtyaKarki',
    featured: true,
  },
];

var featured = tilesData.filter( function (tile) {
  if (tile.featured === true) {
    return tile;
  }
})

var popular = tilesData.filter( function (tile) {
  if (tile.popular === true) {
    return tile;
  }
})
console.log(popular);

const Main = () => (
  <div className="col-md-10" style={styles.root}>
    
    <div className="col-md-6">
      <h3>New Packages</h3>
      <GridList
        cols={2}
        cellHeight={150}
        padding={1}
      >
        {popular.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={tile.price}
            // titlePosition="top"
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={2}
            rows={1}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    
    <div className="col-md-6">
      <h3>Most Popular</h3>
      <GridList
        cols={2}
        cellHeight={150}
        padding={1}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.price}</b></span>}
            // titlePosition="top"
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 1 : 1}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>

  </div>
);


export default Main