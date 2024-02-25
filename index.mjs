// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";function d(r,d,o,m,l){var v,c,f,j,p;return arguments.length>5&&(v=arguments[5]),j=r[0],s(j)&&(c=e(a(j))),p=r[1],s(p)&&(f=t(a(p))),c||f?function(r,s,e,t,i,n,a){var d,o,m,l,v,c,f,j,p,h,b;if(!((p=s[0])<=0))for(v=(m=e[0])<0?(1-p)*m:0,c=(l=e[1])<0?(1-p)*l:0,f=r[0],j=r[1],d=t[0],o=t[1],b=0;b<p;b++)void 0!==(h=n.call(a,d(f,v),b,[v,c],[f,j]))&&o(j,c,i(h)),v+=m,c+=l}(r,d,o,[c=c||i(a(j)),f=f||n(a(p))],m,l,v):function(r,s,e,t,i,n){var a,d,o,m,l,v,c,f,j;if(!((c=s[0])<=0))for(o=(a=e[0])<0?(1-c)*a:0,m=(d=e[1])<0?(1-c)*d:0,l=r[0],v=r[1],j=0;j<c;j++)void 0!==(f=i.call(n,l[o],j,[o,m],[l,v]))&&(v[m]=t(f)),o+=a,m+=d}(r,d,o,m,l,v)}function o(r,d,o,m,l,v){var c,f,j,p,h;return arguments.length>6&&(c=arguments[6]),p=r[0],s(p)&&(f=e(a(p))),h=r[1],s(h)&&(j=t(a(h))),f||j?function(r,s,e,t,i,n,a,d){var o,m,l,v,c,f,j,p,h,b,y;if(!((h=s[0])<=0))for(c=t[0],f=t[1],l=e[0],v=e[1],j=r[0],p=r[1],o=i[0],m=i[1],y=0;y<h;y++)void 0!==(b=a.call(d,o(j,c),y,[c,f],[j,p]))&&m(p,f,n(b)),c+=l,f+=v}(r,d,o,m,[f=f||i(a(p)),j=j||n(a(h))],l,v,c):function(r,s,e,t,i,n,a){var d,o,m,l,v,c,f,j,p;if(!((f=s[0])<=0))for(m=t[0],l=t[1],d=e[0],o=e[1],v=r[0],c=r[1],p=0;p<f;p++)void 0!==(j=n.call(a,v[m],p,[m,l],[v,c]))&&(c[l]=i(j)),m+=d,l+=o}(r,d,o,m,l,v,c)}r(d,"ndarray",o);export{d as default,o as ndarray};
//# sourceMappingURL=index.mjs.map
