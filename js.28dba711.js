parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"duI9":[function(require,module,exports) {
module.exports="/song2.167afdc9.mp3";
},{}],"lBIj":[function(require,module,exports) {
module.exports="/song3.5f18c31c.mp3";
},{}],"DEhP":[function(require,module,exports) {
module.exports="/song1.041de1c2.mp3";
},{}],"NLqZ":[function(require,module,exports) {
module.exports={song2:require("./song2.mp3"),song3:require("./song3.mp3"),song1:require("./song1.mp3")};
},{"./song2.mp3":"duI9","./song3.mp3":"lBIj","./song1.mp3":"DEhP"}],"pKdB":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function o(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(t){var o=n(t,"string");return"symbol"==e(o)?o:o+""}function n(t,o){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,o||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.play_song=a;var u=exports.default=o(function e(t,o){i(this,e),this.element=document.querySelector(t),this.audio=new Audio(o)});function a(e){e.element.onclick=function(){e.audio.paused?e.audio.play():e.audio.pause()}}
},{}],"ERFn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Song.js"));function r(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(r=function(t){return t?n:e})(t)}function e(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=r(e);if(n&&n.has(t))return n.get(t);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&{}.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}return o.default=t,n&&n.set(t,o),o}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,r){return f(t)||l(t,r)||u(t,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,r){if(t){if("string"==typeof t)return a(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function l(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],l=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(t){f=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}function f(t){if(Array.isArray(t))return t}function c(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function y(t,r,e){return r&&c(t.prototype,r),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var r=s(t,"string");return"symbol"==n(r)?r:r+""}function s(t,r){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,r||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function b(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var v=exports.default=y(function r(e){b(this,r),Object.entries(e);for(var n=0,i=Object.entries(e);n<i.length;n++){var u=o(i[n],2),a=u[0],l=u[1],f=new t.default(a,l);(0,t.play_song)(f),0}});
},{"./Song.js":"pKdB"}],"QvaY":[function(require,module,exports) {
"use strict";var e=r(require("../assets/songs/*.mp3")),t=r(require("./Player.js"));function r(e){return e&&e.__esModule?e:{default:e}}Object.keys(e.default);for(var a={},s=1,u=0,l=Object.keys(e.default);u<l.length;u++){var n=l[u];a[".item-".concat(s)]=e.default[n],s++,console.log(a)}var o=new t.default(a);
},{"../assets/songs/*.mp3":"NLqZ","./Player.js":"ERFn"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.28dba711.js.map