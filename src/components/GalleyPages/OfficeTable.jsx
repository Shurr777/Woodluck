import React from 'react';
import img1 from "../../images/OfficeTable/14.1.jpg";
import img2 from "../../images/OfficeTable/13.4.jpg";
import img3 from "../../images/OfficeTable/13.3.jpg";
import img4 from "../../images/OfficeTable/13.2.jpg";
import img5 from "../../images/OfficeTable/13.1.jpg";
import img6 from "../../images/OfficeTable/12.4.jpg";
import img7 from "../../images/OfficeTable/12.3.jpg";
import img8 from "../../images/OfficeTable/12.2.jpg";
import img9 from "../../images/OfficeTable/12.1.jpg";
import img10 from "../../images/OfficeTable/9.2.jpg";
import img11 from "../../images/OfficeTable/8.2.jpg";
import img12 from "../../images/OfficeTable/6.2.PNG";
import img13 from "../../images/OfficeTable/6.1.PNG";
import img14 from "../../images/OfficeTable/4.5.jpg";
import img15 from "../../images/OfficeTable/2.2.JPG";
import img16 from "../../images/OfficeTable/2.1.JPG";
import img17 from "../../images/OfficeTable/8.1.jpg";
import img18 from "../../images/OfficeTable/9.1.jpg";
import img19 from "../../images/OfficeTable/11.1.jpg";
import img20 from "../../images/OfficeTable/4.4.jpg";
import img21 from "../../images/OfficeTable/1.4.jpg";
import img22 from "../../images/OfficeTable/4.2.jpg";
import img23 from "../../images/OfficeTable/7.1.jpg";
import img24 from "../../images/OfficeTable/2.3.jpg";
import img25 from "../../images/OfficeTable/1.3.jpg";
import img26 from "../../images/OfficeTable/4.1.jpg";
import img27 from "../../images/OfficeTable/1.2.jpg";
import img28 from "../../images/OfficeTable/3.1.jpg";
import img29 from "../../images/OfficeTable/1.1.jpg";

import Galleryfunc from "./Galleryfunc/Galleryfunc";

const OfficeTable = () => {
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
        {id: 23, imgSrc: img23},
        {id: 24, imgSrc: img24},
        {id: 25, imgSrc: img25},
        {id: 26, imgSrc: img26},
        {id: 27, imgSrc: img27},
        {id: 28, imgSrc: img28},
        {id: 29, imgSrc: img29},
    ]

    return (
        <>
            <Galleryfunc data={data}/>
        </>
    );

};

export default OfficeTable;