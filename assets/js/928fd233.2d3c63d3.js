"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[856896],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>y});var r=n(296540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,c=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||c;return n?r.createElement(y,l(l({ref:t},i),{},{components:n})):r.createElement(y,l({ref:t},i))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},332123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(58168),s=(n(296540),n(15680));const c={title:"STRUCT",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/struct-functions/struct",id:"version-3.0/sql-manual/sql-functions/struct-functions/struct",title:"STRUCT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/struct-functions/struct.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/struct",permalink:"/docs/3.0/sql-manual/sql-functions/struct-functions/struct",draft:!1,tags:[],version:"3.0",frontMatter:{title:"STRUCT",language:"en"},sidebar:"docs",previous:{title:"REGEXP_REPLACE_ONE",permalink:"/docs/3.0/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one"},next:{title:"NAMED_STRUCT",permalink:"/docs/3.0/sql-manual/sql-functions/struct-functions/named-struct"}},a={},u=[{value:"struct()",id:"struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"struct"},"struct()"),(0,s.yg)("p",null,"struct()"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"STRUCT<T1, T2, T3, ...> struct(T1, T2, T3, ...)")),(0,s.yg)("p",null,"construct an struct with variadic elements and return it, Tn could be column or literal"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select struct(1, 'a', \"abc\");\n+-----------------------+\n| struct(1, 'a', 'abc') |\n+-----------------------+\n| {1, 'a', 'abc'}       |\n+-----------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct(null, 1, null);\n+-----------------------+\n| struct(NULL, 1, NULL) |\n+-----------------------+\n| {NULL, 1, NULL}       |\n+-----------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct(cast('2023-03-16' as datetime));\n+----------------------------------------+\n| struct(CAST('2023-03-16' AS DATETIME)) |\n+----------------------------------------+\n| {2023-03-16 00:00:00}                  |\n+----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select struct(k1, k2, null) from test_tb;\n+--------------------------+\n| struct(`k1`, `k2`, NULL) |\n+--------------------------+\n| {1, 'a', NULL}           |\n+--------------------------+\n1 row in set (0.04 sec)\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"STRUCT,CONSTRUCTOR"))}f.isMDXComponent=!0}}]);