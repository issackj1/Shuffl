import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            signUp: true
        };

        this.switchSignUp = this.switchSignUp.bind(this)
    }

    switchSignUp = () =>{
        const {signUp} = this.state;
        this.setState({signUp : !signUp})
        
    }

    authenticate = () =>{
        this.props.authenticate();
    } 
    render() {

        return (
            <div className="SignUp">
                <header className="SignUpHeader">
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
                                <div>
                                    <div>
                                        <div onClick={this.authenticate} className="button primary">Login</div>
                                    </div>
                                    <div className="secondaryText">
                                        <div  onClick={this.switchSignUp} className="link secondary">Sign Up</div>
                                    </div>
                                    <div className="secondaryText">
                                        <button className="link forgotpass">Forgot password?</button>
                                    </div>
                                </div>
                                :<div>
                                    <Form.Group controlId={"form"}>
                                        <Form.Control type="password" placeholder="Re-enter Password" />
                                    </Form.Group>
                                    <input type="date" className="bday" minvalue={"01-01-01"} placeholder="Birthday" ></input>
                                    <div className="secondaryText"> <input className="agree" type="checkbox"></input>I have read the <div className="link secondary">terms & conditions</div></div>
                                    <div>
                                        <div onClick={this.authenticate} className="button primary">Sign Up</div>
                                    </div>
                                    <div className="secondaryText">
                                        Already a user?<div onClick={this.switchSignUp} className="link secondary">Login</div>
                                    </div>
                                </div>
                            }
                        </Form>
                    </div>
                </header>
            </div>
        );
    }    
}

export default SignUp;