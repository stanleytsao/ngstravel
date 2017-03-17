import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './fontAwesome/css/font-awesome.min.css'
import './bootstrap.css';
import './css/style.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<div>
	    	<Main />
	    	<Footer />
		</div>
	</MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
