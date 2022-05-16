"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7809],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Querying",sidebar_position:4},l="Querying Contract State",c={unversionedId:"architecture/query",id:"architecture/query",title:"Querying",description:"There are many cases where you want to view the state of a contract. Both as an external client (using the cli), but",source:"@site/docs/03-architecture/04-query.md",sourceDirName:"03-architecture",slug:"/architecture/query",permalink:"/docs/1.0/architecture/query",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/03-architecture/04-query.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Querying",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Names and Addresses",permalink:"/docs/1.0/architecture/addresses"},next:{title:"Serialization",permalink:"/docs/1.0/architecture/serialization"}},u={},d=[{value:"Raw Queries",id:"raw-queries",level:2},{value:"Custom Queries",id:"custom-queries",level:2},{value:"External Queries",id:"external-queries",level:2},{value:"Internal Queries",id:"internal-queries",level:2}],h={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"querying-contract-state"},"Querying Contract State"),(0,i.kt)("p",null,'There are many cases where you want to view the state of a contract. Both as an external client (using the cli), but\nalso while executing a contract. For example, we discussed resolving names like "Alice" or "Bob" in the last section,\nwhich would require a query to another contract. We will first cover the two types of queries - raw and custom - then\nlook at the semantics of querying via an ',(0,i.kt)("em",{parentName:"p"},"external client"),", as well an ",(0,i.kt)("em",{parentName:"p"},"internal client")," (another contract). We will pay\nspecial attention not only to how it works practically, but also the design and security issues of executing queries\nfrom one contract to another."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This has been updated for CosmWasm 0.8 with full support for cross-contract queries."),(0,i.kt)("h2",{id:"raw-queries"},"Raw Queries"),(0,i.kt)("p",null,"The simplest query to implement is just raw read access to the key-value store. If the caller (either external client,\nor other contract) passes in the raw binary key that is used in the contract's storage, we can easily return the raw\nbinary value. The benefit of this approach is that it is very easy to implement and universal. The downside is that it\nlinks the caller to the ",(0,i.kt)("em",{parentName:"p"},"implementation")," of the storage and requires knowledge of the exact contract being executed."),(0,i.kt)("p",null,"This is implemented inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd")," runtime and circumvents the VM. As a consequence it requires no support from the\nCosmWasm contract and all contract state is visible. Such a ",(0,i.kt)("inlineCode",{parentName:"p"},"query_raw")," function is exposed to all callers (external and\ninternal)."),(0,i.kt)("h2",{id:"custom-queries"},"Custom Queries"),(0,i.kt)("p",null,"There are many cases where it is undesirable to couple tightly to ",(0,i.kt)("em",{parentName:"p"},"implementation"),", and we would rather depend on an ",(0,i.kt)("em",{parentName:"p"},"\ninterface"),'. For example, we will define a standard for "ERC20" ',(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg")," for calling the contract and we would want to\ndefine such a standard for a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryMsg"),". For example, query balance by address, query allowance via granter + grantee,\nquery token info (ticker, decimals, etc). By defining a standard ",(0,i.kt)("em",{parentName:"p"},"interface"),', we allow many implementations, including\ncomplex contracts, where the "ERC20" interface is only a small subset of their functionality.'),(0,i.kt)("p",null,"To enable custom queries, we allow each contract to expose a ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," function, that can access its data store in\nread-only mode. It can load any data it wishes and even perform calculations on it. This method is exposed\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"query_custom")," to all callers (external and internal). The data format (both query and response) is anything the\ncontract desires, and should be documented in the public schema, along with ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleMsg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"InitMsg"),"."),(0,i.kt)("p",null,"Note that executing a contract may consume an unbounded amount of gas. Whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"query_raw")," will read one key and has a\nsmall, mostly fixed cost, we need to enforce a gas limit on these queries. This is done differently for external and\ninternal calls and discussed below."),(0,i.kt)("h2",{id:"external-queries"},"External Queries"),(0,i.kt)("p",null,"External queries are the typical way all web and cli clients work with the blockchain. They call Tendermint RPC, which\ncalls into ",(0,i.kt)("inlineCode",{parentName:"p"},"abci_query")," in the Cosmos SDK, which delegates down to the module to handle it. As far as I know, there is\nan infinite gas limit on queries, as they are only executed on one node, and cannot slow down the entire blockchain.\nThis functionality is generally not exposed on validating nodes. The query functionality exposed in the current SDK is\nhard coded, and has execution time limits designed by the developers. This limits abuse. But what about someone\nuploading a wasm contract with an infinite loop, and then using that to DoS any public RPC node that exposes querying?"),(0,i.kt)("p",null,"To avoid such issues, we need to define some fixed gas limit for all ",(0,i.kt)("inlineCode",{parentName:"p"},"query_custom")," transactions called externally. This\nwill not charge a fee, but is used to limit abuse. However, it is difficult to define a standard value, for a free\npublic node would prefer a small amount, but I may want to sync my own archive node and perform complex queries. Thus, a\ngas limit for all ",(0,i.kt)("inlineCode",{parentName:"p"},"query_custom")," calls can be defined in an app-specific configuration file, which can be customized by\neach node operator, with a sensible default limit. This will allow public nodes to protect themselves from complex\nqueries, while still allowing optional queries to perform large aggregation over all contract data in\nspecially-configured nodes."),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"abci_query"),' call never reads the current "in-progress" state of the modules, but uses a read-only\nsnapshot of the state after the last committed block.'),(0,i.kt)("h2",{id:"internal-queries"},"Internal Queries"),(0,i.kt)("p",null,"While many interactions between contracts can easily be modeled by sending messages, there are some cases where we\nwould like to synchronously query other modules, without altering their state. For example, if I want to resolve a name\nto a ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/architecture/addresses"},"Address"),", or if I want to check KYC status of some account (in another contract) before enabling\nan action. One could model this as a series of messages, but it is quite complex and makes such simple use-cases almost\nunusable in the system."),(0,i.kt)("p",null,"However, this design violates one of the basic principles of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/architecture/actor"},"actor model"),", namely that each contract\nhas exclusive access to its own internal state. (Both ",(0,i.kt)("inlineCode",{parentName:"p"},"query_raw")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"query_custom")," fail in this regard). Far from just\nbeing a theoretical issue, this may lead to concurrency and reentrancy issues if not handled correctly. We do not want\nto push such safety critical reasoning into the laps of the contract developers, but rather provide these security\nguarantees in the platform. However, providing old data also leads to many possible errors and bugs, especially since we\nuse the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Querier")," interface to interact with the native SDK modules, ",(0,i.kt)("em",{parentName:"p"},"including querying the contract's own\nbalance"),"."),(0,i.kt)("p",null,"As such, we provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"Querier")," with read-only access to the state snapshot ",(0,i.kt)("em",{parentName:"p"},"right before execution of the current\nCosmWasm message"),". Since we take a snapshot and both the executing contract and the queried contract have read-only\naccess to the data ",(0,i.kt)("em",{parentName:"p"},"before the contract execution"),", this is still safe with Rust's borrowing rules (as a placeholder for\nsecure design). The current contract only writes to a cache, which is flushed afterwards on success."),(0,i.kt)("p",null,"Another issue is to avoid reentrancy. Since these queries are called synchronously, they can call back into the calling\ncontract and possibly cause issues. Since queries only have read-only access and cannot have side-effects, this is not\nnearly as dangerous as executing a remote contract synchronously, but still may be an issue to consider. Notably, it\nwill only have access to the state before the current execution. I cannot see a place where this could cause more errors\nthan a query function intentionally returning false data, but it is a place to investigate more."),(0,i.kt)("p",null,"Since all queries are performed as part of a transaction, that already has a strongly enforced gas limit, we don't need\nextra work here. All storage reads and data processing performed as part of a query are deducted from the same gas meter\nas the rest of the transaction, and thus limit processing time. We consider adding explicit guards against re-entrancy\nor max query depth, but have not enforced them yet in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmd"),". As more work on cross-contract queries comes to fruition,\nthis is another place to investigate."))}p.isMDXComponent=!0}}]);