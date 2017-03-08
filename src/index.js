import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './Components/Header';
import Slideshow from './Components/Slider';
import Main from './Components/Main/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './bootstrap.css';
import './style.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


      // <Header />
const App = () => (
  <MuiThemeProvider>
    <div>

      <Slideshow />
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
