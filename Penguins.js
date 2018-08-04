/***********************************************************
*Penguins.js
*Shortening JS Code
*javaScript library
*Thank you:
*John Resig for inspiration
***********************************************************/

var PenguinsJS = function(selector){
var s = document.querySelectorAll(selector);
return{
	set:function(a, v){
		for(var item = 0; item < s.length; item++){
			s[item][a] = v;
		};
		return PenguinsJS(selector);
	},
	addElement:function(tagName, voidity, ID){
		if(voidity == 1){
			for(var item = 0; item < s.length; item++){
				s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\"/>';
				return PenguinsJS('#' + ID);
			};
		}else{
			for(var item = 0; item < s.length; item++){
				s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\">' + '</' + tagName + '>';
				return PenguinsJS('#' + ID);
			};
		};
	},
	reload:function(){
		location.reload();
	},
	onEvent:function(e, f){
		for(var item = 0; item < s.length; item++){
			s[item].addEventListener(e, f);
		};
	},
	toDOMNodeList:s,
	toDOMNodeArray:function(){
		var array = [];
		for (var i = 0; i < s.length; i++) { 
			array.push(s[i]);
		};
		return array;
	},
	onTimeInterval:function(functio, timeInterval, endCondition){
		function functi(){
			if(endCondition){
				window.clearInterval(newInterval);
			}else{
				functio();
			};
			var newInterval = setInterval(functi, timeInterval);
		};
	},
	add:function(a, v){
		for(var item = 0; item < s.length; item++){
			s[item][v] += a;
		};
		return PenguinsJS(selector);
	},
	get:function(a){
		var array = [];
		for(var item = 0; item < s.length; item++){
			array.push(s[item][a]);
		};
		return array;
	},
	style:function(p, v){
		for(var item = 0; item < s.length; item++){
			s[item].style[p] = v;
		};
		return PenguinsJS(selector);
	}
};
};
var _ = PenguinsJS
var __ = _;
var _PenguinsJS = PenguinsJS
