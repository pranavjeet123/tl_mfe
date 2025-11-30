"use strict";
(self["webpackChunkinsights"] = self["webpackChunkinsights"] || []).push([["__federation_expose_Module"], {
"./src/styles.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


}),
"./src/app/app.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: () => (App),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* import */var _insights_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/insights-welcome.tsx");
/* import */var _components_FavoritesDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/FavoritesDashboard.tsx");
/* import */var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/styles.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




function App() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container mx-auto p-4",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_insights_welcome__WEBPACK_IMPORTED_MODULE_1__.InsightsWelcome, {}, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/app.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FavoritesDashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/app.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/app.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/app.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/app.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = App;
/* export default */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


}),
"./src/app/components/FavoritesDashboard.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* import */var _services_communication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/services/communication.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = undefined;

var _s = $RefreshSig$();


var FavoritesDashboard = function() {
    _s();
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), favorites = _useState[0], setFavorites = _useState[1];
    var _useState1 = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedLocation = _useState1[0], setSelectedLocation = _useState1[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        console.log('📊 [Insights] Setting up communication subscriptions');
        var communication = (0,_services_communication__WEBPACK_IMPORTED_MODULE_2__.getCommunicationService)();
        // Subscribe to favorites updates
        var favoritesSubscription = communication.favoriteCandidates$.subscribe(function(newFavorites) {
            console.log('📊 [Insights] Received favorites update:', newFavorites.length);
            setFavorites(newFavorites);
        });
        var selectedSubscription = communication.selectedCandidate$.subscribe(setSelectedLocation);
        return function() {
            favoritesSubscription.unsubscribe();
            selectedSubscription.unsubscribe();
            console.log('📊 [Insights] Unsubscribed from communication services');
        };
    }, []);
    var formatCurrency = function(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };
    var calculateTotalRent = function() {
        return favorites.reduce(function(total, favorite) {
            var props = favorite.properties;
            return total + props.estimated_rent;
        }, 0);
    };
    var getAverageRent = function() {
        if (favorites.length === 0) return 0;
        return calculateTotalRent() / favorites.length;
    };
    var handleRemoveFromFavorites = function(candidateId) {
        var communication = (0,_services_communication__WEBPACK_IMPORTED_MODULE_2__.getCommunicationService)();
        communication.removeFavoriteCandidate(candidateId, 'insights');
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        className: "text-3xl font-bold text-gray-800 mb-6",
                        children: "Location Insights Dashboard"
                    }, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, _this),
                    favorites.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "text-gray-400 mb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                                    className: "mx-auto w-16 h-16",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1,
                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "text-xl font-medium text-gray-600 mb-2",
                                children: "No favorite locations yet"
                            }, void 0, false, {
                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-gray-500",
                                children: "Add some locations to favorites from the Maps app to see insights here."
                            }, void 0, false, {
                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-3 bg-blue-100 rounded-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                                                        className: "w-6 h-6 text-blue-600",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-sm font-medium text-blue-600",
                                                            children: "Total Favorites"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-2xl font-semibold text-gray-900",
                                                            children: favorites.length
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "bg-green-50 border border-green-200 rounded-lg p-4",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-3 bg-green-100 rounded-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                                                        className: "w-6 h-6 text-green-600",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-sm font-medium text-green-600",
                                                            children: "Average Rent"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-2xl font-semibold text-gray-900",
                                                            children: formatCurrency(getAverageRent())
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "bg-purple-50 border border-purple-200 rounded-lg p-4",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-3 bg-purple-100 rounded-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                                                        className: "w-6 h-6 text-purple-600",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-sm font-medium text-purple-600",
                                                            children: "Total Investment"
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-2xl font-semibold text-gray-900",
                                                            children: formatCurrency(calculateTotalRent())
                                                        }, void 0, false, {
                                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "text-xl font-semibold text-gray-800 mb-4",
                                        children: "Favorite Locations"
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "grid gap-4",
                                        children: favorites.map(function(favorite, index) {
                                            var props = favorite.properties;
                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex justify-between items-start",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center gap-3 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded",
                                                                        children: [
                                                                            "#",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 29
                                                                    }, _this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "font-semibold text-lg text-gray-800",
                                                                        children: props.id
                                                                    }, void 0, false, {
                                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 29
                                                                    }, _this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: [
                                                                            "[",
                                                                            favorite.geometry.coordinates[1].toFixed(4),
                                                                            ", ",
                                                                            favorite.geometry.coordinates[0].toFixed(4),
                                                                            "]"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 29
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 27
                                                            }, _this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                className: "text-gray-600 mb-3",
                                                                children: props.notes
                                                            }, void 0, false, {
                                                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 27
                                                            }, _this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                        className: "text-xl font-bold text-green-600",
                                                                        children: [
                                                                            formatCurrency(props.estimated_rent),
                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                                className: "text-sm text-gray-500 font-normal",
                                                                                children: "/month"
                                                                            }, void 0, false, {
                                                                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 31
                                                                            }, _this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 29
                                                                    }, _this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                                        onClick: function() {
                                                                            return handleRemoveFromFavorites(props.id);
                                                                        },
                                                                        className: "px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200",
                                                                        children: "Remove"
                                                                    }, void 0, false, {
                                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 29
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 27
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, _this)
                                            }, props.id, false, {
                                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, _this),
            selectedLocation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                        className: "text-xl font-semibold text-gray-800 mb-4",
                        children: "Selected Location Details"
                    }, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "bg-indigo-50 border border-indigo-200 rounded-lg p-4",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "font-semibold text-indigo-800",
                                            children: selectedLocation.properties.id
                                        }, void 0, false, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-indigo-600 mt-1",
                                            children: selectedLocation.properties.notes
                                        }, void 0, false, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-2xl font-bold text-indigo-800 mt-2",
                                            children: [
                                                formatCurrency(selectedLocation.properties.estimated_rent),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm font-normal",
                                                    children: "/month"
                                                }, void 0, false, {
                                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: function() {
                                        return (0,_services_communication__WEBPACK_IMPORTED_MODULE_2__.getCommunicationService)().selectCandidate(null, 'insights');
                                    },
                                    className: "text-indigo-600 hover:text-indigo-800",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/components/FavoritesDashboard.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, _this);
};
_s(FavoritesDashboard, "C/39KEvE0YUStbbfWdPiFs2u6Ik=");
_c = FavoritesDashboard;
/* export default */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritesDashboard);
var _c;
$RefreshReg$(_c, "FavoritesDashboard");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


}),
"./src/app/insights-welcome.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InsightsWelcome: () => (InsightsWelcome)
});
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

