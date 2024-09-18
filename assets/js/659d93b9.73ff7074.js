"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[762760],{15680:(e,o,t)=>{t.d(o,{xA:()=>p,yg:()=>h});var r=t(296540);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=u(e.components);return r.createElement(s.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return t?r.createElement(h,i(i({ref:o},p),{},{components:t})):r.createElement(h,i({ref:o},p))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=c;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},216142:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const n={title:"Workload Group",language:"en"},i=void 0,l={unversionedId:"admin-manual/resource-admin/workload-group",id:"version-2.1/admin-manual/resource-admin/workload-group",title:"Workload Group",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/resource-admin/workload-group.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-group",permalink:"/docs/admin-manual/resource-admin/workload-group",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Workload Group",language:"en"},sidebar:"docs",previous:{title:"Data Recovery",permalink:"/docs/admin-manual/data-admin/data-recovery"},next:{title:"Workload Policy",permalink:"/docs/admin-manual/resource-admin/workload-policy"}},s={},u=[{value:"Version Description",id:"version-description",level:2},{value:"Upgrade to version 2.0",id:"upgrade-to-version-20",level:4},{value:"Upgrade to version 2.1",id:"upgrade-to-version-21",level:4},{value:"Workload group properties",id:"workload-group-properties",level:2},{value:"Configure cgroup v1",id:"configure-cgroup-v1",level:2},{value:"Workload group usage",id:"workload-group-usage",level:2},{value:"Query Queue",id:"query-queue",level:3},{value:"Configure CPU hard limits",id:"configure-cpu-hard-limits",level:3},{value:"How to switch CPU limit node between soft limit and hard limit",id:"how-to-switch-cpu-limit-node-between-soft-limit-and-hard-limit",level:3}],p={toc:u},d="wrapper";function m(e){let{components:o,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The workload group can limit the use of compute and memory resources on a single be node for tasks within the group. Currently, query binding to workload groups is supported."),(0,a.yg)("h2",{id:"version-description"},"Version Description"),(0,a.yg)("p",null,"Workload Group is a feature that has been supported since version 2.0. The main difference between version 2.0 and 2.1 is that the 2.0 version of Workload Group does not rely on CGroup, while the 2.1 version of Workload Group depends on CGroup. Therefore, when using the 2.1 version of Workload Group, the environment of CGroup needs to be configured."),(0,a.yg)("h4",{id:"upgrade-to-version-20"},"Upgrade to version 2.0"),(0,a.yg)("p",null,"If upgrading from version 1.2 to version 2.0, it is recommended to enable the WorkloadGroup after the overall upgrade of the Doris cluster is completed. Because if you only upgrade a single Follower and enable this feature, as the FE code of the Master has not been updated yet, there is no metadata information for Workload Group in the Doris cluster, which may cause queries for the upgraded Follower nodes to fail. The recommended upgrade process is as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"First, upgrade the overall code of the Doris cluster to version 2.0."),(0,a.yg)("li",{parentName:"ul"},"Start using this feature according to the section ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"Workload group usage"))," in the following text.")),(0,a.yg)("h4",{id:"upgrade-to-version-21"},"Upgrade to version 2.1"),(0,a.yg)("p",null,"If the code version is upgraded from 2.0 to 2.1, there are two situations:"),(0,a.yg)("p",null,"Scenario 1: In version 2.1, if the Workload Group has already been used, you only need to refer to the process of configuring cgroup v1 in the following text to use the new version of the Workload Group."),(0,a.yg)("p",null,"Scenario 2: If the Workload Group is not used in version 2.0, it is also necessary to upgrade the Doris cluster as a whole to version 2.1, and then start using this feature according to the section ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Workload group usage"))," in the following text."),(0,a.yg)("h2",{id:"workload-group-properties"},"Workload group properties"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_share: Optional, The default value is 1024, with a range of positive integers. used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get 25% (10 / (10 + 30)) of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"memory_limit: Optional, default value is 0% which means unlimited, range of values from 1% to 100%. set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: ",(0,a.yg)("inlineCode",{parentName:"p"},"physical_memory * mem_limit * memory_limit"),", where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"enable_memory_overcommit: Optional, enable soft memory isolation for the workload group, default is true. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_hard_limit: Optional, default value -1%, no limit. The range of values is from 1% to 100%. In CPU hard limit mode, the maximum available CPU percentage of Workload Group cannot exceed cpu_hard_limit value, regardless of whether the current machine's CPU resources are fully utilized.\nSum of all Workload Groups's cpu_hard_limit cannot exceed 100%. This is a new property added since version 2.1.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"max_concurrency: Optional, maximum query concurrency, default value is the maximum integer value, which means there is no concurrency limit. When the number of running queries reaches this value, new queries will being queued.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"max_queue_size: Optional, length of the query queue. When the queue is full, new queries will be rejected. The default value is 0, which means no queuing.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"queue_timeout: Optional, query the timeout time in the queue, measured in milliseconds. If the query exceeds this value, an exception will be thrown directly to the client. The default value is 0, which means no queuing.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"scan_thread_num: Optional, the number of threads used for scanning in the current workload group. The default value is -1, which means it does not take effect, the number of scan threads in the be configuration shall prevail. The value is an integer greater than 0."))),(0,a.yg)("p",null,"Notes:"),(0,a.yg)("p",null,"1 At present, the simultaneous use of CPU's soft and hard limits is not supported. A cluster can only have soft or hard limits at a certain time. The switching method will be described in the following text."),(0,a.yg)("p",null,"2 All properties are optional, but at least one propety needs to be specified when creating a Workload Group."),(0,a.yg)("h2",{id:"configure-cgroup-v1"},"Configure cgroup v1"),(0,a.yg)("p",null,"Doris 2.0 version uses Doris scheduling to limit CPU resources, but since version 2.1, Doris defaults to using CGgroup v1 to limit CPU resources (CGgroup v2 is currently not supported). Therefore, if CPU resources are expected to be limited in version 2.1, it is necessary to have CGgroup v1 installed on the node where BE is located."),(0,a.yg)("p",null,"If users use the Workload Group software limit in version 2.0 and upgrade to version 2.1, they also need to configure CGroup, Otherwise, cpu soft limit may not work."),(0,a.yg)("p",null,"If using CGroup within a container, the container needs to have permission to operate the host."),(0,a.yg)("p",null,"Without configuring cgroup, users can use all functions of the workload group except for CPU limitations."),(0,a.yg)("p",null,"1 Firstly, confirm that the CGgroup v1 version has been installed on the node where BE is located, and the path ",(0,a.yg)("inlineCode",{parentName:"p"},"/sys/fs/cgroup/cpu/")," exists."),(0,a.yg)("p",null,"2 Create a new directory named doris in the CPU path of cgroup, user can specify their own directory name."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mkdir /sys/fs/cgroup/cpu/doris")),(0,a.yg)("p",null,"3 It is necessary to ensure that Doris's BE process has read/write/execute permissions for this directory"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// Modify the permissions of this directory to read, write, and execute\nchmod 770 /sys/fs/cgroup/cpu/doris\n\n// Assign the ownership of this directory to Doris's account\nchown -R doris:doris /sys/fs/cgroup/cpu/doris\n")),(0,a.yg)("p",null,"4 Modify the configuration of BE and specify the path to cgroup"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"doris_cgroup_cpu_path = /sys/fs/cgroup/cpu/doris\n")),(0,a.yg)("p",null,'5 restart BE, in the log (be. INFO), you can see the words "add thread xxx to group" indicating successful configuration.'),(0,a.yg)("p",null,"It should be noted that the current workload group does not support the deployment of multiple BE on same machine."),(0,a.yg)("h2",{id:"workload-group-usage"},"Workload group usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"First, create a custom workload group.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists g1\nproperties (\n    "cpu_share"="1024",\n    "memory_limit"="30%",\n    "enable_memory_overcommit"="true"\n);\n')),(0,a.yg)("p",null,"This is soft CPU limit. Since version 2.1, the system will automatically create a group named ",(0,a.yg)("inlineCode",{parentName:"p"}," ")," normal ",(0,a.yg)("inlineCode",{parentName:"p"}," "),", which cannot be deleted."),(0,a.yg)("p",null,"For details on creating a workload group, see ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},"CREATE-WORKLOAD-GROUP"),", and to delete a workload group, refer to ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP"},"DROP-WORKLOAD-GROUP"),"; to modify a workload group, refer to ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},"ALTER-WORKLOAD-GROUP"),"; to view the workload group, you can visit doris system table ",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema.workload_groups")," or ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS"),"."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Bind the workload group.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bind the user to the workload group by default by setting the user property to ",(0,a.yg)("inlineCode",{parentName:"li"},"normal"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set property 'default_workload_group' = 'g1'.\n")),(0,a.yg)("p",null,"The current user's query will use 'g1' by default."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Specify the workload group via the session variable, which defaults to null.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set workload_group = 'g1'.\n")),(0,a.yg)("p",null,"session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group")," takes precedence over user property ",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", in case ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group")," is empty, the query will be bound to ",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", in case session variable ",(0,a.yg)("inlineCode",{parentName:"p"}," workload_group")," is not empty, the query will be bound to ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"."),(0,a.yg)("p",null,"If you are a non-admin user, you need to execute ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS")," to check if the current user can see the workload group, if not, the workload group may not exist or the current user does not have permission to execute the query. If you cannot see the workload group, the workload group may not exist or the current user does not have privileges. To authorize the workload group, refer to: ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Account-Management-Statements/GRANT"},"grant statement"),"."),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"Execute the query, which will be associated with the g1 workload group.")),(0,a.yg)("h3",{id:"query-queue"},"Query Queue"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists queue_group\nproperties (\n    "cpu_share"="10",\n    "memory_limit"="30%",\n    "max_concurrency" = "10",\n    "max_queue_size" = "20",\n    "queue_timeout" = "3000"\n);\n')),(0,a.yg)("p",null,"It should be noted that the current queuing design is not aware of the number of FEs, and the queuing parameters only works in a single FE, for example:"),(0,a.yg)("p",null,"A Doris cluster is configured with a work load group and set max_concurrency=1,\nIf there is only 1 FE in the cluster, then this workload group will only run one SQL at the same time from the Doris cluster perspective,\nIf there are 3 FEs, the maximum number of query that can be run in Doris cluster is 3."),(0,a.yg)("h3",{id:"configure-cpu-hard-limits"},"Configure CPU hard limits"),(0,a.yg)("p",null,"At present, Doris defaults to running the CPU's soft limit. If you want to use Workload Group's hard limit, you can do as follows."),(0,a.yg)("p",null,"1 Enable the cpu hard limit in FE. If there are multiple FE, the same operation needs to be performed on each FE."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1 modify fe.conf in disk\nexperimental_enable_cpu_hard_limit = true\n\n2 modify conf in memory\nADMIN SET FRONTEND CONFIG ("enable_cpu_hard_limit" = "true");\n')),(0,a.yg)("p",null,"2 modify cpu_hard_limit"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"alter workload group g1 properties ( 'cpu_hard_limit'='20%' );\n")),(0,a.yg)("p",null,"3 Viewing the current configuration of the Workload Group, it can be seen that although the cpu_share may not be 0, but due to the hard limit mode being enabled, the query will also follow the CPU's hard limit during execution. That is to say, the switch of CPU software and hardware limits does not affect workload group modification."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [information_schema]>select name, cpu_share,memory_limit,enable_memory_overcommit,cpu_hard_limit from information_schema.workload_groups where name='g1';\n+------+-----------+--------------+--------------------------+----------------+\n| name | cpu_share | memory_limit | enable_memory_overcommit | cpu_hard_limit |\n+------+-----------+--------------+--------------------------+----------------+\n| g1   |      1024 | 30%          | true                     | 20%            |\n+------+-----------+--------------+--------------------------+----------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"how-to-switch-cpu-limit-node-between-soft-limit-and-hard-limit"},"How to switch CPU limit node between soft limit and hard limit"),(0,a.yg)("p",null,"At present, Doris does not support running both the soft and hard limits of the CPU simultaneously. A Doris cluster can only have either the CPU soft limit or the CPU hard limit at any time."),(0,a.yg)("p",null,"Users can switch between two modes, and the main switching methods are as follows:"),(0,a.yg)("p",null,"1 If the current cluster configuration is set to the default CPU soft limit and it is expected to be changed to the CPU hard limit, then cpu_hard_limit should be set to a valid value first."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"alter workload group test_group properties ( 'cpu_hard_limit'='20%' );\n")),(0,a.yg)("p",null,"It is necessary to modify cpu_hard_limit of all Workload Groups in the current cluster, sum of all Workload Group's cpu_hard_limit cannot exceed 100%.\nDue to the CPU's hard limit can not being able to provide a valid default value, if only the switch is turned on without modifying cpu_hard_limit, the CPU's hard limit will not work."),(0,a.yg)("p",null,"2 Turn on the CPU hard limit switch in all FEs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1 modify fe.conf\nexperimental_enable_cpu_hard_limit = true\n\n2 modify conf in memory\nADMIN SET FRONTEND CONFIG ("enable_cpu_hard_limit" = "true");\n')),(0,a.yg)("p",null,"If user expects to switch back from cpu hard limit to cpu soft limit, then they only need to set ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_cpu_hard_limit=false"),".\nCPU Soft Limit property ",(0,a.yg)("inlineCode",{parentName:"p"},"cpu_share")," will be filled with a valid value of 1024 by default(If the user has never set the cpu_share before), and users can adjust cpu_share based on the priority of Workload Group."))}m.isMDXComponent=!0}}]);