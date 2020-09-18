import * as React from 'react';
import './image-marker.scss';

type Marker = {
    top: Number;
    left: Number;
};

type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker: (marker: Marker) => void;
};
const ImageMarker: React.FC<Props> = ({ src, markers, onAddMarker }: Props) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const handleImageClick = (event: React.MouseEvent) => {
        if (!imageRef.current) {
            return;
        }
        const imageSize = imageRef.current.getBoundingClientRect();
        const { width, height, top, left } = imageSize;
        const buffer = 12;

        const pixelsLeft = event.clientX - left;
        let pixelsTop;
        if (top < 0) {
            pixelsTop = event.pageY - window.scrollY + top * -1;
        } else {
            pixelsTop = event.pageY - window.scrollY - top;
        }
        const position = {
            top: ((pixelsTop - buffer) * 100) / height,
            left: ((pixelsLeft - buffer) * 100) / width,
        };
        onAddMarker(position);
    };

    const getItemPosition = (marker: Marker) => {
        return {
            top: `${marker.top}%`,
            left: `${marker.left}%`,
        };
    };

    return (
        <div className="image-marker">
            <img
                src={src}
                alt="Blueprint"
                onClick={handleImageClick}
                className="image-marker__image"
                ref={imageRef}
            />
            {markers.map((marker, itemNumber) => (
                <div
                    className="image-marker__marker"
                    style={getItemPosition(marker)}
                    key={itemNumber}
                >
                    {itemNumber + 1}
                </div>
            ))}
        </div>
    );
};

export default ImageMarker;
