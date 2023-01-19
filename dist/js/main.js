/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Cell.js":
/*!************************!*\
  !*** ./src/js/Cell.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Vector2D_1 = __importDefault(__webpack_require__(/*! ./Vector2D */ \"./src/js/Vector2D.js\"));\r\nclass Cell {\r\n    constructor(position, radius, direction) {\r\n        this.position = position;\r\n        this.radius = radius;\r\n        this.direction = direction;\r\n    }\r\n    update() {\r\n        if (this.position.x < this.radius || this.position.x > 600 - this.radius) {\r\n            this.direction.x *= -1;\r\n        }\r\n        if (this.position.y < this.radius || this.position.y > 600 - this.radius) {\r\n            this.direction.y *= -1;\r\n        }\r\n        this.position.add(this.direction);\r\n    }\r\n    split() {\r\n        const cellA = new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5));\r\n        const cellB = new Cell(this.position.clone(), this.radius * 0.75, new Vector2D_1.default(Math.random() * 10 - 5, Math.random() * 10 - 5));\r\n        return [cellA, cellB];\r\n    }\r\n    getDist(x, y) {\r\n        const deltaX = Math.abs(x) - Math.abs(this.position.x);\r\n        const deltaY = Math.abs(y) - Math.abs(this.position.y);\r\n        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));\r\n    }\r\n    show(ctx) {\r\n        ctx.beginPath();\r\n        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\r\n        ctx.stroke();\r\n    }\r\n}\r\nexports[\"default\"] = Cell;\r\n//# sourceMappingURL=Cell.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Cell.js?");

/***/ }),

/***/ "./src/js/Vector2D.js":
/*!****************************!*\
  !*** ./src/js/Vector2D.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Vector2D {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(other) {\r\n        this.x += other.x;\r\n        this.y += other.y;\r\n    }\r\n    dotProduct(other) {\r\n        return this.x * other.x + this.y * other.y;\r\n    }\r\n    clone() {\r\n        return new Vector2D(this.x, this.y);\r\n    }\r\n    multiply(n) {\r\n        this.x = this.x * n;\r\n        this.y = this.y * n;\r\n    }\r\n}\r\nexports[\"default\"] = Vector2D;\r\n//# sourceMappingURL=Vector2D.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/Vector2D.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Cell_1 = __importDefault(__webpack_require__(/*! ./Cell */ \"./src/js/Cell.js\"));\r\nconst Vector2D_1 = __importDefault(__webpack_require__(/*! ./Vector2D */ \"./src/js/Vector2D.js\"));\r\nconst canvas = document.querySelector(\"#canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst cells = [];\r\ncells.push(new Cell_1.default(new Vector2D_1.default(250, 250), 20, new Vector2D_1.default(3, 2)));\r\ncells.push(new Cell_1.default(new Vector2D_1.default(150, 150), 10, new Vector2D_1.default(-3, 6)));\r\ncells.push(new Cell_1.default(new Vector2D_1.default(150, 350), 30, new Vector2D_1.default(4, -5)));\r\nsetInterval(() => {\r\n    ctx.clearRect(0, 0, 600, 600);\r\n    cells.forEach((c) => c.update());\r\n    fillPixels();\r\n}, 1000 / 20);\r\ncanvas.addEventListener(\"mousedown\", (e) => {\r\n    cells.forEach((c, i) => {\r\n        if (c.getDist(e.clientX, e.clientY) < c.radius) {\r\n            const newCells = c.split();\r\n            cells.push(newCells[0]);\r\n            cells.push(newCells[1]);\r\n            cells.splice(i, 1);\r\n        }\r\n    });\r\n});\r\nconst fillPixels = () => {\r\n    for (let y = 0; y < 600; y += 4) {\r\n        for (let x = 0; x < 600; x += 4) {\r\n            let hue = 0;\r\n            let smallestDist = Number.MAX_VALUE;\r\n            let smallestRadius = Number.MAX_VALUE;\r\n            cells.forEach((c) => {\r\n                const d = c.getDist(x, y);\r\n                if (d < smallestDist) {\r\n                    smallestDist = d;\r\n                    smallestRadius = c.radius;\r\n                }\r\n            });\r\n            hue = smallestDist < smallestRadius ? 255 : 100 - smallestDist;\r\n            ctx.fillStyle = `rgb(${hue}, ${hue}, ${hue})`;\r\n            ctx.fillRect(x, y, 4, 4);\r\n        }\r\n    }\r\n};\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://wetyss-boiler/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;