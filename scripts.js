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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");

/***/ }),

/***/ "./src/assets/libs/animations.ts":
/*!***************************************!*\
  !*** ./src/assets/libs/animations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideCard\": () => (/* binding */ hideCard),\n/* harmony export */   \"showCard\": () => (/* binding */ showCard)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"./src/assets/libs/consts.ts\");\n\r\n//flip un change BG\r\nvar showCard = function (card) {\r\n    //card.innerHTML = card.value+''\r\n    card.style.width = '0%';\r\n    setTimeout(function () {\r\n        card.innerHTML = _consts__WEBPACK_IMPORTED_MODULE_0__.emojis[card.value];\r\n        card.style.width = '100%';\r\n        card.style.background = _consts__WEBPACK_IMPORTED_MODULE_0__.colors[card.value];\r\n    }, 70);\r\n};\r\n// flip un change BG\r\nvar hideCard = function (card) {\r\n    // lai var paspet atcereties\r\n    setTimeout(function () {\r\n        card.style.width = '0%';\r\n        setTimeout(function () {\r\n            card.innerHTML = '';\r\n            card.style.width = '100%';\r\n            card.style.background = 'url(./assets/images/pattern.svg)';\r\n        }, 70);\r\n    }, 400);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/assets/libs/animations.ts?");

/***/ }),

/***/ "./src/assets/libs/consts.ts":
/*!***********************************!*\
  !*** ./src/assets/libs/consts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LARGE\": () => (/* binding */ LARGE),\n/* harmony export */   \"MEDIUM\": () => (/* binding */ MEDIUM),\n/* harmony export */   \"SMALL\": () => (/* binding */ SMALL),\n/* harmony export */   \"XLARGE\": () => (/* binding */ XLARGE),\n/* harmony export */   \"colors\": () => (/* binding */ colors),\n/* harmony export */   \"emojis\": () => (/* binding */ emojis)\n/* harmony export */ });\nvar SMALL = 6;\r\n/*  6 cards\r\n    O O O\r\n    O O O\r\n    O O O\r\n*/\r\nvar MEDIUM = 12;\r\n/*  12 cards\r\n    O O O O\r\n    O O O O\r\n    O O O O\r\n*/\r\nvar LARGE = 24;\r\n/*  24 cards\r\n    O O O O O O\r\n    O O O O O O\r\n    O O O O O O\r\n    O O O O O O\r\n*/\r\nvar XLARGE = 48;\r\n/*  48 cards\r\n    O O O O O O O O\r\n    O O O O O O O O\r\n    O O O O O O O O\r\n    O O O O O O O O\r\n    O O O O O O O O\r\n    O O O O O O O O\r\n*/\r\n// card styles\r\nvar colors = ['red', 'green', 'blue', 'yellow', 'navy', 'cyan',\r\n    'yellowgreen', 'white', 'salmon', 'pink', 'coral', 'lightblue',\r\n    'chocolate', 'chartreuse', 'cornflowerblue', 'darkslateblue', 'deeppink', 'darkviolet',\r\n    'gold', 'lime', 'mediumseagreen', 'maroon', 'palevioletred', 'plum'].sort(function (a, b) { return Math.random() - 0.5; });\r\nvar emojis = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌',\r\n    '🍉', '🍇', '🍓', '🫐', '🥒', '🍄',\r\n    '🍈', '🍒', '🍑', '🥭', '🍍', '🥦',\r\n    '🥥', '🥝', '🍅', '🍆', '🥑', '🥬'].sort(function (a, b) { return Math.random() - 0.5; });\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/assets/libs/consts.ts?");

/***/ }),

