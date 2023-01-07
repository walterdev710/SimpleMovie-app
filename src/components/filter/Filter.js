import "./filter.css"

const Filter = (props) => {
    return(
        <div className="btn-group">
            {btnArr.map(btn =>(
                <button key={btn.name}
                className={`btn ${props.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
                onClick={() => props.updateFilterHandler(btn.name)} 
                type="button">
                    {btn.label}
                </button>

            ))}
        </div>
    );
};

const btnArr = [
    {name: "all", label:"Barcha Kinolar"},
    {name: "popular", label:"Mashhur Kinolar"},
    {name: "popularMovie", label:"Eng ko'p ko'rilgan kinolar"},
]

export default Filter;