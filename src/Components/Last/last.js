import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './last.css';
import MainContent from '../MainContent/maincontent';
import {Link} from "react-router-dom";

export default class Last extends Component{

    // componentWillMount() {
    //     console.log("will mount work")
    //     // console.log(this.props.history.state);
    //
    //     this.props.HandleClicks()(
    //         console.log(this.id)
    //     );
    //
    //     console.log(this.props.id)
    //     console.log(this.props.title)
    //
    // }

    // constructor(props) {
    //     super(props);
    //     this.props.closeLastHandler();
    // }

    handleClicks = () => {
        // alert("click")
        this.props.closeLastHandler();
    }

    render() {
        return (
            <div>

                    <div className="container">
                        <div className="row">
                            <div>
                                <button    id="btn3" type="submit" className="button" onClick={this.handleClicks}>

                                </button>
                            </div>

                            {/*{MainContent.map((value, index)=>{*/}
                                 <div className="col-sm">

                                        <div id="con7" className="card">
                                            <img  src="" className="card-img-top" alt="..." />

                                            <div className="card-body">
                                                <p className="card-text">
                                                    ID: {this.props.id}
                                                </p>

                                                <p className="card-text">
                                                    Title: {this.props.title}
                                                    <br/>
                                                </p>

                                            </div>

                                        </div>




                                </div>
                            {/*})}*/}


                        </div>


                    </div>


            </div>
        )
    }
}