exports.id = 152;
exports.ids = [152];
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

/***/ 2369:
/***/ ((module) => {

"use strict";
const preserveCamelCase=string=>{let isLastCharLower=false;let isLastCharUpper=false;let isLastLastCharUpper=false;for(let i=0;i<string.length;i++){const character=string[i];if(isLastCharLower&&/[a-zA-Z]/.test(character)&&character.toUpperCase()===character){string=string.slice(0,i)+'-'+string.slice(i);isLastCharLower=false;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=true;i++;}else if(isLastCharUpper&&isLastLastCharUpper&&/[a-zA-Z]/.test(character)&&character.toLowerCase()===character){string=string.slice(0,i-1)+'-'+string.slice(i-1);isLastLastCharUpper=isLastCharUpper;isLastCharUpper=false;isLastCharLower=true;}else{isLastCharLower=character.toLowerCase()===character&&character.toUpperCase()!==character;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=character.toUpperCase()===character&&character.toLowerCase()!==character;}}return string;};const camelCase=(input,options)=>{if(!(typeof input==='string'||Array.isArray(input))){throw new TypeError('Expected the input to be `string | string[]`');}options=Object.assign({pascalCase:false},options);const postProcess=x=>options.pascalCase?x.charAt(0).toUpperCase()+x.slice(1):x;if(Array.isArray(input)){input=input.map(x=>x.trim()).filter(x=>x.length).join('-');}else{input=input.trim();}if(input.length===0){return'';}if(input.length===1){return options.pascalCase?input.toUpperCase():input.toLowerCase();}const hasUpperCase=input!==input.toLowerCase();if(hasUpperCase){input=preserveCamelCase(input);}input=input.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(_,p1)=>p1.toUpperCase()).replace(/\d+(\w|$)/g,m=>m.toUpperCase());return postProcess(input);};module.exports=camelCase;// TODO: Remove this for the next major release
module.exports["default"]=camelCase;

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

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dD": () => (/* reexport */ useDeviceDetect),
  "mu": () => (/* reexport */ hooks_useScrollListener)
});

// UNUSED EXPORTS: usePrefersReducedMotion, usePrevious, useStateRef

// EXTERNAL MODULE: external "/home/philo/development/philo-waddell-v1/node_modules/react/index.js"
var index_js_ = __webpack_require__(7513);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/hooks/usePrefersReducedMotion.js
/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */const QUERY='(prefers-reduced-motion: no-preference)';const isRenderingOnServer=typeof window==='undefined';const getInitialState=()=>// For our initial server render, we won't know if the user
// prefers reduced motion, but it doesn't matter. This value
// will be overwritten on the client, before any animations
// occur.
isRenderingOnServer?true:!window.matchMedia(QUERY).matches;function usePrefersReducedMotion(){const{0:prefersReducedMotion,1:setPrefersReducedMotion}=useState(getInitialState);useEffect(()=>{const mediaQueryList=window.matchMedia(QUERY);const listener=event=>{setPrefersReducedMotion(!event.matches);};mediaQueryList.addListener(listener);return()=>{mediaQueryList.removeListener(listener);};},[]);return prefersReducedMotion;}/* harmony default export */ const hooks_usePrefersReducedMotion = ((/* unused pure expression or super */ null && (usePrefersReducedMotion)));
;// CONCATENATED MODULE: ./src/hooks/usePrevious.js
const usePrevious=value=>{const ref=useRef(null);useEffect(()=>{ref.current=value;},[value]);return ref.current;};/* harmony default export */ const hooks_usePrevious = ((/* unused pure expression or super */ null && (usePrevious)));
;// CONCATENATED MODULE: ./src/hooks/useScrollListener.js
const useScrollListener=element=>{const[scrollDirection,setScrollDirection]=index_js_default().useState(0);const scrollEnabled=(0,index_js_.useRef)(false);(0,index_js_.useEffect)(()=>{const onWheelHandler=e=>{if(e.deltaY===0)return;if(scrollEnabled.current){disableScroll();setScrollDirection(Math.sign(e.deltaY));}};if(!element)return;element.addEventListener('wheel',onWheelHandler);},[element]);const enableScroll=()=>{setScrollDirection(0);scrollEnabled.current=true;};const disableScroll=()=>{scrollEnabled.current=false;};return[scrollDirection,enableScroll];};/* harmony default export */ const hooks_useScrollListener = (useScrollListener);
;// CONCATENATED MODULE: ./src/hooks/useStateRef.js
const useStateRef=processNode=>{const{0:node,1:setNode}=useState(null);const setRef=useCallback(newNode=>{setNode(processNode(newNode));},[processNode]);return[node,setRef];};/* harmony default export */ const hooks_useStateRef = ((/* unused pure expression or super */ null && (useStateRef)));
;// CONCATENATED MODULE: ./src/hooks/useDeviceDetect.js
function useDeviceDetect(){const[isMobile,setMobile]=index_js_default().useState(false);index_js_default().useEffect(()=>{const userAgent=typeof window.navigator==="undefined"?"":navigator.userAgent;const mobile=Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));setMobile(mobile);},[]);return{isMobile};}
;// CONCATENATED MODULE: ./src/hooks/index.js


