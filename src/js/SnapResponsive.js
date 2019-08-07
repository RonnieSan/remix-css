// ----------------------------------------------------------------------
// SNAP RESPONSIVE
// ----------------------------------------------------------------------

export default {

	// Change the viewport to match the snap size
	setViewport(snap_sizes) {
		return function() {
			// Use the screen width by default
			let screen_width = window.screen.width;
			if (window.outerWidth < screen_width) {
				screen_width = window.outerWidth;
			}

			// Get the screen width based on the orientation of the device
			let landscape = (Math.abs(window.orientation) === 90 || window.orientation === 270) || false;
			if (landscape * (screen_width < 1280)) {
				screen_width = screen_width * 1.5;
			}

			// Iterate through snap_sizes to get the right one
			var viewport_width = 'device-width';
			snap_sizes.forEach(function(snap) {
				if (screen_width < snap.threshold) {
					viewport_width = snap.width;
				}
			});

			// Set the viewport width
			document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + viewport_width);
		};
	},

	// Initialize snap responsiveness
	init(snap_sizes) {
		if (window.self === window.top) {
			if (!snap_sizes) {
				// Anything under the threshold will snap to the width
				// Put smaller sizes first so they iterate in correct order
				snap_sizes = [
					// Large Screens (UHD)
					{
						threshold : Infinity,
						width     : 'device-width'
					},

					// Desktop Screens (HD)
					{
						threshold : 1920,
						width: 1680
					},

					// Smaller Desktop Screens (1280x800)
					{
						threshold : 1680,
						width     : 1280
					},

					// Tablet Screens (800x600)
					{
						threshold : 1280,
						width     : 768
					},

					// Mobile Screens
					{
						threshold : 768,
						width     : 360
					}
				];
			}

			// Set the viewport on orientationChange
			window.addEventListener('load', this.setViewport(snap_sizes));
			window.addEventListener('resize', this.setViewport(snap_sizes));
			window.addEventListener('orientationchange', this.setViewport(snap_sizes));
		}
	}
};