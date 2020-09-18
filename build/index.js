

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

___$insertStyle(".image-marker {\n  position: relative;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.image-marker__image {\n  max-width: 500px;\n  margin: 0 auto;\n  width: 100%;\n}\n.image-marker__marker {\n  width: 25px;\n  height: 25px;\n  background-color: brown;\n  position: absolute;\n  border-radius: 50%;\n  color: white;\n  text-align: center;\n}");

var ImageMarker = function (_a) {
    var src = _a.src, markers = _a.markers, onAddMarker = _a.onAddMarker;
    var imageRef = React.useRef(null);
    var handleImageClick = function (event) {
        if (!imageRef.current) {
            return;
        }
        var imageSize = imageRef.current.getBoundingClientRect();
        var width = imageSize.width, height = imageSize.height, top = imageSize.top, left = imageSize.left;
        var buffer = 12;
        var pixelsLeft = event.clientX - left;
        var pixelsTop;
        if (top < 0) {
            pixelsTop = event.pageY - window.scrollY + top * -1;
        }
        else {
            pixelsTop = event.pageY - window.scrollY - top;
        }
        var position = {
            top: ((pixelsTop - buffer) * 100) / height,
            left: ((pixelsLeft - buffer) * 100) / width,
        };
        onAddMarker(position);
    };
    var getItemPosition = function (marker) {
        return {
            top: marker.top + "%",
            left: marker.left + "%",
        };
    };
    return (React.createElement("div", { className: "image-marker" },
        React.createElement("img", { src: src, alt: "Blueprint", onClick: handleImageClick, className: "image-marker__image", ref: imageRef }),
        markers.map(function (marker, itemNumber) { return (React.createElement("div", { className: "image-marker__marker", style: getItemPosition(marker), key: itemNumber }, itemNumber + 1)); })));
};

exports.default = ImageMarker;
//# sourceMappingURL=index.js.map
