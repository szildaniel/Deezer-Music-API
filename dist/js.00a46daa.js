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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\bg-desktop.png":[["bg-desktop.720daff5.png","img/bg-desktop.png"],"img/bg-desktop.png"],"./..\\img\\bg-header.jpg":[["bg-header.28ba781d.jpg","img/bg-header.jpg"],"img/bg-header.jpg"],"./..\\img\\bg-mobile.png":[["bg-mobile.55454341.png","img/bg-mobile.png"],"img/bg-mobile.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/render/renderDividers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderDividers;

function renderDividers() {
  var main = document.querySelector("main");
  var sectionDividerUp = "<svg id=\"curveUpColor\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                                    <path d=\"M0 100 C 20 0 50 0 100 100 Z\" />\n                              </svg>";
  var sectionDividerDown = "<svg id=\"curveDownColor\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                                     <path d=\"M0 0 C 50 100 80 100 100 0 Z\" />\n                                </svg>";

  for (var i = 0; i <= 5; i++) {
    main.innerHTML += "".concat(sectionDividerUp).concat(sectionDividerDown);
  }

  function setDataIndex() {
    var allDividersDown = document.querySelectorAll('#curveDownColor');
    var allDividersUp = document.querySelectorAll('#curveUpColor');
    allDividersUp.forEach(function (divider, i) {
      divider.setAttribute('data-dividerUp-index', i);
    });
    allDividersDown.forEach(function (divider, i) {
      divider.setAttribute('data-dividerDown-index', i);
    });
  }

  setDataIndex();
}
},{}],"js/render/renderSections.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderSections;

function renderSections() {
  var parentEl = document.querySelector('main');

  function renderSectionWithDividers() {
    for (var i = 0; i < 6; i++) {
      var newSection = document.createElement('section');
      var currentDividerDown = document.querySelector("[data-dividerDown-index=\"".concat(i, "\"]"));
      newSection.classList.add('with__dividers');
      parentEl.insertBefore(newSection, currentDividerDown);
    }
  }

  function renderSectionWithoutDividers() {
    var allDividerUp = document.querySelectorAll("[data-dividerUp-index]");
    allDividerUp.forEach(function (el, i) {
      if (i !== 0) {
        var newSection = document.createElement('section');
        parentEl.insertBefore(newSection, el);
      }
    });
  }

  function addYearAttributeToSections() {
    var allSections = document.querySelectorAll('section');
    allSections.forEach(function (section, i) {
      section.setAttribute('data-year', "".concat(1990 + i));
      section.setAttribute('id', "".concat(1990 + i));
    });
  }

  renderSectionWithDividers();
  renderSectionWithoutDividers();
  addYearAttributeToSections();
}
},{}],"js/render/renderHeaders.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderHeaders;

function renderHeaders() {
  var allSections = document.querySelectorAll('[data-year]');
  allSections.forEach(function (section) {
    var sectionYear = section.dataset.year;
    var newHeader = document.createElement('h3');
    newHeader.classList.add("section__header");
    newHeader.textContent = "Top 10 tracks of year ".concat(sectionYear, " by Billboard");
    section.appendChild(newHeader);
  });
}
},{}],"js/render/renderList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderList;

