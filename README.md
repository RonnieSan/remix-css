# Remix CSS

## About Remix CSS
Remix CSS is a themable CSS starter kit. It resets default browser styles and add simple, yet desirable styling to standard HTML elements. Remix CSS also includes a basic flexbox-based grid system and responsive styling.

## Requirements
Using this package has the following requirements:
* ES6 support - such as Webpack with Babel
* LessCSS compiler

## Usage

1. Install the package as a dependency.
```bash
$ npm install --save-dev remix-css
```

2. Import the ResponsiveStyles script into your weboack entry file and init it.
```js
import { SnapResponsive } from 'remix-css';
SnapResponsive.init();
```

3. Import the default theme (or your custom theme) into your entry file.
```js
import 'remix-css/default.theme.less';
```
