import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageMarker from '.';

describe('ImageMarker', () => {
    test('the image render', () => {
        const altText = 'My cool image';
        const { queryByAltText } = render(
            <ImageMarker
                src="https://i.pinimg.com/originals/c3/c0/ac/c3c0ac104bb3ffa3aa2f164cd371718d.png"
                markers={[]}
                alt={altText}
            />
        );
        expect(queryByAltText(altText)).toBeInTheDocument();
    });
    test('the image render with markers', () => {
        const markers = [
            {
                top: 10,
                left: 30,
            },
            {
                top: 40,
                left: 50,
            },
        ];
        const { queryAllByTestId } = render(
            <ImageMarker
                src="https://i.pinimg.com/originals/c3/c0/ac/c3c0ac104bb3ffa3aa2f164cd371718d.png"
                markers={markers}
            />
        );
        expect(queryAllByTestId('marker').length).toBe(markers.length);
    });
    test('it adds new markers', () => {
        const handleOnAddMarker = jest.fn();
        const altText = 'My cool image';
        const { getByAltText } = render(
            <ImageMarker
                src="https://i.pinimg.com/originals/c3/c0/ac/c3c0ac104bb3ffa3aa2f164cd371718d.png"
                markers={[]}
                alt={altText}
                onAddMarker={handleOnAddMarker}
            />
        );
        fireEvent.click(getByAltText(altText));
        expect(handleOnAddMarker).toHaveBeenCalled();
    });
});