var renderElementsInsideLi = function renderElementsInsideLi() {
  var allLi = document.querySelectorAll('ol > li');
  allLi.forEach(function (li, i) {
    var liElements = "\n                <div class=\"song__container\">\n                    <img class=\"cover".concat(i, "\" src=\"\" alt=\"album-cover\">\n                    <h3 class=\"song__title song__title").concat(i, "\">Loading data ...</h3>\n                    <div class=\"deezer deezer").concat(i, "\">\n                        <a href=\"\" target=\"_blank\" class=\"btnPlay link").concat(i, "\"><i class=\"fa fa-play play").concat(i, "\"></i>\n                            <svg id=\"svg2\" class=\"logo62\"\n                                xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 46.9 24.5\" width=\"100\" height=\"52\">\n                                <style> .st0 {fill: #b1e3fa} .st1 {fill: #f7bacf} .st2 {fill: #e7ee9f} .st3 {fill: #feea3a}\n                                 .st4 {fill: #fe9d7f} .st5 {fill: #4ec2f6} .st6 {fill: #ccdb38} .st7 {fill: #fe3f80} .st8 {fill: #fe3d02}\n                                </style>\n                                <path id=\"path59\" class=\"st0\" d=\"M38.3 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.3v-1h8.6v2.1h-8.6V4.2zm0-3.1V0h8.6v2.2h-8.6V1.1z\" />\n                                <path id=\"path57\" class=\"st1\" d=\"M19.1 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1zm0-3.3v-1h8.6v2.1h-8.6V4.2z\" />\n                                <path id=\"path55\" class=\"st2\" d=\"M28.7 13.9v-1h8.6v2h-8.6v-1zm0-3.2v-1h8.6v2h-8.6v-1z\" />\n                                <path id=\"path53\" class=\"st3\" d=\"M9.6 23.5v-1H18v2H9.6v-1zm0-3.3v-1H18v2H9.6v-1zm0-3.2v-1H18v2H9.6v-1z\" />\n                                <path id=\"path51\" class=\"st4\" d=\"M0 13.9v-1h8.4v2H0v-1zm0-3.2v-1h8.4v2H0v-1z\" />\n                                <path id=\"path49\" class=\"st5\" d=\"M38.4 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z\" />\n                                <path id=\"path47\" class=\"st6\" d=\"M28.8 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z\" />\n                                <path id=\"path45\" class=\"st7\" d=\"M19.2 23.5v-1h8.4v2h-8.4v-1zm0-3.3v-1h8.4v2h-8.4v-1zm0-3.2v-1h8.4v2h-8.4v-1z\" />\n                                <path id=\"path43\" class=\"st8\" d=\"M0 23.5v-1h8.4v2H0v-1zm0-3.3v-1h8.4v2H0v-1zM0 17v-1h8.4v2H0v-1z\" />\n                            </svg>\n                        </a>\n                    </div>\n                </div>");
    li.innerHTML = liElements;
  });
};

var renderLi = function renderLi(parentEl) {
  for (var i = 0; i < 10; i++) {
    var newLi = document.createElement('li');
    parentEl.appendChild(newLi);
  }
};

function renderList() {
  var allSections = document.querySelectorAll('section');
  allSections.forEach(function (section, i) {
    var newOl = document.createElement('ol');
    var year = 1990 + i;
    newOl.classList.add('songs__ol', "s".concat(year));
    section.appendChild(newOl);
    renderLi(newOl);
    renderElementsInsideLi();
  });
}
},{}],"js/render/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderRepeatableHtml;

var _renderDividers = _interopRequireDefault(require("./renderDividers"));

var _renderSections = _interopRequireDefault(require("./renderSections"));

var _renderHeaders = _interopRequireDefault(require("./renderHeaders"));

var _renderList = _interopRequireDefault(require("./renderList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRepeatableHtml() {
  (0, _renderDividers.default)();
  (0, _renderSections.default)();
  (0, _renderHeaders.default)();
  (0, _renderList.default)();
}
},{"./renderDividers":"js/render/renderDividers.js","./renderSections":"js/render/renderSections.js","./renderHeaders":"js/render/renderHeaders.js","./renderList":"js/render/renderList.js"}],"js/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function initDeezerApi() {
  DZ.init({
    appId: "384884",
    channelUrl: "https://szildaniel.github.io/music-API/"
  });
}

function reduceData(_x) {
  return _reduceData.apply(this, arguments);
}

