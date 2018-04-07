import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

import 'uikit/dist/css/uikit.min.css'
import './index.css';

UIkit.use(Icons);

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root')
  );
