var w={exports:{}},t={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=60103,d=60106,o=60107,c=60108,i=60114,u=60109,f=60110,s=60112,p=60113,$=60120,l=60115,y=60116,v=60121,b=60122,C=60117,_=60129,g=60131;if(typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;a=r("react.element"),d=r("react.portal"),o=r("react.fragment"),c=r("react.strict_mode"),i=r("react.profiler"),u=r("react.provider"),f=r("react.context"),s=r("react.forward_ref"),p=r("react.suspense"),$=r("react.suspense_list"),l=r("react.memo"),y=r("react.lazy"),v=r("react.block"),b=r("react.server.block"),C=r("react.fundamental"),_=r("react.debug_trace_mode"),g=r("react.legacy_hidden")}function n(e){if(typeof e=="object"&&e!==null){var m=e.$$typeof;switch(m){case a:switch(e=e.type,e){case o:case i:case c:case p:case $:return e;default:switch(e=e&&e.$$typeof,e){case f:case s:case y:case l:case u:return e;default:return m}}case d:return m}}}var S=u,M=a,P=s,h=o,F=y,z=l,E=d,j=i,k=c,I=p;t.ContextConsumer=f;t.ContextProvider=S;t.Element=M;t.ForwardRef=P;t.Fragment=h;t.Lazy=F;t.Memo=z;t.Portal=E;t.Profiler=j;t.StrictMode=k;t.Suspense=I;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return n(e)===f};t.isContextProvider=function(e){return n(e)===u};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a};t.isForwardRef=function(e){return n(e)===s};t.isFragment=function(e){return n(e)===o};t.isLazy=function(e){return n(e)===y};t.isMemo=function(e){return n(e)===l};t.isPortal=function(e){return n(e)===d};t.isProfiler=function(e){return n(e)===i};t.isStrictMode=function(e){return n(e)===c};t.isSuspense=function(e){return n(e)===p};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===o||e===i||e===_||e===c||e===p||e===$||e===g||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===s||e.$$typeof===C||e.$$typeof===v||e[0]===b)};t.typeOf=n;(function(e){e.exports=t})(w);export{w as r};
//# sourceMappingURL=index.4126b083.js.map
