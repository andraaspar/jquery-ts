# [jQuery](http://jquery.com/) with highly modular TypeScript type definitions

- Based on the API documentation for jQuery 3.1.
- ES6 module compatible.
- Separate interfaces defined for most objects / functions for easy reusability.
- Most interface declarations are in separate files for easy browsing.
- MIT licensed.

## Usage

Installation:
```
bower install andraaspar/jquery-ts --save
```

Set up `tsconfig.json`:
```JSON
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"*": [
				"bower_components/*",
				"*"
			]
		}
	}
}
```

Then in TypeScript:
```TypeScript
import $ from 'jquery-ts';

$(() => {
	$('body').append('<h1>Success!</h1>');
});
```

### Webpack

Use `jquery/dist/jquery` to refer to jQuery.

To use a different jQuery path in `webpack.config.js`:
```JavaScript
resolve: {
	alias: {
		'jquery/dist/jquery': 'jquery/src/jquery'
	}
}
```
