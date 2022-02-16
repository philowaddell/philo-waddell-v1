exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 9713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(7316);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ emotion_styled_base_esm)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: external "/home/philo/development/philo-waddell-v1/node_modules/react/index.js"
var index_js_ = __webpack_require__(7513);
// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,emotion_memoize_esm/* default */.Z)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const emotion_is_prop_valid_esm = (isPropValid);

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-fc314d24.esm.js
var emotion_element_fc314d24_esm = __webpack_require__(5658);
// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.esm.js
var emotion_utils_esm = __webpack_require__(4577);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js + 2 modules
var emotion_serialize_esm = __webpack_require__(7912);
;// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js







var testOmitPropsOnStringTag = emotion_is_prop_valid_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

var Noop = function Noop() {
  return null;
};

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,emotion_element_fc314d24_esm.w)(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,index_js_.useContext)(emotion_element_fc314d24_esm.T);
      }

      if (typeof props.className === 'string') {
        className = (0,emotion_utils_esm/* getRegisteredStyles */.f)(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = (0,emotion_serialize_esm/* serializeStyles */.O)(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = (0,emotion_utils_esm/* insertStyles */.M)(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/(0,index_js_.createElement)(finalTag, newProps);
      var possiblyStyleElement = /*#__PURE__*/(0,index_js_.createElement)(Noop, null);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        possiblyStyleElement = /*#__PURE__*/(0,index_js_.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref));
      } // Need to return the same number of siblings or else `React.useId` will cause hydration mismatches.


      return /*#__PURE__*/(0,index_js_.createElement)(index_js_.Fragment, null, possiblyStyleElement, ele);
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {} // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, (0,esm_extends/* default */.Z)({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ const emotion_styled_base_esm = (createStyled);


/***/ }),

/***/ 1905:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */const MDXRenderer=__webpack_require__(4914);module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ 4914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty=__webpack_require__(9713);var _objectWithoutProperties=__webpack_require__(6479);const _excluded=["scope","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}const React=__webpack_require__(7513);const{mdx}=__webpack_require__(3905);const{useMDXScope}=__webpack_require__(7796);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=new Function(`_fn`,...keys,`${children}`);return fn({},...values);},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 448:
/***/ ((module) => {

module.exports={resumeFileID:'1WJ0bBFq5riPRNf8Zc3FEWjtb-nWItJGZ',contactDetails:{email:'cGhpbG93YWRAbGl2ZS5jby51aw==',subject:'RmFuY3kgYSBxdWljayBjaGF0Pw=='},navLinks:[{name:'About',url:'/#about'},{name:'Experience',url:'/#experience'},{name:'Projects',url:'/#projects'},{name:'Contact',url:'/#contact'}],srConfig:(delay=200,viewFactor=0.25)=>({origin:'bottom',distance:'20px',duration:500,delay,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:'cubic-bezier(0.645, 0.045, 0.355, 1)',mobile:true,reset:false,useDelay:'always',viewFactor,viewOffset:{top:0,right:0,bottom:0,left:0}})};

/***/ }),

/***/ 2618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5858);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1756);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1905);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7533);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(448);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6657);
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const ContactContent=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("div", true?{target:"e10d7nak0"}:0)( true?{name:"195o0w0",styles:"display:flex;flex-direction:column;height:100vh;justify-content:center;align-items:center;.contact-heading{font-size:clamp(20px, 12vw, 50px);line-height:30px;}.contact-subheading{color:var(--highlight);font-weight:100;font-size:var(--fz-xl);}.contact-text{width:320px;font-size:var(--fz-xl);color:var(--text2);text-align:center;}.contact-button{width:140px;height:60px;margin:20px;}"}:0);const Contact=props=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery)("1578427499");const{frontmatter,body}=data.allMdx.nodes[0];const{heading,subheading}=frontmatter;const mailLink=react__WEBPACK_IMPORTED_MODULE_1___default().useRef('');const handleContactClicked=()=>{mailLink.current=`mailto:${atob(_config__WEBPACK_IMPORTED_MODULE_5__.contactDetails.email)}?subject=${atob(_config__WEBPACK_IMPORTED_MODULE_5__.contactDetails.subject)}`||'';window.location.href=mailLink.current;};return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(_styles_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(ContactContent,null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("h1",{className:"contact-heading"},heading),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("h2",{className:"sub-heading contact-subheading"},subheading),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("div",{className:"contact-text"},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__.MDXRenderer,null,body)),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__/* .jsx */ .tZ)("button",{className:"smallButton contact-button",onClick:handleContactClicked},"Say Hello")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ 1756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ styles_ThemeProvider)
});

