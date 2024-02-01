"use strict";var p=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var h=p(function(ir,N){
function J(a,n,s,y,f,q){var t,v,e,r,i,c,u,x,o;if(u=n[0],!(u<=0))for(t=s[0],v=s[1],t<0?e=(1-u)*t:e=0,v<0?r=(1-u)*v:r=0,i=a[0],c=a[1],o=0;o<u;o++)x=f.call(q,i[e],o,[e,r],[i,c]),x!==void 0&&(c[r]=y(x)),e+=t,r+=v}N.exports=J
});var S=p(function(tr,G){
function K(a,n,s,y,f,q,t){var v,e,r,i,c,u,x,o,g,d,l;if(g=n[0],!(g<=0))for(r=s[0],i=s[1],r<0?c=(1-g)*r:c=0,i<0?u=(1-g)*i:u=0,x=a[0],o=a[1],v=y[0],e=y[1],l=0;l<g;l++)d=q.call(t,v(x,c),l,[c,u],[x,o]),d!==void 0&&e(o,u,f(d)),c+=r,u+=i}G.exports=K
});var j=p(function(ur,R){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),L=require('@stdlib/array-base-accessor-getter/dist'),M=require('@stdlib/array-base-accessor-setter/dist'),P=require('@stdlib/array-base-getter/dist'),Q=require('@stdlib/array-base-setter/dist'),B=require('@stdlib/array-dtype/dist'),T=h(),U=S();function V(a,n,s,y,f){var q,t,v,e,r;return arguments.length>5&&(q=arguments[5]),e=a[0],O(e)&&(t=L(B(e))),r=a[1],O(r)&&(v=M(B(r))),t||v?(t=t||P(B(e)),v=v||Q(B(r)),U(a,n,s,[t,v],y,f,q)):T(a,n,s,y,f,q)}R.exports=V
});var z=p(function(nr,w){
function W(a,n,s,y,f,q,t){var v,e,r,i,c,u,x,o,g;if(x=n[0],!(x<=0))for(r=y[0],i=y[1],v=s[0],e=s[1],c=a[0],u=a[1],g=0;g<x;g++)o=q.call(t,c[r],g,[r,i],[c,u]),o!==void 0&&(u[i]=f(o)),r+=v,i+=e}w.exports=W
});var D=p(function(sr,C){
function X(a,n,s,y,f,q,t,v){var e,r,i,c,u,x,o,g,d,l,A;if(d=n[0],!(d<=0))for(u=y[0],x=y[1],i=s[0],c=s[1],o=a[0],g=a[1],e=f[0],r=f[1],A=0;A<d;A++)l=t.call(v,e(o,u),A,[u,x],[o,g]),l!==void 0&&r(g,x,q(l)),u+=i,x+=c}C.exports=X
});var H=p(function(yr,F){
var E=require('@stdlib/array-base-assert-is-accessor-array/dist'),Y=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),_=require('@stdlib/array-base-getter/dist'),$=require('@stdlib/array-base-setter/dist'),m=require('@stdlib/array-dtype/dist'),b=z(),k=D();function rr(a,n,s,y,f,q){var t,v,e,r,i;return arguments.length>6&&(t=arguments[6]),r=a[0],E(r)&&(v=Y(m(r))),i=a[1],E(i)&&(e=Z(m(i))),v||e?(v=v||_(m(r)),e=e||$(m(i)),k(a,n,s,y,[v,e],f,q,t)):b(a,n,s,y,f,q,t)}F.exports=rr
});var er=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=j(),vr=H();er(I,"ndarray",vr);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
