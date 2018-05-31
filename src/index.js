import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import WebFont from 'webfontloader';
WebFont.load({
    google: {
      families: [
                'Lato:100,100i,300,300i,400,400i,700,700i,900,900i']
    }
  });
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
