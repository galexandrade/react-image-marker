import React from 'react';
import logo from './logo.svg';
import ImageMarker from 'react-image-marker';
import bluePrintImage from './assets/car-blueprint.jpg';
import './App.css';

function App() {
    const markers = [{ top: 10, left: 15 }];
    return (
        <ImageMarker
            src={bluePrintImage}
            markers={markers}
            onAddMarker={(marker) => console.log(marker)}
        />
    );
}

export default App;
