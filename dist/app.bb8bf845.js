// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../assets/ts/utils/enums.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Color;

(function (Color) {
  Color[Color["RED"] = 0] = "RED";
  Color[Color["YELLOW"] = 1] = "YELLOW";
  Color[Color["BLACK"] = 2] = "BLACK";
  Color[Color["BLUE"] = 3] = "BLUE";
  Color[Color["WHITE"] = 4] = "WHITE";
  Color[Color["GREEN"] = 5] = "GREEN"; // TODO :: ADD some colors here and in the function 
})(Color = exports.Color || (exports.Color = {}));
},{}],"../assets/ts/exeptions/WrongDateException.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WrongDateException =
/** @class */
function (_super) {
  __extends(WrongDateException, _super);

  function WrongDateException(message) {
    return _super.call(this, message) || this;
  }

  return WrongDateException;
}(Error);

exports["default"] = WrongDateException;
},{}],"../assets/ts/utils/functions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var enums_1 = require("./enums");
/**
 * TODO :: Change this method to return a dead line to TOMORROW
 */


function getDefaultDeadLine() {
  return new Date();
}

exports.getDefaultDeadLine = getDefaultDeadLine;

function getColorFromString(color) {
  color = color.toUpperCase();

  switch (color) {
    case "RED":
      return enums_1.Color.RED;

    case "BLUE":
      return enums_1.Color.BLUE;

    case "YELLOW":
      return enums_1.Color.YELLOW;

    case "BLACK":
      return enums_1.Color.BLACK;

    case "GREEN":
      return enums_1.Color.GREEN;

    case "WHITE":
      return enums_1.Color.WHITE;

    default:
      return enums_1.Color.WHITE;
  }
}

exports.getColorFromString = getColorFromString;

function isValideDate(tDate) {
  var now = new Date();
  return tDate < now;
}

exports.isValideDate = isValideDate;
},{"./enums":"../assets/ts/utils/enums.ts"}],"../assets/ts/components/TODOElement.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var enums_1 = require("../utils/enums");

var WrongDateException_1 = __importDefault(require("../exeptions/WrongDateException")); //* import to optimise after


var functions_1 = require("../utils/functions");

var TODOElement =
/** @class */
function () {
  function TODOElement(content, title, deadLine) {
    if (content === void 0) {
      content = "";
    }

    if (title === void 0) {
      title = "";
    }

    this._content = content;
    this._title = title;
    this._deadline = deadLine !== undefined ? deadLine : functions_1.getDefaultDeadLine();
    this._color = enums_1.Color.WHITE;
  }

  Object.defineProperty(TODOElement.prototype, "content", {
    get: function get() {
      return this._content;
    },
    // TODO :: check this setter
    set: function set(newContent) {
      this.content = newContent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TODOElement.prototype, "title", {
    get: function get() {
      return this._title;
    },
    // TODO :: check this setter
    set: function set(newTitle) {
      this._title = newTitle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TODOElement.prototype, "color", {
    get: function get() {
      return this._color;
    },
    set: function set(newColor) {
      this._color = newColor;
    },
    enumerable: true,
    configurable: true
  });

  TODOElement.prototype.setColor = function (newColor) {
    if (typeof newColor === "string") {
      this._color = functions_1.getColorFromString(newColor);
    } else {
      this.color = newColor;
    }
  };

  Object.defineProperty(TODOElement.prototype, "deadline", {
    get: function get() {
      return this._deadline;
    },

    /**
     * This method throws WrongDateException
     * TODO :: Check exceptions and dates
     */
    set: function set(newDate) {
      if (functions_1.isValideDate(newDate)) {
        this._deadline = newDate;
      } else {
        throw new WrongDateException_1["default"]("The date for the dead line is incorrect");
      }
    },
    enumerable: true,
    configurable: true
  });
  /**
   *  This method must return the HTML code for a TODO ELEMENT
   *  TODO :: Implement this Method
   *  TODO :: Check if this Method should return string or HTML ELEMENT
   *  TODO :: Check if I should add a method that render a TODO element for a list like in TRELLO
   */

  TODOElement.prototype.render = function () {
    throw new Error("Method not implemented.");
  };

  return TODOElement;
}();

exports["default"] = TODOElement;
},{"../utils/enums":"../assets/ts/utils/enums.ts","../exeptions/WrongDateException":"../assets/ts/exeptions/WrongDateException.ts","../utils/functions":"../assets/ts/utils/functions.ts"}],"../assets/ts/app.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TODOElement_1 = __importDefault(require("./components/TODOElement"));

(function () {
  console.log("Ca marche");
  var todo = new TODOElement_1["default"]();
  console.log(todo);
})();
},{"./components/TODOElement":"../assets/ts/components/TODOElement.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46017" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../assets/ts/app.ts"], null)
//# sourceMappingURL=/app.bb8bf845.js.map