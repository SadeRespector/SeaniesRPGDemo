(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{92003:function(e){"use strict";e.exports=function({mustBeMetaMask:e=!1,silent:t=!1,timeout:r=3e3}={}){!function(){if("boolean"!=typeof e)throw Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof r)throw Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let o=!1;return new Promise(n=>{window.ethereum?l():(window.addEventListener("ethereum#initialized",l,{once:!0}),setTimeout(()=>{l()},r));function l(){if(o)return;o=!0,window.removeEventListener("ethereum#initialized",l);let{ethereum:r}=window;r&&(!e||r.isMetaMask)?n(r):(t||console.error("@metamask/detect-provider:",e&&r?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum."),n(null))}})}},45728:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(39158)}])},37645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:o}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=o({},n,e)),n=o({},n,t);let d=n.loader,u=()=>null!=d?d().then(s):Promise.resolve(s(()=>null));return(n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr)?r(o({},n,{loader:u})):(delete n.webpack,delete n.modules,i(r,n))},t.noSSR=i;var o=r(6495).Z,n=r(92648).Z,l=(n(r(67294)),n(r(14588)));function s(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=(0,r(92648).Z)(r(67294));let n=o.default.createContext(null);t.LoadableContext=n},14588:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6495).Z,n=(0,r(92648).Z)(r(67294)),l=r(33644);let s=[],i=[],d=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function s(){if(!o){let t=new c(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!d){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return s()})}function u(e,t){!function(){s();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return u.preload=()=>s(),u.displayName="LoadableComponent",n.default.forwardRef(u)}(u,e)}function f(e,t){let r=[];for(;e.length;){let o=e.pop();r.push(o(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}h.preloadAll=()=>new Promise((e,t)=>{f(s).then(e,t)}),h.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(d=!0,t());f(i,e).then(r,r)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},39158:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var o=r(85893);next,r(9008);var n=r(43138),l=r(69549);r(92003);var s=r(5152),i=r.n(s),d=r(37918),u=r.n(d),c=r(67294);i()(()=>Promise.resolve().then(r.t.bind(r,37918,23)),{loadableGenerated:{webpack:()=>[37918]},ssr:!1});let h=()=>{let e=async()=>{await window.ethereum.enable();let e=new(u())(window.ethereum);await window.ethereum.request({method:"eth_requestAccounts"});let t=new e.eth.Contract(n.Mt,n.iF);await t.methods.mint().send({from:ethereum.selectedAddress})},t=async()=>{await window.ethereum.enable();let e=new(u())(window.ethereum);await window.ethereum.request({method:"eth_requestAccounts"});let t=new e.eth.Contract(n.OZ,n.RN);await t.methods.mint(ethereum.selectedAddress,"100000000000000000000000000").send({from:ethereum.selectedAddress})},r=async()=>{await window.ethereum.enable();let e=await window.ethereum.request({method:"eth_requestAccounts"}),t=e[0];console.log(e[0]),window.ethereum.on("accountsChanged",function(e){return t})},s="0x9f4FC01f18Cd418099c5E0C42d71AA41f8eb9824",[i,d]=(0,c.useState)([]),[h,f]=(0,c.useState)(!1),m=async e=>{let t;console.log("fetching nfts");let r="https://eth-goerli.alchemyapi.io/v2/".concat("eSmunca2n2fFJN6CvHqybikEWm9J-ypS","/getNFTs/"),o=await window.ethereum.request({method:"eth_requestAccounts"}),n=o[0];if(s.length){console.log("fetching nfts for collection owned by address");let e="".concat(r,"?owner=").concat(n,"&contractAddresses%5B%5D=").concat(s);t=await fetch(e,l).then(e=>e.json())}else{var l={method:"GET"};let e="".concat(r,"?owner=").concat(a);t=await fetch(e,l).then(e=>e.json())}t&&(console.log("nfts:",t),d(t.ownedNfts))},w=async()=>{if(s.length){let e="".concat("https://eth-mainnet.alchemyapi.io/v2/".concat("A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM","/getNFTsForCollection/"),"?contractAddress=").concat(s,"&withMetadata=","true"),t=await fetch(e,{method:"GET"}).then(e=>e.json());t&&(console.log("NFTs in collection:",t),d(t.nfts))}};return(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center py-8 gap-y-3 bg-gd-welcome ",children:[(0,o.jsx)("div",{className:"flex flex-col w-full justify-center items-center gap-y-2 bg-gd-welcome",children:(0,o.jsxs)("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:[(0,o.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",onClick:async()=>{let e=async()=>{await r()};console.log(e,"Button clicked"),h?w():m(e)},children:"Show me my Seanies!"}),(0,o.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900  hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",onClick:e,children:"Mint a test Sheanie"}),(0,o.jsx)("button",{type:"button",class:"px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700",onClick:t,children:'Mint Some "Dickels"'})]})}),(0,o.jsx)("div",{className:"flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center ",children:i.length&&i.map(e=>(0,o.jsx)(l.NFTCard,{nft:e}))})]})};var f=h},5152:function(e,t,r){e.exports=r(37645)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);