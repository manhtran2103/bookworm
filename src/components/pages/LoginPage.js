import React from 'react';
import LoginFrom from '../form/LoginForm';

class LoginPage extends React.Component{
  submit = (data) => {
    console.log(data);
  }

  render(){
    return (
      <div>
      <h1>Login Page</h1>
      <LoginFrom submit={this.submit} />
    </div>
    );
  }
}

export default LoginPage;
