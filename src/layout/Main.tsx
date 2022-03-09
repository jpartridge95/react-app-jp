import React from "react";
import Header from "./Header";
import Body from "./Body";
import axios from "axios";

class Main extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            beers: [],
            currentPage: 1,
            query: "",
            baseUrl: "https://api.punkapi.com/v2/"
        }
        this.onUpdateSearchTerm = this.onUpdateSearchTerm.bind(this)
        this.onPageDecrement = this.onPageDecrement.bind(this);
        this.onPageIncrement = this.onPageIncrement.bind(this);
    }

    componentDidMount() {
        const { baseUrl, currentPage } = this.state;

        this.fetch();
    }

    onUpdateSearchTerm(input:string) {
        let queryFriendly = input.replace(" ", "_");
        this.setState({
            query: `&beer_name=${queryFriendly}`,
            currentPage: 1,
        }, () => this.fetch());
    }

    fetch(){
        const { baseUrl, query, currentPage } = this.state;

        axios.get(baseUrl + `beers?page=${currentPage}&per_page=15${query}`)
            .then((response) => {
                this.setState({beers: [...response.data]});
            })
    }

    onPageIncrement(){
        this.setState((state: any) => ({currentPage: state.currentPage += 1}),
            () => this.fetch())
    }

    onPageDecrement() {
        const { currentPage } = this.state;

        if ( currentPage > 1) {
            this.setState({currentPage: currentPage - 1},
                () => this.fetch())
        }
    }

    render(){
        const { beers, currentPage } = this.state;
        return(
            <>
                <Header updateSearchTerm={this.onUpdateSearchTerm} />
                <Body 
                    beerList={beers}
                    pageNumber={currentPage}
                    pageIncrement={this.onPageIncrement}
                    pageDecrement={this.onPageDecrement} />
            </>
        )
    }
}

export default Main;