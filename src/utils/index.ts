export type ImagePosition = {
    top: number;
    left: number;
    width: number;
    height: number;
};
export type MousePosition = {
    clientX: number;
    pageY: number;
};
export const calculateMarkerPosition = (
    mousePosition: MousePosition,
    imagePosition: ImagePosition,
    scrollY: number,
    bufferLeft: number,
    bufferTop: number
) => {
    const pixelsLeft = mousePosition.clientX - imagePosition.left;
    let pixelsTop;
    if (imagePosition.top < 0) {
        pixelsTop = mousePosition.pageY - scrollY + imagePosition.top * -1;
    } else {
        pixelsTop = mousePosition.pageY - scrollY - imagePosition.top;
    }
    const top = ((pixelsTop - bufferTop) * 100) / imagePosition.height;
    const left = ((pixelsLeft - bufferLeft) * 100) / imagePosition.width;
    return [top, left];
};
