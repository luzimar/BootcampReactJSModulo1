/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable no-eval */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable spaced-comment */
/* eslint-disable no-return-assign */
/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-bitwise */
/* eslint-disable no-multi-assign */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/** *** */ (function(modules) {
  // webpackBootstrap
  /** *** */ // The module cache
  /** *** */ const installedModules = {}; // The require function
  /** *** */
  /** *** */ /** *** */ function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ // Check if module is in cache
    /** *** */ if (installedModules[moduleId]) {
      /** *** */ return installedModules[moduleId].exports;
      /** *** */
    } // Create a new module (and put it into the cache)
    /** *** */ /** *** */ const module = (installedModules[moduleId] = {
      /** *** */ i: moduleId,
      /** *** */ l: false,
      /** *** */ exports: {}
      /** *** */
    }); // Execute the module function
    /** *** */
    /** *** */ /** *** */ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /** *** */
    /** *** */ /** *** */ module.l = true; // Return the exports of the module
    /** *** */
    /** *** */ /** *** */ return module.exports;
    /** *** */
  } // expose the modules object (__webpack_modules__)
  /** *** */
  /** *** */
  /** *** */ /** *** */ __webpack_require__.m = modules; // expose the module cache
  /** *** */
  /** *** */ /** *** */ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.d = function(
    exports,
    name,
    getter
  ) {
    /** *** */ if (!__webpack_require__.o(exports, name)) {
      /** *** */ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /** *** */
    }
    /** *** */
  }; // define __esModule on exports
  /** *** */
  /** *** */ /** *** */ __webpack_require__.r = function(exports) {
    /** *** */ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /** *** */
    }
    /** *** */ Object.defineProperty(exports, "__esModule", { value: true });
    /** *** */
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /** *** */
  /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ /** *** */ __webpack_require__.t = function(
    value,
    mode
  ) {
    /** *** */ if (mode & 1) value = __webpack_require__(value);
    /** *** */ if (mode & 8) return value;
    /** *** */ if (
      mode & 4
      && typeof value === "object"
      && value
      && value.__esModule
    ) {
      return value;
    }
    /** *** */ const ns = Object.create(null);
    /** *** */ __webpack_require__.r(ns);
    /** *** */ Object.defineProperty(ns, "default", {
      enumerable: true,
      value
    });
    /** *** */ if (mode & 2 && typeof value !== "string") {
      for (const key in value) {
        __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
      }
    }
    /** *** */ return ns;
    /** *** */
  }; // getDefaultExport function for compatibility with non-harmony modules
  /** *** */
  /** *** */ /** *** */ __webpack_require__.n = function(module) {
    // eslint-disable-next-line no-multi-spaces
    /** *** */ const getter =      module && module.__esModule
        ? /** *** */ function getDefault() {
            return module.default;
          }
        : /** *** */ function getModuleExports() {
            return module;
          };
    /** *** */ __webpack_require__.d(getter, "a", getter);
    /** *** */ return getter;
    /** *** */
  }; // Object.prototype.hasOwnProperty.call
  /** *** */
  /** *** */ /** *** */ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /** *** */
  /** *** */ /** *** */ __webpack_require__.p = ""; // Load entry module and return exports
  /** *** */
  /** *** */
  /** *** */ /** *** */ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /** *** */
}(
  /************************************************************************/
  /******/ {
    "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          "var sum = function sum(a, b) {\n  return a + b;\n};\n\nalert(sum(5, 7));\n\n//# sourceURL=webpack:///./src/index.js?"
        );

        /***/
      }

    /******/
  }
));
