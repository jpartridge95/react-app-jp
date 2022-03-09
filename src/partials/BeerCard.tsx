import React from "react";

const BeerCard = ({ data }:any) => {

    return(
        <div>
            <h4>{data.name}</h4>
            <p>{data.abv}%</p>
            <p>{data.volume.value + " " + data.volume.unit}</p>
            <ul>
                <li>Malt - {data.ingredients.malt[0].name}</li>
                <li>Hops - {data.ingredients.hops[0].name}</li>
                <li>Yeast - {data.ingredients.yeast}</li>
            </ul>
        </div>
    )
}

export default BeerCard;