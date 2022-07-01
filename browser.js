// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e},p=r()?l:c,_=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e){return e!=e},s=Math.floor;function b(e,r,t,n){var o,i,u,a,f,l,c,p,_,y,v,m,j;if(e<=0)return 0;if(1===e||0===t)return d(r[n])?0:r[n];if(o=n,e<8){for(v=0,j=0;j<e;j++)!1===d(r[o])&&(v+=r[o]),o+=t;return v}if(e<=128){for(i=d(r[o])?0:r[o],u=d(r[o+=t])?0:r[o],a=d(r[o+=t])?0:r[o],f=d(r[o+=t])?0:r[o],l=d(r[o+=t])?0:r[o],c=d(r[o+=t])?0:r[o],p=d(r[o+=t])?0:r[o],_=d(r[o+=t])?0:r[o],o+=t,y=e%8,j=8;j<e-y;j+=8)i+=d(r[o])?0:r[o],u+=d(r[o+=t])?0:r[o],a+=d(r[o+=t])?0:r[o],f+=d(r[o+=t])?0:r[o],l+=d(r[o+=t])?0:r[o],c+=d(r[o+=t])?0:r[o],p+=d(r[o+=t])?0:r[o],_+=d(r[o+=t])?0:r[o],o+=t;for(v=i+u+(a+f)+(l+c+(p+_));j<e;j++)!1===d(r[o])&&(v+=r[o]),o+=t;return v}return m=s(e/2),b(m-=m%8,r,t,o)+b(e-m,r,t,o+m*t)}function y(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return d(r[0])?0:r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)!1===d(r[n])&&(o+=r[n]),n+=t;return o}return b(e,r,t,n)}return _(y,"ndarray",b),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dsnansumpw=r();
//# sourceMappingURL=browser.js.map
