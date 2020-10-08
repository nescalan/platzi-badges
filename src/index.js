import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from './components/Badge'

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
