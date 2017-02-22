import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Ads from './Components/Ads';
import Footer from './Components/Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Nav />
        <Main />
        <Ads />
        <Footer />
      </div>
    );
  }
}

injectTapEventPlugin();

export default App