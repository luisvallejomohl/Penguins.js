# Penguins.js

Shortening JS Code

Penguins.js is a portable, easy to use JS library. It can shorten down your code ridiculously:

## Example

HTML code:
```html
<!DOCTYPE HTML>
<HTML>
<HEAD>
<META CHARSET="ISO-8859-1">
<TITLE>Example</TITLE>
</HEAD>
<BODY>
<BUTTON ID="boringButton">Boring button</BUTTON>
</BODY>
</HTML>
```
Vanilla JS Code:
```javascript
var boringButton = document.getElementById('boringButton');
boringButton.onclick = function(){
 var newParagraph = document.createElement('p');
 newParagraph.innerHTML = 'You clicked the boring button!';
 document.body.appendChild(newParagraph);
};
```
Same JS Code with Penguins.js:
```javascript
_('#boringButton').onEvent('click', function(){
 _('body').addElement('p', 'newP', 'You clicked the boring button!');
};
```
In this example, Penguins.js saves you from writing 3 extra lines of code!
[Documentation](https://luisvallejomohl.github.io/Penguins.js/documentation.html)
