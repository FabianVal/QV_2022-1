(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{9454:function(n,e,i){"use strict";var r=i(7379),t=i(5893),a=r.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(n){return n.primary?"#1920EF":"#FFC024"})),o=r.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(n){return n.primary?"#FFF":"#000"})),s=r.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(n){return n.primary?"bold":null}),(function(n){return n.primary?"1.4em":"1em"}),(function(n){return n.primary?"#FFC024":"#000"})),d=r.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);e.Z=function(n){var e=n.title,i=n.desc,r=n.imgH,c=n.primary;return(0,t.jsxs)(a,{primary:c,children:[(0,t.jsx)(o,{primary:c,children:e}),(0,t.jsx)(s,{primary:c,children:i}),(0,t.jsx)(d,{src:r,primary:c})]})}},8111:function(n,e,i){"use strict";var r=i(7379),t=i(1664),a=i(2279),o=i(5893),s=r.ZP.div.withConfig({displayName:"zcCard__ZElement",componentId:"sc-53i04y-0"})(["display:flex;flex-direction:column;grid-column:",";grid-row:",";align-items:",";justify-content:",";text-align:",";background:#FFFFFF;padding:10px 10px 5px 20px;border-radius:20px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:20px;transition:0.3s;:hover{cursor:pointer;transform:scale(1.02);box-shadow:0px 4px 8px rgba(0,0,0,0.4);}:active{background-color:#ddd;}@media screen and (max-width:1350px){grid-column:span 1;grid-row:span 1;align-items:flex-start;justify-content:flex-end;text-align:left;}"],(function(n){return"twohor"===n.type?"span 2":null}),(function(n){return"twover"===n.type?"span 2":null}),(function(n){return"twover"===n.type?"center":"flex-start"}),(function(n){return"twover"===n.type?"center":"flex-end"}),(function(n){return"twover"===n.type?"center":null})),d=r.ZP.img.withConfig({displayName:"zcCard__Img",componentId:"sc-53i04y-1"})(["height:",";margin:0px 0px 10px 10px;"],(function(n){return"ASESORES"===n.name?"35%":"45%"})),c=r.ZP.div.withConfig({displayName:"zcCard__Text",componentId:"sc-53i04y-2"})(["display:flex;flex-direction:column;font-weight:bold;"]),p=r.ZP.span.withConfig({displayName:"zcCard__Title",componentId:"sc-53i04y-3"})(["font-size:1.5rem;color:#172BEF;"]),m=r.ZP.span.withConfig({displayName:"zcCard__Desc",componentId:"sc-53i04y-4"})(["font-size:0.8rem;"]);e.Z=function(n){var e=n.item;return"_blank"===e.target?(0,o.jsx)("a",{href:e.link,target:e.target,children:(0,o.jsxs)(s,{type:e.type,children:[(0,o.jsx)(d,{src:"".concat(a.O).concat(e.img),name:e.name}),(0,o.jsxs)(c,{children:[(0,o.jsx)(p,{children:e.name}),(0,o.jsx)(m,{children:e.desc})]})]})}):(0,o.jsx)(t.default,{href:e.link,passHref:!0,children:(0,o.jsxs)(s,{type:e.type,children:[(0,o.jsx)(d,{src:"".concat(a.O).concat(e.img),name:e.name}),(0,o.jsxs)(c,{children:[(0,o.jsx)(p,{children:e.name}),(0,o.jsx)(m,{children:e.desc})]})]})})}},6054:function(n,e,i){"use strict";i.r(e);var r=i(2279),t=i(7379),a=i(8180),o=i(9454),s=i(8111),d=i(6673),c=i(5893),p="".concat(r.O,"/imgs/header/zones.png"),m=t.ZP.div.withConfig({displayName:"zones__Grid",componentId:"sc-cjuoyj-0"})(["display:grid;grid-auto-flow:dense;grid-auto-rows:150px;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));grid-gap:1rem;margin-top:20px;"]);e.default=function(){var n=(0,d.Ug)();return(0,c.jsxs)(a.Z,{pg:"Zonas Comunes",children:[(0,c.jsx)(o.Z,{title:"Zonas Comunes",desc:"\xa1Espacios para todos!",imgH:p}),(0,c.jsx)(m,{children:n.map((function(n){return(0,c.jsx)(s.Z,{item:n},n.name)}))})]})}},6515:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zones",function(){return i(6054)}])}},function(n){n.O(0,[735,180,774,888,179],(function(){return e=6515,n(n.s=e);var e}));var e=n.O();_N_E=e}]);