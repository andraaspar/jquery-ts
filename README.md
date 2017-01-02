# [jQuery](http://jquery.com/) with highly modular TypeScript type definitions

- Based on the API documentation for jQuery 3.1.
- ES6 module compatible.
- Separate interfaces defined for most objects / functions for easy reusability.
- Most interface declarations are in separate files for easy browsing.
- Usable in the Browser and in Node.
- MIT licensed.

## Usage

### Bower

Installation:
```
bower install jquery-ts --save
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
import $ from 'jquery-ts'

$(() => {
	$('body').append('<h1>Success!</h1>')
})
```

### Node

Installation:
```
npm install jquery-ts --save
npm install jsdom --save
npm install @types/jsdom --save
```

Then in TypeScript:
```TypeScript
import * as jsdom from 'jsdom'

import { initJQuery } from 'jquery-ts'

jsdom.env('<!DOCTYPE html>', (err, window) => {
	if (err) throw err
	
	let $ = initJQuery(window)
	
	$('body').append('<h1>Success!</h1>')
	console.log(jsdom.serializeDocument(window.document))
	// <!DOCTYPE html><html><head></head><body><h1>Success!</h1></body></html>
})
```