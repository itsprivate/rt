(self.webpackChunkexample=self.webpackChunkexample||[]).push([[986],{3048:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(7294),i=(r=o)&&r.__esModule?r:{default:r};function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),e}(i.default.Component);e.default=s},7388:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=i(n(7294)),o=i(n(5697));function i(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return a.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),e}(a.default.Component);e.default=s,s.propTypes={className:o.default.string,style:o.default.object,client:o.default.string.isRequired,slot:o.default.string.isRequired,layout:o.default.string,layoutKey:o.default.string,format:o.default.string,responsive:o.default.string},s.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},3911:function(t,e,n){"use strict";var r=o(n(7388)),a=o(n(3048));function o(t){return t&&t.__esModule?t:{default:t}}var i={Google:r.default,Baidu:a.default};e.Z=i},6233:function(t,e,n){"use strict";var r=n(977),a=n(9935),o=n(3911);e.Z=function(){return(0,r.tZ)(a.xu,{"data-test":"ad-container"},(0,r.tZ)(o.Z.Google,{client:"ca-pub-5211209136530011",slot:"9469977903",style:{display:"block"},format:"auto",responsive:"true"}))}},5982:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});var r=n(977),a=n(2877),o=n(6212),i=n(5444),l=n(6465),u=n(9719),s=n(1804),c=n.n(s),f=n(2534),p=n(4070),d=n(8730);function Z(){return(0,r.tZ)(a.Ge.h4,null,(0,r.tZ)(d.c,null,"Tags"))}var h=function(t){var e=t.basePath,n=t.group;return(0,l.tZ)(u.xu,{"data-test":"tags-container"},(0,l.tZ)(Z,null),(0,l.tZ)(u.kC,{sx:{mb:3,flexWrap:"wrap"}},n.map((function(t,n){var r=t.fieldValue,a=t.totalCount;return(0,l.tZ)(f.Z,{key:"tag-list-"+n,count:a,to:(0,i.withPrefix)((0,p.join)(e,"/tags/"+c()(r)))},r)}))))},g=n(2122),b=n(8498);function x(){return(0,r.tZ)(a.Ge.h4,null,(0,r.tZ)(d.c,null,"Links"))}var v=function(t){var e=t.links;return(0,l.tZ)(u.xu,{"data-test":"links-container"},(0,l.tZ)(x,null),(0,l.tZ)(b.Ge.ul,null,e?e.map((function(t,e){var n={};return t.external&&(n.target="_blank",n.rel="noopener noreferrer"),(0,l.tZ)("li",{key:"links-"+e},(0,l.tZ)(u.rU,(0,g.Z)({},n,{href:t.url}),t.name))})):null))},m=n(9935),y=n(9756),w=(n(7294),n(5302)),k=n(6473),_=n(3431),P=["href","language"],M=function(t){var e=t.href,n=t.language,r=(0,y.Z)(t,P),a=(0,w.ql)(),o=a.defaultLang,i=a.locale,l=n||i;return(0,_.tZ)(m.rU,(0,g.Z)({},r,{href:(0,k.Mg)(o,l,e)}))},U=function(t){var e=t.pageContext,n=(e.locale,e.basePath,(0,i.useStaticQuery)("3025052997").site.siteMetadata.subscriptions);return(0,r.tZ)(m.xu,{"data-test":"subscription-container"},(0,r.tZ)(a.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(d.c,null,"Subscription")),(0,r.tZ)(a.Ge.p,{sx:{color:"textMuted",fontSize:1}},(0,r.tZ)(d.c,null,"Subscribe to us in the following ways:")),(0,r.tZ)(a.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(m.rU,{target:"_blank",rel:"noopener noreferrer",href:"https://t.me/joinchat/GVK5UiDwPUAwMjkx"},"Telegram Group")),n?n.map((function(t,e){var n={};return t.external?(n.target="_blank",n.rel="noopener noreferrer",(0,r.tZ)("li",{key:"links-"+e},(0,r.tZ)(m.rU,(0,g.Z)({},n,{href:t.url}),t.name))):(0,r.tZ)("li",{key:"links-"+e},(0,r.tZ)(m.rU,(0,g.Z)({as:M},n,{href:t.url}),t.name))})):null))},C=function(){return(0,r.tZ)(m.xu,{"data-test":"subscription-container"},(0,r.tZ)(a.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(d.c,null,"Who is behind this?")),(0,r.tZ)(a.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(m.rU,{href:"https://twitter.com/theowenyoung"},"Owen Young"))))},G=n(6233),O=function(){return(0,r.tZ)(m.xu,{"data-test":"subscription-container"},(0,r.tZ)(a.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(d.c,null,"Archive")),(0,r.tZ)(a.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(m.rU,{href:"/archive/"},"Archive"))))},j=function(t){var e=t.data,n=t.pageContext,i=t.siteMetadata,l=n.basePath,u=e.tagsGroup.group,s=i.social;return(0,r.tZ)(a.Ge.div,{"data-test":"aside",as:"aside",sx:{height:[null,null,"full"]}},(0,r.tZ)(a.Ge.div,{sx:{top:[null,null,4],position:[null,null,"sticky"],overflowY:[null,null,"auto"],height:[null,null,"calc(100vh - 32px)"],overscrollBehavior:[null,null,"contain"],px:[null,null,4]}},(0,r.tZ)(o.Z,{siteMetadata:i,basePath:l}),(0,r.tZ)(U,{pageContext:n}),(0,r.tZ)(G.Z,null),(0,r.tZ)(O,{pageContext:n}),(0,r.tZ)(v,{siteMetadata:i,links:s}),(0,r.tZ)(C,{pageContext:n}),(0,r.tZ)(h,{basePath:l,group:u})))}},4128:function(t,e,n){"use strict";n(7294);var r=n(7825),a=n(9935),o=n(3431);e.Z=function(){return(0,o.tZ)("footer",{css:(0,r.iv)({mt:4,pt:3,textAlign:"center"})},"© ",(new Date).getFullYear(),(0,o.tZ)(a.rU,{sx:{ml:4,mr:2},"data-test":"main-site-link",href:"https://www.buzzing.cc"},"Buzzing.cc"),(0,o.tZ)(a.rU,{sx:{mx:2,color:"textMuted"},"data-test":"privacy-link",href:"https://www.buzzing.cc/privacy"},"Privacy"),(0,o.tZ)(a.rU,{sx:{mx:2,color:"textMuted"},"data-test":"terms-link",href:"https://www.buzzing.cc/terms"},"Terms of Service")," ")}},5616:function(t,e,n){"use strict";n(7294);var r=n(4036),a=n(7031),o=n(6473),i=n(3431);e.Z=function(t){var e=t.pageContext,n=t.siteMetadata,l=t.image,u=e.pageType,s=e.tag,c=e.currentPage,f=e.date,p=c,d=(0,o.t)("description",n.localize,n.description,e.locale),Z="",h=(0,o.t)("title",n.localize,n.title,e.locale);if("tag"===u){var g=a.Z.t("translation-tag__::::__"+s);d=g,Z=a.Z.t("See all posts about {{tag}} at {{siteTitle}}",{tag:g,siteTitle:h})}else if("issues"===u)d=a.Z.t("Weekly Selection"),Z=a.Z.t("{{siteTitle}} selects the most popular content for you each week",{siteTitle:h});else if("issue"===u){var b=" · "+f;d=a.Z.t("Weekly Selection")+"-"+a.Z.t("Issue {{issueNumber}}","Issue "+p,{issueNumber:p})+b+" - "+h,Z=a.Z.t("Click to view Issue {{issueNumber}} of {{siteTitle}}",{siteTitle:h,issueNumber:p})}return(0,i.tZ)(r.Z,{title:d,description:Z,imageSource:"home"===u?null:l,siteMetadata:n})}},3181:function(t,e,n){"use strict";var r=n(977),a=n(2877),o=n(9935),i=n(5444),l=n(5302),u=n(8730),s=n(4070),c=n.n(s);e.Z=function(t){var e=t.pageContext,n=e.pageType,s=e.tag,f=e.basePath,p=e.currentPage,d=e.date,Z=e.title,h=p;if("tag"===n)return(0,r.tZ)(a.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},(0,r.tZ)(o.rU,{sx:{color:"text"},as:l.UE,to:(0,i.withPrefix)(f)},(0,r.tZ)(u.c,null,"All posts")),(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),(0,r.tZ)("span",{sx:{color:"textMuted"}},(0,r.tZ)(u.c,{ns:"translation-tag"},s)),p>1&&(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),p>1&&(0,r.tZ)("span",{sx:{color:"textMuted"}},(0,r.tZ)(u.c,{page:p},"page ",{page:h})));var g="Latest",b=f;"issues"===n||"issue"===n?(g="Weekly Selection",b=c().join(f,"issues")):"archives"!==n&&"archive"!==n||(g="Archive",b=c().join(f,"archive"));var x=h;return(0,r.tZ)(a.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},p>1?(0,r.tZ)(o.rU,{sx:{color:"text"},as:l.UE,to:(0,i.withPrefix)(b)},(0,r.tZ)(u.c,null,g)):(0,r.tZ)(u.c,null,g),(p>1||"issue"===n||"archive"===n)&&(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),(p>1||"issue"===n||"archive"===n)&&(0,r.tZ)("span",{sx:{color:"textMuted"}},"issue"===n?(0,r.tZ)(u.c,{page:p},"Issue ",{issueNumber:x}):"archive"===n?(0,r.tZ)("span",null,Z):(0,r.tZ)(u.c,{page:p},"page ",{page:h})),"issue"===n?(0,r.tZ)("span",{sx:{color:"textMuted"}}," · "+d):null)}},2534:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(977),a=n(9935),o=n(5302),i=n(8730);function l(t){var e=t.children,n=t.to,l=t.count;return(0,r.tZ)(a.rU,{sx:{bg:"gray.1",mr:3,mb:2,color:"textMuted",px:2,py:1,":hover":{bg:"gray.2"}},as:o.UE,to:n},(0,r.tZ)(i.c,{ns:"translation-tag"},e),l&&"("+l+")")}},6212:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var r=n(5444),a=n(6465),o=n(9719),i=n(8498),l=n(7294),u=n(8730),s=n(9935),c=n(7825),f=n(5302),p=n(3431);function d(){return(0,p.tZ)(l.Fragment,null,(0,p.tZ)(u.c,null,"See what's buzzing on"," ",(0,p.tZ)(s.rU,{href:"https://reddit.com",target:"_blank",rel:"noopener noreferrer",sx:(0,c.iv)({lineHeight:2})},"Reddit")," ","in your native language on"," ",(0,p.tZ)(s.rU,{as:f.UE,to:"/"},"reddit.buzzing.cc")))}var Z=function(t){var e=t.basePath,n=t.siteMetadata;return e=e||"/",(0,a.tZ)(o.kC,{"data-test":"bio",sx:{mb:4,alignItems:"center"}},(0,a.tZ)(o.rU,{sx:{minWidth:"56px",pr:2,pt:1},as:r.Link,to:(0,r.withPrefix)(e)},n.iconUrl?(0,a.tZ)(o.Ee,{src:n.iconUrl,alt:"logo",sx:{mb:0,borderRadius:"full",width:"48px",height:"48px"}}):(0,a.tZ)("div",{sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},role:"presentation"})),(0,a.tZ)(i.Ge.div,null,(0,a.tZ)(d,null)))}},7391:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var r=n(9756),a=(n(7294),n(8498)),o=n(9719),i=n(9668),l=n(6465),u=n(5444),s=n(5302),c=n(977),f=n(2877),p=n(9935),d=n(6473),Z=function(t){t.children;var e=t.basePath,n=t.pageContext.locale,r=t.siteMetadata;return(0,c.tZ)(f.Ge.h3,{sx:{mb:2,mt:2,mr:[3,4]}},(0,c.tZ)(p.rU,{sx:{color:"text"},as:s.UE,to:(0,u.withPrefix)(e)},(0,d.t)("title",r.localize,r.title,n)))},h=n(2122),g=function(t){var e=t.pageContext.locale,n=t.siteMetadata,r=(0,d.t)("menuLinks",n.localize,n.menuLinks,e);return r?(0,c.tZ)(p.kC,{as:"nav"},r.map((function(t){var e={},n=!1,r=t.url;return t.external&&(e.target="_blank",e.rel="noopener noreferrer",n=!0),!1!==t.prefetch||t.external||(n=!0),(0,c.tZ)(p.OL,(0,h.Z)({as:n?p.OL:s.UE,to:n?void 0:r,href:n?r:void 0,key:r},e),t.name)}))):null},b=n(4070),x=function(t){var e=t.pageContext,n=(0,s.ql)(),r=n.locale,a=n.config,o=n.defaultLang;return(0,c.tZ)(p.kC,null,(0,c.tZ)(p.Ph,{sx:{minWidth:"6.5rem"},value:r,onChange:function(t){var n=t.target.value,r=(0,u.withPrefix)((0,b.join)((n===o?"":"/"+n)+e.originalPath));(0,u.navigate)(r)}},a.map((function(t){return(0,c.tZ)("option",{key:t.code,value:t.code},t.localName)}))))},v=function(t){var e=t.title,n=t.pageType;return(0,l.tZ)("header",{sx:{px:[3,4],mb:4,maxWidth:"6xl",mx:"auto"}},(0,l.tZ)(a.Ge.div,{sx:{pt:3,pb:"detail"===n?2:3,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"muted"}},(0,l.tZ)(a.Ge.div,{sx:{display:"flex",alignItems:"baseline",flexWrap:"wrap",justifyContent:"space-between"}},(0,l.tZ)(o.kC,{sx:{alignItems:"baseline",flexWrap:"wrap",flexGrow:1}},(0,l.tZ)(Z,t,e),(0,l.tZ)(g,t)),(0,l.tZ)(x,t))))},m=n(5414),y=n(3431),w=["children"],k=function(t){var e=t.children,n=(0,r.Z)(t,w),l=n.siteMetadata.webfontURL;return(0,y.tZ)(a.Ge.root,null,(0,y.tZ)(m.Z,null,(0,y.tZ)("link",{rel:"stylesheet",href:l})),(0,y.tZ)(v,n),(0,y.tZ)(o.xu,{css:(0,i.iv)({maxWidth:["full","6xl"],mx:"auto",px:[3,4],pb:4})},e))}}}]);
//# sourceMappingURL=c69ff4a4d8ce558241cbe6074b42ac62a3228bfd-b5c4fdd3a21af72c7e9f.js.map