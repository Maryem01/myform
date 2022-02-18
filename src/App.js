import logo from './logo.svg';
import './App.css';
import{ Button, form, FormGroup, Label, Input}
from 'reactstrap'
import {FacebookLoginButton} from 'react-social-login-buttons'; 
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <form className="login-form">
    <h1>
    <span className="font-weight-bold">SignUp</span>.Com
    </h1>
    
    <FormGroup>
    <Label>Login</Label>
    <Input type ="Login" placeholder="Enter your login"/>
    </FormGroup>
   
   
    <FormGroup>
    <Label>Email</Label>
    <Input type ="email" placeholder="Email"/>
    </FormGroup>
    
    <FormGroup>
    <Label>Password</Label>
    <Input type ="password" placeholder="Password"/>
    </FormGroup>
    <Button className="btn-lg btn-dark btn-block">Sign up</Button>
    <div className="text-center pt-3">Or continue with your social account</div>
    <FacebookLoginButton className="mt-3 mb-3"/>
    <div className="text-center">
      <a href ="/sign-up"> </a>
      <span className="p-2"></span>
      <a href="/sign-up">Forgot Password</a>
    </div>
    </form>
  );
}
}

export default App;
