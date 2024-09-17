import React from 'react';
import './App.scss'; // Importar archivo de hoja de estilos CSS
import NavBar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Contacto from './components/contacto';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ImageSlider />
            <About />
            <Contacto />
            <Footer />
        </div>
    );
}

export default App;
    
