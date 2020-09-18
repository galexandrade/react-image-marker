import * as React from 'react';
import './image-marker.scss';
declare type Marker = {
    top: Number;
    left: Number;
};
declare type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker: (marker: Marker) => void;
};
declare const ImageMarker: React.FC<Props>;
export default ImageMarker;
