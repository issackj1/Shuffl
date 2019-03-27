import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import '../css/SignUp.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class LogIn extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="signIn">
                        {/*<p>SIGN IN</p>*/}
                        <Form>
                            
                            <Form.Group controlId={"form"}>
                                <Form.Control type={"email"} placeholder={"Username"}/>
                            </Form.Group>
                            <Form.Group controlId={"form"}>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <div id="signUp" hidden='true'>
                                <Form.Group controlId={"form"}>
                                    <Form.Control type="password" placeholder="Re-enter Password" />
                                </Form.Group>
                                <input type="date" className="bday" minvalue={"01-01-01"} placeholder="Birthday" ></input>
                                <div className="secondaryText"> <input className="agree" type="checkbox"></input>I have read the<button className="button secondary">terms & conditions</button></div>
                                <div className="secondaryText">
                                    <button className="button primary">Sign Up</button>
                                </div>
                                <div className="secondaryText">
                                    Already a user?<button className="button secondary">Login</button>
                                </div>
                            </div>

                            <div id="logIn">
                                <div>
                                    <button className="button primary">Login</button>
                                </div>
                                <div>
                                    <button  className="button secondary">Sign Up</button>
                                </div>
                                <div className="secondaryText">
                                    <button className="button forgotpass">Forgot password?</button>
                                </div>
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

export default LogIn;