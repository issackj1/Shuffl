import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onSearch(e){
        if (e.key === 'Enter') {
            console.log("ENTER WAS PRESSED");
            this.setState({ term: e.target.value });
            this.props.onSearchTermChange(e.target.value);
        }
    }

    render(){
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                    onKeyDown={this.onSearch}
                />
            </div>
        );
    }

}

export default SearchBar;