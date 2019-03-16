import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shuffl</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="signIn">
            {/*<p>SIGN IN</p>*/}
            <Form>
              <Form.Group controlId={"formBasicUsername"}>
                <Form.Control type={"email"} placeholder={"Username"}/>
              </Form.Group>
              <Form.Group controlId={"formBasicPassword"}>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/*<Button variant={"primary"} type={"login"}>*/}
                {/*Login*/}
              {/*</Button>*/}

              {/*<Button variant={"secondary"} type={"signup"}>*/}
                {/*Sign Up*/}
              {/*</Button>*/}
              <div className="butlogin">
                {/*<a href="www.google.com" className="loginhere"><button>Click Me</button></a>*/}
                <button className="button loginhere">Login</button>
              </div>
              <div className="butsignup">
                {/*<a href="www.yahoo.com" className="signuphere"><button>Click Me2</button></a>*/}
                <button className="button signuphere">Sign Up</button>
              </div>

            </Form>
          </div>
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload. Welcome to Shuffl !!!*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
          {/*<a href="https://www.google.com"><button>Click Me</button></a>*/}
          {/*<a href="https://www.yahoo.com"><button>Click Me2</button></a>*/}

        </header>
      </div>
    );
  }
}

export default App;
