import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import mainData from './mainData'
import Slideshow from '../Slider';

const FilteredData = ({name}) => {

  var filterRegion = mainData.filter( function (data) {
    if (data.region === name || name === "Home") {
      return data;
    }
  })

  var filterFeatured = filterRegion.filter( function (data) {
    if (data.featured === true) {
      return data;
    }
  })

  var filterNew = filterRegion.filter( function (data) {
    if (data.new === true) {
      return data;
    }
  })

  var showFeatured = (
    <GridList cols={2} cellHeight={170} padding={1}>
      {filterFeatured.slice(0,4).map((tile) => (
        <GridTile
          key={tile.title}
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
  )

  var showNew = (
    <GridList cols={2} cellHeight={170} padding={1}>
      {filterNew.slice(0,4).map((tile) => (
        <GridTile
          key={tile.title}
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
  )

  var styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  };
  return (
    <div className="col-md-10 main" style={styles.root}>
      <div className="col-md-6">
      <h3>Featured Packages</h3>
      {showFeatured}
      </div>
      <div className="col-md-6">
      <h3>New Packages</h3>
      {showNew}
      </div>
    </div>
      
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Taiwan'
    }
  }
  handleButton(name) {
    switch(name) {
      case "Home": this.setState({ value: name })
        break;
      case "Taiwan": this.setState({ value: name })
        break;
      case "China": this.setState({ value: name })
        break;
      case "US": this.setState({ value: name })
        break;
      case "Europe": this.setState({ value: name })
        break;
      case "Asia": this.setState({ value: name })
        break;
      case "Cruises": this.setState({ value: name })
        break;
      case "Hotels": this.setState({ value: name })
        break;
      case "Overseas": this.setState({ value: name })
        break;
      case "Travel to US": this.setState({ value: name })
        break;
    }
  }
  render() {
    return (
      <div>
        <header className="container-fluid navbar-fixed-top">
          <div className="container">
            <div className="logo col-md-2">
              <span className="logoChn">故鄉旅遊</span><br />
              <span className="logoEng">Good Shine Travel</span>
            </div>
            <RaisedButton onClick = {() => {this.handleButton("Home")}}>Home</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Taiwan")}}>Taiwan</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("China")}}>China</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("US")}}>US</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Europe")}}>Europe</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Asia")}}>Asia</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Cruises")}}>Cruises</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Hotels")}}>Hotels</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Overseas")}}>Overseas</RaisedButton>
            <RaisedButton onClick = {() => {this.handleButton("Travel to US")}}>Travel to US</RaisedButton>
          </div>
        </header>
        
        <Slideshow name={this.state.value}/>
        <FilteredData name={this.state.value}/>
      </div>
    )
  }
}

export default Main