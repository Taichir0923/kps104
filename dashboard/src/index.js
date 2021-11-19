import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Accounts from './Pages/Accounts/Accounts';

import Template from './Components/Dashboard/Template';

import 'antd/dist/antd.css';
import './static/style/style.scss';

ReactDOM.render(
  <Router>
    <Template>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/accounts' element={<Accounts />} />
      </Routes>
    </Template>
  </Router>,
  document.getElementById('root')
);