import React from 'react';
import img1 from "../../images/Decor/4.4.jpg";
import img2 from "../../images/Decor/4.3.jpg";
import img3 from "../../images/Decor/3.3.jpg";
import img4 from "../../images/Decor/3.2.jpg";
import img5 from "../../images/Decor/2.4.jpg";
import img6 from "../../images/Decor/1.4.jpg";
import img7 from "../../images/Decor/1.3.jpg";
import img8 from "../../images/Decor/5.1.jpg";
import img9 from "../../images/Decor/4.2.jpg";
import img10 from "../../images/Decor/5.2.jpg";
import img11 from "../../images/Decor/3.1.jpg";
import img12 from "../../images/Decor/2.2.jpg";
import img13 from "../../images/Decor/4.1.jpg";
import img14 from "../../images/Decor/7.1.jpg";
import img15 from "../../images/Decor/6.2.jpg";
import img16 from "../../images/Decor/6.1.jpg";
import img17 from "../../images/Decor/2.1.jpg";
import img18 from "../../images/Decor/1.2.jpg";
import img19 from "../../images/Decor/1.1.jpg";
import img20 from "../../images/Decor/2.3.jpg";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const Decor = () => {
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
        {id: 15, imgSrc: img15},
        {id: 16, imgSrc: img16},
        {id: 17, imgSrc: img17},
        {id: 18, imgSrc: img18},
        {id: 19, imgSrc: img19},
        {id: 20, imgSrc: img20},
    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default Decor;