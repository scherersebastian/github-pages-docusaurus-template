"use strict";(self.webpackChunkgithub_pages_docusaurus_template=self.webpackChunkgithub_pages_docusaurus_template||[]).push([[3085],{87529:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var t=n(67294),l=n(86010),i=n(32600),c=n(47459),s=n(51575),m=n(77556),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,u=n.description,d=n.frontMatter,v=d.wrapperClassName,f=d.hide_table_of_contents;return t.createElement(m.FG,{className:(0,l.Z)(null!=v?v:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},t.createElement(m.d,{title:o,description:u}),t.createElement(i.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",r)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(c.Z,null,t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},51575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(87462),l=n(63366),i=n(67294),c=n(86010),s=n(25002),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(87462),l=n(63366),i=n(67294),c=n(77556),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,u=void 0===o?"table-of-contents__link":o,d=e.linkActiveClassName,v=void 0===d?void 0:d,f=e.minHeadingLevel,g=e.maxHeadingLevel,N=(0,l.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=g?g:_.tableOfContents.maxHeadingLevel,h=(0,c.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),p=(0,i.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:C}}),[u,v,k,C]);return(0,c.Si)(p),i.createElement(m,(0,t.Z)({toc:h,className:r,linkClassName:u},N))}}}]);