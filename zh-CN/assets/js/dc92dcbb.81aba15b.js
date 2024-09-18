"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[278202],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>N});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),g=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d=function(e){var a=g(e.components);return r.createElement(o.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=g(t),m=n,N=y["".concat(o,".").concat(m)]||y[m]||c[m]||l;return t?r.createElement(N,p(p({ref:a},d),{},{components:t})):r.createElement(N,p({ref:a},d))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[y]="string"==typeof e?e:n,p[1]=i;for(var g=2;g<l;g++)p[g]=t[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},512362:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=t(58168),n=(t(296540),t(15680));const l={title:"Oracle",language:"zh-CN"},p=void 0,i={unversionedId:"lakehouse/database/oracle",id:"version-3.0/lakehouse/database/oracle",title:"Oracle",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/database/oracle.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/oracle",permalink:"/zh-CN/docs/3.0/lakehouse/database/oracle",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Oracle",language:"zh-CN"},sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/zh-CN/docs/3.0/lakehouse/database/postgresql"},next:{title:"SQL Server",permalink:"/zh-CN/docs/3.0/lakehouse/database/sqlserver"}},o={},g=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u8fde\u63a5 Oracle",id:"\u8fde\u63a5-oracle",level:2},{value:"\u5c42\u7ea7\u6620\u5c04",id:"\u5c42\u7ea7\u6620\u5c04",level:2},{value:"\u7c7b\u578b\u6620\u5c04",id:"\u7c7b\u578b\u6620\u5c04",level:2},{value:"Oracle \u5230 Apache Doris \u7c7b\u578b\u6620\u5c04",id:"oracle-\u5230-apache-doris-\u7c7b\u578b\u6620\u5c04",level:3},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:2},{value:"\u7edf\u8ba1\u4fe1\u606f",id:"\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8c13\u8bcd\u4e0b\u63a8",id:"\u8c13\u8bcd\u4e0b\u63a8",level:3},{value:"\u884c\u6570\u9650\u5236",id:"\u884c\u6570\u9650\u5236",level:3},{value:"\u8f6c\u4e49\u5b57\u7b26",id:"\u8f6c\u4e49\u5b57\u7b26",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:g},y="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apache Doris JDBC Catalog \u652f\u6301\u901a\u8fc7\u6807\u51c6 JDBC \u63a5\u53e3\u8fde\u63a5 Oracle \u6570\u636e\u5e93\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e Oracle \u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,n.yg)("p",null,"\u8981\u8fde\u63a5\u5230 Oracle \u6570\u636e\u5e93\uff0c\u60a8\u9700\u8981"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Oracle 19c, 18c, 12c, 11g \u6216 10g\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Oracle \u6570\u636e\u5e93\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,n.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc"},"Maven \u4ed3\u5e93"),"\u4e0b\u8f7d Ojdbc8 \u53ca\u4ee5\u4e0a\u7248\u672c\u7684 Oracle JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Apache Doris \u6bcf\u4e2a FE \u548c BE \u8282\u70b9\u548c Oracle \u670d\u52a1\u5668\u4e4b\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a 1521\u3002"))),(0,n.yg)("h2",{id:"\u8fde\u63a5-oracle"},"\u8fde\u63a5 Oracle"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oracle PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:oracle:thin:@example.net:1521:orcl",\n    "driver_url" = "ojdbc8.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n)\n')),(0,n.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"jdbc_url")," \u5b9a\u4e49\u8981\u4f20\u9012\u7ed9 JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u8fde\u63a5\u4fe1\u606f\u548c\u53c2\u6570\u3002\n\u4f7f\u7528 Oracle JDBC Thin \u9a71\u52a8\u7a0b\u5e8f\u65f6\uff0cURL \u7684\u8bed\u6cd5\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u60a8\u7684 Oracle \u914d\u7f6e\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u8981\u8fde\u63a5\u5230 Oracle SID \u6216 Oracle \u670d\u52a1\u540d\u79f0\uff0c\u5219\u8fde\u63a5 URL \u4f1a\u6709\u6240\u4e0d\u540c\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.yg)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/jjdbc/data-sources-and-URLs.html"},"Oracle \u6570\u636e\u5e93 JDBC \u9a71\u52a8\u7a0b\u5e8f\u6587\u6863"),"\u3002\n\u4ee5\u4e0a\u793a\u4f8b URL \u8fde\u63a5\u5230\u540d\u4e3a",(0,n.yg)("inlineCode",{parentName:"p"},"orcl"),"\u7684 Oracle SID\u3002")),(0,n.yg)("h2",{id:"\u5c42\u7ea7\u6620\u5c04"},"\u5c42\u7ea7\u6620\u5c04"),(0,n.yg)("p",null,"\u6620\u5c04 Oracle \u65f6\uff0cApache Doris \u7684\u4e00\u4e2a Database \u5bf9\u5e94\u4e8e Oracle \u4e2d\u7684\u4e00\u4e2a User\u3002\u800c Apache Doris \u7684 Database \u4e0b\u7684 Table \u5219\u5bf9\u5e94\u4e8e Oracle \u4e2d\uff0c\u8be5 User \u4e0b\u7684\u6709\u6743\u9650\u8bbf\u95ee\u7684 Table\u3002\u5373\u6620\u5c04\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Apache Doris"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Oracle"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Catalog"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Database")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Database"),(0,n.yg)("td",{parentName:"tr",align:"center"},"User")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Table"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Table")))),(0,n.yg)("h2",{id:"\u7c7b\u578b\u6620\u5c04"},"\u7c7b\u578b\u6620\u5c04"),(0,n.yg)("h3",{id:"oracle-\u5230-apache-doris-\u7c7b\u578b\u6620\u5c04"},"Oracle \u5230 Apache Doris \u7c7b\u578b\u6620\u5c04"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Oracle Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Apache Doris Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number(p) / number(p,0)"),(0,n.yg)("td",{parentName:"tr",align:null},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"),(0,n.yg)("td",{parentName:"tr",align:null},"Doris\u4f1a\u6839\u636ep\u7684\u5927\u5c0f\u6765\u9009\u62e9\u5bf9\u5e94\u7684\u7c7b\u578b\uff1a",(0,n.yg)("inlineCode",{parentName:"td"},"p < 3")," -> ",(0,n.yg)("inlineCode",{parentName:"td"},"TINYINT"),"; ",(0,n.yg)("inlineCode",{parentName:"td"},"p < 5")," -> ",(0,n.yg)("inlineCode",{parentName:"td"},"SMALLINT"),"; ",(0,n.yg)("inlineCode",{parentName:"td"},"p < 10")," -> ",(0,n.yg)("inlineCode",{parentName:"td"},"INT"),"; ",(0,n.yg)("inlineCode",{parentName:"td"},"p < 19")," -> ",(0,n.yg)("inlineCode",{parentName:"td"},"BIGINT"),"; ",(0,n.yg)("inlineCode",{parentName:"td"},"p > 19")," -> ",(0,n.yg)("inlineCode",{parentName:"td"},"LARGEINT"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s>0 && p>s) ]"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s>0 && p < s) ]"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL(s,s)"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number(p,s), ","[ if(s<0) ]"),(0,n.yg)("td",{parentName:"tr",align:null},"TINYINT/SMALLINT/INT/BIGINT/LARGEINT"),(0,n.yg)("td",{parentName:"tr",align:null},"s<0\u7684\u60c5\u51b5\u4e0b, Doris\u4f1a\u5c06p\u8bbe\u7f6e\u4e3a p+","|","s","|",", \u5e76\u8fdb\u884c\u548cnumber(p) / number(p,0)\u4e00\u6837\u7684\u6620\u5c04")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"number"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Doris\u76ee\u524d\u4e0d\u652f\u6301\u672a\u6307\u5b9ap\u548cs\u7684oracle\u7c7b\u578b")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"decimal"),(0,n.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"float/real"),(0,n.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DATE"),(0,n.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,n.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"CHAR/NCHAR"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"VARCHAR2/NVARCHAR2"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LONG/ RAW/ LONG RAW/ INTERVAL"),(0,n.yg)("td",{parentName:"tr",align:null},"STRING"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Other"),(0,n.yg)("td",{parentName:"tr",align:null},"UNSUPPORTED"),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h2",{id:"\u67e5\u8be2\u4f18\u5316"},"\u67e5\u8be2\u4f18\u5316"),(0,n.yg)("h3",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,n.yg)("p",null,"Apache Doris \u4f1a\u5728 Catalog \u4e2d\u7ef4\u62a4\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4ee5\u4fbf\u5728\u6267\u884c\u67e5\u8be2\u65f6\u80fd\u591f\u66f4\u597d\u5730\u4f18\u5316\u67e5\u8be2\u8ba1\u5212\u3002"),(0,n.yg)("p",null,"\u53ef\u4ee5\u67e5\u770b ",(0,n.yg)("a",{parentName:"p",href:"../external-statistics"},"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f")," \u4e86\u89e3\u5982\u4f55\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,n.yg)("h3",{id:"\u8c13\u8bcd\u4e0b\u63a8"},"\u8c13\u8bcd\u4e0b\u63a8"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5f53\u6267\u884c\u7c7b\u4f3c\u4e8e ",(0,n.yg)("inlineCode",{parentName:"p"},"where dt = '2022-01-01'")," \u8fd9\u6837\u7684\u67e5\u8be2\u65f6\uff0cApache Doris \u80fd\u591f\u5c06\u8fd9\u4e9b\u8fc7\u6ee4\u6761\u4ef6\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u6570\u636e\u6e90\u5c42\u9762\u6392\u9664\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u83b7\u53d6\u548c\u4f20\u8f93\u3002\u8fd9\u5927\u5927\u63d0\u9ad8\u4e86\u67e5\u8be2\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u964d\u4f4e\u4e86\u5bf9\u5916\u90e8\u6570\u636e\u6e90\u7684\u8d1f\u8f7d\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5f53\u53d8\u91cf ",(0,n.yg)("inlineCode",{parentName:"p"},"enable_ext_func_pred_pushdown")," \u8bbe\u7f6e\u4e3atrue\uff0c\u4f1a\u5c06 where \u4e4b\u540e\u7684\u51fd\u6570\u6761\u4ef6\u4e5f\u4e0b\u63a8\u5230\u5916\u90e8\u6570\u636e\u6e90\u3002"),(0,n.yg)("p",{parentName:"li"},"\u76ee\u524d\u652f\u6301\u4e0b\u63a8\u5230 Oracle \u7684\u51fd\u6570\u6709\uff1a"),(0,n.yg)("table",{parentName:"li"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"},"Function"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"NVL")))))),(0,n.yg)("h3",{id:"\u884c\u6570\u9650\u5236"},"\u884c\u6570\u9650\u5236"),(0,n.yg)("p",null,"\u5982\u679c\u5728\u67e5\u8be2\u4e2d\u5e26\u6709 limit \u5173\u952e\u5b57\uff0cApache Doris \u4f1a\u5c06 limit \u8f6c\u4e49\u4e3a Oracle \u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"rownum")," \u8bed\u6cd5\uff0c\u4ee5\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"),(0,n.yg)("h3",{id:"\u8f6c\u4e49\u5b57\u7b26"},"\u8f6c\u4e49\u5b57\u7b26"),(0,n.yg)("p",null,'Apache Doris \u4f1a\u5728\u4e0b\u53d1\u5230 Oracle \u7684\u67e5\u8be2\u8bed\u53e5\u4e2d\uff0c\u81ea\u52a8\u5728\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0a\u52a0\u4e0a\u8f6c\u4e49\u7b26\uff1a("")\uff0c\u4ee5\u907f\u514d\u5b57\u6bb5\u540d\u4e0e\u8868\u540d\u4e0e Oracle \u5185\u90e8\u5173\u952e\u5b57\u51b2\u7a81\u3002'),(0,n.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa\u6216\u67e5\u8be2 Oracle Catalog \u65f6\u51fa\u73b0 ",(0,n.yg)("inlineCode",{parentName:"p"},"ONS configuration failed")),(0,n.yg)("p",{parentName:"li"},"\u5728 be.conf \u7684 JAVA_OPTS \u589e\u52a0 -Doracle.jdbc.fanEnabled=false \u5e76\u4e14\u5347\u7ea7driver\u5230 ",(0,n.yg)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar"},"https://repo1.maven.org/maven2/com/oracle/database/jdbc/ojdbc8/19.23.0.0/ojdbc8-19.23.0.0.jar"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa\u6216\u67e5\u8be2 Oracle Catalog \u65f6\u51fa\u73b0 ",(0,n.yg)("inlineCode",{parentName:"p"},"Non supported character set (add orai18n.jar in your classpath): ZHS16GBK")," \u5f02\u5e38"),(0,n.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,n.yg)("a",{parentName:"p",href:"https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html"},"orai18n.jar")," \u5e76\u653e\u5230 \u6bcf\u4e2a FE \u548c BE \u7684\u76ee\u5f55\u4e0b\u7684 ",(0,n.yg)("inlineCode",{parentName:"p"},"custom_lib/")," \u76ee\u5f55\u4e0b\uff08\u5982\u4e0d\u5b58\u5728\uff0c\u624b\u52a8\u521b\u5efa\u5373\u53ef\uff09\u5e76\u91cd\u542f\u6bcf\u4e2a FE \u548c BE\u3002"))))}c.isMDXComponent=!0}}]);