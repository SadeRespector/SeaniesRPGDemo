(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,721];
exports.modules = {

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(697);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(502);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(577);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(713);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_nftCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([
    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum,
    ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [
        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.goerli
    ] : []
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__.alchemyProvider)({
        // This is Alchemy's default API key.
        // You can get your own at https://dashboard.alchemyapi.io
        apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC"
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({
    appName: "RainbowKit App",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen gradient-bg-welcome",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nftCard__WEBPACK_IMPORTED_MODULE_9__.GetEXPBalance, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 204:
/***/ (() => {



/***/ }),

/***/ 713:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 519:
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ }),

/***/ 921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 697:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ 502:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ 577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [549], () => (__webpack_exec__(847)));
module.exports = __webpack_exports__;

})();