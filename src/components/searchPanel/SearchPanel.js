import { Component } from "react";
import "./searchPanel.css";


class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term:'',
        }
    }

    updateInputHandler = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({ term })
        this.props.updateInputHandler(term)
    }

    render() {
        return(
            <div>
                <input type="text" className="form-control search-panel" placeholder="Kinolarni qidirish" onChange={this.updateInputHandler} value={this.state.term}/>
            </div>
        );

    }
}

// const SearchPanel = () => {
//     return(
//         <div>
//             <input type="text" className="form-control search-panel" placeholder="Kinolarni qidirish"/>
//         </div>
//     );
// };

export default SearchPanel;