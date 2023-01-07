import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Info from "../info/Info";
import SearchPanel from "../searchPanel/SearchPanel";
import Filter from "../filter/Filter";
import MovieList from "../movieList/MovieList";
import MoviesAddForm from "../moviesAddForm/MoviesAddForm";

import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: "Skyfall",viewers:"10000", favorite:false, like:false, id:1},
                {name: "Silicon Valley",viewers:"908", favorite:false,like:false, id:2},
                {name: "Gotham",viewers:"28231", favorite:false,like:false, id:3},
            ],
            term:'',
            filter:'all',
            
        }
    }



    onDelete = id =>{
        this.setState(({ data }) => ({
            data:data.filter(c => c.id != id),
        }))
    }

    addForm = (item) => {
        const newItem = {name:item.name, viewers:item.viewers, id:uuidv4(), favorite:false, like:false} 
        this.setState(({ data }) => ({
            data:[...data, newItem]
        }))
    }

    onToggleFavorite = id => {
        this.setState(({ data }) => {
            const newArr = data.map(item =>{
                if(item.id == id){
                    return { ...item, favorite: !item.favorite }
                }
                return item;
            })
            return{
                data:newArr,
            }
        })
    }


    onToggleLike = (id) => {
        this.setState(({ data }) => {
            const newArr = data.map(item =>{
                if(item.id == id){
                    return { ...item, like: !item.like }
                }
                return item;
            })
            return{
                data:newArr,
            }
        })
    }

    filterHandler = (arr, filter) => {
        switch(filter){
            case 'popular':
                return arr.filter(c => c.like)
            case "popularMovie":
                return arr.filter(c => c.viewers > 1000)
            default:
                return arr
        }
    }

    searchHandler = (arr, term) => {
        if(term.length == 0){
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    updateInputHandler = (term) => {
        this.setState({term})
    }

    updateFilterHandler = filter => this.setState({filter})

    render(){
        const { data, term, filter } =this.state
        const allMoviesCount = data.length  
        const allFavoriteMovieCount = data.filter(c => c.favorite).length
        const visibleData = this.filterHandler(this.searchHandler(data, term), filter);

        return(
            <div className="App font-monospace">
                <div className="Content">
                    <Info allMoviesCount= { allMoviesCount } allFavoriteMovieCount = {allFavoriteMovieCount} />
                    <div className="search-panel">
                        <SearchPanel updateInputHandler = {this.updateInputHandler} />
                        <Filter filter={filter}  updateFilterHandler={this.updateFilterHandler} />
                    </div>
                    <MovieList  onToggleFavorite={this.onToggleFavorite} onToggleLike={this.onToggleLike} data={visibleData} onDelete ={this.onDelete}/>
                    <MoviesAddForm  addForm={this.addForm}/>
                </div>
            </div>
        );
    }
}

export default App;
