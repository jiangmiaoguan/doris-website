"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[315971],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,g=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},866212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(296540),a(15680));const r={title:"Metadata Design Document",language:"en"},o=void 0,l={unversionedId:"design/metadata-design",id:"design/metadata-design",title:"Metadata Design Document",description:"\x3c!--",source:"@site/community/design/metadata-design.md",sourceDirName:"design",slug:"/design/metadata-design",permalink:"/community/design/metadata-design",draft:!1,tags:[],version:"current",frontMatter:{title:"Metadata Design Document",language:"en"},sidebar:"community",previous:{title:"GROUPING SETS Design",permalink:"/community/design/grouping_sets_design"},next:{title:"Spark Load",permalink:"/community/design/spark_load"}},s={},d=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Overall architecture",id:"overall-architecture",level:2},{value:"Metadata structure",id:"metadata-structure",level:2},{value:"Data stream",id:"data-stream",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Metadata catalogue",id:"metadata-catalogue",level:3},{value:"Start-up process",id:"start-up-process",level:3},{value:"Metadata Read-Write and Synchronization",id:"metadata-read-write-and-synchronization",level:4},{value:"Downtime recovery",id:"downtime-recovery",level:3}],m={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"metadata-design-document"},"Metadata Design Document"),(0,i.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Mainly responsible for receiving and returning client requests, metadata, cluster management, query plan generation and so on."),(0,i.yg)("li",{parentName:"ul"},"BE: Backend, the back-end node of Doris. Mainly responsible for data storage and management, query plan execution and other work."),(0,i.yg)("li",{parentName:"ul"},"bdbje: ",(0,i.yg)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/database/berkeleydb/overview/index-093405.html"},"Oracle Berkeley DB Java Edition"),". In Doris, we use bdbje to persist metadata operation logs and high availability of FE.")),(0,i.yg)("h2",{id:"overall-architecture"},"Overall architecture"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(696610).A,width:"1494",height:"780"})),(0,i.yg)("p",null,"As shown above, Doris's overall architecture is divided into two layers. Multiple FEs form the first tier, providing lateral expansion and high availability of FE. Multiple BEs form the second layer, which is responsible for data storage and management. This paper mainly introduces the design and implementation of metadata in FE layer."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"There are two different kinds of FE nodes: follower and observer. Leader election and data synchronization are taken among FE nodes by bdbje (",(0,i.yg)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/database/database-technologies/berkeleydb/overview/index-093405.html"},"BerkeleyDB Java Edition"),").")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The follower node is elected, and one of the followers becomes the leader node, which is responsible for the writing of metadata. When the leader node goes down, other follower nodes re-elect a leader to ensure high availability of services.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The observer node only synchronizes metadata from the leader node and does not participate in the election. It can be scaled horizontally to provide the extensibility of metadata reading services."))),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: The concepts of follower and observer corresponding to bdbje are replica and observer. You may use both names below.")),(0,i.yg)("h2",{id:"metadata-structure"},"Metadata structure"),(0,i.yg)("p",null,"Doris's metadata is in full memory. A complete metadata image is maintained in each FE memory. Within Baidu, a cluster of 2,500 tables and 1 million fragments (3 million copies) occupies only about 2GB of metadata in memory. (Of course, the memory overhead for querying intermediate objects and various job information needs to be estimated according to the actual situation. However, it still maintains a low memory overhead."),(0,i.yg)("p",null,"At the same time, metadata is stored in the memory as a whole in a tree-like hierarchical structure. By adding auxiliary structure, metadata information at all levels can be accessed quickly."),(0,i.yg)("p",null,"The following figure shows the contents stored in Doris meta-information."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(127406).A,width:"487",height:"168"})),(0,i.yg)("p",null,"As shown above, Doris's metadata mainly stores four types of data:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"User data information. Including database, table Schema, fragmentation information, etc."),(0,i.yg)("li",{parentName:"ol"},"All kinds of job information. For example, import jobs, Clone jobs, SchemaChange jobs, etc."),(0,i.yg)("li",{parentName:"ol"},"User and permission information."),(0,i.yg)("li",{parentName:"ol"},"Cluster and node information.")),(0,i.yg)("h2",{id:"data-stream"},"Data stream"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(201448).A,width:"1055",height:"428"})),(0,i.yg)("p",null,"The data flow of metadata is as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Only leader FE can write metadata. After modifying leader's memory, the write operation serializes into a log and writes to bdbje in the form of key-value. The key is a continuous integer, and as log id, value is the serialized operation log.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After the log is written to bdbje, bdbje copies the log to other non-leader FE nodes according to the policy (write most/write all). The non-leader FE node modifies its metadata memory image by playback of the log, and completes the synchronization with the metadata of the leader node.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The number of log entries of the leader node reaches the threshold (default 10w) and meets the checkpoint thread execution cycle (default 60 seconds). Checkpoint reads existing image files and subsequent logs and replays a new mirror copy of metadata in memory. The copy is then written to disk to form a new image. The reason for this is to regenerate a mirror copy instead of writing an existing image to an image, mainly considering that the write operation will be blocked during writing the image plus read lock. So every checkpoint takes up twice as much memory space.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After the image file is generated, the leader node notifies other non-leader nodes that a new image has been generated. Non-leader actively pulls the latest image files through HTTP to replace the old local files.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The logs in bdbje will be deleted regularly after the image is completed."))),(0,i.yg)("h2",{id:"implementation-details"},"Implementation details"),(0,i.yg)("h3",{id:"metadata-catalogue"},"Metadata catalogue"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The metadata directory is specified by the FE configuration item `meta_dir'.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Data storage directory for bdbje under ",(0,i.yg)("inlineCode",{parentName:"p"},"bdb/")," directory.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The storage directory for image files under the ",(0,i.yg)("inlineCode",{parentName:"p"},"image/")," directory."))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Image.[logid]"),"is the latest image file. The suffix ",(0,i.yg)("inlineCode",{parentName:"li"},"logid")," indicates the ID of the last log contained in the image."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Image.ckpt")," is the image file being written. If it is successfully written, it will be renamed ",(0,i.yg)("inlineCode",{parentName:"li"},"image.[logid]")," and replaced with the original image file."),(0,i.yg)("li",{parentName:"ul"},"The",(0,i.yg)("inlineCode",{parentName:"li"},"cluster_id")," is recorded in the ",(0,i.yg)("inlineCode",{parentName:"li"},"VERSION")," file. ",(0,i.yg)("inlineCode",{parentName:"li"},"Cluster_id")," uniquely identifies a Doris cluster. It is a 32-bit integer randomly generated at the first startup of leader. You can also specify a cluster ID through the Fe configuration item `cluster_id'."),(0,i.yg)("li",{parentName:"ul"},"The role of FE itself recorded in the ",(0,i.yg)("inlineCode",{parentName:"li"},"ROLE")," file. There are only ",(0,i.yg)("inlineCode",{parentName:"li"},"FOLLOWER")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"OBSERVER"),". Where ",(0,i.yg)("inlineCode",{parentName:"li"},"FOLLOWER")," denotes FE as an optional node. (Note: Even the leader node has a role of ",(0,i.yg)("inlineCode",{parentName:"li"},"FOLLOWER"),")")),(0,i.yg)("h3",{id:"start-up-process"},"Start-up process"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"FE starts for the first time. If the startup script does not add any parameters, it will try to start as leader. You will eventually see ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer from UNKNOWN to MASTER")," in the FE startup log.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"FE starts for the first time. If the ",(0,i.yg)("inlineCode",{parentName:"p"},"--helper")," parameter is specified in the startup script and points to the correct leader FE node, the FE first asks the leader node about its role (ROLE) and cluster_id through http. Then pull up the latest image file. After reading image file and generating metadata image, start bdbje and start bdbje log synchronization. After synchronization is completed, the log after image file in bdbje is replayed, and the final metadata image generation is completed."),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note 1: When starting with the ",(0,i.yg)("inlineCode",{parentName:"p"},"--helper")," parameter, you need to first add the FE through the leader through the MySQL command, otherwise, the start will report an error.")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note 2: ",(0,i.yg)("inlineCode",{parentName:"p"},"--helper")," can point to any follower node, even if it is not leader.")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note 3: In the process of synchronization log, the Fe log will show ",(0,i.yg)("inlineCode",{parentName:"p"},"xxx detached"),". At this time, the log pull is in progress, which is a normal phenomenon."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"FE is not the first startup. If the startup script does not add any parameters, it will determine its identity according to the ROLE information stored locally. At the same time, according to the cluster information stored in the local bdbje, the leader information is obtained. Then read the local image file and the log in bdbje to complete the metadata image generation. (If the roles recorded in the local ROLE are inconsistent with those recorded in bdbje, an error will be reported.)")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"FE is not the first boot, and the ",(0,i.yg)("inlineCode",{parentName:"p"},"--helper")," parameter is specified in the boot script. Just like the first process started, the leader role is asked first. But it will be compared with the ROLE stored by itself. If they are inconsistent, they will report errors."))),(0,i.yg)("h4",{id:"metadata-read-write-and-synchronization"},"Metadata Read-Write and Synchronization"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Users can use Mysql to connect any FE node to read and write metadata. If the connection is a non-leader node, the node forwards the write operation to the leader node. When the leader is successfully written, it returns a current and up-to-date log ID of the leader. Later, the non-leader node waits for the log ID it replays to be larger than the log ID it returns to the client before returning the message that the command succeeds. This approach guarantees Read-Your-Write semantics for any FE node."),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note: Some non-write operations are also forwarded to leader for execution. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW LOAD")," operation. Because these commands usually need to read the intermediate states of some jobs, which are not written to bdbje, there are no such intermediate states in the memory of the non-leader node. (FE's direct metadata synchronization depends entirely on bdbje's log playback. If a metadata modification operation does not write bdbje's log, the result of the modification of the operation will not be seen in other non-leader nodes.)"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The leader node starts a TimePrinter thread. This thread periodically writes a key-value entry for the current time to bdbje. The remaining non-leader nodes read the recorded time in the log by playback and compare it with the local time. If the lag between the local time and the local time is found to be greater than the specified threshold (configuration item: ",(0,i.yg)("inlineCode",{parentName:"p"},"meta_delay_toleration_second"),"). If the write interval is half of the configuration item, the node will be in the ",(0,i.yg)("strong",{parentName:"p"},"unreadable")," state. This mechanism solves the problem that non-leader nodes still provide outdated metadata services after a long time of leader disconnection.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The metadata of each FE only guarantees the final consistency. Normally, inconsistent window periods are only milliseconds. We guarantee the monotonous consistency of metadata access in the same session. But if the same client connects different FEs, metadata regression may occur. (But for batch update systems, this problem has little impact.)"))),(0,i.yg)("h3",{id:"downtime-recovery"},"Downtime recovery"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"When the leader node goes down, the rest of the followers will immediately elect a new leader node to provide services."),(0,i.yg)("li",{parentName:"ol"},"Metadata cannot be written when most follower nodes are down. When metadata is not writable, if a write operation request occurs, the current process is that the ",(0,i.yg)("strong",{parentName:"li"},"FE process exits"),". This logic will be optimized in the future, and read services will still be provided in the non-writable state."),(0,i.yg)("li",{parentName:"ol"},"The downtime of observer node will not affect the state of any other node. It also does not affect metadata reading and writing at other nodes.")))}p.isMDXComponent=!0},127406:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/metadata_contents-350e796e1ccf823f17af7ffb6a1007f8.png"},201448:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/metadata_stream-7732a2fc872dd349c79d964b8425bcda.png"},696610:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/palo_architecture-fc338e36ab7b7d4cc12992b146e63b7e.jpg"}}]);