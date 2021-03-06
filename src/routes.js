import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from './components/Login';
import App from './components/App';
import Register from './components/Register';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Aboutme from './components/Aboutme';
import Abroad from './components/Abroad';
import Carrier from './components/Carrier';
import Support from './components/Support';
import Logout from './components/Logout';
import Search from './components/Search';
import Settings from './components/Settings';
import NotFoundPage from './components/NotFoundPage';
import Policy from './components/Policy';

const routes = (store) => {
  const requireAuth = (nextState, replace) => {
    if (store.getState().user === null) {
      // Not authenticated, redirect to login.
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };

  const notAuth = (nextState, replace) => {
    if (store.getState().user !== null) {
      // Authenticated, redirect to home.
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };

  return (
    <Route path="/" component={App}>
      <Route onEnter={requireAuth}>
        <IndexRoute component={Aboutme} />
        <Route component={Aboutme} />
        <Route path="edit" component={ProfileEdit} />
        <Route path="abroad" component={Abroad} />
        <Route path="carrier" component={Carrier} />
        <Route path="search" component={Search} />
        <Route path="profile" component={Profile} />
        <Route path="settings" component={Settings} />
        <Route path="support" component={Support} />
        <Route path="logout" component={Logout} />
      </Route>
      <Route onEnter={notAuth}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="policy" component={Policy} />
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
};

export default routes;
