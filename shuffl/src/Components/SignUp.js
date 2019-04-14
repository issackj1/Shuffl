import React, {Component} from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';
import axios from "axios";

// import Button from 'react-bootstrap/Button';

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
        // this.props.socket.emit('submitreq', this.state)
        // this.props.socket.on('submitapprove', ()=>{
        //     console.log('approved')
        //     this.props.authenticate();
        // })
        //
        //
        axios.post('http://localhost:4000/users/register', this.state)
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
                        // document.getElementById('badfill').innerText = "Please fill in the forms";
                        p = p + "Please fill in the forms\n";
                    }
                    if (response.data.hasOwnProperty('match')) {
                        //alert(response.data.match);
                        // document.getElementById('badpassword').innerText = "Passwords don't match";
                        p = p + "Passwords don't match\n";
                    }
                    if (response.data.hasOwnProperty('passlength')) {
                        //alert(response.data.passlength);
                        // document.getElementById('badpassword').innerText = "Password needs to be at least 6 characters";
                        p = p + "Password needs to be at least 6 characters\n";
                    }
                    if (response.data.hasOwnProperty('already')) {
                        //alert(response.data.already);
                        // document.getElementById('registered').innerText = "Email is already registered";
                        p = p + "Email is already registered\n";
                    }
                    if (response.data.hasOwnProperty('atsymbol')) {
                        // alert(response.data.already);
                        // document.getElementById('invalidemail').innerText = "Invalid Email";
                        p = p + "Invalid Email\n";
                    }
                    if (response.data.hasOwnProperty('useralready')) {
                        // alert(response.data.already);
                        // document.getElementById('uniqueuser').innerText = "Username is already taken";
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


    authenticate = (userid, username) => {
        //
        // this.props.socket.emit('authreq', this.state)
        // this.props.socket.on('authapprove', function(user){
        //     this.props.authenticate(user._id, user.name);
        // }.bind(this))
        //this is the authentication,
        //uncomment this block and
        //comment out "this.props.authenticate() at the bottom" to test
        //
        axios.post('http://localhost:4000/users/login', this.state, {withCredentials: true})
            .then(response => {
                console.log(response.data.res.user);
                if (response.data.res) {
                    //redirect
                    this.props.authenticate(response.data.res.user, response.data.res.name);
                    //alert('success');
                } else {
                    if (response.data.res.hasOwnProperty('fill')) {
                        this.props.authenticate(response.data.res._id, response.data.res.name);
                    } else {
                        document.getElementById('badfill').innerText = "Incorrect name or password";
                        // console.log('BAD');
                    }
                }
            })
            .catch(function (error) {
                //console.log(error);
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
