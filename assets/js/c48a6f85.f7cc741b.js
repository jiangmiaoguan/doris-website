"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[380114],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},493779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"second_floor",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/second_floor",id:"sql-manual/sql-functions/date-time-functions/second_floor",title:"second_floor",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/second_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/second_floor",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/second_floor",draft:!1,tags:[],version:"current",frontMatter:{title:"second_floor",language:"en"},sidebar:"docs",previous:{title:"date_floor",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date_floor"},next:{title:"minute_floor",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/minute_floor"}},s={},c=[{value:"second_floor",id:"second_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"second_floor"},"second_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME SECOND_FLOOR(DATETIME datetime)\nDATETIME SECOND_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME SECOND_FLOOR(DATETIME datetime, INT period)\nDATETIME SECOND_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n")),(0,o.yg)("p",null,"Convert the date to the nearest rounding down time of the specified time interval period."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,o.yg)("li",{parentName:"ul"},"period: specifies how many seconds each cycle consists of."),(0,o.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select second_floor(\"2023-07-13 22:28:18\", 5);\n+---------------------------------------------------------------+\n| second_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2023-07-13 22:28:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.10 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SECOND_FLOOR, SECOND, FLOOR\n")),(0,o.yg)("h3",{id:"best-practice"},"Best Practice"),(0,o.yg)("p",null,"See also ",(0,o.yg)("a",{parentName:"p",href:"./date_floor"},"date_floor")))}p.isMDXComponent=!0}}]);