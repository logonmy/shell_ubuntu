(function(){var h={},mt={},c={id:"05ff9e4b77acc9197fb1fe12f47d29fb",dm:["linuxidc.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[3126, 2]],trust:0,vcard:0,qiao:0,lxb:0,conv:0,comm:0,apps:'siteId=1329443&goTop=1'};var p=!0,q=null,r=!1;mt.j={};mt.j.Ga=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.pa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,d){var e;d.C&&(e=new Date,e.setTime(e.getTime()+d.C));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.Ka?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.o={};mt.o.ba=function(a){return document.getElementById(a)};mt.o.Ca=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.o.R=function(){function a(){if(!a.t){a.t=p;for(var b=0,d=e.length;b<d;b++)e[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var d=r,e=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,r);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!d)if(d=p,"complete"===document.readyState)a.t=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
g,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var e=r;try{e=window.frameElement==q}catch(n){}document.documentElement.doScroll&&e&&b()}})();return function(b){a.t?b():e.push(b)}}()).t=r;mt.event={};mt.event.e=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===q)return"null";if(e instanceof Array){var d=["["],l=e.length,n,f,k;for(f=0;f<l;f++)switch(k=e[f],typeof k){case "undefined":case "function":case "unknown":break;default:n&&d.push(","),d.push(mt.m.stringify(k)),n=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';n=["{"];f=mt.m.stringify;for(l in e)if(Object.prototype.hasOwnProperty.call(e,l))switch(k=
e[l],typeof k){case "undefined":case "unknown":case "function":break;default:d&&n.push(","),d=1,n.push(f(l)+":"+f(k))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ha=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ja=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.A=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.A()&&(mt.localStorage.f.expires=e.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.A())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(e){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.A())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.S={};mt.S.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=q;d=window[e]=q;b&&b(a)};d.src=a};mt.J={};
mt.J.ga=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.J.Aa=function(a,b,d,e,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+e+'" src="'+b+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.i=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:q};mt.url.Ea=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.da=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.M=function(a){return(a=mt.url.da(a))?a.replace(/:\d+$/,""):a};mt.url.Da=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.g={Fa:"http://tongji.baidu.com/hm-web/welcome/ico",Q:"log.hm.baidu.com/hm.gif",V:"baidu.com",ka:"hmmd",la:"hmpl",ia:"hmkw",ha:"hmci",ma:"hmsr",n:0,k:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ia:0,xa:6E5,ya:10,za:1024,wa:1,w:2147483647,T:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={l:{},e:function(a,d){this.l[a]=this.l[a]||[];this.l[a].push(d)},r:function(a,d){this.l[a]=this.l[a]||[];for(var e=this.l[a].length,g=0;g<e;g++)this.l[a][g](d)}};return h.p=a})();
(function(){function a(a,e){var g=document.createElement("script");g.charset="utf-8";b.d(e,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=q,e()}:g.onload=function(){e()});g.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?d.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?d.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,d=mt.sessionStorage;return h.K=a})();
(function(){var a=mt.o,b=h.g,d=h.load,e=h.K;h.p.e("pv-b",function(){c.rec&&a.R(function(){for(var g=0,l=c.rp.length;g<l;g++){var n=c.rp[g][0],f=c.rp[g][1],k=a.ba("hm_t_"+n);if(f&&!(2==f&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.w),k=4==f?"http://crs.baidu.com/hl.js?"+["siteId="+c.id,"planId="+n,"rnd="+k].join("&"):"http://crs.baidu.com/t.js?"+["siteId="+c.id,"planId="+n,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
k].join("&"),d(k)}})})})();(function(){var a=h.g,b=h.load,d=h.K;h.p.e("pv-b",function(){if(c.trust&&c.vcard){var e=a.protocol+"//trust.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+d(),"rnd="+Math.round(Math.random()*a.w)].join("&");b(e)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.B.ea()+","+h.B.ca();h.b.h()}}function b(){clearTimeout(A);var a;y&&(a="visible"==document[y]);B&&(a=!document[B]);f="undefined"==typeof a?p:a;if((!n||!k)&&f&&m)v=p,u=+new Date;else if(n&&k&&(!f||!m))v=r,t+=+new Date-u;n=f;k=m;A=setTimeout(b,100)}function d(a){var u=document,k="";if(a in u)k=a;else for(var t=["webkit","ms","moz","o"],b=0;b<t.length;b++){var d=t[b]+a.charAt(0).toUpperCase()+a.slice(1);if(d in u){k=
d;break}}return k}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,b()}var g=mt.event,l=h.p,n=p,f=p,k=p,m=p,s=+new Date,u=s,t=0,v=p,y=d("visibilityState"),B=d("hidden"),A;b();(function(){var a=y.replace(/[vV]isibilityState/,"visibilitychange");g.e(document,a,b);g.e(window,"pageshow",b);g.e(window,"pagehide",b);"object"==typeof document.onfocusin?(g.e(document,"focusin",e),g.e(document,"focusout",e)):(g.e(window,"focus",e),
g.e(window,"blur",e))})();h.B={ea:function(){return+new Date-s},ca:function(){return v?+new Date-u+t:t}};l.e("pv-b",function(){g.e(window,"unload",a())});return h.B})();
(function(){var a=mt.lang,b=h.g,d=h.load,e={na:function(e){if((void 0===window._dxt||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.D();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},va:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.Y=e})();
(function(){function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var e=k[b];d.d(e,"Object")||d.d(e,"Array")?a(e):k[b]=String(e)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var d=mt.lang,e=mt.m,g=h.g,l=h.p,n=h.Y,f={N:q,q:[],z:0,O:r,init:function(){f.c=0;f.N={push:function(){f.H.apply(f,arguments)}};l.e("pv-b",function(){f.Z();f.$()});l.e("pv-d",f.aa);l.e("stag-b",function(){h.b.a.api=f.c||f.z?f.c+"_"+f.z:""});l.e("stag-d",function(){h.b.a.api=
0;f.c=0;f.z=0})},Z:function(){var a=window._hmt;if(a&&a.length)for(var b=0;b<a.length;b++){var d=a[b];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(f.c|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))f.c|=2,window._bdhm_autoPageview=d}}},$:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var b=0,e=a.length;b<e;b++)d.d(a[b],
"Array")&&"_trackEvent"!==a[b][0]&&"_trackRTEvent"!==a[b][0]?f.H(a[b]):f.q.push(a[b]);window._hmt=f.N}},aa:function(){if(0<f.q.length)for(var a=0,b=f.q.length;a<b;a++)f.H(f.q[a]);f.q=q},H:function(a){if(d.d(a,"Array")){var b=a[0];if(f.hasOwnProperty(b)&&d.d(f[b],"Function"))f[b](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){f.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.F?(h.b.a.nv=0,h.b.a.st=4):h.b.F=p;var b=h.b.a.u,d=h.b.a.su;h.b.a.u=g.protocol+"//"+document.location.host+
a[1];f.O||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=b;h.b.a.su=d}},_trackEvent:function(a){2<a.length&&(f.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],e=a[4]||3;if(0<d&&6>d&&0<e&&4>e){f.z++;for(var u=(h.b.a.cv||"*").split("!"),t=u.length;t<d-1;t++)u.push("*");u[d-1]=e+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=u.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.oa("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],f.O=p)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),f.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=e.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=
b[1];d.d(b,"Object")&&(a(b),b=e.stringify(b),512>=encodeURIComponent(b).length&&(f.c|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(e.stringify(b));var m=function(a){var b=h.b.a.rt;f.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},s=b.length;if(900>=s)m.call(this,b);else for(var s=Math.ceil(s/900),u="block|"+Math.round(Math.random()*g.w).toString(16)+"|"+s+"|",t=[],v=0;v<s;v++)t.push(v),t.push(b.substring(900*v,900*v+900)),m.call(this,u+t.join("|")),
t=[]}},_setUserId:function(a){a=a[1];n.na();n.va(a)}};f.init();h.W=f;return h.W})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.F=r,this.init())}var b=mt.url,d=mt.S,e=mt.J,g=mt.lang,l=mt.cookie,n=mt.j,f=mt.localStorage,k=mt.sessionStorage,m=h.g,s=h.p;a.prototype={G:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},P:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},s:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.P(a,c.dm[d]))return p}else{var e=b.M(a);if(e&&this.G(e,c.dm[d]))return p}return r},D:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.G(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},L:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.P(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},fa:function(){if(!document.referrer)return m.k-m.n>c.vdur?1:4;var a=
r;this.s(document.referrer)&&this.s(document.location.href)?a=p:(a=b.M(document.referrer),a=this.G(a||"",document.location.hostname));return a?m.k-m.n>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||k.get(a)||f.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.D(),path:this.L(),C:d}),d?f.set(a,b,d):k.set(a,b)}catch(e){}},oa:function(a){try{l.set(a,"",{domain:this.D(),path:this.L(),C:-1}),k.remove(a),f.remove(a)}catch(b){}},ta:function(){var a,b,d,e,f;m.n=this.getData("Hm_lpvt_"+
c.id)||0;13==m.n.length&&(m.n=Math.round(m.n/1E3));b=this.fa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.k-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.k);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.k,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.k);d=m.k==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.s(document.location.href)&&
(""===document.referrer||this.s(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},sa:function(){for(var a=[],b=0,d=m.T.length;b<d;b++){var e=m.T[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},ua:function(){this.ta();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.pa;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=e.ga();this.a.v="1.0.92";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.i(a,m.ka)||"";this.a.cp=b.i(a,m.la)||"";this.a.cw=b.i(a,m.ia)||"";this.a.ci=b.i(a,m.ha)||"";this.a.cf=b.i(a,m.ma)||""},init:function(){try{this.ua(),0===this.a.nv?this.ra():this.I(".*"),h.b=this,this.X(),
s.r("pv-b"),this.qa()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(m.protocol+"//"+m.Q+"?"+b.join("&"))}},qa:function(){function a(){s.r("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.F=p,this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.w);s.r("stag-b");var e=m.protocol+"//"+
m.Q+"?"+b.sa();s.r("stag-d");b.U(e);d.log(e,function(d){b.I(d);g.d(a,"Function")&&a.call(b)})},X:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.V)?p:r,f=b.i(a,"jn"),s=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&s)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},U:function(a){var b=k.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");k.set("Hm_unsent_"+c.id,b)},I:function(a){var b=k.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?k.set("Hm_unsent_"+c.id,b):k.remove("Hm_unsent_"+c.id))},ra:function(){var a=this,b=k.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),e=function(b){d.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.I(b)})},f=0,s=b.length;f<s;f++)e(b[f])}};return new a})();var w=h.g,x=h.load;if(c.apps){var z=[w.protocol,"//ers.baidu.com/app/s.js?"];z.push(c.apps);x(z.join(""))}var C=h.g,D=h.load;if(c.conv&&"http:"===C.protocol){var E=["http://page.baidu.com/conversion_js.php?sid="];E.push(c.conv);D(E.join(""))}var F=h.g,G=h.load;
c.lxb&&G([F.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var H=h.load,I=h.g.protocol;if(c.qiao){for(var J=[I+"//goutong.baidu.com/site/"],K=c.id,L=5381,M=K.length,N=0;N<M;N++)L=(33*L+Number(K.charCodeAt(N)))%4294967296;2147483648<L&&(L-=2147483648);J.push(L%1E3+"/");J.push(c.id+"/b.js");J.push("?siteId="+c.qiao);H(J.join(""))}
(function(){var a=mt.o,b=mt.event,d=mt.url,e=mt.m;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var g=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.R(function(){n=+new Date});var f=function(){var a,b,f;f=l("navigation");b=l("request");f={netAll:b.start-f.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-f.start};a=document.referrer;var k=q;b=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])k=d.i(a,"qid"),b=d.i(a,"click_t");a=k;f.qid=a!=q?a:"";b!=q?(f.bdDom=n?n-b:0,f.bdRun=g-b,f.bdDef=l("navigation").start-b):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=e.stringify(f);h.b.h()};b.e(window,"load",function(){setTimeout(f,500)})}}catch(k){}})();
(function(){var a=h.g,b={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ba="0";document.body.appendChild(b)}}catch(d){}}},d=navigator.userAgent.toLowerCase();-1<d.indexOf("android")&&-1===d.indexOf("micromessenger")&&b.init()})();
(function(){var a=mt.lang,b=mt.event;if(c.comm&&"undefined"!==typeof h.b){var d=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},e=/.*\/swt(\/)?([\?|#].*)?$/i,g={click:function(){for(var a=[],b=d(document.getElementsByTagName("a")),b=[].concat.apply(b,d(document.getElementsByTagName("area"))),b=[].concat.apply(b,d(document.getElementsByTagName("img"))),f=/openZoosUrl\(/,g=/\/LR\/Chatpre\.aspx/,k=0,m=b.length;k<m;k++){var l=b[k],n=l.getAttribute("onclick"),
l=l.getAttribute("href");(f.test(n)||g.test(l)||e.test(l))&&a.push(b[k])}return a}},l=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},n=function(a,b){if(b&&e.test(b.getAttribute("href"))){var d=b.getAttribute("href");a=["swt",d.replace?d.replace(/'/g,"'0").replace(/\*/g,"'1"):d,a].join("*")}h.b.a.et=86;h.b.a.ep=a;h.b.h();for(d=+new Date;500>=+new Date-d;);},f,k="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),m=function(b,d){if(f===d)return n(k+b,d),r;if(a.d(d,"Array")||
a.d(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(f===d[e])return n(k+b+"/"+(e+1),d[e]),r};b.e(document,"click",function(b){b=b||window.event;f=b.target||b.srcElement;var d={};for(l(g,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});f&&f!==document&&l(d,m)!==r;)f=f.parentNode})}})();})();