function _reduceData() {
  _reduceData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(fetchedData) {
    var fetchedTracks, arrPromises, reducedData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fetchedTracks = fetchedData.tracks.data;
            arrPromises = fetchedTracks.map(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(song) {
                var id, artist, title, link, cover, neededData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return song.id;

                      case 2:
                        id = _context.sent;
                        _context.next = 5;
                        return song.artist.name;

                      case 5:
                        artist = _context.sent;
                        _context.next = 8;
                        return song.title_short;

                      case 8:
                        title = _context.sent;
                        _context.next = 11;
                        return song.link;

                      case 11:
                        link = _context.sent;
                        _context.next = 14;
                        return song.album.cover;

                      case 14:
                        cover = _context.sent;
                        neededData = {
                          id: id,
                          artist: artist,
                          title: title,
                          link: link,
                          cover: cover
                        };
                        return _context.abrupt("return", neededData);

                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }());
            _context2.next = 4;
            return Promise.all(arrPromises);

          case 4:
            reducedData = _context2.sent;
            return _context2.abrupt("return", reducedData);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _reduceData.apply(this, arguments);
}

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var response, fetchedData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/6855206804", {
              method: "GET",
              headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "610f368d39msh50b77c7d51240b9p154254jsndad7a4a4048e"
              }
            });

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            fetchedData = _context3.sent;
            return _context3.abrupt("return", reduceData(fetchedData));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchData.apply(this, arguments);
}
},{}],"js/setData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setData = setData;

var _getData = require("./getData");

var songIndex = 0;

function setData() {
  (0, _getData.fetchData)().then(function (data) {
    return data.forEach(function (song, i) {
      setSongIndex(i);
      var title = song.title,
          artist = song.artist,
          cover = song.cover,
          link = song.link;
      var currentHeader = document.querySelector(".song__title".concat(i));
      var currentImage = document.querySelector(".cover".concat(i));
      var currentLink = document.querySelector(".link".concat(i));
      currentHeader.innerHTML = "".concat(songIndex + 1, ". ").concat(artist, " - ").concat(title);
      currentImage.setAttribute('src', cover);
      currentImage.setAttribute('alt', title);
      currentLink.setAttribute('href', link);
    });
  });
}

function setSongIndex(index) {
  songIndex++;

  if (index % 10 === 0) {
    songIndex = 0;
  }
}
},{"./getData":"js/getData.js"}],"js/helpers/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleNav = toggleNav;
var sidePanel = document.getElementById("mySidePanel");
var openBtn = document.querySelector(".nav__openBtn");
var main = document.querySelector("main");

function openNav() {
  sidePanel.style.left = "0";
  openBtn.style.opacity = "0";
  openBtn.style.transition = "0s";
  toggleMarginToMain();
}

function closeNav() {
  sidePanel.style.left = "-305px";
  openBtn.style.opacity = "1";
  openBtn.style.transition = "1.5s";
  toggleMarginToMain();
}

function toggleMarginToMain() {
  main.classList.toggle('navExpanded');
}

function toggleNav() {
  var openBtn = document.querySelector(".nav__openBtn");
  var closeBtn = document.querySelector(".nav__closeBtn");
  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
}
},{}],"../node_modules/smoothscroll-polyfill/dist/smoothscroll.js":[function(require,module,exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (typeof exports === 'object' && typeof module !== 'undefined') {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }

}());

},{}],"js/animations/hamburgerAnimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hamburgerAnimation = hamburgerAnimation;
var hamburger = document.querySelector(".nav__hamburger");
var navigation = document.querySelector("nav");
var spanBars = document.querySelectorAll(".bar");
var expanded = false;

function hamburgerAnimation() {
  function expand() {
    expanded = !expanded;
    navigation.classList.toggle("expanded");
    spanBars.forEach(function (bar) {
      return bar.classList.toggle("expand");
    });
  }

  function closeNav() {
    if (expanded) {
      expand();
    } else {
      return;
    }
  }

  var hideMenu = function hideMenu() {
    var main = document.querySelector("main");
    var header = document.querySelector("header");
    main.addEventListener("click", closeNav);
    header.addEventListener("click", closeNav);
  };

  hamburger.addEventListener("click", expand);
  hideMenu();
}
},{}],"js/animations/enjoyBtnAnimations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enjoyBtnHoverAnimation = enjoyBtnHoverAnimation;

