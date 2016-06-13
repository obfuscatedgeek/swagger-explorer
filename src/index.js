console.log('hello world!!');

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './Routes';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/foundation-sites/dist/foundation.min.css'
import './styles/styles.css';


render(
	<Router history={browserHistory} routes={routes}></Router>, document.getElementById('app')
);