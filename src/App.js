import './App.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
/*import About from "./components/Pages/About/About";*/
/*import Portfolio from "./components/Pages/Portfolio/Portfolio";*/
import Services from "./components/Pages/Services/Services";
import Faq from "./components/Pages/Faq/Faq";
import Contacts from "./components/Pages/Contacts/Contacts";
import NHeader from "./components/NewHeader/NHeader";
import FooterMode1 from "./components/FooterMode1/FooterMode1";
import Appartaments from "./components/Examples/Appartaments/Appartaments";
import Loft from "./components/Examples/RedTable/Loft";
import Projector from "./components/Examples/Projector/Projector";
import GridDynamics from "./components/Examples/GridDynamics/GridDynamics";
import Office from "./components/Examples/Office/Office";
import Hostel from "./components/Examples/Hostel/Hostel";
import Blum from "./components/Examples/Blum/Blum";
import {useTranslation} from "react-i18next";
import "./i18next"

const Portfolio = lazy(() => import('./components/Pages/Portfolio/Portfolio'))
const About = lazy(() => import('./components/Pages/About/About'))

function App() {

    const renderLoader = () => <p>Loading</p>;

    const [t, i18n] = useTranslation()
    const onChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="AppWrapper">
            <BrowserRouter>
                <Suspense fallback={renderLoader()}>
                    <div className="AppOverlay">
                        <NHeader
                            changeLanguage={onChangeLanguage}
                        />
                        <Routes>
                            <Route path="/*" element={<Navigate to="main"/>}/>
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
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
