

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

var react = require('react');

var c = {
    light: ["#fdf6e3", "#eee8d5", "#93a1a1", "#839496"],
    dark: ["#002b36", "#073642", "#586e75", "#657b83"],
    yellow: "#b58900",
    orange: "#cb4b16",
    red: "#dc322f",
    magenta: "#d33682",
    violet: "#6c71c4",
    blue: "#268bd2",
    cyan: "#2aa198",
    green: "#859900",
};
var useSolarized = function (startInLightMode) {
    if (startInLightMode === void 0) { startInLightMode = true; }
    var _a = react.useState(startInLightMode), lightMode = _a[0], setLightMode = _a[1];
    var _b = react.useState({}), colors = _b[0], setColors = _b[1];
    react.useEffect(function () {
        var cols = {
            0: c.yellow,
            1: c.orange,
            2: c.red,
            3: c.magenta,
            4: c.violet,
            5: c.blue,
            6: c.cyan,
            7: c.green,
        };
        cols["yellow"] = c.yellow;
        cols["orange"] = c.orange;
        cols["red"] = c.red;
        cols["magenta"] = c.magenta;
        cols["violet"] = c.violet;
        cols["blue"] = c.blue;
        cols["cyan"] = c.cyan;
        cols["green"] = c.green;
        if (lightMode) {
            cols["background"] = c.light[0];
            cols["text"] = c.dark[1];
            // cols["8"] = c.dark[0];
        }
        else {
            cols["background"] = c.dark[0];
            cols["text"] = c.light[1];
            // cols["8"] = c.light[0];
        }
        if (lightMode) {
            cols["emphasized"] = c.dark[2];
            cols["primary"] = c.dark[3];
            cols["secondary"] = c.light[2];
            cols["background_highlight"] = c.light[1];
            cols["background"] = c.light[0];
            // cols["8"] = c.dark[2];
        }
        else {
            cols["emphasized"] = c.light[2];
            cols["primary"] = c.light[3];
            cols["secondary"] = c.dark[2];
            cols["background_highlight"] = c.dark[1];
            cols["background"] = c.dark[0];
            // cols["8"] = c.light[2];
        }
        setColors(cols);
    }, [lightMode]);
    return [colors, lightMode, setLightMode];
};

exports.default = useSolarized;
//# sourceMappingURL=index.js.map
