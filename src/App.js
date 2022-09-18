import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import About from "./components/Pages/About/About";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Services from "./components/Pages/Services/Services";
import Shop from "./components/Pages/Shop/Shop";
import Contacts from "./components/Pages/Contacts/Contacts";
import Blum from "./components/Examples/Blum/Blum";



function App() {
    return (
        <BrowserRouter>
            <div className="AppOverlay">
                <Header/>
                <Routes>
                    <Route path="" element={<Main/>}/>
                    <Route path="main" element={<Main/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="portfolio" element={<Portfolio/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="portfolio/blum" element={<Blum/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
