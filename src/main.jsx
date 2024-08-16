import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FacultyPage from './pages/FacultyPage.jsx';
import CustomNavbar from './components/CustomNavbar.jsx';
import MenuNavbar from './components/MenuNavbar.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <CustomNavbar/>
      <MenuNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/people/faculty" element={<FacultyPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </NextUIProvider>
  </StrictMode>,
)
