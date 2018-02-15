import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';



class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { email, password } } = this.state;
    this.props.loginUser(email, password, this.props.history);
    // debugger
  };

  render() {
  const error = 
    <div class="ui negative message">
      <div class="header">
      Your Log in information is incorrect.
      </div>
      <p>Please try again.</p>
    </div>

    const { fields } = this.state;
    return (
      <div className="ui stackable container">
      {this.props.auth.login_error ? error : null}
      <div className="ui form">
        <div className="ui container center aligned">
        <h2 class="ui gray image header">
          <div class="title">
          Log In
          </div>
          </h2></div>
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>Email</label>
            <input
              name="email"
              placeholder="email"
              value={fields.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={fields.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui center aligned stackable container">
          <button type="submit" className="ui basic button positive">
            Login
          </button><br />
        </div>
        </form>
      </div>
      </div>
  )}
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  }
}

export default withRouter(connect(mapStateToProps, actions)(LoginForm));
