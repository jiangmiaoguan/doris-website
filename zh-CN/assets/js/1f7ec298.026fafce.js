"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[400718],{15680:(r,n,e)=>{e.d(n,{xA:()=>y,yg:()=>f});var a=e(296540);function t(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function o(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),e.push.apply(e,a)}return e}function l(r){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){t(r,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))}))}return r}function c(r,n){if(null==r)return{};var e,a,t=function(r,n){if(null==r)return{};var e,a,t={},o=Object.keys(r);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(t[e]=r[e]);return t}(r,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(r,e)&&(t[e]=r[e])}return t}var s=a.createContext({}),u=function(r){var n=a.useContext(s),e=n;return r&&(e="function"==typeof r?r(n):l(l({},n),r)),e},y=function(r){var n=u(r.components);return a.createElement(s.Provider,{value:n},r.children)},i="mdxType",p={inlineCode:"code",wrapper:function(r){var n=r.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(r,n){var e=r.components,t=r.mdxType,o=r.originalType,s=r.parentName,y=c(r,["components","mdxType","originalType","parentName"]),i=u(e),m=t,f=i["".concat(s,".").concat(m)]||i[m]||p[m]||o;return e?a.createElement(f,l(l({ref:n},y),{},{components:e})):a.createElement(f,l({ref:n},y))}));function f(r,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof r||t){var o=e.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=r,c[i]="string"==typeof r?r:t,l[1]=c;for(var u=2;u<o;u++)l[u]=e[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},248742:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=e(58168),t=(e(296540),e(15680));const o={title:"ARRAY_COUNT",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-count",id:"version-3.0/sql-manual/sql-functions/array-functions/array-count",title:"ARRAY_COUNT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-count.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-count",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-count",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_COUNT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAYS_OVERLAP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/arrays-overlap"},next:{title:"ARRAY_APPLY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-apply"}},s={},u=[{value:"array_count",id:"array_count",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:u},i="wrapper";function p(r){let{components:n,...e}=r;return(0,t.yg)(i,(0,a.A)({},y,e,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_count"},"array_count"),(0,t.yg)("p",null,"array_count"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"array_count(lambda, array1, ...)\n")),(0,t.yg)("p",null,"\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5bf9\u5176\u4ed6\u8f93\u5165 ARRAY \u53c2\u6570\u7684\u5185\u90e8\u6570\u636e\u8fdb\u884c\u76f8\u5e94\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002\u8fd4\u56de\u4f7f\u5f97 ",(0,t.yg)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," \u8fd4\u56de\u503c\u4e0d\u4e3a 0 \u7684\u5143\u7d20\u6570\u91cf\u3002\u5982\u679c\u627e\u4e0d\u5230\u5230\u6ee1\u8db3\u6b64\u6761\u4ef6\u7684\u5143\u7d20\uff0c\u5219\u8fd4\u56de 0\u3002"),(0,t.yg)("p",null,"lambda \u8868\u8fbe\u5f0f\u4e2d\u8f93\u5165\u7684\u53c2\u6570\u4e3a 1 \u4e2a\u6216\u591a\u4e2a\uff0c\u5fc5\u987b\u548c\u540e\u9762\u8f93\u5165\u7684\u6570\u7ec4\u5217\u6570\u4e00\u81f4\uff0c\u4e14\u6240\u6709\u8f93\u5165\u7684 array \u7684\u5143\u7d20\u4e2a\u6570\u5fc5\u987b\u76f8\u540c\u3002\u5728 lambda \u4e2d\u53ef\u4ee5\u6267\u884c\u5408\u6cd5\u7684\u6807\u91cf\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\u7b49\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_count(x->x, array1);\narray_count(x->(x%2 = 0), array1);\narray_count(x->(abs(x)-1), array1);\narray_count((x,y)->(x = y), array1, array2);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_count(x -> x, [0, 1, 2, 3]);\n+--------------------------------------------------------+\n| array_count(array_map([x] -> x(0), ARRAY(0, 1, 2, 3))) |\n+--------------------------------------------------------+\n|                                                      3 |\n+--------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_count(x -> x > 2, [0, 1, 2, 3]);\n+------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) > 2, ARRAY(0, 1, 2, 3))) |\n+------------------------------------------------------------+\n|                                                          1 |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> x is null, [null, null, null, 1, 2]);\n+----------------------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) IS NULL, ARRAY(NULL, NULL, NULL, 1, 2))) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> power(x,2)>10, [1, 2, 3, 4, 5]);\n+------------------------------------------------------------------------------+\n| array_count(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4, 5))) |\n+------------------------------------------------------------------------------+\n|                                                                            2 |\n+------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select *, array_count((x, y) -> x>y, c_array1, c_array2) from array_test;\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_count(array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`)) |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                     2 |\n|    2 | [6, 7, 8]       | [10, 12, 13]            |                                                                     0 |\n|    3 | [1]             | [-100]                  |                                                                     1 |\n|    4 | [1, NULL, 2]    | [NULL, 3, 1]            |                                                                     1 |\n|    5 | []              | []                      |                                                                     0 |\n|    6 | NULL            | NULL                    |                                                                     0 |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n6 rows in set (0.02 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY, COUNT, ARRAY_COUNT"))}p.isMDXComponent=!0}}]);