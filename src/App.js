import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from './utils/toast';
import AccessibleNavigationAnnouncer from './components/global/AccessibleNavigationAnnouncer';
import PrivateRoute from './components/global/login/PrivateRoute';

const Layout = lazy(() => import('./layout/Layout'));
const Login = lazy(() => import('./pages/global/Login'));
const SignUp = lazy(() => import('./pages/global/SignUp'));
const ForgetPassword = lazy(() => import('./pages/global/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/global/ResetPassword'));

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          <PrivateRoute>
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
