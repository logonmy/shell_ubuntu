(function(){var g=function(i){return document.getElementById(i)||""};var a={getByClass:function(p,n,j){n=n||document;j=j||"*";var m=[];var l=(j==="*"&&n.all)?n.all:n.getElementsByTagName(j);var k=l.length;p=p.replace(/\-/g,"\\-");var o=new RegExp("(^|\\s)"+p+"(\\s|$)");while(--k>=0){if(o.test(l[k].className)){m.push(l[k])}}m.reverse();return m},addHandler:function(k,j,i){if(k.addEventListener){k.addEventListener(j,i,false)}else{if(k.attachEvent){k.attachEvent("on"+j,i)}else{k["on"+j]=i}}},removeHandler:function(k,j,i){if(k.removeEventListener){k.removeEventListener(j,i,false)}else{if(k.detachEvent){k.detachEvent("on"+j,i)}else{k["on"+j]=null}}}};var f=function(i,k){for(var j in k){i[j]=k[j]}return i};var b=function(i){return i.currentStyle||document.defaultView.getComputedStyle(i,null)};var e=function(k,i){var j=Array.prototype.slice.call(arguments).slice(2);return function(){return i.apply(k,j.concat(Array.prototype.slice.call(arguments)))}};var h={Quart:{easeOut:function(j,i,l,k){return -l*((j=j/k-1)*j*j*j-1)+i}},Back:{easeOut:function(j,i,m,l,k){if(k==undefined){k=1.70158}return m*((j=j/l-1)*j*((k+1)*j+k)+1)+i}},Bounce:{easeOut:function(j,i,l,k){if((j/=k)<(1/2.75)){return l*(7.5625*j*j)+i}else{if(j<(2/2.75)){return l*(7.5625*(j-=(1.5/2.75))*j+0.75)+i}else{if(j<(2.5/2.75)){return l*(7.5625*(j-=(2.25/2.75))*j+0.9375)+i}else{return l*(7.5625*(j-=(2.625/2.75))*j+0.984375)+i}}}}}};var c=function(j,m,l,k){this._slider=g(m);this._container=g(j);this._timer=null;this._count=Math.abs(l);this._target=0;this._t=this._b=this._c=0;this.Index=0;this.SetOptions(k);this.Auto=!!this.options.Auto;this.Duration=Math.abs(this.options.Duration);this.Time=Math.abs(this.options.Time);this.Pause=Math.abs(this.options.Pause);this.Tween=this.options.Tween;this.onStart=this.options.onStart;this.onFinish=this.options.onFinish;var i=!!this.options.Vertical;this._css=i?"top":"left";var n=b(this._container).position;n=="relative"||n=="absolute"||(this._container.style.position="relative");this._container.style.overflow="hidden";this._slider.style.position="absolute";this.Change=this.options.Change?this.options.Change:this._slider[i?"offsetHeight":"offsetWidth"]/this._count};c.prototype={SetOptions:function(i){this.options={Vertical:true,Auto:true,Change:0,Duration:50,Time:10,Pause:2000,onStart:function(){},onFinish:function(){},Tween:h.Quart.easeOut};f(this.options,i||{})},Run:function(i){i==undefined&&(i=this.Index);i<0&&(i=this._count-1)||i>=this._count&&(i=0);this._target=-Math.abs(this.Change)*(this.Index=i);this._t=0;this._b=parseInt(b(this._slider)[this.options.Vertical?"top":"left"]);this._c=this._target-this._b;this.onStart();this.Move();if((i+1)==this._count){this.onFinish()}},Move:function(){clearTimeout(this._timer);if(this._c&&this._t<this.Duration){this.MoveTo(Math.round(this.Tween(this._t++,this._b,this._c,this.Duration)));this._timer=setTimeout(e(this,this.Move),this.Time)}else{this.MoveTo(this._target);this.Auto&&(this._timer=setTimeout(e(this,this.Next),this.Pause))}},MoveTo:function(j){this._slider.style[this._css]=j+"px"},Next:function(){this.Run(++this.Index)},Previous:function(){this.Run(--this.Index)},Stop:function(){clearTimeout(this._timer);this.MoveTo(this._target)}};var d=function(i){this.SetOptions(i);this.init(i)};d.prototype={SetOptions:function(i){this.options={"Container":"container","Slider":"slider","Page":1,"Item":"item","Vertical":false,"Change":0,"Prev":"prev","Next":"next","Auto":true,"Timer":"","Speed":2000,"First":3000,"Balance":1,"Tween":"Tween.Quart.easeOut","OnMouseoverStop":false};f(this.options,i||{})},init:function(){var k=this.options,x=!k.Timer,t=k.Page,r=k.Timer,m=k.Balance,v=k.OnMouseoverStop,o;var s=g(k.Slider),u=a.getByClass(k.Item,s),w=u.length;if(!!(w%t)){var n=t-(w%t);for(var q=0;q<n;q++){if(u[q]){s.appendChild(u[q].cloneNode(true))}}}w=Math.ceil(w/t);if(k.Vertical){s.style.height=(w*k.Change)*t/m+"px"}else{s.style.width=(w*k.Change)*t/m+"px"}var p=new c(k.Container,k.Slider,w,{Auto:x,Vertical:k.Vertical,Change:k.Move||k.Change*t/m});p.Run();var j=function(){p.Next();o=setTimeout(j,k.Speed)};if(!x){o=setTimeout(j,k.First);setTimeout(function(){clearTimeout(o)},r)}a.addHandler(g(k.Prev),"click",function(){p.Previous()});a.addHandler(g(k.Next),"click",function(){p.Next()});if(v){a.addHandler(g(k.Container),"mouseover",function(){p.Stop()});a.addHandler(g(k.Container),"mouseout",function(){p.Run()})}}};window.slider=d;window.util=a})();