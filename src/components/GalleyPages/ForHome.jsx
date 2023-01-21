import React from 'react';
import img1 from "../../images/ForHome/4.1.JPG";
import img2 from "../../images/ForHome/2.2.jpg";
import img3 from "../../images/ForHome/2.1.jpg";
import img4 from "../../images/ForHome/3.1.jpg";
import img5 from "../../images/ForHome/1.1.jpg";


import Galleryfunc from "./Galleryfunc/Galleryfunc";

const ForHome = () => {
    let data = [
        {id: 1, imgSrc: img1},
        {id: 2, imgSrc: img2},
        {id: 3, imgSrc: img3},
        {id: 4, imgSrc: img4},
        {id: 5, imgSrc: img5},

    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default ForHome;