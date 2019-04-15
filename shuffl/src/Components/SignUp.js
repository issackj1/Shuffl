import React, {Component} from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUp: true,
            name: '',
            email: '',
            password: '',
            password2: ''
        };

        this.switchSignUp = this.switchSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    componentDidMount() {
    }

    switchSignUp = () => {
        const {signUp} = this.state;
        this.setState({signUp: !signUp});
        document.getElementById('badfill').innerText = "";
        document.getElementById('badpassword').innerText = "";
        document.getElementById('registered').innerText = "";
        document.getElementById('invalidemail').innerText = "";
        document.getElementById('uniqueuser').innerText = "";

    };

    handleChange = (event) => {
        const name = event.target.name;

        this.setState({[name]: event.target.value});
    };

    handleSubmit = (event) => {
        // event.preventDefault();
        axios.post('http://159.65.109.79:4000/users/register', this.state)
            .then(response => {
                let p = "There was an error in signup: \n";
                document.getElementById('badfill').innerText = "";
                document.getElementById('badpassword').innerText = "";
                document.getElementById('registered').innerText = "";
                document.getElementById('invalidemail').innerText = "";
                document.getElementById('uniqueuser').innerText = "";
                console.log(response);
                if (response.data.hasOwnProperty('user')) {
                    this.switchSignUp()
                    //this.props.authenticate(response.data.user, response.data.name);
                } else {
                    if (response.data.hasOwnProperty('fill')) {
                        p = p + "Please fill in the forms\n";
                    }
                    if (response.data.hasOwnProperty('match')) {
                        p = p + "Passwords don't match\n";
                    }
                    if (response.data.hasOwnProperty('passlength')) {
                        p = p + "Password needs to be at least 6 characters\n";
                    }
                    if (response.data.hasOwnProperty('already')) {
                        p = p + "Email is already registered\n";
                    }
                    if (response.data.hasOwnProperty('atsymbol')) {
                        p = p + "Invalid Email\n";
                    }
                    if (response.data.hasOwnProperty('useralready')) {
                        p = p + "Username is already taken\n";
                    }
                    alert(p);
                }
            })
            .catch(function (error) {
                    console.log(error);
                }
            )
    };


    authenticate = () => {
        axios.post('http://159.65.109.79:4000/users/login', this.state, {withCredentials: true})
            .then(response => {
                if (response.data.res) {
                    this.props.authenticate(response.data.res.user, response.data.res.name);
                } else {
                    if (response.data.res.hasOwnProperty('fill')) {
                        this.props.authenticate(response.data.res._id, response.data.res.name);
                    } else {
                        document.getElementById('badfill').innerText = "Incorrect name or password";
                    }
                }
            })
            .catch(function (error) {
                alert('Incorrect name or password. Please try again');
            });
    };

    render() {

        return (
            <div className="SignUp">
                <header className="SignUpHeader">
                    <img src={logo} className="signInLogo" alt="signinlogo"/>
                    <div className="signIn">
                        {/*<p>SIGN IN</p>*/}
                        <span id={"registered"}></span>
                        <span id={"badfill"}></span>
                        <span id={"badname"}></span>

                        <Form>
                            <span id={"uniqueuser"}></span>
                            <Form.Group controlId={"form"}>
                                <Form.Control name={"name"} type={"username"} onChange={this.handleChange}
                                              placeholder={"Username"}/>
                            </Form.Group>
                            <span id={"invalidemail"}></span>
                            {
                                this.state.signUp ?
                                    <span></span>
                                    : <Form.Group controlId={"form"}>
                                        <Form.Control name={"email"} type="email" onChange={this.handleChange}
                                                      placeholder="Email"/>
                                    </Form.Group>
                            }
                            <span id={"badpassword"}></span>
                            <Form.Group controlId={"form"}>
                                <Form.Control name={"password"} type="password" onChange={this.handleChange}
                                              placeholder="Password"/>
                            </Form.Group>
                            {
                                this.state.signUp ?
                                    <div>
                                        <div className="secondaryTextLogin">
                                            <div onClick={this.authenticate} className="button primary">Login</div>
                                        </div>
                                        <div className="secondaryText">
                                            <div onClick={this.switchSignUp} className="link secondary">Sign Up</div>
                                        </div>
                                        <div className="secondaryText">
                                            <div className="link forgotpass">Forgot password?</div>
                                        </div>
                                    </div>
                                    : <div>
                                        <Form.Group controlId={"form"}>
                                            <Form.Control name={"password2"} type="password" onChange={this.handleChange}
                                                          placeholder="Re-enter Password"/>
                                        </Form.Group>
                                        <div className="secondaryText"><input className="agree" type="checkbox"></input>I
                                            have read the <div className="link secondary"> &nbsp;terms & conditions</div>
                                        </div>
                                        <div className="secondaryTextLogin">
                                            <div onClick={this.handleSubmit} className="button primary">Sign Up</div>
                                        </div>
                                        <div className="secondaryText">
                                            Already a user?&nbsp;
                                            <div onClick={this.switchSignUp} className="link secondary">Login</div>
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
