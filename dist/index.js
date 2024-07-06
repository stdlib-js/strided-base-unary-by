"use strict";var d=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var N=d(function(sr,S){
function L(e,a,v,n,s,c,i){var r,t,u,o,g,y,q,x,f;if(q=a[0],!(q<=0))for(u=n[0],o=n[1],r=v[0],t=v[1],g=e[0],y=e[1],f=0;f<q;f++)x=c.call(i,g[u],f,[u,o],[g,y]),x!==void 0&&(y[o]=s(x)),u+=r,o+=t}S.exports=L
});var h=d(function(cr,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),M=N();function P(e,a,v,n,s,c){var i,r;return r=a[0],i=[O(r,v[0]),O(r,v[1])],M(e,a,v,i,n,s,c)}R.exports=P
});var G=d(function(or,j){
function Q(e,a,v,n,s,c,i,r){var t,u,o,g,y,q,x,f,m,p,A;if(m=a[0],!(m<=0))for(y=n[0],q=n[1],o=v[0],g=v[1],x=e[0],f=e[1],t=s[0],u=s[1],A=0;A<m;A++)p=i.call(r,t(x,y),A,[y,q],[x,f]),p!==void 0&&u(f,q,c(p)),y+=o,q+=g}j.exports=Q
});var C=d(function(yr,z){
var w=require('@stdlib/strided-base-stride2offset/dist'),T=G();function U(e,a,v,n,s,c,i){var r,t;return t=a[0],r=[w(t,v[0]),w(t,v[1])],T(e,a,v,r,n,s,c,i)}z.exports=U
});var F=d(function(qr,E){
var D=require('@stdlib/array-base-assert-is-accessor-array/dist'),V=require('@stdlib/array-base-accessor-getter/dist'),W=require('@stdlib/array-base-accessor-setter/dist'),X=require('@stdlib/array-base-getter/dist'),Y=require('@stdlib/array-base-setter/dist'),B=require('@stdlib/array-dtype/dist'),Z=h(),_=C();function $(e,a,v,n,s){var c,i,r,t,u;return arguments.length>5&&(c=arguments[5]),t=e[0],D(t)&&(i=V(B(t))),u=e[1],D(u)&&(r=W(B(u))),i||r?(i=i||X(B(t)),r=r||Y(B(u)),_(e,a,v,[i,r],n,s,c)):Z(e,a,v,n,s,c)}E.exports=$
});var J=d(function(fr,I){
var H=require('@stdlib/array-base-assert-is-accessor-array/dist'),b=require('@stdlib/array-base-accessor-getter/dist'),k=require('@stdlib/array-base-accessor-setter/dist'),rr=require('@stdlib/array-base-getter/dist'),er=require('@stdlib/array-base-setter/dist'),l=require('@stdlib/array-dtype/dist'),ar=N(),tr=G();function vr(e,a,v,n,s,c){var i,r,t,u,o;return arguments.length>6&&(i=arguments[6]),u=e[0],H(u)&&(r=b(l(u))),o=e[1],H(o)&&(t=k(l(o))),r||t?(r=r||rr(l(u)),t=t||er(l(o)),tr(e,a,v,n,[r,t],s,c,i)):ar(e,a,v,n,s,c,i)}I.exports=vr
});var ir=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=F(),ur=J();ir(K,"ndarray",ur);module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
