(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{1150:function(e,n,i){"use strict";var t=i(9499),o=i(2640),r=i(7379),s=i(4786),a=i(5893);function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var l=r.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:center;"]),p=r.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 8px 5px 8px;padding:5px 10px;border-radius:5px;border:2px solid ",";font-weight:bold;font-size:1.2em;text-align:center;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;border:2px solid #172bef;color:#172bef;}"],(function(e){return e.primary?"#172bef":null}),(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":"#999"}));n.Z=function(){var e=(0,s.L)(),n=(0,o.Z)(e,2),i=n[0],t=n[1],r=function(e){t(d(d({},i),{},{group:e}))};return(0,a.jsxs)(l,{children:[(0,a.jsx)(p,{onClick:function(){return r("dos")},primary:"dos"===i.group,children:"Horario 2 - 4 pm"}),(0,a.jsx)(p,{onClick:function(){return r("cuatro")},primary:"cuatro"===i.group,children:"Horario 4 - 6 pm"})]})}},1026:function(e,n,i){"use strict";var t=i(7379),o=i(1163),r=i(1664),s=i(2279),a=i(6673),c=i(5893),d=t.ZP.div.withConfig({displayName:"zoneHeader__Container",componentId:"sc-1oy950j-0"})(["display:flex;align-items:flex-end;justify-content:flex-start;margin:40px 0em;"]),l=t.ZP.div.withConfig({displayName:"zoneHeader__Cont",componentId:"sc-1oy950j-1"})(["padding:10px 20px;"]),p=t.ZP.h1.withConfig({displayName:"zoneHeader__Title",componentId:"sc-1oy950j-2"})(["font-size:30px;letter-spacing:-0.03em;margin:0;"]),m=t.ZP.h4.withConfig({displayName:"zoneHeader__Desc",componentId:"sc-1oy950j-3"})(["font-weight:normal;font-size:14px;margin:0;"]),u=t.ZP.img.withConfig({displayName:"zoneHeader__Img",componentId:"sc-1oy950j-4"})(["margin:30px 0 0 0;max-width:100px;max-height:90px;"]),f=t.ZP.img.withConfig({displayName:"zoneHeader__Back",componentId:"sc-1oy950j-5"})(["height:1.4em;transition:0.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]);n.Z=function(e){var n=e.zone,i=((0,o.useRouter)(),(0,a.Ug)()[n]),t=i.name,g=i.desc,x=i.img;return(0,c.jsxs)(d,{children:[(0,c.jsx)(r.default,{href:"/zones",passHref:!0,children:(0,c.jsx)(f,{src:"".concat(s.O,"/imgs/items/back.png")})}),(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{src:"".concat(s.O).concat(x)}),(0,c.jsx)(p,{children:t}),(0,c.jsx)(m,{children:g})]})]})}},9271:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return T}});var t=i(2640),o=i(2279),r=i(4786),s=i(7294),a=i(1664),c=i(7379),d=i(8180),l=i(1026),p=i(1150),m=i(5893),u=c.ZP.div.withConfig({displayName:"webinarCarousel__Container",componentId:"sc-1seogi6-0"})(["display:flex;min-height:auto;flex-direction:column;justify-content:flex-start;"]),f=c.ZP.div.withConfig({displayName:"webinarCarousel__Selector",componentId:"sc-1seogi6-1"})(["display:flex;justify-content:center;align-items:center;padding:16px;"]),g=c.ZP.div.withConfig({displayName:"webinarCarousel__Dot",componentId:"sc-1seogi6-2"})(["cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:",";border-radius:50%;display:inline-block;transition:0.6s ease;:hover{transform:scale(1.2) translatey(-3px);}"],(function(e){return e.active?"blue":"#bbb"})),x=c.ZP.div.withConfig({displayName:"webinarCarousel__Button",componentId:"sc-1seogi6-3"})(["cursor:pointer;width:auto;margin:0 20px;color:blue;font-weight:bold;font-size:18px;transition:0.6s ease;:hover{transform:scale(1.2);}"]),h=c.ZP.div.withConfig({displayName:"webinarCarousel__Cards",componentId:"sc-1seogi6-4"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));grid-gap:15px;justify-content:center;align-items:center;margin-bottom:1em;"]),w=c.ZP.div.withConfig({displayName:"webinarCarousel__Card",componentId:"sc-1seogi6-5"})(["display:flex;justify-content:center;align-items:center;min-height:200px;width:min(380px,90%);background-color:#1920EF;transition:.3s ease;box-shadow:-3px 0px 20px rgba(0,0,0,0.15);:hover{transform:scale(1.01);box-shadow:-3px 0px 10px rgba(0,0,0,0.3);}"]),b=c.ZP.img.withConfig({displayName:"webinarCarousel__WebImg",componentId:"sc-1seogi6-6"})(["width:100%;"]),j=c.ZP.div.withConfig({displayName:"webinarCarousel__Text",componentId:"sc-1seogi6-7"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-size:1.8em;font-weight:bold;margin:0;"]),y=c.ZP.h4.withConfig({displayName:"webinarCarousel__Date",componentId:"sc-1seogi6-8"})(["font-size:.75em;font-weight:normal;margin:0;"]),_=c.ZP.p.withConfig({displayName:"webinarCarousel__Title",componentId:"sc-1seogi6-9"})(["text-align:center;font-weight:bold;font-size:14px;width:90%;margin:10px 0 0 0;"]),C=c.ZP.p.withConfig({displayName:"webinarCarousel__Expo",componentId:"sc-1seogi6-10"})(["text-align:center;font-weight:bold;font-size:12px;color:blue;width:90%;margin:0;"]),v=c.ZP.div.withConfig({displayName:"webinarCarousel__CardCont",componentId:"sc-1seogi6-11"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]),P=c.ZP.a.withConfig({displayName:"webinarCarousel__A",componentId:"sc-1seogi6-12"})(["display:flex;justify-content:center;align-items:center;"]),Z=function(e){var n=e.item,i=e.grp,t=(e.active,i||"dos");return(0,m.jsx)(h,{children:n.map((function(e,n){return(0,m.jsxs)(v,{children:[(0,m.jsx)(P,{href:e.link[t],children:(0,m.jsx)(w,{prox:"prox"===e.state,children:"prox"===e.state?(0,m.jsxs)(j,{children:[(0,m.jsx)("div",{children:"PROXIMAMENTE"}),(0,m.jsx)(y,{children:e.date})]}):(0,m.jsx)(b,{src:"".concat(o.O,"/imgs/webinars/").concat(e.n,".jpg")})})}),(0,m.jsx)(_,{children:e.name}),(0,m.jsx)(C,{children:e.expo})]},"crd".concat(n))}))})},N=function(e){var n=e.data,i=e.group,t=(0,s.useState)(0),o=t[0],r=t[1],a=function(e){var i=o-e;return i<0?r(n.length-1):i===n.length?r(0):void r(i)};return(0,m.jsxs)(u,{children:[(0,m.jsxs)(f,{children:[(0,m.jsx)(x,{onClick:function(){return a(-1)},children:"\u276e"}),n.map((function(e,n){return(0,m.jsx)(g,{onClick:function(){return r(n)},active:o===n},"sld".concat(n))})),(0,m.jsx)(x,{onClick:function(){return a(1)},children:"\u276f"})]}),n.map((function(e,n){return o===n?(0,m.jsx)(Z,{item:e,grp:i,active:o===n},"sld".concat(n)):null}))]})},I=i(6673),O=c.ZP.div.withConfig({displayName:"webinar__Header",componentId:"sc-p17ejt-0"})(["display:flex;margin:2em auto 0 auto;padding:0;justify-content:space-between;align-items:center;color:#172BEF;width:90%;border-bottom:solid 3px #DFE2E4;"]),z=c.ZP.div.withConfig({displayName:"webinar__Text",componentId:"sc-p17ejt-1"})(["display:flex;flex-direction:column;justify-content:flex-end;"]),E=c.ZP.h3.withConfig({displayName:"webinar__Title",componentId:"sc-p17ejt-2"})(["font-weight:bold;font-size:20px;margin:0;"]),k=c.ZP.p.withConfig({displayName:"webinar__Desc",componentId:"sc-p17ejt-3"})(["color:black;font-weight:normal;font-size:15px;margin:0px;margin-bottom:2px;"]),F=c.ZP.div.withConfig({displayName:"webinar__Inscrip",componentId:"sc-p17ejt-4"})(["display:flex;box-sizing:border-box;border:1.5px solid #172BEF;border-radius:5px;min-height:30px;justify-content:center;align-items:center;background-color:#F4F7FD;color:#172BEF;font-weight:bold;font-size:14px;padding:0px 10px;transition:.3s ease;:hover{transform:scale(1.03);background-color:#172BEF;color:white;cursor:pointer;}"]),H=c.ZP.span.withConfig({displayName:"webinar__R",componentId:"sc-p17ejt-5"})(["color:#172BEF;font-weight:bold;"]),D=c.ZP.img.withConfig({displayName:"webinar__Img",componentId:"sc-p17ejt-6"})(["max-width:400px;margin:20px 10px;transition:.3s ease;:hover{transform:scale(1.03) rotate(-.5deg);cursor:pointer;}"]),B=c.ZP.div.withConfig({displayName:"webinar__Margin",componentId:"sc-p17ejt-7"})(["margin:0 20px;"]),T=function(){var e=(0,r.L)(),n=(0,t.Z)(e,2),i=n[0],s=(n[1],i.group?i.group:"dos"),c=(0,I.n2)(),u=c.titles[0],f=c.titles[1];return(0,m.jsxs)(d.Z,{pg:"Zonas Comunes",children:[(0,m.jsx)(l.Z,{zone:1}),(0,m.jsxs)(B,{children:[(0,m.jsx)("p",{children:"Encuentra informacion sobre Webinars a los que podras asistir o revisa los que ya sucedieron."}),(0,m.jsx)(p.Z,{}),(0,m.jsxs)(O,{children:[(0,m.jsxs)(z,{children:[(0,m.jsx)(E,{children:u[0]}),(0,m.jsxs)(k,{children:[u[1],(0,m.jsx)(H,{children:u[2]})]})]}),(0,m.jsx)(F,{children:"Inscribite Aqu\xed"})]}),(0,m.jsx)(N,{data:c["2021s2"],grp:s}),(0,m.jsx)(O,{children:(0,m.jsxs)(z,{children:[(0,m.jsx)(E,{children:f[0]}),(0,m.jsxs)(k,{children:[f[1],(0,m.jsx)(H,{children:f[2]})]})]})}),(0,m.jsx)(N,{data:c["2021s1"],grp:s}),(0,m.jsx)(O,{children:(0,m.jsxs)(k,{children:["Mira los ",(0,m.jsx)(H,{children:"Webinars"})," de versiones anteriores"]})}),(0,m.jsx)(a.default,{href:"https://www.youtube.com/watch?v=rBoyRR4KGaE&list=PLvLMsmXmVy6LHh1oouUSUtIebNmtJdleH&ab_channel=Facultaddeingenier%C3%ADa-UniversidadNacionaldeColombia",children:(0,m.jsx)(D,{src:"".concat(o.O,"/imgs/webinars/antes.png")})})]})]})}},5405:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zones/webinar",function(){return i(9271)}])},1163:function(e,n,i){e.exports=i(9898)}},function(e){e.O(0,[735,180,774,888,179],(function(){return n=5405,e(e.s=n);var n}));var n=e.O();_N_E=n}]);