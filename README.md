<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/heroes-49297.appspot.com/o/react-image-marker-01.png?alt=media&token=801dd48d-28c4-4795-9695-b89049f034cb">
</p>

<p align="center">
  <a href="https://github.com/galexandrade/react-image-marker/actions" target="_blank">
    <img src="https://github.com/galexandrade/react-image-marker/workflows/Tests/badge.svg" alt="">
  </a>
  <a href="https://codecov.io/gh/galexandrade/react-image-marker">
    <img src="https://codecov.io/gh/galexandrade/react-image-marker/branch/master/graph/badge.svg" />
    </a>
  <a href="https://www.npmjs.com/package/react-image-marker" target="_blank">
    <img src="https://badgen.net/npm/v/react-image-marker" alt="">
  </a>
  <a href="LICENSE.md" target="_blank">
    <img src="https://badgen.net/badge/license/MIT/blue" alt="">
  </a>
  <a href="https://www.npmjs.com/package/react-image-marker" target="_blank">
    <img src="https://badgen.net/npm/dt/react-image-marker" alt="">
  </a>
</p>

`react-image-marker` makes it easy to add markers and tags to any image.

## Why ?

Adding markers to images seems something really simple, isn't it? You just need to do some hacks with CSS to position your marker where it was clicked and it is done, right? NO!

There is a bunch of edge cases that need to be addressed:

-   When the screen size is changed, the markers need to keep the same reference.
-   When the image is half shown on the screen (let's suppose the user has scrolled down), clicking on the image should position the marker correctly.
-   Much more.

## Install

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install react-image-marker --save

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add react-image-marker
```

## Props

| Prop            |           Value           | Required |
| :-------------- | :-----------------------: | :------: |
| src             |        image path         |   Yes    |
| markers         |       Array<Marker>       |   Yes    |
| onAddMarker     | Function (Marker) => void |    No    |
| markerComponent |         Component         |    No    |
| bufferLeft      |          Number           |    No    |
| bufferTop       |          Number           |    No    |
| alt             |          String           |    No    |
| extraClass      |          String           |    No    |

## Usage

First, you will need to import the `ImageMarker`. If you are using `typescript` on your project you can also import the type `Marker`.

```js
// import the dependencies
import ImageMarker, { Marker } from 'react-image-marker';
```

Now you will need to provide an array of `Markers`. In this example, we are storing them with `useState`. `top` and `left` are numbers that represent the PERCENTAGE the marker is positioned in relation to the image size.

```js
//Define the markers
const [markers, setMarkers] =
    useState <
    Array <
    Marker >>
        [
            {
                top: 10, //10% of the image relative size from top
                left: 50, //50% of the image relative size from left
            },
        ];
```

Now you just need to use the `ImageMarker` to render your markers

```js
<ImageMarker
    src="my-image-path"
    markers={markers}
    onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
/>
```

It is going to render something like this

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/heroes-49297.appspot.com/o/react-image-marker-default.gif?alt=media&token=f13ba5b8-eabc-4ded-8bed-9016b0bbd2e5">
</p>

## Usage - Custom Markers

You can also use a custom marker if you want.
First, you will need to create a custom marker component.

```js
// import the dependencies
import ImageMarker, { Marker, MarkerComponentProps } from 'react-image-marker';

const CustomMarker = (props: MarkerComponentProps) => {
    return (
        <p className="custom-marker">My custom marker - {props.itemNumber}</p>
    );
};
```

Now you just need to pass it through the prop `markerComponent`

```js
<ImageMarker
    src="my-image-path"
    markers={markers}
    onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
    markerComponent={CustomMarker}
/>
```

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/heroes-49297.appspot.com/o/react-image-marker-custom-marker.gif?alt=media&token=9cad6f01-d982-41f9-8401-d69d826618bd">
</p>
