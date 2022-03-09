import React from "react";
import BeerWindow from "../partials/BeerWindow";

const Body = ({
    beerList,
    pageNumber,
    pageIncrement,
    pageDecrement
}: any) => {
    
    const onPageIncrement = () => {
        pageIncrement();
    }

    const onPageDecrement = () => {
        pageDecrement();
    }
        return (
            <BeerWindow 
                beerList={beerList}
                currentPage={pageNumber}
                pageIncrement={onPageIncrement} 
                pageDecrement={onPageDecrement}/>
    );
};

export default Body;