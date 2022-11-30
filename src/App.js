import './App.css';
import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import About from "./components/Pages/About/About";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Services from "./components/Pages/Services/Services";
import Faq from "./components/Pages/Faq/Faq";
import Contacts from "./components/Pages/Contacts/Contacts";
import Blum from "./components/Examples/Blum/Blum";
import Hostel from "./components/Examples/Hostel/Hostel";
import Office from "./components/Examples/Office/Office";
import GridDynamics from "./components/Examples/GridDynamics/GridDynamics";
import Projector from "./components/Examples/Projector/Projector";
import Loft from "./components/Examples/RedTable/Loft";
import Appartaments from "./components/Examples/Appartaments/Appartaments";
import NHeader from "./components/NewHeader/NHeader";
import FooterMode1 from "./components/FooterMode1/FooterMode1";


function App() {
    return (
        <div className="AppWrapper">
            <BrowserRouter>
                <div className="AppOverlay">
                    <NHeader/>
                    <Suspense fallback={<div>Loading ...</div>}/>
                    <Routes>
                        <Route path="/" element={<Navigate to="main"/>}/>
                        <Route path="*" element={<Navigate to="main"/>}/>
                        <Route path="main" element={<Main/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="portfolio" element={<Portfolio/>}/>
                        <Route path="services" element={<Services/>}/>
                        <Route path="faq" element={<Faq/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                        <Route path="portfolio/blum" element={<Blum/>}/>
                        <Route path="portfolio/hostel" element={<Hostel/>}/>
                        <Route path="portfolio/office" element={<Office/>}/>
                        <Route path="portfolio/gridDynamics" element={<GridDynamics/>}/>
                        <Route path="portfolio/projector" element={<Projector/>}/>
                        <Route path="portfolio/red_table" element={<Loft/>}/>
                        <Route path="portfolio/black_table" element={<Appartaments/>}/>
                        {/*<Route path="portfolio/coworking" element={<Coworking/>}/>
                        <Route path="portfolio/my_kava" element={<Coworking/>}/>*/}
                    </Routes>
                    <FooterMode1/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
