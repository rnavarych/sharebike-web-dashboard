import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./containers/loginScreen";
import history from "./nav/history";
import { firebaseInitializeApp, signOut } from "./utils/firebase";
import * as routes from './constants/routes';
import DashboardScree from "./containers/dashboardScreen";
import PrivateRoute from "./components/privateRoute";
import { connect } from "react-redux";

class App extends React.Component{

  constructor(props){
    super(props)
    firebaseInitializeApp();
  }

  componentWillUnmount() {
    signOut();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={routes.LOGIN_SCREEN} exact component={LoginScreen} />
          <PrivateRoute path={routes.DASHBOARD_SCREEN} component={DashboardScree} isAuthenticated={!!this.props.user} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = ({auth: {user}}) => ({
  user
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);