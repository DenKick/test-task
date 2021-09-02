(function(e){function t(t){for(var r,o,a=t[0],d=t[1],s=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var d=n[a];0!==i[d]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1745:function(e,t,n){"use strict";n("f18e")},"460b":function(e,t,n){"use strict";n("ac85")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={class:"main-container"},c={key:0,class:"jokes-container"},o={key:1,class:"loading-container"};function a(e,t,n,a,d,s){var u=Object(r["l"])("Joke"),l=Object(r["l"])("Spinner");return Object(r["h"])(),Object(r["d"])("div",i,[Object(r["e"])("div",null,[Object(r["o"])(Object(r["e"])("input",{class:"keyword-input",type:"text",placeholder:"Search","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.keyword=t})},null,512),[[r["n"],e.keyword]])]),e.isLoaded?(Object(r["h"])(),Object(r["d"])("div",c,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(s.filteredJokes,(function(e){return Object(r["h"])(),Object(r["c"])(u,{key:e.id,id:e.id,type:e.type,text:e.joke,setup:e.setup,delivery:e.delivery,category:e.category},null,8,["id","type","text","setup","delivery","category"])})),128))])):(Object(r["h"])(),Object(r["d"])("div",o,[Object(r["f"])(l)]))])}n("d3b7"),n("caad"),n("2532"),n("4de4");Object(r["j"])("data-v-4f9e9317");var d={class:"spinner"};function s(e,t,n,i,c,o){return Object(r["h"])(),Object(r["d"])("div",d)}Object(r["i"])();var u={name:"Spinner"};n("1745");u.render=s,u.__scopeId="data-v-4f9e9317";var l=u;Object(r["j"])("data-v-651ecc03");var p={class:"joke-container"},f={class:"joke-text"},b={key:0},j={key:1},O={class:"joke-text"},v={class:"joke-text"},h={class:"joke-tag"},k={class:"like-btn-container"};function y(e,t,n,i,c,o){var a=Object(r["l"])("LikeButton");return Object(r["h"])(),Object(r["d"])("div",p,[Object(r["e"])("div",f,["single"===n.type?(Object(r["h"])(),Object(r["d"])("div",b,Object(r["m"])(n.text),1)):(Object(r["h"])(),Object(r["d"])("div",j,[Object(r["e"])("span",O,Object(r["m"])(n.setup),1),Object(r["e"])("span",v,Object(r["m"])(n.delivery),1)]))]),Object(r["e"])("div",h,Object(r["m"])(n.category),1),Object(r["e"])("div",k,[Object(r["f"])(a,{id:n.id},null,8,["id"])])])}Object(r["i"])();n("a9e3");Object(r["j"])("data-v-4dd70970");var g=Object(r["e"])("svg",{viewBox:"0 -28 512.00002 512",xmlns:"http://www.w3.org/2000/svg"},[Object(r["e"])("path",{d:"m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"})],-1),m=[g];function w(e,t,n,i,c,o){return Object(r["h"])(),Object(r["d"])("div",{class:Object(r["g"])(c.isLiked?"heart-icon liked":"heart-icon"),onClick:t[0]||(t[0]=function(){return o.clickHandler&&o.clickHandler.apply(o,arguments)})},m,2)}Object(r["i"])();n("a434");var S={name:"LikeButton",props:{id:Number},data:function(){return{isLiked:!1}},created:function(){var e=JSON.parse(window.localStorage.getItem("likes"));if(null!=e){var t=e.indexOf(this.id);this.isLiked=-1!==t}},methods:{clickHandler:function(){var e=JSON.parse(window.localStorage.getItem("likes"));if(null===e&&(e=[]),!1===this.isLiked)e.push(this.id),this.isLiked=!0;else{var t=e.indexOf(this.id);-1===t||e.splice(t,1),this.isLiked=!1}window.localStorage.setItem("likes",JSON.stringify(e))}}};n("b6a8");S.render=w,S.__scopeId="data-v-4dd70970";var x=S,J={name:"Joke",components:{LikeButton:x},props:{id:Number,type:String,text:String,setup:String,delivery:String,category:String}};n("460b");J.render=y,J.__scopeId="data-v-651ecc03";var L=J,_={name:"App",components:{Spinner:l,Joke:L},methods:{apiFetch:function(){var e=this;fetch("https://v2.jokeapi.dev/joke/Any?amount=10").then((function(e){return e.json()})).then((function(t){e.error=t.error,e.amount=t.amount,e.jokes=t.jokes,e.isLoaded=!0})).catch((function(e){return console.log(e)}))},filterJoke:function(e){return"single"===e.type?e.joke.includes(this.keyword):e.setup.includes(this.keyword)||e.setup.includes(this.keyword)}},data:function(){return{isLoaded:!1,error:null,amount:null,jokes:null,keyword:""}},created:function(){this.apiFetch()},computed:{filteredJokes:function(){var e=this;return this.jokes.filter((function(t){return e.filterJoke(t)}))}}};n("9dc7");_.render=a;var P=_;Object(r["b"])(P).mount("#app")},"9b5e":function(e,t,n){},"9dc7":function(e,t,n){"use strict";n("9b5e")},ac85:function(e,t,n){},b6a8:function(e,t,n){"use strict";n("e431")},e431:function(e,t,n){},f18e:function(e,t,n){}});
//# sourceMappingURL=app.ae968f7f.js.map