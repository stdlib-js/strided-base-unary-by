// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function o(r,s,e,t,n,i,d){var a,o,m,l,j,v,c,f,p;if(!((c=s[0])<=0))for(m=t[0],l=t[1],a=e[0],o=e[1],j=r[0],v=r[1],p=0;p<c;p++)void 0!==(f=i.call(d,j[m],p,[m,l],[j,v]))&&(v[l]=n(f)),m+=a,l+=o}function m(r,s,e,t,n,i,d,a){var o,m,l,j,v,c,f,p,h,b,u;if(!((h=s[0])<=0))for(v=t[0],c=t[1],l=e[0],j=e[1],f=r[0],p=r[1],o=n[0],m=n[1],u=0;u<h;u++)void 0!==(b=d.call(a,o(f,v),u,[v,c],[f,p]))&&m(p,c,i(b)),v+=l,c+=j}function l(r,l,j,v,c){var f,p,h,b,u;return arguments.length>5&&(f=arguments[5]),b=r[0],s(b)&&(p=e(d(b))),u=r[1],s(u)&&(h=t(d(u))),p||h?function(r,s,e,t,n,i,d){var o;return o=s[0],m(r,s,e,[a(o,e[0]),a(o,e[1])],t,n,i,d)}(r,l,j,[p=p||n(d(b)),h=h||i(d(u))],v,c,f):function(r,s,e,t,n,i){var d;return d=s[0],o(r,s,e,[a(d,e[0]),a(d,e[1])],t,n,i)}(r,l,j,v,c,f)}function j(r,a,l,j,v,c){var f,p,h,b,u;return arguments.length>6&&(f=arguments[6]),b=r[0],s(b)&&(p=e(d(b))),u=r[1],s(u)&&(h=t(d(u))),p||h?m(r,a,l,j,[p=p||n(d(b)),h=h||i(d(u))],v,c,f):o(r,a,l,j,v,c,f)}r(l,"ndarray",j);export{l as default,j as ndarray};
//# sourceMappingURL=index.mjs.map
