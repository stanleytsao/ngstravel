import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import mainData from './mainData'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

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
  <div className="col-md-10 main" style={styles.root}>
    
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
            <a href={tile.img}>
              <img src={tile.img} alt={tile.title} />
            </a>
          </GridTile>
        ))}
      </GridList>
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
            <a href={tile.img}>
              <img src={tile.img} alt={tile.title} />
            </a>
          </GridTile>
        ))}
      </GridList>
    </div>

  </div>
);

export default Main