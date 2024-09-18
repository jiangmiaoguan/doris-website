"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[570432],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,d=u["".concat(p,".").concat(f)]||u[f]||c[f]||r;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(58168),i=(n(296540),n(15680));const r={title:"Get FE log file",language:"en"},l=void 0,o={unversionedId:"admin-manual/open-api/fe-http/get-log-file-action",id:"version-3.0/admin-manual/open-api/fe-http/get-log-file-action",title:"Get FE log file",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/open-api/fe-http/get-log-file-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/get-log-file-action",permalink:"/docs/3.0/admin-manual/open-api/fe-http/get-log-file-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Get FE log file",language:"en"},sidebar:"docs",previous:{title:"Get Load State",permalink:"/docs/3.0/admin-manual/open-api/fe-http/get-load-state"},next:{title:"Get Small File Action",permalink:"/docs/3.0/admin-manual/open-api/fe-http/get-small-file"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],g={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"get-fe-log-file"},"Get FE log file"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"HEAD /api/get_log_file")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/get_log_file")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Users can obtain FE log files through the HTTP interface."),(0,i.yg)("p",null,"The HEAD request is used to obtain the log file list of the specified log type. GET request is used to download the specified log file."),(0,i.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,i.yg)("p",null,"None"),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"type")),(0,i.yg)("p",{parentName:"li"},"  Specify the log type. The following types are supported:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"fe.audit.log"),": Audit log of Frontend."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"file")),(0,i.yg)("p",{parentName:"li"},"  Specify file name"))),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"HEAD")),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,i.yg)("p",{parentName:"li"},"  The returned header lists all current log files of the specified type and the size of each file.\n")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"GET")),(0,i.yg)("p",{parentName:"li"},"  Download the specified log file in text form\n"))),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Get the log file list of the corresponding type"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'HEAD /api/get_log_file?type=fe.audit.log\n\nResponse:\n\nHTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,i.yg)("p",{parentName:"li"},"In the returned header, the ",(0,i.yg)("inlineCode",{parentName:"p"},"file_infos")," field displays the file list and the corresponding file size (in bytes) in json format")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download log file"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"GET /api/get_log_file?type=fe.audit.log&file=fe.audit.log.20190528.1\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=fe.audit.log\n< Content-Type: application/octet-stream;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")))))}c.isMDXComponent=!0}}]);