"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[287368],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?t.createElement(y,l(l({ref:n},u),{},{components:r})):t.createElement(y,l({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},769058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const o={title:"RANDOM",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/numeric-functions/random",id:"sql-manual/sql-functions/numeric-functions/random",title:"RANDOM",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/numeric-functions/random.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/random",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/random",draft:!1,tags:[],version:"current",frontMatter:{title:"RANDOM",language:"en"},sidebar:"docs",previous:{title:"LEAST",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/least"},next:{title:"MOD",permalink:"/docs/dev/sql-manual/sql-functions/numeric-functions/mod"}},s={},c=[{value:"random",id:"random",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"random"},"random"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE random()"),"\nReturns a random number between 0 and 1."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE random(DOUBLE seed)"),"\nReturns a random number between 0 and 1, seeded with ",(0,a.yg)("inlineCode",{parentName:"p"},"seed"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT random(BIGINT a, BIGINT b)"),"\nReturns a random number between a and b. a must be less than b."),(0,a.yg)("p",null,"Alias: ",(0,a.yg)("inlineCode",{parentName:"p"},"rand"),"."),(0,a.yg)("p",null,"Note: All parameters must be constants."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select random();\n+---------------------+\n| random()            |\n+---------------------+\n| 0.35446706030596947 |\n+---------------------+\n\nmysql> select rand(1.2);\n+---------------------+\n| rand(1)             |\n+---------------------+\n| 0.13387664401253274 |\n+---------------------+\n1 row in set (0.13 sec)\n\nmysql> select rand(1.2);\n+---------------------+\n| rand(1)             |\n+---------------------+\n| 0.13387664401253274 |\n+---------------------+\n1 row in set (0.11 sec)\n\nmysql> select rand(-20, -10);\n+------------------+\n| random(-20, -10) |\n+------------------+\n|              -13 |\n+------------------+\n1 row in set (0.10 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"RANDOM, RAND\n")))}m.isMDXComponent=!0}}]);