function InsightsWelcome() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-30 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "max-w-2xl mx-auto text-center",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                        className: "text-4xl font-bold text-gray-800 mb-4",
                        children: "Welcome to Insights"
                    }, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/insights-welcome.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-xl text-gray-600 mb-6",
                        children: "Location analytics and favorites dashboard"
                    }, void 0, false, {
                        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/insights-welcome.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/insights-welcome.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/insights-welcome.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/pranavjeetmishra/Downloads/React_Projects/new4/talkinglands/apps/insights/src/app/insights-welcome.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = InsightsWelcome;
var _c;
$RefreshReg$(_c, "InsightsWelcome");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


}),
"./src/remote-entry.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _app_app__WEBPACK_IMPORTED_MODULE_0__["default"])
});
/* import */var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/app.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


}),
"./src/services/communication.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  communicationService: () => (communicationService),
  getCommunicationService: () => (getCommunicationService),
  useCommunication: () => (useCommunication)
});
/* import */var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/rxjs/rxjs");
/* import */var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var MicrofrontendCommunicationService = /*#__PURE__*/ function() {
    "use strict";
    function MicrofrontendCommunicationService() {
        _class_call_check(this, MicrofrontendCommunicationService);
        // Global message bus for any communication
        _define_property(this, "globalMessageSubject", new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject());
        // Specific streams for different types of data
        _define_property(this, "favoriteCandidatesSubject", new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]));
        _define_property(this, "selectedCandidateSubject", new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null));
        // Make the service available globally for microfrontends
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.__MICROFRONTEND_COMMUNICATION__ = this;
        }
    }
    _create_class(MicrofrontendCommunicationService, [
        {
            // Global message bus methods
            key: "sendMessage",
            value: function sendMessage(type, payload, source) {
                var message = {
                    type: type,
                    payload: payload,
                    source: source,
                    timestamp: Date.now()
                };
                this.globalMessageSubject.next(message);
            }
        },
        {
            key: "messages$",
            get: function get() {
                return this.globalMessageSubject.asObservable();
            }
        },
        {
            // Favorite candidates methods
            key: "addFavoriteCandidate",
            value: function addFavoriteCandidate(candidate) {
                var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'unknown';
                var currentFavorites = this.favoriteCandidatesSubject.value;
                var isAlreadyFavorite = currentFavorites.some(function(fav) {
                    return fav.properties.id === candidate.properties.id;
                });
                if (!isAlreadyFavorite) {
                    var newFavorites = _to_consumable_array(currentFavorites).concat([
                        candidate
                    ]);
                    this.favoriteCandidatesSubject.next(newFavorites);
                    this.sendMessage('FAVORITE_ADDED', candidate, source);
                }
            }
        },
        {
            key: "removeFavoriteCandidate",
            value: function removeFavoriteCandidate(candidateId) {
                var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'unknown';
                var currentFavorites = this.favoriteCandidatesSubject.value;
                var newFavorites = currentFavorites.filter(function(fav) {
                    return fav.properties.id !== candidateId;
                });
                this.favoriteCandidatesSubject.next(newFavorites);
                this.sendMessage('FAVORITE_REMOVED', {
                    candidateId: candidateId
                }, source);
            }
        },
        {
            key: "setFavoriteCandidates",
            value: function setFavoriteCandidates(candidates) {
                var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'unknown';
                this.favoriteCandidatesSubject.next(candidates);
                this.sendMessage('FAVORITES_SET', candidates, source);
            }
        },
        {
            key: "favoriteCandidates$",
            get: function get() {
                return this.favoriteCandidatesSubject.asObservable();
            }
        },
        {
            key: "getFavoriteCandidates",
            value: function getFavoriteCandidates() {
                return this.favoriteCandidatesSubject.value;
            }
        },
        {
            // Selected candidate methods
            key: "selectCandidate",
            value: function selectCandidate(candidate) {
                var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'unknown';
                this.selectedCandidateSubject.next(candidate);
                this.sendMessage('CANDIDATE_SELECTED', candidate, source);
            }
        },
        {
            key: "selectedCandidate$",
            get: function get() {
                return this.selectedCandidateSubject.asObservable();
            }
        },
        {
            key: "getSelectedCandidate",
            value: function getSelectedCandidate() {
                return this.selectedCandidateSubject.value;
            }
        }
    ], [
        {
            key: "getInstance",
            value: function getInstance() {
                // First check if there's already a global instance
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof window !== 'undefined' && window.__MICROFRONTEND_COMMUNICATION__) {
                    console.log('📊 [Insights] Using existing global communication service');
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return window.__MICROFRONTEND_COMMUNICATION__;
                }
                if (!MicrofrontendCommunicationService.instance) {
                    console.log('📊 [Insights] Creating new communication service instance');
                    MicrofrontendCommunicationService.instance = new MicrofrontendCommunicationService();
                }
                return MicrofrontendCommunicationService.instance;
            }
        }
    ]);
    return MicrofrontendCommunicationService;
}();
_define_property(MicrofrontendCommunicationService, "instance", void 0);
// Create and export the singleton instance
var communicationService = MicrofrontendCommunicationService.getInstance();
// Export helper functions for easier use
var useCommunication = function() {
    var service = getCommunicationService(); // Always get the latest global instance
    return {
        sendMessage: function(type, payload, source) {
            return service.sendMessage(type, payload, source);
        },
        addFavorite: function(candidate, source) {
            return service.addFavoriteCandidate(candidate, source);
        },
        removeFavorite: function(candidateId, source) {
            return service.removeFavoriteCandidate(candidateId, source);
        },
        selectCandidate: function(candidate, source) {
            return service.selectCandidate(candidate, source);
        },
        // Observables
        messages$: service.messages$,
        favoriteCandidates$: service.favoriteCandidates$,
        selectedCandidate$: service.selectedCandidate$,
        // Current values
        getFavorites: function() {
            return service.getFavoriteCandidates();
        },
        getSelected: function() {
            return service.getSelectedCandidate();
        }
    };
};
// Global access helper for microfrontends
var getCommunicationService = function() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && window.__MICROFRONTEND_COMMUNICATION__) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return window.__MICROFRONTEND_COMMUNICATION__;
    }
    return communicationService;
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


}),

}]);
//# sourceMappingURL=__federation_expose_Module.js.map