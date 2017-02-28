import React from 'react';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Main from './Components/Main/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './bootstrap.css';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Slider />
      <main className="container">
        <div className="row">
          <Main />
          <Ads />
        </div>
      </main>
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App