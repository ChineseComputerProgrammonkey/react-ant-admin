(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[12],{1015:function(e,t,n){"use strict";var r=n(45),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(52)),i=r(n(0)),l=a(n(1016)),c=a(n(70)),u=function(e,t){return i.createElement(c.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:l.default}))};u.displayName="CheckOutlined";var s=i.forwardRef(u);t.default=s},1016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},1083:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=r(n(51)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),c=r(n(25)),u=n(283),s=n(42),d=r(n(184));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=function(e,t){var n=e.prefixCls,r=e.component,a=void 0===r?"article":r,f=e.className,y=e["aria-label"],v=e.setContentRef,h=e.children,g=p(e,["prefixCls","component","className","aria-label","setContentRef","children"]),m=t;return v&&((0,d.default)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=(0,u.composeRef)(t,v)),l.createElement(s.ConfigConsumer,null,(function(e){var t=e.getPrefixCls,r=e.direction,u=a,s=t("typography",n),d=(0,c.default)(s,(0,i.default)({},"".concat(s,"-rtl"),"rtl"===r),f);return l.createElement(u,(0,o.default)({className:d,"aria-label":y,ref:m},g),h)}))},v=l.forwardRef(y);v.displayName="Typography";var h=v;t.default=h},1270:function(e,t,n){"use strict";n(83),n(1271),n(899),n(891)},1271:function(e,t,n){},1272:function(e,t,n){"use strict";var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1083)),o=r(n(1273)),i=r(n(1288)),l=r(n(1289)),c=r(n(1290)),u=a.default;u.Text=o.default,u.Link=i.default,u.Title=l.default,u.Paragraph=c.default;var s=u;t.default=s},1273:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=r(n(14)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),c=r(n(559)),u=r(n(184)),s=r(n(982));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=function(e){var t=e.ellipsis,n=f(e,["ellipsis"]),r=l.useMemo((function(){return t&&"object"===(0,i.default)(t)?(0,c.default)(t,["expandable","rows"]):t}),[t]);return(0,u.default)("object"!==(0,i.default)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),l.createElement(s.default,(0,o.default)({},n,{ellipsis:r,component:"span"}))};t.default=p},1274:function(e,t,n){"use strict";var r=n(1275),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,i,l,c,u,s=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),l=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),u&&document.body.removeChild(u),i()}return s}},1275:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},1276:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(1277))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},1277:function(e,t,n){"use strict";var r=n(45),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(52)),i=r(n(0)),l=a(n(1278)),c=a(n(70)),u=function(e,t){return i.createElement(c.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:l.default}))};u.displayName="EditOutlined";var s=i.forwardRef(u);t.default=s},1278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"}},1279:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(1280))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},1280:function(e,t,n){"use strict";var r=n(45),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(52)),i=r(n(0)),l=a(n(1281)),c=a(n(70)),u=function(e,t){return i.createElement(c.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:l.default}))};u.displayName="CopyOutlined";var s=i.forwardRef(u);t.default=s},1281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"}},1282:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(945));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},d=i.forwardRef((function(e,t){var n=e.style,r=e.noStyle,a=e.disabled,c=u(e,["style","noStyle","disabled"]),d={};return r||(d=(0,o.default)({},s)),a&&(d.pointerEvents="none"),d=(0,o.default)((0,o.default)({},d),n),i.createElement("div",(0,o.default)({role:"button",tabIndex:0,ref:t},c,{onKeyDown:function(e){e.keyCode===l.default.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===l.default.ENTER&&r&&r()},style:d}))}));t.default=d},1283:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(51)),i=r(n(58)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),c=r(n(25)),u=r(n(945)),s=r(n(1284)),d=r(n(1072));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var p=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,a=e.style,f=e.direction,p=e.maxLength,y=e.autoSize,v=void 0===y||y,h=e.value,g=e.onSave,m=e.onCancel,E=e.onEnd,b=l.useRef(),O=l.useRef(!1),C=l.useRef(),M=l.useState(h),P=(0,i.default)(M,2),w=P[0],S=P[1];l.useEffect((function(){S(h)}),[h]),l.useEffect((function(){if(b.current&&b.current.resizableTextArea){var e=b.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var x=function(){g(w.trim())},_=(0,c.default)(t,"".concat(t,"-edit-content"),(0,o.default)({},"".concat(t,"-rtl"),"rtl"===f),r);return l.createElement("div",{className:_,style:a},l.createElement(d.default,{ref:b,maxLength:p,value:w,onChange:function(e){var t=e.target;S(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;O.current||(C.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,o=e.shiftKey;C.current!==t||O.current||n||r||a||o||(t===u.default.ENTER?(x(),null===E||void 0===E||E()):t===u.default.ESC&&m())},onCompositionStart:function(){O.current=!0},onCompositionEnd:function(){O.current=!1},onBlur:function(){x()},"aria-label":n,autoSize:v}),l.createElement(s.default,{className:"".concat(t,"-edit-content-confirm")}))};t.default=p},1284:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(1285))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},1285:function(e,t,n){"use strict";var r=n(45),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(52)),i=r(n(0)),l=a(n(1286)),c=a(n(70)),u=function(e,t){return i.createElement(c.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:l.default}))};u.displayName="EnterOutlined";var s=i.forwardRef(u);t.default=s},1286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"}},1287:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(53),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(907));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u,s={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function d(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}function f(e,t){e.setAttribute("aria-hidden","true");var n,r=window.getComputedStyle(t),a=(n=r,Array.prototype.slice.apply(n).map((function(e){return"".concat(e,": ").concat(n.getPropertyValue(e),";")})).join(""));e.setAttribute("style",a),e.style.position="fixed",e.style.left="0",e.style.height="auto",e.style.minHeight="auto",e.style.maxHeight="auto",e.style.top="-999999px",e.style.zIndex="-1000",e.style.textOverflow="clip",e.style.whiteSpace="normal",e.style.webkitLineClamp="none"}t.default=function(e,t,n,r,a){u||(u=document.createElement("div")).setAttribute("aria-hidden","true"),u.parentNode||document.body.appendChild(u);var c=t.rows,p=t.suffix,y=void 0===p?"":p,v=window.getComputedStyle(e),h=function(e){var t=document.createElement("div");f(t,e),t.appendChild(document.createTextNode("text")),document.body.appendChild(t);var n=t.offsetHeight,r=d(window.getComputedStyle(e).lineHeight);return document.body.removeChild(t),n>r?n:r}(e),g=Math.floor(h)*(c+1)+d(v.paddingTop)+d(v.paddingBottom);f(u,e);var m=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}((0,l.default)(n));function E(){return Math.ceil(u.getBoundingClientRect().height)<g}if((0,o.render)(i.createElement("div",{style:s},i.createElement("span",{style:s},m,y),i.createElement("span",{style:s},r)),u),E())return(0,o.unmountComponentAtNode)(u),{content:n,text:u.innerHTML,ellipsis:!1};var b=Array.prototype.slice.apply(u.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),O=Array.prototype.slice.apply(u.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,o.unmountComponentAtNode)(u);var C=[];u.innerHTML="";var M=document.createElement("span");u.appendChild(M);var P=document.createTextNode(a+y);function w(e){M.insertBefore(e,P)}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Math.floor((n+r)/2),i=t.slice(0,o);if(e.textContent=i,n>=r-1)for(var l=r;l>=n;l-=1){var c=t.slice(0,l);if(e.textContent=c,E()||!c)return l===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:c}}return E()?S(e,t,o,r,o):S(e,t,n,o,a)}function x(e,t){var n=e.nodeType;if(1===n)return w(e),E()?{finished:!1,reactNode:m[t]}:(M.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",a=document.createTextNode(r);return w(a),S(a,r)}return{finished:!1,reactNode:null}}return M.appendChild(P),O.forEach((function(e){u.appendChild(e)})),b.some((function(e,t){var n=x(e,t),r=n.finished,a=n.reactNode;return a&&C.push(a),r})),{content:C,text:u.innerHTML,ellipsis:!0}}},1288:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=r(n(14)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),c=r(n(184)),u=r(n(982));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=function(e,t){var n=e.ellipsis,r=e.rel,a=d(e,["ellipsis","rel"]);(0,c.default)("object"!==(0,i.default)(n),"Typography.Link","`ellipsis` only supports boolean value.");var s=l.useRef(null);l.useImperativeHandle(t,(function(){var e;return null===(e=s.current)||void 0===e?void 0:e.contentRef.current}));var f=(0,o.default)((0,o.default)({},a),{rel:void 0===r&&"_blank"===a.target?"noopener noreferrer":r});return delete f.navigate,l.createElement(u.default,(0,o.default)({},f,{ref:s,ellipsis:!!n,component:"a"}))},p=l.forwardRef(f);t.default=p},1289:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(184)),c=r(n(982)),u=n(188);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=(0,u.tupleNum)(1,2,3,4,5),p=function(e){var t,n=e.level,r=void 0===n?1:n,a=d(e,["level"]);return-1!==f.indexOf(r)?t="h".concat(r):((0,l.default)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),i.createElement(c.default,(0,o.default)({},a,{component:t}))};t.default=p},1290:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(34)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),l=r(n(982));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=function(e){return i.createElement(l.default,(0,o.default)({},e,{component:"div"}))};t.default=u},945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},a=r;t.default=a},961:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function l(e,t){return 0===e.indexOf(t)}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:Object(r.a)({},n);var c={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||l(n,o))||t.data&&l(n,i)||t.attr&&a.includes(n))&&(c[n]=e[n])})),c}},981:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(1015))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},982:function(e,t,n){"use strict";var r=n(9),a=n(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(51)),i=r(n(558)),l=r(n(14)),c=r(n(34)),u=r(n(116)),s=r(n(141)),d=r(n(142)),f=r(n(143)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=k(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(0)),y=r(n(25)),v=r(n(907)),h=r(n(1274)),g=r(n(559)),m=r(n(1276)),E=r(n(981)),b=r(n(1279)),O=r(n(889)),C=n(42),M=r(n(282)),P=r(n(184)),w=r(n(1282)),S=r(n(588)),x=n(573),_=r(n(890)),N=r(n(1083)),j=r(n(1283)),T=r(n(1287));function k(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(k=function(e){return e?n:t})(e)}var R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},A=(0,x.isStyleSupport)("webkitLineClamp"),D=(0,x.isStyleSupport)("textOverflow");function I(e,t,n){return!0===e||void 0===e?t:e||n&&t}var U=function(e){(0,d.default)(n,e);var t=(0,f.default)(n);function n(){var e;return(0,u.default)(this,n),(e=t.apply(this,arguments)).contentRef=p.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n,r=e.getEllipsis().onExpand;e.setState({expanded:!0}),null===(n=r)||void 0===n||n(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;null===n||void 0===n||n(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,n;null===(n=(t=e.getEditable()).onCancel)||void 0===n||n.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var n=e.props,r=n.children,a=n.copyable,o=(0,c.default)({},"object"===(0,l.default)(a)?a:null);void 0===o.text&&(o.text=String(r)),(0,h.default)(o.text||""),e.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){S.default.cancel(e.rafId),e.rafId=(0,S.default)((function(){e.syncEllipsis()}))},e}return(0,s.default)(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),S.default.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?(0,c.default)({editing:t},"object"===(0,l.default)(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?(0,c.default)({rows:1,expandable:!1},"object"===(0,l.default)(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,a=this.getEllipsis(),o=a.rows,i=a.expandable,l=a.suffix,c=a.onEllipsis,u=a.tooltip;return!l&&!u&&(!(n||r||i||!e||c)&&(1===o?D:A))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,a=this.getEllipsis(),o=a.rows,i=a.suffix,l=a.onEllipsis,c=this.props.children;if(o&&!(o<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){(0,P.default)((0,v.default)(c).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var u=(0,T.default)(this.contentRef.current,{rows:o,suffix:i},c,this.renderOperations(!0),"..."),s=u.content,d=u.text,f=u.ellipsis;t===d&&n===f||(this.setState({ellipsisText:d,ellipsisContent:s,isEllipsis:f}),n!==f&&l&&l(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,a=n.symbol,o=this.state,i=o.expanded,l=o.isEllipsis;return r&&(e||!i&&l)?(t=a||this.expandStr,p.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=(0,v.default)(n)[0]||this.editStr,a="string"===typeof r?r:"";return p.createElement(_.default,{key:"edit",title:!1===n?"":r},p.createElement(w.default,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":a},t||p.createElement(m.default,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,a=t.icon,o=Array.isArray(r)?r:[r],i=Array.isArray(a)?a:[a],l=e?I(o[1],this.copiedStr):I(o[0],this.copyStr),c=e?this.copiedStr:this.copyStr,u="string"===typeof l?l:c;return p.createElement(_.default,{key:"copy",title:l},p.createElement(w.default,{className:(0,y.default)("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":u},e?I(i[1],p.createElement(E.default,null),!0):I(i[0],p.createElement(b.default,null),!0)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.context.direction,o=this.getEditable(),i=o.maxLength,l=o.autoSize,c=o.onEnd;return p.createElement(j.default,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:c,prefixCls:this.getPrefixCls(),className:n,style:r,direction:a,maxLength:i,autoSize:l})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,r=t.isEllipsis,a=t.expanded,l=this.props,u=l.component,s=l.children,d=l.className,f=l.type,v=l.disabled,h=l.style,m=R(l,["component","children","className","type","disabled","style"]),E=this.context.direction,b=this.getEllipsis(),P=b.rows,w=b.suffix,S=b.tooltip,x=this.getPrefixCls(),j=(0,g.default)(m,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,i.default)(C.configConsumerProps))),T=this.canUseCSSEllipsis(),k=1===P&&T,A=P&&P>1&&T,D=s;if(P&&r&&!a&&!T){var I=m.title,U=I||"";I||"string"!==typeof s&&"number"!==typeof s||(U=String(s)),U=U.slice(String(n||"").length),D=p.createElement(p.Fragment,null,n,p.createElement("span",{title:U,"aria-hidden":"true"},"..."),w),S&&(D=p.createElement(_.default,{title:!0===S?s:S},p.createElement("span",null,D)))}else D=p.createElement(p.Fragment,null,s,w);return D=function(e,t){var n=e.mark,r=e.code,a=e.underline,o=e.delete,i=e.strong,l=e.keyboard,c=e.italic,u=t;function s(e,t){e&&(u=p.createElement(t,{},u))}return s(i,"strong"),s(a,"u"),s(o,"del"),s(r,"code"),s(n,"mark"),s(l,"kbd"),s(c,"i"),u}(this.props,D),p.createElement(M.default,{componentName:"Text"},(function(t){var n,r=t.edit,a=t.copy,i=t.copied,l=t.expand;return e.editStr=r,e.copyStr=a,e.copiedStr=i,e.expandStr=l,p.createElement(O.default,{onResize:e.resizeOnNextFrame,disabled:T},p.createElement(N.default,(0,c.default)({className:(0,y.default)((n={},(0,o.default)(n,"".concat(x,"-").concat(f),f),(0,o.default)(n,"".concat(x,"-disabled"),v),(0,o.default)(n,"".concat(x,"-ellipsis"),P),(0,o.default)(n,"".concat(x,"-single-line"),1===P),(0,o.default)(n,"".concat(x,"-ellipsis-single-line"),k),(0,o.default)(n,"".concat(x,"-ellipsis-multiple-line"),A),n),d),style:(0,c.default)((0,c.default)({},h),{WebkitLineClamp:A?P:void 0}),component:u,ref:e.contentRef,direction:E},j),D,e.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return(0,P.default)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(p.Component);U.contextType=C.ConfigContext,U.defaultProps={children:""};var L=U;t.default=L}}]);