!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){var r=e(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"body {\r\n  margin: 0 auto;\r\n\r\n  \r\n}\r\n\r\n.initial {\r\n  background: black;\r\n  height:100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items:center;\r\n  height:100vh;\r\n}\r\n\r\n.initial-text {\r\n  color:white;\r\n  font-style: 36px;\r\n  margin: auto;\r\n  display: inline-block;\r\n}\r\n\r\n.slotImg {\r\n  width: 50px;\r\n  height: 37px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  min-height: 536px;\r\n  background-position: center;\r\n  object-fit: cover;\r\n  max-width: 960px;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.grid-container {\r\n  flex: 0.7;\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  align-items: center;\r\n  height: 100%;\r\n  position: relative;\r\n  right: 5%;\r\n}\r\n\r\n.slot {\r\n  display: inline-block;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.start-button {\r\n  background: darkgray;\r\n  width: 48px;\r\n  height: 48px;\r\n  object-fit: contain;\r\n  color: green;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 4%;\r\n  transform: translate(0, -50%);\r\n  background-size: contain;\r\n}\r\n\r\n@media only screen and (min-width: 576px) {\r\n  .slotImg {\r\n    width: 150px;\r\n    height: 100px;\r\n  }\r\n  .grid-container {\r\n    grid-column-gap: 0px;\r\n  }\r\n\r\n  .start-button {\r\n    width: 78px;\r\n    height: 78px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 960px) {\r\n  \r\n  .grid-container {\r\n    /* height:900px;/ */\r\n    grid-column-gap: 70px;\r\n  }\r\n  .slotImg {\r\n    width: 160px;\r\n    height: 120px;\r\n  }\r\n  .start-button {\r\n    width: 98px;\r\n    height: 98px;\r\n  }\r\n}\r\n\r\n.animation1 {\r\n  animation-name: cssAnimation;\r\n  animation-duration:400ms;\r\n}\r\n.animation2 {\r\n  animation-name: cssAnimation;\r\n  animation-duration:400ms;\r\n  animation-delay:200ms;\r\n}\r\n\r\n.animation3 {\r\n  animation-name: cssAnimation;\r\n  animation-duration:400ms;\r\n  animation-delay:400ms;\r\n\r\n}\r\n@keyframes cssAnimation {\r\n  from {\r\n    -webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0,0);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(0,500px);\r\n  }\r\n}",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,l=0,u=[],d=e(4);function f(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function m(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),m(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=l++;e=c||(c=h(t)),r=x.bind(null,e,a,!1),o=x.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),m(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return f(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&f(p(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function x(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){"use strict";e.r(t);e(0);var r=e.p+"04a018eee19ad845bea14d10ec84ab3e.png",o=e.p+"dfaad8232ed26802ecc39be8d3aecf84.png",i=e.p+"63fddcc1cce1a3e4e6b248d1e0b4c843.png",a=e.p+"476d68c3b421b3e1e24bc49159fd4259.png",s=e.p+"520da6b116348067ea8140d073b232a6.png",c=e.p+"90f7640d4316b6b60590eb3d1053e87c.png",l=[{name:"pineapple",image:a},{name:"strawberry",image:e.p+"b5e6fe39cd8198fe98762923168a4abc.png"},{name:"lemon",image:s},{name:"grapes",image:e.p+"79bb4ca550c98b41f5947a9d03df1a82.png"},{name:"apple",image:c},{name:"wild",image:e.p+"76ab1e3a9be708f748747103f1bcae32.png"}];function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}fetch("./assets/assets.json").then(function(n){return n.json()}).then(function(n){return console.log(n)});var f=function(){function n(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),"object"===u(n.instance)?n.instance:(this.coins=100,this.win="",this.amountOfWins=0,n.instance=this,this)}var t,e,a;return t=n,(e=[{key:"getCoins",value:function(){return this.coins}},{key:"spendCoins",value:function(){return this.coins-=10}},{key:"toggleStartButton",value:function(){var n=document.querySelector(".start-button");n.disabled?(n.disabled=!1,n.style.backgroundImage="url(".concat(i,")")):(n.disabled=!0,n.style.backgroundImage="url(".concat(o,")")),console.log(n)}},{key:"start",value:function(){clearTimeout(n),this.toggleStartButton(),document.querySelector(".grid-container").innerHTML=function(){var n=document.createElement("div");n.classList.add("container");for(var t=1;t<=9;t++){var e=document.createElement("div"),r=l[Math.floor(Math.random()*Math.floor(6))];switch(e.id="".concat(r.name),e.classList.add("slot"),e.classList.add("slot".concat(t)),t){case 1:case 4:case 7:e.classList.add("animation1");break;case 2:case 5:case 8:e.classList.add("animation2");break;case 3:case 6:case 9:e.classList.add("animation3")}e.innerHTML="<img src=".concat(r.image," class='slotImg'>"),n.append(e)}return n}().innerHTML,this.checkWin();var n=setTimeout(this.toggleStartButton,1e3)}},{key:"checkWin",value:function(){var n=document.querySelector(".slot1"),t=document.querySelector(".slot2"),e=document.querySelector(".slot3"),r=document.querySelector(".slot4"),o=document.querySelector(".slot5"),i=document.querySelector(".slot6"),a=document.querySelector(".slot7"),s=document.querySelector(".slot8"),c=document.querySelector(".slot9"),l=[[n.id,t.id,e.id],[r.id,o.id,i.id],[a.id,s.id,c.id]];console.log(l);var u="";this.win=l.some(function(n){var t=n.join("").split("wild");if(3==t.length)return u="win",!0;if(2==t.length){console.log("hey");var e=n.findIndex(function(n){return"wild"===n});switch(console.log(e),e){case 0:if(console.log("wew"),n[1]===n[2])return u="win",!0;u="lost";break;case 1:if(n[0]===n[2])return u="win",!0;u="lost";break;case 2:if(n[0]===n[1])return u="win",!0;u="lost"}}else{if(n[0]===n[1]&&n[0]===n[2]&&"wild"!=n[0])return console.log("win 3 same"),u="win",!0;u="lost"}}),console.log(u,this.win)}},{key:"showWin",value:function(){}},{key:"loading",value:function(){document.getElementById("root").innerHTML='\n     <div class="container">\n      <div class=\'grid-container\'>\n      <div class="slot slot1"><img src = '.concat(l[2].image," class='slotImg'></div>\n      <div class=\"slot slot2\"><img src = ").concat(l[5].image," class='slotImg'></div>\n      <div class=\"slot slot3\"><img src = ").concat(l[1].image," class='slotImg'></div>\n      <div class=\"slot slot4\"><img src = ").concat(l[1].image," class='slotImg'></div>\n      <div class=\"slot slot5\"><img src = ").concat(l[0].image," class='slotImg'></div>    \n      <div class=\"slot slot6\"><img src = ").concat(l[4].image," class='slotImg'></div>   \n      <div class=\"slot slot7\"><img src = ").concat(l[2].image," class='slotImg'></div>\n      <div class=\"slot slot8\"><img src = ").concat(l[3].image," class='slotImg'></div>    \n      <div class=\"slot slot9\"><img src = ").concat(l[0].image," class='slotImg'></div>    \n      </div>\n      <button class='start-button'></button>\n      </div>\n      "),document.querySelector(".container").style.backgroundImage="url(".concat(r,")");var n=document.querySelector(".start-button");n.style.backgroundImage="url(".concat(i,")"),n.addEventListener("click",this.start.bind(this))}}])&&d(t.prototype,e),a&&d(t,a),n}();setTimeout(function(){document.querySelector(".initial").classList.remove("initial"),(new f).loading()},500)}]);