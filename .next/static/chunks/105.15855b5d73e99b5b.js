(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{40926:function(t,e,n){"use strict";function r(){return(null===n.g||void 0===n.g?void 0:n.g.crypto)||(null===n.g||void 0===n.g?void 0:n.g.msCrypto)||{}}function o(){let t=r();return t.subtle||t.webkitSubtle}Object.defineProperty(e,"__esModule",{value:!0}),e.isBrowserCryptoAvailable=e.getSubtleCrypto=e.getBrowerCrypto=void 0,e.getBrowerCrypto=r,e.getSubtleCrypto=o,e.isBrowserCryptoAvailable=function(){return!!r()&&!!o()}},88618:function(t,e,n){"use strict";var r=n(34155);function o(){return"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product}function s(){return void 0!==r&&void 0!==r.versions&&void 0!==r.versions.node}Object.defineProperty(e,"__esModule",{value:!0}),e.isBrowser=e.isNode=e.isReactNative=void 0,e.isReactNative=o,e.isNode=s,e.isBrowser=function(){return!o()&&!s()}},1468:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let r=n(34308);r.__exportStar(n(40926),e),r.__exportStar(n(88618),e)},34308:function(t,e,n){"use strict";n.r(e),n.d(e,{__assign:function(){return s},__asyncDelegator:function(){return g},__asyncGenerator:function(){return m},__asyncValues:function(){return E},__await:function(){return b},__awaiter:function(){return f},__classPrivateFieldGet:function(){return U},__classPrivateFieldSet:function(){return x},__createBinding:function(){return p},__decorate:function(){return c},__exportStar:function(){return d},__extends:function(){return o},__generator:function(){return l},__importDefault:function(){return _},__importStar:function(){return J},__makeTemplateObject:function(){return w},__metadata:function(){return a},__param:function(){return u},__read:function(){return y},__rest:function(){return i},__spread:function(){return R},__spreadArrays:function(){return v},__values:function(){return h}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function c(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}function u(t,e){return function(n,r){e(n,r,t)}}function a(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))(function(o,s){function i(t){try{u(r.next(t))}catch(t){s(t)}}function c(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?o(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(i,c)}u((r=r.apply(t,e||[])).next())})}function l(t,e){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}function p(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}function d(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])}function h(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,s=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return i}function R(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var s=arguments[e],i=0,c=s.length;i<c;i++,o++)r[o]=s[i];return r}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function m(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),s=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){s.push([t,e,n,r])>1||c(t,e)})})}function c(t,e){try{var n;(n=o[t](e)).value instanceof b?Promise.resolve(n.value.v).then(u,a):f(s[0][2],n)}catch(t){f(s[0][3],t)}}function u(t){c("next",t)}function a(t){c("throw",t)}function f(t,e){t(e),s.shift(),s.length&&c(s[0][0],s[0][1])}}function g(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:b(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function E(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=h(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){!function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}(r,o,(e=t[n](e)).done,e.value)})}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function J(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function _(t){return t&&t.__esModule?t:{default:t}}function U(t,e){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return e.get(t)}function x(t,e,n){if(!e.has(t))throw TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},96641:function(t,e,n){"use strict";n.d(e,{k:function(){return a},Z:function(){return f}});var r=n(17187),o=n(54098),s=n.n(o),i=n(85094),c=n(56186);let u={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class a{constructor(t){if(this.url=t,this.events=new r.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,c.isHttpUrl)(t))throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw Error("Connection already closed");this.onClose()}async send(t,e){this.isAvailable||await this.register();try{let e=(0,i.u)(t),n=await s()(this.url,Object.assign(Object.assign({},u),{body:e})),r=await n.json();this.onPayload({data:r})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!(0,c.isHttpUrl)(t))throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){let t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((t,e)=>{this.events.once("register_error",t=>{this.resetMaxListeners(),e(t)}),this.events.once("open",()=>{if(this.resetMaxListeners(),void 0===this.isAvailable)return e(Error("HTTP connection is missing or invalid"));t()})})}this.url=t,this.registering=!0;try{let e=(0,i.u)({id:1,jsonrpc:"2.0",method:"test",params:[]});await s()(t,Object.assign(Object.assign({},u),{body:e})),this.onOpen()}catch(e){let t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(void 0===t.data)return;let e="string"==typeof t.data?(0,i.D)(t.data):t.data;this.events.emit("payload",e)}onError(t,e){let n=this.parseError(e),r=n.message||n.toString(),o=(0,c.formatJsonRpcError)(t,r);this.events.emit("payload",o)}parseError(t,e=this.url){return(0,c.parseConnectionError)(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>10&&this.events.setMaxListeners(10)}}var f=a},46160:function(t,e,n){"use strict";n.d(e,{r:function(){return s}});var r=n(17187),o=n(56186);class s extends o.IJsonRpcProvider{constructor(t){super(t),this.events=new r.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict((0,o.formatJsonRpcRequest)(t.method,t.params||[]),e)}async requestStrict(t,e){return new Promise(async(n,r)=>{if(!this.connection.connected)try{await this.open()}catch(t){r(t)}this.events.on(`${t.id}`,t=>{(0,o.isJsonRpcError)(t)?r(t.error):n(t.result)});try{await this.connection.send(t,e)}catch(t){r(t)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),(0,o.isJsonRpcResponse)(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),"string"==typeof t&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",()=>this.events.emit("disconnect")),this.connection.on("error",t=>this.events.emit("error",t)),this.hasRegisteredEventListeners=!0)}}},35885:function(t,e,n){"use strict";n.d(e,{IJsonRpcProvider:function(){return o.x0}});var r=n(74057);n.o(r,"IJsonRpcProvider")&&n.d(e,{IJsonRpcProvider:function(){return r.IJsonRpcProvider}}),n.o(r,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return r.isHttpUrl}}),n.o(r,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return r.isJsonRpcError}}),n.o(r,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return r.isJsonRpcRequest}}),n.o(r,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return r.isJsonRpcResponse}}),n.o(r,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return r.isJsonRpcResult}}),n.o(r,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return r.isLocalhostUrl}}),n.o(r,"isReactNative")&&n.d(e,{isReactNative:function(){return r.isReactNative}}),n.o(r,"isWsUrl")&&n.d(e,{isWsUrl:function(){return r.isWsUrl}});var o=n(73416),s=n(71948);n.o(s,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return s.isHttpUrl}}),n.o(s,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return s.isJsonRpcError}}),n.o(s,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return s.isJsonRpcRequest}}),n.o(s,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return s.isJsonRpcResponse}}),n.o(s,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return s.isJsonRpcResult}}),n.o(s,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return s.isLocalhostUrl}}),n.o(s,"isReactNative")&&n.d(e,{isReactNative:function(){return s.isReactNative}}),n.o(s,"isWsUrl")&&n.d(e,{isWsUrl:function(){return s.isWsUrl}})},74057:function(){},73416:function(t,e,n){"use strict";n.d(e,{XR:function(){return o},x0:function(){return i}});class r{}class o extends r{constructor(t){super()}}class s extends r{constructor(){super()}}class i extends s{constructor(t){super()}}},71948:function(){},79806:function(t,e,n){"use strict";n.d(e,{CA:function(){return o},JV:function(){return c},O4:function(){return r},dQ:function(){return s},xK:function(){return i}});let r="INTERNAL_ERROR",o="SERVER_ERROR",s=[-32700,-32600,-32601,-32602,-32603],i={PARSE_ERROR:{code:-32700,message:"Parse error"},INVALID_REQUEST:{code:-32600,message:"Invalid Request"},METHOD_NOT_FOUND:{code:-32601,message:"Method not found"},INVALID_PARAMS:{code:-32602,message:"Invalid params"},[r]:{code:-32603,message:"Internal error"},[o]:{code:-32e3,message:"Server error"}},c=o},9698:function(t,e,n){"use strict";var r=n(1468);n.o(r,"IJsonRpcProvider")&&n.d(e,{IJsonRpcProvider:function(){return r.IJsonRpcProvider}}),n.o(r,"formatJsonRpcError")&&n.d(e,{formatJsonRpcError:function(){return r.formatJsonRpcError}}),n.o(r,"formatJsonRpcRequest")&&n.d(e,{formatJsonRpcRequest:function(){return r.formatJsonRpcRequest}}),n.o(r,"formatJsonRpcResult")&&n.d(e,{formatJsonRpcResult:function(){return r.formatJsonRpcResult}}),n.o(r,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return r.isHttpUrl}}),n.o(r,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return r.isJsonRpcError}}),n.o(r,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return r.isJsonRpcRequest}}),n.o(r,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return r.isJsonRpcResponse}}),n.o(r,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return r.isJsonRpcResult}}),n.o(r,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return r.isLocalhostUrl}}),n.o(r,"isReactNative")&&n.d(e,{isReactNative:function(){return r.isReactNative}}),n.o(r,"isWsUrl")&&n.d(e,{isWsUrl:function(){return r.isWsUrl}}),n.o(r,"payloadId")&&n.d(e,{payloadId:function(){return r.payloadId}})},90110:function(t,e,n){"use strict";n.d(e,{CX:function(){return c},L2:function(){return i},by:function(){return s},i5:function(){return o}});var r=n(79806);function o(t){return r.dQ.includes(t)}function s(t){return Object.keys(r.xK).includes(t)?r.xK[t]:r.xK[r.JV]}function i(t){let e=Object.values(r.xK).find(e=>e.code===t);return e||r.xK[r.JV]}function c(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?Error(`Unavailable ${n} RPC url at ${e}`):t}},71937:function(t,e,n){"use strict";n.d(e,{RI:function(){return u},o0:function(){return s},sT:function(){return i},tm:function(){return c}});var r=n(90110),o=n(79806);function s(){let t=1e3*Date.now();return t+Math.floor(1e3*Math.random())}function i(t,e,n){return{id:n||s(),jsonrpc:"2.0",method:t,params:e}}function c(t,e){return{id:t,jsonrpc:"2.0",result:e}}function u(t,e,n){var s;return{id:t,jsonrpc:"2.0",error:void 0===(s=e)?(0,r.by)(o.O4):("string"==typeof s&&(s=Object.assign(Object.assign({},(0,r.by)(o.CA)),{message:s})),void 0!==n&&(s.data=n),(0,r.i5)(s.code)&&(s=(0,r.L2)(s.code)),s)}}},56186:function(t,e,n){"use strict";n.d(e,{formatJsonRpcError:function(){return s.RI},formatJsonRpcRequest:function(){return s.sT},formatJsonRpcResult:function(){return s.tm},isHttpUrl:function(){return c.jK},isJsonRpcError:function(){return u.jg},isJsonRpcRequest:function(){return u.DW},isJsonRpcResponse:function(){return u.u},isJsonRpcResult:function(){return u.k4},isLocalhostUrl:function(){return c.JF},isWsUrl:function(){return c.UZ},parseConnectionError:function(){return r.CX},payloadId:function(){return s.o0}}),n(79806);var r=n(90110),o=n(9698);n.o(o,"IJsonRpcProvider")&&n.d(e,{IJsonRpcProvider:function(){return o.IJsonRpcProvider}}),n.o(o,"formatJsonRpcError")&&n.d(e,{formatJsonRpcError:function(){return o.formatJsonRpcError}}),n.o(o,"formatJsonRpcRequest")&&n.d(e,{formatJsonRpcRequest:function(){return o.formatJsonRpcRequest}}),n.o(o,"formatJsonRpcResult")&&n.d(e,{formatJsonRpcResult:function(){return o.formatJsonRpcResult}}),n.o(o,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return o.isHttpUrl}}),n.o(o,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return o.isJsonRpcError}}),n.o(o,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return o.isJsonRpcRequest}}),n.o(o,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return o.isJsonRpcResponse}}),n.o(o,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return o.isJsonRpcResult}}),n.o(o,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return o.isLocalhostUrl}}),n.o(o,"isReactNative")&&n.d(e,{isReactNative:function(){return o.isReactNative}}),n.o(o,"isWsUrl")&&n.d(e,{isWsUrl:function(){return o.isWsUrl}}),n.o(o,"payloadId")&&n.d(e,{payloadId:function(){return o.payloadId}});var s=n(71937),i=n(26043);n.o(i,"IJsonRpcProvider")&&n.d(e,{IJsonRpcProvider:function(){return i.IJsonRpcProvider}}),n.o(i,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return i.isHttpUrl}}),n.o(i,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return i.isJsonRpcError}}),n.o(i,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return i.isJsonRpcRequest}}),n.o(i,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return i.isJsonRpcResponse}}),n.o(i,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return i.isJsonRpcResult}}),n.o(i,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return i.isLocalhostUrl}}),n.o(i,"isReactNative")&&n.d(e,{isReactNative:function(){return i.isReactNative}}),n.o(i,"isWsUrl")&&n.d(e,{isWsUrl:function(){return i.isWsUrl}});var c=n(46119),u=n(84733)},26043:function(t,e,n){"use strict";n.d(e,{IJsonRpcProvider:function(){return r.IJsonRpcProvider}});var r=n(35885);n.o(r,"isHttpUrl")&&n.d(e,{isHttpUrl:function(){return r.isHttpUrl}}),n.o(r,"isJsonRpcError")&&n.d(e,{isJsonRpcError:function(){return r.isJsonRpcError}}),n.o(r,"isJsonRpcRequest")&&n.d(e,{isJsonRpcRequest:function(){return r.isJsonRpcRequest}}),n.o(r,"isJsonRpcResponse")&&n.d(e,{isJsonRpcResponse:function(){return r.isJsonRpcResponse}}),n.o(r,"isJsonRpcResult")&&n.d(e,{isJsonRpcResult:function(){return r.isJsonRpcResult}}),n.o(r,"isLocalhostUrl")&&n.d(e,{isLocalhostUrl:function(){return r.isLocalhostUrl}}),n.o(r,"isReactNative")&&n.d(e,{isReactNative:function(){return r.isReactNative}}),n.o(r,"isWsUrl")&&n.d(e,{isWsUrl:function(){return r.isWsUrl}})},46119:function(t,e,n){"use strict";function r(t,e){let n=function(t){let e=t.match(RegExp(/^\w+:/,"gi"));if(e&&e.length)return e[0]}(t);return void 0!==n&&RegExp(e).test(n)}function o(t){return r(t,"^https?:")}function s(t){return r(t,"^wss?:")}function i(t){return RegExp("wss?://localhost(:d{2,5})?").test(t)}n.d(e,{JF:function(){return i},UZ:function(){return s},jK:function(){return o}})},84733:function(t,e,n){"use strict";function r(t){return"object"==typeof t&&"id"in t&&"jsonrpc"in t&&"2.0"===t.jsonrpc}function o(t){return r(t)&&"method"in t}function s(t){return r(t)&&(i(t)||c(t))}function i(t){return"result"in t}function c(t){return"error"in t}n.d(e,{DW:function(){return o},jg:function(){return c},k4:function(){return i},u:function(){return s}})},85094:function(t,e,n){"use strict";function r(t){if("string"!=typeof t)throw Error(`Cannot safe json parse value of type ${typeof t}`);try{return JSON.parse(t)}catch(e){return t}}function o(t){return"string"==typeof t?t:JSON.stringify(t)}n.d(e,{D:function(){return r},u:function(){return o}})},54098:function(t,e){var n,r="undefined"!=typeof self?self:this,o=function(){function t(){this.fetch=!1,this.DOMException=r.DOMException}return t.prototype=r,new t}();n=o,function(t){var e={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function u(t){this.map={},t instanceof u?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function a(t){if(t.bodyUsed)return Promise.reject(TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function l(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t){if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else{var n;e.arrayBuffer&&e.blob&&(n=t)&&DataView.prototype.isPrototypeOf(n)?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t,e,n,r=a(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,n=f(e=new FileReader),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},e.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=s(t),e=i(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},u.prototype.delete=function(t){delete this.map[s(t)]},u.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},u.prototype.set=function(t,e){this.map[s(t)]=i(e)},u.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},u.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),c(t)},u.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},u.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),c(t)},e.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var n,r,o=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",(e.headers||!this.headers)&&(this.headers=new u(e.headers)),this.method=(r=(n=e.method||this.method||"GET").toUpperCase(),h.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function R(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},d.call(y.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];v.redirect=function(t,e){if(-1===b.indexOf(e))throw RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.DOMException=n.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function m(n,r){return new Promise(function(o,s){var i=new y(n,r);if(i.signal&&i.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function a(){c.abort()}c.onload=function(){var t,e,n={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e)};n.url="responseURL"in c?c.responseURL:n.headers.get("X-Request-URL");var r="response"in c?c.response:c.responseText;o(new v(r,n))},c.onerror=function(){s(TypeError("Network request failed"))},c.ontimeout=function(){s(TypeError("Network request failed"))},c.onabort=function(){s(new t.DOMException("Aborted","AbortError"))},c.open(i.method,i.url,!0),"include"===i.credentials?c.withCredentials=!0:"omit"===i.credentials&&(c.withCredentials=!1),"responseType"in c&&e.blob&&(c.responseType="blob"),i.headers.forEach(function(t,e){c.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",a),c.onreadystatechange=function(){4===c.readyState&&i.signal.removeEventListener("abort",a)}),c.send(void 0===i._bodyInit?null:i._bodyInit)})}m.polyfill=!0,n.fetch||(n.fetch=m,n.Headers=u,n.Request=y,n.Response=v),t.Headers=u,t.Request=y,t.Response=v,t.fetch=m,Object.defineProperty(t,"__esModule",{value:!0})}({}),o.fetch.ponyfill=!0,delete o.fetch.polyfill,(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},44020:function(t){"use strict";var e="%[a-f0-9]{2}",n=RegExp("("+e+")|([^%]+?)","gi"),r=RegExp("("+e+")+","gi");t.exports=function(t){if("string"!=typeof t)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=r.exec(t);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var s=function(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(n)||[],r=1;r<e.length;r++)e=(t=(function t(e,n){try{return[decodeURIComponent(e.join(""))]}catch(t){}if(1===e.length)return e;n=n||1;var r=e.slice(0,n),o=e.slice(n);return Array.prototype.concat.call([],t(r),t(o))})(e,r).join("")).match(n)||[];return t}}(o[0]);s!==o[0]&&(e[o[0]]=s)}o=r.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),c=0;c<i.length;c++){var u=i[c];t=t.replace(RegExp(u,"g"),e[u])}return t}(t)}}},80500:function(t){"use strict";t.exports=(t,e)=>{if(!("string"==typeof t&&"string"==typeof e))throw TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];let n=t.indexOf(e);return -1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},70610:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},57026:function(t){"use strict";t.exports=function(){throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}}]);