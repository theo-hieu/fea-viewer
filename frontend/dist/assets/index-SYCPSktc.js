var Xv=Object.defineProperty;var jv=(r,e,t)=>e in r?Xv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Gt=(r,e,t)=>jv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Eg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nu={exports:{}},Oo={},Iu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Yv(){if(Zp)return gt;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function y(U,te,J){this.props=U,this.context=te,this.refs=E,this.updater=J||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(U,te,J){this.props=U,this.context=te,this.refs=E,this.updater=J||S}var L=D.prototype=new v;L.constructor=D,w(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function O(U,te,J){var W,se={},he=null,ge=null;if(te!=null)for(W in te.ref!==void 0&&(ge=te.ref),te.key!==void 0&&(he=""+te.key),te)k.call(te,W)&&!F.hasOwnProperty(W)&&(se[W]=te[W]);var Me=arguments.length-2;if(Me===1)se.children=J;else if(1<Me){for(var be=Array(Me),$e=0;$e<Me;$e++)be[$e]=arguments[$e+2];se.children=be}if(U&&U.defaultProps)for(W in Me=U.defaultProps,Me)se[W]===void 0&&(se[W]=Me[W]);return{$$typeof:r,type:U,key:he,ref:ge,props:se,_owner:I.current}}function b(U,te){return{$$typeof:r,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function V(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(J){return te[J]})}var de=/\/+/g;function ee(U,te){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):te.toString(36)}function fe(U,te,J,W,se){var he=typeof U;(he==="undefined"||he==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(he){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case r:case e:ge=!0}}if(ge)return ge=U,se=se(ge),U=W===""?"."+ee(ge,0):W,R(se)?(J="",U!=null&&(J=U.replace(de,"$&/")+"/"),fe(se,te,J,"",function($e){return $e})):se!=null&&(C(se)&&(se=b(se,J+(!se.key||ge&&ge.key===se.key?"":(""+se.key).replace(de,"$&/")+"/")+U)),te.push(se)),1;if(ge=0,W=W===""?".":W+":",R(U))for(var Me=0;Me<U.length;Me++){he=U[Me];var be=W+ee(he,Me);ge+=fe(he,te,J,be,se)}else if(be=x(U),typeof be=="function")for(U=be.call(U),Me=0;!(he=U.next()).done;)he=he.value,be=W+ee(he,Me++),ge+=fe(he,te,J,be,se);else if(he==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ge}function pe(U,te,J){if(U==null)return U;var W=[],se=0;return fe(U,W,"","",function(he){return te.call(J,he,se++)}),W}function le(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(J){(U._status===0||U._status===-1)&&(U._status=1,U._result=J)},function(J){(U._status===0||U._status===-1)&&(U._status=2,U._result=J)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},z={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:pe,forEach:function(U,te,J){pe(U,function(){te.apply(this,arguments)},J)},count:function(U){var te=0;return pe(U,function(){te++}),te},toArray:function(U){return pe(U,function(te){return te})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=D,gt.StrictMode=s,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,gt.act=oe,gt.cloneElement=function(U,te,J){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var W=w({},U.props),se=U.key,he=U.ref,ge=U._owner;if(te!=null){if(te.ref!==void 0&&(he=te.ref,ge=I.current),te.key!==void 0&&(se=""+te.key),U.type&&U.type.defaultProps)var Me=U.type.defaultProps;for(be in te)k.call(te,be)&&!F.hasOwnProperty(be)&&(W[be]=te[be]===void 0&&Me!==void 0?Me[be]:te[be])}var be=arguments.length-2;if(be===1)W.children=J;else if(1<be){Me=Array(be);for(var $e=0;$e<be;$e++)Me[$e]=arguments[$e+2];W.children=Me}return{$$typeof:r,type:U.type,key:se,ref:he,props:W,_owner:ge}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=O,gt.createFactory=function(U){var te=O.bind(null,U);return te.type=U,te},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:d,render:U}},gt.isValidElement=C,gt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:le}},gt.memo=function(U,te){return{$$typeof:p,type:U,compare:te===void 0?null:te}},gt.startTransition=function(U){var te=z.transition;z.transition={};try{U()}finally{z.transition=te}},gt.unstable_act=oe,gt.useCallback=function(U,te){return ce.current.useCallback(U,te)},gt.useContext=function(U){return ce.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},gt.useEffect=function(U,te){return ce.current.useEffect(U,te)},gt.useId=function(){return ce.current.useId()},gt.useImperativeHandle=function(U,te,J){return ce.current.useImperativeHandle(U,te,J)},gt.useInsertionEffect=function(U,te){return ce.current.useInsertionEffect(U,te)},gt.useLayoutEffect=function(U,te){return ce.current.useLayoutEffect(U,te)},gt.useMemo=function(U,te){return ce.current.useMemo(U,te)},gt.useReducer=function(U,te,J){return ce.current.useReducer(U,te,J)},gt.useRef=function(U){return ce.current.useRef(U)},gt.useState=function(U){return ce.current.useState(U)},gt.useSyncExternalStore=function(U,te,J){return ce.current.useSyncExternalStore(U,te,J)},gt.useTransition=function(){return ce.current.useTransition()},gt.version="18.3.1",gt}var Qp;function df(){return Qp||(Qp=1,Iu.exports=Yv()),Iu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function $v(){if(Jp)return Oo;Jp=1;var r=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=u,Oo.jsxs=u,Oo}var em;function qv(){return em||(em=1,Nu.exports=$v()),Nu.exports}var K=qv(),Ze=df();const Wo=Eg(Ze);var sl={},Uu={exports:{}},Un={},Fu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Kv(){return tm||(tm=1,(function(r){function e(z,ue){var oe=z.length;z.push(ue);e:for(;0<oe;){var U=oe-1>>>1,te=z[U];if(0<a(te,ue))z[U]=ue,z[oe]=te,oe=U;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ue=z[0],oe=z.pop();if(oe!==ue){z[0]=oe;e:for(var U=0,te=z.length,J=te>>>1;U<J;){var W=2*(U+1)-1,se=z[W],he=W+1,ge=z[he];if(0>a(se,oe))he<te&&0>a(ge,se)?(z[U]=ge,z[he]=oe,U=he):(z[U]=se,z[W]=oe,U=W);else if(he<te&&0>a(ge,oe))z[U]=ge,z[he]=oe,U=he;else break e}}return ue}function a(z,ue){var oe=z.sortIndex-ue.sortIndex;return oe!==0?oe:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],p=[],_=1,g=null,x=3,S=!1,w=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=z)s(p),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(p)}}function R(z){if(E=!1,L(z),!w)if(t(h)!==null)w=!0,le(k);else{var ue=t(p);ue!==null&&ce(R,ue.startTime-z)}}function k(z,ue){w=!1,E&&(E=!1,v(O),O=-1),S=!0;var oe=x;try{for(L(ue),g=t(h);g!==null&&(!(g.expirationTime>ue)||z&&!V());){var U=g.callback;if(typeof U=="function"){g.callback=null,x=g.priorityLevel;var te=U(g.expirationTime<=ue);ue=r.unstable_now(),typeof te=="function"?g.callback=te:g===t(h)&&s(h),L(ue)}else s(h);g=t(h)}if(g!==null)var J=!0;else{var W=t(p);W!==null&&ce(R,W.startTime-ue),J=!1}return J}finally{g=null,x=oe,S=!1}}var I=!1,F=null,O=-1,b=5,C=-1;function V(){return!(r.unstable_now()-C<b)}function de(){if(F!==null){var z=r.unstable_now();C=z;var ue=!0;try{ue=F(!0,z)}finally{ue?ee():(I=!1,F=null)}}else I=!1}var ee;if(typeof D=="function")ee=function(){D(de)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=de,ee=function(){pe.postMessage(null)}}else ee=function(){y(de,0)};function le(z){F=z,I||(I=!0,ee())}function ce(z,ue){O=y(function(){z(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){w||S||(w=!0,le(k))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var oe=x;x=ue;try{return z()}finally{x=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=x;x=z;try{return ue()}finally{x=oe}},r.unstable_scheduleCallback=function(z,ue,oe){var U=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?U+oe:U):oe=U,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=oe+te,z={id:_++,callback:ue,priorityLevel:z,startTime:oe,expirationTime:te,sortIndex:-1},oe>U?(z.sortIndex=oe,e(p,z),t(h)===null&&z===t(p)&&(E?(v(O),O=-1):E=!0,ce(R,oe-U))):(z.sortIndex=te,e(h,z),w||S||(w=!0,le(k))),z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(z){var ue=x;return function(){var oe=x;x=ue;try{return z.apply(this,arguments)}finally{x=oe}}}})(Ou)),Ou}var nm;function Zv(){return nm||(nm=1,Fu.exports=Kv()),Fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Qv(){if(im)return Un;im=1;var r=df(),e=Zv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,c,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,U;function te(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var J=!1;function W(n,i){if(!n||J)return"";J=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),m=c.stack.split(`
`),M=f.length-1,N=m.length-1;1<=M&&0<=N&&f[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(f[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||f[M]!==m[N]){var B=`
`+f[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=N);break}}}finally{J=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function se(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=W(n.type,!1),n;case 11:return n=W(n.type.render,!1),n;case 1:return n=W(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case b:return"Profiler";case O:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case de:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function yt(n){n._valueTracker||(n._valueTracker=$e(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function j(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function jt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Me(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function lt(n,i){st(n,i);var o=Me(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?St(n,i.type,o):i.hasOwnProperty("defaultValue")&&St(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function St(n,i,o){(i!=="number"||Lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function P(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Me(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Me(o)}}function me(n,i){var o=Me(i.value),c=Me(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ye(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function _e(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?_e(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function et(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=et(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,ae=null,ve=null;function Ie(n){if(n=Mo(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ya(i),Le(n.stateNode,n.type,i))}}function Ne(n){ae?ve?ve.push(n):ve=[n]:ae=n}function at(){if(ae){var n=ae,i=ve;if(ve=ae=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ft(n,i){return n(i)}function Zt(){}var Mt=!1;function Rn(n,i,o){if(Mt)return n(i,o);Mt=!0;try{return Ft(n,i,o)}finally{Mt=!1,(ae!==null||ve!==null)&&(Zt(),at())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var c=ya(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ss=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ss=!1}function Pi(n,i,o,c,f,m,M,N,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(Ee){this.onError(Ee)}}var Li=!1,Lr=null,Dr=!1,Zi=null,ea={onError:function(n){Li=!0,Lr=n}};function os(n,i,o,c,f,m,M,N,B){Li=!1,Lr=null,Pi.apply(ea,arguments)}function ta(n,i,o,c,f,m,M,N,B){if(os.apply(this,arguments),Li){if(Li){var ne=Lr;Li=!1,Lr=null}else throw Error(t(198));Dr||(Dr=!0,Zi=ne)}}function yi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ia(n){if(yi(n)!==n)throw Error(t(188))}function tc(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return ia(f),n;if(m===c)return ia(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var M=!1,N=f.child;N;){if(N===o){M=!0,o=f,c=m;break}if(N===c){M=!0,c=f,o=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===o){M=!0,o=m,c=f;break}if(N===c){M=!0,c=m,o=f;break}N=N.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=tc(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Re=e.unstable_requestPaint,Ae=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,je=e.unstable_LowPriority,xt=e.unstable_IdlePriority,Ct=null,vt=null;function fn(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Tt,qe=Math.log,ci=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(qe(n)/ci|0)|0}var hn=64,ui=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var N=M&~f;N!==0?c=Qt(N):(m&=M,m!==0&&(c=Qt(m)))}else M=o&~f,M!==0?c=Qt(M):m!==0&&(c=Qt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ct(i),f=1<<o,c|=n[o],i&=~f;return c}function It(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ct(m),N=1<<M,B=f[M];B===-1?((N&o)===0||(N&c)!==0)&&(f[M]=It(N,i)):B<=i&&(n.expiredLanes|=N),m&=~N}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),n}function qn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function bn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=o}function ra(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ct(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function nc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ct(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Pt=0;function bf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pf,ic,Lf,Df,Nf,rc=!1,sa=[],Qi=null,Ji=null,er=null,so=new Map,oo=new Map,tr=[],h_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&ic(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function p_(n,i,o,c,f){switch(i){case"focusin":return Qi=ao(Qi,n,i,o,c,f),!0;case"dragenter":return Ji=ao(Ji,n,i,o,c,f),!0;case"mouseover":return er=ao(er,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,c,f)),!0}return!1}function Uf(n){var i=Nr(n.target);if(i!==null){var o=yi(i);if(o!==null){if(i=o.tag,i===13){if(i=na(o),i!==null){n.blockedOn=i,Nf(n.priority,function(){Lf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);bt=c,o.target.dispatchEvent(c),bt=null}else return i=Mo(o),i!==null&&ic(i),n.blockedOn=o,!1;i.shift()}return!0}function Ff(n,i,o){oa(n)&&o.delete(i)}function m_(){rc=!1,Qi!==null&&oa(Qi)&&(Qi=null),Ji!==null&&oa(Ji)&&(Ji=null),er!==null&&oa(er)&&(er=null),so.forEach(Ff),oo.forEach(Ff)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,rc||(rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,m_)))}function co(n){function i(f){return lo(f,n)}if(0<sa.length){lo(sa[0],n);for(var o=1;o<sa.length;o++){var c=sa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&lo(Qi,n),Ji!==null&&lo(Ji,n),er!==null&&lo(er,n),so.forEach(i),oo.forEach(i),o=0;o<tr.length;o++)c=tr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&tr.shift()}var as=R.ReactCurrentBatchConfig,aa=!0;function g_(n,i,o,c){var f=Pt,m=as.transition;as.transition=null;try{Pt=1,sc(n,i,o,c)}finally{Pt=f,as.transition=m}}function __(n,i,o,c){var f=Pt,m=as.transition;as.transition=null;try{Pt=4,sc(n,i,o,c)}finally{Pt=f,as.transition=m}}function sc(n,i,o,c){if(aa){var f=oc(n,i,o,c);if(f===null)Ec(n,i,c,la,o),If(n,c);else if(p_(f,n,i,o,c))c.stopPropagation();else if(If(n,c),i&4&&-1<h_.indexOf(n)){for(;f!==null;){var m=Mo(f);if(m!==null&&Pf(m),m=oc(n,i,o,c),m===null&&Ec(n,i,c,la,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ec(n,i,c,null,o)}}var la=null;function oc(n,i,o,c){if(la=null,n=G(c),n=Nr(n),n!==null)if(i=yi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=na(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return la=n,null}function Of(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case nt:return 4;case rt:case je:return 16;case xt:return 536870912;default:return 16}default:return 16}}var nr=null,ac=null,ca=null;function kf(){if(ca)return ca;var n,i=ac,o=i.length,c,f="value"in nr?nr.value:nr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===f[m-c];c++);return ca=f.slice(n,1<c?1-c:void 0)}function ua(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Bf(){return!1}function zn(n){function i(o,c,f,m,M){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?da:Bf,this.isPropagationStopped=Bf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=zn(ls),uo=oe({},ls,{view:0,detail:0}),v_=zn(uo),cc,uc,fo,fa=oe({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(cc=n.screenX-fo.screenX,uc=n.screenY-fo.screenY):uc=cc=0,fo=n),cc)},movementY:function(n){return"movementY"in n?n.movementY:uc}}),zf=zn(fa),x_=oe({},fa,{dataTransfer:0}),y_=zn(x_),S_=oe({},uo,{relatedTarget:0}),dc=zn(S_),M_=oe({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=zn(M_),w_=oe({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),T_=zn(w_),A_=oe({},ls,{data:0}),Vf=zn(A_),C_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=b_[n])?!!i[n]:!1}function fc(){return P_}var L_=oe({},uo,{key:function(n){if(n.key){var i=C_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?R_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),D_=zn(L_),N_=oe({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=zn(N_),I_=oe({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),U_=zn(I_),F_=oe({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=zn(F_),k_=oe({},fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=zn(k_),z_=[9,13,27,32],hc=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var V_=d&&"TextEvent"in window&&!ho,Gf=d&&(!hc||ho&&8<ho&&11>=ho),Wf=" ",Xf=!1;function jf(n,i){switch(n){case"keyup":return z_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function H_(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return n=i.data,n===Wf&&Xf?null:n;default:return null}}function G_(n,i){if(cs)return n==="compositionend"||!hc&&jf(n,i)?(n=kf(),ca=ac=nr=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!W_[n.type]:i==="textarea"}function qf(n,i,o,c){Ne(c),i=_a(i,"onChange"),0<i.length&&(o=new lc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var po=null,mo=null;function X_(n){hh(n,0)}function ha(n){var i=ps(n);if(pt(i))return n}function j_(n,i){if(n==="change")return i}var Kf=!1;if(d){var pc;if(d){var mc="oninput"in document;if(!mc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),mc=typeof Zf.oninput=="function"}pc=mc}else pc=!1;Kf=pc&&(!document.documentMode||9<document.documentMode)}function Qf(){po&&(po.detachEvent("onpropertychange",Jf),mo=po=null)}function Jf(n){if(n.propertyName==="value"&&ha(mo)){var i=[];qf(i,mo,n,G(n)),Rn(X_,i)}}function Y_(n,i,o){n==="focusin"?(Qf(),po=i,mo=o,po.attachEvent("onpropertychange",Jf)):n==="focusout"&&Qf()}function $_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ha(mo)}function q_(n,i){if(n==="click")return ha(i)}function K_(n,i){if(n==="input"||n==="change")return ha(i)}function Z_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var di=typeof Object.is=="function"?Object.is:Z_;function go(n,i){if(di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!di(n[f],i[f]))return!1}return!0}function eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function th(n,i){var o=eh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var n=window,i=Lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Lt(n.document)}return i}function gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Q_(n){var i=ih(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&gc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=th(o,m);var M=th(o,c);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var J_=d&&"documentMode"in document&&11>=document.documentMode,us=null,_c=null,_o=null,vc=!1;function rh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vc||us==null||us!==Lt(c)||(c=us,"selectionStart"in c&&gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&go(_o,c)||(_o=c,c=_a(_c,"onSelect"),0<c.length&&(i=new lc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=us)))}function pa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},xc={},sh={};d&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ma(n){if(xc[n])return xc[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return xc[n]=i[o];return n}var oh=ma("animationend"),ah=ma("animationiteration"),lh=ma("animationstart"),ch=ma("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){uh.set(n,i),l(i,[n])}for(var yc=0;yc<dh.length;yc++){var Sc=dh[yc],ev=Sc.toLowerCase(),tv=Sc[0].toUpperCase()+Sc.slice(1);ir(ev,"on"+tv)}ir(oh,"onAnimationEnd"),ir(ah,"onAnimationIteration"),ir(lh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function fh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ta(c,i,void 0,n),n.currentTarget=null}function hh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var N=c[M],B=N.instance,ne=N.currentTarget;if(N=N.listener,B!==m&&f.isPropagationStopped())break e;fh(f,N,ne),m=B}else for(M=0;M<c.length;M++){if(N=c[M],B=N.instance,ne=N.currentTarget,N=N.listener,B!==m&&f.isPropagationStopped())break e;fh(f,N,ne),m=B}}}if(Dr)throw n=Zi,Dr=!1,Zi=null,n}function Ot(n,i){var o=i[bc];o===void 0&&(o=i[bc]=new Set);var c=n+"__bubble";o.has(c)||(ph(i,n,2,!1),o.add(c))}function Mc(n,i,o){var c=0;i&&(c|=4),ph(o,n,c,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[ga]){n[ga]=!0,s.forEach(function(o){o!=="selectionchange"&&(nv.has(o)||Mc(o,!1,n),Mc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ga]||(i[ga]=!0,Mc("selectionchange",!1,i))}}function ph(n,i,o,c){switch(Of(i)){case 1:var f=g_;break;case 4:f=__;break;default:f=sc}o=f.bind(null,i,o,n),f=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Ec(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;N!==null;){if(M=Nr(N),M===null)return;if(B=M.tag,B===5||B===6){c=m=M;continue e}N=N.parentNode}}c=c.return}Rn(function(){var ne=m,Ee=G(o),we=[];e:{var Se=uh.get(n);if(Se!==void 0){var Ue=lc,ze=n;switch(n){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":Ue=D_;break;case"focusin":ze="focus",Ue=dc;break;case"focusout":ze="blur",Ue=dc;break;case"beforeblur":case"afterblur":Ue=dc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=U_;break;case oh:case ah:case lh:Ue=E_;break;case ch:Ue=O_;break;case"scroll":Ue=v_;break;case"wheel":Ue=B_;break;case"copy":case"cut":case"paste":Ue=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Hf}var He=(i&4)!==0,Yt=!He&&n==="scroll",$=He?Se!==null?Se+"Capture":null:Se;He=[];for(var H=ne,Q;H!==null;){Q=H;var Ce=Q.stateNode;if(Q.tag===5&&Ce!==null&&(Q=Ce,$!==null&&(Ce=yn(H,$),Ce!=null&&He.push(yo(H,Ce,Q)))),Yt)break;H=H.return}0<He.length&&(Se=new Ue(Se,ze,null,o,Ee),we.push({event:Se,listeners:He}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",Se&&o!==bt&&(ze=o.relatedTarget||o.fromElement)&&(Nr(ze)||ze[Ni]))break e;if((Ue||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,Ue?(ze=o.relatedTarget||o.toElement,Ue=ne,ze=ze?Nr(ze):null,ze!==null&&(Yt=yi(ze),ze!==Yt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=ne),Ue!==ze)){if(He=zf,Ce="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(He=Hf,Ce="onPointerLeave",$="onPointerEnter",H="pointer"),Yt=Ue==null?Se:ps(Ue),Q=ze==null?Se:ps(ze),Se=new He(Ce,H+"leave",Ue,o,Ee),Se.target=Yt,Se.relatedTarget=Q,Ce=null,Nr(Ee)===ne&&(He=new He($,H+"enter",ze,o,Ee),He.target=Q,He.relatedTarget=Yt,Ce=He),Yt=Ce,Ue&&ze)t:{for(He=Ue,$=ze,H=0,Q=He;Q;Q=fs(Q))H++;for(Q=0,Ce=$;Ce;Ce=fs(Ce))Q++;for(;0<H-Q;)He=fs(He),H--;for(;0<Q-H;)$=fs($),Q--;for(;H--;){if(He===$||$!==null&&He===$.alternate)break t;He=fs(He),$=fs($)}He=null}else He=null;Ue!==null&&mh(we,Se,Ue,He,!1),ze!==null&&Yt!==null&&mh(we,Yt,ze,He,!0)}}e:{if(Se=ne?ps(ne):window,Ue=Se.nodeName&&Se.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&Se.type==="file")var Ye=j_;else if($f(Se))if(Kf)Ye=K_;else{Ye=$_;var Qe=Y_}else(Ue=Se.nodeName)&&Ue.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ye=q_);if(Ye&&(Ye=Ye(n,ne))){qf(we,Ye,o,Ee);break e}Qe&&Qe(n,Se,ne),n==="focusout"&&(Qe=Se._wrapperState)&&Qe.controlled&&Se.type==="number"&&St(Se,"number",Se.value)}switch(Qe=ne?ps(ne):window,n){case"focusin":($f(Qe)||Qe.contentEditable==="true")&&(us=Qe,_c=ne,_o=null);break;case"focusout":_o=_c=us=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,rh(we,o,Ee);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":rh(we,o,Ee)}var Je;if(hc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else cs?jf(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Gf&&o.locale!=="ko"&&(cs||it!=="onCompositionStart"?it==="onCompositionEnd"&&cs&&(Je=kf()):(nr=Ee,ac="value"in nr?nr.value:nr.textContent,cs=!0)),Qe=_a(ne,it),0<Qe.length&&(it=new Vf(it,n,null,o,Ee),we.push({event:it,listeners:Qe}),Je?it.data=Je:(Je=Yf(o),Je!==null&&(it.data=Je)))),(Je=V_?H_(n,o):G_(n,o))&&(ne=_a(ne,"onBeforeInput"),0<ne.length&&(Ee=new Vf("onBeforeInput","beforeinput",null,o,Ee),we.push({event:Ee,listeners:ne}),Ee.data=Je))}hh(we,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function _a(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=yn(n,o),m!=null&&c.unshift(yo(n,m,f)),m=yn(n,i),m!=null&&c.push(yo(n,m,f))),n=n.return}return c}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mh(n,i,o,c,f){for(var m=i._reactName,M=[];o!==null&&o!==c;){var N=o,B=N.alternate,ne=N.stateNode;if(B!==null&&B===c)break;N.tag===5&&ne!==null&&(N=ne,f?(B=yn(o,m),B!=null&&M.unshift(yo(o,B,N))):f||(B=yn(o,m),B!=null&&M.push(yo(o,B,N)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var iv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function gh(n){return(typeof n=="string"?n:""+n).replace(iv,`
`).replace(rv,"")}function va(n,i,o){if(i=gh(i),gh(n)!==i&&o)throw Error(t(425))}function xa(){}var wc=null,Tc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(n){return _h.resolve(null).then(n).catch(av)}:Cc;function av(n){setTimeout(function(){throw n})}function Rc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);co(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+hs,So="__reactProps$"+hs,Ni="__reactContainer$"+hs,bc="__reactEvents$"+hs,lv="__reactListeners$"+hs,cv="__reactHandles$"+hs;function Nr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=vh(n);n!==null;){if(o=n[Mi])return o;n=vh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[Mi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ya(n){return n[So]||null}var Pc=[],ms=-1;function sr(n){return{current:n}}function kt(n){0>ms||(n.current=Pc[ms],Pc[ms]=null,ms--)}function Ut(n,i){ms++,Pc[ms]=n.current,n.current=i}var or={},pn=sr(or),Pn=sr(!1),Ir=or;function gs(n,i){var o=n.type.contextTypes;if(!o)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(n){return n=n.childContextTypes,n!=null}function Sa(){kt(Pn),kt(pn)}function xh(n,i,o){if(pn.current!==or)throw Error(t(168));Ut(pn,i),Ut(Pn,o)}function yh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return oe({},o,c)}function Ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Ir=pn.current,Ut(pn,n),Ut(Pn,Pn.current),!0}function Sh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=yh(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,kt(Pn),kt(pn),Ut(pn,n)):kt(Pn),Ut(Pn,o)}var Ii=null,Ea=!1,Lc=!1;function Mh(n){Ii===null?Ii=[n]:Ii.push(n)}function uv(n){Ea=!0,Mh(n)}function ar(){if(!Lc&&Ii!==null){Lc=!0;var n=0,i=Pt;try{var o=Ii;for(Pt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ii=null,Ea=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(n+1)),ie(Ve,ar),f}finally{Pt=i,Lc=!1}}return null}var _s=[],vs=0,wa=null,Ta=0,Kn=[],Zn=0,Ur=null,Ui=1,Fi="";function Fr(n,i){_s[vs++]=Ta,_s[vs++]=wa,wa=n,Ta=i}function Eh(n,i,o){Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ur=n;var c=Ui;n=Fi;var f=32-ct(c)-1;c&=~(1<<f),o+=1;var m=32-ct(i)+f;if(30<m){var M=f-f%5;m=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Ui=1<<32-ct(i)+f|o<<f|c,Fi=m+n}else Ui=1<<m|o<<f|c,Fi=n}function Dc(n){n.return!==null&&(Fr(n,1),Eh(n,1,0))}function Nc(n){for(;n===wa;)wa=_s[--vs],_s[vs]=null,Ta=_s[--vs],_s[vs]=null;for(;n===Ur;)Ur=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null,Ui=Kn[--Zn],Kn[Zn]=null}var Vn=null,Hn=null,zt=!1,fi=null;function wh(n,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Th(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Hn=null,!0):!1;default:return!1}}function Ic(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uc(n){if(zt){var i=Hn;if(i){var o=i;if(!Th(n,i)){if(Ic(n))throw Error(t(418));i=rr(o.nextSibling);var c=Vn;i&&Th(n,i)?wh(c,o):(n.flags=n.flags&-4097|2,zt=!1,Vn=n)}}else{if(Ic(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Vn=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Aa(n){if(n!==Vn)return!1;if(!zt)return Ah(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=Hn)){if(Ic(n))throw Ch(),Error(t(418));for(;i;)wh(n,i),i=rr(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Hn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Vn?rr(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=Hn;n;)n=rr(n.nextSibling)}function xs(){Hn=Vn=null,zt=!1}function Fc(n){fi===null?fi=[n]:fi.push(n)}var dv=R.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=f.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ca(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function bh(n){function i($,H){if(n){var Q=$.deletions;Q===null?($.deletions=[H],$.flags|=16):Q.push(H)}}function o($,H){if(!n)return null;for(;H!==null;)i($,H),H=H.sibling;return null}function c($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function f($,H){return $=mr($,H),$.index=0,$.sibling=null,$}function m($,H,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<H?($.flags|=2,H):Q):($.flags|=2,H)):($.flags|=1048576,H)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function N($,H,Q,Ce){return H===null||H.tag!==6?(H=Cu(Q,$.mode,Ce),H.return=$,H):(H=f(H,Q),H.return=$,H)}function B($,H,Q,Ce){var Ye=Q.type;return Ye===F?Ee($,H,Q.props.children,Ce,Q.key):H!==null&&(H.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&Rh(Ye)===H.type)?(Ce=f(H,Q.props),Ce.ref=Eo($,H,Q),Ce.return=$,Ce):(Ce=Za(Q.type,Q.key,Q.props,null,$.mode,Ce),Ce.ref=Eo($,H,Q),Ce.return=$,Ce)}function ne($,H,Q,Ce){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Ru(Q,$.mode,Ce),H.return=$,H):(H=f(H,Q.children||[]),H.return=$,H)}function Ee($,H,Q,Ce,Ye){return H===null||H.tag!==7?(H=Wr(Q,$.mode,Ce,Ye),H.return=$,H):(H=f(H,Q),H.return=$,H)}function we($,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Cu(""+H,$.mode,Q),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return Q=Za(H.type,H.key,H.props,null,$.mode,Q),Q.ref=Eo($,null,H),Q.return=$,Q;case I:return H=Ru(H,$.mode,Q),H.return=$,H;case le:var Ce=H._init;return we($,Ce(H._payload),Q)}if(Ge(H)||ue(H))return H=Wr(H,$.mode,Q,null),H.return=$,H;Ca($,H)}return null}function Se($,H,Q,Ce){var Ye=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:N($,H,""+Q,Ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case k:return Q.key===Ye?B($,H,Q,Ce):null;case I:return Q.key===Ye?ne($,H,Q,Ce):null;case le:return Ye=Q._init,Se($,H,Ye(Q._payload),Ce)}if(Ge(Q)||ue(Q))return Ye!==null?null:Ee($,H,Q,Ce,null);Ca($,Q)}return null}function Ue($,H,Q,Ce,Ye){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return $=$.get(Q)||null,N(H,$,""+Ce,Ye);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case k:return $=$.get(Ce.key===null?Q:Ce.key)||null,B(H,$,Ce,Ye);case I:return $=$.get(Ce.key===null?Q:Ce.key)||null,ne(H,$,Ce,Ye);case le:var Qe=Ce._init;return Ue($,H,Q,Qe(Ce._payload),Ye)}if(Ge(Ce)||ue(Ce))return $=$.get(Q)||null,Ee(H,$,Ce,Ye,null);Ca(H,Ce)}return null}function ze($,H,Q,Ce){for(var Ye=null,Qe=null,Je=H,it=H=0,an=null;Je!==null&&it<Q.length;it++){Je.index>it?(an=Je,Je=null):an=Je.sibling;var At=Se($,Je,Q[it],Ce);if(At===null){Je===null&&(Je=an);break}n&&Je&&At.alternate===null&&i($,Je),H=m(At,H,it),Qe===null?Ye=At:Qe.sibling=At,Qe=At,Je=an}if(it===Q.length)return o($,Je),zt&&Fr($,it),Ye;if(Je===null){for(;it<Q.length;it++)Je=we($,Q[it],Ce),Je!==null&&(H=m(Je,H,it),Qe===null?Ye=Je:Qe.sibling=Je,Qe=Je);return zt&&Fr($,it),Ye}for(Je=c($,Je);it<Q.length;it++)an=Ue(Je,$,it,Q[it],Ce),an!==null&&(n&&an.alternate!==null&&Je.delete(an.key===null?it:an.key),H=m(an,H,it),Qe===null?Ye=an:Qe.sibling=an,Qe=an);return n&&Je.forEach(function(gr){return i($,gr)}),zt&&Fr($,it),Ye}function He($,H,Q,Ce){var Ye=ue(Q);if(typeof Ye!="function")throw Error(t(150));if(Q=Ye.call(Q),Q==null)throw Error(t(151));for(var Qe=Ye=null,Je=H,it=H=0,an=null,At=Q.next();Je!==null&&!At.done;it++,At=Q.next()){Je.index>it?(an=Je,Je=null):an=Je.sibling;var gr=Se($,Je,At.value,Ce);if(gr===null){Je===null&&(Je=an);break}n&&Je&&gr.alternate===null&&i($,Je),H=m(gr,H,it),Qe===null?Ye=gr:Qe.sibling=gr,Qe=gr,Je=an}if(At.done)return o($,Je),zt&&Fr($,it),Ye;if(Je===null){for(;!At.done;it++,At=Q.next())At=we($,At.value,Ce),At!==null&&(H=m(At,H,it),Qe===null?Ye=At:Qe.sibling=At,Qe=At);return zt&&Fr($,it),Ye}for(Je=c($,Je);!At.done;it++,At=Q.next())At=Ue(Je,$,it,At.value,Ce),At!==null&&(n&&At.alternate!==null&&Je.delete(At.key===null?it:At.key),H=m(At,H,it),Qe===null?Ye=At:Qe.sibling=At,Qe=At);return n&&Je.forEach(function(Wv){return i($,Wv)}),zt&&Fr($,it),Ye}function Yt($,H,Q,Ce){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case k:e:{for(var Ye=Q.key,Qe=H;Qe!==null;){if(Qe.key===Ye){if(Ye=Q.type,Ye===F){if(Qe.tag===7){o($,Qe.sibling),H=f(Qe,Q.props.children),H.return=$,$=H;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&Rh(Ye)===Qe.type){o($,Qe.sibling),H=f(Qe,Q.props),H.ref=Eo($,Qe,Q),H.return=$,$=H;break e}o($,Qe);break}else i($,Qe);Qe=Qe.sibling}Q.type===F?(H=Wr(Q.props.children,$.mode,Ce,Q.key),H.return=$,$=H):(Ce=Za(Q.type,Q.key,Q.props,null,$.mode,Ce),Ce.ref=Eo($,H,Q),Ce.return=$,$=Ce)}return M($);case I:e:{for(Qe=Q.key;H!==null;){if(H.key===Qe)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){o($,H.sibling),H=f(H,Q.children||[]),H.return=$,$=H;break e}else{o($,H);break}else i($,H);H=H.sibling}H=Ru(Q,$.mode,Ce),H.return=$,$=H}return M($);case le:return Qe=Q._init,Yt($,H,Qe(Q._payload),Ce)}if(Ge(Q))return ze($,H,Q,Ce);if(ue(Q))return He($,H,Q,Ce);Ca($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,H!==null&&H.tag===6?(o($,H.sibling),H=f(H,Q),H.return=$,$=H):(o($,H),H=Cu(Q,$.mode,Ce),H.return=$,$=H),M($)):o($,H)}return Yt}var ys=bh(!0),Ph=bh(!1),Ra=sr(null),ba=null,Ss=null,Oc=null;function kc(){Oc=Ss=ba=null}function Bc(n){var i=Ra.current;kt(Ra),n._currentValue=i}function zc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ms(n,i){ba=n,Oc=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(ba===null)throw Error(t(308));Ss=n,ba.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Or=null;function Vc(n){Or===null?Or=[n]:Or.push(n)}function Lh(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Vc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Oi(n,c)}function Oi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Oi(n,o)}return f=c.interleaved,f===null?(i.next=i,Vc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Oi(n,o)}function Pa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,nc(n,o)}}function Nh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function La(n,i,o,c){var f=n.updateQueue;lr=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var B=N,ne=B.next;B.next=null,M===null?m=ne:M.next=ne,M=B;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,N=Ee.lastBaseUpdate,N!==M&&(N===null?Ee.firstBaseUpdate=ne:N.next=ne,Ee.lastBaseUpdate=B))}if(m!==null){var we=f.baseState;M=0,Ee=ne=B=null,N=m;do{var Se=N.lane,Ue=N.eventTime;if((c&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ze=n,He=N;switch(Se=i,Ue=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){we=ze.call(Ue,we,Se);break e}we=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,Se=typeof ze=="function"?ze.call(Ue,we,Se):ze,Se==null)break e;we=oe({},we,Se);break e;case 2:lr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[N]:Se.push(N))}else Ue={eventTime:Ue,lane:Se,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ee===null?(ne=Ee=Ue,B=we):Ee=Ee.next=Ue,M|=Se;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;Se=N,N=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Ee===null&&(B=we),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);zr|=M,n.lanes=M,n.memoizedState=we}}function Ih(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var wo={},Ei=sr(wo),To=sr(wo),Ao=sr(wo);function kr(n){if(n===wo)throw Error(t(174));return n}function Gc(n,i){switch(Ut(Ao,i),Ut(To,n),Ut(Ei,wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}kt(Ei),Ut(Ei,i)}function Es(){kt(Ei),kt(To),kt(Ao)}function Uh(n){kr(Ao.current);var i=kr(Ei.current),o=We(i,n.type);i!==o&&(Ut(To,n),Ut(Ei,o))}function Wc(n){To.current===n&&(kt(Ei),kt(To))}var Vt=sr(0);function Da(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function jc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var Na=R.ReactCurrentDispatcher,Yc=R.ReactCurrentBatchConfig,Br=0,Ht=null,Jt=null,sn=null,Ia=!1,Co=!1,Ro=0,fv=0;function mn(){throw Error(t(321))}function $c(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!di(n[o],i[o]))return!1;return!0}function qc(n,i,o,c,f,m){if(Br=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=n===null||n.memoizedState===null?gv:_v,n=o(c,f),Co){m=0;do{if(Co=!1,Ro=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,Na.current=vv,n=o(c,f)}while(Co)}if(Na.current=Oa,i=Jt!==null&&Jt.next!==null,Br=0,sn=Jt=Ht=null,Ia=!1,i)throw Error(t(300));return n}function Kc(){var n=Ro!==0;return Ro=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=n:sn=sn.next=n,sn}function Jn(){if(Jt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Ht.memoizedState=sn=n:sn=sn.next=n}return sn}function bo(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Jt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var N=M=null,B=null,ne=m;do{var Ee=ne.lane;if((Br&Ee)===Ee)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var we={lane:Ee,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(N=B=we,M=c):B=B.next=we,Ht.lanes|=Ee,zr|=Ee}ne=ne.next}while(ne!==null&&ne!==m);B===null?M=c:B.next=N,di(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=B,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Ht.lanes|=m,zr|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Qc(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);di(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Fh(){}function Oh(n,i){var o=Ht,c=Jn(),f=i(),m=!di(c.memoizedState,f);if(m&&(c.memoizedState=f,Dn=!0),c=c.queue,Jc(zh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Po(9,Bh.bind(null,o,c,f,i),void 0,null),on===null)throw Error(t(349));(Br&30)!==0||kh(o,i,f)}return f}function kh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Bh(n,i,o,c){i.value=o,i.getSnapshot=c,Vh(i)&&Hh(n)}function zh(n,i,o){return o(function(){Vh(i)&&Hh(n)})}function Vh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!di(n,o)}catch{return!0}}function Hh(n){var i=Oi(n,1);i!==null&&gi(i,n,1,-1)}function Gh(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=mv.bind(null,Ht,n),[i.memoizedState,n]}function Po(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Wh(){return Jn().memoizedState}function Ua(n,i,o,c){var f=wi();Ht.flags|=n,f.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function Fa(n,i,o,c){var f=Jn();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,c!==null&&$c(c,M.deps)){f.memoizedState=Po(i,o,m,c);return}}Ht.flags|=n,f.memoizedState=Po(1|i,o,m,c)}function Xh(n,i){return Ua(8390656,8,n,i)}function Jc(n,i){return Fa(2048,8,n,i)}function jh(n,i){return Fa(4,2,n,i)}function Yh(n,i){return Fa(4,4,n,i)}function $h(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qh(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4,4,$h.bind(null,i,n),o)}function eu(){}function Kh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Zh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Qh(n,i,o){return(Br&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=o):(di(o,i)||(o=Sn(),Ht.lanes|=o,zr|=o,n.baseState=!0),i)}function hv(n,i){var o=Pt;Pt=o!==0&&4>o?o:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{Pt=o,Yc.transition=c}}function Jh(){return Jn().memoizedState}function pv(n,i,o){var c=hr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(n))tp(i,o);else if(o=Lh(n,i,o,c),o!==null){var f=En();gi(o,n,c,f),np(o,i,c)}}function mv(n,i,o){var c=hr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(n))tp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,o);if(f.hasEagerState=!0,f.eagerState=N,di(N,M)){var B=i.interleaved;B===null?(f.next=f,Vc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=Lh(n,i,f,c),o!==null&&(f=En(),gi(o,n,c,f),np(o,i,c))}}function ep(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function tp(n,i){Co=Ia=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function np(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,nc(n,o)}}var Oa={readContext:Qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},gv={readContext:Qn,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Xh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4194308,4,$h.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ua(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ua(4,2,n,i)},useMemo:function(n,i){var o=wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=wi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=pv.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:Gh,useDebugValue:eu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=Gh(!1),i=n[0];return n=hv.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,f=wi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Br&30)!==0||kh(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Xh(zh.bind(null,c,m,n),[n]),c.flags|=2048,Po(9,Bh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=wi(),i=on.identifierPrefix;if(zt){var o=Fi,c=Ui;o=(c&~(1<<32-ct(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=fv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},_v={readContext:Qn,useCallback:Kh,useContext:Qn,useEffect:Jc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Zc,useRef:Wh,useState:function(){return Zc(bo)},useDebugValue:eu,useDeferredValue:function(n){var i=Jn();return Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Zc(bo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1},vv={readContext:Qn,useCallback:Kh,useContext:Qn,useEffect:Jc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Qc,useRef:Wh,useState:function(){return Qc(bo)},useDebugValue:eu,useDeferredValue:function(n){var i=Jn();return Jt===null?i.memoizedState=n:Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Qc(bo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function tu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ka={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=ki(c,f);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(gi(i,n,f,c),Pa(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=ki(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(gi(i,n,f,c),Pa(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),c=hr(n),f=ki(o,c);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,c),i!==null&&(gi(i,n,c,o),Pa(i,n,c))}};function ip(n,i,o,c,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(f,m):!0}function rp(n,i,o){var c=!1,f=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(f=Ln(i)?Ir:pn.current,c=i.contextTypes,m=(c=c!=null)?gs(n,f):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function sp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ka.enqueueReplaceState(i,i.state,null)}function nu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Hc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Qn(m):(m=Ln(i)?Ir:pn.current,f.context=gs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(tu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ka.enqueueReplaceState(f,f.state,null),La(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",c=i;do o+=se(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function iu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ru(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var xv=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Xa||(Xa=!0,xu=c),ru(n,i)},o}function ap(n,i,o){o=ki(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){ru(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ru(n,i),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function lp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new xv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=Nv.bind(null,n,i,o),i.then(n,n))}function cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function up(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var yv=R.ReactCurrentOwner,Dn=!1;function Mn(n,i,o,c){i.child=n===null?Ph(i,null,o,c):ys(i,n.child,o,c)}function dp(n,i,o,c,f){o=o.render;var m=i.ref;return Ms(i,f),c=qc(n,i,o,c,m,f),o=Kc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(zt&&o&&Dc(i),i.flags|=1,Mn(n,i,c,f),i.child)}function fp(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Au(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,hp(n,i,m,c,f)):(n=Za(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,c)&&n.ref===i.ref)return Bi(n,i,f)}return i.flags|=1,n=mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function hp(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(go(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Bi(n,i,f)}return su(n,i,o,c,f)}function pp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(As,Gn),Gn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(As,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(As,Gn),Gn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(As,Gn),Gn|=c;return Mn(n,i,f,o),i.child}function mp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function su(n,i,o,c,f){var m=Ln(o)?Ir:pn.current;return m=gs(i,m),Ms(i,f),o=qc(n,i,o,c,m,f),c=Kc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(zt&&c&&Dc(i),i.flags|=1,Mn(n,i,o,f),i.child)}function gp(n,i,o,c,f){if(Ln(o)){var m=!0;Ma(i)}else m=!1;if(Ms(i,f),i.stateNode===null)za(n,i),rp(i,o,c),nu(i,o,c,f),c=!0;else if(n===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var B=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Qn(ne):(ne=Ln(o)?Ir:pn.current,ne=gs(i,ne));var Ee=o.getDerivedStateFromProps,we=typeof Ee=="function"||typeof M.getSnapshotBeforeUpdate=="function";we||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==c||B!==ne)&&sp(i,M,c,ne),lr=!1;var Se=i.memoizedState;M.state=Se,La(i,c,M,f),B=i.memoizedState,N!==c||Se!==B||Pn.current||lr?(typeof Ee=="function"&&(tu(i,o,Ee,c),B=i.memoizedState),(N=lr||ip(i,o,N,c,Se,B,ne))?(we||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),M.props=c,M.state=B,M.context=ne,c=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Dh(n,i),N=i.memoizedProps,ne=i.type===i.elementType?N:hi(i.type,N),M.props=ne,we=i.pendingProps,Se=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=Ln(o)?Ir:pn.current,B=gs(i,B));var Ue=o.getDerivedStateFromProps;(Ee=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==we||Se!==B)&&sp(i,M,c,B),lr=!1,Se=i.memoizedState,M.state=Se,La(i,c,M,f);var ze=i.memoizedState;N!==we||Se!==ze||Pn.current||lr?(typeof Ue=="function"&&(tu(i,o,Ue,c),ze=i.memoizedState),(ne=lr||ip(i,o,ne,c,Se,ze,B)||!1)?(Ee||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,ze,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,ze,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),M.props=c,M.state=ze,M.context=B,c=ne):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return ou(n,i,o,c,m,f)}function ou(n,i,o,c,f,m){mp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&Sh(i,o,!1),Bi(n,i,m);c=i.stateNode,yv.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=ys(i,n.child,null,m),i.child=ys(i,null,N,m)):Mn(n,i,N,m),i.memoizedState=c.state,f&&Sh(i,o,!0),i.child}function _p(n){var i=n.stateNode;i.pendingContext?xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(n,i.context,!1),Gc(n,i.containerInfo)}function vp(n,i,o,c,f){return xs(),Fc(f),i.flags|=256,Mn(n,i,o,c),i.child}var au={dehydrated:null,treeContext:null,retryLane:0};function lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function xp(n,i,o){var c=i.pendingProps,f=Vt.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ut(Vt,f&1),n===null)return Uc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=Qa(M,c,0,null),n=Wr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=lu(o),i.memoizedState=au,n):cu(i,M));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return Sv(n,i,M,c,N,f,o);if(m){m=c.fallback,M=i.mode,f=n.child,N=f.sibling;var B={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=mr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=mr(N,m):(m=Wr(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?lu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=au,c}return m=n.child,n=m.sibling,c=mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function cu(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,c){return c!==null&&Fc(c),ys(i,n.child,null,o),n=cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Sv(n,i,o,c,f,m,M){if(o)return i.flags&256?(i.flags&=-257,c=iu(Error(t(422))),Ba(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Qa({mode:"visible",children:c.children},f,0,null),m=Wr(m,f,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,M),i.child.memoizedState=lu(M),i.memoizedState=au,m);if((i.mode&1)===0)return Ba(n,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=iu(m,c,void 0),Ba(n,i,M,c)}if(N=(M&n.childLanes)!==0,Dn||N){if(c=on,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Oi(n,f),gi(c,n,f,-1))}return Tu(),c=iu(Error(t(421))),Ba(n,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Iv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Hn=rr(f.nextSibling),Vn=i,zt=!0,fi=null,n!==null&&(Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ui=n.id,Fi=n.overflow,Ur=i),i=cu(i,c.children),i.flags|=4096,i)}function yp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),zc(n.return,i,o)}function uu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Sp(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,o,i);else if(n.tag===19)yp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Da(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),uu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Da(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}uu(i,!0,o,null,m);break;case"together":uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Mv(n,i,o){switch(i.tag){case 3:_p(i),xs();break;case 5:Uh(i);break;case 1:Ln(i.type)&&Ma(i);break;case 4:Gc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Ra,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(n,i,o):(Ut(Vt,Vt.current&1),n=Bi(n,i,o),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(n,i,o)}return Bi(n,i,o)}var Mp,du,Ep,wp;Mp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},du=function(){},Ep=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,kr(Ei.current);var m=null;switch(o){case"input":f=j(n,f),c=j(n,c),m=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":f=T(n,f),c=T(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xa)}mt(o,c);var M;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var N=f[ne];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var B=c[ne];if(N=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&B!==N&&(B!=null||N!=null))if(ne==="style")if(N){for(M in N)!N.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&N[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(m||(m=[]),m.push(ne,o)),o=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(m=m||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&Ot("scroll",n),m||N===B||(m=[])):(m=m||[]).push(ne,B))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},wp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Ev(n,i,o){var c=i.pendingProps;switch(Nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Ln(i.type)&&Sa(),gn(i),null;case 3:return c=i.stateNode,Es(),kt(Pn),kt(pn),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Aa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Mu(fi),fi=null))),du(n,i),gn(i),null;case 5:Wc(i);var f=kr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)Ep(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=kr(Ei.current),Aa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Mi]=i,c[So]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(f=0;f<vo.length;f++)Ot(vo[f],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":jt(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":Z(c,m),Ot("invalid",c)}mt(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&va(c.textContent,N,n),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&va(c.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Ot("scroll",c)}switch(o){case"input":yt(c),Ke(c,m,!0);break;case"textarea":yt(c),ye(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=xa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_e(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Mi]=i,n[So]=c,Mp(n,i,!1,!1),i.stateNode=n;e:{switch(M=ot(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),f=c;break;case"iframe":case"object":case"embed":Ot("load",n),f=c;break;case"video":case"audio":for(f=0;f<vo.length;f++)Ot(vo[f],n);f=c;break;case"source":Ot("error",n),f=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),f=c;break;case"details":Ot("toggle",n),f=c;break;case"input":jt(n,c),f=j(n,c),Ot("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":Z(n,c),f=T(n,c),Ot("invalid",n);break;default:f=c}mt(o,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var B=N[m];m==="style"?tt(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Fe(n,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&ht(n,B):typeof B=="number"&&ht(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Ot("scroll",n):B!=null&&L(n,m,B,M))}switch(o){case"input":yt(n),Ke(n,c,!1);break;case"textarea":yt(n),ye(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?P(n,!!c.multiple,m,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)wp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(Ao.current),kr(Ei.current),Aa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(m=c.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:va(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return gn(i),null;case 13:if(kt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),xs(),i.flags|=98560,m=!1;else if(m=Aa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else fi!==null&&(Mu(fi),fi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?en===0&&(en=3):Tu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Es(),du(n,i),n===null&&xo(i.stateNode.containerInfo),gn(i),null;case 10:return Bc(i.type._context),gn(i),null;case 17:return Ln(i.type)&&Sa(),gn(i),null;case 19:if(kt(Vt),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Lo(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Da(n),M!==null){for(i.flags|=128,Lo(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ae()>Cs&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Da(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*Ae()-m.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ae(),i.sibling=null,o=Vt.current,Ut(Vt,c?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return wu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function wv(n,i){switch(Nc(i),i.tag){case 1:return Ln(i.type)&&Sa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),kt(Pn),kt(pn),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(kt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return Es(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var Va=!1,_n=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Xt(n,i,c)}else o.current=null}function fu(n,i,o){try{o()}catch(c){Xt(n,i,c)}}var Tp=!1;function Av(n,i){if(wc=aa,n=ih(),gc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,N=-1,B=-1,ne=0,Ee=0,we=n,Se=null;t:for(;;){for(var Ue;we!==o||f!==0&&we.nodeType!==3||(N=M+f),we!==m||c!==0&&we.nodeType!==3||(B=M+c),we.nodeType===3&&(M+=we.nodeValue.length),(Ue=we.firstChild)!==null;)Se=we,we=Ue;for(;;){if(we===n)break t;if(Se===o&&++ne===f&&(N=M),Se===m&&++Ee===c&&(B=M),(Ue=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=Ue}o=N===-1||B===-1?null:{start:N,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Tc={focusedElem:n,selectionRange:o},aa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Yt=ze.memoizedState,$=i.stateNode,H=$.getSnapshotBeforeUpdate(i.elementType===i.type?He:hi(i.type,He),Yt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=Tp,Tp=!1,ze}function Do(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&fu(i,o,m)}f=f.next}while(f!==c)}}function Ha(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[So],delete i[bc],delete i[lv],delete i[cv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,o),n=n.sibling;n!==null;)pu(n,i,o),n=n.sibling}function mu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(mu(n,i,o),n=n.sibling;n!==null;)mu(n,i,o),n=n.sibling}var cn=null,pi=!1;function ur(n,i,o){for(o=o.child;o!==null;)bp(n,i,o),o=o.sibling}function bp(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ct,o)}catch{}switch(o.tag){case 5:_n||Ts(o,i);case 6:var c=cn,f=pi;cn=null,ur(n,i,o),cn=c,pi=f,cn!==null&&(pi?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(pi?(n=cn,o=o.stateNode,n.nodeType===8?Rc(n.parentNode,o):n.nodeType===1&&Rc(n,o),co(n)):Rc(cn,o.stateNode));break;case 4:c=cn,f=pi,cn=o.stateNode.containerInfo,pi=!0,ur(n,i,o),cn=c,pi=f;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&fu(o,i,M),f=f.next}while(f!==c)}ur(n,i,o);break;case 1:if(!_n&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Xt(o,i,N)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,ur(n,i,o),_n=c):ur(n,i,o);break;default:ur(n,i,o)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Tv),i.forEach(function(c){var f=Uv.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:cn=N.stateNode,pi=!1;break e;case 3:cn=N.stateNode.containerInfo,pi=!0;break e;case 4:cn=N.stateNode.containerInfo,pi=!0;break e}N=N.return}if(cn===null)throw Error(t(160));bp(m,M,f),cn=null,pi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ne){Xt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,n),i=i.sibling}function Lp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),Ti(n),c&4){try{Do(3,n,n.return),Ha(3,n)}catch(He){Xt(n,n.return,He)}try{Do(5,n,n.return)}catch(He){Xt(n,n.return,He)}}break;case 1:mi(i,n),Ti(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(mi(i,n),Ti(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var f=n.stateNode;try{ht(f,"")}catch(He){Xt(n,n.return,He)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,N=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&st(f,m),ot(N,M);var ne=ot(N,m);for(M=0;M<B.length;M+=2){var Ee=B[M],we=B[M+1];Ee==="style"?tt(f,we):Ee==="dangerouslySetInnerHTML"?Fe(f,we):Ee==="children"?ht(f,we):L(f,Ee,we,ne)}switch(N){case"input":lt(f,m);break;case"textarea":me(f,m);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?P(f,!!m.multiple,Ue,!1):Se!==!!m.multiple&&(m.defaultValue!=null?P(f,!!m.multiple,m.defaultValue,!0):P(f,!!m.multiple,m.multiple?[]:"",!1))}f[So]=m}catch(He){Xt(n,n.return,He)}}break;case 6:if(mi(i,n),Ti(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(He){Xt(n,n.return,He)}}break;case 3:if(mi(i,n),Ti(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(He){Xt(n,n.return,He)}break;case 4:mi(i,n),Ti(n);break;case 13:mi(i,n),Ti(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(vu=Ae())),c&4&&Pp(n);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(ne=_n)||Ee,mi(i,n),_n=ne):mi(i,n),Ti(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!Ee&&(n.mode&1)!==0)for(Oe=n,Ee=n.child;Ee!==null;){for(we=Oe=Ee;Oe!==null;){switch(Se=Oe,Ue=Se.child,Se.tag){case 0:case 11:case 14:case 15:Do(4,Se,Se.return);break;case 1:Ts(Se,Se.return);var ze=Se.stateNode;if(typeof ze.componentWillUnmount=="function"){c=Se,o=Se.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Xt(c,o,He)}}break;case 5:Ts(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Ip(we);continue}}Ue!==null?(Ue.return=Se,Oe=Ue):Ip(we)}Ee=Ee.sibling}e:for(Ee=null,we=n;;){if(we.tag===5){if(Ee===null){Ee=we;try{f=we.stateNode,ne?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=we.stateNode,B=we.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=et("display",M))}catch(He){Xt(n,n.return,He)}}}else if(we.tag===6){if(Ee===null)try{we.stateNode.nodeValue=ne?"":we.memoizedProps}catch(He){Xt(n,n.return,He)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Ee===we&&(Ee=null),we=we.return}Ee===we&&(Ee=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:mi(i,n),Ti(n),c&4&&Pp(n);break;case 21:break;default:mi(i,n),Ti(n)}}function Ti(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Cp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ht(f,""),c.flags&=-33);var m=Rp(n);mu(n,m,f);break;case 3:case 4:var M=c.stateNode.containerInfo,N=Rp(n);pu(n,N,M);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cv(n,i,o){Oe=n,Dp(n)}function Dp(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||Va;if(!M){var N=f.alternate,B=N!==null&&N.memoizedState!==null||_n;N=Va;var ne=_n;if(Va=M,(_n=B)&&!ne)for(Oe=f;Oe!==null;)M=Oe,B=M.child,M.tag===22&&M.memoizedState!==null?Up(f):B!==null?(B.return=M,Oe=B):Up(f);for(;m!==null;)Oe=m,Dp(m),m=m.sibling;Oe=f,Va=N,_n=ne}Np(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):Np(n)}}function Np(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ha(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ih(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ih(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var Ee=ne.memoizedState;if(Ee!==null){var we=Ee.dehydrated;we!==null&&co(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&hu(i)}catch(Se){Xt(i,i.return,Se)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Ip(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Up(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ha(4,i)}catch(B){Xt(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Xt(i,f,B)}}var m=i.return;try{hu(i)}catch(B){Xt(i,m,B)}break;case 5:var M=i.return;try{hu(i)}catch(B){Xt(i,M,B)}}}catch(B){Xt(i,i.return,B)}if(i===n){Oe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Oe=N;break}Oe=i.return}}var Rv=Math.ceil,Ga=R.ReactCurrentDispatcher,gu=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,Et=0,on=null,$t=null,un=0,Gn=0,As=sr(0),en=0,No=null,zr=0,Wa=0,_u=0,Io=null,Nn=null,vu=0,Cs=1/0,zi=null,Xa=!1,xu=null,dr=null,ja=!1,fr=null,Ya=0,Uo=0,yu=null,$a=-1,qa=0;function En(){return(Et&6)!==0?Ae():$a!==-1?$a:$a=Ae()}function hr(n){return(n.mode&1)===0?1:(Et&2)!==0&&un!==0?un&-un:dv.transition!==null?(qa===0&&(qa=Sn()),qa):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Of(n.type)),n)}function gi(n,i,o,c){if(50<Uo)throw Uo=0,yu=null,Error(t(185));bn(n,o,c),((Et&2)===0||n!==on)&&(n===on&&((Et&2)===0&&(Wa|=o),en===4&&pr(n,un)),In(n,c),o===1&&Et===0&&(i.mode&1)===0&&(Cs=Ae()+500,Ea&&ar()))}function In(n,i){var o=n.callbackNode;$n(n,i);var c=Si(n,n===on?un:0);if(c===0)o!==null&&re(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&re(o),i===1)n.tag===0?uv(Op.bind(null,n)):Mh(Op.bind(null,n)),ov(function(){(Et&6)===0&&ar()}),o=null;else{switch(bf(c)){case 1:o=Ve;break;case 4:o=nt;break;case 16:o=rt;break;case 536870912:o=xt;break;default:o=rt}o=Xp(o,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Fp(n,i){if($a=-1,qa=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var c=Si(n,n===on?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ka(n,c);else{i=c;var f=Et;Et|=2;var m=Bp();(on!==n||un!==i)&&(zi=null,Cs=Ae()+500,Hr(n,i));do try{Lv();break}catch(N){kp(n,N)}while(!0);kc(),Ga.current=m,Et=f,$t!==null?i=0:(on=null,un=0,i=en)}if(i!==0){if(i===2&&(f=Di(n),f!==0&&(c=f,i=Su(n,f))),i===1)throw o=No,Hr(n,0),pr(n,c),In(n,Ae()),o;if(i===6)pr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!bv(f)&&(i=Ka(n,c),i===2&&(m=Di(n),m!==0&&(c=m,i=Su(n,m))),i===1))throw o=No,Hr(n,0),pr(n,c),In(n,Ae()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Nn,zi);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=vu+500-Ae(),10<i)){if(Si(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Cc(Gr.bind(null,n,Nn,zi),i);break}Gr(n,Nn,zi);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var M=31-ct(c);m=1<<M,M=i[M],M>f&&(f=M),c&=~m}if(c=f,c=Ae()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Rv(c/1960))-c,10<c){n.timeoutHandle=Cc(Gr.bind(null,n,Nn,zi),c);break}Gr(n,Nn,zi);break;case 5:Gr(n,Nn,zi);break;default:throw Error(t(329))}}}return In(n,Ae()),n.callbackNode===o?Fp.bind(null,n):null}function Su(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=Ka(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&Mu(i)),n}function Mu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function bv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!di(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~_u,i&=~Wa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ct(i),c=1<<o;n[o]=-1,i&=~c}}function Op(n){if((Et&6)!==0)throw Error(t(327));Rs();var i=Si(n,0);if((i&1)===0)return In(n,Ae()),null;var o=Ka(n,i);if(n.tag!==0&&o===2){var c=Di(n);c!==0&&(i=c,o=Su(n,c))}if(o===1)throw o=No,Hr(n,0),pr(n,i),In(n,Ae()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Nn,zi),In(n,Ae()),null}function Eu(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Cs=Ae()+500,Ea&&ar())}}function Vr(n){fr!==null&&fr.tag===0&&(Et&6)===0&&Rs();var i=Et;Et|=1;var o=ei.transition,c=Pt;try{if(ei.transition=null,Pt=1,n)return n()}finally{Pt=c,ei.transition=o,Et=i,(Et&6)===0&&ar()}}function wu(){Gn=As.current,kt(As)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,sv(o)),$t!==null)for(o=$t.return;o!==null;){var c=o;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sa();break;case 3:Es(),kt(Pn),kt(pn),jc();break;case 5:Wc(c);break;case 4:Es();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Bc(c.type._context);break;case 22:case 23:wu()}o=o.return}if(on=n,$t=n=mr(n.current,null),un=Gn=i,en=0,No=null,_u=Wa=zr=0,Nn=Io=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,c.next=M}o.pending=c}Or=null}return n}function kp(n,i){do{var o=$t;try{if(kc(),Na.current=Oa,Ia){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ia=!1}if(Br=0,sn=Jt=Ht=null,Co=!1,Ro=0,gu.current=null,o===null||o.return===null){en=1,No=i,$t=null;break}e:{var m=n,M=o.return,N=o,B=i;if(i=un,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,Ee=N,we=Ee.tag;if((Ee.mode&1)===0&&(we===0||we===11||we===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ue=cp(M);if(Ue!==null){Ue.flags&=-257,up(Ue,M,N,m,i),Ue.mode&1&&lp(m,ne,i),i=Ue,B=ne;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(B),i.updateQueue=He}else ze.add(B);break e}else{if((i&1)===0){lp(m,ne,i),Tu();break e}B=Error(t(426))}}else if(zt&&N.mode&1){var Yt=cp(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),up(Yt,M,N,m,i),Fc(ws(B,N));break e}}m=B=ws(B,N),en!==4&&(en=2),Io===null?Io=[m]:Io.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=op(m,B,i);Nh(m,$);break e;case 1:N=B;var H=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(dr===null||!dr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=ap(m,N,i);Nh(m,Ce);break e}}m=m.return}while(m!==null)}Vp(o)}catch(Ye){i=Ye,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Bp(){var n=Ga.current;return Ga.current=Oa,n===null?Oa:n}function Tu(){(en===0||en===3||en===2)&&(en=4),on===null||(zr&268435455)===0&&(Wa&268435455)===0||pr(on,un)}function Ka(n,i){var o=Et;Et|=2;var c=Bp();(on!==n||un!==i)&&(zi=null,Hr(n,i));do try{Pv();break}catch(f){kp(n,f)}while(!0);if(kc(),Et=o,Ga.current=c,$t!==null)throw Error(t(261));return on=null,un=0,en}function Pv(){for(;$t!==null;)zp($t)}function Lv(){for(;$t!==null&&!Y();)zp($t)}function zp(n){var i=Wp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Vp(n):$t=i,gu.current=null}function Vp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Ev(o,i,Gn),o!==null){$t=o;return}}else{if(o=wv(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);en===0&&(en=5)}function Gr(n,i,o){var c=Pt,f=ei.transition;try{ei.transition=null,Pt=1,Dv(n,i,o,c)}finally{ei.transition=f,Pt=c}return null}function Dv(n,i,o,c){do Rs();while(fr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ra(n,m),n===on&&($t=on=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,Xp(rt,function(){return Rs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var M=Pt;Pt=1;var N=Et;Et|=4,gu.current=null,Av(n,o),Lp(o,n),Q_(Tc),aa=!!wc,Tc=wc=null,n.current=o,Cv(o),Re(),Et=N,Pt=M,ei.transition=m}else n.current=o;if(ja&&(ja=!1,fr=n,Ya=f),m=n.pendingLanes,m===0&&(dr=null),fn(o.stateNode),In(n,Ae()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Xa)throw Xa=!1,n=xu,xu=null,n;return(Ya&1)!==0&&n.tag!==0&&Rs(),m=n.pendingLanes,(m&1)!==0?n===yu?Uo++:(Uo=0,yu=n):Uo=0,ar(),null}function Rs(){if(fr!==null){var n=bf(Ya),i=ei.transition,o=Pt;try{if(ei.transition=null,Pt=16>n?16:n,fr===null)var c=!1;else{if(n=fr,fr=null,Ya=0,(Et&6)!==0)throw Error(t(331));var f=Et;for(Et|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if((Oe.flags&16)!==0){var N=m.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ne=N[B];for(Oe=ne;Oe!==null;){var Ee=Oe;switch(Ee.tag){case 0:case 11:case 15:Do(8,Ee,m)}var we=Ee.child;if(we!==null)we.return=Ee,Oe=we;else for(;Oe!==null;){Ee=Oe;var Se=Ee.sibling,Ue=Ee.return;if(Ap(Ee),Ee===ne){Oe=null;break}if(Se!==null){Se.return=Ue,Oe=Se;break}Oe=Ue}}}var ze=m.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Yt=He.sibling;He.sibling=null,He=Yt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Oe=$;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){M=Oe;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Oe=Q;else e:for(M=H;Oe!==null;){if(N=Oe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Ha(9,N)}}catch(Ye){Xt(N,N.return,Ye)}if(N===M){Oe=null;break e}var Ce=N.sibling;if(Ce!==null){Ce.return=N.return,Oe=Ce;break e}Oe=N.return}}if(Et=f,ar(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ct,n)}catch{}c=!0}return c}finally{Pt=o,ei.transition=i}}return!1}function Hp(n,i,o){i=ws(o,i),i=op(n,i,1),n=cr(n,i,1),i=En(),n!==null&&(bn(n,1,i),In(n,i))}function Xt(n,i,o){if(n.tag===3)Hp(n,n,o);else for(;i!==null;){if(i.tag===3){Hp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){n=ws(o,n),n=ap(i,n,1),i=cr(i,n,1),n=En(),i!==null&&(bn(i,1,n),In(i,n));break}}i=i.return}}function Nv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(un&o)===o&&(en===4||en===3&&(un&130023424)===un&&500>Ae()-vu?Hr(n,0):_u|=o),In(n,i)}function Gp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var o=En();n=Oi(n,i),n!==null&&(bn(n,i,o),In(n,o))}function Iv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(n,o)}function Uv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gp(n,o)}var Wp;Wp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,Mv(n,i,o);Dn=(n.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&Eh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;za(n,i),n=i.pendingProps;var f=gs(i,pn.current);Ms(i,o),f=qc(null,i,c,n,f,o);var m=Kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,Ma(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Hc(i),f.updater=ka,i.stateNode=f,f._reactInternals=i,nu(i,c,n,o),i=ou(null,i,c,!0,m,o)):(i.tag=0,zt&&m&&Dc(i),Mn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(za(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Ov(c),n=hi(c,n),f){case 0:i=su(null,i,c,n,o);break e;case 1:i=gp(null,i,c,n,o);break e;case 11:i=dp(null,i,c,n,o);break e;case 14:i=fp(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),su(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),gp(n,i,c,f,o);case 3:e:{if(_p(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Dh(n,i),La(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ws(Error(t(423)),i),i=vp(n,i,c,o,f);break e}else if(c!==f){f=ws(Error(t(424)),i),i=vp(n,i,c,o,f);break e}else for(Hn=rr(i.stateNode.containerInfo.firstChild),Vn=i,zt=!0,fi=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===f){i=Bi(n,i,o);break e}Mn(n,i,c,o)}i=i.child}return i;case 5:return Uh(i),n===null&&Uc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,M=f.children,Ac(c,f)?M=null:m!==null&&Ac(c,m)&&(i.flags|=32),mp(n,i),Mn(n,i,M,o),i.child;case 6:return n===null&&Uc(i),null;case 13:return xp(n,i,o);case 4:return Gc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,o):Mn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),dp(n,i,c,f,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,Ut(Ra,c._currentValue),c._currentValue=M,m!==null)if(di(m.value,M)){if(m.children===f.children&&!Pn.current){i=Bi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var B=N.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=ki(-1,o&-o),B.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var Ee=ne.pending;Ee===null?B.next=B:(B.next=Ee.next,Ee.next=B),ne.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),zc(m.return,o,i),N.lanes|=o;break}B=B.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),zc(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Mn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ms(i,o),f=Qn(f),c=c(f),i.flags|=1,Mn(n,i,c,o),i.child;case 14:return c=i.type,f=hi(c,i.pendingProps),f=hi(c.type,f),fp(n,i,c,f,o);case 15:return hp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),za(n,i),i.tag=1,Ln(c)?(n=!0,Ma(i)):n=!1,Ms(i,o),rp(i,c,f),nu(i,c,f,o),ou(null,i,c,!0,n,o);case 19:return Sp(n,i,o);case 22:return pp(n,i,o)}throw Error(t(156,i.tag))};function Xp(n,i){return ie(n,i)}function Fv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,o,c){return new Fv(n,i,o,c)}function Au(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ov(n){if(typeof n=="function")return Au(n)?1:0;if(n!=null){if(n=n.$$typeof,n===de)return 11;if(n===pe)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=ti(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Za(n,i,o,c,f,m){var M=2;if(c=n,typeof n=="function")Au(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Wr(o.children,f,m,i);case O:M=8,f|=8;break;case b:return n=ti(12,o,i,f|2),n.elementType=b,n.lanes=m,n;case ee:return n=ti(13,o,i,f),n.elementType=ee,n.lanes=m,n;case fe:return n=ti(19,o,i,f),n.elementType=fe,n.lanes=m,n;case ce:return Qa(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case V:M=9;break e;case de:M=11;break e;case pe:M=14;break e;case le:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(M,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Wr(n,i,o,c){return n=ti(7,n,c,i),n.lanes=o,n}function Qa(n,i,o,c){return n=ti(22,n,c,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Cu(n,i,o){return n=ti(6,n,null,i),n.lanes=o,n}function Ru(n,i,o){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function kv(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(n,i,o,c,f,m,M,N,B){return n=new kv(n,i,o,N,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(m),n}function Bv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function jp(n){if(!n)return or;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return yh(n,o,i)}return i}function Yp(n,i,o,c,f,m,M,N,B){return n=bu(o,c,!0,n,f,m,M,N,B),n.context=jp(null),o=n.current,c=En(),f=hr(o),m=ki(c,f),m.callback=i??null,cr(o,m,f),n.current.lanes=f,bn(n,f,c),In(n,c),n}function Ja(n,i,o,c){var f=i.current,m=En(),M=hr(f);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(f,i,M),n!==null&&(gi(n,f,M,m),Pa(n,f,M)),M}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $p(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Pu(n,i){$p(n,i),(n=n.alternate)&&$p(n,i)}function zv(){return null}var qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lu(n){this._internalRoot=n}tl.prototype.render=Lu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ja(n,i,null,null)},tl.prototype.unmount=Lu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){Ja(null,n,null,null)}),i[Ni]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Df();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&Uf(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Vv(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ne=el(M);m.call(ne)}}var M=Yp(i,c,n,0,null,!1,!1,"",Kp);return n._reactRootContainer=M,n[Ni]=M.current,xo(n.nodeType===8?n.parentNode:n),Vr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ne=el(B);N.call(ne)}}var B=bu(n,0,!1,null,null,!1,!1,"",Kp);return n._reactRootContainer=B,n[Ni]=B.current,xo(n.nodeType===8?n.parentNode:n),Vr(function(){Ja(i,B,o,c)}),B}function il(n,i,o,c,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var N=f;f=function(){var B=el(M);N.call(B)}}Ja(i,M,n,f)}else M=Vv(o,i,n,f,c);return el(M)}Pf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Qt(i.pendingLanes);o!==0&&(nc(i,o|1),In(i,Ae()),(Et&6)===0&&(Cs=Ae()+500,ar()))}break;case 13:Vr(function(){var c=Oi(n,1);if(c!==null){var f=En();gi(c,n,1,f)}}),Pu(n,1)}},ic=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var o=En();gi(i,n,134217728,o)}Pu(n,134217728)}},Lf=function(n){if(n.tag===13){var i=hr(n),o=Oi(n,i);if(o!==null){var c=En();gi(o,n,i,c)}Pu(n,i)}},Df=function(){return Pt},Nf=function(n,i){var o=Pt;try{return Pt=n,i()}finally{Pt=o}},Le=function(n,i,o){switch(i){case"input":if(lt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=ya(c);if(!f)throw Error(t(90));pt(c),lt(c,f)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},Ft=Eu,Zt=Vr;var Hv={usingClientEntryPoint:!1,Events:[Mo,ps,ya,Ne,at,Eu]},Fo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Ct=rl.inject(Gv),vt=rl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return Bv(n,i,null,o)},Un.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var o=!1,c="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(n,1,!1,null,null,o,!1,c,f),n[Ni]=i.current,xo(n.nodeType===8?n.parentNode:n),new Lu(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Vr(n)},Un.hydrate=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Du(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",M=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Yp(i,null,n,1,o??null,f,!1,m,M),n[Ni]=i.current,xo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new tl(i)},Un.render=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){il(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=Eu,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!nl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return il(n,i,o,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var rm;function Jv(){if(rm)return Uu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Uu.exports=Qv(),Uu.exports}var sm;function e0(){if(sm)return sl;sm=1;var r=Jv();return sl.createRoot=r.createRoot,sl.hydrateRoot=r.hydrateRoot,sl}var t0=e0();const n0=Eg(t0),om=r=>{let e;const t=new Set,s=(p,_)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const x=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(S=>S(e,x))}},a=()=>e,d={setState:s,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(s,a,d);return d},i0=(r=>r?om(r):om),r0=r=>r;function s0(r,e=r0){const t=Wo.useSyncExternalStore(r.subscribe,Wo.useCallback(()=>e(r.getState()),[r,e]),Wo.useCallback(()=>e(r.getInitialState()),[r,e]));return Wo.useDebugValue(t),t}const am=r=>{const e=i0(r),t=s=>s0(e,s);return Object.assign(t,e),t},wg=(r=>r?am(r):am),ol={modelId:null,status:"idle",bootstrapStatus:"idle",bootstrapStep:null,uploadProgress:0,parseProgress:0,errorMessage:null,metadata:null,warnings:[],tree:null,fields:[],sets:[],activeFieldId:null,activeTimestep:0,nodeCoords_f64:null,fieldValues_f64:null,displacement_f64:null,fieldLoadError:null,fieldNanCount:0,deformLoadError:null,surfaceIndices:null,surfaceNormals:null,surfaceElementMap:null},xe=wg((r,e)=>({...ol,beginUpload:t=>r({...ol,modelId:t,status:"uploading"}),setParsing:()=>r({status:"parsing"}),setReady:()=>r({status:"ready"}),setError:t=>r({status:"error",errorMessage:t,bootstrapStatus:"error"}),setBootstrapLoading:t=>r({bootstrapStatus:"loading",bootstrapStep:t}),setBootstrapLoaded:()=>r({bootstrapStatus:"loaded",bootstrapStep:null}),setBootstrapIdle:()=>r({bootstrapStatus:"idle",bootstrapStep:null}),setBootstrapError:(t,s)=>r({status:"error",errorMessage:s,bootstrapStatus:"error",bootstrapStep:t}),resetModel:()=>r(ol),hydrateMetadata:t=>r({metadata:t}),hydrateTree:t=>r({tree:t}),hydrateFields:t=>r({fields:t}),hydrateSets:t=>r({sets:t}),hydrateWarnings:t=>r({warnings:t}),setModelId:t=>r({modelId:t}),setStatus:t=>r({status:t}),setUploadProgress:t=>r({uploadProgress:t}),setParseProgress:t=>r({parseProgress:t}),setErrorMessage:t=>r({errorMessage:t}),setMetadata:t=>r({metadata:t}),setWarnings:t=>r({warnings:t}),addWarning:t=>r(s=>({warnings:[...s.warnings,t]})),clearWarnings:()=>r({warnings:[]}),setTree:t=>r({tree:t}),setFields:t=>r({fields:t}),setSets:t=>r({sets:t}),setActiveFieldId:t=>r({activeFieldId:t,fieldValues_f64:null,fieldLoadError:null,fieldNanCount:0}),setActiveTimestep:t=>r({activeTimestep:t,fieldValues_f64:null,fieldLoadError:null}),setNodeCoords:t=>{e().nodeCoords_f64===null&&r({nodeCoords_f64:t})},setFieldValues:t=>r({fieldValues_f64:t}),setFieldLoadError:t=>r({fieldLoadError:t}),setFieldNanCount:t=>r({fieldNanCount:t}),setDisplacementValues:t=>r({displacement_f64:t}),setDeformLoadError:t=>r({deformLoadError:t}),setSurfaceData:(t,s,a)=>r({surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a}),reset:()=>r(ol)})),Yl="/api/v1";async function Ko(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/json"}});if(!e.ok){const t=await e.text();throw new $l(e.status,t)}return e.json()}async function ff(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const d=await e.text();throw new $l(e.status,d)}const t=await e.arrayBuffer(),s=e.headers.get("X-Array-Dtype"),a=e.headers.get("X-Array-Shape"),l=e.headers.get("X-Array-ByteOrder");if(!s)throw new Error(`Missing X-Array-Dtype header for ${r}`);if(!a)throw new Error(`Missing X-Array-Shape header for ${r}`);if(!l)throw new Error(`Missing X-Array-ByteOrder header for ${r}`);const u=Md(a,"X-Array-Shape");return a0(r,s,u,l,t.byteLength),{buffer:t,meta:{dtype:s,shape:u,byteOrder:l}}}async function o0(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const D=await e.text();throw new $l(e.status,D)}const t=e.headers.get("X-Array-Dtype")??"",s=e.headers.get("X-Array-ByteOrder")??"little",a=e.headers.get("X-Array-Shape"),l=e.headers.get("X-Buffer-Offsets");if(t!=="mixed")throw new Error(`Expected mixed surfaces payload, got dtype="${t||"missing"}"`);if(s!=="little")throw new Error(`Unsupported byte order "${s}" for surfaces payload`);if(!a)throw new Error("Missing X-Array-Shape header for surfaces payload");if(!l)throw new Error("Missing X-Buffer-Offsets header for surfaces payload");const u=Md(a,"X-Array-Shape"),d=Md(l,"X-Buffer-Offsets"),h=await e.arrayBuffer();ku(u,d,"indices"),ku(u,d,"normals"),ku(u,d,"map");const p=d.indices,_=d.normals,g=d.map,x=u.indices,S=u.normals,w=u.map,E=Bu(h,p,"int32","indices"),y=Bu(h,_,"float32","normals"),v=Bu(h,g,"int32","map");return zu(x,E.length,"indices"),zu(S,y.length,"normals"),zu(w,v.length,"map"),{surfaceIndices:E,surfaceNormals:y,surfaceElementMap:v,headers:{dtype:t,shape:u,byteOrder:s,offsets:d}}}function Md(r,e){try{return JSON.parse(r)}catch{throw new Error(`Malformed ${e} header`)}}function ku(r,e,t){if(!Array.isArray(r[t]))throw new Error(`Missing or malformed shape section "${t}"`);const s=e[t];if(!Array.isArray(s)||s.length!==2)throw new Error(`Missing or malformed offsets section "${t}"`)}function Bu(r,[e,t],s,a){const l=t-e;if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||t<0||t<=e||t>r.byteLength)throw new Error(`Invalid byte range for section "${a}"`);if(e%4!==0||l%4!==0)throw new Error(`Misaligned byte range for section "${a}"`);const u=r.slice(e,t);return s==="int32"?new Int32Array(u):new Float32Array(u)}function zu(r,e,t){if(r.length!==1||!Number.isInteger(r[0])||r[0]<0)throw new Error(`Unsupported shape for section "${t}"`);if(r[0]!==e)throw new Error(`Shape length mismatch for section "${t}": expected ${r[0]}, got ${e}`)}function a0(r,e,t,s,a){if(s!=="little")throw new Error(`Unsupported byte order "${s}" for ${r}`);if(!Array.isArray(t)||t.length===0||t.some(h=>!Number.isInteger(h)||h<0))throw new Error(`Malformed X-Array-Shape header for ${r}`);const l=l0(e,r),d=t.reduce((h,p)=>h*p,1)*l;if(d!==a)throw new Error(`Binary payload size mismatch for ${r}: expected ${d} bytes, got ${a}`)}function l0(r,e){switch(r){case"float64":return Float64Array.BYTES_PER_ELEMENT;case"float32":return Float32Array.BYTES_PER_ELEMENT;case"int32":return Int32Array.BYTES_PER_ELEMENT;case"uint8":return Uint8Array.BYTES_PER_ELEMENT;default:throw new Error(`Unsupported dtype "${r}" for ${e}`)}}async function c0(r){const e=new FormData;e.append("file",r);const t=await fetch(`${Yl}/models/upload`,{method:"POST",body:e});if(!t.ok){const s=await t.text();throw new $l(t.status,s)}return t.json()}class $l extends Error{constructor(t,s){const a=u0(s),l=a.message??`Request failed with HTTP ${t}`;super(l);Gt(this,"code");Gt(this,"userMessage");this.status=t,this.body=s,this.name="ApiError",this.code=a.code,this.userMessage=l}}function u0(r){try{const e=JSON.parse(r);return{code:e.error_code??null,message:e.error_message??e.message??e.detail??null}}catch{return{code:null,message:r||null}}}const d0={lut_name:"viridis",min_value:0,max_value:1,n_colors:256,nan_color:[.5,.5,.5,.3],above_range_color:[1,0,1,1],below_range_color:[0,0,1,1],scale:"linear"},lm={deformMode:"undeformed",deformScale:1,deformFieldId:null,pickMode:"node",wireframeVisible:!1,partVisibility:{},colorMapConfig:{...d0}},Rt=wg(r=>({...lm,setDeformMode:e=>r({deformMode:e}),setDeformScale:e=>r({deformScale:e}),setDeformFieldId:e=>r({deformFieldId:e}),setPickMode:e=>r({pickMode:e}),setWireframeVisible:e=>r({wireframeVisible:e}),toggleWireframe:()=>r(e=>({wireframeVisible:!e.wireframeVisible})),registerPartIds:e=>r(t=>{if(e.length===0)return{};const s={...t.partVisibility};let a=!1;for(const l of e)l in s||(s[l]=!0,a=!0);return a?{partVisibility:s}:{}}),setPartVisibility:(e,t)=>r(s=>({partVisibility:{...s.partVisibility,[e]:t}})),setAllPartsVisible:e=>r(t=>{const s={};for(const a of Object.keys(t.partVisibility))s[a]=e;return{partVisibility:s}}),isolatePart:e=>r(t=>{const s=Object.keys(t.partVisibility);if(s.length===0)return{partVisibility:{[e]:!0}};const a={};for(const l of s)a[l]=l===e;return{partVisibility:a}}),resetVisibility:()=>r({partVisibility:{}}),setColorMapName:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,lut_name:e}})),setColorMapRange:(e,t)=>r(s=>({colorMapConfig:{...s.colorMapConfig,min_value:e,max_value:t}})),setColorMapConfig:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,...e}})),resetView:()=>r(lm)})),f0=()=>{const r=xe(k=>k.status),e=xe(k=>k.modelId),t=xe(k=>k.uploadProgress),s=xe(k=>k.parseProgress),a=xe(k=>k.errorMessage),l=xe(k=>k.setModelId),u=xe(k=>k.setStatus),d=xe(k=>k.setUploadProgress),h=xe(k=>k.setParseProgress),p=xe(k=>k.setErrorMessage),_=xe(k=>k.resetModel),g=xe(k=>k.setBootstrapIdle),x=Rt(k=>k.resetView),[S,w]=Ze.useState(!1),E=Ze.useRef(null),y=Ze.useCallback(async k=>{_(),x(),u("uploading"),d(0),h(0),p(null),g();try{const{model_id:I}=await c0(k);console.info("[UploadPanel] Upload returned modelId",{modelId:I,fileName:k.name}),l(I),window.history.replaceState({},"",`/?modelId=${encodeURIComponent(I)}`),u("parsing"),d(100)}catch(I){u("error"),p(I instanceof Error?I.message:"Upload failed")}},[_,x,g,p,l,h,u,d]),v=Ze.useCallback(k=>{k.preventDefault(),w(!1);const I=k.dataTransfer.files[0];I&&y(I)},[y]),D=Ze.useCallback(k=>{k.preventDefault(),w(!0)},[]),L=Ze.useCallback(()=>w(!1),[]),R=Ze.useCallback(k=>{var F;const I=(F=k.target.files)==null?void 0:F[0];I&&y(I)},[y]);return K.jsxs("div",{style:{width:"100%"},children:[r==="idle"&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:`upload-dropzone ${S?"upload-dropzone--active":""}`,onDrop:v,onDragOver:D,onDragLeave:L,onClick:()=>{var k;return(k=E.current)==null?void 0:k.click()},children:[K.jsx("div",{className:"upload-dropzone__title",children:"Drop VTK/VTU file here"}),K.jsx("div",{className:"upload-dropzone__subtitle",children:"or click to browse"})]}),K.jsx("input",{ref:E,type:"file",accept:".vtk,.vtu,.vtp,.pvtu","aria-label":"FEA file upload",style:{display:"none"},onChange:R})]}),r==="uploading"&&K.jsxs("div",{children:[K.jsx("div",{style:{marginBottom:8,fontSize:12},children:"Uploading..."}),K.jsx("div",{className:"progress-bar",children:K.jsx("div",{className:"progress-bar__fill",style:{width:`${t}%`}})})]}),r==="parsing"&&K.jsxs("div",{children:[K.jsx("div",{style:{marginBottom:8,fontSize:12},children:e?`Parsing ${e}...`:"Parsing..."}),K.jsx("div",{className:"progress-bar",children:K.jsx("div",{className:"progress-bar__fill",style:{width:`${s}%`}})})]}),r==="error"&&K.jsxs("div",{style:{color:"var(--accent-danger)",fontSize:12},children:[K.jsx("div",{style:{marginBottom:8,fontWeight:600},children:"Error"}),K.jsx("div",{children:a})]})]})},h0=()=>{const r=xe(t=>t.tree),e=Rt(t=>t.registerPartIds);return Ze.useEffect(()=>{r&&e(p0(r))},[e,r]),r?K.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:K.jsx(Tg,{node:r,depth:0})}):K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No model loaded"})},Tg=({node:r,depth:e})=>{var d;const t=Rt(h=>h.partVisibility),s=Rt(h=>h.setPartVisibility),a=Rt(h=>h.isolatePart),l=t[r.id]!==!1,u=r.type==="part";return K.jsxs("div",{children:[K.jsxs("div",{className:`tree-node ${l?"":"tree-node--hidden"}`,style:{paddingLeft:e*16+8},children:[K.jsxs("span",{className:"tree-node__icon",children:[r.type==="assembly"&&"📦",r.type==="instance"&&"🔗",r.type==="part"&&"🧊",r.type==="node_set"&&"📍",r.type==="element_set"&&"📐"]}),K.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),u&&K.jsxs("span",{className:"tree-node__actions",children:[K.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),s(r.id,!l)},title:l?"Hide":"Show",children:l?"👁":"👁‍🗨"}),K.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),a(r.id)},title:"Isolate",children:"◎"})]})]}),(d=r.children)==null?void 0:d.map(h=>K.jsx(Tg,{node:h,depth:e+1},h.id))]})};function p0(r){const e=[],t=[r];for(;t.length>0;){const s=t.pop();s.type==="part"&&e.push(s.id),s.children&&t.push(...s.children)}return e}const m0=()=>{const r=xe(a=>a.fields),e=xe(a=>a.activeFieldId),t=xe(a=>a.setActiveFieldId),s=xe(a=>a.fieldLoadError);return K.jsxs("div",{className:"field-selector",children:[K.jsxs("select",{"aria-label":"Result field",value:e??"",onChange:a=>t(a.target.value||null),children:[K.jsx("option",{value:"",children:"— No field —"}),r.map(a=>K.jsxs("option",{value:a.id,disabled:a.location==="integration_point",children:[a.name,a.n_components>1?` (${a.n_components} comp)`:"",a.location==="integration_point"?" ⚠ Unsupported in MVP":"",a.location==="elemental"?" [elem]":"",a.location==="nodal"?" [nodal]":""]},a.id))]}),s&&K.jsxs("div",{style:{marginTop:4,fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",s]})]})},g0=()=>{const r=xe(E=>E.fields),e=xe(E=>E.activeFieldId),t=xe(E=>E.activeTimestep),s=xe(E=>E.setActiveTimestep),a=xe(E=>E.fieldLoadError),[l,u]=Ze.useState(!1),d=Ze.useRef(null),h=r.find(E=>E.id===e),p=(h==null?void 0:h.n_timesteps)??1,_=Math.max(0,p-1),g=h==null?void 0:h.timesteps.find(E=>E.step_index===t),x=g!==void 0,S=(g==null?void 0:g.time_value)!=null?`t = ${g.time_value.toFixed(4)}`:x?`Step ${t}`:"No data at this step";Ze.useEffect(()=>{if(!l){d.current!==null&&(cancelAnimationFrame(d.current),d.current=null);return}let E=0;const y=v=>{v-E>500&&(E=v,s((t+1)%(_+1))),d.current=requestAnimationFrame(y)};return d.current=requestAnimationFrame(y),()=>{d.current!==null&&cancelAnimationFrame(d.current)}},[l,t,_,s]);const w=Ze.useCallback(E=>{s(parseInt(E.target.value,10))},[s]);return!h||p<=1?K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:h?"Single timestep":"Select a field first"}):K.jsxs("div",{className:"slider-control",children:[K.jsx("input",{type:"range",min:0,max:_,value:t,onChange:w}),K.jsxs("div",{className:"slider-control__label",children:[K.jsx("span",{children:S}),K.jsxs("span",{children:[t+1," / ",p]})]}),K.jsx("button",{className:"toolbar__btn",onClick:()=>u(!l),style:{alignSelf:"flex-start",marginTop:4},children:l?"⏸ Pause":"▶ Animate"}),(!x||a)&&K.jsxs("div",{style:{color:"var(--accent-warning)",fontSize:11,marginTop:4},children:["⚠ ",a??"No data at this step"]})]})},_0=()=>{const r=xe(g=>g.fields),e=xe(g=>g.deformLoadError),t=Rt(g=>g.deformMode),s=Rt(g=>g.deformScale),a=Rt(g=>g.deformFieldId),l=Rt(g=>g.setDeformMode),u=Rt(g=>g.setDeformScale),d=Rt(g=>g.setDeformFieldId),h=r.filter(g=>g.location==="nodal"&&g.n_components===3),p=h.length>0,_=g=>{const x=parseFloat(g.target.value);Number.isNaN(x)||u(Math.min(Math.max(x,0),1e4))};return K.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[K.jsx("div",{className:"field-selector",children:K.jsxs("select",{"aria-label":"Deformation field",value:a??"",onChange:g=>d(g.target.value||null),disabled:!p,children:[K.jsx("option",{value:"",children:p?"— No deformation —":"— No displacement field —"}),h.map(g=>K.jsx("option",{value:g.id,children:g.name},g.id))]})}),!p&&K.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:"No nodal vector3 fields available for deformation."}),K.jsx("div",{style:{display:"flex",gap:4},children:["undeformed","deformed","overlay"].map(g=>K.jsx("button",{className:`toolbar__btn ${t===g?"toolbar__btn--active":""}`,onClick:()=>l(g),disabled:!p||!a,style:{flex:1,fontSize:11,justifyContent:"center"},children:g},g))}),K.jsxs("div",{className:"slider-control",children:[K.jsxs("label",{style:{fontSize:11,color:"var(--text-secondary)"},children:["Scale: ",s.toFixed(1),"×"]}),K.jsx("input",{type:"range",min:0,max:100,step:.1,value:Math.min(s,100),onChange:g=>u(parseFloat(g.target.value)),disabled:!p||!a}),K.jsx("input",{type:"number",min:0,max:1e4,step:1,value:s,onChange:_,disabled:!p||!a,style:{width:60,fontSize:11,padding:"2px 4px",background:"var(--bg-tertiary)",color:"var(--text-primary)",border:"1px solid var(--border-primary)",borderRadius:4}})]}),e&&K.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",e]})]})},v0=({onZoomToFit:r})=>{const e=xe(p=>p.status),t=Rt(p=>p.wireframeVisible),s=Rt(p=>p.toggleWireframe),a=Rt(p=>p.pickMode),l=Rt(p=>p.setPickMode),u=Rt(p=>p.deformMode),d=Rt(p=>p.setDeformMode),h=e==="ready";return K.jsxs("div",{className:"toolbar",children:[K.jsx("span",{className:"toolbar__title",children:"FEA Viewer"}),h&&K.jsxs(K.Fragment,{children:[K.jsx("button",{className:`toolbar__btn ${t?"toolbar__btn--active":""}`,onClick:s,title:"Toggle wireframe overlay",children:"◇ Wire"}),K.jsx("button",{className:`toolbar__btn ${a==="node"?"toolbar__btn--active":""}`,onClick:()=>l("node"),title:"Node pick mode",children:"⊙ Node"}),K.jsx("button",{className:`toolbar__btn ${a==="element"?"toolbar__btn--active":""}`,onClick:()=>l("element"),title:"Element pick mode",children:"◻ Elem"}),K.jsx("button",{className:`toolbar__btn ${u==="deformed"?"toolbar__btn--active":""}`,onClick:()=>d(u==="deformed"?"undeformed":"deformed"),title:"Toggle deformed view",children:"↗ Deform"}),K.jsx("button",{className:"toolbar__btn",onClick:r,title:"Zoom to fit model",children:"⊞ Fit"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="170",js={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x0=0,cm=1,y0=2,Ag=1,S0=2,ji=3,br=0,kn=1,jn=2,Cr=0,Ys=1,um=2,dm=3,fm=4,M0=5,Qr=100,E0=101,w0=102,T0=103,A0=104,C0=200,R0=201,b0=202,P0=203,Ed=204,wd=205,L0=206,D0=207,N0=208,I0=209,U0=210,F0=211,O0=212,k0=213,B0=214,Td=0,Ad=1,Cd=2,Ks=3,Rd=4,bd=5,Pd=6,Ld=7,pf=0,z0=1,V0=2,Rr=0,H0=1,G0=2,W0=3,X0=4,j0=5,Y0=6,$0=7,Cg=300,Zs=301,Qs=302,Dd=303,Nd=304,ql=306,Id=1e3,Ar=1001,Ud=1002,An=1003,q0=1004,al=1005,oi=1006,Vu=1007,es=1008,Ci=1009,Rg=1010,bg=1011,$o=1012,mf=1013,ts=1014,Yi=1015,Zo=1016,gf=1017,_f=1018,Js=1020,Pg=35902,Lg=1021,Dg=1022,Yn=1023,Ng=1024,Ig=1025,$s=1026,eo=1027,Ug=1028,vf=1029,Fg=1030,xf=1031,yf=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Fd=35840,Od=35841,kd=35842,Bd=35843,zd=36196,Vd=37492,Hd=37496,Gd=37808,Wd=37809,Xd=37810,jd=37811,Yd=37812,$d=37813,qd=37814,Kd=37815,Zd=37816,Qd=37817,Jd=37818,ef=37819,tf=37820,nf=37821,zl=36492,rf=36494,sf=36495,Og=36283,of=36284,af=36285,lf=36286,K0=3200,Z0=3201,Sf=0,Q0=1,Tr="",ii="srgb",no="srgb-linear",Kl="linear",Dt="srgb",bs=7680,hm=519,J0=512,ex=513,tx=514,kg=515,nx=516,ix=517,rx=518,sx=519,pm=35044,mm="300 es",$i=2e3,Hl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,cf=180/Math.PI;function Qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function Tn(r,e,t){return Math.max(e,Math.min(t,r))}function ox(r,e){return(r%e+e)%e}function Hu(r,e,t){return(1-t)*r+t*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ax={DEG2RAD:Yo};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,a,l,u,d,h,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p)}set(e,t,s,a,l,u,d,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],w=s[8],E=a[0],y=a[3],v=a[6],D=a[1],L=a[4],R=a[7],k=a[2],I=a[5],F=a[8];return l[0]=u*E+d*D+h*k,l[3]=u*y+d*L+h*I,l[6]=u*v+d*R+h*F,l[1]=p*E+_*D+g*k,l[4]=p*y+_*L+g*I,l[7]=p*v+_*R+g*F,l[2]=x*E+S*D+w*k,l[5]=x*y+S*L+w*I,l[8]=x*v+S*R+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-s*l*_+s*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],g=_*u-d*p,x=d*h-_*l,S=p*l-u*h,w=t*g+s*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=g*E,e[1]=(a*p-_*s)*E,e[2]=(d*s-a*u)*E,e[3]=x*E,e[4]=(_*t-a*h)*E,e[5]=(a*l-d*t)*E,e[6]=S*E,e[7]=(s*h-p*t)*E,e[8]=(u*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new dt;function Bg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lx(){const r=Gl("canvas");return r.style.display="block",r}const gm={};function Xo(r){r in gm||(gm[r]=!0,console.warn(r))}function cx(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function ux(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:no,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?Kl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const _m=[.64,.33,.3,.6,.15,.06],vm=[.2126,.7152,.0722],xm=[.3127,.329],ym=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[no]:{primaries:_m,whitePoint:xm,transfer:Kl,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:_m,whitePoint:xm,transfer:Dt,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}});let Ps;class fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Gl("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=qi(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(qi(t[s]/255)*255):t[s]=qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hx=0;class zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Wu(a[u].image)):l.push(Wu(a[u]))}else l=Wu(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Wu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let px=0;class Cn extends is{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,s=Ar,a=Ar,l=oi,u=es,d=Yn,h=Ci,p=Cn.DEFAULT_ANISOTROPY,_=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Qo(),this.name="",this.source=new zg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Cg;Cn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,s=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],x=h[1],S=h[5],w=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-E)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+E)<.1&&Math.abs(w+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,R=(S+1)/2,k=(v+1)/2,I=(_+x)/4,F=(g+E)/4,O=(w+y)/4;return L>R&&L>k?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=I/s,l=F/s):R>k?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=I/a,l=O/a):k<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),s=F/l,a=O/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(g-E)*(g-E)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(g-E)/D,this.z=(x-_)/D,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mx extends is{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Cn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends mx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Vg extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gx extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,d){let h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];const x=l[u+0],S=l[u+1],w=l[u+2],E=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=w,e[t+3]=E;return}if(g!==E||h!==x||p!==S||_!==w){let y=1-d;const v=h*x+p*S+_*w+g*E,D=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const k=Math.sqrt(L),I=Math.atan2(k,v*D);y=Math.sin(y*I)/k,d=Math.sin(d*I)/k}const R=d*D;if(h=h*y+x*R,p=p*y+S*R,_=_*y+w*R,g=g*y+E*R,y===1-d){const k=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=k,p*=k,_*=k,g*=k}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,u){const d=s[a],h=s[a+1],p=s[a+2],_=s[a+3],g=l[u],x=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+_*g+h*S-p*x,e[t+1]=h*w+_*x+p*g-d*S,e[t+2]=p*w+_*S+d*x-h*g,e[t+3]=_*w-d*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(s/2),_=d(a/2),g=d(l/2),x=h(s/2),S=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=x*_*g+p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g-x*S*w;break;case"YXZ":this._x=x*_*g+p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g+x*S*w;break;case"ZXY":this._x=x*_*g-p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g-x*S*w;break;case"ZYX":this._x=x*_*g-p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g+x*S*w;break;case"YZX":this._x=x*_*g+p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g-x*S*w;break;case"XZY":this._x=x*_*g-p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],_=t[6],g=t[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*d+a*p-l*h,this._y=a*_+u*h+l*d-s*p,this._z=l*_+u*p+s*h-a*d,this._w=u*_-s*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,d),g=Math.sin((1-t)*_)/p,x=Math.sin(t*_)/p;return this._w=u*g+this._w*x,this._x=s*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*s),_=2*(d*t-l*a),g=2*(l*s-u*t);return this.x=t+h*p+u*g-d*_,this.y=s+h*_+d*p-l*g,this.z=a+h*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-s*h,this.z=s*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new q,Mm=new ns;class io{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ll.copy(s.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),cl.subVectors(this.max,Bo),Ls.subVectors(e.a,Bo),Ds.subVectors(e.b,Bo),Ns.subVectors(e.c,Bo),_r.subVectors(Ds,Ls),vr.subVectors(Ns,Ds),Xr.subVectors(Ls,Ns);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Xr.z,Xr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Xr.z,0,-Xr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Xr.y,Xr.x,0];return!ju(t,Ls,Ds,Ns,cl)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,Ls,Ds,Ns,cl))?!1:(ul.crossVectors(_r,vr),t=[ul.x,ul.y,ul.z],ju(t,Ls,Ds,Ns,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new q,new q,new q,new q,new q,new q,new q,new q],_i=new q,ll=new io,Ls=new q,Ds=new q,Ns=new q,_r=new q,vr=new q,Xr=new q,Bo=new q,cl=new q,ul=new q,jr=new q;function ju(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){jr.fromArray(r,l);const d=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),h=e.dot(jr),p=t.dot(jr),_=s.dot(jr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>d)return!1}return!0}const _x=new io,zo=new q,Yu=new q;class Zl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):_x.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(zo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Yu)),this.expandByPoint(zo.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new q,$u=new q,dl=new q,xr=new q,qu=new q,fl=new q,Ku=new q;class Mf{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){$u.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub($u);const l=e.distanceTo(t)*.5,u=-this.direction.dot(dl),d=xr.dot(this.direction),h=-xr.dot(dl),p=xr.lengthSq(),_=Math.abs(1-u*u);let g,x,S,w;if(_>0)if(g=u*h-d,x=u*d-h,w=l*_,g>=0)if(x>=-w)if(x<=w){const E=1/_;g*=E,x*=E,S=g*(g+u*x+2*d)+x*(u*g+x+2*h)+p}else x=l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x<=-w?(g=Math.max(0,-(-u*l+d)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=w?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(u*l+d)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=u>0?-l:l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy($u).addScaledVector(dl,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,d,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){qu.subVectors(t,e),fl.subVectors(s,e),Ku.crossVectors(qu,fl);let u=this.direction.dot(Ku),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=d*this.direction.dot(fl.crossVectors(xr,fl));if(h<0)return null;const p=d*this.direction.dot(qu.cross(xr));if(p<0||h+p>u)return null;const _=-d*xr.dot(Ku);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y)}set(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=w,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=u*_,S=u*g,w=d*_,E=d*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+w*p,t[5]=x-E*p,t[9]=-d*h,t[2]=E-x*p,t[6]=w+S*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,w=p*_,E=p*g;t[0]=x+E*d,t[4]=w*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*_,t[9]=-d,t[2]=S*d-w,t[6]=E+x*d,t[10]=u*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,w=p*_,E=p*g;t[0]=x-E*d,t[4]=-u*g,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*_,t[9]=E-x*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const x=u*_,S=u*g,w=d*_,E=d*g;t[0]=h*_,t[4]=w*p-S,t[8]=x*p+E,t[1]=h*g,t[5]=E*p+x,t[9]=S*p-w,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=E-x*g,t[8]=w*g+S,t[1]=g,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=S*g+w,t[10]=x-E*g}else if(e.order==="XZY"){const x=u*h,S=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=x*g+E,t[5]=u*_,t[9]=S*g-w,t[2]=w*g-S,t[6]=d*_,t[10]=E*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,xx)}lookAt(e,t,s){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(s,Wn),yr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(s,Wn)),yr.normalize(),hl.crossVectors(Wn,yr),a[0]=yr.x,a[4]=hl.x,a[8]=Wn.x,a[1]=yr.y,a[5]=hl.y,a[9]=Wn.y,a[2]=yr.z,a[6]=hl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],w=s[2],E=s[6],y=s[10],v=s[14],D=s[3],L=s[7],R=s[11],k=s[15],I=a[0],F=a[4],O=a[8],b=a[12],C=a[1],V=a[5],de=a[9],ee=a[13],fe=a[2],pe=a[6],le=a[10],ce=a[14],z=a[3],ue=a[7],oe=a[11],U=a[15];return l[0]=u*I+d*C+h*fe+p*z,l[4]=u*F+d*V+h*pe+p*ue,l[8]=u*O+d*de+h*le+p*oe,l[12]=u*b+d*ee+h*ce+p*U,l[1]=_*I+g*C+x*fe+S*z,l[5]=_*F+g*V+x*pe+S*ue,l[9]=_*O+g*de+x*le+S*oe,l[13]=_*b+g*ee+x*ce+S*U,l[2]=w*I+E*C+y*fe+v*z,l[6]=w*F+E*V+y*pe+v*ue,l[10]=w*O+E*de+y*le+v*oe,l[14]=w*b+E*ee+y*ce+v*U,l[3]=D*I+L*C+R*fe+k*z,l[7]=D*F+L*V+R*pe+k*ue,l[11]=D*O+L*de+R*le+k*oe,l[15]=D*b+L*ee+R*ce+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],w=e[3],E=e[7],y=e[11],v=e[15];return w*(+l*h*g-a*p*g-l*d*x+s*p*x+a*d*S-s*h*S)+E*(+t*h*S-t*p*x+l*u*x-a*u*S+a*p*_-l*h*_)+y*(+t*p*g-t*d*S-l*u*g+s*u*S+l*d*_-s*p*_)+v*(-a*d*_-t*h*g+t*d*x+a*u*g-s*u*x+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],w=e[12],E=e[13],y=e[14],v=e[15],D=g*y*p-E*x*p+E*h*S-d*y*S-g*h*v+d*x*v,L=w*x*p-_*y*p-w*h*S+u*y*S+_*h*v-u*x*v,R=_*E*p-w*g*p+w*d*S-u*E*S-_*d*v+u*g*v,k=w*g*h-_*E*h-w*d*x+u*E*x+_*d*y-u*g*y,I=t*D+s*L+a*R+l*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=D*F,e[1]=(E*x*l-g*y*l-E*a*S+s*y*S+g*a*v-s*x*v)*F,e[2]=(d*y*l-E*h*l+E*a*p-s*y*p-d*a*v+s*h*v)*F,e[3]=(g*h*l-d*x*l-g*a*p+s*x*p+d*a*S-s*h*S)*F,e[4]=L*F,e[5]=(_*y*l-w*x*l+w*a*S-t*y*S-_*a*v+t*x*v)*F,e[6]=(w*h*l-u*y*l-w*a*p+t*y*p+u*a*v-t*h*v)*F,e[7]=(u*x*l-_*h*l+_*a*p-t*x*p-u*a*S+t*h*S)*F,e[8]=R*F,e[9]=(w*g*l-_*E*l-w*s*S+t*E*S+_*s*v-t*g*v)*F,e[10]=(u*E*l-w*d*l+w*s*p-t*E*p-u*s*v+t*d*v)*F,e[11]=(_*d*l-u*g*l-_*s*p+t*g*p+u*s*S-t*d*S)*F,e[12]=k*F,e[13]=(_*E*a-w*g*a+w*s*x-t*E*x-_*s*y+t*g*y)*F,e[14]=(w*d*a-u*E*a-w*s*h+t*E*h+u*s*y-t*d*y)*F,e[15]=(u*g*a-_*d*a+_*s*h-t*g*h-u*s*x+t*d*x)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,p=l*u,_=l*d;return this.set(p*u+s,p*d-a*h,p*h+a*d,0,p*d+a*h,_*d+s,_*h-a*u,0,p*h-a*d,_*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,_=u+u,g=d+d,x=l*p,S=l*_,w=l*g,E=u*_,y=u*g,v=d*g,D=h*p,L=h*_,R=h*g,k=s.x,I=s.y,F=s.z;return a[0]=(1-(E+v))*k,a[1]=(S+R)*k,a[2]=(w-L)*k,a[3]=0,a[4]=(S-R)*I,a[5]=(1-(x+v))*I,a[6]=(y+D)*I,a[7]=0,a[8]=(w+L)*F,a[9]=(y-D)*F,a[10]=(1-(x+E))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Is.set(a[0],a[1],a[2]).length();const u=Is.set(a[4],a[5],a[6]).length(),d=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],vi.copy(this);const p=1/l,_=1/u,g=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,a,l,u,d=$i){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),x=(s+a)/(s-a);let S,w;if(d===$i)S=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===Hl)S=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,d=$i){const h=this.elements,p=1/(t-e),_=1/(s-a),g=1/(u-l),x=(t+e)*p,S=(s+a)*_;let w,E;if(d===$i)w=(u+l)*g,E=-2*g;else if(d===Hl)w=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Is=new q,vi=new Wt,vx=new q(0,0,0),xx=new q(1,1,1),yr=new q,hl=new q,Wn=new q,Em=new Wt,wm=new ns;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yx=0;const Tm=new q,Us=new ns,Gi=new Wt,pl=new q,Vo=new q,Sx=new q,Mx=new ns,Am=new q(1,0,0),Cm=new q(0,1,0),Rm=new q(0,0,1),bm={type:"added"},Ex={type:"removed"},Fs={type:"childadded",child:null},Zu={type:"childremoved",child:null};class dn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new q,t=new Ri,s=new ns,a=new q(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?pl.copy(e):pl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Vo,pl,this.up):Gi.lookAt(pl,Vo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Gi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),x=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),w.length>0&&(s.nodes=w)}return s.object=a,s;function u(d){const h=[];for(const p in d){const _=d[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}dn.DEFAULT_UP=new q(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new q,Wi=new q,Qu=new q,Xi=new q,Os=new q,ks=new q,Pm=new q,Ju=new q,ed=new q,td=new q,nd=new Bt,id=new Bt,rd=new Bt;class si{constructor(e=new q,t=new q,s=new q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),xi.subVectors(e,t),a.cross(xi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){xi.subVectors(a,t),Wi.subVectors(s,t),Qu.subVectors(e,t);const u=xi.dot(xi),d=xi.dot(Wi),h=xi.dot(Qu),p=Wi.dot(Wi),_=Wi.dot(Qu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-d*_)*x,w=(u*_-d*h)*x;return l.set(1-S-w,w,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,a,l,u,d,h){return this.getBarycoord(e,t,s,a,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(u,Xi.y),h.addScaledVector(d,Xi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,s),rd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(nd,l.x),u.addScaledVector(id,l.y),u.addScaledVector(rd,l.z),u}static isFrontFacing(e,t,s,a){return xi.subVectors(s,t),Wi.subVectors(e,t),xi.cross(Wi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return si.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,d;Os.subVectors(a,s),ks.subVectors(l,s),Ju.subVectors(e,s);const h=Os.dot(Ju),p=ks.dot(Ju);if(h<=0&&p<=0)return t.copy(s);ed.subVectors(e,a);const _=Os.dot(ed),g=ks.dot(ed);if(_>=0&&g<=_)return t.copy(a);const x=h*g-_*p;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Os,u);td.subVectors(e,l);const S=Os.dot(td),w=ks.dot(td);if(w>=0&&S<=w)return t.copy(l);const E=S*p-h*w;if(E<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(s).addScaledVector(ks,d);const y=_*w-S*g;if(y<=0&&g-_>=0&&S-w>=0)return Pm.subVectors(l,a),d=(g-_)/(g-_+(S-w)),t.copy(a).addScaledVector(Pm,d);const v=1/(y+E+x);return u=E*v,d=x*v,t.copy(s).addScaledVector(Os,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function sd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=ox(e,1),t=Tn(t,0,1),s=Tn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=sd(u,l,e+1/3),this.g=sd(u,l,e),this.b=sd(u,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=ii){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const s=Gg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return wt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Tn(xn.r*255,0,255))*65536+Math.round(Tn(xn.g*255,0,255))*256+Math.round(Tn(xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(xn.copy(this),t);const s=xn.r,a=xn.g,l=xn.b,u=Math.max(s,a,l),d=Math.min(s,a,l);let h,p;const _=(d+u)/2;if(d===u)h=0,p=0;else{const g=u-d;switch(p=_<=.5?g/(u+d):g/(2-u-d),u){case s:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-s)/g+2;break;case l:h=(s-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ii){wt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,a=xn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(ml);const s=Hu(Sr.h,ml.h,t),a=Hu(Sr.s,ml.s,t),l=Hu(Sr.l,ml.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new _t;_t.NAMES=Gg;let wx=0;class rs extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Qo(),this.name="",this.blending=Ys,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=wd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wg extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new q,gl=new ut;class Kt{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=pm,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class Xg extends Kt{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class jg extends Kt{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Bn extends Kt{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Tx=0;const ni=new Wt,od=new dn,Bs=new q,Xn=new io,Ho=new io,ln=new q;class li extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bg(e)?jg:Xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bn(s,3))}else{for(let s=0,a=t.count;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Xn.min,Ho.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Ho.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Ho.min),Xn.expandByPoint(Ho.max))}Xn.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ln.fromBufferAttribute(d,p),h&&(Bs.fromBufferAttribute(e,p),ln.add(Bs)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let O=0;O<s.count;O++)d[O]=new q,h[O]=new q;const p=new q,_=new q,g=new q,x=new ut,S=new ut,w=new ut,E=new q,y=new q;function v(O,b,C){p.fromBufferAttribute(s,O),_.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),x.fromBufferAttribute(l,O),S.fromBufferAttribute(l,b),w.fromBufferAttribute(l,C),_.sub(p),g.sub(p),S.sub(x),w.sub(x);const V=1/(S.x*w.y-w.x*S.y);isFinite(V)&&(E.copy(_).multiplyScalar(w.y).addScaledVector(g,-S.y).multiplyScalar(V),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(V),d[O].add(E),d[b].add(E),d[C].add(E),h[O].add(y),h[b].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let O=0,b=D.length;O<b;++O){const C=D[O],V=C.start,de=C.count;for(let ee=V,fe=V+de;ee<fe;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new q,R=new q,k=new q,I=new q;function F(O){k.fromBufferAttribute(a,O),I.copy(k);const b=d[O];L.copy(b),L.sub(k.multiplyScalar(k.dot(b))).normalize(),R.crossVectors(I,b);const V=R.dot(h[O])<0?-1:1;u.setXYZW(O,L.x,L.y,L.z,V)}for(let O=0,b=D.length;O<b;++O){const C=D[O],V=C.start,de=C.count;for(let ee=V,fe=V+de;ee<fe;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const a=new q,l=new q,u=new q,d=new q,h=new q,p=new q,_=new q,g=new q;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,y),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,y),d.add(_),h.add(_),p.add(_),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(h.length*_);let S=0,w=0;for(let E=0,y=h.length;E<y;E++){d.isInterleavedBufferAttribute?S=h[E]*d.data.stride+d.offset:S=h[E]*_;for(let v=0;v<_;v++)x[w++]=p[S++]}return new Kt(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,s);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Wt,Yr=new Mf,_l=new Zl,Dm=new q,vl=new q,xl=new q,yl=new q,ad=new q,Sl=new q,Nm=new q,Ml=new q;class ai extends dn{constructor(e=new li,t=new Wg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Sl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=d[h],g=l[h];_!==0&&(ad.fromBufferAttribute(g,e),u?Sl.addScaledVector(ad,_):Sl.addScaledVector(ad.sub(t),_))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_l.copy(s.boundingSphere),_l.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(_l.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(_l,Dm)===null||Yr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Lm),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,E=x.length;w<E;w++){const y=x[w],v=u[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,k=L;R<k;R+=3){const I=d.getX(R),F=d.getX(R+1),O=d.getX(R+2);a=El(this,v,e,s,p,_,g,I,F,O),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=w,v=E;y<v;y+=3){const D=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);a=El(this,u,e,s,p,_,g,D,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,E=x.length;w<E;w++){const y=x[w],v=u[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,k=L;R<k;R+=3){const I=R,F=R+1,O=R+2;a=El(this,v,e,s,p,_,g,I,F,O),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=w,v=E;y<v;y+=3){const D=y,L=y+1,R=y+2;a=El(this,u,e,s,p,_,g,D,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ax(r,e,t,s,a,l,u,d){let h;if(e.side===kn?h=s.intersectTriangle(u,l,a,!0,d):h=s.intersectTriangle(a,l,u,e.side===br,d),h===null)return null;Ml.copy(d),Ml.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ml);return p<t.near||p>t.far?null:{distance:p,point:Ml.clone(),object:r}}function El(r,e,t,s,a,l,u,d,h,p){r.getVertexPosition(d,vl),r.getVertexPosition(h,xl),r.getVertexPosition(p,yl);const _=Ax(r,e,t,s,vl,xl,yl,Nm);if(_){const g=new q;si.getBarycoord(Nm,vl,xl,yl,g),a&&(_.uv=si.getInterpolatedAttribute(a,d,h,p,g,new ut)),l&&(_.uv1=si.getInterpolatedAttribute(l,d,h,p,g,new ut)),u&&(_.normal=si.getInterpolatedAttribute(u,d,h,p,g,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:p,normal:new q,materialIndex:0};si.getNormal(vl,xl,yl,x.normal),_.face=x,_.barycoord=g}return _}class Jo extends li{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],g=[];let x=0,S=0;w("z","y","x",-1,-1,s,t,e,u,l,0),w("z","y","x",1,-1,s,t,-e,u,l,1),w("x","z","y",1,1,e,s,t,a,u,2),w("x","z","y",1,-1,e,s,-t,a,u,3),w("x","y","z",1,-1,e,t,s,a,l,4),w("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(g,2));function w(E,y,v,D,L,R,k,I,F,O,b){const C=R/F,V=k/O,de=R/2,ee=k/2,fe=I/2,pe=F+1,le=O+1;let ce=0,z=0;const ue=new q;for(let oe=0;oe<le;oe++){const U=oe*V-ee;for(let te=0;te<pe;te++){const J=te*C-de;ue[E]=J*D,ue[y]=U*L,ue[v]=fe,p.push(ue.x,ue.y,ue.z),ue[E]=0,ue[y]=0,ue[v]=I>0?1:-1,_.push(ue.x,ue.y,ue.z),g.push(te/F),g.push(1-oe/O),ce+=1}}for(let oe=0;oe<O;oe++)for(let U=0;U<F;U++){const te=x+U+pe*oe,J=x+U+pe*(oe+1),W=x+(U+1)+pe*(oe+1),se=x+(U+1)+pe*oe;h.push(te,J,se),h.push(J,W,se),z+=6}d.addGroup(S,z,b),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=to(r[t]);for(const a in s)e[a]=s[a]}return e}function Cx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Rx={clone:to,merge:wn};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class $g extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new q,Im=new ut,Um=new ut;class ri extends $g{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Um),t.subVectors(Um,Im)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/p,a*=u.width/h,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Vs=1;class Lx extends dn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(zs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new ri(zs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new ri(zs,Vs,e,t);u.layers=this.layers,this.add(u);const d=new ri(zs,Vs,e,t);d.layers=this.layers,this.add(d);const h=new ri(zs,Vs,e,t);h.layers=this.layers,this.add(h);const p=new ri(zs,Vs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(g,x,S),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class qg extends Cn{constructor(e,t,s,a,l,u,d,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,s,a,l,u,d,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dx extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new qg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Cr});l.uniforms.tEquirect.value=t;const u=new ai(a,l),d=t.minFilter;return t.minFilter===es&&(t.minFilter=oi),new Lx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}const ld=new q,Nx=new q,Ix=new dt;class wr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=ld.subVectors(s,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(ld),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Ix.getNormalMatrix(e),a=this.coplanarPoint(ld).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Zl,wl=new q;class Ef{constructor(e=new wr,t=new wr,s=new wr,a=new wr,l=new wr,u=new wr){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],_=a[5],g=a[6],x=a[7],S=a[8],w=a[9],E=a[10],y=a[11],v=a[12],D=a[13],L=a[14],R=a[15];if(s[0].setComponents(h-l,x-p,y-S,R-v).normalize(),s[1].setComponents(h+l,x+p,y+S,R+v).normalize(),s[2].setComponents(h+u,x+_,y+w,R+D).normalize(),s[3].setComponents(h-u,x-_,y-w,R-D).normalize(),s[4].setComponents(h-d,x-g,y-E,R-L).normalize(),t===$i)s[5].setComponents(h+d,x+g,y+E,R+L).normalize();else if(t===Hl)s[5].setComponents(d,g,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kg(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Ux(r){const e=new WeakMap;function t(d,h){const p=d.array,_=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,h,p){const _=h.array,g=h.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<g.length;S++){const w=g[x],E=g[S];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++x,g[x]=E)}g.length=x+1;for(let S=0,w=g.length;S<w;S++){const E=g[S];r.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}class Ql extends li{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(a),p=d+1,_=h+1,g=e/d,x=t/h,S=[],w=[],E=[],y=[];for(let v=0;v<_;v++){const D=v*x-u;for(let L=0;L<p;L++){const R=L*g-l;w.push(R,-D,0),E.push(0,0,1),y.push(L/d),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<d;D++){const L=D+p*v,R=D+p*(v+1),k=D+1+p*(v+1),I=D+1+p*v;S.push(L,R,I),S.push(R,k,I)}this.setIndex(S),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
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
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
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
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Kx=`#ifdef USE_BUMPMAP
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sy=`#define PI 3.141592653589793
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
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ay=`vec3 transformedNormal = objectNormal;
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
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
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
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
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
#endif`,Iy=`struct PhysicalMaterial {
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
}`,Uy=`
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xy=`#if defined( USE_POINTS_UV )
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
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
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
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,PS=`#ifdef USE_TRANSMISSION
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FS=`uniform sampler2D t2D;
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`#include <common>
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
}`,HS=`#if DEPTH_PACKING == 3200
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
}`,GS=`#define DISTANCE
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
}`,WS=`#define DISTANCE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`uniform float scale;
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
}`,$S=`uniform vec3 diffuse;
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
}`,qS=`#include <common>
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
}`,KS=`uniform vec3 diffuse;
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
}`,ZS=`#define LAMBERT
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
}`,QS=`#define LAMBERT
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
}`,JS=`#define MATCAP
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
}`,eM=`#define MATCAP
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
}`,tM=`#define NORMAL
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
}`,nM=`#define NORMAL
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
}`,iM=`#define PHONG
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
}`,rM=`#define PHONG
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
}`,sM=`#define STANDARD
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
}`,oM=`#define STANDARD
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
}`,aM=`#define TOON
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
}`,lM=`#define TOON
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
}`,cM=`uniform float size;
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
}`,uM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,fM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,pM=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:kx,alphamap_pars_fragment:Bx,alphatest_fragment:zx,alphatest_pars_fragment:Vx,aomap_fragment:Hx,aomap_pars_fragment:Gx,batching_pars_vertex:Wx,batching_vertex:Xx,begin_vertex:jx,beginnormal_vertex:Yx,bsdfs:$x,iridescence_fragment:qx,bumpmap_pars_fragment:Kx,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:ey,color_fragment:ty,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ry,common:sy,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ly,displacementmap_vertex:cy,emissivemap_fragment:uy,emissivemap_pars_fragment:dy,colorspace_fragment:fy,colorspace_pars_fragment:hy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Ry,envmap_vertex:vy,fog_vertex:xy,fog_pars_vertex:yy,fog_fragment:Sy,fog_pars_fragment:My,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:wy,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:Ay,lights_pars_begin:Cy,lights_toon_fragment:by,lights_toon_pars_fragment:Py,lights_phong_fragment:Ly,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Iy,lights_fragment_begin:Uy,lights_fragment_maps:Fy,lights_fragment_end:Oy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Vy,map_fragment:Hy,map_pars_fragment:Gy,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:$y,morphcolor_vertex:qy,morphnormal_vertex:Ky,morphtarget_pars_vertex:Zy,morphtarget_vertex:Qy,normal_fragment_begin:Jy,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,opaque_fragment:cS,packing:uS,premultiplied_alpha_fragment:dS,project_vertex:fS,dithering_fragment:hS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:vS,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:SS,skinning_pars_vertex:MS,skinning_vertex:ES,skinnormal_vertex:wS,specularmap_fragment:TS,specularmap_pars_fragment:AS,tonemapping_fragment:CS,tonemapping_pars_fragment:RS,transmission_fragment:bS,transmission_pars_fragment:PS,uv_pars_fragment:LS,uv_pars_vertex:DS,uv_vertex:NS,worldpos_vertex:IS,background_vert:US,background_frag:FS,backgroundCube_vert:OS,backgroundCube_frag:kS,cube_vert:BS,cube_frag:zS,depth_vert:VS,depth_frag:HS,distanceRGBA_vert:GS,distanceRGBA_frag:WS,equirect_vert:XS,equirect_frag:jS,linedashed_vert:YS,linedashed_frag:$S,meshbasic_vert:qS,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:QS,meshmatcap_vert:JS,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:dM,shadow_frag:fM,sprite_vert:hM,sprite_frag:pM},De={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Tl={r:0,b:0,g:0},qr=new Ri,mM=new Wt;function gM(r,e,t,s,a,l,u){const d=new _t(0);let h=l===!0?0:1,p,_,g=null,x=0,S=null;function w(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?t:e).get(L)),L}function E(D){let L=!1;const R=w(D);R===null?v(d,h):R&&R.isColor&&(v(R,1),L=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,L){const R=w(L);R&&(R.isCubeTexture||R.mapping===ql)?(_===void 0&&(_=new ai(new Jo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:to(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(L.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(qr)),_.material.toneMapped=wt.getTransfer(R.colorSpace)!==Dt,(g!==R||x!==R.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=R,x=R.version,S=r.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ai(new Ql(2,2),new bi({name:"BackgroundMaterial",uniforms:to(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(R.colorSpace)!==Dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=R,x=R.version,S=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,L){D.getRGB(Tl,Yg(r)),s.buffers.color.setClear(Tl.r,Tl.g,Tl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(d,h)},render:E,addToRenderList:y}}function _M(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,u=!1;function d(C,V,de,ee,fe){let pe=!1;const le=g(ee,de,V);l!==le&&(l=le,p(l.object)),pe=S(C,ee,de,fe),pe&&w(C,ee,de,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,V,de,ee),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function g(C,V,de){const ee=de.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[V.id];pe===void 0&&(pe={},fe[V.id]=pe);let le=pe[ee];return le===void 0&&(le=x(h()),pe[ee]=le),le}function x(C){const V=[],de=[],ee=[];for(let fe=0;fe<t;fe++)V[fe]=0,de[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:de,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,V,de,ee){const fe=l.attributes,pe=V.attributes;let le=0;const ce=de.getAttributes();for(const z in ce)if(ce[z].location>=0){const oe=fe[z];let U=pe[z];if(U===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),oe===void 0||oe.attribute!==U||U&&oe.data!==U.data)return!0;le++}return l.attributesNum!==le||l.index!==ee}function w(C,V,de,ee){const fe={},pe=V.attributes;let le=0;const ce=de.getAttributes();for(const z in ce)if(ce[z].location>=0){let oe=pe[z];oe===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const U={};U.attribute=oe,oe&&oe.data&&(U.data=oe.data),fe[z]=U,le++}l.attributes=fe,l.attributesNum=le,l.index=ee}function E(){const C=l.newAttributes;for(let V=0,de=C.length;V<de;V++)C[V]=0}function y(C){v(C,0)}function v(C,V){const de=l.newAttributes,ee=l.enabledAttributes,fe=l.attributeDivisors;de[C]=1,ee[C]===0&&(r.enableVertexAttribArray(C),ee[C]=1),fe[C]!==V&&(r.vertexAttribDivisor(C,V),fe[C]=V)}function D(){const C=l.newAttributes,V=l.enabledAttributes;for(let de=0,ee=V.length;de<ee;de++)V[de]!==C[de]&&(r.disableVertexAttribArray(de),V[de]=0)}function L(C,V,de,ee,fe,pe,le){le===!0?r.vertexAttribIPointer(C,V,de,fe,pe):r.vertexAttribPointer(C,V,de,ee,fe,pe)}function R(C,V,de,ee){E();const fe=ee.attributes,pe=de.getAttributes(),le=V.defaultAttributeValues;for(const ce in pe){const z=pe[ce];if(z.location>=0){let ue=fe[ce];if(ue===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const oe=ue.normalized,U=ue.itemSize,te=e.get(ue);if(te===void 0)continue;const J=te.buffer,W=te.type,se=te.bytesPerElement,he=W===r.INT||W===r.UNSIGNED_INT||ue.gpuType===mf;if(ue.isInterleavedBufferAttribute){const ge=ue.data,Me=ge.stride,be=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let $e=0;$e<z.locationSize;$e++)v(z.location+$e,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let $e=0;$e<z.locationSize;$e++)y(z.location+$e);r.bindBuffer(r.ARRAY_BUFFER,J);for(let $e=0;$e<z.locationSize;$e++)L(z.location+$e,U/z.locationSize,W,oe,Me*se,(be+U/z.locationSize*$e)*se,he)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)v(z.location+ge,ue.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<z.locationSize;ge++)y(z.location+ge);r.bindBuffer(r.ARRAY_BUFFER,J);for(let ge=0;ge<z.locationSize;ge++)L(z.location+ge,U/z.locationSize,W,oe,U*se,U/z.locationSize*ge*se,he)}}else if(le!==void 0){const oe=le[ce];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(z.location,oe);break;case 3:r.vertexAttrib3fv(z.location,oe);break;case 4:r.vertexAttrib4fv(z.location,oe);break;default:r.vertexAttrib1fv(z.location,oe)}}}}D()}function k(){O();for(const C in s){const V=s[C];for(const de in V){const ee=V[de];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete V[de]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const de in V){const ee=V[de];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete V[de]}delete s[C.id]}function F(C){for(const V in s){const de=s[V];if(de[C.id]===void 0)continue;const ee=de[C.id];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete de[C.id]}}function O(){b(),u=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:O,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:y,disableUnusedAttributes:D}}function vM(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function u(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),t.update(_,s,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let w=0;w<g;w++)S+=_[w];t.update(S,s,1)}function h(p,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<p.length;w++)u(p[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let w=0;for(let E=0;E<g;E++)w+=_[E]*x[E];t.update(w,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function xM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==Yn&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const O=F===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yi&&!O)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=w>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:k,maxSamples:I}}function yM(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new wr,d=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||a;return a=x,s=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,S){const w=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,v=r.get(g);if(!a||w===null||w.length===0||l&&!y)l?_(null):p();else{const D=l?0:s,L=D*4;let R=v.clippingState||null;h.value=R,R=_(w,x,L,S);for(let k=0;k!==L;++k)R[k]=t[k];v.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,x,S,w){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=h.value,w!==!0||y===null){const v=S+E*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,R=S;L!==E;++L,R+=4)u.copy(g[L]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function SM(r){let e=new WeakMap;function t(u,d){return d===Dd?u.mapping=Zs:d===Nd&&(u.mapping=Qs),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Dd||d===Nd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Dx(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Zg extends $g{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Fm=[.125,.215,.35,.446,.526,.582],Jr=20,cd=new Zg,Om=new _t;let ud=null,dd=0,fd=0,hd=!1;const Zr=(1+Math.sqrt(5))/2,Hs=1/Zr,km=[new q(-Zr,Hs,0),new q(Zr,Hs,0),new q(-Hs,0,Zr),new q(Hs,0,Zr),new q(0,Zr,-Hs),new q(0,Zr,Hs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,fd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Zo,format:Yn,colorSpace:no,depthBuffer:!1},a=zm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(l)),this._blurMaterial=EM(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,s,a){const d=new ri(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Om),_.toneMapping=Rr,_.autoClear=!1;const S=new Wg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),w=new ai(new Jo,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Om),E=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(d.up.set(0,h[v],0),d.lookAt(p[v],0,0)):D===1?(d.up.set(0,0,h[v]),d.lookAt(0,p[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,p[v]));const L=this._cubeSize;Al(a,D*L,v>2?L:0,L,L),_.setRenderTarget(a),E&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Zs||e.mapping===Qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Al(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,cd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=km[(a-l-1)%km.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ai(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),E=l/w,y=isFinite(l)?1+Math.floor(_*E):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const v=[];let D=0;for(let F=0;F<Jr;++F){const O=F/E,b=Math.exp(-O*O/2);v.push(b),F===0?D+=b:F<y&&(D+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-s;const R=this._sizeLods[a],k=3*R*(a>L-Xs?a-L+Xs:0),I=4*(this._cubeSize-R);Al(t,k,I,3*R,2*R),h.setRenderTarget(t),h.render(g,cd)}}function MM(r){const e=[],t=[],s=[];let a=r;const l=r-Xs+1+Fm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>r-Xs?h=Fm[u-r+Xs-1]:u===0&&(h=0),s.push(h);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,w=6,E=3,y=2,v=1,D=new Float32Array(E*w*S),L=new Float32Array(y*w*S),R=new Float32Array(v*w*S);for(let I=0;I<S;I++){const F=I%3*2/3-1,O=I>2?0:-1,b=[F,O,0,F+2/3,O,0,F+2/3,O+1,0,F,O,0,F+2/3,O+1,0,F,O+1,0];D.set(b,E*w*I),L.set(x,y*w*I);const C=[I,I,I,I,I,I];R.set(C,v*w*I)}const k=new li;k.setAttribute("position",new Kt(D,E)),k.setAttribute("uv",new Kt(L,y)),k.setAttribute("faceIndex",new Kt(R,v)),e.push(k),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function zm(r,e,t){const s=new Pr(r,e,t);return s.texture.mapping=ql,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Al(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function EM(r,e,t){const s=new Float32Array(Jr),a=new q(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Vm(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Hm(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function wM(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,p=h===Dd||h===Nd,_=h===Zs||h===Qs;if(p||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Bm(r)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Bm(r)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function TM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Xo("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function AM(r,e,t,s){const a={},l=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const E=x.morphAttributes[w];for(let y=0,v=E.length;y<v;y++)e.remove(E[y])}x.removeEventListener("dispose",u),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const w in x)e.update(x[w],r.ARRAY_BUFFER);const S=g.morphAttributes;for(const w in S){const E=S[w];for(let y=0,v=E.length;y<v;y++)e.update(E[y],r.ARRAY_BUFFER)}}function p(g){const x=[],S=g.index,w=g.attributes.position;let E=0;if(S!==null){const D=S.array;E=S.version;for(let L=0,R=D.length;L<R;L+=3){const k=D[L+0],I=D[L+1],F=D[L+2];x.push(k,I,I,F,F,k)}}else if(w!==void 0){const D=w.array;E=w.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const k=L+0,I=L+1,F=L+2;x.push(k,I,I,F,F,k)}}else return;const y=new(Bg(x)?jg:Xg)(x,1);y.version=E;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:_}}function CM(r,e,t){let s;function a(x){s=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*u),t.update(S,s,1)}function p(x,S,w){w!==0&&(r.drawElementsInstanced(s,S,l,x*u,w),t.update(S,s,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,w);let y=0;for(let v=0;v<w;v++)y+=S[v];t.update(y,s,1)}function g(x,S,w,E){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/u,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,E,0,w);let v=0;for(let D=0;D<w;D++)v+=S[D]*E[D];t.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function RM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function bM(r,e,t){const s=new WeakMap,a=new Bt;function l(u,d,h){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){O.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),E===!0&&(R=2),y===!0&&(R=3);let k=d.attributes.position.count*R,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*I*4*g),O=new Vg(F,k,I,g);O.type=Yi,O.needsUpdate=!0;const b=R*4;for(let V=0;V<g;V++){const de=v[V],ee=D[V],fe=L[V],pe=k*I*4*V;for(let le=0;le<de.count;le++){const ce=le*b;w===!0&&(a.fromBufferAttribute(de,le),F[pe+ce+0]=a.x,F[pe+ce+1]=a.y,F[pe+ce+2]=a.z,F[pe+ce+3]=0),E===!0&&(a.fromBufferAttribute(ee,le),F[pe+ce+4]=a.x,F[pe+ce+5]=a.y,F[pe+ce+6]=a.z,F[pe+ce+7]=0),y===!0&&(a.fromBufferAttribute(fe,le),F[pe+ce+8]=a.x,F[pe+ce+9]=a.y,F[pe+ce+10]=a.z,F[pe+ce+11]=fe.itemSize===4?a.w:1)}}x={count:g,texture:O,size:new ut(k,I)},s.set(d,x),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const E=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function PM(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Qg extends Cn{constructor(e,t,s,a,l,u,d,h,p,_=$s){if(_!==$s&&_!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===$s&&(s=ts),s===void 0&&_===eo&&(s=Js),super(null,a,l,u,d,h,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jg=new Cn,Gm=new Qg(1,1),e_=new Vg,t_=new gx,n_=new qg,Wm=[],Xm=[],jm=new Float32Array(16),Ym=new Float32Array(9),$m=new Float32Array(4);function ro(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Wm[a];if(l===void 0&&(l=new Float32Array(a),Wm[a]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Jl(r,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function LM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function NM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function UM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),rn(t,s)}}function FM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Ym.set(s),r.uniformMatrix3fv(this.addr,!1,Ym),rn(t,s)}}function OM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;jm.set(s),r.uniformMatrix4fv(this.addr,!1,jm),rn(t,s)}}function kM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function HM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function jM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Gm.compareFunction=kg,l=Gm):l=Jg,t.setTexture2D(e||l,a)}function YM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||t_,a)}function $M(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||n_,a)}function qM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||e_,a)}function KM(r){switch(r){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return IM;case 35674:return UM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return kM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return qM}}function ZM(r,e){r.uniform1fv(this.addr,e)}function QM(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function JM(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function eE(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function tE(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nE(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iE(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rE(r,e){r.uniform1iv(this.addr,e)}function sE(r,e){r.uniform2iv(this.addr,e)}function oE(r,e){r.uniform3iv(this.addr,e)}function aE(r,e){r.uniform4iv(this.addr,e)}function lE(r,e){r.uniform1uiv(this.addr,e)}function cE(r,e){r.uniform2uiv(this.addr,e)}function uE(r,e){r.uniform3uiv(this.addr,e)}function dE(r,e){r.uniform4uiv(this.addr,e)}function fE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Jg,l[u])}function hE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||t_,l[u])}function pE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||n_,l[u])}function mE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||e_,l[u])}function gE(r){switch(r){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class _E{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class vE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gE(t.type)}}class xE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function qm(r,e){r.seq.push(e),r.map[e.id]=e}function yE(r,e,t){const s=r.name,a=s.length;for(pd.lastIndex=0;;){const l=pd.exec(s),u=pd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){qm(t,p===void 0?new _E(d,r,e):new vE(d,r,e));break}else{let g=t.map[d];g===void 0&&(g=new xE(d),qm(t,g)),t=g}}}class Vl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);yE(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function Km(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const SE=37297;let ME=0;function EE(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const Zm=new dt;function wE(r){wt._getMatrix(Zm,wt.workingColorSpace,r);const e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case Kl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+EE(r.getShaderSource(e),u)}else return a}function TE(r,e){const t=wE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function AE(r,e){let t;switch(e){case H0:t="Linear";break;case G0:t="Reinhard";break;case W0:t="Cineon";break;case X0:t="ACESFilmic";break;case Y0:t="AgX";break;case $0:t="Neutral";break;case j0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new q;function CE(){wt.getLuminanceCoefficients(Cl);const r=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function bE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function PE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function jo(r){return r!==""}function Jm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(r){return r.replace(LE,NE)}const DE=new Map;function NE(r,e){let t=ft[e];if(t===void 0){const s=DE.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(r){return r.replace(IE,UE)}function UE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ng(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function FE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function OE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function BE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case V0:e="ENVMAP_BLENDING_ADD";break}return e}function zE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function VE(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=FE(t),p=OE(t),_=kE(t),g=BE(t),x=zE(t),S=RE(t),w=bE(l),E=a.createProgram();let y,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(jo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(y=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Rr?AE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,TE("linearToOutputTexel",t.outputColorSpace),CE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),u=uf(u),u=Jm(u,t),u=eg(u,t),d=uf(d),d=Jm(d,t),d=eg(d,t),u=tg(u),d=tg(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+y+u,R=D+v+d,k=Km(a,a.VERTEX_SHADER,L),I=Km(a,a.FRAGMENT_SHADER,R);a.attachShader(E,k),a.attachShader(E,I),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function F(V){if(r.debug.checkShaderErrors){const de=a.getProgramInfoLog(E).trim(),ee=a.getShaderInfoLog(k).trim(),fe=a.getShaderInfoLog(I).trim();let pe=!0,le=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,E,k,I);else{const ce=Qm(a,k,"vertex"),z=Qm(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+de+`
`+ce+`
`+z)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(ee===""||fe==="")&&(le=!1);le&&(V.diagnostics={runnable:pe,programLog:de,vertexShader:{log:ee,prefix:y},fragmentShader:{log:fe,prefix:v}})}a.deleteShader(k),a.deleteShader(I),O=new Vl(a,E),b=PE(a,E)}let O;this.getUniforms=function(){return O===void 0&&F(this),O};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(E,SE)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ME++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=I,this}let HE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new WE(e),t.set(e,s)),s}}class WE{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}}function XE(r,e,t,s,a,l,u){const d=new Hg,h=new GE,p=new Set,_=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,C,V,de,ee){const fe=de.fog,pe=ee.geometry,le=b.isMeshStandardMaterial?de.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||le),z=ce&&ce.mapping===ql?ce.image.height:null,ue=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=oe!==void 0?oe.length:0;let te=0;pe.morphAttributes.position!==void 0&&(te=1),pe.morphAttributes.normal!==void 0&&(te=2),pe.morphAttributes.color!==void 0&&(te=3);let J,W,se,he;if(ue){const Mt=Ai[ue];J=Mt.vertexShader,W=Mt.fragmentShader}else J=b.vertexShader,W=b.fragmentShader,h.update(b),se=h.getVertexShaderID(b),he=h.getFragmentShaderID(b);const ge=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),be=ee.isInstancedMesh===!0,$e=ee.isBatchedMesh===!0,yt=!!b.map,pt=!!b.matcap,Lt=!!ce,j=!!b.aoMap,jt=!!b.lightMap,st=!!b.bumpMap,lt=!!b.normalMap,Ke=!!b.displacementMap,St=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,T=b.anisotropy>0,Z=b.clearcoat>0,me=b.dispersion>0,ye=b.iridescence>0,_e=b.sheen>0,We=b.transmission>0,Pe=T&&!!b.anisotropyMap,Fe=Z&&!!b.clearcoatMap,ht=Z&&!!b.clearcoatNormalMap,Te=Z&&!!b.clearcoatRoughnessMap,ke=ye&&!!b.iridescenceMap,et=ye&&!!b.iridescenceThicknessMap,tt=_e&&!!b.sheenColorMap,Be=_e&&!!b.sheenRoughnessMap,mt=!!b.specularMap,ot=!!b.specularColorMap,bt=!!b.specularIntensityMap,G=We&&!!b.transmissionMap,Le=We&&!!b.thicknessMap,ae=!!b.gradientMap,ve=!!b.alphaMap,Ie=b.alphaTest>0,Ne=!!b.alphaHash,at=!!b.extensions;let Ft=Rr;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const Zt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:W,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:$e,batchingColor:$e&&ee._colorsTexture!==null,instancing:be,instancingColor:be&&ee.instanceColor!==null,instancingMorph:be&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:no,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:pt,envMap:Lt,envMapMode:Lt&&ce.mapping,envMapCubeUVHeight:z,aoMap:j,lightMap:jt,bumpMap:st,normalMap:lt,displacementMap:x&&Ke,emissiveMap:St,normalMapObjectSpace:lt&&b.normalMapType===Q0,normalMapTangentSpace:lt&&b.normalMapType===Sf,metalnessMap:Ge,roughnessMap:P,anisotropy:T,anisotropyMap:Pe,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ht,clearcoatRoughnessMap:Te,dispersion:me,iridescence:ye,iridescenceMap:ke,iridescenceThicknessMap:et,sheen:_e,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:ot,specularIntensityMap:bt,transmission:We,transmissionMap:G,thicknessMap:Le,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Ne,combine:b.combine,mapUv:yt&&E(b.map.channel),aoMapUv:j&&E(b.aoMap.channel),lightMapUv:jt&&E(b.lightMap.channel),bumpMapUv:st&&E(b.bumpMap.channel),normalMapUv:lt&&E(b.normalMap.channel),displacementMapUv:Ke&&E(b.displacementMap.channel),emissiveMapUv:St&&E(b.emissiveMap.channel),metalnessMapUv:Ge&&E(b.metalnessMap.channel),roughnessMapUv:P&&E(b.roughnessMap.channel),anisotropyMapUv:Pe&&E(b.anisotropyMap.channel),clearcoatMapUv:Fe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(b.sheenRoughnessMap.channel),specularMapUv:mt&&E(b.specularMap.channel),specularColorMapUv:ot&&E(b.specularColorMap.channel),specularIntensityMapUv:bt&&E(b.specularIntensityMap.channel),transmissionMapUv:G&&E(b.transmissionMap.channel),thicknessMapUv:Le&&E(b.thicknessMap.channel),alphaMapUv:ve&&E(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(lt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(yt||ve),fog:!!fe,useFog:b.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Me,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:St&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jn,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)C.push(V),C.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(D(C,b),L(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function D(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const C=w[b.type];let V;if(C){const de=Ai[C];V=Rx.clone(de.uniforms)}else V=b.uniforms;return V}function k(b,C){let V;for(let de=0,ee=_.length;de<ee;de++){const fe=_[de];if(fe.cacheKey===C){V=fe,++V.usedTimes;break}}return V===void 0&&(V=new VE(r,C,b,l),_.push(V)),V}function I(b){if(--b.usedTimes===0){const C=_.indexOf(b);_[C]=_[_.length-1],_.pop(),b.destroy()}}function F(b){h.remove(b)}function O(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:k,releaseProgram:I,releaseShaderCache:F,programs:_,dispose:O}}function jE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function a(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function YE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(g,x,S,w,E,y){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:w,renderOrder:g.renderOrder,z:E,group:y},r[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=w,v.renderOrder=g.renderOrder,v.z=E,v.group=y),e++,v}function d(g,x,S,w,E,y){const v=u(g,x,S,w,E,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,x,S,w,E,y){const v=u(g,x,S,w,E,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||YE),s.length>1&&s.sort(x||ig),a.length>1&&a.sort(x||ig)}function _(){for(let g=e,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:_,sort:p}}function $E(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new rg,r.set(s,[u])):a>=l.length?(u=new rg,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function qE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new _t};break;case"SpotLight":t={position:new q,direction:new q,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function KE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZE=0;function QE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JE(r){const e=new qE,t=KE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const a=new q,l=new Wt,u=new Wt;function d(p){let _=0,g=0,x=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,w=0,E=0,y=0,v=0,D=0,L=0,R=0,k=0,I=0,F=0;p.sort(QE);for(let b=0,C=p.length;b<C;b++){const V=p[b],de=V.color,ee=V.intensity,fe=V.distance,pe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=de.r*ee,g+=de.g*ee,x+=de.b*ee;else if(V.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector(V.sh.coefficients[le],ee);F++}else if(V.isDirectionalLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ce=V.shadow,z=t.get(V);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=V.shadow.matrix,D++}s.directional[S]=le,S++}else if(V.isSpotLight){const le=e.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(de).multiplyScalar(ee),le.distance=fe,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,s.spot[E]=le;const ce=V.shadow;if(V.map&&(s.spotLightMap[k]=V.map,k++,ce.updateMatrices(V),V.castShadow&&I++),s.spotLightMatrix[E]=ce.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,s.spotShadow[E]=z,s.spotShadowMap[E]=pe,R++}E++}else if(V.isRectAreaLight){const le=e.get(V);le.color.copy(de).multiplyScalar(ee),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=le,y++}else if(V.isPointLight){const le=e.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity),le.distance=V.distance,le.decay=V.decay,V.castShadow){const ce=V.shadow,z=t.get(V);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,s.pointShadow[w]=z,s.pointShadowMap[w]=pe,s.pointShadowMatrix[w]=V.shadow.matrix,L++}s.point[w]=le,w++}else if(V.isHemisphereLight){const le=e.get(V);le.skyColor.copy(V.color).multiplyScalar(ee),le.groundColor.copy(V.groundColor).multiplyScalar(ee),s.hemi[v]=le,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const O=s.hash;(O.directionalLength!==S||O.pointLength!==w||O.spotLength!==E||O.rectAreaLength!==y||O.hemiLength!==v||O.numDirectionalShadows!==D||O.numPointShadows!==L||O.numSpotShadows!==R||O.numSpotMaps!==k||O.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=y,s.point.length=w,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+k-I,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,O.directionalLength=S,O.pointLength=w,O.spotLength=E,O.rectAreaLength=y,O.hemiLength=v,O.numDirectionalShadows=D,O.numPointShadows=L,O.numSpotShadows=R,O.numSpotMaps=k,O.numLightProbes=F,s.version=ZE++)}function h(p,_){let g=0,x=0,S=0,w=0,E=0;const y=_.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const L=p[v];if(L.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(L.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(L.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=s.hemi[E];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),E++}}}return{setup:d,setupView:h,state:s}}function sg(r){const e=new JE(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function u(_){s.push(_)}function d(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function ew(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new sg(r),e.set(a,[d])):l>=u.length?(d=new sg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class tw extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nw extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rw=`uniform sampler2D shadow_pass;
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
}`;function sw(r,e,t){let s=new Ef;const a=new ut,l=new ut,u=new Bt,d=new tw({depthPacking:Z0}),h=new nw,p={},_=t.maxTextureSize,g={[br]:kn,[kn]:br,[jn]:jn},x=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:iw,fragmentShader:rw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new li;w.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ai(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ag;let v=this.type;this.render=function(I,F,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),de=r.state;de.setBlending(Cr),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ee=v!==ji&&this.type===ji,fe=v===ji&&this.type!==ji;for(let pe=0,le=I.length;pe<le;pe++){const ce=I[pe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ue=z.getFrameExtents();if(a.multiply(ue),l.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ue.x),a.x=l.x*ue.x,z.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ue.y),a.y=l.y*ue.y,z.mapSize.y=l.y)),z.map===null||ee===!0||fe===!0){const U=this.type!==ji?{minFilter:An,magFilter:An}:{};z.map!==null&&z.map.dispose(),z.map=new Pr(a.x,a.y,U),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const oe=z.getViewportCount();for(let U=0;U<oe;U++){const te=z.getViewport(U);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),de.viewport(u),z.updateMatrices(ce,U),s=z.getFrustum(),R(F,O,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===ji&&D(z,O),z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(b,C,V)};function D(I,F){const O=e.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Pr(a.x,a.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,O,x,E,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,O,S,E,null)}function L(I,F,O,b){let C=null;const V=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)C=V;else if(C=O.isPointLight===!0?h:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const de=C.uuid,ee=F.uuid;let fe=p[de];fe===void 0&&(fe={},p[de]=fe);let pe=fe[ee];pe===void 0&&(pe=C.clone(),fe[ee]=pe,F.addEventListener("dispose",k)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,b===ji?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const de=r.properties.get(C);de.light=O}return C}function R(I,F,O,b,C){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ji)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),fe=I.material;if(Array.isArray(fe)){const pe=ee.groups;for(let le=0,ce=pe.length;le<ce;le++){const z=pe[le],ue=fe[z.materialIndex];if(ue&&ue.visible){const oe=L(I,ue,b,C);I.onBeforeShadow(r,I,F,O,ee,oe,z),r.renderBufferDirect(O,null,ee,oe,I,z),I.onAfterShadow(r,I,F,O,ee,oe,z)}}}else if(fe.visible){const pe=L(I,fe,b,C);I.onBeforeShadow(r,I,F,O,ee,pe,null),r.renderBufferDirect(O,null,ee,pe,I,null),I.onAfterShadow(r,I,F,O,ee,pe,null)}}const de=I.children;for(let ee=0,fe=de.length;ee<fe;ee++)R(de[ee],F,O,b,C)}function k(I){I.target.removeEventListener("dispose",k);for(const O in p){const b=p[O],C=I.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const ow={[Td]:Ad,[Cd]:Pd,[Rd]:Ld,[Ks]:bd,[Ad]:Td,[Pd]:Cd,[Ld]:Rd,[bd]:Ks};function aw(r,e){function t(){let G=!1;const Le=new Bt;let ae=null;const ve=new Bt(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!G&&(r.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,Ne,at,Ft,Zt){Zt===!0&&(Ie*=Ft,Ne*=Ft,at*=Ft),Le.set(Ie,Ne,at,Ft),ve.equals(Le)===!1&&(r.clearColor(Ie,Ne,at,Ft),ve.copy(Le))},reset:function(){G=!1,ae=null,ve.set(-1,0,0,0)}}}function s(){let G=!1,Le=!1,ae=null,ve=null,Ie=null;return{setReversed:function(Ne){if(Le!==Ne){const at=e.get("EXT_clip_control");Le?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Le=Ne},getReversed:function(){return Le},setTest:function(Ne){Ne?ge(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!G&&(r.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(Le&&(Ne=ow[Ne]),ve!==Ne){switch(Ne){case Td:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Cd:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Rd:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Pd:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ie!==Ne&&(Le&&(Ne=1-Ne),r.clearDepth(Ne),Ie=Ne)},reset:function(){G=!1,ae=null,ve=null,Ie=null,Le=!1}}}function a(){let G=!1,Le=null,ae=null,ve=null,Ie=null,Ne=null,at=null,Ft=null,Zt=null;return{setTest:function(Mt){G||(Mt?ge(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!G&&(r.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Rn,yn){(ae!==Mt||ve!==Rn||Ie!==yn)&&(r.stencilFunc(Mt,Rn,yn),ae=Mt,ve=Rn,Ie=yn)},setOp:function(Mt,Rn,yn){(Ne!==Mt||at!==Rn||Ft!==yn)&&(r.stencilOp(Mt,Rn,yn),Ne=Mt,at=Rn,Ft=yn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){Zt!==Mt&&(r.clearStencil(Mt),Zt=Mt)},reset:function(){G=!1,Le=null,ae=null,ve=null,Ie=null,Ne=null,at=null,Ft=null,Zt=null}}}const l=new t,u=new s,d=new a,h=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],w=null,E=!1,y=null,v=null,D=null,L=null,R=null,k=null,I=null,F=new _t(0,0,0),O=0,b=!1,C=null,V=null,de=null,ee=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ce=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),le=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),le=ce>=2);let ue=null,oe={};const U=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),J=new Bt().fromArray(U),W=new Bt().fromArray(te);function se(G,Le,ae,ve){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(G,Ne),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<ae;at++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Le+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const he={};he[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ge(r.DEPTH_TEST),u.setFunc(Ks),st(!1),lt(cm),ge(r.CULL_FACE),j(Cr);function ge(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function Me(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function be(G,Le){return g[G]!==Le?(r.bindFramebuffer(G,Le),g[G]=Le,G===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),G===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function $e(G,Le){let ae=S,ve=!1;if(G){ae=x.get(Le),ae===void 0&&(ae=[],x.set(Le,ae));const Ie=G.textures;if(ae.length!==Ie.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,at=Ie.length;Ne<at;Ne++)ae[Ne]=r.COLOR_ATTACHMENT0+Ne;ae.length=Ie.length,ve=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ae)}function yt(G){return w!==G?(r.useProgram(G),w=G,!0):!1}const pt={[Qr]:r.FUNC_ADD,[E0]:r.FUNC_SUBTRACT,[w0]:r.FUNC_REVERSE_SUBTRACT};pt[T0]=r.MIN,pt[A0]=r.MAX;const Lt={[C0]:r.ZERO,[R0]:r.ONE,[b0]:r.SRC_COLOR,[Ed]:r.SRC_ALPHA,[U0]:r.SRC_ALPHA_SATURATE,[N0]:r.DST_COLOR,[L0]:r.DST_ALPHA,[P0]:r.ONE_MINUS_SRC_COLOR,[wd]:r.ONE_MINUS_SRC_ALPHA,[I0]:r.ONE_MINUS_DST_COLOR,[D0]:r.ONE_MINUS_DST_ALPHA,[F0]:r.CONSTANT_COLOR,[O0]:r.ONE_MINUS_CONSTANT_COLOR,[k0]:r.CONSTANT_ALPHA,[B0]:r.ONE_MINUS_CONSTANT_ALPHA};function j(G,Le,ae,ve,Ie,Ne,at,Ft,Zt,Mt){if(G===Cr){E===!0&&(Me(r.BLEND),E=!1);return}if(E===!1&&(ge(r.BLEND),E=!0),G!==M0){if(G!==y||Mt!==b){if((v!==Qr||R!==Qr)&&(r.blendEquation(r.FUNC_ADD),v=Qr,R=Qr),Mt)switch(G){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.ONE,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,k=null,I=null,F.set(0,0,0),O=0,y=G,b=Mt}return}Ie=Ie||Le,Ne=Ne||ae,at=at||ve,(Le!==v||Ie!==R)&&(r.blendEquationSeparate(pt[Le],pt[Ie]),v=Le,R=Ie),(ae!==D||ve!==L||Ne!==k||at!==I)&&(r.blendFuncSeparate(Lt[ae],Lt[ve],Lt[Ne],Lt[at]),D=ae,L=ve,k=Ne,I=at),(Ft.equals(F)===!1||Zt!==O)&&(r.blendColor(Ft.r,Ft.g,Ft.b,Zt),F.copy(Ft),O=Zt),y=G,b=!1}function jt(G,Le){G.side===jn?Me(r.CULL_FACE):ge(r.CULL_FACE);let ae=G.side===kn;Le&&(ae=!ae),st(ae),G.blending===Ys&&G.transparent===!1?j(Cr):j(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const ve=G.stencilWrite;d.setTest(ve),ve&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),St(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function lt(G){G!==x0?(ge(r.CULL_FACE),G!==V&&(G===cm?r.cullFace(r.BACK):G===y0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),V=G}function Ke(G){G!==de&&(le&&r.lineWidth(G),de=G)}function St(G,Le,ae){G?(ge(r.POLYGON_OFFSET_FILL),(ee!==Le||fe!==ae)&&(r.polygonOffset(Le,ae),ee=Le,fe=ae)):Me(r.POLYGON_OFFSET_FILL)}function Ge(G){G?ge(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function P(G){G===void 0&&(G=r.TEXTURE0+pe-1),ue!==G&&(r.activeTexture(G),ue=G)}function T(G,Le,ae){ae===void 0&&(ue===null?ae=r.TEXTURE0+pe-1:ae=ue);let ve=oe[ae];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ae]=ve),(ve.type!==G||ve.texture!==Le)&&(ue!==ae&&(r.activeTexture(ae),ue=ae),r.bindTexture(G,Le||he[G]),ve.type=G,ve.texture=Le)}function Z(){const G=oe[ue];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){J.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function Be(G){W.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),W.copy(G))}function mt(G,Le){let ae=p.get(Le);ae===void 0&&(ae=new WeakMap,p.set(Le,ae));let ve=ae.get(G);ve===void 0&&(ve=r.getUniformBlockIndex(Le,G.name),ae.set(G,ve))}function ot(G,Le){const ve=p.get(Le).get(G);h.get(Le)!==ve&&(r.uniformBlockBinding(Le,ve,G.__bindingPointIndex),h.set(Le,ve))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ue=null,oe={},g={},x=new WeakMap,S=[],w=null,E=!1,y=null,v=null,D=null,L=null,R=null,k=null,I=null,F=new _t(0,0,0),O=0,b=!1,C=null,V=null,de=null,ee=null,fe=null,J.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ge,disable:Me,bindFramebuffer:be,drawBuffers:$e,useProgram:yt,setBlending:j,setMaterial:jt,setFlipSided:st,setCullFace:lt,setLineWidth:Ke,setPolygonOffset:St,setScissorTest:Ge,activeTexture:P,bindTexture:T,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ye,texImage2D:ke,texImage3D:et,updateUBOMapping:mt,uniformBlockBinding:ot,texStorage2D:ht,texStorage3D:Te,texSubImage2D:_e,texSubImage3D:We,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:bt}}function og(r,e,t,s){const a=lw(s);switch(t){case Lg:return r*e;case Ng:return r*e;case Ig:return r*e*2;case Ug:return r*e/a.components*a.byteLength;case vf:return r*e/a.components*a.byteLength;case Fg:return r*e*2/a.components*a.byteLength;case xf:return r*e*2/a.components*a.byteLength;case Dg:return r*e*3/a.components*a.byteLength;case Yn:return r*e*4/a.components*a.byteLength;case yf:return r*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:case Bd:return Math.max(r,16)*Math.max(e,8)/4;case Fd:case kd:return Math.max(r,8)*Math.max(e,8)/2;case zd:case Vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zl:case rf:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Og:case of:return Math.ceil(r/4)*Math.ceil(e/4)*8;case af:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lw(r){switch(r){case Ci:case Rg:return{byteLength:1,components:1};case $o:case bg:case Zo:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case ts:case mf:case Yi:return{byteLength:4,components:1};case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function cw(r,e,t,s,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):Gl("canvas")}function E(P,T,Z){let me=1;const ye=Ge(P);if((ye.width>Z||ye.height>Z)&&(me=Z/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const _e=Math.floor(me*ye.width),We=Math.floor(me*ye.height);g===void 0&&(g=w(_e,We));const Pe=T?w(_e,We):g;return Pe.width=_e,Pe.height=We,Pe.getContext("2d").drawImage(P,0,0,_e,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+_e+"x"+We+")."),Pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,T,Z,me,ye=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e=T;if(T===r.RED&&(Z===r.FLOAT&&(_e=r.R32F),Z===r.HALF_FLOAT&&(_e=r.R16F),Z===r.UNSIGNED_BYTE&&(_e=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(_e=r.R8UI),Z===r.UNSIGNED_SHORT&&(_e=r.R16UI),Z===r.UNSIGNED_INT&&(_e=r.R32UI),Z===r.BYTE&&(_e=r.R8I),Z===r.SHORT&&(_e=r.R16I),Z===r.INT&&(_e=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(_e=r.RG32F),Z===r.HALF_FLOAT&&(_e=r.RG16F),Z===r.UNSIGNED_BYTE&&(_e=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(_e=r.RG8UI),Z===r.UNSIGNED_SHORT&&(_e=r.RG16UI),Z===r.UNSIGNED_INT&&(_e=r.RG32UI),Z===r.BYTE&&(_e=r.RG8I),Z===r.SHORT&&(_e=r.RG16I),Z===r.INT&&(_e=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(_e=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(_e=r.RGB16UI),Z===r.UNSIGNED_INT&&(_e=r.RGB32UI),Z===r.BYTE&&(_e=r.RGB8I),Z===r.SHORT&&(_e=r.RGB16I),Z===r.INT&&(_e=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(_e=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(_e=r.RGBA16UI),Z===r.UNSIGNED_INT&&(_e=r.RGBA32UI),Z===r.BYTE&&(_e=r.RGBA8I),Z===r.SHORT&&(_e=r.RGBA16I),Z===r.INT&&(_e=r.RGBA32I)),T===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(_e=r.RGB9_E5),T===r.RGBA){const We=ye?Kl:wt.getTransfer(me);Z===r.FLOAT&&(_e=r.RGBA32F),Z===r.HALF_FLOAT&&(_e=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(_e=We===Dt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function R(P,T){let Z;return P?T===null||T===ts||T===Js?Z=r.DEPTH24_STENCIL8:T===Yi?Z=r.DEPTH32F_STENCIL8:T===$o&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===Js?Z=r.DEPTH_COMPONENT24:T===Yi?Z=r.DEPTH_COMPONENT32F:T===$o&&(Z=r.DEPTH_COMPONENT16),Z}function k(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){const T=P.target;T.removeEventListener("dispose",I),O(T),T.isVideoTexture&&_.delete(T)}function F(P){const T=P.target;T.removeEventListener("dispose",F),C(T)}function O(P){const T=s.get(P);if(T.__webglInit===void 0)return;const Z=P.source,me=x.get(Z);if(me){const ye=me[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&b(P),Object.keys(me).length===0&&x.delete(Z)}s.remove(P)}function b(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const Z=P.source,me=x.get(Z);delete me[T.__cacheKey],u.memory.textures--}function C(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ye=0;ye<T.__webglFramebuffer[me].length;ye++)r.deleteFramebuffer(T.__webglFramebuffer[me][ye]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=P.textures;for(let me=0,ye=Z.length;me<ye;me++){const _e=s.get(Z[me]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),u.memory.textures--),s.remove(Z[me])}s.remove(P)}let V=0;function de(){V=0}function ee(){const P=V;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),V+=1,P}function fe(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function pe(P,T){const Z=s.get(P);if(P.isVideoTexture&&Ke(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(Z,P,T);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function le(P,T){const Z=s.get(P);if(P.version>0&&Z.__version!==P.version){W(Z,P,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function ce(P,T){const Z=s.get(P);if(P.version>0&&Z.__version!==P.version){W(Z,P,T);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function z(P,T){const Z=s.get(P);if(P.version>0&&Z.__version!==P.version){se(Z,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const ue={[Id]:r.REPEAT,[Ar]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},oe={[An]:r.NEAREST,[q0]:r.NEAREST_MIPMAP_NEAREST,[al]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Vu]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},U={[J0]:r.NEVER,[sx]:r.ALWAYS,[ex]:r.LESS,[kg]:r.LEQUAL,[tx]:r.EQUAL,[rx]:r.GEQUAL,[nx]:r.GREATER,[ix]:r.NOTEQUAL};function te(P,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===Vu||T.magFilter===al||T.magFilter===es||T.minFilter===oi||T.minFilter===Vu||T.minFilter===al||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ue[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ue[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ue[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,oe[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==al&&T.minFilter!==es||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function J(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I));const me=T.source;let ye=x.get(me);ye===void 0&&(ye={},x.set(me,ye));const _e=fe(T);if(_e!==P.__cacheKey){ye[_e]===void 0&&(ye[_e]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ye[_e].usedTimes++;const We=ye[P.__cacheKey];We!==void 0&&(ye[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(T)),P.__cacheKey=_e,P.__webglTexture=ye[_e].texture}return Z}function W(P,T,Z){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const ye=J(P,T),_e=T.source;t.bindTexture(me,P.__webglTexture,r.TEXTURE0+Z);const We=s.get(_e);if(_e.version!==We.__version||ye===!0){t.activeTexture(r.TEXTURE0+Z);const Pe=wt.getPrimaries(wt.workingColorSpace),Fe=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),ht=T.colorSpace===Tr||Pe===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Te=E(T.image,!1,a.maxTextureSize);Te=St(T,Te);const ke=l.convert(T.format,T.colorSpace),et=l.convert(T.type);let tt=L(T.internalFormat,ke,et,T.colorSpace,T.isVideoTexture);te(me,T);let Be;const mt=T.mipmaps,ot=T.isVideoTexture!==!0,bt=We.__version===void 0||ye===!0,G=_e.dataReady,Le=k(T,Te);if(T.isDepthTexture)tt=R(T.format===eo,T.type),bt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,tt,Te.width,Te.height):t.texImage2D(r.TEXTURE_2D,0,tt,Te.width,Te.height,0,ke,et,null));else if(T.isDataTexture)if(mt.length>0){ot&&bt&&t.texStorage2D(r.TEXTURE_2D,Le,tt,mt[0].width,mt[0].height);for(let ae=0,ve=mt.length;ae<ve;ae++)Be=mt[ae],ot?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,ke,et,Be.data);T.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(r.TEXTURE_2D,Le,tt,Te.width,Te.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te.width,Te.height,ke,et,Te.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Te.width,Te.height,0,ke,et,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,tt,mt[0].width,mt[0].height,Te.depth);for(let ae=0,ve=mt.length;ae<ve;ae++)if(Be=mt[ae],T.format!==Yn)if(ke!==null)if(ot){if(G)if(T.layerUpdates.size>0){const Ie=og(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const at=Be.data.subarray(Ne*Ie/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Ne,Be.width,Be.height,1,ke,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Te.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,tt,Be.width,Be.height,Te.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Te.depth,ke,et,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,tt,Be.width,Be.height,Te.depth,0,ke,et,Be.data)}else{ot&&bt&&t.texStorage2D(r.TEXTURE_2D,Le,tt,mt[0].width,mt[0].height);for(let ae=0,ve=mt.length;ae<ve;ae++)Be=mt[ae],T.format!==Yn?ke!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(r.TEXTURE_2D,ae,tt,Be.width,Be.height,0,ke,et,Be.data)}else if(T.isDataArrayTexture)if(ot){if(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,tt,Te.width,Te.height,Te.depth),G)if(T.layerUpdates.size>0){const ae=og(Te.width,Te.height,T.format,T.type);for(const ve of T.layerUpdates){const Ie=Te.data.subarray(ve*ae/Te.data.BYTES_PER_ELEMENT,(ve+1)*ae/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Te.width,Te.height,1,ke,et,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ke,et,Te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Te.width,Te.height,Te.depth,0,ke,et,Te.data);else if(T.isData3DTexture)ot?(bt&&t.texStorage3D(r.TEXTURE_3D,Le,tt,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ke,et,Te.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Te.width,Te.height,Te.depth,0,ke,et,Te.data);else if(T.isFramebufferTexture){if(bt)if(ot)t.texStorage2D(r.TEXTURE_2D,Le,tt,Te.width,Te.height);else{let ae=Te.width,ve=Te.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,tt,ae,ve,0,ke,et,null),ae>>=1,ve>>=1}}else if(mt.length>0){if(ot&&bt){const ae=Ge(mt[0]);t.texStorage2D(r.TEXTURE_2D,Le,tt,ae.width,ae.height)}for(let ae=0,ve=mt.length;ae<ve;ae++)Be=mt[ae],ot?G&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ke,et,Be):t.texImage2D(r.TEXTURE_2D,ae,tt,ke,et,Be);T.generateMipmaps=!1}else if(ot){if(bt){const ae=Ge(Te);t.texStorage2D(r.TEXTURE_2D,Le,tt,ae.width,ae.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,et,Te)}else t.texImage2D(r.TEXTURE_2D,0,tt,ke,et,Te);y(T)&&v(me),We.__version=_e.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function se(P,T,Z){if(T.image.length!==6)return;const me=J(P,T),ye=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const _e=s.get(ye);if(ye.version!==_e.__version||me===!0){t.activeTexture(r.TEXTURE0+Z);const We=wt.getPrimaries(wt.workingColorSpace),Pe=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Tr||We===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let ve=0;ve<6;ve++)!ht&&!Te?ke[ve]=E(T.image[ve],!0,a.maxCubemapSize):ke[ve]=Te?T.image[ve].image:T.image[ve],ke[ve]=St(T,ke[ve]);const et=ke[0],tt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),mt=L(T.internalFormat,tt,Be,T.colorSpace),ot=T.isVideoTexture!==!0,bt=_e.__version===void 0||me===!0,G=ye.dataReady;let Le=k(T,et);te(r.TEXTURE_CUBE_MAP,T);let ae;if(ht){ot&&bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,mt,et.width,et.height);for(let ve=0;ve<6;ve++){ae=ke[ve].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const Ne=ae[Ie];T.format!==Yn?tt!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Ne.width,Ne.height,tt,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Ne.width,Ne.height,tt,Be,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,Ne.width,Ne.height,0,tt,Be,Ne.data)}}}else{if(ae=T.mipmaps,ot&&bt){ae.length>0&&Le++;const ve=Ge(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Te){ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke[ve].width,ke[ve].height,tt,Be,ke[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,ke[ve].width,ke[ve].height,0,tt,Be,ke[ve].data);for(let Ie=0;Ie<ae.length;Ie++){const at=ae[Ie].image[ve].image;ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,at.width,at.height,tt,Be,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,at.width,at.height,0,tt,Be,at.data)}}else{ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,tt,Be,ke[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,tt,Be,ke[ve]);for(let Ie=0;Ie<ae.length;Ie++){const Ne=ae[Ie];ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,tt,Be,Ne.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,tt,Be,Ne.image[ve])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),_e.__version=ye.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function he(P,T,Z,me,ye,_e){const We=l.convert(Z.format,Z.colorSpace),Pe=l.convert(Z.type),Fe=L(Z.internalFormat,We,Pe,Z.colorSpace),ht=s.get(T),Te=s.get(Z);if(Te.__renderTarget=T,!ht.__hasExternalTextures){const ke=Math.max(1,T.width>>_e),et=Math.max(1,T.height>>_e);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,_e,Fe,ke,et,T.depth,0,We,Pe,null):t.texImage2D(ye,_e,Fe,ke,et,0,We,Pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),lt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ye,Te.__webglTexture,0,st(T)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ye,Te.__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(P,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const me=T.depthTexture,ye=me&&me.isDepthTexture?me.type:null,_e=R(T.stencilBuffer,ye),We=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=st(T);lt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,_e,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,_e,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,_e,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,P)}else{const me=T.textures;for(let ye=0;ye<me.length;ye++){const _e=me[ye],We=l.convert(_e.format,_e.colorSpace),Pe=l.convert(_e.type),Fe=L(_e.internalFormat,We,Pe,_e.colorSpace),ht=st(T);Z&&lt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,Fe,T.width,T.height):lt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,Fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ye=me.__webglTexture,_e=st(T);if(T.depthTexture.format===$s)lt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(T.depthTexture.format===eo)lt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function be(P){const T=s.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=me}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Me(T.__webglFramebuffer,P)}else if(Z){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),ge(T.__webglDepthbuffer[me],P,!1);else{const ye=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ge(T.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,T,Z){const me=s.get(P);T!==void 0&&he(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&be(P)}function yt(P){const T=P.texture,Z=s.get(P),me=s.get(T);P.addEventListener("dispose",F);const ye=P.textures,_e=P.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,u.memory.textures++),_e){Z.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)Z.__webglFramebuffer[Pe][Fe]=r.createFramebuffer()}else Z.__webglFramebuffer[Pe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Z.__webglFramebuffer[Pe]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(We)for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++){const ht=s.get(ye[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&lt(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){const Fe=ye[Pe];Z.__webglColorRenderbuffer[Pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);const ht=l.convert(Fe.format,Fe.colorSpace),Te=l.convert(Fe.type),ke=L(Fe.internalFormat,ht,Te,Fe.colorSpace,P.isXRRenderTarget===!0),et=st(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,ke,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),te(r.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)he(Z.__webglFramebuffer[Pe][Fe],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else he(Z.__webglFramebuffer[Pe],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);y(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++){const ht=ye[Pe],Te=s.get(ht);t.bindTexture(r.TEXTURE_2D,Te.__webglTexture),te(r.TEXTURE_2D,ht),he(Z.__webglFramebuffer,P,ht,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,0),y(ht)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Pe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,me.__webglTexture),te(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)he(Z.__webglFramebuffer[Fe],P,T,r.COLOR_ATTACHMENT0,Pe,Fe);else he(Z.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Pe,0);y(T)&&v(Pe),t.unbindTexture()}P.depthBuffer&&be(P)}function pt(P){const T=P.textures;for(let Z=0,me=T.length;Z<me;Z++){const ye=T[Z];if(y(ye)){const _e=D(P),We=s.get(ye).__webglTexture;t.bindTexture(_e,We),v(_e),t.unbindTexture()}}}const Lt=[],j=[];function jt(P){if(P.samples>0){if(lt(P)===!1){const T=P.textures,Z=P.width,me=P.height;let ye=r.COLOR_BUFFER_BIT;const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=s.get(P),Pe=T.length>1;if(Pe)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ht=s.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ht,0)}r.blitFramebuffer(0,0,Z,me,0,0,Z,me,ye,r.NEAREST),h===!0&&(Lt.length=0,j.length=0,Lt.push(r.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Lt.push(_e),j.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pe)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ht=s.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ht,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function st(P){return Math.min(a.maxSamples,P.samples)}function lt(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(P){const T=u.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function St(P,T){const Z=P.colorSpace,me=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==no&&Z!==Tr&&(wt.getTransfer(Z)===Dt?(me!==Yn||ye!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=de,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=$e,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=lt}function uw(r,e){function t(s,a=Tr){let l;const u=wt.getTransfer(a);if(s===Ci)return r.UNSIGNED_BYTE;if(s===gf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_f)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Pg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Rg)return r.BYTE;if(s===bg)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===mf)return r.INT;if(s===ts)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Zo)return r.HALF_FLOAT;if(s===Lg)return r.ALPHA;if(s===Dg)return r.RGB;if(s===Yn)return r.RGBA;if(s===Ng)return r.LUMINANCE;if(s===Ig)return r.LUMINANCE_ALPHA;if(s===$s)return r.DEPTH_COMPONENT;if(s===eo)return r.DEPTH_STENCIL;if(s===Ug)return r.RED;if(s===vf)return r.RED_INTEGER;if(s===Fg)return r.RG;if(s===xf)return r.RG_INTEGER;if(s===yf)return r.RGBA_INTEGER;if(s===Fl||s===Ol||s===kl||s===Bl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fd||s===Od||s===kd||s===Bd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zd||s===Vd||s===Hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===zd||s===Vd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===$d||s===qd||s===Kd||s===Zd||s===Qd||s===Jd||s===ef||s===tf||s===nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zl||s===rf||s===sf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===zl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Og||s===of||s===af||s===lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Js?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class dw extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fw={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,s),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,w=.005;p.inputState.pinching&&x>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fw)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Rl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
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

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Cn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new bi({vertexShader:hw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Ql(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends is{constructor(e,t){super();const s=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,_=null,g=null,x=null,S=null,w=null;const E=new mw,y=t.getContextAttributes();let v=null,D=null;const L=[],R=[],k=new ut;let I=null;const F=new ri;F.viewport=new Bt;const O=new ri;O.viewport=new Bt;const b=[F,O],C=new dw;let V=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=L[W];return se===void 0&&(se=new md,L[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=L[W];return se===void 0&&(se=new md,L[W]=se),se.getGripSpace()},this.getHand=function(W){let se=L[W];return se===void 0&&(se=new md,L[W]=se),se.getHandSpace()};function ee(W){const se=R.indexOf(W.inputSource);if(se===-1)return;const he=L[se];he!==void 0&&(he.update(W.inputSource,W.frame,p||u),he.dispatchEvent({type:W.type,data:W.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",pe);for(let W=0;W<L.length;W++){const se=R[W];se!==null&&(R[W]=null,L[W].disconnect(se))}V=null,de=null,E.reset(),e.setRenderTarget(v),S=null,x=null,g=null,a=null,D=null,J.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),a.renderState.layers===void 0){const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Pr(S.framebufferWidth,S.framebufferHeight,{format:Yn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let se=null,he=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?eo:$s,he=y.stencil?Js:ts);const Me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(Me),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Pr(x.textureWidth,x.textureHeight,{format:Yn,type:Ci,depthTexture:new Qg(x.textureWidth,x.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),J.setContext(a),J.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function pe(W){for(let se=0;se<W.removed.length;se++){const he=W.removed[se],ge=R.indexOf(he);ge>=0&&(R[ge]=null,L[ge].disconnect(he))}for(let se=0;se<W.added.length;se++){const he=W.added[se];let ge=R.indexOf(he);if(ge===-1){for(let be=0;be<L.length;be++)if(be>=R.length){R.push(he),ge=be;break}else if(R[be]===null){R[be]=he,ge=be;break}if(ge===-1)break}const Me=L[ge];Me&&Me.connect(he)}}const le=new q,ce=new q;function z(W,se,he){le.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const ge=le.distanceTo(ce),Me=se.projectionMatrix.elements,be=he.projectionMatrix.elements,$e=Me[14]/(Me[10]-1),yt=Me[14]/(Me[10]+1),pt=(Me[9]+1)/Me[5],Lt=(Me[9]-1)/Me[5],j=(Me[8]-1)/Me[0],jt=(be[8]+1)/be[0],st=$e*j,lt=$e*jt,Ke=ge/(-j+jt),St=Ke*-j;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(Ke),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ge=$e+Ke,P=yt+Ke,T=st-St,Z=lt+(ge-St),me=pt*yt/P*Ge,ye=Lt*yt/P*Ge;W.projectionMatrix.makePerspective(T,Z,me,ye,Ge,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ue(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let se=W.near,he=W.far;E.texture!==null&&(E.depthNear>0&&(se=E.depthNear),E.depthFar>0&&(he=E.depthFar)),C.near=O.near=F.near=se,C.far=O.far=F.far=he,(V!==C.near||de!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,de=C.far),F.layers.mask=W.layers.mask|2,O.layers.mask=W.layers.mask|4,C.layers.mask=F.layers.mask|O.layers.mask;const ge=W.parent,Me=C.cameras;ue(C,ge);for(let be=0;be<Me.length;be++)ue(Me[be],ge);Me.length===2?z(C,F,O):C.projectionMatrix.copy(F.projectionMatrix),oe(W,C,ge)};function oe(W,se,he){he===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(W){h=W,x!==null&&(x.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let U=null;function te(W,se){if(_=se.getViewerPose(p||u),w=se,_!==null){const he=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ge=!1;he.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let be=0;be<he.length;be++){const $e=he[be];let yt=null;if(S!==null)yt=S.getViewport($e);else{const Lt=g.getViewSubImage(x,$e);yt=Lt.viewport,be===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(D))}let pt=b[be];pt===void 0&&(pt=new ri,pt.layers.enable(be),pt.viewport=new Bt,b[be]=pt),pt.matrix.fromArray($e.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray($e.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(yt.x,yt.y,yt.width,yt.height),be===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(pt)}const Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const be=g.getDepthInformation(he[0]);be&&be.isValid&&be.texture&&E.init(e,be,a.renderState)}}for(let he=0;he<L.length;he++){const ge=R[he],Me=L[he];ge!==null&&Me!==void 0&&Me.update(ge,se,p||u)}U&&U(W,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),w=null}const J=new Kg;J.setAnimationLoop(te),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const Kr=new Ri,_w=new Wt;function vw(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Yg(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,D,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(l(y,v),w(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?h(y,v,D,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,R=D.envMapRotation;L&&(y.envMap.value=L,Kr.copy(R),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(Kr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=L*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function xw(r,e,t,s){let a={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const R=L.program;s.uniformBlockBinding(D,R)}function p(D,L){let R=a[D.id];R===void 0&&(w(D),R=_(D),a[D.id]=R,D.addEventListener("dispose",y));const k=L.program;s.updateUBOMapping(D,k);const I=e.render.frame;l[D.id]!==I&&(x(D),l[D.id]=I)}function _(D){const L=g();D.__bindingPointIndex=L;const R=r.createBuffer(),k=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,k,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function g(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],R=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,F=R.length;I<F;I++){const O=Array.isArray(R[I])?R[I]:[R[I]];for(let b=0,C=O.length;b<C;b++){const V=O[b];if(S(V,I,b,k)===!0){const de=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let pe=0;pe<ee.length;pe++){const le=ee[pe],ce=E(le);typeof le=="number"||typeof le=="boolean"?(V.__data[0]=le,r.bufferSubData(r.UNIFORM_BUFFER,de+fe,V.__data)):le.isMatrix3?(V.__data[0]=le.elements[0],V.__data[1]=le.elements[1],V.__data[2]=le.elements[2],V.__data[3]=0,V.__data[4]=le.elements[3],V.__data[5]=le.elements[4],V.__data[6]=le.elements[5],V.__data[7]=0,V.__data[8]=le.elements[6],V.__data[9]=le.elements[7],V.__data[10]=le.elements[8],V.__data[11]=0):(le.toArray(V.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,de,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,R,k){const I=D.value,F=L+"_"+R;if(k[F]===void 0)return typeof I=="number"||typeof I=="boolean"?k[F]=I:k[F]=I.clone(),!0;{const O=k[F];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return k[F]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function w(D){const L=D.uniforms;let R=0;const k=16;for(let F=0,O=L.length;F<O;F++){const b=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,V=b.length;C<V;C++){const de=b[C],ee=Array.isArray(de.value)?de.value:[de.value];for(let fe=0,pe=ee.length;fe<pe;fe++){const le=ee[fe],ce=E(le),z=R%k,ue=z%ce.boundary,oe=z+ue;R+=ue,oe!==0&&k-oe<ce.storage&&(R+=k-oe),de.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=R,R+=ce.storage}}}const I=R%k;return I>0&&(R+=k-I),D.__size=R,D.__cache={},this}function E(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const D in a)r.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:p,dispose:v}}class yw{constructor(e={}){const{canvas:t=lx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Rr,this.toneMappingExposure=1;const R=this;let k=!1,I=0,F=0,O=null,b=-1,C=null;const V=new Bt,de=new Bt;let ee=null;const fe=new _t(0);let pe=0,le=t.width,ce=t.height,z=1,ue=null,oe=null;const U=new Bt(0,0,le,ce),te=new Bt(0,0,le,ce);let J=!1;const W=new Ef;let se=!1,he=!1;const ge=new Wt,Me=new Wt,be=new q,$e=new Bt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return O===null?z:1}let j=s;function jt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),j===null){const X="webgl2";if(j=jt(X,A),j===null)throw jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,lt,Ke,St,Ge,P,T,Z,me,ye,_e,We,Pe,Fe,ht,Te,ke,et,tt,Be,mt,ot,bt,G;function Le(){st=new TM(j),st.init(),ot=new uw(j,st),lt=new xM(j,st,e,ot),Ke=new aw(j,st),lt.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),St=new RM(j),Ge=new jE,P=new cw(j,st,Ke,Ge,lt,ot,St),T=new SM(R),Z=new wM(R),me=new Ux(j),bt=new _M(j,me),ye=new AM(j,me,St,bt),_e=new PM(j,ye,me,St),tt=new bM(j,lt,P),Te=new yM(Ge),We=new XE(R,T,Z,st,lt,bt,Te),Pe=new vw(R,Ge),Fe=new $E,ht=new ew(st),et=new gM(R,T,Z,Ke,_e,S,h),ke=new sw(R,_e,lt),G=new xw(j,St,lt,Ke),Be=new vM(j,st,St),mt=new CM(j,st,St),St.programs=We.programs,R.capabilities=lt,R.extensions=st,R.properties=Ge,R.renderLists=Fe,R.shadowMap=ke,R.state=Ke,R.info=St}Le();const ae=new gw(R,j);this.xr=ae,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(le,ce,!1))},this.getSize=function(A){return A.set(le,ce)},this.setSize=function(A,X,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ce=X,t.width=Math.floor(A*z),t.height=Math.floor(X*z),ie===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*z,ce*z).floor()},this.setDrawingBufferSize=function(A,X,ie){le=A,ce=X,z=ie,t.width=Math.floor(A*ie),t.height=Math.floor(X*ie),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,X,ie,re){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,ie,re),Ke.viewport(V.copy(U).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,X,ie,re){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,X,ie,re),Ke.scissor(de.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){Ke.setScissorTest(J=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,X=!0,ie=!0){let re=0;if(A){let Y=!1;if(O!==null){const Re=O.texture.format;Y=Re===yf||Re===xf||Re===vf}if(Y){const Re=O.texture.type,Ae=Re===Ci||Re===ts||Re===$o||Re===Js||Re===gf||Re===_f,Xe=et.getClearColor(),Ve=et.getClearAlpha(),nt=Xe.r,rt=Xe.g,je=Xe.b;Ae?(w[0]=nt,w[1]=rt,w[2]=je,w[3]=Ve,j.clearBufferuiv(j.COLOR,0,w)):(E[0]=nt,E[1]=rt,E[2]=je,E[3]=Ve,j.clearBufferiv(j.COLOR,0,E))}else re|=j.COLOR_BUFFER_BIT}X&&(re|=j.DEPTH_BUFFER_BIT),ie&&(re|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),ht.dispose(),Ge.dispose(),T.dispose(),Z.dispose(),_e.dispose(),bt.dispose(),G.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ss),ae.removeEventListener("sessionend",Ki),Pi.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=St.autoReset,X=ke.enabled,ie=ke.autoUpdate,re=ke.needsUpdate,Y=ke.type;Le(),St.autoReset=A,ke.enabled=X,ke.autoUpdate=ie,ke.needsUpdate=re,ke.type=Y}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const X=A.target;X.removeEventListener("dispose",at),Ft(X)}function Ft(A){Zt(A),Ge.remove(A)}function Zt(A){const X=Ge.get(A).programs;X!==void 0&&(X.forEach(function(ie){We.releaseProgram(ie)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ie,re,Y,Re){X===null&&(X=yt);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Xe=na(A,X,ie,re,Y);Ke.setMaterial(re,Ae);let Ve=ie.index,nt=1;if(re.wireframe===!0){if(Ve=ye.getWireframeAttribute(ie),Ve===void 0)return;nt=2}const rt=ie.drawRange,je=ie.attributes.position;let xt=rt.start*nt,Ct=(rt.start+rt.count)*nt;Re!==null&&(xt=Math.max(xt,Re.start*nt),Ct=Math.min(Ct,(Re.start+Re.count)*nt)),Ve!==null?(xt=Math.max(xt,0),Ct=Math.min(Ct,Ve.count)):je!=null&&(xt=Math.max(xt,0),Ct=Math.min(Ct,je.count));const vt=Ct-xt;if(vt<0||vt===1/0)return;bt.setup(Y,re,Xe,ie,Ve);let fn,ct=Be;if(Ve!==null&&(fn=me.get(Ve),ct=mt,ct.setIndex(fn)),Y.isMesh)re.wireframe===!0?(Ke.setLineWidth(re.wireframeLinewidth*Lt()),ct.setMode(j.LINES)):ct.setMode(j.TRIANGLES);else if(Y.isLine){let qe=re.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*Lt()),Y.isLineSegments?ct.setMode(j.LINES):Y.isLineLoop?ct.setMode(j.LINE_LOOP):ct.setMode(j.LINE_STRIP)}else Y.isPoints?ct.setMode(j.POINTS):Y.isSprite&&ct.setMode(j.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,ci=Y._multiDrawCounts,Tt=Y._multiDrawCount,hn=Ve?me.get(Ve).bytesPerElement:1,ui=Ge.get(re).currentProgram.getUniforms();for(let Qt=0;Qt<Tt;Qt++)ui.setValue(j,"_gl_DrawID",Qt),ct.render(qe[Qt]/hn,ci[Qt])}else if(Y.isInstancedMesh)ct.renderInstances(xt,vt,Y.count);else if(ie.isInstancedBufferGeometry){const qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ci=Math.min(ie.instanceCount,qe);ct.renderInstances(xt,vt,ci)}else ct.render(xt,vt)};function Mt(A,X,ie){A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,os(A,X,ie),A.side=br,A.needsUpdate=!0,os(A,X,ie),A.side=jn):os(A,X,ie)}this.compile=function(A,X,ie=null){ie===null&&(ie=A),v=ht.get(ie),v.init(X),L.push(v),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==ie&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const re=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Ae=0;Ae<Re.length;Ae++){const Xe=Re[Ae];Mt(Xe,ie,Y),re.add(Xe)}else Mt(Re,ie,Y),re.add(Re)}),L.pop(),v=null,re},this.compileAsync=function(A,X,ie=null){const re=this.compile(A,X,ie);return new Promise(Y=>{function Re(){if(re.forEach(function(Ae){Ge.get(Ae).currentProgram.isReady()&&re.delete(Ae)}),re.size===0){Y(A);return}setTimeout(Re,10)}st.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Rn=null;function yn(A){Rn&&Rn(A)}function ss(){Pi.stop()}function Ki(){Pi.start()}const Pi=new Kg;Pi.setAnimationLoop(yn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Rn=A,ae.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},ae.addEventListener("sessionstart",ss),ae.addEventListener("sessionend",Ki),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,O),v=ht.get(A,L.length),v.init(X),L.push(v),Me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),W.setFromProjectionMatrix(Me),he=this.localClippingEnabled,se=Te.init(this.clippingPlanes,he),y=Fe.get(A,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Li(Re,X,-1/0,R.sortObjects)}Li(A,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ue,oe),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&et.addToRenderList(y,A),this.info.render.frame++,se===!0&&Te.beginShadows();const ie=v.state.shadowsArray;ke.render(ie,A,X),se===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,Y=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Re=X.cameras;if(Y.length>0)for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++){const Ve=Re[Ae];Dr(re,Y,A,Ve)}pt&&et.render(A);for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++){const Ve=Re[Ae];Lr(y,A,Ve,Ve.viewport)}}else Y.length>0&&Dr(re,Y,A,X),pt&&et.render(A),Lr(y,A,X);O!==null&&(P.updateMultisampleRenderTarget(O),P.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(R,A,X),bt.resetDefaultState(),b=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],se===!0&&Te.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Li(A,X,ie,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){re&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Ae=_e.update(A),Xe=A.material;Xe.visible&&y.push(A,Ae,Xe,ie,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const Ae=_e.update(A),Xe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),$e.copy(Ae.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Xe)){const Ve=Ae.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const je=Ve[nt],xt=Xe[je.materialIndex];xt&&xt.visible&&y.push(A,Ae,xt,ie,$e.z,je)}}else Xe.visible&&y.push(A,Ae,Xe,ie,$e.z,null)}}const Re=A.children;for(let Ae=0,Xe=Re.length;Ae<Xe;Ae++)Li(Re[Ae],X,ie,re)}function Lr(A,X,ie,re){const Y=A.opaque,Re=A.transmissive,Ae=A.transparent;v.setupLightsView(ie),se===!0&&Te.setGlobalState(R.clippingPlanes,ie),re&&Ke.viewport(V.copy(re)),Y.length>0&&Zi(Y,X,ie),Re.length>0&&Zi(Re,X,ie),Ae.length>0&&Zi(Ae,X,ie),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Dr(A,X,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[re.id]===void 0&&(v.state.transmissionRenderTarget[re.id]=new Pr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Zo:Ci,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Re=v.state.transmissionRenderTarget[re.id],Ae=re.viewport||V;Re.setSize(Ae.z,Ae.w);const Xe=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),pt&&et.render(ie);const Ve=R.toneMapping;R.toneMapping=Rr;const nt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),v.setupLightsView(re),se===!0&&Te.setGlobalState(R.clippingPlanes,re),Zi(A,ie,re),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re),st.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let je=0,xt=X.length;je<xt;je++){const Ct=X[je],vt=Ct.object,fn=Ct.geometry,ct=Ct.material,qe=Ct.group;if(ct.side===jn&&vt.layers.test(re.layers)){const ci=ct.side;ct.side=kn,ct.needsUpdate=!0,ea(vt,ie,re,fn,ct,qe),ct.side=ci,ct.needsUpdate=!0,rt=!0}}rt===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re))}R.setRenderTarget(Xe),R.setClearColor(fe,pe),nt!==void 0&&(re.viewport=nt),R.toneMapping=Ve}function Zi(A,X,ie){const re=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Re=A.length;Y<Re;Y++){const Ae=A[Y],Xe=Ae.object,Ve=Ae.geometry,nt=re===null?Ae.material:re,rt=Ae.group;Xe.layers.test(ie.layers)&&ea(Xe,X,ie,Ve,nt,rt)}}function ea(A,X,ie,re,Y,Re){A.onBeforeRender(R,X,ie,re,Y,Re),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,X,ie,re,A,Re),Y.transparent===!0&&Y.side===jn&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,R.renderBufferDirect(ie,X,re,Y,A,Re),Y.side=br,Y.needsUpdate=!0,R.renderBufferDirect(ie,X,re,Y,A,Re),Y.side=jn):R.renderBufferDirect(ie,X,re,Y,A,Re),A.onAfterRender(R,X,ie,re,Y,Re)}function os(A,X,ie){X.isScene!==!0&&(X=yt);const re=Ge.get(A),Y=v.state.lights,Re=v.state.shadowsArray,Ae=Y.state.version,Xe=We.getParameters(A,Y.state,Re,X,ie),Ve=We.getProgramCacheKey(Xe);let nt=re.programs;re.environment=A.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",at),nt=new Map,re.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Ae)return yi(A,Xe),rt}else Xe.uniforms=We.getUniforms(A),A.onBeforeCompile(Xe,R),rt=We.acquireProgram(Xe,Ve),nt.set(Ve,rt),re.uniforms=Xe.uniforms;const je=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Te.uniform),yi(A,Xe),re.needsLights=tc(A),re.lightsStateVersion=Ae,re.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function yi(A,X){const ie=Ge.get(A);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function na(A,X,ie,re,Y){X.isScene!==!0&&(X=yt),P.resetTextureUnits();const Re=X.fog,Ae=re.isMeshStandardMaterial?X.environment:null,Xe=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:no,Ve=(re.isMeshStandardMaterial?Z:T).get(re.envMap||Ae),nt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,rt=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),je=!!ie.morphAttributes.position,xt=!!ie.morphAttributes.normal,Ct=!!ie.morphAttributes.color;let vt=Rr;re.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(vt=R.toneMapping);const fn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ct=fn!==void 0?fn.length:0,qe=Ge.get(re),ci=v.state.lights;if(se===!0&&(he===!0||A!==C)){const Sn=A===C&&re.id===b;Te.setState(re,A,Sn)}let Tt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ci.state.version||qe.outputColorSpace!==Xe||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Ve||re.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==rt||qe.morphTargets!==je||qe.morphNormals!==xt||qe.morphColors!==Ct||qe.toneMapping!==vt||qe.morphTargetsCount!==ct)&&(Tt=!0):(Tt=!0,qe.__version=re.version);let hn=qe.currentProgram;Tt===!0&&(hn=os(re,X,Y));let ui=!1,Qt=!1,Si=!1;const It=hn.getUniforms(),$n=qe.uniforms;if(Ke.useProgram(hn.program)&&(ui=!0,Qt=!0,Si=!0),re.id!==b&&(b=re.id,Qt=!0),ui||C!==A){Ke.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),ux(ge),dx(ge),It.setValue(j,"projectionMatrix",ge)):It.setValue(j,"projectionMatrix",A.projectionMatrix),It.setValue(j,"viewMatrix",A.matrixWorldInverse);const qn=It.map.cameraPosition;qn!==void 0&&qn.setValue(j,be.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&It.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Qt=!0,Si=!0)}if(Y.isSkinnedMesh){It.setOptional(j,Y,"bindMatrix"),It.setOptional(j,Y,"bindMatrixInverse");const Sn=Y.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),It.setValue(j,"boneTexture",Sn.boneTexture,P))}Y.isBatchedMesh&&(It.setOptional(j,Y,"batchingTexture"),It.setValue(j,"batchingTexture",Y._matricesTexture,P),It.setOptional(j,Y,"batchingIdTexture"),It.setValue(j,"batchingIdTexture",Y._indirectTexture,P),It.setOptional(j,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(j,"batchingColorTexture",Y._colorsTexture,P));const Di=ie.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&tt.update(Y,ie,hn),(Qt||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,It.setValue(j,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&($n.envMap.value=Ve,$n.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&X.environment!==null&&($n.envMapIntensity.value=X.environmentIntensity),Qt&&(It.setValue(j,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&ia($n,Si),Re&&re.fog===!0&&Pe.refreshFogUniforms($n,Re),Pe.refreshMaterialUniforms($n,re,z,ce,v.state.transmissionRenderTarget[A.id]),Vl.upload(j,ta(qe),$n,P)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vl.upload(j,ta(qe),$n,P),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(j,"center",Y.center),It.setValue(j,"modelViewMatrix",Y.modelViewMatrix),It.setValue(j,"normalMatrix",Y.normalMatrix),It.setValue(j,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Sn=re.uniformsGroups;for(let qn=0,bn=Sn.length;qn<bn;qn++){const ra=Sn[qn];G.update(ra,hn),G.bind(ra,hn)}}return hn}function ia(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function tc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,X,ie){Ge.get(A.texture).__webglTexture=X,Ge.get(A.depthTexture).__webglTexture=ie;const re=Ge.get(A);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ie=Ge.get(A);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ie=0){O=A,I=X,F=ie;let re=!0,Y=null,Re=!1,Ae=!1;if(A){const Ve=Ge.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(j.FRAMEBUFFER,null),re=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ve.__hasExternalTextures)P.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&Ge.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ae=!0);const rt=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?Y=rt[X][ie]:Y=rt[X],Re=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[ie]:Y=rt,V.copy(A.viewport),de.copy(A.scissor),ee=A.scissorTest}else V.copy(U).multiplyScalar(z).floor(),de.copy(te).multiplyScalar(z).floor(),ee=J;if(Ke.bindFramebuffer(j.FRAMEBUFFER,Y)&&re&&Ke.drawBuffers(A,Y),Ke.viewport(V),Ke.scissor(de),Ke.setScissorTest(ee),Re){const Ve=Ge.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,ie)}else if(Ae){const Ve=Ge.get(A.texture),nt=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ve.__webglTexture,ie||0,nt)}b=-1},this.readRenderTargetPixels=function(A,X,ie,re,Y,Re,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){Ke.bindFramebuffer(j.FRAMEBUFFER,Xe);try{const Ve=A.texture,nt=Ve.format,rt=Ve.type;if(!lt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ie>=0&&ie<=A.height-Y&&j.readPixels(X,ie,re,Y,ot.convert(nt),ot.convert(rt),Re)}finally{const Ve=O!==null?Ge.get(O).__webglFramebuffer:null;Ke.bindFramebuffer(j.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,X,ie,re,Y,Re,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Xe=Xe[Ae]),Xe){const Ve=A.texture,nt=Ve.format,rt=Ve.type;if(!lt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-re&&ie>=0&&ie<=A.height-Y){Ke.bindFramebuffer(j.FRAMEBUFFER,Xe);const je=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,je),j.bufferData(j.PIXEL_PACK_BUFFER,Re.byteLength,j.STREAM_READ),j.readPixels(X,ie,re,Y,ot.convert(nt),ot.convert(rt),0);const xt=O!==null?Ge.get(O).__webglFramebuffer:null;Ke.bindFramebuffer(j.FRAMEBUFFER,xt);const Ct=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cx(j,Ct,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,je),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Re),j.deleteBuffer(je),j.deleteSync(Ct),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ie=0){A.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const re=Math.pow(2,-ie),Y=Math.floor(A.image.width*re),Re=Math.floor(A.image.height*re),Ae=X!==null?X.x:0,Xe=X!==null?X.y:0;P.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,ie,0,0,Ae,Xe,Y,Re),Ke.unbindTexture()},this.copyTextureToTexture=function(A,X,ie=null,re=null,Y=0){A.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,ie=null);let Re,Ae,Xe,Ve,nt,rt,je,xt,Ct;const vt=A.isCompressedTexture?A.mipmaps[Y]:A.image;ie!==null?(Re=ie.max.x-ie.min.x,Ae=ie.max.y-ie.min.y,Xe=ie.isBox3?ie.max.z-ie.min.z:1,Ve=ie.min.x,nt=ie.min.y,rt=ie.isBox3?ie.min.z:0):(Re=vt.width,Ae=vt.height,Xe=vt.depth||1,Ve=0,nt=0,rt=0),re!==null?(je=re.x,xt=re.y,Ct=re.z):(je=0,xt=0,Ct=0);const fn=ot.convert(X.format),ct=ot.convert(X.type);let qe;X.isData3DTexture?(P.setTexture3D(X,0),qe=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),qe=j.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),qe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const ci=j.getParameter(j.UNPACK_ROW_LENGTH),Tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),hn=j.getParameter(j.UNPACK_SKIP_PIXELS),ui=j.getParameter(j.UNPACK_SKIP_ROWS),Qt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ve),j.pixelStorei(j.UNPACK_SKIP_ROWS,nt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const Si=A.isDataArrayTexture||A.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const $n=Ge.get(A),Di=Ge.get(X),Sn=Ge.get($n.__renderTarget),qn=Ge.get(Di.__renderTarget);Ke.bindFramebuffer(j.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ke.bindFramebuffer(j.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let bn=0;bn<Xe;bn++)Si&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,Y,rt+bn),A.isDepthTexture?(It&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Y,Ct+bn),j.blitFramebuffer(Ve,nt,Re,Ae,je,xt,Re,Ae,j.DEPTH_BUFFER_BIT,j.NEAREST)):It?j.copyTexSubImage3D(qe,Y,je,xt,Ct+bn,Ve,nt,Re,Ae):j.copyTexSubImage2D(qe,Y,je,xt,Ct+bn,Ve,nt,Re,Ae);Ke.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(qe,Y,je,xt,Ct,Re,Ae,Xe,fn,ct,vt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,Y,je,xt,Ct,Re,Ae,Xe,fn,vt.data):j.texSubImage3D(qe,Y,je,xt,Ct,Re,Ae,Xe,fn,ct,vt):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Y,je,xt,Re,Ae,fn,ct,vt.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Y,je,xt,vt.width,vt.height,fn,vt.data):j.texSubImage2D(j.TEXTURE_2D,Y,je,xt,Re,Ae,fn,ct,vt);j.pixelStorei(j.UNPACK_ROW_LENGTH,ci),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,hn),j.pixelStorei(j.UNPACK_SKIP_ROWS,ui),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qt),Y===0&&X.generateMipmaps&&j.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ie=null,re=null,Y=0){return A.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ie,re,Y)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){I=0,F=0,O=null,Ke.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class i_ extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sw extends Cn{constructor(e=null,t=1,s=1,a,l,u,d,h,p=An,_=An,g,x){super(null,u,d,h,p,_,a,l,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends rs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new q,Xl=new q,ag=new Wt,Go=new Mf,bl=new Zl,gd=new q,lg=new q;class Mw extends dn{constructor(e=new li,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)Wl.fromBufferAttribute(t,a-1),Xl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bl.copy(s.boundingSphere),bl.applyMatrix4(a),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;ag.copy(a).invert(),Go.copy(e.ray).applyMatrix4(ag);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let E=S,y=w-1;E<y;E+=p){const v=_.getX(E),D=_.getX(E+1),L=Pl(this,e,Go,h,v,D);L&&t.push(L)}if(this.isLineLoop){const E=_.getX(w-1),y=_.getX(S),v=Pl(this,e,Go,h,E,y);v&&t.push(v)}}else{const S=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let E=S,y=w-1;E<y;E+=p){const v=Pl(this,e,Go,h,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Pl(this,e,Go,h,w-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Pl(r,e,t,s,a,l){const u=r.geometry.attributes.position;if(Wl.fromBufferAttribute(u,a),Xl.fromBufferAttribute(u,l),t.distanceSqToSegment(Wl,Xl,gd,lg)>s)return;gd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(gd);if(!(h<e.near||h>e.far))return{distance:h,point:lg.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const cg=new q,ug=new q;class jl extends Mw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)cg.fromBufferAttribute(t,a),ug.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+cg.distanceTo(ug);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ll=new q,Dl=new q,_d=new q,Nl=new si;class dg extends li{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(Yo*t),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x={},S=[];for(let w=0;w<h;w+=3){u?(p[0]=u.getX(w),p[1]=u.getX(w+1),p[2]=u.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:E,b:y,c:v}=Nl;if(E.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Nl.getNormal(_d),g[0]=`${Math.round(E.x*a)},${Math.round(E.y*a)},${Math.round(E.z*a)}`,g[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,g[2]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let D=0;D<3;D++){const L=(D+1)%3,R=g[D],k=g[L],I=Nl[_[D]],F=Nl[_[L]],O=`${R}_${k}`,b=`${k}_${R}`;b in x&&x[b]?(_d.dot(x[b].normal)<=l&&(S.push(I.x,I.y,I.z),S.push(F.x,F.y,F.z)),x[b]=null):O in x||(x[O]={index0:p[D],index1:p[L],normal:_d.clone()})}}for(const w in x)if(x[w]){const{index0:E,index1:y}=x[w];Ll.fromBufferAttribute(d,E),Dl.fromBufferAttribute(d,y),S.push(Ll.x,Ll.y,Ll.z),S.push(Dl.x,Dl.y,Dl.z)}this.setAttribute("position",new Bn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ew extends rs{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ww extends rs{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class r_ extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vd=new Wt,fg=new q,hg=new q;class Tw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hg),t.updateMatrixWorld(),vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Aw extends Tw{constructor(){super(new Zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends r_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Aw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cw extends r_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rw extends jl{constructor(e=10,t=10,s=4473924,a=8947848){s=new _t(s),a=new _t(a);const l=t/2,u=e/t,d=e/2,h=[],p=[];for(let x=0,S=0,w=-d;x<=t;x++,w+=u){h.push(-d,0,w,d,0,w),h.push(w,0,-d,w,0,d);const E=x===l?s:a;E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3}const _=new li;_.setAttribute("position",new Bn(h,3)),_.setAttribute("color",new Bn(p,3));const g=new qo({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class bw extends jl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new li;a.setAttribute("position",new Bn(t,3)),a.setAttribute("color",new Bn(s,3));const l=new qo({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,s){const a=new _t,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(s),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pw extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);const gg={type:"change"},Tf={type:"start"},s_={type:"end"},Il=new Mf,_g=new wr,Lw=Math.cos(70*ax.DEG2RAD),tn=new q,On=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class Dw extends Pw{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ns,this._lastTargetPosition=new q,this._quat=new ns().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mg,this._sphericalDelta=new mg,this._scale=1,this._panOffset=new q,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new q,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Iw.bind(this),this._onPointerDown=Nw.bind(this),this._onPointerUp=Uw.bind(this),this._onContextMenu=Hw.bind(this),this._onMouseWheel=kw.bind(this),this._onKeyDown=Bw.bind(this),this._onTouchStart=zw.bind(this),this._onTouchMove=Vw.bind(this),this._onMouseDown=Fw.bind(this),this._onMouseMove=Ow.bind(this),this._interceptControlDown=Gw.bind(this),this._interceptControlUp=Ww.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gg),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=On:s>Math.PI&&(s-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=tn.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<Lw?this.object.lookAt(this.target):(_g.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(_g,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(gg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;tn.copy(a).sub(this.target);let l=tn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,u=s.width,d=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Nw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Iw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Uw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(s_),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Nt.DOLLY;break;case js.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Nt.ROTATE}break;case js.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Tf)}function Ow(r){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function kw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(r.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(s_))}function Bw(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function zw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Nt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Nt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Tf)}function Vw(r){switch(this._trackPointer(r),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Nt.NONE}}function Hw(r){this.enabled!==!1&&r.preventDefault()}function Gw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ww(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yd{constructor(e){Gt(this,"scene");Gt(this,"camera");Gt(this,"renderer");Gt(this,"controls");Gt(this,"container");Gt(this,"animationId",null);Gt(this,"renderCallbacks",[]);this.container=e,this.scene=new i_,this.scene.background=new _t(856343);const t=e.clientWidth/e.clientHeight;this.camera=new ri(45,t,.01,1e4),this.camera.position.set(5,5,5),this.renderer=new yw({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new Dw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.screenSpacePanning=!0;const s=new Cw(16777215,.4);this.scene.add(s);const a=new pg(16777215,.8);a.position.set(5,10,7),this.scene.add(a);const l=new pg(16777215,.3);l.position.set(-5,-3,-5),this.scene.add(l);const u=new Rw(20,20,3159613,2172461);u.position.y=-.01,this.scene.add(u);const d=new bw(1);this.scene.add(d),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize)}static isWebGL2Available(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}onRender(e){this.renderCallbacks.push(e)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.controls.update();for(const t of this.renderCallbacks)t();this.renderer.render(this.scene,this.camera)};e()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}zoomToFit(){const e=new io().setFromObject(this.scene);if(e.isEmpty())return;const t=e.getCenter(new q),s=e.getSize(new q),a=Math.max(s.x,s.y,s.z),l=this.camera.fov*(Math.PI/180),u=a/(2*Math.tan(l/2))*1.5;this.camera.position.copy(t).add(new q(u*.7,u*.5,u*.7)),this.camera.lookAt(t),this.controls.target.copy(t),this.controls.update()}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.stop(),window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}function Xw(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++)e[t]=r[t];return e}function o_(r){let e=1/0,t=-1/0;for(let s=0;s<r.length;s++){const a=r[s];Number.isFinite(a)&&(a<e&&(e=a),a>t&&(t=a))}return e===1/0?[NaN,NaN]:[e,t]}function Af(r,e){switch(e){case"float64":return new Float64Array(r);case"float32":return new Float32Array(r);case"int32":return new Int32Array(r);case"uint8":return new Uint8Array(r);default:throw new Error(`Unsupported dtype: ${e}`)}}function jw(r){let e=0;for(let t=0;t<r.length;t++)Number.isNaN(r[t])&&e++;return e}class Er extends Error{constructor(e,t){super(e),this.stats=t,this.name="SurfaceGeometryError"}}function Yw(r){const{nodeCoords_f64:e,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a}=r,l=Xw(e),u=l.length/3,d=t.length,h=qw({positionsLength:l.length,vertexCount:u,renderVertexCount:d,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a});if(l.length===0)throw new Er("Surface geometry has no node positions",h);if(l.length%3!==0)throw new Er(`Surface positions length must be divisible by 3; received ${l.length}`,h);if(t.length===0)throw new Er("Surface geometry has no indices",h);if(t.length%3!==0)throw new Er(`Surface indices length must be divisible by 3; received ${t.length}`,h);if(s.length!==l.length)throw new Er(`Surface normals length ${s.length} does not match positions length ${l.length}`,h);if(a&&a.length!==t.length/3)throw new Er(`surfaceElementMap length ${a.length} does not match triangle count ${t.length/3}`,h);if(h.hasNegativeIndices)throw new Er(`Surface indices contain negative values (min=${h.minIndex})`,h);if(h.hasOutOfRangeIndices)throw new Er(`Surface indices exceed vertex count (max=${h.maxIndex}, vertexCount=${u})`,h);const p=new Float32Array(d*3),_=new Float32Array(d*3),g=new Float32Array(d*3),x=new Uint32Array(d),S=new Int32Array(d);for(let E=0;E<t.length/3;E++){const y=E*3,v=t[y],D=t[y+1],L=t[y+2],R=a?a[E]:-1,k=l[v*3],I=l[v*3+1],F=l[v*3+2],O=l[D*3],b=l[D*3+1],C=l[D*3+2],V=l[L*3],de=l[L*3+1],ee=l[L*3+2],fe=O-k,pe=b-I,le=C-F,ce=V-k,z=de-I,ue=ee-F;let oe=pe*ue-le*z,U=le*ce-fe*ue,te=fe*z-pe*ce;const J=Math.hypot(oe,U,te)||1;oe/=J,U/=J,te/=J;for(let W=0;W<3;W++){const se=t[y+W],he=(y+W)*3,ge=se*3;p[he]=l[ge],p[he+1]=l[ge+1],p[he+2]=l[ge+2],_[he]=s[ge],_[he+1]=s[ge+1],_[he+2]=s[ge+2],g[he]=oe,g[he+1]=U,g[he+2]=te,x[y+W]=se,S[y+W]=R}}const w=new li;return w.setAttribute("position",new Kt(p,3)),w.setAttribute("normal",new Kt(_,3)),w.setAttribute("smoothNormal",new Kt(_.slice(),3)),w.setAttribute("flatNormal",new Kt(g,3)),w.setAttribute("sourceNodeIndex",new Kt(x,1)),w.setAttribute("sourceElementIndex",new Kt(S,1)),w.computeBoundingBox(),w.computeBoundingSphere(),{geometry:w,positions:p,stats:h}}function $w(r,e){console.info(`[${e}] Surface geometry stats`,r)}function qw(r){const{positionsLength:e,vertexCount:t,renderVertexCount:s,surfaceIndices:a,surfaceNormals:l,surfaceElementMap:u}=r;let d=1/0,h=-1/0,p=!1;for(let _=0;_<a.length;_++){const g=a[_];g<d&&(d=g),g>h&&(h=g),g<0&&(p=!0)}return a.length===0&&(d=NaN,h=NaN),{positionsLength:e,indicesLength:a.length,normalsLength:l.length,surfaceElementMapLength:(u==null?void 0:u.length)??0,vertexCount:t,renderVertexCount:s,triangleCount:a.length/3,minIndex:d,maxIndex:h,hasNegativeIndices:p,hasOutOfRangeIndices:Number.isFinite(h)&&h>t-1}}function vg(r){var l,u;const e=r,t={value:0},s=(l=e.onBeforeCompile)==null?void 0:l.bind(e),a=(u=e.customProgramCacheKey)==null?void 0:u.bind(e);return e.userData.deformUniform=t,e.onBeforeCompile=(d,h)=>{s==null||s(d,h);const p=d;p.uniforms.u_deform_scale=t,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 displacement;
uniform float u_deform_scale;`).replace("#include <begin_vertex>","vec3 transformed = position + u_deform_scale * displacement;")},e.customProgramCacheKey=()=>`${a?a():e.type}:surface-deform-v1`,r}function xg(r,e){const t=r;t.userData.deformUniform&&(t.userData.deformUniform.value=e)}class Kw{constructor(e){Gt(this,"meshGroups",[]);Gt(this,"baseGeometry",null);Gt(this,"debugMaterialMode");this.debugMaterialMode=(e==null?void 0:e.debugMaterialMode)??!1}buildMesh(e,t,s,a,l,u){this.clear(u);const d=Yw({nodeCoords_f64:e,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a});$w(d.stats,"MeshManager"),this.baseGeometry=d.geometry;const h=new Float32Array(d.positions.length);this.baseGeometry.setAttribute("displacement",new Kt(h,3));const p=new Float32Array(this.baseGeometry.getAttribute("position").count);if(this.baseGeometry.setAttribute("scalarValue",new Kt(p,1)),l.size===0){const _=this.createSurfaceMaterial(),g=new ai(this.baseGeometry,_);g.name="default",g.frustumCulled=!this.debugMaterialMode,u.add(g),this.meshGroups.push({partId:"default",mesh:g})}else for(const[_,[g,x]]of l){const S=g*3,w=(x-g)*3,E=this.baseGeometry.clone();E.setDrawRange(S,w);const y=this.createSurfaceMaterial(),v=new ai(E,y);v.name=_,v.frustumCulled=!this.debugMaterialMode,u.add(v),this.meshGroups.push({partId:_,mesh:v})}}getMeshGroups(){return this.meshGroups}getBaseGeometry(){return this.baseGeometry}setDeformScale(e){for(const t of this.meshGroups){const s=t.mesh.material;if(Array.isArray(s))for(const a of s)xg(a,e);else xg(s,e)}}setPartVisible(e,t){const s=this.meshGroups.find(a=>a.partId===e);s&&(s.mesh.visible=t)}isolatePart(e){for(const t of this.meshGroups)t.mesh.visible=t.partId===e}showAll(){for(const e of this.meshGroups)e.mesh.visible=!0}clear(e){for(const t of this.meshGroups)e.remove(t.mesh),t.mesh.geometry.dispose(),Array.isArray(t.mesh.material)?t.mesh.material.forEach(s=>s.dispose()):t.mesh.material.dispose();this.meshGroups=[],this.baseGeometry=null}createSurfaceMaterial(){return this.debugMaterialMode?vg(new ww({side:jn})):vg(new Ew({color:5809919,side:jn,flatShading:!1,vertexColors:!1}))}}class Zw{constructor(){Gt(this,"wireframeMeshes",[]);Gt(this,"overlayMeshes",[])}createWireframe(e,t){this.clear(t);const s=new dg(e,15),a=new qo({color:9147550,transparent:!0,opacity:.4,depthTest:!0}),l=new jl(s,a);l.visible=!1,l.name="wireframe",l.renderOrder=1,t.add(l),this.wireframeMeshes.push(l)}setVisible(e){for(const t of this.wireframeMeshes)t.visible=e}isVisible(){return this.wireframeMeshes.length>0&&this.wireframeMeshes[0].visible}createOverlayWireframe(e,t){if(this.overlayMeshes.length>0)return;const s=new dg(e,15),a=new qo({color:16753920,transparent:!0,opacity:.5,depthTest:!0}),l=new jl(s,a);l.visible=!0,l.name="deform-overlay",l.renderOrder=2,t.add(l),this.overlayMeshes.push(l)}clearOverlay(e){for(const t of this.overlayMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.overlayMeshes=[]}clear(e){for(const t of this.wireframeMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.wireframeMeshes=[],this.clearOverlay(e)}}function Sd(r){const e=new Uint8Array(1024),t=a_(r);for(let a=0;a<256;a++){const l=a*3,u=a*4;e[u]=Math.round(t[l]*255),e[u+1]=Math.round(t[l+1]*255),e[u+2]=Math.round(t[l+2]*255),e[u+3]=255}const s=new Sw(e,256,1,Yn);return s.minFilter=oi,s.magFilter=oi,s.wrapS=Ar,s.needsUpdate=!0,s}function Qw(r,e){const t=a_(r),s=Math.min(Math.max(Math.round(e*255),0),255)*3;return[Math.round(t[s]*255),Math.round(t[s+1]*255),Math.round(t[s+2]*255)]}function a_(r){switch(r){case"viridis":return Jw();case"coolwarm":return eT();case"jet":return tT();case"rainbow":return nT();case"grayscale":return iT()}}function Jw(){const r=new Float32Array(768);return Cf([[.267,.004,.329],[.282,.14,.458],[.254,.265,.53],[.207,.372,.553],[.164,.471,.558],[.128,.567,.551],[.134,.658,.517],[.267,.749,.441],[.478,.821,.318],[.741,.873,.15],[.993,.906,.144]],r)}function eT(){const r=new Float32Array(768);return Cf([[.23,.299,.754],[.552,.588,.893],[.866,.866,.866],[.897,.57,.462],[.706,.016,.15]],r)}function tT(){const r=new Float32Array(768);return Cf([[0,0,.5],[0,0,1],[0,1,1],[1,1,0],[1,0,0],[.5,0,0]],r)}function nT(){const r=new Float32Array(768);for(let e=0;e<256;e++){const s=(1-e/255)*300,[a,l,u]=rT(s/360,1,.5);r[e*3]=a,r[e*3+1]=l,r[e*3+2]=u}return r}function iT(){const r=new Float32Array(768);for(let e=0;e<256;e++){const t=e/255;r[e*3]=t,r[e*3+1]=t,r[e*3+2]=t}return r}function Cf(r,e){const t=r.length-1;for(let s=0;s<256;s++){const a=s/255,l=Math.min(Math.floor(a*t),t-1),u=a*t-l,d=r[l],h=r[l+1];e[s*3]=d[0]+(h[0]-d[0])*u,e[s*3+1]=d[1]+(h[1]-d[1])*u,e[s*3+2]=d[2]+(h[2]-d[2])*u}return e}function rT(r,e,t){const s=(1-Math.abs(2*t-1))*e,a=s*(1-Math.abs(r*6%2-1)),l=t-s/2;let u=0,d=0,h=0;switch(Math.floor(r*6)%6){case 0:u=s,d=a;break;case 1:u=a,d=s;break;case 2:d=s,h=a;break;case 3:d=a,h=s;break;case 4:u=a,h=s;break;case 5:u=s,h=a;break}return[u+l,d+l,h+l]}const sT=`// Contour Vertex Shader\r
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
`,oT=`// Contour Fragment Shader\r
// Per 02b §6.4: LUT sample, NaN → grey, above/below range colors\r
\r
uniform sampler2D u_lut;\r
uniform float u_min;\r
uniform float u_max;\r
uniform bool u_use_flat_shading;\r
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
  vec3 shadedNormal = normalize(v_normal);\r
  if (u_use_flat_shading) {\r
    shadedNormal = normalize(cross(dFdx(v_position), dFdy(v_position)));\r
    if (!gl_FrontFacing) {\r
      shadedNormal *= -1.0;\r
    }\r
  }\r
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));\r
  float diffuse = max(dot(shadedNormal, lightDir), 0.0);\r
  float ambient = 0.3;\r
  float lighting = ambient + (1.0 - ambient) * diffuse;\r
\r
  gl_FragColor = vec4(color.rgb * lighting, color.a);\r
}\r
`;function aT(r,e,t){for(let s=0;s<t.length;s++){const a=e[s];t[s]=a<r.length?r[a]:NaN}}function lT(r,e,t){for(let s=0;s<t.length;s++){const a=e[s];t[s]=a>=0&&a<r.length?r[a]:NaN}}class cT{constructor(){Gt(this,"lutTexture");Gt(this,"material",null);Gt(this,"originalMaterials",new Map);this.lutTexture=Sd("viridis")}createContourMaterial(e){return this.lutTexture=Sd(e.lut_name),this.material=new bi({vertexShader:sT,fragmentShader:oT,uniforms:{u_lut:{value:this.lutTexture},u_min:{value:e.min_value},u_max:{value:e.max_value},u_deform_scale:{value:0},u_use_flat_shading:{value:!1},u_nan_color:{value:new Bt(...e.nan_color)},u_above_color:{value:new Bt(...e.above_range_color)},u_below_color:{value:new Bt(...e.below_range_color)}},side:jn,transparent:!0}),this.material}applyScalarField(e,t,s){const[a,l]=o_(t),u=e.getAttribute("scalarValue"),d=u.array;if(s==="nodal"){const h=e.getAttribute("sourceNodeIndex");if(!h)throw new Error("Surface geometry is missing sourceNodeIndex for nodal contouring");aT(t,h.array,d)}else{const h=e.getAttribute("sourceElementIndex");if(!h)throw new Error("Surface geometry is missing sourceElementIndex for elemental contouring");lT(t,h.array,d)}return this.material&&(this.material.uniforms.u_use_flat_shading.value=s==="elemental"),u.needsUpdate=!0,{min:a,max:l}}updateRange(e,t){this.material&&(this.material.uniforms.u_min.value=e,this.material.uniforms.u_max.value=t)}setColorMap(e){this.lutTexture.dispose(),this.lutTexture=Sd(e),this.material&&(this.material.uniforms.u_lut.value=this.lutTexture)}getMaterial(){return this.material}swapMeshMaterials(e,t){for(const s of e)this.originalMaterials.has(s.partId)||this.originalMaterials.set(s.partId,s.mesh.material),s.mesh.material=t}restoreMeshMaterials(e){for(const t of e){const s=this.originalMaterials.get(t.partId);s&&(t.mesh.material=s)}this.originalMaterials.clear()}setDeformScale(e){this.material&&(this.material.uniforms.u_deform_scale.value=e)}dispose(){var e;this.lutTexture.dispose(),(e=this.material)==null||e.dispose(),this.originalMaterials.clear()}}function uT(r,e){const t=new Float32Array(e.length*3);for(let s=0;s<e.length;s++){const l=e[s]*3,u=s*3;t[u]=r[l]??0,t[u+1]=r[l+1]??0,t[u+2]=r[l+2]??0}return t}class dT{constructor(){Gt(this,"currentMaterial",null)}setDisplacement(e,t){const s=e.getAttribute("sourceNodeIndex");if(!s)throw new Error("Surface geometry is missing sourceNodeIndex for deformation mapping");const a=uT(t,s.array),l=e.getAttribute("displacement");l&&l.array.length===a.length?(l.array.set(a),l.needsUpdate=!0):e.setAttribute("displacement",new Kt(a,3))}clearDisplacement(e){const t=e.getAttribute("displacement");t&&(t.array.fill(0),t.needsUpdate=!0)}setScale(e,t){this.currentMaterial=e,e.uniforms.u_deform_scale.value=t}getScale(){var e,t;return((t=(e=this.currentMaterial)==null?void 0:e.uniforms.u_deform_scale)==null?void 0:t.value)??0}}function fT(r,e){const t=xe(g=>g.activeFieldId),s=xe(g=>g.activeTimestep),a=xe(g=>g.modelId),l=xe(g=>g.status),u=xe(g=>g.fields),d=Rt(g=>g.colorMapConfig),h=Ze.useRef(null),p=Ze.useRef(-1),_=Ze.useRef(null);Ze.useEffect(()=>{var w;if(!r||!e||l!=="ready"||!a)return;if(!t){Ul(e,r),h.current=null,p.current=-1;return}const g=u.find(E=>E.id===t);if(!g){Ul(e,r);return}if(g.location==="integration_point"){xe.getState().setFieldValues(null),xe.getState().setFieldLoadError("Integration-point fields are not supported in MVP. Extrapolation would misrepresent provenance."),Ul(e,r);return}if(h.current===t&&p.current===s)return;(w=_.current)==null||w.abort();const x=new AbortController;return _.current=x,(async()=>{try{xe.getState().setFieldLoadError(null);const E=await ff(`/models/${a}/fields/${t}/data?step=${s}`);if(x.signal.aborted)return;const y=Af(E.buffer,E.meta.dtype);xe.getState().setFieldValues(y);const v=jw(y);xe.getState().setFieldNanCount(v);const[D,L]=o_(y);Number.isNaN(D)||Number.isNaN(L)?(xe.getState().setFieldLoadError("All field values are NaN. Cannot compute contour range."),Rt.getState().setColorMapRange(0,1)):Rt.getState().setColorMapRange(D,L);const R=e.getBaseGeometry();if(!R)return;const k=Rt.getState().colorMapConfig;h.current!==t&&r.createContourMaterial(k),r.applyScalarField(R,y,g.location),!Number.isNaN(D)&&!Number.isNaN(L)&&r.updateRange(D,L);const I=r.getMaterial();I&&r.swapMeshMaterials(e.getMeshGroups(),I),h.current=t,p.current=s}catch(E){if(x.signal.aborted)return;xe.getState().setFieldValues(null),xe.getState().setFieldNanCount(0);const y=E instanceof Error?E.message:"Failed to load field data";y.includes("404")||y.includes("No data")?xe.getState().setFieldLoadError("No data at this step"):xe.getState().setFieldLoadError(y),Ul(e,r)}})(),()=>{x.abort()}},[t,s,a,l,u,r,e,d]),Ze.useEffect(()=>{!r||!t||r.setColorMap(d.lut_name)},[d.lut_name,r,t])}function Ul(r,e){xe.getState().setFieldValues(null),xe.getState().setFieldLoadError(null),xe.getState().setFieldNanCount(0),e.restoreMeshMaterials(r.getMeshGroups())}const yg=34e37;function hT(r,e,t,s,a){const l=Rt(y=>y.deformFieldId),u=Rt(y=>y.deformMode),d=Rt(y=>y.deformScale),h=xe(y=>y.activeTimestep),p=xe(y=>y.modelId),_=xe(y=>y.status),g=xe(y=>y.fields),x=xe(y=>y.nodeCoords_f64),S=Ze.useRef(null),w=Ze.useRef(null),E=Ze.useRef(-1);Ze.useEffect(()=>{var R;if(!r||!e||_!=="ready"||!p)return;const y=e.getBaseGeometry();if(!y)return;if(!l){Gs(r,y),w.current=null,E.current=-1;return}const v=g.find(k=>k.id===l);if(!v){Gs(r,y),xe.getState().setDeformLoadError("Deformation field not found");return}if(v.location!=="nodal"){Gs(r,y),xe.getState().setDeformLoadError(`Deformation requires a nodal field. "${v.name}" is ${v.location}.`);return}if(v.n_components!==3){Gs(r,y),xe.getState().setDeformLoadError(`Deformation requires a vector3 field. "${v.name}" has ${v.n_components} component(s).`);return}if(w.current===l&&E.current===h)return;(R=S.current)==null||R.abort();const D=new AbortController;return S.current=D,(async()=>{try{xe.getState().setDeformLoadError(null);const k=await ff(`/models/${p}/fields/${l}/data?step=${h}`);if(D.signal.aborted)return;const I=Af(k.buffer,k.meta.dtype),F=x?x.length/3:0,O=F*3;if(I.length!==O){Gs(r,y),xe.getState().setDeformLoadError(`Displacement array length mismatch: got ${I.length}, expected ${O} (${F} nodes × 3).`);return}xe.getState().setDisplacementValues(I),r.setDisplacement(y,I),w.current=l,E.current=h}catch(k){if(D.signal.aborted)return;xe.getState().setDisplacementValues(null),Gs(r,y);const I=k instanceof Error?k.message:"Failed to load displacement data";I.includes("404")||I.includes("No data")?xe.getState().setDeformLoadError("No data at this step"):xe.getState().setDeformLoadError(I)}})(),()=>{D.abort()}},[l,h,p,_,g,x,r,e]),Ze.useEffect(()=>{if(!r||!e)return;const y=e.getBaseGeometry();if(!y)return;let v=0;if(l)switch(u){case"undeformed":v=0;break;case"deformed":case"overlay":v=d;break}const D=xe.getState().displacement_f64;if(D&&v>0){let R=0;for(let k=0;k<D.length;k++){const I=Math.abs(D[k]);I>R&&Number.isFinite(I)&&(R=I)}if(R*v>yg){const k=yg/R;xe.getState().setDeformLoadError(`Scale clamped to ${k.toFixed(1)} to avoid Float32 overflow.`),v=k}}e.setDeformScale(v);const L=s==null?void 0:s.getMaterial();s&&L&&s.setDeformScale(v),t&&a&&(l&&u==="overlay"&&v>0?t.createOverlayWireframe(y,a):t.clearOverlay(a))},[u,d,l,r,e,s,t,a])}function Gs(r,e){r.clearDisplacement(e),xe.getState().setDisplacementValues(null),xe.getState().setDeformLoadError(null)}function pT(r){const e=new Float32Array(r.length*3);for(let t=0;t<r.length;t++){const s=r[t],[a,l,u]=l_(s+1);e[t*3]=a,e[t*3+1]=l,e[t*3+2]=u}return e}function mT(r){const e=new Float32Array(r.length*3);for(let t=0;t<r.length;t++){const s=r[t],[a,l,u]=l_(s+1);e[t*3]=a,e[t*3+1]=l,e[t*3+2]=u}return e}class gT{constructor(e,t){Gt(this,"pickingTarget");Gt(this,"pickingScene");Gt(this,"pickingMeshes",[]);Gt(this,"pixelBuffer");this.pickingTarget=new Pr(e,t,{format:Yn,type:Ci,minFilter:An,magFilter:An}),this.pickingScene=new i_,this.pixelBuffer=new Uint8Array(4)}buildPickingScene(e,t,s,a){if(this.clearPickingScene(),e.getAttribute("position").count===0)return;const u=e.getAttribute("sourceNodeIndex"),d=e.getAttribute("sourceElementIndex");if(!u)return;const h=a==="element"&&d?pT(d.array):mT(u.array),p=e.clone();p.setAttribute("color",new Kt(h,3));const _=new bi({vertexShader:`
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
      `,uniforms:{u_deform_scale:{value:0}},side:jn}),g=new ai(p,_);this.pickingScene.add(g),this.pickingMeshes.push(g)}pick(e,t,s,a,l){e.setRenderTarget(this.pickingTarget),e.render(this.pickingScene,t),e.setRenderTarget(null),e.readRenderTargetPixels(this.pickingTarget,s,this.pickingTarget.height-a,1,1,this.pixelBuffer);const u=_T(this.pixelBuffer[0],this.pixelBuffer[1],this.pixelBuffer[2]);return u===0?null:{mode:l,id:u-1}}resize(e,t){this.pickingTarget.setSize(e,t)}setDeformScale(e){for(const t of this.pickingMeshes){const s=t.material;s.uniforms.u_deform_scale&&(s.uniforms.u_deform_scale.value=e)}}clearPickingScene(){for(const e of this.pickingMeshes)this.pickingScene.remove(e),e.geometry.dispose(),e.material.dispose();this.pickingMeshes=[]}dispose(){this.clearPickingScene(),this.pickingTarget.dispose()}}function l_(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function _T(r,e,t){return r<<16|e<<8|t}const c_=({pickedEntity:r})=>{const e=xe(h=>h.nodeCoords_f64),t=xe(h=>h.fieldValues_f64),s=xe(h=>h.fields),a=xe(h=>h.activeFieldId),l=xe(h=>h.fieldLoadError);if(!r)return null;const u=s.find(h=>h.id===a),d=u&&t&&!l;return K.jsxs("div",{className:"panel-overlay panel-overlay--info",children:[K.jsxs("div",{style:{fontWeight:600,marginBottom:8,fontSize:12},children:[r.mode==="node"?"⊙ Node":"◻ Element"," #",r.id]}),r.mode==="node"&&K.jsx("div",{style:{fontSize:10,color:"var(--text-secondary)",marginBottom:6,fontStyle:"italic"},children:"Nearest surface vertex (MVP approximation)"}),r.mode==="node"&&e&&K.jsxs(K.Fragment,{children:[K.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Coordinates (Float64)"}),["X","Y","Z"].map((h,p)=>{var _;return K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:h}),K.jsx("span",{className:"info-panel__value",children:((_=e[r.id*3+p])==null?void 0:_.toPrecision(15))??"N/A"})]},h)}),d&&u.location==="nodal"&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:8,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),K.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})]}),r.mode==="element"&&K.jsx(K.Fragment,{children:d&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),K.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})}),u&&l&&K.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",marginTop:8},children:["⚠ ",l]}),!u&&K.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4},children:"Select a field to see probe values."})]})};function vT(r,e){const s=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/progress/${r}`,a=new WebSocket(s);return a.onmessage=l=>{try{const u=JSON.parse(l.data);e(u)}catch{console.warn("[WS] Failed to parse progress message:",l.data)}},a.onerror=l=>{console.error("[WS] WebSocket error:",l)},a.onclose=()=>{console.info(`[WS] Connection closed for model ${r}`)},()=>{(a.readyState===WebSocket.OPEN||a.readyState===WebSocket.CONNECTING)&&a.close()}}const Sg=1e3,xT=6e4,u_={length:"unspecified",force:"unspecified",time:"unspecified",temperature:"unspecified",declared_system:"unspecified"},yT={source_filename:"Unknown",file_format:"unknown",format_version:"unknown",solver_name:"unknown",solver_version:"unknown",title:"Untitled model",unit_system:u_,coordinate_system:"unspecified"};async function ST(r){console.info(`[ModelBootstrap] Status fetch start for ${r}`);const e=await Ko(`/models/${r}/status`);return console.info("[ModelBootstrap] Status fetch result",{modelId:r,response:e}),e}function MT(r,e){let t=!1,s,a=null;const l=Date.now(),u=()=>{t=!0,s!==void 0&&window.clearTimeout(s),a&&(a(),a=null)},d=g=>{console.info("[ModelBootstrap] Polling stopped",{modelId:r,reason:g}),u()},h=g=>{s=window.setTimeout(()=>{_()},Sg),console.info("[ModelBootstrap] Polling scheduled",{modelId:r,status:g,delayMs:Sg})},p=()=>{a||(console.info(`[ModelBootstrap] Polling start for ${r}`),a=vT(r,g=>{var x;t||(console.info("[ModelBootstrap] Progress message",{modelId:r,message:g}),(x=e.onProgress)==null||x.call(e,g),(g.status==="ready"||g.status==="error")&&_())}))},_=async()=>{if(!t)try{const g=await ST(r);if(console.info("[ModelBootstrap] Status response",{modelId:r,status:g.status,response:g}),e.onStatus(g),g.status==="uploading"||g.status==="parsing"){if(p(),Date.now()-l>=xT){d("timeout"),e.onTimeout();return}h(g.status);return}d(`terminal:${g.status}`)}catch(g){d("request-error"),e.onError(g instanceof Error?g:new Error("Unknown bootstrap error"))}};return _(),u}async function ET(r){console.info(`[Viewport] Metadata fetch start for ${r}`);const e=await Ko(`/models/${r}/metadata`),t=RT(e),s=CT(e.warnings);return console.info("[Viewport] Metadata fetch result",{modelId:r,warnings:s.length}),{metadata:t,warnings:s}}async function wT(r){var s;console.info(`[Viewport] Tree fetch start for ${r}`);const e=await Ko(`/models/${r}/tree`),t=ec(e);return console.info("[Viewport] Tree parse result",{modelId:r,root:t.name,childCount:((s=t.children)==null?void 0:s.length)??0}),t}async function TT(r){console.info(`[Viewport] Fields fetch start for ${r}`);const t=(await Ko(`/models/${r}/fields`)).map(bT);return console.info("[Viewport] Fields fetch result",{modelId:r,count:t.length}),t}async function AT(r){console.info(`[Viewport] Sets fetch start for ${r}`);const e=await Ko(`/models/${r}/sets`);return console.info("[Viewport] Sets fetch result",{modelId:r,count:e.length}),e}function CT(r){return r?r.map(e=>typeof e=="string"?{category:"Import Warning",message:e,severity:"warning",dismissible:!1}:e):[]}function RT(r){var t;const e={...u_,...((t=r.metadata)==null?void 0:t.unit_system)??{},...r.unit_system??{}};return{...yT,...r.metadata,unit_system:e}}function bT(r){const e=r.n_components??r.components??1,t=r.n_timesteps??r.timestep_count??1;return{id:r.id,name:r.name,location:r.location,n_components:e,n_timesteps:t,timesteps:Array.from({length:t},(s,a)=>({step_index:a,time_value:null})),provenance:{source_field_name:r.name,source_location:r.location,extrapolation_applied:!1,averaging_applied:!1,averaging_method:null,coordinate_system:"unspecified",warnings:[]}}}function ec(r){var s,a,l,u;if("type"in r)return r;const e=r.assembly??{},t=[...((s=e.children)==null?void 0:s.map(ec))??[],...((a=e.instances)==null?void 0:a.map((d,h)=>PT(d,h)))??[],...((l=e.parts)==null?void 0:l.map((d,h)=>d_(d,h)))??[],...((u=e.sets)==null?void 0:u.map((d,h)=>Rf(d,h)))??[]];return{id:e.id??"assembly-root",name:e.name??"Assembly",type:"assembly",children:t}}function PT(r,e){var t,s,a;return{id:r.id??`instance-${e}`,name:r.name??`Instance ${e+1}`,type:"instance",children:[...((t=r.children)==null?void 0:t.map(ec))??[],...((s=r.parts)==null?void 0:s.map((l,u)=>d_(l,u)))??[],...((a=r.sets)==null?void 0:a.map((l,u)=>Rf(l,u)))??[]]}}function d_(r,e){var t,s;return{id:r.id??`part-${e}`,name:r.name??`Part ${e+1}`,type:"part",children:[...((t=r.children)==null?void 0:t.map(ec))??[],...((s=r.sets)==null?void 0:s.map((a,l)=>Rf(a,l)))??[]]}}function Rf(r,e){return{id:r.id??`set-${e}`,name:r.name??`Set ${e+1}`,type:r.set_type==="element"?"element_set":"node_set",children:[]}}const Mg=3e4;class f_ extends Error{constructor(e,t){super(`Bootstrap timed out after ${t}ms during ${e}`),this.step=e,this.timeoutMs=t,this.name="BootstrapTimeoutError"}}function LT(r,e){return new Promise((t,s)=>{const a=window.setTimeout(()=>{s(new f_(e(),Mg))},Mg);r().then(l=>{window.clearTimeout(a),t(l)},l=>{window.clearTimeout(a),s(l)})})}function DT(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debugGeometry")==="1"}const NT=({containerRef:r})=>{var te;const e=Ze.useRef(null),t=Ze.useRef(null),s=Ze.useRef(null),a=Ze.useRef(null),l=Ze.useRef(null),u=Ze.useRef(null),d=Ze.useRef(null),[h,p]=Ze.useState(!0),[_,g]=Ze.useState(null);fT(l.current,s.current),hT(u.current,s.current,a.current,l.current,((te=t.current)==null?void 0:te.scene)??null);const x=xe(J=>J.modelId),S=xe(J=>J.status),w=xe(J=>J.bootstrapStatus),E=xe(J=>J.setMetadata),y=xe(J=>J.setWarnings),v=xe(J=>J.setTree),D=xe(J=>J.setFields),L=xe(J=>J.setSets),R=xe(J=>J.setNodeCoords),k=xe(J=>J.setSurfaceData),I=xe(J=>J.setActiveFieldId),F=xe(J=>J.setBootstrapLoading),O=xe(J=>J.setBootstrapLoaded),b=xe(J=>J.setBootstrapIdle),C=xe(J=>J.setBootstrapError),V=Rt(J=>J.wireframeVisible),de=Rt(J=>J.partVisibility),ee=Ze.useRef(null);if(Ze.useEffect(()=>{ee.current=null,b()},[x,b]),Ze.useEffect(()=>{yd.isWebGL2Available()||p(!1)},[]),Ze.useEffect(()=>{const J=performance;if(J.memory){const W=J.memory.usedJSHeapSize/1048576;W>2048?console.error("[Memory] Heap exceeds 2GB - refusing further loads"):W>1536&&console.warn("[Memory] Heap approaching 1.5GB - performance may degrade")}},[S]),Ze.useEffect(()=>{const J=e.current;if(!J||!h||!yd.isWebGL2Available()){p(!1);return}let W=null;try{W=new yd(J),t.current=W,s.current=new Kw({debugMaterialMode:DT()}),a.current=new Zw,l.current=new cT,u.current=new dT,d.current=new gT(J.clientWidth,J.clientHeight),W.start(),console.info("[Viewport] Scene mounted")}catch(he){console.error("[Viewport] Renderer initialization failure",he),p(!1),xe.getState().setBootstrapError("renderer initialization",`Bootstrap failed during renderer initialization: ${he instanceof Error?he.message:"Unknown renderer error"}`);return}const se=()=>{var he;if(W.renderer){const ge=W.renderer.domElement;(he=d.current)==null||he.resize(ge.width,ge.height)}};return window.addEventListener("resize",se),()=>{var he;window.removeEventListener("resize",se),W==null||W.dispose(),(he=d.current)==null||he.dispose(),t.current=null}},[h]),Ze.useEffect(()=>{if(S!=="ready"||!x||w==="loading"||w==="loaded"&&ee.current===x)return;let J=!1,W="bootstrap";const se=Me=>{W=Me,console.info("[Viewport] Bootstrap step",{modelId:x,step:Me}),J||F(Me)},he=(Me,be)=>{if(J)return;const $e=be instanceof Error?be.message:"Failed to load model";console.error("[Viewport] Bootstrap failure",{modelId:x,step:Me,error:be}),C(Me,`Bootstrap failed during ${Me}: ${$e}`)},ge=async()=>{const Me=t.current,be=s.current,$e=a.current;if(!Me||!be||!$e)throw new Error("Scene managers are not initialized");se("loading metadata");const yt=ET(x),pt=wT(x),Lt=TT(x),j=AT(x);se("fetching geometry");const[jt,st]=await Promise.all([ff(`/models/${x}/nodes`),o0(`/models/${x}/surfaces`)]);console.info("[Viewport] Nodes headers",{modelId:x,dtype:jt.meta.dtype,shape:jt.meta.shape,byteOrder:jt.meta.byteOrder}),console.info("[Viewport] Surfaces headers",{modelId:x,dtype:st.headers.dtype,byteOrder:st.headers.byteOrder,shape:st.headers.shape,offsets:st.headers.offsets});const lt=st.surfaceIndices,Ke=st.surfaceNormals,St=st.surfaceElementMap,Ge=Af(jt.buffer,jt.meta.dtype);console.info("[Viewport] Parsed nodes length",{modelId:x,length:Ge.length}),console.info("[Viewport] Parsed surface indices length",{modelId:x,length:lt.length}),console.info("[Viewport] Parsed surface normals length",{modelId:x,length:Ke.length}),console.info("[Viewport] Parsed surface element map length",{modelId:x,length:St.length}),J||(R(Ge),k(lt,Ke,St)),se("creating geometry"),console.info("[Viewport] Geometry creation started",{modelId:x}),be.buildMesh(Ge,lt,Ke,St,new Map,Me.scene);const P=be.getBaseGeometry();P&&$e.createWireframe(P,Me.scene),Me.zoomToFit(),console.info("[Viewport] Geometry creation succeeded",{modelId:x}),console.info("[Viewport] Renderer init result",{modelId:x,nodeCount:Ge.length/3,triangleCount:lt.length/3}),se("fetching panels");const[T,Z,me,ye]=await Promise.allSettled([yt,pt,Lt,j]);T.status==="fulfilled"?(console.info("[Viewport] Metadata loaded",{modelId:x}),J||(E(T.value.metadata),y(T.value.warnings??[])),T.value.metadata.unit_system.declared_system==="unspecified"&&xe.getState().addWarning({category:"Missing Units",message:"Units not declared. Values shown without unit context.",severity:"warning",dismissible:!1})):console.error("[Viewport] Non-blocking metadata fetch failure",{modelId:x,error:T.reason}),Z.status==="fulfilled"?(console.info("[Viewport] Tree loaded",{modelId:x}),J||v(Z.value)):(console.error("[Viewport] Non-blocking tree fetch failure",{modelId:x,error:Z.reason}),J||v({id:"assembly-root",name:"Assembly",type:"assembly",children:[]})),me.status==="fulfilled"?(console.info("[Viewport] Fields loaded",{modelId:x,count:me.value.length}),J||D(me.value),me.value.length>0&&!xe.getState().activeFieldId&&I(me.value[0].id)):(console.error("[Viewport] Non-blocking fields fetch failure",{modelId:x,error:me.reason}),J||D([])),ye.status==="fulfilled"?J||L(ye.value):(console.error("[Viewport] Non-blocking sets fetch failure",{modelId:x,error:ye.reason}),J||L([])),J||(ee.current=x,O())};return console.info(`[Viewport] Status became ready for ${x}`),console.info(`[Viewport] Bootstrap start for ${x}`),LT(ge,()=>W).catch(Me=>{if(Me instanceof f_){if(J)return;console.error("[Viewport] Bootstrap timeout",{modelId:x,step:Me.step,timeoutMs:Me.timeoutMs}),C(Me.step,`Bootstrap timed out after ${Me.timeoutMs/1e3} seconds during ${Me.step}`);return}he(W,Me)}),()=>{J=!0}},[x,I,C,O,F,D,b,E,R,L,k,v,y,S]),Ze.useEffect(()=>{var J;(J=a.current)==null||J.setVisible(V)},[V]),Ze.useEffect(()=>{const J=s.current;if(!J)return;const W=Object.entries(de);if(W.length===0){J.showAll();return}for(const[se,he]of W)J.setPartVisible(se,he)},[de]),!h)return K.jsxs("div",{className:"webgl-fallback",children:[K.jsx("div",{className:"webgl-fallback__title",children:"WebGL2 Not Available"}),K.jsx("div",{className:"webgl-fallback__text",children:"Your browser does not support WebGL2. The 3D viewer requires WebGL2 for rendering. You can still view model metadata and text-based summaries."})]});const fe=Rt(J=>J.pickMode),pe=Rt(J=>J.deformMode),le=Rt(J=>J.deformScale),ce=xe(J=>J.surfaceElementMap),z=xe(J=>J.nodeCoords_f64),ue=Ze.useRef({mode:"",gen:0}),oe=Ze.useRef(0);Ze.useEffect(()=>{S==="ready"&&ce&&(oe.current+=1)},[S,ce]),Ze.useEffect(()=>{const J=d.current,W=s.current;if(!J||!W||S!=="ready"||!ce)return;const se=W.getBaseGeometry();if(!se)return;const he={mode:fe,gen:oe.current};if(ue.current.mode===he.mode&&ue.current.gen===he.gen)return;const ge=z?z.length/3:0;J.buildPickingScene(se,ce,ge,fe),ue.current=he},[fe,S,ce,z]),Ze.useEffect(()=>{const J=d.current;J&&J.setDeformScale(pe==="undeformed"?0:le)},[pe,le]);const U=Ze.useCallback(J=>{const W=d.current,se=t.current;if(!W||!se||S!=="ready")return;const ge=se.renderer.domElement.getBoundingClientRect(),Me=se.renderer.getPixelRatio(),be=Math.round((J.clientX-ge.left)*Me),$e=Math.round((J.clientY-ge.top)*Me),yt=W.pick(se.renderer,se.camera,be,$e,fe);g(yt?{mode:yt.mode,id:yt.id}:null)},[fe,S]);return K.jsx("div",{ref:e,onClick:U,style:{width:"100%",height:"100%",position:"relative"},children:K.jsx(c_,{pickedEntity:_})})},IT=()=>{var h,p;const r=xe(_=>_.fields),e=xe(_=>_.activeFieldId),t=xe(_=>_.metadata),s=xe(_=>_.fieldNanCount),a=Rt(_=>_.colorMapConfig),l=Ze.useRef(null),u=r.find(_=>_.id===e);if(Ze.useEffect(()=>{const _=l.current;if(!_||!u)return;const g=_.getContext("2d");if(!g)return;const x=_.width,S=_.height;for(let w=0;w<S;w++){const E=1-w/S,[y,v,D]=Qw(a.lut_name,E);g.fillStyle=`rgb(${y}, ${v}, ${D})`,g.fillRect(0,w,x,1)}},[u,a]),!u)return null;const d=((h=t==null?void 0:t.unit_system)==null?void 0:h.declared_system)==="unspecified"?"":((p=t==null?void 0:t.unit_system)==null?void 0:p.length)??"";return K.jsx("div",{className:"panel-overlay panel-overlay--legend",children:K.jsxs("div",{className:"color-legend",children:[K.jsxs("div",{className:"color-legend__title",children:[u.name,u.n_components>1?` (${u.n_components} comp)`:""]}),K.jsxs("div",{style:{display:"flex",gap:6},children:[K.jsx("canvas",{ref:l,width:24,height:200,className:"color-legend__gradient"}),K.jsxs("div",{className:"color-legend__labels",style:{height:200,padding:"2px 0"},children:[K.jsxs("span",{children:[a.max_value.toPrecision(4),d?` ${d}`:""]}),K.jsx("span",{children:((a.max_value+a.min_value)/2).toPrecision(4)}),K.jsxs("span",{children:[a.min_value.toPrecision(4),d?` ${d}`:""]})]})]}),K.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:4},children:[u.location," • ",a.lut_name,a.lut_name==="jet"&&K.jsx("span",{style:{color:"var(--accent-warning)",marginLeft:4},children:"⚠ not perceptually uniform"})]}),s>0&&K.jsxs("div",{style:{fontSize:10,color:"var(--accent-warning)",marginTop:2},children:[s," NaN value",s!==1?"s":""," (grey)"]})]})})},UT=()=>{const r=xe(t=>t.metadata);if(!r)return K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No metadata"});const e=[["File",r.source_filename],["Format",`${r.file_format} (${r.format_version})`],["Solver",r.solver_name],["Version",r.solver_version],["Title",r.title],["Coord System",r.coordinate_system],["Length Unit",r.unit_system.length],["Force Unit",r.unit_system.force],["Time Unit",r.unit_system.time],["Temp Unit",r.unit_system.temperature],["System",r.unit_system.declared_system]];return K.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:e.map(([t,s])=>K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:t}),K.jsx("span",{className:"info-panel__value",style:{color:s==="unspecified"||s==="Not specified"?"var(--accent-warning)":void 0},children:s})]},t))})},FT=()=>{const r=xe(d=>d.warnings),[e,t]=Ze.useState(new Set),[s,a]=Ze.useState(!1),l=r.filter((d,h)=>d.dismissible?!e.has(h):!0);if(l.length===0)return null;const u=d=>{t(h=>new Set(h).add(d))};return K.jsxs("div",{className:"panel-overlay panel-overlay--warning",children:[K.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:8},onClick:()=>a(!s),children:[K.jsxs("span",{style:{fontWeight:600},children:["⚠ ",l.length," warning",l.length!==1?"s":""]}),K.jsx("span",{style:{fontSize:10},children:s?"▲":"▼"})]}),s&&K.jsx("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:4},children:r.map((d,h)=>d.dismissible&&e.has(h)?null:K.jsxs("div",{className:"warning-banner",children:[K.jsxs("span",{style:{flex:1},children:[K.jsxs("strong",{children:["[",d.category,"]"]})," ",d.message]}),d.dismissible&&K.jsx("button",{className:"warning-banner__close",onClick:p=>{p.stopPropagation(),u(h)},children:"✕"})]},h))})]})},OT=()=>{const r=new URLSearchParams(window.location.search).get("modelId"),e=xe(O=>O.modelId),t=xe(O=>O.status),s=xe(O=>O.bootstrapStatus),a=xe(O=>O.warnings),l=xe(O=>O.tree),u=xe(O=>O.metadata),d=xe(O=>O.fields),h=xe(O=>O.activeFieldId),p=Ze.useRef(null),_=xe(O=>O.setModelId),g=xe(O=>O.setStatus),x=xe(O=>O.setErrorMessage),S=xe(O=>O.setParseProgress),w=xe(O=>O.resetModel),E=xe(O=>O.setBootstrapIdle),y=Rt(O=>O.resetView);Ze.useEffect(()=>{!r||e===r||(console.info(`[App] Detected modelId from URL: ${r}`),w(),y(),_(r),S(0),x(null),E())},[e,r,w,y,E,x,_,S]),Ze.useEffect(()=>{if(e&&!(t==="ready"||t==="error"))return console.info("[App] Starting status lifecycle monitor",{modelId:e,status:t}),MT(e,{onStatus:O=>{if(console.info("[App] Status response payload",{modelId:e,response:O}),O.status==="ready"){console.info(`[App] Transition to ready for ${e}`),g("ready"),S(100);return}if(O.status==="error"){g("error"),x(O.error_message??"Model parsing failed");return}g(O.status)},onProgress:O=>{S(O.progress*100)},onError:O=>{console.error("[App] Bootstrap error",O),g("error"),x(`Status polling failed: ${O.message||"Failed to bootstrap model"}`)},onTimeout:()=>{const O="Model parsing timed out after 60 seconds";console.error("[App] Bootstrap timeout",{modelId:e}),g("error"),x(O)}})},[e,x,S,g,t]);const v=t==="ready",D=u!==null||l!==null||d.length>0,L=v||t==="error"&&D,R=!!e&&t==="idle",k=t==="parsing"||t==="uploading",I=t==="ready"&&s!=="loaded",F=!e&&t!=="ready";return K.jsxs("div",{className:"app-layout",children:[K.jsx(v0,{}),K.jsxs("div",{className:"sidebar",children:[(F||t==="parsing"||t==="error")&&K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Upload / Status"}),K.jsx(f0,{})]}),L&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Model Tree"}),K.jsx(h0,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Field"}),K.jsx(m0,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Timestep"}),K.jsx(g0,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Deformation"}),K.jsx(_0,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Metadata"}),K.jsx(UT,{})]})]})]}),K.jsxs("div",{className:"viewport",ref:p,children:[t==="idle"&&!e?K.jsx("div",{className:"no-data-message",children:"Upload a VTK/VTU file to begin"}):t==="uploading"?K.jsx("div",{className:"no-data-message",children:"Uploading..."}):R?K.jsx("div",{className:"no-data-message",children:"Checking model status..."}):k?K.jsx("div",{className:"no-data-message",children:e?`Parsing ${e}...`:"Parsing..."}):t==="error"?K.jsx("div",{className:"no-data-message",style:{color:"var(--accent-danger)"},children:"Error loading model. Check sidebar for details."}):K.jsxs(K.Fragment,{children:[K.jsx(NT,{containerRef:p}),I&&K.jsx("div",{className:"no-data-message",children:"Loading model..."})]}),L&&h&&K.jsx(IT,{}),L&&K.jsx(c_,{}),a.length>0&&K.jsx(FT,{})]})]})};n0.createRoot(document.getElementById("root")).render(K.jsx(Wo.StrictMode,{children:K.jsx(OT,{})}));
