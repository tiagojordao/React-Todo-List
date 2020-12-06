import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Auth from './pages/auth';
import Register from './pages/register';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component = { Auth } exact/>
      <Route path='/user' component = { Home }/>
      <Route path='/cadastro' component = { Register }/>
    </BrowserRouter>
  )
}

export default Routes;