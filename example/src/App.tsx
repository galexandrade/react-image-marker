import React, { useState } from 'react';
import ImageMarker, { Marker, MarkerComponentProps } from 'react-image-marker';
import CarImage from './car-image.jpg';
import './App.css';

function App() {
    const [markers, setMarkers] = useState<Array<Marker>>([
        { top: 10, left: 50 },
    ]);
    const CustomMarker = (props: MarkerComponentProps) => {
        return <p>Coooool - {props.itemNumber}</p>;
    };
    return (
        <div className="App">
            <ImageMarker
                src={CarImage}
                markers={markers}
                onAddMarker={(marker: Marker) =>
                    setMarkers([...markers, marker])
                }
                markerComponent={CustomMarker}
            />
        </div>
    );
}

export default App;
