var zv=Object.defineProperty;var Vv=(r,e,t)=>e in r?zv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Yt=(r,e,t)=>Vv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function _g(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Lu={exports:{}},Fo={},Du={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Hv(){if(jp)return pt;jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(I,Z,Le){this.props=I,this.context=Z,this.refs=T,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,Z){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Z,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(I,Z,Le){this.props=I,this.context=Z,this.refs=T,this.updater=Le||S}var b=D.prototype=new x;b.constructor=D,M(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(I,Z,Le){var J,ue={},Me=null,_e=null;if(Z!=null)for(J in Z.ref!==void 0&&(_e=Z.ref),Z.key!==void 0&&(Me=""+Z.key),Z)B.call(Z,J)&&!U.hasOwnProperty(J)&&(ue[J]=Z[J]);var Ce=arguments.length-2;if(Ce===1)ue.children=Le;else if(1<Ce){for(var Ue=Array(Ce),$e=0;$e<Ce;$e++)Ue[$e]=arguments[$e+2];ue.children=Ue}if(I&&I.defaultProps)for(J in Ce=I.defaultProps,Ce)ue[J]===void 0&&(ue[J]=Ce[J]);return{$$typeof:r,type:I,key:Me,ref:_e,props:ue,_owner:F.current}}function P(I,Z){return{$$typeof:r,type:I.type,key:Z,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function z(I){var Z={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Le){return Z[Le]})}var le=/\/+/g;function te(I,Z){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):Z.toString(36)}function fe(I,Z,Le,J,ue){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(Me){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case r:case e:_e=!0}}if(_e)return _e=I,ue=ue(_e),I=J===""?"."+te(_e,0):J,R(ue)?(Le="",I!=null&&(Le=I.replace(le,"$&/")+"/"),fe(ue,Z,Le,"",function($e){return $e})):ue!=null&&(C(ue)&&(ue=P(ue,Le+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(le,"$&/")+"/")+I)),Z.push(ue)),1;if(_e=0,J=J===""?".":J+":",R(I))for(var Ce=0;Ce<I.length;Ce++){Me=I[Ce];var Ue=J+te(Me,Ce);_e+=fe(Me,Z,Le,Ue,ue)}else if(Ue=v(I),typeof Ue=="function")for(I=Ue.call(I),Ce=0;!(Me=I.next()).done;)Me=Me.value,Ue=J+te(Me,Ce++),_e+=fe(Me,Z,Le,Ue,ue);else if(Me==="object")throw Z=String(I),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return _e}function he(I,Z,Le){if(I==null)return I;var J=[],ue=0;return fe(I,J,"","",function(Me){return Z.call(Le,Me,ue++)}),J}function ce(I){if(I._status===-1){var Z=I._result;Z=Z(),Z.then(function(Le){(I._status===0||I._status===-1)&&(I._status=1,I._result=Le)},function(Le){(I._status===0||I._status===-1)&&(I._status=2,I._result=Le)}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var Y={current:null},O={transition:null},oe={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:O,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:he,forEach:function(I,Z,Le){he(I,function(){Z.apply(this,arguments)},Le)},count:function(I){var Z=0;return he(I,function(){Z++}),Z},toArray:function(I){return he(I,function(Z){return Z})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},pt.Component=y,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=D,pt.StrictMode=s,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=re,pt.cloneElement=function(I,Z,Le){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var J=M({},I.props),ue=I.key,Me=I.ref,_e=I._owner;if(Z!=null){if(Z.ref!==void 0&&(Me=Z.ref,_e=F.current),Z.key!==void 0&&(ue=""+Z.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Ue in Z)B.call(Z,Ue)&&!U.hasOwnProperty(Ue)&&(J[Ue]=Z[Ue]===void 0&&Ce!==void 0?Ce[Ue]:Z[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Le;else if(1<Ue){Ce=Array(Ue);for(var $e=0;$e<Ue;$e++)Ce[$e]=arguments[$e+2];J.children=Ce}return{$$typeof:r,type:I.type,key:ue,ref:Me,props:J,_owner:_e}},pt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},pt.createElement=j,pt.createFactory=function(I){var Z=j.bind(null,I);return Z.type=I,Z},pt.createRef=function(){return{current:null}},pt.forwardRef=function(I){return{$$typeof:f,render:I}},pt.isValidElement=C,pt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ce}},pt.memo=function(I,Z){return{$$typeof:p,type:I,compare:Z===void 0?null:Z}},pt.startTransition=function(I){var Z=O.transition;O.transition={};try{I()}finally{O.transition=Z}},pt.unstable_act=re,pt.useCallback=function(I,Z){return Y.current.useCallback(I,Z)},pt.useContext=function(I){return Y.current.useContext(I)},pt.useDebugValue=function(){},pt.useDeferredValue=function(I){return Y.current.useDeferredValue(I)},pt.useEffect=function(I,Z){return Y.current.useEffect(I,Z)},pt.useId=function(){return Y.current.useId()},pt.useImperativeHandle=function(I,Z,Le){return Y.current.useImperativeHandle(I,Z,Le)},pt.useInsertionEffect=function(I,Z){return Y.current.useInsertionEffect(I,Z)},pt.useLayoutEffect=function(I,Z){return Y.current.useLayoutEffect(I,Z)},pt.useMemo=function(I,Z){return Y.current.useMemo(I,Z)},pt.useReducer=function(I,Z,Le){return Y.current.useReducer(I,Z,Le)},pt.useRef=function(I){return Y.current.useRef(I)},pt.useState=function(I){return Y.current.useState(I)},pt.useSyncExternalStore=function(I,Z,Le){return Y.current.useSyncExternalStore(I,Z,Le)},pt.useTransition=function(){return Y.current.useTransition()},pt.version="18.3.1",pt}var Yp;function ld(){return Yp||(Yp=1,Du.exports=Hv()),Du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Gv(){if(qp)return Fo;qp=1;var r=ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,g={},v=null,S=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:f,key:v,ref:S,props:g,_owner:a.current}}return Fo.Fragment=t,Fo.jsx=u,Fo.jsxs=u,Fo}var $p;function Wv(){return $p||($p=1,Lu.exports=Gv()),Lu.exports}var Q=Wv(),et=ld();const Go=_g(et);var rl={},Nu={exports:{}},Un={},Iu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Xv(){return Kp||(Kp=1,(function(r){function e(O,oe){var re=O.length;O.push(oe);e:for(;0<re;){var I=re-1>>>1,Z=O[I];if(0<a(Z,oe))O[I]=oe,O[re]=Z,re=I;else break e}}function t(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var oe=O[0],re=O.pop();if(re!==oe){O[0]=re;e:for(var I=0,Z=O.length,Le=Z>>>1;I<Le;){var J=2*(I+1)-1,ue=O[J],Me=J+1,_e=O[Me];if(0>a(ue,re))Me<Z&&0>a(_e,ue)?(O[I]=_e,O[Me]=re,I=Me):(O[I]=ue,O[J]=re,I=J);else if(Me<Z&&0>a(_e,re))O[I]=_e,O[Me]=re,I=Me;else break e}}return oe}function a(O,oe){var re=O.sortIndex-oe.sortIndex;return re!==0?re:O.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,g=null,v=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var oe=t(p);oe!==null;){if(oe.callback===null)s(p);else if(oe.startTime<=O)s(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function R(O){if(T=!1,b(O),!M)if(t(h)!==null)M=!0,ce(B);else{var oe=t(p);oe!==null&&Y(R,oe.startTime-O)}}function B(O,oe){M=!1,T&&(T=!1,x(j),j=-1),S=!0;var re=v;try{for(b(oe),g=t(h);g!==null&&(!(g.expirationTime>oe)||O&&!z());){var I=g.callback;if(typeof I=="function"){g.callback=null,v=g.priorityLevel;var Z=I(g.expirationTime<=oe);oe=r.unstable_now(),typeof Z=="function"?g.callback=Z:g===t(h)&&s(h),b(oe)}else s(h);g=t(h)}if(g!==null)var Le=!0;else{var J=t(p);J!==null&&Y(R,J.startTime-oe),Le=!1}return Le}finally{g=null,v=re,S=!1}}var F=!1,U=null,j=-1,P=5,C=-1;function z(){return!(r.unstable_now()-C<P)}function le(){if(U!==null){var O=r.unstable_now();C=O;var oe=!0;try{oe=U(!0,O)}finally{oe?te():(F=!1,U=null)}}else F=!1}var te;if(typeof D=="function")te=function(){D(le)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=le,te=function(){he.postMessage(null)}}else te=function(){y(le,0)};function ce(O){U=O,F||(F=!0,te())}function Y(O,oe){j=y(function(){O(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,ce(B))},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(O){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return O()}finally{v=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(O,oe){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var re=v;v=O;try{return oe()}finally{v=re}},r.unstable_scheduleCallback=function(O,oe,re){var I=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,O){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=re+Z,O={id:_++,callback:oe,priorityLevel:O,startTime:re,expirationTime:Z,sortIndex:-1},re>I?(O.sortIndex=re,e(p,O),t(h)===null&&O===t(p)&&(T?(x(j),j=-1):T=!0,Y(R,re-I))):(O.sortIndex=Z,e(h,O),M||S||(M=!0,ce(B))),O},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(O){var oe=v;return function(){var re=v;v=oe;try{return O.apply(this,arguments)}finally{v=re}}}})(Uu)),Uu}var Zp;function jv(){return Zp||(Zp=1,Iu.exports=Xv()),Iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Yv(){if(Qp)return Un;Qp=1;var r=ld(),e=jv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function v(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,c,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,c)&&(o=null),c||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),O=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,I;function Z(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Le=!1;function J(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,N=m.length-1;1<=E&&0<=N&&d[E]!==m[N];)N--;for(;1<=E&&0<=N;E--,N--)if(d[E]!==m[N]){if(E!==1||N!==1)do if(E--,N--,0>N||d[E]!==m[N]){var k=`
`+d[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=N);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function ue(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case j:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function wt(n){n._valueTracker||(n._valueTracker=$e(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function xn(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function dt(n,i){mt(n,i);var o=Ce(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,i,o){(i!=="number"||It(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function L(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ce(o)}}function me(n,i){var o=Ce(i.value),c=Ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Je(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Je(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,ae=null,pe=null;function Ne(n){if(n=So(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xa(i),be(n.stateNode,n.type,i))}}function De(n){ae?pe?pe.push(n):pe=[n]:ae=n}function ot(){if(ae){var n=ae,i=pe;if(pe=ae=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function Ft(n,i){return n(i)}function $t(){}var yt=!1;function Rn(n,i,o){if(yt)return n(i,o);yt=!0;try{return Ft(n,i,o)}finally{yt=!1,(ae!==null||pe!==null)&&($t(),ot())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var c=xa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var is=!1;if(f)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){is=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{is=!1}function Pi(n,i,o,c,d,m,E,N,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(xe){this.onError(xe)}}var Li=!1,Pr=null,Lr=!1,Zi=null,Jo={onError:function(n){Li=!0,Pr=n}};function rs(n,i,o,c,d,m,E,N,k){Li=!1,Pr=null,Pi.apply(Jo,arguments)}function ea(n,i,o,c,d,m,E,N,k){if(rs.apply(this,arguments),Li){if(Li){var ne=Pr;Li=!1,Pr=null}else throw Error(t(198));Lr||(Lr=!0,Zi=ne)}}function yi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(yi(n)!==n)throw Error(t(188))}function Jl(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return na(d),n;if(m===c)return na(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var E=!1,N=d.child;N;){if(N===o){E=!0,o=d,c=m;break}if(N===c){E=!0,c=d,o=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===o){E=!0,o=m,c=d;break}if(N===c){E=!0,c=m,o=d;break}N=N.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=Jl(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,W=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Te=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,xt=e.unstable_IdlePriority,At=null,vt=null;function fn(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Et,Ye=Math.log,ci=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Ye(n)/ci|0)|0}var dn=64,ui=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var N=E&~d;N!==0?c=Kt(N):(m&=E,m!==0&&(c=Kt(m)))}else E=o&~d,E!==0?c=Kt(E):m!==0&&(c=Kt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-at(i),d=1<<o,c|=n[o],i&=~d;return c}function Dt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-at(m),N=1<<E,k=d[E];k===-1?((N&o)===0||(N&c)!==0)&&(d[E]=Dt(N,i)):k<=i&&(n.expiredLanes|=N),m&=~N}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),n}function $n(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function bn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=o}function ia(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-at(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function ec(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-at(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var bt=0;function Td(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wd,tc,Ad,Cd,Rd,nc=!1,ra=[],Qi=null,Ji=null,er=null,ro=new Map,so=new Map,tr=[],l_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bd(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(i.pointerId)}}function oo(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=So(i),i!==null&&tc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function c_(n,i,o,c,d){switch(i){case"focusin":return Qi=oo(Qi,n,i,o,c,d),!0;case"dragenter":return Ji=oo(Ji,n,i,o,c,d),!0;case"mouseover":return er=oo(er,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return ro.set(m,oo(ro.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,so.set(m,oo(so.get(m)||null,n,i,o,c,d)),!0}return!1}function Pd(n){var i=Dr(n.target);if(i!==null){var o=yi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,Rd(n.priority,function(){Ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ct=c,o.target.dispatchEvent(c),Ct=null}else return i=So(o),i!==null&&tc(i),n.blockedOn=o,!1;i.shift()}return!0}function Ld(n,i,o){sa(n)&&o.delete(i)}function u_(){nc=!1,Qi!==null&&sa(Qi)&&(Qi=null),Ji!==null&&sa(Ji)&&(Ji=null),er!==null&&sa(er)&&(er=null),ro.forEach(Ld),so.forEach(Ld)}function ao(n,i){n.blockedOn===i&&(n.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,u_)))}function lo(n){function i(d){return ao(d,n)}if(0<ra.length){ao(ra[0],n);for(var o=1;o<ra.length;o++){var c=ra[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&ao(Qi,n),Ji!==null&&ao(Ji,n),er!==null&&ao(er,n),ro.forEach(i),so.forEach(i),o=0;o<tr.length;o++)c=tr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)Pd(o),o.blockedOn===null&&tr.shift()}var ss=R.ReactCurrentBatchConfig,oa=!0;function f_(n,i,o,c){var d=bt,m=ss.transition;ss.transition=null;try{bt=1,ic(n,i,o,c)}finally{bt=d,ss.transition=m}}function d_(n,i,o,c){var d=bt,m=ss.transition;ss.transition=null;try{bt=4,ic(n,i,o,c)}finally{bt=d,ss.transition=m}}function ic(n,i,o,c){if(oa){var d=rc(n,i,o,c);if(d===null)Sc(n,i,c,aa,o),bd(n,c);else if(c_(d,n,i,o,c))c.stopPropagation();else if(bd(n,c),i&4&&-1<l_.indexOf(n)){for(;d!==null;){var m=So(d);if(m!==null&&wd(m),m=rc(n,i,o,c),m===null&&Sc(n,i,c,aa,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Sc(n,i,c,null,o)}}var aa=null;function rc(n,i,o,c){if(aa=null,n=H(c),n=Dr(n),n!==null)if(i=yi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return aa=n,null}function Dd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case nt:return 4;case rt:case Xe:return 16;case xt:return 536870912;default:return 16}default:return 16}}var nr=null,sc=null,la=null;function Nd(){if(la)return la;var n,i=sc,o=i.length,c,d="value"in nr?nr.value:nr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===d[m-c];c++);return la=d.slice(n,1<c?1-c:void 0)}function ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function Id(){return!1}function zn(n){function i(o,c,d,m,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ua:Id,this.isPropagationStopped=Id,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=zn(os),co=re({},os,{view:0,detail:0}),h_=zn(co),ac,lc,uo,fa=re({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==uo&&(uo&&n.type==="mousemove"?(ac=n.screenX-uo.screenX,lc=n.screenY-uo.screenY):lc=ac=0,uo=n),ac)},movementY:function(n){return"movementY"in n?n.movementY:lc}}),Ud=zn(fa),p_=re({},fa,{dataTransfer:0}),m_=zn(p_),g_=re({},co,{relatedTarget:0}),cc=zn(g_),__=re({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),v_=zn(__),x_=re({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y_=zn(x_),S_=re({},os,{data:0}),Fd=zn(S_),M_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=T_[n])?!!i[n]:!1}function uc(){return w_}var A_=re({},co,{key:function(n){if(n.key){var i=M_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?E_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(n){return n.type==="keypress"?ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C_=zn(A_),R_=re({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=zn(R_),b_=re({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),P_=zn(b_),L_=re({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=zn(L_),N_=re({},fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),I_=zn(N_),U_=[9,13,27,32],fc=f&&"CompositionEvent"in window,fo=null;f&&"documentMode"in document&&(fo=document.documentMode);var F_=f&&"TextEvent"in window&&!fo,kd=f&&(!fc||fo&&8<fo&&11>=fo),Bd=" ",zd=!1;function Vd(n,i){switch(n){case"keyup":return U_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function O_(n,i){switch(n){case"compositionend":return Hd(i);case"keypress":return i.which!==32?null:(zd=!0,Bd);case"textInput":return n=i.data,n===Bd&&zd?null:n;default:return null}}function k_(n,i){if(as)return n==="compositionend"||!fc&&Vd(n,i)?(n=Nd(),la=sc=nr=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kd&&i.locale!=="ko"?null:i.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!B_[n.type]:i==="textarea"}function Wd(n,i,o,c){De(c),i=ga(i,"onChange"),0<i.length&&(o=new oc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ho=null,po=null;function z_(n){lh(n,0)}function da(n){var i=ds(n);if(_t(i))return n}function V_(n,i){if(n==="change")return i}var Xd=!1;if(f){var dc;if(f){var hc="oninput"in document;if(!hc){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),hc=typeof jd.oninput=="function"}dc=hc}else dc=!1;Xd=dc&&(!document.documentMode||9<document.documentMode)}function Yd(){ho&&(ho.detachEvent("onpropertychange",qd),po=ho=null)}function qd(n){if(n.propertyName==="value"&&da(po)){var i=[];Wd(i,po,n,H(n)),Rn(z_,i)}}function H_(n,i,o){n==="focusin"?(Yd(),ho=i,po=o,ho.attachEvent("onpropertychange",qd)):n==="focusout"&&Yd()}function G_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return da(po)}function W_(n,i){if(n==="click")return da(i)}function X_(n,i){if(n==="input"||n==="change")return da(i)}function j_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:j_;function mo(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!fi(n[d],i[d]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,i){var o=$d(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$d(o)}}function Zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=It();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=It(n.document)}return i}function pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Y_(n){var i=Qd(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Zd(o.ownerDocument.documentElement,o)){if(c!==null&&pc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Kd(o,m);var E=Kd(o,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var q_=f&&"documentMode"in document&&11>=document.documentMode,ls=null,mc=null,go=null,gc=!1;function Jd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gc||ls==null||ls!==It(c)||(c=ls,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),go&&mo(go,c)||(go=c,c=ga(mc,"onSelect"),0<c.length&&(i=new oc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ls)))}function ha(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var cs={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},_c={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function pa(n){if(_c[n])return _c[n];if(!cs[n])return n;var i=cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in eh)return _c[n]=i[o];return n}var th=pa("animationend"),nh=pa("animationiteration"),ih=pa("animationstart"),rh=pa("transitionend"),sh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){sh.set(n,i),l(i,[n])}for(var vc=0;vc<oh.length;vc++){var xc=oh[vc],$_=xc.toLowerCase(),K_=xc[0].toUpperCase()+xc.slice(1);ir($_,"on"+K_)}ir(th,"onAnimationEnd"),ir(nh,"onAnimationIteration"),ir(ih,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function ah(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ea(c,i,void 0,n),n.currentTarget=null}function lh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var N=c[E],k=N.instance,ne=N.currentTarget;if(N=N.listener,k!==m&&d.isPropagationStopped())break e;ah(d,N,ne),m=k}else for(E=0;E<c.length;E++){if(N=c[E],k=N.instance,ne=N.currentTarget,N=N.listener,k!==m&&d.isPropagationStopped())break e;ah(d,N,ne),m=k}}}if(Lr)throw n=Zi,Lr=!1,Zi=null,n}function Ot(n,i){var o=i[Cc];o===void 0&&(o=i[Cc]=new Set);var c=n+"__bubble";o.has(c)||(ch(i,n,2,!1),o.add(c))}function yc(n,i,o){var c=0;i&&(c|=4),ch(o,n,c,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function vo(n){if(!n[ma]){n[ma]=!0,s.forEach(function(o){o!=="selectionchange"&&(Z_.has(o)||yc(o,!1,n),yc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ma]||(i[ma]=!0,yc("selectionchange",!1,i))}}function ch(n,i,o,c){switch(Dd(i)){case 1:var d=f_;break;case 4:d=d_;break;default:d=ic}o=d.bind(null,i,o,n),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Sc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var N=c.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;N!==null;){if(E=Dr(N),E===null)return;if(k=E.tag,k===5||k===6){c=m=E;continue e}N=N.parentNode}}c=c.return}Rn(function(){var ne=m,xe=H(o),Se=[];e:{var ge=sh.get(n);if(ge!==void 0){var Ie=oc,ze=n;switch(n){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Ie=C_;break;case"focusin":ze="focus",Ie=cc;break;case"focusout":ze="blur",Ie=cc;break;case"beforeblur":case"afterblur":Ie=cc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=m_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=P_;break;case th:case nh:case ih:Ie=v_;break;case rh:Ie=D_;break;case"scroll":Ie=h_;break;case"wheel":Ie=I_;break;case"copy":case"cut":case"paste":Ie=y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Od}var He=(i&4)!==0,Xt=!He&&n==="scroll",q=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ne,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=yn(V,q),we!=null&&He.push(xo(V,we,K)))),Xt)break;V=V.return}0<He.length&&(ge=new Ie(ge,ze,null,o,xe),Se.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&o!==Ct&&(ze=o.relatedTarget||o.fromElement)&&(Dr(ze)||ze[Ni]))break e;if((Ie||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=o.relatedTarget||o.toElement,Ie=ne,ze=ze?Dr(ze):null,ze!==null&&(Xt=yi(ze),ze!==Xt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ne),Ie!==ze)){if(He=Ud,we="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=Od,we="onPointerLeave",q="onPointerEnter",V="pointer"),Xt=Ie==null?ge:ds(Ie),K=ze==null?ge:ds(ze),ge=new He(we,V+"leave",Ie,o,xe),ge.target=Xt,ge.relatedTarget=K,we=null,Dr(xe)===ne&&(He=new He(q,V+"enter",ze,o,xe),He.target=K,He.relatedTarget=Xt,we=He),Xt=we,Ie&&ze)t:{for(He=Ie,q=ze,V=0,K=He;K;K=us(K))V++;for(K=0,we=q;we;we=us(we))K++;for(;0<V-K;)He=us(He),V--;for(;0<K-V;)q=us(q),K--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=us(He),q=us(q)}He=null}else He=null;Ie!==null&&uh(Se,ge,Ie,He,!1),ze!==null&&Xt!==null&&uh(Se,Xt,ze,He,!0)}}e:{if(ge=ne?ds(ne):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=V_;else if(Gd(ge))if(Xd)je=X_;else{je=G_;var Ze=H_}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=W_);if(je&&(je=je(n,ne))){Wd(Se,je,o,xe);break e}Ze&&Ze(n,ge,ne),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ze=ne?ds(ne):window,n){case"focusin":(Gd(Ze)||Ze.contentEditable==="true")&&(ls=Ze,mc=ne,go=null);break;case"focusout":go=mc=ls=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Jd(Se,o,xe);break;case"selectionchange":if(q_)break;case"keydown":case"keyup":Jd(Se,o,xe)}var Qe;if(fc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else as?Vd(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(kd&&o.locale!=="ko"&&(as||it!=="onCompositionStart"?it==="onCompositionEnd"&&as&&(Qe=Nd()):(nr=xe,sc="value"in nr?nr.value:nr.textContent,as=!0)),Ze=ga(ne,it),0<Ze.length&&(it=new Fd(it,n,null,o,xe),Se.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=Hd(o),Qe!==null&&(it.data=Qe)))),(Qe=F_?O_(n,o):k_(n,o))&&(ne=ga(ne,"onBeforeInput"),0<ne.length&&(xe=new Fd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:ne}),xe.data=Qe))}lh(Se,i)})}function xo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ga(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,o),m!=null&&c.unshift(xo(n,m,d)),m=yn(n,i),m!=null&&c.push(xo(n,m,d))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uh(n,i,o,c,d){for(var m=i._reactName,E=[];o!==null&&o!==c;){var N=o,k=N.alternate,ne=N.stateNode;if(k!==null&&k===c)break;N.tag===5&&ne!==null&&(N=ne,d?(k=yn(o,m),k!=null&&E.unshift(xo(o,k,N))):d||(k=yn(o,m),k!=null&&E.push(xo(o,k,N)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Q_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function fh(n){return(typeof n=="string"?n:""+n).replace(Q_,`
`).replace(J_,"")}function _a(n,i,o){if(i=fh(i),fh(n)!==i&&o)throw Error(t(425))}function va(){}var Mc=null,Ec=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(n){return dh.resolve(null).then(n).catch(nv)}:wc;function nv(n){setTimeout(function(){throw n})}function Ac(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),lo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);lo(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+fs,yo="__reactProps$"+fs,Ni="__reactContainer$"+fs,Cc="__reactEvents$"+fs,iv="__reactListeners$"+fs,rv="__reactHandles$"+fs;function Dr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=hh(n);n!==null;){if(o=n[Mi])return o;n=hh(n)}return i}n=o,o=n.parentNode}return null}function So(n){return n=n[Mi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xa(n){return n[yo]||null}var Rc=[],hs=-1;function sr(n){return{current:n}}function kt(n){0>hs||(n.current=Rc[hs],Rc[hs]=null,hs--)}function Ut(n,i){hs++,Rc[hs]=n.current,n.current=i}var or={},hn=sr(or),Pn=sr(!1),Nr=or;function ps(n,i){var o=n.type.contextTypes;if(!o)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(n){return n=n.childContextTypes,n!=null}function ya(){kt(Pn),kt(hn)}function ph(n,i,o){if(hn.current!==or)throw Error(t(168));Ut(hn,i),Ut(Pn,o)}function mh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return re({},o,c)}function Sa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Nr=hn.current,Ut(hn,n),Ut(Pn,Pn.current),!0}function gh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=mh(n,i,Nr),c.__reactInternalMemoizedMergedChildContext=n,kt(Pn),kt(hn),Ut(hn,n)):kt(Pn),Ut(Pn,o)}var Ii=null,Ma=!1,bc=!1;function _h(n){Ii===null?Ii=[n]:Ii.push(n)}function sv(n){Ma=!0,_h(n)}function ar(){if(!bc&&Ii!==null){bc=!0;var n=0,i=bt;try{var o=Ii;for(bt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ii=null,Ma=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(n+1)),ie(Ve,ar),d}finally{bt=i,bc=!1}}return null}var ms=[],gs=0,Ea=null,Ta=0,Kn=[],Zn=0,Ir=null,Ui=1,Fi="";function Ur(n,i){ms[gs++]=Ta,ms[gs++]=Ea,Ea=n,Ta=i}function vh(n,i,o){Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ir,Ir=n;var c=Ui;n=Fi;var d=32-at(c)-1;c&=~(1<<d),o+=1;var m=32-at(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Ui=1<<32-at(i)+d|o<<d|c,Fi=m+n}else Ui=1<<m|o<<d|c,Fi=n}function Pc(n){n.return!==null&&(Ur(n,1),vh(n,1,0))}function Lc(n){for(;n===Ea;)Ea=ms[--gs],ms[gs]=null,Ta=ms[--gs],ms[gs]=null;for(;n===Ir;)Ir=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null,Ui=Kn[--Zn],Kn[Zn]=null}var Vn=null,Hn=null,zt=!1,di=null;function xh(n,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function yh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ir!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Hn=null,!0):!1;default:return!1}}function Dc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nc(n){if(zt){var i=Hn;if(i){var o=i;if(!yh(n,i)){if(Dc(n))throw Error(t(418));i=rr(o.nextSibling);var c=Vn;i&&yh(n,i)?xh(c,o):(n.flags=n.flags&-4097|2,zt=!1,Vn=n)}}else{if(Dc(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Vn=n}}}function Sh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function wa(n){if(n!==Vn)return!1;if(!zt)return Sh(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=Hn)){if(Dc(n))throw Mh(),Error(t(418));for(;i;)xh(n,i),i=rr(i.nextSibling)}if(Sh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Hn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Vn?rr(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=Hn;n;)n=rr(n.nextSibling)}function _s(){Hn=Vn=null,zt=!1}function Ic(n){di===null?di=[n]:di.push(n)}var ov=R.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var N=d.refs;E===null?delete N[m]:N[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Aa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Eh(n){var i=n._init;return i(n._payload)}function Th(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function c(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function d(q,V){return q=mr(q,V),q.index=0,q.sibling=null,q}function m(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,V,K,we){return V===null||V.tag!==6?(V=wu(K,q.mode,we),V.return=q,V):(V=d(V,K),V.return=q,V)}function k(q,V,K,we){var je=K.type;return je===U?xe(q,V,K.props.children,we,K.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Eh(je)===V.type)?(we=d(V,K.props),we.ref=Mo(q,V,K),we.return=q,we):(we=Ka(K.type,K.key,K.props,null,q.mode,we),we.ref=Mo(q,V,K),we.return=q,we)}function ne(q,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Au(K,q.mode,we),V.return=q,V):(V=d(V,K.children||[]),V.return=q,V)}function xe(q,V,K,we,je){return V===null||V.tag!==7?(V=Gr(K,q.mode,we,je),V.return=q,V):(V=d(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=wu(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case B:return K=Ka(V.type,V.key,V.props,null,q.mode,K),K.ref=Mo(q,null,V),K.return=q,K;case F:return V=Au(V,q.mode,K),V.return=q,V;case ce:var we=V._init;return Se(q,we(V._payload),K)}if(qe(V)||oe(V))return V=Gr(V,q.mode,K,null),V.return=q,V;Aa(q,V)}return null}function ge(q,V,K,we){var je=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:N(q,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case B:return K.key===je?k(q,V,K,we):null;case F:return K.key===je?ne(q,V,K,we):null;case ce:return je=K._init,ge(q,V,je(K._payload),we)}if(qe(K)||oe(K))return je!==null?null:xe(q,V,K,we,null);Aa(q,K)}return null}function Ie(q,V,K,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,N(V,q,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case B:return q=q.get(we.key===null?K:we.key)||null,k(V,q,we,je);case F:return q=q.get(we.key===null?K:we.key)||null,ne(V,q,we,je);case ce:var Ze=we._init;return Ie(q,V,K,Ze(we._payload),je)}if(qe(we)||oe(we))return q=q.get(K)||null,xe(V,q,we,je,null);Aa(V,we)}return null}function ze(q,V,K,we){for(var je=null,Ze=null,Qe=V,it=V=0,sn=null;Qe!==null&&it<K.length;it++){Qe.index>it?(sn=Qe,Qe=null):sn=Qe.sibling;var Tt=ge(q,Qe,K[it],we);if(Tt===null){Qe===null&&(Qe=sn);break}n&&Qe&&Tt.alternate===null&&i(q,Qe),V=m(Tt,V,it),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt,Qe=sn}if(it===K.length)return o(q,Qe),zt&&Ur(q,it),je;if(Qe===null){for(;it<K.length;it++)Qe=Se(q,K[it],we),Qe!==null&&(V=m(Qe,V,it),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&Ur(q,it),je}for(Qe=c(q,Qe);it<K.length;it++)sn=Ie(Qe,q,it,K[it],we),sn!==null&&(n&&sn.alternate!==null&&Qe.delete(sn.key===null?it:sn.key),V=m(sn,V,it),Ze===null?je=sn:Ze.sibling=sn,Ze=sn);return n&&Qe.forEach(function(gr){return i(q,gr)}),zt&&Ur(q,it),je}function He(q,V,K,we){var je=oe(K);if(typeof je!="function")throw Error(t(150));if(K=je.call(K),K==null)throw Error(t(151));for(var Ze=je=null,Qe=V,it=V=0,sn=null,Tt=K.next();Qe!==null&&!Tt.done;it++,Tt=K.next()){Qe.index>it?(sn=Qe,Qe=null):sn=Qe.sibling;var gr=ge(q,Qe,Tt.value,we);if(gr===null){Qe===null&&(Qe=sn);break}n&&Qe&&gr.alternate===null&&i(q,Qe),V=m(gr,V,it),Ze===null?je=gr:Ze.sibling=gr,Ze=gr,Qe=sn}if(Tt.done)return o(q,Qe),zt&&Ur(q,it),je;if(Qe===null){for(;!Tt.done;it++,Tt=K.next())Tt=Se(q,Tt.value,we),Tt!==null&&(V=m(Tt,V,it),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return zt&&Ur(q,it),je}for(Qe=c(q,Qe);!Tt.done;it++,Tt=K.next())Tt=Ie(Qe,q,it,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),V=m(Tt,V,it),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return n&&Qe.forEach(function(Bv){return i(q,Bv)}),zt&&Ur(q,it),je}function Xt(q,V,K,we){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case B:e:{for(var je=K.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=K.type,je===U){if(Ze.tag===7){o(q,Ze.sibling),V=d(Ze,K.props.children),V.return=q,q=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ce&&Eh(je)===Ze.type){o(q,Ze.sibling),V=d(Ze,K.props),V.ref=Mo(q,Ze,K),V.return=q,q=V;break e}o(q,Ze);break}else i(q,Ze);Ze=Ze.sibling}K.type===U?(V=Gr(K.props.children,q.mode,we,K.key),V.return=q,q=V):(we=Ka(K.type,K.key,K.props,null,q.mode,we),we.ref=Mo(q,V,K),we.return=q,q=we)}return E(q);case F:e:{for(Ze=K.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=d(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=Au(K,q.mode,we),V.return=q,q=V}return E(q);case ce:return Ze=K._init,Xt(q,V,Ze(K._payload),we)}if(qe(K))return ze(q,V,K,we);if(oe(K))return He(q,V,K,we);Aa(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=d(V,K),V.return=q,q=V):(o(q,V),V=wu(K,q.mode,we),V.return=q,q=V),E(q)):o(q,V)}return Xt}var vs=Th(!0),wh=Th(!1),Ca=sr(null),Ra=null,xs=null,Uc=null;function Fc(){Uc=xs=Ra=null}function Oc(n){var i=Ca.current;kt(Ca),n._currentValue=i}function kc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function ys(n,i){Ra=n,Uc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Uc!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ra===null)throw Error(t(308));xs=n,Ra.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Fr=null;function Bc(n){Fr===null?Fr=[n]:Fr.push(n)}function Ah(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Bc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Oi(n,c)}function Oi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Oi(n,o)}return d=c.interleaved,d===null?(i.next=i,Bc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Oi(n,o)}function ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ec(n,o)}}function Rh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Pa(n,i,o,c){var d=n.updateQueue;lr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var k=N,ne=k.next;k.next=null,E===null?m=ne:E.next=ne,E=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==E&&(N===null?xe.firstBaseUpdate=ne:N.next=ne,xe.lastBaseUpdate=k))}if(m!==null){var Se=d.baseState;E=0,xe=ne=k=null,N=m;do{var ge=N.lane,Ie=N.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ze=n,He=N;switch(ge=i,Ie=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){Se=ze.call(Ie,Se,ge);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(Ie,Se,ge):ze,ge==null)break e;Se=re({},Se,ge);break e;case 2:lr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[N]:ge.push(N))}else Ie={eventTime:Ie,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(ne=xe=Ie,k=Se):xe=xe.next=Ie,E|=ge;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(k=Se),d.baseState=k,d.firstBaseUpdate=ne,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Br|=E,n.lanes=E,n.memoizedState=Se}}function bh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Eo={},Ei=sr(Eo),To=sr(Eo),wo=sr(Eo);function Or(n){if(n===Eo)throw Error(t(174));return n}function Vc(n,i){switch(Ut(wo,i),Ut(To,n),Ut(Ei,Eo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}kt(Ei),Ut(Ei,i)}function Ss(){kt(Ei),kt(To),kt(wo)}function Ph(n){Or(wo.current);var i=Or(Ei.current),o=Ge(i,n.type);i!==o&&(Ut(To,n),Ut(Ei,o))}function Hc(n){To.current===n&&(kt(Ei),kt(To))}var Vt=sr(0);function La(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Wc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var Da=R.ReactCurrentDispatcher,Xc=R.ReactCurrentBatchConfig,kr=0,Ht=null,Zt=null,nn=null,Na=!1,Ao=!1,Co=0,av=0;function pn(){throw Error(t(321))}function jc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!fi(n[o],i[o]))return!1;return!0}function Yc(n,i,o,c,d,m){if(kr=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=n===null||n.memoizedState===null?fv:dv,n=o(c,d),Ao){m=0;do{if(Ao=!1,Co=0,25<=m)throw Error(t(301));m+=1,nn=Zt=null,i.updateQueue=null,Da.current=hv,n=o(c,d)}while(Ao)}if(Da.current=Fa,i=Zt!==null&&Zt.next!==null,kr=0,nn=Zt=Ht=null,Na=!1,i)throw Error(t(300));return n}function qc(){var n=Co!==0;return Co=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ht.memoizedState=nn=n:nn=nn.next=n,nn}function Jn(){if(Zt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=nn===null?Ht.memoizedState:nn.next;if(i!==null)nn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},nn===null?Ht.memoizedState=nn=n:nn=nn.next=n}return nn}function Ro(n,i){return typeof i=="function"?i(n):i}function $c(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Zt,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var N=E=null,k=null,ne=m;do{var xe=ne.lane;if((kr&xe)===xe)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var Se={lane:xe,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(N=k=Se,E=c):k=k.next=Se,Ht.lanes|=xe,Br|=xe}ne=ne.next}while(ne!==null&&ne!==m);k===null?E=c:k.next=N,fi(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=k,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Ht.lanes|=m,Br|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Kc(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);fi(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Lh(){}function Dh(n,i){var o=Ht,c=Jn(),d=i(),m=!fi(c.memoizedState,d);if(m&&(c.memoizedState=d,Dn=!0),c=c.queue,Zc(Uh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Ih.bind(null,o,c,d,i),void 0,null),rn===null)throw Error(t(349));(kr&30)!==0||Nh(o,i,d)}return d}function Nh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ih(n,i,o,c){i.value=o,i.getSnapshot=c,Fh(i)&&Oh(n)}function Uh(n,i,o){return o(function(){Fh(i)&&Oh(n)})}function Fh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!fi(n,o)}catch{return!0}}function Oh(n){var i=Oi(n,1);i!==null&&gi(i,n,1,-1)}function kh(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},i.queue=n,n=n.dispatch=uv.bind(null,Ht,n),[i.memoizedState,n]}function bo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Bh(){return Jn().memoizedState}function Ia(n,i,o,c){var d=Ti();Ht.flags|=n,d.memoizedState=bo(1|i,o,void 0,c===void 0?null:c)}function Ua(n,i,o,c){var d=Jn();c=c===void 0?null:c;var m=void 0;if(Zt!==null){var E=Zt.memoizedState;if(m=E.destroy,c!==null&&jc(c,E.deps)){d.memoizedState=bo(i,o,m,c);return}}Ht.flags|=n,d.memoizedState=bo(1|i,o,m,c)}function zh(n,i){return Ia(8390656,8,n,i)}function Zc(n,i){return Ua(2048,8,n,i)}function Vh(n,i){return Ua(4,2,n,i)}function Hh(n,i){return Ua(4,4,n,i)}function Gh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wh(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4,4,Gh.bind(null,i,n),o)}function Qc(){}function Xh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function jh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Yh(n,i,o){return(kr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=o):(fi(o,i)||(o=Sn(),Ht.lanes|=o,Br|=o,n.baseState=!0),i)}function lv(n,i){var o=bt;bt=o!==0&&4>o?o:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{bt=o,Xc.transition=c}}function qh(){return Jn().memoizedState}function cv(n,i,o){var c=hr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},$h(n))Kh(i,o);else if(o=Ah(n,i,o,c),o!==null){var d=En();gi(o,n,c,d),Zh(o,i,c)}}function uv(n,i,o){var c=hr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if($h(n))Kh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,o);if(d.hasEagerState=!0,d.eagerState=N,fi(N,E)){var k=i.interleaved;k===null?(d.next=d,Bc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Ah(n,i,d,c),o!==null&&(d=En(),gi(o,n,c,d),Zh(o,i,c))}}function $h(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Kh(n,i){Ao=Na=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Zh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ec(n,o)}}var Fa={readContext:Qn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},fv={readContext:Qn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:zh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ia(4194308,4,Gh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ia(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ia(4,2,n,i)},useMemo:function(n,i){var o=Ti();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ti();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=cv.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:kh,useDebugValue:Qc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=kh(!1),i=n[0];return n=lv.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,d=Ti();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));(kr&30)!==0||Nh(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,zh(Uh.bind(null,c,m,n),[n]),c.flags|=2048,bo(9,Ih.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ti(),i=rn.identifierPrefix;if(zt){var o=Fi,c=Ui;o=(c&~(1<<32-at(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=av++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},dv={readContext:Qn,useCallback:Xh,useContext:Qn,useEffect:Zc,useImperativeHandle:Wh,useInsertionEffect:Vh,useLayoutEffect:Hh,useMemo:jh,useReducer:$c,useRef:Bh,useState:function(){return $c(Ro)},useDebugValue:Qc,useDeferredValue:function(n){var i=Jn();return Yh(i,Zt.memoizedState,n)},useTransition:function(){var n=$c(Ro)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1},hv={readContext:Qn,useCallback:Xh,useContext:Qn,useEffect:Zc,useImperativeHandle:Wh,useInsertionEffect:Vh,useLayoutEffect:Hh,useMemo:jh,useReducer:Kc,useRef:Bh,useState:function(){return Kc(Ro)},useDebugValue:Qc,useDeferredValue:function(n){var i=Jn();return Zt===null?i.memoizedState=n:Yh(i,Zt.memoizedState,n)},useTransition:function(){var n=Kc(Ro)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Jc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Oa={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=En(),d=hr(n),m=ki(c,d);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(gi(i,n,d,c),ba(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=En(),d=hr(n),m=ki(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,d),i!==null&&(gi(i,n,d,c),ba(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),c=hr(n),d=ki(o,c);d.tag=2,i!=null&&(d.callback=i),i=cr(n,d,c),i!==null&&(gi(i,n,c,o),ba(i,n,c))}};function Qh(n,i,o,c,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!mo(o,c)||!mo(d,m):!0}function Jh(n,i,o){var c=!1,d=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(d=Ln(i)?Nr:hn.current,c=i.contextTypes,m=(c=c!=null)?ps(n,d):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ep(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Oa.enqueueReplaceState(i,i.state,null)}function eu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},zc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Qn(m):(m=Ln(i)?Nr:hn.current,d.context=ps(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Jc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Oa.enqueueReplaceState(d,d.state,null),Pa(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,i){try{var o="",c=i;do o+=ue(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function tu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function nu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function tp(n,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Wa||(Wa=!0,_u=c),nu(n,i)},o}function np(n,i,o){o=ki(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){nu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){nu(n,i),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function ip(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new pv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=Rv.bind(null,n,i,o),i.then(n,n))}function rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function sp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var mv=R.ReactCurrentOwner,Dn=!1;function Mn(n,i,o,c){i.child=n===null?wh(i,null,o,c):vs(i,n.child,o,c)}function op(n,i,o,c,d){o=o.render;var m=i.ref;return ys(i,d),c=Yc(n,i,o,c,m,d),o=qc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Bi(n,i,d)):(zt&&o&&Pc(i),i.flags|=1,Mn(n,i,c,d),i.child)}function ap(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Tu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,lp(n,i,m,c,d)):(n=Ka(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(E,c)&&n.ref===i.ref)return Bi(n,i,d)}return i.flags|=1,n=mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function lp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(mo(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Bi(n,i,d)}return iu(n,i,o,c,d)}function cp(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ts,Gn),Gn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ts,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(Ts,Gn),Gn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(Ts,Gn),Gn|=c;return Mn(n,i,d,o),i.child}function up(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function iu(n,i,o,c,d){var m=Ln(o)?Nr:hn.current;return m=ps(i,m),ys(i,d),o=Yc(n,i,o,c,m,d),c=qc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Bi(n,i,d)):(zt&&c&&Pc(i),i.flags|=1,Mn(n,i,o,d),i.child)}function fp(n,i,o,c,d){if(Ln(o)){var m=!0;Sa(i)}else m=!1;if(ys(i,d),i.stateNode===null)Ba(n,i),Jh(i,o,c),eu(i,o,c,d),c=!0;else if(n===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var k=E.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Qn(ne):(ne=Ln(o)?Nr:hn.current,ne=ps(i,ne));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==c||k!==ne)&&ep(i,E,c,ne),lr=!1;var ge=i.memoizedState;E.state=ge,Pa(i,c,E,d),k=i.memoizedState,N!==c||ge!==k||Pn.current||lr?(typeof xe=="function"&&(Jc(i,o,xe,c),k=i.memoizedState),(N=lr||Qh(i,o,N,c,ge,k,ne))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),E.props=c,E.state=k,E.context=ne,c=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Ch(n,i),N=i.memoizedProps,ne=i.type===i.elementType?N:hi(i.type,N),E.props=ne,Se=i.pendingProps,ge=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=Qn(k):(k=Ln(o)?Nr:hn.current,k=ps(i,k));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Se||ge!==k)&&ep(i,E,c,k),lr=!1,ge=i.memoizedState,E.state=ge,Pa(i,c,E,d);var ze=i.memoizedState;N!==Se||ge!==ze||Pn.current||lr?(typeof Ie=="function"&&(Jc(i,o,Ie,c),ze=i.memoizedState),(ne=lr||Qh(i,o,ne,c,ge,ze,k)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),E.props=c,E.state=ze,E.context=k,c=ne):(typeof E.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return ru(n,i,o,c,m,d)}function ru(n,i,o,c,d,m){up(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&gh(i,o,!1),Bi(n,i,m);c=i.stateNode,mv.current=i;var N=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,N,m)):Mn(n,i,N,m),i.memoizedState=c.state,d&&gh(i,o,!0),i.child}function dp(n){var i=n.stateNode;i.pendingContext?ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(n,i.context,!1),Vc(n,i.containerInfo)}function hp(n,i,o,c,d){return _s(),Ic(d),i.flags|=256,Mn(n,i,o,c),i.child}var su={dehydrated:null,treeContext:null,retryLane:0};function ou(n){return{baseLanes:n,cachePool:null,transitions:null}}function pp(n,i,o){var c=i.pendingProps,d=Vt.current,m=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ut(Vt,d&1),n===null)return Nc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Za(E,c,0,null),n=Gr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ou(o),i.memoizedState=su,n):au(i,E));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return gv(n,i,E,c,N,d,o);if(m){m=c.fallback,E=i.mode,d=n.child,N=d.sibling;var k={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=mr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),N!==null?m=mr(N,m):(m=Gr(m,E,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?ou(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=su,c}return m=n.child,n=m.sibling,c=mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function au(n,i){return i=Za({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ka(n,i,o,c){return c!==null&&Ic(c),vs(i,n.child,null,o),n=au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function gv(n,i,o,c,d,m,E){if(o)return i.flags&256?(i.flags&=-257,c=tu(Error(t(422))),ka(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Za({mode:"visible",children:c.children},d,0,null),m=Gr(m,d,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,E),i.child.memoizedState=ou(E),i.memoizedState=su,m);if((i.mode&1)===0)return ka(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=tu(m,c,void 0),ka(n,i,E,c)}if(N=(E&n.childLanes)!==0,Dn||N){if(c=rn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Oi(n,d),gi(c,n,d,-1))}return Eu(),c=tu(Error(t(421))),ka(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=bv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Hn=rr(d.nextSibling),Vn=i,zt=!0,di=null,n!==null&&(Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ir,Ui=n.id,Fi=n.overflow,Ir=i),i=au(i,c.children),i.flags|=4096,i)}function mp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),kc(n.return,i,o)}function lu(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function gp(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,o,i);else if(n.tag===19)mp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&La(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),lu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&La(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}lu(i,!0,o,null,m);break;case"together":lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function _v(n,i,o){switch(i.tag){case 3:dp(i),_s();break;case 5:Ph(i);break;case 1:Ln(i.type)&&Sa(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ut(Ca,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?pp(n,i,o):(Ut(Vt,Vt.current&1),n=Bi(n,i,o),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return gp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ut(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,o)}return Bi(n,i,o)}var _p,cu,vp,xp;_p=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},cu=function(){},vp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Or(Ei.current);var m=null;switch(o){case"input":d=X(n,d),c=X(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=w(n,d),c=w(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=va)}ht(o,c);var E;o=null;for(ne in d)if(!c.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var N=d[ne];for(E in N)N.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var k=c[ne];if(N=d!=null?d[ne]:void 0,c.hasOwnProperty(ne)&&k!==N&&(k!=null||N!=null))if(ne==="style")if(N){for(E in N)!N.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&N[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(m||(m=[]),m.push(ne,o)),o=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(m=m||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&Ot("scroll",n),m||N===k||(m=[])):(m=m||[]).push(ne,k))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},xp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Po(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function vv(n,i,o){var c=i.pendingProps;switch(Lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Ln(i.type)&&ya(),mn(i),null;case 3:return c=i.stateNode,Ss(),kt(Pn),kt(hn),Wc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(wa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(yu(di),di=null))),cu(n,i),mn(i),null;case 5:Hc(i);var d=Or(wo.current);if(o=i.type,n!==null&&i.stateNode!=null)vp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Or(Ei.current),wa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Mi]=i,c[yo]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(d=0;d<_o.length;d++)Ot(_o[d],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":xn(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":ee(c,m),Ot("invalid",c)}ht(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var N=m[E];E==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&_a(c.textContent,N,n),d=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&_a(c.textContent,N,n),d=["children",""+N]):a.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ot("scroll",c)}switch(o){case"input":wt(c),Ke(c,m,!0);break;case"textarea":wt(c),ve(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=va)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[Mi]=i,n[yo]=c,_p(n,i,!1,!1),i.stateNode=n;e:{switch(E=st(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),d=c;break;case"iframe":case"object":case"embed":Ot("load",n),d=c;break;case"video":case"audio":for(d=0;d<_o.length;d++)Ot(_o[d],n);d=c;break;case"source":Ot("error",n),d=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=c;break;case"details":Ot("toggle",n),d=c;break;case"input":xn(n,c),d=X(n,c),Ot("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":ee(n,c),d=w(n,c),Ot("invalid",n);break;default:d=c}ht(o,d),N=d;for(m in N)if(N.hasOwnProperty(m)){var k=N[m];m==="style"?tt(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&ft(n,k):typeof k=="number"&&ft(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ot("scroll",n):k!=null&&b(n,m,k,E))}switch(o){case"input":wt(n),Ke(n,c,!1);break;case"textarea":wt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?L(n,!!c.multiple,m,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)xp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Or(wo.current),Or(Ei.current),wa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(m=c.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:_a(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return mn(i),null;case 13:if(kt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),_s(),i.flags|=98560,m=!1;else if(m=wa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else di!==null&&(yu(di),di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):Eu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Ss(),cu(n,i),n===null&&vo(i.stateNode.containerInfo),mn(i),null;case 10:return Oc(i.type._context),mn(i),null;case 17:return Ln(i.type)&&ya(),mn(i),null;case 19:if(kt(Vt),m=i.memoizedState,m===null)return mn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Po(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=La(n),E!==null){for(i.flags|=128,Po(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Te()>ws&&(i.flags|=128,c=!0,Po(m,!1),i.lanes=4194304)}else{if(!c)if(n=La(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return mn(i),null}else 2*Te()-m.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,c=!0,Po(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Te(),i.sibling=null,o=Vt.current,Ut(Vt,c?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return Mu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function xv(n,i){switch(Lc(i),i.tag){case 1:return Ln(i.type)&&ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),kt(Pn),kt(hn),Wc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hc(i),null;case 13:if(kt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return Ss(),null;case 10:return Oc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var za=!1,gn=!1,yv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Wt(n,i,c)}else o.current=null}function uu(n,i,o){try{o()}catch(c){Wt(n,i,c)}}var yp=!1;function Sv(n,i){if(Mc=oa,n=Qd(),pc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,N=-1,k=-1,ne=0,xe=0,Se=n,ge=null;t:for(;;){for(var Ie;Se!==o||d!==0&&Se.nodeType!==3||(N=E+d),Se!==m||c!==0&&Se.nodeType!==3||(k=E+c),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===n)break t;if(ge===o&&++ne===d&&(N=E),ge===m&&++xe===c&&(k=E),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}o=N===-1||k===-1?null:{start:N,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ec={focusedElem:n,selectionRange:o},oa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Xt=ze.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:hi(i.type,He),Xt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Wt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=yp,yp=!1,ze}function Lo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&uu(i,o,m)}d=d.next}while(d!==c)}}function Va(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function fu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Sp(n){var i=n.alternate;i!==null&&(n.alternate=null,Sp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[yo],delete i[Cc],delete i[iv],delete i[rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,o),n=n.sibling;n!==null;)du(n,i,o),n=n.sibling}function hu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,o),n=n.sibling;n!==null;)hu(n,i,o),n=n.sibling}var an=null,pi=!1;function ur(n,i,o){for(o=o.child;o!==null;)Tp(n,i,o),o=o.sibling}function Tp(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(At,o)}catch{}switch(o.tag){case 5:gn||Es(o,i);case 6:var c=an,d=pi;an=null,ur(n,i,o),an=c,pi=d,an!==null&&(pi?(n=an,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(pi?(n=an,o=o.stateNode,n.nodeType===8?Ac(n.parentNode,o):n.nodeType===1&&Ac(n,o),lo(n)):Ac(an,o.stateNode));break;case 4:c=an,d=pi,an=o.stateNode.containerInfo,pi=!0,ur(n,i,o),an=c,pi=d;break;case 0:case 11:case 14:case 15:if(!gn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&uu(o,i,E),d=d.next}while(d!==c)}ur(n,i,o);break;case 1:if(!gn&&(Es(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Wt(o,i,N)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(gn=(c=gn)||o.memoizedState!==null,ur(n,i,o),gn=c):ur(n,i,o);break;default:ur(n,i,o)}}function wp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new yv),i.forEach(function(c){var d=Pv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:an=N.stateNode,pi=!1;break e;case 3:an=N.stateNode.containerInfo,pi=!0;break e;case 4:an=N.stateNode.containerInfo,pi=!0;break e}N=N.return}if(an===null)throw Error(t(160));Tp(m,E,d),an=null,pi=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ne){Wt(d,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,n),i=i.sibling}function Ap(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),wi(n),c&4){try{Lo(3,n,n.return),Va(3,n)}catch(He){Wt(n,n.return,He)}try{Lo(5,n,n.return)}catch(He){Wt(n,n.return,He)}}break;case 1:mi(i,n),wi(n),c&512&&o!==null&&Es(o,o.return);break;case 5:if(mi(i,n),wi(n),c&512&&o!==null&&Es(o,o.return),n.flags&32){var d=n.stateNode;try{ft(d,"")}catch(He){Wt(n,n.return,He)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,N=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&mt(d,m),st(N,E);var ne=st(N,m);for(E=0;E<k.length;E+=2){var xe=k[E],Se=k[E+1];xe==="style"?tt(d,Se):xe==="dangerouslySetInnerHTML"?Fe(d,Se):xe==="children"?ft(d,Se):b(d,xe,Se,ne)}switch(N){case"input":dt(d,m);break;case"textarea":me(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?L(d,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?L(d,!!m.multiple,m.defaultValue,!0):L(d,!!m.multiple,m.multiple?[]:"",!1))}d[yo]=m}catch(He){Wt(n,n.return,He)}}break;case 6:if(mi(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(He){Wt(n,n.return,He)}}break;case 3:if(mi(i,n),wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{lo(i.containerInfo)}catch(He){Wt(n,n.return,He)}break;case 4:mi(i,n),wi(n);break;case 13:mi(i,n),wi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(gu=Te())),c&4&&wp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(gn=(ne=gn)||xe,mi(i,n),gn=ne):mi(i,n),wi(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!xe&&(n.mode&1)!==0)for(Oe=n,xe=n.child;xe!==null;){for(Se=Oe=xe;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Lo(4,ge,ge.return);break;case 1:Es(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Wt(c,o,He)}}break;case 5:Es(ge,ge.return);break;case 22:if(ge.memoizedState!==null){bp(Se);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):bp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ne?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Je("display",E))}catch(He){Wt(n,n.return,He)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(He){Wt(n,n.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:mi(i,n),wi(n),c&4&&wp(n);break;case 21:break;default:mi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Mp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ft(d,""),c.flags&=-33);var m=Ep(n);hu(n,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,N=Ep(n);du(n,N,E);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Mv(n,i,o){Oe=n,Cp(n)}function Cp(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||za;if(!E){var N=d.alternate,k=N!==null&&N.memoizedState!==null||gn;N=za;var ne=gn;if(za=E,(gn=k)&&!ne)for(Oe=d;Oe!==null;)E=Oe,k=E.child,E.tag===22&&E.memoizedState!==null?Pp(d):k!==null?(k.return=E,Oe=k):Pp(d);for(;m!==null;)Oe=m,Cp(m),m=m.sibling;Oe=d,za=N,gn=ne}Rp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Oe=m):Rp(n)}}function Rp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Va(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&bh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bh(i,E,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var xe=ne.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&lo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&fu(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function bp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Pp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(k){Wt(i,o,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){Wt(i,d,k)}}var m=i.return;try{fu(i)}catch(k){Wt(i,m,k)}break;case 5:var E=i.return;try{fu(i)}catch(k){Wt(i,E,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){Oe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Oe=N;break}Oe=i.return}}var Ev=Math.ceil,Ha=R.ReactCurrentDispatcher,pu=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,St=0,rn=null,jt=null,ln=0,Gn=0,Ts=sr(0),Qt=0,Do=null,Br=0,Ga=0,mu=0,No=null,Nn=null,gu=0,ws=1/0,zi=null,Wa=!1,_u=null,fr=null,Xa=!1,dr=null,ja=0,Io=0,vu=null,Ya=-1,qa=0;function En(){return(St&6)!==0?Te():Ya!==-1?Ya:Ya=Te()}function hr(n){return(n.mode&1)===0?1:(St&2)!==0&&ln!==0?ln&-ln:ov.transition!==null?(qa===0&&(qa=Sn()),qa):(n=bt,n!==0||(n=window.event,n=n===void 0?16:Dd(n.type)),n)}function gi(n,i,o,c){if(50<Io)throw Io=0,vu=null,Error(t(185));bn(n,o,c),((St&2)===0||n!==rn)&&(n===rn&&((St&2)===0&&(Ga|=o),Qt===4&&pr(n,ln)),In(n,c),o===1&&St===0&&(i.mode&1)===0&&(ws=Te()+500,Ma&&ar()))}function In(n,i){var o=n.callbackNode;qn(n,i);var c=Si(n,n===rn?ln:0);if(c===0)o!==null&&se(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&se(o),i===1)n.tag===0?sv(Dp.bind(null,n)):_h(Dp.bind(null,n)),tv(function(){(St&6)===0&&ar()}),o=null;else{switch(Td(c)){case 1:o=Ve;break;case 4:o=nt;break;case 16:o=rt;break;case 536870912:o=xt;break;default:o=rt}o=zp(o,Lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Lp(n,i){if(Ya=-1,qa=0,(St&6)!==0)throw Error(t(327));var o=n.callbackNode;if(As()&&n.callbackNode!==o)return null;var c=Si(n,n===rn?ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=$a(n,c);else{i=c;var d=St;St|=2;var m=Ip();(rn!==n||ln!==i)&&(zi=null,ws=Te()+500,Vr(n,i));do try{Av();break}catch(N){Np(n,N)}while(!0);Fc(),Ha.current=m,St=d,jt!==null?i=0:(rn=null,ln=0,i=Qt)}if(i!==0){if(i===2&&(d=Di(n),d!==0&&(c=d,i=xu(n,d))),i===1)throw o=Do,Vr(n,0),pr(n,c),In(n,Te()),o;if(i===6)pr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Tv(d)&&(i=$a(n,c),i===2&&(m=Di(n),m!==0&&(c=m,i=xu(n,m))),i===1))throw o=Do,Vr(n,0),pr(n,c),In(n,Te()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Nn,zi);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=gu+500-Te(),10<i)){if(Si(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=wc(Hr.bind(null,n,Nn,zi),i);break}Hr(n,Nn,zi);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-at(c);m=1<<E,E=i[E],E>d&&(d=E),c&=~m}if(c=d,c=Te()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ev(c/1960))-c,10<c){n.timeoutHandle=wc(Hr.bind(null,n,Nn,zi),c);break}Hr(n,Nn,zi);break;case 5:Hr(n,Nn,zi);break;default:throw Error(t(329))}}}return In(n,Te()),n.callbackNode===o?Lp.bind(null,n):null}function xu(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=$a(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&yu(i)),n}function yu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function Tv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!fi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~mu,i&=~Ga,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-at(i),c=1<<o;n[o]=-1,i&=~c}}function Dp(n){if((St&6)!==0)throw Error(t(327));As();var i=Si(n,0);if((i&1)===0)return In(n,Te()),null;var o=$a(n,i);if(n.tag!==0&&o===2){var c=Di(n);c!==0&&(i=c,o=xu(n,c))}if(o===1)throw o=Do,Vr(n,0),pr(n,i),In(n,Te()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Nn,zi),In(n,Te()),null}function Su(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(ws=Te()+500,Ma&&ar())}}function zr(n){dr!==null&&dr.tag===0&&(St&6)===0&&As();var i=St;St|=1;var o=ei.transition,c=bt;try{if(ei.transition=null,bt=1,n)return n()}finally{bt=c,ei.transition=o,St=i,(St&6)===0&&ar()}}function Mu(){Gn=Ts.current,kt(Ts)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,ev(o)),jt!==null)for(o=jt.return;o!==null;){var c=o;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ya();break;case 3:Ss(),kt(Pn),kt(hn),Wc();break;case 5:Hc(c);break;case 4:Ss();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Oc(c.type._context);break;case 22:case 23:Mu()}o=o.return}if(rn=n,jt=n=mr(n.current,null),ln=Gn=i,Qt=0,Do=null,mu=Ga=Br=0,Nn=No=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}o.pending=c}Fr=null}return n}function Np(n,i){do{var o=jt;try{if(Fc(),Da.current=Fa,Na){for(var c=Ht.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Na=!1}if(kr=0,nn=Zt=Ht=null,Ao=!1,Co=0,pu.current=null,o===null||o.return===null){Qt=1,Do=i,jt=null;break}e:{var m=n,E=o.return,N=o,k=i;if(i=ln,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,xe=N,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=rp(E);if(Ie!==null){Ie.flags&=-257,sp(Ie,E,N,m,i),Ie.mode&1&&ip(m,ne,i),i=Ie,k=ne;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(k),i.updateQueue=He}else ze.add(k);break e}else{if((i&1)===0){ip(m,ne,i),Eu();break e}k=Error(t(426))}}else if(zt&&N.mode&1){var Xt=rp(E);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),sp(Xt,E,N,m,i),Ic(Ms(k,N));break e}}m=k=Ms(k,N),Qt!==4&&(Qt=2),No===null?No=[m]:No.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=tp(m,k,i);Rh(m,q);break e;case 1:N=k;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(fr===null||!fr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=np(m,N,i);Rh(m,we);break e}}m=m.return}while(m!==null)}Fp(o)}catch(je){i=je,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function Ip(){var n=Ha.current;return Ha.current=Fa,n===null?Fa:n}function Eu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Br&268435455)===0&&(Ga&268435455)===0||pr(rn,ln)}function $a(n,i){var o=St;St|=2;var c=Ip();(rn!==n||ln!==i)&&(zi=null,Vr(n,i));do try{wv();break}catch(d){Np(n,d)}while(!0);if(Fc(),St=o,Ha.current=c,jt!==null)throw Error(t(261));return rn=null,ln=0,Qt}function wv(){for(;jt!==null;)Up(jt)}function Av(){for(;jt!==null&&!W();)Up(jt)}function Up(n){var i=Bp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Fp(n):jt=i,pu.current=null}function Fp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=vv(o,i,Gn),o!==null){jt=o;return}}else{if(o=xv(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Hr(n,i,o){var c=bt,d=ei.transition;try{ei.transition=null,bt=1,Cv(n,i,o,c)}finally{ei.transition=d,bt=c}return null}function Cv(n,i,o,c){do As();while(dr!==null);if((St&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ia(n,m),n===rn&&(jt=rn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,zp(rt,function(){return As(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var E=bt;bt=1;var N=St;St|=4,pu.current=null,Sv(n,o),Ap(o,n),Y_(Ec),oa=!!Mc,Ec=Mc=null,n.current=o,Mv(o),Ae(),St=N,bt=E,ei.transition=m}else n.current=o;if(Xa&&(Xa=!1,dr=n,ja=d),m=n.pendingLanes,m===0&&(fr=null),fn(o.stateNode),In(n,Te()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Wa)throw Wa=!1,n=_u,_u=null,n;return(ja&1)!==0&&n.tag!==0&&As(),m=n.pendingLanes,(m&1)!==0?n===vu?Io++:(Io=0,vu=n):Io=0,ar(),null}function As(){if(dr!==null){var n=Td(ja),i=ei.transition,o=bt;try{if(ei.transition=null,bt=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,ja=0,(St&6)!==0)throw Error(t(331));var d=St;for(St|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var N=m.deletions;if(N!==null){for(var k=0;k<N.length;k++){var ne=N[k];for(Oe=ne;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Lo(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Oe=Se;else for(;Oe!==null;){xe=Oe;var ge=xe.sibling,Ie=xe.return;if(Sp(xe),xe===ne){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var ze=m.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Xt=He.sibling;He.sibling=null,He=Xt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Lo(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Oe=q;break e}Oe=m.return}}var V=n.current;for(Oe=V;Oe!==null;){E=Oe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Oe=K;else e:for(E=V;Oe!==null;){if(N=Oe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Va(9,N)}}catch(je){Wt(N,N.return,je)}if(N===E){Oe=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Oe=we;break e}Oe=N.return}}if(St=d,ar(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(At,n)}catch{}c=!0}return c}finally{bt=o,ei.transition=i}}return!1}function Op(n,i,o){i=Ms(o,i),i=tp(n,i,1),n=cr(n,i,1),i=En(),n!==null&&(bn(n,1,i),In(n,i))}function Wt(n,i,o){if(n.tag===3)Op(n,n,o);else for(;i!==null;){if(i.tag===3){Op(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(fr===null||!fr.has(c))){n=Ms(o,n),n=np(i,n,1),i=cr(i,n,1),n=En(),i!==null&&(bn(i,1,n),In(i,n));break}}i=i.return}}function Rv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(ln&o)===o&&(Qt===4||Qt===3&&(ln&130023424)===ln&&500>Te()-gu?Vr(n,0):mu|=o),In(n,i)}function kp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var o=En();n=Oi(n,i),n!==null&&(bn(n,i,o),In(n,o))}function bv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),kp(n,o)}function Pv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),kp(n,o)}var Bp;Bp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,_v(n,i,o);Dn=(n.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&vh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ba(n,i),n=i.pendingProps;var d=ps(i,hn.current);ys(i,o),d=Yc(null,i,c,n,d,o);var m=qc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,Sa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zc(i),d.updater=Oa,i.stateNode=d,d._reactInternals=i,eu(i,c,n,o),i=ru(null,i,c,!0,m,o)):(i.tag=0,zt&&m&&Pc(i),Mn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ba(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Dv(c),n=hi(c,n),d){case 0:i=iu(null,i,c,n,o);break e;case 1:i=fp(null,i,c,n,o);break e;case 11:i=op(null,i,c,n,o);break e;case 14:i=ap(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),iu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),fp(n,i,c,d,o);case 3:e:{if(dp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Ch(n,i),Pa(i,c,null,o);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ms(Error(t(423)),i),i=hp(n,i,c,o,d);break e}else if(c!==d){d=Ms(Error(t(424)),i),i=hp(n,i,c,o,d);break e}else for(Hn=rr(i.stateNode.containerInfo.firstChild),Vn=i,zt=!0,di=null,o=wh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_s(),c===d){i=Bi(n,i,o);break e}Mn(n,i,c,o)}i=i.child}return i;case 5:return Ph(i),n===null&&Nc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Tc(c,d)?E=null:m!==null&&Tc(c,m)&&(i.flags|=32),up(n,i),Mn(n,i,E,o),i.child;case 6:return n===null&&Nc(i),null;case 13:return pp(n,i,o);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,o):Mn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),op(n,i,c,d,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ut(Ca,c._currentValue),c._currentValue=E,m!==null)if(fi(m.value,E)){if(m.children===d.children&&!Pn.current){i=Bi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){E=m.child;for(var k=N.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=ki(-1,o&-o),k.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var xe=ne.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ne.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),kc(m.return,o,i),N.lanes|=o;break}k=k.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,N=E.alternate,N!==null&&(N.lanes|=o),kc(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Mn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ys(i,o),d=Qn(d),c=c(d),i.flags|=1,Mn(n,i,c,o),i.child;case 14:return c=i.type,d=hi(c,i.pendingProps),d=hi(c.type,d),ap(n,i,c,d,o);case 15:return lp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),Ba(n,i),i.tag=1,Ln(c)?(n=!0,Sa(i)):n=!1,ys(i,o),Jh(i,c,d),eu(i,c,d,o),ru(null,i,c,!0,n,o);case 19:return gp(n,i,o);case 22:return cp(n,i,o)}throw Error(t(156,i.tag))};function zp(n,i){return ie(n,i)}function Lv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,o,c){return new Lv(n,i,o,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dv(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===he)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=ti(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ka(n,i,o,c,d,m){var E=2;if(c=n,typeof n=="function")Tu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return Gr(o.children,d,m,i);case j:E=8,d|=8;break;case P:return n=ti(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case te:return n=ti(13,o,i,d),n.elementType=te,n.lanes=m,n;case fe:return n=ti(19,o,i,d),n.elementType=fe,n.lanes=m,n;case Y:return Za(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case z:E=9;break e;case le:E=11;break e;case he:E=14;break e;case ce:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(E,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Gr(n,i,o,c){return n=ti(7,n,c,i),n.lanes=o,n}function Za(n,i,o,c){return n=ti(22,n,c,i),n.elementType=Y,n.lanes=o,n.stateNode={isHidden:!1},n}function wu(n,i,o){return n=ti(6,n,null,i),n.lanes=o,n}function Au(n,i,o){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Nv(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cu(n,i,o,c,d,m,E,N,k){return n=new Nv(n,i,o,N,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(m),n}function Iv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Vp(n){if(!n)return or;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return mh(n,o,i)}return i}function Hp(n,i,o,c,d,m,E,N,k){return n=Cu(o,c,!0,n,d,m,E,N,k),n.context=Vp(null),o=n.current,c=En(),d=hr(o),m=ki(c,d),m.callback=i??null,cr(o,m,d),n.current.lanes=d,bn(n,d,c),In(n,c),n}function Qa(n,i,o,c){var d=i.current,m=En(),E=hr(d);return o=Vp(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(d,i,E),n!==null&&(gi(n,d,E,m),ba(n,d,E)),E}function Ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ru(n,i){Gp(n,i),(n=n.alternate)&&Gp(n,i)}function Uv(){return null}var Wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function bu(n){this._internalRoot=n}el.prototype.render=bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qa(n,i,null,null)},el.prototype.unmount=bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){Qa(null,n,null,null)}),i[Ni]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=Cd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&Pd(n)}};function Pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function Fv(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ne=Ja(E);m.call(ne)}}var E=Hp(i,c,n,0,null,!1,!1,"",Xp);return n._reactRootContainer=E,n[Ni]=E.current,vo(n.nodeType===8?n.parentNode:n),zr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var N=c;c=function(){var ne=Ja(k);N.call(ne)}}var k=Cu(n,0,!1,null,null,!1,!1,"",Xp);return n._reactRootContainer=k,n[Ni]=k.current,vo(n.nodeType===8?n.parentNode:n),zr(function(){Qa(i,k,o,c)}),k}function nl(n,i,o,c,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var N=d;d=function(){var k=Ja(E);N.call(k)}}Qa(i,E,n,d)}else E=Fv(o,i,n,d,c);return Ja(E)}wd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Kt(i.pendingLanes);o!==0&&(ec(i,o|1),In(i,Te()),(St&6)===0&&(ws=Te()+500,ar()))}break;case 13:zr(function(){var c=Oi(n,1);if(c!==null){var d=En();gi(c,n,1,d)}}),Ru(n,1)}},tc=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var o=En();gi(i,n,134217728,o)}Ru(n,134217728)}},Ad=function(n){if(n.tag===13){var i=hr(n),o=Oi(n,i);if(o!==null){var c=En();gi(o,n,i,c)}Ru(n,i)}},Cd=function(){return bt},Rd=function(n,i){var o=bt;try{return bt=n,i()}finally{bt=o}},be=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=xa(c);if(!d)throw Error(t(90));_t(c),dt(c,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},Ft=Su,$t=zr;var Ov={usingClientEntryPoint:!1,Events:[So,ds,xa,De,ot,Su]},Uo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kv={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||Uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{At=il.inject(kv),vt=il}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(i))throw Error(t(200));return Iv(n,i,null,o)},Un.createRoot=function(n,i){if(!Pu(n))throw Error(t(299));var o=!1,c="",d=Wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cu(n,1,!1,null,null,o,!1,c,d),n[Ni]=i.current,vo(n.nodeType===8?n.parentNode:n),new bu(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return zr(n)},Un.hydrate=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Pu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",E=Wp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Hp(i,null,n,1,o??null,d,!1,m,E),n[Ni]=i.current,vo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new el(i)},Un.render=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=Su,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,o,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Jp;function qv(){if(Jp)return Nu.exports;Jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nu.exports=Yv(),Nu.exports}var em;function $v(){if(em)return rl;em=1;var r=qv();return rl.createRoot=r.createRoot,rl.hydrateRoot=r.hydrateRoot,rl}var Kv=$v();const Zv=_g(Kv),tm=r=>{let e;const t=new Set,s=(p,_)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const v=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(S=>S(e,v))}},a=()=>e,f={setState:s,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(s,a,f);return f},Qv=(r=>r?tm(r):tm),Jv=r=>r;function e0(r,e=Jv){const t=Go.useSyncExternalStore(r.subscribe,Go.useCallback(()=>e(r.getState()),[r,e]),Go.useCallback(()=>e(r.getInitialState()),[r,e]));return Go.useDebugValue(t),t}const nm=r=>{const e=Qv(r),t=s=>e0(e,s);return Object.assign(t,e),t},vg=(r=>r?nm(r):nm),sl={modelId:null,status:"idle",uploadProgress:0,parseProgress:0,errorMessage:null,metadata:null,warnings:[],tree:null,fields:[],sets:[],activeFieldId:null,activeTimestep:0,nodeCoords_f64:null,fieldValues_f64:null,displacement_f64:null,fieldLoadError:null,fieldNanCount:0,deformLoadError:null,surfaceIndices:null,surfaceNormals:null,surfaceElementMap:null},ye=vg((r,e)=>({...sl,beginUpload:t=>r({...sl,modelId:t,status:"uploading"}),setParsing:()=>r({status:"parsing"}),setReady:()=>r({status:"ready"}),setError:t=>r({status:"error",errorMessage:t}),resetModel:()=>r(sl),hydrateMetadata:t=>r({metadata:t}),hydrateTree:t=>r({tree:t}),hydrateFields:t=>r({fields:t}),hydrateSets:t=>r({sets:t}),hydrateWarnings:t=>r({warnings:t}),setModelId:t=>r({modelId:t}),setStatus:t=>r({status:t}),setUploadProgress:t=>r({uploadProgress:t}),setParseProgress:t=>r({parseProgress:t}),setErrorMessage:t=>r({errorMessage:t}),setMetadata:t=>r({metadata:t}),setWarnings:t=>r({warnings:t}),addWarning:t=>r(s=>({warnings:[...s.warnings,t]})),clearWarnings:()=>r({warnings:[]}),setTree:t=>r({tree:t}),setFields:t=>r({fields:t}),setSets:t=>r({sets:t}),setActiveFieldId:t=>r({activeFieldId:t,fieldValues_f64:null,fieldLoadError:null,fieldNanCount:0}),setActiveTimestep:t=>r({activeTimestep:t,fieldValues_f64:null,fieldLoadError:null}),setNodeCoords:t=>{e().nodeCoords_f64===null&&r({nodeCoords_f64:t})},setFieldValues:t=>r({fieldValues_f64:t}),setFieldLoadError:t=>r({fieldLoadError:t}),setFieldNanCount:t=>r({fieldNanCount:t}),setDisplacementValues:t=>r({displacement_f64:t}),setDeformLoadError:t=>r({deformLoadError:t}),setSurfaceData:(t,s,a)=>r({surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a}),reset:()=>r(sl)})),jl="/api/v1";async function $o(r){const e=await fetch(`${jl}${r}`,{headers:{Accept:"application/json"}});if(!e.ok){const t=await e.text();throw new Yl(e.status,t)}return e.json()}async function cd(r){const e=await fetch(`${jl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const f=await e.text();throw new Yl(e.status,f)}const t=e.headers.get("X-Array-Dtype")??"float64",s=e.headers.get("X-Array-Shape")??"[]",a=e.headers.get("X-Array-ByteOrder")??"little";let l;try{l=JSON.parse(s)}catch{l=[]}return{buffer:await e.arrayBuffer(),meta:{dtype:t,shape:l,byteOrder:a}}}async function t0(r){const e=await fetch(`${jl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const D=await e.text();throw new Yl(e.status,D)}const t=e.headers.get("X-Array-Dtype")??"",s=e.headers.get("X-Array-ByteOrder")??"little",a=e.headers.get("X-Array-Shape"),l=e.headers.get("X-Buffer-Offsets");if(t!=="mixed")throw new Error(`Expected mixed surfaces payload, got dtype="${t||"missing"}"`);if(s!=="little")throw new Error(`Unsupported byte order "${s}" for surfaces payload`);if(!a)throw new Error("Missing X-Array-Shape header for surfaces payload");if(!l)throw new Error("Missing X-Buffer-Offsets header for surfaces payload");const u=im(a,"X-Array-Shape"),f=im(l,"X-Buffer-Offsets"),h=await e.arrayBuffer();Fu(u,f,"indices"),Fu(u,f,"normals"),Fu(u,f,"map");const p=f.indices,_=f.normals,g=f.map,v=u.indices,S=u.normals,M=u.map,T=Ou(h,p,"int32","indices"),y=Ou(h,_,"float32","normals"),x=Ou(h,g,"int32","map");return ku(v,T.length,"indices"),ku(S,y.length,"normals"),ku(M,x.length,"map"),{surfaceIndices:T,surfaceNormals:y,surfaceElementMap:x,headers:{dtype:t,shape:u,byteOrder:s,offsets:f}}}function im(r,e){try{return JSON.parse(r)}catch{throw new Error(`Malformed ${e} header`)}}function Fu(r,e,t){if(!Array.isArray(r[t]))throw new Error(`Missing or malformed shape section "${t}"`);const s=e[t];if(!Array.isArray(s)||s.length!==2)throw new Error(`Missing or malformed offsets section "${t}"`)}function Ou(r,[e,t],s,a){const l=t-e;if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||t<0||t<=e||t>r.byteLength)throw new Error(`Invalid byte range for section "${a}"`);if(e%4!==0||l%4!==0)throw new Error(`Misaligned byte range for section "${a}"`);return s==="int32"?new Int32Array(r,e,l/4):new Float32Array(r,e,l/4)}function ku(r,e,t){if(r.length!==1||!Number.isInteger(r[0])||r[0]<0)throw new Error(`Unsupported shape for section "${t}"`);if(r[0]!==e)throw new Error(`Shape length mismatch for section "${t}": expected ${r[0]}, got ${e}`)}async function n0(r){const e=new FormData;e.append("file",r);const t=await fetch(`${jl}/models/upload`,{method:"POST",body:e});if(!t.ok){const s=await t.text();throw new Yl(t.status,s)}return t.json()}class Yl extends Error{constructor(e,t){super(`API ${e}: ${t}`),this.status=e,this.body=t,this.name="ApiError"}}function i0(r,e){const s=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/progress/${r}`,a=new WebSocket(s);return a.onmessage=l=>{try{const u=JSON.parse(l.data);e(u)}catch{console.warn("[WS] Failed to parse progress message:",l.data)}},a.onerror=l=>{console.error("[WS] WebSocket error:",l)},a.onclose=()=>{console.info(`[WS] Connection closed for model ${r}`)},()=>{(a.readyState===WebSocket.OPEN||a.readyState===WebSocket.CONNECTING)&&a.close()}}const r0=1e3,s0=6e4,xg={length:"unspecified",force:"unspecified",time:"unspecified",temperature:"unspecified",declared_system:"unspecified"},o0={source_filename:"Unknown",file_format:"unknown",format_version:"unknown",solver_name:"unknown",solver_version:"unknown",title:"Untitled model",unit_system:xg,coordinate_system:"unspecified"};async function a0(r){console.info(`[ModelBootstrap] Status fetch start for ${r}`);const e=await $o(`/models/${r}/status`);return console.info("[ModelBootstrap] Status fetch result",{modelId:r,response:e}),e}function yg(r,e){let t=!1,s,a=null;const l=Date.now(),u=()=>{t=!0,s!==void 0&&window.clearTimeout(s),a&&(console.info(`[ModelBootstrap] Polling stop for ${r}`),a(),a=null)},f=()=>{s=window.setTimeout(()=>{p()},r0)},h=()=>{a||(console.info(`[ModelBootstrap] Polling start for ${r}`),a=i0(r,_=>{var g;t||(console.info("[ModelBootstrap] Progress message",{modelId:r,message:_}),(g=e.onProgress)==null||g.call(e,_),(_.status==="ready"||_.status==="error")&&p())}))},p=async()=>{if(!t)try{const _=await a0(r);if(e.onStatus(_),_.status==="parsing"){if(h(),Date.now()-l>=s0){u(),e.onTimeout();return}f();return}u()}catch(_){u(),e.onError(_ instanceof Error?_:new Error("Unknown bootstrap error"))}};return p(),u}async function l0(r){console.info(`[Viewport] Metadata fetch start for ${r}`);const e=await $o(`/models/${r}/metadata`),t=h0(e),s=d0(e.warnings);return console.info("[Viewport] Metadata fetch result",{modelId:r,warnings:s.length}),{metadata:t,warnings:s}}async function c0(r){console.info(`[Viewport] Tree fetch start for ${r}`);const e=await $o(`/models/${r}/tree`),t=Sg(e);return console.info("[Viewport] Tree fetch result",{modelId:r,root:t.name}),t}async function u0(r){console.info(`[Viewport] Fields fetch start for ${r}`);const t=(await $o(`/models/${r}/fields`)).map(p0);return console.info("[Viewport] Fields fetch result",{modelId:r,count:t.length}),t}async function f0(r){console.info(`[Viewport] Sets fetch start for ${r}`);const e=await $o(`/models/${r}/sets`);return console.info("[Viewport] Sets fetch result",{modelId:r,count:e.length}),e}function d0(r){return r?r.map(e=>typeof e=="string"?{category:"Import Warning",message:e,severity:"warning",dismissible:!1}:e):[]}function h0(r){var t;const e={...xg,...((t=r.metadata)==null?void 0:t.unit_system)??{},...r.unit_system??{}};return{...o0,...r.metadata,unit_system:e}}function p0(r){const e=r.n_components??r.components??1,t=r.n_timesteps??r.timestep_count??1;return{id:r.id,name:r.name,location:r.location,n_components:e,n_timesteps:t,timesteps:Array.from({length:t},(s,a)=>({step_index:a,time_value:null})),provenance:{source_field_name:r.name,source_location:r.location,extrapolation_applied:!1,averaging_applied:!1,averaging_method:null,coordinate_system:"unspecified",warnings:[]}}}function Sg(r){var t;if("type"in r)return r;const e=r.assembly??{};return{id:e.id??"assembly-root",name:e.name??"Assembly",type:"assembly",children:((t=e.children)==null?void 0:t.map(Sg))??[]}}const m0=()=>{const r=ye(B=>B.status),e=ye(B=>B.modelId),t=ye(B=>B.uploadProgress),s=ye(B=>B.parseProgress),a=ye(B=>B.errorMessage),l=ye(B=>B.setModelId),u=ye(B=>B.setStatus),f=ye(B=>B.setUploadProgress),h=ye(B=>B.setParseProgress),p=ye(B=>B.setErrorMessage),_=ye(B=>B.resetModel),[g,v]=et.useState(!1),S=et.useRef(null),M=et.useRef(null);et.useEffect(()=>()=>{var B;(B=M.current)==null||B.call(M)},[]);const T=et.useCallback(B=>{var F;(F=M.current)==null||F.call(M),M.current=yg(B,{onStatus:U=>{if(U.status==="ready"){u("ready");return}if(U.status==="error"){u("error"),p(U.error_message??"Parse failed");return}u("parsing")},onProgress:U=>{h(U.progress*100)},onError:U=>{u("error"),p(U.message||"Failed to monitor model status")},onTimeout:()=>{u("error"),p("Model parsing timed out after 60 seconds")}})},[p,h,u]),y=et.useCallback(async B=>{_(),u("uploading"),f(0),h(0),p(null);try{const{model_id:F}=await n0(B);console.info(`[UploadPanel] Uploaded file, monitoring model ${F}`),l(F),u("parsing"),f(100),T(F)}catch(F){u("error"),p(F instanceof Error?F.message:"Upload failed")}},[_,p,l,h,u,f,T]),x=et.useCallback(B=>{B.preventDefault(),v(!1);const F=B.dataTransfer.files[0];F&&y(F)},[y]),D=et.useCallback(B=>{B.preventDefault(),v(!0)},[]),b=et.useCallback(()=>v(!1),[]),R=et.useCallback(B=>{var U;const F=(U=B.target.files)==null?void 0:U[0];F&&y(F)},[y]);return Q.jsxs("div",{style:{width:"100%"},children:[r==="idle"&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{className:`upload-dropzone ${g?"upload-dropzone--active":""}`,onDrop:x,onDragOver:D,onDragLeave:b,onClick:()=>{var B;return(B=S.current)==null?void 0:B.click()},children:[Q.jsx("div",{className:"upload-dropzone__title",children:"Drop VTK/VTU file here"}),Q.jsx("div",{className:"upload-dropzone__subtitle",children:"or click to browse"})]}),Q.jsx("input",{ref:S,type:"file",accept:".vtk,.vtu,.vtp,.pvtu",style:{display:"none"},onChange:R})]}),r==="uploading"&&Q.jsxs("div",{children:[Q.jsx("div",{style:{marginBottom:8,fontSize:12},children:"Uploading..."}),Q.jsx("div",{className:"progress-bar",children:Q.jsx("div",{className:"progress-bar__fill",style:{width:`${t}%`}})})]}),r==="parsing"&&Q.jsxs("div",{children:[Q.jsx("div",{style:{marginBottom:8,fontSize:12},children:e?`Parsing ${e}...`:"Parsing..."}),Q.jsx("div",{className:"progress-bar",children:Q.jsx("div",{className:"progress-bar__fill",style:{width:`${s}%`}})})]}),r==="error"&&Q.jsxs("div",{style:{color:"var(--accent-danger)",fontSize:12},children:[Q.jsx("div",{style:{marginBottom:8,fontWeight:600},children:"Error"}),Q.jsx("div",{children:a})]})]})},g0={lut_name:"viridis",min_value:0,max_value:1,n_colors:256,nan_color:[.5,.5,.5,.3],above_range_color:[1,0,1,1],below_range_color:[0,0,1,1],scale:"linear"},rm={deformMode:"undeformed",deformScale:1,deformFieldId:null,pickMode:"node",wireframeVisible:!1,partVisibility:{},colorMapConfig:{...g0}},Nt=vg(r=>({...rm,setDeformMode:e=>r({deformMode:e}),setDeformScale:e=>r({deformScale:e}),setDeformFieldId:e=>r({deformFieldId:e}),setPickMode:e=>r({pickMode:e}),setWireframeVisible:e=>r({wireframeVisible:e}),toggleWireframe:()=>r(e=>({wireframeVisible:!e.wireframeVisible})),setPartVisibility:(e,t)=>r(s=>({partVisibility:{...s.partVisibility,[e]:t}})),setAllPartsVisible:e=>r(t=>{const s={};for(const a of Object.keys(t.partVisibility))s[a]=e;return{partVisibility:s}}),isolatePart:e=>r(t=>{const s={};for(const a of Object.keys(t.partVisibility))s[a]=a===e;return{partVisibility:s}}),resetVisibility:()=>r({partVisibility:{}}),setColorMapName:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,lut_name:e}})),setColorMapRange:(e,t)=>r(s=>({colorMapConfig:{...s.colorMapConfig,min_value:e,max_value:t}})),setColorMapConfig:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,...e}})),resetView:()=>r(rm)})),_0=()=>{const r=ye(e=>e.tree);return r?Q.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:Q.jsx(Mg,{node:r,depth:0})}):Q.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No model loaded"})},Mg=({node:r,depth:e})=>{var f;const t=Nt(h=>h.partVisibility),s=Nt(h=>h.setPartVisibility),a=Nt(h=>h.isolatePart),l=t[r.id]!==!1,u=r.type==="part";return Q.jsxs("div",{children:[Q.jsxs("div",{className:`tree-node ${l?"":"tree-node--hidden"}`,style:{paddingLeft:e*16+8},children:[Q.jsxs("span",{className:"tree-node__icon",children:[r.type==="assembly"&&"📦",r.type==="instance"&&"🔗",r.type==="part"&&"🧊",r.type==="node_set"&&"📍",r.type==="element_set"&&"📐"]}),Q.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),u&&Q.jsxs("span",{className:"tree-node__actions",children:[Q.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),s(r.id,!l)},title:l?"Hide":"Show",children:l?"👁":"👁‍🗨"}),Q.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),a(r.id)},title:"Isolate",children:"◎"})]})]}),(f=r.children)==null?void 0:f.map(h=>Q.jsx(Mg,{node:h,depth:e+1},h.id))]})},v0=()=>{const r=ye(a=>a.fields),e=ye(a=>a.activeFieldId),t=ye(a=>a.setActiveFieldId),s=ye(a=>a.fieldLoadError);return Q.jsxs("div",{className:"field-selector",children:[Q.jsxs("select",{value:e??"",onChange:a=>t(a.target.value||null),children:[Q.jsx("option",{value:"",children:"— No field —"}),r.map(a=>Q.jsxs("option",{value:a.id,disabled:a.location==="integration_point",children:[a.name,a.n_components>1?` (${a.n_components} comp)`:"",a.location==="integration_point"?" ⚠ Unsupported in MVP":"",a.location==="elemental"?" [elem]":"",a.location==="nodal"?" [nodal]":""]},a.id))]}),s&&Q.jsxs("div",{style:{marginTop:4,fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",s]})]})},x0=()=>{const r=ye(T=>T.fields),e=ye(T=>T.activeFieldId),t=ye(T=>T.activeTimestep),s=ye(T=>T.setActiveTimestep),a=ye(T=>T.fieldLoadError),[l,u]=et.useState(!1),f=et.useRef(null),h=r.find(T=>T.id===e),p=(h==null?void 0:h.n_timesteps)??1,_=Math.max(0,p-1),g=h==null?void 0:h.timesteps.find(T=>T.step_index===t),v=g!==void 0,S=(g==null?void 0:g.time_value)!=null?`t = ${g.time_value.toFixed(4)}`:v?`Step ${t}`:"No data at this step";et.useEffect(()=>{if(!l){f.current!==null&&(cancelAnimationFrame(f.current),f.current=null);return}let T=0;const y=x=>{x-T>500&&(T=x,s((t+1)%(_+1))),f.current=requestAnimationFrame(y)};return f.current=requestAnimationFrame(y),()=>{f.current!==null&&cancelAnimationFrame(f.current)}},[l,t,_,s]);const M=et.useCallback(T=>{s(parseInt(T.target.value,10))},[s]);return!h||p<=1?Q.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:h?"Single timestep":"Select a field first"}):Q.jsxs("div",{className:"slider-control",children:[Q.jsx("input",{type:"range",min:0,max:_,value:t,onChange:M}),Q.jsxs("div",{className:"slider-control__label",children:[Q.jsx("span",{children:S}),Q.jsxs("span",{children:[t+1," / ",p]})]}),Q.jsx("button",{className:"toolbar__btn",onClick:()=>u(!l),style:{alignSelf:"flex-start",marginTop:4},children:l?"⏸ Pause":"▶ Animate"}),(!v||a)&&Q.jsxs("div",{style:{color:"var(--accent-warning)",fontSize:11,marginTop:4},children:["⚠ ",a??"No data at this step"]})]})},y0=()=>{const r=ye(g=>g.fields),e=ye(g=>g.deformLoadError),t=Nt(g=>g.deformMode),s=Nt(g=>g.deformScale),a=Nt(g=>g.deformFieldId),l=Nt(g=>g.setDeformMode),u=Nt(g=>g.setDeformScale),f=Nt(g=>g.setDeformFieldId),h=r.filter(g=>g.location==="nodal"&&g.n_components===3),p=h.length>0,_=g=>{const v=parseFloat(g.target.value);Number.isNaN(v)||u(Math.min(Math.max(v,0),1e4))};return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[Q.jsx("div",{className:"field-selector",children:Q.jsxs("select",{value:a??"",onChange:g=>f(g.target.value||null),disabled:!p,children:[Q.jsx("option",{value:"",children:p?"— No deformation —":"— No displacement field —"}),h.map(g=>Q.jsx("option",{value:g.id,children:g.name},g.id))]})}),!p&&Q.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:"No nodal vector3 fields available for deformation."}),Q.jsx("div",{style:{display:"flex",gap:4},children:["undeformed","deformed","overlay"].map(g=>Q.jsx("button",{className:`toolbar__btn ${t===g?"toolbar__btn--active":""}`,onClick:()=>l(g),disabled:!p||!a,style:{flex:1,fontSize:11,justifyContent:"center"},children:g},g))}),Q.jsxs("div",{className:"slider-control",children:[Q.jsxs("label",{style:{fontSize:11,color:"var(--text-secondary)"},children:["Scale: ",s.toFixed(1),"×"]}),Q.jsx("input",{type:"range",min:0,max:100,step:.1,value:Math.min(s,100),onChange:g=>u(parseFloat(g.target.value)),disabled:!p||!a}),Q.jsx("input",{type:"number",min:0,max:1e4,step:1,value:s,onChange:_,disabled:!p||!a,style:{width:60,fontSize:11,padding:"2px 4px",background:"var(--bg-tertiary)",color:"var(--text-primary)",border:"1px solid var(--border-primary)",borderRadius:4}})]}),e&&Q.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",e]})]})},S0=({onZoomToFit:r})=>{const e=ye(p=>p.status),t=Nt(p=>p.wireframeVisible),s=Nt(p=>p.toggleWireframe),a=Nt(p=>p.pickMode),l=Nt(p=>p.setPickMode),u=Nt(p=>p.deformMode),f=Nt(p=>p.setDeformMode),h=e==="ready";return Q.jsxs("div",{className:"toolbar",children:[Q.jsx("span",{className:"toolbar__title",children:"FEA Viewer"}),h&&Q.jsxs(Q.Fragment,{children:[Q.jsx("button",{className:`toolbar__btn ${t?"toolbar__btn--active":""}`,onClick:s,title:"Toggle wireframe overlay",children:"◇ Wire"}),Q.jsx("button",{className:`toolbar__btn ${a==="node"?"toolbar__btn--active":""}`,onClick:()=>l("node"),title:"Node pick mode",children:"⊙ Node"}),Q.jsx("button",{className:`toolbar__btn ${a==="element"?"toolbar__btn--active":""}`,onClick:()=>l("element"),title:"Element pick mode",children:"◻ Elem"}),Q.jsx("button",{className:`toolbar__btn ${u==="deformed"?"toolbar__btn--active":""}`,onClick:()=>f(u==="deformed"?"undeformed":"deformed"),title:"Toggle deformed view",children:"↗ Deform"}),Q.jsx("button",{className:"toolbar__btn",onClick:r,title:"Zoom to fit model",children:"⊞ Fit"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="170",Ws={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M0=0,sm=1,E0=2,Eg=1,T0=2,ji=3,Rr=0,kn=1,jn=2,Ar=0,Xs=1,om=2,am=3,lm=4,w0=5,Zr=100,A0=101,C0=102,R0=103,b0=104,P0=200,L0=201,D0=202,N0=203,Sf=204,Mf=205,I0=206,U0=207,F0=208,O0=209,k0=210,B0=211,z0=212,V0=213,H0=214,Ef=0,Tf=1,wf=2,qs=3,Af=4,Cf=5,Rf=6,bf=7,fd=0,G0=1,W0=2,Cr=0,X0=1,j0=2,Y0=3,q0=4,$0=5,K0=6,Z0=7,Tg=300,$s=301,Ks=302,Pf=303,Lf=304,ql=306,Df=1e3,wr=1001,Nf=1002,An=1003,Q0=1004,ol=1005,oi=1006,Bu=1007,Jr=1008,Ci=1009,wg=1010,Ag=1011,Yo=1012,dd=1013,es=1014,Yi=1015,Ko=1016,hd=1017,pd=1018,Zs=1020,Cg=35902,Rg=1021,bg=1022,Yn=1023,Pg=1024,Lg=1025,js=1026,Qs=1027,Dg=1028,md=1029,Ng=1030,gd=1031,_d=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,If=35840,Uf=35841,Ff=35842,Of=35843,kf=36196,Bf=37492,zf=37496,Vf=37808,Hf=37809,Gf=37810,Wf=37811,Xf=37812,jf=37813,Yf=37814,qf=37815,$f=37816,Kf=37817,Zf=37818,Qf=37819,Jf=37820,ed=37821,Bl=36492,td=36494,nd=36495,Ig=36283,id=36284,rd=36285,sd=36286,J0=3200,ex=3201,Ug=0,tx=1,Tr="",ii="srgb",eo="srgb-linear",$l="linear",Pt="srgb",Cs=7680,cm=519,nx=512,ix=513,rx=514,Fg=515,sx=516,ox=517,ax=518,lx=519,um=35044,fm="300 es",qi=2e3,Vl=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,od=180/Math.PI;function Zo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function wn(r,e,t){return Math.max(e,Math.min(t,r))}function cx(r,e){return(r%e+e)%e}function zu(r,e,t){return(1-t)*r+t*e}function Oo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ux={DEG2RAD:jo};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,s,a,l,u,f,h,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,p)}set(e,t,s,a,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],_=s[4],g=s[7],v=s[2],S=s[5],M=s[8],T=a[0],y=a[3],x=a[6],D=a[1],b=a[4],R=a[7],B=a[2],F=a[5],U=a[8];return l[0]=u*T+f*D+h*B,l[3]=u*y+f*b+h*F,l[6]=u*x+f*R+h*U,l[1]=p*T+_*D+g*B,l[4]=p*y+_*b+g*F,l[7]=p*x+_*R+g*U,l[2]=v*T+S*D+M*B,l[5]=v*y+S*b+M*F,l[8]=v*x+S*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-s*l*_+s*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=_*u-f*p,v=f*h-_*l,S=p*l-u*h,M=t*g+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(a*p-_*s)*T,e[2]=(f*s-a*u)*T,e[3]=v*T,e[4]=(_*t-a*h)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*h-p*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Vu.makeScale(e,t)),this}rotate(e){return this.premultiply(Vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new lt;function Og(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fx(){const r=Hl("canvas");return r.style.display="block",r}const dm={};function Wo(r){r in dm||(dm[r]=!0,console.warn(r))}function dx(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function hx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function px(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?$l:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function $i(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hm=[.64,.33,.3,.6,.15,.06],pm=[.2126,.7152,.0722],mm=[.3127,.329],gm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[eo]:{primaries:hm,whitePoint:mm,transfer:$l,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:hm,whitePoint:mm,transfer:Pt,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}});let Rs;class mx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Hl("canvas")),Rs.width=e.width,Rs.height=e.height;const s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=$i(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($i(t[s]/255)*255):t[s]=$i(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Hu(a[u].image)):l.push(Hu(a[u]))}else l=Hu(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Hu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _x=0;class Cn extends ns{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,s=wr,a=wr,l=oi,u=Jr,f=Yn,h=Ci,p=Cn.DEFAULT_ANISOTROPY,_=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Zo(),this.name="",this.source=new kg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Df:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Df:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Tg;Cn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,s=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],v=h[1],S=h[5],M=h[9],T=h[2],y=h[6],x=h[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,R=(S+1)/2,B=(x+1)/2,F=(_+v)/4,U=(g+T)/4,j=(M+y)/4;return b>R&&b>B?b<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(b),a=F/s,l=U/s):R>B?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=F/a,l=j/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=U/l,a=j/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-M)*(y-M)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(g-T)/D,this.z=(v-_)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vx extends ns{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Cn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends vx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Bg extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,f){let h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];const v=l[u+0],S=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=T;return}if(g!==T||h!==v||p!==S||_!==M){let y=1-f;const x=h*v+p*S+_*M+g*T,D=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const B=Math.sqrt(b),F=Math.atan2(B,x*D);y=Math.sin(y*F)/B,f=Math.sin(f*F)/B}const R=f*D;if(h=h*y+v*R,p=p*y+S*R,_=_*y+M*R,g=g*y+T*R,y===1-f){const B=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=B,p*=B,_*=B,g*=B}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,u){const f=s[a],h=s[a+1],p=s[a+2],_=s[a+3],g=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+_*g+h*S-p*v,e[t+1]=h*M+_*v+p*g-f*S,e[t+2]=p*M+_*S+f*v-h*g,e[t+3]=_*M-f*g-h*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(a/2),g=f(l/2),v=h(s/2),S=h(a/2),M=h(l/2);switch(u){case"XYZ":this._x=v*_*g+p*S*M,this._y=p*S*g-v*_*M,this._z=p*_*M+v*S*g,this._w=p*_*g-v*S*M;break;case"YXZ":this._x=v*_*g+p*S*M,this._y=p*S*g-v*_*M,this._z=p*_*M-v*S*g,this._w=p*_*g+v*S*M;break;case"ZXY":this._x=v*_*g-p*S*M,this._y=p*S*g+v*_*M,this._z=p*_*M+v*S*g,this._w=p*_*g-v*S*M;break;case"ZYX":this._x=v*_*g-p*S*M,this._y=p*S*g+v*_*M,this._z=p*_*M-v*S*g,this._w=p*_*g+v*S*M;break;case"YZX":this._x=v*_*g+p*S*M,this._y=p*S*g+v*_*M,this._z=p*_*M-v*S*g,this._w=p*_*g-v*S*M;break;case"XZY":this._x=v*_*g-p*S*M,this._y=p*S*g-v*_*M,this._z=p*_*M+v*S*g,this._w=p*_*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],g=t[10],v=s+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(s>f&&s>g){const S=2*Math.sqrt(1+s-f-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-s-g);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-s-f);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*f+a*p-l*h,this._y=a*_+u*h+l*f-s*p,this._z=l*_+u*p+s*h-a*f,this._w=u*_-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,f),g=Math.sin((1-t)*_)/p,v=Math.sin(t*_)/p;return this._w=u*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*s),_=2*(f*t-l*a),g=2*(l*s-u*t);return this.x=t+h*p+u*g-f*_,this.y=s+h*_+f*p-l*g,this.z=a+h*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-s*h,this.z=s*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new $,vm=new ts;class to{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),al.copy(s.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ll.subVectors(this.max,ko),bs.subVectors(e.a,ko),Ps.subVectors(e.b,ko),Ls.subVectors(e.c,ko),_r.subVectors(Ps,bs),vr.subVectors(Ls,Ps),Wr.subVectors(bs,Ls);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!Wu(t,bs,Ps,Ls,ll)||(t=[1,0,0,0,1,0,0,0,1],!Wu(t,bs,Ps,Ls,ll))?!1:(cl.crossVectors(_r,vr),t=[cl.x,cl.y,cl.z],Wu(t,bs,Ps,Ls,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new $,new $,new $,new $,new $,new $,new $,new $],_i=new $,al=new to,bs=new $,Ps=new $,Ls=new $,_r=new $,vr=new $,Wr=new $,ko=new $,ll=new $,cl=new $,Xr=new $;function Wu(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){Xr.fromArray(r,l);const f=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),h=e.dot(Xr),p=t.dot(Xr),_=s.dot(Xr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const yx=new to,Bo=new $,Xu=new $;class Kl{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):yx.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Bo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Xu)),this.expandByPoint(Bo.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new $,ju=new $,ul=new $,xr=new $,Yu=new $,fl=new $,qu=new $;class vd{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ju.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(ju);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ul),f=xr.dot(this.direction),h=-xr.dot(ul),p=xr.lengthSq(),_=Math.abs(1-u*u);let g,v,S,M;if(_>0)if(g=u*h-f,v=u*f-h,M=l*_,g>=0)if(v>=-M)if(v<=M){const T=1/_;g*=T,v*=T,S=g*(g+u*v+2*f)+v*(u*g+v+2*h)+p}else v=l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*h)+p;else v=-l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*h)+p;else v<=-M?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+v*(v+2*h)+p):v<=M?(g=0,v=Math.min(Math.max(-l,-h),l),S=v*(v+2*h)+p):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+v*(v+2*h)+p);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(ju).addScaledVector(ul,v),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),g>=0?(f=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){Yu.subVectors(t,e),fl.subVectors(s,e),qu.crossVectors(Yu,fl);let u=this.direction.dot(qu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=f*this.direction.dot(fl.crossVectors(xr,fl));if(h<0)return null;const p=f*this.direction.dot(Yu.cross(xr));if(p<0||h+p>u)return null;const _=-f*xr.dot(qu);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,s,a,l,u,f,h,p,_,g,v,S,M,T,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,p,_,g,v,S,M,T,y)}set(e,t,s,a,l,u,f,h,p,_,g,v,S,M,T,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=M,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*g,M=f*_,T=f*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+M*p,t[5]=v-T*p,t[9]=-f*h,t[2]=T-v*p,t[6]=M+S*p,t[10]=u*h}else if(e.order==="YXZ"){const v=h*_,S=h*g,M=p*_,T=p*g;t[0]=v+T*f,t[4]=M*f-S,t[8]=u*p,t[1]=u*g,t[5]=u*_,t[9]=-f,t[2]=S*f-M,t[6]=T+v*f,t[10]=u*h}else if(e.order==="ZXY"){const v=h*_,S=h*g,M=p*_,T=p*g;t[0]=v-T*f,t[4]=-u*g,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*_,t[9]=T-v*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const v=u*_,S=u*g,M=f*_,T=f*g;t[0]=h*_,t[4]=M*p-S,t[8]=v*p+T,t[1]=h*g,t[5]=T*p+v,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,S=u*p,M=f*h,T=f*p;t[0]=h*_,t[4]=T-v*g,t[8]=M*g+S,t[1]=g,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*g+M,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*h,S=u*p,M=f*h,T=f*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=v*g+T,t[5]=u*_,t[9]=S*g-M,t[2]=M*g-S,t[6]=f*_,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,Mx)}lookAt(e,t,s){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(s,Wn),yr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(s,Wn)),yr.normalize(),dl.crossVectors(Wn,yr),a[0]=yr.x,a[4]=dl.x,a[8]=Wn.x,a[1]=yr.y,a[5]=dl.y,a[9]=Wn.y,a[2]=yr.z,a[6]=dl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],_=s[1],g=s[5],v=s[9],S=s[13],M=s[2],T=s[6],y=s[10],x=s[14],D=s[3],b=s[7],R=s[11],B=s[15],F=a[0],U=a[4],j=a[8],P=a[12],C=a[1],z=a[5],le=a[9],te=a[13],fe=a[2],he=a[6],ce=a[10],Y=a[14],O=a[3],oe=a[7],re=a[11],I=a[15];return l[0]=u*F+f*C+h*fe+p*O,l[4]=u*U+f*z+h*he+p*oe,l[8]=u*j+f*le+h*ce+p*re,l[12]=u*P+f*te+h*Y+p*I,l[1]=_*F+g*C+v*fe+S*O,l[5]=_*U+g*z+v*he+S*oe,l[9]=_*j+g*le+v*ce+S*re,l[13]=_*P+g*te+v*Y+S*I,l[2]=M*F+T*C+y*fe+x*O,l[6]=M*U+T*z+y*he+x*oe,l[10]=M*j+T*le+y*ce+x*re,l[14]=M*P+T*te+y*Y+x*I,l[3]=D*F+b*C+R*fe+B*O,l[7]=D*U+b*z+R*he+B*oe,l[11]=D*j+b*le+R*ce+B*re,l[15]=D*P+b*te+R*Y+B*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],g=e[6],v=e[10],S=e[14],M=e[3],T=e[7],y=e[11],x=e[15];return M*(+l*h*g-a*p*g-l*f*v+s*p*v+a*f*S-s*h*S)+T*(+t*h*S-t*p*v+l*u*v-a*u*S+a*p*_-l*h*_)+y*(+t*p*g-t*f*S-l*u*g+s*u*S+l*f*_-s*p*_)+x*(-a*f*_-t*h*g+t*f*v+a*u*g-s*u*v+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=e[9],v=e[10],S=e[11],M=e[12],T=e[13],y=e[14],x=e[15],D=g*y*p-T*v*p+T*h*S-f*y*S-g*h*x+f*v*x,b=M*v*p-_*y*p-M*h*S+u*y*S+_*h*x-u*v*x,R=_*T*p-M*g*p+M*f*S-u*T*S-_*f*x+u*g*x,B=M*g*h-_*T*h-M*f*v+u*T*v+_*f*y-u*g*y,F=t*D+s*b+a*R+l*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(T*v*l-g*y*l-T*a*S+s*y*S+g*a*x-s*v*x)*U,e[2]=(f*y*l-T*h*l+T*a*p-s*y*p-f*a*x+s*h*x)*U,e[3]=(g*h*l-f*v*l-g*a*p+s*v*p+f*a*S-s*h*S)*U,e[4]=b*U,e[5]=(_*y*l-M*v*l+M*a*S-t*y*S-_*a*x+t*v*x)*U,e[6]=(M*h*l-u*y*l-M*a*p+t*y*p+u*a*x-t*h*x)*U,e[7]=(u*v*l-_*h*l+_*a*p-t*v*p-u*a*S+t*h*S)*U,e[8]=R*U,e[9]=(M*g*l-_*T*l-M*s*S+t*T*S+_*s*x-t*g*x)*U,e[10]=(u*T*l-M*f*l+M*s*p-t*T*p-u*s*x+t*f*x)*U,e[11]=(_*f*l-u*g*l-_*s*p+t*g*p+u*s*S-t*f*S)*U,e[12]=B*U,e[13]=(_*T*a-M*g*a+M*s*v-t*T*v-_*s*y+t*g*y)*U,e[14]=(M*f*a-u*T*a-M*s*h+t*T*h+u*s*y-t*f*y)*U,e[15]=(u*g*a-_*f*a+_*s*h-t*g*h-u*s*v+t*f*v)*U,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+s,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+s,_*h-a*u,0,p*h-a*f,_*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,g=f+f,v=l*p,S=l*_,M=l*g,T=u*_,y=u*g,x=f*g,D=h*p,b=h*_,R=h*g,B=s.x,F=s.y,U=s.z;return a[0]=(1-(T+x))*B,a[1]=(S+R)*B,a[2]=(M-b)*B,a[3]=0,a[4]=(S-R)*F,a[5]=(1-(v+x))*F,a[6]=(y+D)*F,a[7]=0,a[8]=(M+b)*U,a[9]=(y-D)*U,a[10]=(1-(v+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const u=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],vi.copy(this);const p=1/l,_=1/u,g=1/f;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),s.x=l,s.y=u,s.z=f,this}makePerspective(e,t,s,a,l,u,f=qi){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(f===qi)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===Vl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,f=qi){const h=this.elements,p=1/(t-e),_=1/(s-a),g=1/(u-l),v=(t+e)*p,S=(s+a)*_;let M,T;if(f===qi)M=(u+l)*g,T=-2*g;else if(f===Vl)M=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ds=new $,vi=new Gt,Sx=new $(0,0,0),Mx=new $(1,1,1),yr=new $,dl=new $,Wn=new $,xm=new Gt,ym=new ts;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],_=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ex=0;const Sm=new $,Ns=new ts,Gi=new Gt,hl=new $,zo=new $,Tx=new $,wx=new ts,Mm=new $(1,0,0),Em=new $(0,1,0),Tm=new $(0,0,1),wm={type:"added"},Ax={type:"removed"},Is={type:"childadded",child:null},$u={type:"childremoved",child:null};class un extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new $,t=new Ri,s=new ts,a=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new lt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?hl.copy(e):hl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(zo,hl,this.up):Gi.lookAt(hl,zo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}un.DEFAULT_UP=new $(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new $,Wi=new $,Ku=new $,Xi=new $,Us=new $,Fs=new $,Am=new $,Zu=new $,Qu=new $,Ju=new $,ef=new Bt,tf=new Bt,nf=new Bt;class si{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),xi.subVectors(e,t),a.cross(xi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){xi.subVectors(a,t),Wi.subVectors(s,t),Ku.subVectors(e,t);const u=xi.dot(xi),f=xi.dot(Wi),h=xi.dot(Ku),p=Wi.dot(Wi),_=Wi.dot(Ku),g=u*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(p*h-f*_)*v,M=(u*_-f*h)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,a,l,u,f,h){return this.getBarycoord(e,t,s,a,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(u,Xi.y),h.addScaledVector(f,Xi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,s),nf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(ef,l.x),u.addScaledVector(tf,l.y),u.addScaledVector(nf,l.z),u}static isFrontFacing(e,t,s,a){return xi.subVectors(s,t),Wi.subVectors(e,t),xi.cross(Wi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return si.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,f;Us.subVectors(a,s),Fs.subVectors(l,s),Zu.subVectors(e,s);const h=Us.dot(Zu),p=Fs.dot(Zu);if(h<=0&&p<=0)return t.copy(s);Qu.subVectors(e,a);const _=Us.dot(Qu),g=Fs.dot(Qu);if(_>=0&&g<=_)return t.copy(a);const v=h*g-_*p;if(v<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Us,u);Ju.subVectors(e,l);const S=Us.dot(Ju),M=Fs.dot(Ju);if(M>=0&&S<=M)return t.copy(l);const T=S*p-h*M;if(T<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(Fs,f);const y=_*M-S*g;if(y<=0&&g-_>=0&&S-M>=0)return Am.subVectors(l,a),f=(g-_)/(g-_+(S-M)),t.copy(a).addScaledVector(Am,f);const x=1/(y+T+v);return u=T*x,f=v*x,t.copy(s).addScaledVector(Us,u).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function rf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class gt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Mt.workingColorSpace){if(e=cx(e,1),t=wn(t,0,1),s=wn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=rf(u,l,e+1/3),this.g=rf(u,l,e),this.b=rf(u,l,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=ii){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const s=Vg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Mt.fromWorkingColorSpace(vn.copy(this),e),Math.round(wn(vn.r*255,0,255))*65536+Math.round(wn(vn.g*255,0,255))*256+Math.round(wn(vn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(vn.copy(this),t);const s=vn.r,a=vn.g,l=vn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const g=u-f;switch(p=_<=.5?g/(u+f):g/(2-u-f),u){case s:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-s)/g+2;break;case l:h=(s-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ii){Mt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,s=vn.g,a=vn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(pl);const s=zu(Sr.h,pl.h,t),a=zu(Sr.s,pl.s,t),l=zu(Sr.l,pl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new gt;gt.NAMES=Vg;let Cx=0;class no extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Zo(),this.name="",this.blending=Xs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(s.blending=this.blending),this.side!==Rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sf&&(s.blendSrc=this.blendSrc),this.blendDst!==Mf&&(s.blendDst=this.blendDst),this.blendEquation!==Zr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hg extends no{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new $,ml=new ct;class cn{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=um,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class Gg extends cn{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Wg extends cn{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Bn extends cn{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Rx=0;const ni=new Gt,sf=new un,Os=new $,Xn=new to,Vo=new to,on=new $;class li extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Og(e)?Wg:Gg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new lt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bn(s,3))}else{for(let s=0,a=t.count;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Vo.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Xn.min,Vo.min),Xn.expandByPoint(on),on.addVectors(Xn.max,Vo.max),Xn.expandByPoint(on)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)on.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(on));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)on.fromBufferAttribute(f,p),h&&(Os.fromBufferAttribute(e,p),on.add(Os)),a=Math.max(a,s.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let j=0;j<s.count;j++)f[j]=new $,h[j]=new $;const p=new $,_=new $,g=new $,v=new ct,S=new ct,M=new ct,T=new $,y=new $;function x(j,P,C){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,P),g.fromBufferAttribute(s,C),v.fromBufferAttribute(l,j),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),_.sub(p),g.sub(p),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(T.copy(_).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(z),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-M.x).multiplyScalar(z),f[j].add(T),f[P].add(T),f[C].add(T),h[j].add(y),h[P].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,P=D.length;j<P;++j){const C=D[j],z=C.start,le=C.count;for(let te=z,fe=z+le;te<fe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new $,R=new $,B=new $,F=new $;function U(j){B.fromBufferAttribute(a,j),F.copy(B);const P=f[j];b.copy(P),b.sub(B.multiplyScalar(B.dot(P))).normalize(),R.crossVectors(F,P);const z=R.dot(h[j])<0?-1:1;u.setXYZW(j,b.x,b.y,b.z,z)}for(let j=0,P=D.length;j<P;++j){const C=D[j],z=C.start,le=C.count;for(let te=z,fe=z+le;te<fe;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new $,l=new $,u=new $,f=new $,h=new $,p=new $,_=new $,g=new $;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),f.add(_),h.add(_),p.add(_),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(h.length*_);let S=0,M=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*_;for(let x=0;x<_;x++)v[M++]=p[S++]}return new cn(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],S=e(v,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,v=p.length;g<v;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new Gt,jr=new vd,gl=new Kl,Rm=new $,_l=new $,vl=new $,xl=new $,of=new $,yl=new $,bm=new $,Sl=new $;class ai extends un{constructor(e=new li,t=new Hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){yl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],g=l[h];_!==0&&(of.fromBufferAttribute(g,e),u?yl.addScaledVector(of,_):yl.addScaledVector(of.sub(t),_))}t.add(yl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gl.copy(s.boundingSphere),gl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(gl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(gl,Rm)===null||jr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(Cm),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const y=v[M],x=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,B=b;R<B;R+=3){const F=f.getX(R),U=f.getX(R+1),j=f.getX(R+2);a=Ml(this,x,e,s,p,_,g,F,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=M,x=T;y<x;y+=3){const D=f.getX(y),b=f.getX(y+1),R=f.getX(y+2);a=Ml(this,u,e,s,p,_,g,D,b,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const y=v[M],x=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,B=b;R<B;R+=3){const F=R,U=R+1,j=R+2;a=Ml(this,x,e,s,p,_,g,F,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=M,x=T;y<x;y+=3){const D=y,b=y+1,R=y+2;a=Ml(this,u,e,s,p,_,g,D,b,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function bx(r,e,t,s,a,l,u,f){let h;if(e.side===kn?h=s.intersectTriangle(u,l,a,!0,f):h=s.intersectTriangle(a,l,u,e.side===Rr,f),h===null)return null;Sl.copy(f),Sl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Sl);return p<t.near||p>t.far?null:{distance:p,point:Sl.clone(),object:r}}function Ml(r,e,t,s,a,l,u,f,h,p){r.getVertexPosition(f,_l),r.getVertexPosition(h,vl),r.getVertexPosition(p,xl);const _=bx(r,e,t,s,_l,vl,xl,bm);if(_){const g=new $;si.getBarycoord(bm,_l,vl,xl,g),a&&(_.uv=si.getInterpolatedAttribute(a,f,h,p,g,new ct)),l&&(_.uv1=si.getInterpolatedAttribute(l,f,h,p,g,new ct)),u&&(_.normal=si.getInterpolatedAttribute(u,f,h,p,g,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new $,materialIndex:0};si.getNormal(_l,vl,xl,v.normal),_.face=v,_.barycoord=g}return _}class Qo extends li{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,a,u,2),M("x","z","y",1,-1,e,s,-t,a,u,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(g,2));function M(T,y,x,D,b,R,B,F,U,j,P){const C=R/U,z=B/j,le=R/2,te=B/2,fe=F/2,he=U+1,ce=j+1;let Y=0,O=0;const oe=new $;for(let re=0;re<ce;re++){const I=re*z-te;for(let Z=0;Z<he;Z++){const Le=Z*C-le;oe[T]=Le*D,oe[y]=I*b,oe[x]=fe,p.push(oe.x,oe.y,oe.z),oe[T]=0,oe[y]=0,oe[x]=F>0?1:-1,_.push(oe.x,oe.y,oe.z),g.push(Z/U),g.push(1-re/j),Y+=1}}for(let re=0;re<j;re++)for(let I=0;I<U;I++){const Z=v+I+he*re,Le=v+I+he*(re+1),J=v+(I+1)+he*(re+1),ue=v+(I+1)+he*re;h.push(Z,Le,ue),h.push(Le,J,ue),O+=6}f.addGroup(S,O,P),S+=O,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const s=Js(r[t]);for(const a in s)e[a]=s[a]}return e}function Px(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Lx={clone:Js,merge:Tn};var Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends no{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class jg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new $,Pm=new ct,Lm=new ct;class ri extends jg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,Lm),t.subVectors(Lm,Pm)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/p,a*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class Ix extends un{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(ks,Bs,e,t);a.layers=this.layers,this.add(a);const l=new ri(ks,Bs,e,t);l.layers=this.layers,this.add(l);const u=new ri(ks,Bs,e,t);u.layers=this.layers,this.add(u);const f=new ri(ks,Bs,e,t);f.layers=this.layers,this.add(f);const h=new ri(ks,Bs,e,t);h.layers=this.layers,this.add(h);const p=new ri(ks,Bs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(g,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Yg extends Cn{constructor(e,t,s,a,l,u,f,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,s,a,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Yg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Qo(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:Js(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ar});l.uniforms.tEquirect.value=t;const u=new ai(a,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=oi),new Ix(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}const af=new $,Fx=new $,Ox=new lt;class Er{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=af.subVectors(s,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(af),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ox.getNormalMatrix(e),a=this.coplanarPoint(af).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Kl,El=new $;class xd{constructor(e=new Er,t=new Er,s=new Er,a=new Er,l=new Er,u=new Er){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=qi){const s=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],p=a[4],_=a[5],g=a[6],v=a[7],S=a[8],M=a[9],T=a[10],y=a[11],x=a[12],D=a[13],b=a[14],R=a[15];if(s[0].setComponents(h-l,v-p,y-S,R-x).normalize(),s[1].setComponents(h+l,v+p,y+S,R+x).normalize(),s[2].setComponents(h+u,v+_,y+M,R+D).normalize(),s[3].setComponents(h-u,v-_,y-M,R-D).normalize(),s[4].setComponents(h-f,v-g,y-T,R-b).normalize(),t===qi)s[5].setComponents(h+f,v+g,y+T,R+b).normalize();else if(t===Vl)s[5].setComponents(f,g,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(El.x=a.normal.x>0?e.max.x:e.min.x,El.y=a.normal.y>0?e.max.y:e.min.y,El.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qg(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function kx(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const _=h.array,g=h.updateRanges;if(r.bindBuffer(p,f),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<g.length;S++){const M=g[v],T=g[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,g[v]=T)}g.length=v+1;for(let S=0,M=g.length;S<M;S++){const T=g[S];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}class Zl extends li{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,_=h+1,g=e/f,v=t/h,S=[],M=[],T=[],y=[];for(let x=0;x<_;x++){const D=x*v-u;for(let b=0;b<p;b++){const R=b*g-l;M.push(R,-D,0),T.push(0,0,1),y.push(b/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let D=0;D<f;D++){const b=D+p*x,R=D+p*(x+1),B=D+1+p*(x+1),F=D+1+p*x;S.push(b,R,F),S.push(R,B,F)}this.setIndex(S),this.setAttribute("position",new Bn(M,3)),this.setAttribute("normal",new Bn(T,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Py=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ky=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,By=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ES=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:Bx,alphahash_pars_fragment:zx,alphamap_fragment:Vx,alphamap_pars_fragment:Hx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:jx,batching_pars_vertex:Yx,batching_vertex:qx,begin_vertex:$x,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:Qx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ty,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:ry,color_pars_fragment:sy,color_pars_vertex:oy,color_vertex:ay,common:ly,cube_uv_reflection_fragment:cy,defaultnormal_vertex:uy,displacementmap_pars_vertex:fy,displacementmap_vertex:dy,emissivemap_fragment:hy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:vy,envmap_pars_fragment:xy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Ly,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:Ey,fog_fragment:Ty,fog_pars_fragment:wy,gradientmap_pars_fragment:Ay,lightmap_pars_fragment:Cy,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:by,lights_pars_begin:Py,lights_toon_fragment:Dy,lights_toon_pars_fragment:Ny,lights_phong_fragment:Iy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Fy,lights_physical_pars_fragment:Oy,lights_fragment_begin:ky,lights_fragment_maps:By,lights_fragment_end:zy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:jy,map_particle_fragment:Yy,map_particle_pars_fragment:qy,metalnessmap_fragment:$y,metalnessmap_pars_fragment:Ky,morphinstance_vertex:Zy,morphcolor_vertex:Qy,morphnormal_vertex:Jy,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:oS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:lS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:fS,opaque_fragment:dS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:xS,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:SS,shadowmap_vertex:MS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:wS,skinning_vertex:AS,skinnormal_vertex:CS,specularmap_fragment:RS,specularmap_pars_fragment:bS,tonemapping_fragment:PS,tonemapping_pars_fragment:LS,transmission_fragment:DS,transmission_pars_fragment:NS,uv_pars_fragment:IS,uv_pars_vertex:US,uv_vertex:FS,worldpos_vertex:OS,background_vert:kS,background_frag:BS,backgroundCube_vert:zS,backgroundCube_frag:VS,cube_vert:HS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distanceRGBA_vert:jS,distanceRGBA_frag:YS,equirect_vert:qS,equirect_frag:$S,linedashed_vert:KS,linedashed_frag:ZS,meshbasic_vert:QS,meshbasic_frag:JS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:uM,meshtoon_frag:fM,points_vert:dM,points_frag:hM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},Pe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Tl={r:0,b:0,g:0},qr=new Ri,vM=new Gt;function xM(r,e,t,s,a,l,u){const f=new gt(0);let h=l===!0?0:1,p,_,g=null,v=0,S=null;function M(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?t:e).get(b)),b}function T(D){let b=!1;const R=M(D);R===null?x(f,h):R&&R.isColor&&(x(R,1),b=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,b){const R=M(b);R&&(R.isCubeTexture||R.mapping===ql)?(_===void 0&&(_=new ai(new Qo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Js(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(b.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(qr)),_.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Pt,(g!==R||v!==R.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=R,v=R.version,S=r.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ai(new Zl(2,2),new bi({name:"BackgroundMaterial",uniforms:Js(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=R,v=R.version,S=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,b){D.getRGB(Tl,Xg(r)),s.buffers.color.setClear(Tl.r,Tl.g,Tl.b,b,u)}return{getClearColor:function(){return f},setClearColor:function(D,b=1){f.set(D),h=b,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,x(f,h)},render:T,addToRenderList:y}}function yM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,u=!1;function f(C,z,le,te,fe){let he=!1;const ce=g(te,le,z);l!==ce&&(l=ce,p(l.object)),he=S(C,te,le,fe),he&&M(C,te,le,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,z,le,te),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function g(C,z,le){const te=le.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let he=fe[z.id];he===void 0&&(he={},fe[z.id]=he);let ce=he[te];return ce===void 0&&(ce=v(h()),he[te]=ce),ce}function v(C){const z=[],le=[],te=[];for(let fe=0;fe<t;fe++)z[fe]=0,le[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:te,object:C,attributes:{},index:null}}function S(C,z,le,te){const fe=l.attributes,he=z.attributes;let ce=0;const Y=le.getAttributes();for(const O in Y)if(Y[O].location>=0){const re=fe[O];let I=he[O];if(I===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;ce++}return l.attributesNum!==ce||l.index!==te}function M(C,z,le,te){const fe={},he=z.attributes;let ce=0;const Y=le.getAttributes();for(const O in Y)if(Y[O].location>=0){let re=he[O];re===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),fe[O]=I,ce++}l.attributes=fe,l.attributesNum=ce,l.index=te}function T(){const C=l.newAttributes;for(let z=0,le=C.length;z<le;z++)C[z]=0}function y(C){x(C,0)}function x(C,z){const le=l.newAttributes,te=l.enabledAttributes,fe=l.attributeDivisors;le[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),fe[C]!==z&&(r.vertexAttribDivisor(C,z),fe[C]=z)}function D(){const C=l.newAttributes,z=l.enabledAttributes;for(let le=0,te=z.length;le<te;le++)z[le]!==C[le]&&(r.disableVertexAttribArray(le),z[le]=0)}function b(C,z,le,te,fe,he,ce){ce===!0?r.vertexAttribIPointer(C,z,le,fe,he):r.vertexAttribPointer(C,z,le,te,fe,he)}function R(C,z,le,te){T();const fe=te.attributes,he=le.getAttributes(),ce=z.defaultAttributeValues;for(const Y in he){const O=he[Y];if(O.location>=0){let oe=fe[Y];if(oe===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),oe!==void 0){const re=oe.normalized,I=oe.itemSize,Z=e.get(oe);if(Z===void 0)continue;const Le=Z.buffer,J=Z.type,ue=Z.bytesPerElement,Me=J===r.INT||J===r.UNSIGNED_INT||oe.gpuType===dd;if(oe.isInterleavedBufferAttribute){const _e=oe.data,Ce=_e.stride,Ue=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let $e=0;$e<O.locationSize;$e++)x(O.location+$e,_e.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let $e=0;$e<O.locationSize;$e++)y(O.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let $e=0;$e<O.locationSize;$e++)b(O.location+$e,I/O.locationSize,J,re,Ce*ue,(Ue+I/O.locationSize*$e)*ue,Me)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<O.locationSize;_e++)x(O.location+_e,oe.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<O.locationSize;_e++)y(O.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let _e=0;_e<O.locationSize;_e++)b(O.location+_e,I/O.locationSize,J,re,I*ue,I/O.locationSize*_e*ue,Me)}}else if(ce!==void 0){const re=ce[Y];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(O.location,re);break;case 3:r.vertexAttrib3fv(O.location,re);break;case 4:r.vertexAttrib4fv(O.location,re);break;default:r.vertexAttrib1fv(O.location,re)}}}}D()}function B(){j();for(const C in s){const z=s[C];for(const le in z){const te=z[le];for(const fe in te)_(te[fe].object),delete te[fe];delete z[le]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const le in z){const te=z[le];for(const fe in te)_(te[fe].object),delete te[fe];delete z[le]}delete s[C.id]}function U(C){for(const z in s){const le=s[z];if(le[C.id]===void 0)continue;const te=le[C.id];for(const fe in te)_(te[fe].object),delete te[fe];delete le[C.id]}}function j(){P(),u=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function SM(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function u(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),t.update(_,s,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let M=0;M<g;M++)S+=_[M];t.update(S,s,1)}function h(p,_,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],_[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T]*v[T];t.update(M,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function MM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==Yn&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const j=U===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ci&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Yi&&!j)}function h(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:B,maxSamples:F}}function EM(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new Er,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||a;return a=v,s=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=_(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!a||M===null||M.length===0||l&&!y)l?_(null):p();else{const D=l?0:s,b=D*4;let R=x.clippingState||null;h.value=R,R=_(M,v,b,S);for(let B=0;B!==b;++B)R[B]=t[B];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,v,S,M){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=h.value,M!==!0||y===null){const x=S+T*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let b=0,R=S;b!==T;++b,R+=4)u.copy(g[b]).applyMatrix4(D,f),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function TM(r){let e=new WeakMap;function t(u,f){return f===Pf?u.mapping=$s:f===Lf&&(u.mapping=Ks),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Pf||f===Lf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Ux(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class $g extends jg{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Dm=[.125,.215,.35,.446,.526,.582],Qr=20,lf=new $g,Nm=new gt;let cf=null,uf=0,ff=0,df=!1;const Kr=(1+Math.sqrt(5))/2,zs=1/Kr,Im=[new $(-Kr,zs,0),new $(Kr,zs,0),new $(-zs,0,Kr),new $(zs,0,Kr),new $(0,Kr,-zs),new $(0,Kr,zs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,uf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ko,format:Yn,colorSpace:eo,depthBuffer:!1},a=Fm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wM(l)),this._blurMaterial=AM(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,lf)}_sceneToCubeUV(e,t,s,a){const f=new ri(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(Nm),_.toneMapping=Cr,_.autoClear=!1;const S=new Hg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new ai(new Qo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Nm),T=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(f.up.set(0,h[x],0),f.lookAt(p[x],0,0)):D===1?(f.up.set(0,0,h[x]),f.lookAt(0,p[x],0)):(f.up.set(0,h[x],0),f.lookAt(0,0,p[x]));const b=this._cubeSize;wl(a,D*b,x>2?b:0,b,b),_.setRenderTarget(a),T&&_.render(M,f),_.render(e,f)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=v,_.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;wl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,lf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Im[(a-l-1)%Im.length];this._blur(e,l-1,l,u,f)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ai(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Qr-1),T=l/M,y=isFinite(l)?1+Math.floor(_*T):Qr;y>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Qr}`);const x=[];let D=0;for(let U=0;U<Qr;++U){const j=U/T,P=Math.exp(-j*j/2);x.push(P),U===0?D+=P:U<y&&(D+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-s;const R=this._sizeLods[a],B=3*R*(a>b-Gs?a-b+Gs:0),F=4*(this._cubeSize-R);wl(t,B,F,3*R,2*R),h.setRenderTarget(t),h.render(g,lf)}}function wM(r){const e=[],t=[],s=[];let a=r;const l=r-Gs+1+Dm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);t.push(f);let h=1/f;u>r-Gs?h=Dm[u-r+Gs-1]:u===0&&(h=0),s.push(h);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,M=6,T=3,y=2,x=1,D=new Float32Array(T*M*S),b=new Float32Array(y*M*S),R=new Float32Array(x*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,j=F>2?0:-1,P=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(P,T*M*F),b.set(v,y*M*F);const C=[F,F,F,F,F,F];R.set(C,x*M*F)}const B=new li;B.setAttribute("position",new cn(D,T)),B.setAttribute("uv",new cn(b,y)),B.setAttribute("faceIndex",new cn(R,x)),e.push(B),a>Gs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Fm(r,e,t){const s=new br(r,e,t);return s.texture.mapping=ql,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function AM(r,e,t){const s=new Float32Array(Qr),a=new $(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Om(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function km(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Pf||h===Lf,_=h===$s||h===Ks;if(p||_){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Um(r)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Um(r)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function RM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Wo("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function bM(r,e,t,s){const a={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const T=v.morphAttributes[M];for(let y=0,x=T.length;y<x;y++)e.remove(T[y])}v.removeEventListener("dispose",u),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const T=S[M];for(let y=0,x=T.length;y<x;y++)e.update(T[y],r.ARRAY_BUFFER)}}function p(g){const v=[],S=g.index,M=g.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let b=0,R=D.length;b<R;b+=3){const B=D[b+0],F=D[b+1],U=D[b+2];v.push(B,F,F,U,U,B)}}else if(M!==void 0){const D=M.array;T=M.version;for(let b=0,R=D.length/3-1;b<R;b+=3){const B=b+0,F=b+1,U=b+2;v.push(B,F,F,U,U,B)}}else return;const y=new(Og(v)?Wg:Gg)(v,1);y.version=T;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function _(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:_}}function PM(r,e,t){let s;function a(v){s=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,S){r.drawElements(s,S,l,v*u),t.update(S,s,1)}function p(v,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,v*u,M),t.update(S,s,M))}function _(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,s,1)}function g(v,S,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/u,S[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,T,0,M);let x=0;for(let D=0;D<M;D++)x+=S[D]*T[D];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function LM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function DM(r,e,t){const s=new WeakMap,a=new Bt;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(f);if(v===void 0||v.count!==g){let C=function(){j.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let B=f.attributes.position.count*R,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const U=new Float32Array(B*F*4*g),j=new Bg(U,B,F,g);j.type=Yi,j.needsUpdate=!0;const P=R*4;for(let z=0;z<g;z++){const le=x[z],te=D[z],fe=b[z],he=B*F*4*z;for(let ce=0;ce<le.count;ce++){const Y=ce*P;M===!0&&(a.fromBufferAttribute(le,ce),U[he+Y+0]=a.x,U[he+Y+1]=a.y,U[he+Y+2]=a.z,U[he+Y+3]=0),T===!0&&(a.fromBufferAttribute(te,ce),U[he+Y+4]=a.x,U[he+Y+5]=a.y,U[he+Y+6]=a.z,U[he+Y+7]=0),y===!0&&(a.fromBufferAttribute(fe,ce),U[he+Y+8]=a.x,U[he+Y+9]=a.y,U[he+Y+10]=a.z,U[he+Y+11]=fe.itemSize===4?a.w:1)}}v={count:g,texture:j,size:new ct(B,F)},s.set(f,v),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const T=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function NM(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return g}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Kg extends Cn{constructor(e,t,s,a,l,u,f,h,p,_=js){if(_!==js&&_!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===js&&(s=es),s===void 0&&_===Qs&&(s=Zs),super(null,a,l,u,f,h,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zg=new Cn,Bm=new Kg(1,1),Qg=new Bg,Jg=new xx,e_=new Yg,zm=[],Vm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function io(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=zm[a];if(l===void 0&&(l=new Float32Array(a),zm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ql(r,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function IM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function kM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Wm.set(s),r.uniformMatrix2fv(this.addr,!1,Wm),tn(t,s)}}function BM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Gm.set(s),r.uniformMatrix3fv(this.addr,!1,Gm),tn(t,s)}}function zM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,s))return;Hm.set(s),r.uniformMatrix4fv(this.addr,!1,Hm),tn(t,s)}}function VM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function XM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function $M(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Bm.compareFunction=Fg,l=Bm):l=Zg,t.setTexture2D(e||l,a)}function KM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Jg,a)}function ZM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||e_,a)}function QM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Qg,a)}function JM(r){switch(r){case 5126:return IM;case 35664:return UM;case 35665:return FM;case 35666:return OM;case 35674:return kM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return VM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return jM;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return QM}}function eE(r,e){r.uniform1fv(this.addr,e)}function tE(r,e){const t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function nE(r,e){const t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function iE(r,e){const t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function rE(r,e){const t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sE(r,e){const t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oE(r,e){const t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aE(r,e){r.uniform1iv(this.addr,e)}function lE(r,e){r.uniform2iv(this.addr,e)}function cE(r,e){r.uniform3iv(this.addr,e)}function uE(r,e){r.uniform4iv(this.addr,e)}function fE(r,e){r.uniform1uiv(this.addr,e)}function dE(r,e){r.uniform2uiv(this.addr,e)}function hE(r,e){r.uniform3uiv(this.addr,e)}function pE(r,e){r.uniform4uiv(this.addr,e)}function mE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Zg,l[u])}function gE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Jg,l[u])}function _E(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||e_,l[u])}function vE(r,e,t){const s=this.cache,a=e.length,l=Ql(t,a);en(s,l)||(r.uniform1iv(this.addr,l),tn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Qg,l[u])}function xE(r){switch(r){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return uE;case 5125:return fE;case 36294:return dE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class yE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class SE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xE(t.type)}}class ME{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function Xm(r,e){r.seq.push(e),r.map[e.id]=e}function EE(r,e,t){const s=r.name,a=s.length;for(hf.lastIndex=0;;){const l=hf.exec(s),u=hf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){Xm(t,p===void 0?new yE(f,r,e):new SE(f,r,e));break}else{let g=t.map[f];g===void 0&&(g=new ME(f),Xm(t,g)),t=g}}}class zl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);EE(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function jm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const TE=37297;let wE=0;function AE(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Ym=new lt;function CE(r){Mt._getMatrix(Ym,Mt.workingColorSpace,r);const e=`mat3( ${Ym.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case $l:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+AE(r.getShaderSource(e),u)}else return a}function RE(r,e){const t=CE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bE(r,e){let t;switch(e){case X0:t="Linear";break;case j0:t="Reinhard";break;case Y0:t="Cineon";break;case q0:t="ACESFilmic";break;case K0:t="AgX";break;case Z0:t="Neutral";break;case $0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new $;function PE(){Mt.getLuminanceCoefficients(Al);const r=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function DE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function NE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Xo(r){return r!==""}function $m(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(r){return r.replace(IE,FE)}const UE=new Map;function FE(r,e){let t=ut[e];if(t===void 0){const s=UE.get(e);if(s!==void 0)t=ut[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(r){return r.replace(OE,kE)}function kE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Qm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Eg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function HE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case G0:e="ENVMAP_BLENDING_MIX";break;case W0:e="ENVMAP_BLENDING_ADD";break}return e}function GE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function WE(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=BE(t),p=zE(t),_=VE(t),g=HE(t),v=GE(t),S=LE(t),M=DE(l),T=a.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ut.tonemapping_pars_fragment:"",t.toneMapping!==Cr?bE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,RE("linearToOutputTexel",t.outputColorSpace),PE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),u=ad(u),u=$m(u,t),u=Km(u,t),f=ad(f),f=$m(f,t),f=Km(f,t),u=Zm(u),f=Zm(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=D+y+u,R=D+x+f,B=jm(a,a.VERTEX_SHADER,b),F=jm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,B),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(z){if(r.debug.checkShaderErrors){const le=a.getProgramInfoLog(T).trim(),te=a.getShaderInfoLog(B).trim(),fe=a.getShaderInfoLog(F).trim();let he=!0,ce=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,B,F);else{const Y=qm(a,B,"vertex"),O=qm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+Y+`
`+O)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(te===""||fe==="")&&(ce=!1);ce&&(z.diagnostics={runnable:he,programLog:le,vertexShader:{log:te,prefix:y},fragmentShader:{log:fe,prefix:x}})}a.deleteShader(B),a.deleteShader(F),j=new zl(a,T),P=NE(a,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,TE)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=F,this}let XE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new YE(e),t.set(e,s)),s}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function qE(r,e,t,s,a,l,u){const f=new zg,h=new jE,p=new Set,_=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,C,z,le,te){const fe=le.fog,he=te.geometry,ce=P.isMeshStandardMaterial?le.environment:null,Y=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),O=Y&&Y.mapping===ql?Y.image.height:null,oe=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let Z=0;he.morphAttributes.position!==void 0&&(Z=1),he.morphAttributes.normal!==void 0&&(Z=2),he.morphAttributes.color!==void 0&&(Z=3);let Le,J,ue,Me;if(oe){const yt=Ai[oe];Le=yt.vertexShader,J=yt.fragmentShader}else Le=P.vertexShader,J=P.fragmentShader,h.update(P),ue=h.getVertexShaderID(P),Me=h.getFragmentShaderID(P);const _e=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,$e=te.isBatchedMesh===!0,wt=!!P.map,_t=!!P.matcap,It=!!Y,X=!!P.aoMap,xn=!!P.lightMap,mt=!!P.bumpMap,dt=!!P.normalMap,Ke=!!P.displacementMap,Rt=!!P.emissiveMap,qe=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,Ge=P.transmission>0,Re=w&&!!P.anisotropyMap,Fe=ee&&!!P.clearcoatMap,ft=ee&&!!P.clearcoatNormalMap,Ee=ee&&!!P.clearcoatRoughnessMap,ke=ve&&!!P.iridescenceMap,Je=ve&&!!P.iridescenceThicknessMap,tt=de&&!!P.sheenColorMap,Be=de&&!!P.sheenRoughnessMap,ht=!!P.specularMap,st=!!P.specularColorMap,Ct=!!P.specularIntensityMap,H=Ge&&!!P.transmissionMap,be=Ge&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,Ne=P.alphaTest>0,De=!!P.alphaHash,ot=!!P.extensions;let Ft=Cr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const $t={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:J,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:$e,batchingColor:$e&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:eo,alphaToCoverage:!!P.alphaToCoverage,map:wt,matcap:_t,envMap:It,envMapMode:It&&Y.mapping,envMapCubeUVHeight:O,aoMap:X,lightMap:xn,bumpMap:mt,normalMap:dt,displacementMap:v&&Ke,emissiveMap:Rt,normalMapObjectSpace:dt&&P.normalMapType===tx,normalMapTangentSpace:dt&&P.normalMapType===Ug,metalnessMap:qe,roughnessMap:L,anisotropy:w,anisotropyMap:Re,clearcoat:ee,clearcoatMap:Fe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:st,specularIntensityMap:Ct,transmission:Ge,transmissionMap:H,thicknessMap:be,gradientMap:ae,opaque:P.transparent===!1&&P.blending===Xs&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:De,combine:P.combine,mapUv:wt&&T(P.map.channel),aoMapUv:X&&T(P.aoMap.channel),lightMapUv:xn&&T(P.lightMap.channel),bumpMapUv:mt&&T(P.bumpMap.channel),normalMapUv:dt&&T(P.normalMap.channel),displacementMapUv:Ke&&T(P.displacementMap.channel),emissiveMapUv:Rt&&T(P.emissiveMap.channel),metalnessMapUv:qe&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Re&&T(P.anisotropyMap.channel),clearcoatMapUv:Fe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(P.sheenRoughnessMap.channel),specularMapUv:ht&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:Ct&&T(P.specularIntensityMap.channel),transmissionMapUv:H&&T(P.transmissionMap.channel),thicknessMapUv:be&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(dt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(wt||pe),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:wt&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===jn,flipSided:P.side===kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(C,P),b(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const C=M[P.type];let z;if(C){const le=Ai[C];z=Lx.clone(le.uniforms)}else z=P.uniforms;return z}function B(P,C){let z;for(let le=0,te=_.length;le<te;le++){const fe=_[le];if(fe.cacheKey===C){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new WE(r,C,P,l),_.push(z)),z}function F(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function U(P){h.remove(P)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:B,releaseProgram:F,releaseShaderCache:U,programs:_,dispose:j}}function $E(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function KE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(g,v,S,M,T,y){let x=r[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:T,group:y},r[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=T,x.group=y),e++,x}function f(g,v,S,M,T,y){const x=u(g,v,S,M,T,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(g,v,S,M,T,y){const x=u(g,v,S,M,T,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(g,v){t.length>1&&t.sort(g||KE),s.length>1&&s.sort(v||Jm),a.length>1&&a.sort(v||Jm)}function _(){for(let g=e,v=r.length;g<v;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:_,sort:p}}function ZE(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new eg,r.set(s,[u])):a>=l.length?(u=new eg,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function QE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new gt};break;case"SpotLight":t={position:new $,direction:new $,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function JE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eT=0;function tT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nT(r){const e=new QE,t=JE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const a=new $,l=new Gt,u=new Gt;function f(p){let _=0,g=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,M=0,T=0,y=0,x=0,D=0,b=0,R=0,B=0,F=0,U=0;p.sort(tT);for(let P=0,C=p.length;P<C;P++){const z=p[P],le=z.color,te=z.intensity,fe=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=le.r*te,g+=le.g*te,v+=le.b*te;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(z.sh.coefficients[ce],te);U++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,O=t.get(z);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,s.directionalShadow[S]=O,s.directionalShadowMap[S]=he,s.directionalShadowMatrix[S]=z.shadow.matrix,D++}s.directional[S]=ce,S++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(le).multiplyScalar(te),ce.distance=fe,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,s.spot[T]=ce;const Y=z.shadow;if(z.map&&(s.spotLightMap[B]=z.map,B++,Y.updateMatrices(z),z.castShadow&&F++),s.spotLightMatrix[T]=Y.matrix,z.castShadow){const O=t.get(z);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,s.spotShadow[T]=O,s.spotShadowMap[T]=he,R++}T++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(le).multiplyScalar(te),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=ce,y++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const Y=z.shadow,O=t.get(z);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,s.pointShadow[M]=O,s.pointShadowMap[M]=he,s.pointShadowMatrix[M]=z.shadow.matrix,b++}s.point[M]=ce,M++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(te),ce.groundColor.copy(z.groundColor).multiplyScalar(te),s.hemi[x]=ce,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const j=s.hash;(j.directionalLength!==S||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==b||j.numSpotShadows!==R||j.numSpotMaps!==B||j.numLightProbes!==U)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=R+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=U,j.directionalLength=S,j.pointLength=M,j.spotLength=T,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=b,j.numSpotShadows=R,j.numSpotMaps=B,j.numLightProbes=U,s.version=eT++)}function h(p,_){let g=0,v=0,S=0,M=0,T=0;const y=_.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const b=p[x];if(b.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(b.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const R=s.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),v++}else if(b.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:s}}function tg(r){const e=new nT(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function u(_){s.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function iT(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new tg(r),e.set(a,[f])):l>=u.length?(f=new tg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}class rT extends no{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends no{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lT(r,e,t){let s=new xd;const a=new ct,l=new ct,u=new Bt,f=new rT({depthPacking:ex}),h=new sT,p={},_=t.maxTextureSize,g={[Rr]:kn,[kn]:Rr,[jn]:jn},v=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:oT,fragmentShader:aT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ai(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eg;let x=this.type;this.render=function(F,U,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Ar),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const te=x!==ji&&this.type===ji,fe=x===ji&&this.type!==ji;for(let he=0,ce=F.length;he<ce;he++){const Y=F[he],O=Y.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const oe=O.getFrameExtents();if(a.multiply(oe),l.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/oe.x),a.x=l.x*oe.x,O.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/oe.y),a.y=l.y*oe.y,O.mapSize.y=l.y)),O.map===null||te===!0||fe===!0){const I=this.type!==ji?{minFilter:An,magFilter:An}:{};O.map!==null&&O.map.dispose(),O.map=new br(a.x,a.y,I),O.map.texture.name=Y.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const re=O.getViewportCount();for(let I=0;I<re;I++){const Z=O.getViewport(I);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),le.viewport(u),O.updateMatrices(Y,I),s=O.getFrustum(),R(U,j,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===ji&&D(O,j),O.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(P,C,z)};function D(F,U){const j=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new br(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(U,null,j,v,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(U,null,j,S,T,null)}function b(F,U,j,P){let C=null;const z=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)C=z;else if(C=j.isPointLight===!0?h:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const le=C.uuid,te=U.uuid;let fe=p[le];fe===void 0&&(fe={},p[le]=fe);let he=fe[te];he===void 0&&(he=C.clone(),fe[te]=he,U.addEventListener("dispose",B)),C=he}if(C.visible=U.visible,C.wireframe=U.wireframe,P===ji?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=r.properties.get(C);le.light=j}return C}function R(F,U,j,P,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ji)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const te=e.update(F),fe=F.material;if(Array.isArray(fe)){const he=te.groups;for(let ce=0,Y=he.length;ce<Y;ce++){const O=he[ce],oe=fe[O.materialIndex];if(oe&&oe.visible){const re=b(F,oe,P,C);F.onBeforeShadow(r,F,U,j,te,re,O),r.renderBufferDirect(j,null,te,re,F,O),F.onAfterShadow(r,F,U,j,te,re,O)}}}else if(fe.visible){const he=b(F,fe,P,C);F.onBeforeShadow(r,F,U,j,te,he,null),r.renderBufferDirect(j,null,te,he,F,null),F.onAfterShadow(r,F,U,j,te,he,null)}}const le=F.children;for(let te=0,fe=le.length;te<fe;te++)R(le[te],U,j,P,C)}function B(F){F.target.removeEventListener("dispose",B);for(const j in p){const P=p[j],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const cT={[Ef]:Tf,[wf]:Rf,[Af]:bf,[qs]:Cf,[Tf]:Ef,[Rf]:wf,[bf]:Af,[Cf]:qs};function uT(r,e){function t(){let H=!1;const be=new Bt;let ae=null;const pe=new Bt(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!H&&(r.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){H=Ne},setClear:function(Ne,De,ot,Ft,$t){$t===!0&&(Ne*=Ft,De*=Ft,ot*=Ft),be.set(Ne,De,ot,Ft),pe.equals(be)===!1&&(r.clearColor(Ne,De,ot,Ft),pe.copy(be))},reset:function(){H=!1,ae=null,pe.set(-1,0,0,0)}}}function s(){let H=!1,be=!1,ae=null,pe=null,Ne=null;return{setReversed:function(De){if(be!==De){const ot=e.get("EXT_clip_control");be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ne;Ne=null,this.setClear(Ft)}be=De},getReversed:function(){return be},setTest:function(De){De?_e(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(De){ae!==De&&!H&&(r.depthMask(De),ae=De)},setFunc:function(De){if(be&&(De=cT[De]),pe!==De){switch(De){case Ef:r.depthFunc(r.NEVER);break;case Tf:r.depthFunc(r.ALWAYS);break;case wf:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case Af:r.depthFunc(r.EQUAL);break;case Cf:r.depthFunc(r.GEQUAL);break;case Rf:r.depthFunc(r.GREATER);break;case bf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=De}},setLocked:function(De){H=De},setClear:function(De){Ne!==De&&(be&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){H=!1,ae=null,pe=null,Ne=null,be=!1}}}function a(){let H=!1,be=null,ae=null,pe=null,Ne=null,De=null,ot=null,Ft=null,$t=null;return{setTest:function(yt){H||(yt?_e(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(yt){be!==yt&&!H&&(r.stencilMask(yt),be=yt)},setFunc:function(yt,Rn,yn){(ae!==yt||pe!==Rn||Ne!==yn)&&(r.stencilFunc(yt,Rn,yn),ae=yt,pe=Rn,Ne=yn)},setOp:function(yt,Rn,yn){(De!==yt||ot!==Rn||Ft!==yn)&&(r.stencilOp(yt,Rn,yn),De=yt,ot=Rn,Ft=yn)},setLocked:function(yt){H=yt},setClear:function(yt){$t!==yt&&(r.clearStencil(yt),$t=yt)},reset:function(){H=!1,be=null,ae=null,pe=null,Ne=null,De=null,ot=null,Ft=null,$t=null}}}const l=new t,u=new s,f=new a,h=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,S=[],M=null,T=!1,y=null,x=null,D=null,b=null,R=null,B=null,F=null,U=new gt(0,0,0),j=0,P=!1,C=null,z=null,le=null,te=null,fe=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Y=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),ce=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ce=Y>=2);let oe=null,re={};const I=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),Le=new Bt().fromArray(I),J=new Bt().fromArray(Z);function ue(H,be,ae,pe){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture(H,De),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<ae;ot++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(be+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const Me={};Me[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(r.DEPTH_TEST),u.setFunc(qs),mt(!1),dt(sm),_e(r.CULL_FACE),X(Ar);function _e(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function Ce(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function Ue(H,be){return g[H]!==be?(r.bindFramebuffer(H,be),g[H]=be,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=be),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=be),!0):!1}function $e(H,be){let ae=S,pe=!1;if(H){ae=v.get(be),ae===void 0&&(ae=[],v.set(be,ae));const Ne=H.textures;if(ae.length!==Ne.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ot=Ne.length;De<ot;De++)ae[De]=r.COLOR_ATTACHMENT0+De;ae.length=Ne.length,pe=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ae)}function wt(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const _t={[Zr]:r.FUNC_ADD,[A0]:r.FUNC_SUBTRACT,[C0]:r.FUNC_REVERSE_SUBTRACT};_t[R0]=r.MIN,_t[b0]=r.MAX;const It={[P0]:r.ZERO,[L0]:r.ONE,[D0]:r.SRC_COLOR,[Sf]:r.SRC_ALPHA,[k0]:r.SRC_ALPHA_SATURATE,[F0]:r.DST_COLOR,[I0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[Mf]:r.ONE_MINUS_SRC_ALPHA,[O0]:r.ONE_MINUS_DST_COLOR,[U0]:r.ONE_MINUS_DST_ALPHA,[B0]:r.CONSTANT_COLOR,[z0]:r.ONE_MINUS_CONSTANT_COLOR,[V0]:r.CONSTANT_ALPHA,[H0]:r.ONE_MINUS_CONSTANT_ALPHA};function X(H,be,ae,pe,Ne,De,ot,Ft,$t,yt){if(H===Ar){T===!0&&(Ce(r.BLEND),T=!1);return}if(T===!1&&(_e(r.BLEND),T=!0),H!==w0){if(H!==y||yt!==P){if((x!==Zr||R!==Zr)&&(r.blendEquation(r.FUNC_ADD),x=Zr,R=Zr),yt)switch(H){case Xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case om:r.blendFunc(r.ONE,r.ONE);break;case am:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case om:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case am:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,b=null,B=null,F=null,U.set(0,0,0),j=0,y=H,P=yt}return}Ne=Ne||be,De=De||ae,ot=ot||pe,(be!==x||Ne!==R)&&(r.blendEquationSeparate(_t[be],_t[Ne]),x=be,R=Ne),(ae!==D||pe!==b||De!==B||ot!==F)&&(r.blendFuncSeparate(It[ae],It[pe],It[De],It[ot]),D=ae,b=pe,B=De,F=ot),(Ft.equals(U)===!1||$t!==j)&&(r.blendColor(Ft.r,Ft.g,Ft.b,$t),U.copy(Ft),j=$t),y=H,P=!1}function xn(H,be){H.side===jn?Ce(r.CULL_FACE):_e(r.CULL_FACE);let ae=H.side===kn;be&&(ae=!ae),mt(ae),H.blending===Xs&&H.transparent===!1?X(Ar):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const pe=H.stencilWrite;f.setTest(pe),pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(H){C!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),C=H)}function dt(H){H!==M0?(_e(r.CULL_FACE),H!==z&&(H===sm?r.cullFace(r.BACK):H===E0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),z=H}function Ke(H){H!==le&&(ce&&r.lineWidth(H),le=H)}function Rt(H,be,ae){H?(_e(r.POLYGON_OFFSET_FILL),(te!==be||fe!==ae)&&(r.polygonOffset(be,ae),te=be,fe=ae)):Ce(r.POLYGON_OFFSET_FILL)}function qe(H){H?_e(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function L(H){H===void 0&&(H=r.TEXTURE0+he-1),oe!==H&&(r.activeTexture(H),oe=H)}function w(H,be,ae){ae===void 0&&(oe===null?ae=r.TEXTURE0+he-1:ae=oe);let pe=re[ae];pe===void 0&&(pe={type:void 0,texture:void 0},re[ae]=pe),(pe.type!==H||pe.texture!==be)&&(oe!==ae&&(r.activeTexture(ae),oe=ae),r.bindTexture(H,be||Me[H]),pe.type=H,pe.texture=be)}function ee(){const H=re[oe];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(H){Le.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Le.copy(H))}function Be(H){J.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),J.copy(H))}function ht(H,be){let ae=p.get(be);ae===void 0&&(ae=new WeakMap,p.set(be,ae));let pe=ae.get(H);pe===void 0&&(pe=r.getUniformBlockIndex(be,H.name),ae.set(H,pe))}function st(H,be){const pe=p.get(be).get(H);h.get(be)!==pe&&(r.uniformBlockBinding(be,pe,H.__bindingPointIndex),h.set(be,pe))}function Ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},oe=null,re={},g={},v=new WeakMap,S=[],M=null,T=!1,y=null,x=null,D=null,b=null,R=null,B=null,F=null,U=new gt(0,0,0),j=0,P=!1,C=null,z=null,le=null,te=null,fe=null,Le.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Ce,bindFramebuffer:Ue,drawBuffers:$e,useProgram:wt,setBlending:X,setMaterial:xn,setFlipSided:mt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:Rt,setScissorTest:qe,activeTexture:L,bindTexture:w,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:Ct}}function ng(r,e,t,s){const a=fT(s);switch(t){case Rg:return r*e;case Pg:return r*e;case Lg:return r*e*2;case Dg:return r*e/a.components*a.byteLength;case md:return r*e/a.components*a.byteLength;case Ng:return r*e*2/a.components*a.byteLength;case gd:return r*e*2/a.components*a.byteLength;case bg:return r*e*3/a.components*a.byteLength;case Yn:return r*e*4/a.components*a.byteLength;case _d:return r*e*4/a.components*a.byteLength;case Ul:case Fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Of:return Math.max(r,16)*Math.max(e,8)/4;case If:case Ff:return Math.max(r,8)*Math.max(e,8)/2;case kf:case Bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ed:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Bl:case td:case nd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ig:case id:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rd:case sd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fT(r){switch(r){case Ci:case wg:return{byteLength:1,components:1};case Yo:case Ag:case Ko:return{byteLength:2,components:1};case hd:case pd:return{byteLength:2,components:4};case es:case dd:case Yi:return{byteLength:4,components:1};case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function dT(r,e,t,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return S?new OffscreenCanvas(L,w):Hl("canvas")}function T(L,w,ee){let me=1;const ve=qe(L);if((ve.width>ee||ve.height>ee)&&(me=ee/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(me*ve.width),Ge=Math.floor(me*ve.height);g===void 0&&(g=M(de,Ge));const Re=w?M(de,Ge):g;return Re.width=de,Re.height=Ge,Re.getContext("2d").drawImage(L,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ge+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(L,w,ee,me,ve=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=w;if(w===r.RED&&(ee===r.FLOAT&&(de=r.R32F),ee===r.HALF_FLOAT&&(de=r.R16F),ee===r.UNSIGNED_BYTE&&(de=r.R8)),w===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.R8UI),ee===r.UNSIGNED_SHORT&&(de=r.R16UI),ee===r.UNSIGNED_INT&&(de=r.R32UI),ee===r.BYTE&&(de=r.R8I),ee===r.SHORT&&(de=r.R16I),ee===r.INT&&(de=r.R32I)),w===r.RG&&(ee===r.FLOAT&&(de=r.RG32F),ee===r.HALF_FLOAT&&(de=r.RG16F),ee===r.UNSIGNED_BYTE&&(de=r.RG8)),w===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RG8UI),ee===r.UNSIGNED_SHORT&&(de=r.RG16UI),ee===r.UNSIGNED_INT&&(de=r.RG32UI),ee===r.BYTE&&(de=r.RG8I),ee===r.SHORT&&(de=r.RG16I),ee===r.INT&&(de=r.RG32I)),w===r.RGB_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RGB8UI),ee===r.UNSIGNED_SHORT&&(de=r.RGB16UI),ee===r.UNSIGNED_INT&&(de=r.RGB32UI),ee===r.BYTE&&(de=r.RGB8I),ee===r.SHORT&&(de=r.RGB16I),ee===r.INT&&(de=r.RGB32I)),w===r.RGBA_INTEGER&&(ee===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),ee===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),ee===r.UNSIGNED_INT&&(de=r.RGBA32UI),ee===r.BYTE&&(de=r.RGBA8I),ee===r.SHORT&&(de=r.RGBA16I),ee===r.INT&&(de=r.RGBA32I)),w===r.RGB&&ee===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),w===r.RGBA){const Ge=ve?$l:Mt.getTransfer(me);ee===r.FLOAT&&(de=r.RGBA32F),ee===r.HALF_FLOAT&&(de=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(de=Ge===Pt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,w){let ee;return L?w===null||w===es||w===Zs?ee=r.DEPTH24_STENCIL8:w===Yi?ee=r.DEPTH32F_STENCIL8:w===Yo&&(ee=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Zs?ee=r.DEPTH_COMPONENT24:w===Yi?ee=r.DEPTH_COMPONENT32F:w===Yo&&(ee=r.DEPTH_COMPONENT16),ee}function B(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==oi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){const w=L.target;w.removeEventListener("dispose",F),j(w),w.isVideoTexture&&_.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function j(L){const w=s.get(L);if(w.__webglInit===void 0)return;const ee=L.source,me=v.get(ee);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(me).length===0&&v.delete(ee)}s.remove(L)}function P(L){const w=s.get(L);r.deleteTexture(w.__webglTexture);const ee=L.source,me=v.get(ee);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ee=L.textures;for(let me=0,ve=ee.length;me<ve;me++){const de=s.get(ee[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),s.remove(ee[me])}s.remove(L)}let z=0;function le(){z=0}function te(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function fe(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const ee=s.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ee,L,w);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+w)}function ce(L,w){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){J(ee,L,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+w)}function Y(L,w){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){J(ee,L,w);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+w)}function O(L,w){const ee=s.get(L);if(L.version>0&&ee.__version!==L.version){ue(ee,L,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+w)}const oe={[Df]:r.REPEAT,[wr]:r.CLAMP_TO_EDGE,[Nf]:r.MIRRORED_REPEAT},re={[An]:r.NEAREST,[Q0]:r.NEAREST_MIPMAP_NEAREST,[ol]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Bu]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},I={[nx]:r.NEVER,[lx]:r.ALWAYS,[ix]:r.LESS,[Fg]:r.LEQUAL,[rx]:r.EQUAL,[ax]:r.GEQUAL,[sx]:r.GREATER,[ox]:r.NOTEQUAL};function Z(L,w){if(w.type===Yi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===oi||w.magFilter===Bu||w.magFilter===ol||w.magFilter===Jr||w.minFilter===oi||w.minFilter===Bu||w.minFilter===ol||w.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,oe[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,oe[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,oe[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,re[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==ol&&w.minFilter!==Jr||w.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Le(L,w){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const de=fe(w);if(de!==L.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[de].usedTimes++;const Ge=ve[L.__cacheKey];Ge!==void 0&&(ve[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(w)),L.__cacheKey=de,L.__webglTexture=ve[de].texture}return ee}function J(L,w,ee){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Le(L,w),de=w.source;t.bindTexture(me,L.__webglTexture,r.TEXTURE0+ee);const Ge=s.get(de);if(de.version!==Ge.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const Re=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===Tr?null:Mt.getPrimaries(w.colorSpace),ft=w.colorSpace===Tr||Re===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=T(w.image,!1,a.maxTextureSize);Ee=Rt(w,Ee);const ke=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let tt=b(w.internalFormat,ke,Je,w.colorSpace,w.isVideoTexture);Z(me,w);let Be;const ht=w.mipmaps,st=w.isVideoTexture!==!0,Ct=Ge.__version===void 0||ve===!0,H=de.dataReady,be=B(w,Ee);if(w.isDepthTexture)tt=R(w.format===Qs,w.type),Ct&&(st?t.texStorage2D(r.TEXTURE_2D,1,tt,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,ke,Je,null));else if(w.isDataTexture)if(ht.length>0){st&&Ct&&t.texStorage2D(r.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],st?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,ke,Je,Be.data);w.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(r.TEXTURE_2D,be,tt,Ee.width,Ee.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Je,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Ee.width,Ee.height,0,ke,Je,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,tt,ht[0].width,ht[0].height,Ee.depth);for(let ae=0,pe=ht.length;ae<pe;ae++)if(Be=ht[ae],w.format!==Yn)if(ke!==null)if(st){if(H)if(w.layerUpdates.size>0){const Ne=ng(Be.width,Be.height,w.format,w.type);for(const De of w.layerUpdates){const ot=Be.data.subarray(De*Ne/Be.data.BYTES_PER_ELEMENT,(De+1)*Ne/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,De,Be.width,Be.height,1,ke,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,tt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ke,Je,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,tt,Be.width,Be.height,Ee.depth,0,ke,Je,Be.data)}else{st&&Ct&&t.texStorage2D(r.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],w.format!==Yn?ke!==null?st?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,ke,Je,Be.data)}else if(w.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,tt,Ee.width,Ee.height,Ee.depth),H)if(w.layerUpdates.size>0){const ae=ng(Ee.width,Ee.height,w.format,w.type);for(const pe of w.layerUpdates){const Ne=Ee.data.subarray(pe*ae/Ee.data.BYTES_PER_ELEMENT,(pe+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,ke,Je,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Je,Ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Ee.width,Ee.height,Ee.depth,0,ke,Je,Ee.data);else if(w.isData3DTexture)st?(Ct&&t.texStorage3D(r.TEXTURE_3D,be,tt,Ee.width,Ee.height,Ee.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Je,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Ee.width,Ee.height,Ee.depth,0,ke,Je,Ee.data);else if(w.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(r.TEXTURE_2D,be,tt,Ee.width,Ee.height);else{let ae=Ee.width,pe=Ee.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,tt,ae,pe,0,ke,Je,null),ae>>=1,pe>>=1}}else if(ht.length>0){if(st&&Ct){const ae=qe(ht[0]);t.texStorage2D(r.TEXTURE_2D,be,tt,ae.width,ae.height)}for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],st?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ke,Je,Be):t.texImage2D(r.TEXTURE_2D,ae,tt,ke,Je,Be);w.generateMipmaps=!1}else if(st){if(Ct){const ae=qe(Ee);t.texStorage2D(r.TEXTURE_2D,be,tt,ae.width,ae.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Je,Ee)}else t.texImage2D(r.TEXTURE_2D,0,tt,ke,Je,Ee);y(w)&&x(me),Ge.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,ee){if(w.image.length!==6)return;const me=Le(L,w),ve=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+ee);const de=s.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(r.TEXTURE0+ee);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Re=w.colorSpace===Tr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Tr||Ge===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ft&&!Ee?ke[pe]=T(w.image[pe],!0,a.maxCubemapSize):ke[pe]=Ee?w.image[pe].image:w.image[pe],ke[pe]=Rt(w,ke[pe]);const Je=ke[0],tt=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ht=b(w.internalFormat,tt,Be,w.colorSpace),st=w.isVideoTexture!==!0,Ct=de.__version===void 0||me===!0,H=ve.dataReady;let be=B(w,Je);Z(r.TEXTURE_CUBE_MAP,w);let ae;if(ft){st&&Ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,Je.width,Je.height);for(let pe=0;pe<6;pe++){ae=ke[pe].mipmaps;for(let Ne=0;Ne<ae.length;Ne++){const De=ae[Ne];w.format!==Yn?tt!==null?st?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,tt,Be,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,De.width,De.height,0,tt,Be,De.data)}}}else{if(ae=w.mipmaps,st&&Ct){ae.length>0&&be++;const pe=qe(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,tt,Be,ke[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,ke[pe].width,ke[pe].height,0,tt,Be,ke[pe].data);for(let Ne=0;Ne<ae.length;Ne++){const ot=ae[Ne].image[pe].image;st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,ot.width,ot.height,tt,Be,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,ot.width,ot.height,0,tt,Be,ot.data)}}else{st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Be,ke[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,tt,Be,ke[pe]);for(let Ne=0;Ne<ae.length;Ne++){const De=ae[Ne];st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,tt,Be,De.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,tt,Be,De.image[pe])}}}y(w)&&x(r.TEXTURE_CUBE_MAP),de.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Me(L,w,ee,me,ve,de){const Ge=l.convert(ee.format,ee.colorSpace),Re=l.convert(ee.type),Fe=b(ee.internalFormat,Ge,Re,ee.colorSpace),ft=s.get(w),Ee=s.get(ee);if(Ee.__renderTarget=w,!ft.__hasExternalTextures){const ke=Math.max(1,w.width>>de),Je=Math.max(1,w.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Fe,ke,Je,w.depth,0,Ge,Re,null):t.texImage2D(ve,de,Fe,ke,Je,0,Ge,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),dt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,0,mt(w)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Ee.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(L,w,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(w.stencilBuffer,ve),Ge=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=mt(w);dt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,de,w.width,w.height):ee?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,L)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ge=l.convert(de.format,de.colorSpace),Re=l.convert(de.type),Fe=b(de.internalFormat,Ge,Re,de.colorSpace),ft=mt(w);ee&&dt(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,Fe,w.width,w.height):dt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,Fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ve=me.__webglTexture,de=mt(w);if(w.depthTexture.format===js)dt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Qs)dt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const w=s.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,L)}else if(ee){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),_e(w.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),_e(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(L,w,ee){const me=s.get(L);w!==void 0&&Me(me.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&Ue(L)}function wt(L){const w=L.texture,ee=s.get(L),me=s.get(w);L.addEventListener("dispose",U);const ve=L.textures,de=L.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,u.memory.textures++),de){ee.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)ee.__webglFramebuffer[Re][Fe]=r.createFramebuffer()}else ee.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)ee.__webglFramebuffer[Re]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Re=0,Fe=ve.length;Re<Fe;Re++){const ft=s.get(ve[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Fe=ve[Re];ee.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re]);const ft=l.convert(Fe.format,Fe.colorSpace),Ee=l.convert(Fe.type),ke=b(Fe.internalFormat,ft,Ee,Fe.colorSpace,L.isXRRenderTarget===!0),Je=mt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ke,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,ee.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),Z(r.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(ee.__webglFramebuffer[Re][Fe],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else Me(ee.__webglFramebuffer[Re],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(w)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Re=0,Fe=ve.length;Re<Fe;Re++){const ft=ve[Re],Ee=s.get(ft);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Z(r.TEXTURE_2D,ft),Me(ee.__webglFramebuffer,L,ft,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),y(ft)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),Z(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Me(ee.__webglFramebuffer[Fe],L,w,r.COLOR_ATTACHMENT0,Re,Fe);else Me(ee.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,Re,0);y(w)&&x(Re),t.unbindTexture()}L.depthBuffer&&Ue(L)}function _t(L){const w=L.textures;for(let ee=0,me=w.length;ee<me;ee++){const ve=w[ee];if(y(ve)){const de=D(L),Ge=s.get(ve).__webglTexture;t.bindTexture(de,Ge),x(de),t.unbindTexture()}}}const It=[],X=[];function xn(L){if(L.samples>0){if(dt(L)===!1){const w=L.textures,ee=L.width,me=L.height;let ve=r.COLOR_BUFFER_BIT;const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(L),Re=w.length>1;if(Re)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ft=s.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,ee,me,0,0,ee,me,ve,r.NEAREST),h===!0&&(It.length=0,X.length=0,It.push(r.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(It.push(de),X.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ft=s.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function mt(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const w=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=u.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Rt(L,w){const ee=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==eo&&ee!==Tr&&(Mt.getTransfer(ee)===Pt?(me!==Yn||ve!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),w}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=Y,this.setTextureCube=O,this.rebindTextures=$e,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function hT(r,e){function t(s,a=Tr){let l;const u=Mt.getTransfer(a);if(s===Ci)return r.UNSIGNED_BYTE;if(s===hd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Cg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===wg)return r.BYTE;if(s===Ag)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===dd)return r.INT;if(s===es)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Ko)return r.HALF_FLOAT;if(s===Rg)return r.ALPHA;if(s===bg)return r.RGB;if(s===Yn)return r.RGBA;if(s===Pg)return r.LUMINANCE;if(s===Lg)return r.LUMINANCE_ALPHA;if(s===js)return r.DEPTH_COMPONENT;if(s===Qs)return r.DEPTH_STENCIL;if(s===Dg)return r.RED;if(s===md)return r.RED_INTEGER;if(s===Ng)return r.RG;if(s===gd)return r.RG_INTEGER;if(s===_d)return r.RGBA_INTEGER;if(s===Ul||s===Fl||s===Ol||s===kl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===If||s===Uf||s===Ff||s===Of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===If)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ff)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kf||s===Bf||s===zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===kf||s===Bf)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===zf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vf||s===Hf||s===Gf||s===Wf||s===Xf||s===jf||s===Yf||s===qf||s===$f||s===Kf||s===Zf||s===Qf||s===Jf||s===ed)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Vf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$f)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ed)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bl||s===td||s===nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Bl)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ig||s===id||s===rd||s===sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class pT extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cl extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mT={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),x=this._getHandJoint(p,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mT)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Cl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const gT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Cn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new bi({vertexShader:gT,fragmentShader:_T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Zl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xT extends ns{constructor(e,t){super();const s=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,g=null,v=null,S=null,M=null;const T=new vT,y=t.getContextAttributes();let x=null,D=null;const b=[],R=[],B=new ct;let F=null;const U=new ri;U.viewport=new Bt;const j=new ri;j.viewport=new Bt;const P=[U,j],C=new pT;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=b[J];return ue===void 0&&(ue=new pf,b[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=b[J];return ue===void 0&&(ue=new pf,b[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=b[J];return ue===void 0&&(ue=new pf,b[J]=ue),ue.getHandSpace()};function te(J){const ue=R.indexOf(J.inputSource);if(ue===-1)return;const Me=b[ue];Me!==void 0&&(Me.update(J.inputSource,J.frame,p||u),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function fe(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let J=0;J<b.length;J++){const ue=R[J];ue!==null&&(R[J]=null,b[J].disconnect(ue))}z=null,le=null,T.reset(),e.setRenderTarget(x),S=null,v=null,g=null,a=null,D=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(B),a.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new br(S.framebufferWidth,S.framebufferHeight,{format:Yn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Me=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?Qs:js,Me=y.stencil?Zs:es);const Ce={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Ce),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new br(v.textureWidth,v.textureHeight,{format:Yn,type:Ci,depthTexture:new Kg(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),Le.setContext(a),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(J){for(let ue=0;ue<J.removed.length;ue++){const Me=J.removed[ue],_e=R.indexOf(Me);_e>=0&&(R[_e]=null,b[_e].disconnect(Me))}for(let ue=0;ue<J.added.length;ue++){const Me=J.added[ue];let _e=R.indexOf(Me);if(_e===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=R.length){R.push(Me),_e=Ue;break}else if(R[Ue]===null){R[Ue]=Me,_e=Ue;break}if(_e===-1)break}const Ce=b[_e];Ce&&Ce.connect(Me)}}const ce=new $,Y=new $;function O(J,ue,Me){ce.setFromMatrixPosition(ue.matrixWorld),Y.setFromMatrixPosition(Me.matrixWorld);const _e=ce.distanceTo(Y),Ce=ue.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,$e=Ce[14]/(Ce[10]-1),wt=Ce[14]/(Ce[10]+1),_t=(Ce[9]+1)/Ce[5],It=(Ce[9]-1)/Ce[5],X=(Ce[8]-1)/Ce[0],xn=(Ue[8]+1)/Ue[0],mt=$e*X,dt=$e*xn,Ke=_e/(-X+xn),Rt=Ke*-X;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Rt),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const qe=$e+Ke,L=wt+Ke,w=mt-Rt,ee=dt+(_e-Rt),me=_t*wt/L*qe,ve=It*wt/L*qe;J.projectionMatrix.makePerspective(w,ee,me,ve,qe,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ue=J.near,Me=J.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=j.near=U.near=ue,C.far=j.far=U.far=Me,(z!==C.near||le!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,le=C.far),U.layers.mask=J.layers.mask|2,j.layers.mask=J.layers.mask|4,C.layers.mask=U.layers.mask|j.layers.mask;const _e=J.parent,Ce=C.cameras;oe(C,_e);for(let Ue=0;Ue<Ce.length;Ue++)oe(Ce[Ue],_e);Ce.length===2?O(C,U,j):C.projectionMatrix.copy(U.projectionMatrix),re(J,C,_e)};function re(J,ue,Me){Me===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=od*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(J){h=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let I=null;function Z(J,ue){if(_=ue.getViewerPose(p||u),M=ue,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let _e=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Ue=0;Ue<Me.length;Ue++){const $e=Me[Ue];let wt=null;if(S!==null)wt=S.getViewport($e);else{const It=g.getViewSubImage(v,$e);wt=It.viewport,Ue===0&&(e.setRenderTargetTextures(D,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(D))}let _t=P[Ue];_t===void 0&&(_t=new ri,_t.layers.enable(Ue),_t.viewport=new Bt,P[Ue]=_t),_t.matrix.fromArray($e.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray($e.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(wt.x,wt.y,wt.width,wt.height),Ue===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(_t)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=g.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,a.renderState)}}for(let Me=0;Me<b.length;Me++){const _e=R[Me],Ce=b[Me];_e!==null&&Ce!==void 0&&Ce.update(_e,ue,p||u)}I&&I(J,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Le=new qg;Le.setAnimationLoop(Z),this.setAnimationLoop=function(J){I=J},this.dispose=function(){}}}const $r=new Ri,yT=new Gt;function ST(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Xg(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,D,b,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),T(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,D,b):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),b=D.envMap,R=D.envMapRotation;b&&(y.envMap.value=b,$r.copy(R),$r.x*=-1,$r.y*=-1,$r.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),y.envMapRotation.value.setFromMatrix4(yT.makeRotationFromEuler($r)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,D,b){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=b*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function MT(r,e,t,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,b){const R=b.program;s.uniformBlockBinding(D,R)}function p(D,b){let R=a[D.id];R===void 0&&(M(D),R=_(D),a[D.id]=R,D.addEventListener("dispose",y));const B=b.program;s.updateUBOMapping(D,B);const F=e.render.frame;l[D.id]!==F&&(v(D),l[D.id]=F)}function _(D){const b=g();D.__bindingPointIndex=b;const R=r.createBuffer(),B=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,B,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,R),R}function g(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=a[D.id],R=D.uniforms,B=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let F=0,U=R.length;F<U;F++){const j=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,C=j.length;P<C;P++){const z=j[P];if(S(z,F,P,B)===!0){const le=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let he=0;he<te.length;he++){const ce=te[he],Y=T(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,r.bufferSubData(r.UNIFORM_BUFFER,le+fe,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,fe),fe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,b,R,B){const F=D.value,U=b+"_"+R;if(B[U]===void 0)return typeof F=="number"||typeof F=="boolean"?B[U]=F:B[U]=F.clone(),!0;{const j=B[U];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return B[U]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function M(D){const b=D.uniforms;let R=0;const B=16;for(let U=0,j=b.length;U<j;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,z=P.length;C<z;C++){const le=P[C],te=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,he=te.length;fe<he;fe++){const ce=te[fe],Y=T(ce),O=R%B,oe=O%Y.boundary,re=O+oe;R+=oe,re!==0&&B-re<Y.storage&&(R+=B-re),le.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=Y.storage}}}const F=R%B;return F>0&&(R+=B-F),D.__size=R,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function x(){for(const D in a)r.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:p,dispose:x}}class ET{constructor(e={}){const{canvas:t=fx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,x=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Cr,this.toneMappingExposure=1;const R=this;let B=!1,F=0,U=0,j=null,P=-1,C=null;const z=new Bt,le=new Bt;let te=null;const fe=new gt(0);let he=0,ce=t.width,Y=t.height,O=1,oe=null,re=null;const I=new Bt(0,0,ce,Y),Z=new Bt(0,0,ce,Y);let Le=!1;const J=new xd;let ue=!1,Me=!1;const _e=new Gt,Ce=new Gt,Ue=new $,$e=new Bt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function It(){return j===null?O:1}let X=s;function xn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ud}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),X===null){const G="webgl2";if(X=xn(G,A),X===null)throw xn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,dt,Ke,Rt,qe,L,w,ee,me,ve,de,Ge,Re,Fe,ft,Ee,ke,Je,tt,Be,ht,st,Ct,H;function be(){mt=new RM(X),mt.init(),st=new hT(X,mt),dt=new MM(X,mt,e,st),Ke=new uT(X,mt),dt.reverseDepthBuffer&&v&&Ke.buffers.depth.setReversed(!0),Rt=new LM(X),qe=new $E,L=new dT(X,mt,Ke,qe,dt,st,Rt),w=new TM(R),ee=new CM(R),me=new kx(X),Ct=new yM(X,me),ve=new bM(X,me,Rt,Ct),de=new NM(X,ve,me,Rt),tt=new DM(X,dt,L),Ee=new EM(qe),Ge=new qE(R,w,ee,mt,dt,Ct,Ee),Re=new ST(R,qe),Fe=new ZE,ft=new iT(mt),Je=new xM(R,w,ee,Ke,de,S,h),ke=new lT(R,de,dt),H=new MT(X,Rt,dt,Ke),Be=new SM(X,mt,Rt),ht=new PM(X,mt,Rt),Rt.programs=Ge.programs,R.capabilities=dt,R.extensions=mt,R.properties=qe,R.renderLists=Fe,R.shadowMap=ke,R.state=Ke,R.info=Rt}be();const ae=new xT(R,X);this.xr=ae,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(ce,Y,!1))},this.getSize=function(A){return A.set(ce,Y)},this.setSize=function(A,G,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,Y=G,t.width=Math.floor(A*O),t.height=Math.floor(G*O),ie===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ce*O,Y*O).floor()},this.setDrawingBufferSize=function(A,G,ie){ce=A,Y=G,O=ie,t.width=Math.floor(A*ie),t.height=Math.floor(G*ie),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,G,ie,se){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,G,ie,se),Ke.viewport(z.copy(I).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,G,ie,se){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,G,ie,se),Ke.scissor(le.copy(Z).multiplyScalar(O).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){Ke.setScissorTest(Le=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,G=!0,ie=!0){let se=0;if(A){let W=!1;if(j!==null){const Ae=j.texture.format;W=Ae===_d||Ae===gd||Ae===md}if(W){const Ae=j.texture.type,Te=Ae===Ci||Ae===es||Ae===Yo||Ae===Zs||Ae===hd||Ae===pd,We=Je.getClearColor(),Ve=Je.getClearAlpha(),nt=We.r,rt=We.g,Xe=We.b;Te?(M[0]=nt,M[1]=rt,M[2]=Xe,M[3]=Ve,X.clearBufferuiv(X.COLOR,0,M)):(T[0]=nt,T[1]=rt,T[2]=Xe,T[3]=Ve,X.clearBufferiv(X.COLOR,0,T))}else se|=X.COLOR_BUFFER_BIT}G&&(se|=X.DEPTH_BUFFER_BIT),ie&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ft.dispose(),qe.dispose(),w.dispose(),ee.dispose(),de.dispose(),Ct.dispose(),H.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",is),ae.removeEventListener("sessionend",Ki),Pi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Rt.autoReset,G=ke.enabled,ie=ke.autoUpdate,se=ke.needsUpdate,W=ke.type;be(),Rt.autoReset=A,ke.enabled=G,ke.autoUpdate=ie,ke.needsUpdate=se,ke.type=W}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const G=A.target;G.removeEventListener("dispose",ot),Ft(G)}function Ft(A){$t(A),qe.remove(A)}function $t(A){const G=qe.get(A).programs;G!==void 0&&(G.forEach(function(ie){Ge.releaseProgram(ie)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ie,se,W,Ae){G===null&&(G=wt);const Te=W.isMesh&&W.matrixWorld.determinant()<0,We=ta(A,G,ie,se,W);Ke.setMaterial(se,Te);let Ve=ie.index,nt=1;if(se.wireframe===!0){if(Ve=ve.getWireframeAttribute(ie),Ve===void 0)return;nt=2}const rt=ie.drawRange,Xe=ie.attributes.position;let xt=rt.start*nt,At=(rt.start+rt.count)*nt;Ae!==null&&(xt=Math.max(xt,Ae.start*nt),At=Math.min(At,(Ae.start+Ae.count)*nt)),Ve!==null?(xt=Math.max(xt,0),At=Math.min(At,Ve.count)):Xe!=null&&(xt=Math.max(xt,0),At=Math.min(At,Xe.count));const vt=At-xt;if(vt<0||vt===1/0)return;Ct.setup(W,se,We,ie,Ve);let fn,at=Be;if(Ve!==null&&(fn=me.get(Ve),at=ht,at.setIndex(fn)),W.isMesh)se.wireframe===!0?(Ke.setLineWidth(se.wireframeLinewidth*It()),at.setMode(X.LINES)):at.setMode(X.TRIANGLES);else if(W.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*It()),W.isLineSegments?at.setMode(X.LINES):W.isLineLoop?at.setMode(X.LINE_LOOP):at.setMode(X.LINE_STRIP)}else W.isPoints?at.setMode(X.POINTS):W.isSprite&&at.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)at.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,ci=W._multiDrawCounts,Et=W._multiDrawCount,dn=Ve?me.get(Ve).bytesPerElement:1,ui=qe.get(se).currentProgram.getUniforms();for(let Kt=0;Kt<Et;Kt++)ui.setValue(X,"_gl_DrawID",Kt),at.render(Ye[Kt]/dn,ci[Kt])}else if(W.isInstancedMesh)at.renderInstances(xt,vt,W.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ci=Math.min(ie.instanceCount,Ye);at.renderInstances(xt,vt,ci)}else at.render(xt,vt)};function yt(A,G,ie){A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,rs(A,G,ie),A.side=Rr,A.needsUpdate=!0,rs(A,G,ie),A.side=jn):rs(A,G,ie)}this.compile=function(A,G,ie=null){ie===null&&(ie=A),x=ft.get(ie),x.init(G),b.push(x),ie.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),A!==ie&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const se=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Te=0;Te<Ae.length;Te++){const We=Ae[Te];yt(We,ie,W),se.add(We)}else yt(Ae,ie,W),se.add(Ae)}),b.pop(),x=null,se},this.compileAsync=function(A,G,ie=null){const se=this.compile(A,G,ie);return new Promise(W=>{function Ae(){if(se.forEach(function(Te){qe.get(Te).currentProgram.isReady()&&se.delete(Te)}),se.size===0){W(A);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Rn=null;function yn(A){Rn&&Rn(A)}function is(){Pi.stop()}function Ki(){Pi.start()}const Pi=new qg;Pi.setAnimationLoop(yn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Rn=A,ae.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},ae.addEventListener("sessionstart",is),ae.addEventListener("sessionend",Ki),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,j),x=ft.get(A,b.length),x.init(G),b.push(x),Ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(Ce),Me=this.localClippingEnabled,ue=Ee.init(this.clippingPlanes,Me),y=Fe.get(A,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ae=R.xr.getDepthSensingMesh();Ae!==null&&Li(Ae,G,-1/0,R.sortObjects)}Li(A,G,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(oe,re),_t=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,_t&&Je.addToRenderList(y,A),this.info.render.frame++,ue===!0&&Ee.beginShadows();const ie=x.state.shadowsArray;ke.render(ie,A,G),ue===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,W=y.transmissive;if(x.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(W.length>0)for(let Te=0,We=Ae.length;Te<We;Te++){const Ve=Ae[Te];Lr(se,W,A,Ve)}_t&&Je.render(A);for(let Te=0,We=Ae.length;Te<We;Te++){const Ve=Ae[Te];Pr(y,A,Ve,Ve.viewport)}}else W.length>0&&Lr(se,W,A,G),_t&&Je.render(A),Pr(y,A,G);j!==null&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(R,A,G),Ct.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(x=b[b.length-1],ue===!0&&Ee.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Li(A,G,ie,se){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){se&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Te=de.update(A),We=A.material;We.visible&&y.push(A,Te,We,ie,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Te=de.update(A),We=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),$e.copy(Te.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(We)){const Ve=Te.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const Xe=Ve[nt],xt=We[Xe.materialIndex];xt&&xt.visible&&y.push(A,Te,xt,ie,$e.z,Xe)}}else We.visible&&y.push(A,Te,We,ie,$e.z,null)}}const Ae=A.children;for(let Te=0,We=Ae.length;Te<We;Te++)Li(Ae[Te],G,ie,se)}function Pr(A,G,ie,se){const W=A.opaque,Ae=A.transmissive,Te=A.transparent;x.setupLightsView(ie),ue===!0&&Ee.setGlobalState(R.clippingPlanes,ie),se&&Ke.viewport(z.copy(se)),W.length>0&&Zi(W,G,ie),Ae.length>0&&Zi(Ae,G,ie),Te.length>0&&Zi(Te,G,ie),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Lr(A,G,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new br(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ko:Ci,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[se.id],Te=se.viewport||z;Ae.setSize(Te.z,Te.w);const We=R.getRenderTarget();R.setRenderTarget(Ae),R.getClearColor(fe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),_t&&Je.render(ie);const Ve=R.toneMapping;R.toneMapping=Cr;const nt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),ue===!0&&Ee.setGlobalState(R.clippingPlanes,se),Zi(A,ie,se),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Xe=0,xt=G.length;Xe<xt;Xe++){const At=G[Xe],vt=At.object,fn=At.geometry,at=At.material,Ye=At.group;if(at.side===jn&&vt.layers.test(se.layers)){const ci=at.side;at.side=kn,at.needsUpdate=!0,Jo(vt,ie,se,fn,at,Ye),at.side=ci,at.needsUpdate=!0,rt=!0}}rt===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}R.setRenderTarget(We),R.setClearColor(fe,he),nt!==void 0&&(se.viewport=nt),R.toneMapping=Ve}function Zi(A,G,ie){const se=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){const Te=A[W],We=Te.object,Ve=Te.geometry,nt=se===null?Te.material:se,rt=Te.group;We.layers.test(ie.layers)&&Jo(We,G,ie,Ve,nt,rt)}}function Jo(A,G,ie,se,W,Ae){A.onBeforeRender(R,G,ie,se,W,Ae),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,G,ie,se,A,Ae),W.transparent===!0&&W.side===jn&&W.forceSinglePass===!1?(W.side=kn,W.needsUpdate=!0,R.renderBufferDirect(ie,G,se,W,A,Ae),W.side=Rr,W.needsUpdate=!0,R.renderBufferDirect(ie,G,se,W,A,Ae),W.side=jn):R.renderBufferDirect(ie,G,se,W,A,Ae),A.onAfterRender(R,G,ie,se,W,Ae)}function rs(A,G,ie){G.isScene!==!0&&(G=wt);const se=qe.get(A),W=x.state.lights,Ae=x.state.shadowsArray,Te=W.state.version,We=Ge.getParameters(A,W.state,Ae,G,ie),Ve=Ge.getProgramCacheKey(We);let nt=se.programs;se.environment=A.isMeshStandardMaterial?G.environment:null,se.fog=G.fog,se.envMap=(A.isMeshStandardMaterial?ee:w).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",ot),nt=new Map,se.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if(se.currentProgram===rt&&se.lightsStateVersion===Te)return yi(A,We),rt}else We.uniforms=Ge.getUniforms(A),A.onBeforeCompile(We,R),rt=Ge.acquireProgram(We,Ve),nt.set(Ve,rt),se.uniforms=We.uniforms;const Xe=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),yi(A,We),se.needsLights=Jl(A),se.lightsStateVersion=Te,se.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),se.currentProgram=rt,se.uniformsList=null,rt}function ea(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function yi(A,G){const ie=qe.get(A);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function ta(A,G,ie,se,W){G.isScene!==!0&&(G=wt),L.resetTextureUnits();const Ae=G.fog,Te=se.isMeshStandardMaterial?G.environment:null,We=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:eo,Ve=(se.isMeshStandardMaterial?ee:w).get(se.envMap||Te),nt=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,rt=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!ie.morphAttributes.position,xt=!!ie.morphAttributes.normal,At=!!ie.morphAttributes.color;let vt=Cr;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(vt=R.toneMapping);const fn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=fn!==void 0?fn.length:0,Ye=qe.get(se),ci=x.state.lights;if(ue===!0&&(Me===!0||A!==C)){const Sn=A===C&&se.id===P;Ee.setState(se,A,Sn)}let Et=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ci.state.version||Ye.outputColorSpace!==We||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==Ve||se.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==rt||Ye.morphTargets!==Xe||Ye.morphNormals!==xt||Ye.morphColors!==At||Ye.toneMapping!==vt||Ye.morphTargetsCount!==at)&&(Et=!0):(Et=!0,Ye.__version=se.version);let dn=Ye.currentProgram;Et===!0&&(dn=rs(se,G,W));let ui=!1,Kt=!1,Si=!1;const Dt=dn.getUniforms(),qn=Ye.uniforms;if(Ke.useProgram(dn.program)&&(ui=!0,Kt=!0,Si=!0),se.id!==P&&(P=se.id,Kt=!0),ui||C!==A){Ke.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),hx(_e),px(_e),Dt.setValue(X,"projectionMatrix",_e)):Dt.setValue(X,"projectionMatrix",A.projectionMatrix),Dt.setValue(X,"viewMatrix",A.matrixWorldInverse);const $n=Dt.map.cameraPosition;$n!==void 0&&$n.setValue(X,Ue.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Dt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Kt=!0,Si=!0)}if(W.isSkinnedMesh){Dt.setOptional(X,W,"bindMatrix"),Dt.setOptional(X,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Dt.setValue(X,"boneTexture",Sn.boneTexture,L))}W.isBatchedMesh&&(Dt.setOptional(X,W,"batchingTexture"),Dt.setValue(X,"batchingTexture",W._matricesTexture,L),Dt.setOptional(X,W,"batchingIdTexture"),Dt.setValue(X,"batchingIdTexture",W._indirectTexture,L),Dt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(X,"batchingColorTexture",W._colorsTexture,L));const Di=ie.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&tt.update(W,ie,dn),(Kt||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Dt.setValue(X,"receiveShadow",W.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(qn.envMap.value=Ve,qn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&G.environment!==null&&(qn.envMapIntensity.value=G.environmentIntensity),Kt&&(Dt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&na(qn,Si),Ae&&se.fog===!0&&Re.refreshFogUniforms(qn,Ae),Re.refreshMaterialUniforms(qn,se,O,Y,x.state.transmissionRenderTarget[A.id]),zl.upload(X,ea(Ye),qn,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(zl.upload(X,ea(Ye),qn,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Dt.setValue(X,"center",W.center),Dt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(X,"normalMatrix",W.normalMatrix),Dt.setValue(X,"modelMatrix",W.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Sn=se.uniformsGroups;for(let $n=0,bn=Sn.length;$n<bn;$n++){const ia=Sn[$n];H.update(ia,dn),H.bind(ia,dn)}}return dn}function na(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,G,ie){qe.get(A.texture).__webglTexture=G,qe.get(A.depthTexture).__webglTexture=ie;const se=qe.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const ie=qe.get(A);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ie=0){j=A,F=G,U=ie;let se=!0,W=null,Ae=!1,Te=!1;if(A){const Ve=qe.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(X.FRAMEBUFFER,null),se=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ve.__hasExternalTextures)L.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Te=!0);const rt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[G])?W=rt[G][ie]:W=rt[G],Ae=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?W=rt[ie]:W=rt,z.copy(A.viewport),le.copy(A.scissor),te=A.scissorTest}else z.copy(I).multiplyScalar(O).floor(),le.copy(Z).multiplyScalar(O).floor(),te=Le;if(Ke.bindFramebuffer(X.FRAMEBUFFER,W)&&se&&Ke.drawBuffers(A,W),Ke.viewport(z),Ke.scissor(le),Ke.setScissorTest(te),Ae){const Ve=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,ie)}else if(Te){const Ve=qe.get(A.texture),nt=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,ie||0,nt)}P=-1},this.readRenderTargetPixels=function(A,G,ie,se,W,Ae,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(We=We[Te]),We){Ke.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ve=A.texture,nt=Ve.format,rt=Ve.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-se&&ie>=0&&ie<=A.height-W&&X.readPixels(G,ie,se,W,st.convert(nt),st.convert(rt),Ae)}finally{const Ve=j!==null?qe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,G,ie,se,W,Ae,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(We=We[Te]),We){const Ve=A.texture,nt=Ve.format,rt=Ve.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-se&&ie>=0&&ie<=A.height-W){Ke.bindFramebuffer(X.FRAMEBUFFER,We);const Xe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.bufferData(X.PIXEL_PACK_BUFFER,Ae.byteLength,X.STREAM_READ),X.readPixels(G,ie,se,W,st.convert(nt),st.convert(rt),0);const xt=j!==null?qe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,xt);const At=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await dx(X,At,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ae),X.deleteBuffer(Xe),X.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,ie=0){A.isTexture!==!0&&(Wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-ie),W=Math.floor(A.image.width*se),Ae=Math.floor(A.image.height*se),Te=G!==null?G.x:0,We=G!==null?G.y:0;L.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ie,0,0,Te,We,W,Ae),Ke.unbindTexture()},this.copyTextureToTexture=function(A,G,ie=null,se=null,W=0){A.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,ie=null);let Ae,Te,We,Ve,nt,rt,Xe,xt,At;const vt=A.isCompressedTexture?A.mipmaps[W]:A.image;ie!==null?(Ae=ie.max.x-ie.min.x,Te=ie.max.y-ie.min.y,We=ie.isBox3?ie.max.z-ie.min.z:1,Ve=ie.min.x,nt=ie.min.y,rt=ie.isBox3?ie.min.z:0):(Ae=vt.width,Te=vt.height,We=vt.depth||1,Ve=0,nt=0,rt=0),se!==null?(Xe=se.x,xt=se.y,At=se.z):(Xe=0,xt=0,At=0);const fn=st.convert(G.format),at=st.convert(G.type);let Ye;G.isData3DTexture?(L.setTexture3D(G,0),Ye=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ye=X.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const ci=X.getParameter(X.UNPACK_ROW_LENGTH),Et=X.getParameter(X.UNPACK_IMAGE_HEIGHT),dn=X.getParameter(X.UNPACK_SKIP_PIXELS),ui=X.getParameter(X.UNPACK_SKIP_ROWS),Kt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),X.pixelStorei(X.UNPACK_SKIP_ROWS,nt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,rt);const Si=A.isDataArrayTexture||A.isData3DTexture,Dt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const qn=qe.get(A),Di=qe.get(G),Sn=qe.get(qn.__renderTarget),$n=qe.get(Di.__renderTarget);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let bn=0;bn<We;bn++)Si&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,rt+bn),A.isDepthTexture?(Dt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(G).__webglTexture,W,At+bn),X.blitFramebuffer(Ve,nt,Ae,Te,Xe,xt,Ae,Te,X.DEPTH_BUFFER_BIT,X.NEAREST)):Dt?X.copyTexSubImage3D(Ye,W,Xe,xt,At+bn,Ve,nt,Ae,Te):X.copyTexSubImage2D(Ye,W,Xe,xt,At+bn,Ve,nt,Ae,Te);Ke.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ye,W,Xe,xt,At,Ae,Te,We,fn,at,vt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,W,Xe,xt,At,Ae,Te,We,fn,vt.data):X.texSubImage3D(Ye,W,Xe,xt,At,Ae,Te,We,fn,at,vt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,Xe,xt,Ae,Te,fn,at,vt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,Xe,xt,vt.width,vt.height,fn,vt.data):X.texSubImage2D(X.TEXTURE_2D,W,Xe,xt,Ae,Te,fn,at,vt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ci),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),X.pixelStorei(X.UNPACK_SKIP_PIXELS,dn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ui),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Kt),W===0&&G.generateMipmaps&&X.generateMipmap(Ye),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,G,ie=null,se=null,W=0){return A.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,ie,se,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){F=0,U=0,j=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class t_ extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class TT extends Cn{constructor(e=null,t=1,s=1,a,l,u,f,h,p=An,_=An,g,v){super(null,u,f,h,p,_,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends no{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new $,Wl=new $,ig=new Gt,Ho=new vd,Rl=new Kl,mf=new $,rg=new $;class wT extends un{constructor(e=new li,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)Gl.fromBufferAttribute(t,a-1),Wl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Gl.distanceTo(Wl);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rl.copy(s.boundingSphere),Rl.applyMatrix4(a),Rl.radius+=l,e.ray.intersectsSphere(Rl)===!1)return;ig.copy(a).invert(),Ho.copy(e.ray).applyMatrix4(ig);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const S=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let T=S,y=M-1;T<y;T+=p){const x=_.getX(T),D=_.getX(T+1),b=bl(this,e,Ho,h,x,D);b&&t.push(b)}if(this.isLineLoop){const T=_.getX(M-1),y=_.getX(S),x=bl(this,e,Ho,h,T,y);x&&t.push(x)}}else{const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let T=S,y=M-1;T<y;T+=p){const x=bl(this,e,Ho,h,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=bl(this,e,Ho,h,M-1,S);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function bl(r,e,t,s,a,l){const u=r.geometry.attributes.position;if(Gl.fromBufferAttribute(u,a),Wl.fromBufferAttribute(u,l),t.distanceSqToSegment(Gl,Wl,mf,rg)>s)return;mf.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(mf);if(!(h<e.near||h>e.far))return{distance:h,point:rg.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const sg=new $,og=new $;class Xl extends wT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)sg.fromBufferAttribute(t,a),og.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+sg.distanceTo(og);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Pl=new $,Ll=new $,gf=new $,Dl=new si;class ag extends li{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(jo*t),u=e.getIndex(),f=e.getAttribute("position"),h=u?u.count:f.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),v={},S=[];for(let M=0;M<h;M+=3){u?(p[0]=u.getX(M),p[1]=u.getX(M+1),p[2]=u.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:T,b:y,c:x}=Dl;if(T.fromBufferAttribute(f,p[0]),y.fromBufferAttribute(f,p[1]),x.fromBufferAttribute(f,p[2]),Dl.getNormal(gf),g[0]=`${Math.round(T.x*a)},${Math.round(T.y*a)},${Math.round(T.z*a)}`,g[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,g[2]=`${Math.round(x.x*a)},${Math.round(x.y*a)},${Math.round(x.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let D=0;D<3;D++){const b=(D+1)%3,R=g[D],B=g[b],F=Dl[_[D]],U=Dl[_[b]],j=`${R}_${B}`,P=`${B}_${R}`;P in v&&v[P]?(gf.dot(v[P].normal)<=l&&(S.push(F.x,F.y,F.z),S.push(U.x,U.y,U.z)),v[P]=null):j in v||(v[j]={index0:p[D],index1:p[b],normal:gf.clone()})}}for(const M in v)if(v[M]){const{index0:T,index1:y}=v[M];Pl.fromBufferAttribute(f,T),Ll.fromBufferAttribute(f,y),S.push(Pl.x,Pl.y,Pl.z),S.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new Bn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class lg extends no{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n_ extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _f=new Gt,cg=new $,ug=new $;class AT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ug),t.updateMatrixWorld(),_f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CT extends AT{constructor(){super(new $g(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends n_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new CT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class RT extends n_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dg{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bT extends Xl{constructor(e=10,t=10,s=4473924,a=8947848){s=new gt(s),a=new gt(a);const l=t/2,u=e/t,f=e/2,h=[],p=[];for(let v=0,S=0,M=-f;v<=t;v++,M+=u){h.push(-f,0,M,f,0,M),h.push(M,0,-f,M,0,f);const T=v===l?s:a;T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3}const _=new li;_.setAttribute("position",new Bn(h,3)),_.setAttribute("color",new Bn(p,3));const g=new qo({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PT extends Xl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new li;a.setAttribute("position",new Bn(t,3)),a.setAttribute("color",new Bn(s,3));const l=new qo({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,s){const a=new gt,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(s),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class LT extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);const hg={type:"change"},Sd={type:"start"},i_={type:"end"},Nl=new vd,pg=new Er,DT=Math.cos(70*ux.DEG2RAD),Jt=new $,On=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vf=1e-6;class NT extends LT{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new ts,this._lastTargetPosition=new $,this._quat=new ts().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dg,this._sphericalDelta=new dg,this._scale=1,this._panOffset=new $,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new $,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UT.bind(this),this._onPointerDown=IT.bind(this),this._onPointerUp=FT.bind(this),this._onContextMenu=GT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=zT.bind(this),this._onTouchStart=VT.bind(this),this._onTouchMove=HT.bind(this),this._onMouseDown=OT.bind(this),this._onMouseMove=kT.bind(this),this._interceptControlDown=WT.bind(this),this._interceptControlUp=XT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hg),this.update(),this.state=Lt.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=On:s>Math.PI&&(s-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Jt.length();u=this._clampDistance(f*this._scale);const h=f-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new $(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<DT?this.object.lookAt(this.target):(pg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(pg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>vf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vf||this._lastTargetPosition.distanceToSquared(this.target)>vf?(this.dispatchEvent(hg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,u=s.width,f=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function IT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function UT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function FT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(i_),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Lt.DOLLY;break;case Ws.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Lt.ROTATE}break;case Ws.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Sd)}function kT(r){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BT(r){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(r.preventDefault(),this.dispatchEvent(Sd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(i_))}function zT(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function VT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Lt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Lt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Sd)}function HT(r){switch(this._trackPointer(r),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Lt.NONE}}function GT(r){this.enabled!==!1&&r.preventDefault()}function WT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xf{constructor(e){Yt(this,"scene");Yt(this,"camera");Yt(this,"renderer");Yt(this,"controls");Yt(this,"container");Yt(this,"animationId",null);Yt(this,"renderCallbacks",[]);this.container=e,this.scene=new t_,this.scene.background=new gt(856343);const t=e.clientWidth/e.clientHeight;this.camera=new ri(45,t,.01,1e4),this.camera.position.set(5,5,5),this.renderer=new ET({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new NT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.screenSpacePanning=!0;const s=new RT(16777215,.4);this.scene.add(s);const a=new fg(16777215,.8);a.position.set(5,10,7),this.scene.add(a);const l=new fg(16777215,.3);l.position.set(-5,-3,-5),this.scene.add(l);const u=new bT(20,20,3159613,2172461);u.position.y=-.01,this.scene.add(u);const f=new PT(1);this.scene.add(f),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize)}static isWebGL2Available(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}onRender(e){this.renderCallbacks.push(e)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.controls.update();for(const t of this.renderCallbacks)t();this.renderer.render(this.scene,this.camera)};e()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}zoomToFit(){const e=new to().setFromObject(this.scene);if(e.isEmpty())return;const t=e.getCenter(new $),s=e.getSize(new $),a=Math.max(s.x,s.y,s.z),l=this.camera.fov*(Math.PI/180),u=a/(2*Math.tan(l/2))*1.5;this.camera.position.copy(t).add(new $(u*.7,u*.5,u*.7)),this.camera.lookAt(t),this.controls.target.copy(t),this.controls.update()}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.stop(),window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}function r_(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++)e[t]=r[t];return e}function s_(r){let e=1/0,t=-1/0;for(let s=0;s<r.length;s++){const a=r[s];Number.isFinite(a)&&(a<e&&(e=a),a>t&&(t=a))}return e===1/0?[NaN,NaN]:[e,t]}function Md(r,e){switch(e){case"float64":return new Float64Array(r);case"float32":return new Float32Array(r);case"int32":return new Int32Array(r);case"uint8":return new Uint8Array(r);default:throw new Error(`Unsupported dtype: ${e}`)}}function jT(r){let e=0;for(let t=0;t<r.length;t++)Number.isNaN(r[t])&&e++;return e}class YT{constructor(){Yt(this,"meshGroups",[]);Yt(this,"baseGeometry",null)}buildMesh(e,t,s,a,l){this.clear(l);const u=r_(e);this.baseGeometry=new li,this.baseGeometry.setAttribute("position",new cn(u,3)),this.baseGeometry.setAttribute("normal",new cn(s,3)),this.baseGeometry.setIndex(new cn(t,1));const f=new Float32Array(u.length);this.baseGeometry.setAttribute("displacement",new cn(f,3));const h=new Float32Array(e.length/3);if(this.baseGeometry.setAttribute("scalarValue",new cn(h,1)),a.size===0){const p=new lg({color:5809919,side:jn,flatShading:!1,vertexColors:!1}),_=new ai(this.baseGeometry,p);_.name="default",l.add(_),this.meshGroups.push({partId:"default",mesh:_})}else for(const[p,[_,g]]of a){const v=_*3,S=(g-_)*3,M=this.baseGeometry.clone();M.setDrawRange(v,S);const T=new lg({color:5809919,side:jn,flatShading:!1,vertexColors:!1}),y=new ai(M,T);y.name=p,l.add(y),this.meshGroups.push({partId:p,mesh:y})}}getMeshGroups(){return this.meshGroups}getBaseGeometry(){return this.baseGeometry}setPartVisible(e,t){const s=this.meshGroups.find(a=>a.partId===e);s&&(s.mesh.visible=t)}isolatePart(e){for(const t of this.meshGroups)t.mesh.visible=t.partId===e}showAll(){for(const e of this.meshGroups)e.mesh.visible=!0}clear(e){for(const t of this.meshGroups)e.remove(t.mesh),t.mesh.geometry.dispose(),Array.isArray(t.mesh.material)?t.mesh.material.forEach(s=>s.dispose()):t.mesh.material.dispose();this.meshGroups=[],this.baseGeometry=null}}class qT{constructor(){Yt(this,"wireframeMeshes",[]);Yt(this,"overlayMeshes",[])}createWireframe(e,t){this.clear(t);const s=new ag(e,15),a=new qo({color:9147550,transparent:!0,opacity:.4,depthTest:!0}),l=new Xl(s,a);l.visible=!1,l.name="wireframe",l.renderOrder=1,t.add(l),this.wireframeMeshes.push(l)}setVisible(e){for(const t of this.wireframeMeshes)t.visible=e}isVisible(){return this.wireframeMeshes.length>0&&this.wireframeMeshes[0].visible}createOverlayWireframe(e,t){if(this.overlayMeshes.length>0)return;const s=new ag(e,15),a=new qo({color:16753920,transparent:!0,opacity:.5,depthTest:!0}),l=new Xl(s,a);l.visible=!0,l.name="deform-overlay",l.renderOrder=2,t.add(l),this.overlayMeshes.push(l)}clearOverlay(e){for(const t of this.overlayMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.overlayMeshes=[]}clear(e){for(const t of this.wireframeMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.wireframeMeshes=[],this.clearOverlay(e)}}function yf(r){const e=new Uint8Array(1024),t=o_(r);for(let a=0;a<256;a++){const l=a*3,u=a*4;e[u]=Math.round(t[l]*255),e[u+1]=Math.round(t[l+1]*255),e[u+2]=Math.round(t[l+2]*255),e[u+3]=255}const s=new TT(e,256,1,Yn);return s.minFilter=oi,s.magFilter=oi,s.wrapS=wr,s.needsUpdate=!0,s}function $T(r,e){const t=o_(r),s=Math.min(Math.max(Math.round(e*255),0),255)*3;return[Math.round(t[s]*255),Math.round(t[s+1]*255),Math.round(t[s+2]*255)]}function o_(r){switch(r){case"viridis":return KT();case"coolwarm":return ZT();case"jet":return QT();case"rainbow":return JT();case"grayscale":return ew()}}function KT(){const r=new Float32Array(768);return Ed([[.267,.004,.329],[.282,.14,.458],[.254,.265,.53],[.207,.372,.553],[.164,.471,.558],[.128,.567,.551],[.134,.658,.517],[.267,.749,.441],[.478,.821,.318],[.741,.873,.15],[.993,.906,.144]],r)}function ZT(){const r=new Float32Array(768);return Ed([[.23,.299,.754],[.552,.588,.893],[.866,.866,.866],[.897,.57,.462],[.706,.016,.15]],r)}function QT(){const r=new Float32Array(768);return Ed([[0,0,.5],[0,0,1],[0,1,1],[1,1,0],[1,0,0],[.5,0,0]],r)}function JT(){const r=new Float32Array(768);for(let e=0;e<256;e++){const s=(1-e/255)*300,[a,l,u]=tw(s/360,1,.5);r[e*3]=a,r[e*3+1]=l,r[e*3+2]=u}return r}function ew(){const r=new Float32Array(768);for(let e=0;e<256;e++){const t=e/255;r[e*3]=t,r[e*3+1]=t,r[e*3+2]=t}return r}function Ed(r,e){const t=r.length-1;for(let s=0;s<256;s++){const a=s/255,l=Math.min(Math.floor(a*t),t-1),u=a*t-l,f=r[l],h=r[l+1];e[s*3]=f[0]+(h[0]-f[0])*u,e[s*3+1]=f[1]+(h[1]-f[1])*u,e[s*3+2]=f[2]+(h[2]-f[2])*u}return e}function tw(r,e,t){const s=(1-Math.abs(2*t-1))*e,a=s*(1-Math.abs(r*6%2-1)),l=t-s/2;let u=0,f=0,h=0;switch(Math.floor(r*6)%6){case 0:u=s,f=a;break;case 1:u=a,f=s;break;case 2:f=s,h=a;break;case 3:f=a,h=s;break;case 4:u=a,h=s;break;case 5:u=s,h=a;break}return[u+l,f+l,h+l]}const nw=`// Contour Vertex Shader\r
// Per 02b §6.2: position = base_position + u_scale * displacement\r
\r
attribute vec3 displacement;\r
attribute float scalarValue;\r
\r
uniform float u_deform_scale;\r
\r
varying float v_scalar;\r
varying vec3 v_normal;\r
varying vec3 v_position;\r
\r
void main() {\r
  vec3 deformed = position + u_deform_scale * displacement;\r
  v_scalar = scalarValue;\r
  v_normal = normalize(normalMatrix * normal);\r
  v_position = (modelViewMatrix * vec4(deformed, 1.0)).xyz;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);\r
}\r
`,iw=`// Contour Fragment Shader\r
// Per 02b §6.4: LUT sample, NaN → grey, above/below range colors\r
\r
uniform sampler2D u_lut;\r
uniform float u_min;\r
uniform float u_max;\r
uniform vec4 u_nan_color;\r
uniform vec4 u_above_color;\r
uniform vec4 u_below_color;\r
\r
varying float v_scalar;\r
varying vec3 v_normal;\r
varying vec3 v_position;\r
\r
void main() {\r
  // NaN check: NaN != NaN\r
  if (v_scalar != v_scalar) {\r
    gl_FragColor = u_nan_color;\r
    return;\r
  }\r
\r
  float range = u_max - u_min;\r
  float t;\r
\r
  if (range <= 0.0) {\r
    t = 0.5;\r
  } else {\r
    t = (v_scalar - u_min) / range;\r
  }\r
\r
  // Below/above range clamping\r
  if (t < 0.0) {\r
    gl_FragColor = u_below_color;\r
    return;\r
  }\r
  if (t > 1.0) {\r
    gl_FragColor = u_above_color;\r
    return;\r
  }\r
\r
  // Sample LUT texture\r
  vec4 color = texture2D(u_lut, vec2(t, 0.5));\r
\r
  // Basic directional lighting\r
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));\r
  float diffuse = max(dot(normalize(v_normal), lightDir), 0.0);\r
  float ambient = 0.3;\r
  float lighting = ambient + (1.0 - ambient) * diffuse;\r
\r
  gl_FragColor = vec4(color.rgb * lighting, color.a);\r
}\r
`;class rw{constructor(){Yt(this,"lutTexture");Yt(this,"material",null);Yt(this,"originalMaterials",new Map);this.lutTexture=yf("viridis")}createContourMaterial(e){return this.lutTexture=yf(e.lut_name),this.material=new bi({vertexShader:nw,fragmentShader:iw,uniforms:{u_lut:{value:this.lutTexture},u_min:{value:e.min_value},u_max:{value:e.max_value},u_deform_scale:{value:0},u_nan_color:{value:new Bt(...e.nan_color)},u_above_color:{value:new Bt(...e.above_range_color)},u_below_color:{value:new Bt(...e.below_range_color)}},side:jn,transparent:!0}),this.material}applyScalarField(e,t,s,a,l){const[u,f]=s_(t),h=e.getAttribute("scalarValue"),p=h.array;if(s==="nodal")for(let _=0;_<p.length;_++)p[_]=_<t.length?t[_]:NaN;else if(s==="elemental"&&a&&l){const _=l.length/3;p.fill(NaN);for(let g=0;g<_;g++){const v=a[g],S=v<t.length?t[v]:NaN;for(let M=0;M<3;M++){const T=l[g*3+M];p[T]=S}}}return h.needsUpdate=!0,{min:u,max:f}}updateRange(e,t){this.material&&(this.material.uniforms.u_min.value=e,this.material.uniforms.u_max.value=t)}setColorMap(e){this.lutTexture.dispose(),this.lutTexture=yf(e),this.material&&(this.material.uniforms.u_lut.value=this.lutTexture)}getMaterial(){return this.material}swapMeshMaterials(e,t){for(const s of e)this.originalMaterials.has(s.partId)||this.originalMaterials.set(s.partId,s.mesh.material),s.mesh.material=t}restoreMeshMaterials(e){for(const t of e){const s=this.originalMaterials.get(t.partId);s&&(t.mesh.material=s)}this.originalMaterials.clear()}setDeformScale(e){this.material&&(this.material.uniforms.u_deform_scale.value=e)}dispose(){var e;this.lutTexture.dispose(),(e=this.material)==null||e.dispose(),this.originalMaterials.clear()}}class sw{constructor(){Yt(this,"currentMaterial",null)}setDisplacement(e,t){const s=r_(t),a=e.getAttribute("displacement");a&&a.array.length===s.length?(a.array.set(s),a.needsUpdate=!0):e.setAttribute("displacement",new cn(s,3))}clearDisplacement(e){const t=e.getAttribute("displacement");t&&(t.array.fill(0),t.needsUpdate=!0)}setScale(e,t){this.currentMaterial=e,e.uniforms.u_deform_scale.value=t}getScale(){var e,t;return((t=(e=this.currentMaterial)==null?void 0:e.uniforms.u_deform_scale)==null?void 0:t.value)??0}}function ow(r){const e=ye(g=>g.activeFieldId),t=ye(g=>g.activeTimestep),s=ye(g=>g.modelId),a=ye(g=>g.status),l=ye(g=>g.fields),u=ye(g=>g.surfaceIndices),f=ye(g=>g.surfaceElementMap),h=Nt(g=>g.colorMapConfig),p=et.useRef(null),_=et.useRef(null);et.useEffect(()=>{var y;const{contourManager:g,meshManager:v}=r;if(!g||!v||a!=="ready"||!s)return;if(!e){Il(v,g),p.current=null;return}const S=l.find(x=>x.id===e);if(!S){Il(v,g);return}if(S.location==="integration_point"){ye.getState().setFieldValues(null),ye.getState().setFieldLoadError("Integration-point fields are not supported in MVP. Extrapolation would misrepresent provenance."),Il(v,g);return}(y=_.current)==null||y.abort();const M=new AbortController;return _.current=M,(async()=>{try{ye.getState().setFieldLoadError(null);const x=await cd(`/models/${s}/fields/${e}/data?step=${t}`);if(M.signal.aborted)return;const D=Md(x.buffer,x.meta.dtype);ye.getState().setFieldValues(D);const b=jT(D);ye.getState().setFieldNanCount(b);const[R,B]=s_(D);Number.isNaN(R)||Number.isNaN(B)?(ye.getState().setFieldLoadError("All field values are NaN. Cannot compute contour range."),Nt.getState().setColorMapRange(0,1)):Nt.getState().setColorMapRange(R,B);const F=v.getBaseGeometry();if(!F||!u)return;const U=Nt.getState().colorMapConfig;p.current!==e&&g.createContourMaterial(U),g.applyScalarField(F,D,S.location,f??void 0,u??void 0),!Number.isNaN(R)&&!Number.isNaN(B)&&g.updateRange(R,B);const j=g.getMaterial();j&&g.swapMeshMaterials(v.getMeshGroups(),j),p.current=e}catch(x){if(M.signal.aborted)return;ye.getState().setFieldValues(null),ye.getState().setFieldNanCount(0);const D=x instanceof Error?x.message:"Failed to load field data";D.includes("404")||D.includes("No data")?ye.getState().setFieldLoadError("No data at this step"):ye.getState().setFieldLoadError(D),Il(v,g)}})(),()=>{M.abort()}},[e,t,s,a,l,u,f,r,h]),et.useEffect(()=>{const{contourManager:g}=r;!g||!e||g.setColorMap(h.lut_name)},[h.lut_name,r,e])}function Il(r,e){ye.getState().setFieldValues(null),ye.getState().setFieldLoadError(null),ye.getState().setFieldNanCount(0),e.restoreMeshMaterials(r.getMeshGroups())}const mg=34e37;function aw(r){const e=Nt(v=>v.deformFieldId),t=Nt(v=>v.deformMode),s=Nt(v=>v.deformScale),a=ye(v=>v.activeTimestep),l=ye(v=>v.modelId),u=ye(v=>v.status),f=ye(v=>v.fields),h=ye(v=>v.nodeCoords_f64),p=et.useRef(null),_=et.useRef(null),g=et.useRef(-1);et.useEffect(()=>{var D;const{deformManager:v,meshManager:S}=r;if(!v||!S||u!=="ready"||!l)return;const M=S.getBaseGeometry();if(!M)return;if(!e){Vs(v,M),_.current=null,g.current=-1;return}const T=f.find(b=>b.id===e);if(!T){Vs(v,M),ye.getState().setDeformLoadError("Deformation field not found");return}if(T.location!=="nodal"){Vs(v,M),ye.getState().setDeformLoadError(`Deformation requires a nodal field. "${T.name}" is ${T.location}.`);return}if(T.n_components!==3){Vs(v,M),ye.getState().setDeformLoadError(`Deformation requires a vector3 field. "${T.name}" has ${T.n_components} component(s).`);return}if(_.current===e&&g.current===a)return;(D=p.current)==null||D.abort();const y=new AbortController;return p.current=y,(async()=>{try{ye.getState().setDeformLoadError(null);const b=await cd(`/models/${l}/fields/${e}/data?step=${a}`);if(y.signal.aborted)return;const R=Md(b.buffer,b.meta.dtype),B=h?h.length/3:0,F=B*3;if(R.length!==F){Vs(v,M),ye.getState().setDeformLoadError(`Displacement array length mismatch: got ${R.length}, expected ${F} (${B} nodes × 3).`);return}ye.getState().setDisplacementValues(R),v.setDisplacement(M,R),_.current=e,g.current=a}catch(b){if(y.signal.aborted)return;ye.getState().setDisplacementValues(null),Vs(v,M);const R=b instanceof Error?b.message:"Failed to load displacement data";R.includes("404")||R.includes("No data")?ye.getState().setDeformLoadError("No data at this step"):ye.getState().setDeformLoadError(R)}})(),()=>{y.abort()}},[e,a,l,u,f,h,r]),et.useEffect(()=>{const{deformManager:v,meshManager:S,contourManager:M,wireframeManager:T,scene:y}=r;if(!v||!S)return;const x=S.getBaseGeometry();if(!x||!e)return;let D;switch(t){case"undeformed":D=0;break;case"deformed":case"overlay":D=s;break}const b=ye.getState().displacement_f64;if(b&&D>0){let B=0;for(let F=0;F<b.length;F++){const U=Math.abs(b[F]);U>B&&Number.isFinite(U)&&(B=U)}if(B*D>mg){const F=mg/B;ye.getState().setDeformLoadError(`Scale clamped to ${F.toFixed(1)} to avoid Float32 overflow.`),D=F}}(M==null?void 0:M.getMaterial())&&M.setDeformScale(D),T&&y&&(t==="overlay"&&D>0?T.createOverlayWireframe(x,y):T.clearOverlay(y))},[t,s,e,r])}function Vs(r,e){r.clearDisplacement(e),ye.getState().setDisplacementValues(null),ye.getState().setDeformLoadError(null)}class lw{constructor(e,t){Yt(this,"pickingTarget");Yt(this,"pickingScene");Yt(this,"pickingMeshes",[]);Yt(this,"pixelBuffer");this.pickingTarget=new br(e,t,{format:Yn,type:Ci,minFilter:An,magFilter:An}),this.pickingScene=new t_,this.pixelBuffer=new Uint8Array(4)}buildPickingScene(e,t,s,a){this.clearPickingScene();const l=e.getIndex();if(!l)return;const u=l.array,f=u.length/3,h=e.getAttribute("position").count,p=new Float32Array(h*3);if(a==="element")for(let S=0;S<f;S++){const M=t[S]??0,[T,y,x]=gg(M+1);for(let D=0;D<3;D++){const b=u[S*3+D];p[b*3]=T,p[b*3+1]=y,p[b*3+2]=x}}else for(let S=0;S<h;S++){const[M,T,y]=gg(S+1);p[S*3]=M,p[S*3+1]=T,p[S*3+2]=y}const _=e.clone();_.setAttribute("color",new cn(p,3));const g=new bi({vertexShader:`
        attribute vec3 color;
        attribute vec3 displacement;
        uniform float u_deform_scale;
        varying vec3 v_pickColor;
        void main() {
          vec3 deformed = position + u_deform_scale * displacement;
          v_pickColor = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_pickColor;
        void main() {
          gl_FragColor = vec4(v_pickColor, 1.0);
        }
      `,uniforms:{u_deform_scale:{value:0}},side:jn}),v=new ai(_,g);this.pickingScene.add(v),this.pickingMeshes.push(v)}pick(e,t,s,a,l){e.setRenderTarget(this.pickingTarget),e.render(this.pickingScene,t),e.setRenderTarget(null),e.readRenderTargetPixels(this.pickingTarget,s,this.pickingTarget.height-a,1,1,this.pixelBuffer);const u=cw(this.pixelBuffer[0],this.pixelBuffer[1],this.pixelBuffer[2]);return u===0?null:{mode:l,id:u-1}}resize(e,t){this.pickingTarget.setSize(e,t)}setDeformScale(e){for(const t of this.pickingMeshes){const s=t.material;s.uniforms.u_deform_scale&&(s.uniforms.u_deform_scale.value=e)}}clearPickingScene(){for(const e of this.pickingMeshes)this.pickingScene.remove(e),e.geometry.dispose(),e.material.dispose();this.pickingMeshes=[]}dispose(){this.clearPickingScene(),this.pickingTarget.dispose()}}function gg(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function cw(r,e,t){return r<<16|e<<8|t}const a_=({pickedEntity:r})=>{const e=ye(h=>h.nodeCoords_f64),t=ye(h=>h.fieldValues_f64),s=ye(h=>h.fields),a=ye(h=>h.activeFieldId),l=ye(h=>h.fieldLoadError);if(!r)return null;const u=s.find(h=>h.id===a),f=u&&t&&!l;return Q.jsxs("div",{className:"panel-overlay panel-overlay--info",children:[Q.jsxs("div",{style:{fontWeight:600,marginBottom:8,fontSize:12},children:[r.mode==="node"?"⊙ Node":"◻ Element"," #",r.id]}),r.mode==="node"&&Q.jsx("div",{style:{fontSize:10,color:"var(--text-secondary)",marginBottom:6,fontStyle:"italic"},children:"Nearest surface vertex (MVP approximation)"}),r.mode==="node"&&e&&Q.jsxs(Q.Fragment,{children:[Q.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Coordinates (Float64)"}),["X","Y","Z"].map((h,p)=>{var _;return Q.jsxs("div",{className:"info-panel__row",children:[Q.jsx("span",{className:"info-panel__key",children:h}),Q.jsx("span",{className:"info-panel__value",children:((_=e[r.id*3+p])==null?void 0:_.toPrecision(15))??"N/A"})]},h)}),f&&u.location==="nodal"&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:8,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return Q.jsxs("div",{className:"info-panel__row",children:[Q.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),Q.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})]}),r.mode==="element"&&Q.jsx(Q.Fragment,{children:f&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return Q.jsxs("div",{className:"info-panel__row",children:[Q.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),Q.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})}),u&&l&&Q.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",marginTop:8},children:["⚠ ",l]}),!u&&Q.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4},children:"Select a field to see probe values."})]})},uw=({containerRef:r})=>{var he,ce;const e=et.useRef(null),t=et.useRef(null),s=et.useRef(null),a=et.useRef(null),l=et.useRef(null),u=et.useRef(null),f=et.useRef(null),[h,p]=et.useState(!0),[_,g]=et.useState(null);ow({contourManager:l.current,meshManager:s.current,scene:((he=t.current)==null?void 0:he.scene)??null}),aw({deformManager:u.current,meshManager:s.current,wireframeManager:a.current,contourManager:l.current,scene:((ce=t.current)==null?void 0:ce.scene)??null});const v=ye(Y=>Y.modelId),S=ye(Y=>Y.status),M=ye(Y=>Y.setMetadata),T=ye(Y=>Y.setWarnings),y=ye(Y=>Y.setTree),x=ye(Y=>Y.setFields),D=ye(Y=>Y.setSets),b=ye(Y=>Y.setNodeCoords),R=ye(Y=>Y.setSurfaceData),B=ye(Y=>Y.setActiveFieldId),F=Nt(Y=>Y.wireframeVisible);if(et.useEffect(()=>{xf.isWebGL2Available()||p(!1)},[]),et.useEffect(()=>{const Y=performance;if(Y.memory){const O=Y.memory.usedJSHeapSize/1048576;O>2048?console.error("[Memory] Heap exceeds 2GB - refusing further loads"):O>1536&&console.warn("[Memory] Heap approaching 1.5GB - performance may degrade")}},[S]),et.useEffect(()=>{const Y=e.current;if(!Y||!h||!xf.isWebGL2Available()){p(!1);return}const O=new xf(Y);t.current=O,s.current=new YT,a.current=new qT,l.current=new rw,u.current=new sw,f.current=new lw(Y.clientWidth,Y.clientHeight),O.start();const oe=()=>{var re;if(O.renderer){const I=O.renderer.domElement;(re=f.current)==null||re.resize(I.width,I.height)}};return window.addEventListener("resize",oe),()=>{var re;window.removeEventListener("resize",oe),O.dispose(),(re=f.current)==null||re.dispose(),t.current=null}},[h]),et.useEffect(()=>{if(S!=="ready"||!v)return;(async()=>{const O=t.current,oe=s.current,re=a.current;if(!(!O||!oe||!re))try{console.info(`[Viewport] Status became ready for ${v}`),console.info(`[Viewport] Renderer init start for ${v}`),console.info(`[Viewport] Nodes fetch start for ${v}`),console.info(`[Viewport] Surfaces fetch start for ${v}`);const[I,Z,Le,J,ue,Me]=await Promise.all([cd(`/models/${v}/nodes`),t0(`/models/${v}/surfaces`),l0(v),c0(v),u0(v),f0(v)]);console.info("[Viewport] Surfaces headers",{modelId:v,dtype:Z.headers.dtype,byteOrder:Z.headers.byteOrder,shape:Z.headers.shape,offsets:Z.headers.offsets}),console.info("[Viewport] Parsed surface sections",{modelId:v,indicesLength:Z.surfaceIndices.length,normalsLength:Z.surfaceNormals.length,mapLength:Z.surfaceElementMap.length}),console.info("[Viewport] Nodes fetch result",{modelId:v,byteLength:I.buffer.byteLength});const _e=Z.surfaceIndices,Ce=Z.surfaceNormals,Ue=Z.surfaceElementMap,$e=Md(I.buffer,I.meta.dtype);b($e),R(_e,Ce,Ue),M(Le.metadata),T(Le.warnings??[]),y(J),x(ue),D(Me),ue.length>0&&!ye.getState().activeFieldId&&B(ue[0].id),console.info("[Viewport] Geometry creation started",{modelId:v}),oe.buildMesh($e,_e,Ce,new Map,O.scene);const wt=oe.getBaseGeometry();wt&&re.createWireframe(wt,O.scene),O.zoomToFit(),console.info("[Viewport] Geometry creation succeeded",{modelId:v}),console.info("[Viewport] Renderer init result",{modelId:v,nodeCount:$e.length/3,triangleCount:_e.length/3}),Le.metadata.unit_system.declared_system==="unspecified"&&ye.getState().addWarning({category:"Missing Units",message:"Units not declared. Values shown without unit context.",severity:"warning",dismissible:!1})}catch(I){const Z=I instanceof Error?I.message:"Failed to load model";console.error("[Viewport] Failed to load model:",I),ye.getState().setStatus("error"),ye.getState().setErrorMessage(`Surface/bootstrap failed: ${Z}`)}})()},[v,B,x,M,b,D,R,y,T,S]),et.useEffect(()=>{var Y;(Y=a.current)==null||Y.setVisible(F)},[F]),!h)return Q.jsxs("div",{className:"webgl-fallback",children:[Q.jsx("div",{className:"webgl-fallback__title",children:"WebGL2 Not Available"}),Q.jsx("div",{className:"webgl-fallback__text",children:"Your browser does not support WebGL2. The 3D viewer requires WebGL2 for rendering. You can still view model metadata and text-based summaries."})]});const U=Nt(Y=>Y.pickMode),j=Nt(Y=>Y.deformMode),P=Nt(Y=>Y.deformScale),C=ye(Y=>Y.surfaceElementMap),z=ye(Y=>Y.nodeCoords_f64),le=et.useRef({mode:"",gen:0}),te=et.useRef(0);et.useEffect(()=>{S==="ready"&&C&&(te.current+=1)},[S,C]),et.useEffect(()=>{const Y=f.current,O=s.current;if(!Y||!O||S!=="ready"||!C)return;const oe=O.getBaseGeometry();if(!oe)return;const re={mode:U,gen:te.current};if(le.current.mode===re.mode&&le.current.gen===re.gen)return;const I=z?z.length/3:0;Y.buildPickingScene(oe,C,I,U),le.current=re},[U,S,C,z]),et.useEffect(()=>{const Y=f.current;Y&&Y.setDeformScale(j==="undeformed"?0:P)},[j,P]);const fe=et.useCallback(Y=>{const O=f.current,oe=t.current;if(!O||!oe||S!=="ready")return;const I=oe.renderer.domElement.getBoundingClientRect(),Z=oe.renderer.getPixelRatio(),Le=Math.round((Y.clientX-I.left)*Z),J=Math.round((Y.clientY-I.top)*Z),ue=O.pick(oe.renderer,oe.camera,Le,J,U);g(ue?{mode:ue.mode,id:ue.id}:null)},[U,S]);return Q.jsx("div",{ref:e,onClick:fe,style:{width:"100%",height:"100%",position:"relative"},children:Q.jsx(a_,{pickedEntity:_})})},fw=()=>{var h,p;const r=ye(_=>_.fields),e=ye(_=>_.activeFieldId),t=ye(_=>_.metadata),s=ye(_=>_.fieldNanCount),a=Nt(_=>_.colorMapConfig),l=et.useRef(null),u=r.find(_=>_.id===e);if(et.useEffect(()=>{const _=l.current;if(!_||!u)return;const g=_.getContext("2d");if(!g)return;const v=_.width,S=_.height;for(let M=0;M<S;M++){const T=1-M/S,[y,x,D]=$T(a.lut_name,T);g.fillStyle=`rgb(${y}, ${x}, ${D})`,g.fillRect(0,M,v,1)}},[u,a]),!u)return null;const f=((h=t==null?void 0:t.unit_system)==null?void 0:h.declared_system)==="unspecified"?"":((p=t==null?void 0:t.unit_system)==null?void 0:p.length)??"";return Q.jsx("div",{className:"panel-overlay panel-overlay--legend",children:Q.jsxs("div",{className:"color-legend",children:[Q.jsxs("div",{className:"color-legend__title",children:[u.name,u.n_components>1?` (${u.n_components} comp)`:""]}),Q.jsxs("div",{style:{display:"flex",gap:6},children:[Q.jsx("canvas",{ref:l,width:24,height:200,className:"color-legend__gradient"}),Q.jsxs("div",{className:"color-legend__labels",style:{height:200,padding:"2px 0"},children:[Q.jsxs("span",{children:[a.max_value.toPrecision(4),f?` ${f}`:""]}),Q.jsx("span",{children:((a.max_value+a.min_value)/2).toPrecision(4)}),Q.jsxs("span",{children:[a.min_value.toPrecision(4),f?` ${f}`:""]})]})]}),Q.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:4},children:[u.location," • ",a.lut_name,a.lut_name==="jet"&&Q.jsx("span",{style:{color:"var(--accent-warning)",marginLeft:4},children:"⚠ not perceptually uniform"})]}),s>0&&Q.jsxs("div",{style:{fontSize:10,color:"var(--accent-warning)",marginTop:2},children:[s," NaN value",s!==1?"s":""," (grey)"]})]})})},dw=()=>{const r=ye(t=>t.metadata);if(!r)return Q.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No metadata"});const e=[["File",r.source_filename],["Format",`${r.file_format} (${r.format_version})`],["Solver",r.solver_name],["Version",r.solver_version],["Title",r.title],["Coord System",r.coordinate_system],["Length Unit",r.unit_system.length],["Force Unit",r.unit_system.force],["Time Unit",r.unit_system.time],["Temp Unit",r.unit_system.temperature],["System",r.unit_system.declared_system]];return Q.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:e.map(([t,s])=>Q.jsxs("div",{className:"info-panel__row",children:[Q.jsx("span",{className:"info-panel__key",children:t}),Q.jsx("span",{className:"info-panel__value",style:{color:s==="unspecified"||s==="Not specified"?"var(--accent-warning)":void 0},children:s})]},t))})},hw=()=>{const r=ye(f=>f.warnings),[e,t]=et.useState(new Set),[s,a]=et.useState(!1),l=r.filter((f,h)=>f.dismissible?!e.has(h):!0);if(l.length===0)return null;const u=f=>{t(h=>new Set(h).add(f))};return Q.jsxs("div",{className:"panel-overlay panel-overlay--warning",children:[Q.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:8},onClick:()=>a(!s),children:[Q.jsxs("span",{style:{fontWeight:600},children:["⚠ ",l.length," warning",l.length!==1?"s":""]}),Q.jsx("span",{style:{fontSize:10},children:s?"▲":"▼"})]}),s&&Q.jsx("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:4},children:r.map((f,h)=>f.dismissible&&e.has(h)?null:Q.jsxs("div",{className:"warning-banner",children:[Q.jsxs("span",{style:{flex:1},children:[Q.jsxs("strong",{children:["[",f.category,"]"]})," ",f.message]}),f.dismissible&&Q.jsx("button",{className:"warning-banner__close",onClick:p=>{p.stopPropagation(),u(h)},children:"✕"})]},h))})]})},pw=()=>{const e=et.useRef(new URLSearchParams(window.location.search).get("modelId")).current,t=ye(b=>b.status),s=ye(b=>b.warnings),a=ye(b=>b.tree),l=ye(b=>b.metadata),u=ye(b=>b.fields),f=ye(b=>b.activeFieldId),h=et.useRef(null),p=ye(b=>b.setModelId),_=ye(b=>b.setStatus),g=ye(b=>b.setErrorMessage),v=ye(b=>b.setParseProgress),S=ye(b=>b.resetModel);et.useLayoutEffect(()=>{if(e)return console.info(`[App] Detected modelId from URL: ${e}`),S(),p(e),_("parsing"),v(0),g(null),yg(e,{onStatus:b=>{if(b.status==="ready"){_("ready");return}if(b.status==="error"){_("error"),g(b.error_message??"Model parsing failed");return}_("parsing")},onProgress:b=>{v(b.progress*100)},onError:b=>{console.error("[App] Bootstrap error",b),_("error"),g(b.message||"Failed to bootstrap model")},onTimeout:()=>{const b="Model parsing timed out after 60 seconds";console.error("[App] Bootstrap timeout",{modelId:e}),_("error"),g(b)}})},[e,S,g,p,v,_]);const M=t==="ready",T=l!==null||a!==null||u.length>0,y=M||t==="error"&&T,x=!!e&&(t==="idle"||t==="parsing"),D=!e&&t!=="ready";return Q.jsxs("div",{className:"app-layout",children:[Q.jsx(S0,{}),Q.jsxs("div",{className:"sidebar",children:[(D||t==="parsing"||t==="error")&&Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Upload / Status"}),Q.jsx(m0,{})]}),y&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Model Tree"}),Q.jsx(_0,{})]}),Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Field"}),Q.jsx(v0,{})]}),Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Timestep"}),Q.jsx(x0,{})]}),Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Deformation"}),Q.jsx(y0,{})]}),Q.jsxs("div",{className:"sidebar__section",children:[Q.jsx("div",{className:"sidebar__section-title",children:"Metadata"}),Q.jsx(dw,{})]})]})]}),Q.jsxs("div",{className:"viewport",ref:h,children:[t==="idle"&&!x?Q.jsx("div",{className:"no-data-message",children:"Upload a VTK/VTU file to begin"}):t==="uploading"?Q.jsx("div",{className:"no-data-message",children:"Uploading..."}):t==="parsing"||x?Q.jsx("div",{className:"no-data-message",children:"Loading model..."}):t==="error"?Q.jsx("div",{className:"no-data-message",style:{color:"var(--accent-danger)"},children:"Error loading model. Check sidebar for details."}):Q.jsx(uw,{containerRef:h}),y&&f&&Q.jsx(fw,{}),y&&Q.jsx(a_,{}),s.length>0&&Q.jsx(hw,{})]})]})};Zv.createRoot(document.getElementById("root")).render(Q.jsx(Go.StrictMode,{children:Q.jsx(pw,{})}));
