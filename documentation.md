
 # Documentation
 Note: Penguins.js uses semantic versioning as defined as in [Semantic Versioning 1.0](https://semver.org/spec/v1.0.0.html).
 
 Penguins.js is all about the `PenguinsJS` function, which can also be written as: 
  - `_PenguinsJS`
  - `_`
  - `__`
  
 Penguins.js is desgned to shorten down your code, and can go along with [jQuery](https://www.jquery.com) to shorten down your code.
 ## Documentation table
 Functionality | Uses | Status | 
 -------------- | ------- | ------
  `_('[CSS selector]')` | Returns a Penguins.js object based on the input selector
  `_('...').set('[property]', '[value]')` | Sets the property `[property]` to `[value]` for each element matching the CSS selector `...`
  `_('...').add('[property]', '[value]')` | Adds `[value]` to the property `[property]` of all elements matching the CSS selector `...`
  `_('...').onEvent('[event]', [function])` | Adds an event listener to all elements matching the CSS selector `..`
  `_('...').get('[property]')` | Returns an array of the value of property `[property]` of all elements matching CSS selector `...`
  `new _('[type]').requestTo('[URL]')` | Returns a `[type]` AJAX request to `[URL]`, asynchronous by default
  `request.onResponse = [callback]` | Equivalent of the `onreadystatechange` Vanilla JS property. Does not require a check (`if(this.status === 200 && this.readyState === 4)`)
  `request.send()` | Sends the AJAX request `request` (for `GET` requests)
  `request.send('[data]')` | Semds the AJAX request `request` (for `POST` requests)
  `_('*').date` | Returns the date as in Vanilla javaScript `new Date()`
  `PenguinsJS.version` | Returns an object containing information about the version of Penguins.js used
  `_('[selector]').toDOMNodeList` | Converts the Penguins.js object into a DOM node list
  `_('[selector]').toDOMNodeArray` | Converts the Penguins.js object into an array of DOM nodes
  `metadata` | Returns an object including information about the metadata of the HTML document ***ONLY*** if jQuery is included | <IMG SRC="https://openclipart.org/image/2400px/svg_to_png/189402/1386617449.png" ALT="Experimental" WIDTH="50" TITLE="Experimental">
  `metadata.addTag('[name]', '[value]')` | Adds a `<META>` tag with `NAME` attribute set to `[name]` and `CONTENT` attribute set to `[value]` | <IMG SRC="https://openclipart.org/image/2400px/svg_to_png/189402/1386617449.png" ALT="Experimental" WIDTH="50" TITLE="Experimental">
  `metadata.removeTag('[name]')` | Removes the first `<META>` tag with `NAME` attribute set to `[name]` | <IMG SRC="https://openclipart.org/image/2400px/svg_to_png/189402/1386617449.png" ALT="Experimental" WIDTH="50" TITLE="Experimental">
  `_('...').addElement('[tag name]', '[voidity]', '[ID]')` | Appends a `[tag name]` HTML tag with voidity `[voidity]`  and an ID of `[ID]` to the elements matching CSS selector `...`
  
