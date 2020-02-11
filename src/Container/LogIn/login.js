import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './login.css';
import SignIn from '../SignIn/signin';
// import history from "../../history";
// import {browserHistory} from "react-router-dom";
// import { ValidatorForm, TextValidator  } from 'react-material-ui-form-validator';
// import Button from '@material-ui/core/Button';

const initialState = {

    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

export default class LogIn extends Component{

    constructor(props) {
        super(props);
        // this.props.location.state.email=""
        // this.props.location.state.password=""
        //
        //  console.log("constructor id called");
        //  console.log(this.props.location.state.email);
        //  console.log(this.props.location.state.password);

        if (this.props.location.state==undefined){
            // props.email="";
            console.log("undefined is working.......");
            // console.log(this.props.location.state.email)
        } else {
            this.state.email=this.props.location.state.email
            this.state.password=this.props.location.state.password
        }
        // if (props.password==undefined){
        //     props.password="";
        //     console.log(props.password);
        //     // console.log(this.props.location.state.password)
        // }
       // console.log(this.props.location.state = {email: "", password: ""}) ;
       //  console.log(this.props.location.state.email) ;

    };

    state = initialState;



    // componentWillMount() {
    //     // this.props.location.state.email=""
    //     // this.props.location.state.password=""
    //     // if (this.props.location.state.email == undefined){
    //     //
    //     //     this.props.location.state.email="";
    //     //     // this.state.email= this.props.location.state.email.bind();
    //     // }
    //     //
    //     // if (this.props.location.state.password == undefined){
    //     //
    //     //     this.props.location.state.password="";
    //     // }
    //
    //     console.log("mount is working");
    //     console.log(this.props);
    //     console.log(this.props.location.state);
    // }



    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value

        });
    };

    validate = () => {

        let emailError = "";
        let passwordError = "";

        if (!this.state.password) {
            passwordError = "password cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError,passwordError });
            return false;
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.history.push({
                pathname:"/main",
                state:{
                    email: this.state.email
                },


            });
            console.log(this.state);
            this.setState(initialState);
            {console.log(this.state.email)}
            {console.log(this.state.password)}

        }
    };

    siginSubmit = event => {
        this.props.history.push({
            pathname:"/signin",
            state:{
                email: this.state.email
            },


        });
    }


render() {
    const { formData, submitted } = this.state;
    return(


        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1"
                                                                                              className="tab">-  Log
                In-</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                <label htmlFor="tab-2" className="tab"></label>
                <form   className="login-form">
                    <div className="sign-in-htm">

                        <div className="group">
                            <label htmlFor="user" className="label">E-mail</label>


                            <input  value={this.state.email}  onChange={this.handleChange} id="user" type="text" className="input" placeholder="email" name="email"/>
                            {/*{console.log(this.state.email)}*/}
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
                            </div>

                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>

                            <input id="pass"  value={this.state.password} onChange={this.handleChange} type="password"  className="input"  name="password" placeholder="password" />
                            {/*{console.log(this.state.password)}*/}
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}
                            </div>
                        </div>

                        <div className="group">

                            <button onClick={this.handleSubmit} id="btn9" type="submit" className="button" value="Sign In" >
                                Log-In

                            </button>

                            <br/>
                            <button onClick={this.siginSubmit}  id="btn5" type="submit" className="button" value="Sign In">
                                Sign In
                            </button>
                        </div>
                        <div className="hr"></div>

                    </div>

                </form>
            </div>
        </div>

      )
    }
}