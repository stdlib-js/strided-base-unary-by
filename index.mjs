// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";function d(r,s,e,t,i,n){var a,d,o,m,l,v,c,f,j;if(!((c=s[0])<=0))for(o=(a=e[0])<0?(1-c)*a:0,m=(d=e[1])<0?(1-c)*d:0,l=r[0],v=r[1],j=0;j<c;j++)void 0!==(f=i.call(n,l[o],j,[o,m],[l,v]))&&(v[m]=t(f)),o+=a,m+=d}function o(r,s,e,t,i,n,a){var d,o,m,l,v,c,f,j,p,h,b;if(!((p=s[0])<=0))for(v=(m=e[0])<0?(1-p)*m:0,c=(l=e[1])<0?(1-p)*l:0,f=r[0],j=r[1],d=t[0],o=t[1],b=0;b<p;b++)void 0!==(h=n.call(a,d(f,v),b,[v,c],[f,j]))&&o(j,c,i(h)),v+=m,c+=l}function m(r,m,l,v,c){var f,j,p,h,b;return arguments.length>5&&(f=arguments[5]),h=r[0],s(h)&&(j=e(a(h))),b=r[1],s(b)&&(p=t(a(b))),j||p?o(r,m,l,[j=j||i(a(h)),p=p||n(a(b))],v,c,f):d(r,m,l,v,c,f)}function l(r,s,e,t,i,n,a){var d,o,m,l,v,c,f,j,p;if(!((f=s[0])<=0))for(m=t[0],l=t[1],d=e[0],o=e[1],v=r[0],c=r[1],p=0;p<f;p++)void 0!==(j=n.call(a,v[m],p,[m,l],[v,c]))&&(c[l]=i(j)),m+=d,l+=o}function v(r,s,e,t,i,n,a,d){var o,m,l,v,c,f,j,p,h,b,y;if(!((h=s[0])<=0))for(c=t[0],f=t[1],l=e[0],v=e[1],j=r[0],p=r[1],o=i[0],m=i[1],y=0;y<h;y++)void 0!==(b=a.call(d,o(j,c),y,[c,f],[j,p]))&&m(p,f,n(b)),c+=l,f+=v}function c(r,d,o,m,c,f){var j,p,h,b,y;return arguments.length>6&&(j=arguments[6]),b=r[0],s(b)&&(p=e(a(b))),y=r[1],s(y)&&(h=t(a(y))),p||h?v(r,d,o,m,[p=p||i(a(b)),h=h||n(a(y))],c,f,j):l(r,d,o,m,c,f,j)}r(m,"ndarray",c);export{m as default,c as ndarray};
//# sourceMappingURL=index.mjs.map
