/***********************************************************
 * Penguins.js
 * Shortening JS Code
 * JS Library
 * Created by Luis Vallejo-Mohl
 * GNU Affero General Public License v3.0
 * Thanks to: 
 * John Resig for inspiration
***********************************************************/

var PenguinsJS = function(selector, context){
	var s = document.querySelectorAll(selector);
	if(typeof context == 'undefined'){
		var context = null;
	};
	return{
		context: context, 
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
		toDOMNodeArray:function(){
			var array = [];
			for (var i = 0; i < s.length; i++) { 
				s[i].toPenguinsJSObj = PenguinsJS(selector);
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
			};
			var newInterval = setInterval(functi, timeInterval)
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
		},
		requestTo: function(URL){
			var self = {};
			self.async = true;
			self.requestURL = URL;
			self.type = selector;
			self.send = function(i){
				var request = new XMLHttpRequest();
				var subject = this;
				function funkytion(){
					if(request.status == 200 && request.readyState == 4){
						self.response = request.response;
						subject.onResponse();
					};
				};
				request.onreadystatechange = funkytion;
				request.open(subject.type, subject.requestURL, subject.async);
				if(i == undefined){
					request.send();
				}else{
					request.send(i);
				};
			};
			return self;
		},
		find: function(a){
			return PenguinsJS(selector + ' ' + a, selector);
		},
		playAudio: function(obj){
			var audioElement = document.createElement('audio');
			audioElement.autoplay = true;
			if(obj.autoplay == false){
				audioElement.removeAttribute('autoplay');
			};
			audioElement.src = obj.source;
			if(obj.showControls = true){
				audioElement.controls = true;
			};
			audioElement.volume = obj.volume;
			document.body.appendChild(audioElement);
		},
		selector: selector,
	};
};
PenguinsJS.version = {
	toString: function(){
		return 'v2.0.1';
	},
	subjectName: 'Penguins.js',
	fullName:'Penguins.js v2.0.1',
	major: 2, 
	minor: 0, 
	patch: 1,
};
var _ = PenguinsJS;
var __ = _;
var _PenguinsJS = PenguinsJS;
try{
	window.metadata = [];
	for(var item = 0; item < $('meta').length; item++){
		metadata.push($('meta')[item]);
	};
	metadata.addTag = function(name, value){
		$('<META>').attr('NAME', name).attr('CONTENT', value).appendTo('head');
	};
	metadata.removeTag = function(name){
		__('meta[name="' + name + '"]').set('outerHTML', '');
	};
}catch(e){};
