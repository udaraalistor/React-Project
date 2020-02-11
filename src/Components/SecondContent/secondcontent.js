import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './secondcontent.css';
import Data from '../Data/data';
import {BrowserRouter as Router, Link, Switch,Route} from "react-router-dom";


export default class Secondcontent extends Component{

    render() {
        return (
            <div>
                <div id="log3" className="login-wrap">

                    {/*<div id="log4" className="login-html">*/}
                        <div className="container">
                            <div className="row">
                                {Data.map((value,index) =>{
                                    if(index >= 6) {
                                        return <div className="col-sm" key={index}>
                                            <Link to={'main/last'}>
                                                <div id="text" className="card-body">
                                                    <p className="card-text">
                                                        ID: {value.id}
                                                    </p>

                                                    <p className="card-text">
                                                        Title: <br/> {value.title}
                                                    </p>

                                                </div>
                                                <div id="con3" className="card">
                                                    <img src={value.url} className="card-img-top" alt="..."/>


                                                </div>

                                            </Link>


                                        </div>
                                    }
                                })}

                            </div>


                        </div>


                    {/*</div>*/}


                </div>


            </div>

        )
    }
}