import "./movieListItem.css";



const MovieListItem = props => {
    const {name, viewers, onDelete, onToggleFavorite,onToggleLike, favorite, like} = props;
    return(
        <>
                <li className={`list-group-item d-flex justify-content-between ${favorite && 'favorite'} ${like && 'like'}`}>
                    <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
                    <input type="number" className="list-group-item-input" defaultValue={viewers}/>
                    <div className="d-flex justify-content-center align-items-center">
                        <button type="button" className="btn-cookie btn-sm" onClick={onToggleFavorite}>
                            <i className="fas fa-cookie"></i>
                        </button>
                        <button type="button" className="btn-trash btn-sm">
                            <i className="fas fa-trash" onClick={onDelete}></i>
                        </button> 
                        <i className="fas fa-star"></i>                                
                    </div>                
                </li>
        </>
    );
};

export default MovieListItem;
