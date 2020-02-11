import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './maincontent.css';
import Data from '../Data/data';
import {BrowserRouter as Router, Link, Switch,Route} from "react-router-dom";
import Card from '../Card/card';
import Last from "../Last/last";
import 'font-awesome/css/font-awesome.min.css';



const initialState = {

    id: "",
    title:"",
    index:"",
    isOk: false,
    isLast: false,
    isAll: true,
    email: ""
};


export default class MainContent extends Component{
    state = initialState;

    constructor(props) {

        super(props);
        if (this.props.location.state==undefined){
            // props.email="";
            console.log("undefined is working.......");
            // console.log(this.props.location.state.email)
        } else {
            this.state.email=this.props.location.state.email

        }
    };




    handleClick = (id) => {
        id=this.state.id
        this.setState({
          isOk: !this.state.isOk
      })


    }

    closeClicks = () =>{
        this.setState({
            isLast: !this.state.isLast,
            isAll: true
        })

        // this.setState({
        //     isAll: this.state.isAll
        // })

    }



    HandleClicks = (postObj,index,value,url) => {

        console.log("id :",postObj)
        // console.log(postObj)
        // console.log("postObj_index",index)
        // console.log("id :",value)
        console.log("title :",value)
        console.log("image url :",url)

        this.setState({
            id: postObj,
            title: value,
            url: url
        });


        console.log("idddddddddddd"+this.state.id);

        //
        // this.setState({id:value})
        // console.log( this.setState({id:value}))


        this.setState({
            isLast: !this.state.isLast,
            isAll:  !this.state.isAll
        })

        // pass the data //

        this.props.history.push({
            // pathname:"/last",
            state: {
                id: this.state.id,
                title: this.state.title
            }
        })


        // {console.log(Data.map.value.id)}
        // {console.log(Data.map.value.title)}
        // console.log(this.value.id)
        // console.log(this.value.title)
        //
        // this.props.history.push({
        //     pathname:"/last",
        //     state: {
        //         id: this.state.id,
        //         title: this.state.title
        //     }
        // })


        // this.props.history.push({
        //     pathname:"/last",
        //     state:{
        //         email: this.state.id,
        //         password: this.state.title
        //     },
        //
        //
        // });
    }



    //
    // handleChange = event => {
    //     const isCheckbox = event.target.type === "checkbox";
    //     this.setState({
    //         [event.target.name]: isCheckbox
    //             ? event.target.checked
    //             : event.target.value
    //
    //     });
    //     // console.log(this.state.id)
    //     // console.log(this.state.id)
    //
    //     // this.props.history.push("/path")
    //     // this.props.history.push({
    //     //     pathname:"/path",
    //     //     state: {
    //     //         afdsfds:[]
    //     //     }
    //     // })
    // };

    // componentDidMount() {
    //     this.props.location.details.
    // }

    //
    // handleSubmit = event => {
    //         event.preventDefault();
    //         this.setState(initialState);
    //         {console.log(this.state.id)}
    //         {console.log(this.state.title)}
    //         // this.props.history.push("/maincontent");
    //
    //
    //
    // };

        render() {
            const { formData, submitted } = this.state;
            return (
                    <div>
                        <div  id="log1" className="login-wrap">

                            {/*<div id="log2" className="login-html">*/}
                                <div className="container">
                                    <div   className="row">
                                        {
                                            this.state.isAll?

                                                <div id="mains">

                                        {Data.map((value,index) =>{
                                            if(index < 6){


                                                // if (index=1){
                                                //     {console.log(value.id)}
                                                //     {console.log(value.id)}
                                                // }
                                                return <div className="col-sm" key={index}>

                                                        <div type="submit" className="button" onClick={()=>this.HandleClicks(value.id,index,value.title,value.url)}  id="con1" className="card" >
                                                            <img   src={value.url} className="card-img-top" alt="..." />



                                                            <div className="card-body">
                                                                {/*this.setState({id:''})*/}
                                                                <p className="card-text"  value={value.id} name="id" name="id" >
                                                                    ID: {value.id}
                                                                    {/*{console.log(index)}*/}
                                                                    {/*{console.log(value.id)}*/}
                                                                    {/*{console.log(value.id)}*/}
                                                                </p>


                                                                <p className="card-text" value={value.title} name="title" name="title">
                                                                    Title: <br/>  {value.title}
                                                                    {/*{console.log(value.title)}*/}
                                                                    {/*{console.log(value.title)}*/}
                                                                </p>

                                                            </div>

                                                        </div>
                                                </div>
                                            }
                                        })}
                                                </div>

                                                :null
                                        }

                                    </div>

                            <div >
                                    <button    id="btn1" type="submit" className="button" onClick={this.handleClick}>
                                        <h1 id="h1">See More.....</h1>
                                    </button>
                            </div>

                                    {
                                        this.state.isOk?
                                            <div id="ss">
                                                < Card closeModalHandler={this.handleClick} />
                                            </div>

                                            :null
                                    }

                                    {
                                        this.state.isLast?
                                            <div>
                                                {/*< Last closeLastHandler={this.HandleClicks} />*/}
                                                <div>

                                                    <div className="container">
                                                        <div className="row">
                                                            <div>
                                                                <button    id="btn3" type="submit" className="button" onClick={this.closeClicks}>
                                                                    <i className="fa fa-times-circle fa-fw"></i>
                                                                </button>
                                                            </div>

                                                            {/*{MainContent.map((value, index)=>{*/}
                                                            <div className="col-sm">

                                                                <div id="con7" className="card">
                                                                    <img  src={this.state.url} className="card-img-top" alt="..." />

                                                                    <div className="card-body">
                                                                        <p className="card-text">
                                                                            ID: {this.state.id}
                                                                        </p>

                                                                        <p className="card-text">
                                                                            Title: {this.state.title}
                                                                            <br/>
                                                                        </p>

                                                                        <p className="card-text">
                                                                            E-mail: {this.state.email}
                                                                            <br/>
                                                                        </p>

                                                                    </div>

                                                                </div>




                                                            </div>
                                                            {/*})}*/}


                                                        </div>


                                                    </div>


                                                </div>
                                            </div>

                                            :null
                                    }

                                </div>
                                {/*<Link to={'/main/secondcontent'}  id="btn1" type="submit" className="button" value="Sign In" >*/}
                                {/*                <h1 id="h1">See More.....</h1>*/}
                                {/*    <Card />*/}
                                {/*</Link>*/}



                            {/*</div>*/}


                        </div>


                    </div>

            )
        }
}