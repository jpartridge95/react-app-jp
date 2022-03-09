import React from "react";

class SearchBar extends React.Component<any, any> {

    constructor(props: any){
        super(props)
        this.state = {
            input: ""
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchClicked =this.onSearchClicked.bind(this);
    }

    onSearchChange(event: any){
        this.setState({
            input: event.target.value
        });
    }

    onSearchClicked(event:any) {
        const { input } = this.state;
        event.preventDefault();

        if (input !== "") {
            this.props.searchTermChanged(input);
        }
    }

    render() {
        return (
            <form className="pull-right">
                <label htmlFor="search">Search</label>
                <input 
                    name="search" 
                    id="search" 
                    type="text"
                    onChange={this.onSearchChange}></input>
                <button onClick={this.onSearchClicked}>Search</button>
            </form>
        )
    }
}

export default SearchBar