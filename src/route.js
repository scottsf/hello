import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import Form from './components/form/Form';
import Post from './components/post/Post';

const route = (
  <Switch>
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/auth" component={Auth} />
    <Route path="/form" component={Form} />
    <Route path="/post" component={Post} />
  </Switch>
);

export default route;
