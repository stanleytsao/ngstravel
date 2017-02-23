import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 900,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://lorempixel.com/640/480/nature/1',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/640/480/nature/2',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://lorempixel.com/640/480/nature/3',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://lorempixel.com/640/480/nature/4',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://lorempixel.com/640/480/nature/5',
    title: 'Hats',
    author: 'Hans',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/6',
    title: 'Honey',
    author: 'fancycravel',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/640/480/nature/7',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/640/480/nature/8',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const Main = () => (
  <div className="col-md-10" style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 1 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);


export default Main