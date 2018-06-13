# Remix CSS

### About Remix CSS
Remix CSS is a themable CSS starter kit. It resets default browser styles and add simple, yet desirable styling to standard HTML elements. Remix CSS also includes a basic flexbox-based grid system and responsive styling.

### Requirements
Using this package has the following requirements:
* ES6 support - such as Webpack with Babel
* LessCSS compiler

### Getting Started

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

### Usage

#### Responsive Styles
Remix CSS uses snap responsiveness--container elements will snap to specific width when the window dimensions fall between certain size ranges. Using snap responsiveness is a great way to deliver a consistent design experience across different devices without having to update styles for an infinite number of window widths. Snap responsiveness works well because almost mobile/tablet devices can scale the viewport to fill the screen.

Remix CSS includes some responsive mixins to make styling for the different snap sizes easy. Simply nest one of the mixins with size-specific styling.

```css
.my-class {
	color: @blue;

	.laptop({
		color: @red;
	});

	.tablet({
		color: @purple;
	});

	.mobile({
		color: @green;
	});
}
```

In the code above, the text inside of elements with the class `my-class` will change color depending on the screen width. Responsive styles are categorized into five main widths--full, desktop, laptop, tablet, and mobile.

You can show and hide elements on a specific width using modifier classes like `show-tablet` or `hide-mobile`.  The `show-<width>` style will hide the element on all other widths.

#### Grid Layouts
Remix CSS makes it very easy to structure a site using flex box.  Following the correct nesting structure allows you to create grid layouts very easily.
```html
<!-- CREATE A THREE COLUMN LAYOUT WITH DEFAULT GUTTER WIDTH (FROM THEME FILE) -->
<div class="grid">
	<div class="row">
		<div class="column">COLUMN ONE</div>
		<div class="column">COLUMN TWO</div>
		<div class="column">COLUMN THREE</div>
	</div>
</div>

<!-- CREATE A THREE COLUMN LAYOUT WITH CUSTOM GUTTER WIDTH (SET IN STYLES BELOW) -->
<div class="grid custom-gutter">
	<div class="row">
		<div class="column">COLUMN ONE</div>
		<div class="column">COLUMN TWO</div>
		<div class="column">COLUMN THREE</div>
	</div>
</div>

<!-- CREATE A THREE COLUMN LAYOUT WITH NO GUTTERS -->
<div class="grid no-gutter">
	<div class="row">
		<div class="column">COLUMN ONE</div>
		<div class="column">COLUMN TWO</div>
		<div class="column">COLUMN THREE</div>
	</div>
</div>
```

```less
.custom-gutter {
	.gutter-size(50px);
}
```

Grid layouts will wrap and stack responsively. If you just want to use flexbox on an arbitrary element, you can use the special `flex-h` (horizontal) and `flex-v` (vertical) classes.

```html
<nav class="flex-h">
	<div class="nav-item">HOME</div>
	<div class="nav-item">ABOUT</div>
	<div class="nav-item">CONTACT</div>
	<div class="nav-item fit">LOGIN</div> <!-- This one will only take up as much room as it needs -->
</nav>
```

#### Form Elements
One caveat to using Remix CSS is that some elements require specific structure to render as expected. Form elements fall into this category. Use the following guidelines when creating form elements.

Use the following structure to wrap your form controls (similar to bootstrap)...
```html
<div class="control-group">
	<label class="control-label">LABEL GOES HERE</label>
	<div class="controls">
		<div class="field">FORM FIELD GOES HERE</div>
	</div>
</div>
```

Wrap each form element in the appropriate wrapper element...
```html
<!-- Text Inputs (text, number, password, email, tel) -->
<div class="input-wrapper">
	<input type="text">
</div>

<!-- Textareas -->
<div class="textarea-wrapper">
	<textarea></textarea>
</div>

<!-- Selects -->
<div class="select-wrapper">
	<select>
		<option>Select One</option>
	</select>
</div>

<!-- Radio Buttons -->
<div class="radio-wrapper">
	<input type="radio">
</div>

<!-- Checkboxes -->
<div class="checkbox-wrapper">
	<input type="checkbox">
</div>

<!-- Button Structure -->
<button type="button">
	<span class="label">BUTTON TEXT</span>
</button>
```

Inputs with types equal to  `submit`, `reset`, and `button` do not need to be wrapped.

#### Tables
When creating tables, make sure to use the proper format with `thead` and `tbody` tags. Using the `striped` class on the table element will add zebra-striping to it and using the `bordered` class will add a border.

#### Colors
A few convenience styles are available for changing colors. You can use `bkg-color-<color_name>` on an element to change the background color of it (`color_name` is one of the main color variables in the theme or `primary`, `secondary`, or `accent`). You can also use `text-color-<color_name>` to change the color of the text in an element.

You can also use the provided mixins to quickly add color styles to your own classes:
```less
.my-class {
	.bkg-color(#FF0000);
	.text-color(@gray-65);
}
```

Using those mixins for button or link styles will also add hover styles to them.

#### Utility Styles
A few utility styles are included to help you make quick adjustments to your styles.

* The `borderless` class will remove a border from any element.
* The `cover` class will make an element position absolutely over a relative parent and cover it completely.
* The `remove` class will `display: none;` an element.
* The `hidden` class will change an element to `visibility: hidden;`.
* The `invisible` class will change an element to `opacity: 0;`.
* The `justify-left`, `justify-right`, and `center` classes will change the `text-align` property of an element.



### Theming
Remix CSS acts as the foundation layer to your site's styles. You can easily theme it by making a copy of the default theme file (default.theme.less) and adjusting the variables to your liking. Once you've updated the variable values, just add your own styles to override or compliment the ones set by Remix CSS.