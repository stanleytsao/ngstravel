import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Slider from './Components/Slider';
import Main from './Components/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './bootstrap.css'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Nav />
      <Slider />
      <div className="container">
        <div className="row">
          <Main />
          <Ads />
        </div>
      </div>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App