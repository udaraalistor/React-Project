import React, {Component} from "react";
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css';
import LogIn from "../LogIn/login";


const initialState = {

    email: "",
    password: "",
    repassword:"",
    emailError: "",
    passwordError: "",
    repasswordError: "",
    matchingError: ""
};

export default class SignIn extends Component{

    state = initialState;


    handleChange = event => {
        console.log("handlechangeworking");
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value

        });
    };

    // check validation  //

    validate = () => {

        let emailError = "";
        let passwordError = "";
        let repasswordError = "";
        let matchingError = "";

        if (!this.state.password) {
            passwordError = "password cannot be blank";
        }
        if (!this.state.repassword) {
            repasswordError = "repassword cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if(this.state.password != this.state.repassword){
            matchingError ="password not match";
        }

        if (emailError || passwordError||repasswordError||matchingError) {
            this.setState({ emailError,passwordError,repasswordError,matchingError });
            return false;
        }
        return true;
    };


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            if (this.state.password==this.state.repassword){
                this.props.history.push({
                    pathname:"/login",
                    state:{
                        email: this.state.email,
                        password: this.state.password
                    },


                    });
                {console.log(this.state.email)}
                {console.log(this.state.password)}
                {console.log(this.state.repassword)}

            }

            console.log(this.state);
            this.setState(initialState);


        }
    };


    render() {
        const { formData, submitted } = this.state;
        return(
            <div>

            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1"
                                                                                                  className="tab">-  Sign
                    In-</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                    <label htmlFor="tab-2" className="tab"></label>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">E-mail</label>
                                <input value={this.state.email} onChange={this.handleChange} placeholder="email" id="user" type="text" className="input" name="email"/>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" value={this.state.password} onChange={this.handleChange} placeholder="password" name="password"/>
                                {/*alert*/}
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                                <br/>
                                <label htmlFor="pass" className="label">Re-enter Password</label>
                                <input value={this.state.repassword} onChange={this.handleChange} placeholder="repassword"  type="password" className="input"  name="repassword"/>
                                {/*alert*/}
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.repasswordError}
                                </div>
                                {/*alert*/}
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.matchingError}
                                </div>
                            </div>
                            <div className="group">
                                <button  id="btn8" type="submit" className="button" value="Sign In">
                                    Sign In
                                </button>
                            </div>
                            <div className="hr"></div>

                        </div>

                    </form>
                </div>
             </div>
            </div>

        )
    }
}