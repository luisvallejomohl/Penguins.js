/***********************************************************
 * Penguins.js
 * Shortening JS Code
 * JS Library
 * Created by Luis Vallejo-Mohl
 * GNU Affero General Public License v3.0
 * Thanks to: 
 * John Resig for inspiration
***********************************************************/

var PenguinsJS = function(selector){
	var s = document.querySelectorAll(selector);
	return{
		get toDOMNodeList(){
			console.warn('__(\'...\').toDOMNodeList is deprecated. Use toDOMNodeArray instead.');
			return s;
		},
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
		date: new Date(),	
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
		find(a){
			return PenguinsJS(selector + ' ' + a);
		}
	};
};
PenguinsJS.version = {
	toString: function(){
		return 'v1.1.2';
	},
	name: 'v1.1.2',
	subjectName: 'Penguins.js',
	fullName:'Penguins.js v1.1.2',
	major: 1, 
	minor: 1, 
	patch: 2,
};
//Set _ the PenguinsJS, __ to _ and _PenguinsJS to PenguinsJS (in case of overwrite)
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
