import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './bootstrap.css';
import './style.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <main className="container">
        <Main />
        <Ads />
      </main>
      <Footer />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
