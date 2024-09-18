"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[909315],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=s,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[p]="string"==typeof e?e:s,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},810529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(58168),s=(t(296540),t(15680));const o={title:"SUBSTR",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/substr",id:"version-2.0/sql-manual/sql-functions/string-functions/substr",title:"SUBSTR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/substr.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substr",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/substr",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SUBSTR",language:"zh-CN"},sidebar:"docs",previous:{title:"CONCAT_WS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/concat-ws"},next:{title:"SUBSTRING",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/substring"}},a={},u=[{value:"substr",id:"substr",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"substr"},"substr"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR substr(VARCHAR content, INT start, INT length)")),(0,s.yg)("p",null,"\u6c42\u5b50\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\u63cf\u8ff0\u7684\u5b57\u7b26\u4e32\u4e2d\u4ecestart\u5f00\u59cb\u957f\u5ea6\u4e3alen\u7684\u90e8\u5206\u5b57\u7b26\u4e32\u3002\u9996\u5b57\u6bcd\u7684\u4e0b\u6807\u4e3a1\u3002"),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select substr(\"Hello doris\", 2, 1);\n+-----------------------------+\n| substr('Hello doris', 2, 1) |\n+-----------------------------+\n| e                           |\n+-----------------------------+\nmysql> select substr(\"Hello doris\", 1, 2);\n+-----------------------------+\n| substr('Hello doris', 1, 2) |\n+-----------------------------+\n| He                          |\n+-----------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SUBSTR\n")))}f.isMDXComponent=!0}}]);