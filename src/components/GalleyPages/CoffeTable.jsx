import React from 'react';
import img1 from "../../images/CoffeeTable/3.1.jpg";
import img2 from "../../images/CoffeeTable/2.2.jpg";
import img3 from "../../images/CoffeeTable/4.1.jpg";
import img4 from "../../images/CoffeeTable/7.1.jpg";
import img5 from "../../images/CoffeeTable/6.3.jpg";
import img6 from "../../images/CoffeeTable/6.2.jpg";
import img7 from "../../images/CoffeeTable/6.1.jpg";
import img8 from "../../images/CoffeeTable/2.1.jpg";
import img9 from "../../images/CoffeeTable/1.2.jpg";
import img10 from "../../images/CoffeeTable/1.1.jpg";
import img11 from "../../images/CoffeeTable/2.3.jpg";
import img12 from "../../images/CoffeeTable/5.1.JPG";
import img13 from "../../images/CoffeeTable/5.2.JPG";
import img14 from "../../images/CoffeeTable/5.3.JPG";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const CoffeeTable = () => {
    let data = [
        {id: 1, imgSrc: img1},
        {id: 2, imgSrc: img2},
        {id: 3, imgSrc: img3},
        {id: 4, imgSrc: img4},
        {id: 5, imgSrc: img5},
        {id: 6, imgSrc: img6},
        {id: 7, imgSrc: img7},
        {id: 8, imgSrc: img8},
        {id: 9, imgSrc: img9},
        {id: 10, imgSrc: img10},
        {id: 11, imgSrc: img11},
        {id: 12, imgSrc: img12},
        {id: 13, imgSrc: img13},
        {id: 14, imgSrc: img14},
    ]


    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default CoffeeTable;