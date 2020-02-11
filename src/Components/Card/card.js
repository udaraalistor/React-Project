import React, {Component} from "react";
import Data from "../Data/data";
import {Link} from "react-router-dom";
import './card.css';
import 'font-awesome/css/font-awesome.min.css';

const initialState = {

    id: "",
    title:"",
};


export default class Card extends Component{
    state = initialState;



    handleClicks = () => {
        // alert("click")
        this.props.closeModalHandler();
    }

    render() {
        return (
            <div>




                <div>

                    <div  id="log1" className="login-wrap">

                        {/*<div id="log2" className="login-html">*/}
                        <div className="container">
                            <div className="row">
                                <div >
                                    <button    id="btn2" type="submit" className="button" onClick={this.handleClicks}>
                                        <i className="fa fa-times-circle fa-fw"></i>
                                    </button>
                                </div>
                                {Data.map((value,index) =>{
                                    if(index > 6){


                                        // if (index=1){
                                        //     {console.log(value.id)}
                                        //     {console.log(value.id)}
                                        // }
                                        return <div className="col-sm" key={index}>
                                            {/*<Link  to={'main/last'}>*/}
                                            <div id="con1" className="card">

                                                <img  src={value.url} className="card-img-top" alt="..." />


                                                <div className="card-body">
                                                    <p className="card-text" onChange={this.handleClick}  name="id">
                                                        ID: {value.id}
                                                        {/*{console.log(value.id)}*/}
                                                    </p>


                                                    <p className="card-text" onChange={this.handleClick}  name="title">
                                                        Title: <br/>  {value.title}
                                                        {/*{console.log(value.title)}*/}
                                                    </p>

                                                </div>

                                            </div>


                                            {/*</Link>*/}


                                        </div>
                                    }
                                })}

                            </div>




                        </div>
                        {/*<Link to={'/main/secondcontent'}  id="btn1" type="submit" className="button" value="Sign In" >*/}
                        {/*                <h1 id="h1">See More.....</h1>*/}
                        {/*    <Card />*/}
                        {/*</Link>*/}



                        {/*</div>*/}


                    </div>
                </div>
            </div>
        );
    }
}