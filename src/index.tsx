import * as React from 'react';
import './image-marker.scss';

export type Marker = {
    top: Number;
    left: Number;
};
export type MarkerComponentProps = {
    top: Number;
    left: Number;
    itemNumber: Number;
};

type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker?: (marker: Marker) => void;
    markerComponent?: React.FC<MarkerComponentProps>;
};
const ImageMarker: React.FC<Props> = ({
    src,
    markers,
    onAddMarker,
    markerComponent: MarkerComponent,
}: Props) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const handleImageClick = (event: React.MouseEvent) => {
        if (!imageRef.current || !onAddMarker) {
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
                    className={`image-marker__marker ${
                        MarkerComponent && 'image-marker__marker--default'
                    }`}
                    style={getItemPosition(marker)}
                    key={itemNumber}
                >
                    {MarkerComponent ? (
                        <MarkerComponent {...marker} itemNumber={itemNumber} />
                    ) : (
                        itemNumber + 1
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageMarker;
