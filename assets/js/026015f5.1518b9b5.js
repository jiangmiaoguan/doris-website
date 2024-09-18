"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86726],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>g});var a=i(296540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),h=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(i),p=n,g=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return i?a.createElement(g,r(r({ref:t},d),{},{components:i})):a.createElement(g,r({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var h=2;h<o;h++)r[h]=i[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},267685:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=i(58168),n=(i(296540),i(15680));const o={title:"Doris Join Optimization Principle",language:"en"},r=void 0,l={unversionedId:"query/join-optimization/doris-join-optimization",id:"version-2.1/query/join-optimization/doris-join-optimization",title:"Doris Join Optimization Principle",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/join-optimization/doris-join-optimization.md",sourceDirName:"query/join-optimization",slug:"/query/join-optimization/doris-join-optimization",permalink:"/docs/query/join-optimization/doris-join-optimization",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Doris Join Optimization Principle",language:"en"},sidebar:"docs",previous:{title:"Querying Async Materialized View",permalink:"/docs/query/view-materialized-view/query-async-materialized-view"},next:{title:"Bucket Shuffle Join",permalink:"/docs/query/join-optimization/bucket-shuffle-join"}},s={},h=[{value:"Doris Shuffle way",id:"doris-shuffle-way",level:2},{value:"Comparison of four Shuffle methods",id:"comparison-of-four-shuffle-methods",level:3},{value:"Runtime Filter Join optimization",id:"runtime-filter-join-optimization",level:2},{value:"Runtime Filter Type",id:"runtime-filter-type",level:3},{value:"Join Reader",id:"join-reader",level:2},{value:"Doris Join optimization method",id:"doris-join-optimization-method",level:2},{value:"Optimization case practice",id:"optimization-case-practice",level:2},{value:"Case 1",id:"case-1",level:3},{value:"Case 2",id:"case-2",level:3},{value:"Case 3",id:"case-3",level:3},{value:"Doris Join optimization suggestion",id:"doris-join-optimization-suggestion",level:2}],d={toc:h},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"doris-join-optimization-principle"},"Doris Join optimization principle"),(0,n.yg)("p",null,"Doris supports two physical operators, one is ",(0,n.yg)("strong",{parentName:"p"},"Hash Join"),", and the other is ",(0,n.yg)("strong",{parentName:"p"},"Nest Loop Join"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Hash Join: Create a hash table on the right table based on the equivalent join column, and the left table uses the hash table to perform join calculations in a streaming manner. Its limitation is that it can only be applied to equivalent joins."),(0,n.yg)("li",{parentName:"ul"},"Nest Loop Join: With two for loops, it is very intuitive. Then it is applicable to unequal-valued joins, such as: greater than or less than or the need to find a Cartesian product. It is a general join operator, but has poor performance.")),(0,n.yg)("p",null,"As a distributed MPP database, data shuffle needs to be performed during the Join process. Data needs to be split and scheduled to ensure that the final Join result is correct. As a simple example, assume that the relationship S and R are joined, and N represents the number of nodes participating in the join calculation; T represents the number of tuples in the relationship."),(0,n.yg)("h2",{id:"doris-shuffle-way"},"Doris Shuffle way"),(0,n.yg)("p",null,"Doris supports 4 Shuffle methods"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"BroadCast Join"),(0,n.yg)("p",{parentName:"li"},"It requires the full data of the right table to be sent to the left table, that is, each node participating in Join has the full data of the right table, that is, T(R)."),(0,n.yg)("p",{parentName:"li"},"Its applicable scenarios are more general, and it can support Hash Join and Nest loop Join at the same time, and its network overhead is N ","*"," T(R)."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"BroadCast Join",src:i(677614).A,width:"2560",height:"1440"})),(0,n.yg)("p",{parentName:"li"},"The data in the left table is not moved, and the data in the right table is sent to the scanning node of the data in the left table.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Shuffle Join"),(0,n.yg)("p",{parentName:"li"},"When Hash Join is performed, the corresponding Hash value can be calculated through the Join column, and Hash bucketing can be performed."),(0,n.yg)("p",{parentName:"li"},"Its network overhead is: T(S) + T(R), but it can only support Hash Join, because it also calculates buckets according to the conditions of Join."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Shuffle Join",src:i(429416).A,width:"2560",height:"1040"})),(0,n.yg)("p",{parentName:"li"},"The left and right table data are sent to different partition nodes according to the partition, and the calculated demerits are sent.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Bucket Shuffle Join"),(0,n.yg)("p",{parentName:"li"},"Doris's table data itself is bucketed by Hash calculation, so you can use the properties of the bucketed columns of the table itself to shuffle the Join data. If two tables need to be joined, and the Join column is the bucket column of the left table, then the data in the left table can actually be calculated by sending the data into the buckets of the left table without moving the data in the right table."),(0,n.yg)("p",{parentName:"li"},"Its network overhead is: T(R) is equivalent to only Shuffle the data in the right table."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Bucket Shuffle Join",src:i(506305).A,width:"2560",height:"1040"})),(0,n.yg)("p",{parentName:"li"},"The data in the left table does not move, and the data in the right table is sent to the node that scans the table in the left table according to the result of the partition calculation.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Colocation"),(0,n.yg)("p",{parentName:"li"},"It is similar to Bucket Shuffle Join, which means that the data has been shuffled according to the preset Join column scenario when data is imported. Then the join calculation can be performed directly without considering the Shuffle problem of the data during the actual query."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Colocation Join",src:i(186314).A,width:"2560",height:"800"})),(0,n.yg)("p",{parentName:"li"},"The data has been pre-partitioned, and the Join calculation is performed directly locally"))),(0,n.yg)("h3",{id:"comparison-of-four-shuffle-methods"},"Comparison of four Shuffle methods"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Shuffle Mode"),(0,n.yg)("th",{parentName:"tr",align:null},"Network Overhead"),(0,n.yg)("th",{parentName:"tr",align:null},"Physical Operators"),(0,n.yg)("th",{parentName:"tr",align:null},"Applicable Scenarios"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"BroadCast"),(0,n.yg)("td",{parentName:"tr",align:null},"N ","*"," T(R)"),(0,n.yg)("td",{parentName:"tr",align:null},"Hash Join / Nest Loop Join"),(0,n.yg)("td",{parentName:"tr",align:null},"Universal")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Shuffle"),(0,n.yg)("td",{parentName:"tr",align:null},"T(S) + T(R)"),(0,n.yg)("td",{parentName:"tr",align:null},"Hash Join"),(0,n.yg)("td",{parentName:"tr",align:null},"General")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Bucket Shuffle"),(0,n.yg)("td",{parentName:"tr",align:null},"T(R)"),(0,n.yg)("td",{parentName:"tr",align:null},"Hash Join"),(0,n.yg)("td",{parentName:"tr",align:null},"There are distributed columns in the left table in the join condition, and the left table is executed as a single partition")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Colocate"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},"Hash Join"),(0,n.yg)("td",{parentName:"tr",align:null},"There are distributed columns in the left table in the join condition, and the left and right tables belong to the same Colocate Group")))),(0,n.yg)("p",null,"N : The number of Instances participating in the Join calculation"),(0,n.yg)("p",null,"T(relation) : Tuple number of relation"),(0,n.yg)("p",null,"The flexibility of the above four methods is from high to low, and its requirements for this data distribution are becoming more and more strict, but the performance of Join calculation is also getting better and better."),(0,n.yg)("h2",{id:"runtime-filter-join-optimization"},"Runtime Filter Join optimization"),(0,n.yg)("p",null,"Doris will build a hash table in the right table when performing Hash Join calculation, and the left table will stream through the hash table of the right table to obtain the join result. The RuntimeFilter makes full use of the Hash table of the right table. When the right table generates a hash table, a filter condition based on the hash table data is generated at the same time, and then pushed down to the data scanning node of the left table. In this way, Doris can perform data filtering at runtime."),(0,n.yg)("p",null,"If the left table is a large table and the right table is a small table, then using the filter conditions generated by the left table, most of the data to be filtered in the Join layer can be filtered in advance when the data is read, so that a large amount of data can be filtered. Improve the performance of join queries."),(0,n.yg)("p",null,"Currently Doris supports three types of RuntimeFilter"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"One is IN-IN, which is well understood, and pushes a hashset down to the data scanning node.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The second is BloomFilter, which uses the data of the hash table to construct a BloomFilter, and then pushes the BloomFilter down to the scanning node that queries the data. .")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The last one is MinMax, which is a Range range. After the Range range is determined by the data in the right table, it is pushed down to the data scanning node."))),(0,n.yg)("p",null,"There are two requirements for the applicable scenarios of Runtime Filter:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The first requirement is that the right table is large and the left table is small, because building a Runtime Filter needs to bear the computational cost, including some memory overhead.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The second requirement is that there are few results from the join of the left and right tables, indicating that this join can filter out most of the data in the left table."))),(0,n.yg)("p",null,"When the above two conditions are met, turning on the Runtime Filter can achieve better results"),(0,n.yg)("p",null,"When the Join column is the Key column of the left table, the RuntimeFilter will be pushed down to the storage engine. Doris itself supports delayed materialization,"),(0,n.yg)("p",null,"Delayed materialization is simply like this: if you need to scan three columns A, B, and C, there is a filter condition on column A: A is equal to 2, if you want to scan 100 rows, you can scan 100 rows of column A first, Then filter through the filter condition A = 2. After filtering the results, read columns B and C, which can greatly reduce the data read IO. Therefore, if the Runtime Filter is generated on the Key column, and the delayed materialization of Doris itself is used to further improve the performance of the query."),(0,n.yg)("h3",{id:"runtime-filter-type"},"Runtime Filter Type"),(0,n.yg)("p",null,"Doris provides three different Runtime Filter types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The advantage of ",(0,n.yg)("strong",{parentName:"p"},"IN")," is that the effect filtering effect is obvious and fast. Its shortcomings are: First, it only applies to BroadCast. Second, when the right table exceeds a certain amount of data, it will fail. The current Doris configuration is 1024, that is, if the right table is larger than 1024, the Runtime Filter of IN will directly failed.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The advantage of ",(0,n.yg)("strong",{parentName:"p"},"MinMax")," is that the overhead is relatively small. Its disadvantage is that it has a relatively good effect on numeric columns, but basically no effect on non-numeric columns.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The feature of ",(0,n.yg)("strong",{parentName:"p"},"Bloom Filter")," is that it is universal, suitable for various types, and the effect is better. The disadvantage is that its configuration is more complicated and the calculation is high."))),(0,n.yg)("h2",{id:"join-reader"},"Join Reader"),(0,n.yg)("p",null,"Once the database involves multi-table Join, the order of Join has a great impact on the performance of the entire Join query. Assuming that there are three tables to join, refer to the following picture, the left is the a table and the b table to do the join first, the intermediate result has 2000 rows, and then the c table is joined."),(0,n.yg)("p",null,"Next, look at the picture on the right and adjust the order of Join. Join the a table with the c table first, the intermediate result generated is only 100, and then finally join with the b table for calculation. The final join result is the same, but the intermediate result it generates has a 20x difference, which results in a big performance diff."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Join Reorder",src:i(131810).A,width:"2560",height:"1232"})),(0,n.yg)("p",null,"Doris currently supports the rule-based Join Reorder algorithm. Its logic is:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Make joins with large tables and small tables as much as possible, and the intermediate results it generates are as small as possible.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Put the conditional join table forward, that is to say, try to filter the conditional join table")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Hash Join has higher priority than Nest Loop Join, because Hash Join itself is much faster than Nest Loop Join."))),(0,n.yg)("h2",{id:"doris-join-optimization-method"},"Doris Join optimization method"),(0,n.yg)("p",null,"Doris Join tuning method:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use the Profile provided by Doris itself to locate the bottleneck of the query. Profile records various information in Doris' entire query, which is first-hand information for performance tuning. .")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Understand the Join mechanism of Doris, which is also the content shared with you in the second part. Only by knowing why and understanding its mechanism can we analyze why it is slow.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use Session variables to change some behaviors of Join, so as to realize the tuning of Join.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Check the Query Plan to analyze whether this tuning is effective."))),(0,n.yg)("p",null,"The above 4 steps basically complete a standard Join tuning process, and then it is to actually query and verify it to see what the effect is."),(0,n.yg)("p",null,"If the first 4 methods are connected in series, it still does not work. At this time, it may be necessary to rewrite the Join statement, or to adjust the data distribution. It is necessary to recheck whether the entire data distribution is reasonable, including querying the Join statement, and some manual adjustments may be required. Of course, this method has a relatively high mental cost, which means that further analysis is required only when the previous method does not work."),(0,n.yg)("h2",{id:"optimization-case-practice"},"Optimization case practice"),(0,n.yg)("h3",{id:"case-1"},"Case 1"),(0,n.yg)("p",null,"A four-table join query, through Profile, found that the second join took a long time, taking 14 seconds."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523153600797",src:i(808383).A,width:"852",height:"514"})),(0,n.yg)("p",null,"After further analysis of Profile, it is found that BuildRows, that is, the data volume of the right table is about 25 million. And ProbeRows (ProbeRows is the amount of data in the left table) is only more than 10,000. In this scenario, the right table is much larger than the left table, which is obviously an unreasonable situation. This obviously shows that there is some problem with the order of Join. At this time, try to change the Session variable and enable Join Reorder."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"set enable_cost_based_join_reorder = true\n")),(0,n.yg)("p",null,"This time, the time has been reduced from 14 seconds to 4 seconds, and the performance has been improved by more than 3 times."),(0,n.yg)("p",null,"At this time, when checking the profile again, the order of the left and right tables has been adjusted correctly, that is, the right table is a large table, and the left table is a small table. The overhead of building a hash table based on a small table is very small. This is a typical scenario of using Join Reorder to improve Join performance."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523153757607",src:i(567070).A,width:"848",height:"508"})),(0,n.yg)("h3",{id:"case-2"},"Case 2"),(0,n.yg)("p",null,"There is a slow query. After viewing the Profile, the entire Join node takes about 44 seconds. Its right table has 10 million, the left table has 60 million, and the final returned result is only 60 million."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523153913059",src:i(671155).A,width:"914",height:"558"})),(0,n.yg)("p",null,"It can be roughly estimated that the filtering rate is very high, so why does the Runtime Filter not take effect? Check it out through Query Plan and find that it only enables the Runtime Filter of IN."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523153958828",src:i(765482).A,width:"1004",height:"442"})),(0,n.yg)("p",null,"When the right table exceeds 1024 rows, IN will not take effect, so there is no filtering effect at all, so try to adjust the type of RuntimeFilter."),(0,n.yg)("p",null,"This is changed to BloomFilter, and the 60 million pieces of data in the left table have filtered 59 million pieces. Basically, 99% of the data is filtered out, and this effect is very significant. The query has also dropped from the original 44 seconds to 13 seconds, and the performance has been improved by about three times."),(0,n.yg)("h3",{id:"case-3"},"Case 3"),(0,n.yg)("p",null,"The following is a relatively extreme case, which cannot be solved by tuning some environment variables, because it involves SQL Rewrite, so the original SQL is listed here."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"select 100.00 * sum (case\n        when P_type like 'PROMOS'\n        then 1 extendedprice * (1 - 1 discount)\n        else 0\n        end ) / sum(1 extendedprice * (1 - 1 discount)) as promo revenue\nfrom lineitem, part\nwhere\n    1_partkey = p_partkey\n    and 1_shipdate >= date '1997-06-01'\n    and 1 shipdate < date '1997-06-01' + interval '1' month\n")),(0,n.yg)("p",null,"This Join query is very simple, a simple join of left and right tables. Of course, there are some filter conditions on it. When I opened the Profile, I found that the entire query Hash Join was executed for more than three minutes. It is a BroadCast Join, and its right table has 200 million entries, while the left table has only 700,000. In this case, it is unreasonable to choose Broadcast Join, which is equivalent to making a Hash Table of 200 million records, and then traversing the Hash Table of 200 million records with 700,000 records, which is obviously unreasonable."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523154712519",src:i(549272).A,width:"556",height:"454"})),(0,n.yg)("p",null,"Why is there an unreasonable Join order? In fact, the left table is a large table with a level of 1 billion records. Two filter conditions are added to it. After adding these two filter conditions, there are 700,000 records of 1 billion records. But Doris currently does not have a good framework for collecting statistics, so it does not know what the filtering rate of this filter condition is. Therefore, when the join order is arranged, the wrong left and right table order of the join is selected, resulting in extremely low performance."),(0,n.yg)("p",null,"The following figure is an SQL statement after the rewrite is completed. A Join Hint is added after the Join, a square bracket is added after the Join, and then the required Join method is written. Here, Shuffle Join is selected. You can see in the actual query plan on the right that the data is indeed Partitioned. The original 3-minute time-consuming is only 7 seconds after the rewriting, and the performance is improved significantly."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"image-20220523160915229",src:i(908432).A,width:"572",height:"674"})),(0,n.yg)("h2",{id:"doris-join-optimization-suggestion"},"Doris Join optimization suggestion"),(0,n.yg)("p",null,"Finally, we summarize four suggestions for optimization and tuning of Doris Join:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The first point: When doing Join, try to select columns of the same type or simple type. If the same type is used, reduce its data cast, and the simple type itself joins the calculation quickly.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The second point: try to choose the Key column for Join. The reason is also introduced in the Runtime Filter. The Key column can play a better effect on delayed materialization.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The third point: Join between large tables, try to make it Co-location, because the network overhead between large tables is very large, if you need to do Shuffle, the cost is very high.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fourth point: Use Runtime Filter reasonably, which is very effective in scenarios with high join filtering rate. But it is not a panacea, but has certain side effects, so it needs to be switched according to the granularity of specific SQL.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Finally: When it comes to multi-table Join, it is necessary to judge the rationality of Join. Try to ensure that the left table is a large table and the right table is a small table, and then Hash Join will be better than Nest Loop Join. If necessary, you can use SQL Rewrite to adjust the order of Join using Hint."))))}c.isMDXComponent=!0},677614:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/broadcast-join-d8bd07ac2608d3b7c4cddddf67b7fd55.png"},506305:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bucket-shuffle-join-b0e7449164fd95a4e77e2f412b057433.png"},186314:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/colocation-join-9db80ffeb4bd80e1a54b083e4817db7d.png"},131810:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/join-reorder-720c5270f5962ae7aad73aa26a9d3553.png"},808383:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523153600797-8c0110f8498c2b6b54fe9dfa6b6f89bf.png"},567070:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523153757607-aced93bcd65de383a68aca075909885c.png"},671155:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523153913059-c430baf5eae63c272d3e1355636ccad8.png"},765482:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523153958828-1e0aaf5df637b5db23a27c9f97c22bea.png"},549272:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523154712519-ff90fd895d5eed317bcc989f77b5b8bb.png"},908432:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/image-20220523160915229-e2e523c3e6e9e79d17e9849c1d8aa8f1.png"},429416:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/shuffle-join-82eb90441df18be5d1cd519b7700a551.png"}}]);