/***/ "./src/assets/libs/helper.ts":
/*!***********************************!*\
  !*** ./src/assets/libs/helper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"Scores\": () => (/* binding */ Scores),\n/* harmony export */   \"getShuffledCards\": () => (/* binding */ getShuffledCards),\n/* harmony export */   \"loadLocalStorage\": () => (/* binding */ loadLocalStorage),\n/* harmony export */   \"round\": () => (/* binding */ round),\n/* harmony export */   \"updateStatsSpan\": () => (/* binding */ updateStatsSpan)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n// izveido number[] kas satur karsu vertibas, un tas samaisa vietam\r\nvar getShuffledCards = function (board_size) {\r\n    var card_values = [];\r\n    for (var i = 0; i < board_size / 2; i++) {\r\n        card_values.push(i);\r\n        card_values.push(i);\r\n    }\r\n    card_values.sort(function (a, b) { return Math.random() - 0.5; });\r\n    return card_values;\r\n};\r\nvar round = function (number, decimal) {\r\n    return Math.round(number * (Math.pow(10, decimal))) / Math.pow(10, decimal);\r\n};\r\nvar updateStatsSpan = function (span, new_val) {\r\n    var text = span.innerHTML.split(':')[0];\r\n    span.innerHTML = \"\".concat(text, \": \").concat(new_val);\r\n};\r\nvar loadLocalStorage = function (item, default_value) {\r\n    if (!localStorage.getItem(item)) {\r\n        localStorage.setItem(item, default_value);\r\n    }\r\n    return localStorage.getItem(item);\r\n};\r\nvar Scores = /** @class */ (function () {\r\n    function Scores(saved_scores) {\r\n        this.scores = [];\r\n        this.scores = JSON.parse(saved_scores);\r\n    }\r\n    Scores.prototype.update = function (moves, time, deck_size) {\r\n        var score = { 'moves': moves, 'time': round(time, 2), 'deck_size': deck_size };\r\n        this.scores.push(score);\r\n        this.saveScores();\r\n    };\r\n    Scores.prototype.getTop5 = function (deck_size, stat) {\r\n        return this.filterDeckSize(deck_size)\r\n            .map(function (score) { return score[stat]; })\r\n            .sort(function (a, b) { return a - b; })\r\n            .slice(0, 5);\r\n    };\r\n    Scores.prototype.filterDeckSize = function (deck_size) {\r\n        return this.scores.filter(function (score) { return score.deck_size == deck_size; });\r\n    };\r\n    Scores.prototype.saveScores = function () {\r\n        localStorage.setItem('saved-scores', JSON.stringify(this.scores));\r\n    };\r\n    return Scores;\r\n}());\r\n// vertibai un lai var pievienot velvienu neredzamu variable, kas ir karts vertiba\r\nvar Card = /** @class */ (function (_super) {\r\n    __extends(Card, _super);\r\n    function Card() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return Card;\r\n}(HTMLDivElement));\r\n\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/assets/libs/helper.ts?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/libs/helper */ \"./src/assets/libs/helper.ts\");\n/* harmony import */ var _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/libs/consts */ \"./src/assets/libs/consts.ts\");\n/* harmony import */ var _assets_libs_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/libs/animations */ \"./src/assets/libs/animations.ts\");\nvar __read = (undefined && undefined.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\n\r\n\r\nvar board_size = +(0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)('board-size', '6');\r\nvar cards_found = 0;\r\nvar moves = 0;\r\nvar time = 0;\r\nvar wins = +(0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)('wins', '0');\r\nvar timer; // time interval kas ik pec sekundes laikam pieliek 1\r\nvar scores = new _assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.Scores((0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)('saved-scores', JSON.stringify([])));\r\nvar max_moves; // seto gajienus kad izveido grid\r\nvar game_grid; // game-grid elements\r\nvar card_values = (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.getShuffledCards)(board_size);\r\nvar uncovered = []; // sets kas satur jau atverto karsu vertibas\r\nvar hand = []; // sets kas satur izveleto karsu vertibu, max 2\r\nvar timer_span = document.getElementById('time');\r\nvar menu = document.getElementById('menu');\r\nvar moves_span = document.getElementById('moves');\r\nvar wins_span = document.getElementById('wins');\r\nvar root = document.querySelector(':root');\r\n// card click handler\r\nvar handleCardClick = function (card) {\r\n    // skipo ja vertiba jau ir bijusi atverta\r\n    if (uncovered.includes(card.value) || hand.includes(card)) {\r\n        return;\r\n    }\r\n    (0,_assets_libs_animations__WEBPACK_IMPORTED_MODULE_2__.showCard)(card);\r\n    // ja pirma karts\r\n    if (hand.length == 0) {\r\n        hand.push(card);\r\n    }\r\n    else {\r\n        hand.push(card);\r\n        moves += 1;\r\n        (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(moves_span, moves);\r\n        // parbauda vai nav exceedots max moves, lose condition\r\n        if (moves > max_moves) {\r\n            setTimeout(gameOver, 400);\r\n        }\r\n        // parbauda vai vienada vertiba , un vai atskirigi card objekti\r\n        if (hand[0].value == hand[1].value && hand[0] != hand[1]) {\r\n            // pievieno atvertajam kartim\r\n            uncovered.push(hand[0].value);\r\n            // run ja izveleta pareiza karts\r\n            cards_found += 2;\r\n            // run ja atver visas kartis, win condition\r\n            if (cards_found == board_size) {\r\n                // pivieno uzvaru, un updato localStorage\r\n                wins += 1;\r\n                // highest scores\r\n                scores.update(moves, time, board_size);\r\n                localStorage.setItem('wins', wins + '');\r\n                (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(wins_span, wins);\r\n                setTimeout(gameOver, 400);\r\n            }\r\n        }\r\n        // run ja izveleta nepareiza karts\r\n        else {\r\n            hand.forEach(function (card) { return (0,_assets_libs_animations__WEBPACK_IMPORTED_MODULE_2__.hideCard)(card); });\r\n        }\r\n        // notira izvilktas kartis un atkal nem pirmo karti\r\n        hand = [];\r\n    }\r\n};\r\n// izveido 'start-button' elementu, saliek visas vertibas tam \r\nvar createStartButton = function () {\r\n    var start_button = document.createElement('div');\r\n    start_button.id = 'start-button';\r\n    start_button.className = 'btn';\r\n    start_button.innerHTML = 'START';\r\n    start_button.addEventListener('click', function () {\r\n        // uzsak timeri, katru sekundi executo update_time()\r\n        timer = setInterval(function () {\r\n            time += 0.1;\r\n            (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(timer_span, (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.round)(time, 1));\r\n        }, 100);\r\n        document.getElementById('highscores') && document.getElementById('highscores').remove();\r\n        start_button.remove();\r\n        switch (board_size) {\r\n            case _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.SMALL:\r\n                create_grid(2, 3);\r\n                break;\r\n            case _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.MEDIUM:\r\n                create_grid(3, 4);\r\n                break;\r\n            case _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.LARGE:\r\n                create_grid(4, 6);\r\n                break;\r\n            case _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.XLARGE:\r\n                create_grid(6, 8);\r\n                break;\r\n        }\r\n    });\r\n    document.body.appendChild(start_button);\r\n    return start_button;\r\n};\r\nvar create_grid = function (rows, columns) {\r\n    // izveido jaunu elementu, saliek vertibas un css grid layout\r\n    game_grid = document.createElement('div');\r\n    game_grid.id = 'game-grid';\r\n    game_grid.className = 'grid';\r\n    game_grid.style.gridTemplateColumns = \"repeat(\".concat(columns, \", 1fr)\");\r\n    game_grid.style.gridTemplateRows = \"repeat(\".concat(rows, \", 1fr)\");\r\n    // seto max moves \r\n    //max_moves = rows*columns*1.5\r\n    max_moves = rows * columns * 1.7;\r\n    console.log(max_moves);\r\n    var _loop_1 = function (i) {\r\n        // izveido jaunu elementu, card, pievieno vertibu un id\r\n        var card = document.createElement('div');\r\n        card.className = \"btn card\";\r\n        card.style.fontSize = (90 - board_size) + 'px';\r\n        card.value = card_values[i]; // randomizets arr\r\n        //card.innerHTML = ''+card_values[i] + ' ' + colors[card.value] // janonem\r\n        // pievienu event handler un pievieno karti gridam\r\n        card.addEventListener('click', function () {\r\n            handleCardClick(card);\r\n        });\r\n        game_grid.appendChild(card);\r\n    };\r\n    for (var i = 0; i < rows * columns; i++) {\r\n        _loop_1(i);\r\n    }\r\n    // uzliek grid uz ekrana\r\n    document.body.appendChild(game_grid);\r\n    return game_grid;\r\n};\r\n// speles biegu ekrans\r\nvar gameOver = function () {\r\n    // uztaisa game over screen div\r\n    document.body.removeChild(game_grid);\r\n    var screen = document.createElement('div');\r\n    screen.id = 'info-container';\r\n    // parbauda vai atvera visas kartis\r\n    cards_found == board_size ? screen.innerHTML = 'YOU WIN' : screen.innerHTML = 'YOU LOSE';\r\n    // izveido restart pogu\r\n    var restart_button = document.createElement('div');\r\n    restart_button.id = 'restart-button';\r\n    restart_button.className = 'btn';\r\n    cards_found == board_size ? restart_button.innerHTML = 'PLAY AGAIN' : restart_button.innerHTML = 'TRY AGAIN';\r\n    restart_button.addEventListener('click', function () {\r\n        screen.remove();\r\n        resetGame();\r\n    });\r\n    document.body.appendChild(screen);\r\n    screen.appendChild(restart_button);\r\n    clearInterval(timer);\r\n};\r\n// reseto status, samaisa kartis un uzliek jaunu start pogu\r\nvar resetGame = function (skip_start_btn) {\r\n    if (skip_start_btn === void 0) { skip_start_btn = false; }\r\n    cards_found = 0;\r\n    moves = 0;\r\n    time = 0;\r\n    hand = [];\r\n    uncovered = [];\r\n    card_values.sort(function (a, b) { return Math.random() - 0.5; });\r\n    (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(moves_span, moves);\r\n    (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(timer_span, time);\r\n    clearInterval(timer);\r\n    var start_button = createStartButton();\r\n    if (skip_start_btn) {\r\n        start_button.click();\r\n    }\r\n};\r\n// relaodo board ar jauno izmeru\r\nvar changeBoardSize = function (size) {\r\n    board_size = size;\r\n    card_values = (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.getShuffledCards)(board_size);\r\n    localStorage.setItem('board-size', '' + size);\r\n    if (document.getElementById('start-button')) {\r\n        document.getElementById('start-button').remove();\r\n    }\r\n    if (document.getElementById('game-grid')) {\r\n        document.getElementById('game-grid').remove();\r\n        resetGame(true);\r\n        return;\r\n    }\r\n    if (document.getElementById('info-container')) {\r\n        document.getElementById('info-container').remove();\r\n    }\r\n    resetGame();\r\n};\r\nvar createDivElement = function (innerHTML) {\r\n    var div = document.createElement('div');\r\n    div.innerHTML = innerHTML;\r\n    return div;\r\n};\r\n// uztaisa menu pogas\r\nvar createMenuBtn = function (fn, innerHTML, tooltip) {\r\n    if (innerHTML === void 0) { innerHTML = ''; }\r\n    if (tooltip === void 0) { tooltip = ''; }\r\n    var menu_btn = document.createElement('div');\r\n    menu_btn.className = 'menu-btn';\r\n    menu_btn.innerHTML = innerHTML;\r\n    menu_btn.title = tooltip;\r\n    menu_btn.addEventListener('click', function () { fn(); });\r\n    menu.appendChild(menu_btn);\r\n    return menu_btn;\r\n};\r\n// poga lai switchotu starp izmeriem\r\nvar change_size_btn = createMenuBtn(function () {\r\n    var sizes = [_assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.SMALL, _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.MEDIUM, _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.LARGE, _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.XLARGE];\r\n    if (board_size == _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.XLARGE) {\r\n        board_size = _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.SMALL;\r\n    }\r\n    else {\r\n        board_size = sizes[sizes.indexOf(board_size) + 1];\r\n    }\r\n    changeBoardSize(board_size);\r\n    change_size_btn.innerHTML = '' + board_size;\r\n}, '' + board_size, 'Change Board Size');\r\n// poga lai mainitu krasu\r\ncreateMenuBtn(function () {\r\n    var color_picker = document.createElement('input');\r\n    color_picker.type = 'color';\r\n    color_picker.value = localStorage.getItem('accent-color');\r\n    color_picker.click();\r\n    color_picker.addEventListener('input', function () {\r\n        root.style.setProperty('--accent-color', color_picker.value);\r\n        localStorage.setItem('accent-color', color_picker.value);\r\n    });\r\n}, 'C', 'Change color');\r\n//poga lai resetotu visu back uz default\r\ncreateMenuBtn(function () {\r\n    localStorage.setItem('accent-color', '#e94b4b');\r\n    localStorage.setItem('wins', '0');\r\n    localStorage.setItem('board-size', '' + _assets_libs_consts__WEBPACK_IMPORTED_MODULE_1__.MEDIUM);\r\n    localStorage.setItem('saved-scores', JSON.stringify([]));\r\n    document.location.reload();\r\n}, '۩', 'Reset stats');\r\n//poga lai paraditu karsu vertibas\r\ncreateMenuBtn(function () {\r\n    var cards = __spreadArray([], __read(game_grid.children), false);\r\n    if (cards[0].innerHTML == '') {\r\n        cards.forEach(function (card) {\r\n            card.innerHTML = card.value + '';\r\n        });\r\n    }\r\n    else {\r\n        cards.forEach(function (card) {\r\n            card.innerHTML = '';\r\n        });\r\n    }\r\n}, '۞', 'See card values');\r\n// izprinte highscores\r\ncreateMenuBtn(function () {\r\n    if (document.getElementById('highscores')) {\r\n        document.getElementById('highscores').remove();\r\n        return;\r\n    }\r\n    if (document.getElementById('game-grid')) {\r\n        return;\r\n    }\r\n    var highscores_div = document.createElement('div');\r\n    highscores_div.id = 'highscores';\r\n    document.body.appendChild(highscores_div);\r\n    highscores_div.appendChild(createDivElement('time'));\r\n    highscores_div.appendChild(createDivElement('moves'));\r\n    for (var i = 0; i < scores.getTop5(board_size, 'time').length; i++) {\r\n        highscores_div.appendChild(createDivElement('' + scores.getTop5(board_size, 'time')[i]));\r\n        highscores_div.appendChild(createDivElement('' + scores.getTop5(board_size, 'moves')[i]));\r\n    }\r\n    console.log('time ', scores.getTop5(board_size, 'time'));\r\n    console.log('moves ', scores.getTop5(board_size, 'moves'));\r\n}, '𓀤', 'Print highscores');\r\n// expand menu\r\nmenu.addEventListener('mouseenter', function () {\r\n    menu.style.transition = '0.3s';\r\n    menu.style.height = (40 * menu.childElementCount) + 'px';\r\n});\r\nmenu.addEventListener('mouseleave', function () {\r\n    menu.style.height = '30px';\r\n    setTimeout(function () {\r\n        menu.style.transition = '0s';\r\n    }, 200);\r\n});\r\nroot.style.setProperty('--accent-color', (0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)('accent-color', '#e94b4b'));\r\n(0,_assets_libs_helper__WEBPACK_IMPORTED_MODULE_0__.updateStatsSpan)(wins_span, wins);\r\ncreateStartButton();\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles.scss");
/******/ 	
/******/ })()
;