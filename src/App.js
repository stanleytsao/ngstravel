import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './bootstrap.css'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <div className="container">
        <Nav />
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