/***/ }),

/***/ 5117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ desktop)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: external "/home/philo/development/philo-waddell-v1/node_modules/react/index.js"
var index_js_ = __webpack_require__(7513);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/styles/ThemeProvider.js + 24 modules
var ThemeProvider = __webpack_require__(1756);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({current,children})=>{return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,(0,emotion_react_esm/* jsx */.tZ)("div",{id:"root"},(0,emotion_react_esm/* jsx */.tZ)(ThemeProvider/* default */.Z,{current:current},children)));};/* harmony default export */ const layout = (Layout);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js + 1 modules
var emotion_styled_base_esm = __webpack_require__(5858);
;// CONCATENATED MODULE: ./src/components/header.js
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const StyledHeader=(0,emotion_styled_base_esm/* default */.Z)("header", true?{target:"e1eycll30"}:0)( true?{name:"fjbttp",styles:"grid-area:1/1/1/4;z-index:1"}:0);const Header=props=>{return (0,emotion_react_esm/* jsx */.tZ)(StyledHeader,null,(0,emotion_react_esm/* jsx */.tZ)(nav,props));};/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__(448);
;// CONCATENATED MODULE: ./src/components/nav.js
function nav_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const StyledNav=(0,emotion_styled_base_esm/* default */.Z)("nav", true?{target:"e1wk70og2"}:0)("display:grid;grid:1fr/1fr 7fr;padding:0px 40px;height:100px;align-items:center;.links-outer{grid-area:1/2;justify-self:flex-end;ol{padding:0;margin:0px ",props=>props.current?'100px':'0px'," 0px 0px;transition:all 250ms 1200ms cubic-bezier(0.645, 0.045, 0.355, 1);li{display:inline;margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-md);}}}.resume-button{grid-area:1/2;justify-self:flex-end;}"+( true?"":0));const StyledLinkButton=(0,emotion_styled_base_esm/* default */.Z)("button", true?{target:"e1wk70og1"}:0)("color:",props=>props.active?'var(--highlight)':'var(--text2)',";background-color:transparent;padding:0.75rem 1rem;border:none;margin-right:10px;cursor:pointer;transition:var(--transition);&:hover{color:var(--highlight);}&:before{content:'0' counter(item) '.';margin-right:5px;color:var(--highlight);transition:var(--transition);}"+( true?"":0));const HomeButton=(0,emotion_styled_base_esm/* default */.Z)("button", true?{target:"e1wk70og0"}:0)( true?{name:"r322f3",styles:"justify-self:center;grid-area:1/1;color:var(--highlight);font-size:var(--fz-xl);background-color:transparent;width:70px;height:70px;border:2px solid var(--highlight);border-radius:35px;padding:0.75rem 1rem;cursor:pointer;transition:var(--transition);&:hover{background-color:var(--tint);outline:none;}"}:0);const Nav=({current,setIncrement})=>{const[active,setActive]=index_js_default().useState(0);const[showResumeButton,setShowResumeButton]=index_js_default().useState(false);const linksRef=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{setActive(current);},[current]);const handleLinkClick=clicked=>{setIncrement(clicked-current);setActive(clicked);};const handleHomeClick=()=>{setIncrement(0-current);};const handleTransitionEnd=props=>{if(props.target===linksRef.current&&current>0){setShowResumeButton(true);}};return (0,emotion_react_esm/* jsx */.tZ)(StyledNav,{current:current,active:active,onTransitionEnd:handleTransitionEnd},(0,emotion_react_esm/* jsx */.tZ)(HomeButton,{onClick:handleHomeClick},`PW`),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"links-outer"},(0,emotion_react_esm/* jsx */.tZ)("ol",{ref:linksRef},config.navLinks&&config.navLinks.map(({url,name},i)=>(0,emotion_react_esm/* jsx */.tZ)("li",{key:i},(0,emotion_react_esm/* jsx */.tZ)(StyledLinkButton,{onClick:()=>handleLinkClick(i+1),active:active===i+1},name))))),(0,emotion_react_esm/* jsx */.tZ)(resumeButton,{current:current,visible:showResumeButton,setVisible:setShowResumeButton}));};/* harmony default export */ const nav = (Nav);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
// EXTERNAL MODULE: ./src/hooks/index.js + 5 modules
var hooks = __webpack_require__(7385);
;// CONCATENATED MODULE: ./src/templates/section.js
const _excluded=["id","heading","current","setCurrent","next","increment","setIncrement"];const StyledSection=(0,emotion_styled_base_esm/* default */.Z)("section", true?{target:"eo73fwq0"}:0)("id:",props=>props.id?props.id:undefined,";display:flex;flex-direction:column;grid-area:1/1/-1/-1;height:100%;width:100%;justify-content:center;animation:",props=>props.animation," 1s ease forwards;"+( true?"":0));const animations={navForward:{entrance:'slidein-bottom',exit:'slideout-top'},navBackward:{entrance:'slidein-top',exit:'slideout-bottom'},pageLoad:'slidein-right'};const Section=_ref=>{let{id,heading,current,setCurrent,next,increment,setIncrement}=_ref,props=_objectWithoutProperties(_ref,_excluded);const[element,setElement]=index_js_default().useState();const[animation,setAnimation]=index_js_default().useState('none');const[mounted,setMounted]=index_js_default().useState(false);const[scrollDirection,enableScroll]=(0,hooks/* useScrollListener */.mu)(element);const sectionRef=(0,index_js_.useCallback)(node=>{setElement(node);},[]);// Current section updates
(0,index_js_.useEffect)(()=>{if(current!==id)return;updateAnimation();setMounted(true);// eslint-disable-next-line react-hooks/exhaustive-deps
},[current]);// Scroll triggered
(0,index_js_.useEffect)(()=>{if(current!==id)return;if(current+scrollDirection<0||current+scrollDirection>4)return enableScroll();setIncrement(scrollDirection);// eslint-disable-next-line react-hooks/exhaustive-deps
},[scrollDirection]);// Increment updates
(0,index_js_.useEffect)(()=>{if(current!==id)return;if(increment===0)return;next.current=current+increment;updateAnimation();// eslint-disable-next-line react-hooks/exhaustive-deps
},[increment]);const handleAnimationEnd=props=>{const animationName=props.animationName;if(current!==id)return;if(animationName===animations.pageLoad)return handleEntranceAnimationEnd();if(animationName===animations.navForward.entrance)return handleEntranceAnimationEnd();if(animationName===animations.navBackward.entrance)return handleEntranceAnimationEnd();if(animationName===animations.navForward.exit)return handleExitAnimationEnd();if(animationName===animations.navBackward.exit)return handleExitAnimationEnd();};const handleEntranceAnimationEnd=()=>{enableScroll();setIncrement(0);};const handleExitAnimationEnd=()=>{setMounted(false);setCurrent(next.current);};const updateAnimation=()=>{//console.log(`ID[${id}] : ${next.current === current} | ${increment}`)
if(next.current===current&&increment<0)return setAnimation(animations.navBackward.entrance);if(next.current===current&&increment>0)return setAnimation(animations.navForward.entrance);if(next.current!==current&&increment>0)return setAnimation(animations.navForward.exit);if(next.current!==current&&increment<0)return setAnimation(animations.navBackward.exit);if(next.current===current&&increment===0)return setAnimation(animations.pageLoad);return'none';};return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,mounted&&(0,emotion_react_esm/* jsx */.tZ)(StyledSection,{id:id,ref:sectionRef,animation:animation,onAnimationEnd:handleAnimationEnd},(0,emotion_react_esm/* jsx */.tZ)(content,{sectionID:id,heading:heading},props.children)));};/* harmony default export */ const section = (Section);
// EXTERNAL MODULE: ./node_modules/common-tags/es/index.js + 41 modules
var es = __webpack_require__(5863);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js
var camelcase = __webpack_require__(2369);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},s.apply(this,arguments);}function l(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var d,u=(/* unused pure expression or super */ null && ([.25,.5,1,2])),c=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),h=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function f(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.substr(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function v(e){var t=e.layout,a=void 0===t?"constrained":t,i=e.width,n=e.height,o=e.sourceMetadata,l=e.breakpoints,d=e.aspectRatio,u=e.formats,c=void 0===u?["auto","webp"]:u;return c=c.map(function(e){return e.toLowerCase();}),a=r(a),i&&n?s({},e,{formats:c,layout:a,aspectRatio:i/n}):(o.width&&o.height&&!d&&(d=o.width/o.height),"fullWidth"===a?(i=i||o.width||l[l.length-1],n=n||Math.round(i/(d||1.3333333333333333))):(i||(i=n&&d?n*d:o.width?o.width:n?Math.round(n/1.3333333333333333):800),d&&!n?n=Math.round(i/d):d||(d=i/n)),s({},e,{width:i,height:n,aspectRatio:d,layout:a,formats:c}));}function w(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=v(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function y(e){var t,a=(e=v(e)).pluginName,r=e.sourceMetadata,n=e.generateImageSource,o=e.layout,l=e.fit,h=e.options,p=e.width,w=e.height,y=e.filename,M=e.reporter,S=void 0===M?{warn:g}:M,N=e.backgroundColor,R=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof n)throw new Error("generateImageSource must be a function");r&&(r.width||r.height)?r.format||(r.format=f(y)):r={width:p,height:w,format:(null==(t=r)?void 0:t.format)||f(y)||"auto"};var x=new Set(e.formats);(0===x.size||x.has("auto")||x.has(""))&&(x.delete("auto"),x.delete(""),x.add(r.format)),x.has("jpg")&&x.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),x.delete("jpg"===r.format?"png":"jpg"));var I=function(e){var t=e.filename,a=e.layout,r=void 0===a?"constrained":a,n=e.sourceMetadata,o=e.reporter,l=void 0===o?{warn:g}:o,h=e.breakpoints,p=void 0===h?c:h,m=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(m.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+m.map(function(e){return e.join(": ");}).join(", "));return"fixed"===r?function(e){var t=e.filename,a=e.sourceMetadata,r=e.width,n=e.height,o=e.fit,s=void 0===o?"cover":o,l=e.outputPixelDensities,c=e.reporter,h=void 0===c?{warn:g}:c,p=a.width/a.height,m=b(void 0===l?u:l);if(r&&n){var f=k(a,{width:r,height:n,fit:s});r=f.width,n=f.height,p=f.aspectRatio;}r?n||(n=Math.round(r/p)):r=n?Math.round(n*p):800;var v,w,y=r;if(a.width<r||a.height<n){var E=a.width<r?"width":"height";h.warn(i(d||(v=["\n    The requested ",' "','px" for the image '," was larger than the actual image "," of ","px. If possible, replace the current image with a larger one."],w||(w=v.slice(0)),v.raw=w,d=v),E,"width"===E?r:n,t,E,a[E])),"width"===E?(r=a.width,n=Math.round(r/p)):r=(n=a.height)*p;}return{sizes:m.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*r);}).filter(function(e){return e<=a.width;}),aspectRatio:p,presentationWidth:y,presentationHeight:Math.round(y/p),unscaledWidth:r};}(e):"constrained"===r?E(e):"fullWidth"===r?E(s({breakpoints:p},e)):(l.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+r),{sizes:[n.width],presentationWidth:n.width,presentationHeight:n.height,aspectRatio:n.width/n.height,unscaledWidth:n.width});}(s({},e,{sourceMetadata:r})),W={sources:[]},j=e.sizes;j||(j=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(I.presentationWidth,o)),x.forEach(function(e){var t=I.sizes.map(function(t){var i=n(y,t,Math.round(t/I.aspectRatio),e,l,h);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===I.unscaledWidth;})||t[0];i&&(W.fallback={src:i.src,srcSet:m(t),sizes:j});}else{var r;null==(r=W.sources)||r.push({srcSet:m(t),sizes:j,type:"image/"+e});}});var _={images:W,layout:o,backgroundColor:N};switch(R&&(_.placeholder={fallback:R}),o){case"fixed":_.width=I.presentationWidth,_.height=I.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/I.aspectRatio;break;case"constrained":_.width=e.width||I.presentationWidth||1,_.height=(_.width||1)/I.aspectRatio;}return _;}var b=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,s=e.outputPixelDensities,l=e.breakpoints,d=e.layout,c=a.width/a.height,h=b(void 0===s?u:s);if(i&&r){var g=k(a,{width:i,height:r,fit:o});i=g.width,r=g.height,c=g.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/c),i||(i=r*c);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==l?void 0:l.length)>0?(t=l.filter(function(e){return e<=a.width;})).length<l.length&&!t.includes(a.width)&&t.push(a.width):t=(t=h.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:c,presentationWidth:m,presentationHeight:Math.round(m/c),unscaledWidth:i};}function k(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var M=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),S=(/* unused pure expression or super */ null && (["images","placeholder"]));function N(){return true&&true;}new Set();var R=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},x=function(e){var t,a,i;return null==(t=R(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},I=function(e){var t,a,i;return null==(t=R(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function W(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,n=e.sourceHeight,o=e.pluginName,d=void 0===o?"getImageData":o,u=e.formats,c=void 0===u?["auto"]:u,g=e.breakpoints,p=e.options,m=l(e,M);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=h),y(s({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:c,breakpoints:g,sourceMetadata:{width:r,height:n,format:"auto"}}));}function j(e,t){var a,i,r,n=e.images,o=e.placeholder,d=s({},l(e,S),{images:s({},n,{sources:[]}),placeholder:o&&s({},o,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=d.images.sources).push.apply(a,r.images.sources.map(function(e){return s({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),d.placeholder&&d.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=d.images.sources).push.apply(a,n.sources),null!=o&&o.sources&&(null==(i=d.placeholder)||(r=i.sources).push.apply(r,o.sources)),d;}var _,T=["src","srcSet","loading","alt","shouldLoad","innerRef"],A=["fallback","sources","shouldLoad"],O=function(t){var a=t.src,i=t.srcSet,r=t.loading,n=t.alt,o=void 0===n?"":n,d=t.shouldLoad,u=t.innerRef,c=l(t,T);return/*#__PURE__*/index_js_default().createElement("img",s({},c,{decoding:"async",loading:r,src:d?a:void 0,"data-src":d?void 0:a,srcSet:d?i:void 0,"data-srcset":d?void 0:i,alt:o,ref:u}));},z=/*#__PURE__*/(0,index_js_.forwardRef)(function(t,a){var i=t.fallback,r=t.sources,n=void 0===r?[]:r,o=t.shouldLoad,d=void 0===o||o,u=l(t,A),c=u.sizes||(null==i?void 0:i.sizes),h=/*#__PURE__*/index_js_default().createElement(O,s({},u,i,{sizes:c,shouldLoad:d,innerRef:a}));return n.length?/*#__PURE__*/index_js_default().createElement("picture",null,n.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/index_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:d?i:void 0,"data-srcset":d?void 0:i,sizes:c});}),h):h;});O.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},z.displayName="Picture",z.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var L=["fallback"],C=function(t){var a=t.fallback,i=l(t,L);return a?/*#__PURE__*/index_js_default().createElement(z,s({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/index_js_default().createElement("div",s({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types.string,sources:null==(_=z.propTypes)?void 0:_.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var q=/*#__PURE__*/(0,index_js_.forwardRef)(function(t,a){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(z,s({ref:a},t)),/*#__PURE__*/index_js_default().createElement("noscript",null,/*#__PURE__*/index_js_default().createElement(z,s({},t,{shouldLoad:!0}))));});q.displayName="MainImage",q.propTypes=z.propTypes;var D=["children"],P=function(){return/*#__PURE__*/index_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'}});},H=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/index_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/index_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/index_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},F=function(t){var i=t.children,r=l(t,D);return/*#__PURE__*/index_js_default().createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_default().createElement(H,s({},r)),i,/*#__PURE__*/index_js_default().createElement(P,null));},B=["as","children"],G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.children,n=l(t,B);return/*#__PURE__*/index_js_default().createElement(i,s({},n),r);},Y=function(t){var a=t.as,i=t.className,r=t.class,n=t.style,o=t.image,d=t.loading,u=void 0===d?"lazy":d,c=t.imgClassName,h=t.imgStyle,g=t.backgroundColor,p=t.objectFit,m=t.objectPosition,f=l(t,G);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(i=r),h=s({objectFit:p,objectPosition:m,backgroundColor:g},h);var v=o.width,w=o.height,y=o.layout,b=o.images,E=o.placeholder,k=o.backgroundColor,M=function(e,t,a){var i={},r="gatsby-image-wrapper";return N()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(N()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(v,w,y),S=M.style,R=M.className,x=l(M,V),I={fallback:void 0,sources:[]};return b.fallback&&(I.fallback=s({},b.fallback,{srcSet:b.fallback.srcSet?U(b.fallback.srcSet):void 0})),b.sources&&(I.sources=b.sources.map(function(e){return s({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/index_js_default().createElement(X,s({},x,{as:a,style:s({},S,n,{backgroundColor:g}),className:R+(i?" "+i:"")}),/*#__PURE__*/index_js_default().createElement(F,{layout:y,width:v,height:w},/*#__PURE__*/index_js_default().createElement(C,s({},function(e,t,a,i,r,n,o,l){var d={};n&&(d.backgroundColor=n,"fixed"===a?(d.width=i,d.height=r,d.backgroundColor=n,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:1,transition:"opacity 500ms linear"},d)});return N()||(u.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),u;}(E,0,y,v,w,k,p,m))),/*#__PURE__*/index_js_default().createElement(q,s({"data-gatsby-image-ssr":"",className:c},f,function(e,t,a,i,r,n,o,l){return void 0===l&&(l={}),N()||(l=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},l)),s({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:s({},l,{opacity:0}),onLoad:function(e){var t=e.currentTarget,a=new Image();a.src=t.currentSrc,a.decode?a.decode().catch(function(){}).then(function(){r(!0);}):r(!0);},ref:void 0});}("eager"===u,0,I,u,void 0,0,0,h)))));},Z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],J=function(t){return function(a){var i=a.src,r=a.__imageData,n=a.__error,o=l(a,Z);return n&&console.warn(n),r?/*#__PURE__*/index_js_default().createElement(t,s({image:r},o)):(console.warn("Image not loaded",i),n||"development"!=="production"||0,null);};}(Y),K=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},Q=new Set(["fixed","fullWidth","constrained"]),$={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:K,height:K,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!Q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};J.displayName="StaticImage",J.propTypes=$;
;// CONCATENATED MODULE: ./src/templates/image.js
function image_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const StyledImage=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"eg58ukk0"}:0)( true?{name:"1rbbtiy",styles:"position:relative;.wrapper{z-index:0;display:inline-flex;position:relative;border-radius:var(--border-radius);&:hover,&:focus{background:transparent;.image{filter:none;mix-blend-mode:normal;}}.image{z-index:-1;position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);top:0;left:0;background-color:var(--primary1);mix-blend-mode:screen;}}"}:0);const image_Image=({image,alt})=>{return (0,emotion_react_esm/* jsx */.tZ)(StyledImage,null,(0,emotion_react_esm/* jsx */.tZ)("div",{className:"wrapper"},(0,emotion_react_esm/* jsx */.tZ)(Y,{className:"image",image:R(image),alt:alt||""})));};/* harmony default export */ const templates_image = (image_Image);
;// CONCATENATED MODULE: ./src/templates/content.js
const StyledDiv=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e133qmsh0"}:0)("padding:0% 15%;.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px, 5vw, var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;counter-increment:section;content:'0' '",props=>props.sectionID||'x',"' '.';margin-right:10px;color:var(--highlight);font-family:var(--font-mono);font-size:clamp(var(--fz-md), 3vw, var(--fz-xl));font-weight:400;@media (max-width: 480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:'';display:block;position:relative;top:-5px;width:100%;height:1px;margin-left:20px;background-color:var(--text1);}}"+( true?"":0));const Content=({sectionID,heading,children})=>{return (0,emotion_react_esm/* jsx */.tZ)(StyledDiv,{sectionID:sectionID},heading&&(0,emotion_react_esm/* jsx */.tZ)("h2",{className:"numbered-heading"},heading),children);};/* harmony default export */ const content = (Content);
;// CONCATENATED MODULE: ./src/templates/index.js

;// CONCATENATED MODULE: ./src/components/sections/home/index.js
function home_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const StyledContent=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e5sox390"}:0)( true?{name:"qf4xjf",styles:".sub-heading{color:var(--text2);font-size:clamp(12px, 2.5vw, 21px);}"}:0);const Home=props=>{return (0,emotion_react_esm/* jsx */.tZ)(section,props,(0,emotion_react_esm/* jsx */.tZ)(StyledContent,null,(0,emotion_react_esm/* jsx */.tZ)("h1",{className:"big-heading"},"Philo Waddell"),(0,emotion_react_esm/* jsx */.tZ)("h2",{className:"sub-heading"},"Full Stack Engineer & Machine Learning Enthusiast"),(0,emotion_react_esm/* jsx */.tZ)("a",{className:"smallButton resume-button",href:`https://docs.google.com/uc?export=download&id=${config.resumeFileID}`},"Resume")));};/* harmony default export */ const home = (Home);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/index.js
var gatsby_plugin_mdx = __webpack_require__(1905);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/components/sections/about/index.js
function about_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const AboutContent=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1n1ucvc0"}:0)( true?{name:"6nkbc9",styles:".about-text{font-size:var(--fz-xl);color:var(--text2);ul{display:grid;grid-template-columns:repeat(3, minmax(140px, 200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-md);&:before{content:'\u25B9';position:absolute;left:0;color:var(--highlight);font-size:var(--fz-md);line-height:12px;}}}}"}:0);const About=props=>{const data=(0,gatsby_browser_entry.useStaticQuery)("2560819558");const{frontmatter,body}=data.allMdx.nodes[0];const{heading}=frontmatter;return (0,emotion_react_esm/* jsx */.tZ)(section,(0,esm_extends/* default */.Z)({heading:heading},props),(0,emotion_react_esm/* jsx */.tZ)(AboutContent,null,(0,emotion_react_esm/* jsx */.tZ)("div",{className:"about-text"},(0,emotion_react_esm/* jsx */.tZ)(gatsby_plugin_mdx.MDXRenderer,null,body))));};/* harmony default export */ const about = (About);
;// CONCATENATED MODULE: ./src/components/sections/experience/skillbar.js
const SkillListItem=(0,emotion_styled_base_esm/* default */.Z)("li", true?{target:"ecrkh8w0"}:0)("display:flex;margin:15px 20px 15px 20px;animation:fadeInUp 500ms ",props=>props.transitionDelay||'1500',"ms ease 1 both;.skill-title{color:var(--highlight);font-family:var(--font-mono);margin:0px;min-width:130px;}.skill-bar-outer{display:flex;flex-grow:1;.skill-bar-inner{background:var(--highlight);width:0px;height:2px;border-radius:10px/10px;align-self:center;animation:",props=>grow(props.width)," 1s ",props=>props.transitionDelay+500,"ms cubic-bezier(0.27, 0.63, 0.36, 1) 1 forwards;}}.skill-percent{font-size:var(--fz-md);color:var(--highlight);}"+( true?"":0));const grow=width=>emotion_react_esm/* keyframes */.F4`
  from { width: 0px; }
  to { width: ${width}%; }
`;const SkillBar=({transitionDelay,skill,width})=>{// const [clientWidth, skillBarRef] = useStateRef(node => (node?.clientWidth || 0));
// useEffect(() => {
//   console.log(`the new clientHeight is: ${clientWidth}`);
// }, [clientWidth])
return (0,emotion_react_esm/* jsx */.tZ)(SkillListItem,{transitionDelay:transitionDelay,width:width},(0,emotion_react_esm/* jsx */.tZ)("h5",{className:"skill-title"},skill),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"skill-bar-outer"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"skill-bar-inner"// ref={skillBarRef} 
})));};/* harmony default export */ const skillbar = (SkillBar);
;// CONCATENATED MODULE: ./src/components/sections/experience/index.js
function experience_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const ExperienceContent=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1r0jigy0"}:0)( true?{name:"qh0e13",styles:"display:grid;grid:auto/5fr 4fr;.experience-skills{grid-area:1/2/3/3;.skills-heading{font-family:var(--font-mono);padding-bottom:15px;color:var(--highlight);&:after{content:'';display:block;position:relative;bottom:-10px;width:100%;height:1px;background-color:var(--highlight);}}ul{display:flex;flex-direction:column;padding:0px;margin:0px 0px 0px 40px;list-style-type:none;li{margin-left:0px;}}}.experience-text{font-size:var(--fz-xl);color:var(--text2);}.experience-tools{grid-area:2/1/3/2;display:grid;grid:auto/repeat(5, 1fr);align-items:center;justify-content:center;.tool-logo{justify-self:center;padding:10px 10px 0px 10px;}}"}:0);const Experience=props=>{const data=(0,gatsby_browser_entry.useStaticQuery)("2160304737");const{frontmatter,body}=data.allMdx.nodes[0];const{heading,skills,tools}=frontmatter;const skillsJson=Object.fromEntries(skills.map(s=>s.split(",")));return (0,emotion_react_esm/* jsx */.tZ)(section,(0,esm_extends/* default */.Z)({heading:heading},props),(0,emotion_react_esm/* jsx */.tZ)(ExperienceContent,null,(0,emotion_react_esm/* jsx */.tZ)("div",{className:"experience-text"},(0,emotion_react_esm/* jsx */.tZ)(gatsby_plugin_mdx.MDXRenderer,null,body)),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"experience-skills"},(0,emotion_react_esm/* jsx */.tZ)("ul",null,(0,emotion_react_esm/* jsx */.tZ)("h3",{className:"skills-heading"},"Languages"),Object.entries(skillsJson).map(([skill,width],i)=>(0,emotion_react_esm/* jsx */.tZ)(skillbar,{key:i,transitionDelay:1500,skill:skill,width:width})))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"experience-tools"},tools.map((image,i)=>(0,emotion_react_esm/* jsx */.tZ)("div",{className:"tool-logo",key:i},(0,emotion_react_esm/* jsx */.tZ)(templates_image,{key:i,image:image}))))));};/* harmony default export */ const experience = (Experience);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/components/icons/github.js
const IconGitHub=()=>(0,emotion_react_esm/* jsx */.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github"},(0,emotion_react_esm/* jsx */.tZ)("title",null,"GitHub"),(0,emotion_react_esm/* jsx */.tZ)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}));/* harmony default export */ const icons_github = (IconGitHub);
;// CONCATENATED MODULE: ./src/components/sections/projects/project.js
const StyledProject=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1rp2pjq0"}:0)("display:grid;grid:1fr/repeat(6, 1fr);height:380px;animation:",props=>props.animation," 1s ease forwards;.project-image{z-index:1;grid-area:1/4/1/7;align-self:center;}.project-content{z-index:2;grid-area:1/1/1/5;text-align:left;align-self:center;.project-title{display:inline-flex;margin-bottom:20px;.title-text{margin:0px 20px 0px 0px;font-size:clamp(24px, 5vw, 28px);color:var(--text1);}a{align-self:center;svg{width:20px;height:20px;color:var(--highlight);}}}.project-description{padding:25px;font-size:var(--fz-xl);color:var(--text2);background-color:var(--primary2);border-radius:var(--border-radius);}.box-shadow{box-shadow:0 10px 30px -15px var(--shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--shadow);}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--text2);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width: 768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--text1);}}}}"+( true?"":0));const Project=({id,totalProjects,data,current,setCurrent,increment,setIncrement})=>{const[mounted,setMounted]=index_js_default().useState(false);const[visible,setVisible]=index_js_default().useState(false);const{title,body,github,image,imageAlt,tech}=data;(0,index_js_.useEffect)(()=>{if(current===id){setVisible(true);setMounted(true);}},[current,id]);const nextClicked=()=>{setVisible(false);setIncrement(1);};const prevClicked=()=>{setVisible(false);setIncrement(-1);};const unmount=()=>{if(visible)return setIncrement(0);setMounted(false);setCurrent(prev=>prev+increment);};const getAnimation=()=>{if(visible&&increment===1)return'slidein-right';if(!visible&&increment===1)return'slideout-left';if(!visible&&increment===-1)return'slideout-right';if(visible&&increment===-1)return'slidein-left';return'none';};return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,mounted&&(0,emotion_react_esm/* jsx */.tZ)(StyledProject,{animation:getAnimation,onAnimationEnd:()=>unmount()},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-content"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-title"},(0,emotion_react_esm/* jsx */.tZ)("h3",{className:"title-text"},title),(0,emotion_react_esm/* jsx */.tZ)("a",{href:github,target:"_blank",rel:"noreferrer"},(0,emotion_react_esm/* jsx */.tZ)(icons_github,null))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-description box-shadow"},(0,emotion_react_esm/* jsx */.tZ)(gatsby_plugin_mdx.MDXRenderer,null,body)),(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"project-tech-list"},tech&&tech.map((tech,i)=>(0,emotion_react_esm/* jsx */.tZ)("li",{key:i},tech))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-links"}),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-nav"},current>0&&(0,emotion_react_esm/* jsx */.tZ)("button",{className:"smallButton",onClick:()=>prevClicked()},"Prev"),current<totalProjects-1&&(0,emotion_react_esm/* jsx */.tZ)("button",{className:"smallButton",onClick:()=>nextClicked()},"Next"))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"project-image"},(0,emotion_react_esm/* jsx */.tZ)(templates_image,{image:image,alt:imageAlt}))));};/* harmony default export */ const project = (Project);
;// CONCATENATED MODULE: ./src/components/sections/projects/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}const Projects=props=>{const[currentProject,setCurrentProject]=index_js_default().useState(0);const[increment,setIncrement]=index_js_default().useState(0);const data=(0,gatsby_browser_entry.useStaticQuery)("4159063897");const projectData=data.allMdx.edges;return(// Why true &&
(0,emotion_react_esm/* jsx */.tZ)(section,(0,esm_extends/* default */.Z)({heading:'Projects'},props), true&&projectData.map((edge,i)=>{const{node}=edge;const{frontmatter,body}=node;const{order}=frontmatter;return (0,emotion_react_esm/* jsx */.tZ)(project,{key:i,id:order,totalProjects:projectData.length,data:_objectSpread(_objectSpread({},frontmatter),{},{body}),current:currentProject,setCurrent:setCurrentProject,increment:increment,setIncrement:setIncrement});})));};/* harmony default export */ const projects = (Projects);
;// CONCATENATED MODULE: ./src/components/sections/contact/index.js
function contact_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const ContactContent=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e2yd77d0"}:0)( true?{name:"17o31zp",styles:"display:grid;justify-items:center;.contact-heading{font-size:clamp(20px, 12vw, 50px);}.contact-text{width:320px;font-size:var(--fz-xl);color:var(--text2);text-align:center;}.contact-button{width:140px;height:60px;margin:20px;}"}:0);const Contact=props=>{const data=(0,gatsby_browser_entry.useStaticQuery)("1199023874");const{frontmatter,body}=data.allMdx.nodes[0];const{heading}=frontmatter;const mailLink=index_js_default().useRef('');const handleContactClicked=()=>{mailLink.current=`mailto:${atob(config.contactDetails.email)}?subject=${atob(config.contactDetails.subject)}`||'';window.location.href=mailLink.current;};return (0,emotion_react_esm/* jsx */.tZ)(section,props,(0,emotion_react_esm/* jsx */.tZ)(ContactContent,null,(0,emotion_react_esm/* jsx */.tZ)("h1",{className:"contact-heading"},heading),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"contact-text"},(0,emotion_react_esm/* jsx */.tZ)(gatsby_plugin_mdx.MDXRenderer,null,body)),(0,emotion_react_esm/* jsx */.tZ)("button",{className:"smallButton contact-button",onClick:handleContactClicked},"Say Hello")));};/* harmony default export */ const contact = (Contact);
;// CONCATENATED MODULE: ./src/components/common/resumeButton.js
const StyledButton=(0,emotion_styled_base_esm/* default */.Z)("a", true?{target:"e150etfq0"}:0)("animation:",props=>props.animation||'none'," 1000ms ease both;"+( true?"":0));const ResumeButton=({current,visible,setVisible})=>{const[mounted,setMounted]=index_js_default().useState(false);(0,index_js_.useEffect)(()=>{if(current===0)return setVisible(false);// eslint-disable-next-line react-hooks/exhaustive-deps
},[current]);(0,index_js_.useEffect)(()=>{if(visible)return setMounted(true);},[visible]);const handleClick=()=>{};const getAnimation=()=>{if(mounted&&visible)return'fadeInUp';if(mounted&&!visible)return'fadeOutDown';return'none';};const handleAnimationEnd=props=>{if(current===0){setMounted(false);setVisible(false);}};return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,mounted&&(0,emotion_react_esm/* jsx */.tZ)(StyledButton,{className:"smallButton resume-button",href:`https://docs.google.com/uc?export=download&id=${config.resumeFileID}`,animation:getAnimation,onAnimationEnd:handleAnimationEnd,onClick:handleClick},"Resume"));};/* harmony default export */ const resumeButton = (ResumeButton);
;// CONCATENATED MODULE: ./src/components/index.js

