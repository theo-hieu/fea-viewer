var Pv=Object.defineProperty;var Dv=(s,e,t)=>e in s?Pv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var mn=(s,e,t)=>Dv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Du={exports:{}},Oo={},Lu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Lv(){if(Vp)return ht;Vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(I,ie,Ie){this.props=I,this.context=ie,this.refs=T,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(I,ie,Ie){this.props=I,this.context=ie,this.refs=T,this.updater=Ie||S}var L=D.prototype=new _;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,V=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(I,ie,Ie){var Q,ue={},Ee=null,xe=null;if(ie!=null)for(Q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)V.call(ie,Q)&&!U.hasOwnProperty(Q)&&(ue[Q]=ie[Q]);var Ce=arguments.length-2;if(Ce===1)ue.children=Ie;else if(1<Ce){for(var Ue=Array(Ce),Qe=0;Qe<Ce;Qe++)Ue[Qe]=arguments[Qe+2];ue.children=Ue}if(I&&I.defaultProps)for(Q in Ce=I.defaultProps,Ce)ue[Q]===void 0&&(ue[Q]=Ce[Q]);return{$$typeof:s,type:I,key:Ee,ref:xe,props:ue,_owner:F.current}}function b(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function B(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return ie[Ie]})}var ae=/\/+/g;function ee(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):ie.toString(36)}function de(I,ie,Ie,Q,ue){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,ue=ue(xe),I=Q===""?"."+ee(xe,0):Q,R(ue)?(Ie="",I!=null&&(Ie=I.replace(ae,"$&/")+"/"),de(ue,ie,Ie,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=b(ue,Ie+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(ae,"$&/")+"/")+I)),ie.push(ue)),1;if(xe=0,Q=Q===""?".":Q+":",R(I))for(var Ce=0;Ce<I.length;Ce++){Ee=I[Ce];var Ue=Q+ee(Ee,Ce);xe+=de(Ee,ie,Ie,Ue,ue)}else if(Ue=x(I),typeof Ue=="function")for(I=Ue.call(I),Ce=0;!(Ee=I.next()).done;)Ee=Ee.value,Ue=Q+ee(Ee,Ce++),xe+=de(Ee,ie,Ie,Ue,ue);else if(Ee==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function he(I,ie,Ie){if(I==null)return I;var Q=[],ue=0;return de(I,Q,"","",function(Ee){return ie.call(Ie,Ee,ue++)}),Q}function oe(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},k={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(I,ie,Ie){he(I,function(){ie.apply(this,arguments)},Ie)},count:function(I){var ie=0;return he(I,function(){ie++}),ie},toArray:function(I){return he(I,function(ie){return ie})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ht.Component=y,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ht.act=se,ht.cloneElement=function(I,ie,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=E({},I.props),ue=I.key,Ee=I.ref,xe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=F.current),ie.key!==void 0&&(ue=""+ie.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(Ue in ie)V.call(ie,Ue)&&!U.hasOwnProperty(Ue)&&(Q[Ue]=ie[Ue]===void 0&&Ce!==void 0?Ce[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ie;else if(1<Ue){Ce=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)Ce[Qe]=arguments[Qe+2];Q.children=Ce}return{$$typeof:s,type:I.type,key:ue,ref:Ee,props:Q,_owner:xe}},ht.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},ht.createElement=j,ht.createFactory=function(I){var ie=j.bind(null,I);return ie.type=I,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(I){return{$$typeof:d,render:I}},ht.isValidElement=C,ht.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:oe}},ht.memo=function(I,ie){return{$$typeof:p,type:I,compare:ie===void 0?null:ie}},ht.startTransition=function(I){var ie=k.transition;k.transition={};try{I()}finally{k.transition=ie}},ht.unstable_act=se,ht.useCallback=function(I,ie){return ce.current.useCallback(I,ie)},ht.useContext=function(I){return ce.current.useContext(I)},ht.useDebugValue=function(){},ht.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ht.useEffect=function(I,ie){return ce.current.useEffect(I,ie)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(I,ie,Ie){return ce.current.useImperativeHandle(I,ie,Ie)},ht.useInsertionEffect=function(I,ie){return ce.current.useInsertionEffect(I,ie)},ht.useLayoutEffect=function(I,ie){return ce.current.useLayoutEffect(I,ie)},ht.useMemo=function(I,ie){return ce.current.useMemo(I,ie)},ht.useReducer=function(I,ie,Ie){return ce.current.useReducer(I,ie,Ie)},ht.useRef=function(I){return ce.current.useRef(I)},ht.useState=function(I){return ce.current.useState(I)},ht.useSyncExternalStore=function(I,ie,Ie){return ce.current.useSyncExternalStore(I,ie,Ie)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var Hp;function rf(){return Hp||(Hp=1,Lu.exports=Lv()),Lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Nv(){if(Gp)return Oo;Gp=1;var s=rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var v,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(g[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=u,Oo.jsxs=u,Oo}var Wp;function Iv(){return Wp||(Wp=1,Du.exports=Nv()),Du.exports}var K=Iv(),pt=rf();const Wo=fg(pt);var rl={},Nu={exports:{}},In={},Iu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Uv(){return Xp||(Xp=1,(function(s){function e(k,le){var se=k.length;k.push(le);e:for(;0<se;){var I=se-1>>>1,ie=k[I];if(0<a(ie,le))k[I]=le,k[se]=ie,se=I;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var le=k[0],se=k.pop();if(se!==le){k[0]=se;e:for(var I=0,ie=k.length,Ie=ie>>>1;I<Ie;){var Q=2*(I+1)-1,ue=k[Q],Ee=Q+1,xe=k[Ee];if(0>a(ue,se))Ee<ie&&0>a(xe,ue)?(k[I]=xe,k[Ee]=se,I=Ee):(k[I]=ue,k[Q]=se,I=Q);else if(Ee<ie&&0>a(xe,se))k[I]=xe,k[Ee]=se,I=Ee;else break e}}return le}function a(k,le){var se=k.sortIndex-le.sortIndex;return se!==0?se:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],v=1,g=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=k)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function R(k){if(T=!1,L(k),!E)if(t(h)!==null)E=!0,oe(V);else{var le=t(p);le!==null&&ce(R,le.startTime-k)}}function V(k,le){E=!1,T&&(T=!1,_(j),j=-1),S=!0;var se=x;try{for(L(le),g=t(h);g!==null&&(!(g.expirationTime>le)||k&&!B());){var I=g.callback;if(typeof I=="function"){g.callback=null,x=g.priorityLevel;var ie=I(g.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(h)&&r(h),L(le)}else r(h);g=t(h)}if(g!==null)var Ie=!0;else{var Q=t(p);Q!==null&&ce(R,Q.startTime-le),Ie=!1}return Ie}finally{g=null,x=se,S=!1}}var F=!1,U=null,j=-1,b=5,C=-1;function B(){return!(s.unstable_now()-C<b)}function ae(){if(U!==null){var k=s.unstable_now();C=k;var le=!0;try{le=U(!0,k)}finally{le?ee():(F=!1,U=null)}}else F=!1}var ee;if(typeof D=="function")ee=function(){D(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=ae,ee=function(){he.postMessage(null)}}else ee=function(){y(ae,0)};function oe(k){U=k,F||(F=!0,ee())}function ce(k,le){j=y(function(){k(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(V))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return k()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=x;x=k;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(k,le,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,k={id:v++,callback:le,priorityLevel:k,startTime:se,expirationTime:ie,sortIndex:-1},se>I?(k.sortIndex=se,e(p,k),t(h)===null&&k===t(p)&&(T?(_(j),j=-1):T=!0,ce(R,se-I))):(k.sortIndex=ie,e(h,k),E||S||(E=!0,oe(V))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var le=x;return function(){var se=x;x=le;try{return k.apply(this,arguments)}finally{x=se}}}})(Uu)),Uu}var jp;function Fv(){return jp||(jp=1,Iu.exports=Uv()),Iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Ov(){if(Yp)return In;Yp=1;var s=rf(),e=Fv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(n){return h.call(g,n)?!0:h.call(v,n)?!1:p.test(n)?g[n]=!0:(v[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,c,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,I;function ie(n){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ie=!1;function Q(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var c=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){c=J}n.call(i.prototype)}else{try{throw Error()}catch(J){c=J}n()}}catch(J){if(J&&c&&typeof J.stack=="string"){for(var f=J.stack.split(`
`),m=c.stack.split(`
`),M=f.length-1,N=m.length-1;1<=M&&0<=N&&f[M]!==m[N];)N--;for(;1<=M&&0<=N;M--,N--)if(f[M]!==m[N]){if(M!==1||N!==1)do if(M--,N--,0>N||f[M]!==m[N]){var O=`
`+f[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=N);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function ue(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case b:return"Profiler";case j:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bt(n){n._valueTracker||(n._valueTracker=Qe(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function xn(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function dt(n,i){mt(n,i);var o=Ce(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ze(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ct(n,i,o){(i!=="number"||Nt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var qe=Array.isArray;function P(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ce(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(qe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ce(o)}}function me(n,i){var o=Ce(i.value),c=Ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function Je(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Je(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,re=null,pe=null;function Le(n){if(n=Mo(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xa(i),be(n.stateNode,n.type,i))}}function De(n){re?pe?pe.push(n):pe=[n]:re=n}function st(){if(re){var n=re,i=pe;if(pe=re=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Ut(n,i){return n(i)}function qt(){}var yt=!1;function Cn(n,i,o){if(yt)return n(i,o);yt=!0;try{return Ut(n,i,o)}finally{yt=!1,(re!==null||pe!==null)&&(qt(),st())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var c=xa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var is=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){is=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{is=!1}function Ri(n,i,o,c,f,m,M,N,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var bi=!1,br=null,Pr=!1,Ki=null,Jo={onError:function(n){bi=!0,br=n}};function rs(n,i,o,c,f,m,M,N,O){bi=!1,br=null,Ri.apply(Jo,arguments)}function ea(n,i,o,c,f,m,M,N,O){if(rs.apply(this,arguments),bi){if(bi){var J=br;bi=!1,br=null}else throw Error(t(198));Pr||(Pr=!0,Ki=J)}}function yi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(yi(n)!==n)throw Error(t(188))}function Jl(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return na(f),n;if(m===c)return na(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var M=!1,N=f.child;N;){if(N===o){M=!0,o=f,c=m;break}if(N===c){M=!0,c=f,o=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===o){M=!0,o=m,c=f;break}if(N===c){M=!0,c=m,o=f;break}N=N.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function A(n){return n=Jl(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,W=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,xt=e.unstable_IdlePriority,wt=null,vt=null;function cn(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Et,Ye=Math.log,li=Math.LN2;function Et(n){return n>>>=0,n===0?32:31-(Ye(n)/li|0)|0}var un=64,ci=4194304;function Zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var N=M&~f;N!==0?c=Zt(N):(m&=M,m!==0&&(c=Zt(m)))}else M=o&~f,M!==0?c=Zt(M):m!==0&&(c=Zt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ot(i),f=1<<o,c|=n[o],i&=~f;return c}function Lt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ot(m),N=1<<M,O=f[M];O===-1?((N&o)===0||(N&c)!==0)&&(f[M]=Lt(N,i)):O<=i&&(n.expiredLanes|=N),m&=~N}}function Pi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=un;return un<<=1,(un&4194240)===0&&(un=64),n}function Yn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Rn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function ia(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ot(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function ec(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ot(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Rt=0;function xf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yf,tc,Sf,Mf,Ef,nc=!1,ra=[],Qi=null,Ji=null,er=null,so=new Map,oo=new Map,tr=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&tc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Jg(n,i,o,c,f){switch(i){case"focusin":return Qi=ao(Qi,n,i,o,c,f),!0;case"dragenter":return Ji=ao(Ji,n,i,o,c,f),!0;case"mouseover":return er=ao(er,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,c,f)),!0}return!1}function wf(n){var i=Dr(n.target);if(i!==null){var o=yi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,Ef(n.priority,function(){Sf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);At=c,o.target.dispatchEvent(c),At=null}else return i=Mo(o),i!==null&&tc(i),n.blockedOn=o,!1;i.shift()}return!0}function Af(n,i,o){sa(n)&&o.delete(i)}function e_(){nc=!1,Qi!==null&&sa(Qi)&&(Qi=null),Ji!==null&&sa(Ji)&&(Ji=null),er!==null&&sa(er)&&(er=null),so.forEach(Af),oo.forEach(Af)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,e_)))}function co(n){function i(f){return lo(f,n)}if(0<ra.length){lo(ra[0],n);for(var o=1;o<ra.length;o++){var c=ra[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&lo(Qi,n),Ji!==null&&lo(Ji,n),er!==null&&lo(er,n),so.forEach(i),oo.forEach(i),o=0;o<tr.length;o++)c=tr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)wf(o),o.blockedOn===null&&tr.shift()}var ss=R.ReactCurrentBatchConfig,oa=!0;function t_(n,i,o,c){var f=Rt,m=ss.transition;ss.transition=null;try{Rt=1,ic(n,i,o,c)}finally{Rt=f,ss.transition=m}}function n_(n,i,o,c){var f=Rt,m=ss.transition;ss.transition=null;try{Rt=4,ic(n,i,o,c)}finally{Rt=f,ss.transition=m}}function ic(n,i,o,c){if(oa){var f=rc(n,i,o,c);if(f===null)Sc(n,i,c,aa,o),Tf(n,c);else if(Jg(f,n,i,o,c))c.stopPropagation();else if(Tf(n,c),i&4&&-1<Qg.indexOf(n)){for(;f!==null;){var m=Mo(f);if(m!==null&&yf(m),m=rc(n,i,o,c),m===null&&Sc(n,i,c,aa,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Sc(n,i,c,null,o)}}var aa=null;function rc(n,i,o,c){if(aa=null,n=H(c),n=Dr(n),n!==null)if(i=yi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return aa=n,null}function Cf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case tt:return 4;case it:case Xe:return 16;case xt:return 536870912;default:return 16}default:return 16}}var nr=null,sc=null,la=null;function Rf(){if(la)return la;var n,i=sc,o=i.length,c,f="value"in nr?nr.value:nr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===f[m-c];c++);return la=f.slice(n,1<c?1-c:void 0)}function ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function bf(){return!1}function Bn(n){function i(o,c,f,m,M){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ua:bf,this.isPropagationStopped=bf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Bn(os),uo=se({},os,{view:0,detail:0}),i_=Bn(uo),ac,lc,fo,da=se({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(ac=n.screenX-fo.screenX,lc=n.screenY-fo.screenY):lc=ac=0,fo=n),ac)},movementY:function(n){return"movementY"in n?n.movementY:lc}}),Pf=Bn(da),r_=se({},da,{dataTransfer:0}),s_=Bn(r_),o_=se({},uo,{relatedTarget:0}),cc=Bn(o_),a_=se({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),l_=Bn(a_),c_=se({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u_=Bn(c_),d_=se({},os,{data:0}),Df=Bn(d_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=p_[n])?!!i[n]:!1}function uc(){return m_}var g_=se({},uo,{key:function(n){if(n.key){var i=f_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?h_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(n){return n.type==="keypress"?ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),__=Bn(g_),v_=se({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Bn(v_),x_=se({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),y_=Bn(x_),S_=se({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),M_=Bn(S_),E_=se({},da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),T_=Bn(E_),w_=[9,13,27,32],dc=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var A_=d&&"TextEvent"in window&&!ho,Nf=d&&(!dc||ho&&8<ho&&11>=ho),If=" ",Uf=!1;function Ff(n,i){switch(n){case"keyup":return w_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function C_(n,i){switch(n){case"compositionend":return Of(i);case"keypress":return i.which!==32?null:(Uf=!0,If);case"textInput":return n=i.data,n===If&&Uf?null:n;default:return null}}function R_(n,i){if(as)return n==="compositionend"||!dc&&Ff(n,i)?(n=Rf(),la=sc=nr=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nf&&i.locale!=="ko"?null:i.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!b_[n.type]:i==="textarea"}function Bf(n,i,o,c){De(c),i=ga(i,"onChange"),0<i.length&&(o=new oc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var po=null,mo=null;function P_(n){ih(n,0)}function fa(n){var i=fs(n);if(_t(i))return n}function D_(n,i){if(n==="change")return i}var zf=!1;if(d){var fc;if(d){var hc="oninput"in document;if(!hc){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),hc=typeof Vf.oninput=="function"}fc=hc}else fc=!1;zf=fc&&(!document.documentMode||9<document.documentMode)}function Hf(){po&&(po.detachEvent("onpropertychange",Gf),mo=po=null)}function Gf(n){if(n.propertyName==="value"&&fa(mo)){var i=[];Bf(i,mo,n,H(n)),Cn(P_,i)}}function L_(n,i,o){n==="focusin"?(Hf(),po=i,mo=o,po.attachEvent("onpropertychange",Gf)):n==="focusout"&&Hf()}function N_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fa(mo)}function I_(n,i){if(n==="click")return fa(i)}function U_(n,i){if(n==="input"||n==="change")return fa(i)}function F_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:F_;function go(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ui(n[f],i[f]))return!1}return!0}function Wf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xf(n,i){var o=Wf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wf(o)}}function jf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yf(){for(var n=window,i=Nt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Nt(n.document)}return i}function pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function O_(n){var i=Yf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&jf(o.ownerDocument.documentElement,o)){if(c!==null&&pc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Xf(o,m);var M=Xf(o,c);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var k_=d&&"documentMode"in document&&11>=document.documentMode,ls=null,mc=null,_o=null,gc=!1;function qf(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gc||ls==null||ls!==Nt(c)||(c=ls,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&go(_o,c)||(_o=c,c=ga(mc,"onSelect"),0<c.length&&(i=new oc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ls)))}function ha(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var cs={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},_c={},Zf={};d&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function pa(n){if(_c[n])return _c[n];if(!cs[n])return n;var i=cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Zf)return _c[n]=i[o];return n}var $f=pa("animationend"),Kf=pa("animationiteration"),Qf=pa("animationstart"),Jf=pa("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){eh.set(n,i),l(i,[n])}for(var vc=0;vc<th.length;vc++){var xc=th[vc],B_=xc.toLowerCase(),z_=xc[0].toUpperCase()+xc.slice(1);ir(B_,"on"+z_)}ir($f,"onAnimationEnd"),ir(Kf,"onAnimationIteration"),ir(Qf,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Jf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function nh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ea(c,i,void 0,n),n.currentTarget=null}function ih(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var N=c[M],O=N.instance,J=N.currentTarget;if(N=N.listener,O!==m&&f.isPropagationStopped())break e;nh(f,N,J),m=O}else for(M=0;M<c.length;M++){if(N=c[M],O=N.instance,J=N.currentTarget,N=N.listener,O!==m&&f.isPropagationStopped())break e;nh(f,N,J),m=O}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Ft(n,i){var o=i[Cc];o===void 0&&(o=i[Cc]=new Set);var c=n+"__bubble";o.has(c)||(rh(i,n,2,!1),o.add(c))}function yc(n,i,o){var c=0;i&&(c|=4),rh(o,n,c,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[ma]){n[ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(V_.has(o)||yc(o,!1,n),yc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ma]||(i[ma]=!0,yc("selectionchange",!1,i))}}function rh(n,i,o,c){switch(Cf(i)){case 1:var f=t_;break;case 4:f=n_;break;default:f=ic}o=f.bind(null,i,o,n),f=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Sc(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;N!==null;){if(M=Dr(N),M===null)return;if(O=M.tag,O===5||O===6){c=m=M;continue e}N=N.parentNode}}c=c.return}Cn(function(){var J=m,ve=H(o),ye=[];e:{var ge=eh.get(n);if(ge!==void 0){var Ne=oc,ze=n;switch(n){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Ne=__;break;case"focusin":ze="focus",Ne=cc;break;case"focusout":ze="blur",Ne=cc;break;case"beforeblur":case"afterblur":Ne=cc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=s_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=y_;break;case $f:case Kf:case Qf:Ne=l_;break;case Jf:Ne=M_;break;case"scroll":Ne=i_;break;case"wheel":Ne=T_;break;case"copy":case"cut":case"paste":Ne=u_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Lf}var He=(i&4)!==0,Xt=!He&&n==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var z=J,Z;z!==null;){Z=z;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,Y!==null&&(Te=yn(z,Y),Te!=null&&He.push(yo(z,Te,Z)))),Xt)break;z=z.return}0<He.length&&(ge=new Ne(ge,ze,null,o,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&o!==At&&(ze=o.relatedTarget||o.fromElement)&&(Dr(ze)||ze[Di]))break e;if((Ne||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=J,ze=ze?Dr(ze):null,ze!==null&&(Xt=yi(ze),ze!==Xt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=J),Ne!==ze)){if(He=Pf,Te="onMouseLeave",Y="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(He=Lf,Te="onPointerLeave",Y="onPointerEnter",z="pointer"),Xt=Ne==null?ge:fs(Ne),Z=ze==null?ge:fs(ze),ge=new He(Te,z+"leave",Ne,o,ve),ge.target=Xt,ge.relatedTarget=Z,Te=null,Dr(ve)===J&&(He=new He(Y,z+"enter",ze,o,ve),He.target=Z,He.relatedTarget=Xt,Te=He),Xt=Te,Ne&&ze)t:{for(He=Ne,Y=ze,z=0,Z=He;Z;Z=us(Z))z++;for(Z=0,Te=Y;Te;Te=us(Te))Z++;for(;0<z-Z;)He=us(He),z--;for(;0<Z-z;)Y=us(Y),Z--;for(;z--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=us(He),Y=us(Y)}He=null}else He=null;Ne!==null&&sh(ye,ge,Ne,He,!1),ze!==null&&Xt!==null&&sh(ye,Xt,ze,He,!0)}}e:{if(ge=J?fs(J):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var je=D_;else if(kf(ge))if(zf)je=U_;else{je=N_;var $e=L_}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=I_);if(je&&(je=je(n,J))){Bf(ye,je,o,ve);break e}$e&&$e(n,ge,J),n==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch($e=J?fs(J):window,n){case"focusin":(kf($e)||$e.contentEditable==="true")&&(ls=$e,mc=J,_o=null);break;case"focusout":_o=mc=ls=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,qf(ye,o,ve);break;case"selectionchange":if(k_)break;case"keydown":case"keyup":qf(ye,o,ve)}var Ke;if(dc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else as?Ff(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Nf&&o.locale!=="ko"&&(as||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&as&&(Ke=Rf()):(nr=ve,sc="value"in nr?nr.value:nr.textContent,as=!0)),$e=ga(J,nt),0<$e.length&&(nt=new Df(nt,n,null,o,ve),ye.push({event:nt,listeners:$e}),Ke?nt.data=Ke:(Ke=Of(o),Ke!==null&&(nt.data=Ke)))),(Ke=A_?C_(n,o):R_(n,o))&&(J=ga(J,"onBeforeInput"),0<J.length&&(ve=new Df("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:J}),ve.data=Ke))}ih(ye,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ga(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=yn(n,o),m!=null&&c.unshift(yo(n,m,f)),m=yn(n,i),m!=null&&c.push(yo(n,m,f))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sh(n,i,o,c,f){for(var m=i._reactName,M=[];o!==null&&o!==c;){var N=o,O=N.alternate,J=N.stateNode;if(O!==null&&O===c)break;N.tag===5&&J!==null&&(N=J,f?(O=yn(o,m),O!=null&&M.unshift(yo(o,O,N))):f||(O=yn(o,m),O!=null&&M.push(yo(o,O,N)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var H_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function oh(n){return(typeof n=="string"?n:""+n).replace(H_,`
`).replace(G_,"")}function _a(n,i,o){if(i=oh(i),oh(n)!==i&&o)throw Error(t(425))}function va(){}var Mc=null,Ec=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,W_=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(n){return ah.resolve(null).then(n).catch(j_)}:wc;function j_(n){setTimeout(function(){throw n})}function Ac(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);co(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function lh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ds,So="__reactProps$"+ds,Di="__reactContainer$"+ds,Cc="__reactEvents$"+ds,Y_="__reactListeners$"+ds,q_="__reactHandles$"+ds;function Dr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=lh(n);n!==null;){if(o=n[Mi])return o;n=lh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[Mi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xa(n){return n[So]||null}var Rc=[],hs=-1;function sr(n){return{current:n}}function Ot(n){0>hs||(n.current=Rc[hs],Rc[hs]=null,hs--)}function It(n,i){hs++,Rc[hs]=n.current,n.current=i}var or={},dn=sr(or),bn=sr(!1),Lr=or;function ps(n,i){var o=n.type.contextTypes;if(!o)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(n){return n=n.childContextTypes,n!=null}function ya(){Ot(bn),Ot(dn)}function ch(n,i,o){if(dn.current!==or)throw Error(t(168));It(dn,i),It(bn,o)}function uh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,xe(n)||"Unknown",f));return se({},o,c)}function Sa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Lr=dn.current,It(dn,n),It(bn,bn.current),!0}function dh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=uh(n,i,Lr),c.__reactInternalMemoizedMergedChildContext=n,Ot(bn),Ot(dn),It(dn,n)):Ot(bn),It(bn,o)}var Li=null,Ma=!1,bc=!1;function fh(n){Li===null?Li=[n]:Li.push(n)}function Z_(n){Ma=!0,fh(n)}function ar(){if(!bc&&Li!==null){bc=!0;var n=0,i=Rt;try{var o=Li;for(Rt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Li=null,Ma=!1}catch(f){throw Li!==null&&(Li=Li.slice(n+1)),te(Ve,ar),f}finally{Rt=i,bc=!1}}return null}var ms=[],gs=0,Ea=null,Ta=0,qn=[],Zn=0,Nr=null,Ni=1,Ii="";function Ir(n,i){ms[gs++]=Ta,ms[gs++]=Ea,Ea=n,Ta=i}function hh(n,i,o){qn[Zn++]=Ni,qn[Zn++]=Ii,qn[Zn++]=Nr,Nr=n;var c=Ni;n=Ii;var f=32-ot(c)-1;c&=~(1<<f),o+=1;var m=32-ot(i)+f;if(30<m){var M=f-f%5;m=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Ni=1<<32-ot(i)+f|o<<f|c,Ii=m+n}else Ni=1<<m|o<<f|c,Ii=n}function Pc(n){n.return!==null&&(Ir(n,1),hh(n,1,0))}function Dc(n){for(;n===Ea;)Ea=ms[--gs],ms[gs]=null,Ta=ms[--gs],ms[gs]=null;for(;n===Nr;)Nr=qn[--Zn],qn[Zn]=null,Ii=qn[--Zn],qn[Zn]=null,Ni=qn[--Zn],qn[Zn]=null}var zn=null,Vn=null,Bt=!1,di=null;function ph(n,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function mh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Nr!==null?{id:Ni,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,zn=n,Vn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nc(n){if(Bt){var i=Vn;if(i){var o=i;if(!mh(n,i)){if(Lc(n))throw Error(t(418));i=rr(o.nextSibling);var c=zn;i&&mh(n,i)?ph(c,o):(n.flags=n.flags&-4097|2,Bt=!1,zn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,zn=n}}}function gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function wa(n){if(n!==zn)return!1;if(!Bt)return gh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Lc(n))throw _h(),Error(t(418));for(;i;)ph(n,i),i=rr(i.nextSibling)}if(gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Vn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?rr(n.stateNode.nextSibling):null;return!0}function _h(){for(var n=Vn;n;)n=rr(n.nextSibling)}function _s(){Vn=zn=null,Bt=!1}function Ic(n){di===null?di=[n]:di.push(n)}var $_=R.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var N=f.refs;M===null?delete N[m]:N[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Aa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vh(n){var i=n._init;return i(n._payload)}function xh(n){function i(Y,z){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[z],Y.flags|=16):Z.push(z)}}function o(Y,z){if(!n)return null;for(;z!==null;)i(Y,z),z=z.sibling;return null}function c(Y,z){for(Y=new Map;z!==null;)z.key!==null?Y.set(z.key,z):Y.set(z.index,z),z=z.sibling;return Y}function f(Y,z){return Y=mr(Y,z),Y.index=0,Y.sibling=null,Y}function m(Y,z,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<z?(Y.flags|=2,z):Z):(Y.flags|=2,z)):(Y.flags|=1048576,z)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function N(Y,z,Z,Te){return z===null||z.tag!==6?(z=wu(Z,Y.mode,Te),z.return=Y,z):(z=f(z,Z),z.return=Y,z)}function O(Y,z,Z,Te){var je=Z.type;return je===U?ve(Y,z,Z.props.children,Te,Z.key):z!==null&&(z.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&vh(je)===z.type)?(Te=f(z,Z.props),Te.ref=Eo(Y,z,Z),Te.return=Y,Te):(Te=$a(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Eo(Y,z,Z),Te.return=Y,Te)}function J(Y,z,Z,Te){return z===null||z.tag!==4||z.stateNode.containerInfo!==Z.containerInfo||z.stateNode.implementation!==Z.implementation?(z=Au(Z,Y.mode,Te),z.return=Y,z):(z=f(z,Z.children||[]),z.return=Y,z)}function ve(Y,z,Z,Te,je){return z===null||z.tag!==7?(z=Hr(Z,Y.mode,Te,je),z.return=Y,z):(z=f(z,Z),z.return=Y,z)}function ye(Y,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number")return z=wu(""+z,Y.mode,Z),z.return=Y,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case V:return Z=$a(z.type,z.key,z.props,null,Y.mode,Z),Z.ref=Eo(Y,null,z),Z.return=Y,Z;case F:return z=Au(z,Y.mode,Z),z.return=Y,z;case oe:var Te=z._init;return ye(Y,Te(z._payload),Z)}if(qe(z)||le(z))return z=Hr(z,Y.mode,Z,null),z.return=Y,z;Aa(Y,z)}return null}function ge(Y,z,Z,Te){var je=z!==null?z.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:N(Y,z,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return Z.key===je?O(Y,z,Z,Te):null;case F:return Z.key===je?J(Y,z,Z,Te):null;case oe:return je=Z._init,ge(Y,z,je(Z._payload),Te)}if(qe(Z)||le(Z))return je!==null?null:ve(Y,z,Z,Te,null);Aa(Y,Z)}return null}function Ne(Y,z,Z,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Z)||null,N(z,Y,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return Y=Y.get(Te.key===null?Z:Te.key)||null,O(z,Y,Te,je);case F:return Y=Y.get(Te.key===null?Z:Te.key)||null,J(z,Y,Te,je);case oe:var $e=Te._init;return Ne(Y,z,Z,$e(Te._payload),je)}if(qe(Te)||le(Te))return Y=Y.get(Z)||null,ve(z,Y,Te,je,null);Aa(z,Te)}return null}function ze(Y,z,Z,Te){for(var je=null,$e=null,Ke=z,nt=z=0,rn=null;Ke!==null&&nt<Z.length;nt++){Ke.index>nt?(rn=Ke,Ke=null):rn=Ke.sibling;var Tt=ge(Y,Ke,Z[nt],Te);if(Tt===null){Ke===null&&(Ke=rn);break}n&&Ke&&Tt.alternate===null&&i(Y,Ke),z=m(Tt,z,nt),$e===null?je=Tt:$e.sibling=Tt,$e=Tt,Ke=rn}if(nt===Z.length)return o(Y,Ke),Bt&&Ir(Y,nt),je;if(Ke===null){for(;nt<Z.length;nt++)Ke=ye(Y,Z[nt],Te),Ke!==null&&(z=m(Ke,z,nt),$e===null?je=Ke:$e.sibling=Ke,$e=Ke);return Bt&&Ir(Y,nt),je}for(Ke=c(Y,Ke);nt<Z.length;nt++)rn=Ne(Ke,Y,nt,Z[nt],Te),rn!==null&&(n&&rn.alternate!==null&&Ke.delete(rn.key===null?nt:rn.key),z=m(rn,z,nt),$e===null?je=rn:$e.sibling=rn,$e=rn);return n&&Ke.forEach(function(gr){return i(Y,gr)}),Bt&&Ir(Y,nt),je}function He(Y,z,Z,Te){var je=le(Z);if(typeof je!="function")throw Error(t(150));if(Z=je.call(Z),Z==null)throw Error(t(151));for(var $e=je=null,Ke=z,nt=z=0,rn=null,Tt=Z.next();Ke!==null&&!Tt.done;nt++,Tt=Z.next()){Ke.index>nt?(rn=Ke,Ke=null):rn=Ke.sibling;var gr=ge(Y,Ke,Tt.value,Te);if(gr===null){Ke===null&&(Ke=rn);break}n&&Ke&&gr.alternate===null&&i(Y,Ke),z=m(gr,z,nt),$e===null?je=gr:$e.sibling=gr,$e=gr,Ke=rn}if(Tt.done)return o(Y,Ke),Bt&&Ir(Y,nt),je;if(Ke===null){for(;!Tt.done;nt++,Tt=Z.next())Tt=ye(Y,Tt.value,Te),Tt!==null&&(z=m(Tt,z,nt),$e===null?je=Tt:$e.sibling=Tt,$e=Tt);return Bt&&Ir(Y,nt),je}for(Ke=c(Y,Ke);!Tt.done;nt++,Tt=Z.next())Tt=Ne(Ke,Y,nt,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Ke.delete(Tt.key===null?nt:Tt.key),z=m(Tt,z,nt),$e===null?je=Tt:$e.sibling=Tt,$e=Tt);return n&&Ke.forEach(function(bv){return i(Y,bv)}),Bt&&Ir(Y,nt),je}function Xt(Y,z,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:e:{for(var je=Z.key,$e=z;$e!==null;){if($e.key===je){if(je=Z.type,je===U){if($e.tag===7){o(Y,$e.sibling),z=f($e,Z.props.children),z.return=Y,Y=z;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&vh(je)===$e.type){o(Y,$e.sibling),z=f($e,Z.props),z.ref=Eo(Y,$e,Z),z.return=Y,Y=z;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}Z.type===U?(z=Hr(Z.props.children,Y.mode,Te,Z.key),z.return=Y,Y=z):(Te=$a(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=Eo(Y,z,Z),Te.return=Y,Y=Te)}return M(Y);case F:e:{for($e=Z.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===Z.containerInfo&&z.stateNode.implementation===Z.implementation){o(Y,z.sibling),z=f(z,Z.children||[]),z.return=Y,Y=z;break e}else{o(Y,z);break}else i(Y,z);z=z.sibling}z=Au(Z,Y.mode,Te),z.return=Y,Y=z}return M(Y);case oe:return $e=Z._init,Xt(Y,z,$e(Z._payload),Te)}if(qe(Z))return ze(Y,z,Z,Te);if(le(Z))return He(Y,z,Z,Te);Aa(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,z!==null&&z.tag===6?(o(Y,z.sibling),z=f(z,Z),z.return=Y,Y=z):(o(Y,z),z=wu(Z,Y.mode,Te),z.return=Y,Y=z),M(Y)):o(Y,z)}return Xt}var vs=xh(!0),yh=xh(!1),Ca=sr(null),Ra=null,xs=null,Uc=null;function Fc(){Uc=xs=Ra=null}function Oc(n){var i=Ca.current;Ot(Ca),n._currentValue=i}function kc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function ys(n,i){Ra=n,Uc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Uc!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ra===null)throw Error(t(308));xs=n,Ra.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Ur=null;function Bc(n){Ur===null?Ur=[n]:Ur.push(n)}function Sh(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Bc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ui(n,c)}function Ui(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(St&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ui(n,o)}return f=c.interleaved,f===null?(i.next=i,Bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ui(n,o)}function ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ec(n,o)}}function Eh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Pa(n,i,o,c){var f=n.updateQueue;lr=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var O=N,J=O.next;O.next=null,M===null?m=J:M.next=J,M=O;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==M&&(N===null?ve.firstBaseUpdate=J:N.next=J,ve.lastBaseUpdate=O))}if(m!==null){var ye=f.baseState;M=0,ve=J=O=null,N=m;do{var ge=N.lane,Ne=N.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ze=n,He=N;switch(ge=i,Ne=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Ne,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(Ne,ye,ge):ze,ge==null)break e;ye=se({},ye,ge);break e;case 2:lr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=f.effects,ge===null?f.effects=[N]:ge.push(N))}else Ne={eventTime:Ne,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(J=ve=Ne,O=ye):ve=ve.next=Ne,M|=ge;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(ve===null&&(O=ye),f.baseState=O,f.firstBaseUpdate=J,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);kr|=M,n.lanes=M,n.memoizedState=ye}}function Th(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var To={},Ei=sr(To),wo=sr(To),Ao=sr(To);function Fr(n){if(n===To)throw Error(t(174));return n}function Vc(n,i){switch(It(Ao,i),It(wo,n),It(Ei,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ot(Ei),It(Ei,i)}function Ss(){Ot(Ei),Ot(wo),Ot(Ao)}function wh(n){Fr(Ao.current);var i=Fr(Ei.current),o=Ge(i,n.type);i!==o&&(It(wo,n),It(Ei,o))}function Hc(n){wo.current===n&&(Ot(Ei),Ot(wo))}var Vt=sr(0);function Da(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Wc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var La=R.ReactCurrentDispatcher,Xc=R.ReactCurrentBatchConfig,Or=0,Ht=null,$t=null,tn=null,Na=!1,Co=!1,Ro=0,K_=0;function fn(){throw Error(t(321))}function jc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ui(n[o],i[o]))return!1;return!0}function Yc(n,i,o,c,f,m){if(Or=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=n===null||n.memoizedState===null?tv:nv,n=o(c,f),Co){m=0;do{if(Co=!1,Ro=0,25<=m)throw Error(t(301));m+=1,tn=$t=null,i.updateQueue=null,La.current=iv,n=o(c,f)}while(Co)}if(La.current=Fa,i=$t!==null&&$t.next!==null,Or=0,tn=$t=Ht=null,Na=!1,i)throw Error(t(300));return n}function qc(){var n=Ro!==0;return Ro=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=n:tn=tn.next=n,tn}function Kn(){if($t===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Ht.memoizedState=tn=n:tn=tn.next=n}return tn}function bo(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=$t,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var N=M=null,O=null,J=m;do{var ve=J.lane;if((Or&ve)===ve)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),c=J.hasEagerState?J.eagerState:n(c,J.action);else{var ye={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(N=O=ye,M=c):O=O.next=ye,Ht.lanes|=ve,kr|=ve}J=J.next}while(J!==null&&J!==m);O===null?M=c:O.next=N,ui(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=O,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Ht.lanes|=m,kr|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function $c(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);ui(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Ah(){}function Ch(n,i){var o=Ht,c=Kn(),f=i(),m=!ui(c.memoizedState,f);if(m&&(c.memoizedState=f,Dn=!0),c=c.queue,Kc(Ph.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Po(9,bh.bind(null,o,c,f,i),void 0,null),nn===null)throw Error(t(349));(Or&30)!==0||Rh(o,i,f)}return f}function Rh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function bh(n,i,o,c){i.value=o,i.getSnapshot=c,Dh(i)&&Lh(n)}function Ph(n,i,o){return o(function(){Dh(i)&&Lh(n)})}function Dh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ui(n,o)}catch{return!0}}function Lh(n){var i=Ui(n,1);i!==null&&mi(i,n,1,-1)}function Nh(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=ev.bind(null,Ht,n),[i.memoizedState,n]}function Po(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Ih(){return Kn().memoizedState}function Ia(n,i,o,c){var f=Ti();Ht.flags|=n,f.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function Ua(n,i,o,c){var f=Kn();c=c===void 0?null:c;var m=void 0;if($t!==null){var M=$t.memoizedState;if(m=M.destroy,c!==null&&jc(c,M.deps)){f.memoizedState=Po(i,o,m,c);return}}Ht.flags|=n,f.memoizedState=Po(1|i,o,m,c)}function Uh(n,i){return Ia(8390656,8,n,i)}function Kc(n,i){return Ua(2048,8,n,i)}function Fh(n,i){return Ua(4,2,n,i)}function Oh(n,i){return Ua(4,4,n,i)}function kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bh(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4,4,kh.bind(null,i,n),o)}function Qc(){}function zh(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Vh(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Hh(n,i,o){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=o):(ui(o,i)||(o=Sn(),Ht.lanes|=o,kr|=o,n.baseState=!0),i)}function Q_(n,i){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var c=Xc.transition;Xc.transition={};try{n(!1),i()}finally{Rt=o,Xc.transition=c}}function Gh(){return Kn().memoizedState}function J_(n,i,o){var c=hr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(n))Xh(i,o);else if(o=Sh(n,i,o,c),o!==null){var f=En();mi(o,n,c,f),jh(o,i,c)}}function ev(n,i,o){var c=hr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(n))Xh(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,o);if(f.hasEagerState=!0,f.eagerState=N,ui(N,M)){var O=i.interleaved;O===null?(f.next=f,Bc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=Sh(n,i,f,c),o!==null&&(f=En(),mi(o,n,c,f),jh(o,i,c))}}function Wh(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Xh(n,i){Co=Na=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function jh(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ec(n,o)}}var Fa={readContext:$n,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},tv={readContext:$n,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:Uh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ia(4194308,4,kh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ia(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ia(4,2,n,i)},useMemo:function(n,i){var o=Ti();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ti();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=J_.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:Nh,useDebugValue:Qc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=Nh(!1),i=n[0];return n=Q_.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,f=Ti();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),nn===null)throw Error(t(349));(Or&30)!==0||Rh(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Uh(Ph.bind(null,c,m,n),[n]),c.flags|=2048,Po(9,bh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ti(),i=nn.identifierPrefix;if(Bt){var o=Ii,c=Ni;o=(c&~(1<<32-ot(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=K_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},nv={readContext:$n,useCallback:zh,useContext:$n,useEffect:Kc,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:Zc,useRef:Ih,useState:function(){return Zc(bo)},useDebugValue:Qc,useDeferredValue:function(n){var i=Kn();return Hh(i,$t.memoizedState,n)},useTransition:function(){var n=Zc(bo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Gh,unstable_isNewReconciler:!1},iv={readContext:$n,useCallback:zh,useContext:$n,useEffect:Kc,useImperativeHandle:Bh,useInsertionEffect:Fh,useLayoutEffect:Oh,useMemo:Vh,useReducer:$c,useRef:Ih,useState:function(){return $c(bo)},useDebugValue:Qc,useDeferredValue:function(n){var i=Kn();return $t===null?i.memoizedState=n:Hh(i,$t.memoizedState,n)},useTransition:function(){var n=$c(bo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Ah,useSyncExternalStore:Ch,useId:Gh,unstable_isNewReconciler:!1};function fi(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Jc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Oa={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=Fi(c,f);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(mi(i,n,f,c),ba(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=Fi(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(mi(i,n,f,c),ba(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),c=hr(n),f=Fi(o,c);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,c),i!==null&&(mi(i,n,c,o),ba(i,n,c))}};function Yh(n,i,o,c,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(f,m):!0}function qh(n,i,o){var c=!1,f=or,m=i.contextType;return typeof m=="object"&&m!==null?m=$n(m):(f=Pn(i)?Lr:dn.current,c=i.contextTypes,m=(c=c!=null)?ps(n,f):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Zh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Oa.enqueueReplaceState(i,i.state,null)}function eu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},zc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=$n(m):(m=Pn(i)?Lr:dn.current,f.context=ps(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Jc(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oa.enqueueReplaceState(f,f.state,null),Pa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,i){try{var o="",c=i;do o+=ue(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function tu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function nu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var rv=typeof WeakMap=="function"?WeakMap:Map;function $h(n,i,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Wa||(Wa=!0,_u=c),nu(n,i)},o}function Kh(n,i,o){o=Fi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){nu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){nu(n,i),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Qh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new rv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=vv.bind(null,n,i,o),i.then(n,n))}function Jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function ep(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Fi(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var sv=R.ReactCurrentOwner,Dn=!1;function Mn(n,i,o,c){i.child=n===null?yh(i,null,o,c):vs(i,n.child,o,c)}function tp(n,i,o,c,f){o=o.render;var m=i.ref;return ys(i,f),c=Yc(n,i,o,c,m,f),o=qc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Oi(n,i,f)):(Bt&&o&&Pc(i),i.flags|=1,Mn(n,i,c,f),i.child)}function np(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Tu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,ip(n,i,m,c,f)):(n=$a(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,c)&&n.ref===i.ref)return Oi(n,i,f)}return i.flags|=1,n=mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function ip(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(go(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Oi(n,i,f)}return iu(n,i,o,c,f)}function rp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ts,Hn),Hn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ts,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,It(Ts,Hn),Hn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,It(Ts,Hn),Hn|=c;return Mn(n,i,f,o),i.child}function sp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function iu(n,i,o,c,f){var m=Pn(o)?Lr:dn.current;return m=ps(i,m),ys(i,f),o=Yc(n,i,o,c,m,f),c=qc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Oi(n,i,f)):(Bt&&c&&Pc(i),i.flags|=1,Mn(n,i,o,f),i.child)}function op(n,i,o,c,f){if(Pn(o)){var m=!0;Sa(i)}else m=!1;if(ys(i,f),i.stateNode===null)Ba(n,i),qh(i,o,c),eu(i,o,c,f),c=!0;else if(n===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var O=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=$n(J):(J=Pn(o)?Lr:dn.current,J=ps(i,J));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==c||O!==J)&&Zh(i,M,c,J),lr=!1;var ge=i.memoizedState;M.state=ge,Pa(i,c,M,f),O=i.memoizedState,N!==c||ge!==O||bn.current||lr?(typeof ve=="function"&&(Jc(i,o,ve,c),O=i.memoizedState),(N=lr||Yh(i,o,N,c,ge,O,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),M.props=c,M.state=O,M.context=J,c=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Mh(n,i),N=i.memoizedProps,J=i.type===i.elementType?N:fi(i.type,N),M.props=J,ye=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=$n(O):(O=Pn(o)?Lr:dn.current,O=ps(i,O));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==ye||ge!==O)&&Zh(i,M,c,O),lr=!1,ge=i.memoizedState,M.state=ge,Pa(i,c,M,f);var ze=i.memoizedState;N!==ye||ge!==ze||bn.current||lr?(typeof Ne=="function"&&(Jc(i,o,Ne,c),ze=i.memoizedState),(J=lr||Yh(i,o,J,c,ge,ze,O)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,ze,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,ze,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),M.props=c,M.state=ze,M.context=O,c=J):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return ru(n,i,o,c,m,f)}function ru(n,i,o,c,f,m){sp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&dh(i,o,!1),Oi(n,i,m);c=i.stateNode,sv.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,N,m)):Mn(n,i,N,m),i.memoizedState=c.state,f&&dh(i,o,!0),i.child}function ap(n){var i=n.stateNode;i.pendingContext?ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(n,i.context,!1),Vc(n,i.containerInfo)}function lp(n,i,o,c,f){return _s(),Ic(f),i.flags|=256,Mn(n,i,o,c),i.child}var su={dehydrated:null,treeContext:null,retryLane:0};function ou(n){return{baseLanes:n,cachePool:null,transitions:null}}function cp(n,i,o){var c=i.pendingProps,f=Vt.current,m=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),It(Vt,f&1),n===null)return Nc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=Ka(M,c,0,null),n=Hr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ou(o),i.memoizedState=su,n):au(i,M));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return ov(n,i,M,c,N,f,o);if(m){m=c.fallback,M=i.mode,f=n.child,N=f.sibling;var O={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=mr(f,O),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=mr(N,m):(m=Hr(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?ou(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=su,c}return m=n.child,n=m.sibling,c=mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function au(n,i){return i=Ka({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ka(n,i,o,c){return c!==null&&Ic(c),vs(i,n.child,null,o),n=au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ov(n,i,o,c,f,m,M){if(o)return i.flags&256?(i.flags&=-257,c=tu(Error(t(422))),ka(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Ka({mode:"visible",children:c.children},f,0,null),m=Hr(m,f,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,M),i.child.memoizedState=ou(M),i.memoizedState=su,m);if((i.mode&1)===0)return ka(n,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=tu(m,c,void 0),ka(n,i,M,c)}if(N=(M&n.childLanes)!==0,Dn||N){if(c=nn,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ui(n,f),mi(c,n,f,-1))}return Eu(),c=tu(Error(t(421))),ka(n,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=xv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Vn=rr(f.nextSibling),zn=i,Bt=!0,di=null,n!==null&&(qn[Zn++]=Ni,qn[Zn++]=Ii,qn[Zn++]=Nr,Ni=n.id,Ii=n.overflow,Nr=i),i=au(i,c.children),i.flags|=4096,i)}function up(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),kc(n.return,i,o)}function lu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function dp(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&up(n,o,i);else if(n.tag===19)up(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Da(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),lu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Da(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}lu(i,!0,o,null,m);break;case"together":lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function av(n,i,o){switch(i.tag){case 3:ap(i),_s();break;case 5:wh(i);break;case 1:Pn(i.type)&&Sa(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;It(Ca,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?cp(n,i,o):(It(Vt,Vt.current&1),n=Oi(n,i,o),n!==null?n.sibling:null);It(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return dp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,rp(n,i,o)}return Oi(n,i,o)}var fp,cu,hp,pp;fp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},cu=function(){},hp=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Fr(Ei.current);var m=null;switch(o){case"input":f=X(n,f),c=X(n,c),m=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":f=w(n,f),c=w(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=va)}ft(o,c);var M;o=null;for(J in f)if(!c.hasOwnProperty(J)&&f.hasOwnProperty(J)&&f[J]!=null)if(J==="style"){var N=f[J];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in c){var O=c[J];if(N=f!=null?f[J]:void 0,c.hasOwnProperty(J)&&O!==N&&(O!=null||N!=null))if(J==="style")if(N){for(M in N)!N.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&N[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(m||(m=[]),m.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,N=N?N.__html:void 0,O!=null&&N!==O&&(m=m||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ft("scroll",n),m||N===O||(m=[])):(m=m||[]).push(J,O))}o&&(m=m||[]).push("style",o);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},pp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Do(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function lv(n,i,o){var c=i.pendingProps;switch(Dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Pn(i.type)&&ya(),hn(i),null;case 3:return c=i.stateNode,Ss(),Ot(bn),Ot(dn),Wc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(wa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(yu(di),di=null))),cu(n,i),hn(i),null;case 5:Hc(i);var f=Fr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)hp(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return hn(i),null}if(n=Fr(Ei.current),wa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Mi]=i,c[So]=m,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(f=0;f<vo.length;f++)Ft(vo[f],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":xn(c,m),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",c);break;case"textarea":$(c,m),Ft("invalid",c)}ft(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var N=m[M];M==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&_a(c.textContent,N,n),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&_a(c.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Ft("scroll",c)}switch(o){case"input":bt(c),Ze(c,m,!0);break;case"textarea":bt(c),_e(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=va)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Mi]=i,n[So]=c,fp(n,i,!1,!1),i.stateNode=n;e:{switch(M=rt(o,c),o){case"dialog":Ft("cancel",n),Ft("close",n),f=c;break;case"iframe":case"object":case"embed":Ft("load",n),f=c;break;case"video":case"audio":for(f=0;f<vo.length;f++)Ft(vo[f],n);f=c;break;case"source":Ft("error",n),f=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),f=c;break;case"details":Ft("toggle",n),f=c;break;case"input":xn(n,c),f=X(n,c),Ft("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":$(n,c),f=w(n,c),Ft("invalid",n);break;default:f=c}ft(o,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var O=N[m];m==="style"?et(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ut(n,O):typeof O=="number"&&ut(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ft("scroll",n):O!=null&&L(n,m,O,M))}switch(o){case"input":bt(n),Ze(n,c,!1);break;case"textarea":bt(n),_e(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?P(n,!!c.multiple,m,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(n&&i.stateNode!=null)pp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Fr(Ao.current),Fr(Ei.current),wa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(m=c.nodeValue!==o)&&(n=zn,n!==null))switch(n.tag){case 3:_a(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return hn(i),null;case 13:if(Ot(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_h(),_s(),i.flags|=98560,m=!1;else if(m=wa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),m=!1}else di!==null&&(yu(di),di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Kt===0&&(Kt=3):Eu())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return Ss(),cu(n,i),n===null&&xo(i.stateNode.containerInfo),hn(i),null;case 10:return Oc(i.type._context),hn(i),null;case 17:return Pn(i.type)&&ya(),hn(i),null;case 19:if(Ot(Vt),m=i.memoizedState,m===null)return hn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Do(m,!1);else{if(Kt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Da(n),M!==null){for(i.flags|=128,Do(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Me()>ws&&(i.flags|=128,c=!0,Do(m,!1),i.lanes=4194304)}else{if(!c)if(n=Da(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Bt)return hn(i),null}else 2*Me()-m.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,c=!0,Do(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Me(),i.sibling=null,o=Vt.current,It(Vt,c?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return Mu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function cv(n,i){switch(Dc(i),i.tag){case 1:return Pn(i.type)&&ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Ot(bn),Ot(dn),Wc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hc(i),null;case 13:if(Ot(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return Ss(),null;case 10:return Oc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var za=!1,pn=!1,uv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Wt(n,i,c)}else o.current=null}function uu(n,i,o){try{o()}catch(c){Wt(n,i,c)}}var mp=!1;function dv(n,i){if(Mc=oa,n=Yf(),pc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,N=-1,O=-1,J=0,ve=0,ye=n,ge=null;t:for(;;){for(var Ne;ye!==o||f!==0&&ye.nodeType!==3||(N=M+f),ye!==m||c!==0&&ye.nodeType!==3||(O=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===n)break t;if(ge===o&&++J===f&&(N=M),ge===m&&++ve===c&&(O=M),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}o=N===-1||O===-1?null:{start:N,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ec={focusedElem:n,selectionRange:o},oa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Xt=ze.memoizedState,Y=i.stateNode,z=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:fi(i.type,He),Xt);Y.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Wt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=mp,mp=!1,ze}function Lo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&uu(i,o,m)}f=f.next}while(f!==c)}}function Va(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function du(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function gp(n){var i=n.alternate;i!==null&&(n.alternate=null,gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[So],delete i[Cc],delete i[Y_],delete i[q_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _p(n){return n.tag===5||n.tag===3||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(c!==4&&(n=n.child,n!==null))for(fu(n,i,o),n=n.sibling;n!==null;)fu(n,i,o),n=n.sibling}function hu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hu(n,i,o),n=n.sibling;n!==null;)hu(n,i,o),n=n.sibling}var on=null,hi=!1;function ur(n,i,o){for(o=o.child;o!==null;)xp(n,i,o),o=o.sibling}function xp(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 5:pn||Es(o,i);case 6:var c=on,f=hi;on=null,ur(n,i,o),on=c,hi=f,on!==null&&(hi?(n=on,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):on.removeChild(o.stateNode));break;case 18:on!==null&&(hi?(n=on,o=o.stateNode,n.nodeType===8?Ac(n.parentNode,o):n.nodeType===1&&Ac(n,o),co(n)):Ac(on,o.stateNode));break;case 4:c=on,f=hi,on=o.stateNode.containerInfo,hi=!0,ur(n,i,o),on=c,hi=f;break;case 0:case 11:case 14:case 15:if(!pn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&uu(o,i,M),f=f.next}while(f!==c)}ur(n,i,o);break;case 1:if(!pn&&(Es(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Wt(o,i,N)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(pn=(c=pn)||o.memoizedState!==null,ur(n,i,o),pn=c):ur(n,i,o);break;default:ur(n,i,o)}}function yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new uv),i.forEach(function(c){var f=yv.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function pi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:on=N.stateNode,hi=!1;break e;case 3:on=N.stateNode.containerInfo,hi=!0;break e;case 4:on=N.stateNode.containerInfo,hi=!0;break e}N=N.return}if(on===null)throw Error(t(160));xp(m,M,f),on=null,hi=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(J){Wt(f,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,n),i=i.sibling}function Sp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),wi(n),c&4){try{Lo(3,n,n.return),Va(3,n)}catch(He){Wt(n,n.return,He)}try{Lo(5,n,n.return)}catch(He){Wt(n,n.return,He)}}break;case 1:pi(i,n),wi(n),c&512&&o!==null&&Es(o,o.return);break;case 5:if(pi(i,n),wi(n),c&512&&o!==null&&Es(o,o.return),n.flags&32){var f=n.stateNode;try{ut(f,"")}catch(He){Wt(n,n.return,He)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,N=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&mt(f,m),rt(N,M);var J=rt(N,m);for(M=0;M<O.length;M+=2){var ve=O[M],ye=O[M+1];ve==="style"?et(f,ye):ve==="dangerouslySetInnerHTML"?Fe(f,ye):ve==="children"?ut(f,ye):L(f,ve,ye,J)}switch(N){case"input":dt(f,m);break;case"textarea":me(f,m);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?P(f,!!m.multiple,Ne,!1):ge!==!!m.multiple&&(m.defaultValue!=null?P(f,!!m.multiple,m.defaultValue,!0):P(f,!!m.multiple,m.multiple?[]:"",!1))}f[So]=m}catch(He){Wt(n,n.return,He)}}break;case 6:if(pi(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(He){Wt(n,n.return,He)}}break;case 3:if(pi(i,n),wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(He){Wt(n,n.return,He)}break;case 4:pi(i,n),wi(n);break;case 13:pi(i,n),wi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(gu=Me())),c&4&&yp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(pn=(J=pn)||ve,pi(i,n),pn=J):pi(i,n),wi(n),c&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:Lo(4,ge,ge.return);break;case 1:Es(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Wt(c,o,He)}}break;case 5:Es(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Tp(ye);continue}}Ne!==null?(Ne.return=ge,Oe=Ne):Tp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{f=ye.stateNode,J?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,N.style.display=Je("display",M))}catch(He){Wt(n,n.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(He){Wt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:pi(i,n),wi(n),c&4&&yp(n);break;case 21:break;default:pi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(_p(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ut(f,""),c.flags&=-33);var m=vp(n);hu(n,m,f);break;case 3:case 4:var M=c.stateNode.containerInfo,N=vp(n);fu(n,N,M);break;default:throw Error(t(161))}}catch(O){Wt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function fv(n,i,o){Oe=n,Mp(n)}function Mp(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||za;if(!M){var N=f.alternate,O=N!==null&&N.memoizedState!==null||pn;N=za;var J=pn;if(za=M,(pn=O)&&!J)for(Oe=f;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?wp(f):O!==null?(O.return=M,Oe=O):wp(f);for(;m!==null;)Oe=m,Mp(m),m=m.sibling;Oe=f,za=N,pn=J}Ep(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):Ep(n)}}function Ep(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Va(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!pn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Th(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Th(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&co(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||i.flags&512&&du(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Tp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function wp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(O){Wt(i,o,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(O){Wt(i,f,O)}}var m=i.return;try{du(i)}catch(O){Wt(i,m,O)}break;case 5:var M=i.return;try{du(i)}catch(O){Wt(i,M,O)}}}catch(O){Wt(i,i.return,O)}if(i===n){Oe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Oe=N;break}Oe=i.return}}var hv=Math.ceil,Ha=R.ReactCurrentDispatcher,pu=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,St=0,nn=null,jt=null,an=0,Hn=0,Ts=sr(0),Kt=0,No=null,kr=0,Ga=0,mu=0,Io=null,Ln=null,gu=0,ws=1/0,ki=null,Wa=!1,_u=null,dr=null,Xa=!1,fr=null,ja=0,Uo=0,vu=null,Ya=-1,qa=0;function En(){return(St&6)!==0?Me():Ya!==-1?Ya:Ya=Me()}function hr(n){return(n.mode&1)===0?1:(St&2)!==0&&an!==0?an&-an:$_.transition!==null?(qa===0&&(qa=Sn()),qa):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:Cf(n.type)),n)}function mi(n,i,o,c){if(50<Uo)throw Uo=0,vu=null,Error(t(185));Rn(n,o,c),((St&2)===0||n!==nn)&&(n===nn&&((St&2)===0&&(Ga|=o),Kt===4&&pr(n,an)),Nn(n,c),o===1&&St===0&&(i.mode&1)===0&&(ws=Me()+500,Ma&&ar()))}function Nn(n,i){var o=n.callbackNode;jn(n,i);var c=Si(n,n===nn?an:0);if(c===0)o!==null&&ne(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ne(o),i===1)n.tag===0?Z_(Cp.bind(null,n)):fh(Cp.bind(null,n)),X_(function(){(St&6)===0&&ar()}),o=null;else{switch(xf(c)){case 1:o=Ve;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=xt;break;default:o=it}o=Up(o,Ap.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ap(n,i){if(Ya=-1,qa=0,(St&6)!==0)throw Error(t(327));var o=n.callbackNode;if(As()&&n.callbackNode!==o)return null;var c=Si(n,n===nn?an:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Za(n,c);else{i=c;var f=St;St|=2;var m=bp();(nn!==n||an!==i)&&(ki=null,ws=Me()+500,zr(n,i));do try{gv();break}catch(N){Rp(n,N)}while(!0);Fc(),Ha.current=m,St=f,jt!==null?i=0:(nn=null,an=0,i=Kt)}if(i!==0){if(i===2&&(f=Pi(n),f!==0&&(c=f,i=xu(n,f))),i===1)throw o=No,zr(n,0),pr(n,c),Nn(n,Me()),o;if(i===6)pr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!pv(f)&&(i=Za(n,c),i===2&&(m=Pi(n),m!==0&&(c=m,i=xu(n,m))),i===1))throw o=No,zr(n,0),pr(n,c),Nn(n,Me()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Ln,ki);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=gu+500-Me(),10<i)){if(Si(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=wc(Vr.bind(null,n,Ln,ki),i);break}Vr(n,Ln,ki);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var M=31-ot(c);m=1<<M,M=i[M],M>f&&(f=M),c&=~m}if(c=f,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hv(c/1960))-c,10<c){n.timeoutHandle=wc(Vr.bind(null,n,Ln,ki),c);break}Vr(n,Ln,ki);break;case 5:Vr(n,Ln,ki);break;default:throw Error(t(329))}}}return Nn(n,Me()),n.callbackNode===o?Ap.bind(null,n):null}function xu(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=Za(n,i),n!==2&&(i=Ln,Ln=o,i!==null&&yu(i)),n}function yu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function pv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!ui(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~mu,i&=~Ga,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),c=1<<o;n[o]=-1,i&=~c}}function Cp(n){if((St&6)!==0)throw Error(t(327));As();var i=Si(n,0);if((i&1)===0)return Nn(n,Me()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var c=Pi(n);c!==0&&(i=c,o=xu(n,c))}if(o===1)throw o=No,zr(n,0),pr(n,i),Nn(n,Me()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Ln,ki),Nn(n,Me()),null}function Su(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(ws=Me()+500,Ma&&ar())}}function Br(n){fr!==null&&fr.tag===0&&(St&6)===0&&As();var i=St;St|=1;var o=Qn.transition,c=Rt;try{if(Qn.transition=null,Rt=1,n)return n()}finally{Rt=c,Qn.transition=o,St=i,(St&6)===0&&ar()}}function Mu(){Hn=Ts.current,Ot(Ts)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,W_(o)),jt!==null)for(o=jt.return;o!==null;){var c=o;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ya();break;case 3:Ss(),Ot(bn),Ot(dn),Wc();break;case 5:Hc(c);break;case 4:Ss();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Oc(c.type._context);break;case 22:case 23:Mu()}o=o.return}if(nn=n,jt=n=mr(n.current,null),an=Hn=i,Kt=0,No=null,mu=Ga=kr=0,Ln=Io=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,c.next=M}o.pending=c}Ur=null}return n}function Rp(n,i){do{var o=jt;try{if(Fc(),La.current=Fa,Na){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Na=!1}if(Or=0,tn=$t=Ht=null,Co=!1,Ro=0,pu.current=null,o===null||o.return===null){Kt=1,No=i,jt=null;break}e:{var m=n,M=o.return,N=o,O=i;if(i=an,N.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,ve=N,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=Jh(M);if(Ne!==null){Ne.flags&=-257,ep(Ne,M,N,m,i),Ne.mode&1&&Qh(m,J,i),i=Ne,O=J;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(O),i.updateQueue=He}else ze.add(O);break e}else{if((i&1)===0){Qh(m,J,i),Eu();break e}O=Error(t(426))}}else if(Bt&&N.mode&1){var Xt=Jh(M);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),ep(Xt,M,N,m,i),Ic(Ms(O,N));break e}}m=O=Ms(O,N),Kt!==4&&(Kt=2),Io===null?Io=[m]:Io.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=$h(m,O,i);Eh(m,Y);break e;case 1:N=O;var z=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(dr===null||!dr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Kh(m,N,i);Eh(m,Te);break e}}m=m.return}while(m!==null)}Dp(o)}catch(je){i=je,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function bp(){var n=Ha.current;return Ha.current=Fa,n===null?Fa:n}function Eu(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(kr&268435455)===0&&(Ga&268435455)===0||pr(nn,an)}function Za(n,i){var o=St;St|=2;var c=bp();(nn!==n||an!==i)&&(ki=null,zr(n,i));do try{mv();break}catch(f){Rp(n,f)}while(!0);if(Fc(),St=o,Ha.current=c,jt!==null)throw Error(t(261));return nn=null,an=0,Kt}function mv(){for(;jt!==null;)Pp(jt)}function gv(){for(;jt!==null&&!W();)Pp(jt)}function Pp(n){var i=Ip(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Dp(n):jt=i,pu.current=null}function Dp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=lv(o,i,Hn),o!==null){jt=o;return}}else{if(o=cv(o,i),o!==null){o.flags&=32767,jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Kt===0&&(Kt=5)}function Vr(n,i,o){var c=Rt,f=Qn.transition;try{Qn.transition=null,Rt=1,_v(n,i,o,c)}finally{Qn.transition=f,Rt=c}return null}function _v(n,i,o,c){do As();while(fr!==null);if((St&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ia(n,m),n===nn&&(jt=nn=null,an=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,Up(it,function(){return As(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var M=Rt;Rt=1;var N=St;St|=4,pu.current=null,dv(n,o),Sp(o,n),O_(Ec),oa=!!Mc,Ec=Mc=null,n.current=o,fv(o),we(),St=N,Rt=M,Qn.transition=m}else n.current=o;if(Xa&&(Xa=!1,fr=n,ja=f),m=n.pendingLanes,m===0&&(dr=null),cn(o.stateNode),Nn(n,Me()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Wa)throw Wa=!1,n=_u,_u=null,n;return(ja&1)!==0&&n.tag!==0&&As(),m=n.pendingLanes,(m&1)!==0?n===vu?Uo++:(Uo=0,vu=n):Uo=0,ar(),null}function As(){if(fr!==null){var n=xf(ja),i=Qn.transition,o=Rt;try{if(Qn.transition=null,Rt=16>n?16:n,fr===null)var c=!1;else{if(n=fr,fr=null,ja=0,(St&6)!==0)throw Error(t(331));var f=St;for(St|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if((Oe.flags&16)!==0){var N=m.deletions;if(N!==null){for(var O=0;O<N.length;O++){var J=N[O];for(Oe=J;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Lo(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ne=ve.return;if(gp(ve),ve===J){Oe=null;break}if(ge!==null){ge.return=Ne,Oe=ge;break}Oe=Ne}}}var ze=m.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Xt=He.sibling;He.sibling=null,He=Xt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Lo(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Oe=Y;break e}Oe=m.return}}var z=n.current;for(Oe=z;Oe!==null;){M=Oe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Oe=Z;else e:for(M=z;Oe!==null;){if(N=Oe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Va(9,N)}}catch(je){Wt(N,N.return,je)}if(N===M){Oe=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Oe=Te;break e}Oe=N.return}}if(St=f,ar(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(wt,n)}catch{}c=!0}return c}finally{Rt=o,Qn.transition=i}}return!1}function Lp(n,i,o){i=Ms(o,i),i=$h(n,i,1),n=cr(n,i,1),i=En(),n!==null&&(Rn(n,1,i),Nn(n,i))}function Wt(n,i,o){if(n.tag===3)Lp(n,n,o);else for(;i!==null;){if(i.tag===3){Lp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){n=Ms(o,n),n=Kh(i,n,1),i=cr(i,n,1),n=En(),i!==null&&(Rn(i,1,n),Nn(i,n));break}}i=i.return}}function vv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,nn===n&&(an&o)===o&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Me()-gu?zr(n,0):mu|=o),Nn(n,i)}function Np(n,i){i===0&&((n.mode&1)===0?i=1:(i=ci,ci<<=1,(ci&130023424)===0&&(ci=4194304)));var o=En();n=Ui(n,i),n!==null&&(Rn(n,i,o),Nn(n,o))}function xv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Np(n,o)}function yv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Np(n,o)}var Ip;Ip=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Dn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,av(n,i,o);Dn=(n.flags&131072)!==0}else Dn=!1,Bt&&(i.flags&1048576)!==0&&hh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ba(n,i),n=i.pendingProps;var f=ps(i,dn.current);ys(i,o),f=Yc(null,i,c,n,f,o);var m=qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,Sa(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zc(i),f.updater=Oa,i.stateNode=f,f._reactInternals=i,eu(i,c,n,o),i=ru(null,i,c,!0,m,o)):(i.tag=0,Bt&&m&&Pc(i),Mn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ba(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Mv(c),n=fi(c,n),f){case 0:i=iu(null,i,c,n,o);break e;case 1:i=op(null,i,c,n,o);break e;case 11:i=tp(null,i,c,n,o);break e;case 14:i=np(null,i,c,fi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),iu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),op(n,i,c,f,o);case 3:e:{if(ap(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Mh(n,i),Pa(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ms(Error(t(423)),i),i=lp(n,i,c,o,f);break e}else if(c!==f){f=Ms(Error(t(424)),i),i=lp(n,i,c,o,f);break e}else for(Vn=rr(i.stateNode.containerInfo.firstChild),zn=i,Bt=!0,di=null,o=yh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_s(),c===f){i=Oi(n,i,o);break e}Mn(n,i,c,o)}i=i.child}return i;case 5:return wh(i),n===null&&Nc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,M=f.children,Tc(c,f)?M=null:m!==null&&Tc(c,m)&&(i.flags|=32),sp(n,i),Mn(n,i,M,o),i.child;case 6:return n===null&&Nc(i),null;case 13:return cp(n,i,o);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,o):Mn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),tp(n,i,c,f,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,It(Ca,c._currentValue),c._currentValue=M,m!==null)if(ui(m.value,M)){if(m.children===f.children&&!bn.current){i=Oi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){M=m.child;for(var O=N.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=Fi(-1,o&-o),O.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),J.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),kc(m.return,o,i),N.lanes|=o;break}O=O.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),kc(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Mn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ys(i,o),f=$n(f),c=c(f),i.flags|=1,Mn(n,i,c,o),i.child;case 14:return c=i.type,f=fi(c,i.pendingProps),f=fi(c.type,f),np(n,i,c,f,o);case 15:return ip(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:fi(c,f),Ba(n,i),i.tag=1,Pn(c)?(n=!0,Sa(i)):n=!1,ys(i,o),qh(i,c,f),eu(i,c,f,o),ru(null,i,c,!0,n,o);case 19:return dp(n,i,o);case 22:return rp(n,i,o)}throw Error(t(156,i.tag))};function Up(n,i){return te(n,i)}function Sv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,o,c){return new Sv(n,i,o,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Mv(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===he)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=Jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function $a(n,i,o,c,f,m){var M=2;if(c=n,typeof n=="function")Tu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case U:return Hr(o.children,f,m,i);case j:M=8,f|=8;break;case b:return n=Jn(12,o,i,f|2),n.elementType=b,n.lanes=m,n;case ee:return n=Jn(13,o,i,f),n.elementType=ee,n.lanes=m,n;case de:return n=Jn(19,o,i,f),n.elementType=de,n.lanes=m,n;case ce:return Ka(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case B:M=9;break e;case ae:M=11;break e;case he:M=14;break e;case oe:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(M,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Hr(n,i,o,c){return n=Jn(7,n,c,i),n.lanes=o,n}function Ka(n,i,o,c){return n=Jn(22,n,c,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function wu(n,i,o){return n=Jn(6,n,null,i),n.lanes=o,n}function Au(n,i,o){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ev(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yn(0),this.expirationTimes=Yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Cu(n,i,o,c,f,m,M,N,O){return n=new Ev(n,i,o,N,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(m),n}function Tv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Fp(n){if(!n)return or;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Pn(o))return uh(n,o,i)}return i}function Op(n,i,o,c,f,m,M,N,O){return n=Cu(o,c,!0,n,f,m,M,N,O),n.context=Fp(null),o=n.current,c=En(),f=hr(o),m=Fi(c,f),m.callback=i??null,cr(o,m,f),n.current.lanes=f,Rn(n,f,c),Nn(n,c),n}function Qa(n,i,o,c){var f=i.current,m=En(),M=hr(f);return o=Fp(o),i.context===null?i.context=o:i.pendingContext=o,i=Fi(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(f,i,M),n!==null&&(mi(n,f,M,m),ba(n,f,M)),M}function Ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ru(n,i){kp(n,i),(n=n.alternate)&&kp(n,i)}function wv(){return null}var Bp=typeof reportError=="function"?reportError:function(n){console.error(n)};function bu(n){this._internalRoot=n}el.prototype.render=bu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qa(n,i,null,null)},el.prototype.unmount=bu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){Qa(null,n,null,null)}),i[Di]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=Mf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&wf(n)}};function Pu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Av(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var J=Ja(M);m.call(J)}}var M=Op(i,c,n,0,null,!1,!1,"",zp);return n._reactRootContainer=M,n[Di]=M.current,xo(n.nodeType===8?n.parentNode:n),Br(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var J=Ja(O);N.call(J)}}var O=Cu(n,0,!1,null,null,!1,!1,"",zp);return n._reactRootContainer=O,n[Di]=O.current,xo(n.nodeType===8?n.parentNode:n),Br(function(){Qa(i,O,o,c)}),O}function nl(n,i,o,c,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var N=f;f=function(){var O=Ja(M);N.call(O)}}Qa(i,M,n,f)}else M=Av(o,i,n,f,c);return Ja(M)}yf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Zt(i.pendingLanes);o!==0&&(ec(i,o|1),Nn(i,Me()),(St&6)===0&&(ws=Me()+500,ar()))}break;case 13:Br(function(){var c=Ui(n,1);if(c!==null){var f=En();mi(c,n,1,f)}}),Ru(n,1)}},tc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var o=En();mi(i,n,134217728,o)}Ru(n,134217728)}},Sf=function(n){if(n.tag===13){var i=hr(n),o=Ui(n,i);if(o!==null){var c=En();mi(o,n,i,c)}Ru(n,i)}},Mf=function(){return Rt},Ef=function(n,i){var o=Rt;try{return Rt=n,i()}finally{Rt=o}},be=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=xa(c);if(!f)throw Error(t(90));_t(c),dt(c,f)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},Ut=Su,qt=Br;var Cv={usingClientEntryPoint:!1,Events:[Mo,fs,xa,De,st,Su]},Fo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{wt=il.inject(Rv),vt=il}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,In.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pu(i))throw Error(t(200));return Tv(n,i,null,o)},In.createRoot=function(n,i){if(!Pu(n))throw Error(t(299));var o=!1,c="",f=Bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Cu(n,1,!1,null,null,o,!1,c,f),n[Di]=i.current,xo(n.nodeType===8?n.parentNode:n),new bu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=A(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Br(n)},In.hydrate=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,o)},In.hydrateRoot=function(n,i,o){if(!Pu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",M=Bp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Op(i,null,n,1,o??null,f,!1,m,M),n[Di]=i.current,xo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new el(i)},In.render=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,o)},In.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},In.unstable_batchedUpdates=Su,In.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,o,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var qp;function kv(){if(qp)return Nu.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nu.exports=Ov(),Nu.exports}var Zp;function Bv(){if(Zp)return rl;Zp=1;var s=kv();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var zv=Bv();const Vv=fg(zv),$p=s=>{let e;const t=new Set,r=(p,v)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const x=e;e=v??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(S=>S(e,x))}},a=()=>e,d={setState:r,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=s(r,a,d);return d},Hv=(s=>s?$p(s):$p),Gv=s=>s;function Wv(s,e=Gv){const t=Wo.useSyncExternalStore(s.subscribe,Wo.useCallback(()=>e(s.getState()),[s,e]),Wo.useCallback(()=>e(s.getInitialState()),[s,e]));return Wo.useDebugValue(t),t}const Kp=s=>{const e=Hv(s),t=r=>Wv(e,r);return Object.assign(t,e),t},hg=(s=>s?Kp(s):Kp),Qp={modelId:null,status:"idle",uploadProgress:0,parseProgress:0,errorMessage:null,metadata:null,warnings:[],tree:null,fields:[],sets:[],activeFieldId:null,activeTimestep:0,nodeCoords_f64:null,fieldValues_f64:null,fieldLoadError:null,fieldNanCount:0,displacement_f64:null,deformLoadError:null,surfaceIndices:null,surfaceNormals:null,surfaceElementMap:null},Ae=hg(s=>({...Qp,setModelId:e=>s({modelId:e}),setStatus:e=>s({status:e}),setUploadProgress:e=>s({uploadProgress:e}),setParseProgress:e=>s({parseProgress:e}),setErrorMessage:e=>s({errorMessage:e}),setMetadata:e=>s({metadata:e}),setWarnings:e=>s({warnings:e}),addWarning:e=>s(t=>({warnings:[...t.warnings,e]})),setTree:e=>s({tree:e}),setFields:e=>s({fields:e}),setSets:e=>s({sets:e}),setActiveFieldId:e=>s({activeFieldId:e}),setActiveTimestep:e=>s({activeTimestep:e}),setNodeCoords:e=>s({nodeCoords_f64:e}),setFieldValues:e=>s({fieldValues_f64:e}),setFieldLoadError:e=>s({fieldLoadError:e}),setFieldNanCount:e=>s({fieldNanCount:e}),setDisplacementValues:e=>s({displacement_f64:e}),setDeformLoadError:e=>s({deformLoadError:e}),setSurfaceData:(e,t,r)=>s({surfaceIndices:e,surfaceNormals:t,surfaceElementMap:r}),reset:()=>s(Qp)})),jl="/api/v1";async function sl(s){const e=await fetch(`${jl}${s}`,{headers:{Accept:"application/json"}});if(!e.ok){const t=await e.text();throw new Yl(e.status,t)}return e.json()}async function sf(s){const e=await fetch(`${jl}${s}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const d=await e.text();throw new Yl(e.status,d)}const t=e.headers.get("X-Array-Dtype")??"float64",r=e.headers.get("X-Array-Shape")??"[]",a=e.headers.get("X-Array-ByteOrder")??"little";let l;try{l=JSON.parse(r)}catch{l=[]}return{buffer:await e.arrayBuffer(),meta:{dtype:t,shape:l,byteOrder:a}}}async function Xv(s){const e=await fetch(`${jl}${s}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const u=await e.text();throw new Yl(e.status,u)}const t=e.headers.get("X-Buffer-Offsets")??"{}";let r;try{r=JSON.parse(t)}catch{r={}}const a=await e.arrayBuffer(),l={};for(const[u,[d,h]]of Object.entries(r))l[u]=a.slice(d,h);return l}async function jv(s){const e=new FormData;e.append("file",s);const t=await fetch(`${jl}/models/upload`,{method:"POST",body:e});if(!t.ok){const r=await t.text();throw new Yl(t.status,r)}return t.json()}class Yl extends Error{constructor(e,t){super(`API ${e}: ${t}`),this.status=e,this.body=t,this.name="ApiError"}}function Yv(s,e){const r=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/progress/${s}`,a=new WebSocket(r);return a.onmessage=l=>{try{const u=JSON.parse(l.data);e(u)}catch{console.warn("[WS] Failed to parse progress message:",l.data)}},a.onerror=l=>{console.error("[WS] WebSocket error:",l)},a.onclose=()=>{console.info(`[WS] Connection closed for model ${s}`)},()=>{(a.readyState===WebSocket.OPEN||a.readyState===WebSocket.CONNECTING)&&a.close()}}const qv=()=>{const s=Ae(_=>_.status),e=Ae(_=>_.uploadProgress),t=Ae(_=>_.parseProgress),r=Ae(_=>_.errorMessage),a=Ae(_=>_.setModelId),l=Ae(_=>_.setStatus),u=Ae(_=>_.setUploadProgress),d=Ae(_=>_.setParseProgress),h=Ae(_=>_.setErrorMessage),[p,v]=pt.useState(!1),g=pt.useRef(null),x=pt.useCallback(async _=>{l("uploading"),u(0),h(null);try{const{model_id:D}=await jv(_);a(D),l("parsing"),u(100);const L=Yv(D,R=>{d(R.progress*100),R.status==="ready"?(l("ready"),L()):R.status==="error"&&(l("error"),h(R.message??"Parse failed"),L())})}catch(D){l("error"),h(D instanceof Error?D.message:"Upload failed")}},[a,l,u,d,h]),S=pt.useCallback(_=>{_.preventDefault(),v(!1);const D=_.dataTransfer.files[0];D&&x(D)},[x]),E=pt.useCallback(_=>{_.preventDefault(),v(!0)},[]),T=pt.useCallback(()=>v(!1),[]),y=pt.useCallback(_=>{var L;const D=(L=_.target.files)==null?void 0:L[0];D&&x(D)},[x]);return K.jsxs("div",{style:{width:"100%"},children:[s==="idle"&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:`upload-dropzone ${p?"upload-dropzone--active":""}`,onDrop:S,onDragOver:E,onDragLeave:T,onClick:()=>{var _;return(_=g.current)==null?void 0:_.click()},children:[K.jsx("div",{className:"upload-dropzone__title",children:"Drop VTK/VTU file here"}),K.jsx("div",{className:"upload-dropzone__subtitle",children:"or click to browse"})]}),K.jsx("input",{ref:g,type:"file",accept:".vtk,.vtu,.vtp,.pvtu",style:{display:"none"},onChange:y})]}),s==="uploading"&&K.jsxs("div",{children:[K.jsx("div",{style:{marginBottom:8,fontSize:12},children:"Uploading…"}),K.jsx("div",{className:"progress-bar",children:K.jsx("div",{className:"progress-bar__fill",style:{width:`${e}%`}})})]}),s==="parsing"&&K.jsxs("div",{children:[K.jsx("div",{style:{marginBottom:8,fontSize:12},children:"Parsing…"}),K.jsx("div",{className:"progress-bar",children:K.jsx("div",{className:"progress-bar__fill",style:{width:`${t}%`}})})]}),s==="error"&&K.jsxs("div",{style:{color:"var(--accent-danger)",fontSize:12},children:[K.jsx("div",{style:{marginBottom:8,fontWeight:600},children:"Error"}),K.jsx("div",{children:r})]})]})},Zv={lut_name:"viridis",min_value:0,max_value:1,n_colors:256,nan_color:[.5,.5,.5,.3],above_range_color:[1,0,1,1],below_range_color:[0,0,1,1],scale:"linear"},Jp={deformMode:"undeformed",deformScale:1,deformFieldId:null,pickMode:"node",wireframeVisible:!1,partVisibility:{},colorMapConfig:{...Zv}},zt=hg(s=>({...Jp,setDeformMode:e=>s({deformMode:e}),setDeformScale:e=>s({deformScale:e}),setDeformFieldId:e=>s({deformFieldId:e}),setPickMode:e=>s({pickMode:e}),toggleWireframe:()=>s(e=>({wireframeVisible:!e.wireframeVisible})),setPartVisibility:(e,t)=>s(r=>({partVisibility:{...r.partVisibility,[e]:t}})),setAllPartsVisible:e=>s(t=>{const r={};for(const a of Object.keys(t.partVisibility))r[a]=e;return{partVisibility:r}}),isolatePart:e=>s(t=>{const r={};for(const a of Object.keys(t.partVisibility))r[a]=a===e;return{partVisibility:r}}),setColorMapName:e=>s(t=>({colorMapConfig:{...t.colorMapConfig,lut_name:e}})),setColorMapRange:(e,t)=>s(r=>({colorMapConfig:{...r.colorMapConfig,min_value:e,max_value:t}})),resetView:()=>s(Jp)})),$v=()=>{const s=Ae(e=>e.tree);return s?K.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:K.jsx(pg,{node:s,depth:0})}):K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No model loaded"})},pg=({node:s,depth:e})=>{var d;const t=zt(h=>h.partVisibility),r=zt(h=>h.setPartVisibility),a=zt(h=>h.isolatePart),l=t[s.id]!==!1,u=s.type==="part";return K.jsxs("div",{children:[K.jsxs("div",{className:`tree-node ${l?"":"tree-node--hidden"}`,style:{paddingLeft:e*16+8},children:[K.jsxs("span",{className:"tree-node__icon",children:[s.type==="assembly"&&"📦",s.type==="instance"&&"🔗",s.type==="part"&&"🧊",s.type==="node_set"&&"📍",s.type==="element_set"&&"📐"]}),K.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.name}),u&&K.jsxs("span",{className:"tree-node__actions",children:[K.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),r(s.id,!l)},title:l?"Hide":"Show",children:l?"👁":"👁‍🗨"}),K.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),a(s.id)},title:"Isolate",children:"◎"})]})]}),(d=s.children)==null?void 0:d.map(h=>K.jsx(pg,{node:h,depth:e+1},h.id))]})},Kv=()=>{const s=Ae(a=>a.fields),e=Ae(a=>a.activeFieldId),t=Ae(a=>a.setActiveFieldId),r=Ae(a=>a.fieldLoadError);return K.jsxs("div",{className:"field-selector",children:[K.jsxs("select",{value:e??"",onChange:a=>t(a.target.value||null),children:[K.jsx("option",{value:"",children:"— No field —"}),s.map(a=>K.jsxs("option",{value:a.id,disabled:a.location==="integration_point",children:[a.name,a.n_components>1?` (${a.n_components} comp)`:"",a.location==="integration_point"?" ⚠ Unsupported in MVP":"",a.location==="elemental"?" [elem]":"",a.location==="nodal"?" [nodal]":""]},a.id))]}),r&&K.jsxs("div",{style:{marginTop:4,fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",r]})]})},Qv=()=>{const s=Ae(T=>T.fields),e=Ae(T=>T.activeFieldId),t=Ae(T=>T.activeTimestep),r=Ae(T=>T.setActiveTimestep),a=Ae(T=>T.fieldLoadError),[l,u]=pt.useState(!1),d=pt.useRef(null),h=s.find(T=>T.id===e),p=(h==null?void 0:h.n_timesteps)??1,v=Math.max(0,p-1),g=h==null?void 0:h.timesteps.find(T=>T.step_index===t),x=g!==void 0,S=(g==null?void 0:g.time_value)!=null?`t = ${g.time_value.toFixed(4)}`:x?`Step ${t}`:"No data at this step";pt.useEffect(()=>{if(!l){d.current!==null&&(cancelAnimationFrame(d.current),d.current=null);return}let T=0;const y=_=>{_-T>500&&(T=_,r((t+1)%(v+1))),d.current=requestAnimationFrame(y)};return d.current=requestAnimationFrame(y),()=>{d.current!==null&&cancelAnimationFrame(d.current)}},[l,t,v,r]);const E=pt.useCallback(T=>{r(parseInt(T.target.value,10))},[r]);return!h||p<=1?K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:h?"Single timestep":"Select a field first"}):K.jsxs("div",{className:"slider-control",children:[K.jsx("input",{type:"range",min:0,max:v,value:t,onChange:E}),K.jsxs("div",{className:"slider-control__label",children:[K.jsx("span",{children:S}),K.jsxs("span",{children:[t+1," / ",p]})]}),K.jsx("button",{className:"toolbar__btn",onClick:()=>u(!l),style:{alignSelf:"flex-start",marginTop:4},children:l?"⏸ Pause":"▶ Animate"}),(!x||a)&&K.jsxs("div",{style:{color:"var(--accent-warning)",fontSize:11,marginTop:4},children:["⚠ ",a??"No data at this step"]})]})},Jv=()=>{const s=Ae(g=>g.fields),e=Ae(g=>g.deformLoadError),t=zt(g=>g.deformMode),r=zt(g=>g.deformScale),a=zt(g=>g.deformFieldId),l=zt(g=>g.setDeformMode),u=zt(g=>g.setDeformScale),d=zt(g=>g.setDeformFieldId),h=s.filter(g=>g.location==="nodal"&&g.n_components===3),p=h.length>0,v=g=>{const x=parseFloat(g.target.value);Number.isNaN(x)||u(Math.min(Math.max(x,0),1e4))};return K.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[K.jsx("div",{className:"field-selector",children:K.jsxs("select",{value:a??"",onChange:g=>d(g.target.value||null),disabled:!p,children:[K.jsx("option",{value:"",children:p?"— No deformation —":"— No displacement field —"}),h.map(g=>K.jsx("option",{value:g.id,children:g.name},g.id))]})}),!p&&K.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:"No nodal vector3 fields available for deformation."}),K.jsx("div",{style:{display:"flex",gap:4},children:["undeformed","deformed","overlay"].map(g=>K.jsx("button",{className:`toolbar__btn ${t===g?"toolbar__btn--active":""}`,onClick:()=>l(g),disabled:!p||!a,style:{flex:1,fontSize:11,justifyContent:"center"},children:g},g))}),K.jsxs("div",{className:"slider-control",children:[K.jsxs("label",{style:{fontSize:11,color:"var(--text-secondary)"},children:["Scale: ",r.toFixed(1),"×"]}),K.jsx("input",{type:"range",min:0,max:100,step:.1,value:Math.min(r,100),onChange:g=>u(parseFloat(g.target.value)),disabled:!p||!a}),K.jsx("input",{type:"number",min:0,max:1e4,step:1,value:r,onChange:v,disabled:!p||!a,style:{width:60,fontSize:11,padding:"2px 4px",background:"var(--bg-tertiary)",color:"var(--text-primary)",border:"1px solid var(--border-primary)",borderRadius:4}})]}),e&&K.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",e]})]})},e0=({onZoomToFit:s})=>{const e=Ae(p=>p.status),t=zt(p=>p.wireframeVisible),r=zt(p=>p.toggleWireframe),a=zt(p=>p.pickMode),l=zt(p=>p.setPickMode),u=zt(p=>p.deformMode),d=zt(p=>p.setDeformMode),h=e==="ready";return K.jsxs("div",{className:"toolbar",children:[K.jsx("span",{className:"toolbar__title",children:"FEA Viewer"}),h&&K.jsxs(K.Fragment,{children:[K.jsx("button",{className:`toolbar__btn ${t?"toolbar__btn--active":""}`,onClick:r,title:"Toggle wireframe overlay",children:"◇ Wire"}),K.jsx("button",{className:`toolbar__btn ${a==="node"?"toolbar__btn--active":""}`,onClick:()=>l("node"),title:"Node pick mode",children:"⊙ Node"}),K.jsx("button",{className:`toolbar__btn ${a==="element"?"toolbar__btn--active":""}`,onClick:()=>l("element"),title:"Element pick mode",children:"◻ Elem"}),K.jsx("button",{className:`toolbar__btn ${u==="deformed"?"toolbar__btn--active":""}`,onClick:()=>d(u==="deformed"?"undeformed":"deformed"),title:"Toggle deformed view",children:"↗ Deform"}),K.jsx("button",{className:"toolbar__btn",onClick:s,title:"Zoom to fit model",children:"⊞ Fit"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="170",Xs={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t0=0,em=1,n0=2,mg=1,i0=2,Wi=3,Rr=0,On=1,ii=2,Ar=0,js=1,tm=2,nm=3,im=4,r0=5,$r=100,s0=101,o0=102,a0=103,l0=104,c0=200,u0=201,d0=202,f0=203,gd=204,_d=205,h0=206,p0=207,m0=208,g0=209,_0=210,v0=211,x0=212,y0=213,S0=214,vd=0,xd=1,yd=2,Zs=3,Sd=4,Md=5,Ed=6,Td=7,af=0,M0=1,E0=2,Cr=0,T0=1,w0=2,A0=3,C0=4,R0=5,b0=6,P0=7,gg=300,$s=301,Ks=302,wd=303,Ad=304,ql=306,Cd=1e3,wr=1001,Rd=1002,Xn=1003,D0=1004,ol=1005,si=1006,Fu=1007,Qr=1008,qi=1009,_g=1010,vg=1011,qo=1012,lf=1013,Jr=1014,Xi=1015,$o=1016,cf=1017,uf=1018,Qs=1020,xg=35902,yg=1021,Sg=1022,oi=1023,Mg=1024,Eg=1025,Ys=1026,Js=1027,Tg=1028,df=1029,wg=1030,ff=1031,hf=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,bd=35840,Pd=35841,Dd=35842,Ld=35843,Nd=36196,Id=37492,Ud=37496,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Vd=37813,Hd=37814,Gd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,qd=37820,Zd=37821,Bl=36492,$d=36494,Kd=36495,Ag=36283,Qd=36284,Jd=36285,ef=36286,L0=3200,N0=3201,Cg=0,I0=1,Tr="",ti="srgb",to="srgb-linear",Zl="linear",Pt="srgb",Cs=7680,rm=519,U0=512,F0=513,O0=514,Rg=515,k0=516,B0=517,z0=518,V0=519,sm=35044,om="300 es",ji=2e3,Vl=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,tf=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function wn(s,e,t){return Math.max(e,Math.min(t,s))}function H0(s,e){return(s%e+e)%e}function Ou(s,e,t){return(1-t)*s+t*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const G0={DEG2RAD:Yo};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,r,a,l,u,d,h,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p)}set(e,t,r,a,l,u,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],v=r[4],g=r[7],x=r[2],S=r[5],E=r[8],T=a[0],y=a[3],_=a[6],D=a[1],L=a[4],R=a[7],V=a[2],F=a[5],U=a[8];return l[0]=u*T+d*D+h*V,l[3]=u*y+d*L+h*F,l[6]=u*_+d*R+h*U,l[1]=p*T+v*D+g*V,l[4]=p*y+v*L+g*F,l[7]=p*_+v*R+g*U,l[2]=x*T+S*D+E*V,l[5]=x*y+S*L+E*F,l[8]=x*_+S*R+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-r*l*v+r*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],g=v*u-d*p,x=d*h-v*l,S=p*l-u*h,E=t*g+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(a*p-v*r)*T,e[2]=(d*r-a*u)*T,e[3]=x*T,e[4]=(v*t-a*h)*T,e[5]=(a*l-d*t)*T,e[6]=S*T,e[7]=(r*h-p*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new at;function bg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Hl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W0(){const s=Hl("canvas");return s.style.display="block",s}const am={};function Xo(s){s in am||(am[s]=!0,console.warn(s))}function X0(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function j0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Y0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tr?Zl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const lm=[.64,.33,.3,.6,.15,.06],cm=[.2126,.7152,.0722],um=[.3127,.329],dm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[to]:{primaries:lm,whitePoint:um,transfer:Zl,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:cm,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:lm,whitePoint:um,transfer:Pt,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:cm,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});let Rs;class q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Hl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Yi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z0=0;class Pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Bu(a[u].image)):l.push(Bu(a[u]))}else l=Bu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?q0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $0=0;class An extends ns{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=wr,a=wr,l=si,u=Qr,d=oi,h=qi,p=An.DEFAULT_ANISOTROPY,v=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Ko(),this.name="",this.source=new Pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=gg;An.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,r=0,a=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],g=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,R=(S+1)/2,V=(_+1)/2,F=(v+x)/4,U=(g+T)/4,j=(E+y)/4;return L>R&&L>V?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=F/r,l=U/r):R>V?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=F/a,l=j/a):V<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),r=U/l,a=j/l),this.set(r,a,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(g-T)/D,this.z=(x-v)/D,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K0 extends ns{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new An(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends K0{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Dg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q0 extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let h=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];const x=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(g!==T||h!==x||p!==S||v!==E){let y=1-d;const _=h*x+p*S+v*E+g*T,D=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const V=Math.sqrt(L),F=Math.atan2(V,_*D);y=Math.sin(y*F)/V,d=Math.sin(d*F)/V}const R=d*D;if(h=h*y+x*R,p=p*y+S*R,v=v*y+E*R,g=g*y+T*R,y===1-d){const V=1/Math.sqrt(h*h+p*p+v*v+g*g);h*=V,p*=V,v*=V,g*=V}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],g=l[u],x=l[u+1],S=l[u+2],E=l[u+3];return e[t]=d*E+v*g+h*S-p*x,e[t+1]=h*E+v*x+p*g-d*S,e[t+2]=p*E+v*S+d*x-h*g,e[t+3]=v*E-d*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),g=d(l/2),x=h(r/2),S=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"YXZ":this._x=x*v*g+p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"ZXY":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g-x*S*E;break;case"ZYX":this._x=x*v*g-p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g+x*S*E;break;case"YZX":this._x=x*v*g+p*S*E,this._y=p*S*g+x*v*E,this._z=p*v*E-x*S*g,this._w=p*v*g-x*S*E;break;case"XZY":this._x=x*v*g-p*S*E,this._y=p*S*g-x*v*E,this._z=p*v*E+x*S*g,this._w=p*v*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],v=t[6],g=t[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*d+a*p-l*h,this._y=a*v+u*h+l*d-r*p,this._z=l*v+u*p+r*h-a*d,this._w=u*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,d),g=Math.sin((1-t)*v)/p,x=Math.sin(t*v)/p;return this._w=u*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*r),v=2*(d*t-l*a),g=2*(l*r-u*t);return this.x=t+h*p+u*g-d*v,this.y=r+h*v+d*p-l*g,this.z=a+h*g+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new q,hm=new ts;class no{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),ll.subVectors(this.max,Bo),bs.subVectors(e.a,Bo),Ps.subVectors(e.b,Bo),Ds.subVectors(e.c,Bo),_r.subVectors(Ps,bs),vr.subVectors(Ds,Ps),Gr.subVectors(bs,Ds);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Gr.z,Gr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Gr.z,0,-Gr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Gr.y,Gr.x,0];return!Vu(t,bs,Ps,Ds,ll)||(t=[1,0,0,0,1,0,0,0,1],!Vu(t,bs,Ps,Ds,ll))?!1:(cl.crossVectors(_r,vr),t=[cl.x,cl.y,cl.z],Vu(t,bs,Ps,Ds,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new q,new q,new q,new q,new q,new q,new q,new q],gi=new q,al=new no,bs=new q,Ps=new q,Ds=new q,_r=new q,vr=new q,Gr=new q,Bo=new q,ll=new q,cl=new q,Wr=new q;function Vu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Wr.fromArray(s,l);const d=a.x*Math.abs(Wr.x)+a.y*Math.abs(Wr.y)+a.z*Math.abs(Wr.z),h=e.dot(Wr),p=t.dot(Wr),v=r.dot(Wr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const J0=new no,zo=new q,Hu=new q;class $l{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):J0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Hu)),this.expandByPoint(zo.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new q,Gu=new q,ul=new q,xr=new q,Wu=new q,dl=new q,Xu=new q;class pf{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Gu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Gu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ul),d=xr.dot(this.direction),h=-xr.dot(ul),p=xr.lengthSq(),v=Math.abs(1-u*u);let g,x,S,E;if(v>0)if(g=u*h-d,x=u*d-h,E=l*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,S=g*(g+u*x+2*d)+x*(u*g+x+2*h)+p}else x=l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x<=-E?(g=Math.max(0,-(-u*l+d)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=E?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(u*l+d)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=u>0?-l:l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Gu).addScaledVector(ul,x),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),a=zi.dot(zi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,h;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,a,l){Wu.subVectors(t,e),dl.subVectors(r,e),Xu.crossVectors(Wu,dl);let u=this.direction.dot(Xu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=d*this.direction.dot(dl.crossVectors(xr,dl));if(h<0)return null;const p=d*this.direction.dot(Wu.cross(xr));if(p<0||h+p>u)return null;const v=-d*xr.dot(Xu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,r,a,l,u,d,h,p,v,g,x,S,E,T,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p,v,g,x,S,E,T,y)}set(e,t,r,a,l,u,d,h,p,v,g,x,S,E,T,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=u*v,S=u*g,E=d*v,T=d*g;t[0]=h*v,t[4]=-h*g,t[8]=p,t[1]=S+E*p,t[5]=x-T*p,t[9]=-d*h,t[2]=T-x*p,t[6]=E+S*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*v,S=h*g,E=p*v,T=p*g;t[0]=x+T*d,t[4]=E*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*v,t[9]=-d,t[2]=S*d-E,t[6]=T+x*d,t[10]=u*h}else if(e.order==="ZXY"){const x=h*v,S=h*g,E=p*v,T=p*g;t[0]=x-T*d,t[4]=-u*g,t[8]=E+S*d,t[1]=S+E*d,t[5]=u*v,t[9]=T-x*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const x=u*v,S=u*g,E=d*v,T=d*g;t[0]=h*v,t[4]=E*p-S,t[8]=x*p+T,t[1]=h*g,t[5]=T*p+x,t[9]=S*p-E,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*p,E=d*h,T=d*p;t[0]=h*v,t[4]=T-x*g,t[8]=E*g+S,t[1]=g,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=S*g+E,t[10]=x-T*g}else if(e.order==="XZY"){const x=u*h,S=u*p,E=d*h,T=d*p;t[0]=h*v,t[4]=-g,t[8]=p*v,t[1]=x*g+T,t[5]=u*v,t[9]=S*g-E,t[2]=E*g-S,t[6]=d*v,t[10]=T*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,r){const a=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),yr.crossVectors(r,Gn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),yr.crossVectors(r,Gn)),yr.normalize(),fl.crossVectors(Gn,yr),a[0]=yr.x,a[4]=fl.x,a[8]=Gn.x,a[1]=yr.y,a[5]=fl.y,a[9]=Gn.y,a[2]=yr.z,a[6]=fl.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],v=r[1],g=r[5],x=r[9],S=r[13],E=r[2],T=r[6],y=r[10],_=r[14],D=r[3],L=r[7],R=r[11],V=r[15],F=a[0],U=a[4],j=a[8],b=a[12],C=a[1],B=a[5],ae=a[9],ee=a[13],de=a[2],he=a[6],oe=a[10],ce=a[14],k=a[3],le=a[7],se=a[11],I=a[15];return l[0]=u*F+d*C+h*de+p*k,l[4]=u*U+d*B+h*he+p*le,l[8]=u*j+d*ae+h*oe+p*se,l[12]=u*b+d*ee+h*ce+p*I,l[1]=v*F+g*C+x*de+S*k,l[5]=v*U+g*B+x*he+S*le,l[9]=v*j+g*ae+x*oe+S*se,l[13]=v*b+g*ee+x*ce+S*I,l[2]=E*F+T*C+y*de+_*k,l[6]=E*U+T*B+y*he+_*le,l[10]=E*j+T*ae+y*oe+_*se,l[14]=E*b+T*ee+y*ce+_*I,l[3]=D*F+L*C+R*de+V*k,l[7]=D*U+L*B+R*he+V*le,l[11]=D*j+L*ae+R*oe+V*se,l[15]=D*b+L*ee+R*ce+V*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],v=e[2],g=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],_=e[15];return E*(+l*h*g-a*p*g-l*d*x+r*p*x+a*d*S-r*h*S)+T*(+t*h*S-t*p*x+l*u*x-a*u*S+a*p*v-l*h*v)+y*(+t*p*g-t*d*S-l*u*g+r*u*S+l*d*v-r*p*v)+_*(-a*d*v-t*h*g+t*d*x+a*u*g-r*u*x+r*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],g=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],_=e[15],D=g*y*p-T*x*p+T*h*S-d*y*S-g*h*_+d*x*_,L=E*x*p-v*y*p-E*h*S+u*y*S+v*h*_-u*x*_,R=v*T*p-E*g*p+E*d*S-u*T*S-v*d*_+u*g*_,V=E*g*h-v*T*h-E*d*x+u*T*x+v*d*y-u*g*y,F=t*D+r*L+a*R+l*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(T*x*l-g*y*l-T*a*S+r*y*S+g*a*_-r*x*_)*U,e[2]=(d*y*l-T*h*l+T*a*p-r*y*p-d*a*_+r*h*_)*U,e[3]=(g*h*l-d*x*l-g*a*p+r*x*p+d*a*S-r*h*S)*U,e[4]=L*U,e[5]=(v*y*l-E*x*l+E*a*S-t*y*S-v*a*_+t*x*_)*U,e[6]=(E*h*l-u*y*l-E*a*p+t*y*p+u*a*_-t*h*_)*U,e[7]=(u*x*l-v*h*l+v*a*p-t*x*p-u*a*S+t*h*S)*U,e[8]=R*U,e[9]=(E*g*l-v*T*l-E*r*S+t*T*S+v*r*_-t*g*_)*U,e[10]=(u*T*l-E*d*l+E*r*p-t*T*p-u*r*_+t*d*_)*U,e[11]=(v*d*l-u*g*l-v*r*p+t*g*p+u*r*S-t*d*S)*U,e[12]=V*U,e[13]=(v*T*a-E*g*a+E*r*x-t*T*x-v*r*y+t*g*y)*U,e[14]=(E*d*a-u*T*a-E*r*h+t*T*h+u*r*y-t*d*y)*U,e[15]=(u*g*a-v*d*a+v*r*h-t*g*h-u*r*x+t*d*x)*U,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*u,0,p*h-a*d,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,v=u+u,g=d+d,x=l*p,S=l*v,E=l*g,T=u*v,y=u*g,_=d*g,D=h*p,L=h*v,R=h*g,V=r.x,F=r.y,U=r.z;return a[0]=(1-(T+_))*V,a[1]=(S+R)*V,a[2]=(E-L)*V,a[3]=0,a[4]=(S-R)*F,a[5]=(1-(x+_))*F,a[6]=(y+D)*F,a[7]=0,a[8]=(E+L)*U,a[9]=(y-D)*U,a[10]=(1-(x+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ls.set(a[0],a[1],a[2]).length();const u=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],_i.copy(this);const p=1/l,v=1/u,g=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=ji){const h=this.elements,p=2*l/(t-e),v=2*l/(r-a),g=(t+e)/(t-e),x=(r+a)/(r-a);let S,E;if(d===ji)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Vl)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=ji){const h=this.elements,p=1/(t-e),v=1/(r-a),g=1/(u-l),x=(t+e)*p,S=(r+a)*v;let E,T;if(d===ji)E=(u+l)*g,T=-2*g;else if(d===Vl)E=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new q,_i=new Gt,ex=new q(0,0,0),tx=new q(1,1,1),yr=new q,fl=new q,Gn=new q,pm=new Gt,mm=new ts;class Ci{constructor(e=0,t=0,r=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],v=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nx=0;const gm=new q,Ns=new ts,Vi=new Gt,hl=new q,Vo=new q,ix=new q,rx=new ts,_m=new q(1,0,0),vm=new q(0,1,0),xm=new q(0,0,1),ym={type:"added"},sx={type:"removed"},Is={type:"childadded",child:null},ju={type:"childremoved",child:null};class ln extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new q,t=new Ci,r=new ts,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new at}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(vm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,t){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(vm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?hl.copy(e):hl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Vo,hl,this.up):Vi.lookAt(hl,Vo,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sx),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),g=u(e.shapes),x=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ln.DEFAULT_UP=new q(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new q,Hi=new q,Yu=new q,Gi=new q,Us=new q,Fs=new q,Sm=new q,qu=new q,Zu=new q,$u=new q,Ku=new kt,Qu=new kt,Ju=new kt;class ri{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),vi.subVectors(e,t),a.cross(vi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){vi.subVectors(a,t),Hi.subVectors(r,t),Yu.subVectors(e,t);const u=vi.dot(vi),d=vi.dot(Hi),h=vi.dot(Yu),p=Hi.dot(Hi),v=Hi.dot(Yu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-d*v)*x,E=(u*v-d*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,r,a,l,u,d,h){return this.getBarycoord(e,t,r,a,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Gi.x),h.addScaledVector(u,Gi.y),h.addScaledVector(d,Gi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return Ku.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(e,t),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,t,r,a){return vi.subVectors(r,t),Hi.subVectors(e,t),vi.cross(Hi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),vi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return ri.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;Us.subVectors(a,r),Fs.subVectors(l,r),qu.subVectors(e,r);const h=Us.dot(qu),p=Fs.dot(qu);if(h<=0&&p<=0)return t.copy(r);Zu.subVectors(e,a);const v=Us.dot(Zu),g=Fs.dot(Zu);if(v>=0&&g<=v)return t.copy(a);const x=h*g-v*p;if(x<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Us,u);$u.subVectors(e,l);const S=Us.dot($u),E=Fs.dot($u);if(E>=0&&S<=E)return t.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(Fs,d);const y=v*E-S*g;if(y<=0&&g-v>=0&&S-E>=0)return Sm.subVectors(l,a),d=(g-v)/(g-v+(S-E)),t.copy(a).addScaledVector(Sm,d);const _=1/(y+T+x);return u=T*_,d=x*_,t.copy(r).addScaledVector(Us,u).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=Mt.workingColorSpace){if(e=H0(e,1),t=wn(t,0,1),r=wn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=Ng[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(wn(_n.r*255,0,255))*65536+Math.round(wn(_n.g*255,0,255))*256+Math.round(wn(_n.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,a=_n.g,l=_n.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+u)/2;if(d===u)h=0,p=0;else{const g=u-d;switch(p=v<=.5?g/(u+d):g/(2-u-d),u){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ti){Mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,a=_n.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(pl);const r=Ou(Sr.h,pl.h,t),a=Ou(Sr.s,pl.s,t),l=Ou(Sr.l,pl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new gt;gt.NAMES=Ng;let ox=0;class io extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Ko(),this.name="",this.blending=js,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ig extends io{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,ml=new lt;class vn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=sm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}}class Ug extends vn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Fg extends vn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kn extends vn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ax=0;const ei=new Gt,td=new ln,Os=new q,Wn=new no,Ho=new no,sn=new q;class ai extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Fg:Ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new at().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new kn(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(Wn.min,Ho.min),Wn.expandByPoint(sn),sn.addVectors(Wn.max,Ho.max),Wn.expandByPoint(sn)):(Wn.expandByPoint(Ho.min),Wn.expandByPoint(Ho.max))}Wn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)sn.fromBufferAttribute(d,p),h&&(Os.fromBufferAttribute(e,p),sn.add(Os)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let j=0;j<r.count;j++)d[j]=new q,h[j]=new q;const p=new q,v=new q,g=new q,x=new lt,S=new lt,E=new lt,T=new q,y=new q;function _(j,b,C){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),x.fromBufferAttribute(l,j),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),v.sub(p),g.sub(p),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(B),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(B),d[j].add(T),d[b].add(T),d[C].add(T),h[j].add(y),h[b].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,b=D.length;j<b;++j){const C=D[j],B=C.start,ae=C.count;for(let ee=B,de=B+ae;ee<de;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new q,R=new q,V=new q,F=new q;function U(j){V.fromBufferAttribute(a,j),F.copy(V);const b=d[j];L.copy(b),L.sub(V.multiplyScalar(V.dot(b))).normalize(),R.crossVectors(F,b);const B=R.dot(h[j])<0?-1:1;u.setXYZW(j,L.x,L.y,L.z,B)}for(let j=0,b=D.length;j<b;++j){const C=D[j],B=C.start,ae=C.count;for(let ee=B,de=B+ae;ee<de;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new q,l=new q,u=new q,d=new q,h=new q,p=new q,v=new q,g=new q;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),v.subVectors(u,l),g.subVectors(a,l),v.cross(g),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(v),h.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),g.subVectors(a,l),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(h.length*v);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*v;for(let _=0;_<v;_++)x[E++]=p[S++]}return new vn(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=e(x,r);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],g=l[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new Gt,Xr=new pf,gl=new $l,Em=new q,_l=new q,vl=new q,xl=new q,nd=new q,yl=new q,Tm=new q,Sl=new q;class xi extends ln{constructor(e=new ai,t=new Ig){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){yl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],g=l[h];v!==0&&(nd.fromBufferAttribute(g,e),u?yl.addScaledVector(nd,v):yl.addScaledVector(nd.sub(t),v))}t.add(yl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(gl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(gl,Em)===null||Xr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Mm),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=u[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,V=L;R<V;R+=3){const F=d.getX(R),U=d.getX(R+1),j=d.getX(R+2);a=Ml(this,_,e,r,p,v,g,F,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const D=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);a=Ml(this,u,e,r,p,v,g,D,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],_=u[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,V=L;R<V;R+=3){const F=R,U=R+1,j=R+2;a=Ml(this,_,e,r,p,v,g,F,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const D=y,L=y+1,R=y+2;a=Ml(this,u,e,r,p,v,g,D,L,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function lx(s,e,t,r,a,l,u,d){let h;if(e.side===On?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===Rr,d),h===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Sl);return p<t.near||p>t.far?null:{distance:p,point:Sl.clone(),object:s}}function Ml(s,e,t,r,a,l,u,d,h,p){s.getVertexPosition(d,_l),s.getVertexPosition(h,vl),s.getVertexPosition(p,xl);const v=lx(s,e,t,r,_l,vl,xl,Tm);if(v){const g=new q;ri.getBarycoord(Tm,_l,vl,xl,g),a&&(v.uv=ri.getInterpolatedAttribute(a,d,h,p,g,new lt)),l&&(v.uv1=ri.getInterpolatedAttribute(l,d,h,p,g,new lt)),u&&(v.normal=ri.getInterpolatedAttribute(u,d,h,p,g,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:h,c:p,normal:new q,materialIndex:0};ri.getNormal(_l,vl,xl,x.normal),v.face=x,v.barycoord=g}return v}class Qo extends ai{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(g,2));function E(T,y,_,D,L,R,V,F,U,j,b){const C=R/U,B=V/j,ae=R/2,ee=V/2,de=F/2,he=U+1,oe=j+1;let ce=0,k=0;const le=new q;for(let se=0;se<oe;se++){const I=se*B-ee;for(let ie=0;ie<he;ie++){const Ie=ie*C-ae;le[T]=Ie*D,le[y]=I*L,le[_]=de,p.push(le.x,le.y,le.z),le[T]=0,le[y]=0,le[_]=F>0?1:-1,v.push(le.x,le.y,le.z),g.push(ie/U),g.push(1-se/j),ce+=1}}for(let se=0;se<j;se++)for(let I=0;I<U;I++){const ie=x+I+he*se,Ie=x+I+he*(se+1),Q=x+(I+1)+he*(se+1),ue=x+(I+1)+he*se;h.push(ie,Ie,ue),h.push(Ie,Q,ue),k+=6}d.addGroup(S,k,b),S+=k,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const a in r)e[a]=r[a]}return e}function cx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const ux={clone:eo,merge:Tn};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends io{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class kg extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new q,wm=new lt,Am=new lt;class ni extends kg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,wm,Am),t.subVectors(Am,wm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class hx extends ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(ks,Bs,e,t);a.layers=this.layers,this.add(a);const l=new ni(ks,Bs,e,t);l.layers=this.layers,this.add(l);const u=new ni(ks,Bs,e,t);u.layers=this.layers,this.add(u);const d=new ni(ks,Bs,e,t);d.layers=this.layers,this.add(d);const h=new ni(ks,Bs,e,t);h.layers=this.layers,this.add(h);const p=new ni(ks,Bs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(g,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Bg extends An{constructor(e,t,r,a,l,u,d,h,p,v){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,r,a,l,u,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Bg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Qo(5,5,5),l=new Zi({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Ar});l.uniforms.tEquirect.value=t;const u=new xi(a,l),d=t.minFilter;return t.minFilter===Qr&&(t.minFilter=si),new hx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const id=new q,mx=new q,gx=new at;class Er{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=id.subVectors(r,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(id),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gx.getNormalMatrix(e),a=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new $l,El=new q;class mf{constructor(e=new Er,t=new Er,r=new Er,a=new Er,l=new Er,u=new Er){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],x=a[7],S=a[8],E=a[9],T=a[10],y=a[11],_=a[12],D=a[13],L=a[14],R=a[15];if(r[0].setComponents(h-l,x-p,y-S,R-_).normalize(),r[1].setComponents(h+l,x+p,y+S,R+_).normalize(),r[2].setComponents(h+u,x+v,y+E,R+D).normalize(),r[3].setComponents(h-u,x-v,y-E,R-D).normalize(),r[4].setComponents(h-d,x-g,y-T,R-L).normalize(),t===ji)r[5].setComponents(h+d,x+g,y+T,R+L).normalize();else if(t===Vl)r[5].setComponents(d,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(El.x=a.normal.x>0?e.max.x:e.min.x,El.y=a.normal.y>0?e.max.y:e.min.y,El.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function _x(s){const e=new WeakMap;function t(d,h){const p=d.array,v=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,p){const v=h.array,g=h.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}class Kl extends ai{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,g=e/d,x=t/h,S=[],E=[],T=[],y=[];for(let _=0;_<v;_++){const D=_*x-u;for(let L=0;L<p;L++){const R=L*g-l;E.push(R,-D,0),T.push(0,0,1),y.push(L/d),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<d;D++){const L=D+p*_,R=D+p*(_+1),V=D+1+p*(_+1),F=D+1+p*_;S.push(L,R,F),S.push(R,V,F)}this.setIndex(S),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
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
#endif`,yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
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
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
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
#endif`,Lx=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vx=`#define PI 3.141592653589793
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gx=`vec3 transformedNormal = objectNormal;
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
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$x=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sy=`#ifdef USE_GRADIENTMAP
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
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
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
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
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
#endif`,gy=`struct PhysicalMaterial {
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
}`,_y=`
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cy=`#if defined( USE_POINTS_UV )
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
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
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
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
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
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nS=`float getShadowMask() {
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
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`#include <common>
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
}`,TS=`#if DEPTH_PACKING == 3200
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
}`,wS=`#define DISTANCE
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
}`,AS=`#define DISTANCE
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
}`,NS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,FS=`#define MATCAP
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
}`,OS=`#define NORMAL
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
}`,kS=`#define NORMAL
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
}`,BS=`#define PHONG
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
}`,zS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,WS=`#define TOON
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
}`,XS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,YS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,ZS=`uniform float rotation;
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
}`,$S=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:vx,alphahash_pars_fragment:xx,alphamap_fragment:yx,alphamap_pars_fragment:Sx,alphatest_fragment:Mx,alphatest_pars_fragment:Ex,aomap_fragment:Tx,aomap_pars_fragment:wx,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Rx,beginnormal_vertex:bx,bsdfs:Px,iridescence_fragment:Dx,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Fx,color_fragment:Ox,color_pars_fragment:kx,color_pars_vertex:Bx,color_vertex:zx,common:Vx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Wx,displacementmap_vertex:Xx,emissivemap_fragment:jx,emissivemap_pars_fragment:Yx,colorspace_fragment:qx,colorspace_pars_fragment:Zx,envmap_fragment:$x,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Qx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:uy,envmap_vertex:ey,fog_vertex:ty,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:ry,gradientmap_pars_fragment:sy,lightmap_pars_fragment:oy,lights_lambert_fragment:ay,lights_lambert_pars_fragment:ly,lights_pars_begin:cy,lights_toon_fragment:dy,lights_toon_pars_fragment:fy,lights_phong_fragment:hy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:gy,lights_fragment_begin:_y,lights_fragment_maps:vy,lights_fragment_end:xy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Ey,map_fragment:Ty,map_pars_fragment:wy,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:by,morphinstance_vertex:Py,morphcolor_vertex:Dy,morphnormal_vertex:Ly,morphtarget_pars_vertex:Ny,morphtarget_vertex:Iy,normal_fragment_begin:Uy,normal_fragment_maps:Fy,normal_pars_fragment:Oy,normal_pars_vertex:ky,normal_vertex:By,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Wy,opaque_fragment:Xy,packing:jy,premultiplied_alpha_fragment:Yy,project_vertex:qy,dithering_fragment:Zy,dithering_pars_fragment:$y,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:eS,shadowmap_vertex:tS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:rS,skinning_vertex:sS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:uS,transmission_fragment:dS,transmission_pars_fragment:fS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:gS,background_vert:_S,background_frag:vS,backgroundCube_vert:xS,backgroundCube_frag:yS,cube_vert:SS,cube_frag:MS,depth_vert:ES,depth_frag:TS,distanceRGBA_vert:wS,distanceRGBA_frag:AS,equirect_vert:CS,equirect_frag:RS,linedashed_vert:bS,linedashed_frag:PS,meshbasic_vert:DS,meshbasic_frag:LS,meshlambert_vert:NS,meshlambert_frag:IS,meshmatcap_vert:US,meshmatcap_frag:FS,meshnormal_vert:OS,meshnormal_frag:kS,meshphong_vert:BS,meshphong_frag:zS,meshphysical_vert:VS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:WS,points_vert:XS,points_frag:jS,shadow_vert:YS,shadow_frag:qS,sprite_vert:ZS,sprite_frag:$S},Pe={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Tn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Tn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Tn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Tn([Pe.lights,Pe.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Tl={r:0,b:0,g:0},Yr=new Ci,KS=new Gt;function QS(s,e,t,r,a,l,u){const d=new gt(0);let h=l===!0?0:1,p,v,g=null,x=0,S=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?t:e).get(L)),L}function T(D){let L=!1;const R=E(D);R===null?_(d,h):R&&R.isColor&&(_(R,1),L=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===ql)?(v===void 0&&(v=new xi(new Qo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:eo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Yr.copy(L.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(Yr)),v.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Pt,(g!==R||x!==R.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=R,x=R.version,S=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new xi(new Kl(2,2),new Zi({name:"BackgroundMaterial",uniforms:eo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=R,x=R.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,L){D.getRGB(Tl,Og(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,_(d,h)},render:T,addToRenderList:y}}function JS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,u=!1;function d(C,B,ae,ee,de){let he=!1;const oe=g(ee,ae,B);l!==oe&&(l=oe,p(l.object)),he=S(C,ee,ae,de),he&&E(C,ee,ae,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,B,ae,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function g(C,B,ae){const ee=ae.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let he=de[B.id];he===void 0&&(he={},de[B.id]=he);let oe=he[ee];return oe===void 0&&(oe=x(h()),he[ee]=oe),oe}function x(C){const B=[],ae=[],ee=[];for(let de=0;de<t;de++)B[de]=0,ae[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,B,ae,ee){const de=l.attributes,he=B.attributes;let oe=0;const ce=ae.getAttributes();for(const k in ce)if(ce[k].location>=0){const se=de[k];let I=he[k];if(I===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;oe++}return l.attributesNum!==oe||l.index!==ee}function E(C,B,ae,ee){const de={},he=B.attributes;let oe=0;const ce=ae.getAttributes();for(const k in ce)if(ce[k].location>=0){let se=he[k];se===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),de[k]=I,oe++}l.attributes=de,l.attributesNum=oe,l.index=ee}function T(){const C=l.newAttributes;for(let B=0,ae=C.length;B<ae;B++)C[B]=0}function y(C){_(C,0)}function _(C,B){const ae=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;ae[C]=1,ee[C]===0&&(s.enableVertexAttribArray(C),ee[C]=1),de[C]!==B&&(s.vertexAttribDivisor(C,B),de[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let ae=0,ee=B.length;ae<ee;ae++)B[ae]!==C[ae]&&(s.disableVertexAttribArray(ae),B[ae]=0)}function L(C,B,ae,ee,de,he,oe){oe===!0?s.vertexAttribIPointer(C,B,ae,de,he):s.vertexAttribPointer(C,B,ae,ee,de,he)}function R(C,B,ae,ee){T();const de=ee.attributes,he=ae.getAttributes(),oe=B.defaultAttributeValues;for(const ce in he){const k=he[ce];if(k.location>=0){let le=de[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ie=ie.buffer,Q=ie.type,ue=ie.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===lf;if(le.isInterleavedBufferAttribute){const xe=le.data,Ce=xe.stride,Ue=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)_(k.location+Qe,xe.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)y(k.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Qe=0;Qe<k.locationSize;Qe++)L(k.location+Qe,I/k.locationSize,Q,se,Ce*ue,(Ue+I/k.locationSize*Qe)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)_(k.location+xe,le.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<k.locationSize;xe++)L(k.location+xe,I/k.locationSize,Q,se,I*ue,I/k.locationSize*xe*ue,Ee)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(k.location,se);break;case 3:s.vertexAttrib3fv(k.location,se);break;case 4:s.vertexAttrib4fv(k.location,se);break;default:s.vertexAttrib1fv(k.location,se)}}}}D()}function V(){j();for(const C in r){const B=r[C];for(const ae in B){const ee=B[ae];for(const de in ee)v(ee[de].object),delete ee[de];delete B[ae]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ae in B){const ee=B[ae];for(const de in ee)v(ee[de].object),delete ee[de];delete B[ae]}delete r[C.id]}function U(C){for(const B in r){const ae=r[B];if(ae[C.id]===void 0)continue;const ee=ae[C.id];for(const de in ee)v(ee[de].object),delete ee[de];delete ae[C.id]}}function j(){b(),u=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function eM(s,e,t){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function u(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),t.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];t.update(S,r,1)}function h(p,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*x[T];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function tM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==oi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const j=U===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==qi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Xi&&!j)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:V,maxSamples:F}}function nM(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Er,d=new at,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=v(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!a||E===null||E.length===0||l&&!y)l?v(null):p();else{const D=l?0:r,L=D*4;let R=_.clippingState||null;h.value=R,R=v(E,x,L,S);for(let V=0;V!==L;++V)R[V]=t[V];_.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,E){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const _=S+T*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,R=S;L!==T;++L,R+=4)u.copy(g[L]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function iM(s){let e=new WeakMap;function t(u,d){return d===wd?u.mapping=$s:d===Ad&&(u.mapping=Ks),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===wd||d===Ad)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new px(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Vg extends kg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Cm=[.125,.215,.35,.446,.526,.582],Kr=20,rd=new Vg,Rm=new gt;let sd=null,od=0,ad=0,ld=!1;const Zr=(1+Math.sqrt(5))/2,zs=1/Zr,bm=[new q(-Zr,zs,0),new q(Zr,zs,0),new q(-zs,0,Zr),new q(zs,0,Zr),new q(0,Zr,-zs),new q(0,Zr,zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ad),this._renderer.xr.enabled=ld,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:$o,format:oi,colorSpace:to,depthBuffer:!1},a=Dm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(l)),this._blurMaterial=sM(l,e,t)}return a}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,rd)}_sceneToCubeUV(e,t,r,a){const d=new ni(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(Rm),v.toneMapping=Cr,v.autoClear=!1;const S=new Ig({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),E=new xi(new Qo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(Rm),T=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(d.up.set(0,h[_],0),d.lookAt(p[_],0,0)):D===1?(d.up.set(0,0,h[_]),d.lookAt(0,p[_],0)):(d.up.set(0,h[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;wl(a,D*L,_>2?L:0,L,L),v.setRenderTarget(a),T&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=g,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new xi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;wl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,rd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=bm[(a-l-1)%bm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new xi(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),T=l/E,y=isFinite(l)?1+Math.floor(v*T):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const _=[];let D=0;for(let U=0;U<Kr;++U){const j=U/T,b=Math.exp(-j*j/2);_.push(b),U===0?D+=b:U<y&&(D+=2*b)}for(let U=0;U<_.length;U++)_[U]=_[U]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const R=this._sizeLods[a],V=3*R*(a>L-Gs?a-L+Gs:0),F=4*(this._cubeSize-R);wl(t,V,F,3*R,2*R),h.setRenderTarget(t),h.render(g,rd)}}function rM(s){const e=[],t=[],r=[];let a=s;const l=s-Gs+1+Cm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>s-Gs?h=Cm[u-s+Gs-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,T=3,y=2,_=1,D=new Float32Array(T*E*S),L=new Float32Array(y*E*S),R=new Float32Array(_*E*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,j=F>2?0:-1,b=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(b,T*E*F),L.set(x,y*E*F);const C=[F,F,F,F,F,F];R.set(C,_*E*F)}const V=new ai;V.setAttribute("position",new vn(D,T)),V.setAttribute("uv",new vn(L,y)),V.setAttribute("faceIndex",new vn(R,_)),e.push(V),a>Gs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Dm(s,e,t){const r=new es(s,e,t);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function sM(s,e,t){const r=new Float32Array(Kr),a=new q(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Lm(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Nm(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function oM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===wd||h===Ad,v=h===$s||h===Ks;if(p||v){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Pm(s)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new Pm(s)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let h=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function aM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Xo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function lM(s,e,t,r){const a={},l=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let y=0,_=T.length;y<_;y++)e.remove(T[y])}x.removeEventListener("dispose",u),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const T=S[E];for(let y=0,_=T.length;y<_;y++)e.update(T[y],s.ARRAY_BUFFER)}}function p(g){const x=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let L=0,R=D.length;L<R;L+=3){const V=D[L+0],F=D[L+1],U=D[L+2];x.push(V,F,F,U,U,V)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const V=L+0,F=L+1,U=L+2;x.push(V,F,F,U,U,V)}}else return;const y=new(bg(x)?Fg:Ug)(x,1);y.version=T;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function v(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:v}}function cM(s,e,t){let r;function a(x){r=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*u),t.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*u,E),t.update(S,r,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];t.update(y,r,1)}function g(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/u,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,T,0,E);let _=0;for(let D=0;D<E;D++)_+=S[D]*T[D];t.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function uM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function dM(s,e,t){const r=new WeakMap,a=new kt;function l(u,d,h){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let V=d.attributes.position.count*R,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*F*4*g),j=new Dg(U,V,F,g);j.type=Xi,j.needsUpdate=!0;const b=R*4;for(let B=0;B<g;B++){const ae=_[B],ee=D[B],de=L[B],he=V*F*4*B;for(let oe=0;oe<ae.count;oe++){const ce=oe*b;E===!0&&(a.fromBufferAttribute(ae,oe),U[he+ce+0]=a.x,U[he+ce+1]=a.y,U[he+ce+2]=a.z,U[he+ce+3]=0),T===!0&&(a.fromBufferAttribute(ee,oe),U[he+ce+4]=a.x,U[he+ce+5]=a.y,U[he+ce+6]=a.z,U[he+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),U[he+ce+8]=a.x,U[he+ce+9]=a.y,U[he+ce+10]=a.z,U[he+ce+11]=de.itemSize===4?a.w:1)}}x={count:g,texture:j,size:new lt(V,F)},r.set(d,x),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function fM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Hg extends An{constructor(e,t,r,a,l,u,d,h,p,v=Ys){if(v!==Ys&&v!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ys&&(r=Jr),r===void 0&&v===Js&&(r=Qs),super(null,a,l,u,d,h,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Xn,this.minFilter=h!==void 0?h:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gg=new An,Im=new Hg(1,1),Wg=new Dg,Xg=new Q0,jg=new Bg,Um=[],Fm=[],Om=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Um[a];if(l===void 0&&(l=new Float32Array(a),Um[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ql(s,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Bm.set(r),s.uniformMatrix2fv(this.addr,!1,Bm),en(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;km.set(r),s.uniformMatrix3fv(this.addr,!1,km),en(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Om.set(r),s.uniformMatrix4fv(this.addr,!1,Om),en(t,r)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function RM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Im.compareFunction=Rg,l=Im):l=Gg,t.setTexture2D(e||l,a)}function bM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Xg,a)}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||jg,a)}function DM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Wg,a)}function LM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return EM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}function NM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function UM(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function FM(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function OM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function VM(s,e){s.uniform2iv(this.addr,e)}function HM(s,e){s.uniform3iv(this.addr,e)}function GM(s,e){s.uniform4iv(this.addr,e)}function WM(s,e){s.uniform1uiv(this.addr,e)}function XM(s,e){s.uniform2uiv(this.addr,e)}function jM(s,e){s.uniform3uiv(this.addr,e)}function YM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Gg,l[u])}function ZM(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Xg,l[u])}function $M(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||jg,l[u])}function KM(s,e,t){const r=this.cache,a=e.length,l=Ql(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Wg,l[u])}function QM(s){switch(s){case 5126:return NM;case 35664:return IM;case 35665:return UM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return HM;case 35669:case 35673:return GM;case 5125:return WM;case 36294:return XM;case 36295:return jM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LM(t.type)}}class eE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function nE(s,e,t){const r=s.name,a=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){zm(t,p===void 0?new JM(d,s,e):new eE(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new tE(d),zm(t,g)),t=g}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);nE(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Vm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iE=37297;let rE=0;function sE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Hm=new at;function oE(s){Mt._getMatrix(Hm,Mt.workingColorSpace,s);const e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+sE(s.getShaderSource(e),u)}else return a}function aE(s,e){const t=oE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lE(s,e){let t;switch(e){case T0:t="Linear";break;case w0:t="Reinhard";break;case A0:t="Cineon";break;case C0:t="ACESFilmic";break;case b0:t="AgX";break;case P0:t="Neutral";break;case R0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new q;function cE(){Mt.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function dE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function jo(s){return s!==""}function Wm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(s){return s.replace(hE,mE)}const pE=new Map;function mE(s,e){let t=ct[e];if(t===void 0){const r=pE.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return nf(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(s){return s.replace(gE,_E)}function _E(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ym(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function xE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function SE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case M0:e="ENVMAP_BLENDING_MIX";break;case E0:e="ENVMAP_BLENDING_ADD";break}return e}function ME(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function EE(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=vE(t),p=xE(t),v=yE(t),g=SE(t),x=ME(t),S=uE(t),E=dE(l),T=a.createProgram();let y,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(y=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Cr?lE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),u=nf(u),u=Wm(u,t),u=Xm(u,t),d=nf(d),d=Wm(d,t),d=Xm(d,t),u=jm(u),d=jm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+y+u,R=D+_+d,V=Vm(a,a.VERTEX_SHADER,L),F=Vm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,V),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(B){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog(V).trim(),de=a.getShaderInfoLog(F).trim();let he=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,V,F);else{const ce=Gm(a,V,"vertex"),k=Gm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ce+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ee===""||de==="")&&(oe=!1);oe&&(B.diagnostics={runnable:he,programLog:ae,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:_}})}a.deleteShader(V),a.deleteShader(F),j=new zl(a,T),b=fE(a,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,iE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=F,this}let TE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AE(e),t.set(e,r)),r}}class AE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function CE(s,e,t,r,a,l,u){const d=new Lg,h=new wE,p=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,C,B,ae,ee){const de=ae.fog,he=ee.geometry,oe=b.isMeshStandardMaterial?ae.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),k=ce&&ce.mapping===ql?ce.image.height:null,le=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=se!==void 0?se.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Ie,Q,ue,Ee;if(le){const yt=Ai[le];Ie=yt.vertexShader,Q=yt.fragmentShader}else Ie=b.vertexShader,Q=b.fragmentShader,h.update(b),ue=h.getVertexShaderID(b),Ee=h.getFragmentShaderID(b);const xe=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Qe=ee.isBatchedMesh===!0,bt=!!b.map,_t=!!b.matcap,Nt=!!ce,X=!!b.aoMap,xn=!!b.lightMap,mt=!!b.bumpMap,dt=!!b.normalMap,Ze=!!b.displacementMap,Ct=!!b.emissiveMap,qe=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,$=b.clearcoat>0,me=b.dispersion>0,_e=b.iridescence>0,fe=b.sheen>0,Ge=b.transmission>0,Re=w&&!!b.anisotropyMap,Fe=$&&!!b.clearcoatMap,ut=$&&!!b.clearcoatNormalMap,Se=$&&!!b.clearcoatRoughnessMap,ke=_e&&!!b.iridescenceMap,Je=_e&&!!b.iridescenceThicknessMap,et=fe&&!!b.sheenColorMap,Be=fe&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,At=!!b.specularIntensityMap,H=Ge&&!!b.transmissionMap,be=Ge&&!!b.thicknessMap,re=!!b.gradientMap,pe=!!b.alphaMap,Le=b.alphaTest>0,De=!!b.alphaHash,st=!!b.extensions;let Ut=Cr;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const qt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Q,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:to,alphaToCoverage:!!b.alphaToCoverage,map:bt,matcap:_t,envMap:Nt,envMapMode:Nt&&ce.mapping,envMapCubeUVHeight:k,aoMap:X,lightMap:xn,bumpMap:mt,normalMap:dt,displacementMap:x&&Ze,emissiveMap:Ct,normalMapObjectSpace:dt&&b.normalMapType===I0,normalMapTangentSpace:dt&&b.normalMapType===Cg,metalnessMap:qe,roughnessMap:P,anisotropy:w,anisotropyMap:Re,clearcoat:$,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:rt,specularIntensityMap:At,transmission:Ge,transmissionMap:H,thicknessMap:be,gradientMap:re,opaque:b.transparent===!1&&b.blending===js&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:De,combine:b.combine,mapUv:bt&&T(b.map.channel),aoMapUv:X&&T(b.aoMap.channel),lightMapUv:xn&&T(b.lightMap.channel),bumpMapUv:mt&&T(b.bumpMap.channel),normalMapUv:dt&&T(b.normalMap.channel),displacementMapUv:Ze&&T(b.displacementMap.channel),emissiveMapUv:Ct&&T(b.emissiveMap.channel),metalnessMapUv:qe&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Re&&T(b.anisotropyMap.channel),clearcoatMapUv:Fe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:rt&&T(b.specularColorMap.channel),specularIntensityMapUv:At&&T(b.specularIntensityMap.channel),transmissionMapUv:H&&T(b.transmissionMap.channel),thicknessMapUv:be&&T(b.thicknessMap.channel),alphaMapUv:pe&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(dt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(bt||pe),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:bt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ct&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ii,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function _(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(D(C,b),L(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function D(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const C=E[b.type];let B;if(C){const ae=Ai[C];B=ux.clone(ae.uniforms)}else B=b.uniforms;return B}function V(b,C){let B;for(let ae=0,ee=v.length;ae<ee;ae++){const de=v[ae];if(de.cacheKey===C){B=de,++B.usedTimes;break}}return B===void 0&&(B=new EE(s,C,b,l),v.push(B)),B}function F(b){if(--b.usedTimes===0){const C=v.indexOf(b);v[C]=v[v.length-1],v.pop(),b.destroy()}}function U(b){h.remove(b)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:V,releaseProgram:F,releaseShaderCache:U,programs:v,dispose:j}}function RE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function bE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g,x,S,E,T,y){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:y},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=y),e++,_}function d(g,x,S,E,T,y){const _=u(g,x,S,E,T,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(g,x,S,E,T,y){const _=u(g,x,S,E,T,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(g,x){t.length>1&&t.sort(g||bE),r.length>1&&r.sort(x||qm),a.length>1&&a.sort(x||qm)}function v(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:v,sort:p}}function PE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Zm,s.set(r,[u])):a>=l.length?(u=new Zm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function DE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new gt};break;case"SpotLight":t={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function LE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NE=0;function IE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UE(s){const e=new DE,t=LE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,l=new Gt,u=new Gt;function d(p){let v=0,g=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,D=0,L=0,R=0,V=0,F=0,U=0;p.sort(IE);for(let b=0,C=p.length;b<C;b++){const B=p[b],ae=B.color,ee=B.intensity,de=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ae.r*ee,g+=ae.g*ee,x+=ae.b*ee;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],ee);U++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,k=t.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=B.shadow.matrix,D++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ae).multiplyScalar(ee),oe.distance=de,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[T]=oe;const ce=B.shadow;if(B.map&&(r.spotLightMap[V]=B.map,V++,ce.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[T]=ce.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=he,R++}T++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ae).multiplyScalar(ee),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ce=B.shadow,k=t.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=B.shadow.matrix,L++}r.point[E]=oe,E++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(ee),oe.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==T||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==D||j.numPointShadows!==L||j.numSpotShadows!==R||j.numSpotMaps!==V||j.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+V-F,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,j.directionalLength=S,j.pointLength=E,j.spotLength=T,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=D,j.numPointShadows=L,j.numSpotShadows=R,j.numSpotMaps=V,j.numLightProbes=U,r.version=NE++)}function h(p,v){let g=0,x=0,S=0,E=0,T=0;const y=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const L=p[_];if(L.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(L.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:r}}function $m(s){const e=new UE(s),t=[],r=[];function a(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function FE(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new $m(s),e.set(a,[d])):l>=u.length?(d=new $m(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class OE extends io{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends io{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
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
}`;function VE(s,e,t){let r=new mf;const a=new lt,l=new lt,u=new kt,d=new OE({depthPacking:N0}),h=new kE,p={},v=t.maxTextureSize,g={[Rr]:On,[On]:Rr,[ii]:ii},x=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new ai;E.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mg;let _=this.type;this.render=function(F,U,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Ar),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=_!==Wi&&this.type===Wi,de=_===Wi&&this.type!==Wi;for(let he=0,oe=F.length;he<oe;he++){const ce=F[he],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const le=k.getFrameExtents();if(a.multiply(le),l.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/le.x),a.x=l.x*le.x,k.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/le.y),a.y=l.y*le.y,k.mapSize.y=l.y)),k.map===null||ee===!0||de===!0){const I=this.type!==Wi?{minFilter:Xn,magFilter:Xn}:{};k.map!==null&&k.map.dispose(),k.map=new es(a.x,a.y,I),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const se=k.getViewportCount();for(let I=0;I<se;I++){const ie=k.getViewport(I);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ae.viewport(u),k.updateMatrices(ce,I),r=k.getFrustum(),R(U,j,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===Wi&&D(k,j),k.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,C,B)};function D(F,U){const j=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new es(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,j,x,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,j,S,T,null)}function L(F,U,j,b){let C=null;const B=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)C=B;else if(C=j.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=C.uuid,ee=U.uuid;let de=p[ae];de===void 0&&(de={},p[ae]=de);let he=de[ee];he===void 0&&(he=C.clone(),de[ee]=he,U.addEventListener("dispose",V)),C=he}if(C.visible=U.visible,C.wireframe=U.wireframe,b===Wi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=s.properties.get(C);ae.light=j}return C}function R(F,U,j,b,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Wi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),de=F.material;if(Array.isArray(de)){const he=ee.groups;for(let oe=0,ce=he.length;oe<ce;oe++){const k=he[oe],le=de[k.materialIndex];if(le&&le.visible){const se=L(F,le,b,C);F.onBeforeShadow(s,F,U,j,ee,se,k),s.renderBufferDirect(j,null,ee,se,F,k),F.onAfterShadow(s,F,U,j,ee,se,k)}}}else if(de.visible){const he=L(F,de,b,C);F.onBeforeShadow(s,F,U,j,ee,he,null),s.renderBufferDirect(j,null,ee,he,F,null),F.onAfterShadow(s,F,U,j,ee,he,null)}}const ae=F.children;for(let ee=0,de=ae.length;ee<de;ee++)R(ae[ee],U,j,b,C)}function V(F){F.target.removeEventListener("dispose",V);for(const j in p){const b=p[j],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const HE={[vd]:xd,[yd]:Ed,[Sd]:Td,[Zs]:Md,[xd]:vd,[Ed]:yd,[Td]:Sd,[Md]:Zs};function GE(s,e){function t(){let H=!1;const be=new kt;let re=null;const pe=new kt(0,0,0,0);return{setMask:function(Le){re!==Le&&!H&&(s.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){H=Le},setClear:function(Le,De,st,Ut,qt){qt===!0&&(Le*=Ut,De*=Ut,st*=Ut),be.set(Le,De,st,Ut),pe.equals(be)===!1&&(s.clearColor(Le,De,st,Ut),pe.copy(be))},reset:function(){H=!1,re=null,pe.set(-1,0,0,0)}}}function r(){let H=!1,be=!1,re=null,pe=null,Le=null;return{setReversed:function(De){if(be!==De){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}be=De},getReversed:function(){return be},setTest:function(De){De?xe(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(De){re!==De&&!H&&(s.depthMask(De),re=De)},setFunc:function(De){if(be&&(De=HE[De]),pe!==De){switch(De){case vd:s.depthFunc(s.NEVER);break;case xd:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Sd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){H=De},setClear:function(De){Le!==De&&(be&&(De=1-De),s.clearDepth(De),Le=De)},reset:function(){H=!1,re=null,pe=null,Le=null,be=!1}}}function a(){let H=!1,be=null,re=null,pe=null,Le=null,De=null,st=null,Ut=null,qt=null;return{setTest:function(yt){H||(yt?xe(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(yt){be!==yt&&!H&&(s.stencilMask(yt),be=yt)},setFunc:function(yt,Cn,yn){(re!==yt||pe!==Cn||Le!==yn)&&(s.stencilFunc(yt,Cn,yn),re=yt,pe=Cn,Le=yn)},setOp:function(yt,Cn,yn){(De!==yt||st!==Cn||Ut!==yn)&&(s.stencilOp(yt,Cn,yn),De=yt,st=Cn,Ut=yn)},setLocked:function(yt){H=yt},setClear:function(yt){qt!==yt&&(s.clearStencil(yt),qt=yt)},reset:function(){H=!1,be=null,re=null,pe=null,Le=null,De=null,st=null,Ut=null,qt=null}}}const l=new t,u=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,D=null,L=null,R=null,V=null,F=null,U=new gt(0,0,0),j=0,b=!1,C=null,B=null,ae=null,ee=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(k)[1]),oe=ce>=1):k.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),oe=ce>=2);let le=null,se={};const I=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ie=new kt().fromArray(I),Q=new kt().fromArray(ie);function ue(H,be,re,pe){const Le=new Uint8Array(4),De=s.createTexture();s.bindTexture(H,De),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<re;st++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(be+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return De}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Zs),mt(!1),dt(em),xe(s.CULL_FACE),X(Ar);function xe(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function Ce(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ue(H,be){return g[H]!==be?(s.bindFramebuffer(H,be),g[H]=be,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=be),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Qe(H,be){let re=S,pe=!1;if(H){re=x.get(be),re===void 0&&(re=[],x.set(be,re));const Le=H.textures;if(re.length!==Le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let De=0,st=Le.length;De<st;De++)re[De]=s.COLOR_ATTACHMENT0+De;re.length=Le.length,pe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,pe=!0);pe&&s.drawBuffers(re)}function bt(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const _t={[$r]:s.FUNC_ADD,[s0]:s.FUNC_SUBTRACT,[o0]:s.FUNC_REVERSE_SUBTRACT};_t[a0]=s.MIN,_t[l0]=s.MAX;const Nt={[c0]:s.ZERO,[u0]:s.ONE,[d0]:s.SRC_COLOR,[gd]:s.SRC_ALPHA,[_0]:s.SRC_ALPHA_SATURATE,[m0]:s.DST_COLOR,[h0]:s.DST_ALPHA,[f0]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[g0]:s.ONE_MINUS_DST_COLOR,[p0]:s.ONE_MINUS_DST_ALPHA,[v0]:s.CONSTANT_COLOR,[x0]:s.ONE_MINUS_CONSTANT_COLOR,[y0]:s.CONSTANT_ALPHA,[S0]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,be,re,pe,Le,De,st,Ut,qt,yt){if(H===Ar){T===!0&&(Ce(s.BLEND),T=!1);return}if(T===!1&&(xe(s.BLEND),T=!0),H!==r0){if(H!==y||yt!==b){if((_!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),_=$r,R=$r),yt)switch(H){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tm:s.blendFunc(s.ONE,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case im:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}D=null,L=null,V=null,F=null,U.set(0,0,0),j=0,y=H,b=yt}return}Le=Le||be,De=De||re,st=st||pe,(be!==_||Le!==R)&&(s.blendEquationSeparate(_t[be],_t[Le]),_=be,R=Le),(re!==D||pe!==L||De!==V||st!==F)&&(s.blendFuncSeparate(Nt[re],Nt[pe],Nt[De],Nt[st]),D=re,L=pe,V=De,F=st),(Ut.equals(U)===!1||qt!==j)&&(s.blendColor(Ut.r,Ut.g,Ut.b,qt),U.copy(Ut),j=qt),y=H,b=!1}function xn(H,be){H.side===ii?Ce(s.CULL_FACE):xe(s.CULL_FACE);let re=H.side===On;be&&(re=!re),mt(re),H.blending===js&&H.transparent===!1?X(Ar):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const pe=H.stencilWrite;d.setTest(pe),pe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ct(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function dt(H){H!==t0?(xe(s.CULL_FACE),H!==B&&(H===em?s.cullFace(s.BACK):H===n0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),B=H}function Ze(H){H!==ae&&(oe&&s.lineWidth(H),ae=H)}function Ct(H,be,re){H?(xe(s.POLYGON_OFFSET_FILL),(ee!==be||de!==re)&&(s.polygonOffset(be,re),ee=be,de=re)):Ce(s.POLYGON_OFFSET_FILL)}function qe(H){H?xe(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function P(H){H===void 0&&(H=s.TEXTURE0+he-1),le!==H&&(s.activeTexture(H),le=H)}function w(H,be,re){re===void 0&&(le===null?re=s.TEXTURE0+he-1:re=le);let pe=se[re];pe===void 0&&(pe={type:void 0,texture:void 0},se[re]=pe),(pe.type!==H||pe.texture!==be)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(H,be||Ee[H]),pe.type=H,pe.texture=be)}function $(){const H=se[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(H){Ie.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ie.copy(H))}function Be(H){Q.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function ft(H,be){let re=p.get(be);re===void 0&&(re=new WeakMap,p.set(be,re));let pe=re.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(be,H.name),re.set(H,pe))}function rt(H,be){const pe=p.get(be).get(H);h.get(be)!==pe&&(s.uniformBlockBinding(be,pe,H.__bindingPointIndex),h.set(be,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},g={},x=new WeakMap,S=[],E=null,T=!1,y=null,_=null,D=null,L=null,R=null,V=null,F=null,U=new gt(0,0,0),j=0,b=!1,C=null,B=null,ae=null,ee=null,de=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:xe,disable:Ce,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:bt,setBlending:X,setMaterial:xn,setFlipSided:mt,setCullFace:dt,setLineWidth:Ze,setPolygonOffset:Ct,setScissorTest:qe,activeTexture:P,bindTexture:w,unbindTexture:$,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:At}}function Km(s,e,t,r){const a=WE(r);switch(t){case yg:return s*e;case Mg:return s*e;case Eg:return s*e*2;case Tg:return s*e/a.components*a.byteLength;case df:return s*e/a.components*a.byteLength;case wg:return s*e*2/a.components*a.byteLength;case ff:return s*e*2/a.components*a.byteLength;case Sg:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case hf:return s*e*4/a.components*a.byteLength;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Ld:return Math.max(s,16)*Math.max(e,8)/4;case bd:case Dd:return Math.max(s,8)*Math.max(e,8)/2;case Nd:case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case $d:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ag:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case ef:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WE(s){switch(s){case qi:case _g:return{byteLength:1,components:1};case qo:case vg:case $o:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case Jr:case lf:case Xi:return{byteLength:4,components:1};case xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function XE(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return S?new OffscreenCanvas(P,w):Hl("canvas")}function T(P,w,$){let me=1;const _e=qe(P);if((_e.width>$||_e.height>$)&&(me=$/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*_e.width),Ge=Math.floor(me*_e.height);g===void 0&&(g=E(fe,Ge));const Re=w?E(fe,Ge):g;return Re.width=fe,Re.height=Ge,Re.getContext("2d").drawImage(P,0,0,fe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ge+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,w,$,me,_e=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;if(w===s.RED&&($===s.FLOAT&&(fe=s.R32F),$===s.HALF_FLOAT&&(fe=s.R16F),$===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.R8UI),$===s.UNSIGNED_SHORT&&(fe=s.R16UI),$===s.UNSIGNED_INT&&(fe=s.R32UI),$===s.BYTE&&(fe=s.R8I),$===s.SHORT&&(fe=s.R16I),$===s.INT&&(fe=s.R32I)),w===s.RG&&($===s.FLOAT&&(fe=s.RG32F),$===s.HALF_FLOAT&&(fe=s.RG16F),$===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RG8UI),$===s.UNSIGNED_SHORT&&(fe=s.RG16UI),$===s.UNSIGNED_INT&&(fe=s.RG32UI),$===s.BYTE&&(fe=s.RG8I),$===s.SHORT&&(fe=s.RG16I),$===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),$===s.UNSIGNED_INT&&(fe=s.RGB32UI),$===s.BYTE&&(fe=s.RGB8I),$===s.SHORT&&(fe=s.RGB16I),$===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),$===s.UNSIGNED_INT&&(fe=s.RGBA32UI),$===s.BYTE&&(fe=s.RGBA8I),$===s.SHORT&&(fe=s.RGBA16I),$===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),w===s.RGBA){const Ge=_e?Zl:Mt.getTransfer(me);$===s.FLOAT&&(fe=s.RGBA32F),$===s.HALF_FLOAT&&(fe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(fe=Ge===Pt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,w){let $;return P?w===null||w===Jr||w===Qs?$=s.DEPTH24_STENCIL8:w===Xi?$=s.DEPTH32F_STENCIL8:w===qo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jr||w===Qs?$=s.DEPTH_COMPONENT24:w===Xi?$=s.DEPTH_COMPONENT32F:w===qo&&($=s.DEPTH_COMPONENT16),$}function V(P,w){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xn&&P.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function F(P){const w=P.target;w.removeEventListener("dispose",F),j(w),w.isVideoTexture&&v.delete(w)}function U(P){const w=P.target;w.removeEventListener("dispose",U),C(w)}function j(P){const w=r.get(P);if(w.__webglInit===void 0)return;const $=P.source,me=x.get($);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(P),Object.keys(me).length===0&&x.delete($)}r.remove(P)}function b(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const $=P.source,me=x.get($);delete me[w.__cacheKey],u.memory.textures--}function C(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=P.textures;for(let me=0,_e=$.length;me<_e;me++){const fe=r.get($[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove($[me])}r.remove(P)}let B=0;function ae(){B=0}function ee(){const P=B;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),B+=1,P}function de(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function he(P,w){const $=r.get(P);if(P.isVideoTexture&&Ze(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,P,w);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function oe(P,w){const $=r.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function ce(P,w){const $=r.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,w);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function k(P,w){const $=r.get(P);if(P.version>0&&$.__version!==P.version){ue($,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const le={[Cd]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[Rd]:s.MIRRORED_REPEAT},se={[Xn]:s.NEAREST,[D0]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[Fu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},I={[U0]:s.NEVER,[V0]:s.ALWAYS,[F0]:s.LESS,[Rg]:s.LEQUAL,[O0]:s.EQUAL,[z0]:s.GEQUAL,[k0]:s.GREATER,[B0]:s.NOTEQUAL};function ie(P,w){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===Fu||w.magFilter===ol||w.magFilter===Qr||w.minFilter===si||w.minFilter===Fu||w.minFilter===ol||w.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xn||w.minFilter!==ol&&w.minFilter!==Qr||w.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(P,w){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const fe=de(w);if(fe!==P.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),_e[fe].usedTimes++;const Ge=_e[P.__cacheKey];Ge!==void 0&&(_e[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(w)),P.__cacheKey=fe,P.__webglTexture=_e[fe].texture}return $}function Q(P,w,$){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ie(P,w),fe=w.source;t.bindTexture(me,P.__webglTexture,s.TEXTURE0+$);const Ge=r.get(fe);if(fe.version!==Ge.__version||_e===!0){t.activeTexture(s.TEXTURE0+$);const Re=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===Tr?null:Mt.getPrimaries(w.colorSpace),ut=w.colorSpace===Tr||Re===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=T(w.image,!1,a.maxTextureSize);Se=Ct(w,Se);const ke=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let et=L(w.internalFormat,ke,Je,w.colorSpace,w.isVideoTexture);ie(me,w);let Be;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,At=Ge.__version===void 0||_e===!0,H=fe.dataReady,be=V(w,Se);if(w.isDepthTexture)et=R(w.format===Js,w.type),At&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,null));else if(w.isDataTexture)if(ft.length>0){rt&&At&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,pe=ft.length;re<pe;re++)Be=ft[re],rt?H&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(s.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data);w.generateMipmaps=!1}else rt?(At&&t.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height),H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Je,Se.data)):t.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,Se.depth);for(let re=0,pe=ft.length;re<pe;re++)if(Be=ft[re],w.format!==oi)if(ke!==null)if(rt){if(H)if(w.layerUpdates.size>0){const Le=Km(Be.width,Be.height,w.format,w.type);for(const De of w.layerUpdates){const st=Be.data.subarray(De*Le/Be.data.BYTES_PER_ELEMENT,(De+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,De,Be.width,Be.height,1,ke,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Je,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,ke,Je,Be.data)}else{rt&&At&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,pe=ft.length;re<pe;re++)Be=ft[re],w.format!==oi?ke!==null?rt?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,re,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?H&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(s.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data)}else if(w.isDataArrayTexture)if(rt){if(At&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,Se.width,Se.height,Se.depth),H)if(w.layerUpdates.size>0){const re=Km(Se.width,Se.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Se.data.subarray(pe*re/Se.data.BYTES_PER_ELEMENT,(pe+1)*re/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,ke,Je,Le)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isData3DTexture)rt?(At&&t.texStorage3D(s.TEXTURE_3D,be,et,Se.width,Se.height,Se.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)):t.texImage3D(s.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isFramebufferTexture){if(At)if(rt)t.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height);else{let re=Se.width,pe=Se.height;for(let Le=0;Le<be;Le++)t.texImage2D(s.TEXTURE_2D,Le,et,re,pe,0,ke,Je,null),re>>=1,pe>>=1}}else if(ft.length>0){if(rt&&At){const re=qe(ft[0]);t.texStorage2D(s.TEXTURE_2D,be,et,re.width,re.height)}for(let re=0,pe=ft.length;re<pe;re++)Be=ft[re],rt?H&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,ke,Je,Be):t.texImage2D(s.TEXTURE_2D,re,et,ke,Je,Be);w.generateMipmaps=!1}else if(rt){if(At){const re=qe(Se);t.texStorage2D(s.TEXTURE_2D,be,et,re.width,re.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Je,Se)}else t.texImage2D(s.TEXTURE_2D,0,et,ke,Je,Se);y(w)&&_(me),Ge.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,$){if(w.image.length!==6)return;const me=Ie(P,w),_e=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const fe=r.get(_e);if(_e.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+$);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Re=w.colorSpace===Tr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Tr||Ge===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ut&&!Se?ke[pe]=T(w.image[pe],!0,a.maxCubemapSize):ke[pe]=Se?w.image[pe].image:w.image[pe],ke[pe]=Ct(w,ke[pe]);const Je=ke[0],et=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ft=L(w.internalFormat,et,Be,w.colorSpace),rt=w.isVideoTexture!==!0,At=fe.__version===void 0||me===!0,H=_e.dataReady;let be=V(w,Je);ie(s.TEXTURE_CUBE_MAP,w);let re;if(ut){rt&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,Je.width,Je.height);for(let pe=0;pe<6;pe++){re=ke[pe].mipmaps;for(let Le=0;Le<re.length;Le++){const De=re[Le];w.format!==oi?et!==null?rt?H&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,et,Be,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,De.width,De.height,0,et,Be,De.data)}}}else{if(re=w.mipmaps,rt&&At){re.length>0&&be++;const pe=qe(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,et,Be,ke[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ke[pe].width,ke[pe].height,0,et,Be,ke[pe].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[pe].image;rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,st.width,st.height,0,et,Be,st.data)}}else{rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Be,ke[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,Be,ke[pe]);for(let Le=0;Le<re.length;Le++){const De=re[Le];rt?H&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,et,Be,De.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,et,Be,De.image[pe])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ee(P,w,$,me,_e,fe){const Ge=l.convert($.format,$.colorSpace),Re=l.convert($.type),Fe=L($.internalFormat,Ge,Re,$.colorSpace),ut=r.get(w),Se=r.get($);if(Se.__renderTarget=w,!ut.__hasExternalTextures){const ke=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Fe,ke,Je,w.depth,0,Ge,Re,null):t.texImage2D(_e,fe,Fe,ke,Je,0,Ge,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Se.__webglTexture,0,mt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=R(w.stencilBuffer,_e),Ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=mt(w);dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,fe,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,P)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Ge=l.convert(fe.format,fe.colorSpace),Re=l.convert(fe.type),Fe=L(fe.internalFormat,Ge,Re,fe.colorSpace),ut=mt(w);$&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Fe,w.width,w.height):dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const _e=me.__webglTexture,fe=mt(w);if(w.depthTexture.format===Ys)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Js)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const w=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,P)}else if($){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[me],P,!1);else{const _e=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(P,w,$){const me=r.get(P);w!==void 0&&Ee(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ue(P)}function bt(P){const w=P.texture,$=r.get(P),me=r.get(w);P.addEventListener("dispose",U);const _e=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),fe){$.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)$.__webglFramebuffer[Re][Fe]=s.createFramebuffer()}else $.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)$.__webglFramebuffer[Re]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Re=0,Fe=_e.length;Re<Fe;Re++){const ut=r.get(_e[Re]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&dt(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Fe=_e[Re];$.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Re]);const ut=l.convert(Fe.format,Fe.colorSpace),Se=l.convert(Fe.type),ke=L(Fe.internalFormat,ut,Se,Fe.colorSpace,P.isXRRenderTarget===!0),Je=mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,ke,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,$.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),xe($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee($.__webglFramebuffer[Re][Fe],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else Ee($.__webglFramebuffer[Re],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Re=0,Fe=_e.length;Re<Fe;Re++){const ut=_e[Re],Se=r.get(ut);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ie(s.TEXTURE_2D,ut),Ee($.__webglFramebuffer,P,ut,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),y(ut)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),ie(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee($.__webglFramebuffer[Fe],P,w,s.COLOR_ATTACHMENT0,Re,Fe);else Ee($.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Re,0);y(w)&&_(Re),t.unbindTexture()}P.depthBuffer&&Ue(P)}function _t(P){const w=P.textures;for(let $=0,me=w.length;$<me;$++){const _e=w[$];if(y(_e)){const fe=D(P),Ge=r.get(_e).__webglTexture;t.bindTexture(fe,Ge),_(fe),t.unbindTexture()}}}const Nt=[],X=[];function xn(P){if(P.samples>0){if(dt(P)===!1){const w=P.textures,$=P.width,me=P.height;let _e=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(P),Re=w.length>1;if(Re)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,$,me,0,0,$,me,_e,s.NEAREST),h===!0&&(Nt.length=0,X.length=0,Nt.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Nt.push(fe),X.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function mt(P){return Math.min(a.maxSamples,P.samples)}function dt(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(P){const w=u.render.frame;v.get(P)!==w&&(v.set(P,w),P.update())}function Ct(P,w){const $=P.colorSpace,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==to&&$!==Tr&&(Mt.getTransfer($)===Pt?(me!==oi||_e!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function jE(s,e){function t(r,a=Tr){let l;const u=Mt.getTransfer(a);if(r===qi)return s.UNSIGNED_BYTE;if(r===cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===uf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return s.BYTE;if(r===vg)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===lf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===yg)return s.ALPHA;if(r===Sg)return s.RGB;if(r===oi)return s.RGBA;if(r===Mg)return s.LUMINANCE;if(r===Eg)return s.LUMINANCE_ALPHA;if(r===Ys)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===Tg)return s.RED;if(r===df)return s.RED_INTEGER;if(r===wg)return s.RG;if(r===ff)return s.RG_INTEGER;if(r===hf)return s.RGBA_INTEGER;if(r===Ul||r===Fl||r===Ol||r===kl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===Pd||r===Dd||r===Ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nd||r===Id||r===Ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Nd||r===Id)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ud)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===Zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Fd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===$d||r===Kd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bl)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ag||r===Qd||r===Jd||r===ef)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ef)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class YE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cl extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),_=this._getHandJoint(p,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Cl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ZE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Zi({vertexShader:ZE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xi(new Kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends ns{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,v=null,g=null,x=null,S=null,E=null;const T=new KE,y=t.getContextAttributes();let _=null,D=null;const L=[],R=[],V=new lt;let F=null;const U=new ni;U.viewport=new kt;const j=new ni;j.viewport=new kt;const b=[U,j],C=new YE;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=L[Q];return ue===void 0&&(ue=new ud,L[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=L[Q];return ue===void 0&&(ue=new ud,L[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=L[Q];return ue===void 0&&(ue=new ud,L[Q]=ue),ue.getHandSpace()};function ee(Q){const ue=R.indexOf(Q.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,p||u),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",he);for(let Q=0;Q<L.length;Q++){const ue=R[Q];ue!==null&&(R[Q]=null,L[Q].disconnect(ue))}B=null,ae=null,T.reset(),e.setRenderTarget(_),S=null,x=null,g=null,a=null,D=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new es(S.framebufferWidth,S.framebufferHeight,{format:oi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?Js:Ys,Ee=y.stencil?Qs:Jr);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(Ce),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new es(x.textureWidth,x.textureHeight,{format:oi,type:qi,depthTexture:new Hg(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Q){for(let ue=0;ue<Q.removed.length;ue++){const Ee=Q.removed[ue],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,L[xe].disconnect(Ee))}for(let ue=0;ue<Q.added.length;ue++){const Ee=Q.added[ue];let xe=R.indexOf(Ee);if(xe===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=R.length){R.push(Ee),xe=Ue;break}else if(R[Ue]===null){R[Ue]=Ee,xe=Ue;break}if(xe===-1)break}const Ce=L[xe];Ce&&Ce.connect(Ee)}}const oe=new q,ce=new q;function k(Q,ue,Ee){oe.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const xe=oe.distanceTo(ce),Ce=ue.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),bt=Ce[14]/(Ce[10]+1),_t=(Ce[9]+1)/Ce[5],Nt=(Ce[9]-1)/Ce[5],X=(Ce[8]-1)/Ce[0],xn=(Ue[8]+1)/Ue[0],mt=Qe*X,dt=Qe*xn,Ze=xe/(-X+xn),Ct=Ze*-X;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ct),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ce[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const qe=Qe+Ze,P=bt+Ze,w=mt-Ct,$=dt+(xe-Ct),me=_t*bt/P*qe,_e=Nt*bt/P*qe;Q.projectionMatrix.makePerspective(w,$,me,_e,qe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ue=Q.near,Ee=Q.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=j.near=U.near=ue,C.far=j.far=U.far=Ee,(B!==C.near||ae!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ae=C.far),U.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,C.layers.mask=U.layers.mask|j.layers.mask;const xe=Q.parent,Ce=C.cameras;le(C,xe);for(let Ue=0;Ue<Ce.length;Ue++)le(Ce[Ue],xe);Ce.length===2?k(C,U,j):C.projectionMatrix.copy(U.projectionMatrix),se(Q,C,xe)};function se(Q,ue,Ee){Ee===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let I=null;function ie(Q,ue){if(v=ue.getViewerPose(p||u),E=ue,v!==null){const Ee=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Qe=Ee[Ue];let bt=null;if(S!==null)bt=S.getViewport(Qe);else{const Nt=g.getViewSubImage(x,Qe);bt=Nt.viewport,Ue===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,x.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(D))}let _t=b[Ue];_t===void 0&&(_t=new ni,_t.layers.enable(Ue),_t.viewport=new kt,b[Ue]=_t),_t.matrix.fromArray(Qe.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Qe.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(bt.x,bt.y,bt.width,bt.height),Ue===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(_t)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ue=g.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=R[Ee],Ce=L[Ee];xe!==null&&Ce!==void 0&&Ce.update(xe,ue,p||u)}I&&I(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ie=new zg;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const qr=new Ci,JE=new Gt;function eT(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Og(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,D,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),E(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),T(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?h(y,_,D,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===On&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===On&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),L=D.envMap,R=D.envMapRotation;L&&(y.envMap.value=L,qr.copy(R),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(qr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function tT(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const R=L.program;r.uniformBlockBinding(D,R)}function p(D,L){let R=a[D.id];R===void 0&&(E(D),R=v(D),a[D.id]=R,D.addEventListener("dispose",y));const V=L.program;r.updateUBOMapping(D,V);const F=e.render.frame;l[D.id]!==F&&(x(D),l[D.id]=F)}function v(D){const L=g();D.__bindingPointIndex=L;const R=s.createBuffer(),V=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,V,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function g(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],R=D.uniforms,V=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,U=R.length;F<U;F++){const j=Array.isArray(R[F])?R[F]:[R[F]];for(let b=0,C=j.length;b<C;b++){const B=j[b];if(S(B,F,b,V)===!0){const ae=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let he=0;he<ee.length;he++){const oe=ee[he],ce=T(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+de,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,L,R,V){const F=D.value,U=L+"_"+R;if(V[U]===void 0)return typeof F=="number"||typeof F=="boolean"?V[U]=F:V[U]=F.clone(),!0;{const j=V[U];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return V[U]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function E(D){const L=D.uniforms;let R=0;const V=16;for(let U=0,j=L.length;U<j;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let C=0,B=b.length;C<B;C++){const ae=b[C],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,he=ee.length;de<he;de++){const oe=ee[de],ce=T(oe),k=R%V,le=k%ce.boundary,se=k+le;R+=le,se!==0&&V-se<ce.storage&&(R+=V-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=ce.storage}}}const F=R%V;return F>0&&(R+=V-F),D.__size=R,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:p,dispose:_}}class nT{constructor(e={}){const{canvas:t=W0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Cr,this.toneMappingExposure=1;const R=this;let V=!1,F=0,U=0,j=null,b=-1,C=null;const B=new kt,ae=new kt;let ee=null;const de=new gt(0);let he=0,oe=t.width,ce=t.height,k=1,le=null,se=null;const I=new kt(0,0,oe,ce),ie=new kt(0,0,oe,ce);let Ie=!1;const Q=new mf;let ue=!1,Ee=!1;const xe=new Gt,Ce=new Gt,Ue=new q,Qe=new kt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Nt(){return j===null?k:1}let X=r;function xn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),X===null){const G="webgl2";if(X=xn(G,A),X===null)throw xn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,dt,Ze,Ct,qe,P,w,$,me,_e,fe,Ge,Re,Fe,ut,Se,ke,Je,et,Be,ft,rt,At,H;function be(){mt=new aM(X),mt.init(),rt=new jE(X,mt),dt=new tM(X,mt,e,rt),Ze=new GE(X,mt),dt.reverseDepthBuffer&&x&&Ze.buffers.depth.setReversed(!0),Ct=new uM(X),qe=new RE,P=new XE(X,mt,Ze,qe,dt,rt,Ct),w=new iM(R),$=new oM(R),me=new _x(X),At=new JS(X,me),_e=new lM(X,me,Ct,At),fe=new fM(X,_e,me,Ct),et=new dM(X,dt,P),Se=new nM(qe),Ge=new CE(R,w,$,mt,dt,At,Se),Re=new eT(R,qe),Fe=new PE,ut=new FE(mt),Je=new QS(R,w,$,Ze,fe,S,h),ke=new VE(R,fe,dt),H=new tT(X,Ct,dt,Ze),Be=new eM(X,mt,Ct),ft=new cM(X,mt,Ct),Ct.programs=Ge.programs,R.capabilities=dt,R.extensions=mt,R.properties=qe,R.renderLists=Fe,R.shadowMap=ke,R.state=Ze,R.info=Ct}be();const re=new QE(R,X);this.xr=re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,G,te=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=G,t.width=Math.floor(A*k),t.height=Math.floor(G*k),te===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(oe*k,ce*k).floor()},this.setDrawingBufferSize=function(A,G,te){oe=A,ce=G,k=te,t.width=Math.floor(A*te),t.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,G,te,ne){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,G,te,ne),Ze.viewport(B.copy(I).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,G,te,ne){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,te,ne),Ze.scissor(ae.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){Ze.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,G=!0,te=!0){let ne=0;if(A){let W=!1;if(j!==null){const we=j.texture.format;W=we===hf||we===ff||we===df}if(W){const we=j.texture.type,Me=we===qi||we===Jr||we===qo||we===Qs||we===cf||we===uf,We=Je.getClearColor(),Ve=Je.getClearAlpha(),tt=We.r,it=We.g,Xe=We.b;Me?(E[0]=tt,E[1]=it,E[2]=Xe,E[3]=Ve,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=tt,T[1]=it,T[2]=Xe,T[3]=Ve,X.clearBufferiv(X.COLOR,0,T))}else ne|=X.COLOR_BUFFER_BIT}G&&(ne|=X.DEPTH_BUFFER_BIT),te&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ut.dispose(),qe.dispose(),w.dispose(),$.dispose(),fe.dispose(),At.dispose(),H.dispose(),Ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",is),re.removeEventListener("sessionend",$i),Ri.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Ct.autoReset,G=ke.enabled,te=ke.autoUpdate,ne=ke.needsUpdate,W=ke.type;be(),Ct.autoReset=A,ke.enabled=G,ke.autoUpdate=te,ke.needsUpdate=ne,ke.type=W}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const G=A.target;G.removeEventListener("dispose",st),Ut(G)}function Ut(A){qt(A),qe.remove(A)}function qt(A){const G=qe.get(A).programs;G!==void 0&&(G.forEach(function(te){Ge.releaseProgram(te)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,ne,W,we){G===null&&(G=bt);const Me=W.isMesh&&W.matrixWorld.determinant()<0,We=ta(A,G,te,ne,W);Ze.setMaterial(ne,Me);let Ve=te.index,tt=1;if(ne.wireframe===!0){if(Ve=_e.getWireframeAttribute(te),Ve===void 0)return;tt=2}const it=te.drawRange,Xe=te.attributes.position;let xt=it.start*tt,wt=(it.start+it.count)*tt;we!==null&&(xt=Math.max(xt,we.start*tt),wt=Math.min(wt,(we.start+we.count)*tt)),Ve!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Ve.count)):Xe!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,Xe.count));const vt=wt-xt;if(vt<0||vt===1/0)return;At.setup(W,ne,We,te,Ve);let cn,ot=Be;if(Ve!==null&&(cn=me.get(Ve),ot=ft,ot.setIndex(cn)),W.isMesh)ne.wireframe===!0?(Ze.setLineWidth(ne.wireframeLinewidth*Nt()),ot.setMode(X.LINES)):ot.setMode(X.TRIANGLES);else if(W.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),Ze.setLineWidth(Ye*Nt()),W.isLineSegments?ot.setMode(X.LINES):W.isLineLoop?ot.setMode(X.LINE_LOOP):ot.setMode(X.LINE_STRIP)}else W.isPoints?ot.setMode(X.POINTS):W.isSprite&&ot.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,li=W._multiDrawCounts,Et=W._multiDrawCount,un=Ve?me.get(Ve).bytesPerElement:1,ci=qe.get(ne).currentProgram.getUniforms();for(let Zt=0;Zt<Et;Zt++)ci.setValue(X,"_gl_DrawID",Zt),ot.render(Ye[Zt]/un,li[Zt])}else if(W.isInstancedMesh)ot.renderInstances(xt,vt,W.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,li=Math.min(te.instanceCount,Ye);ot.renderInstances(xt,vt,li)}else ot.render(xt,vt)};function yt(A,G,te){A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,rs(A,G,te),A.side=Rr,A.needsUpdate=!0,rs(A,G,te),A.side=ii):rs(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),_=ut.get(te),_.init(G),L.push(_),te.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==te&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const ne=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const we=W.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const We=we[Me];yt(We,te,W),ne.add(We)}else yt(we,te,W),ne.add(we)}),L.pop(),_=null,ne},this.compileAsync=function(A,G,te=null){const ne=this.compile(A,G,te);return new Promise(W=>{function we(){if(ne.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&ne.delete(Me)}),ne.size===0){W(A);return}setTimeout(we,10)}mt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Cn=null;function yn(A){Cn&&Cn(A)}function is(){Ri.stop()}function $i(){Ri.start()}const Ri=new zg;Ri.setAnimationLoop(yn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(A){Cn=A,re.setAnimationLoop(A),A===null?Ri.stop():Ri.start()},re.addEventListener("sessionstart",is),re.addEventListener("sessionend",$i),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,j),_=ut.get(A,L.length),_.init(G),L.push(_),Ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Ee),y=Fe.get(A,D.length),y.init(),D.push(y),re.enabled===!0&&re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&bi(we,G,-1/0,R.sortObjects)}bi(A,G,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,se),_t=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,_t&&Je.addToRenderList(y,A),this.info.render.frame++,ue===!0&&Se.beginShadows();const te=_.state.shadowsArray;ke.render(te,A,G),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,W=y.transmissive;if(_.setupLights(),G.isArrayCamera){const we=G.cameras;if(W.length>0)for(let Me=0,We=we.length;Me<We;Me++){const Ve=we[Me];Pr(ne,W,A,Ve)}_t&&Je.render(A);for(let Me=0,We=we.length;Me<We;Me++){const Ve=we[Me];br(y,A,Ve,Ve.viewport)}}else W.length>0&&Pr(ne,W,A,G),_t&&Je.render(A),br(y,A,G);j!==null&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(R,A,G),At.resetDefaultState(),b=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],ue===!0&&Se.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function bi(A,G,te,ne){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ne&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Me=fe.update(A),We=A.material;We.visible&&y.push(A,Me,We,te,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Me=fe.update(A),We=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(We)){const Ve=Me.groups;for(let tt=0,it=Ve.length;tt<it;tt++){const Xe=Ve[tt],xt=We[Xe.materialIndex];xt&&xt.visible&&y.push(A,Me,xt,te,Qe.z,Xe)}}else We.visible&&y.push(A,Me,We,te,Qe.z,null)}}const we=A.children;for(let Me=0,We=we.length;Me<We;Me++)bi(we[Me],G,te,ne)}function br(A,G,te,ne){const W=A.opaque,we=A.transmissive,Me=A.transparent;_.setupLightsView(te),ue===!0&&Se.setGlobalState(R.clippingPlanes,te),ne&&Ze.viewport(B.copy(ne)),W.length>0&&Ki(W,G,te),we.length>0&&Ki(we,G,te),Me.length>0&&Ki(Me,G,te),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Pr(A,G,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ne.id]===void 0&&(_.state.transmissionRenderTarget[ne.id]=new es(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?$o:qi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const we=_.state.transmissionRenderTarget[ne.id],Me=ne.viewport||B;we.setSize(Me.z,Me.w);const We=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(de),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),_t&&Je.render(te);const Ve=R.toneMapping;R.toneMapping=Cr;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),_.setupLightsView(ne),ue===!0&&Se.setGlobalState(R.clippingPlanes,ne),Ki(A,te,ne),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),mt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Xe=0,xt=G.length;Xe<xt;Xe++){const wt=G[Xe],vt=wt.object,cn=wt.geometry,ot=wt.material,Ye=wt.group;if(ot.side===ii&&vt.layers.test(ne.layers)){const li=ot.side;ot.side=On,ot.needsUpdate=!0,Jo(vt,te,ne,cn,ot,Ye),ot.side=li,ot.needsUpdate=!0,it=!0}}it===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}R.setRenderTarget(We),R.setClearColor(de,he),tt!==void 0&&(ne.viewport=tt),R.toneMapping=Ve}function Ki(A,G,te){const ne=G.isScene===!0?G.overrideMaterial:null;for(let W=0,we=A.length;W<we;W++){const Me=A[W],We=Me.object,Ve=Me.geometry,tt=ne===null?Me.material:ne,it=Me.group;We.layers.test(te.layers)&&Jo(We,G,te,Ve,tt,it)}}function Jo(A,G,te,ne,W,we){A.onBeforeRender(R,G,te,ne,W,we),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,G,te,ne,A,we),W.transparent===!0&&W.side===ii&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,R.renderBufferDirect(te,G,ne,W,A,we),W.side=Rr,W.needsUpdate=!0,R.renderBufferDirect(te,G,ne,W,A,we),W.side=ii):R.renderBufferDirect(te,G,ne,W,A,we),A.onAfterRender(R,G,te,ne,W,we)}function rs(A,G,te){G.isScene!==!0&&(G=bt);const ne=qe.get(A),W=_.state.lights,we=_.state.shadowsArray,Me=W.state.version,We=Ge.getParameters(A,W.state,we,G,te),Ve=Ge.getProgramCacheKey(We);let tt=ne.programs;ne.environment=A.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,ne.programs=tt);let it=tt.get(Ve);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Me)return yi(A,We),it}else We.uniforms=Ge.getUniforms(A),A.onBeforeCompile(We,R),it=Ge.acquireProgram(We,Ve),tt.set(Ve,it),ne.uniforms=We.uniforms;const Xe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),yi(A,We),ne.needsLights=Jl(A),ne.lightsStateVersion=Me,ne.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function ea(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function yi(A,G){const te=qe.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function ta(A,G,te,ne,W){G.isScene!==!0&&(G=bt),P.resetTextureUnits();const we=G.fog,Me=ne.isMeshStandardMaterial?G.environment:null,We=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:to,Ve=(ne.isMeshStandardMaterial?$:w).get(ne.envMap||Me),tt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Xe=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color;let vt=Cr;ne.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(vt=R.toneMapping);const cn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ot=cn!==void 0?cn.length:0,Ye=qe.get(ne),li=_.state.lights;if(ue===!0&&(Ee===!0||A!==C)){const Sn=A===C&&ne.id===b;Se.setState(ne,A,Sn)}let Et=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==li.state.version||Ye.outputColorSpace!==We||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==Ve||ne.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==Xe||Ye.morphNormals!==xt||Ye.morphColors!==wt||Ye.toneMapping!==vt||Ye.morphTargetsCount!==ot)&&(Et=!0):(Et=!0,Ye.__version=ne.version);let un=Ye.currentProgram;Et===!0&&(un=rs(ne,G,W));let ci=!1,Zt=!1,Si=!1;const Lt=un.getUniforms(),jn=Ye.uniforms;if(Ze.useProgram(un.program)&&(ci=!0,Zt=!0,Si=!0),ne.id!==b&&(b=ne.id,Zt=!0),ci||C!==A){Ze.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),j0(xe),Y0(xe),Lt.setValue(X,"projectionMatrix",xe)):Lt.setValue(X,"projectionMatrix",A.projectionMatrix),Lt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Yn=Lt.map.cameraPosition;Yn!==void 0&&Yn.setValue(X,Ue.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Lt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Zt=!0,Si=!0)}if(W.isSkinnedMesh){Lt.setOptional(X,W,"bindMatrix"),Lt.setOptional(X,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Lt.setValue(X,"boneTexture",Sn.boneTexture,P))}W.isBatchedMesh&&(Lt.setOptional(X,W,"batchingTexture"),Lt.setValue(X,"batchingTexture",W._matricesTexture,P),Lt.setOptional(X,W,"batchingIdTexture"),Lt.setValue(X,"batchingIdTexture",W._indirectTexture,P),Lt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(X,"batchingColorTexture",W._colorsTexture,P));const Pi=te.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&et.update(W,te,un),(Zt||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Lt.setValue(X,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(jn.envMap.value=Ve,jn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(jn.envMapIntensity.value=G.environmentIntensity),Zt&&(Lt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&na(jn,Si),we&&ne.fog===!0&&Re.refreshFogUniforms(jn,we),Re.refreshMaterialUniforms(jn,ne,k,ce,_.state.transmissionRenderTarget[A.id]),zl.upload(X,ea(Ye),jn,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(zl.upload(X,ea(Ye),jn,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Lt.setValue(X,"center",W.center),Lt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(X,"normalMatrix",W.normalMatrix),Lt.setValue(X,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Sn=ne.uniformsGroups;for(let Yn=0,Rn=Sn.length;Yn<Rn;Yn++){const ia=Sn[Yn];H.update(ia,un),H.bind(ia,un)}}return un}function na(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,G,te){qe.get(A.texture).__webglTexture=G,qe.get(A.depthTexture).__webglTexture=te;const ne=qe.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const te=qe.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,te=0){j=A,F=G,U=te;let ne=!0,W=null,we=!1,Me=!1;if(A){const Ve=qe.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(X.FRAMEBUFFER,null),ne=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ve.__hasExternalTextures)P.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[G])?W=it[G][te]:W=it[G],we=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?W=it[te]:W=it,B.copy(A.viewport),ae.copy(A.scissor),ee=A.scissorTest}else B.copy(I).multiplyScalar(k).floor(),ae.copy(ie).multiplyScalar(k).floor(),ee=Ie;if(Ze.bindFramebuffer(X.FRAMEBUFFER,W)&&ne&&Ze.drawBuffers(A,W),Ze.viewport(B),Ze.scissor(ae),Ze.setScissorTest(ee),we){const Ve=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,te)}else if(Me){const Ve=qe.get(A.texture),tt=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.__webglTexture,te||0,tt)}b=-1},this.readRenderTargetPixels=function(A,G,te,ne,W,we,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(We=We[Me]),We){Ze.bindFramebuffer(X.FRAMEBUFFER,We);try{const Ve=A.texture,tt=Ve.format,it=Ve.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W&&X.readPixels(G,te,ne,W,rt.convert(tt),rt.convert(it),we)}finally{const Ve=j!==null?qe.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,ne,W,we,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(We=We[Me]),We){const Ve=A.texture,tt=Ve.format,it=Ve.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ne&&te>=0&&te<=A.height-W){Ze.bindFramebuffer(X.FRAMEBUFFER,We);const Xe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(G,te,ne,W,rt.convert(tt),rt.convert(it),0);const xt=j!==null?qe.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(X.FRAMEBUFFER,xt);const wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await X0(X,wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.deleteBuffer(Xe),X.deleteSync(wt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,te=0){A.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),W=Math.floor(A.image.width*ne),we=Math.floor(A.image.height*ne),Me=G!==null?G.x:0,We=G!==null?G.y:0;P.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Me,We,W,we),Ze.unbindTexture()},this.copyTextureToTexture=function(A,G,te=null,ne=null,W=0){A.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,te=null);let we,Me,We,Ve,tt,it,Xe,xt,wt;const vt=A.isCompressedTexture?A.mipmaps[W]:A.image;te!==null?(we=te.max.x-te.min.x,Me=te.max.y-te.min.y,We=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,tt=te.min.y,it=te.isBox3?te.min.z:0):(we=vt.width,Me=vt.height,We=vt.depth||1,Ve=0,tt=0,it=0),ne!==null?(Xe=ne.x,xt=ne.y,wt=ne.z):(Xe=0,xt=0,wt=0);const cn=rt.convert(G.format),ot=rt.convert(G.type);let Ye;G.isData3DTexture?(P.setTexture3D(G,0),Ye=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Ye=X.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const li=X.getParameter(X.UNPACK_ROW_LENGTH),Et=X.getParameter(X.UNPACK_IMAGE_HEIGHT),un=X.getParameter(X.UNPACK_SKIP_PIXELS),ci=X.getParameter(X.UNPACK_SKIP_ROWS),Zt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),X.pixelStorei(X.UNPACK_SKIP_ROWS,tt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,it);const Si=A.isDataArrayTexture||A.isData3DTexture,Lt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const jn=qe.get(A),Pi=qe.get(G),Sn=qe.get(jn.__renderTarget),Yn=qe.get(Pi.__renderTarget);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Rn=0;Rn<We;Rn++)Si&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,it+Rn),A.isDepthTexture?(Lt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(G).__webglTexture,W,wt+Rn),X.blitFramebuffer(Ve,tt,we,Me,Xe,xt,we,Me,X.DEPTH_BUFFER_BIT,X.NEAREST)):Lt?X.copyTexSubImage3D(Ye,W,Xe,xt,wt+Rn,Ve,tt,we,Me):X.copyTexSubImage2D(Ye,W,Xe,xt,wt+Rn,Ve,tt,we,Me);Ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Lt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ye,W,Xe,xt,wt,we,Me,We,cn,ot,vt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,W,Xe,xt,wt,we,Me,We,cn,vt.data):X.texSubImage3D(Ye,W,Xe,xt,wt,we,Me,We,cn,ot,vt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,Xe,xt,we,Me,cn,ot,vt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,Xe,xt,vt.width,vt.height,cn,vt.data):X.texSubImage2D(X.TEXTURE_2D,W,Xe,xt,we,Me,cn,ot,vt);X.pixelStorei(X.UNPACK_ROW_LENGTH,li),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),X.pixelStorei(X.UNPACK_SKIP_PIXELS,un),X.pixelStorei(X.UNPACK_SKIP_ROWS,ci),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Zt),W===0&&G.generateMipmaps&&X.generateMipmap(Ye),Ze.unbindTexture()},this.copyTextureToTexture3D=function(A,G,te=null,ne=null,W=0){return A.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,te,ne,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ze.unbindTexture()},this.resetState=function(){F=0,U=0,j=null,Ze.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class iT extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rT extends An{constructor(e=null,t=1,r=1,a,l,u,d,h,p=Xn,v=Xn,g,x){super(null,u,d,h,p,v,a,l,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo extends io{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gl=new q,Wl=new q,Qm=new Gt,Go=new pf,Rl=new $l,dd=new q,Jm=new q;class sT extends ln{constructor(e=new ai,t=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Gl.fromBufferAttribute(t,a-1),Wl.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Gl.distanceTo(Wl);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(a),Rl.radius+=l,e.ray.intersectsSphere(Rl)===!1)return;Qm.copy(a).invert(),Go.copy(e.ray).applyMatrix4(Qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=p){const _=v.getX(T),D=v.getX(T+1),L=bl(this,e,Go,h,_,D);L&&t.push(L)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(S),_=bl(this,e,Go,h,T,y);_&&t.push(_)}}else{const S=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=p){const _=bl(this,e,Go,h,T,T+1);_&&t.push(_)}if(this.isLineLoop){const T=bl(this,e,Go,h,E-1,S);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function bl(s,e,t,r,a,l){const u=s.geometry.attributes.position;if(Gl.fromBufferAttribute(u,a),Wl.fromBufferAttribute(u,l),t.distanceSqToSegment(Gl,Wl,dd,Jm)>r)return;dd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(dd);if(!(h<e.near||h>e.far))return{distance:h,point:Jm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const eg=new q,tg=new q;class Xl extends sT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)eg.fromBufferAttribute(t,a),tg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+eg.distanceTo(tg);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Pl=new q,Dl=new q,fd=new q,Ll=new ri;class ng extends ai{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(Yo*t),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,p=[0,0,0],v=["a","b","c"],g=new Array(3),x={},S=[];for(let E=0;E<h;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:y,c:_}=Ll;if(T.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Ll.getNormal(fd),g[0]=`${Math.round(T.x*a)},${Math.round(T.y*a)},${Math.round(T.z*a)}`,g[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,g[2]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let D=0;D<3;D++){const L=(D+1)%3,R=g[D],V=g[L],F=Ll[v[D]],U=Ll[v[L]],j=`${R}_${V}`,b=`${V}_${R}`;b in x&&x[b]?(fd.dot(x[b].normal)<=l&&(S.push(F.x,F.y,F.z),S.push(U.x,U.y,U.z)),x[b]=null):j in x||(x[j]={index0:p[D],index1:p[L],normal:fd.clone()})}}for(const E in x)if(x[E]){const{index0:T,index1:y}=x[E];Pl.fromBufferAttribute(d,T),Dl.fromBufferAttribute(d,y),S.push(Pl.x,Pl.y,Pl.z),S.push(Dl.x,Dl.y,Dl.z)}this.setAttribute("position",new kn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ig extends io{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new gt(16777215),this.specular=new gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yg extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hd=new Gt,rg=new q,sg=new q;class oT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(rg),sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sg),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class aT extends oT{constructor(){super(new Vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class og extends Yg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new aT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lT extends Yg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ag{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cT extends Xl{constructor(e=10,t=10,r=4473924,a=8947848){r=new gt(r),a=new gt(a);const l=t/2,u=e/t,d=e/2,h=[],p=[];for(let x=0,S=0,E=-d;x<=t;x++,E+=u){h.push(-d,0,E,d,0,E),h.push(E,0,-d,E,0,d);const T=x===l?r:a;T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3}const v=new ai;v.setAttribute("position",new kn(h,3)),v.setAttribute("color",new kn(p,3));const g=new Zo({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uT extends Xl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new ai;a.setAttribute("position",new kn(t,3)),a.setAttribute("color",new kn(r,3));const l=new Zo({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,r){const a=new gt,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(r),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dT extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);const lg={type:"change"},_f={type:"start"},qg={type:"end"},Nl=new pf,cg=new Er,fT=Math.cos(70*G0.DEG2RAD),Qt=new q,Fn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pd=1e-6;class hT extends dT{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ts,this._lastTargetPosition=new q,this._quat=new ts().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ag,this._sphericalDelta=new ag,this._scale=1,this._panOffset=new q,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new q,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mT.bind(this),this._onPointerDown=pT.bind(this),this._onPointerUp=gT.bind(this),this._onContextMenu=ET.bind(this),this._onMouseWheel=xT.bind(this),this._onKeyDown=yT.bind(this),this._onTouchStart=ST.bind(this),this._onTouchMove=MT.bind(this),this._onMouseDown=_T.bind(this),this._onMouseMove=vT.bind(this),this._interceptControlDown=TT.bind(this),this._interceptControlUp=wT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lg),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),a<-Math.PI?a+=Fn:a>Math.PI&&(a-=Fn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Qt.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<fT?this.object.lookAt(this.target):(cg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(cg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pd||this._lastTargetPosition.distanceToSquared(this.target)>pd?(this.dispatchEvent(lg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Qt.copy(a).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function pT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function mT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function gT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qg),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _T(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Xs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Xs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(_f)}function vT(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function xT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(qg))}function yT(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ST(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(_f)}function MT(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function ET(s){this.enabled!==!1&&s.preventDefault()}function TT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ug{constructor(e){mn(this,"scene");mn(this,"camera");mn(this,"renderer");mn(this,"controls");mn(this,"container");mn(this,"animationId",null);mn(this,"renderCallbacks",[]);this.container=e,this.scene=new iT,this.scene.background=new gt(856343);const t=e.clientWidth/e.clientHeight;this.camera=new ni(45,t,.01,1e4),this.camera.position.set(5,5,5),this.renderer=new nT({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new hT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.screenSpacePanning=!0;const r=new lT(16777215,.4);this.scene.add(r);const a=new og(16777215,.8);a.position.set(5,10,7),this.scene.add(a);const l=new og(16777215,.3);l.position.set(-5,-3,-5),this.scene.add(l);const u=new cT(20,20,3159613,2172461);u.position.y=-.01,this.scene.add(u);const d=new uT(1);this.scene.add(d),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize)}static isWebGL2Available(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}onRender(e){this.renderCallbacks.push(e)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.controls.update();for(const t of this.renderCallbacks)t();this.renderer.render(this.scene,this.camera)};e()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}zoomToFit(){const e=new no().setFromObject(this.scene);if(e.isEmpty())return;const t=e.getCenter(new q),r=e.getSize(new q),a=Math.max(r.x,r.y,r.z),l=this.camera.fov*(Math.PI/180),u=a/(2*Math.tan(l/2))*1.5;this.camera.position.copy(t).add(new q(u*.7,u*.5,u*.7)),this.camera.lookAt(t),this.controls.target.copy(t),this.controls.update()}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.stop(),window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}function Zg(s){const e=new Float32Array(s.length);for(let t=0;t<s.length;t++)e[t]=s[t];return e}function $g(s){let e=1/0,t=-1/0;for(let r=0;r<s.length;r++){const a=s[r];Number.isFinite(a)&&(a<e&&(e=a),a>t&&(t=a))}return e===1/0?[NaN,NaN]:[e,t]}function Ws(s,e){switch(e){case"float64":return new Float64Array(s);case"float32":return new Float32Array(s);case"int32":return new Int32Array(s);case"uint8":return new Uint8Array(s);default:throw new Error(`Unsupported dtype: ${e}`)}}function AT(s){let e=0;for(let t=0;t<s.length;t++)Number.isNaN(s[t])&&e++;return e}class CT{constructor(){mn(this,"meshGroups",[]);mn(this,"baseGeometry",null)}buildMesh(e,t,r,a,l){this.clear(l);const u=Zg(e);this.baseGeometry=new ai,this.baseGeometry.setAttribute("position",new vn(u,3)),this.baseGeometry.setAttribute("normal",new vn(r,3)),this.baseGeometry.setIndex(new vn(t,1));const d=new Float32Array(u.length);this.baseGeometry.setAttribute("displacement",new vn(d,3));const h=new Float32Array(e.length/3);if(this.baseGeometry.setAttribute("scalarValue",new vn(h,1)),a.size===0){const p=new ig({color:5809919,side:ii,flatShading:!1,vertexColors:!1}),v=new xi(this.baseGeometry,p);v.name="default",l.add(v),this.meshGroups.push({partId:"default",mesh:v})}else for(const[p,[v,g]]of a){const x=v*3,S=(g-v)*3,E=this.baseGeometry.clone();E.setDrawRange(x,S);const T=new ig({color:5809919,side:ii,flatShading:!1,vertexColors:!1}),y=new xi(E,T);y.name=p,l.add(y),this.meshGroups.push({partId:p,mesh:y})}}getMeshGroups(){return this.meshGroups}getBaseGeometry(){return this.baseGeometry}setPartVisible(e,t){const r=this.meshGroups.find(a=>a.partId===e);r&&(r.mesh.visible=t)}isolatePart(e){for(const t of this.meshGroups)t.mesh.visible=t.partId===e}showAll(){for(const e of this.meshGroups)e.mesh.visible=!0}clear(e){for(const t of this.meshGroups)e.remove(t.mesh),t.mesh.geometry.dispose(),Array.isArray(t.mesh.material)?t.mesh.material.forEach(r=>r.dispose()):t.mesh.material.dispose();this.meshGroups=[],this.baseGeometry=null}}class RT{constructor(){mn(this,"wireframeMeshes",[]);mn(this,"overlayMeshes",[])}createWireframe(e,t){this.clear(t);const r=new ng(e,15),a=new Zo({color:9147550,transparent:!0,opacity:.4,depthTest:!0}),l=new Xl(r,a);l.visible=!1,l.name="wireframe",l.renderOrder=1,t.add(l),this.wireframeMeshes.push(l)}setVisible(e){for(const t of this.wireframeMeshes)t.visible=e}isVisible(){return this.wireframeMeshes.length>0&&this.wireframeMeshes[0].visible}createOverlayWireframe(e,t){if(this.overlayMeshes.length>0)return;const r=new ng(e,15),a=new Zo({color:16753920,transparent:!0,opacity:.5,depthTest:!0}),l=new Xl(r,a);l.visible=!0,l.name="deform-overlay",l.renderOrder=2,t.add(l),this.overlayMeshes.push(l)}clearOverlay(e){for(const t of this.overlayMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.overlayMeshes=[]}clear(e){for(const t of this.wireframeMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.wireframeMeshes=[],this.clearOverlay(e)}}function md(s){const e=new Uint8Array(1024),t=Kg(s);for(let a=0;a<256;a++){const l=a*3,u=a*4;e[u]=Math.round(t[l]*255),e[u+1]=Math.round(t[l+1]*255),e[u+2]=Math.round(t[l+2]*255),e[u+3]=255}const r=new rT(e,256,1,oi);return r.minFilter=si,r.magFilter=si,r.wrapS=wr,r.needsUpdate=!0,r}function bT(s,e){const t=Kg(s),r=Math.min(Math.max(Math.round(e*255),0),255)*3;return[Math.round(t[r]*255),Math.round(t[r+1]*255),Math.round(t[r+2]*255)]}function Kg(s){switch(s){case"viridis":return PT();case"coolwarm":return DT();case"jet":return LT();case"rainbow":return NT();case"grayscale":return IT()}}function PT(){const s=new Float32Array(768);return vf([[.267,.004,.329],[.282,.14,.458],[.254,.265,.53],[.207,.372,.553],[.164,.471,.558],[.128,.567,.551],[.134,.658,.517],[.267,.749,.441],[.478,.821,.318],[.741,.873,.15],[.993,.906,.144]],s)}function DT(){const s=new Float32Array(768);return vf([[.23,.299,.754],[.552,.588,.893],[.866,.866,.866],[.897,.57,.462],[.706,.016,.15]],s)}function LT(){const s=new Float32Array(768);return vf([[0,0,.5],[0,0,1],[0,1,1],[1,1,0],[1,0,0],[.5,0,0]],s)}function NT(){const s=new Float32Array(768);for(let e=0;e<256;e++){const r=(1-e/255)*300,[a,l,u]=UT(r/360,1,.5);s[e*3]=a,s[e*3+1]=l,s[e*3+2]=u}return s}function IT(){const s=new Float32Array(768);for(let e=0;e<256;e++){const t=e/255;s[e*3]=t,s[e*3+1]=t,s[e*3+2]=t}return s}function vf(s,e){const t=s.length-1;for(let r=0;r<256;r++){const a=r/255,l=Math.min(Math.floor(a*t),t-1),u=a*t-l,d=s[l],h=s[l+1];e[r*3]=d[0]+(h[0]-d[0])*u,e[r*3+1]=d[1]+(h[1]-d[1])*u,e[r*3+2]=d[2]+(h[2]-d[2])*u}return e}function UT(s,e,t){const r=(1-Math.abs(2*t-1))*e,a=r*(1-Math.abs(s*6%2-1)),l=t-r/2;let u=0,d=0,h=0;switch(Math.floor(s*6)%6){case 0:u=r,d=a;break;case 1:u=a,d=r;break;case 2:d=r,h=a;break;case 3:d=a,h=r;break;case 4:u=a,h=r;break;case 5:u=r,h=a;break}return[u+l,d+l,h+l]}const FT="data:application/octet-stream;base64,Ly8gQ29udG91ciBWZXJ0ZXggU2hhZGVyDQovLyBQZXIgMDJiIMKnNi4yOiBwb3NpdGlvbiA9IGJhc2VfcG9zaXRpb24gKyB1X3NjYWxlICogZGlzcGxhY2VtZW50DQoNCmF0dHJpYnV0ZSB2ZWMzIGRpc3BsYWNlbWVudDsNCmF0dHJpYnV0ZSBmbG9hdCBzY2FsYXJWYWx1ZTsNCg0KdW5pZm9ybSBmbG9hdCB1X2RlZm9ybV9zY2FsZTsNCg0KdmFyeWluZyBmbG9hdCB2X3NjYWxhcjsNCnZhcnlpbmcgdmVjMyB2X25vcm1hbDsNCnZhcnlpbmcgdmVjMyB2X3Bvc2l0aW9uOw0KDQp2b2lkIG1haW4oKSB7DQogIHZlYzMgZGVmb3JtZWQgPSBwb3NpdGlvbiArIHVfZGVmb3JtX3NjYWxlICogZGlzcGxhY2VtZW50Ow0KICB2X3NjYWxhciA9IHNjYWxhclZhbHVlOw0KICB2X25vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWxNYXRyaXggKiBub3JtYWwpOw0KICB2X3Bvc2l0aW9uID0gKG1vZGVsVmlld01hdHJpeCAqIHZlYzQoZGVmb3JtZWQsIDEuMCkpLnh5ejsNCiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChkZWZvcm1lZCwgMS4wKTsNCn0NCg==",OT="data:application/octet-stream;base64,Ly8gQ29udG91ciBGcmFnbWVudCBTaGFkZXINCi8vIFBlciAwMmIgwqc2LjQ6IExVVCBzYW1wbGUsIE5hTiDihpIgZ3JleSwgYWJvdmUvYmVsb3cgcmFuZ2UgY29sb3JzDQoNCnVuaWZvcm0gc2FtcGxlcjJEIHVfbHV0Ow0KdW5pZm9ybSBmbG9hdCB1X21pbjsNCnVuaWZvcm0gZmxvYXQgdV9tYXg7DQp1bmlmb3JtIHZlYzQgdV9uYW5fY29sb3I7DQp1bmlmb3JtIHZlYzQgdV9hYm92ZV9jb2xvcjsNCnVuaWZvcm0gdmVjNCB1X2JlbG93X2NvbG9yOw0KDQp2YXJ5aW5nIGZsb2F0IHZfc2NhbGFyOw0KdmFyeWluZyB2ZWMzIHZfbm9ybWFsOw0KdmFyeWluZyB2ZWMzIHZfcG9zaXRpb247DQoNCnZvaWQgbWFpbigpIHsNCiAgLy8gTmFOIGNoZWNrOiBOYU4gIT0gTmFODQogIGlmICh2X3NjYWxhciAhPSB2X3NjYWxhcikgew0KICAgIGdsX0ZyYWdDb2xvciA9IHVfbmFuX2NvbG9yOw0KICAgIHJldHVybjsNCiAgfQ0KDQogIGZsb2F0IHJhbmdlID0gdV9tYXggLSB1X21pbjsNCiAgZmxvYXQgdDsNCg0KICBpZiAocmFuZ2UgPD0gMC4wKSB7DQogICAgdCA9IDAuNTsNCiAgfSBlbHNlIHsNCiAgICB0ID0gKHZfc2NhbGFyIC0gdV9taW4pIC8gcmFuZ2U7DQogIH0NCg0KICAvLyBCZWxvdy9hYm92ZSByYW5nZSBjbGFtcGluZw0KICBpZiAodCA8IDAuMCkgew0KICAgIGdsX0ZyYWdDb2xvciA9IHVfYmVsb3dfY29sb3I7DQogICAgcmV0dXJuOw0KICB9DQogIGlmICh0ID4gMS4wKSB7DQogICAgZ2xfRnJhZ0NvbG9yID0gdV9hYm92ZV9jb2xvcjsNCiAgICByZXR1cm47DQogIH0NCg0KICAvLyBTYW1wbGUgTFVUIHRleHR1cmUNCiAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1X2x1dCwgdmVjMih0LCAwLjUpKTsNCg0KICAvLyBCYXNpYyBkaXJlY3Rpb25hbCBsaWdodGluZw0KICB2ZWMzIGxpZ2h0RGlyID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpOw0KICBmbG9hdCBkaWZmdXNlID0gbWF4KGRvdChub3JtYWxpemUodl9ub3JtYWwpLCBsaWdodERpciksIDAuMCk7DQogIGZsb2F0IGFtYmllbnQgPSAwLjM7DQogIGZsb2F0IGxpZ2h0aW5nID0gYW1iaWVudCArICgxLjAgLSBhbWJpZW50KSAqIGRpZmZ1c2U7DQoNCiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBsaWdodGluZywgY29sb3IuYSk7DQp9DQo=";class kT{constructor(){mn(this,"lutTexture");mn(this,"material",null);mn(this,"originalMaterials",new Map);this.lutTexture=md("viridis")}createContourMaterial(e){return this.lutTexture=md(e.lut_name),this.material=new Zi({vertexShader:FT,fragmentShader:OT,uniforms:{u_lut:{value:this.lutTexture},u_min:{value:e.min_value},u_max:{value:e.max_value},u_deform_scale:{value:0},u_nan_color:{value:new kt(...e.nan_color)},u_above_color:{value:new kt(...e.above_range_color)},u_below_color:{value:new kt(...e.below_range_color)}},side:ii,transparent:!0}),this.material}applyScalarField(e,t,r,a,l){const[u,d]=$g(t),h=e.getAttribute("scalarValue"),p=h.array;if(r==="nodal")for(let v=0;v<p.length;v++)p[v]=v<t.length?t[v]:NaN;else if(r==="elemental"&&a&&l){const v=l.length/3;p.fill(NaN);for(let g=0;g<v;g++){const x=a[g],S=x<t.length?t[x]:NaN;for(let E=0;E<3;E++){const T=l[g*3+E];p[T]=S}}}return h.needsUpdate=!0,{min:u,max:d}}updateRange(e,t){this.material&&(this.material.uniforms.u_min.value=e,this.material.uniforms.u_max.value=t)}setColorMap(e){this.lutTexture.dispose(),this.lutTexture=md(e),this.material&&(this.material.uniforms.u_lut.value=this.lutTexture)}getMaterial(){return this.material}swapMeshMaterials(e,t){for(const r of e)this.originalMaterials.has(r.partId)||this.originalMaterials.set(r.partId,r.mesh.material),r.mesh.material=t}restoreMeshMaterials(e){for(const t of e){const r=this.originalMaterials.get(t.partId);r&&(t.mesh.material=r)}this.originalMaterials.clear()}setDeformScale(e){this.material&&(this.material.uniforms.u_deform_scale.value=e)}dispose(){var e;this.lutTexture.dispose(),(e=this.material)==null||e.dispose(),this.originalMaterials.clear()}}class BT{constructor(){mn(this,"currentMaterial",null)}setDisplacement(e,t){const r=Zg(t),a=e.getAttribute("displacement");a&&a.array.length===r.length?(a.array.set(r),a.needsUpdate=!0):e.setAttribute("displacement",new vn(r,3))}clearDisplacement(e){const t=e.getAttribute("displacement");t&&(t.array.fill(0),t.needsUpdate=!0)}setScale(e,t){this.currentMaterial=e,e.uniforms.u_deform_scale.value=t}getScale(){var e,t;return((t=(e=this.currentMaterial)==null?void 0:e.uniforms.u_deform_scale)==null?void 0:t.value)??0}}function zT(s){const e=Ae(g=>g.activeFieldId),t=Ae(g=>g.activeTimestep),r=Ae(g=>g.modelId),a=Ae(g=>g.status),l=Ae(g=>g.fields),u=Ae(g=>g.surfaceIndices),d=Ae(g=>g.surfaceElementMap),h=zt(g=>g.colorMapConfig),p=pt.useRef(null),v=pt.useRef(null);pt.useEffect(()=>{var y;const{contourManager:g,meshManager:x}=s;if(!g||!x||a!=="ready"||!r)return;if(!e){Il(x,g),p.current=null;return}const S=l.find(_=>_.id===e);if(!S){Il(x,g);return}if(S.location==="integration_point"){Ae.getState().setFieldValues(null),Ae.getState().setFieldLoadError("Integration-point fields are not supported in MVP. Extrapolation would misrepresent provenance."),Il(x,g);return}(y=v.current)==null||y.abort();const E=new AbortController;return v.current=E,(async()=>{try{Ae.getState().setFieldLoadError(null);const _=await sf(`/models/${r}/fields/${e}/data?step=${t}`);if(E.signal.aborted)return;const D=Ws(_.buffer,_.meta.dtype);Ae.getState().setFieldValues(D);const L=AT(D);Ae.getState().setFieldNanCount(L);const[R,V]=$g(D);Number.isNaN(R)||Number.isNaN(V)?(Ae.getState().setFieldLoadError("All field values are NaN. Cannot compute contour range."),zt.getState().setColorMapRange(0,1)):zt.getState().setColorMapRange(R,V);const F=x.getBaseGeometry();if(!F||!u)return;const U=zt.getState().colorMapConfig;p.current!==e&&g.createContourMaterial(U),g.applyScalarField(F,D,S.location,d??void 0,u??void 0),!Number.isNaN(R)&&!Number.isNaN(V)&&g.updateRange(R,V);const j=g.getMaterial();j&&g.swapMeshMaterials(x.getMeshGroups(),j),p.current=e}catch(_){if(E.signal.aborted)return;Ae.getState().setFieldValues(null),Ae.getState().setFieldNanCount(0);const D=_ instanceof Error?_.message:"Failed to load field data";D.includes("404")||D.includes("No data")?Ae.getState().setFieldLoadError("No data at this step"):Ae.getState().setFieldLoadError(D),Il(x,g)}})(),()=>{E.abort()}},[e,t,r,a,l,u,d,s,h]),pt.useEffect(()=>{const{contourManager:g}=s;!g||!e||g.setColorMap(h.lut_name)},[h.lut_name,s,e])}function Il(s,e){Ae.getState().setFieldValues(null),Ae.getState().setFieldLoadError(null),Ae.getState().setFieldNanCount(0),e.restoreMeshMaterials(s.getMeshGroups())}const dg=34e37;function VT(s){const e=zt(x=>x.deformFieldId),t=zt(x=>x.deformMode),r=zt(x=>x.deformScale),a=Ae(x=>x.activeTimestep),l=Ae(x=>x.modelId),u=Ae(x=>x.status),d=Ae(x=>x.fields),h=Ae(x=>x.nodeCoords_f64),p=pt.useRef(null),v=pt.useRef(null),g=pt.useRef(-1);pt.useEffect(()=>{var D;const{deformManager:x,meshManager:S}=s;if(!x||!S||u!=="ready"||!l)return;const E=S.getBaseGeometry();if(!E)return;if(!e){Vs(x,E),v.current=null,g.current=-1;return}const T=d.find(L=>L.id===e);if(!T){Vs(x,E),Ae.getState().setDeformLoadError("Deformation field not found");return}if(T.location!=="nodal"){Vs(x,E),Ae.getState().setDeformLoadError(`Deformation requires a nodal field. "${T.name}" is ${T.location}.`);return}if(T.n_components!==3){Vs(x,E),Ae.getState().setDeformLoadError(`Deformation requires a vector3 field. "${T.name}" has ${T.n_components} component(s).`);return}if(v.current===e&&g.current===a)return;(D=p.current)==null||D.abort();const y=new AbortController;return p.current=y,(async()=>{try{Ae.getState().setDeformLoadError(null);const L=await sf(`/models/${l}/fields/${e}/data?step=${a}`);if(y.signal.aborted)return;const R=Ws(L.buffer,L.meta.dtype),V=h?h.length/3:0,F=V*3;if(R.length!==F){Vs(x,E),Ae.getState().setDeformLoadError(`Displacement array length mismatch: got ${R.length}, expected ${F} (${V} nodes × 3).`);return}Ae.getState().setDisplacementValues(R),x.setDisplacement(E,R),v.current=e,g.current=a}catch(L){if(y.signal.aborted)return;Ae.getState().setDisplacementValues(null),Vs(x,E);const R=L instanceof Error?L.message:"Failed to load displacement data";R.includes("404")||R.includes("No data")?Ae.getState().setDeformLoadError("No data at this step"):Ae.getState().setDeformLoadError(R)}})(),()=>{y.abort()}},[e,a,l,u,d,h,s]),pt.useEffect(()=>{const{deformManager:x,meshManager:S,contourManager:E,wireframeManager:T,scene:y}=s;if(!x||!S)return;const _=S.getBaseGeometry();if(!_||!e)return;let D;switch(t){case"undeformed":D=0;break;case"deformed":case"overlay":D=r;break}const L=Ae.getState().displacement_f64;if(L&&D>0){let V=0;for(let F=0;F<L.length;F++){const U=Math.abs(L[F]);U>V&&Number.isFinite(U)&&(V=U)}if(V*D>dg){const F=dg/V;Ae.getState().setDeformLoadError(`Scale clamped to ${F.toFixed(1)} to avoid Float32 overflow.`),D=F}}(E==null?void 0:E.getMaterial())&&E.setDeformScale(D),T&&y&&(t==="overlay"&&D>0?T.createOverlayWireframe(_,y):T.clearOverlay(y))},[t,r,e,s])}function Vs(s,e){s.clearDisplacement(e),Ae.getState().setDisplacementValues(null),Ae.getState().setDeformLoadError(null)}const HT=({containerRef:s})=>{var L,R;const e=pt.useRef(null),t=pt.useRef(null),r=pt.useRef(null),a=pt.useRef(null),l=pt.useRef(null),u=pt.useRef(null),[d,h]=pt.useState(!0);zT({contourManager:l.current,meshManager:r.current,scene:((L=t.current)==null?void 0:L.scene)??null}),VT({deformManager:u.current,meshManager:r.current,wireframeManager:a.current,contourManager:l.current,scene:((R=t.current)==null?void 0:R.scene)??null});const p=Ae(V=>V.modelId),v=Ae(V=>V.status),g=Ae(V=>V.setMetadata),x=Ae(V=>V.setWarnings),S=Ae(V=>V.setTree),E=Ae(V=>V.setFields),T=Ae(V=>V.setSets),y=Ae(V=>V.setNodeCoords),_=Ae(V=>V.setSurfaceData),D=zt(V=>V.wireframeVisible);return pt.useEffect(()=>{ug.isWebGL2Available()||h(!1)},[]),pt.useEffect(()=>{const V=performance;if(V.memory){const F=V.memory.usedJSHeapSize/1048576;F>2048?console.error("[Memory] Heap exceeds 2GB — refusing further loads"):F>1536&&console.warn("[Memory] Heap approaching 1.5GB — performance may degrade")}},[v]),pt.useEffect(()=>{const V=e.current;if(!V||!d)return;const F=new ug(V);return t.current=F,r.current=new CT,a.current=new RT,l.current=new kT,u.current=new BT,F.start(),()=>{F.dispose(),t.current=null}},[d]),pt.useEffect(()=>{if(v!=="ready"||!p)return;(async()=>{const F=t.current,U=r.current,j=a.current;if(!(!F||!U||!j))try{const[b,C,B,ae,ee,de]=await Promise.all([Xv(`/models/${p}/surfaces`),sf(`/models/${p}/nodes`),sl(`/models/${p}/metadata`),sl(`/models/${p}/tree`),sl(`/models/${p}/fields`),sl(`/models/${p}/sets`)]),he=Ws(b.indices,"int32"),oe=Ws(b.normals,"float32"),ce=Ws(b.map,"int32"),k=Ws(C.buffer,C.meta.dtype);y(k),_(he,oe,ce),g(B.metadata),x(B.warnings??[]),S(ae),E(ee),T(de),U.buildMesh(k,he,oe,new Map,F.scene);const le=U.getBaseGeometry();le&&j.createWireframe(le,F.scene),F.zoomToFit(),B.metadata.unit_system.declared_system==="unspecified"&&Ae.getState().addWarning({category:"Missing Units",message:"Units not declared. Values shown without unit context.",severity:"warning",dismissible:!1})}catch(b){console.error("[Viewport] Failed to load model:",b),Ae.getState().setStatus("error"),Ae.getState().setErrorMessage(b instanceof Error?b.message:"Failed to load model")}})()},[v,p,g,x,S,E,T,y,_]),pt.useEffect(()=>{var V;(V=a.current)==null||V.setVisible(D)},[D]),d?K.jsx("div",{ref:e,style:{width:"100%",height:"100%"}}):K.jsxs("div",{className:"webgl-fallback",children:[K.jsx("div",{className:"webgl-fallback__title",children:"WebGL2 Not Available"}),K.jsx("div",{className:"webgl-fallback__text",children:"Your browser does not support WebGL2. The 3D viewer requires WebGL2 for rendering. You can still view model metadata and text-based summaries."})]})},GT=()=>{var h,p;const s=Ae(v=>v.fields),e=Ae(v=>v.activeFieldId),t=Ae(v=>v.metadata),r=Ae(v=>v.fieldNanCount),a=zt(v=>v.colorMapConfig),l=pt.useRef(null),u=s.find(v=>v.id===e);if(pt.useEffect(()=>{const v=l.current;if(!v||!u)return;const g=v.getContext("2d");if(!g)return;const x=v.width,S=v.height;for(let E=0;E<S;E++){const T=1-E/S,[y,_,D]=bT(a.lut_name,T);g.fillStyle=`rgb(${y}, ${_}, ${D})`,g.fillRect(0,E,x,1)}},[u,a]),!u)return null;const d=((h=t==null?void 0:t.unit_system)==null?void 0:h.declared_system)==="unspecified"?"":((p=t==null?void 0:t.unit_system)==null?void 0:p.length)??"";return K.jsx("div",{className:"panel-overlay panel-overlay--legend",children:K.jsxs("div",{className:"color-legend",children:[K.jsxs("div",{className:"color-legend__title",children:[u.name,u.n_components>1?` (${u.n_components} comp)`:""]}),K.jsxs("div",{style:{display:"flex",gap:6},children:[K.jsx("canvas",{ref:l,width:24,height:200,className:"color-legend__gradient"}),K.jsxs("div",{className:"color-legend__labels",style:{height:200,padding:"2px 0"},children:[K.jsxs("span",{children:[a.max_value.toPrecision(4),d?` ${d}`:""]}),K.jsx("span",{children:((a.max_value+a.min_value)/2).toPrecision(4)}),K.jsxs("span",{children:[a.min_value.toPrecision(4),d?` ${d}`:""]})]})]}),K.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:4},children:[u.location," • ",a.lut_name,a.lut_name==="jet"&&K.jsx("span",{style:{color:"var(--accent-warning)",marginLeft:4},children:"⚠ not perceptually uniform"})]}),r>0&&K.jsxs("div",{style:{fontSize:10,color:"var(--accent-warning)",marginTop:2},children:[r," NaN value",r!==1?"s":""," (grey)"]})]})})},WT=({pickedEntity:s})=>{var u,d,h;const e=Ae(p=>p.nodeCoords_f64),t=Ae(p=>p.fieldValues_f64),r=Ae(p=>p.fields),a=Ae(p=>p.activeFieldId);if(!s)return null;const l=r.find(p=>p.id===a);return K.jsxs("div",{className:"panel-overlay panel-overlay--info",children:[K.jsxs("div",{style:{fontWeight:600,marginBottom:8,fontSize:12},children:[s.mode==="node"?"⊙ Node":"◻ Element"," #",s.id]}),s.mode==="node"&&e&&K.jsxs(K.Fragment,{children:[K.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Coordinates (Float64)"}),K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:"X"}),K.jsx("span",{className:"info-panel__value",children:((u=e[s.id*3])==null?void 0:u.toPrecision(15))??"N/A"})]}),K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:"Y"}),K.jsx("span",{className:"info-panel__value",children:((d=e[s.id*3+1])==null?void 0:d.toPrecision(15))??"N/A"})]}),K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:"Z"}),K.jsx("span",{className:"info-panel__value",children:((h=e[s.id*3+2])==null?void 0:h.toPrecision(15))??"N/A"})]}),l&&t&&l.location==="nodal"&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:8,marginBottom:4},children:[l.name," (Float64)"]}),Array.from({length:l.n_components},(p,v)=>{const g=t[s.id*l.n_components+v];return K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:l.n_components===1?"Value":`C${v}`}),K.jsx("span",{className:"info-panel__value",children:g!==void 0?g.toPrecision(15):"N/A"})]},v)})]})]}),s.mode==="element"&&l&&t&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4,marginBottom:4},children:[l.name," (Float64)"]}),Array.from({length:l.n_components},(p,v)=>{const g=t[s.id*l.n_components+v];return K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:l.n_components===1?"Value":`C${v}`}),K.jsx("span",{className:"info-panel__value",children:g!==void 0?g.toPrecision(15):"N/A"})]},v)})]})]})},XT=()=>{const s=Ae(t=>t.metadata);if(!s)return K.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No metadata"});const e=[["File",s.source_filename],["Format",`${s.file_format} (${s.format_version})`],["Solver",s.solver_name],["Version",s.solver_version],["Title",s.title],["Coord System",s.coordinate_system],["Length Unit",s.unit_system.length],["Force Unit",s.unit_system.force],["Time Unit",s.unit_system.time],["Temp Unit",s.unit_system.temperature],["System",s.unit_system.declared_system]];return K.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:e.map(([t,r])=>K.jsxs("div",{className:"info-panel__row",children:[K.jsx("span",{className:"info-panel__key",children:t}),K.jsx("span",{className:"info-panel__value",style:{color:r==="unspecified"||r==="Not specified"?"var(--accent-warning)":void 0},children:r})]},t))})},jT=()=>{const s=Ae(d=>d.warnings),[e,t]=pt.useState(new Set),[r,a]=pt.useState(!1),l=s.filter((d,h)=>d.dismissible?!e.has(h):!0);if(l.length===0)return null;const u=d=>{t(h=>new Set(h).add(d))};return K.jsxs("div",{className:"panel-overlay panel-overlay--warning",children:[K.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:8},onClick:()=>a(!r),children:[K.jsxs("span",{style:{fontWeight:600},children:["⚠ ",l.length," warning",l.length!==1?"s":""]}),K.jsx("span",{style:{fontSize:10},children:r?"▲":"▼"})]}),r&&K.jsx("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:4},children:s.map((d,h)=>d.dismissible&&e.has(h)?null:K.jsxs("div",{className:"warning-banner",children:[K.jsxs("span",{style:{flex:1},children:[K.jsxs("strong",{children:["[",d.category,"]"]})," ",d.message]}),d.dismissible&&K.jsx("button",{className:"warning-banner__close",onClick:p=>{p.stopPropagation(),u(h)},children:"✕"})]},h))})]})},YT=()=>{const s=Ae(u=>u.status),e=Ae(u=>u.warnings),t=Ae(u=>u.activeFieldId),r=pt.useRef(null),a=s==="ready",l=s==="idle"||s==="uploading"||s==="parsing"||s==="error";return K.jsxs("div",{className:"app-layout",children:[K.jsx(e0,{}),K.jsxs("div",{className:"sidebar",children:[l&&K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Upload"}),K.jsx(qv,{})]}),a&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Model Tree"}),K.jsx($v,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Field"}),K.jsx(Kv,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Timestep"}),K.jsx(Qv,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Deformation"}),K.jsx(Jv,{})]}),K.jsxs("div",{className:"sidebar__section",children:[K.jsx("div",{className:"sidebar__section-title",children:"Metadata"}),K.jsx(XT,{})]})]})]}),K.jsxs("div",{className:"viewport",ref:r,children:[l?K.jsx("div",{className:"no-data-message",children:"Upload a VTK/VTU file to begin"}):K.jsx(HT,{containerRef:r}),a&&t&&K.jsx(GT,{}),a&&K.jsx(WT,{}),e.length>0&&K.jsx(jT,{})]})]})};Vv.createRoot(document.getElementById("root")).render(K.jsx(Wo.StrictMode,{children:K.jsx(YT,{})}));
