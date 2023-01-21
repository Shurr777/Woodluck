import React from 'react';
import img1 from "../../images/BEDS/1.1.jpg";
import img2 from "../../images/BEDS/1.2.jpg";
import img3 from "../../images/BEDS/2.1.jpg";
import img4 from "../../images/BEDS/3.1.png";
import img5 from "../../images/BEDS/4.1.jpg";
import img6 from "../../images/BEDS/5.1.jpg";
import img7 from "../../images/BEDS/6.1.jpg";
import img8 from "../../images/BEDS/6.2.jpg";
import img9 from "../../images/BEDS/6.3.jpg";
import img10 from "../../images/BEDS/6.4.jpg";
import img11 from "../../images/BEDS/7.1.jpg";
import img12 from "../../images/BEDS/7.2.jpg";
import img13 from "../../images/BEDS/7.3.jpg";
import img14 from "../../images/BEDS/7.4.jpg";
import img15 from "../../images/BEDS/8.1.jpg";
import img16 from "../../images/BEDS/9.1.jpg";
import img17 from "../../images/BEDS/10.1.jpg";
import img18 from "../../images/BEDS/10.2.jpg";
import img19 from "../../images/BEDS/10.3.jpg";
import img20 from "../../images/BEDS/10.4.jpg";
import img21 from "../../images/BEDS/11.1.jpg";
import img22 from "../../images/BEDS/11.2.jpg";
import Galleryfunc from "./Galleryfunc/Galleryfunc";

const ChildrenBed = () => {
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
        {id: 21, imgSrc: img21},
        {id: 22, imgSrc: img22},
    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );
}

export default ChildrenBed;