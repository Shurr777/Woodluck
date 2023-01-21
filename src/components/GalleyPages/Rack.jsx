import React from 'react';
import img1 from "../../images/Rack/7.2.jpg";
import img2 from "../../images/Rack/6.1.jpg";
import img3 from "../../images/Rack/5.1.jpg";
import img4 from "../../images/Rack/2.1.jpg";
import img5 from "../../images/Rack/4.1.jpg";
import img6 from "../../images/Rack/7.1.jpg";
import img7 from "../../images/Rack/3.1.jpg";
import img8 from "../../images/Rack/1.1.jpg";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const Rack = () => {
    let data = [
        {id: 1, imgSrc: img1},
        {id: 2, imgSrc: img2},
        {id: 3, imgSrc: img3},
        {id: 4, imgSrc: img4},
        {id: 5, imgSrc: img5},
        {id: 6, imgSrc: img6},
        {id: 7, imgSrc: img7},
        {id: 8, imgSrc: img8},
    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default Rack;