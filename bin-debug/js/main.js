

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AssetAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = /** @class */ (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
window["AssetAdapter"] = AssetAdapter;
__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]); 


/***/ }),

/***/ "./src/Bomb.ts":
/***/ (function(module, exports) {

var Bomb = /** @class */ (function () {
    function Bomb(x, y) {
        this.factor = 50;
        this.radius = 1;
        this.catchState = false;
        this.score = 0;
        this.totalTime = (Math.floor(Math.random() * 10) + 10) * 1000;
        this.finishTime = this.totalTime + egret.getTimer();
        this.shape = new egret.Shape();
        this.shape.anchorOffsetX = this.radius * this.factor;
        this.shape.anchorOffsetY = this.radius * this.factor;
        this.shapeBody = new p2.Body({
            mass: 1,
            position: [x, y],
            type: p2.Body.DYNAMIC,
            fixedRotation: true,
        });
        this.shapeBody.addShape(new p2.Circle({ radius: this.radius }));
        this.shapeBody.displays = [this.shape];
    }
    Bomb.prototype.drawTimeLife = function (timeStamp) {
        var dt = 1 - (this.finishTime - timeStamp) / this.totalTime;
        if (this.catchState) {
            dt = 1 - this.catchTime / this.totalTime;
        }
        if (dt > 1) {
            dt = 1;
        }
        var progressPercentage = ((dt * 100) >> 0) / 100;
        var total = 0;
        var rgbBase = [0x0000ff, 0x00ff00, 0xff0000];
        //白黃黑
        var u = progressPercentage, startColor = 0xffffff, endColor = 0xefd54d;
        if (progressPercentage >= 0.5) {
            u = (u - 0.5);
            startColor = endColor;
            endColor = 0x000000;
        }
        u *= 2;
        for (var i = 0; i < rgbBase.length; i++) {
            var a = (startColor & rgbBase[i]) >> i * 8;
            var b = (endColor & rgbBase[i]) >> i * 8;
            var c = (1 - u) * a + u * b;
            total += c << i * 8;
        }
        this.shape.graphics.clear();
        this.shape.graphics.beginFill(total, 1);
        var radius = this.radius * this.factor;
        // if (this.catchState) {
        //     radius *= 1.5;
        // }
        this.shape.graphics.drawCircle(radius, radius, radius);
        // console.log(this.shapeBody.shapes[0].radius);
        this.shape.graphics.lineStyle(4, 0x000000);
        var start = -90;
        var end = start + progressPercentage * 360;
        this.shape.graphics.drawArc(this.radius * this.factor, this.radius * this.factor, this.radius * this.factor, Math.PI / 180 * start, Math.PI / 180 * end, false);
        this.shape.graphics.endFill();
    };
    Bomb.prototype.addWorld = function (world) {
        world.addBody(this.shapeBody);
    };
    Bomb.prototype.addStage = function (stage) {
        this.particle = new particle.GravityParticleSystem(RES.getRes('newParticle_png'), RES.getRes('newParticle_json'));
        stage.addChild(this.particle);
        this.particle.start();
        this.particle.zIndex = 1;
        this.shape.zIndex = 2;
        stage.addChild(this.shape);
    };
    Bomb.prototype.setParticlePosition = function () {
        if (this.catchState)
            return;
        if (!this.particle)
            return;
        this.particle.x = this.shape.x;
        this.particle.y = this.shape.y;
        this.particle.anchorOffsetX = 100;
        this.particle.anchorOffsetY = 100;
    };
    Bomb.prototype.randomMove = function (len) {
        if (len === void 0) { len = 10; }
        if (this.catchState)
            return;
        var center = len / 2;
        if (p2.vec2.squaredLength(this.shapeBody.velocity) < 2 * 2) {
            this.shapeBody.velocity = p2.vec2.fromValues(Math.floor(Math.random() * len * 10) / 10 - center, Math.floor(Math.random() * len * 10) / 10 - center);
        }
    };
    Bomb.prototype.getBody = function () {
        return this.shapeBody;
    };
    Bomb.prototype.catchUp = function () {
        var _a;
        if (this.catchState)
            return;
        this.catchState = true;
        this.catchTime = this.finishTime - egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
        (_a = this.particle) === null || _a === void 0 ? void 0 : _a.stop();
    };
    Bomb.prototype.putDownDangerous = function () {
        var _a;
        this.catchState = false;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.DYNAMIC;
        (_a = this.particle) === null || _a === void 0 ? void 0 : _a.start();
    };
    Bomb.prototype.putDownSafe = function () {
        this.catchState = true;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
    };
    Bomb.prototype.getScore = function () {
        var timeStamp = egret.getTimer();
        var dt = 1 - (this.finishTime - timeStamp) / this.totalTime;
        if (this.catchState) {
            dt = 1 - this.catchTime / this.totalTime;
        }
        if (dt > 1) {
            dt = 1;
        }
        this.score = ((0.5 - Math.abs(dt - 0.5)) * 2 * 100) >> 0;
        return this.score;
    };
    return Bomb;
}());
window["Bomb"] = Bomb;
__reflect(Bomb.prototype,"Bomb",[]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/AssetAdapter.ts");
__webpack_require__("./src/Bomb.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/MainScene.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ThemeAdapter.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.onPause = function () { return egret.ticker.pause(); };
        egret.lifecycle.onResume = function () { return egret.ticker.resume(); };
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame();
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                new eui.Theme("resource/default.thm.json", _this.stage)
                                    .once(eui.UIEvent.COMPLETE, resolve, _this);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.addChild(new MainScene());
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/MainScene.ts":
/***/ (function(module, exports) {

var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.factor = 50;
        return _this;
    }
    MainScene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.skinName = skins.MainSceneSkin;
        // this.sortableChildren = true;
        // this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        setTimeout(this.startHandler.bind(this), 100);
        // this.startHandler.bind(this)()
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startHandler, this);
    };
    MainScene.prototype.startHandler = function () {
        var _this = this;
        var areaArray = [this.safeArea1, this.safeArea2, this.dangerousArea];
        egret.Tween.get(this.startGameBtn).to({ alpha: 0 }, 500).call(function () { return _this.removeChild(_this.startGameBtn); });
        egret.Tween.get(this.background).to({ alpha: 0 }, 500).call(function () { return _this.removeChild(_this.background); });
        var _loop_1 = function (i) {
            egret.Tween.get(areaArray[i])
                .call(function () { return areaArray[i].fillAlpha = 1; })
                .set({ alpha: 0 })
                .to({ alpha: 1 }, 500);
        };
        for (var i = 0; i < areaArray.length; i++) {
            _loop_1(i);
        }
        var stageWidth = egret.MainContext.instance.stage.stageWidth;
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        // console.log(stageWidth, stageHeight);
        var wCount = 5;
        var hCount = 5;
        var w = stageWidth * 0.6 / wCount;
        var h = stageHeight / hCount;
        var pointArray = [];
        var baseX = stageWidth * 0.2;
        var baseY = stageHeight * 0;
        for (var i = 0; i < wCount; i++) {
            for (var j = 0; j < hCount; j++) {
                var x = (baseX + w * i + w / 2) / this.factor;
                var y = (baseY + h * j + h / 2) / this.factor;
                pointArray.push({ x: x, y: y, random: Math.random() });
            }
        }
        pointArray.sort(function (a, b) {
            return a.random - b.random;
        });
        var world = new p2.World({
            gravity: [0, 0],
        });
        world.sleepMode = p2.World.BODY_SLEEPING;
        var makeWall = function (_a) {
            var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var body = new p2.Body({
                mass: 1,
                type: p2.Body.STATIC,
                position: [x, y]
            });
            body.addShape(new p2.Box({ width: w, height: h }));
            var shape = new egret.Shape();
            shape.graphics.beginFill(0x0000ff, 1);
            shape.graphics.drawRect(x * _this.factor, y * _this.factor, w * _this.factor, h * _this.factor);
            shape.graphics.endFill();
            shape.anchorOffsetX = w * _this.factor / 2;
            shape.anchorOffsetY = h * _this.factor / 2;
            body.displays = [shape];
            _this.addChild(shape);
            return body;
        };
        var width = stageWidth / this.factor;
        var height = stageHeight / this.factor;
        var thickness = 1 / 10;
        var wallArray = [
            { x: width / 2, y: height + thickness / 2, w: width, h: thickness },
            { x: width / 2, y: -thickness / 2, w: width, h: thickness },
            { x: -thickness / 2 + width * 0.2, y: height / 2, w: thickness, h: height },
            { x: width + thickness / 2 - width * 0.2, y: height / 2, w: thickness, h: height },
        ];
        for (var i = 0; i < wallArray.length; i++) {
            world.addBody(makeWall(wallArray[i]));
        }
        var bombCount = 10;
        var bombArray = [];
        var bombBodyArray = [];
        for (var i = 0; i < pointArray.length; i++) {
            var _a = pointArray[i], x = _a.x, y = _a.y;
            var bomb = new Bomb(x, y);
            bomb.addStage(this);
            bomb.addWorld(world);
            bombArray.push(bomb);
            bombBodyArray.push(bomb.getBody());
            if (i + 1 >= bombCount)
                break;
        }
        var hitBombIndex = -1;
        var mouseSubVec;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            hitBombIndex = -1;
            var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (stageHeight - e.stageY) / _this.factor);
            var collisionArray = world.hitTest(mouseP, world.bodies, 0.1);
            while (collisionArray.length > 0) {
                var item = collisionArray.shift();
                if (item.type !== p2.Body.STATIC) {
                    var index = bombBodyArray.indexOf(item);
                    if (index != -1) {
                        hitBombIndex = index;
                        var bomb = bombArray[hitBombIndex];
                        bomb.catchUp();
                        world.removeBody(item);
                        item.sleep();
                        mouseSubVec = p2.vec2.create();
                        p2.vec2.sub(mouseSubVec, item.position, mouseP);
                        break;
                    }
                }
            }
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (hitBombIndex != -1) {
                var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (stageHeight - e.stageY) / _this.factor);
                var bomb = bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                p2.vec2.add(hitCollisionItem.position, mouseP, mouseSubVec);
                hitCollisionItem.velocity = p2.vec2.create();
                _this.setPositionBodyToShape(hitCollisionItem);
            }
        }, this);
        var score = 0;
        this.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            if (hitBombIndex != -1) {
                var bomb = bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                var tmpScore = bomb.getScore();
                if (e.stageX >= stageWidth * 0.2
                    && e.stageX <= stageWidth * 0.8
                    && e.stageY >= stageHeight * 0
                    && e.stageY <= stageHeight * 1) {
                    // console.log('回鍋')
                    bomb.putDownDangerous();
                    score -= tmpScore;
                    _this.text.text = "score:" + score + "(-" + tmpScore + ")";
                }
                else {
                    score += tmpScore;
                    _this.text.text = "score:" + score + "(+" + tmpScore + ")";
                    // console.log('未回鍋');
                    bomb.putDownSafe();
                }
                world.addBody(hitCollisionItem);
                hitBombIndex = -1;
            }
        }, this);
        egret.startTick(function (timeStamp) {
            world.step(16 / 1000);
            for (var i = 0; i < bombArray.length; i++) {
                var item = bombArray[i];
                item.drawTimeLife(timeStamp);
                item.randomMove(5);
                item.setParticlePosition();
            }
            for (var i = 0; i < world.bodies.length; i++) {
                var boxBody = world.bodies[i];
                if (boxBody.type == p2.Body.STATIC)
                    continue;
                _this.setPositionBodyToShape(boxBody);
            }
            return false;
        }, this);
        this.drawText();
    };
    MainScene.prototype.setPositionBodyToShape = function (body) {
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        var box = body.displays[0];
        if (box) {
            box.x = body.position[0] * this.factor;
            box.y = stageHeight - (body.position[1] * this.factor);
            box.rotation = 360 - (body.angle + body.shapes[0].angle) * 180 / Math.PI;
            // if (body.sleepState == p2.Body.SLEEPING) {
            //     box.alpha = 0.5;
            // } else {
            //     box.alpha = 1;
            // }
        }
    };
    MainScene.prototype.drawText = function () {
        this.text = new egret.TextField;
        this.addChild(this.text);
        this.text.size = 20;
        this.text.x = 0;
        this.text.y = this.stage.stageHeight - 20;
        this.text.width = this.stage.stageWidth;
        this.text.textAlign = egret.HorizontalAlign.CENTER;
        this.text.textColor = 0x000000;
        this.text.type = egret.TextFieldType.DYNAMIC;
        this.text.lineSpacing = 6;
        this.text.multiline = true;
        this.text.text = "請將丸子移出油鍋(越接近油的顏色分數越高)";
    };
    return MainScene;
}(eui.Component));
window["MainScene"] = MainScene;
__reflect(MainScene.prototype,"MainScene",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ThemeAdapter.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = /** @class */ (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dirPath = url.replace(".exml", "_EUI.json");
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
window["ThemeAdapter"] = ThemeAdapter;
__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]); 


/***/ })

/******/ });