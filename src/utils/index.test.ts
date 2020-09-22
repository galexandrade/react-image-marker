import { calculateMarkerPosition, ImagePosition } from '.';

describe('calculateMarkerPosition', () => {
    test('the target is calculated right when the image is on the corner', () => {
        const imageTop = 0;
        const imageLeft = 0;

        const scrollY = 0;

        const mouseEvent = {
            clientX: imageLeft + 10,
            pageY: imageTop + 20,
        };
        const imagePosition = mockImagePosition({
            top: imageTop - scrollY,
            left: imageLeft,
        });
        const bufferLeft = 0;
        const bufferTop = 0;
        const [top, left] = calculateMarkerPosition(
            mouseEvent,
            imagePosition,
            scrollY,
            bufferLeft,
            bufferTop
        );

        expect(left).toBe(10);
        expect(top).toBe(20);
    });
    test('the target is calculated right when the image is 100px from top and 200px from left', () => {
        const imageTop = 100;
        const imageLeft = 200;

        const scrollY = 0;

        const mouseEvent = {
            clientX: imageLeft + 10,
            pageY: imageTop + 20,
        };
        const imagePosition = mockImagePosition({
            top: imageTop - scrollY,
            left: imageLeft,
        });
        const bufferLeft = 0;
        const bufferTop = 0;
        const [top, left] = calculateMarkerPosition(
            mouseEvent,
            imagePosition,
            scrollY,
            bufferLeft,
            bufferTop
        );

        expect(left).toBe(10);
        expect(top).toBe(20);
    });
    test('the target is calculated right when there is scrollTop but the image is showing completely', () => {
        const imageTop = 100;
        const imageLeft = 200;

        const scrollY = 80;

        const mouseEvent = {
            clientX: imageLeft + 10,
            pageY: imageTop + 20,
        };
        const imagePosition = mockImagePosition({
            top: imageTop - scrollY,
            left: imageLeft,
        });
        const bufferLeft = 0;
        const bufferTop = 0;
        const [top, left] = calculateMarkerPosition(
            mouseEvent,
            imagePosition,
            scrollY,
            bufferLeft,
            bufferTop
        );

        expect(left).toBe(10);
        expect(top).toBe(20);
    });
    test('the target is calculated right when there is scrollTop and the image is showing partialy', () => {
        const imageTop = 100;
        const imageLeft = 200;

        //As the image height is 100, the scroll is covering 80% of the image
        const scrollY = imageTop + 80;

        const mouseEvent = {
            clientX: imageLeft + 10,
            pageY: imageTop + 20,
        };
        const imagePosition = mockImagePosition({
            top: imageTop - scrollY,
            left: imageLeft,
        });
        const bufferLeft = 0;
        const bufferTop = 0;
        const [top, left] = calculateMarkerPosition(
            mouseEvent,
            imagePosition,
            scrollY,
            bufferLeft,
            bufferTop
        );

        expect(left).toBe(10);
        expect(top).toBe(20);
    });
});

const mockImagePosition = ({
    top = 0,
    left = 0,
    width = 100,
    height = 100,
}: {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
}): ImagePosition => ({
    top,
    left,
    width,
    height,
});
