(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8lYe":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("2A+t"),a=n("izhR"),i=n("YFqc"),s=n.n(i),u=n("VSqI"),l=(o.a.createElement,[{url:"/",name:"Home"},{url:"/docs/introduction",name:"Docs"},{url:"/faq",name:"FAQs"},{url:"/stats",name:"Stats"}]);t.a=function(){return Object(c.c)(a.k,{as:"footer"},Object(c.c)(a.p,{sx:{alignItems:"center",mb:[2,4]}},Object(c.c)(s.a,{href:"/",passHref:!0},Object(c.c)(a.w,{sx:{color:"onSurface"}},Object(c.c)(u.Icon,{name:"logo_only",size:"auto",width:"40",height:"40",sx:{display:["block","none"]}}),Object(c.c)(u.Icon,{name:"logo",size:"auto",width:"152",height:"40",sx:{display:["none","block"]}}))),Object(c.c)(a.p,{sx:{ml:["auto"],mr:[null,0]}},l.map((function(e){var t=e.url,n=e.name;return Object(c.c)(s.a,{href:t,passHref:!0,key:t},Object(c.c)(a.z,{sx:{"&:last-child":{pr:0}}},n))})))))}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},IAK9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return n("xE3+")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},b0oO:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("2A+t"),a=n("izhR"),i=n("YFqc"),s=n.n(i),u=n("VSqI"),l=(o.a.createElement,[{url:"/",name:"Home"},{url:"/docs/introduction",name:"Docs"},{url:"/faq",name:"FAQs"},{url:"/stats",name:"Stats"}]);t.a=function(){return Object(c.c)(a.k,{as:"nav",mt:3},Object(c.c)(a.p,{sx:{alignItems:"center",mb:[2,4]}},Object(c.c)(s.a,{href:"/",passHref:!0},Object(c.c)(a.w,{sx:{color:"onSurface"}},Object(c.c)(u.Icon,{name:"logo_only",size:"auto",width:"40",height:"40",sx:{display:["block","none"]}}),Object(c.c)(u.Icon,{name:"logo",size:"auto",width:"152",height:"40",sx:{display:["none","block"]}}))),Object(c.c)(a.p,{as:"nav",sx:{ml:["auto"],mr:[null,0]}},l.map((function(e){var t=e.url,n=e.name;return Object(c.c)(s.a,{href:t,passHref:!0,key:t},Object(c.c)(a.z,{sx:{"&:last-child":{pr:0}}},n))})))))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),c=n("7W2i"),a=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=u(n("nOHt")),v=n("elyg");function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,O=window.IntersectionObserver,j={};function g(){return f||(O?f=new O((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){c(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,c){if(r&&o===t&&c===n)return r;var a=e(o,c);return t=o,n=c,r=a,a}}((function(e,t){return{href:(0,v.addBasePath)(b(e)),as:t?(0,v.addBasePath)(b(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var c=o.formatUrls(o.props.href,o.props.as),a=c.href,i=c.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),i=i?(0,h.resolve)(s,i):a,e.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](a,i,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&O&&e&&e.tagName&&(this.cleanUpListeners(),j[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),j[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var c=p.Children.only(t),a={ref:function(t){e.handleRef(t),c&&"object"===typeof c&&c.ref&&("function"===typeof c.ref?c.ref(t):"object"===typeof c.ref&&(c.ref.current=t))},onMouseEnter:function(t){c.props&&"function"===typeof c.props.onMouseEnter&&c.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==c.type||"href"in c.props)||(a.href=o||r),p.default.cloneElement(c,a)}}]),n}(p.Component);t.default=w},"xE3+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m})),n.d(t,"tableOfContents",(function(){return v}));var r=n("wx14"),o=n("Ff2n"),c=n("q1tI"),a=n.n(c),i=n("7ljp"),s=n("2A+t"),u=n("izhR"),l=n("b0oO"),f=n("8lYe"),p=(a.a.createElement,function(e){var t=e.children;return Object(s.c)(u.k,{mt:3},Object(s.c)(l.a,null),Object(s.c)(u.k,{sx:{maxWidth:"960px"}},Object(s.c)(u.h,{sx:{py:0,px:4}},t)),Object(s.c)(f.a,null))}),h=(a.a.createElement,{}),d="wrapper";function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"Layout"},Object(i.b)("h1",{id:"terms-of-service"},"Terms of Service"),Object(i.b)("p",null,"abide.")))}m.isMDXComponent=!0;var v=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"terms-of-service",level:1,title:"Terms of Service",children:[]}]}}},[["IAK9",0,2,1,3]]]);