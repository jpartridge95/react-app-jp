import React from "react";
import BeerCard from "./BeerCard";
import Pager from "./Pager";

const BeerWindow = ({
    beerList, 
    pageIncrement, 
    pageDecrement, 
    currentPage } :any) => {

    const onPageIncrement = () => {
        pageIncrement();
    }

    const onPageDecrement = () => {
        pageDecrement();
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-body">
                {beerList.map((beer: any) => 
                    <BeerCard key={beer.id} data={beer}/>)}
            </div>
            <div className="panel-footer">
                <Pager
                    currentPage={currentPage}
                    pageIncrement={onPageIncrement} 
                    pageDecrement={onPageDecrement}/>
            </div>
        </div>
    )
}

export default BeerWindow;