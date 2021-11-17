import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Template from './Components/Dashboard/Template';
import Content from './Components/Content';

ReactDOM.render(
  <Router>
    <Template>
      <Routes>
        <Route exact path="/home" element={<Content />} />
      </Routes>
    </Template>
  </Router>,
  document.getElementById('root')
);