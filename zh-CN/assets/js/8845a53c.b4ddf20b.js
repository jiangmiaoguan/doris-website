"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[807342],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,f=p["".concat(s,".").concat(y)]||p[y]||g[y]||l;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},785493:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const l={title:"REGR_SXY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/regr_sxy",id:"sql-manual/sql-functions/aggregate-functions/regr_sxy",title:"REGR_SXY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/regr_sxy.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/regr_sxy",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr_sxy",draft:!1,tags:[],version:"current",frontMatter:{title:"REGR_SXY",language:"zh-CN"},sidebar:"docs",previous:{title:"REGR_SXX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr_sxx"},next:{title:"REGR_SYY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/regr_syy"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"KEYWORDS",id:"keywords",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"}," double regr_sxy(y, x)")),(0,a.yg)("p",null,"x, y \u652f\u6301\u57fa\u672c\u6570\u5b57\u7c7b\u578b"),(0,a.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"X")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"Y")," \u7684\u504f\u5dee\u4e58\u79ef\u548c\uff0c\u5373 ",(0,a.yg)("inlineCode",{parentName:"p"},"X")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"Y")," \u76f8\u5bf9\u4e8e\u5404\u81ea\u5e73\u5747\u503c\u7684\u504f\u5dee\u7684\u4e58\u79ef\u4e4b\u548c"),(0,a.yg)("h2",{id:"example"},"EXAMPLE"),(0,a.yg)("p",null,"\u6211\u4eec\u6709\u5982\u4e0b\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from t;\n+------+------+------+\n| id   | x    | y    |\n+------+------+------+\n|    2 |   14 |   27 |\n|    4 |   10 |   20 |\n|    3 |    5 |    7 |\n|    1 |   18 |   13 |\n+------+------+------+\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select regr_sxy(y,x) from t;\n+----------------+\n| regr_sxy(y, x) |\n+----------------+\n|          59.75 |\n+----------------+\n\n")),(0,a.yg)("h2",{id:"keywords"},"KEYWORDS"),(0,a.yg)("p",null,"REGR_SXY"))}g.isMDXComponent=!0}}]);