import React, {useState} from 'react';
import img1 from "../../images/BedsideTable/5.1.jpg";
import img2 from "../../images/BedsideTable/4.1.jpg";
import img3 from "../../images/BedsideTable/1.1.JPG";
import img4 from "../../images/BedsideTable/1.2.JPG";
import img5 from "../../images/BedsideTable/1.3.JPG";
import img6 from "../../images/BedsideTable/1.4.JPG";
import img7 from "../../images/BedsideTable/2.2.jpg";
import img8 from "../../images/BedsideTable/3.1.jpg";
import img9 from "../../images/BedsideTable/4.2.jpg";
import img10 from "../../images/BedsideTable/5.2.jpg";
import img11 from "../../images/BedsideTable/5.3.jpg";
import img12 from "../../images/BedsideTable/6.1.JPG";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const BedsideTable = () => {
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
    ]

    return (
        <>
           <Galleryfunc data={data}/>
        </>
    );
};

export default BedsideTable;