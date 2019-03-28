import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import '../css/SignUp.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class LogIn extends Component {
    constructor(){
        super();

        this.state = {
            showMe: true
        }
    }

    operation(){
        this.setState({
            showMe:false
        })
    }

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

                            <div id="signUp">
                                <Form.Group controlId={"form"}>
                                    <Form.Control type="password" placeholder="Re-enter Password" />
                                </Form.Group>
                                <input type="date" className="bday" minvalue={"01-01-01"} placeholder="Birthday" ></input>
                                <div className="secondaryText"> <input className="agree" type="checkbox"></input>I have read the<button className="button secondary">terms & conditions</button></div>
                                <div className="secondaryText">
                                    <button className="button primary">Sign Up</button>
                                </div>
                                <div className="secondaryText">
                                    Already a user?<button onClick={()=>this.operation()} className="button secondary">Login</button>
                                </div>
                            </div>
                            {
                                this.state.showMe?
                                <div>
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
                            :null
                            }
                        </Form>
                    </div>
                </header>
            </div>
        );
    }

    

    
}

export default LogIn;