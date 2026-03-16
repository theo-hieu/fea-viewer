var Gv=Object.defineProperty;var Wv=(r,e,t)=>e in r?Gv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Gt=(r,e,t)=>Wv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Mg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nu={exports:{}},Oo={},Iu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Xv(){if(Zp)return gt;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function y(U,k,Ee){this.props=U,this.context=k,this.refs=E,this.updater=Ee||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,k){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,k,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function N(U,k,Ee){this.props=U,this.context=k,this.refs=E,this.updater=Ee||S}var D=N.prototype=new v;D.constructor=N,w(D,y.prototype),D.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function j(U,k,Ee){var $,re={},ge=null,pe=null;if(k!=null)for($ in k.ref!==void 0&&(pe=k.ref),k.key!==void 0&&(ge=""+k.key),k)G.call(k,$)&&!L.hasOwnProperty($)&&(re[$]=k[$]);var Ae=arguments.length-2;if(Ae===1)re.children=Ee;else if(1<Ae){for(var Le=Array(Ae),$e=0;$e<Ae;$e++)Le[$e]=arguments[$e+2];re.children=Le}if(U&&U.defaultProps)for($ in Ae=U.defaultProps,Ae)re[$]===void 0&&(re[$]=Ae[$]);return{$$typeof:r,type:U,key:ge,ref:pe,props:re,_owner:F.current}}function b(U,k){return{$$typeof:r,type:U.type,key:k,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function z(U){var k={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return k[Ee]})}var le=/\/+/g;function ee(U,k){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):k.toString(36)}function de(U,k,Ee,$,re){var ge=typeof U;(ge==="undefined"||ge==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(ge){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case r:case e:pe=!0}}if(pe)return pe=U,re=re(pe),U=$===""?"."+ee(pe,0):$,A(re)?(Ee="",U!=null&&(Ee=U.replace(le,"$&/")+"/"),de(re,k,Ee,"",function($e){return $e})):re!=null&&(R(re)&&(re=b(re,Ee+(!re.key||pe&&pe.key===re.key?"":(""+re.key).replace(le,"$&/")+"/")+U)),k.push(re)),1;if(pe=0,$=$===""?".":$+":",A(U))for(var Ae=0;Ae<U.length;Ae++){ge=U[Ae];var Le=$+ee(ge,Ae);pe+=de(ge,k,Ee,Le,re)}else if(Le=x(U),typeof Le=="function")for(U=Le.call(U),Ae=0;!(ge=U.next()).done;)ge=ge.value,Le=$+ee(ge,Ae++),pe+=de(ge,k,Ee,Le,re);else if(ge==="object")throw k=String(U),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return pe}function fe(U,k,Ee){if(U==null)return U;var $=[],re=0;return de(U,$,"","",function(ge){return k.call(Ee,ge,re++)}),$}function ae(U){if(U._status===-1){var k=U._result;k=k(),k.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=k)}if(U._status===1)return U._result.default;throw U._result}var ue={current:null},B={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:fe,forEach:function(U,k,Ee){fe(U,function(){k.apply(this,arguments)},Ee)},count:function(U){var k=0;return fe(U,function(){k++}),k},toArray:function(U){return fe(U,function(k){return k})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=N,gt.StrictMode=s,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,gt.act=se,gt.cloneElement=function(U,k,Ee){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var $=w({},U.props),re=U.key,ge=U.ref,pe=U._owner;if(k!=null){if(k.ref!==void 0&&(ge=k.ref,pe=F.current),k.key!==void 0&&(re=""+k.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Le in k)G.call(k,Le)&&!L.hasOwnProperty(Le)&&($[Le]=k[Le]===void 0&&Ae!==void 0?Ae[Le]:k[Le])}var Le=arguments.length-2;if(Le===1)$.children=Ee;else if(1<Le){Ae=Array(Le);for(var $e=0;$e<Le;$e++)Ae[$e]=arguments[$e+2];$.children=Ae}return{$$typeof:r,type:U.type,key:re,ref:ge,props:$,_owner:pe}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},gt.createElement=j,gt.createFactory=function(U){var k=j.bind(null,U);return k.type=U,k},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:d,render:U}},gt.isValidElement=R,gt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ae}},gt.memo=function(U,k){return{$$typeof:p,type:U,compare:k===void 0?null:k}},gt.startTransition=function(U){var k=B.transition;B.transition={};try{U()}finally{B.transition=k}},gt.unstable_act=se,gt.useCallback=function(U,k){return ue.current.useCallback(U,k)},gt.useContext=function(U){return ue.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return ue.current.useDeferredValue(U)},gt.useEffect=function(U,k){return ue.current.useEffect(U,k)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(U,k,Ee){return ue.current.useImperativeHandle(U,k,Ee)},gt.useInsertionEffect=function(U,k){return ue.current.useInsertionEffect(U,k)},gt.useLayoutEffect=function(U,k){return ue.current.useLayoutEffect(U,k)},gt.useMemo=function(U,k){return ue.current.useMemo(U,k)},gt.useReducer=function(U,k,Ee){return ue.current.useReducer(U,k,Ee)},gt.useRef=function(U){return ue.current.useRef(U)},gt.useState=function(U){return ue.current.useState(U)},gt.useSyncExternalStore=function(U,k,Ee){return ue.current.useSyncExternalStore(U,k,Ee)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Qp;function df(){return Qp||(Qp=1,Iu.exports=Xv()),Iu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function jv(){if(Jp)return Oo;Jp=1;var r=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=u,Oo.jsxs=u,Oo}var em;function Yv(){return em||(em=1,Nu.exports=jv()),Nu.exports}var Z=Yv(),et=df();const Wo=Mg(et);var sl={},Uu={exports:{}},Un={},Fu={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function $v(){return tm||(tm=1,(function(r){function e(B,ce){var se=B.length;B.push(ce);e:for(;0<se;){var U=se-1>>>1,k=B[U];if(0<a(k,ce))B[U]=ce,B[se]=k,se=U;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ce=B[0],se=B.pop();if(se!==ce){B[0]=se;e:for(var U=0,k=B.length,Ee=k>>>1;U<Ee;){var $=2*(U+1)-1,re=B[$],ge=$+1,pe=B[ge];if(0>a(re,se))ge<k&&0>a(pe,re)?(B[U]=pe,B[ge]=se,U=ge):(B[U]=re,B[$]=se,U=$);else if(ge<k&&0>a(pe,se))B[U]=pe,B[ge]=se,U=ge;else break e}}return ce}function a(B,ce){var se=B.sortIndex-ce.sortIndex;return se!==0?se:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],p=[],_=1,g=null,x=3,S=!1,w=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ce=t(p);ce!==null;){if(ce.callback===null)s(p);else if(ce.startTime<=B)s(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(p)}}function A(B){if(E=!1,D(B),!w)if(t(h)!==null)w=!0,ae(G);else{var ce=t(p);ce!==null&&ue(A,ce.startTime-B)}}function G(B,ce){w=!1,E&&(E=!1,v(j),j=-1),S=!0;var se=x;try{for(D(ce),g=t(h);g!==null&&(!(g.expirationTime>ce)||B&&!z());){var U=g.callback;if(typeof U=="function"){g.callback=null,x=g.priorityLevel;var k=U(g.expirationTime<=ce);ce=r.unstable_now(),typeof k=="function"?g.callback=k:g===t(h)&&s(h),D(ce)}else s(h);g=t(h)}if(g!==null)var Ee=!0;else{var $=t(p);$!==null&&ue(A,$.startTime-ce),Ee=!1}return Ee}finally{g=null,x=se,S=!1}}var F=!1,L=null,j=-1,b=5,R=-1;function z(){return!(r.unstable_now()-R<b)}function le(){if(L!==null){var B=r.unstable_now();R=B;var ce=!0;try{ce=L(!0,B)}finally{ce?ee():(F=!1,L=null)}}else F=!1}var ee;if(typeof N=="function")ee=function(){N(le)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,fe=de.port2;de.port1.onmessage=le,ee=function(){fe.postMessage(null)}}else ee=function(){y(le,0)};function ae(B){L=B,F||(F=!0,ee())}function ue(B,ce){j=y(function(){B(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){w||S||(w=!0,ae(G))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var se=x;x=ce;try{return B()}finally{x=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return ce()}finally{x=se}},r.unstable_scheduleCallback=function(B,ce,se){var U=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=se+k,B={id:_++,callback:ce,priorityLevel:B,startTime:se,expirationTime:k,sortIndex:-1},se>U?(B.sortIndex=se,e(p,B),t(h)===null&&B===t(p)&&(E?(v(j),j=-1):E=!0,ue(A,se-U))):(B.sortIndex=k,e(h,B),w||S||(w=!0,ae(G))),B},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(B){var ce=x;return function(){var se=x;x=ce;try{return B.apply(this,arguments)}finally{x=se}}}})(Ou)),Ou}var nm;function qv(){return nm||(nm=1,Fu.exports=$v()),Fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Kv(){if(im)return Un;im=1;var r=df(),e=qv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,c,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,U;function k(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ee=!1;function $(n,i){if(!n||Ee)return"";Ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){c=te}n.call(i.prototype)}else{try{throw Error()}catch(te){c=te}n()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),m=c.stack.split(`
`),M=f.length-1,I=m.length-1;1<=M&&0<=I&&f[M]!==m[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==m[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==m[I]){var O=`
`+f[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=I);break}}}finally{Ee=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?k(n):""}function re(n){switch(n.tag){case 5:return k(n.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case F:return"Portal";case b:return"Profiler";case j:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=$e(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function W(n,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Kt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function at(n,i){dt(n,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xt(n,i.type,o):i.hasOwnProperty("defaultValue")&&xt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function xt(n,i,o){(i!=="number"||St(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function P(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function _e(n,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ye(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),we[i]=we[n]})});function Je(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(n)&&we[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Je(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,oe=null,me=null;function Ie(n){if(n=Mo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ya(i),Pe(n.stateNode,n.type,i))}}function Ne(n){oe?me?me.push(n):me=[n]:oe=n}function ot(){if(oe){var n=oe,i=me;if(me=oe=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ft(n,i){return n(i)}function Zt(){}var Mt=!1;function Rn(n,i,o){if(Mt)return n(i,o);Mt=!0;try{return Ft(n,i,o)}finally{Mt=!1,(oe!==null||me!==null)&&(Zt(),ot())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var c=ya(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ss=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ss=!1}function Pi(n,i,o,c,f,m,M,I,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(Se){this.onError(Se)}}var Li=!1,Lr=null,Dr=!1,Zi=null,ea={onError:function(n){Li=!0,Lr=n}};function os(n,i,o,c,f,m,M,I,O){Li=!1,Lr=null,Pi.apply(ea,arguments)}function ta(n,i,o,c,f,m,M,I,O){if(os.apply(this,arguments),Li){if(Li){var te=Lr;Li=!1,Lr=null}else throw Error(t(198));Dr||(Dr=!0,Zi=te)}}function yi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function na(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ia(n){if(yi(n)!==n)throw Error(t(188))}function tc(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return ia(f),n;if(m===c)return ia(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var M=!1,I=f.child;I;){if(I===o){M=!0,o=f,c=m;break}if(I===c){M=!0,c=f,o=m;break}I=I.sibling}if(!M){for(I=m.child;I;){if(I===o){M=!0,o=m,c=f;break}if(I===c){M=!0,c=m,o=f;break}I=I.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function C(n){return n=tc(n),n!==null?X(n):null}function X(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=X(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Re=e.unstable_requestPaint,Te=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,je=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ct=null,vt=null;function fn(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Tt,qe=Math.log,ci=Math.LN2;function Tt(n){return n>>>=0,n===0?32:31-(qe(n)/ci|0)|0}var hn=64,ui=4194304;function Qt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var I=M&~f;I!==0?c=Qt(I):(m&=M,m!==0&&(c=Qt(m)))}else M=o&~f,M!==0?c=Qt(M):m!==0&&(c=Qt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ct(i),f=1<<o,c|=n[o],i&=~f;return c}function Nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ct(m),I=1<<M,O=f[M];O===-1?((I&o)===0||(I&c)!==0)&&(f[M]=Nt(I,i)):O<=i&&(n.expiredLanes|=I),m&=~I}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),n}function qn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function bn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=o}function ra(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ct(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function nc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ct(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Pt=0;function bf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pf,ic,Lf,Df,Nf,rc=!1,sa=[],Qi=null,Ji=null,er=null,so=new Map,oo=new Map,tr=[],d_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&ic(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function f_(n,i,o,c,f){switch(i){case"focusin":return Qi=ao(Qi,n,i,o,c,f),!0;case"dragenter":return Ji=ao(Ji,n,i,o,c,f),!0;case"mouseover":return er=ao(er,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,c,f)),!0}return!1}function Uf(n){var i=Nr(n.target);if(i!==null){var o=yi(i);if(o!==null){if(i=o.tag,i===13){if(i=na(o),i!==null){n.blockedOn=i,Nf(n.priority,function(){Lf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);bt=c,o.target.dispatchEvent(c),bt=null}else return i=Mo(o),i!==null&&ic(i),n.blockedOn=o,!1;i.shift()}return!0}function Ff(n,i,o){oa(n)&&o.delete(i)}function h_(){rc=!1,Qi!==null&&oa(Qi)&&(Qi=null),Ji!==null&&oa(Ji)&&(Ji=null),er!==null&&oa(er)&&(er=null),so.forEach(Ff),oo.forEach(Ff)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,rc||(rc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,h_)))}function co(n){function i(f){return lo(f,n)}if(0<sa.length){lo(sa[0],n);for(var o=1;o<sa.length;o++){var c=sa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Qi!==null&&lo(Qi,n),Ji!==null&&lo(Ji,n),er!==null&&lo(er,n),so.forEach(i),oo.forEach(i),o=0;o<tr.length;o++)c=tr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)Uf(o),o.blockedOn===null&&tr.shift()}var as=A.ReactCurrentBatchConfig,aa=!0;function p_(n,i,o,c){var f=Pt,m=as.transition;as.transition=null;try{Pt=1,sc(n,i,o,c)}finally{Pt=f,as.transition=m}}function m_(n,i,o,c){var f=Pt,m=as.transition;as.transition=null;try{Pt=4,sc(n,i,o,c)}finally{Pt=f,as.transition=m}}function sc(n,i,o,c){if(aa){var f=oc(n,i,o,c);if(f===null)Ec(n,i,c,la,o),If(n,c);else if(f_(f,n,i,o,c))c.stopPropagation();else if(If(n,c),i&4&&-1<d_.indexOf(n)){for(;f!==null;){var m=Mo(f);if(m!==null&&Pf(m),m=oc(n,i,o,c),m===null&&Ec(n,i,c,la,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ec(n,i,c,null,o)}}var la=null;function oc(n,i,o,c){if(la=null,n=H(c),n=Nr(n),n!==null)if(i=yi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=na(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return la=n,null}function Of(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case nt:return 4;case rt:case je:return 16;case yt:return 536870912;default:return 16}default:return 16}}var nr=null,ac=null,ca=null;function kf(){if(ca)return ca;var n,i=ac,o=i.length,c,f="value"in nr?nr.value:nr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===f[m-c];c++);return ca=f.slice(n,1<c?1-c:void 0)}function ua(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function Bf(){return!1}function zn(n){function i(o,c,f,m,M){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?da:Bf,this.isPropagationStopped=Bf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lc=zn(ls),uo=se({},ls,{view:0,detail:0}),g_=zn(uo),cc,uc,fo,fa=se({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(cc=n.screenX-fo.screenX,uc=n.screenY-fo.screenY):uc=cc=0,fo=n),cc)},movementY:function(n){return"movementY"in n?n.movementY:uc}}),zf=zn(fa),__=se({},fa,{dataTransfer:0}),v_=zn(__),x_=se({},uo,{relatedTarget:0}),dc=zn(x_),y_=se({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),S_=zn(y_),M_=se({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),E_=zn(M_),w_=se({},ls,{data:0}),Vf=zn(w_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=C_[n])?!!i[n]:!1}function fc(){return R_}var b_=se({},uo,{key:function(n){if(n.key){var i=T_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?A_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),P_=zn(b_),L_=se({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=zn(L_),D_=se({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),N_=zn(D_),I_=se({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=zn(I_),F_=se({},fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),O_=zn(F_),k_=[9,13,27,32],hc=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var B_=d&&"TextEvent"in window&&!ho,Gf=d&&(!hc||ho&&8<ho&&11>=ho),Wf=" ",Xf=!1;function jf(n,i){switch(n){case"keyup":return k_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function z_(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return n=i.data,n===Wf&&Xf?null:n;default:return null}}function V_(n,i){if(cs)return n==="compositionend"||!hc&&jf(n,i)?(n=kf(),ca=ac=nr=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var H_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!H_[n.type]:i==="textarea"}function qf(n,i,o,c){Ne(c),i=_a(i,"onChange"),0<i.length&&(o=new lc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var po=null,mo=null;function G_(n){hh(n,0)}function ha(n){var i=ps(n);if(lt(i))return n}function W_(n,i){if(n==="change")return i}var Kf=!1;if(d){var pc;if(d){var mc="oninput"in document;if(!mc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),mc=typeof Zf.oninput=="function"}pc=mc}else pc=!1;Kf=pc&&(!document.documentMode||9<document.documentMode)}function Qf(){po&&(po.detachEvent("onpropertychange",Jf),mo=po=null)}function Jf(n){if(n.propertyName==="value"&&ha(mo)){var i=[];qf(i,mo,n,H(n)),Rn(G_,i)}}function X_(n,i,o){n==="focusin"?(Qf(),po=i,mo=o,po.attachEvent("onpropertychange",Jf)):n==="focusout"&&Qf()}function j_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ha(mo)}function Y_(n,i){if(n==="click")return ha(i)}function $_(n,i){if(n==="input"||n==="change")return ha(i)}function q_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var di=typeof Object.is=="function"?Object.is:q_;function go(n,i){if(di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!di(n[f],i[f]))return!1}return!0}function eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function th(n,i){var o=eh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ih(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=St(n.document)}return i}function gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function K_(n){var i=ih(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(c!==null&&gc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=th(o,m);var M=th(o,c);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Z_=d&&"documentMode"in document&&11>=document.documentMode,us=null,_c=null,_o=null,vc=!1;function rh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vc||us==null||us!==St(c)||(c=us,"selectionStart"in c&&gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&go(_o,c)||(_o=c,c=_a(_c,"onSelect"),0<c.length&&(i=new lc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=us)))}function pa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},xc={},sh={};d&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ma(n){if(xc[n])return xc[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return xc[n]=i[o];return n}var oh=ma("animationend"),ah=ma("animationiteration"),lh=ma("animationstart"),ch=ma("transitionend"),uh=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){uh.set(n,i),l(i,[n])}for(var yc=0;yc<dh.length;yc++){var Sc=dh[yc],Q_=Sc.toLowerCase(),J_=Sc[0].toUpperCase()+Sc.slice(1);ir(Q_,"on"+J_)}ir(oh,"onAnimationEnd"),ir(ah,"onAnimationIteration"),ir(lh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(ch,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function fh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ta(c,i,void 0,n),n.currentTarget=null}function hh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var I=c[M],O=I.instance,te=I.currentTarget;if(I=I.listener,O!==m&&f.isPropagationStopped())break e;fh(f,I,te),m=O}else for(M=0;M<c.length;M++){if(I=c[M],O=I.instance,te=I.currentTarget,I=I.listener,O!==m&&f.isPropagationStopped())break e;fh(f,I,te),m=O}}}if(Dr)throw n=Zi,Dr=!1,Zi=null,n}function Ot(n,i){var o=i[bc];o===void 0&&(o=i[bc]=new Set);var c=n+"__bubble";o.has(c)||(ph(i,n,2,!1),o.add(c))}function Mc(n,i,o){var c=0;i&&(c|=4),ph(o,n,c,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[ga]){n[ga]=!0,s.forEach(function(o){o!=="selectionchange"&&(ev.has(o)||Mc(o,!1,n),Mc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ga]||(i[ga]=!0,Mc("selectionchange",!1,i))}}function ph(n,i,o,c){switch(Of(i)){case 1:var f=p_;break;case 4:f=m_;break;default:f=sc}o=f.bind(null,i,o,n),f=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Ec(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=c.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;I!==null;){if(M=Nr(I),M===null)return;if(O=M.tag,O===5||O===6){c=m=M;continue e}I=I.parentNode}}c=c.return}Rn(function(){var te=m,Se=H(o),Me=[];e:{var xe=uh.get(n);if(xe!==void 0){var Ue=lc,ze=n;switch(n){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":Ue=P_;break;case"focusin":ze="focus",Ue=dc;break;case"focusout":ze="blur",Ue=dc;break;case"beforeblur":case"afterblur":Ue=dc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=N_;break;case oh:case ah:case lh:Ue=S_;break;case ch:Ue=U_;break;case"scroll":Ue=g_;break;case"wheel":Ue=O_;break;case"copy":case"cut":case"paste":Ue=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Hf}var He=(i&4)!==0,jt=!He&&n==="scroll",q=He?xe!==null?xe+"Capture":null:xe;He=[];for(var V=te,Q;V!==null;){Q=V;var Ce=Q.stateNode;if(Q.tag===5&&Ce!==null&&(Q=Ce,q!==null&&(Ce=yn(V,q),Ce!=null&&He.push(yo(V,Ce,Q)))),jt)break;V=V.return}0<He.length&&(xe=new Ue(xe,ze,null,o,Se),Me.push({event:xe,listeners:He}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",xe&&o!==bt&&(ze=o.relatedTarget||o.fromElement)&&(Nr(ze)||ze[Ni]))break e;if((Ue||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ue?(ze=o.relatedTarget||o.toElement,Ue=te,ze=ze?Nr(ze):null,ze!==null&&(jt=yi(ze),ze!==jt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=te),Ue!==ze)){if(He=zf,Ce="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(He=Hf,Ce="onPointerLeave",q="onPointerEnter",V="pointer"),jt=Ue==null?xe:ps(Ue),Q=ze==null?xe:ps(ze),xe=new He(Ce,V+"leave",Ue,o,Se),xe.target=jt,xe.relatedTarget=Q,Ce=null,Nr(Se)===te&&(He=new He(q,V+"enter",ze,o,Se),He.target=Q,He.relatedTarget=jt,Ce=He),jt=Ce,Ue&&ze)t:{for(He=Ue,q=ze,V=0,Q=He;Q;Q=fs(Q))V++;for(Q=0,Ce=q;Ce;Ce=fs(Ce))Q++;for(;0<V-Q;)He=fs(He),V--;for(;0<Q-V;)q=fs(q),Q--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=fs(He),q=fs(q)}He=null}else He=null;Ue!==null&&mh(Me,xe,Ue,He,!1),ze!==null&&jt!==null&&mh(Me,jt,ze,He,!0)}}e:{if(xe=te?ps(te):window,Ue=xe.nodeName&&xe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&xe.type==="file")var Ye=W_;else if($f(xe))if(Kf)Ye=$_;else{Ye=j_;var Ze=X_}else(Ue=xe.nodeName)&&Ue.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ye=Y_);if(Ye&&(Ye=Ye(n,te))){qf(Me,Ye,o,Se);break e}Ze&&Ze(n,xe,te),n==="focusout"&&(Ze=xe._wrapperState)&&Ze.controlled&&xe.type==="number"&&xt(xe,"number",xe.value)}switch(Ze=te?ps(te):window,n){case"focusin":($f(Ze)||Ze.contentEditable==="true")&&(us=Ze,_c=te,_o=null);break;case"focusout":_o=_c=us=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,rh(Me,o,Se);break;case"selectionchange":if(Z_)break;case"keydown":case"keyup":rh(Me,o,Se)}var Qe;if(hc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else cs?jf(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Gf&&o.locale!=="ko"&&(cs||it!=="onCompositionStart"?it==="onCompositionEnd"&&cs&&(Qe=kf()):(nr=Se,ac="value"in nr?nr.value:nr.textContent,cs=!0)),Ze=_a(te,it),0<Ze.length&&(it=new Vf(it,n,null,o,Se),Me.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=Yf(o),Qe!==null&&(it.data=Qe)))),(Qe=B_?z_(n,o):V_(n,o))&&(te=_a(te,"onBeforeInput"),0<te.length&&(Se=new Vf("onBeforeInput","beforeinput",null,o,Se),Me.push({event:Se,listeners:te}),Se.data=Qe))}hh(Me,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function _a(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=yn(n,o),m!=null&&c.unshift(yo(n,m,f)),m=yn(n,i),m!=null&&c.push(yo(n,m,f))),n=n.return}return c}function fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mh(n,i,o,c,f){for(var m=i._reactName,M=[];o!==null&&o!==c;){var I=o,O=I.alternate,te=I.stateNode;if(O!==null&&O===c)break;I.tag===5&&te!==null&&(I=te,f?(O=yn(o,m),O!=null&&M.unshift(yo(o,O,I))):f||(O=yn(o,m),O!=null&&M.push(yo(o,O,I)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function gh(n){return(typeof n=="string"?n:""+n).replace(tv,`
`).replace(nv,"")}function va(n,i,o){if(i=gh(i),gh(n)!==i&&o)throw Error(t(425))}function xa(){}var wc=null,Tc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(n){return _h.resolve(null).then(n).catch(sv)}:Cc;function sv(n){setTimeout(function(){throw n})}function Rc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);co(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+hs,So="__reactProps$"+hs,Ni="__reactContainer$"+hs,bc="__reactEvents$"+hs,ov="__reactListeners$"+hs,av="__reactHandles$"+hs;function Nr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=vh(n);n!==null;){if(o=n[Mi])return o;n=vh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[Mi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ya(n){return n[So]||null}var Pc=[],ms=-1;function sr(n){return{current:n}}function kt(n){0>ms||(n.current=Pc[ms],Pc[ms]=null,ms--)}function Ut(n,i){ms++,Pc[ms]=n.current,n.current=i}var or={},pn=sr(or),Pn=sr(!1),Ir=or;function gs(n,i){var o=n.type.contextTypes;if(!o)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(n){return n=n.childContextTypes,n!=null}function Sa(){kt(Pn),kt(pn)}function xh(n,i,o){if(pn.current!==or)throw Error(t(168));Ut(pn,i),Ut(Pn,o)}function yh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,pe(n)||"Unknown",f));return se({},o,c)}function Ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Ir=pn.current,Ut(pn,n),Ut(Pn,Pn.current),!0}function Sh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=yh(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,kt(Pn),kt(pn),Ut(pn,n)):kt(Pn),Ut(Pn,o)}var Ii=null,Ea=!1,Lc=!1;function Mh(n){Ii===null?Ii=[n]:Ii.push(n)}function lv(n){Ea=!0,Mh(n)}function ar(){if(!Lc&&Ii!==null){Lc=!0;var n=0,i=Pt;try{var o=Ii;for(Pt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ii=null,Ea=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(n+1)),ne(Ve,ar),f}finally{Pt=i,Lc=!1}}return null}var _s=[],vs=0,wa=null,Ta=0,Kn=[],Zn=0,Ur=null,Ui=1,Fi="";function Fr(n,i){_s[vs++]=Ta,_s[vs++]=wa,wa=n,Ta=i}function Eh(n,i,o){Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ur=n;var c=Ui;n=Fi;var f=32-ct(c)-1;c&=~(1<<f),o+=1;var m=32-ct(i)+f;if(30<m){var M=f-f%5;m=(c&(1<<M)-1).toString(32),c>>=M,f-=M,Ui=1<<32-ct(i)+f|o<<f|c,Fi=m+n}else Ui=1<<m|o<<f|c,Fi=n}function Dc(n){n.return!==null&&(Fr(n,1),Eh(n,1,0))}function Nc(n){for(;n===wa;)wa=_s[--vs],_s[vs]=null,Ta=_s[--vs],_s[vs]=null;for(;n===Ur;)Ur=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null,Ui=Kn[--Zn],Kn[Zn]=null}var Vn=null,Hn=null,zt=!1,fi=null;function wh(n,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Th(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Hn=null,!0):!1;default:return!1}}function Ic(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uc(n){if(zt){var i=Hn;if(i){var o=i;if(!Th(n,i)){if(Ic(n))throw Error(t(418));i=rr(o.nextSibling);var c=Vn;i&&Th(n,i)?wh(c,o):(n.flags=n.flags&-4097|2,zt=!1,Vn=n)}}else{if(Ic(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,Vn=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Aa(n){if(n!==Vn)return!1;if(!zt)return Ah(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=Hn)){if(Ic(n))throw Ch(),Error(t(418));for(;i;)wh(n,i),i=rr(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Hn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=Vn?rr(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=Hn;n;)n=rr(n.nextSibling)}function xs(){Hn=Vn=null,zt=!1}function Fc(n){fi===null?fi=[n]:fi.push(n)}var cv=A.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var I=f.refs;M===null?delete I[m]:I[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ca(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function bh(n){function i(q,V){if(n){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function c(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function f(q,V){return q=mr(q,V),q.index=0,q.sibling=null,q}function m(q,V,Q){return q.index=Q,n?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=2,V):Q):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,V,Q,Ce){return V===null||V.tag!==6?(V=Cu(Q,q.mode,Ce),V.return=q,V):(V=f(V,Q),V.return=q,V)}function O(q,V,Q,Ce){var Ye=Q.type;return Ye===L?Se(q,V,Q.props.children,Ce,Q.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Rh(Ye)===V.type)?(Ce=f(V,Q.props),Ce.ref=Eo(q,V,Q),Ce.return=q,Ce):(Ce=Za(Q.type,Q.key,Q.props,null,q.mode,Ce),Ce.ref=Eo(q,V,Q),Ce.return=q,Ce)}function te(q,V,Q,Ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Ru(Q,q.mode,Ce),V.return=q,V):(V=f(V,Q.children||[]),V.return=q,V)}function Se(q,V,Q,Ce,Ye){return V===null||V.tag!==7?(V=Wr(Q,q.mode,Ce,Ye),V.return=q,V):(V=f(V,Q),V.return=q,V)}function Me(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Cu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return Q=Za(V.type,V.key,V.props,null,q.mode,Q),Q.ref=Eo(q,null,V),Q.return=q,Q;case F:return V=Ru(V,q.mode,Q),V.return=q,V;case ae:var Ce=V._init;return Me(q,Ce(V._payload),Q)}if(Ge(V)||ce(V))return V=Wr(V,q.mode,Q,null),V.return=q,V;Ca(q,V)}return null}function xe(q,V,Q,Ce){var Ye=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:I(q,V,""+Q,Ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case G:return Q.key===Ye?O(q,V,Q,Ce):null;case F:return Q.key===Ye?te(q,V,Q,Ce):null;case ae:return Ye=Q._init,xe(q,V,Ye(Q._payload),Ce)}if(Ge(Q)||ce(Q))return Ye!==null?null:Se(q,V,Q,Ce,null);Ca(q,Q)}return null}function Ue(q,V,Q,Ce,Ye){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return q=q.get(Q)||null,I(V,q,""+Ce,Ye);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case G:return q=q.get(Ce.key===null?Q:Ce.key)||null,O(V,q,Ce,Ye);case F:return q=q.get(Ce.key===null?Q:Ce.key)||null,te(V,q,Ce,Ye);case ae:var Ze=Ce._init;return Ue(q,V,Q,Ze(Ce._payload),Ye)}if(Ge(Ce)||ce(Ce))return q=q.get(Q)||null,Se(V,q,Ce,Ye,null);Ca(V,Ce)}return null}function ze(q,V,Q,Ce){for(var Ye=null,Ze=null,Qe=V,it=V=0,an=null;Qe!==null&&it<Q.length;it++){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var At=xe(q,Qe,Q[it],Ce);if(At===null){Qe===null&&(Qe=an);break}n&&Qe&&At.alternate===null&&i(q,Qe),V=m(At,V,it),Ze===null?Ye=At:Ze.sibling=At,Ze=At,Qe=an}if(it===Q.length)return o(q,Qe),zt&&Fr(q,it),Ye;if(Qe===null){for(;it<Q.length;it++)Qe=Me(q,Q[it],Ce),Qe!==null&&(V=m(Qe,V,it),Ze===null?Ye=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&Fr(q,it),Ye}for(Qe=c(q,Qe);it<Q.length;it++)an=Ue(Qe,q,it,Q[it],Ce),an!==null&&(n&&an.alternate!==null&&Qe.delete(an.key===null?it:an.key),V=m(an,V,it),Ze===null?Ye=an:Ze.sibling=an,Ze=an);return n&&Qe.forEach(function(gr){return i(q,gr)}),zt&&Fr(q,it),Ye}function He(q,V,Q,Ce){var Ye=ce(Q);if(typeof Ye!="function")throw Error(t(150));if(Q=Ye.call(Q),Q==null)throw Error(t(151));for(var Ze=Ye=null,Qe=V,it=V=0,an=null,At=Q.next();Qe!==null&&!At.done;it++,At=Q.next()){Qe.index>it?(an=Qe,Qe=null):an=Qe.sibling;var gr=xe(q,Qe,At.value,Ce);if(gr===null){Qe===null&&(Qe=an);break}n&&Qe&&gr.alternate===null&&i(q,Qe),V=m(gr,V,it),Ze===null?Ye=gr:Ze.sibling=gr,Ze=gr,Qe=an}if(At.done)return o(q,Qe),zt&&Fr(q,it),Ye;if(Qe===null){for(;!At.done;it++,At=Q.next())At=Me(q,At.value,Ce),At!==null&&(V=m(At,V,it),Ze===null?Ye=At:Ze.sibling=At,Ze=At);return zt&&Fr(q,it),Ye}for(Qe=c(q,Qe);!At.done;it++,At=Q.next())At=Ue(Qe,q,it,At.value,Ce),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?it:At.key),V=m(At,V,it),Ze===null?Ye=At:Ze.sibling=At,Ze=At);return n&&Qe.forEach(function(Hv){return i(q,Hv)}),zt&&Fr(q,it),Ye}function jt(q,V,Q,Ce){if(typeof Q=="object"&&Q!==null&&Q.type===L&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case G:e:{for(var Ye=Q.key,Ze=V;Ze!==null;){if(Ze.key===Ye){if(Ye=Q.type,Ye===L){if(Ze.tag===7){o(q,Ze.sibling),V=f(Ze,Q.props.children),V.return=q,q=V;break e}}else if(Ze.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&Rh(Ye)===Ze.type){o(q,Ze.sibling),V=f(Ze,Q.props),V.ref=Eo(q,Ze,Q),V.return=q,q=V;break e}o(q,Ze);break}else i(q,Ze);Ze=Ze.sibling}Q.type===L?(V=Wr(Q.props.children,q.mode,Ce,Q.key),V.return=q,q=V):(Ce=Za(Q.type,Q.key,Q.props,null,q.mode,Ce),Ce.ref=Eo(q,V,Q),Ce.return=q,q=Ce)}return M(q);case F:e:{for(Ze=Q.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){o(q,V.sibling),V=f(V,Q.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=Ru(Q,q.mode,Ce),V.return=q,q=V}return M(q);case ae:return Ze=Q._init,jt(q,V,Ze(Q._payload),Ce)}if(Ge(Q))return ze(q,V,Q,Ce);if(ce(Q))return He(q,V,Q,Ce);Ca(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,V!==null&&V.tag===6?(o(q,V.sibling),V=f(V,Q),V.return=q,q=V):(o(q,V),V=Cu(Q,q.mode,Ce),V.return=q,q=V),M(q)):o(q,V)}return jt}var ys=bh(!0),Ph=bh(!1),Ra=sr(null),ba=null,Ss=null,Oc=null;function kc(){Oc=Ss=ba=null}function Bc(n){var i=Ra.current;kt(Ra),n._currentValue=i}function zc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ms(n,i){ba=n,Oc=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Oc!==n)if(n={context:n,memoizedValue:i,next:null},Ss===null){if(ba===null)throw Error(t(308));Ss=n,ba.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return i}var Or=null;function Vc(n){Or===null?Or=[n]:Or.push(n)}function Lh(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Vc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Oi(n,c)}function Oi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Oi(n,o)}return f=c.interleaved,f===null?(i.next=i,Vc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Oi(n,o)}function Pa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,nc(n,o)}}function Nh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function La(n,i,o,c){var f=n.updateQueue;lr=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var O=I,te=O.next;O.next=null,M===null?m=te:M.next=te,M=O;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==M&&(I===null?Se.firstBaseUpdate=te:I.next=te,Se.lastBaseUpdate=O))}if(m!==null){var Me=f.baseState;M=0,Se=te=O=null,I=m;do{var xe=I.lane,Ue=I.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,He=I;switch(xe=i,Ue=o,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){Me=ze.call(Ue,Me,xe);break e}Me=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,xe=typeof ze=="function"?ze.call(Ue,Me,xe):ze,xe==null)break e;Me=se({},Me,xe);break e;case 2:lr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[I]:xe.push(I))}else Ue={eventTime:Ue,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(te=Se=Ue,O=Me):Se=Se.next=Ue,M|=xe;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(O=Me),f.baseState=O,f.firstBaseUpdate=te,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);zr|=M,n.lanes=M,n.memoizedState=Me}}function Ih(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var wo={},Ei=sr(wo),To=sr(wo),Ao=sr(wo);function kr(n){if(n===wo)throw Error(t(174));return n}function Gc(n,i){switch(Ut(Ao,i),Ut(To,n),Ut(Ei,wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}kt(Ei),Ut(Ei,i)}function Es(){kt(Ei),kt(To),kt(Ao)}function Uh(n){kr(Ao.current);var i=kr(Ei.current),o=We(i,n.type);i!==o&&(Ut(To,n),Ut(Ei,o))}function Wc(n){To.current===n&&(kt(Ei),kt(To))}var Vt=sr(0);function Da(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function jc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var Na=A.ReactCurrentDispatcher,Yc=A.ReactCurrentBatchConfig,Br=0,Ht=null,Jt=null,sn=null,Ia=!1,Co=!1,Ro=0,uv=0;function mn(){throw Error(t(321))}function $c(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!di(n[o],i[o]))return!1;return!0}function qc(n,i,o,c,f,m){if(Br=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=n===null||n.memoizedState===null?pv:mv,n=o(c,f),Co){m=0;do{if(Co=!1,Ro=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,Na.current=gv,n=o(c,f)}while(Co)}if(Na.current=Oa,i=Jt!==null&&Jt.next!==null,Br=0,sn=Jt=Ht=null,Ia=!1,i)throw Error(t(300));return n}function Kc(){var n=Ro!==0;return Ro=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=n:sn=sn.next=n,sn}function Jn(){if(Jt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Ht.memoizedState=sn=n:sn=sn.next=n}return sn}function bo(n,i){return typeof i=="function"?i(n):i}function Zc(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Jt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var I=M=null,O=null,te=m;do{var Se=te.lane;if((Br&Se)===Se)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:n(c,te.action);else{var Me={lane:Se,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(I=O=Me,M=c):O=O.next=Me,Ht.lanes|=Se,zr|=Se}te=te.next}while(te!==null&&te!==m);O===null?M=c:O.next=I,di(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=O,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Ht.lanes|=m,zr|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Qc(n){var i=Jn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);di(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Fh(){}function Oh(n,i){var o=Ht,c=Jn(),f=i(),m=!di(c.memoizedState,f);if(m&&(c.memoizedState=f,Dn=!0),c=c.queue,Jc(zh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Po(9,Bh.bind(null,o,c,f,i),void 0,null),on===null)throw Error(t(349));(Br&30)!==0||kh(o,i,f)}return f}function kh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Bh(n,i,o,c){i.value=o,i.getSnapshot=c,Vh(i)&&Hh(n)}function zh(n,i,o){return o(function(){Vh(i)&&Hh(n)})}function Vh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!di(n,o)}catch{return!0}}function Hh(n){var i=Oi(n,1);i!==null&&gi(i,n,1,-1)}function Gh(n){var i=wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=hv.bind(null,Ht,n),[i.memoizedState,n]}function Po(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Wh(){return Jn().memoizedState}function Ua(n,i,o,c){var f=wi();Ht.flags|=n,f.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function Fa(n,i,o,c){var f=Jn();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var M=Jt.memoizedState;if(m=M.destroy,c!==null&&$c(c,M.deps)){f.memoizedState=Po(i,o,m,c);return}}Ht.flags|=n,f.memoizedState=Po(1|i,o,m,c)}function Xh(n,i){return Ua(8390656,8,n,i)}function Jc(n,i){return Fa(2048,8,n,i)}function jh(n,i){return Fa(4,2,n,i)}function Yh(n,i){return Fa(4,4,n,i)}function $h(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qh(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4,4,$h.bind(null,i,n),o)}function eu(){}function Kh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Zh(n,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Qh(n,i,o){return(Br&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=o):(di(o,i)||(o=Sn(),Ht.lanes|=o,zr|=o,n.baseState=!0),i)}function dv(n,i){var o=Pt;Pt=o!==0&&4>o?o:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{Pt=o,Yc.transition=c}}function Jh(){return Jn().memoizedState}function fv(n,i,o){var c=hr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ep(n))tp(i,o);else if(o=Lh(n,i,o,c),o!==null){var f=En();gi(o,n,c,f),np(o,i,c)}}function hv(n,i,o){var c=hr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(n))tp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,I=m(M,o);if(f.hasEagerState=!0,f.eagerState=I,di(I,M)){var O=i.interleaved;O===null?(f.next=f,Vc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=Lh(n,i,f,c),o!==null&&(f=En(),gi(o,n,c,f),np(o,i,c))}}function ep(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function tp(n,i){Co=Ia=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function np(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,nc(n,o)}}var Oa={readContext:Qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},pv={readContext:Qn,useCallback:function(n,i){return wi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Xh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4194308,4,$h.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ua(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ua(4,2,n,i)},useMemo:function(n,i){var o=wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=wi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=fv.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=wi();return n={current:n},i.memoizedState=n},useState:Gh,useDebugValue:eu,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=Gh(!1),i=n[0];return n=dv.bind(null,n[1]),wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,f=wi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Br&30)!==0||kh(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Xh(zh.bind(null,c,m,n),[n]),c.flags|=2048,Po(9,Bh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=wi(),i=on.identifierPrefix;if(zt){var o=Fi,c=Ui;o=(c&~(1<<32-ct(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=uv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},mv={readContext:Qn,useCallback:Kh,useContext:Qn,useEffect:Jc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Zc,useRef:Wh,useState:function(){return Zc(bo)},useDebugValue:eu,useDeferredValue:function(n){var i=Jn();return Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Zc(bo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1},gv={readContext:Qn,useCallback:Kh,useContext:Qn,useEffect:Jc,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Qc,useRef:Wh,useState:function(){return Qc(bo)},useDebugValue:eu,useDeferredValue:function(n){var i=Jn();return Jt===null?i.memoizedState=n:Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Qc(bo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function tu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:se({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ka={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=ki(c,f);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(gi(i,n,f,c),Pa(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=En(),f=hr(n),m=ki(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(gi(i,n,f,c),Pa(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),c=hr(n),f=ki(o,c);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,c),i!==null&&(gi(i,n,c,o),Pa(i,n,c))}};function ip(n,i,o,c,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(f,m):!0}function rp(n,i,o){var c=!1,f=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(f=Ln(i)?Ir:pn.current,c=i.contextTypes,m=(c=c!=null)?gs(n,f):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function sp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ka.enqueueReplaceState(i,i.state,null)}function nu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Hc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Qn(m):(m=Ln(i)?Ir:pn.current,f.context=gs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(tu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ka.enqueueReplaceState(f,f.state,null),La(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",c=i;do o+=re(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function iu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ru(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var _v=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Xa||(Xa=!0,xu=c),ru(n,i)},o}function ap(n,i,o){o=ki(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){ru(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ru(n,i),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function lp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new _v;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=Lv.bind(null,n,i,o),i.then(n,n))}function cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function up(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var vv=A.ReactCurrentOwner,Dn=!1;function Mn(n,i,o,c){i.child=n===null?Ph(i,null,o,c):ys(i,n.child,o,c)}function dp(n,i,o,c,f){o=o.render;var m=i.ref;return Ms(i,f),c=qc(n,i,o,c,m,f),o=Kc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(zt&&o&&Dc(i),i.flags|=1,Mn(n,i,c,f),i.child)}function fp(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Au(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,hp(n,i,m,c,f)):(n=Za(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(M,c)&&n.ref===i.ref)return Bi(n,i,f)}return i.flags|=1,n=mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function hp(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(go(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Bi(n,i,f)}return su(n,i,o,c,f)}function pp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(As,Gn),Gn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(As,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(As,Gn),Gn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(As,Gn),Gn|=c;return Mn(n,i,f,o),i.child}function mp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function su(n,i,o,c,f){var m=Ln(o)?Ir:pn.current;return m=gs(i,m),Ms(i,f),o=qc(n,i,o,c,m,f),c=Kc(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(zt&&c&&Dc(i),i.flags|=1,Mn(n,i,o,f),i.child)}function gp(n,i,o,c,f){if(Ln(o)){var m=!0;Ma(i)}else m=!1;if(Ms(i,f),i.stateNode===null)za(n,i),rp(i,o,c),nu(i,o,c,f),c=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var O=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Qn(te):(te=Ln(o)?Ir:pn.current,te=gs(i,te));var Se=o.getDerivedStateFromProps,Me=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==c||O!==te)&&sp(i,M,c,te),lr=!1;var xe=i.memoizedState;M.state=xe,La(i,c,M,f),O=i.memoizedState,I!==c||xe!==O||Pn.current||lr?(typeof Se=="function"&&(tu(i,o,Se,c),O=i.memoizedState),(I=lr||ip(i,o,I,c,xe,O,te))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),M.props=c,M.state=O,M.context=te,c=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Dh(n,i),I=i.memoizedProps,te=i.type===i.elementType?I:hi(i.type,I),M.props=te,Me=i.pendingProps,xe=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Qn(O):(O=Ln(o)?Ir:pn.current,O=gs(i,O));var Ue=o.getDerivedStateFromProps;(Se=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Me||xe!==O)&&sp(i,M,c,O),lr=!1,xe=i.memoizedState,M.state=xe,La(i,c,M,f);var ze=i.memoizedState;I!==Me||xe!==ze||Pn.current||lr?(typeof Ue=="function"&&(tu(i,o,Ue,c),ze=i.memoizedState),(te=lr||ip(i,o,te,c,xe,ze,O)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,ze,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,ze,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),M.props=c,M.state=ze,M.context=O,c=te):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return ou(n,i,o,c,m,f)}function ou(n,i,o,c,f,m){mp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return f&&Sh(i,o,!1),Bi(n,i,m);c=i.stateNode,vv.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=ys(i,n.child,null,m),i.child=ys(i,null,I,m)):Mn(n,i,I,m),i.memoizedState=c.state,f&&Sh(i,o,!0),i.child}function _p(n){var i=n.stateNode;i.pendingContext?xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(n,i.context,!1),Gc(n,i.containerInfo)}function vp(n,i,o,c,f){return xs(),Fc(f),i.flags|=256,Mn(n,i,o,c),i.child}var au={dehydrated:null,treeContext:null,retryLane:0};function lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function xp(n,i,o){var c=i.pendingProps,f=Vt.current,m=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ut(Vt,f&1),n===null)return Uc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=Qa(M,c,0,null),n=Wr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=lu(o),i.memoizedState=au,n):cu(i,M));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return xv(n,i,M,c,I,f,o);if(m){m=c.fallback,M=i.mode,f=n.child,I=f.sibling;var O={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=mr(f,O),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=mr(I,m):(m=Wr(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?lu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=au,c}return m=n.child,n=m.sibling,c=mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function cu(n,i){return i=Qa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ba(n,i,o,c){return c!==null&&Fc(c),ys(i,n.child,null,o),n=cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xv(n,i,o,c,f,m,M){if(o)return i.flags&256?(i.flags&=-257,c=iu(Error(t(422))),Ba(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Qa({mode:"visible",children:c.children},f,0,null),m=Wr(m,f,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ys(i,n.child,null,M),i.child.memoizedState=lu(M),i.memoizedState=au,m);if((i.mode&1)===0)return Ba(n,i,M,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=iu(m,c,void 0),Ba(n,i,M,c)}if(I=(M&n.childLanes)!==0,Dn||I){if(c=on,c!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Oi(n,f),gi(c,n,f,-1))}return Tu(),c=iu(Error(t(421))),Ba(n,i,M,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Dv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Hn=rr(f.nextSibling),Vn=i,zt=!0,fi=null,n!==null&&(Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ui=n.id,Fi=n.overflow,Ur=i),i=cu(i,c.children),i.flags|=4096,i)}function yp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),zc(n.return,i,o)}function uu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Sp(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,o,i);else if(n.tag===19)yp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Da(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),uu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Da(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}uu(i,!0,o,null,m);break;case"together":uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function yv(n,i,o){switch(i.tag){case 3:_p(i),xs();break;case 5:Uh(i);break;case 1:Ln(i.type)&&Ma(i);break;case 4:Gc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Ra,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(n,i,o):(Ut(Vt,Vt.current&1),n=Bi(n,i,o),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(n,i,o)}return Bi(n,i,o)}var Mp,du,Ep,wp;Mp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},du=function(){},Ep=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,kr(Ei.current);var m=null;switch(o){case"input":f=W(n,f),c=W(n,c),m=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":f=T(n,f),c=T(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xa)}mt(o,c);var M;o=null;for(te in f)if(!c.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var I=f[te];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in c){var O=c[te];if(I=f!=null?f[te]:void 0,c.hasOwnProperty(te)&&O!==I&&(O!=null||I!=null))if(te==="style")if(I){for(M in I)!I.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&I[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(m||(m=[]),m.push(te,o)),o=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(m=m||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ot("scroll",n),m||I===O||(m=[])):(m=m||[]).push(te,O))}o&&(m=m||[]).push("style",o);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},wp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Sv(n,i,o){var c=i.pendingProps;switch(Nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Ln(i.type)&&Sa(),gn(i),null;case 3:return c=i.stateNode,Es(),kt(Pn),kt(pn),jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Aa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Mu(fi),fi=null))),du(n,i),gn(i),null;case 5:Wc(i);var f=kr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)Ep(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=kr(Ei.current),Aa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Mi]=i,c[So]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(f=0;f<vo.length;f++)Ot(vo[f],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":Kt(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":J(c,m),Ot("invalid",c)}mt(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var I=m[M];M==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&va(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&va(c.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ot("scroll",c)}switch(o){case"input":Rt(c),Ke(c,m,!0);break;case"textarea":Rt(c),ye(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=xa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Mi]=i,n[So]=c,Mp(n,i,!1,!1),i.stateNode=n;e:{switch(M=st(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),f=c;break;case"iframe":case"object":case"embed":Ot("load",n),f=c;break;case"video":case"audio":for(f=0;f<vo.length;f++)Ot(vo[f],n);f=c;break;case"source":Ot("error",n),f=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),f=c;break;case"details":Ot("toggle",n),f=c;break;case"input":Kt(n,c),f=W(n,c),Ot("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":J(n,c),f=T(n,c),Ot("invalid",n);break;default:f=c}mt(o,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var O=I[m];m==="style"?tt(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&pt(n,O):typeof O=="number"&&pt(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ot("scroll",n):O!=null&&D(n,m,O,M))}switch(o){case"input":Rt(n),Ke(n,c,!1);break;case"textarea":Rt(n),ye(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?P(n,!!c.multiple,m,!1):c.defaultValue!=null&&P(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)wp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(Ao.current),kr(Ei.current),Aa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(m=c.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:va(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return gn(i),null;case 13:if(kt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),xs(),i.flags|=98560,m=!1;else if(m=Aa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else fi!==null&&(Mu(fi),fi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?en===0&&(en=3):Tu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Es(),du(n,i),n===null&&xo(i.stateNode.containerInfo),gn(i),null;case 10:return Bc(i.type._context),gn(i),null;case 17:return Ln(i.type)&&Sa(),gn(i),null;case 19:if(kt(Vt),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Lo(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Da(n),M!==null){for(i.flags|=128,Lo(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Te()>Cs&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Da(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*Te()-m.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Te(),i.sibling=null,o=Vt.current,Ut(Vt,c?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return wu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Mv(n,i){switch(Nc(i),i.tag){case 1:return Ln(i.type)&&Sa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),kt(Pn),kt(pn),jc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Wc(i),null;case 13:if(kt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return Es(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var Va=!1,_n=!1,Ev=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Xt(n,i,c)}else o.current=null}function fu(n,i,o){try{o()}catch(c){Xt(n,i,c)}}var Tp=!1;function wv(n,i){if(wc=aa,n=ih(),gc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,I=-1,O=-1,te=0,Se=0,Me=n,xe=null;t:for(;;){for(var Ue;Me!==o||f!==0&&Me.nodeType!==3||(I=M+f),Me!==m||c!==0&&Me.nodeType!==3||(O=M+c),Me.nodeType===3&&(M+=Me.nodeValue.length),(Ue=Me.firstChild)!==null;)xe=Me,Me=Ue;for(;;){if(Me===n)break t;if(xe===o&&++te===f&&(I=M),xe===m&&++Se===c&&(O=M),(Ue=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ue}o=I===-1||O===-1?null:{start:I,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Tc={focusedElem:n,selectionRange:o},aa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,jt=ze.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:hi(i.type,He),jt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=Tp,Tp=!1,ze}function Do(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&fu(i,o,m)}f=f.next}while(f!==c)}}function Ha(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[So],delete i[bc],delete i[ov],delete i[av])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,o),n=n.sibling;n!==null;)pu(n,i,o),n=n.sibling}function mu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(mu(n,i,o),n=n.sibling;n!==null;)mu(n,i,o),n=n.sibling}var cn=null,pi=!1;function ur(n,i,o){for(o=o.child;o!==null;)bp(n,i,o),o=o.sibling}function bp(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ct,o)}catch{}switch(o.tag){case 5:_n||Ts(o,i);case 6:var c=cn,f=pi;cn=null,ur(n,i,o),cn=c,pi=f,cn!==null&&(pi?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(pi?(n=cn,o=o.stateNode,n.nodeType===8?Rc(n.parentNode,o):n.nodeType===1&&Rc(n,o),co(n)):Rc(cn,o.stateNode));break;case 4:c=cn,f=pi,cn=o.stateNode.containerInfo,pi=!0,ur(n,i,o),cn=c,pi=f;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&fu(o,i,M),f=f.next}while(f!==c)}ur(n,i,o);break;case 1:if(!_n&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Xt(o,i,I)}ur(n,i,o);break;case 21:ur(n,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,ur(n,i,o),_n=c):ur(n,i,o);break;default:ur(n,i,o)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Ev),i.forEach(function(c){var f=Nv.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,pi=!1;break e;case 3:cn=I.stateNode.containerInfo,pi=!0;break e;case 4:cn=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(cn===null)throw Error(t(160));bp(m,M,f),cn=null,pi=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(te){Xt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,n),i=i.sibling}function Lp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),Ti(n),c&4){try{Do(3,n,n.return),Ha(3,n)}catch(He){Xt(n,n.return,He)}try{Do(5,n,n.return)}catch(He){Xt(n,n.return,He)}}break;case 1:mi(i,n),Ti(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(mi(i,n),Ti(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var f=n.stateNode;try{pt(f,"")}catch(He){Xt(n,n.return,He)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&dt(f,m),st(I,M);var te=st(I,m);for(M=0;M<O.length;M+=2){var Se=O[M],Me=O[M+1];Se==="style"?tt(f,Me):Se==="dangerouslySetInnerHTML"?Fe(f,Me):Se==="children"?pt(f,Me):D(f,Se,Me,te)}switch(I){case"input":at(f,m);break;case"textarea":_e(f,m);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?P(f,!!m.multiple,Ue,!1):xe!==!!m.multiple&&(m.defaultValue!=null?P(f,!!m.multiple,m.defaultValue,!0):P(f,!!m.multiple,m.multiple?[]:"",!1))}f[So]=m}catch(He){Xt(n,n.return,He)}}break;case 6:if(mi(i,n),Ti(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(He){Xt(n,n.return,He)}}break;case 3:if(mi(i,n),Ti(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(He){Xt(n,n.return,He)}break;case 4:mi(i,n),Ti(n);break;case 13:mi(i,n),Ti(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(vu=Te())),c&4&&Pp(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(_n=(te=_n)||Se,mi(i,n),_n=te):mi(i,n),Ti(n),c&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!Se&&(n.mode&1)!==0)for(Oe=n,Se=n.child;Se!==null;){for(Me=Oe=Se;Oe!==null;){switch(xe=Oe,Ue=xe.child,xe.tag){case 0:case 11:case 14:case 15:Do(4,xe,xe.return);break;case 1:Ts(xe,xe.return);var ze=xe.stateNode;if(typeof ze.componentWillUnmount=="function"){c=xe,o=xe.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Xt(c,o,He)}}break;case 5:Ts(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Ip(Me);continue}}Ue!==null?(Ue.return=xe,Oe=Ue):Ip(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{f=Me.stateNode,te?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,O=Me.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",M))}catch(He){Xt(n,n.return,He)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=te?"":Me.memoizedProps}catch(He){Xt(n,n.return,He)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:mi(i,n),Ti(n),c&4&&Pp(n);break;case 21:break;default:mi(i,n),Ti(n)}}function Ti(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Cp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(pt(f,""),c.flags&=-33);var m=Rp(n);mu(n,m,f);break;case 3:case 4:var M=c.stateNode.containerInfo,I=Rp(n);pu(n,I,M);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Tv(n,i,o){Oe=n,Dp(n)}function Dp(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&c){var M=f.memoizedState!==null||Va;if(!M){var I=f.alternate,O=I!==null&&I.memoizedState!==null||_n;I=Va;var te=_n;if(Va=M,(_n=O)&&!te)for(Oe=f;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?Up(f):O!==null?(O.return=M,Oe=O):Up(f);for(;m!==null;)Oe=m,Dp(m),m=m.sibling;Oe=f,Va=I,_n=te}Np(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):Np(n)}}function Np(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ha(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ih(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ih(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var Se=te.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&co(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&hu(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Ip(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Up(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ha(4,i)}catch(O){Xt(i,o,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(O){Xt(i,f,O)}}var m=i.return;try{hu(i)}catch(O){Xt(i,m,O)}break;case 5:var M=i.return;try{hu(i)}catch(O){Xt(i,M,O)}}}catch(O){Xt(i,i.return,O)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var Av=Math.ceil,Ga=A.ReactCurrentDispatcher,gu=A.ReactCurrentOwner,ei=A.ReactCurrentBatchConfig,Et=0,on=null,Yt=null,un=0,Gn=0,As=sr(0),en=0,No=null,zr=0,Wa=0,_u=0,Io=null,Nn=null,vu=0,Cs=1/0,zi=null,Xa=!1,xu=null,dr=null,ja=!1,fr=null,Ya=0,Uo=0,yu=null,$a=-1,qa=0;function En(){return(Et&6)!==0?Te():$a!==-1?$a:$a=Te()}function hr(n){return(n.mode&1)===0?1:(Et&2)!==0&&un!==0?un&-un:cv.transition!==null?(qa===0&&(qa=Sn()),qa):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Of(n.type)),n)}function gi(n,i,o,c){if(50<Uo)throw Uo=0,yu=null,Error(t(185));bn(n,o,c),((Et&2)===0||n!==on)&&(n===on&&((Et&2)===0&&(Wa|=o),en===4&&pr(n,un)),In(n,c),o===1&&Et===0&&(i.mode&1)===0&&(Cs=Te()+500,Ea&&ar()))}function In(n,i){var o=n.callbackNode;$n(n,i);var c=Si(n,n===on?un:0);if(c===0)o!==null&&ie(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ie(o),i===1)n.tag===0?lv(Op.bind(null,n)):Mh(Op.bind(null,n)),rv(function(){(Et&6)===0&&ar()}),o=null;else{switch(bf(c)){case 1:o=Ve;break;case 4:o=nt;break;case 16:o=rt;break;case 536870912:o=yt;break;default:o=rt}o=Xp(o,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Fp(n,i){if($a=-1,qa=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Rs()&&n.callbackNode!==o)return null;var c=Si(n,n===on?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ka(n,c);else{i=c;var f=Et;Et|=2;var m=Bp();(on!==n||un!==i)&&(zi=null,Cs=Te()+500,Hr(n,i));do try{bv();break}catch(I){kp(n,I)}while(!0);kc(),Ga.current=m,Et=f,Yt!==null?i=0:(on=null,un=0,i=en)}if(i!==0){if(i===2&&(f=Di(n),f!==0&&(c=f,i=Su(n,f))),i===1)throw o=No,Hr(n,0),pr(n,c),In(n,Te()),o;if(i===6)pr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Cv(f)&&(i=Ka(n,c),i===2&&(m=Di(n),m!==0&&(c=m,i=Su(n,m))),i===1))throw o=No,Hr(n,0),pr(n,c),In(n,Te()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Nn,zi);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=vu+500-Te(),10<i)){if(Si(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Cc(Gr.bind(null,n,Nn,zi),i);break}Gr(n,Nn,zi);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var M=31-ct(c);m=1<<M,M=i[M],M>f&&(f=M),c&=~m}if(c=f,c=Te()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Av(c/1960))-c,10<c){n.timeoutHandle=Cc(Gr.bind(null,n,Nn,zi),c);break}Gr(n,Nn,zi);break;case 5:Gr(n,Nn,zi);break;default:throw Error(t(329))}}}return In(n,Te()),n.callbackNode===o?Fp.bind(null,n):null}function Su(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=Ka(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&Mu(i)),n}function Mu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function Cv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!di(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~_u,i&=~Wa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ct(i),c=1<<o;n[o]=-1,i&=~c}}function Op(n){if((Et&6)!==0)throw Error(t(327));Rs();var i=Si(n,0);if((i&1)===0)return In(n,Te()),null;var o=Ka(n,i);if(n.tag!==0&&o===2){var c=Di(n);c!==0&&(i=c,o=Su(n,c))}if(o===1)throw o=No,Hr(n,0),pr(n,i),In(n,Te()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Nn,zi),In(n,Te()),null}function Eu(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Cs=Te()+500,Ea&&ar())}}function Vr(n){fr!==null&&fr.tag===0&&(Et&6)===0&&Rs();var i=Et;Et|=1;var o=ei.transition,c=Pt;try{if(ei.transition=null,Pt=1,n)return n()}finally{Pt=c,ei.transition=o,Et=i,(Et&6)===0&&ar()}}function wu(){Gn=As.current,kt(As)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,iv(o)),Yt!==null)for(o=Yt.return;o!==null;){var c=o;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sa();break;case 3:Es(),kt(Pn),kt(pn),jc();break;case 5:Wc(c);break;case 4:Es();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Bc(c.type._context);break;case 22:case 23:wu()}o=o.return}if(on=n,Yt=n=mr(n.current,null),un=Gn=i,en=0,No=null,_u=Wa=zr=0,Nn=Io=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,c.next=M}o.pending=c}Or=null}return n}function kp(n,i){do{var o=Yt;try{if(kc(),Na.current=Oa,Ia){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ia=!1}if(Br=0,sn=Jt=Ht=null,Co=!1,Ro=0,gu.current=null,o===null||o.return===null){en=1,No=i,Yt=null;break}e:{var m=n,M=o.return,I=o,O=i;if(i=un,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,Se=I,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ue=cp(M);if(Ue!==null){Ue.flags&=-257,up(Ue,M,I,m,i),Ue.mode&1&&lp(m,te,i),i=Ue,O=te;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(O),i.updateQueue=He}else ze.add(O);break e}else{if((i&1)===0){lp(m,te,i),Tu();break e}O=Error(t(426))}}else if(zt&&I.mode&1){var jt=cp(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),up(jt,M,I,m,i),Fc(ws(O,I));break e}}m=O=ws(O,I),en!==4&&(en=2),Io===null?Io=[m]:Io.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=op(m,O,i);Nh(m,q);break e;case 1:I=O;var V=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(dr===null||!dr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=ap(m,I,i);Nh(m,Ce);break e}}m=m.return}while(m!==null)}Vp(o)}catch(Ye){i=Ye,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function Bp(){var n=Ga.current;return Ga.current=Oa,n===null?Oa:n}function Tu(){(en===0||en===3||en===2)&&(en=4),on===null||(zr&268435455)===0&&(Wa&268435455)===0||pr(on,un)}function Ka(n,i){var o=Et;Et|=2;var c=Bp();(on!==n||un!==i)&&(zi=null,Hr(n,i));do try{Rv();break}catch(f){kp(n,f)}while(!0);if(kc(),Et=o,Ga.current=c,Yt!==null)throw Error(t(261));return on=null,un=0,en}function Rv(){for(;Yt!==null;)zp(Yt)}function bv(){for(;Yt!==null&&!Y();)zp(Yt)}function zp(n){var i=Wp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Vp(n):Yt=i,gu.current=null}function Vp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Sv(o,i,Gn),o!==null){Yt=o;return}}else{if(o=Mv(o,i),o!==null){o.flags&=32767,Yt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);en===0&&(en=5)}function Gr(n,i,o){var c=Pt,f=ei.transition;try{ei.transition=null,Pt=1,Pv(n,i,o,c)}finally{ei.transition=f,Pt=c}return null}function Pv(n,i,o,c){do Rs();while(fr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ra(n,m),n===on&&(Yt=on=null,un=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,Xp(rt,function(){return Rs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var M=Pt;Pt=1;var I=Et;Et|=4,gu.current=null,wv(n,o),Lp(o,n),K_(Tc),aa=!!wc,Tc=wc=null,n.current=o,Tv(o),Re(),Et=I,Pt=M,ei.transition=m}else n.current=o;if(ja&&(ja=!1,fr=n,Ya=f),m=n.pendingLanes,m===0&&(dr=null),fn(o.stateNode),In(n,Te()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Xa)throw Xa=!1,n=xu,xu=null,n;return(Ya&1)!==0&&n.tag!==0&&Rs(),m=n.pendingLanes,(m&1)!==0?n===yu?Uo++:(Uo=0,yu=n):Uo=0,ar(),null}function Rs(){if(fr!==null){var n=bf(Ya),i=ei.transition,o=Pt;try{if(ei.transition=null,Pt=16>n?16:n,fr===null)var c=!1;else{if(n=fr,fr=null,Ya=0,(Et&6)!==0)throw Error(t(331));var f=Et;for(Et|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if((Oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var O=0;O<I.length;O++){var te=I[O];for(Oe=te;Oe!==null;){var Se=Oe;switch(Se.tag){case 0:case 11:case 15:Do(8,Se,m)}var Me=Se.child;if(Me!==null)Me.return=Se,Oe=Me;else for(;Oe!==null;){Se=Oe;var xe=Se.sibling,Ue=Se.return;if(Ap(Se),Se===te){Oe=null;break}if(xe!==null){xe.return=Ue,Oe=xe;break}Oe=Ue}}}var ze=m.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var jt=He.sibling;He.sibling=null,He=jt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Oe=q;break e}Oe=m.return}}var V=n.current;for(Oe=V;Oe!==null;){M=Oe;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Oe=Q;else e:for(M=V;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ha(9,I)}}catch(Ye){Xt(I,I.return,Ye)}if(I===M){Oe=null;break e}var Ce=I.sibling;if(Ce!==null){Ce.return=I.return,Oe=Ce;break e}Oe=I.return}}if(Et=f,ar(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ct,n)}catch{}c=!0}return c}finally{Pt=o,ei.transition=i}}return!1}function Hp(n,i,o){i=ws(o,i),i=op(n,i,1),n=cr(n,i,1),i=En(),n!==null&&(bn(n,1,i),In(n,i))}function Xt(n,i,o){if(n.tag===3)Hp(n,n,o);else for(;i!==null;){if(i.tag===3){Hp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(dr===null||!dr.has(c))){n=ws(o,n),n=ap(i,n,1),i=cr(i,n,1),n=En(),i!==null&&(bn(i,1,n),In(i,n));break}}i=i.return}}function Lv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(un&o)===o&&(en===4||en===3&&(un&130023424)===un&&500>Te()-vu?Hr(n,0):_u|=o),In(n,i)}function Gp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var o=En();n=Oi(n,i),n!==null&&(bn(n,i,o),In(n,o))}function Dv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Gp(n,o)}function Nv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gp(n,o)}var Wp;Wp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,yv(n,i,o);Dn=(n.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&Eh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;za(n,i),n=i.pendingProps;var f=gs(i,pn.current);Ms(i,o),f=qc(null,i,c,n,f,o);var m=Kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,Ma(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Hc(i),f.updater=ka,i.stateNode=f,f._reactInternals=i,nu(i,c,n,o),i=ou(null,i,c,!0,m,o)):(i.tag=0,zt&&m&&Dc(i),Mn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(za(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Uv(c),n=hi(c,n),f){case 0:i=su(null,i,c,n,o);break e;case 1:i=gp(null,i,c,n,o);break e;case 11:i=dp(null,i,c,n,o);break e;case 14:i=fp(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),su(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),gp(n,i,c,f,o);case 3:e:{if(_p(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Dh(n,i),La(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ws(Error(t(423)),i),i=vp(n,i,c,o,f);break e}else if(c!==f){f=ws(Error(t(424)),i),i=vp(n,i,c,o,f);break e}else for(Hn=rr(i.stateNode.containerInfo.firstChild),Vn=i,zt=!0,fi=null,o=Ph(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===f){i=Bi(n,i,o);break e}Mn(n,i,c,o)}i=i.child}return i;case 5:return Uh(i),n===null&&Uc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,M=f.children,Ac(c,f)?M=null:m!==null&&Ac(c,m)&&(i.flags|=32),mp(n,i),Mn(n,i,M,o),i.child;case 6:return n===null&&Uc(i),null;case 13:return xp(n,i,o);case 4:return Gc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ys(i,null,c,o):Mn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),dp(n,i,c,f,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,Ut(Ra,c._currentValue),c._currentValue=M,m!==null)if(di(m.value,M)){if(m.children===f.children&&!Pn.current){i=Bi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){M=m.child;for(var O=I.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=ki(-1,o&-o),O.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var Se=te.pending;Se===null?O.next=O:(O.next=Se.next,Se.next=O),te.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),zc(m.return,o,i),I.lanes|=o;break}O=O.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),zc(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Mn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ms(i,o),f=Qn(f),c=c(f),i.flags|=1,Mn(n,i,c,o),i.child;case 14:return c=i.type,f=hi(c,i.pendingProps),f=hi(c.type,f),fp(n,i,c,f,o);case 15:return hp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),za(n,i),i.tag=1,Ln(c)?(n=!0,Ma(i)):n=!1,Ms(i,o),rp(i,c,f),nu(i,c,f,o),ou(null,i,c,!0,n,o);case 19:return Sp(n,i,o);case 22:return pp(n,i,o)}throw Error(t(156,i.tag))};function Xp(n,i){return ne(n,i)}function Iv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,o,c){return new Iv(n,i,o,c)}function Au(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Uv(n){if(typeof n=="function")return Au(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===fe)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=ti(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Za(n,i,o,c,f,m){var M=2;if(c=n,typeof n=="function")Au(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case L:return Wr(o.children,f,m,i);case j:M=8,f|=8;break;case b:return n=ti(12,o,i,f|2),n.elementType=b,n.lanes=m,n;case ee:return n=ti(13,o,i,f),n.elementType=ee,n.lanes=m,n;case de:return n=ti(19,o,i,f),n.elementType=de,n.lanes=m,n;case ue:return Qa(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:M=10;break e;case z:M=9;break e;case le:M=11;break e;case fe:M=14;break e;case ae:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(M,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Wr(n,i,o,c){return n=ti(7,n,c,i),n.lanes=o,n}function Qa(n,i,o,c){return n=ti(22,n,c,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function Cu(n,i,o){return n=ti(6,n,null,i),n.lanes=o,n}function Ru(n,i,o){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Fv(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(n,i,o,c,f,m,M,I,O){return n=new Fv(n,i,o,I,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(m),n}function Ov(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function jp(n){if(!n)return or;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return yh(n,o,i)}return i}function Yp(n,i,o,c,f,m,M,I,O){return n=bu(o,c,!0,n,f,m,M,I,O),n.context=jp(null),o=n.current,c=En(),f=hr(o),m=ki(c,f),m.callback=i??null,cr(o,m,f),n.current.lanes=f,bn(n,f,c),In(n,c),n}function Ja(n,i,o,c){var f=i.current,m=En(),M=hr(f);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(f,i,M),n!==null&&(gi(n,f,M,m),Pa(n,f,M)),M}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $p(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Pu(n,i){$p(n,i),(n=n.alternate)&&$p(n,i)}function kv(){return null}var qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lu(n){this._internalRoot=n}tl.prototype.render=Lu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ja(n,i,null,null)},tl.prototype.unmount=Lu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vr(function(){Ja(null,n,null,null)}),i[Ni]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Df();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&Uf(n)}};function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Bv(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var te=el(M);m.call(te)}}var M=Yp(i,c,n,0,null,!1,!1,"",Kp);return n._reactRootContainer=M,n[Ni]=M.current,xo(n.nodeType===8?n.parentNode:n),Vr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var te=el(O);I.call(te)}}var O=bu(n,0,!1,null,null,!1,!1,"",Kp);return n._reactRootContainer=O,n[Ni]=O.current,xo(n.nodeType===8?n.parentNode:n),Vr(function(){Ja(i,O,o,c)}),O}function il(n,i,o,c,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var I=f;f=function(){var O=el(M);I.call(O)}}Ja(i,M,n,f)}else M=Bv(o,i,n,f,c);return el(M)}Pf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Qt(i.pendingLanes);o!==0&&(nc(i,o|1),In(i,Te()),(Et&6)===0&&(Cs=Te()+500,ar()))}break;case 13:Vr(function(){var c=Oi(n,1);if(c!==null){var f=En();gi(c,n,1,f)}}),Pu(n,1)}},ic=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var o=En();gi(i,n,134217728,o)}Pu(n,134217728)}},Lf=function(n){if(n.tag===13){var i=hr(n),o=Oi(n,i);if(o!==null){var c=En();gi(o,n,i,c)}Pu(n,i)}},Df=function(){return Pt},Nf=function(n,i){var o=Pt;try{return Pt=n,i()}finally{Pt=o}},Pe=function(n,i,o){switch(i){case"input":if(at(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=ya(c);if(!f)throw Error(t(90));lt(c),at(c,f)}}}break;case"textarea":_e(n,o);break;case"select":i=o.value,i!=null&&P(n,!!o.multiple,i,!1)}},Ft=Eu,Zt=Vr;var zv={usingClientEntryPoint:!1,Events:[Mo,ps,ya,Ne,ot,Eu]},Fo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=C(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Ct=rl.inject(Vv),vt=rl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(i))throw Error(t(200));return Ov(n,i,null,o)},Un.createRoot=function(n,i){if(!Du(n))throw Error(t(299));var o=!1,c="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(n,1,!1,null,null,o,!1,c,f),n[Ni]=i.current,xo(n.nodeType===8?n.parentNode:n),new Lu(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=C(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Vr(n)},Un.hydrate=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Du(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",M=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Yp(i,null,n,1,o??null,f,!1,m,M),n[Ni]=i.current,xo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new tl(i)},Un.render=function(n,i,o){if(!nl(i))throw Error(t(200));return il(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){il(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=Eu,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!nl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return il(n,i,o,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var rm;function Zv(){if(rm)return Uu.exports;rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Uu.exports=Kv(),Uu.exports}var sm;function Qv(){if(sm)return sl;sm=1;var r=Zv();return sl.createRoot=r.createRoot,sl.hydrateRoot=r.hydrateRoot,sl}var Jv=Qv();const e0=Mg(Jv),om=r=>{let e;const t=new Set,s=(p,_)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const x=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(S=>S(e,x))}},a=()=>e,d={setState:s,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=r(s,a,d);return d},t0=(r=>r?om(r):om),n0=r=>r;function i0(r,e=n0){const t=Wo.useSyncExternalStore(r.subscribe,Wo.useCallback(()=>e(r.getState()),[r,e]),Wo.useCallback(()=>e(r.getInitialState()),[r,e]));return Wo.useDebugValue(t),t}const am=r=>{const e=t0(r),t=s=>i0(e,s);return Object.assign(t,e),t},Eg=(r=>r?am(r):am),ol={modelId:null,status:"idle",bootstrapStatus:"idle",bootstrapStep:null,uploadProgress:0,parseProgress:0,errorMessage:null,metadata:null,warnings:[],tree:null,fields:[],sets:[],activeFieldId:null,activeTimestep:0,nodeCoords_f64:null,fieldValues_f64:null,displacement_f64:null,fieldLoadError:null,fieldNanCount:0,deformLoadError:null,surfaceIndices:null,surfaceNormals:null,surfaceElementMap:null},ve=Eg((r,e)=>({...ol,beginUpload:t=>r({...ol,modelId:t,status:"uploading"}),setParsing:()=>r({status:"parsing"}),setReady:()=>r({status:"ready"}),setError:t=>r({status:"error",errorMessage:t,bootstrapStatus:"error"}),setBootstrapLoading:t=>r({bootstrapStatus:"loading",bootstrapStep:t}),setBootstrapLoaded:()=>r({bootstrapStatus:"loaded",bootstrapStep:null}),setBootstrapIdle:()=>r({bootstrapStatus:"idle",bootstrapStep:null}),setBootstrapError:(t,s)=>r({status:"error",errorMessage:s,bootstrapStatus:"error",bootstrapStep:t}),resetModel:()=>r(ol),hydrateMetadata:t=>r({metadata:t}),hydrateTree:t=>r({tree:t}),hydrateFields:t=>r({fields:t}),hydrateSets:t=>r({sets:t}),hydrateWarnings:t=>r({warnings:t}),setModelId:t=>r({modelId:t}),setStatus:t=>r({status:t}),setUploadProgress:t=>r({uploadProgress:t}),setParseProgress:t=>r({parseProgress:t}),setErrorMessage:t=>r({errorMessage:t}),setMetadata:t=>r({metadata:t}),setWarnings:t=>r({warnings:t}),addWarning:t=>r(s=>({warnings:[...s.warnings,t]})),clearWarnings:()=>r({warnings:[]}),setTree:t=>r({tree:t}),setFields:t=>r({fields:t}),setSets:t=>r({sets:t}),setActiveFieldId:t=>r({activeFieldId:t,fieldValues_f64:null,fieldLoadError:null,fieldNanCount:0}),setActiveTimestep:t=>r({activeTimestep:t,fieldValues_f64:null,fieldLoadError:null}),setNodeCoords:t=>{e().nodeCoords_f64===null&&r({nodeCoords_f64:t})},setFieldValues:t=>r({fieldValues_f64:t}),setFieldLoadError:t=>r({fieldLoadError:t}),setFieldNanCount:t=>r({fieldNanCount:t}),setDisplacementValues:t=>r({displacement_f64:t}),setDeformLoadError:t=>r({deformLoadError:t}),setSurfaceData:(t,s,a)=>r({surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a}),reset:()=>r(ol)})),Yl="/api/v1";async function Ko(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/json"}});if(!e.ok){const t=await e.text();throw new $l(e.status,t)}return e.json()}async function ff(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const d=await e.text();throw new $l(e.status,d)}const t=await e.arrayBuffer(),s=e.headers.get("X-Array-Dtype"),a=e.headers.get("X-Array-Shape"),l=e.headers.get("X-Array-ByteOrder");if(!s)throw new Error(`Missing X-Array-Dtype header for ${r}`);if(!a)throw new Error(`Missing X-Array-Shape header for ${r}`);if(!l)throw new Error(`Missing X-Array-ByteOrder header for ${r}`);const u=Md(a,"X-Array-Shape");return s0(r,s,u,l,t.byteLength),{buffer:t,meta:{dtype:s,shape:u,byteOrder:l}}}async function r0(r){const e=await fetch(`${Yl}${r}`,{headers:{Accept:"application/octet-stream"}});if(!e.ok){const N=await e.text();throw new $l(e.status,N)}const t=e.headers.get("X-Array-Dtype")??"",s=e.headers.get("X-Array-ByteOrder")??"little",a=e.headers.get("X-Array-Shape"),l=e.headers.get("X-Buffer-Offsets");if(t!=="mixed")throw new Error(`Expected mixed surfaces payload, got dtype="${t||"missing"}"`);if(s!=="little")throw new Error(`Unsupported byte order "${s}" for surfaces payload`);if(!a)throw new Error("Missing X-Array-Shape header for surfaces payload");if(!l)throw new Error("Missing X-Buffer-Offsets header for surfaces payload");const u=Md(a,"X-Array-Shape"),d=Md(l,"X-Buffer-Offsets"),h=await e.arrayBuffer();ku(u,d,"indices"),ku(u,d,"normals"),ku(u,d,"map");const p=d.indices,_=d.normals,g=d.map,x=u.indices,S=u.normals,w=u.map,E=Bu(h,p,"int32","indices"),y=Bu(h,_,"float32","normals"),v=Bu(h,g,"int32","map");return zu(x,E.length,"indices"),zu(S,y.length,"normals"),zu(w,v.length,"map"),{surfaceIndices:E,surfaceNormals:y,surfaceElementMap:v,headers:{dtype:t,shape:u,byteOrder:s,offsets:d}}}function Md(r,e){try{return JSON.parse(r)}catch{throw new Error(`Malformed ${e} header`)}}function ku(r,e,t){if(!Array.isArray(r[t]))throw new Error(`Missing or malformed shape section "${t}"`);const s=e[t];if(!Array.isArray(s)||s.length!==2)throw new Error(`Missing or malformed offsets section "${t}"`)}function Bu(r,[e,t],s,a){const l=t-e;if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||t<0||t<=e||t>r.byteLength)throw new Error(`Invalid byte range for section "${a}"`);if(e%4!==0||l%4!==0)throw new Error(`Misaligned byte range for section "${a}"`);const u=r.slice(e,t);return s==="int32"?new Int32Array(u):new Float32Array(u)}function zu(r,e,t){if(r.length!==1||!Number.isInteger(r[0])||r[0]<0)throw new Error(`Unsupported shape for section "${t}"`);if(r[0]!==e)throw new Error(`Shape length mismatch for section "${t}": expected ${r[0]}, got ${e}`)}function s0(r,e,t,s,a){if(s!=="little")throw new Error(`Unsupported byte order "${s}" for ${r}`);if(!Array.isArray(t)||t.length===0||t.some(h=>!Number.isInteger(h)||h<0))throw new Error(`Malformed X-Array-Shape header for ${r}`);const l=o0(e,r),d=t.reduce((h,p)=>h*p,1)*l;if(d!==a)throw new Error(`Binary payload size mismatch for ${r}: expected ${d} bytes, got ${a}`)}function o0(r,e){switch(r){case"float64":return Float64Array.BYTES_PER_ELEMENT;case"float32":return Float32Array.BYTES_PER_ELEMENT;case"int32":return Int32Array.BYTES_PER_ELEMENT;case"uint8":return Uint8Array.BYTES_PER_ELEMENT;default:throw new Error(`Unsupported dtype "${r}" for ${e}`)}}async function a0(r){const e=new FormData;e.append("file",r);const t=await fetch(`${Yl}/models/upload`,{method:"POST",body:e});if(!t.ok){const s=await t.text();throw new $l(t.status,s)}return t.json()}class $l extends Error{constructor(t,s){const a=l0(s),l=a.message??`Request failed with HTTP ${t}`;super(l);Gt(this,"code");Gt(this,"userMessage");this.status=t,this.body=s,this.name="ApiError",this.code=a.code,this.userMessage=l}}function l0(r){try{const e=JSON.parse(r);return{code:e.error_code??null,message:e.error_message??e.message??e.detail??null}}catch{return{code:null,message:r||null}}}const c0=()=>{const r=ve(A=>A.status),e=ve(A=>A.modelId),t=ve(A=>A.uploadProgress),s=ve(A=>A.parseProgress),a=ve(A=>A.errorMessage),l=ve(A=>A.setModelId),u=ve(A=>A.setStatus),d=ve(A=>A.setUploadProgress),h=ve(A=>A.setParseProgress),p=ve(A=>A.setErrorMessage),_=ve(A=>A.resetModel),g=ve(A=>A.setBootstrapIdle),[x,S]=et.useState(!1),w=et.useRef(null),E=et.useCallback(async A=>{_(),u("uploading"),d(0),h(0),p(null),g();try{const{model_id:G}=await a0(A);console.info("[UploadPanel] Upload returned modelId",{modelId:G,fileName:A.name}),l(G),window.history.replaceState({},"",`/?modelId=${encodeURIComponent(G)}`),u("parsing"),d(100)}catch(G){u("error"),p(G instanceof Error?G.message:"Upload failed")}},[_,g,p,l,h,u,d]),y=et.useCallback(A=>{A.preventDefault(),S(!1);const G=A.dataTransfer.files[0];G&&E(G)},[E]),v=et.useCallback(A=>{A.preventDefault(),S(!0)},[]),N=et.useCallback(()=>S(!1),[]),D=et.useCallback(A=>{var F;const G=(F=A.target.files)==null?void 0:F[0];G&&E(G)},[E]);return Z.jsxs("div",{style:{width:"100%"},children:[r==="idle"&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{className:`upload-dropzone ${x?"upload-dropzone--active":""}`,onDrop:y,onDragOver:v,onDragLeave:N,onClick:()=>{var A;return(A=w.current)==null?void 0:A.click()},children:[Z.jsx("div",{className:"upload-dropzone__title",children:"Drop VTK/VTU file here"}),Z.jsx("div",{className:"upload-dropzone__subtitle",children:"or click to browse"})]}),Z.jsx("input",{ref:w,type:"file",accept:".vtk,.vtu,.vtp,.pvtu",style:{display:"none"},onChange:D})]}),r==="uploading"&&Z.jsxs("div",{children:[Z.jsx("div",{style:{marginBottom:8,fontSize:12},children:"Uploading..."}),Z.jsx("div",{className:"progress-bar",children:Z.jsx("div",{className:"progress-bar__fill",style:{width:`${t}%`}})})]}),r==="parsing"&&Z.jsxs("div",{children:[Z.jsx("div",{style:{marginBottom:8,fontSize:12},children:e?`Parsing ${e}...`:"Parsing..."}),Z.jsx("div",{className:"progress-bar",children:Z.jsx("div",{className:"progress-bar__fill",style:{width:`${s}%`}})})]}),r==="error"&&Z.jsxs("div",{style:{color:"var(--accent-danger)",fontSize:12},children:[Z.jsx("div",{style:{marginBottom:8,fontWeight:600},children:"Error"}),Z.jsx("div",{children:a})]})]})},u0={lut_name:"viridis",min_value:0,max_value:1,n_colors:256,nan_color:[.5,.5,.5,.3],above_range_color:[1,0,1,1],below_range_color:[0,0,1,1],scale:"linear"},lm={deformMode:"undeformed",deformScale:1,deformFieldId:null,pickMode:"node",wireframeVisible:!1,partVisibility:{},colorMapConfig:{...u0}},It=Eg(r=>({...lm,setDeformMode:e=>r({deformMode:e}),setDeformScale:e=>r({deformScale:e}),setDeformFieldId:e=>r({deformFieldId:e}),setPickMode:e=>r({pickMode:e}),setWireframeVisible:e=>r({wireframeVisible:e}),toggleWireframe:()=>r(e=>({wireframeVisible:!e.wireframeVisible})),setPartVisibility:(e,t)=>r(s=>({partVisibility:{...s.partVisibility,[e]:t}})),setAllPartsVisible:e=>r(t=>{const s={};for(const a of Object.keys(t.partVisibility))s[a]=e;return{partVisibility:s}}),isolatePart:e=>r(t=>{const s={};for(const a of Object.keys(t.partVisibility))s[a]=a===e;return{partVisibility:s}}),resetVisibility:()=>r({partVisibility:{}}),setColorMapName:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,lut_name:e}})),setColorMapRange:(e,t)=>r(s=>({colorMapConfig:{...s.colorMapConfig,min_value:e,max_value:t}})),setColorMapConfig:e=>r(t=>({colorMapConfig:{...t.colorMapConfig,...e}})),resetView:()=>r(lm)})),d0=()=>{const r=ve(e=>e.tree);return r?Z.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:Z.jsx(wg,{node:r,depth:0})}):Z.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No model loaded"})},wg=({node:r,depth:e})=>{var d;const t=It(h=>h.partVisibility),s=It(h=>h.setPartVisibility),a=It(h=>h.isolatePart),l=t[r.id]!==!1,u=r.type==="part";return Z.jsxs("div",{children:[Z.jsxs("div",{className:`tree-node ${l?"":"tree-node--hidden"}`,style:{paddingLeft:e*16+8},children:[Z.jsxs("span",{className:"tree-node__icon",children:[r.type==="assembly"&&"📦",r.type==="instance"&&"🔗",r.type==="part"&&"🧊",r.type==="node_set"&&"📍",r.type==="element_set"&&"📐"]}),Z.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name}),u&&Z.jsxs("span",{className:"tree-node__actions",children:[Z.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),s(r.id,!l)},title:l?"Hide":"Show",children:l?"👁":"👁‍🗨"}),Z.jsx("button",{className:"tree-action-btn",onClick:h=>{h.stopPropagation(),a(r.id)},title:"Isolate",children:"◎"})]})]}),(d=r.children)==null?void 0:d.map(h=>Z.jsx(wg,{node:h,depth:e+1},h.id))]})},f0=()=>{const r=ve(a=>a.fields),e=ve(a=>a.activeFieldId),t=ve(a=>a.setActiveFieldId),s=ve(a=>a.fieldLoadError);return Z.jsxs("div",{className:"field-selector",children:[Z.jsxs("select",{value:e??"",onChange:a=>t(a.target.value||null),children:[Z.jsx("option",{value:"",children:"— No field —"}),r.map(a=>Z.jsxs("option",{value:a.id,disabled:a.location==="integration_point",children:[a.name,a.n_components>1?` (${a.n_components} comp)`:"",a.location==="integration_point"?" ⚠ Unsupported in MVP":"",a.location==="elemental"?" [elem]":"",a.location==="nodal"?" [nodal]":""]},a.id))]}),s&&Z.jsxs("div",{style:{marginTop:4,fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",s]})]})},h0=()=>{const r=ve(E=>E.fields),e=ve(E=>E.activeFieldId),t=ve(E=>E.activeTimestep),s=ve(E=>E.setActiveTimestep),a=ve(E=>E.fieldLoadError),[l,u]=et.useState(!1),d=et.useRef(null),h=r.find(E=>E.id===e),p=(h==null?void 0:h.n_timesteps)??1,_=Math.max(0,p-1),g=h==null?void 0:h.timesteps.find(E=>E.step_index===t),x=g!==void 0,S=(g==null?void 0:g.time_value)!=null?`t = ${g.time_value.toFixed(4)}`:x?`Step ${t}`:"No data at this step";et.useEffect(()=>{if(!l){d.current!==null&&(cancelAnimationFrame(d.current),d.current=null);return}let E=0;const y=v=>{v-E>500&&(E=v,s((t+1)%(_+1))),d.current=requestAnimationFrame(y)};return d.current=requestAnimationFrame(y),()=>{d.current!==null&&cancelAnimationFrame(d.current)}},[l,t,_,s]);const w=et.useCallback(E=>{s(parseInt(E.target.value,10))},[s]);return!h||p<=1?Z.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:h?"Single timestep":"Select a field first"}):Z.jsxs("div",{className:"slider-control",children:[Z.jsx("input",{type:"range",min:0,max:_,value:t,onChange:w}),Z.jsxs("div",{className:"slider-control__label",children:[Z.jsx("span",{children:S}),Z.jsxs("span",{children:[t+1," / ",p]})]}),Z.jsx("button",{className:"toolbar__btn",onClick:()=>u(!l),style:{alignSelf:"flex-start",marginTop:4},children:l?"⏸ Pause":"▶ Animate"}),(!x||a)&&Z.jsxs("div",{style:{color:"var(--accent-warning)",fontSize:11,marginTop:4},children:["⚠ ",a??"No data at this step"]})]})},p0=()=>{const r=ve(g=>g.fields),e=ve(g=>g.deformLoadError),t=It(g=>g.deformMode),s=It(g=>g.deformScale),a=It(g=>g.deformFieldId),l=It(g=>g.setDeformMode),u=It(g=>g.setDeformScale),d=It(g=>g.setDeformFieldId),h=r.filter(g=>g.location==="nodal"&&g.n_components===3),p=h.length>0,_=g=>{const x=parseFloat(g.target.value);Number.isNaN(x)||u(Math.min(Math.max(x,0),1e4))};return Z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[Z.jsx("div",{className:"field-selector",children:Z.jsxs("select",{value:a??"",onChange:g=>d(g.target.value||null),disabled:!p,children:[Z.jsx("option",{value:"",children:p?"— No deformation —":"— No displacement field —"}),h.map(g=>Z.jsx("option",{value:g.id,children:g.name},g.id))]})}),!p&&Z.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)"},children:"No nodal vector3 fields available for deformation."}),Z.jsx("div",{style:{display:"flex",gap:4},children:["undeformed","deformed","overlay"].map(g=>Z.jsx("button",{className:`toolbar__btn ${t===g?"toolbar__btn--active":""}`,onClick:()=>l(g),disabled:!p||!a,style:{flex:1,fontSize:11,justifyContent:"center"},children:g},g))}),Z.jsxs("div",{className:"slider-control",children:[Z.jsxs("label",{style:{fontSize:11,color:"var(--text-secondary)"},children:["Scale: ",s.toFixed(1),"×"]}),Z.jsx("input",{type:"range",min:0,max:100,step:.1,value:Math.min(s,100),onChange:g=>u(parseFloat(g.target.value)),disabled:!p||!a}),Z.jsx("input",{type:"number",min:0,max:1e4,step:1,value:s,onChange:_,disabled:!p||!a,style:{width:60,fontSize:11,padding:"2px 4px",background:"var(--bg-tertiary)",color:"var(--text-primary)",border:"1px solid var(--border-primary)",borderRadius:4}})]}),e&&Z.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",padding:"4px 6px",background:"rgba(255,180,0,0.1)",borderRadius:4},children:["⚠ ",e]})]})},m0=({onZoomToFit:r})=>{const e=ve(p=>p.status),t=It(p=>p.wireframeVisible),s=It(p=>p.toggleWireframe),a=It(p=>p.pickMode),l=It(p=>p.setPickMode),u=It(p=>p.deformMode),d=It(p=>p.setDeformMode),h=e==="ready";return Z.jsxs("div",{className:"toolbar",children:[Z.jsx("span",{className:"toolbar__title",children:"FEA Viewer"}),h&&Z.jsxs(Z.Fragment,{children:[Z.jsx("button",{className:`toolbar__btn ${t?"toolbar__btn--active":""}`,onClick:s,title:"Toggle wireframe overlay",children:"◇ Wire"}),Z.jsx("button",{className:`toolbar__btn ${a==="node"?"toolbar__btn--active":""}`,onClick:()=>l("node"),title:"Node pick mode",children:"⊙ Node"}),Z.jsx("button",{className:`toolbar__btn ${a==="element"?"toolbar__btn--active":""}`,onClick:()=>l("element"),title:"Element pick mode",children:"◻ Elem"}),Z.jsx("button",{className:`toolbar__btn ${u==="deformed"?"toolbar__btn--active":""}`,onClick:()=>d(u==="deformed"?"undeformed":"deformed"),title:"Toggle deformed view",children:"↗ Deform"}),Z.jsx("button",{className:"toolbar__btn",onClick:r,title:"Zoom to fit model",children:"⊞ Fit"})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="170",js={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g0=0,cm=1,_0=2,Tg=1,v0=2,ji=3,br=0,kn=1,jn=2,Cr=0,Ys=1,um=2,dm=3,fm=4,x0=5,Qr=100,y0=101,S0=102,M0=103,E0=104,w0=200,T0=201,A0=202,C0=203,Ed=204,wd=205,R0=206,b0=207,P0=208,L0=209,D0=210,N0=211,I0=212,U0=213,F0=214,Td=0,Ad=1,Cd=2,Ks=3,Rd=4,bd=5,Pd=6,Ld=7,pf=0,O0=1,k0=2,Rr=0,B0=1,z0=2,V0=3,H0=4,G0=5,W0=6,X0=7,Ag=300,Zs=301,Qs=302,Dd=303,Nd=304,ql=306,Id=1e3,Ar=1001,Ud=1002,An=1003,j0=1004,al=1005,oi=1006,Vu=1007,es=1008,Ci=1009,Cg=1010,Rg=1011,$o=1012,mf=1013,ts=1014,Yi=1015,Zo=1016,gf=1017,_f=1018,Js=1020,bg=35902,Pg=1021,Lg=1022,Yn=1023,Dg=1024,Ng=1025,$s=1026,eo=1027,Ig=1028,vf=1029,Ug=1030,xf=1031,yf=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Fd=35840,Od=35841,kd=35842,Bd=35843,zd=36196,Vd=37492,Hd=37496,Gd=37808,Wd=37809,Xd=37810,jd=37811,Yd=37812,$d=37813,qd=37814,Kd=37815,Zd=37816,Qd=37817,Jd=37818,ef=37819,tf=37820,nf=37821,zl=36492,rf=36494,sf=36495,Fg=36283,of=36284,af=36285,lf=36286,Y0=3200,$0=3201,Sf=0,q0=1,Tr="",ii="srgb",no="srgb-linear",Kl="linear",Lt="srgb",bs=7680,hm=519,K0=512,Z0=513,Q0=514,Og=515,J0=516,ex=517,tx=518,nx=519,pm=35044,mm="300 es",$i=2e3,Hl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,cf=180/Math.PI;function Qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function Tn(r,e,t){return Math.max(e,Math.min(t,r))}function ix(r,e){return(r%e+e)%e}function Hu(r,e,t){return(1-t)*r+t*e}function ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rx={DEG2RAD:Yo};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,s,a,l,u,d,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p)}set(e,t,s,a,l,u,d,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],w=s[8],E=a[0],y=a[3],v=a[6],N=a[1],D=a[4],A=a[7],G=a[2],F=a[5],L=a[8];return l[0]=u*E+d*N+h*G,l[3]=u*y+d*D+h*F,l[6]=u*v+d*A+h*L,l[1]=p*E+_*N+g*G,l[4]=p*y+_*D+g*F,l[7]=p*v+_*A+g*L,l[2]=x*E+S*N+w*G,l[5]=x*y+S*D+w*F,l[8]=x*v+S*A+w*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-s*l*_+s*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],g=_*u-d*p,x=d*h-_*l,S=p*l-u*h,w=t*g+s*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=g*E,e[1]=(a*p-_*s)*E,e[2]=(d*s-a*u)*E,e[3]=x*E,e[4]=(_*t-a*h)*E,e[5]=(a*l-d*t)*E,e[6]=S*E,e[7]=(s*h-p*t)*E,e[8]=(u*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new ft;function kg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sx(){const r=Gl("canvas");return r.style.display="block",r}const gm={};function Xo(r){r in gm||(gm[r]=!0,console.warn(r))}function ox(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function ax(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:no,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?Kl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const _m=[.64,.33,.3,.6,.15,.06],vm=[.2126,.7152,.0722],xm=[.3127,.329],ym=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[no]:{primaries:_m,whitePoint:xm,transfer:Kl,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:_m,whitePoint:xm,transfer:Lt,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}});let Ps;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Gl("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=qi(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(qi(t[s]/255)*255):t[s]=qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Wu(a[u].image)):l.push(Wu(a[u]))}else l=Wu(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Wu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dx=0;class Cn extends is{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,s=Ar,a=Ar,l=oi,u=es,d=Yn,h=Ci,p=Cn.DEFAULT_ANISOTROPY,_=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Qo(),this.name="",this.source=new Bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ag;Cn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,s=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],x=h[1],S=h[5],w=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-E)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+E)<.1&&Math.abs(w+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,A=(S+1)/2,G=(v+1)/2,F=(_+x)/4,L=(g+E)/4,j=(w+y)/4;return D>A&&D>G?D<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(D),a=F/s,l=L/s):A>G?A<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),s=F/a,l=j/a):G<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),s=L/l,a=j/l),this.set(s,a,l,t),this}let N=Math.sqrt((y-w)*(y-w)+(g-E)*(g-E)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-w)/N,this.y=(g-E)/N,this.z=(x-_)/N,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fx extends is{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Cn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends fx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class zg extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends Cn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,d){let h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];const x=l[u+0],S=l[u+1],w=l[u+2],E=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=w,e[t+3]=E;return}if(g!==E||h!==x||p!==S||_!==w){let y=1-d;const v=h*x+p*S+_*w+g*E,N=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const G=Math.sqrt(D),F=Math.atan2(G,v*N);y=Math.sin(y*F)/G,d=Math.sin(d*F)/G}const A=d*N;if(h=h*y+x*A,p=p*y+S*A,_=_*y+w*A,g=g*y+E*A,y===1-d){const G=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=G,p*=G,_*=G,g*=G}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,u){const d=s[a],h=s[a+1],p=s[a+2],_=s[a+3],g=l[u],x=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+_*g+h*S-p*x,e[t+1]=h*w+_*x+p*g-d*S,e[t+2]=p*w+_*S+d*x-h*g,e[t+3]=_*w-d*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(s/2),_=d(a/2),g=d(l/2),x=h(s/2),S=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=x*_*g+p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g-x*S*w;break;case"YXZ":this._x=x*_*g+p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g+x*S*w;break;case"ZXY":this._x=x*_*g-p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g-x*S*w;break;case"ZYX":this._x=x*_*g-p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g+x*S*w;break;case"YZX":this._x=x*_*g+p*S*w,this._y=p*S*g+x*_*w,this._z=p*_*w-x*S*g,this._w=p*_*g-x*S*w;break;case"XZY":this._x=x*_*g-p*S*w,this._y=p*S*g-x*_*w,this._z=p*_*w+x*S*g,this._w=p*_*g+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],_=t[6],g=t[10],x=s+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*d+a*p-l*h,this._y=a*_+u*h+l*d-s*p,this._z=l*_+u*p+s*h-a*d,this._w=u*_-s*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,d),g=Math.sin((1-t)*_)/p,x=Math.sin(t*_)/p;return this._w=u*g+this._w*x,this._x=s*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*s),_=2*(d*t-l*a),g=2*(l*s-u*t);return this.x=t+h*p+u*g-d*_,this.y=s+h*_+d*p-l*g,this.z=a+h*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-s*h,this.z=s*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new K,Mm=new ns;class io{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ll.copy(s.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),cl.subVectors(this.max,Bo),Ls.subVectors(e.a,Bo),Ds.subVectors(e.b,Bo),Ns.subVectors(e.c,Bo),_r.subVectors(Ds,Ls),vr.subVectors(Ns,Ds),Xr.subVectors(Ls,Ns);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Xr.z,Xr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Xr.z,0,-Xr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Xr.y,Xr.x,0];return!ju(t,Ls,Ds,Ns,cl)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,Ls,Ds,Ns,cl))?!1:(ul.crossVectors(_r,vr),t=[ul.x,ul.y,ul.z],ju(t,Ls,Ds,Ns,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new K,new K,new K,new K,new K,new K,new K,new K],_i=new K,ll=new io,Ls=new K,Ds=new K,Ns=new K,_r=new K,vr=new K,Xr=new K,Bo=new K,cl=new K,ul=new K,jr=new K;function ju(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){jr.fromArray(r,l);const d=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),h=e.dot(jr),p=t.dot(jr),_=s.dot(jr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>d)return!1}return!0}const px=new io,zo=new K,Yu=new K;class Zl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):px.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(zo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Yu)),this.expandByPoint(zo.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new K,$u=new K,dl=new K,xr=new K,qu=new K,fl=new K,Ku=new K;class Mf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){$u.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub($u);const l=e.distanceTo(t)*.5,u=-this.direction.dot(dl),d=xr.dot(this.direction),h=-xr.dot(dl),p=xr.lengthSq(),_=Math.abs(1-u*u);let g,x,S,w;if(_>0)if(g=u*h-d,x=u*d-h,w=l*_,g>=0)if(x>=-w)if(x<=w){const E=1/_;g*=E,x*=E,S=g*(g+u*x+2*d)+x*(u*g+x+2*h)+p}else x=l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;else x<=-w?(g=Math.max(0,-(-u*l+d)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=w?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(u*l+d)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=u>0?-l:l,g=Math.max(0,-(u*x+d)),S=-g*g+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy($u).addScaledVector(dl,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,d,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){qu.subVectors(t,e),fl.subVectors(s,e),Ku.crossVectors(qu,fl);let u=this.direction.dot(Ku),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=d*this.direction.dot(fl.crossVectors(xr,fl));if(h<0)return null;const p=d*this.direction.dot(qu.cross(xr));if(p<0||h+p>u)return null;const _=-d*xr.dot(Ku);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y)}set(e,t,s,a,l,u,d,h,p,_,g,x,S,w,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=w,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=u*_,S=u*g,w=d*_,E=d*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+w*p,t[5]=x-E*p,t[9]=-d*h,t[2]=E-x*p,t[6]=w+S*p,t[10]=u*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,w=p*_,E=p*g;t[0]=x+E*d,t[4]=w*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*_,t[9]=-d,t[2]=S*d-w,t[6]=E+x*d,t[10]=u*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,w=p*_,E=p*g;t[0]=x-E*d,t[4]=-u*g,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*_,t[9]=E-x*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const x=u*_,S=u*g,w=d*_,E=d*g;t[0]=h*_,t[4]=w*p-S,t[8]=x*p+E,t[1]=h*g,t[5]=E*p+x,t[9]=S*p-w,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=E-x*g,t[8]=w*g+S,t[1]=g,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=S*g+w,t[10]=x-E*g}else if(e.order==="XZY"){const x=u*h,S=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=x*g+E,t[5]=u*_,t[9]=S*g-w,t[2]=w*g-S,t[6]=d*_,t[10]=E*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,s){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(s,Wn),yr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(s,Wn)),yr.normalize(),hl.crossVectors(Wn,yr),a[0]=yr.x,a[4]=hl.x,a[8]=Wn.x,a[1]=yr.y,a[5]=hl.y,a[9]=Wn.y,a[2]=yr.z,a[6]=hl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],w=s[2],E=s[6],y=s[10],v=s[14],N=s[3],D=s[7],A=s[11],G=s[15],F=a[0],L=a[4],j=a[8],b=a[12],R=a[1],z=a[5],le=a[9],ee=a[13],de=a[2],fe=a[6],ae=a[10],ue=a[14],B=a[3],ce=a[7],se=a[11],U=a[15];return l[0]=u*F+d*R+h*de+p*B,l[4]=u*L+d*z+h*fe+p*ce,l[8]=u*j+d*le+h*ae+p*se,l[12]=u*b+d*ee+h*ue+p*U,l[1]=_*F+g*R+x*de+S*B,l[5]=_*L+g*z+x*fe+S*ce,l[9]=_*j+g*le+x*ae+S*se,l[13]=_*b+g*ee+x*ue+S*U,l[2]=w*F+E*R+y*de+v*B,l[6]=w*L+E*z+y*fe+v*ce,l[10]=w*j+E*le+y*ae+v*se,l[14]=w*b+E*ee+y*ue+v*U,l[3]=N*F+D*R+A*de+G*B,l[7]=N*L+D*z+A*fe+G*ce,l[11]=N*j+D*le+A*ae+G*se,l[15]=N*b+D*ee+A*ue+G*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],w=e[3],E=e[7],y=e[11],v=e[15];return w*(+l*h*g-a*p*g-l*d*x+s*p*x+a*d*S-s*h*S)+E*(+t*h*S-t*p*x+l*u*x-a*u*S+a*p*_-l*h*_)+y*(+t*p*g-t*d*S-l*u*g+s*u*S+l*d*_-s*p*_)+v*(-a*d*_-t*h*g+t*d*x+a*u*g-s*u*x+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],w=e[12],E=e[13],y=e[14],v=e[15],N=g*y*p-E*x*p+E*h*S-d*y*S-g*h*v+d*x*v,D=w*x*p-_*y*p-w*h*S+u*y*S+_*h*v-u*x*v,A=_*E*p-w*g*p+w*d*S-u*E*S-_*d*v+u*g*v,G=w*g*h-_*E*h-w*d*x+u*E*x+_*d*y-u*g*y,F=t*N+s*D+a*A+l*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return e[0]=N*L,e[1]=(E*x*l-g*y*l-E*a*S+s*y*S+g*a*v-s*x*v)*L,e[2]=(d*y*l-E*h*l+E*a*p-s*y*p-d*a*v+s*h*v)*L,e[3]=(g*h*l-d*x*l-g*a*p+s*x*p+d*a*S-s*h*S)*L,e[4]=D*L,e[5]=(_*y*l-w*x*l+w*a*S-t*y*S-_*a*v+t*x*v)*L,e[6]=(w*h*l-u*y*l-w*a*p+t*y*p+u*a*v-t*h*v)*L,e[7]=(u*x*l-_*h*l+_*a*p-t*x*p-u*a*S+t*h*S)*L,e[8]=A*L,e[9]=(w*g*l-_*E*l-w*s*S+t*E*S+_*s*v-t*g*v)*L,e[10]=(u*E*l-w*d*l+w*s*p-t*E*p-u*s*v+t*d*v)*L,e[11]=(_*d*l-u*g*l-_*s*p+t*g*p+u*s*S-t*d*S)*L,e[12]=G*L,e[13]=(_*E*a-w*g*a+w*s*x-t*E*x-_*s*y+t*g*y)*L,e[14]=(w*d*a-u*E*a-w*s*h+t*E*h+u*s*y-t*d*y)*L,e[15]=(u*g*a-_*d*a+_*s*h-t*g*h-u*s*x+t*d*x)*L,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,p=l*u,_=l*d;return this.set(p*u+s,p*d-a*h,p*h+a*d,0,p*d+a*h,_*d+s,_*h-a*u,0,p*h-a*d,_*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,_=u+u,g=d+d,x=l*p,S=l*_,w=l*g,E=u*_,y=u*g,v=d*g,N=h*p,D=h*_,A=h*g,G=s.x,F=s.y,L=s.z;return a[0]=(1-(E+v))*G,a[1]=(S+A)*G,a[2]=(w-D)*G,a[3]=0,a[4]=(S-A)*F,a[5]=(1-(x+v))*F,a[6]=(y+N)*F,a[7]=0,a[8]=(w+D)*L,a[9]=(y-N)*L,a[10]=(1-(x+E))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Is.set(a[0],a[1],a[2]).length();const u=Is.set(a[4],a[5],a[6]).length(),d=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],vi.copy(this);const p=1/l,_=1/u,g=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,a,l,u,d=$i){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),x=(s+a)/(s-a);let S,w;if(d===$i)S=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===Hl)S=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,d=$i){const h=this.elements,p=1/(t-e),_=1/(s-a),g=1/(u-l),x=(t+e)*p,S=(s+a)*_;let w,E;if(d===$i)w=(u+l)*g,E=-2*g;else if(d===Hl)w=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Is=new K,vi=new Wt,mx=new K(0,0,0),gx=new K(1,1,1),yr=new K,hl=new K,Wn=new K,Em=new Wt,wm=new ns;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const Tm=new K,Us=new ns,Gi=new Wt,pl=new K,Vo=new K,vx=new K,xx=new ns,Am=new K(1,0,0),Cm=new K(0,1,0),Rm=new K(0,0,1),bm={type:"added"},yx={type:"removed"},Fs={type:"childadded",child:null},Zu={type:"childremoved",child:null};class dn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new K,t=new Ri,s=new ns,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ft}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?pl.copy(e):pl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Vo,pl,this.up):Gi.lookAt(pl,Vo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Gi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),x=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),w.length>0&&(s.nodes=w)}return s.object=a,s;function u(d){const h=[];for(const p in d){const _=d[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}dn.DEFAULT_UP=new K(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new K,Wi=new K,Qu=new K,Xi=new K,Os=new K,ks=new K,Pm=new K,Ju=new K,ed=new K,td=new K,nd=new Bt,id=new Bt,rd=new Bt;class si{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),xi.subVectors(e,t),a.cross(xi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){xi.subVectors(a,t),Wi.subVectors(s,t),Qu.subVectors(e,t);const u=xi.dot(xi),d=xi.dot(Wi),h=xi.dot(Qu),p=Wi.dot(Wi),_=Wi.dot(Qu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-d*_)*x,w=(u*_-d*h)*x;return l.set(1-S-w,w,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,s,a,l,u,d,h){return this.getBarycoord(e,t,s,a,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(u,Xi.y),h.addScaledVector(d,Xi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,s),rd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(nd,l.x),u.addScaledVector(id,l.y),u.addScaledVector(rd,l.z),u}static isFrontFacing(e,t,s,a){return xi.subVectors(s,t),Wi.subVectors(e,t),xi.cross(Wi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return si.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,d;Os.subVectors(a,s),ks.subVectors(l,s),Ju.subVectors(e,s);const h=Os.dot(Ju),p=ks.dot(Ju);if(h<=0&&p<=0)return t.copy(s);ed.subVectors(e,a);const _=Os.dot(ed),g=ks.dot(ed);if(_>=0&&g<=_)return t.copy(a);const x=h*g-_*p;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Os,u);td.subVectors(e,l);const S=Os.dot(td),w=ks.dot(td);if(w>=0&&S<=w)return t.copy(l);const E=S*p-h*w;if(E<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(s).addScaledVector(ks,d);const y=_*w-S*g;if(y<=0&&g-_>=0&&S-w>=0)return Pm.subVectors(l,a),d=(g-_)/(g-_+(S-w)),t.copy(a).addScaledVector(Pm,d);const v=1/(y+E+x);return u=E*v,d=x*v,t.copy(s).addScaledVector(Os,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function sd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _t{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=ix(e,1),t=Tn(t,0,1),s=Tn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=sd(u,l,e+1/3),this.g=sd(u,l,e),this.b=sd(u,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=ii){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const s=Hg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return wt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Tn(xn.r*255,0,255))*65536+Math.round(Tn(xn.g*255,0,255))*256+Math.round(Tn(xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(xn.copy(this),t);const s=xn.r,a=xn.g,l=xn.b,u=Math.max(s,a,l),d=Math.min(s,a,l);let h,p;const _=(d+u)/2;if(d===u)h=0,p=0;else{const g=u-d;switch(p=_<=.5?g/(u+d):g/(2-u-d),u){case s:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-s)/g+2;break;case l:h=(s-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ii){wt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,a=xn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(ml);const s=Hu(Sr.h,ml.h,t),a=Hu(Sr.s,ml.s,t),l=Hu(Sr.l,ml.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new _t;_t.NAMES=Hg;let Sx=0;class rs extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Qo(),this.name="",this.blending=Ys,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=wd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gg extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new K,gl=new ut;class qt{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=pm,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Fn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),s=Fn(s,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class Wg extends qt{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Xg extends qt{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Bn extends qt{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Mx=0;const ni=new Wt,od=new dn,Bs=new K,Xn=new io,Ho=new io,ln=new K;class li extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?Xg:Wg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ft().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bn(s,3))}else{for(let s=0,a=t.count;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Xn.min,Ho.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Ho.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Ho.min),Xn.expandByPoint(Ho.max))}Xn.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)ln.fromBufferAttribute(d,p),h&&(Bs.fromBufferAttribute(e,p),ln.add(Bs)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let j=0;j<s.count;j++)d[j]=new K,h[j]=new K;const p=new K,_=new K,g=new K,x=new ut,S=new ut,w=new ut,E=new K,y=new K;function v(j,b,R){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,b),g.fromBufferAttribute(s,R),x.fromBufferAttribute(l,j),S.fromBufferAttribute(l,b),w.fromBufferAttribute(l,R),_.sub(p),g.sub(p),S.sub(x),w.sub(x);const z=1/(S.x*w.y-w.x*S.y);isFinite(z)&&(E.copy(_).multiplyScalar(w.y).addScaledVector(g,-S.y).multiplyScalar(z),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(z),d[j].add(E),d[b].add(E),d[R].add(E),h[j].add(y),h[b].add(y),h[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let j=0,b=N.length;j<b;++j){const R=N[j],z=R.start,le=R.count;for(let ee=z,de=z+le;ee<de;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new K,A=new K,G=new K,F=new K;function L(j){G.fromBufferAttribute(a,j),F.copy(G);const b=d[j];D.copy(b),D.sub(G.multiplyScalar(G.dot(b))).normalize(),A.crossVectors(F,b);const z=A.dot(h[j])<0?-1:1;u.setXYZW(j,D.x,D.y,D.z,z)}for(let j=0,b=N.length;j<b;++j){const R=N[j],z=R.start,le=R.count;for(let ee=z,de=z+le;ee<de;ee+=3)L(e.getX(ee+0)),L(e.getX(ee+1)),L(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const a=new K,l=new K,u=new K,d=new K,h=new K,p=new K,_=new K,g=new K;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,y),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,y),d.add(_),h.add(_),p.add(_),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),_.subVectors(u,l),g.subVectors(a,l),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(h.length*_);let S=0,w=0;for(let E=0,y=h.length;E<y;E++){d.isInterleavedBufferAttribute?S=h[E]*d.data.stride+d.offset:S=h[E]*_;for(let v=0;v<_;v++)x[w++]=p[S++]}return new qt(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,s);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Wt,Yr=new Mf,_l=new Zl,Dm=new K,vl=new K,xl=new K,yl=new K,ad=new K,Sl=new K,Nm=new K,Ml=new K;class ai extends dn{constructor(e=new li,t=new Gg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Sl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=d[h],g=l[h];_!==0&&(ad.fromBufferAttribute(g,e),u?Sl.addScaledVector(ad,_):Sl.addScaledVector(ad.sub(t),_))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_l.copy(s.boundingSphere),_l.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(_l.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(_l,Dm)===null||Yr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Lm),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,E=x.length;w<E;w++){const y=x[w],v=u[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let A=N,G=D;A<G;A+=3){const F=d.getX(A),L=d.getX(A+1),j=d.getX(A+2);a=El(this,v,e,s,p,_,g,F,L,j),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=w,v=E;y<v;y+=3){const N=d.getX(y),D=d.getX(y+1),A=d.getX(y+2);a=El(this,u,e,s,p,_,g,N,D,A),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,E=x.length;w<E;w++){const y=x[w],v=u[y.materialIndex],N=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let A=N,G=D;A<G;A+=3){const F=A,L=A+1,j=A+2;a=El(this,v,e,s,p,_,g,F,L,j),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=w,v=E;y<v;y+=3){const N=y,D=y+1,A=y+2;a=El(this,u,e,s,p,_,g,N,D,A),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ex(r,e,t,s,a,l,u,d){let h;if(e.side===kn?h=s.intersectTriangle(u,l,a,!0,d):h=s.intersectTriangle(a,l,u,e.side===br,d),h===null)return null;Ml.copy(d),Ml.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ml);return p<t.near||p>t.far?null:{distance:p,point:Ml.clone(),object:r}}function El(r,e,t,s,a,l,u,d,h,p){r.getVertexPosition(d,vl),r.getVertexPosition(h,xl),r.getVertexPosition(p,yl);const _=Ex(r,e,t,s,vl,xl,yl,Nm);if(_){const g=new K;si.getBarycoord(Nm,vl,xl,yl,g),a&&(_.uv=si.getInterpolatedAttribute(a,d,h,p,g,new ut)),l&&(_.uv1=si.getInterpolatedAttribute(l,d,h,p,g,new ut)),u&&(_.normal=si.getInterpolatedAttribute(u,d,h,p,g,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:h,c:p,normal:new K,materialIndex:0};si.getNormal(vl,xl,yl,x.normal),_.face=x,_.barycoord=g}return _}class Jo extends li{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],g=[];let x=0,S=0;w("z","y","x",-1,-1,s,t,e,u,l,0),w("z","y","x",1,-1,s,t,-e,u,l,1),w("x","z","y",1,1,e,s,t,a,u,2),w("x","z","y",1,-1,e,s,-t,a,u,3),w("x","y","z",1,-1,e,t,s,a,l,4),w("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(g,2));function w(E,y,v,N,D,A,G,F,L,j,b){const R=A/L,z=G/j,le=A/2,ee=G/2,de=F/2,fe=L+1,ae=j+1;let ue=0,B=0;const ce=new K;for(let se=0;se<ae;se++){const U=se*z-ee;for(let k=0;k<fe;k++){const Ee=k*R-le;ce[E]=Ee*N,ce[y]=U*D,ce[v]=de,p.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[v]=F>0?1:-1,_.push(ce.x,ce.y,ce.z),g.push(k/L),g.push(1-se/j),ue+=1}}for(let se=0;se<j;se++)for(let U=0;U<L;U++){const k=x+U+fe*se,Ee=x+U+fe*(se+1),$=x+(U+1)+fe*(se+1),re=x+(U+1)+fe*se;h.push(k,Ee,re),h.push(Ee,$,re),B+=6}d.addGroup(S,B,b),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=to(r[t]);for(const a in s)e[a]=s[a]}return e}function wx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Tx={clone:to,merge:wn};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Yg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new K,Im=new ut,Um=new ut;class ri extends Yg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Im,Um),t.subVectors(Um,Im)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/p,a*=u.width/h,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Vs=1;class Rx extends dn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(zs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new ri(zs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new ri(zs,Vs,e,t);u.layers=this.layers,this.add(u);const d=new ri(zs,Vs,e,t);d.layers=this.layers,this.add(d);const h=new ri(zs,Vs,e,t);h.layers=this.layers,this.add(h);const p=new ri(zs,Vs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(g,x,S),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class $g extends Cn{constructor(e,t,s,a,l,u,d,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,s,a,l,u,d,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new $g(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jo(5,5,5),l=new bi({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Cr});l.uniforms.tEquirect.value=t;const u=new ai(a,l),d=t.minFilter;return t.minFilter===es&&(t.minFilter=oi),new Rx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}const ld=new K,Px=new K,Lx=new ft;class wr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=ld.subVectors(s,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(ld),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Lx.getNormalMatrix(e),a=this.coplanarPoint(ld).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Zl,wl=new K;class Ef{constructor(e=new wr,t=new wr,s=new wr,a=new wr,l=new wr,u=new wr){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i){const s=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],_=a[5],g=a[6],x=a[7],S=a[8],w=a[9],E=a[10],y=a[11],v=a[12],N=a[13],D=a[14],A=a[15];if(s[0].setComponents(h-l,x-p,y-S,A-v).normalize(),s[1].setComponents(h+l,x+p,y+S,A+v).normalize(),s[2].setComponents(h+u,x+_,y+w,A+N).normalize(),s[3].setComponents(h-u,x-_,y-w,A-N).normalize(),s[4].setComponents(h-d,x-g,y-E,A-D).normalize(),t===$i)s[5].setComponents(h+d,x+g,y+E,A+D).normalize();else if(t===Hl)s[5].setComponents(d,g,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qg(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Dx(r){const e=new WeakMap;function t(d,h){const p=d.array,_=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,h,p){const _=h.array,g=h.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<g.length;S++){const w=g[x],E=g[S];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++x,g[x]=E)}g.length=x+1;for(let S=0,w=g.length;S<w;S++){const E=g[S];r.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}class Ql extends li{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(a),p=d+1,_=h+1,g=e/d,x=t/h,S=[],w=[],E=[],y=[];for(let v=0;v<_;v++){const N=v*x-u;for(let D=0;D<p;D++){const A=D*g-l;w.push(A,-N,0),E.push(0,0,1),y.push(D/d),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<d;N++){const D=N+p*v,A=N+p*(v+1),G=N+1+p*(v+1),F=N+1+p*v;S.push(D,A,F),S.push(A,G,F)}this.setIndex(S),this.setAttribute("position",new Bn(w,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ix=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Yx=`#ifdef USE_BUMPMAP
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ny=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,Sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
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
#endif`,Ly=`struct PhysicalMaterial {
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
}`,Dy=`
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,By=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tS=`#ifdef USE_NORMALMAP
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
#endif`,nS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_S=`float getShadowMask() {
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
}`,vS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,yS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
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
#endif`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NS=`uniform sampler2D t2D;
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,VS=`#define DISTANCE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`uniform float scale;
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
}`,XS=`uniform vec3 diffuse;
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
}`,jS=`#include <common>
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
}`,YS=`uniform vec3 diffuse;
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
}`,$S=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,KS=`#define MATCAP
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
}`,ZS=`#define MATCAP
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
}`,QS=`#define NORMAL
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
}`,JS=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,sM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,dM=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Nx,alphahash_pars_fragment:Ix,alphamap_fragment:Ux,alphamap_pars_fragment:Fx,alphatest_fragment:Ox,alphatest_pars_fragment:kx,aomap_fragment:Bx,aomap_pars_fragment:zx,batching_pars_vertex:Vx,batching_vertex:Hx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:jx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Zx,color_fragment:Qx,color_pars_fragment:Jx,color_pars_vertex:ey,color_vertex:ty,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:ry,displacementmap_pars_vertex:sy,displacementmap_vertex:oy,emissivemap_fragment:ay,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:uy,envmap_fragment:dy,envmap_common_pars_fragment:fy,envmap_pars_fragment:hy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ty,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:_y,fog_fragment:vy,fog_pars_fragment:xy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:Sy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Ey,lights_pars_begin:wy,lights_toon_fragment:Ay,lights_toon_pars_fragment:Cy,lights_phong_fragment:Ry,lights_phong_pars_fragment:by,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Ny,lights_fragment_end:Iy,logdepthbuf_fragment:Uy,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:ky,map_fragment:By,map_pars_fragment:zy,map_particle_fragment:Vy,map_particle_pars_fragment:Hy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Wy,morphinstance_vertex:Xy,morphcolor_vertex:jy,morphnormal_vertex:Yy,morphtarget_pars_vertex:$y,morphtarget_vertex:qy,normal_fragment_begin:Ky,normal_fragment_maps:Zy,normal_pars_fragment:Qy,normal_pars_vertex:Jy,normal_vertex:eS,normalmap_pars_fragment:tS,clearcoat_normal_fragment_begin:nS,clearcoat_normal_fragment_maps:iS,clearcoat_pars_fragment:rS,iridescence_pars_fragment:sS,opaque_fragment:oS,packing:aS,premultiplied_alpha_fragment:lS,project_vertex:cS,dithering_fragment:uS,dithering_pars_fragment:dS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:hS,shadowmap_pars_fragment:pS,shadowmap_pars_vertex:mS,shadowmap_vertex:gS,shadowmask_pars_fragment:_S,skinbase_vertex:vS,skinning_pars_vertex:xS,skinning_vertex:yS,skinnormal_vertex:SS,specularmap_fragment:MS,specularmap_pars_fragment:ES,tonemapping_fragment:wS,tonemapping_pars_fragment:TS,transmission_fragment:AS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:bS,uv_vertex:PS,worldpos_vertex:LS,background_vert:DS,background_frag:NS,backgroundCube_vert:IS,backgroundCube_frag:US,cube_vert:FS,cube_frag:OS,depth_vert:kS,depth_frag:BS,distanceRGBA_vert:zS,distanceRGBA_frag:VS,equirect_vert:HS,equirect_frag:GS,linedashed_vert:WS,linedashed_frag:XS,meshbasic_vert:jS,meshbasic_frag:YS,meshlambert_vert:$S,meshlambert_frag:qS,meshmatcap_vert:KS,meshmatcap_frag:ZS,meshnormal_vert:QS,meshnormal_frag:JS,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:rM,meshtoon_frag:sM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:dM},De={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Tl={r:0,b:0,g:0},qr=new Ri,fM=new Wt;function hM(r,e,t,s,a,l,u){const d=new _t(0);let h=l===!0?0:1,p,_,g=null,x=0,S=null;function w(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?t:e).get(D)),D}function E(N){let D=!1;const A=w(N);A===null?v(d,h):A&&A.isColor&&(v(A,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,D){const A=w(D);A&&(A.isCubeTexture||A.mapping===ql)?(_===void 0&&(_=new ai(new Jo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:to(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(D.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(qr)),_.material.toneMapped=wt.getTransfer(A.colorSpace)!==Lt,(g!==A||x!==A.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=A,x=A.version,S=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new ai(new Ql(2,2),new bi({name:"BackgroundMaterial",uniforms:to(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=wt.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||x!==A.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=A,x=A.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(Tl,jg(r)),s.buffers.color.setClear(Tl.r,Tl.g,Tl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),h=D,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,v(d,h)},render:E,addToRenderList:y}}function pM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,u=!1;function d(R,z,le,ee,de){let fe=!1;const ae=g(ee,le,z);l!==ae&&(l=ae,p(l.object)),fe=S(R,ee,le,de),fe&&w(R,ee,le,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(R,z,le,ee),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function g(R,z,le){const ee=le.wireframe===!0;let de=s[R.id];de===void 0&&(de={},s[R.id]=de);let fe=de[z.id];fe===void 0&&(fe={},de[z.id]=fe);let ae=fe[ee];return ae===void 0&&(ae=x(h()),fe[ee]=ae),ae}function x(R){const z=[],le=[],ee=[];for(let de=0;de<t;de++)z[de]=0,le[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:ee,object:R,attributes:{},index:null}}function S(R,z,le,ee){const de=l.attributes,fe=z.attributes;let ae=0;const ue=le.getAttributes();for(const B in ue)if(ue[B].location>=0){const se=de[B];let U=fe[B];if(U===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ee}function w(R,z,le,ee){const de={},fe=z.attributes;let ae=0;const ue=le.getAttributes();for(const B in ue)if(ue[B].location>=0){let se=fe[B];se===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),de[B]=U,ae++}l.attributes=de,l.attributesNum=ae,l.index=ee}function E(){const R=l.newAttributes;for(let z=0,le=R.length;z<le;z++)R[z]=0}function y(R){v(R,0)}function v(R,z){const le=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;le[R]=1,ee[R]===0&&(r.enableVertexAttribArray(R),ee[R]=1),de[R]!==z&&(r.vertexAttribDivisor(R,z),de[R]=z)}function N(){const R=l.newAttributes,z=l.enabledAttributes;for(let le=0,ee=z.length;le<ee;le++)z[le]!==R[le]&&(r.disableVertexAttribArray(le),z[le]=0)}function D(R,z,le,ee,de,fe,ae){ae===!0?r.vertexAttribIPointer(R,z,le,de,fe):r.vertexAttribPointer(R,z,le,ee,de,fe)}function A(R,z,le,ee){E();const de=ee.attributes,fe=le.getAttributes(),ae=z.defaultAttributeValues;for(const ue in fe){const B=fe[ue];if(B.location>=0){let ce=de[ue];if(ce===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const se=ce.normalized,U=ce.itemSize,k=e.get(ce);if(k===void 0)continue;const Ee=k.buffer,$=k.type,re=k.bytesPerElement,ge=$===r.INT||$===r.UNSIGNED_INT||ce.gpuType===mf;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ae=pe.stride,Le=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let $e=0;$e<B.locationSize;$e++)v(B.location+$e,pe.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $e=0;$e<B.locationSize;$e++)y(B.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let $e=0;$e<B.locationSize;$e++)D(B.location+$e,U/B.locationSize,$,se,Ae*re,(Le+U/B.locationSize*$e)*re,ge)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<B.locationSize;pe++)v(B.location+pe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<B.locationSize;pe++)y(B.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let pe=0;pe<B.locationSize;pe++)D(B.location+pe,U/B.locationSize,$,se,U*re,U/B.locationSize*pe*re,ge)}}else if(ae!==void 0){const se=ae[ue];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(B.location,se);break;case 3:r.vertexAttrib3fv(B.location,se);break;case 4:r.vertexAttrib4fv(B.location,se);break;default:r.vertexAttrib1fv(B.location,se)}}}}N()}function G(){j();for(const R in s){const z=s[R];for(const le in z){const ee=z[le];for(const de in ee)_(ee[de].object),delete ee[de];delete z[le]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const z=s[R.id];for(const le in z){const ee=z[le];for(const de in ee)_(ee[de].object),delete ee[de];delete z[le]}delete s[R.id]}function L(R){for(const z in s){const le=s[z];if(le[R.id]===void 0)continue;const ee=le[R.id];for(const de in ee)_(ee[de].object),delete ee[de];delete le[R.id]}}function j(){b(),u=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:y,disableUnusedAttributes:N}}function mM(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function u(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),t.update(_,s,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let w=0;w<g;w++)S+=_[w];t.update(S,s,1)}function h(p,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<p.length;w++)u(p[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let w=0;for(let E=0;E<g;E++)w+=_[E]*x[E];t.update(w,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function gM(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(L){return!(L!==Yn&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const j=L===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ci&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yi&&!j)}function h(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:G,maxSamples:F}}function _M(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new wr,d=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||a;return a=x,s=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,S){const w=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,v=r.get(g);if(!a||w===null||w.length===0||l&&!y)l?_(null):p();else{const N=l?0:s,D=N*4;let A=v.clippingState||null;h.value=A,A=_(w,x,D,S);for(let G=0;G!==D;++G)A[G]=t[G];v.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,x,S,w){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=h.value,w!==!0||y===null){const v=S+E*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,A=S;D!==E;++D,A+=4)u.copy(g[D]).applyMatrix4(N,d),u.normal.toArray(y,A),y[A+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function vM(r){let e=new WeakMap;function t(u,d){return d===Dd?u.mapping=Zs:d===Nd&&(u.mapping=Qs),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Dd||d===Nd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new bx(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Kg extends Yg{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Fm=[.125,.215,.35,.446,.526,.582],Jr=20,cd=new Kg,Om=new _t;let ud=null,dd=0,fd=0,hd=!1;const Zr=(1+Math.sqrt(5))/2,Hs=1/Zr,km=[new K(-Zr,Hs,0),new K(Zr,Hs,0),new K(-Hs,0,Zr),new K(Hs,0,Zr),new K(0,Zr,-Hs),new K(0,Zr,Hs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,fd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Zo,format:Yn,colorSpace:no,depthBuffer:!1},a=zm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(l)),this._blurMaterial=yM(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,s,a){const d=new ri(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Om),_.toneMapping=Rr,_.autoClear=!1;const S=new Gg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),w=new ai(new Jo,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Om),E=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(d.up.set(0,h[v],0),d.lookAt(p[v],0,0)):N===1?(d.up.set(0,0,h[v]),d.lookAt(0,p[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,p[v]));const D=this._cubeSize;Al(a,N*D,v>2?D:0,D,D),_.setRenderTarget(a),E&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Zs||e.mapping===Qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Al(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,cd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=km[(a-l-1)%km.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new ai(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),E=l/w,y=isFinite(l)?1+Math.floor(_*E):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const v=[];let N=0;for(let L=0;L<Jr;++L){const j=L/E,b=Math.exp(-j*j/2);v.push(b),L===0?N+=b:L<y&&(N+=2*b)}for(let L=0;L<v.length;L++)v[L]=v[L]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=w,x.mipInt.value=D-s;const A=this._sizeLods[a],G=3*A*(a>D-Xs?a-D+Xs:0),F=4*(this._cubeSize-A);Al(t,G,F,3*A,2*A),h.setRenderTarget(t),h.render(g,cd)}}function xM(r){const e=[],t=[],s=[];let a=r;const l=r-Xs+1+Fm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>r-Xs?h=Fm[u-r+Xs-1]:u===0&&(h=0),s.push(h);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,w=6,E=3,y=2,v=1,N=new Float32Array(E*w*S),D=new Float32Array(y*w*S),A=new Float32Array(v*w*S);for(let F=0;F<S;F++){const L=F%3*2/3-1,j=F>2?0:-1,b=[L,j,0,L+2/3,j,0,L+2/3,j+1,0,L,j,0,L+2/3,j+1,0,L,j+1,0];N.set(b,E*w*F),D.set(x,y*w*F);const R=[F,F,F,F,F,F];A.set(R,v*w*F)}const G=new li;G.setAttribute("position",new qt(N,E)),G.setAttribute("uv",new qt(D,y)),G.setAttribute("faceIndex",new qt(A,v)),e.push(G),a>Xs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function zm(r,e,t){const s=new Pr(r,e,t);return s.texture.mapping=ql,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Al(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function yM(r,e,t){const s=new Float32Array(Jr),a=new K(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wf(),fragmentShader:`

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
	`}function SM(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,p=h===Dd||h===Nd,_=h===Zs||h===Qs;if(p||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new Bm(r)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Bm(r)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function MM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Xo("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function EM(r,e,t,s){const a={},l=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const E=x.morphAttributes[w];for(let y=0,v=E.length;y<v;y++)e.remove(E[y])}x.removeEventListener("dispose",u),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const w in x)e.update(x[w],r.ARRAY_BUFFER);const S=g.morphAttributes;for(const w in S){const E=S[w];for(let y=0,v=E.length;y<v;y++)e.update(E[y],r.ARRAY_BUFFER)}}function p(g){const x=[],S=g.index,w=g.attributes.position;let E=0;if(S!==null){const N=S.array;E=S.version;for(let D=0,A=N.length;D<A;D+=3){const G=N[D+0],F=N[D+1],L=N[D+2];x.push(G,F,F,L,L,G)}}else if(w!==void 0){const N=w.array;E=w.version;for(let D=0,A=N.length/3-1;D<A;D+=3){const G=D+0,F=D+1,L=D+2;x.push(G,F,F,L,L,G)}}else return;const y=new(kg(x)?Xg:Wg)(x,1);y.version=E;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:_}}function wM(r,e,t){let s;function a(x){s=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*u),t.update(S,s,1)}function p(x,S,w){w!==0&&(r.drawElementsInstanced(s,S,l,x*u,w),t.update(S,s,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,w);let y=0;for(let v=0;v<w;v++)y+=S[v];t.update(y,s,1)}function g(x,S,w,E){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/u,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,E,0,w);let v=0;for(let N=0;N<w;N++)v+=S[N]*E[N];t.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function TM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function AM(r,e,t){const s=new WeakMap,a=new Bt;function l(u,d,h){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let R=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let A=0;w===!0&&(A=1),E===!0&&(A=2),y===!0&&(A=3);let G=d.attributes.position.count*A,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const L=new Float32Array(G*F*4*g),j=new zg(L,G,F,g);j.type=Yi,j.needsUpdate=!0;const b=A*4;for(let z=0;z<g;z++){const le=v[z],ee=N[z],de=D[z],fe=G*F*4*z;for(let ae=0;ae<le.count;ae++){const ue=ae*b;w===!0&&(a.fromBufferAttribute(le,ae),L[fe+ue+0]=a.x,L[fe+ue+1]=a.y,L[fe+ue+2]=a.z,L[fe+ue+3]=0),E===!0&&(a.fromBufferAttribute(ee,ae),L[fe+ue+4]=a.x,L[fe+ue+5]=a.y,L[fe+ue+6]=a.z,L[fe+ue+7]=0),y===!0&&(a.fromBufferAttribute(de,ae),L[fe+ue+8]=a.x,L[fe+ue+9]=a.y,L[fe+ue+10]=a.z,L[fe+ue+11]=de.itemSize===4?a.w:1)}}x={count:g,texture:j,size:new ut(G,F)},s.set(d,x),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const E=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function CM(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Zg extends Cn{constructor(e,t,s,a,l,u,d,h,p,_=$s){if(_!==$s&&_!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===$s&&(s=ts),s===void 0&&_===eo&&(s=Js),super(null,a,l,u,d,h,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qg=new Cn,Gm=new Zg(1,1),Jg=new zg,e_=new hx,t_=new $g,Wm=[],Xm=[],jm=new Float32Array(16),Ym=new Float32Array(9),$m=new Float32Array(4);function ro(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Wm[a];if(l===void 0&&(l=new Float32Array(a),Wm[a]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Jl(r,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function RM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function PM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function DM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),rn(t,s)}}function NM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Ym.set(s),r.uniformMatrix3fv(this.addr,!1,Ym),rn(t,s)}}function IM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;jm.set(s),r.uniformMatrix4fv(this.addr,!1,jm),rn(t,s)}}function UM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function GM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Gm.compareFunction=Og,l=Gm):l=Qg,t.setTexture2D(e||l,a)}function WM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||e_,a)}function XM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||t_,a)}function jM(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Jg,a)}function YM(r){switch(r){case 5126:return RM;case 35664:return bM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return kM;case 5125:return BM;case 36294:return zM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}function $M(r,e){r.uniform1fv(this.addr,e)}function qM(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function KM(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function ZM(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function QM(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function JM(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eE(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tE(r,e){r.uniform1iv(this.addr,e)}function nE(r,e){r.uniform2iv(this.addr,e)}function iE(r,e){r.uniform3iv(this.addr,e)}function rE(r,e){r.uniform4iv(this.addr,e)}function sE(r,e){r.uniform1uiv(this.addr,e)}function oE(r,e){r.uniform2uiv(this.addr,e)}function aE(r,e){r.uniform3uiv(this.addr,e)}function lE(r,e){r.uniform4uiv(this.addr,e)}function cE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Qg,l[u])}function uE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||e_,l[u])}function dE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||t_,l[u])}function fE(r,e,t){const s=this.cache,a=e.length,l=Jl(t,a);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Jg,l[u])}function hE(r){switch(r){case 5126:return $M;case 35664:return qM;case 35665:return KM;case 35666:return ZM;case 35674:return QM;case 35675:return JM;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return oE;case 36295:return aE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return fE}}class pE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class mE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function qm(r,e){r.seq.push(e),r.map[e.id]=e}function _E(r,e,t){const s=r.name,a=s.length;for(pd.lastIndex=0;;){const l=pd.exec(s),u=pd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){qm(t,p===void 0?new pE(d,r,e):new mE(d,r,e));break}else{let g=t.map[d];g===void 0&&(g=new gE(d),qm(t,g)),t=g}}}class Vl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);_E(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function Km(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const vE=37297;let xE=0;function yE(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const Zm=new ft;function SE(r){wt._getMatrix(Zm,wt.workingColorSpace,r);const e=`mat3( ${Zm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case Kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+yE(r.getShaderSource(e),u)}else return a}function ME(r,e){const t=SE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function EE(r,e){let t;switch(e){case B0:t="Linear";break;case z0:t="Reinhard";break;case V0:t="Cineon";break;case H0:t="ACESFilmic";break;case W0:t="AgX";break;case X0:t="Neutral";break;case G0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new K;function wE(){wt.getLuminanceCoefficients(Cl);const r=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function AE(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function CE(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function jo(r){return r!==""}function Jm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RE=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(r){return r.replace(RE,PE)}const bE=new Map;function PE(r,e){let t=ht[e];if(t===void 0){const s=bE.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(r){return r.replace(LE,DE)}function DE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ng(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function NE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function IE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function FE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function OE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function kE(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=NE(t),p=IE(t),_=UE(t),g=FE(t),x=OE(t),S=TE(t),w=AE(l),E=a.createProgram();let y,v,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(jo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(y=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Rr?EE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),wE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),u=uf(u),u=Jm(u,t),u=eg(u,t),d=uf(d),d=Jm(d,t),d=eg(d,t),u=tg(u),d=tg(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=N+y+u,A=N+v+d,G=Km(a,a.VERTEX_SHADER,D),F=Km(a,a.FRAGMENT_SHADER,A);a.attachShader(E,G),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function L(z){if(r.debug.checkShaderErrors){const le=a.getProgramInfoLog(E).trim(),ee=a.getShaderInfoLog(G).trim(),de=a.getShaderInfoLog(F).trim();let fe=!0,ae=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,E,G,F);else{const ue=Qm(a,G,"vertex"),B=Qm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+ue+`
`+B)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ee===""||de==="")&&(ae=!1);ae&&(z.diagnostics={runnable:fe,programLog:le,vertexShader:{log:ee,prefix:y},fragmentShader:{log:de,prefix:v}})}a.deleteShader(G),a.deleteShader(F),j=new Vl(a,E),b=CE(a,E)}let j;this.getUniforms=function(){return j===void 0&&L(this),j};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(E,vE)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=G,this.fragmentShader=F,this}let BE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new VE(e),t.set(e,s)),s}}class VE{constructor(e){this.id=BE++,this.code=e,this.usedTimes=0}}function HE(r,e,t,s,a,l,u){const d=new Vg,h=new zE,p=new Set,_=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,z,le,ee){const de=le.fog,fe=ee.geometry,ae=b.isMeshStandardMaterial?le.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),B=ue&&ue.mapping===ql?ue.image.height:null,ce=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=se!==void 0?se.length:0;let k=0;fe.morphAttributes.position!==void 0&&(k=1),fe.morphAttributes.normal!==void 0&&(k=2),fe.morphAttributes.color!==void 0&&(k=3);let Ee,$,re,ge;if(ce){const Mt=Ai[ce];Ee=Mt.vertexShader,$=Mt.fragmentShader}else Ee=b.vertexShader,$=b.fragmentShader,h.update(b),re=h.getVertexShaderID(b),ge=h.getFragmentShaderID(b);const pe=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Le=ee.isInstancedMesh===!0,$e=ee.isBatchedMesh===!0,Rt=!!b.map,lt=!!b.matcap,St=!!ue,W=!!b.aoMap,Kt=!!b.lightMap,dt=!!b.bumpMap,at=!!b.normalMap,Ke=!!b.displacementMap,xt=!!b.emissiveMap,Ge=!!b.metalnessMap,P=!!b.roughnessMap,T=b.anisotropy>0,J=b.clearcoat>0,_e=b.dispersion>0,ye=b.iridescence>0,he=b.sheen>0,We=b.transmission>0,be=T&&!!b.anisotropyMap,Fe=J&&!!b.clearcoatMap,pt=J&&!!b.clearcoatNormalMap,we=J&&!!b.clearcoatRoughnessMap,ke=ye&&!!b.iridescenceMap,Je=ye&&!!b.iridescenceThicknessMap,tt=he&&!!b.sheenColorMap,Be=he&&!!b.sheenRoughnessMap,mt=!!b.specularMap,st=!!b.specularColorMap,bt=!!b.specularIntensityMap,H=We&&!!b.transmissionMap,Pe=We&&!!b.thicknessMap,oe=!!b.gradientMap,me=!!b.alphaMap,Ie=b.alphaTest>0,Ne=!!b.alphaHash,ot=!!b.extensions;let Ft=Rr;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const Zt={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Ee,fragmentShader:$,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:$e,batchingColor:$e&&ee._colorsTexture!==null,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,instancingMorph:Le&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:no,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:lt,envMap:St,envMapMode:St&&ue.mapping,envMapCubeUVHeight:B,aoMap:W,lightMap:Kt,bumpMap:dt,normalMap:at,displacementMap:x&&Ke,emissiveMap:xt,normalMapObjectSpace:at&&b.normalMapType===q0,normalMapTangentSpace:at&&b.normalMapType===Sf,metalnessMap:Ge,roughnessMap:P,anisotropy:T,anisotropyMap:be,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:pt,clearcoatRoughnessMap:we,dispersion:_e,iridescence:ye,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:bt,transmission:We,transmissionMap:H,thicknessMap:Pe,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:Ne,combine:b.combine,mapUv:Rt&&E(b.map.channel),aoMapUv:W&&E(b.aoMap.channel),lightMapUv:Kt&&E(b.lightMap.channel),bumpMapUv:dt&&E(b.bumpMap.channel),normalMapUv:at&&E(b.normalMap.channel),displacementMapUv:Ke&&E(b.displacementMap.channel),emissiveMapUv:xt&&E(b.emissiveMap.channel),metalnessMapUv:Ge&&E(b.metalnessMap.channel),roughnessMapUv:P&&E(b.roughnessMap.channel),anisotropyMapUv:be&&E(b.anisotropyMap.channel),clearcoatMapUv:Fe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(b.sheenRoughnessMap.channel),specularMapUv:mt&&E(b.specularMap.channel),specularColorMapUv:st&&E(b.specularColorMap.channel),specularIntensityMapUv:bt&&E(b.specularIntensityMap.channel),transmissionMapUv:H&&E(b.transmissionMap.channel),thicknessMapUv:Pe&&E(b.thicknessMap.channel),alphaMapUv:me&&E(b.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(at||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!fe.attributes.uv&&(Rt||me),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:k,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:xt&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jn,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function v(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(N(R,b),D(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function N(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function D(b,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),b.push(d.mask)}function A(b){const R=w[b.type];let z;if(R){const le=Ai[R];z=Tx.clone(le.uniforms)}else z=b.uniforms;return z}function G(b,R){let z;for(let le=0,ee=_.length;le<ee;le++){const de=_[le];if(de.cacheKey===R){z=de,++z.usedTimes;break}}return z===void 0&&(z=new kE(r,R,b,l),_.push(z)),z}function F(b){if(--b.usedTimes===0){const R=_.indexOf(b);_[R]=_[_.length-1],_.pop(),b.destroy()}}function L(b){h.remove(b)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:A,acquireProgram:G,releaseProgram:F,releaseShaderCache:L,programs:_,dispose:j}}function GE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function a(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function WE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(g,x,S,w,E,y){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:w,renderOrder:g.renderOrder,z:E,group:y},r[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=w,v.renderOrder=g.renderOrder,v.z=E,v.group=y),e++,v}function d(g,x,S,w,E,y){const v=u(g,x,S,w,E,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,x,S,w,E,y){const v=u(g,x,S,w,E,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||WE),s.length>1&&s.sort(x||ig),a.length>1&&a.sort(x||ig)}function _(){for(let g=e,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:_,sort:p}}function XE(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new rg,r.set(s,[u])):a>=l.length?(u=new rg,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function jE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new _t};break;case"SpotLight":t={position:new K,direction:new K,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function YE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $E=0;function qE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KE(r){const e=new jE,t=YE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const a=new K,l=new Wt,u=new Wt;function d(p){let _=0,g=0,x=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,w=0,E=0,y=0,v=0,N=0,D=0,A=0,G=0,F=0,L=0;p.sort(qE);for(let b=0,R=p.length;b<R;b++){const z=p[b],le=z.color,ee=z.intensity,de=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=le.r*ee,g+=le.g*ee,x+=le.b*ee;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(z.sh.coefficients[ae],ee);L++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,s.directionalShadow[S]=B,s.directionalShadowMap[S]=fe,s.directionalShadowMatrix[S]=z.shadow.matrix,N++}s.directional[S]=ae,S++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(le).multiplyScalar(ee),ae.distance=de,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,s.spot[E]=ae;const ue=z.shadow;if(z.map&&(s.spotLightMap[G]=z.map,G++,ue.updateMatrices(z),z.castShadow&&F++),s.spotLightMatrix[E]=ue.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,s.spotShadow[E]=B,s.spotShadowMap[E]=fe,A++}E++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(le).multiplyScalar(ee),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=ae,y++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ue=z.shadow,B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,s.pointShadow[w]=B,s.pointShadowMap[w]=fe,s.pointShadowMatrix[w]=z.shadow.matrix,D++}s.point[w]=ae,w++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(ee),ae.groundColor.copy(z.groundColor).multiplyScalar(ee),s.hemi[v]=ae,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==S||j.pointLength!==w||j.spotLength!==E||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==N||j.numPointShadows!==D||j.numSpotShadows!==A||j.numSpotMaps!==G||j.numLightProbes!==L)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=y,s.point.length=w,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=A+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=L,j.directionalLength=S,j.pointLength=w,j.spotLength=E,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=N,j.numPointShadows=D,j.numSpotShadows=A,j.numSpotMaps=G,j.numLightProbes=L,s.version=$E++)}function h(p,_){let g=0,x=0,S=0,w=0,E=0;const y=_.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const D=p[v];if(D.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),g++}else if(D.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const A=s.rectArea[w];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),u.identity(),l.copy(D.matrixWorld),l.premultiply(y),u.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const A=s.point[x];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const A=s.hemi[E];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:d,setupView:h,state:s}}function sg(r){const e=new KE(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function u(_){s.push(_)}function d(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function ZE(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new sg(r),e.set(a,[d])):l>=u.length?(d=new sg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class QE extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
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
}`;function nw(r,e,t){let s=new Ef;const a=new ut,l=new ut,u=new Bt,d=new QE({depthPacking:$0}),h=new JE,p={},_=t.maxTextureSize,g={[br]:kn,[kn]:br,[jn]:jn},x=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new li;w.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ai(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tg;let v=this.type;this.render=function(F,L,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),le=r.state;le.setBlending(Cr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=v!==ji&&this.type===ji,de=v===ji&&this.type!==ji;for(let fe=0,ae=F.length;fe<ae;fe++){const ue=F[fe],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ce=B.getFrameExtents();if(a.multiply(ce),l.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ce.x),a.x=l.x*ce.x,B.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ce.y),a.y=l.y*ce.y,B.mapSize.y=l.y)),B.map===null||ee===!0||de===!0){const U=this.type!==ji?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new Pr(a.x,a.y,U),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const k=B.getViewport(U);u.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),le.viewport(u),B.updateMatrices(ue,U),s=B.getFrustum(),A(L,j,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===ji&&N(B,j),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(b,R,z)};function N(F,L){const j=e.update(E);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pr(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(L,null,j,x,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(L,null,j,S,E,null)}function D(F,L,j,b){let R=null;const z=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?h:d,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const le=R.uuid,ee=L.uuid;let de=p[le];de===void 0&&(de={},p[le]=de);let fe=de[ee];fe===void 0&&(fe=R.clone(),de[ee]=fe,L.addEventListener("dispose",G)),R=fe}if(R.visible=L.visible,R.wireframe=L.wireframe,b===ji?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:g[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=r.properties.get(R);le.light=j}return R}function A(F,L,j,b,R){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ji)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),de=F.material;if(Array.isArray(de)){const fe=ee.groups;for(let ae=0,ue=fe.length;ae<ue;ae++){const B=fe[ae],ce=de[B.materialIndex];if(ce&&ce.visible){const se=D(F,ce,b,R);F.onBeforeShadow(r,F,L,j,ee,se,B),r.renderBufferDirect(j,null,ee,se,F,B),F.onAfterShadow(r,F,L,j,ee,se,B)}}}else if(de.visible){const fe=D(F,de,b,R);F.onBeforeShadow(r,F,L,j,ee,fe,null),r.renderBufferDirect(j,null,ee,fe,F,null),F.onAfterShadow(r,F,L,j,ee,fe,null)}}const le=F.children;for(let ee=0,de=le.length;ee<de;ee++)A(le[ee],L,j,b,R)}function G(F){F.target.removeEventListener("dispose",G);for(const j in p){const b=p[j],R=F.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const iw={[Td]:Ad,[Cd]:Pd,[Rd]:Ld,[Ks]:bd,[Ad]:Td,[Pd]:Cd,[Ld]:Rd,[bd]:Ks};function rw(r,e){function t(){let H=!1;const Pe=new Bt;let oe=null;const me=new Bt(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!H&&(r.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,Ne,ot,Ft,Zt){Zt===!0&&(Ie*=Ft,Ne*=Ft,ot*=Ft),Pe.set(Ie,Ne,ot,Ft),me.equals(Pe)===!1&&(r.clearColor(Ie,Ne,ot,Ft),me.copy(Pe))},reset:function(){H=!1,oe=null,me.set(-1,0,0,0)}}}function s(){let H=!1,Pe=!1,oe=null,me=null,Ie=null;return{setReversed:function(Ne){if(Pe!==Ne){const ot=e.get("EXT_clip_control");Pe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?pe(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Ne){oe!==Ne&&!H&&(r.depthMask(Ne),oe=Ne)},setFunc:function(Ne){if(Pe&&(Ne=iw[Ne]),me!==Ne){switch(Ne){case Td:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Cd:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Rd:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Pd:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Ie!==Ne&&(Pe&&(Ne=1-Ne),r.clearDepth(Ne),Ie=Ne)},reset:function(){H=!1,oe=null,me=null,Ie=null,Pe=!1}}}function a(){let H=!1,Pe=null,oe=null,me=null,Ie=null,Ne=null,ot=null,Ft=null,Zt=null;return{setTest:function(Mt){H||(Mt?pe(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!H&&(r.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,Rn,yn){(oe!==Mt||me!==Rn||Ie!==yn)&&(r.stencilFunc(Mt,Rn,yn),oe=Mt,me=Rn,Ie=yn)},setOp:function(Mt,Rn,yn){(Ne!==Mt||ot!==Rn||Ft!==yn)&&(r.stencilOp(Mt,Rn,yn),Ne=Mt,ot=Rn,Ft=yn)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Zt!==Mt&&(r.clearStencil(Mt),Zt=Mt)},reset:function(){H=!1,Pe=null,oe=null,me=null,Ie=null,Ne=null,ot=null,Ft=null,Zt=null}}}const l=new t,u=new s,d=new a,h=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],w=null,E=!1,y=null,v=null,N=null,D=null,A=null,G=null,F=null,L=new _t(0,0,0),j=0,b=!1,R=null,z=null,le=null,ee=null,de=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),ae=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ae=ue>=2);let ce=null,se={};const U=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),Ee=new Bt().fromArray(U),$=new Bt().fromArray(k);function re(H,Pe,oe,me){const Ie=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(H,Ne),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<oe;ot++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Pe+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ne}const ge={};ge[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(r.DEPTH_TEST),u.setFunc(Ks),dt(!1),at(cm),pe(r.CULL_FACE),W(Cr);function pe(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function Le(H,Pe){return g[H]!==Pe?(r.bindFramebuffer(H,Pe),g[H]=Pe,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function $e(H,Pe){let oe=S,me=!1;if(H){oe=x.get(Pe),oe===void 0&&(oe=[],x.set(Pe,oe));const Ie=H.textures;if(oe.length!==Ie.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,ot=Ie.length;Ne<ot;Ne++)oe[Ne]=r.COLOR_ATTACHMENT0+Ne;oe.length=Ie.length,me=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,me=!0);me&&r.drawBuffers(oe)}function Rt(H){return w!==H?(r.useProgram(H),w=H,!0):!1}const lt={[Qr]:r.FUNC_ADD,[y0]:r.FUNC_SUBTRACT,[S0]:r.FUNC_REVERSE_SUBTRACT};lt[M0]=r.MIN,lt[E0]=r.MAX;const St={[w0]:r.ZERO,[T0]:r.ONE,[A0]:r.SRC_COLOR,[Ed]:r.SRC_ALPHA,[D0]:r.SRC_ALPHA_SATURATE,[P0]:r.DST_COLOR,[R0]:r.DST_ALPHA,[C0]:r.ONE_MINUS_SRC_COLOR,[wd]:r.ONE_MINUS_SRC_ALPHA,[L0]:r.ONE_MINUS_DST_COLOR,[b0]:r.ONE_MINUS_DST_ALPHA,[N0]:r.CONSTANT_COLOR,[I0]:r.ONE_MINUS_CONSTANT_COLOR,[U0]:r.CONSTANT_ALPHA,[F0]:r.ONE_MINUS_CONSTANT_ALPHA};function W(H,Pe,oe,me,Ie,Ne,ot,Ft,Zt,Mt){if(H===Cr){E===!0&&(Ae(r.BLEND),E=!1);return}if(E===!1&&(pe(r.BLEND),E=!0),H!==x0){if(H!==y||Mt!==b){if((v!==Qr||A!==Qr)&&(r.blendEquation(r.FUNC_ADD),v=Qr,A=Qr),Mt)switch(H){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.ONE,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,D=null,G=null,F=null,L.set(0,0,0),j=0,y=H,b=Mt}return}Ie=Ie||Pe,Ne=Ne||oe,ot=ot||me,(Pe!==v||Ie!==A)&&(r.blendEquationSeparate(lt[Pe],lt[Ie]),v=Pe,A=Ie),(oe!==N||me!==D||Ne!==G||ot!==F)&&(r.blendFuncSeparate(St[oe],St[me],St[Ne],St[ot]),N=oe,D=me,G=Ne,F=ot),(Ft.equals(L)===!1||Zt!==j)&&(r.blendColor(Ft.r,Ft.g,Ft.b,Zt),L.copy(Ft),j=Zt),y=H,b=!1}function Kt(H,Pe){H.side===jn?Ae(r.CULL_FACE):pe(r.CULL_FACE);let oe=H.side===kn;Pe&&(oe=!oe),dt(oe),H.blending===Ys&&H.transparent===!1?W(Cr):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const me=H.stencilWrite;d.setTest(me),me&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),xt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function at(H){H!==g0?(pe(r.CULL_FACE),H!==z&&(H===cm?r.cullFace(r.BACK):H===_0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),z=H}function Ke(H){H!==le&&(ae&&r.lineWidth(H),le=H)}function xt(H,Pe,oe){H?(pe(r.POLYGON_OFFSET_FILL),(ee!==Pe||de!==oe)&&(r.polygonOffset(Pe,oe),ee=Pe,de=oe)):Ae(r.POLYGON_OFFSET_FILL)}function Ge(H){H?pe(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function P(H){H===void 0&&(H=r.TEXTURE0+fe-1),ce!==H&&(r.activeTexture(H),ce=H)}function T(H,Pe,oe){oe===void 0&&(ce===null?oe=r.TEXTURE0+fe-1:oe=ce);let me=se[oe];me===void 0&&(me={type:void 0,texture:void 0},se[oe]=me),(me.type!==H||me.texture!==Pe)&&(ce!==oe&&(r.activeTexture(oe),ce=oe),r.bindTexture(H,Pe||ge[H]),me.type=H,me.texture=Pe)}function J(){const H=se[ce];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pt(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(H){Ee.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function Be(H){$.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),$.copy(H))}function mt(H,Pe){let oe=p.get(Pe);oe===void 0&&(oe=new WeakMap,p.set(Pe,oe));let me=oe.get(H);me===void 0&&(me=r.getUniformBlockIndex(Pe,H.name),oe.set(H,me))}function st(H,Pe){const me=p.get(Pe).get(H);h.get(Pe)!==me&&(r.uniformBlockBinding(Pe,me,H.__bindingPointIndex),h.set(Pe,me))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ce=null,se={},g={},x=new WeakMap,S=[],w=null,E=!1,y=null,v=null,N=null,D=null,A=null,G=null,F=null,L=new _t(0,0,0),j=0,b=!1,R=null,z=null,le=null,ee=null,de=null,Ee.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:pe,disable:Ae,bindFramebuffer:Le,drawBuffers:$e,useProgram:Rt,setBlending:W,setMaterial:Kt,setFlipSided:dt,setCullFace:at,setLineWidth:Ke,setPolygonOffset:xt,setScissorTest:Ge,activeTexture:P,bindTexture:T,unbindTexture:J,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:ke,texImage3D:Je,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:pt,texStorage3D:we,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:be,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:bt}}function og(r,e,t,s){const a=sw(s);switch(t){case Pg:return r*e;case Dg:return r*e;case Ng:return r*e*2;case Ig:return r*e/a.components*a.byteLength;case vf:return r*e/a.components*a.byteLength;case Ug:return r*e*2/a.components*a.byteLength;case xf:return r*e*2/a.components*a.byteLength;case Lg:return r*e*3/a.components*a.byteLength;case Yn:return r*e*4/a.components*a.byteLength;case yf:return r*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:case Bd:return Math.max(r,16)*Math.max(e,8)/4;case Fd:case kd:return Math.max(r,8)*Math.max(e,8)/2;case zd:case Vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zl:case rf:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fg:case of:return Math.ceil(r/4)*Math.ceil(e/4)*8;case af:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sw(r){switch(r){case Ci:case Cg:return{byteLength:1,components:1};case $o:case Rg:case Zo:return{byteLength:2,components:1};case gf:case _f:return{byteLength:2,components:4};case ts:case mf:case Yi:return{byteLength:4,components:1};case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ow(r,e,t,s,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return S?new OffscreenCanvas(P,T):Gl("canvas")}function E(P,T,J){let _e=1;const ye=Ge(P);if((ye.width>J||ye.height>J)&&(_e=J/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(_e*ye.width),We=Math.floor(_e*ye.height);g===void 0&&(g=w(he,We));const be=T?w(he,We):g;return be.width=he,be.height=We,be.getContext("2d").drawImage(P,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+We+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,T,J,_e,ye=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=T;if(T===r.RED&&(J===r.FLOAT&&(he=r.R32F),J===r.HALF_FLOAT&&(he=r.R16F),J===r.UNSIGNED_BYTE&&(he=r.R8)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.R8UI),J===r.UNSIGNED_SHORT&&(he=r.R16UI),J===r.UNSIGNED_INT&&(he=r.R32UI),J===r.BYTE&&(he=r.R8I),J===r.SHORT&&(he=r.R16I),J===r.INT&&(he=r.R32I)),T===r.RG&&(J===r.FLOAT&&(he=r.RG32F),J===r.HALF_FLOAT&&(he=r.RG16F),J===r.UNSIGNED_BYTE&&(he=r.RG8)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RG8UI),J===r.UNSIGNED_SHORT&&(he=r.RG16UI),J===r.UNSIGNED_INT&&(he=r.RG32UI),J===r.BYTE&&(he=r.RG8I),J===r.SHORT&&(he=r.RG16I),J===r.INT&&(he=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGB8UI),J===r.UNSIGNED_SHORT&&(he=r.RGB16UI),J===r.UNSIGNED_INT&&(he=r.RGB32UI),J===r.BYTE&&(he=r.RGB8I),J===r.SHORT&&(he=r.RGB16I),J===r.INT&&(he=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),J===r.UNSIGNED_INT&&(he=r.RGBA32UI),J===r.BYTE&&(he=r.RGBA8I),J===r.SHORT&&(he=r.RGBA16I),J===r.INT&&(he=r.RGBA32I)),T===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),T===r.RGBA){const We=ye?Kl:wt.getTransfer(_e);J===r.FLOAT&&(he=r.RGBA32F),J===r.HALF_FLOAT&&(he=r.RGBA16F),J===r.UNSIGNED_BYTE&&(he=We===Lt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function A(P,T){let J;return P?T===null||T===ts||T===Js?J=r.DEPTH24_STENCIL8:T===Yi?J=r.DEPTH32F_STENCIL8:T===$o&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===Js?J=r.DEPTH_COMPONENT24:T===Yi?J=r.DEPTH_COMPONENT32F:T===$o&&(J=r.DEPTH_COMPONENT16),J}function G(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){const T=P.target;T.removeEventListener("dispose",F),j(T),T.isVideoTexture&&_.delete(T)}function L(P){const T=P.target;T.removeEventListener("dispose",L),R(T)}function j(P){const T=s.get(P);if(T.__webglInit===void 0)return;const J=P.source,_e=x.get(J);if(_e){const ye=_e[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&b(P),Object.keys(_e).length===0&&x.delete(J)}s.remove(P)}function b(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const J=P.source,_e=x.get(J);delete _e[T.__cacheKey],u.memory.textures--}function R(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let ye=0;ye<T.__webglFramebuffer[_e].length;ye++)r.deleteFramebuffer(T.__webglFramebuffer[_e][ye]);else r.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)r.deleteFramebuffer(T.__webglFramebuffer[_e]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=P.textures;for(let _e=0,ye=J.length;_e<ye;_e++){const he=s.get(J[_e]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),u.memory.textures--),s.remove(J[_e])}s.remove(P)}let z=0;function le(){z=0}function ee(){const P=z;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),z+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function fe(P,T){const J=s.get(P);if(P.isVideoTexture&&Ke(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const _e=P.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,P,T);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function ae(P,T){const J=s.get(P);if(P.version>0&&J.__version!==P.version){$(J,P,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function ue(P,T){const J=s.get(P);if(P.version>0&&J.__version!==P.version){$(J,P,T);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function B(P,T){const J=s.get(P);if(P.version>0&&J.__version!==P.version){re(J,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const ce={[Id]:r.REPEAT,[Ar]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},se={[An]:r.NEAREST,[j0]:r.NEAREST_MIPMAP_NEAREST,[al]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Vu]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},U={[K0]:r.NEVER,[nx]:r.ALWAYS,[Z0]:r.LESS,[Og]:r.LEQUAL,[Q0]:r.EQUAL,[tx]:r.GEQUAL,[J0]:r.GREATER,[ex]:r.NOTEQUAL};function k(P,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===Vu||T.magFilter===al||T.magFilter===es||T.minFilter===oi||T.minFilter===Vu||T.minFilter===al||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ce[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ce[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ce[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==al&&T.minFilter!==es||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(P,T){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));const _e=T.source;let ye=x.get(_e);ye===void 0&&(ye={},x.set(_e,ye));const he=de(T);if(he!==P.__cacheKey){ye[he]===void 0&&(ye[he]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ye[he].usedTimes++;const We=ye[P.__cacheKey];We!==void 0&&(ye[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(T)),P.__cacheKey=he,P.__webglTexture=ye[he].texture}return J}function $(P,T,J){let _e=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=r.TEXTURE_3D);const ye=Ee(P,T),he=T.source;t.bindTexture(_e,P.__webglTexture,r.TEXTURE0+J);const We=s.get(he);if(he.version!==We.__version||ye===!0){t.activeTexture(r.TEXTURE0+J);const be=wt.getPrimaries(wt.workingColorSpace),Fe=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),pt=T.colorSpace===Tr||be===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let we=E(T.image,!1,a.maxTextureSize);we=xt(T,we);const ke=l.convert(T.format,T.colorSpace),Je=l.convert(T.type);let tt=D(T.internalFormat,ke,Je,T.colorSpace,T.isVideoTexture);k(_e,T);let Be;const mt=T.mipmaps,st=T.isVideoTexture!==!0,bt=We.__version===void 0||ye===!0,H=he.dataReady,Pe=G(T,we);if(T.isDepthTexture)tt=A(T.format===eo,T.type),bt&&(st?t.texStorage2D(r.TEXTURE_2D,1,tt,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,tt,we.width,we.height,0,ke,Je,null));else if(T.isDataTexture)if(mt.length>0){st&&bt&&t.texStorage2D(r.TEXTURE_2D,Pe,tt,mt[0].width,mt[0].height);for(let oe=0,me=mt.length;oe<me;oe++)Be=mt[oe],st?H&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,oe,tt,Be.width,Be.height,0,ke,Je,Be.data);T.generateMipmaps=!1}else st?(bt&&t.texStorage2D(r.TEXTURE_2D,Pe,tt,we.width,we.height),H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,ke,Je,we.data)):t.texImage2D(r.TEXTURE_2D,0,tt,we.width,we.height,0,ke,Je,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,tt,mt[0].width,mt[0].height,we.depth);for(let oe=0,me=mt.length;oe<me;oe++)if(Be=mt[oe],T.format!==Yn)if(ke!==null)if(st){if(H)if(T.layerUpdates.size>0){const Ie=og(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const ot=Be.data.subarray(Ne*Ie/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Ne,Be.width,Be.height,1,ke,ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,we.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,tt,Be.width,Be.height,we.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,we.depth,ke,Je,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,tt,Be.width,Be.height,we.depth,0,ke,Je,Be.data)}else{st&&bt&&t.texStorage2D(r.TEXTURE_2D,Pe,tt,mt[0].width,mt[0].height);for(let oe=0,me=mt.length;oe<me;oe++)Be=mt[oe],T.format!==Yn?ke!==null?st?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,oe,tt,Be.width,Be.height,0,ke,Je,Be.data)}else if(T.isDataArrayTexture)if(st){if(bt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,tt,we.width,we.height,we.depth),H)if(T.layerUpdates.size>0){const oe=og(we.width,we.height,T.format,T.type);for(const me of T.layerUpdates){const Ie=we.data.subarray(me*oe/we.data.BYTES_PER_ELEMENT,(me+1)*oe/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,ke,Je,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ke,Je,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,we.width,we.height,we.depth,0,ke,Je,we.data);else if(T.isData3DTexture)st?(bt&&t.texStorage3D(r.TEXTURE_3D,Pe,tt,we.width,we.height,we.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ke,Je,we.data)):t.texImage3D(r.TEXTURE_3D,0,tt,we.width,we.height,we.depth,0,ke,Je,we.data);else if(T.isFramebufferTexture){if(bt)if(st)t.texStorage2D(r.TEXTURE_2D,Pe,tt,we.width,we.height);else{let oe=we.width,me=we.height;for(let Ie=0;Ie<Pe;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,tt,oe,me,0,ke,Je,null),oe>>=1,me>>=1}}else if(mt.length>0){if(st&&bt){const oe=Ge(mt[0]);t.texStorage2D(r.TEXTURE_2D,Pe,tt,oe.width,oe.height)}for(let oe=0,me=mt.length;oe<me;oe++)Be=mt[oe],st?H&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ke,Je,Be):t.texImage2D(r.TEXTURE_2D,oe,tt,ke,Je,Be);T.generateMipmaps=!1}else if(st){if(bt){const oe=Ge(we);t.texStorage2D(r.TEXTURE_2D,Pe,tt,oe.width,oe.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Je,we)}else t.texImage2D(r.TEXTURE_2D,0,tt,ke,Je,we);y(T)&&v(_e),We.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function re(P,T,J){if(T.image.length!==6)return;const _e=Ee(P,T),ye=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+J);const he=s.get(ye);if(ye.version!==he.__version||_e===!0){t.activeTexture(r.TEXTURE0+J);const We=wt.getPrimaries(wt.workingColorSpace),be=T.colorSpace===Tr?null:wt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Tr||We===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let me=0;me<6;me++)!pt&&!we?ke[me]=E(T.image[me],!0,a.maxCubemapSize):ke[me]=we?T.image[me].image:T.image[me],ke[me]=xt(T,ke[me]);const Je=ke[0],tt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),mt=D(T.internalFormat,tt,Be,T.colorSpace),st=T.isVideoTexture!==!0,bt=he.__version===void 0||_e===!0,H=ye.dataReady;let Pe=G(T,Je);k(r.TEXTURE_CUBE_MAP,T);let oe;if(pt){st&&bt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,Je.width,Je.height);for(let me=0;me<6;me++){oe=ke[me].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){const Ne=oe[Ie];T.format!==Yn?tt!==null?st?H&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,tt,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Ne.width,Ne.height,tt,Be,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,mt,Ne.width,Ne.height,0,tt,Be,Ne.data)}}}else{if(oe=T.mipmaps,st&&bt){oe.length>0&&Pe++;const me=Ge(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,mt,me.width,me.height)}for(let me=0;me<6;me++)if(we){st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke[me].width,ke[me].height,tt,Be,ke[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,ke[me].width,ke[me].height,0,tt,Be,ke[me].data);for(let Ie=0;Ie<oe.length;Ie++){const ot=oe[Ie].image[me].image;st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ot.width,ot.height,tt,Be,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,mt,ot.width,ot.height,0,tt,Be,ot.data)}}else{st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,Be,ke[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,mt,tt,Be,ke[me]);for(let Ie=0;Ie<oe.length;Ie++){const Ne=oe[Ie];st?H&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,tt,Be,Ne.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,mt,tt,Be,Ne.image[me])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),he.__version=ye.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ge(P,T,J,_e,ye,he){const We=l.convert(J.format,J.colorSpace),be=l.convert(J.type),Fe=D(J.internalFormat,We,be,J.colorSpace),pt=s.get(T),we=s.get(J);if(we.__renderTarget=T,!pt.__hasExternalTextures){const ke=Math.max(1,T.width>>he),Je=Math.max(1,T.height>>he);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,he,Fe,ke,Je,T.depth,0,We,be,null):t.texImage2D(ye,he,Fe,ke,Je,0,We,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),at(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ye,we.__webglTexture,0,dt(T)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,ye,we.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(P,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const _e=T.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,he=A(T.stencilBuffer,ye),We=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=dt(T);at(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,he,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,he,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,he,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,P)}else{const _e=T.textures;for(let ye=0;ye<_e.length;ye++){const he=_e[ye],We=l.convert(he.format,he.colorSpace),be=l.convert(he.type),Fe=D(he.internalFormat,We,be,he.colorSpace),pt=dt(T);J&&at(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,Fe,T.width,T.height):at(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,Fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ye=_e.__webglTexture,he=dt(T);if(T.depthTexture.format===$s)at(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(T.depthTexture.format===eo)at(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Le(P){const T=s.get(P),J=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const _e=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=_e}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,P)}else if(J){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=r.createRenderbuffer(),pe(T.__webglDepthbuffer[_e],P,!1);else{const ye=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),pe(T.__webglDepthbuffer,P,!1);else{const _e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,T,J){const _e=s.get(P);T!==void 0&&ge(_e.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Le(P)}function Rt(P){const T=P.texture,J=s.get(P),_e=s.get(T);P.addEventListener("dispose",L);const ye=P.textures,he=P.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=T.version,u.memory.textures++),he){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)J.__webglFramebuffer[be][Fe]=r.createFramebuffer()}else J.__webglFramebuffer[be]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)J.__webglFramebuffer[be]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(We)for(let be=0,Fe=ye.length;be<Fe;be++){const pt=s.get(ye[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&at(P)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){const Fe=ye[be];J.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const pt=l.convert(Fe.format,Fe.colorSpace),we=l.convert(Fe.type),ke=D(Fe.internalFormat,pt,we,Fe.colorSpace,P.isXRRenderTarget===!0),Je=dt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ke,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,J.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),k(r.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ge(J.__webglFramebuffer[be][Fe],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else ge(J.__webglFramebuffer[be],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let be=0,Fe=ye.length;be<Fe;be++){const pt=ye[be],we=s.get(pt);t.bindTexture(r.TEXTURE_2D,we.__webglTexture),k(r.TEXTURE_2D,pt),ge(J.__webglFramebuffer,P,pt,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),y(pt)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,_e.__webglTexture),k(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)ge(J.__webglFramebuffer[Fe],P,T,r.COLOR_ATTACHMENT0,be,Fe);else ge(J.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,be,0);y(T)&&v(be),t.unbindTexture()}P.depthBuffer&&Le(P)}function lt(P){const T=P.textures;for(let J=0,_e=T.length;J<_e;J++){const ye=T[J];if(y(ye)){const he=N(P),We=s.get(ye).__webglTexture;t.bindTexture(he,We),v(he),t.unbindTexture()}}}const St=[],W=[];function Kt(P){if(P.samples>0){if(at(P)===!1){const T=P.textures,J=P.width,_e=P.height;let ye=r.COLOR_BUFFER_BIT;const he=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=s.get(P),be=T.length>1;if(be)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=s.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pt,0)}r.blitFramebuffer(0,0,J,_e,0,0,J,_e,ye,r.NEAREST),h===!0&&(St.length=0,W.length=0,St.push(r.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(St.push(he),W.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=s.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,pt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function dt(P){return Math.min(a.maxSamples,P.samples)}function at(P){const T=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(P){const T=u.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function xt(P,T){const J=P.colorSpace,_e=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==no&&J!==Tr&&(wt.getTransfer(J)===Lt?(_e!==Yn||ye!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=$e,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=at}function aw(r,e){function t(s,a=Tr){let l;const u=wt.getTransfer(a);if(s===Ci)return r.UNSIGNED_BYTE;if(s===gf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_f)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Cg)return r.BYTE;if(s===Rg)return r.SHORT;if(s===$o)return r.UNSIGNED_SHORT;if(s===mf)return r.INT;if(s===ts)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Zo)return r.HALF_FLOAT;if(s===Pg)return r.ALPHA;if(s===Lg)return r.RGB;if(s===Yn)return r.RGBA;if(s===Dg)return r.LUMINANCE;if(s===Ng)return r.LUMINANCE_ALPHA;if(s===$s)return r.DEPTH_COMPONENT;if(s===eo)return r.DEPTH_STENCIL;if(s===Ig)return r.RED;if(s===vf)return r.RED_INTEGER;if(s===Ug)return r.RG;if(s===xf)return r.RG_INTEGER;if(s===yf)return r.RGBA_INTEGER;if(s===Fl||s===Ol||s===kl||s===Bl)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fd||s===Od||s===kd||s===Bd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zd||s===Vd||s===Hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===zd||s===Vd)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gd||s===Wd||s===Xd||s===jd||s===Yd||s===$d||s===qd||s===Kd||s===Zd||s===Qd||s===Jd||s===ef||s===tf||s===nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Gd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ef)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nf)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zl||s===rf||s===sf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===zl)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fg||s===of||s===af||s===lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Js?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class lw extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cw={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,s),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,w=.005;p.inputState.pinching&&x>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Rl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
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

}`;class fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Cn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new bi({vertexShader:uw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Ql(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hw extends is{constructor(e,t){super();const s=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,_=null,g=null,x=null,S=null,w=null;const E=new fw,y=t.getContextAttributes();let v=null,N=null;const D=[],A=[],G=new ut;let F=null;const L=new ri;L.viewport=new Bt;const j=new ri;j.viewport=new Bt;const b=[L,j],R=new lw;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=D[$];return re===void 0&&(re=new md,D[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=D[$];return re===void 0&&(re=new md,D[$]=re),re.getGripSpace()},this.getHand=function($){let re=D[$];return re===void 0&&(re=new md,D[$]=re),re.getHandSpace()};function ee($){const re=A.indexOf($.inputSource);if(re===-1)return;const ge=D[re];ge!==void 0&&(ge.update($.inputSource,$.frame,p||u),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function de(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",fe);for(let $=0;$<D.length;$++){const re=A[$];re!==null&&(A[$]=null,D[$].disconnect(re))}z=null,le=null,E.reset(),e.setRenderTarget(v),S=null,x=null,g=null,a=null,N=null,Ee.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",de),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),a.renderState.layers===void 0){const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Pr(S.framebufferWidth,S.framebufferHeight,{format:Yn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ge=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?eo:$s,ge=y.stencil?Js:ts);const Ae={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Pr(x.textureWidth,x.textureHeight,{format:Yn,type:Ci,depthTexture:new Zg(x.textureWidth,x.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),Ee.setContext(a),Ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe($){for(let re=0;re<$.removed.length;re++){const ge=$.removed[re],pe=A.indexOf(ge);pe>=0&&(A[pe]=null,D[pe].disconnect(ge))}for(let re=0;re<$.added.length;re++){const ge=$.added[re];let pe=A.indexOf(ge);if(pe===-1){for(let Le=0;Le<D.length;Le++)if(Le>=A.length){A.push(ge),pe=Le;break}else if(A[Le]===null){A[Le]=ge,pe=Le;break}if(pe===-1)break}const Ae=D[pe];Ae&&Ae.connect(ge)}}const ae=new K,ue=new K;function B($,re,ge){ae.setFromMatrixPosition(re.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const pe=ae.distanceTo(ue),Ae=re.projectionMatrix.elements,Le=ge.projectionMatrix.elements,$e=Ae[14]/(Ae[10]-1),Rt=Ae[14]/(Ae[10]+1),lt=(Ae[9]+1)/Ae[5],St=(Ae[9]-1)/Ae[5],W=(Ae[8]-1)/Ae[0],Kt=(Le[8]+1)/Le[0],dt=$e*W,at=$e*Kt,Ke=pe/(-W+Kt),xt=Ke*-W;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xt),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ge=$e+Ke,P=Rt+Ke,T=dt-xt,J=at+(pe-xt),_e=lt*Rt/P*Ge,ye=St*Rt/P*Ge;$.projectionMatrix.makePerspective(T,J,_e,ye,Ge,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let re=$.near,ge=$.far;E.texture!==null&&(E.depthNear>0&&(re=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),R.near=j.near=L.near=re,R.far=j.far=L.far=ge,(z!==R.near||le!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,le=R.far),L.layers.mask=$.layers.mask|2,j.layers.mask=$.layers.mask|4,R.layers.mask=L.layers.mask|j.layers.mask;const pe=$.parent,Ae=R.cameras;ce(R,pe);for(let Le=0;Le<Ae.length;Le++)ce(Ae[Le],pe);Ae.length===2?B(R,L,j):R.projectionMatrix.copy(L.projectionMatrix),se($,R,pe)};function se($,re,ge){ge===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=cf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function($){h=$,x!==null&&(x.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let U=null;function k($,re){if(_=re.getViewerPose(p||u),w=re,_!==null){const ge=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let pe=!1;ge.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let Le=0;Le<ge.length;Le++){const $e=ge[Le];let Rt=null;if(S!==null)Rt=S.getViewport($e);else{const St=g.getViewSubImage(x,$e);Rt=St.viewport,Le===0&&(e.setRenderTargetTextures(N,St.colorTexture,x.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(N))}let lt=b[Le];lt===void 0&&(lt=new ri,lt.layers.enable(Le),lt.viewport=new Bt,b[Le]=lt),lt.matrix.fromArray($e.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray($e.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Le===0&&(R.matrix.copy(lt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(lt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=g.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&E.init(e,Le,a.renderState)}}for(let ge=0;ge<D.length;ge++){const pe=A[ge],Ae=D[ge];pe!==null&&Ae!==void 0&&Ae.update(pe,re,p||u)}U&&U($,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),w=null}const Ee=new qg;Ee.setAnimationLoop(k),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}const Kr=new Ri,pw=new Wt;function mw(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,jg(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,N,D,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,A)):v.isMeshMatcapMaterial?(l(y,v),w(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?h(y,v,N,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=e.get(v),D=N.envMap,A=N.envMapRotation;D&&(y.envMap.value=D,Kr.copy(A),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(Kr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,N,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=D*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const N=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function gw(r,e,t,s){let a={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,D){const A=D.program;s.uniformBlockBinding(N,A)}function p(N,D){let A=a[N.id];A===void 0&&(w(N),A=_(N),a[N.id]=A,N.addEventListener("dispose",y));const G=D.program;s.updateUBOMapping(N,G);const F=e.render.frame;l[N.id]!==F&&(x(N),l[N.id]=F)}function _(N){const D=g();N.__bindingPointIndex=D;const A=r.createBuffer(),G=N.__size,F=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,A),A}function g(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=a[N.id],A=N.uniforms,G=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let F=0,L=A.length;F<L;F++){const j=Array.isArray(A[F])?A[F]:[A[F]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(S(z,F,b,G)===!0){const le=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let fe=0;fe<ee.length;fe++){const ae=ee[fe],ue=E(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,le+de,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,le,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,D,A,G){const F=N.value,L=D+"_"+A;if(G[L]===void 0)return typeof F=="number"||typeof F=="boolean"?G[L]=F:G[L]=F.clone(),!0;{const j=G[L];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return G[L]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function w(N){const D=N.uniforms;let A=0;const G=16;for(let L=0,j=D.length;L<j;L++){const b=Array.isArray(D[L])?D[L]:[D[L]];for(let R=0,z=b.length;R<z;R++){const le=b[R],ee=Array.isArray(le.value)?le.value:[le.value];for(let de=0,fe=ee.length;de<fe;de++){const ae=ee[de],ue=E(ae),B=A%G,ce=B%ue.boundary,se=B+ce;A+=ce,se!==0&&G-se<ue.storage&&(A+=G-se),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=A,A+=ue.storage}}}const F=A%G;return F>0&&(A+=G-F),N.__size=A,N.__cache={},this}function E(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const A=u.indexOf(D.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function v(){for(const N in a)r.deleteBuffer(a[N]);u=[],a={},l={}}return{bind:h,update:p,dispose:v}}class _w{constructor(e={}){const{canvas:t=sx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),E=new Int32Array(4);let y=null,v=null;const N=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Rr,this.toneMappingExposure=1;const A=this;let G=!1,F=0,L=0,j=null,b=-1,R=null;const z=new Bt,le=new Bt;let ee=null;const de=new _t(0);let fe=0,ae=t.width,ue=t.height,B=1,ce=null,se=null;const U=new Bt(0,0,ae,ue),k=new Bt(0,0,ae,ue);let Ee=!1;const $=new Ef;let re=!1,ge=!1;const pe=new Wt,Ae=new Wt,Le=new K,$e=new Bt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function St(){return j===null?B:1}let W=s;function Kt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),W===null){const X="webgl2";if(W=Kt(X,C),W===null)throw Kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,at,Ke,xt,Ge,P,T,J,_e,ye,he,We,be,Fe,pt,we,ke,Je,tt,Be,mt,st,bt,H;function Pe(){dt=new MM(W),dt.init(),st=new aw(W,dt),at=new gM(W,dt,e,st),Ke=new rw(W,dt),at.reverseDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),xt=new TM(W),Ge=new GE,P=new ow(W,dt,Ke,Ge,at,st,xt),T=new vM(A),J=new SM(A),_e=new Dx(W),bt=new pM(W,_e),ye=new EM(W,_e,xt,bt),he=new CM(W,ye,_e,xt),tt=new AM(W,at,P),we=new _M(Ge),We=new HE(A,T,J,dt,at,bt,we),be=new mw(A,Ge),Fe=new XE,pt=new ZE(dt),Je=new hM(A,T,J,Ke,he,S,h),ke=new nw(A,he,at),H=new gw(W,xt,at,Ke),Be=new mM(W,dt,xt),mt=new wM(W,dt,xt),xt.programs=We.programs,A.capabilities=at,A.extensions=dt,A.properties=Ge,A.renderLists=Fe,A.shadowMap=ke,A.state=Ke,A.info=xt}Pe();const oe=new hw(A,W);this.xr=oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(ae,ue,!1))},this.getSize=function(C){return C.set(ae,ue)},this.setSize=function(C,X,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,ue=X,t.width=Math.floor(C*B),t.height=Math.floor(X*B),ne===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ae*B,ue*B).floor()},this.setDrawingBufferSize=function(C,X,ne){ae=C,ue=X,B=ne,t.width=Math.floor(C*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,X,ne,ie){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,X,ne,ie),Ke.viewport(z.copy(U).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(k)},this.setScissor=function(C,X,ne,ie){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,X,ne,ie),Ke.scissor(le.copy(k).multiplyScalar(B).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Ke.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,X=!0,ne=!0){let ie=0;if(C){let Y=!1;if(j!==null){const Re=j.texture.format;Y=Re===yf||Re===xf||Re===vf}if(Y){const Re=j.texture.type,Te=Re===Ci||Re===ts||Re===$o||Re===Js||Re===gf||Re===_f,Xe=Je.getClearColor(),Ve=Je.getClearAlpha(),nt=Xe.r,rt=Xe.g,je=Xe.b;Te?(w[0]=nt,w[1]=rt,w[2]=je,w[3]=Ve,W.clearBufferuiv(W.COLOR,0,w)):(E[0]=nt,E[1]=rt,E[2]=je,E[3]=Ve,W.clearBufferiv(W.COLOR,0,E))}else ie|=W.COLOR_BUFFER_BIT}X&&(ie|=W.DEPTH_BUFFER_BIT),ne&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),pt.dispose(),Ge.dispose(),T.dispose(),J.dispose(),he.dispose(),bt.dispose(),H.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ss),oe.removeEventListener("sessionend",Ki),Pi.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=xt.autoReset,X=ke.enabled,ne=ke.autoUpdate,ie=ke.needsUpdate,Y=ke.type;Pe(),xt.autoReset=C,ke.enabled=X,ke.autoUpdate=ne,ke.needsUpdate=ie,ke.type=Y}function Ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ot(C){const X=C.target;X.removeEventListener("dispose",ot),Ft(X)}function Ft(C){Zt(C),Ge.remove(C)}function Zt(C){const X=Ge.get(C).programs;X!==void 0&&(X.forEach(function(ne){We.releaseProgram(ne)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ne,ie,Y,Re){X===null&&(X=Rt);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Xe=na(C,X,ne,ie,Y);Ke.setMaterial(ie,Te);let Ve=ne.index,nt=1;if(ie.wireframe===!0){if(Ve=ye.getWireframeAttribute(ne),Ve===void 0)return;nt=2}const rt=ne.drawRange,je=ne.attributes.position;let yt=rt.start*nt,Ct=(rt.start+rt.count)*nt;Re!==null&&(yt=Math.max(yt,Re.start*nt),Ct=Math.min(Ct,(Re.start+Re.count)*nt)),Ve!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,Ve.count)):je!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,je.count));const vt=Ct-yt;if(vt<0||vt===1/0)return;bt.setup(Y,ie,Xe,ne,Ve);let fn,ct=Be;if(Ve!==null&&(fn=_e.get(Ve),ct=mt,ct.setIndex(fn)),Y.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*St()),ct.setMode(W.LINES)):ct.setMode(W.TRIANGLES);else if(Y.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*St()),Y.isLineSegments?ct.setMode(W.LINES):Y.isLineLoop?ct.setMode(W.LINE_LOOP):ct.setMode(W.LINE_STRIP)}else Y.isPoints?ct.setMode(W.POINTS):Y.isSprite&&ct.setMode(W.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,ci=Y._multiDrawCounts,Tt=Y._multiDrawCount,hn=Ve?_e.get(Ve).bytesPerElement:1,ui=Ge.get(ie).currentProgram.getUniforms();for(let Qt=0;Qt<Tt;Qt++)ui.setValue(W,"_gl_DrawID",Qt),ct.render(qe[Qt]/hn,ci[Qt])}else if(Y.isInstancedMesh)ct.renderInstances(yt,vt,Y.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ci=Math.min(ne.instanceCount,qe);ct.renderInstances(yt,vt,ci)}else ct.render(yt,vt)};function Mt(C,X,ne){C.transparent===!0&&C.side===jn&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,os(C,X,ne),C.side=br,C.needsUpdate=!0,os(C,X,ne),C.side=jn):os(C,X,ne)}this.compile=function(C,X,ne=null){ne===null&&(ne=C),v=pt.get(ne),v.init(X),D.push(v),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),C!==ne&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const ie=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Te=0;Te<Re.length;Te++){const Xe=Re[Te];Mt(Xe,ne,Y),ie.add(Xe)}else Mt(Re,ne,Y),ie.add(Re)}),D.pop(),v=null,ie},this.compileAsync=function(C,X,ne=null){const ie=this.compile(C,X,ne);return new Promise(Y=>{function Re(){if(ie.forEach(function(Te){Ge.get(Te).currentProgram.isReady()&&ie.delete(Te)}),ie.size===0){Y(C);return}setTimeout(Re,10)}dt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Rn=null;function yn(C){Rn&&Rn(C)}function ss(){Pi.stop()}function Ki(){Pi.start()}const Pi=new qg;Pi.setAnimationLoop(yn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){Rn=C,oe.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},oe.addEventListener("sessionstart",ss),oe.addEventListener("sessionend",Ki),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(X),X=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,j),v=pt.get(C,D.length),v.init(X),D.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Ae),ge=this.localClippingEnabled,re=we.init(this.clippingPlanes,ge),y=Fe.get(C,N.length),y.init(),N.push(y),oe.enabled===!0&&oe.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Li(Re,X,-1/0,A.sortObjects)}Li(C,X,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ce,se),lt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,lt&&Je.addToRenderList(y,C),this.info.render.frame++,re===!0&&we.beginShadows();const ne=v.state.shadowsArray;ke.render(ne,C,X),re===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,Y=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Re=X.cameras;if(Y.length>0)for(let Te=0,Xe=Re.length;Te<Xe;Te++){const Ve=Re[Te];Dr(ie,Y,C,Ve)}lt&&Je.render(C);for(let Te=0,Xe=Re.length;Te<Xe;Te++){const Ve=Re[Te];Lr(y,C,Ve,Ve.viewport)}}else Y.length>0&&Dr(ie,Y,C,X),lt&&Je.render(C),Lr(y,C,X);j!==null&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(A,C,X),bt.resetDefaultState(),b=-1,R=null,D.pop(),D.length>0?(v=D[D.length-1],re===!0&&we.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Li(C,X,ne,ie){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){ie&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Te=he.update(C),Xe=C.material;Xe.visible&&y.push(C,Te,Xe,ne,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Te=he.update(C),Xe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),$e.copy(Te.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const Ve=Te.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const je=Ve[nt],yt=Xe[je.materialIndex];yt&&yt.visible&&y.push(C,Te,yt,ne,$e.z,je)}}else Xe.visible&&y.push(C,Te,Xe,ne,$e.z,null)}}const Re=C.children;for(let Te=0,Xe=Re.length;Te<Xe;Te++)Li(Re[Te],X,ne,ie)}function Lr(C,X,ne,ie){const Y=C.opaque,Re=C.transmissive,Te=C.transparent;v.setupLightsView(ne),re===!0&&we.setGlobalState(A.clippingPlanes,ne),ie&&Ke.viewport(z.copy(ie)),Y.length>0&&Zi(Y,X,ne),Re.length>0&&Zi(Re,X,ne),Te.length>0&&Zi(Te,X,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Dr(C,X,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ie.id]===void 0&&(v.state.transmissionRenderTarget[ie.id]=new Pr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Zo:Ci,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Re=v.state.transmissionRenderTarget[ie.id],Te=ie.viewport||z;Re.setSize(Te.z,Te.w);const Xe=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(de),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),lt&&Je.render(ne);const Ve=A.toneMapping;A.toneMapping=Rr;const nt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),v.setupLightsView(ie),re===!0&&we.setGlobalState(A.clippingPlanes,ie),Zi(C,ne,ie),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re),dt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let je=0,yt=X.length;je<yt;je++){const Ct=X[je],vt=Ct.object,fn=Ct.geometry,ct=Ct.material,qe=Ct.group;if(ct.side===jn&&vt.layers.test(ie.layers)){const ci=ct.side;ct.side=kn,ct.needsUpdate=!0,ea(vt,ne,ie,fn,ct,qe),ct.side=ci,ct.needsUpdate=!0,rt=!0}}rt===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re))}A.setRenderTarget(Xe),A.setClearColor(de,fe),nt!==void 0&&(ie.viewport=nt),A.toneMapping=Ve}function Zi(C,X,ne){const ie=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Re=C.length;Y<Re;Y++){const Te=C[Y],Xe=Te.object,Ve=Te.geometry,nt=ie===null?Te.material:ie,rt=Te.group;Xe.layers.test(ne.layers)&&ea(Xe,X,ne,Ve,nt,rt)}}function ea(C,X,ne,ie,Y,Re){C.onBeforeRender(A,X,ne,ie,Y,Re),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(A,X,ne,ie,C,Re),Y.transparent===!0&&Y.side===jn&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,A.renderBufferDirect(ne,X,ie,Y,C,Re),Y.side=br,Y.needsUpdate=!0,A.renderBufferDirect(ne,X,ie,Y,C,Re),Y.side=jn):A.renderBufferDirect(ne,X,ie,Y,C,Re),C.onAfterRender(A,X,ne,ie,Y,Re)}function os(C,X,ne){X.isScene!==!0&&(X=Rt);const ie=Ge.get(C),Y=v.state.lights,Re=v.state.shadowsArray,Te=Y.state.version,Xe=We.getParameters(C,Y.state,Re,X,ne),Ve=We.getProgramCacheKey(Xe);let nt=ie.programs;ie.environment=C.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(C.isMeshStandardMaterial?J:T).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ot),nt=new Map,ie.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===Te)return yi(C,Xe),rt}else Xe.uniforms=We.getUniforms(C),C.onBeforeCompile(Xe,A),rt=We.acquireProgram(Xe,Ve),nt.set(Ve,rt),ie.uniforms=Xe.uniforms;const je=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=we.uniform),yi(C,Xe),ie.needsLights=tc(C),ie.lightsStateVersion=Te,ie.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function ta(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function yi(C,X){const ne=Ge.get(C);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function na(C,X,ne,ie,Y){X.isScene!==!0&&(X=Rt),P.resetTextureUnits();const Re=X.fog,Te=ie.isMeshStandardMaterial?X.environment:null,Xe=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:no,Ve=(ie.isMeshStandardMaterial?J:T).get(ie.envMap||Te),nt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),je=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,Ct=!!ne.morphAttributes.color;let vt=Rr;ie.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(vt=A.toneMapping);const fn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ct=fn!==void 0?fn.length:0,qe=Ge.get(ie),ci=v.state.lights;if(re===!0&&(ge===!0||C!==R)){const Sn=C===R&&ie.id===b;we.setState(ie,C,Sn)}let Tt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ci.state.version||qe.outputColorSpace!==Xe||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Ve||ie.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==we.numPlanes||qe.numIntersection!==we.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==rt||qe.morphTargets!==je||qe.morphNormals!==yt||qe.morphColors!==Ct||qe.toneMapping!==vt||qe.morphTargetsCount!==ct)&&(Tt=!0):(Tt=!0,qe.__version=ie.version);let hn=qe.currentProgram;Tt===!0&&(hn=os(ie,X,Y));let ui=!1,Qt=!1,Si=!1;const Nt=hn.getUniforms(),$n=qe.uniforms;if(Ke.useProgram(hn.program)&&(ui=!0,Qt=!0,Si=!0),ie.id!==b&&(b=ie.id,Qt=!0),ui||R!==C){Ke.buffers.depth.getReversed()?(pe.copy(C.projectionMatrix),ax(pe),lx(pe),Nt.setValue(W,"projectionMatrix",pe)):Nt.setValue(W,"projectionMatrix",C.projectionMatrix),Nt.setValue(W,"viewMatrix",C.matrixWorldInverse);const qn=Nt.map.cameraPosition;qn!==void 0&&qn.setValue(W,Le.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Qt=!0,Si=!0)}if(Y.isSkinnedMesh){Nt.setOptional(W,Y,"bindMatrix"),Nt.setOptional(W,Y,"bindMatrixInverse");const Sn=Y.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Nt.setValue(W,"boneTexture",Sn.boneTexture,P))}Y.isBatchedMesh&&(Nt.setOptional(W,Y,"batchingTexture"),Nt.setValue(W,"batchingTexture",Y._matricesTexture,P),Nt.setOptional(W,Y,"batchingIdTexture"),Nt.setValue(W,"batchingIdTexture",Y._indirectTexture,P),Nt.setOptional(W,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(W,"batchingColorTexture",Y._colorsTexture,P));const Di=ne.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&tt.update(Y,ne,hn),(Qt||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Nt.setValue(W,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&($n.envMap.value=Ve,$n.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&($n.envMapIntensity.value=X.environmentIntensity),Qt&&(Nt.setValue(W,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&ia($n,Si),Re&&ie.fog===!0&&be.refreshFogUniforms($n,Re),be.refreshMaterialUniforms($n,ie,B,ue,v.state.transmissionRenderTarget[C.id]),Vl.upload(W,ta(qe),$n,P)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Vl.upload(W,ta(qe),$n,P),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(W,"center",Y.center),Nt.setValue(W,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(W,"normalMatrix",Y.normalMatrix),Nt.setValue(W,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Sn=ie.uniformsGroups;for(let qn=0,bn=Sn.length;qn<bn;qn++){const ra=Sn[qn];H.update(ra,hn),H.bind(ra,hn)}}return hn}function ia(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function tc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,X,ne){Ge.get(C.texture).__webglTexture=X,Ge.get(C.depthTexture).__webglTexture=ne;const ie=Ge.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const ne=Ge.get(C);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ne=0){j=C,F=X,L=ne;let ie=!0,Y=null,Re=!1,Te=!1;if(C){const Ve=Ge.get(C);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(W.FRAMEBUFFER,null),ie=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ve.__hasExternalTextures)P.rebindTextures(C,Ge.get(C.texture).__webglTexture,Ge.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const je=C.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&Ge.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Te=!0);const rt=Ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?Y=rt[X][ne]:Y=rt[X],Re=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?Y=Ge.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?Y=rt[ne]:Y=rt,z.copy(C.viewport),le.copy(C.scissor),ee=C.scissorTest}else z.copy(U).multiplyScalar(B).floor(),le.copy(k).multiplyScalar(B).floor(),ee=Ee;if(Ke.bindFramebuffer(W.FRAMEBUFFER,Y)&&ie&&Ke.drawBuffers(C,Y),Ke.viewport(z),Ke.scissor(le),Ke.setScissorTest(ee),Re){const Ve=Ge.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,ne)}else if(Te){const Ve=Ge.get(C.texture),nt=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ve.__webglTexture,ne||0,nt)}b=-1},this.readRenderTargetPixels=function(C,X,ne,ie,Y,Re,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){Ke.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ve=C.texture,nt=Ve.format,rt=Ve.type;if(!at.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ie&&ne>=0&&ne<=C.height-Y&&W.readPixels(X,ne,ie,Y,st.convert(nt),st.convert(rt),Re)}finally{const Ve=j!==null?Ge.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(W.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,X,ne,ie,Y,Re,Te){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){const Ve=C.texture,nt=Ve.format,rt=Ve.type;if(!at.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-ie&&ne>=0&&ne<=C.height-Y){Ke.bindFramebuffer(W.FRAMEBUFFER,Xe);const je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.bufferData(W.PIXEL_PACK_BUFFER,Re.byteLength,W.STREAM_READ),W.readPixels(X,ne,ie,Y,st.convert(nt),st.convert(rt),0);const yt=j!==null?Ge.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(W.FRAMEBUFFER,yt);const Ct=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ox(W,Ct,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Re),W.deleteBuffer(je),W.deleteSync(Ct),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,ne=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-ne),Y=Math.floor(C.image.width*ie),Re=Math.floor(C.image.height*ie),Te=X!==null?X.x:0,Xe=X!==null?X.y:0;P.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,ne,0,0,Te,Xe,Y,Re),Ke.unbindTexture()},this.copyTextureToTexture=function(C,X,ne=null,ie=null,Y=0){C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],X=arguments[2],Y=arguments[3]||0,ne=null);let Re,Te,Xe,Ve,nt,rt,je,yt,Ct;const vt=C.isCompressedTexture?C.mipmaps[Y]:C.image;ne!==null?(Re=ne.max.x-ne.min.x,Te=ne.max.y-ne.min.y,Xe=ne.isBox3?ne.max.z-ne.min.z:1,Ve=ne.min.x,nt=ne.min.y,rt=ne.isBox3?ne.min.z:0):(Re=vt.width,Te=vt.height,Xe=vt.depth||1,Ve=0,nt=0,rt=0),ie!==null?(je=ie.x,yt=ie.y,Ct=ie.z):(je=0,yt=0,Ct=0);const fn=st.convert(X.format),ct=st.convert(X.type);let qe;X.isData3DTexture?(P.setTexture3D(X,0),qe=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),qe=W.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),qe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const ci=W.getParameter(W.UNPACK_ROW_LENGTH),Tt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),hn=W.getParameter(W.UNPACK_SKIP_PIXELS),ui=W.getParameter(W.UNPACK_SKIP_ROWS),Qt=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,vt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ve),W.pixelStorei(W.UNPACK_SKIP_ROWS,nt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,rt);const Si=C.isDataArrayTexture||C.isData3DTexture,Nt=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const $n=Ge.get(C),Di=Ge.get(X),Sn=Ge.get($n.__renderTarget),qn=Ge.get(Di.__renderTarget);Ke.bindFramebuffer(W.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ke.bindFramebuffer(W.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let bn=0;bn<Xe;bn++)Si&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ge.get(C).__webglTexture,Y,rt+bn),C.isDepthTexture?(Nt&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,Y,Ct+bn),W.blitFramebuffer(Ve,nt,Re,Te,je,yt,Re,Te,W.DEPTH_BUFFER_BIT,W.NEAREST)):Nt?W.copyTexSubImage3D(qe,Y,je,yt,Ct+bn,Ve,nt,Re,Te):W.copyTexSubImage2D(qe,Y,je,yt,Ct+bn,Ve,nt,Re,Te);Ke.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(qe,Y,je,yt,Ct,Re,Te,Xe,fn,ct,vt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(qe,Y,je,yt,Ct,Re,Te,Xe,fn,vt.data):W.texSubImage3D(qe,Y,je,yt,Ct,Re,Te,Xe,fn,ct,vt):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Y,je,yt,Re,Te,fn,ct,vt.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Y,je,yt,vt.width,vt.height,fn,vt.data):W.texSubImage2D(W.TEXTURE_2D,Y,je,yt,Re,Te,fn,ct,vt);W.pixelStorei(W.UNPACK_ROW_LENGTH,ci),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Tt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,hn),W.pixelStorei(W.UNPACK_SKIP_ROWS,ui),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Qt),Y===0&&X.generateMipmaps&&W.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ne=null,ie=null,Y=0){return C.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0),Xo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,ne,ie,Y)},this.initRenderTarget=function(C){Ge.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){F=0,L=0,j=null,Ke.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class n_ extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vw extends Cn{constructor(e=null,t=1,s=1,a,l,u,d,h,p=An,_=An,g,x){super(null,u,d,h,p,_,a,l,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends rs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new K,Xl=new K,ag=new Wt,Go=new Mf,bl=new Zl,gd=new K,lg=new K;class xw extends dn{constructor(e=new li,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)Wl.fromBufferAttribute(t,a-1),Xl.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bl.copy(s.boundingSphere),bl.applyMatrix4(a),bl.radius+=l,e.ray.intersectsSphere(bl)===!1)return;ag.copy(a).invert(),Go.copy(e.ray).applyMatrix4(ag);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let E=S,y=w-1;E<y;E+=p){const v=_.getX(E),N=_.getX(E+1),D=Pl(this,e,Go,h,v,N);D&&t.push(D)}if(this.isLineLoop){const E=_.getX(w-1),y=_.getX(S),v=Pl(this,e,Go,h,E,y);v&&t.push(v)}}else{const S=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let E=S,y=w-1;E<y;E+=p){const v=Pl(this,e,Go,h,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Pl(this,e,Go,h,w-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Pl(r,e,t,s,a,l){const u=r.geometry.attributes.position;if(Wl.fromBufferAttribute(u,a),Xl.fromBufferAttribute(u,l),t.distanceSqToSegment(Wl,Xl,gd,lg)>s)return;gd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(gd);if(!(h<e.near||h>e.far))return{distance:h,point:lg.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const cg=new K,ug=new K;class jl extends xw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)cg.fromBufferAttribute(t,a),ug.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+cg.distanceTo(ug);e.setAttribute("lineDistance",new Bn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ll=new K,Dl=new K,_d=new K,Nl=new si;class dg extends li{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(Yo*t),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x={},S=[];for(let w=0;w<h;w+=3){u?(p[0]=u.getX(w),p[1]=u.getX(w+1),p[2]=u.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:E,b:y,c:v}=Nl;if(E.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Nl.getNormal(_d),g[0]=`${Math.round(E.x*a)},${Math.round(E.y*a)},${Math.round(E.z*a)}`,g[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,g[2]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let N=0;N<3;N++){const D=(N+1)%3,A=g[N],G=g[D],F=Nl[_[N]],L=Nl[_[D]],j=`${A}_${G}`,b=`${G}_${A}`;b in x&&x[b]?(_d.dot(x[b].normal)<=l&&(S.push(F.x,F.y,F.z),S.push(L.x,L.y,L.z)),x[b]=null):j in x||(x[j]={index0:p[N],index1:p[D],normal:_d.clone()})}}for(const w in x)if(x[w]){const{index0:E,index1:y}=x[w];Ll.fromBufferAttribute(d,E),Dl.fromBufferAttribute(d,y),S.push(Ll.x,Ll.y,Ll.z),S.push(Dl.x,Dl.y,Dl.z)}this.setAttribute("position",new Bn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yw extends rs{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sw extends rs{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class i_ extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vd=new Wt,fg=new K,hg=new K;class Mw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),hg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hg),t.updateMatrixWorld(),vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ew extends Mw{constructor(){super(new Kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends i_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ew}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ww extends i_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tw extends jl{constructor(e=10,t=10,s=4473924,a=8947848){s=new _t(s),a=new _t(a);const l=t/2,u=e/t,d=e/2,h=[],p=[];for(let x=0,S=0,w=-d;x<=t;x++,w+=u){h.push(-d,0,w,d,0,w),h.push(w,0,-d,w,0,d);const E=x===l?s:a;E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3,E.toArray(p,S),S+=3}const _=new li;_.setAttribute("position",new Bn(h,3)),_.setAttribute("color",new Bn(p,3));const g=new qo({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Aw extends jl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new li;a.setAttribute("position",new Bn(t,3)),a.setAttribute("color",new Bn(s,3));const l=new qo({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,s){const a=new _t,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(s),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Cw extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);const gg={type:"change"},Tf={type:"start"},r_={type:"end"},Il=new Mf,_g=new wr,Rw=Math.cos(70*rx.DEG2RAD),tn=new K,On=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class bw extends Cw{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ns,this._lastTargetPosition=new K,this._quat=new ns().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mg,this._sphericalDelta=new mg,this._scale=1,this._panOffset=new K,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new K,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lw.bind(this),this._onPointerDown=Pw.bind(this),this._onPointerUp=Dw.bind(this),this._onContextMenu=Bw.bind(this),this._onMouseWheel=Uw.bind(this),this._onKeyDown=Fw.bind(this),this._onTouchStart=Ow.bind(this),this._onTouchMove=kw.bind(this),this._onMouseDown=Nw.bind(this),this._onMouseMove=Iw.bind(this),this._interceptControlDown=zw.bind(this),this._interceptControlUp=Vw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gg),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=On:s>Math.PI&&(s-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=tn.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<Rw?this.object.lookAt(this.target):(_g.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(_g,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(gg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;tn.copy(a).sub(this.target);let l=tn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,u=s.width,d=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(On*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-On*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Pw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Lw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Dw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(r_),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Nw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Dt.DOLLY;break;case js.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}break;case js.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Tf)}function Iw(r){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Uw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(r.preventDefault(),this.dispatchEvent(Tf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(r_))}function Fw(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function Ow(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Dt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Dt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Tf)}function kw(r){switch(this._trackPointer(r),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Dt.NONE}}function Bw(r){this.enabled!==!1&&r.preventDefault()}function zw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yd{constructor(e){Gt(this,"scene");Gt(this,"camera");Gt(this,"renderer");Gt(this,"controls");Gt(this,"container");Gt(this,"animationId",null);Gt(this,"renderCallbacks",[]);this.container=e,this.scene=new n_,this.scene.background=new _t(856343);const t=e.clientWidth/e.clientHeight;this.camera=new ri(45,t,.01,1e4),this.camera.position.set(5,5,5),this.renderer=new _w({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new bw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.screenSpacePanning=!0;const s=new ww(16777215,.4);this.scene.add(s);const a=new pg(16777215,.8);a.position.set(5,10,7),this.scene.add(a);const l=new pg(16777215,.3);l.position.set(-5,-3,-5),this.scene.add(l);const u=new Tw(20,20,3159613,2172461);u.position.y=-.01,this.scene.add(u);const d=new Aw(1);this.scene.add(d),this.handleResize=this.handleResize.bind(this),window.addEventListener("resize",this.handleResize)}static isWebGL2Available(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}onRender(e){this.renderCallbacks.push(e)}start(){const e=()=>{this.animationId=requestAnimationFrame(e),this.controls.update();for(const t of this.renderCallbacks)t();this.renderer.render(this.scene,this.camera)};e()}stop(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null)}zoomToFit(){const e=new io().setFromObject(this.scene);if(e.isEmpty())return;const t=e.getCenter(new K),s=e.getSize(new K),a=Math.max(s.x,s.y,s.z),l=this.camera.fov*(Math.PI/180),u=a/(2*Math.tan(l/2))*1.5;this.camera.position.copy(t).add(new K(u*.7,u*.5,u*.7)),this.camera.lookAt(t),this.controls.target.copy(t),this.controls.update()}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.stop(),window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}function Hw(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++)e[t]=r[t];return e}function s_(r){let e=1/0,t=-1/0;for(let s=0;s<r.length;s++){const a=r[s];Number.isFinite(a)&&(a<e&&(e=a),a>t&&(t=a))}return e===1/0?[NaN,NaN]:[e,t]}function Af(r,e){switch(e){case"float64":return new Float64Array(r);case"float32":return new Float32Array(r);case"int32":return new Int32Array(r);case"uint8":return new Uint8Array(r);default:throw new Error(`Unsupported dtype: ${e}`)}}function Gw(r){let e=0;for(let t=0;t<r.length;t++)Number.isNaN(r[t])&&e++;return e}class Er extends Error{constructor(e,t){super(e),this.stats=t,this.name="SurfaceGeometryError"}}function Ww(r){const{nodeCoords_f64:e,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a}=r,l=Hw(e),u=l.length/3,d=t.length,h=jw({positionsLength:l.length,vertexCount:u,renderVertexCount:d,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a});if(l.length===0)throw new Er("Surface geometry has no node positions",h);if(l.length%3!==0)throw new Er(`Surface positions length must be divisible by 3; received ${l.length}`,h);if(t.length===0)throw new Er("Surface geometry has no indices",h);if(t.length%3!==0)throw new Er(`Surface indices length must be divisible by 3; received ${t.length}`,h);if(s.length!==l.length)throw new Er(`Surface normals length ${s.length} does not match positions length ${l.length}`,h);if(a&&a.length!==t.length/3)throw new Er(`surfaceElementMap length ${a.length} does not match triangle count ${t.length/3}`,h);if(h.hasNegativeIndices)throw new Er(`Surface indices contain negative values (min=${h.minIndex})`,h);if(h.hasOutOfRangeIndices)throw new Er(`Surface indices exceed vertex count (max=${h.maxIndex}, vertexCount=${u})`,h);const p=new Float32Array(d*3),_=new Float32Array(d*3),g=new Float32Array(d*3),x=new Uint32Array(d),S=new Int32Array(d);for(let E=0;E<t.length/3;E++){const y=E*3,v=t[y],N=t[y+1],D=t[y+2],A=a?a[E]:-1,G=l[v*3],F=l[v*3+1],L=l[v*3+2],j=l[N*3],b=l[N*3+1],R=l[N*3+2],z=l[D*3],le=l[D*3+1],ee=l[D*3+2],de=j-G,fe=b-F,ae=R-L,ue=z-G,B=le-F,ce=ee-L;let se=fe*ce-ae*B,U=ae*ue-de*ce,k=de*B-fe*ue;const Ee=Math.hypot(se,U,k)||1;se/=Ee,U/=Ee,k/=Ee;for(let $=0;$<3;$++){const re=t[y+$],ge=(y+$)*3,pe=re*3;p[ge]=l[pe],p[ge+1]=l[pe+1],p[ge+2]=l[pe+2],_[ge]=s[pe],_[ge+1]=s[pe+1],_[ge+2]=s[pe+2],g[ge]=se,g[ge+1]=U,g[ge+2]=k,x[y+$]=re,S[y+$]=A}}const w=new li;return w.setAttribute("position",new qt(p,3)),w.setAttribute("normal",new qt(_,3)),w.setAttribute("smoothNormal",new qt(_.slice(),3)),w.setAttribute("flatNormal",new qt(g,3)),w.setAttribute("sourceNodeIndex",new qt(x,1)),w.setAttribute("sourceElementIndex",new qt(S,1)),w.computeBoundingBox(),w.computeBoundingSphere(),{geometry:w,positions:p,stats:h}}function Xw(r,e){console.info(`[${e}] Surface geometry stats`,r)}function jw(r){const{positionsLength:e,vertexCount:t,renderVertexCount:s,surfaceIndices:a,surfaceNormals:l,surfaceElementMap:u}=r;let d=1/0,h=-1/0,p=!1;for(let _=0;_<a.length;_++){const g=a[_];g<d&&(d=g),g>h&&(h=g),g<0&&(p=!0)}return a.length===0&&(d=NaN,h=NaN),{positionsLength:e,indicesLength:a.length,normalsLength:l.length,surfaceElementMapLength:(u==null?void 0:u.length)??0,vertexCount:t,renderVertexCount:s,triangleCount:a.length/3,minIndex:d,maxIndex:h,hasNegativeIndices:p,hasOutOfRangeIndices:Number.isFinite(h)&&h>t-1}}function vg(r){var l,u;const e=r,t={value:0},s=(l=e.onBeforeCompile)==null?void 0:l.bind(e),a=(u=e.customProgramCacheKey)==null?void 0:u.bind(e);return e.userData.deformUniform=t,e.onBeforeCompile=(d,h)=>{s==null||s(d,h);const p=d;p.uniforms.u_deform_scale=t,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 displacement;
uniform float u_deform_scale;`).replace("#include <begin_vertex>","vec3 transformed = position + u_deform_scale * displacement;")},e.customProgramCacheKey=()=>`${a?a():e.type}:surface-deform-v1`,r}function xg(r,e){const t=r;t.userData.deformUniform&&(t.userData.deformUniform.value=e)}class Yw{constructor(e){Gt(this,"meshGroups",[]);Gt(this,"baseGeometry",null);Gt(this,"debugMaterialMode");this.debugMaterialMode=(e==null?void 0:e.debugMaterialMode)??!1}buildMesh(e,t,s,a,l,u){this.clear(u);const d=Ww({nodeCoords_f64:e,surfaceIndices:t,surfaceNormals:s,surfaceElementMap:a});Xw(d.stats,"MeshManager"),this.baseGeometry=d.geometry;const h=new Float32Array(d.positions.length);this.baseGeometry.setAttribute("displacement",new qt(h,3));const p=new Float32Array(this.baseGeometry.getAttribute("position").count);if(this.baseGeometry.setAttribute("scalarValue",new qt(p,1)),l.size===0){const _=this.createSurfaceMaterial(),g=new ai(this.baseGeometry,_);g.name="default",g.frustumCulled=!this.debugMaterialMode,u.add(g),this.meshGroups.push({partId:"default",mesh:g})}else for(const[_,[g,x]]of l){const S=g*3,w=(x-g)*3,E=this.baseGeometry.clone();E.setDrawRange(S,w);const y=this.createSurfaceMaterial(),v=new ai(E,y);v.name=_,v.frustumCulled=!this.debugMaterialMode,u.add(v),this.meshGroups.push({partId:_,mesh:v})}}getMeshGroups(){return this.meshGroups}getBaseGeometry(){return this.baseGeometry}setDeformScale(e){for(const t of this.meshGroups){const s=t.mesh.material;if(Array.isArray(s))for(const a of s)xg(a,e);else xg(s,e)}}setPartVisible(e,t){const s=this.meshGroups.find(a=>a.partId===e);s&&(s.mesh.visible=t)}isolatePart(e){for(const t of this.meshGroups)t.mesh.visible=t.partId===e}showAll(){for(const e of this.meshGroups)e.mesh.visible=!0}clear(e){for(const t of this.meshGroups)e.remove(t.mesh),t.mesh.geometry.dispose(),Array.isArray(t.mesh.material)?t.mesh.material.forEach(s=>s.dispose()):t.mesh.material.dispose();this.meshGroups=[],this.baseGeometry=null}createSurfaceMaterial(){return this.debugMaterialMode?vg(new Sw({side:jn})):vg(new yw({color:5809919,side:jn,flatShading:!1,vertexColors:!1}))}}class $w{constructor(){Gt(this,"wireframeMeshes",[]);Gt(this,"overlayMeshes",[])}createWireframe(e,t){this.clear(t);const s=new dg(e,15),a=new qo({color:9147550,transparent:!0,opacity:.4,depthTest:!0}),l=new jl(s,a);l.visible=!1,l.name="wireframe",l.renderOrder=1,t.add(l),this.wireframeMeshes.push(l)}setVisible(e){for(const t of this.wireframeMeshes)t.visible=e}isVisible(){return this.wireframeMeshes.length>0&&this.wireframeMeshes[0].visible}createOverlayWireframe(e,t){if(this.overlayMeshes.length>0)return;const s=new dg(e,15),a=new qo({color:16753920,transparent:!0,opacity:.5,depthTest:!0}),l=new jl(s,a);l.visible=!0,l.name="deform-overlay",l.renderOrder=2,t.add(l),this.overlayMeshes.push(l)}clearOverlay(e){for(const t of this.overlayMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.overlayMeshes=[]}clear(e){for(const t of this.wireframeMeshes)e.remove(t),t.geometry.dispose(),t.material.dispose();this.wireframeMeshes=[],this.clearOverlay(e)}}function Sd(r){const e=new Uint8Array(1024),t=o_(r);for(let a=0;a<256;a++){const l=a*3,u=a*4;e[u]=Math.round(t[l]*255),e[u+1]=Math.round(t[l+1]*255),e[u+2]=Math.round(t[l+2]*255),e[u+3]=255}const s=new vw(e,256,1,Yn);return s.minFilter=oi,s.magFilter=oi,s.wrapS=Ar,s.needsUpdate=!0,s}function qw(r,e){const t=o_(r),s=Math.min(Math.max(Math.round(e*255),0),255)*3;return[Math.round(t[s]*255),Math.round(t[s+1]*255),Math.round(t[s+2]*255)]}function o_(r){switch(r){case"viridis":return Kw();case"coolwarm":return Zw();case"jet":return Qw();case"rainbow":return Jw();case"grayscale":return eT()}}function Kw(){const r=new Float32Array(768);return Cf([[.267,.004,.329],[.282,.14,.458],[.254,.265,.53],[.207,.372,.553],[.164,.471,.558],[.128,.567,.551],[.134,.658,.517],[.267,.749,.441],[.478,.821,.318],[.741,.873,.15],[.993,.906,.144]],r)}function Zw(){const r=new Float32Array(768);return Cf([[.23,.299,.754],[.552,.588,.893],[.866,.866,.866],[.897,.57,.462],[.706,.016,.15]],r)}function Qw(){const r=new Float32Array(768);return Cf([[0,0,.5],[0,0,1],[0,1,1],[1,1,0],[1,0,0],[.5,0,0]],r)}function Jw(){const r=new Float32Array(768);for(let e=0;e<256;e++){const s=(1-e/255)*300,[a,l,u]=tT(s/360,1,.5);r[e*3]=a,r[e*3+1]=l,r[e*3+2]=u}return r}function eT(){const r=new Float32Array(768);for(let e=0;e<256;e++){const t=e/255;r[e*3]=t,r[e*3+1]=t,r[e*3+2]=t}return r}function Cf(r,e){const t=r.length-1;for(let s=0;s<256;s++){const a=s/255,l=Math.min(Math.floor(a*t),t-1),u=a*t-l,d=r[l],h=r[l+1];e[s*3]=d[0]+(h[0]-d[0])*u,e[s*3+1]=d[1]+(h[1]-d[1])*u,e[s*3+2]=d[2]+(h[2]-d[2])*u}return e}function tT(r,e,t){const s=(1-Math.abs(2*t-1))*e,a=s*(1-Math.abs(r*6%2-1)),l=t-s/2;let u=0,d=0,h=0;switch(Math.floor(r*6)%6){case 0:u=s,d=a;break;case 1:u=a,d=s;break;case 2:d=s,h=a;break;case 3:d=a,h=s;break;case 4:u=a,h=s;break;case 5:u=s,h=a;break}return[u+l,d+l,h+l]}const nT=`// Contour Vertex Shader\r
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
`,iT=`// Contour Fragment Shader\r
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
`;function rT(r,e,t){for(let s=0;s<t.length;s++){const a=e[s];t[s]=a<r.length?r[a]:NaN}}function sT(r,e,t){for(let s=0;s<t.length;s++){const a=e[s];t[s]=a>=0&&a<r.length?r[a]:NaN}}class oT{constructor(){Gt(this,"lutTexture");Gt(this,"material",null);Gt(this,"originalMaterials",new Map);this.lutTexture=Sd("viridis")}createContourMaterial(e){return this.lutTexture=Sd(e.lut_name),this.material=new bi({vertexShader:nT,fragmentShader:iT,uniforms:{u_lut:{value:this.lutTexture},u_min:{value:e.min_value},u_max:{value:e.max_value},u_deform_scale:{value:0},u_use_flat_shading:{value:!1},u_nan_color:{value:new Bt(...e.nan_color)},u_above_color:{value:new Bt(...e.above_range_color)},u_below_color:{value:new Bt(...e.below_range_color)}},side:jn,transparent:!0}),this.material}applyScalarField(e,t,s){const[a,l]=s_(t),u=e.getAttribute("scalarValue"),d=u.array;if(s==="nodal"){const h=e.getAttribute("sourceNodeIndex");if(!h)throw new Error("Surface geometry is missing sourceNodeIndex for nodal contouring");rT(t,h.array,d)}else{const h=e.getAttribute("sourceElementIndex");if(!h)throw new Error("Surface geometry is missing sourceElementIndex for elemental contouring");sT(t,h.array,d)}return this.material&&(this.material.uniforms.u_use_flat_shading.value=s==="elemental"),u.needsUpdate=!0,{min:a,max:l}}updateRange(e,t){this.material&&(this.material.uniforms.u_min.value=e,this.material.uniforms.u_max.value=t)}setColorMap(e){this.lutTexture.dispose(),this.lutTexture=Sd(e),this.material&&(this.material.uniforms.u_lut.value=this.lutTexture)}getMaterial(){return this.material}swapMeshMaterials(e,t){for(const s of e)this.originalMaterials.has(s.partId)||this.originalMaterials.set(s.partId,s.mesh.material),s.mesh.material=t}restoreMeshMaterials(e){for(const t of e){const s=this.originalMaterials.get(t.partId);s&&(t.mesh.material=s)}this.originalMaterials.clear()}setDeformScale(e){this.material&&(this.material.uniforms.u_deform_scale.value=e)}dispose(){var e;this.lutTexture.dispose(),(e=this.material)==null||e.dispose(),this.originalMaterials.clear()}}function aT(r,e){const t=new Float32Array(e.length*3);for(let s=0;s<e.length;s++){const l=e[s]*3,u=s*3;t[u]=r[l]??0,t[u+1]=r[l+1]??0,t[u+2]=r[l+2]??0}return t}class lT{constructor(){Gt(this,"currentMaterial",null)}setDisplacement(e,t){const s=e.getAttribute("sourceNodeIndex");if(!s)throw new Error("Surface geometry is missing sourceNodeIndex for deformation mapping");const a=aT(t,s.array),l=e.getAttribute("displacement");l&&l.array.length===a.length?(l.array.set(a),l.needsUpdate=!0):e.setAttribute("displacement",new qt(a,3))}clearDisplacement(e){const t=e.getAttribute("displacement");t&&(t.array.fill(0),t.needsUpdate=!0)}setScale(e,t){this.currentMaterial=e,e.uniforms.u_deform_scale.value=t}getScale(){var e,t;return((t=(e=this.currentMaterial)==null?void 0:e.uniforms.u_deform_scale)==null?void 0:t.value)??0}}function cT(r,e){const t=ve(g=>g.activeFieldId),s=ve(g=>g.activeTimestep),a=ve(g=>g.modelId),l=ve(g=>g.status),u=ve(g=>g.fields),d=It(g=>g.colorMapConfig),h=et.useRef(null),p=et.useRef(-1),_=et.useRef(null);et.useEffect(()=>{var w;if(!r||!e||l!=="ready"||!a)return;if(!t){Ul(e,r),h.current=null,p.current=-1;return}const g=u.find(E=>E.id===t);if(!g){Ul(e,r);return}if(g.location==="integration_point"){ve.getState().setFieldValues(null),ve.getState().setFieldLoadError("Integration-point fields are not supported in MVP. Extrapolation would misrepresent provenance."),Ul(e,r);return}if(h.current===t&&p.current===s)return;(w=_.current)==null||w.abort();const x=new AbortController;return _.current=x,(async()=>{try{ve.getState().setFieldLoadError(null);const E=await ff(`/models/${a}/fields/${t}/data?step=${s}`);if(x.signal.aborted)return;const y=Af(E.buffer,E.meta.dtype);ve.getState().setFieldValues(y);const v=Gw(y);ve.getState().setFieldNanCount(v);const[N,D]=s_(y);Number.isNaN(N)||Number.isNaN(D)?(ve.getState().setFieldLoadError("All field values are NaN. Cannot compute contour range."),It.getState().setColorMapRange(0,1)):It.getState().setColorMapRange(N,D);const A=e.getBaseGeometry();if(!A)return;const G=It.getState().colorMapConfig;h.current!==t&&r.createContourMaterial(G),r.applyScalarField(A,y,g.location),!Number.isNaN(N)&&!Number.isNaN(D)&&r.updateRange(N,D);const F=r.getMaterial();F&&r.swapMeshMaterials(e.getMeshGroups(),F),h.current=t,p.current=s}catch(E){if(x.signal.aborted)return;ve.getState().setFieldValues(null),ve.getState().setFieldNanCount(0);const y=E instanceof Error?E.message:"Failed to load field data";y.includes("404")||y.includes("No data")?ve.getState().setFieldLoadError("No data at this step"):ve.getState().setFieldLoadError(y),Ul(e,r)}})(),()=>{x.abort()}},[t,s,a,l,u,r,e,d]),et.useEffect(()=>{!r||!t||r.setColorMap(d.lut_name)},[d.lut_name,r,t])}function Ul(r,e){ve.getState().setFieldValues(null),ve.getState().setFieldLoadError(null),ve.getState().setFieldNanCount(0),e.restoreMeshMaterials(r.getMeshGroups())}const yg=34e37;function uT(r,e,t,s,a){const l=It(y=>y.deformFieldId),u=It(y=>y.deformMode),d=It(y=>y.deformScale),h=ve(y=>y.activeTimestep),p=ve(y=>y.modelId),_=ve(y=>y.status),g=ve(y=>y.fields),x=ve(y=>y.nodeCoords_f64),S=et.useRef(null),w=et.useRef(null),E=et.useRef(-1);et.useEffect(()=>{var A;if(!r||!e||_!=="ready"||!p)return;const y=e.getBaseGeometry();if(!y)return;if(!l){Gs(r,y),w.current=null,E.current=-1;return}const v=g.find(G=>G.id===l);if(!v){Gs(r,y),ve.getState().setDeformLoadError("Deformation field not found");return}if(v.location!=="nodal"){Gs(r,y),ve.getState().setDeformLoadError(`Deformation requires a nodal field. "${v.name}" is ${v.location}.`);return}if(v.n_components!==3){Gs(r,y),ve.getState().setDeformLoadError(`Deformation requires a vector3 field. "${v.name}" has ${v.n_components} component(s).`);return}if(w.current===l&&E.current===h)return;(A=S.current)==null||A.abort();const N=new AbortController;return S.current=N,(async()=>{try{ve.getState().setDeformLoadError(null);const G=await ff(`/models/${p}/fields/${l}/data?step=${h}`);if(N.signal.aborted)return;const F=Af(G.buffer,G.meta.dtype),L=x?x.length/3:0,j=L*3;if(F.length!==j){Gs(r,y),ve.getState().setDeformLoadError(`Displacement array length mismatch: got ${F.length}, expected ${j} (${L} nodes × 3).`);return}ve.getState().setDisplacementValues(F),r.setDisplacement(y,F),w.current=l,E.current=h}catch(G){if(N.signal.aborted)return;ve.getState().setDisplacementValues(null),Gs(r,y);const F=G instanceof Error?G.message:"Failed to load displacement data";F.includes("404")||F.includes("No data")?ve.getState().setDeformLoadError("No data at this step"):ve.getState().setDeformLoadError(F)}})(),()=>{N.abort()}},[l,h,p,_,g,x,r,e]),et.useEffect(()=>{if(!r||!e)return;const y=e.getBaseGeometry();if(!y)return;let v=0;if(l)switch(u){case"undeformed":v=0;break;case"deformed":case"overlay":v=d;break}const N=ve.getState().displacement_f64;if(N&&v>0){let A=0;for(let G=0;G<N.length;G++){const F=Math.abs(N[G]);F>A&&Number.isFinite(F)&&(A=F)}if(A*v>yg){const G=yg/A;ve.getState().setDeformLoadError(`Scale clamped to ${G.toFixed(1)} to avoid Float32 overflow.`),v=G}}e.setDeformScale(v);const D=s==null?void 0:s.getMaterial();s&&D&&s.setDeformScale(v),t&&a&&(l&&u==="overlay"&&v>0?t.createOverlayWireframe(y,a):t.clearOverlay(a))},[u,d,l,r,e,s,t,a])}function Gs(r,e){r.clearDisplacement(e),ve.getState().setDisplacementValues(null),ve.getState().setDeformLoadError(null)}function dT(r){const e=new Float32Array(r.length*3);for(let t=0;t<r.length;t++){const s=r[t],[a,l,u]=a_(s+1);e[t*3]=a,e[t*3+1]=l,e[t*3+2]=u}return e}function fT(r){const e=new Float32Array(r.length*3);for(let t=0;t<r.length;t++){const s=r[t],[a,l,u]=a_(s+1);e[t*3]=a,e[t*3+1]=l,e[t*3+2]=u}return e}class hT{constructor(e,t){Gt(this,"pickingTarget");Gt(this,"pickingScene");Gt(this,"pickingMeshes",[]);Gt(this,"pixelBuffer");this.pickingTarget=new Pr(e,t,{format:Yn,type:Ci,minFilter:An,magFilter:An}),this.pickingScene=new n_,this.pixelBuffer=new Uint8Array(4)}buildPickingScene(e,t,s,a){if(this.clearPickingScene(),e.getAttribute("position").count===0)return;const u=e.getAttribute("sourceNodeIndex"),d=e.getAttribute("sourceElementIndex");if(!u)return;const h=a==="element"&&d?dT(d.array):fT(u.array),p=e.clone();p.setAttribute("color",new qt(h,3));const _=new bi({vertexShader:`
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
      `,uniforms:{u_deform_scale:{value:0}},side:jn}),g=new ai(p,_);this.pickingScene.add(g),this.pickingMeshes.push(g)}pick(e,t,s,a,l){e.setRenderTarget(this.pickingTarget),e.render(this.pickingScene,t),e.setRenderTarget(null),e.readRenderTargetPixels(this.pickingTarget,s,this.pickingTarget.height-a,1,1,this.pixelBuffer);const u=pT(this.pixelBuffer[0],this.pixelBuffer[1],this.pixelBuffer[2]);return u===0?null:{mode:l,id:u-1}}resize(e,t){this.pickingTarget.setSize(e,t)}setDeformScale(e){for(const t of this.pickingMeshes){const s=t.material;s.uniforms.u_deform_scale&&(s.uniforms.u_deform_scale.value=e)}}clearPickingScene(){for(const e of this.pickingMeshes)this.pickingScene.remove(e),e.geometry.dispose(),e.material.dispose();this.pickingMeshes=[]}dispose(){this.clearPickingScene(),this.pickingTarget.dispose()}}function a_(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function pT(r,e,t){return r<<16|e<<8|t}const l_=({pickedEntity:r})=>{const e=ve(h=>h.nodeCoords_f64),t=ve(h=>h.fieldValues_f64),s=ve(h=>h.fields),a=ve(h=>h.activeFieldId),l=ve(h=>h.fieldLoadError);if(!r)return null;const u=s.find(h=>h.id===a),d=u&&t&&!l;return Z.jsxs("div",{className:"panel-overlay panel-overlay--info",children:[Z.jsxs("div",{style:{fontWeight:600,marginBottom:8,fontSize:12},children:[r.mode==="node"?"⊙ Node":"◻ Element"," #",r.id]}),r.mode==="node"&&Z.jsx("div",{style:{fontSize:10,color:"var(--text-secondary)",marginBottom:6,fontStyle:"italic"},children:"Nearest surface vertex (MVP approximation)"}),r.mode==="node"&&e&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Coordinates (Float64)"}),["X","Y","Z"].map((h,p)=>{var _;return Z.jsxs("div",{className:"info-panel__row",children:[Z.jsx("span",{className:"info-panel__key",children:h}),Z.jsx("span",{className:"info-panel__value",children:((_=e[r.id*3+p])==null?void 0:_.toPrecision(15))??"N/A"})]},h)}),d&&u.location==="nodal"&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:8,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return Z.jsxs("div",{className:"info-panel__row",children:[Z.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),Z.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})]}),r.mode==="element"&&Z.jsx(Z.Fragment,{children:d&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4,marginBottom:4},children:[u.name," (Float64)"]}),Array.from({length:u.n_components},(h,p)=>{const _=t[r.id*u.n_components+p];return Z.jsxs("div",{className:"info-panel__row",children:[Z.jsx("span",{className:"info-panel__key",children:u.n_components===1?"Value":`C${p}`}),Z.jsx("span",{className:"info-panel__value",children:_!==void 0?_.toPrecision(15):"N/A"})]},p)})]})}),u&&l&&Z.jsxs("div",{style:{fontSize:11,color:"var(--accent-warning)",marginTop:8},children:["⚠ ",l]}),!u&&Z.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:4},children:"Select a field to see probe values."})]})};function mT(r,e){const s=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws/progress/${r}`,a=new WebSocket(s);return a.onmessage=l=>{try{const u=JSON.parse(l.data);e(u)}catch{console.warn("[WS] Failed to parse progress message:",l.data)}},a.onerror=l=>{console.error("[WS] WebSocket error:",l)},a.onclose=()=>{console.info(`[WS] Connection closed for model ${r}`)},()=>{(a.readyState===WebSocket.OPEN||a.readyState===WebSocket.CONNECTING)&&a.close()}}const Sg=1e3,gT=6e4,c_={length:"unspecified",force:"unspecified",time:"unspecified",temperature:"unspecified",declared_system:"unspecified"},_T={source_filename:"Unknown",file_format:"unknown",format_version:"unknown",solver_name:"unknown",solver_version:"unknown",title:"Untitled model",unit_system:c_,coordinate_system:"unspecified"};async function vT(r){console.info(`[ModelBootstrap] Status fetch start for ${r}`);const e=await Ko(`/models/${r}/status`);return console.info("[ModelBootstrap] Status fetch result",{modelId:r,response:e}),e}function xT(r,e){let t=!1,s,a=null;const l=Date.now(),u=()=>{t=!0,s!==void 0&&window.clearTimeout(s),a&&(a(),a=null)},d=g=>{console.info("[ModelBootstrap] Polling stopped",{modelId:r,reason:g}),u()},h=g=>{s=window.setTimeout(()=>{_()},Sg),console.info("[ModelBootstrap] Polling scheduled",{modelId:r,status:g,delayMs:Sg})},p=()=>{a||(console.info(`[ModelBootstrap] Polling start for ${r}`),a=mT(r,g=>{var x;t||(console.info("[ModelBootstrap] Progress message",{modelId:r,message:g}),(x=e.onProgress)==null||x.call(e,g),(g.status==="ready"||g.status==="error")&&_())}))},_=async()=>{if(!t)try{const g=await vT(r);if(console.info("[ModelBootstrap] Status response",{modelId:r,status:g.status,response:g}),e.onStatus(g),g.status==="uploading"||g.status==="parsing"){if(p(),Date.now()-l>=gT){d("timeout"),e.onTimeout();return}h(g.status);return}d(`terminal:${g.status}`)}catch(g){d("request-error"),e.onError(g instanceof Error?g:new Error("Unknown bootstrap error"))}};return _(),u}async function yT(r){console.info(`[Viewport] Metadata fetch start for ${r}`);const e=await Ko(`/models/${r}/metadata`),t=TT(e),s=wT(e.warnings);return console.info("[Viewport] Metadata fetch result",{modelId:r,warnings:s.length}),{metadata:t,warnings:s}}async function ST(r){var s;console.info(`[Viewport] Tree fetch start for ${r}`);const e=await Ko(`/models/${r}/tree`),t=ec(e);return console.info("[Viewport] Tree parse result",{modelId:r,root:t.name,childCount:((s=t.children)==null?void 0:s.length)??0}),t}async function MT(r){console.info(`[Viewport] Fields fetch start for ${r}`);const t=(await Ko(`/models/${r}/fields`)).map(AT);return console.info("[Viewport] Fields fetch result",{modelId:r,count:t.length}),t}async function ET(r){console.info(`[Viewport] Sets fetch start for ${r}`);const e=await Ko(`/models/${r}/sets`);return console.info("[Viewport] Sets fetch result",{modelId:r,count:e.length}),e}function wT(r){return r?r.map(e=>typeof e=="string"?{category:"Import Warning",message:e,severity:"warning",dismissible:!1}:e):[]}function TT(r){var t;const e={...c_,...((t=r.metadata)==null?void 0:t.unit_system)??{},...r.unit_system??{}};return{..._T,...r.metadata,unit_system:e}}function AT(r){const e=r.n_components??r.components??1,t=r.n_timesteps??r.timestep_count??1;return{id:r.id,name:r.name,location:r.location,n_components:e,n_timesteps:t,timesteps:Array.from({length:t},(s,a)=>({step_index:a,time_value:null})),provenance:{source_field_name:r.name,source_location:r.location,extrapolation_applied:!1,averaging_applied:!1,averaging_method:null,coordinate_system:"unspecified",warnings:[]}}}function ec(r){var s,a,l,u;if("type"in r)return r;const e=r.assembly??{},t=[...((s=e.children)==null?void 0:s.map(ec))??[],...((a=e.instances)==null?void 0:a.map((d,h)=>CT(d,h)))??[],...((l=e.parts)==null?void 0:l.map((d,h)=>u_(d,h)))??[],...((u=e.sets)==null?void 0:u.map((d,h)=>Rf(d,h)))??[]];return{id:e.id??"assembly-root",name:e.name??"Assembly",type:"assembly",children:t}}function CT(r,e){var t,s,a;return{id:r.id??`instance-${e}`,name:r.name??`Instance ${e+1}`,type:"instance",children:[...((t=r.children)==null?void 0:t.map(ec))??[],...((s=r.parts)==null?void 0:s.map((l,u)=>u_(l,u)))??[],...((a=r.sets)==null?void 0:a.map((l,u)=>Rf(l,u)))??[]]}}function u_(r,e){var t,s;return{id:r.id??`part-${e}`,name:r.name??`Part ${e+1}`,type:"part",children:[...((t=r.children)==null?void 0:t.map(ec))??[],...((s=r.sets)==null?void 0:s.map((a,l)=>Rf(a,l)))??[]]}}function Rf(r,e){return{id:r.id??`set-${e}`,name:r.name??`Set ${e+1}`,type:r.set_type==="element"?"element_set":"node_set",children:[]}}function RT(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("debugGeometry")==="1"}const bT=({containerRef:r})=>{var U;const e=et.useRef(null),t=et.useRef(null),s=et.useRef(null),a=et.useRef(null),l=et.useRef(null),u=et.useRef(null),d=et.useRef(null),[h,p]=et.useState(!0),[_,g]=et.useState(null);cT(l.current,s.current),uT(u.current,s.current,a.current,l.current,((U=t.current)==null?void 0:U.scene)??null);const x=ve(k=>k.modelId),S=ve(k=>k.status),w=ve(k=>k.bootstrapStatus),E=ve(k=>k.setMetadata),y=ve(k=>k.setWarnings),v=ve(k=>k.setTree),N=ve(k=>k.setFields),D=ve(k=>k.setSets),A=ve(k=>k.setNodeCoords),G=ve(k=>k.setSurfaceData),F=ve(k=>k.setActiveFieldId),L=ve(k=>k.setBootstrapLoading),j=ve(k=>k.setBootstrapLoaded),b=ve(k=>k.setBootstrapIdle),R=ve(k=>k.setBootstrapError),z=It(k=>k.wireframeVisible),le=et.useRef(null);if(et.useEffect(()=>{le.current=null,b()},[x,b]),et.useEffect(()=>{yd.isWebGL2Available()||p(!1)},[]),et.useEffect(()=>{const k=performance;if(k.memory){const Ee=k.memory.usedJSHeapSize/1048576;Ee>2048?console.error("[Memory] Heap exceeds 2GB - refusing further loads"):Ee>1536&&console.warn("[Memory] Heap approaching 1.5GB - performance may degrade")}},[S]),et.useEffect(()=>{const k=e.current;if(!k||!h||!yd.isWebGL2Available()){p(!1);return}let Ee=null;try{Ee=new yd(k),t.current=Ee,s.current=new Yw({debugMaterialMode:RT()}),a.current=new $w,l.current=new oT,u.current=new lT,d.current=new hT(k.clientWidth,k.clientHeight),Ee.start(),console.info("[Viewport] Scene mounted")}catch(re){console.error("[Viewport] Renderer initialization failure",re),p(!1),ve.getState().setBootstrapError("renderer initialization",`Bootstrap failed during renderer initialization: ${re instanceof Error?re.message:"Unknown renderer error"}`);return}const $=()=>{var re;if(Ee.renderer){const ge=Ee.renderer.domElement;(re=d.current)==null||re.resize(ge.width,ge.height)}};return window.addEventListener("resize",$),()=>{var re;window.removeEventListener("resize",$),Ee==null||Ee.dispose(),(re=d.current)==null||re.dispose(),t.current=null}},[h]),et.useEffect(()=>{if(S!=="ready"||!x||w==="loading"||w==="loaded"&&le.current===x)return;(async()=>{const Ee=t.current,$=s.current,re=a.current,ge=(Ae,Le)=>{const $e=Le instanceof Error?Le.message:"Failed to load model";console.error("[Viewport] Bootstrap failure",{modelId:x,step:Ae,error:Le}),R(Ae,`Bootstrap failed during ${Ae}: ${$e}`)};if(!Ee||!$||!re){ge("renderer initialization",new Error("Scene managers are not initialized"));return}const pe=Ae=>{console.info("[Viewport] Bootstrap step",{modelId:x,step:Ae}),L(Ae)};try{console.info(`[Viewport] Status became ready for ${x}`),console.info(`[Viewport] Bootstrap start for ${x}`),pe("loading metadata");const Ae=yT(x),Le=ST(x),$e=MT(x),Rt=ET(x);pe("fetching geometry");const[lt,St]=await Promise.all([ff(`/models/${x}/nodes`),r0(`/models/${x}/surfaces`)]);console.info("[Viewport] Nodes headers",{modelId:x,dtype:lt.meta.dtype,shape:lt.meta.shape,byteOrder:lt.meta.byteOrder}),console.info("[Viewport] Surfaces headers",{modelId:x,dtype:St.headers.dtype,byteOrder:St.headers.byteOrder,shape:St.headers.shape,offsets:St.headers.offsets});const W=St.surfaceIndices,Kt=St.surfaceNormals,dt=St.surfaceElementMap,at=Af(lt.buffer,lt.meta.dtype);console.info("[Viewport] Parsed nodes length",{modelId:x,length:at.length}),console.info("[Viewport] Parsed surface indices length",{modelId:x,length:W.length}),console.info("[Viewport] Parsed surface normals length",{modelId:x,length:Kt.length}),console.info("[Viewport] Parsed surface element map length",{modelId:x,length:dt.length}),A(at),G(W,Kt,dt),pe("creating geometry"),console.info("[Viewport] Geometry creation started",{modelId:x}),$.buildMesh(at,W,Kt,dt,new Map,Ee.scene);const Ke=$.getBaseGeometry();Ke&&re.createWireframe(Ke,Ee.scene),Ee.zoomToFit(),console.info("[Viewport] Geometry creation succeeded",{modelId:x}),console.info("[Viewport] Renderer init result",{modelId:x,nodeCount:at.length/3,triangleCount:W.length/3}),pe("fetching panels");const[xt,Ge,P,T]=await Promise.allSettled([Ae,Le,$e,Rt]);xt.status==="fulfilled"?(console.info("[Viewport] Metadata loaded",{modelId:x}),E(xt.value.metadata),y(xt.value.warnings??[]),xt.value.metadata.unit_system.declared_system==="unspecified"&&ve.getState().addWarning({category:"Missing Units",message:"Units not declared. Values shown without unit context.",severity:"warning",dismissible:!1})):console.error("[Viewport] Non-blocking metadata fetch failure",{modelId:x,error:xt.reason}),Ge.status==="fulfilled"?(console.info("[Viewport] Tree loaded",{modelId:x}),v(Ge.value)):(console.error("[Viewport] Non-blocking tree fetch failure",{modelId:x,error:Ge.reason}),v({id:"assembly-root",name:"Assembly",type:"assembly",children:[]})),P.status==="fulfilled"?(console.info("[Viewport] Fields loaded",{modelId:x,count:P.value.length}),N(P.value),P.value.length>0&&!ve.getState().activeFieldId&&F(P.value[0].id)):(console.error("[Viewport] Non-blocking fields fetch failure",{modelId:x,error:P.reason}),N([])),T.status==="fulfilled"?D(T.value):(console.error("[Viewport] Non-blocking sets fetch failure",{modelId:x,error:T.reason}),D([])),le.current=x,j()}catch(Ae){ge(ve.getState().bootstrapStep??"bootstrap",Ae)}})()},[w,x,F,R,j,L,N,b,E,A,D,G,v,y,S]),et.useEffect(()=>{var k;(k=a.current)==null||k.setVisible(z)},[z]),!h)return Z.jsxs("div",{className:"webgl-fallback",children:[Z.jsx("div",{className:"webgl-fallback__title",children:"WebGL2 Not Available"}),Z.jsx("div",{className:"webgl-fallback__text",children:"Your browser does not support WebGL2. The 3D viewer requires WebGL2 for rendering. You can still view model metadata and text-based summaries."})]});const ee=It(k=>k.pickMode),de=It(k=>k.deformMode),fe=It(k=>k.deformScale),ae=ve(k=>k.surfaceElementMap),ue=ve(k=>k.nodeCoords_f64),B=et.useRef({mode:"",gen:0}),ce=et.useRef(0);et.useEffect(()=>{S==="ready"&&ae&&(ce.current+=1)},[S,ae]),et.useEffect(()=>{const k=d.current,Ee=s.current;if(!k||!Ee||S!=="ready"||!ae)return;const $=Ee.getBaseGeometry();if(!$)return;const re={mode:ee,gen:ce.current};if(B.current.mode===re.mode&&B.current.gen===re.gen)return;const ge=ue?ue.length/3:0;k.buildPickingScene($,ae,ge,ee),B.current=re},[ee,S,ae,ue]),et.useEffect(()=>{const k=d.current;k&&k.setDeformScale(de==="undeformed"?0:fe)},[de,fe]);const se=et.useCallback(k=>{const Ee=d.current,$=t.current;if(!Ee||!$||S!=="ready")return;const ge=$.renderer.domElement.getBoundingClientRect(),pe=$.renderer.getPixelRatio(),Ae=Math.round((k.clientX-ge.left)*pe),Le=Math.round((k.clientY-ge.top)*pe),$e=Ee.pick($.renderer,$.camera,Ae,Le,ee);g($e?{mode:$e.mode,id:$e.id}:null)},[ee,S]);return Z.jsx("div",{ref:e,onClick:se,style:{width:"100%",height:"100%",position:"relative"},children:Z.jsx(l_,{pickedEntity:_})})},PT=()=>{var h,p;const r=ve(_=>_.fields),e=ve(_=>_.activeFieldId),t=ve(_=>_.metadata),s=ve(_=>_.fieldNanCount),a=It(_=>_.colorMapConfig),l=et.useRef(null),u=r.find(_=>_.id===e);if(et.useEffect(()=>{const _=l.current;if(!_||!u)return;const g=_.getContext("2d");if(!g)return;const x=_.width,S=_.height;for(let w=0;w<S;w++){const E=1-w/S,[y,v,N]=qw(a.lut_name,E);g.fillStyle=`rgb(${y}, ${v}, ${N})`,g.fillRect(0,w,x,1)}},[u,a]),!u)return null;const d=((h=t==null?void 0:t.unit_system)==null?void 0:h.declared_system)==="unspecified"?"":((p=t==null?void 0:t.unit_system)==null?void 0:p.length)??"";return Z.jsx("div",{className:"panel-overlay panel-overlay--legend",children:Z.jsxs("div",{className:"color-legend",children:[Z.jsxs("div",{className:"color-legend__title",children:[u.name,u.n_components>1?` (${u.n_components} comp)`:""]}),Z.jsxs("div",{style:{display:"flex",gap:6},children:[Z.jsx("canvas",{ref:l,width:24,height:200,className:"color-legend__gradient"}),Z.jsxs("div",{className:"color-legend__labels",style:{height:200,padding:"2px 0"},children:[Z.jsxs("span",{children:[a.max_value.toPrecision(4),d?` ${d}`:""]}),Z.jsx("span",{children:((a.max_value+a.min_value)/2).toPrecision(4)}),Z.jsxs("span",{children:[a.min_value.toPrecision(4),d?` ${d}`:""]})]})]}),Z.jsxs("div",{style:{fontSize:10,color:"var(--text-secondary)",marginTop:4},children:[u.location," • ",a.lut_name,a.lut_name==="jet"&&Z.jsx("span",{style:{color:"var(--accent-warning)",marginLeft:4},children:"⚠ not perceptually uniform"})]}),s>0&&Z.jsxs("div",{style:{fontSize:10,color:"var(--accent-warning)",marginTop:2},children:[s," NaN value",s!==1?"s":""," (grey)"]})]})})},LT=()=>{const r=ve(t=>t.metadata);if(!r)return Z.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)"},children:"No metadata"});const e=[["File",r.source_filename],["Format",`${r.file_format} (${r.format_version})`],["Solver",r.solver_name],["Version",r.solver_version],["Title",r.title],["Coord System",r.coordinate_system],["Length Unit",r.unit_system.length],["Force Unit",r.unit_system.force],["Time Unit",r.unit_system.time],["Temp Unit",r.unit_system.temperature],["System",r.unit_system.declared_system]];return Z.jsx("div",{style:{maxHeight:200,overflowY:"auto"},children:e.map(([t,s])=>Z.jsxs("div",{className:"info-panel__row",children:[Z.jsx("span",{className:"info-panel__key",children:t}),Z.jsx("span",{className:"info-panel__value",style:{color:s==="unspecified"||s==="Not specified"?"var(--accent-warning)":void 0},children:s})]},t))})},DT=()=>{const r=ve(d=>d.warnings),[e,t]=et.useState(new Set),[s,a]=et.useState(!1),l=r.filter((d,h)=>d.dismissible?!e.has(h):!0);if(l.length===0)return null;const u=d=>{t(h=>new Set(h).add(d))};return Z.jsxs("div",{className:"panel-overlay panel-overlay--warning",children:[Z.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"center",gap:8},onClick:()=>a(!s),children:[Z.jsxs("span",{style:{fontWeight:600},children:["⚠ ",l.length," warning",l.length!==1?"s":""]}),Z.jsx("span",{style:{fontSize:10},children:s?"▲":"▼"})]}),s&&Z.jsx("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:4},children:r.map((d,h)=>d.dismissible&&e.has(h)?null:Z.jsxs("div",{className:"warning-banner",children:[Z.jsxs("span",{style:{flex:1},children:[Z.jsxs("strong",{children:["[",d.category,"]"]})," ",d.message]}),d.dismissible&&Z.jsx("button",{className:"warning-banner__close",onClick:p=>{p.stopPropagation(),u(h)},children:"✕"})]},h))})]})},NT=()=>{const r=new URLSearchParams(window.location.search).get("modelId"),e=ve(L=>L.modelId),t=ve(L=>L.status),s=ve(L=>L.bootstrapStatus),a=ve(L=>L.warnings),l=ve(L=>L.tree),u=ve(L=>L.metadata),d=ve(L=>L.fields),h=ve(L=>L.activeFieldId),p=et.useRef(null),_=ve(L=>L.setModelId),g=ve(L=>L.setStatus),x=ve(L=>L.setErrorMessage),S=ve(L=>L.setParseProgress),w=ve(L=>L.resetModel),E=ve(L=>L.setBootstrapIdle);et.useEffect(()=>{!r||e===r||(console.info(`[App] Detected modelId from URL: ${r}`),w(),_(r),S(0),x(null),E())},[e,r,w,E,x,_,S]),et.useEffect(()=>{if(e&&!(t==="ready"||t==="error"))return console.info("[App] Starting status lifecycle monitor",{modelId:e,status:t}),xT(e,{onStatus:L=>{if(console.info("[App] Status response payload",{modelId:e,response:L}),L.status==="ready"){console.info(`[App] Transition to ready for ${e}`),g("ready"),S(100);return}if(L.status==="error"){g("error"),x(L.error_message??"Model parsing failed");return}g(L.status)},onProgress:L=>{S(L.progress*100)},onError:L=>{console.error("[App] Bootstrap error",L),g("error"),x(`Status polling failed: ${L.message||"Failed to bootstrap model"}`)},onTimeout:()=>{const L="Model parsing timed out after 60 seconds";console.error("[App] Bootstrap timeout",{modelId:e}),g("error"),x(L)}})},[e,x,S,g,t]);const y=t==="ready",v=u!==null||l!==null||d.length>0,N=y||t==="error"&&v,D=!!e&&t==="idle",A=t==="parsing"||t==="uploading",G=t==="ready"&&s!=="loaded",F=!e&&t!=="ready";return Z.jsxs("div",{className:"app-layout",children:[Z.jsx(m0,{}),Z.jsxs("div",{className:"sidebar",children:[(F||t==="parsing"||t==="error")&&Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Upload / Status"}),Z.jsx(c0,{})]}),N&&Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Model Tree"}),Z.jsx(d0,{})]}),Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Field"}),Z.jsx(f0,{})]}),Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Timestep"}),Z.jsx(h0,{})]}),Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Deformation"}),Z.jsx(p0,{})]}),Z.jsxs("div",{className:"sidebar__section",children:[Z.jsx("div",{className:"sidebar__section-title",children:"Metadata"}),Z.jsx(LT,{})]})]})]}),Z.jsxs("div",{className:"viewport",ref:p,children:[t==="idle"&&!e?Z.jsx("div",{className:"no-data-message",children:"Upload a VTK/VTU file to begin"}):t==="uploading"?Z.jsx("div",{className:"no-data-message",children:"Uploading..."}):D?Z.jsx("div",{className:"no-data-message",children:"Checking model status..."}):A?Z.jsx("div",{className:"no-data-message",children:e?`Parsing ${e}...`:"Parsing..."}):t==="error"?Z.jsx("div",{className:"no-data-message",style:{color:"var(--accent-danger)"},children:"Error loading model. Check sidebar for details."}):Z.jsxs(Z.Fragment,{children:[Z.jsx(bT,{containerRef:p}),G&&Z.jsx("div",{className:"no-data-message",children:"Loading model..."})]}),N&&h&&Z.jsx(PT,{}),N&&Z.jsx(l_,{}),a.length>0&&Z.jsx(DT,{})]})]})};e0.createRoot(document.getElementById("root")).render(Z.jsx(Wo.StrictMode,{children:Z.jsx(NT,{})}));
