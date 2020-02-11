import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import LogIn from '../../Container/LogIn/login';
import MainContent from '../MainContent/maincontent';
import Last from '../Last/last';
import Secondcontent from '../SecondContent/secondcontent';
import App from '../../App';
import 'font-awesome/css/font-awesome.min.css';

const initialState = {

    email: "",

};

export default class Main extends Component{
    state = initialState;

    // passing data to maincontent  //

    componentDidUnmount() {
        this.props.history.push({
            pathname:"/maincontent",
            state: {
                email: this.state.email,

            }

        })
    }



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

        }
        // if (props.password==undefined){
        //     props.password="";
        //     console.log(props.password);
        //     // console.log(this.props.location.state.password)
        // }
        // console.log(this.props.location.state = {email: "", password: ""}) ;
        //  console.log(this.props.location.state.email) ;

    };

    // componentWillUnmount() {
    //     this.props.history.state.email="";
    // }

    handleSubmit = event => {
        this.props.history.push("/login");
        alert("Are you sure to logout ?");
    };

    render() {

          return (

              <Router>
                   <div>
                       <div id="log4" className="login-html">

                                   <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">

                                       {/*<input value={this.props.history.state.email}/>*/}

                                       <button className="navbar-toggler" type="button" data-toggle="collapse"
                                               data-target="#navbarSupportedContent"
                                               aria-controls="navbarSupportedContent" aria-expanded="false"
                                               aria-label="Toggle navigation">
                                           <span className="navbar-toggler-icon"></span>
                                       </button>

                                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                           <ul className="navbar-nav mr-auto">
                                               <li className="nav-item active">
                                                   <img id="img1" src="https://thewaternetwork.com/storage/TFX/CompanyBundle/Entity/Job-bfLgVorrkp4dzSG2rSMQfQ/8i4jukGnf6yH_geqZP15GA/file/micron.png" alt="..."  />
                                               </li>
                                               {/*<input  value={this.state.email} id="user" type="text" className="input" name="email"/>*/}

                                           </ul>
                                           <form className="form-inline my-2 my-lg-0">
                                                   <button onClick={this.handleSubmit}  id="btnlogout" className="btn  my-2 my-sm-0"
                                                           type="submit">Log out
                                                       <i className="fa fa-sign-out fa-fw"></i>
                                                   </button>
                                           </form>
                                       </div>
                                   </nav>

                               </div>


                       <Switch>
                           <Route  exact path = '/main'  component= {MainContent} />
                           <Route  path = '/main/last'  component= {Last} />
                           <Route  path = '/main/secondcontent'  component= {Secondcontent} />
                           <Route  exact path = '/login'  component= {LogIn} />


                       </Switch>
                   </div>
              </Router>
          )
     }
}