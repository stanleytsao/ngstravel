import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import mainData from './mainData'
import Slideshow from './Slider';
import Ads from './Ads';

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
          titleBackground="linear-gradient(to top, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.5) 75%,rgba(255,255,255,0) 100%)"
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
          titleBackground="linear-gradient(to top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.4) 75%,rgba(255,255,255,0) 100%)"
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
    <div style={styles.root}>
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
      value: 'Home'
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
      case "Inbound": this.setState({ value: name })
        break;
    }
  }
  render() {
    return (
      <div>
        <Slideshow name={this.state.value}/>
        <header className="container-fluid navbar-fixed-top">
          <hr className="mobileHeight" />
          <div className="container">
            <div className="logo col-md-3">
              <img src="http://placehold.it/200x100" alt="logo"/>
            </div>
            <nav className="col-md-9 text-right">
              <div className="row">
                <FlatButton onClick = {() => {this.handleButton("Home")}}><p className="chn">首頁</p><p>Home</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Taiwan")}}><p className="chn">台灣</p><p>Taiwan</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("China")}}><p className="chn">中國</p><p>China</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("US")}}><p className="chn">美加</p><p>US</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Europe")}}><p className="chn">歐洲</p><p>Europe</p></FlatButton>
              </div>
              <div className="row">
                <FlatButton onClick = {() => {this.handleButton("Asia")}}><p className="chn">亞洲</p><p>Asia</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Cruises")}}><p className="chn">郵輪</p><p>Cruises</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Hotels")}}><p className="chn">酒店</p><p>Hotels</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Overseas")}}><p className="chn">海外</p><p>Overseas</p></FlatButton>
                <FlatButton onClick = {() => {this.handleButton("Inbound")}}><p className="chn">海外來美</p><p>Inbound</p></FlatButton>
              </div>
            </nav>
            <a id="hamburger" href="#">test<i className="fa fa-bars" aria-hidden="true"></i></a>
          </div>
        </header>
        <main className="container">
          <div className="col-md-10">
            <FilteredData name={this.state.value}/>
          </div>
          <div className="col-md-2">
            <Ads />
          </div>
        </main>
      </div>
    )
  }
}

export default Main