function enjoyBtnHoverAnimation() {
  var headerBtn = document.querySelector(".header__button");
  var headerPlayIcon = document.querySelector(".landing_icon");
  var exclaMark = document.querySelector(".header__excla");
  headerBtn.addEventListener("mouseover", function () {
    headerPlayIcon.style.color = "#4489b6";
    headerPlayIcon.style.textShadow = "0 0 1px black";
    headerPlayIcon.style.transform = "rotate(360deg) translate(6px)";
    exclaMark.style.color = "#4489b6";
  });
  headerBtn.addEventListener("mouseleave", function () {
    headerPlayIcon.style.color = "white";
    headerPlayIcon.style.textShadow = "0 0 4px black";
    headerPlayIcon.style.transform = "rotate(-360deg) translate(0)";
    exclaMark.style.color = "white";
  });
}
},{}],"js/helpers/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;
},{}],"js/helpers/setResponsiveNavHeight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResponsiveNavHeight = setResponsiveNavHeight;

var _debounce = _interopRequireDefault(require("./debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setRootVariableVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}

var debouncedResizeFn = (0, _debounce.default)(setRootVariableVh, 250);

function setResponsiveNavHeight() {
  window.addEventListener('resize', debouncedResizeFn);
}
},{"./debounce":"js/helpers/debounce.js"}],"js/helpers/setCurrentClassToNavLinks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentClassToNavLinks = setCurrentClassToNavLinks;

function setCurrentClassToNavLinks() {
  var allNavLinks = document.querySelectorAll('.nav__li');
  var scrolledFromTop = window.scrollY;
  allNavLinks.forEach(function (link, i) {
    var currentYear = 1990 + i;
    var currentSection = document.querySelector("[data-year='".concat(currentYear, "']"));

    if (currentSection.offsetTop <= scrolledFromTop + 10 && currentSection.offsetTop + currentSection.offsetHeight > scrolledFromTop) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
}

window.addEventListener('scroll', setCurrentClassToNavLinks, 250);
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../styles/style.scss");

var _render = _interopRequireDefault(require("./render/render"));

var _setData = require("./setData");

var _nav = require("./helpers/nav");

var _smoothscrollPolyfill = _interopRequireDefault(require("smoothscroll-polyfill"));

var _hamburgerAnimation = require("./animations/hamburgerAnimation");

var _enjoyBtnAnimations = require("./animations/enjoyBtnAnimations");

var _setResponsiveNavHeight = require("./helpers/setResponsiveNavHeight");

var _setCurrentClassToNavLinks = require("./helpers/setCurrentClassToNavLinks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _render.default)();
(0, _setData.setData)();
(0, _enjoyBtnAnimations.enjoyBtnHoverAnimation)();
(0, _nav.toggleNav)();

_smoothscrollPolyfill.default.polyfill();

(0, _hamburgerAnimation.hamburgerAnimation)();
(0, _setResponsiveNavHeight.setResponsiveNavHeight)();
(0, _setCurrentClassToNavLinks.setCurrentClassToNavLinks)();
},{"../styles/style.scss":"styles/style.scss","./render/render":"js/render/render.js","./setData":"js/setData.js","./helpers/nav":"js/helpers/nav.js","smoothscroll-polyfill":"../node_modules/smoothscroll-polyfill/dist/smoothscroll.js","./animations/hamburgerAnimation":"js/animations/hamburgerAnimation.js","./animations/enjoyBtnAnimations":"js/animations/enjoyBtnAnimations.js","./helpers/setResponsiveNavHeight":"js/helpers/setResponsiveNavHeight.js","./helpers/setCurrentClassToNavLinks":"js/helpers/setCurrentClassToNavLinks.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50774" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map