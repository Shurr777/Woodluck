import './App.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Faq from "./components/Pages/Faq/Faq";
import Contacts from "./components/Pages/Contacts/Contacts";
import NHeader from "./components/NewHeader/NHeader";
import Footer from "./components/FooterMode1/Footer";
import Appartaments from "./components/Examples/Appartaments/Appartaments";
import Loft from "./components/Examples/RedTable/Loft";
import Projector from "./components/Examples/Projector/Projector";
import GridDynamics from "./components/Examples/GridDynamics/GridDynamics";
import Office from "./components/Examples/Office/Office";
import Hostel from "./components/Examples/Hostel/Hostel";
import Blum from "./components/Examples/Blum/Blum";
import {useTranslation} from "react-i18next";
import "./i18next"

const BedsideTable = lazy(() => import ("./components/GalleyPages/BedsideTable"));
const ChildrenBed = lazy(() => import("./components/GalleyPages/ChildrenBed"));
const CoffeeTable = lazy(() => import("./components/GalleyPages/CoffeTable"));
const GalleryOverlay = lazy(() => import("./components/Pages/Gallery/GalleryOverlay"));
const Decor = lazy(() => import("./components/GalleyPages/Decor"));
const DinnerTable = lazy(() => import("./components/GalleyPages/DinnerTable"));
const ForHome = lazy(() => import("./components/GalleyPages/ForHome"));
const OfficeTable = lazy(() => import("./components/GalleyPages/OfficeTable"));
const Rack = lazy(() => import("./components/GalleyPages/Rack"));
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
                            <Route path="gallery" element={<GalleryOverlay/>}/>
                            <Route path="faq" element={<Faq/>}/>
                            <Route path="contacts" element={<Contacts/>}/>
                            {/*Route to pages from portfolio*/}
                            <Route path="blum" element={<Blum/>}/>
                            <Route path="office" element={<Office/>}/>
                            <Route path="hostel" element={<Hostel/>}/>
                            <Route path="gridDynamics" element={<GridDynamics/>}/>
                            <Route path="projector" element={<Projector/>}/>
                            <Route path="red_table" element={<Loft/>}/>
                            <Route path="black_table" element={<Appartaments/>}/>
                            {/*Route to pages from gallery*/}
                            <Route path="bedsideTable" element={<BedsideTable/>}/>
                            <Route path="childrenBed" element={<ChildrenBed/>}/>
                            <Route path="coffeeTable" element={<CoffeeTable/>}/>
                            <Route path="decor" element={<Decor/>}/>
                            <Route path="dinnerTable" element={<DinnerTable/>}/>
                            <Route path="forHome" element={<ForHome/>}/>
                            <Route path="officeTable" element={<OfficeTable/>}/>
                            <Route path="rack" element={<Rack/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
