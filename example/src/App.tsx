import React from 'react';
import ImageMarker from 'react-image-marker';
import CarImage from './car-image.jpg';
import './App.css';

function App() {
    const markers = [{ top: 10, left: 50 }];
    return (
        <div className="App">
            <ImageMarker src={CarImage} markers={markers} />
        </div>
    );
}

export default App;
