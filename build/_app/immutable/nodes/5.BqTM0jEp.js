import{s as M,e as I,c as T,a as j,d as g,m as b,i as z,n as G,U as x,t as le,j as U,b as ne,l as F,a1 as P,f as W,g as Ge,p as ie,h as J,r as qe,x as Xe,N as Q,W as re,M as oe,R as ae,S as fe,T as ce,D as Ve,u as N,$ as me,B as ge,y as Ye,a2 as Je,a3 as Qe,a4 as Ze,v as se,_ as xe,a5 as $e,a6 as et,X as tt,Y as lt,a7 as nt}from"../chunks/scheduler.XHF0m71J.js";import{S as O,i as B,c as C,a as H,m as q,t as p,b as k,d as V,g as ue,e as he,f as it}from"../chunks/index.-mklun6F.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{r as rt,w as Z}from"../chunks/index.7PtJxCfh.js";import{d as st,I as Pe,g as Ke,a as Me}from"../chunks/Icon.CnnTxU5w.js";function ze(n,e,l){const t=n.slice();t[3]=e[l].title,t[4]=e[l].slides,t[7]=l;const i=t[2][t[0]].section===t[7];return t[5]=i,t}function Ee(n,e,l){const t=n.slice();t[8]=e[l];const i=t[8].i===t[0];return t[9]=i,t}function ot(n){let e;return{c(){e=I("div"),this.h()},l(l){e=T(l,"DIV",{class:!0}),j(e).forEach(g),this.h()},h(){b(e,"class","block svelte-s3rw5i")},m(l,t){z(l,e,t)},p:G,d(l){l&&g(e)}}}function at(n){let e,l=K(n[4]),t=[];for(let i=0;i<l.length;i+=1)t[i]=Ie(Ee(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=ie()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=ie()},m(i,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,s);z(i,e,s)},p(i,s){if(s&3){l=K(i[4]);let r;for(r=0;r<l.length;r+=1){const f=Ee(i,l,r);t[r]?t[r].p(f,s):(t[r]=Ie(f),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&g(e),x(t,i)}}}function Ie(n){let e;return{c(){e=I("div"),this.h()},l(l){e=T(l,"DIV",{class:!0}),j(e).forEach(g),this.h()},h(){b(e,"class","block svelte-s3rw5i"),P(e,"active",n[9])},m(l,t){z(l,e,t)},p(l,t){t&3&&P(e,"active",l[9])},d(l){l&&g(e)}}}function Te(n){let e,l,t=n[7]+1+"",i,s,r,f=n[3]+"",a,c,o;function h(d,v){return d[5]?at:ot}let _=h(n),u=_(n);return{c(){e=I("div"),l=I("span"),i=le(t),s=I("span"),r=le("— "),a=le(f),c=U(),u.c(),o=U(),this.h()},l(d){e=T(d,"DIV",{class:!0});var v=j(e);l=T(v,"SPAN",{class:!0});var S=j(l);i=ne(S,t),s=T(S,"SPAN",{class:!0});var E=j(s);r=ne(E,"— "),a=ne(E,f),E.forEach(g),S.forEach(g),c=F(v),u.l(v),o=F(v),v.forEach(g),this.h()},h(){b(s,"class","title svelte-s3rw5i"),b(l,"class","text svelte-s3rw5i"),b(e,"class","chapter svelte-s3rw5i"),P(e,"active",n[5])},m(d,v){z(d,e,v),W(e,l),W(l,i),W(l,s),W(s,r),W(s,a),W(e,c),u.m(e,null),W(e,o)},p(d,v){v&2&&f!==(f=d[3]+"")&&Ge(a,f),_===(_=h(d))&&u?u.p(d,v):(u.d(1),u=_(d),u&&(u.c(),u.m(e,o))),v&5&&P(e,"active",d[5])},d(d){d&&g(e),u.d()}}}function ft(n){let e,l=K(n[1]),t=[];for(let i=0;i<l.length;i+=1)t[i]=Te(ze(n,l,i));return{c(){e=I("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=T(i,"DIV",{class:!0});var s=j(e);for(let r=0;r<t.length;r+=1)t[r].l(s);s.forEach(g),this.h()},h(){b(e,"class","chapters svelte-s3rw5i")},m(i,s){z(i,e,s);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(i,[s]){if(s&7){l=K(i[1]);let r;for(r=0;r<l.length;r+=1){const f=ze(i,l,r);t[r]?t[r].p(f,s):(t[r]=Te(f),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},i:G,o:G,d(i){i&&g(e),x(t,i)}}}function ct(n,e,l){let{activeSlide:t}=e,{sections:i}=e,{allSlides:s}=e;return n.$$set=r=>{"activeSlide"in r&&l(0,t=r.activeSlide),"sections"in r&&l(1,i=r.sections),"allSlides"in r&&l(2,s=r.allSlides)},[t,i,s]}class ut extends O{constructor(e){super(),B(this,e,ct,ft,M,{activeSlide:0,sections:1,allSlides:2})}}const ht=()=>{var n;return((n=window==null?void 0:window.visualViewport)==null?void 0:n.width)||document.documentElement.clientWidth},dt=()=>{var n;return((n=window==null?void 0:window.visualViewport)==null?void 0:n.height)||document.documentElement.clientHeight},_t=rt({width:0,height:0},n=>{const e=()=>n({width:ht(),height:dt()});return e(),window.addEventListener("resize",st(e,250)),()=>{window.removeEventListener("resize",e)}});function mt(n){let e,l,t;return{c(){e=I("figure"),l=le("visual goes here"),this.h()},l(i){e=T(i,"FIGURE",{style:!0,class:!0});var s=j(e);l=ne(s,"visual goes here"),s.forEach(g),this.h()},h(){b(e,"style",t=`--offset: ${n[0]}px; --buffer: 2rem`),b(e,"class","svelte-4vfsg0")},m(i,s){z(i,e,s),W(e,l)},p(i,[s]){s&1&&t!==(t=`--offset: ${i[0]}px; --buffer: 2rem`)&&b(e,"style",t)},i:G,o:G,d(i){i&&g(e)}}}function gt(n,e,l){let t,i,s;J(n,_t,o=>l(3,s=o));let{activeSlide:r}=e,f,a=!1;const c=async()=>{if(a){await Xe();const o=document.getElementById(`slide-${r}`);l(0,f=o.clientHeight+i)}};return qe(()=>{a=!0,c()}),n.$$set=o=>{"activeSlide"in o&&l(1,r=o.activeSlide)},n.$$.update=()=>{n.$$.dirty&8&&l(2,t=s.width<600),n.$$.dirty&4&&(i=t?10:100),n.$$.dirty&10&&(s.width,c())},[f,r,t,s]}class bt extends O{constructor(e){super(),B(this,e,gt,mt,M,{activeSlide:1})}}function wt(n){let e;const l=n[2].default,t=oe(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&8)&&ae(t,l,i,i[3],e?ce(l,i[3],s,null):fe(i[3]),null)},i(i){e||(p(t,i),e=!0)},o(i){k(t,i),e=!1},d(i){t&&t.d(i)}}}function pt(n){let e,l;const t=[{name:"chevron-left"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[wt]},$$scope:{ctx:n}};for(let s=0;s<t.length;s+=1)i=Q(i,t[s]);return e=new Pe({props:i}),{c(){C(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,[r]){const f=r&3?Ke(t,[t[0],r&2&&Me(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(f.$$scope={dirty:r,ctx:s}),e.$set(f)},i(s){l||(p(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){V(e,s)}}}function vt(n,e,l){let{$$slots:t={},$$scope:i}=e;const s=[["path",{d:"m15 18-6-6 6-6"}]];return n.$$set=r=>{l(1,e=Q(Q({},e),re(r))),"$$scope"in r&&l(3,i=r.$$scope)},e=re(e),[s,e,t,i]}class kt extends O{constructor(e){super(),B(this,e,vt,pt,M,{})}}function St(n){let e;const l=n[2].default,t=oe(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,s){t&&t.m(i,s),e=!0},p(i,s){t&&t.p&&(!e||s&8)&&ae(t,l,i,i[3],e?ce(l,i[3],s,null):fe(i[3]),null)},i(i){e||(p(t,i),e=!0)},o(i){k(t,i),e=!1},d(i){t&&t.d(i)}}}function yt(n){let e,l;const t=[{name:"chevron-right"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[St]},$$scope:{ctx:n}};for(let s=0;s<t.length;s+=1)i=Q(i,t[s]);return e=new Pe({props:i}),{c(){C(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,[r]){const f=r&3?Ke(t,[t[0],r&2&&Me(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(f.$$scope={dirty:r,ctx:s}),e.$set(f)},i(s){l||(p(e.$$.fragment,s),l=!0)},o(s){k(e.$$.fragment,s),l=!1},d(s){V(e,s)}}}function zt(n,e,l){let{$$slots:t={},$$scope:i}=e;const s=[["path",{d:"m9 18 6-6-6-6"}]];return n.$$set=r=>{l(1,e=Q(Q({},e),re(r))),"$$scope"in r&&l(3,i=r.$$scope)},e=re(e),[s,e,t,i]}class Et extends O{constructor(e){super(),B(this,e,zt,yt,M,{})}}function je(n,e,l){const t=n.slice();return t[18]=e[l],t}function Ae(n){let e,l,t,i;const s=[Tt,It],r=[];function f(a,c){return a[18]==="left"?0:a[18]==="right"?1:-1}return~(l=f(n))&&(t=r[l]=s[l](n)),{c(){e=I("span"),t&&t.c(),this.h()},l(a){e=T(a,"SPAN",{style:!0,class:!0});var c=j(e);t&&t.l(c),c.forEach(g),this.h()},h(){N(e,"font-size",n[4]),b(e,"class","svelte-jjzds")},m(a,c){z(a,e,c),~l&&r[l].m(e,null),i=!0},p(a,c){let o=l;l=f(a),l===o?~l&&r[l].p(a,c):(t&&(ue(),k(r[o],1,1,()=>{r[o]=null}),he()),~l?(t=r[l],t?t.p(a,c):(t=r[l]=s[l](a),t.c()),p(t,1),t.m(e,null)):t=null),(!i||c&16)&&N(e,"font-size",a[4])},i(a){i||(p(t),i=!0)},o(a){k(t),i=!1},d(a){a&&g(e),~l&&r[l].d()}}}function It(n){let e,l;return e=new Et({props:{color:n[5],strokeWidth:n[6]}}),{c(){C(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const s={};i&32&&(s.color=t[5]),i&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Tt(n){let e,l;return e=new kt({props:{color:n[5],strokeWidth:n[6]}}),{c(){C(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const s={};i&32&&(s.color=t[5]),i&64&&(s.strokeWidth=t[6]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Ne(n){let e,l=n[9].includes(n[18]),t,i,s,r,f,a,c,o=l&&Ae(n);return{c(){e=I("button"),o&&o.c(),t=U(),this.h()},l(h){e=T(h,"BUTTON",{style:!0,"aria-label":!0,class:!0});var _=j(e);o&&o.l(_),t=F(_),_.forEach(g),this.h()},h(){N(e,"width",n[12](n[18])),N(e,"height",n[11](n[18])),b(e,"aria-label",i=n[18]),b(e,"class",s=n[18]+" "+n[7]+" svelte-jjzds"),e.disabled=r=n[2].includes(n[18]),P(e,"full",n[1])},m(h,_){z(h,e,_),o&&o.m(e,null),W(e,t),f=!0,a||(c=me(e,"click",function(){ge(n[13]("tap",n[18]))&&n[13]("tap",n[18]).apply(this,arguments)}),a=!0)},p(h,_){n=h,_&520&&(l=n[9].includes(n[18])),l?o?(o.p(n,_),_&520&&p(o,1)):(o=Ae(n),o.c(),p(o,1),o.m(e,t)):o&&(ue(),k(o,1,1,()=>{o=null}),he()),(!f||_&4104)&&N(e,"width",n[12](n[18])),(!f||_&2056)&&N(e,"height",n[11](n[18])),(!f||_&8&&i!==(i=n[18]))&&b(e,"aria-label",i),(!f||_&136&&s!==(s=n[18]+" "+n[7]+" svelte-jjzds"))&&b(e,"class",s),(!f||_&12&&r!==(r=n[2].includes(n[18])))&&(e.disabled=r),(!f||_&138)&&P(e,"full",n[1])},i(h){f||(p(o),f=!0)},o(h){k(o),f=!1},d(h){h&&g(e),o&&o.d(),a=!1,c()}}}function jt(n){let e,l,t,i;Ve(n[17]);let s=K(n[3]),r=[];for(let a=0;a<s.length;a+=1)r[a]=Ne(je(n,s,a));const f=a=>k(r[a],1,1,()=>{r[a]=null});return{c(){e=I("section");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=T(a,"SECTION",{style:!0,class:!0});var c=j(e);for(let o=0;o<r.length;o+=1)r[o].l(c);c.forEach(g),this.h()},h(){N(e,"height",n[8]+"px"),b(e,"class","svelte-jjzds"),P(e,"debug",n[0])},m(a,c){z(a,e,c);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);l=!0,t||(i=[me(window,"keydown",function(){ge(n[10])&&n[10].apply(this,arguments)}),me(window,"resize",n[17])],t=!0)},p(a,[c]){if(n=a,c&15102){s=K(n[3]);let o;for(o=0;o<s.length;o+=1){const h=je(n,s,o);r[o]?(r[o].p(h,c),p(r[o],1)):(r[o]=Ne(h),r[o].c(),p(r[o],1),r[o].m(e,null))}for(ue(),o=s.length;o<r.length;o+=1)f(o);he()}(!l||c&256)&&N(e,"height",n[8]+"px"),(!l||c&1)&&P(e,"debug",n[0])},i(a){if(!l){for(let c=0;c<s.length;c+=1)p(r[c]);l=!0}},o(a){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)k(r[c]);l=!1},d(a){a&&g(e),x(r,a),t=!1,Ye(i)}}}function At(n,e,l){let t,i,s,r,{debug:f=!1}=e,{enableKeyboard:a=!1}=e,{full:c=!1}=e,{showArrows:o=!1}=e,{disable:h=[]}=e,{directions:_=["left","right"]}=e,{size:u="64px"}=e,{arrowSize:d="48px"}=e,{arrowStroke:v="#000"}=e,{arrowStrokeWidth:S="2"}=e,{arrowPosition:E="center"}=e;const A=Je();let D;function y(){l(8,D=window.innerHeight)}return n.$$set=m=>{"debug"in m&&l(0,f=m.debug),"enableKeyboard"in m&&l(14,a=m.enableKeyboard),"full"in m&&l(1,c=m.full),"showArrows"in m&&l(15,o=m.showArrows),"disable"in m&&l(2,h=m.disable),"directions"in m&&l(3,_=m.directions),"size"in m&&l(16,u=m.size),"arrowSize"in m&&l(4,d=m.arrowSize),"arrowStroke"in m&&l(5,v=m.arrowStroke),"arrowStrokeWidth"in m&&l(6,S=m.arrowStrokeWidth),"arrowPosition"in m&&l(7,E=m.arrowPosition)},n.$$.update=()=>{n.$$.dirty&65546&&l(12,t=m=>Array.isArray(u)?u[_.indexOf(m)]:c?"100%":u),n.$$.dirty&65538&&l(11,i=m=>["up","down"].includes(m)?u:c?"100%":u),n.$$.dirty&16392&&l(10,s=m=>{const $=m.key.replace("Arrow","").toLowerCase(),de=_.includes($);a&&de&&(m.preventDefault(),A("tap",$))}),n.$$.dirty&32776&&l(9,r=_.filter(m=>typeof o=="boolean"?o:o.includes(m)))},[f,c,h,_,d,v,S,E,D,r,s,i,t,A,a,o,u,y]}class Nt extends O{constructor(e){super(),B(this,e,At,jt,M,{debug:0,enableKeyboard:14,full:1,showArrows:15,disable:2,directions:3,size:16,arrowSize:4,arrowStroke:5,arrowStrokeWidth:6,arrowPosition:7})}}function Dt(n){let e,l,t,i,s;const r=n[26].default,f=oe(r,n,n[25],null);return{c(){e=I("section"),l=I("div"),f&&f.c(),this.h()},l(a){e=T(a,"SECTION",{"aria-label":!0,class:!0});var c=j(e);l=T(c,"DIV",{class:!0,style:!0});var o=j(l);f&&f.l(o),o.forEach(g),c.forEach(g),this.h()},h(){b(l,"class","slides svelte-1ceqw5z"),b(l,"style",n[5]),b(e,"aria-label","carousel"),b(e,"class",t="slider "+n[0]+" svelte-1ceqw5z"),Ve(()=>n[29].call(e))},m(a,c){z(a,e,c),W(e,l),f&&f.m(l,null),n[27](l),n[28](e),i=Qe(e,n[29].bind(e)),s=!0},p(a,c){f&&f.p&&(!s||c[0]&33554432)&&ae(f,r,a,a[25],s?ce(r,a[25],c,null):fe(a[25]),null),(!s||c[0]&32)&&b(l,"style",a[5]),(!s||c[0]&1&&t!==(t="slider "+a[0]+" svelte-1ceqw5z"))&&b(e,"class",t)},i(a){s||(p(f,a),s=!0)},o(a){k(f,a),s=!1},d(a){a&&g(e),f&&f.d(a),n[27](null),n[28](null),i()}}}function Wt(n,e,l){let t,i,s,r,f,a,c,o,h,_,u,{$$slots:d={},$$scope:v}=e,{direction:S="horizontal"}=e,{duration:E="500ms"}=e,{timing:A="ease"}=e,{count:D=0}=e,{current:y=0}=e;const m=()=>_e(1),$=()=>_e(-1),de=w=>_e(w,!0);let X=0,Y=0,L,R,be=!1,ee,te,we,pe=Z(),ve=Z(),ke=Z(),Se=Z(),ye=Z();const _e=(w,Ue)=>{if(!be)return!1;const Fe=Ue?w:Y+w;l(14,Y=Math.max(0,Math.min(X-1,Fe))),l(6,y=Y)},Oe=w=>{be=w[0].isIntersecting};qe(()=>{l(13,X=te.children.length),l(7,D=X),ye.set(D),we=new IntersectionObserver(Oe,{root:null,rootMargin:"-1px"}),we.observe(ee),l(2,R),l(1,L)});function Be(w){se[w?"unshift":"push"](()=>{te=w,l(4,te)})}function Le(w){se[w?"unshift":"push"](()=>{ee=w,l(3,ee)})}function Re(){L=this.clientWidth,R=this.clientHeight,l(1,L),l(2,R)}return n.$$set=w=>{"direction"in w&&l(0,S=w.direction),"duration"in w&&l(8,E=w.duration),"timing"in w&&l(9,A=w.timing),"count"in w&&l(7,D=w.count),"current"in w&&l(6,y=w.current),"$$scope"in w&&l(25,v=w.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8195&&l(24,t=S==="horizontal"?`${X*L}px`:"100%"),n.$$.dirty[0]&8197&&l(23,i=S==="vertical"?`${X*R}px`:"100%"),n.$$.dirty[0]&16387&&l(22,s=S==="horizontal"?`${Y*L*-1}px`:0),n.$$.dirty[0]&16389&&l(21,r=S==="vertical"?`${Y*R*-1}px`:0),n.$$.dirty[0]&16777216&&l(20,f=`width: ${t};`),n.$$.dirty[0]&8388608&&l(19,a=`height: ${i};`),n.$$.dirty[0]&6291456&&l(18,c=`transform: translate3d(${s}, ${r}, 0);`),n.$$.dirty[0]&256&&l(17,o=`transition-duration: ${E};`),n.$$.dirty[0]&512&&l(16,h=`transition-timing-function: ${A};`),n.$$.dirty[0]&2031616&&l(5,_=`${f} ${a} ${c} ${o} ${h}`),n.$$.dirty[0]&1&&pe.set(S),n.$$.dirty[0]&2&&ve.set(L),n.$$.dirty[0]&4&&ke.set(R),n.$$.dirty[0]&64&&Se.set(y),n.$$.dirty[0]&32768&&Ze("Slider",u)},l(15,u={dir:pe,cur:Se,w:ve,h:ke,count:ye}),[S,L,R,ee,te,_,y,D,E,A,m,$,de,X,Y,u,h,o,c,a,f,r,s,i,t,v,d,Be,Le,Re]}class Ct extends O{constructor(e){super(),B(this,e,Wt,Dt,M,{direction:0,duration:8,timing:9,count:7,current:6,next:10,prev:11,jump:12},null,[-1,-1])}get next(){return this.$$.ctx[10]}get prev(){return this.$$.ctx[11]}get jump(){return this.$$.ctx[12]}}function Ht(n,e){const l=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],t=r=>{s.forEach(f=>{r&&r.disable?f.setAttribute("tabindex",-1):f.removeAttribute("tabindex")})},i=l.join(", "),s=[...n.querySelectorAll(i)];return t(e),{update(r){t(r)},destroy(){s.forEach(r=>r.removeAttribute("tabindex"))}}}function qt(n){let e,l,t,i,s,r,f;const a=n[16].default,c=oe(a,n,n[15],null);return{c(){e=I("div"),c&&c.c(),this.h()},l(o){e=T(o,"DIV",{id:!0,class:!0,role:!0,"aria-label":!0,"aria-current":!0});var h=j(e);c&&c.l(h),h.forEach(g),this.h()},h(){b(e,"id",l="slide-"+n[0]),b(e,"class","slide svelte-1h814z3"),b(e,"role","group"),b(e,"aria-label",t="slide "+(n[0]+1)+" of "+n[5]),b(e,"aria-current",n[1]),P(e,"visible",n[1]),N(e,"width",n[4]),N(e,"height",n[3])},m(o,h){z(o,e,h),c&&c.m(e,null),s=!0,r||(f=xe(i=Ht.call(null,e,{disable:n[2]})),r=!0)},p(o,[h]){c&&c.p&&(!s||h&32768)&&ae(c,a,o,o[15],s?ce(a,o[15],h,null):fe(o[15]),null),(!s||h&1&&l!==(l="slide-"+o[0]))&&b(e,"id",l),(!s||h&33&&t!==(t="slide "+(o[0]+1)+" of "+o[5]))&&b(e,"aria-label",t),(!s||h&2)&&b(e,"aria-current",o[1]),i&&ge(i.update)&&h&4&&i.update.call(null,{disable:o[2]}),(!s||h&2)&&P(e,"visible",o[1]),h&16&&N(e,"width",o[4]),h&8&&N(e,"height",o[3])},i(o){s||(p(c,o),s=!0)},o(o){k(c,o),s=!1},d(o){o&&g(e),c&&c.d(o),r=!1,f()}}}function Vt(n,e,l){let t,i,s,r,f,a,c,o,h,{$$slots:_={},$$scope:u}=e;const{dir:d,cur:v,w:S,h:E,count:A}=$e("Slider");J(n,d,y=>l(13,c=y)),J(n,v,y=>l(11,f=y)),J(n,S,y=>l(14,o=y)),J(n,E,y=>l(12,a=y)),J(n,A,y=>l(5,h=y));let{index:D}=e;return n.$$set=y=>{"index"in y&&l(0,D=y.index),"$$scope"in y&&l(15,u=y.$$scope)},n.$$.update=()=>{n.$$.dirty&24576&&l(4,t=c==="horizontal"?`${o}px`:"100%"),n.$$.dirty&12288&&l(3,i=c==="vertical"?`${a}px`:"100%"),n.$$.dirty&2049&&l(1,s=D===f),n.$$.dirty&2&&l(2,r=!s)},[D,s,r,i,t,h,d,v,S,E,A,f,a,c,o,u,_]}class Pt extends O{constructor(e){super(),B(this,e,Vt,qt,M,{index:0})}}function De(n,e,l){const t=n.slice();return t[8]=e[l],t[10]=l,t}function We(n,e,l){const t=n.slice();return t[11]=e[l].type,t[12]=e[l].text,t}function Kt(n){let e,l,t=n[12]+"";return{c(){e=I(n[11]),l=new tt(!1),this.h()},l(i){e=T(i,(n[11]||"null").toUpperCase(),{class:!0});var s=j(e);l=lt(s,!1),s.forEach(g),this.h()},h(){l.a=null,nt(n[11])(e,{class:"slide-content svelte-1myyodm"})},m(i,s){z(i,e,s),l.m(t,e)},p:G,d(i){i&&g(e)}}}function Ce(n){let e=n[11]&&Kt(n);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,t){e&&e.m(l,t)},p(l,t){l[11]&&e.p(l,t)},d(l){e&&e.d(l)}}}function Mt(n){let e,l=K(n[8].text),t=[];for(let i=0;i<l.length;i+=1)t[i]=Ce(We(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=U()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=F(i)},m(i,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,s);z(i,e,s)},p(i,s){if(s&8){l=K(i[8].text);let r;for(r=0;r<l.length;r+=1){const f=We(i,l,r);t[r]?t[r].p(f,s):(t[r]=Ce(f),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&g(e),x(t,i)}}}function He(n){let e,l;return e=new Pt({props:{index:n[10],$$slots:{default:[Mt]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const s={};i&32768&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function Ot(n){let e,l,t=K(n[3]),i=[];for(let r=0;r<t.length;r+=1)i[r]=He(De(n,t,r));const s=r=>k(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=ie()},l(r){for(let f=0;f<i.length;f+=1)i[f].l(r);e=ie()},m(r,f){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,f);z(r,e,f),l=!0},p(r,f){if(f&8){t=K(r[3]);let a;for(a=0;a<t.length;a+=1){const c=De(r,t,a);i[a]?(i[a].p(c,f),p(i[a],1)):(i[a]=He(c),i[a].c(),p(i[a],1),i[a].m(e.parentNode,e))}for(ue(),a=t.length;a<i.length;a+=1)s(a);he()}},i(r){if(!l){for(let f=0;f<t.length;f+=1)p(i[f]);l=!0}},o(r){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)k(i[f]);l=!1},d(r){r&&g(e),x(i,r)}}}function Bt(n){let e,l,t,i,s,r,f,a,c,o;e=new ut({props:{activeSlide:n[1],sections:n[2],allSlides:n[3]}});function h(u){n[6](u)}let _={duration:"0",$$slots:{default:[Ot]},$$scope:{ctx:n}};return n[1]!==void 0&&(_.current=n[1]),i=new Ct({props:_}),n[5](i),se.push(()=>it(i,"current",h)),f=new bt({props:{activeSlide:n[1]}}),c=new Nt({props:{debug:!1,full:!0,directions:n[1]===0?["right"]:["left","right"],size:n[1]===0?"100%":["33%","67%"],enableKeyboard:!0,marginTop:0}}),c.$on("tap",n[4]),{c(){C(e.$$.fragment),l=U(),t=I("article"),C(i.$$.fragment),r=U(),C(f.$$.fragment),a=U(),C(c.$$.fragment),this.h()},l(u){H(e.$$.fragment,u),l=F(u),t=T(u,"ARTICLE",{class:!0});var d=j(t);H(i.$$.fragment,d),d.forEach(g),r=F(u),H(f.$$.fragment,u),a=F(u),H(c.$$.fragment,u),this.h()},h(){b(t,"class","svelte-1myyodm")},m(u,d){q(e,u,d),z(u,l,d),z(u,t,d),q(i,t,null),z(u,r,d),q(f,u,d),z(u,a,d),q(c,u,d),o=!0},p(u,[d]){const v={};d&2&&(v.activeSlide=u[1]),e.$set(v);const S={};d&32768&&(S.$$scope={dirty:d,ctx:u}),!s&&d&2&&(s=!0,S.current=u[1],et(()=>s=!1)),i.$set(S);const E={};d&2&&(E.activeSlide=u[1]),f.$set(E);const A={};d&2&&(A.directions=u[1]===0?["right"]:["left","right"]),d&2&&(A.size=u[1]===0?"100%":["33%","67%"]),c.$set(A)},i(u){o||(p(e.$$.fragment,u),p(i.$$.fragment,u),p(f.$$.fragment,u),p(c.$$.fragment,u),o=!0)},o(u){k(e.$$.fragment,u),k(i.$$.fragment,u),k(f.$$.fragment,u),k(c.$$.fragment,u),o=!1},d(u){u&&(g(l),g(t),g(r),g(a)),V(e,u),n[5](null),V(i),V(f,u),V(c,u)}}}function Lt(n,e,l){let t,i=0;const s=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],r=s.map((o,h)=>o.slides.map(_=>({..._,section:h}))).flat(),f=({detail:o})=>{o==="right"?t.next():t.prev(),window.scrollTo(0,0)};function a(o){se[o?"unshift":"push"](()=>{t=o,l(0,t)})}function c(o){i=o,l(1,i)}return[t,i,s,r,f,a,c]}class Rt extends O{constructor(e){super(),B(this,e,Lt,Bt,M,{})}}function Ut(n){let e,l;return e=new Rt({}),{c(){C(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p:G,i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}class Qt extends O{constructor(e){super(),B(this,e,null,Ut,M,{})}}export{Qt as component};
