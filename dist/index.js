"use strict";var y=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var j=y(function(J,R){
var u=require('@stdlib/math-base-assert-is-nanf/dist'),S=require('@stdlib/math-base-special-floor/dist'),Z=128;function w(v,a,n,M){var r,o,i,q,p,m,c,l,t,O,f,s,e;if(v<=0)return 0;if(r=M,n===0)return u(a[r])?0:v*a[r];if(v<8){for(f=0,e=0;e<v;e++)u(a[r])===!1&&(f+=a[r]),r+=n;return f}if(v<=Z){for(o=u(a[r])?0:a[r],r+=n,i=u(a[r])?0:a[r],r+=n,q=u(a[r])?0:a[r],r+=n,p=u(a[r])?0:a[r],r+=n,m=u(a[r])?0:a[r],r+=n,c=u(a[r])?0:a[r],r+=n,l=u(a[r])?0:a[r],r+=n,t=u(a[r])?0:a[r],r+=n,O=v%8,e=8;e<v-O;e+=8)o+=u(a[r])?0:a[r],r+=n,i+=u(a[r])?0:a[r],r+=n,q+=u(a[r])?0:a[r],r+=n,p+=u(a[r])?0:a[r],r+=n,m+=u(a[r])?0:a[r],r+=n,c+=u(a[r])?0:a[r],r+=n,l+=u(a[r])?0:a[r],r+=n,t+=u(a[r])?0:a[r],r+=n;for(f=o+i+(q+p)+(m+c+(l+t)),e;e<v;e++)u(a[r])===!1&&(f+=a[r]),r+=n;return f}return s=S(v/2),s-=s%8,w(s,a,n,r)+w(v-s,a,n,r+s*n)}R.exports=w
});var B=y(function(P,_){
var b=require('@stdlib/strided-base-stride2offset/dist'),g=j();function h(v,a,n){return g(v,a,n,b(v,n))}_.exports=h
});var K=y(function(Q,I){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),z=j();k(C,"ndarray",z);I.exports=C
});var A=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=K(),E,L=D(A(__dirname,"./native.js"));F(L)?E=G:E=L;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
