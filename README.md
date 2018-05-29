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

In the code above, the text inside of elements with the class `my-class` will change color depending on the screen width.

#### Form Elements
One caveat to using Remix CSS is that some elements require specific structure to render as expected. Form elements fall into this category. Use the following guidelines when creating form elements.

Use the following structure for each form element...
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

### Theming
Remix CSS acts as the foundation layer to your site's styles. You can easily theme it by making a copy of the default theme file (default.theme.less) and adjusting the variables to your liking. Once you've updated the variable values, just add your own styles to override or compliment the ones set by Remix CSS.