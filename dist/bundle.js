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

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\r\n\r\nclass Ball extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor (ballRadius, x, y, dx, dy, ctx, color) {\r\n        super(x, y, ballRadius * 2, ballRadius * 2, color) // Calling super initializes the super class!\r\n        this.bricks = []\r\n        this.ballRadius = ballRadius;\r\n        this.dx = dx;\r\n        this.dy = dy; \r\n        this.ctx = ctx;\r\n    }\r\n    \r\n    drawBall() {\r\n        this.ctx.beginPath();\r\n        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.fill();\r\n        this.ctx.closePath();\r\n      }\r\n      \r\n  }\n\n//# sourceURL=webpack://breakout/./src/Ball.js?");

/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Brick)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\r\n\r\nclass Brick extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor (brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx, status) {\r\n    let x = 0;\r\n    let y = 0;\r\n    super(x, y, brickWidth, brickHeight)\r\n    this.brickPadding = brickPadding;\r\n    this.brickOffsetTop = brickOffsetTop;\r\n    this.brickOffsetLeft = brickOffsetLeft;\r\n    this.ctx = ctx;\r\n    this.status = status;\r\n\r\n  }\r\n\r\n  drawBrick(x, y, color) {\r\n    this.ctx.beginPath();\r\n    this.ctx.rect(x, y, this.width, this.height);\r\n    this.ctx.fillStyle = color;\r\n    this.ctx.fill();\r\n    this.ctx.closePath();\r\n\r\n  }\r\n  \r\n  \r\n}\r\n\n\n//# sourceURL=webpack://breakout/./src/Brick.js?");

/***/ }),

