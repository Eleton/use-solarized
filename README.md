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

| Index | Key       | Code    | Color                                                            |
| ----- | --------- | ------- | ---------------------------------------------------------------- |
| 0     | `yellow`  | #b58900 | <div style="background:#b58900;width:32px;height:1.5rem;"></div> |
| 1     | `orange`  | #cb4b16 | <div style="background:#cb4b16;width:32px;height:1.5rem;"></div> |
| 2     | `red`     | #dc322f | <div style="background:#dc322f;width:32px;height:1.5rem;"></div> |
| 3     | `magenta` | #d33682 | <div style="background:#d33682;width:32px;height:1.5rem;"></div> |
| 4     | `violet`  | #6c71c4 | <div style="background:#6c71c4;width:32px;height:1.5rem;"></div> |
| 5     | `blue`    | #268bd2 | <div style="background:#268bd2;width:32px;height:1.5rem;"></div> |
| 6     | `cyan`    | #2aa198 | <div style="background:#2aa198;width:32px;height:1.5rem;"></div> |
| 7     | `green`   | #859900 | <div style="background:#859900;width:32px;height:1.5rem;"></div> |

```js
const { colors } = useSolarized();
colors.yellow; // "#b58900"
colors[4]; // "#6c71c4"
```

### Content Colors

Solarized has 8 content colors, using 5 for light mode and 5 for dark mode:

#### Light Mode

| Name   | Key          | Code    | Color                                                            | Description                 |
| ------ | ------------ | ------- | ---------------------------------------------------------------- | --------------------------- |
| base01 | `emphasized` | #586e75 | <div style="background:#586e75;width:32px;height:1.5rem;"></div> | Optional emphasized content |
| base00 | `primary`    | #657b83 | <div style="background:#657b83;width:32px;height:1.5rem;"></div> | Body text / primary content |
| base1  | `secondary`  | #93a1a1 | <div style="background:#93a1a1;width:32px;height:1.5rem;"></div> | Secondary content           |
| base2  | `highlight`  | #eee8d5 | <div style="background:#eee8d5;width:32px;height:1.5rem;"></div> | Background highlights       |
| base3  | `background` | #fdf6e3 | <div style="background:#fdf6e3;width:32px;height:1.5rem;"></div> | Bachground                  |

#### Dark Mode

| Name   | Key          | Code    | Color                                                            | Description                 |
| ------ | ------------ | ------- | ---------------------------------------------------------------- | --------------------------- |
| base1  | `emphasized` | #93a1a1 | <div style="background:#93a1a1;width:32px;height:1.5rem;"></div> | Optional emphasized content |
| base0  | `primary`    | #839496 | <div style="background:#839496;width:32px;height:1.5rem;"></div> | Body text / primary content |
| base01 | `secondary`  | #586e75 | <div style="background:#586e75;width:32px;height:1.5rem;"></div> | Secondary content           |
| base02 | `highlight`  | #073642 | <div style="background:#073642;width:32px;height:1.5rem;"></div> | Background highlights       |
| base03 | `background` | #002b36 | <div style="background:#002b36;width:32px;height:1.5rem;"></div> | Bachground                  |

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
