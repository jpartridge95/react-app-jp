import React from "react";
import BeerWindow from "../partials/BeerWindow";

interface IProps {
    beerList: []
}

class Body extends React.Component<any, IProps> {

    constructor(props: IProps) {
        super(props);
        this.onPageDecrement = this.onPageDecrement.bind(this);
        this.onPageIncrement = this.onPageIncrement.bind(this);
    }
    
    onPageIncrement(){
        this.props.pageIncrement();
    }

    onPageDecrement(){
        this.props.pageDecrement();
    }

    render() {
        const { beerList, pageNumber } = this.props;
        return (
            <BeerWindow 
                beerList={beerList}
                currentPage={pageNumber}
                pageIncrement={this.onPageIncrement} 
                pageDecrement={this.onPageDecrement}/>
        );
    };
};

export default Body;