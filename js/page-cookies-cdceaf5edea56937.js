(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2558],{73008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/cookies",function(){return n(71576)}])},6312:function(e,t,n){"use strict";var o=n(85893),i=n(45697),s=n.n(i),u=n(24298);function _(e){let{className:t,to:n,color:i,button:s,buttonColor:_="white"}=e,l=()=>{let e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})};return s?(0,o.jsx)(u.Z,{color:_,className:t,onClickHandler:l,children:s}):(0,o.jsx)("button",{type:"button",className:t,onClick:l,children:(0,o.jsx)("svg",{viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M21.36 9.39L21.36 14.19L10.68 22.26L-7.51399e-07 14.19L-5.41584e-07 9.39L4.95 13.14C6.53 14.32 7.85 15.35 8.91 16.23L8.91 0.419999L12.48 0.42L12.48 16.2C13.96 15.02 15.27 14 16.41 13.14L21.36 9.39Z",fill:null!=i?i:"white"})})})}_.propTypes={className:s().string,to:s().string.isRequired,color:s().oneOf(["","white","#000D10"]),buttonColor:s().oneOf(["","white","dark"]),button:s().oneOfType([s().bool,s().string])},t.Z=_},71576:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return P}});var o=n(85893),i=n(45697),s=n.n(i),u=n(94184),_=n.n(u),l=n(73569),r=n.n(l);function a(e){let{title:t,content:n,after:i}=e;return(0,o.jsxs)("div",{className:_()(r().titleRow,"o-layout o-layout--grids"),children:[(0,o.jsx)("div",{className:_()("o-layout__item u-22 u-7@medium u-offset-1"),children:(0,o.jsx)("h2",{className:_()(r().title,"u-h1 --small"),children:t})}),(0,o.jsxs)("div",{className:_()(r().titleContent,"o-layout__item u-22 u-13@medium u-offset-1 u-offset-2@medium"),children:[(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:n}}),i&&i]})]})}n(13226),a.propTypes={title:s().string,content:s().string,after:s().any};var c=n(67294),h=n(98893),d=n.n(h),f=n(16202),k=n(20336);function g(){let e=new f.ZP,[t,n]=(0,c.useState)({preferences:!0,marketing:!1,statistics:!1}),[i,s]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let t=e.get(f.P7);null!==t?n(e=>({...e,marketing:t})):(e.set(f.P7,!0),n(e=>({...e,marketing:!0})));let o=e.get(f.fZ);null!==o?n(e=>({...e,statistics:o})):(e.set(f.fZ,!0),n(e=>({...e,statistics:!0})))},[]);let u=(o,i)=>{n(e=>({...e,[o]:!t[o]})),e.set(i,!t[o]),s(!0),setTimeout(()=>{s(!1)},2500)};return(0,o.jsx)("div",{className:d().cookiePreferences,children:(0,o.jsxs)("form",{children:[(0,o.jsx)(k.Z,{id:"preferences",checked:!0,disabled:!0,title:"Functionele cookies",className:d().checkbox}),(0,o.jsx)(k.Z,{id:"marketing",checked:t.marketing,onChange:()=>u("marketing",f.P7),title:"Marketing cookies",className:d().checkbox}),(0,o.jsx)(k.Z,{id:"statistics",checked:t.statistics,onChange:()=>u("statistics",f.fZ),title:"Statistieken cookies",className:d().checkbox}),i&&(0,o.jsx)("div",{className:_()(d().updated,"u-small"),children:(0,o.jsx)("p",{className:"u-small",children:"Updated!"})})]})})}g.propTypes={};var m=n(39087),C=n.n(m);function p(e){let{settings:t,about:n}=e;return(0,o.jsxs)("section",{className:C().cookieSettings,children:[(0,o.jsx)(a,{title:t.title,content:t.content,after:(0,o.jsx)(g,{})}),(0,o.jsx)(a,{title:n.title,content:n.content})]})}p.propTypes={settings:s().object,about:s().object};var x=n(60431),w=n(72012),j=!0;function P(e){var t;let{cookiesPage:n,site:i}=e;return(0,o.jsxs)(w.Z,{seo:n._seoMetaTags.concat(i.faviconMetaTags),children:[(0,o.jsx)(x.Z,{title:n.headerTitle,content:n.headerContent,image:null===(t=n.headerBackground)||void 0===t?void 0:t.responsiveImage,scroll:"intro"}),(0,o.jsx)(p,{settings:{title:null==n?void 0:n.settingsTitle,content:null==n?void 0:n.settingsContent},about:{title:null==n?void 0:n.aboutTitle,content:null==n?void 0:n.aboutContent}})]})}P.propTypes={cookiesPage:s().object,site:s().object}},60431:function(e,t,n){"use strict";var o=n(85893),i=n(45697),s=n.n(i),u=n(94184),_=n.n(u),l=n(16290),r=n(6312),a=n(25264),c=n(52685),h=n.n(c);function d(e){let{title:t,content:n,image:i,scroll:s,contentComponent:u,button:c}=e;return(0,o.jsxs)("header",{className:h().header,children:[(0,o.jsx)(a.Z,{className:h().top,color:"white",logoSize:"small"}),(0,o.jsx)("div",{className:_()(h().content,"o-layout o-layout--grids"),children:(0,o.jsxs)("div",{className:"o-layout__item u-22 u-12@small u-7@medium u-offset-1 u-offset-15@medium",children:[(0,o.jsx)("h1",{className:_()(h().title,"u-h3"),children:t}),n&&(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),(0,o.jsx)("div",{className:h().contentComponent,children:u}),(0,o.jsx)(r.Z,{className:_()({[h().button]:c,[h().arrow]:!c}),to:s,button:null!=c&&c})]})}),(0,o.jsx)("div",{className:h().backgroundContainer,children:(0,o.jsx)(l.E,{data:i,fadeInDuration:100,className:h().background})})]})}d.propTypes={title:s().string,content:s().string,image:s().object,scroll:s().string,contentComponent:s().node,button:s().string},t.Z=d},98893:function(e){e.exports={"u-underline-link":"CookiePreferences_u-underline-link__cIdK1","u-white":"CookiePreferences_u-white__wfhge","u-h1":"CookiePreferences_u-h1__6K80x","u-h2":"CookiePreferences_u-h2__AzXA5","u-h3":"CookiePreferences_u-h3__fs4VW","u-h4":"CookiePreferences_u-h4__lKnDQ","u-h5":"CookiePreferences_u-h5__PgaJP","u-h6":"CookiePreferences_u-h6___sl2R",cookiePreferences:"CookiePreferences_cookiePreferences__eqNqv",checkbox:"CookiePreferences_checkbox__lO2YU",updated:"CookiePreferences_updated__4KFmo"}},73569:function(e){e.exports={"u-underline-link":"PostContent_u-underline-link__dvoE_","u-white":"PostContent_u-white__g_c1a","u-h1":"PostContent_u-h1__SPeW5","u-h2":"PostContent_u-h2__pCsqC","u-h3":"PostContent_u-h3__nKrDU","u-h4":"PostContent_u-h4__hziQS","u-h5":"PostContent_u-h5__mngbh","u-h6":"PostContent_u-h6___zgNm",article:"PostContent_article__tw_kX",content:"PostContent_content__FblEJ",titleContent:"PostContent_titleContent__H_pdT",lead:"PostContent_lead__n8Mr_",titleRow:"PostContent_titleRow__A9kfo",title:"PostContent_title__yXWu4",fullImage:"PostContent_fullImage__wqy_8"}},13226:function(e){e.exports={"u-underline-link":"TitleRow_u-underline-link__9J6HE","u-white":"TitleRow_u-white__Riklq","u-h1":"TitleRow_u-h1__dwDGi","u-h2":"TitleRow_u-h2__BV2wq","u-h3":"TitleRow_u-h3__wZirA","u-h4":"TitleRow_u-h4__BFgFh","u-h5":"TitleRow_u-h5__3ObfK","u-h6":"TitleRow_u-h6__lW8AC"}},39087:function(e){e.exports={"u-underline-link":"CookieSettings_u-underline-link__Q2Iva","u-white":"CookieSettings_u-white__glTV8","u-h1":"CookieSettings_u-h1__4zIIU","u-h2":"CookieSettings_u-h2__ffEHo","u-h3":"CookieSettings_u-h3__MFcD_","u-h4":"CookieSettings_u-h4__rYcCB","u-h5":"CookieSettings_u-h5__QTG2B","u-h6":"CookieSettings_u-h6__YRXPH",cookieSettings:"CookieSettings_cookieSettings__iCM3a"}},52685:function(e){e.exports={"u-underline-link":"HeaderDefault_u-underline-link__ohjgJ","u-white":"HeaderDefault_u-white__u0f9c","u-h1":"HeaderDefault_u-h1__TjN94","u-h2":"HeaderDefault_u-h2__LZiEx","u-h3":"HeaderDefault_u-h3__7zDNj","u-h4":"HeaderDefault_u-h4__FcJOC","u-h5":"HeaderDefault_u-h5__rezqW","u-h6":"HeaderDefault_u-h6__Kunek",header:"HeaderDefault_header__fh2_M",top:"HeaderDefault_top__HW2yx",content:"HeaderDefault_content__AXaVG",title:"HeaderDefault_title__cM7xx",button:"HeaderDefault_button__9ZEd6",arrow:"HeaderDefault_arrow__fVLoD",backgroundContainer:"HeaderDefault_backgroundContainer___OzgX",background:"HeaderDefault_background__y3hDo",contentComponent:"HeaderDefault_contentComponent__ayewV"}}},function(e){e.O(0,[3430,497,5088,2283,3471,6290,312,5291,7156,1393,1053,7656,9677,2888,9774,179],function(){return e(e.s=73008)}),_N_E=e.O()}]);