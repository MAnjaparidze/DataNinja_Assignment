import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// #region Material Components
import Container from '@mui/material/Container';
// #endregion

// #region Pages
import LoginPage from './Containers/LoginPageContainer';
import UserTestsPage from './Containers/UserTestsPageContainer';
// #endregion

// #region Methods
import { handleSetData } from './Helpers/setData';
import { handleCheckAuth } from './Helpers/checkAuth';
// #endregion

export default class App extends Component {

  componentDidMount() {
    handleSetData();
  };

  render() {
    let isAuthed = handleCheckAuth();

    return (
      <Router>
        <div>
          <Switch>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/userTests">
              {isAuthed ? <UserTestsPage /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/userTests/:testId">
              {!isAuthed && <Redirect to="/login" />}
            </Route>

            <Route exact path="/">
              {!isAuthed && <Redirect to="/login" />}
            </Route>

            <Route>
              <h1>Sorry, Such Page doesn't Exist</h1>
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}
