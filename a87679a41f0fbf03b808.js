/*! For license information please see a87679a41f0fbf03b808.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{184:function(t,e,r){var n=r(224);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(194).default)("02ffb6e4",n,!0,{})},185:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},189:function(t,e,r){(function(t,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Set]",s=/\w*$/,u=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,f={};f[n]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[a]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[c]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[o]=f["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,h=p||d||Function("return this")(),b=e&&!e.nodeType&&e,y=b&&"object"==typeof r&&r&&!r.nodeType&&r,_=y&&y.exports===b;function g(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function v(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function w(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var x,k=Array.prototype,I=Function.prototype,S=Object.prototype,P=h["__core-js_shared__"],D=(x=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",$=I.toString,M=S.hasOwnProperty,L=S.toString,E=RegExp("^"+$.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),B=_?h.Buffer:void 0,N=h.Symbol,C=h.Uint8Array,F=w(Object.getPrototypeOf,Object),T=Object.create,W=S.propertyIsEnumerable,z=k.splice,R=Object.getOwnPropertySymbols,U=B?B.isBuffer:void 0,V=w(Object.keys,Object),G=yt(h,"DataView"),q=yt(h,"Map"),H=yt(h,"Promise"),J=yt(h,"Set"),Q=yt(h,"WeakMap"),K=yt(Object,"create"),X=jt(G),Y=jt(q),Z=jt(H),tt=jt(J),et=jt(Q),rt=N?N.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function st(t,e){var r=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&M.call(t,"callee")&&(!W.call(t,"callee")||L.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var a in t)!e&&!M.call(t,a)||i&&("length"==a||mt(a,o))||r.push(a);return r}function ut(t,e,r){var n=t[e];M.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function ft(t,e,r,u,l,p,d){var h;if(u&&(h=p?u(t,l,p,d):u(t)),void 0!==h)return h;if(!It(t))return t;var b=wt(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&M.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var y=gt(t),_=y==o||y==i;if(xt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==y||y==n||_&&!p){if(j(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=F(t),It(e)?T(e):{});var e}(_?{}:t),!e)return function(t,e){return ht(t,_t(t),e)}(t,function(t,e){return t&&ht(e,St(e),t)}(h,t))}else{if(!f[y])return p?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return dt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return v(e?r(O(t),!0):O(t),g,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,s.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,r){return v(e?r(A(t),!0):A(t),m,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,y,ft,e)}}d||(d=new ct);var w=d.get(t);if(w)return w;if(d.set(t,h),!b)var x=r?function(t){return function(t,e,r){var n=e(t);return wt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,St,_t)}(t):St(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(n,o){x&&(n=t[o=n]),ut(h,o,ft(n,e,r,u,o,t,d))})),h}function pt(t){return!(!It(t)||(e=t,D&&D in e))&&(kt(t)||j(t)?E:u).test(jt(t));var e}function dt(t){var e=new t.constructor(t.byteLength);return new C(e).set(new C(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;ut(r,a,void 0===c?t[a]:c)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function yt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=K?K(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return M.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:M.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():z.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return lt(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(q||it),string:new ot}},at.prototype.delete=function(t){return bt(this,t).delete(t)},at.prototype.get=function(t){return bt(this,t).get(t)},at.prototype.has=function(t){return bt(this,t).has(t)},at.prototype.set=function(t,e){return bt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var _t=R?w(R,Object):function(){return[]},gt=function(t){return L.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||S)}function jt(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(G&&"[object DataView]"!=gt(new G(new ArrayBuffer(1)))||q&&gt(new q)!=a||H&&"[object Promise]"!=gt(H.resolve())||J&&gt(new J)!=c||Q&&"[object WeakMap]"!=gt(new Q))&&(gt=function(t){var e=L.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var wt=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!kt(t)}var xt=U||function(){return!1};function kt(t){var e=It(t)?L.call(t):"";return e==o||e==i}function It(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function St(t){return At(t)?st(t):function(t){if(!vt(t))return V(t);var e=[];for(var r in Object(t))M.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}r.exports=function(t){return ft(t,!0,!0)}}).call(this,r(59),r(185)(t))},195:function(t,e,r){"use strict";var n=r(184);r.n(n).a},207:function(t,e,r){"use strict";var n={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find(({path:t})=>t===this.href)))}}},o=r(61),i=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.isRouter?"router-link":"a",{tag:"component",attrs:{href:this.isRouter?null:this.href,to:this.isRouter?this.to||this.href:null}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},208:function(t,e,r){"use strict";r(138),r(13),r(55),r(6);var n=r(112),o=r(83);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,normal:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(n.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:r}=this;if(r)return r;const n="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return n?n.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:r}=this;return t||(e?r.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t}=this.$el,r=this.src[((t,e,r)=>{let n,o;for(const i in r){const a=r[i];if(void 0!==a&&t[i]){if(void 0!==o)if(null===a){if(o>=e)continue}else if(a<e||null!==o&&a>o)continue;n=i,o=a}}return n})(this.src,t,this.containerBreakpoints)],{url:n,size:o}=r||this.defaultImgObj;if(e=n,t&&o&&this.canCalcHeight){const[e,r]=o.split("x").map(t=>parseInt(t,10));r&&(this.height="".concat(t>=e?r:t*r/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:e.replace(/\.webp$/,""),type:"image/".concat("png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick(()=>{const t=this.$el;Object(o.a)(t,a(a({},this.lozadOptions),{},{loaded:t=>{const{localFallbackSrc:e}=this,r="IMG"===t.tagName?t:t.lastChild;r.style.opacity=0,r.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const r=document.createElement("IMG");r.src=e,t.parentNode.insertBefore(r,t.nextSibling)},r.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick(()=>{this.opacity=r.style.opacity=null,this.$emit("load")})}}})).observe()})}},u=(r(195),r(61)),l=Object(u.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var n=t.srcset,o=t.type;return r("source",{key:e,attrs:{srcset:n,type:o}})})):r("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=l.exports},209:function(t,e,r){"use strict";var n=r(34),o=r(45),i=r(46),a=r(47),c=r(102);const s=(t,e)=>{const{type:r,value:n}=e;if(n)return"percentage"===r?t*(100-n)/100:t-n};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(o.a)(n.i),i19from:()=>Object(o.a)(n.cb),i19interestFree:()=>Object(o.a)(n.nb),i19of:()=>Object(o.a)(n.Nb),i19to:()=>Object(o.a)(n.Mc),i19upTo:()=>Object(o.a)(n.Qc),price(){const t=Object(i.a)(this.product);return this.extraDiscount.value?s(t,this.extraDiscount):t},comparePrice(){return Object(a.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(i.a)(this.product):void 0},priceWithDiscount(){return s(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:c.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,r=parseInt(this.price/e,10);this.installmentsNumber=Math.min(r,t.max_number)}},updateDiscount(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},created(){if(this.installmentsOption||this.discountOption)this.updateInstallments(this.installmentsOption),this.updateDiscount(this.discountOption);else{const t="object"==typeof window&&window.storefront;if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e);const r=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};r()||t.on("info:apply_discount",r)}}}},l=(r(195),r(61)),f=Object(l.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?r("span",{staticClass:"prices__compare"},[t.isLiteral?[t._v(" "+t._s(t.i19from)+" "),r("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),t._v(" "+t._s(t.i19to)+" ")]:r("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),r("strong",{staticClass:"prices__value"},[t._v(" "+t._s(t.formatMoney(t.price))+" ")]),r("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?r("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?r("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?r("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),r("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?r("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?r("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[r("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),r("small",[t._v(" "+t._s(t.discountLabel)+" ")])]:[r("small",[t._v(" "+t._s(t.i19asOf)+" ")]),r("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=f.exports},224:function(t,e,r){(e=r(193)(!1)).push([t.i,"",""]),t.exports=e},83:function(t,e,r){"use strict";const n="undefined"!=typeof document&&document.documentMode,o={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){const e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let r;for(let t=0;t<=e.length-1;t++)r=e[t].getAttribute("data-src"),r&&(e[t].src=r);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(",").join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const e=t.getAttribute("data-background-image-set").split(",");let r=e[0].substr(0,e[0].indexOf(" "))||e[0];r=-1===r.indexOf("url(")?`url(${r})`:r,1===e.length?t.style.backgroundImage=r:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${r}; background-image: -webkit-image-set(${e}); background-image: image-set(${e})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function i(t){t.setAttribute("data-loaded",!0)}const a=t=>"true"===t.getAttribute("data-loaded");e.a=function(t=".lozad",e={}){const{root:r,rootMargin:n,threshold:c,load:s,loaded:u}=Object.assign({},o,e);let l;return"undefined"!=typeof window&&window.IntersectionObserver&&(l=new IntersectionObserver(((t,e)=>(r,n)=>{r.forEach(r=>{(r.intersectionRatio>0||r.isIntersecting)&&(n.unobserve(r.target),a(r.target)||(t(r.target),i(r.target),e(r.target)))})})(s,u),{root:r,rootMargin:n,threshold:c})),{observe(){const e=((t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t))(t,r);for(let t=0;t<e.length;t++)a(e[t])||(l?l.observe(e[t]):(s(e[t]),i(e[t]),u(e[t])))},triggerLoad(t){a(t)||(s(t),i(t),u(t))},observer:l}}}}]);
//# sourceMappingURL=a87679a41f0fbf03b808.js.map