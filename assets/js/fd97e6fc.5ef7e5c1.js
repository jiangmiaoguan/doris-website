"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[838889],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>y});var t=i(296540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),g=r,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return i?t.createElement(y,a(a({ref:n},u),{},{components:i})):t.createElement(y,a({ref:n},u))}));function y(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=i[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},205956:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=i(58168),r=(i(296540),i(15680));const l={title:"PipelineX Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},a=void 0,o={unversionedId:"query/pipeline/pipeline-x-execution-engine",id:"version-2.1/query/pipeline/pipeline-x-execution-engine",title:"PipelineX Execution Engine",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/pipeline/pipeline-x-execution-engine.md",sourceDirName:"query/pipeline",slug:"/query/pipeline/pipeline-x-execution-engine",permalink:"/docs/query/pipeline/pipeline-x-execution-engine",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PipelineX Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Pipeline Execution Engine",permalink:"/docs/query/pipeline/pipeline-execution-engine"},next:{title:"Query Caches Overview",permalink:"/docs/query/query-cache/"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Goals",id:"goals",level:2},{value:"User Interface changes",id:"user-interface-changes",level:2},{value:"Set session variable",id:"set-session-variable",level:3},{value:"enable_pipeline_x_engine",id:"enable_pipeline_x_engine",level:4},{value:"enable_local_shuffle",id:"enable_local_shuffle",level:4},{value:"ignore_storage_data_distribution",id:"ignore_storage_data_distribution",level:4},{value:"Load",id:"load",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,t.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"background"},"Background"),(0,r.yg)("p",null,"The PipelineX execution engine is an experimental feature in Doris 2.1.0, expected to address the four major issues of the Doris pipeline engine:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"In terms of execution concurrency, Doris is currently constrained by two factors: one is the parameters set by FE, and the other is limited by the number of buckets. This concurrent strategy prevents the execution engine from fully utilizing machine resources."),(0,r.yg)("li",{parentName:"ol"},"In terms of execution logic, Doris currently has some fixed additional overhead. For example, the common expression for all instances will be initialized multiple times due to independence between all instances."),(0,r.yg)("li",{parentName:"ol"},"In terms of scheduling logic, the scheduler of the current pipeline will put all blocking tasks into a blocking queue, and a blocking queue scheduler will be responsible for polling and extracting executable tasks from the blocking queue and placing them in the runnable queue. Therefore, during the query execution process, a CPU core will always be occupied to do scheduling instead of execution."),(0,r.yg)("li",{parentName:"ol"},"In terms of profile, currently the pipeline cannot provide users concise and clear metrics.")),(0,r.yg)("p",null,"Its specific design and implementation can be found in ","[DSIP-035]","(",(0,r.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-035%3A+PipelineX+Execution+Engine"},"DSIP-035: PipelineX Execution Engine - DORIS - Apache Software Foundation"),")."),(0,r.yg)("h2",{id:"goals"},"Goals"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"In terms of execution concurrency, pipelineX introduces local exchange optimization to fully utilize CPU resources, and distribute data evenly across different tasks to minimize data skewing. In addition, pipelineX will no longer be constrained by the number of tablets."),(0,r.yg)("li",{parentName:"ol"},"Logically, multiple pipeline tasks share all shared states of the same pipeline and eliminate additional initialization overhead, such as expressions and some const variables."),(0,r.yg)("li",{parentName:"ol"},"In terms of scheduling logic, the blocking conditions of all pipeline tasks are encapsulated using Dependency, and the execution logic of the tasks is triggered by external events (such as rpc completion) to enter the runnable queue, thereby eliminating the overhead of blocking polling threads."),(0,r.yg)("li",{parentName:"ol"},"Profile: Provide users with simple and easy to understand metrics.")),(0,r.yg)("h2",{id:"user-interface-changes"},"User Interface changes"),(0,r.yg)("h3",{id:"set-session-variable"},"Set session variable"),(0,r.yg)("h4",{id:"enable_pipeline_x_engine"},"enable_pipeline_x_engine"),(0,r.yg)("p",null,"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_x_engine ")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", BE will use PipelineX to execute by default."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set enable_pipeline_x_engine = true;\n")),(0,r.yg)("h4",{id:"enable_local_shuffle"},"enable_local_shuffle"),(0,r.yg)("p",null,"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_local_shuffle")," to true will enable local shuffle optimization. Local shuffle will try to evenly distribute data among different pipeline tasks to avoid data skewing as much as possible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set enable_local_shuffle = true;\n")),(0,r.yg)("h4",{id:"ignore_storage_data_distribution"},"ignore_storage_data_distribution"),(0,r.yg)("p",null,"Settings ",(0,r.yg)("inlineCode",{parentName:"p"},"ignore_storage_data_distribution")," is true, it means ignoring the data distribution of the storage layer. When used in conjunction with local shuffle, the concurrency capability of the pipelineX engine will no longer be constrained by the number of storage layer tables, thus fully utilizing machine resources."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set ignore_storage_data_distribution = true;\n")),(0,r.yg)("h3",{id:"load"},"Load"),(0,r.yg)("p",null,"The engine selected for import are detailed in the ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/import/load-manual"},"Import")," documentation."))}d.isMDXComponent=!0}}]);