/***/ "./src/Paddle.js":
/*!***********************!*\
  !*** ./src/Paddle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\r\n\r\nclass Paddle extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(paddleHeight, paddleWidth, paddleX, ctx, canvas, color){\r\n        var y = 0\r\n        super(paddleX, y, paddleWidth, paddleHeight, color) // Calling super initializes the super class!\r\n        this.ctx = ctx;\r\n        this.canvas = canvas;\r\n    }\r\n\r\n    drawPaddle() {\r\n        this.ctx.beginPath();\r\n        this.ctx.rect(this.x, this.canvas.height-this.height, this.width, this.height);\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.fill();\r\n        this.ctx.closePath();\r\n\r\n      }\r\n}\n\n//# sourceURL=webpack://breakout/./src/Paddle.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sprite)\n/* harmony export */ });\nclass Sprite {\r\n    constructor(x, y, width, height, color) {\r\n      this.x = x\r\n      this.y = y\r\n      this.width = width\r\n      this.height = height\r\n      this.color = color\r\n    }\r\n    //\r\n    \r\n  render(ctx) {\r\n    ctx.beginPath()\r\n    ctx.rect(this.x, this.y, this.width, this.height)\r\n    ctx.fillStyle = this.color\r\n    ctx.fill()\r\n  }\r\n}  \n\n//# sourceURL=webpack://breakout/./src/Sprite.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./src/Ball.js\");\n/* harmony import */ var _Brick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brick.js */ \"./src/Brick.js\");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paddle.js */ \"./src/Paddle.js\");\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('myCanvas');\r\nconst ctx = canvas.getContext('2d');\r\nconst ballRadius = 10;\r\nlet x = canvas.width / 2;\r\nlet y = canvas.height - 30;\r\nlet dx = Math.random() * 10;\r\nlet dy = -Math.random() * 10;\r\nconst paddleWidth = 75;\r\nconst paddleHeight = 20;\r\nlet paddleX = (canvas.width - paddleWidth) / 2;\r\nlet rightPressed = false;\r\nlet leftPressed = false;\r\nconst brickRowCount = 5;\r\nconst brickColumnCount = 3;\r\nlet score = 0;\r\nlet lives = 3;\r\nconst brickWidth = 50;\r\nconst brickHeight = 20;\r\nconst brickPadding = 10;\r\nconst brickOffsetTop = 30;\r\nconst brickOffsetLeft = 30;\r\nlet bricks = []\r\n\r\nvar brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx,1);\r\nvar paddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](paddleHeight, paddleWidth, paddleX, ctx, canvas, '#00FF5D');\r\nvar ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ballRadius, x, y, dx, dy, ctx, '#0095DD');\r\n\r\nfor (let c = 0; c < brickColumnCount; c += 1) {\r\n  bricks[c] = [];\r\n  for (let r = 0; r < brickRowCount; r += 1) {\r\n    bricks[c][r] = new _Brick_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft, ctx, 1);\r\n    //brick.bricks[c][r] = { x: 0, y: 0, status: 1 };\r\n  }\r\n}\r\n\r\ndocument.addEventListener('keydown', keyDownHandler, false);\r\ndocument.addEventListener('keyup', keyUpHandler, false);\r\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\r\n\r\nfunction keyDownHandler(e) {\r\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\r\n        rightPressed = true;\r\n    }\r\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\r\n        leftPressed = true;\r\n    }\r\n}\r\n\r\nfunction drawBricks() {\r\n  let c = 0;\r\n  let r = 0;\r\n  let colCounter = 0;\r\n  let color = '';\r\n\r\n  for (c = 0; c < brickColumnCount; c += 1) {\r\n    for (r = 0; r < brickRowCount; r += 1) {\r\n      if (bricks[c][r].status == 1) {\r\n        var brickX = (r * (bricks[c][r].width + bricks[c][r].brickPadding)) + bricks[c][r].brickOffsetLeft;\r\n        var brickY = (c * (bricks[c][r].height + bricks[c][r].brickPadding)) + bricks[c][r].brickOffsetTop;\r\n        bricks[c][r].x = brickX;\r\n        bricks[c][r].y = brickY;\r\n\r\n        if (colCounter % 2 === 0) {\r\n          color = 'purple';\r\n          bricks[c][r].drawBrick(brickX, brickY, color)\r\n        } else {\r\n        \r\n          if (r === 0) {\r\n            color = 'green';\r\n            bricks[c][r].drawBrick(brickX, brickY, color)\r\n          }\r\n          if (r === 1) {\r\n            color = 'green';\r\n            bricks[c][r].drawBrick(brickX, brickY, color)\r\n          }\r\n               \r\n          else if (r === 2) {\r\n            color = 'orange';\r\n            bricks[c][r].drawBrick(brickX, brickY, color)\r\n          }\r\n         \r\n          else if (r === 3) {\r\n            color = 'blue';\r\n            bricks[c][r].drawBrick(brickX, brickY, color)\r\n          }\r\n          else if (r === 4) {\r\n            color = 'yellow';\r\n            bricks[c][r].drawBrick(brickX, brickY, color)\r\n          }\r\n         \r\n         \r\n        }\r\n        \r\n      }\r\n      colCounter += 1;\r\n\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\nfunction keyUpHandler(e) {\r\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\r\n        rightPressed = false;\r\n    }\r\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\r\n        leftPressed = false;\r\n    }\r\n}\r\n\r\nfunction mouseMoveHandler(e) {\r\n  var relativeX = e.clientX - canvas.offsetLeft;\r\n  if (relativeX > 0 && relativeX < canvas.width) {\r\n    paddle.x = relativeX - paddle.width / 2;\r\n  }\r\n}\r\nfunction collisionDetection() {\r\n  let c = 0;\r\n  let r = 0;\r\n  for (c = 0; c < brickColumnCount; c += 1) {\r\n    for (r = 0; r < brickRowCount; r += 1) {\r\n      var b = bricks[c][r];\r\n      if (bricks[c][r].status === 1) {\r\n        if (ball.x > bricks[c][r].x && ball.x < bricks[c][r].x + bricks[c][r].width && ball.y > bricks[c][r].y && ball.y < bricks[c][r].y + bricks[c][r].height) {\r\n          ball.dy = -ball.dy;\r\n          bricks[c][r].status = 0;\r\n          score++;\r\n          if (score === bricks[c][r].brickRowCount * bricks[c][r].brickColumnCount) {\r\n            alert('YOU WIN, CONGRATS!');\r\n            document.location.reload();\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction drawScore() {\r\n  ctx.font = '16px Arial';\r\n  ctx.fillStyle = '#0095DD';\r\n  ctx.fillText('Score: ' + score, 8, 20);\r\n}\r\nfunction drawLives() {\r\n  ctx.font = '16px Arial';\r\n  ctx.fillStyle = '#0095DD';\r\n  ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);\r\n}\r\n\r\nfunction draw() {\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n  //Init brick array  \r\n  //brick.drawBricks(bricks, brickRowCount, brickColumnCount);\r\n  drawBricks()\r\n  ball.drawBall();\r\n  paddle.drawPaddle();\r\n  drawScore();\r\n  drawLives();\r\n  collisionDetection();\r\n\r\n  if (ball.x + ball.dx > canvas.width-ball.ballRadius || ball.x + ball.dx < ball.ballRadius) {\r\n    ball.dx = -ball.dx;\r\n  }\r\n  if (ball.y + ball.dy < ball.ballRadius) {\r\n    ball.dy = -ball.dy;\r\n  }\r\n  else if (ball.y + ball.dy > canvas.height-ball.ballRadius) {\r\n    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\r\n      ball.dy = -ball.dy;\r\n    } else {\r\n      lives -= 1;\r\n      if (!lives) {\r\n        alert('GAME OVER');\r\n        document.location.reload();\r\n      } else {\r\n        ball.x = canvas.width / 2;\r\n        ball.y = canvas.height-30;\r\n        ball.dx = 3;\r\n        ball.dy = -3;\r\n        paddle.x = (canvas.width-paddle.width) / 2;\r\n      }\r\n    }\r\n  }\r\n\r\n  if (rightPressed && paddle.x < canvas.width - paddle.width) {\r\n    paddle.x += 7;\r\n  }\r\n  else if (leftPressed && paddle.x > 0) {\r\n    paddle.x -= 7;\r\n  }\r\n\r\n  ball.x += ball.dx;\r\n  ball.y += ball.dy;\r\n  requestAnimationFrame(draw);\r\n}\r\n\r\ndraw();\n\n//# sourceURL=webpack://breakout/./src/game.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;