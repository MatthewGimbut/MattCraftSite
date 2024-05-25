import './output.css';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Faq from './pages/Faq.tsx';
import Installation from './pages/Installation.tsx';
import Map from './pages/Map.tsx';
import Rules from './pages/Rules.tsx';
import Contact from './pages/Contact.tsx';
import Features from './pages/Features.tsx';
import { Routes, Route, } from "react-router-dom";
import NotFound from './pages/NotFound.tsx';

export default function App() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="rules" element={<Rules />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="map" element={<Map />} />
                    <Route path="installation" element={<Installation />} />
                    <Route path="features" element={<Features />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}
