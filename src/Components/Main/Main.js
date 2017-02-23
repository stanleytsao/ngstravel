import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Button from '../Nav/navButton';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

const mainData = [
  {
    img: 'http://lorempixel.com/640/480/nature/1',
    title: 'Breakfast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    popular: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/2',
    title: 'Tasty burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    popular: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/3',
    title: 'Camera',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    popular: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/4',
    title: 'Morning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    popular: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/5',
    title: 'Hats',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/6',
    title: 'Honey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/7',
    title: 'Vegetables',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/8',
    title: 'Water plant',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
    price: '$' + (Math.floor(Math.random() * 6) + 1) + 99,
    featured: true,
  },
];

var featured = mainData.filter( function (tile) {
  if (tile.featured === true) {
    return tile;
  }
})

var popular = mainData.filter( function (tile) {
  if (tile.popular === true) {
    return tile;
  }
})

const Main = () => (
  <div className="col-md-10" style={styles.root}>
    
    <div className="col-md-6">
      <h3>New Packages</h3>
      <GridList
        cols={2}
        cellHeight={170}
        padding={1}
      >
        {featured.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title + ' - ' + tile.price}
            subtitle={tile.description}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={2}
            rows={1}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
      <Button key='featured' name='Show More' />
    </div>
    
    <div className="col-md-6">
      <h3>Most Popular</h3>
      <GridList
        cols={2}
        cellHeight={170}
        padding={1}
      >
        {popular.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title + ' - ' + tile.price}
            subtitle={tile.description}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            cols={2}
            rows={1}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
      <Button key='popular' name='Show More' />
    </div>

  </div>
);


export default Main