;// CONCATENATED MODULE: ./src/pages/desktop.js
const DesktopSite=()=>{const[currentSection,setCurrentSection]=index_js_default().useState(0);const next=(0,index_js_.useRef)(currentSection);const[increment,setIncrement]=index_js_default().useState(0);const sectionProps={current:currentSection,setCurrent:setCurrentSection,next:next,increment:increment,setIncrement:setIncrement};return (0,emotion_react_esm/* jsx */.tZ)(layout,{current:currentSection},(0,emotion_react_esm/* jsx */.tZ)(header,{current:currentSection,setIncrement:setIncrement}),(0,emotion_react_esm/* jsx */.tZ)(home,(0,esm_extends/* default */.Z)({id:0},sectionProps)),(0,emotion_react_esm/* jsx */.tZ)(about,(0,esm_extends/* default */.Z)({id:1},sectionProps)),(0,emotion_react_esm/* jsx */.tZ)(experience,(0,esm_extends/* default */.Z)({id:2},sectionProps)),(0,emotion_react_esm/* jsx */.tZ)(projects,(0,esm_extends/* default */.Z)({id:3},sectionProps)),(0,emotion_react_esm/* jsx */.tZ)(contact,(0,esm_extends/* default */.Z)({id:4},sectionProps)));};/* harmony default export */ const desktop = (DesktopSite);

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
//# sourceMappingURL=component---src-pages-desktop-js.js.map