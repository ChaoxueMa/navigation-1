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
})({"epB2":[function(require,module,exports) {
var x = localStorage.getItem("x");
var hasMap = JSON.parse(x) || [{
  logo: "A",
  url: "https://www.acfun.cn"
}, {
  logo: "B",
  url: "https://www.bilibili.com"
}, {
  logo: "R",
  url: "http://www.ruanyifeng.com/blog/"
}, {
  logo: "E",
  url: "https://es6.ruanyifeng.com/"
}, {
  logo: "J",
  url: "https://wangdoc.com/javascript/"
}, {
  logo: "C",
  url: "https://caniuse.com/"
}, {
  logo: "C",
  url: "https://css-tricks.com/"
}, {
  logo: "P",
  url: "https://www.pexels.com/zh-cn/"
}, {
  logo: "S",
  url: "https://www.stickpng.com/"
}];

var simply = function simply(url) {
  return url.replace("http://", "").replace("https://", "").replace("www.", "").replace(/\/.*/, "");
};

var render = function render() {
  $(".siteList").find(".site:not(.addButton)").remove();
  hasMap.forEach(function (node, index) {
    var $li = $(" \n        <li class=\"site\">\n            <div class=\"logo\">".concat(node.logo, "</div>\n            <div class=\"link\">").concat(simply(node.url), "</div>\n            <svg class=\"iconClose\">\n                <use xlink:href=\"#icon-close\"></use>\n            </svg>\n        </li>\n    ")).insertBefore(".addButton");
    $li.on("click", function () {
      window.open(node.url, "_self");
    });
    $li.on("click", ".iconClose", function (e) {
      e.stopPropagation();
      hasMap.splice(index, 1);
      render();
      var string = JSON.stringify(hasMap);
      localStorage.setItem("x", string);
    });
  });
};

render();
$(".search:first-child").on("click", function () {
  $("form").attr("action", "//www.baidu.com/s");
  $("input").attr("name", "wd");
  $(".search:nth-child(1)").attr("style", "background: #fff;color: black;");
  $(".search:nth-child(2)").attr("style", "background: red;color: #fff;");
});
$(".search:nth-child(2)").on("click", function () {
  $("form").attr("action", "//www.google.com/search");
  $("input").attr("name", "q");
  $(".search:nth-child(2)").attr("style", "background: #fff;color: black;");
  $(".search:nth-child(1)").attr("style", "background: red;color: #fff;");
});
$(".addButton").on("click", function () {
  var url = window.prompt("请输入你想要添加的网址");
  if (url.indexOf("http") !== 0) url = "https://" + url;
  hasMap.push({
    logo: simply(url)[0].toUpperCase(),
    url: url
  });
  render();
  var string = JSON.stringify(hasMap);
  localStorage.setItem("x", string);
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.c9e65d48.js.map