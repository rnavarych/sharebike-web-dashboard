import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { login } from "../../utils/firebase";
import history from "../../nav/history";
import * as routes from '../../constants/routes'
import { logIn } from "../../actions/auth";
import { LOG_IN, LOGIN, PASSWORD } from "../../constants/localize";

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      message: ''
    };
  }

  changeLogin = (login) => this.setState({login: login.target.value});

  changePassword = (password) => this.setState({password: password.target.value});

  loginSuccess = (user) => {
    if (user) {
      this.props.logIn(user)
      history.replace(routes.DASHBOARD_SCREEN)
    }
  };

  loginError = (error) => {
    this.setState({message: error.message});
    setTimeout(() => this.setState({message: ''}), 5000);
  };

  login = () => login(this.state.login, this.state.password).then(this.loginSuccess).catch(this.loginError);

  render() {
    return (
      <div className='app'>
        <div className='authBlock'>
          <div className='inputBlock'>
            <p className='textDescription'>{LOGIN}:</p>
            <input
              className='input'
              placeholder={ LOGIN }
              type="text"
              name='text'
              onChange={ this.changeLogin }/>
          </div>
          <div className='inputBlock'>
            <p className='textDescription'>{PASSWORD}:</p>
            <input
              className='input'
              placeholder={ PASSWORD }
              type="password"
              accept='password'
              onChange={ this.changePassword }/>
          </div>
          <p className='message'>{this.state.message}</p>
          <button className='button' onClick={ this.login }>{LOG_IN}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
