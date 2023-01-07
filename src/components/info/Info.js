import "./info.css";

const Info = ({ allMoviesCount, allFavoriteMovieCount }) => {
    return(
        <div className="app-info">
            <p className="fs-3 text-uppercase">Barcha Kinolar soni:{allMoviesCount} </p>
            <p className="fs-4 text-uppercase">Sevimli Kinolar: {allFavoriteMovieCount}</p>
        </div>
    );
};

export default Info;