import * as React from 'react';
import './image-marker.scss';
import { calculateMarkerPosition } from './utils';

const DEFAULT_BUFFER = 12;

export type Marker = {
    top: number;
    left: number;
};
export type MarkerComponentProps = {
    top: number;
    left: number;
    itemNumber: number;
};

type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker?: (marker: Marker) => void;
    markerComponent?: React.FC<MarkerComponentProps>;
    bufferLeft?: number;
    bufferTop?: number;
    alt?: string;
    extraClass?: string;
};
const ImageMarker: React.FC<Props> = ({
    src,
    markers,
    onAddMarker,
    markerComponent: MarkerComponent,
    bufferLeft = DEFAULT_BUFFER,
    bufferTop = DEFAULT_BUFFER,
    alt = 'Markers',
    extraClass = '',
}: Props) => {
    const imageRef = React.useRef<HTMLImageElement>(null);
    const handleImageClick = (event: React.MouseEvent) => {
        if (!imageRef.current || !onAddMarker) {
            return;
        }
        const imageDimentions = imageRef.current.getBoundingClientRect();

        const [top, left] = calculateMarkerPosition(
            event,
            imageDimentions,
            window.scrollY,
            bufferLeft,
            bufferTop
        );

        onAddMarker({
            top,
            left,
        });
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
                alt={alt}
                onClick={handleImageClick}
                className={'image-marker__image ' + extraClass}
                ref={imageRef}
            />
            {markers.map((marker, itemNumber) => (
                <div
                    className={`image-marker__marker ${
                        !MarkerComponent && 'image-marker__marker--default'
                    }`}
                    style={getItemPosition(marker)}
                    key={itemNumber}
                    data-testid="marker"
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
