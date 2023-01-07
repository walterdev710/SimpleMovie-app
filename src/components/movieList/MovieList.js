import MovieListItem from "../movieListItem/MovieListItem";

import "./movieList.css"

const MovieList = ({ data, onDelete, onToggleFavorite,onToggleLike }) => {

    return(
        <ul className="movie-list">
            {data.map(item => (
                <MovieListItem 
                key={item.id} 
                name={item.name} 
                viewers= {item.viewers} 
                favorite={item.favorite} 
                like= {item.like}
                onDelete={() => onDelete(item.id)}
                onToggleFavorite = { () => onToggleFavorite(item.id) }
                onToggleLike = { () => onToggleLike(item.id) }
                />
            ))}
        </ul>
    );
};

export default MovieList;