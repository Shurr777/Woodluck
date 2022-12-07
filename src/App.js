import './App.css';
import React from 'react';
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
                    <Routes>
                        <Route path="/" element={<Navigate to="main"/>}/>
                        <Route path="main" element={<Main/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="portfolio" element={<Portfolio/>}/>
                        <Route path="services" element={<Services/>}/>
                        <Route path="faq" element={<Faq/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                        <Route path="blum" element={<Blum/>}/>
                        <Route path="office" element={<Office/>}/>
                        <Route path="hostel" element={<Hostel/>}/>
                        <Route path="gridDynamics" element={<GridDynamics/>}/>
                        <Route path="projector" element={<Projector/>}/>
                        <Route path="red_table" element={<Loft/>}/>
                        <Route path="black_table" element={<Appartaments/>}/>
                    </Routes>
                    <FooterMode1/>
                </div>
            </BrowserRouter>
        </div>
    );
}

/*<IfModule mod_rewrite.c>


    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-l
    RewriteRule . /index.html [L]


</IfModule>*/

export default App;
