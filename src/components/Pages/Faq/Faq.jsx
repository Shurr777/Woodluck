import React, {useEffect} from 'react';
import Accord from "../../Accordion/Accordion";
import {useLocation} from "react-router-dom";


const Faq = () => {

    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
           <Accord/>
        </div>
    );
};

export default Faq;