import React from "react";
import Button from "react-bootstrap/Button"

const Pager = ({ currentPage, pageIncrement, pageDecrement }:any) => {

    const onPageUpClick = (e: any) => {
        e.preventDefault();
        pageIncrement();
    }

    const onPageDownClick = (e: any) => {
        e.preventDefault();
        pageDecrement();
    }

    return(
        <ul className="pager">
            {currentPage > 1 && <li><Button 
                style={{marginRight: "3em"}} 
                variant="primary"
                onClick={onPageDownClick}
                    >Previous</Button></li>}
            <li><Button 
                style={{marginLeft: "3em"}} 
                variant="primary"
                onClick={onPageUpClick}
                    >Next</Button></li>
        </ul>
    )
}

export default Pager