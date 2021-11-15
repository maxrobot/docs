"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2186],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:7},c="Math",u={unversionedId:"smart-contracts/math",id:"smart-contracts/math",isDocsHomePage:!1,title:"Math",description:"The math functions used by cosmwasm are based upon standard rust, but helper functions are provided for u128, u64 and decimals.",source:"@site/docs/04-smart-contracts/07-math.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/math",permalink:"/fr/docs/1.0/smart-contracts/math",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/07-math.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Verifying Smart Contracts",permalink:"/fr/docs/1.0/smart-contracts/verify"},next:{title:"Introduction",permalink:"/fr/docs/1.0/smart-contracts/frontend_app/introduction"}},p=[{value:"Unit128",id:"unit128",children:[{value:"checked",id:"checked",children:[],level:3},{value:"saturating",id:"saturating",children:[],level:3},{value:"wrapping",id:"wrapping",children:[],level:3}],level:2},{value:"Unit64",id:"unit64",children:[{value:"checked",id:"checked-1",children:[],level:3},{value:"saturating",id:"saturating-1",children:[],level:3},{value:"wrapping",id:"wrapping-1",children:[],level:3}],level:2},{value:"Decimal",id:"decimal",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math"},"Math"),(0,a.kt)("p",null,"The math functions used by cosmwasm are based upon standard rust, but helper functions are provided for u128, u64 and decimals.  "),(0,a.kt)("h2",{id:"unit128"},"Unit128"),(0,a.kt)("p",null,"A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range\ncan be used for clients that convert JSON numbers to floats, like JavaScript and jq."),(0,a.kt)("p",null,"Including in file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"use cosmwasm_std::Uint128;")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," to create instances of this and ",(0,a.kt)("inlineCode",{parentName:"p"},"u128")," to get the value out:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint128(number)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint128::new(number)")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint128::from(number u128/u64/u32/u16/u8)")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Uint128::try_from("34567")')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint128::zero()")),(0,a.kt)("h3",{id:"checked"},"checked"),(0,a.kt)("p",null,"All the checked math functions work with Unit128 variables: checked_add, checked_sub, checked_mul, checked_div, checked_div_euclid, checked_rem"),(0,a.kt)("h3",{id:"saturating"},"saturating"),(0,a.kt)("p",null,"All the saturating math functions work with Unit128 variables: saturating_add, saturating_sub, saturating_mul, saturating_pow"),(0,a.kt)("h3",{id:"wrapping"},"wrapping"),(0,a.kt)("p",null,"All the wrapping math functions work with Unit128 variables: wrapping_add, wrapping_sub, wrapping_mul, wrapping_pow"),(0,a.kt)("h2",{id:"unit64"},"Unit64"),(0,a.kt)("p",null,"A thin wrapper around u64 that is using strings for JSON encoding/decoding, such that the full u64 range\ncan be used for clients that convert JSON numbers to floats, like JavaScript and jq."),(0,a.kt)("p",null,"Including in file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"use cosmwasm_std::Uint64;")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," to create instances of this and ",(0,a.kt)("inlineCode",{parentName:"p"},"u64")," to get the value out:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint64(number)")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint64::new(number)")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint64::from(number u64/u32/u16/u8)")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Uint64::try_from("34567")')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Uint64::zero()")),(0,a.kt)("h3",{id:"checked-1"},"checked"),(0,a.kt)("p",null,"All the checked math functions work with Uint64 variables: checked_add, checked_sub, checked_mul, checked_div, checked_div_euclid, checked_rem"),(0,a.kt)("h3",{id:"saturating-1"},"saturating"),(0,a.kt)("p",null,"All the saturating math functions work with Uint64 variables: saturating_add, saturating_sub, saturating_mul, saturating_pow"),(0,a.kt)("h3",{id:"wrapping-1"},"wrapping"),(0,a.kt)("p",null,"All the wrapping math functions work with Uint64 variables: wrapping_add, wrapping_sub, wrapping_mul, wrapping_pow"),(0,a.kt)("h2",{id:"decimal"},"Decimal"),(0,a.kt)("p",null,"A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0\nThe greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)"),(0,a.kt)("p",null,"Including in file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"use cosmwasm_std::Decimal;")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Decimal::from_str("1234.567")')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decimal::one()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decimal::zero()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decimal::percent(50)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decimal::permille(125)")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Decimal::from_ratio(1u128, 1u128)")))}d.isMDXComponent=!0}}]);