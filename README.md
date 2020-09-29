# use-solarized

React Hook for using the [Solarized color scheme](https://ethanschoonover.com/solarized/).

## Install

```sh
yarn add use-solarized
# or
npm install use-solarized
```

## Basic Usage

```js
import React from "react";
import useSolarized from "use-solarized";

const App = () => {
  const { colors, toggleColorMode } = useSolarized();

  return (
    <div
      style={{
        color: colors.text,
        backgroundColor: colors.background,
      }}
    >
      <button onClick={toggleColorMode}>Click Me</button>
    </div>
  );
};
```

## API

### Initialization

`useSolarized()` has a boolean argument defining if it should start in light mode or not. Using no argument will default to light mode.

```js
const App = () => {
  const { colors } = useSolarized(false); // dark mode
};
```

### toggleColorMode

Calling `toggleColorMode()` will toggle between light mode and dark mode.

### Accent Colors

Solarized has 8 accent colors, which can either be accessed by name or by index:

| Index | Key       | Code    | Color                            |
| ----- | --------- | ------- | -------------------------------- |
| 0     | `yellow`  | #b58900 | ![yellow](./images/yellow.png)   |
| 1     | `orange`  | #cb4b16 | ![orange](./images/orange.png)   |
| 2     | `red`     | #dc322f | ![red](./images/red.png)         |
| 3     | `magenta` | #d33682 | ![magenta](./images/magenta.png) |
| 4     | `violet`  | #6c71c4 | ![violet](./images/violet.png)   |
| 5     | `blue`    | #268bd2 | ![blue](./images/blue.png)       |
| 6     | `cyan`    | #2aa198 | ![cyan](./images/cyan.png)       |
| 7     | `green`   | #859900 | ![green](./images/green.png)     |

```js
const { colors } = useSolarized();
colors.yellow; // "#b58900"
colors[4]; // "#6c71c4"
```

### Content Colors

Solarized has 8 content colors, using 5 for light mode and 5 for dark mode:

#### Light Mode

| Name   | Key          | Code    | Color                          | Description                 |
| ------ | ------------ | ------- | ------------------------------ | --------------------------- |
| base01 | `emphasized` | #586e75 | ![base01](./images/base01.png) | Optional emphasized content |
| base00 | `primary`    | #657b83 | ![base00](./images/base00.png) | Body text / primary content |
| base1  | `secondary`  | #93a1a1 | ![base1](./images/base1.png)   | Secondary content           |
| base2  | `highlight`  | #eee8d5 | ![base2](./images/base2.png)   | Background highlights       |
| base3  | `background` | #fdf6e3 | ![base3](./images/base3.png)   | Bachground                  |

#### Dark Mode

| Name   | Key          | Code    | Color                          | Description                 |
| ------ | ------------ | ------- | ------------------------------ | --------------------------- |
| base1  | `emphasized` | #93a1a1 | ![base1](./images/base1.png)   | Optional emphasized content |
| base0  | `primary`    | #839496 | ![base0](./images/base0.png)   | Body text / primary content |
| base01 | `secondary`  | #586e75 | ![base01](./images/base01.png) | Secondary content           |
| base02 | `highlight`  | #073642 | ![base02](./images/base02.png) | Background highlights       |
| base03 | `background` | #002b36 | ![base03](./images/base03.png) | Bachground                  |

```js
const { colors, toggleColorMode } = useSolarized();
colors.primary; // "#657683"
colors["background"]; // "#fdf6e3"
toggleColorMode();
colors.primary; // "#839496"
colors["background"]; // "#002b36"
```

## License

MIT
