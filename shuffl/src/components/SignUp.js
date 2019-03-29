import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import '../css/SignUp.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class LogIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            signUp: false,
            logIn: true
        };

        this.operation = this.operation.bind(this)
    }

    operation = () =>{
        const {signUp, logIn} = this.state;
        this.setState({signUp : !signUp,logIn:!logIn})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="signInLogo" alt="signinlogo"/>
                    <div className="signIn">
                        {/*<p>SIGN IN</p>*/}
                        <Form>
                            
                            <Form.Group controlId={"form"}>
                                <Form.Control type={"email"} placeholder={"Username"}/>
                            </Form.Group>
                            <Form.Group controlId={"form"}>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {
                                this.state.signUp?
                                <div id="signUp">
                                    <Form.Group controlId={"form"}>
                                        <Form.Control type="password" placeholder="Re-enter Password" />
                                    </Form.Group>
                                    <input type="date" className="bday" minvalue={"01-01-01"} placeholder="Birthday" ></input>
                                    <div className="secondaryText"> <input className="agree" type="checkbox"></input>I have read the<div className="link secondary">terms & conditions</div></div>
                                    <div className="secondaryText">
                                        <button className="button primary">Sign Up</button>
                                    </div>
                                    <div className="secondaryText">
                                        Already a user?<div onClick={this.operation} className="link secondary">Login</div>
                                    </div>
                                </div>
                            :null
                            }
                            {
                                this.state.logIn?
                                <div>
                                    <div>
                                        <button className="button primary">Login</button>
                                    </div>
                                    <div>
                                        <div  onClick={this.operation} className="button secondary">Sign Up</div>
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