import { Component } from "react";

// import { v4 as uuidv4 } from 'uuid';

import "./moviesAddForm.css"

class MoviesAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            viewers:"",
        }
    }

    addFormHandler = e => {
        e.preventDefault();
        this.props.addForm({name: this.state.name, viewers: this.state.viewers})
        this.setState({
            name: '',
            viewers:'',
        })
    }

    changedHandlerFun = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    render(){
        const { name, viewers } = this.state;

        return(
            <div className="container-card">
                <h3>Yangi Kino Qo'shish</h3>
                <form className="add-form d-flex" onSubmit={this.addFormHandler}>
                    <input type="text" placeholder="Qanday Kino?" className="form-control new-post-label" onChange={this.changedHandlerFun} name="name" value={name}/>
                    <input type="number" placeholder="Nechi Marotaba Ko'rilgan?" className="form-control new-post-label" onChange={this.changedHandlerFun} name="viewers" value={viewers}/>
                    <button type="submit" className="btn btn-outline-dark">
                        Qo'shish
                    </button>
                </form>
            </div>
        );
    }
};

export default MoviesAddForm;
