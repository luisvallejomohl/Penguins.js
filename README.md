# Penguins.js

Shortening JS Code\
Get the lastest release [here!](penguins.js.org/Penguins.js)\
View all releases on [GitHub](github.com/luisvallejomohl/Penguins.js/releases)

Penguins.js is a portable, easy to use JS library. It can shorten down your code ridiculously:

## Example

HTML code:
```HTML
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
 _('body').addElement('p', 0, 'newP').set('innerHTML', 'You clicked the boring button!');
};
```
In this example, Penguins.js saves you from writing 3 extra lines of code!
[Documentation](https://penguins.js.org/Penguins.js/documentation.html)
