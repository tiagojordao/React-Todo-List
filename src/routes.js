import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Auth from './pages/auth';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component = { Auth } exact/>
      <Route path='/user' component = { Home }/>
    </BrowserRouter>
  )
}

export default Routes;