// EXTERNAL MODULE: external "/home/philo/development/philo-waddell-v1/node_modules/react/index.js"
var index_js_ = __webpack_require__(7513);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Regular.woff
/* harmony default export */ const Calibre_Regular = (__webpack_require__.p + "static/Calibre-Regular-98526589fa32315c552129869e08427e.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Regular.woff2
/* harmony default export */ const Calibre_Regular_woff2 = (__webpack_require__.p + "static/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Medium.woff
/* harmony default export */ const Calibre_Medium = (__webpack_require__.p + "static/Calibre-Medium-46693d9b57a6b8a657b5393258f6e899.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Medium.woff2
/* harmony default export */ const Calibre_Medium_woff2 = (__webpack_require__.p + "static/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Semibold.woff
/* harmony default export */ const Calibre_Semibold = (__webpack_require__.p + "static/Calibre-Semibold-6972688a249bd53a6c7e69a89e50cdd6.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-Semibold.woff2
/* harmony default export */ const Calibre_Semibold_woff2 = (__webpack_require__.p + "static/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-RegularItalic.woff
/* harmony default export */ const Calibre_RegularItalic = (__webpack_require__.p + "static/Calibre-RegularItalic-57371b9e514dbbe9da31dad1a298de2d.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-RegularItalic.woff2
/* harmony default export */ const Calibre_RegularItalic_woff2 = (__webpack_require__.p + "static/Calibre-RegularItalic-5f875bd7b669f1e11b622d4d6d71b5b0.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-MediumItalic.woff
/* harmony default export */ const Calibre_MediumItalic = (__webpack_require__.p + "static/Calibre-MediumItalic-aa285f95879aa2c2d26b228d5e422da6.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-MediumItalic.woff2
/* harmony default export */ const Calibre_MediumItalic_woff2 = (__webpack_require__.p + "static/Calibre-MediumItalic-7aa140573fd9ed30ae01e117c418b12b.woff2");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-SemiboldItalic.woff
/* harmony default export */ const Calibre_SemiboldItalic = (__webpack_require__.p + "static/Calibre-SemiboldItalic-ad4bd95abee7bca1bdd6a93398f84a04.woff");
;// CONCATENATED MODULE: ./src/fonts/Calibre/Calibre-SemiboldItalic.woff2
/* harmony default export */ const Calibre_SemiboldItalic_woff2 = (__webpack_require__.p + "static/Calibre-SemiboldItalic-5f04bffe7ce988169806d66e417a966a.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Regular.woff
/* harmony default export */ const SFMono_Regular = (__webpack_require__.p + "static/SFMono-Regular-e36fa5257c93fc7711eae342068f9eda.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Regular.woff2
/* harmony default export */ const SFMono_Regular_woff2 = (__webpack_require__.p + "static/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Semibold.woff
/* harmony default export */ const SFMono_Semibold = (__webpack_require__.p + "static/SFMono-Semibold-ee054046915420413d0068fb1e7105c3.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-Semibold.woff2
/* harmony default export */ const SFMono_Semibold_woff2 = (__webpack_require__.p + "static/SFMono-Semibold-6e6f6c93f4bdf9cbd090c60e97a017e2.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-RegularItalic.woff
/* harmony default export */ const SFMono_RegularItalic = (__webpack_require__.p + "static/SFMono-RegularItalic-3a20a00dfdeb4ba538473fa7bf625cbd.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-RegularItalic.woff2
/* harmony default export */ const SFMono_RegularItalic_woff2 = (__webpack_require__.p + "static/SFMono-RegularItalic-a596917f86217b40000ff1b894cd0e52.woff2");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-SemiboldItalic.woff
/* harmony default export */ const SFMono_SemiboldItalic = (__webpack_require__.p + "static/SFMono-SemiboldItalic-10eb596e904940cd1aebb2cc6286015c.woff");
;// CONCATENATED MODULE: ./src/fonts/SFMono/SFMono-SemiboldItalic.woff2
/* harmony default export */ const SFMono_SemiboldItalic_woff2 = (__webpack_require__.p + "static/SFMono-SemiboldItalic-9a0ae6382e12c5e28a7342ffb41cf4da.woff2");
;// CONCATENATED MODULE: ./src/styles/fonts.js
const calibreNormalWeights={400:[Calibre_Regular,Calibre_Regular_woff2],500:[Calibre_Medium,Calibre_Medium_woff2],600:[Calibre_Semibold,Calibre_Semibold_woff2]};const calibreItalicWeights={400:[Calibre_RegularItalic,Calibre_RegularItalic_woff2],500:[Calibre_MediumItalic,Calibre_MediumItalic_woff2],600:[Calibre_SemiboldItalic,Calibre_SemiboldItalic_woff2]};const sfMonoNormalWeights={400:[SFMono_Regular,SFMono_Regular_woff2],600:[SFMono_Semibold,SFMono_Semibold_woff2]};const sfMonoItalicWeights={400:[SFMono_RegularItalic,SFMono_RegularItalic_woff2],600:[SFMono_SemiboldItalic,SFMono_SemiboldItalic_woff2]};const calibre={name:'Calibre',normal:calibreNormalWeights,italic:calibreItalicWeights};const sfMono={name:'SF Mono',normal:sfMonoNormalWeights,italic:sfMonoItalicWeights};const createFontFaces=(family,style='normal')=>{let styles='';for(const[weight,formats]of Object.entries(family[style])){const woff=formats[0];const woff2=formats[1];styles+=`
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;}return styles;};const calibreNormal=createFontFaces(calibre);const calibreItalic=createFontFaces(calibre,'italic');const sfMonoNormal=createFontFaces(sfMono);const sfMonoItalic=createFontFaces(sfMono,'italic');const Fonts=/*#__PURE__*/(0,emotion_react_esm/* css */.iv)(calibreNormal+calibreItalic+sfMonoNormal+sfMonoItalic,";"+( true?"":0), true?"":0);/* harmony default export */ const fonts = (Fonts);
;// CONCATENATED MODULE: ./src/styles/variables.js
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const variables= true?{name:"e0t5m9",styles:":root{--font-sans:'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;--font-mono:'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px;--border-radius:4px;--nav-height:100px;--nav-scroll-height:70px;--tab-height:42px;--tab-width:120px;--easing:cubic-bezier(0.645, 0.045, 0.355, 1);--transition:all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);--hamburger-width:30px;--ham-before:top 0.1s ease-in 0.25s,opacity 0.1s ease-in;--ham-before-active:top 0.1s ease-out,opacity 0.1s ease-out 0.12s;--ham-after:bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);--ham-after-active:bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;}"}:0;/* harmony default export */ const styles_variables = (variables);
;// CONCATENATED MODULE: ./src/styles/TransitionStyles.js
function TransitionStyles_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const TransitionStyles= true?{name:"1wmwm3h",styles:"@keyframes slidein-left{from{transform:translateX(-150%);}to{transform:translateX(0);}}@keyframes slidein-right{from{transform:translateX(150%);}to{transform:translateX(0);}}@keyframes slidein-bottom{from{transform:translateY(100%);}to{transform:translateY(0);}}@keyframes slidein-top{from{transform:translateY(-100%);}to{transform:translateY(0);}}@keyframes slideout-left{from{transform:translateX(0);}to{transform:translateX(-150%);}}@keyframes slideout-right{from{transform:translateX(0);}to{transform:translateX(150%);}}@keyframes slideout-bottom{0%{transform:translateY(0);}20%{transform:translateY(-5%);}100%{transform:translateY(100%);}}@keyframes slideout-top{0%{transform:translateY(0);}20%{transform:translateY(5%);}100%{transform:translateY(-100%);}}@keyframes fadeInUp{from{transform:translate3d(0,5px,0);opacity:0;}to{transform:translate3d(0,0,0);opacity:1;}}@keyframes fadeOutDown{from{transform:translate3d(0,0,0);opacity:1;}to{transform:translate3d(0,5px,0);opacity:0;}}"}:0;/* harmony default export */ const styles_TransitionStyles = (TransitionStyles);
;// CONCATENATED MODULE: ./src/styles/GlobalStyles.js
const GlobalStyles=({colours})=>{return (0,emotion_react_esm/* jsx */.tZ)(emotion_react_esm/* Global */.xB,{styles:/*#__PURE__*/(0,emotion_react_esm/* css */.iv)(fonts,";",styles_variables,";",styles_TransitionStyles,";:root{--primary1:",colours.primary1,";--primary2:",colours.primary2,";--text1:",colours.text1,";--text2:",colours.text2,";--highlight:",colours.highlight,";--tint:",colours.tint,";--shadow:",colours.shadow,";}html{height:100%;overflow:hidden;}body{margin:0px;font-family:var(--font-sans);background:var(--primary1);transition:background 2s ease;}h1,h2,h3,h4,h5,h6{margin:0 0 10px 0;font-weight:600;color:var(--text1);line-height:1.1;}p{margin:0 0 15px 0;&:last-child,&:last-of-type{margin:0;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:var(--highlight);position:relative;transition:var(--transition);&:hover{color:var(--highlight);}&.inline-link{}}#root{height:100vh;min-width:900px;display:grid;grid:1fr 8fr 1fr/1fr 8fr 1fr;}.big-heading{margin:0;line-height:0.9;font-size:clamp(57px, 12vw, 100px);}.smallButton{color:var(--highlight);background-color:transparent;border:1px solid var(--highlight);border-radius:var(--border-radius);padding:0.75rem 1rem;margin-right:15px;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus{background-color:var(--tint);outline:none;}&:after{display:none!important;}}"+( true?"":0), true?"":0)});};/* harmony default export */ const styles_GlobalStyles = (GlobalStyles);
;// CONCATENATED MODULE: ./src/styles/ThemeProvider.js
const darkBlue={primary1:'#020c1b',// Dark Navy
primary2:'#112240',// Light navy
text1:'#ccd6f6',// Lightest slate
text2:'#a8b2d1',// Light slate
highlight:'#64ffda',// Green
tint:'rgba(100, 255, 218, 0.1)',// Green tint
shadow:'rgba(2, 12, 27, 0.7)'// Dark navy shadow
};const red={primary1:'#d2404f',// Indian red
primary2:'#dd6c73',// Light coral
text1:'#fcefbd',// Darker Brisque
text2:'#e9abaf',// Light Pink
highlight:'#ccd6f6',// Green
tint:'rgba(78, 246, 240, 0.1)',// Teal tint
shadow:'rgba(210, 64, 79, 0.7)'// Indian red shadow
};const paleBlue={primary1:'#e3f0ff',// Lavender
primary2:'#a2a8ea',// Light steel blue
text1:'#434690',// Dark slate blue
text2:'#a1acd1',// Dark steel Blue
highlight:'#ff9eab',// Pink
tint:'rgba(249, 195, 202, 0.1)',// Pink tint
shadow:'rgba(227, 240, 255, 0.7)'// Lavender Shadow
};//const themes = [darkBlue, red, paleBlue];
const themes=[darkBlue];const defaultTheme=themes[0];const ThemeProvider=({current=0,children})=>{const[colours,setColours]=index_js_default().useState(defaultTheme);(0,index_js_.useEffect)(()=>{setColours(themes[current]||defaultTheme);},[current]);return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,(0,emotion_react_esm/* jsx */.tZ)(styles_GlobalStyles,{colours:colours}),children);};/* harmony default export */ const styles_ThemeProvider = (ThemeProvider);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-mobile-js.js.map