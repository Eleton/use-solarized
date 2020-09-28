import { useState, useEffect } from "react";

const c = {
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

const useSolarized = (startInLightMode = true) => {
  const [lightMode, setLightMode] = useState(startInLightMode);
  const [colors, setColors] = useState({});

  const toggleColorMode = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    const cols = {
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
      cols["primary"] = c.dark[3];
      cols["secondary"] = c.light[2];
      cols["emphasized"] = c.dark[2];
      cols["highlight"] = c.light[1];
      cols["background"] = c.light[0];
    } else {
      cols["primary"] = c.light[3];
      cols["secondary"] = c.dark[2];
      cols["emphasized"] = c.light[2];
      cols["highlight"] = c.dark[1];
      cols["background"] = c.dark[0];
    }
    setColors(cols);
  }, [lightMode]);
  return { colors, toggleColorMode };
};

export default useSolarized;
