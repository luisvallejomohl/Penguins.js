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
			for(var item = 0; item < s.length; item++)
				s[item][a] = v;
			return PenguinsJS(selector);
		},
		addElement:function(tagName, voidity, ID){
			if(voidity == 1){
				if(typeof ID != 'undefined'){
					for(var item = 0; item < s.length; item++){
						s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\"/>';
						return PenguinsJS('#' + ID);
					}
				}else{
					for(var item = 0; item < s.length; item++){
						s[item].innerHTML += '<' + tagName + '/>';
						return PenguinsJS(selector + ' ' + tagName + ':last-child')
					}
				}
			}else{
				if(typeof ID != 'undefined'){
					for(var item = 0; item < s.length; item++){
						s[item].innerHTML += '<' + tagName + ' id=\"' + ID + '\">' + '</' + tagName + '>';
						return PenguinsJS('#' + ID);
					}
				}else{
					for(var item = 0; item < s.length; item++){
						s[item].innerHTML += '<' + tagName + '></' + tagName + '>';
						return PenguinsJS(selector + ' ' + tagName + ':last-child');
					}
				}
			};
		},
		reload:function(){
			location.reload();
		},
		onEvent:function(e, f){
			for(var item = 0; item < s.length; item++)
				s[item].addEventListener(e, f);
			
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
					functio(item);
					item++;
				};
			};
			var item = 0;
			var newInterval = setInterval(functi, timeInterval)
		},
		add:function(a, v){
			for(var item = 0; item < s.length; item++)
				s[item][v] += a;
			
			return PenguinsJS(selector);
		},
		get:function(a){
			var array = [];
			for(var item = 0; item < s.length; item++)
				array.push(s[item][a])
			
			return array;
		},
		style:function(p, v){
			for(var item = 0; item < s.length; item++)
				s[item].style[p] = v;
			
			return PenguinsJS(selector);
		},
		remove:function(){
			for(var item = 0; item < s.length; item++)
				s[item].outerHTML = '';
		},
		requestTo: function(URL){
			var self = {};
			self.async = true;
			self.requestURL = URL;
			self.type = selector;
			self.on = function(e, n){
				self.onResponse = n;
				return self;
			};
			self.send = function(i){
				var request = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'));
				var subject = this;
				function funkytion(){
					if(request.status == 200 && request.readyState == 4){
						self.response = request.response;
						subject.onResponse(self.response);
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
PenguinsJS.reload = location.reload;
PenguinsJS.ize = function(a){
	a.id = Math.random() * 10000000000000000000000000000;
	return PenguinsJS('#' + a.id);
}
PenguinsJS.version = {
	toString: function(){
		return 'v2.0.3';
	},
	subjectName: 'Penguins.js',
	fullName:'Penguins.js v2.0.3',
	major: 2, 
	minor: 0, 
	patch: 3,
};

function JSONAt(src, onerror){
	var XHR = new XMLHttpRequest();
	if(typeof onerror != 'undefined'){
		XHR.onerror = onerror;
	}
	XHR.open('GET', src, false);
	XHR.send();
	return JSON.parse(XHR.response)
};
if(true){
	var _browser = '';
	var version = '';
	var idString = '';
	var tem = [];
	var a = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
	if(/trident/i.test(a[1])){
		//Internet Explorer
		tem = /\brv[ :]+(\d+.?\d*)/g.exec(navigator.userAgent) || [];
		_browser = 'Internet Explorer';
		version = tem[1];
	}else if(/firefox/i.test(a[1])){
		//Firefox
		tem = /\brv[ :]+(\d+.?\d*)/g.exec(navigator.userAgent) || [];
		_browser = 'Firefox';
		version = tem[1];
	}else if(/safari/i.test(a[1])){
		//Safari
		tem = navigator.userAgent.match(/\bVersion\/(\d+.?\d*\s*\w+)/);
		_browser = 'Safari';
		version = tem[1];
	}
	//If 'Chrome' is found, it may be another browser. 
	else if(a[1] === 'Chrome'){
		var temOpr = navigator.userAgent.match(/\b(OPR)\/(\d+.?\d*.?\d*.?\d*)/);
		var temEdge = navigator.userAgent.match(/\b(Edge)\/(\d+.?\d*)/);
		var temChrome = navigator.userAgent.match(/\b(Chrome)\/(\d+.?\d*.?\d*.?\d*)/);
		//a genuine 'Chrome' reading will result from ONLY temChrome not being null.
		var genuineChrome = temOpr == null && temEdge == null && temChrome != null;
		if(temOpr != null){
			//Opera
			_browser = temOpr[1].replace('OPR', 'Opera');
			version = temOpr[2];
		}
		if(temEdge != null){
			//Edge
			_browser = temEdge[1];
			version = temEdge[2];
		}
		if(genuineChrome){
			//Chrom(ium/e)
			_browser = temChrome[1];
			version = temChrome[2];
		}
	}
	window.browser = {
		name: _browser,
		version:version,
		fullName: _browser + '/' + version
	}
    
}
var _PenguinsJS = PenguinsJS;
var _ = _PenguinsJS;
var __ = _;
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

Object.prototype.addProperty = function(name, value){
	this[name] = value;
} //Define Object.prototype.addProperty, even though it is not explicity part of the PenguinsJS object

