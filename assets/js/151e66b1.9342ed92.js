"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[130704],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},780846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"TIMESTAMPADD",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/timestampadd",id:"version-2.1/sql-manual/sql-functions/date-time-functions/timestampadd",title:"TIMESTAMPADD",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/timestampadd.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/timestampadd",permalink:"/docs/sql-manual/sql-functions/date-time-functions/timestampadd",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TIMESTAMPADD",language:"en"},sidebar:"docs",previous:{title:"TIMEDIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/timediff"},next:{title:"TIMESTAMPDIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/timestampdiff"}},s={},c=[{value:"timestampadd",id:"timestampadd",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"timestampadd"},"timestampadd"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME TIMESTAMPADD(unit, interval, DATETIME datetime_expr)")),(0,a.yg)("p",null,"Adds the integer expression interval to the date or datetime expression datetime_expr. "),(0,a.yg)("p",null,"The unit for interval is given by the unit argument, which should be one of the following values: "),(0,a.yg)("p",null,"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\nmysql> SELECT TIMESTAMPADD(MINUTE,1,'2019-01-02');\n+------------------------------------------------+\n| timestampadd(MINUTE, 1, '2019-01-02 00:00:00') |\n+------------------------------------------------+\n| 2019-01-02 00:01:00                            |\n+------------------------------------------------+\n\nmysql> SELECT TIMESTAMPADD(WEEK,1,'2019-01-02');\n+----------------------------------------------+\n| timestampadd(WEEK, 1, '2019-01-02 00:00:00') |\n+----------------------------------------------+\n| 2019-01-09 00:00:00                          |\n+----------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TIMESTAMPADD\n")))}p.isMDXComponent=!0}}]);