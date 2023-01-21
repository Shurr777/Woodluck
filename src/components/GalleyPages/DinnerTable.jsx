import React from 'react';
import img1 from "../../images/DinnerTable/10.1.jpg";
import img2 from "../../images/DinnerTable/10.2.jpg";
import img3 from "../../images/DinnerTable/10.3.jpg";
import img4 from "../../images/DinnerTable/5.3.jpg";
import img5 from "../../images/DinnerTable/1.3.jpg";
import img6 from "../../images/DinnerTable/5.1.jpg";
import img7 from "../../images/DinnerTable/3.2.jpg";
import img8 from "../../images/DinnerTable/5.2.jpg";
import img9 from "../../images/DinnerTable/3.1.jpg";
import img10 from "../../images/DinnerTable/4.1.jpg";
import img11 from "../../images/DinnerTable/2.1.jpg";
import img12 from "../../images/DinnerTable/1.2.jpg";
import img13 from "../../images/DinnerTable/1.1.jpg";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const DinnerTable = () => {
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
    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default DinnerTable;