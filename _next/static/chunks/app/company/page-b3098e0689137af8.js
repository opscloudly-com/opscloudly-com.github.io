(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{4932:function(e,t,r){Promise.resolve().then(r.bind(r,2084)),Promise.resolve().then(r.bind(r,6636)),Promise.resolve().then(r.bind(r,6844)),Promise.resolve().then(r.bind(r,7213)),Promise.resolve().then(r.bind(r,8362)),Promise.resolve().then(r.bind(r,3184)),Promise.resolve().then(r.bind(r,5773)),Promise.resolve().then(r.bind(r,5622)),Promise.resolve().then(r.bind(r,4576)),Promise.resolve().then(r.bind(r,3275)),Promise.resolve().then(r.bind(r,2130)),Promise.resolve().then(r.bind(r,1528)),Promise.resolve().then(r.bind(r,3003)),Promise.resolve().then(r.bind(r,7916)),Promise.resolve().then(r.bind(r,9899)),Promise.resolve().then(r.bind(r,5923)),Promise.resolve().then(r.bind(r,9896)),Promise.resolve().then(r.bind(r,2934)),Promise.resolve().then(r.bind(r,7427)),Promise.resolve().then(r.bind(r,2854)),Promise.resolve().then(r.bind(r,1056)),Promise.resolve().then(r.bind(r,1173)),Promise.resolve().then(r.bind(r,5540)),Promise.resolve().then(r.bind(r,5250)),Promise.resolve().then(r.bind(r,6216)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,9442)),Promise.resolve().then(r.bind(r,5014)),Promise.resolve().then(r.bind(r,5458))},9442:function(e,t,r){"use strict";r.d(t,{AnimatedNumber:function(){return C}});var n=r(7437),s=r(2265),i=r(7451);let l={some:0,all:1};var o=r(5282),a=r(6391),c=r(2548);let d=e=>e&&"object"==typeof e&&e.mix,u=e=>d(e)?e.mix:void 0;var m=r(9033),h=r(6219);function f(e,t){let r=(0,o.c)(t()),n=()=>r.set(t());return n(),(0,m.L)(()=>{let t=()=>h.Wi.preRender(n,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,h.Pn)(n)}}),r}var v=r(458),x=r(804);function p(e,t){let r=(0,v.h)(()=>[]);return f(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}var b=r(888);function C(e){let{start:t,end:r,decimals:d=0}=e,m=(0,s.useRef)(null),h=function(e,{root:t,margin:r,amount:n,once:o=!1}={}){let[a,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!e.current||o&&a)return;let s={root:t&&t.current||void 0,margin:r,amount:n};return function(e,t,{root:r,margin:n,amount:s="some"}={}){let o=(0,i.I)(e),a=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let r=a.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?a.set(e.target,r):c.unobserve(e.target)}else r&&(r(e),a.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof s?s:l[s]});return o.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(c(!0),o?void 0:()=>c(!1)),s)},[t,e,r,o,n]),a}(m,{once:!0,amount:.5}),v=(0,o.c)(t),C=function(e,t,r,n){if("function"==typeof e)return function(e){x.S1.current=[],e();let t=f(x.S1.current,e);return x.S1.current=void 0,t}(e);let s="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],s=e[1+r],i=e[2+r],l=e[3+r],o=(0,c.s)(s,i,{mixer:u(i[0]),...l});return t?o(n):o}(t,void 0,void 0);return Array.isArray(e)?p(e,s):p([e],([e])=>s(e))}((0,a.q)(v,{damping:30,stiffness:100}),e=>e.toFixed(d));return(0,s.useEffect)(()=>{v.set(h?r:t)},[t,r,h,v]),(0,n.jsx)(b.E.span,{ref:m,children:C})}},809:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(7437),s=r(8362),i=r(7138);let l=(0,r(2265).forwardRef)(function(e,t){return(0,n.jsx)(s.DataInteractive,{children:(0,n.jsx)(i.default,{ref:t,...e})})})},5014:function(e,t,r){"use strict";r.r(t),r.d(t,{Logo:function(){return l},Mark:function(){return o}});var n=r(7437),s=r(4839),i=r(888);function l(e){let{className:t}=e;return(0,n.jsxs)(i.E.svg,{variants:{idle:{},active:{}},initial:"idle",whileHover:"active",width:100,height:34,viewBox:"0 0 34 34",className:(0,s.W)(t,"overflow-visible"),children:[(0,n.jsx)(i.E.g,{variants:{idle:{scale:1,opacity:1},active:{scale:[1,1.3,1],opacity:[1,.75,1],transition:{duration:.5,ease:"easeInOut",delay:.3}}},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"})})}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"})})]})}function o(e){let{className:t}=e;return(0,n.jsxs)("svg",{viewBox:"0 0 34 34",fill:"none",className:t,children:[(0,n.jsx)("path",{d:"M19.598 18.5C18.7696 19.9349 16.9348 20.4265 15.4999 19.5981C14.065 18.7696 13.5734 16.9349 14.4018 15.5C15.2303 14.0651 17.065 13.5735 18.4999 14.4019C19.9348 15.2303 20.4264 17.0651 19.598 18.5Z"}),(0,n.jsx)("path",{d:"M23.232 10.2058C22.6797 11.1623 21.4565 11.4901 20.4999 10.9378C19.5433 10.3855 19.2156 9.16235 19.7679 8.20576C20.3201 7.24918 21.5433 6.92143 22.4999 7.47371C23.4565 8.026 23.7842 9.24918 23.232 10.2058Z"}),(0,n.jsx)("path",{d:"M19.7679 25.7944C19.2156 24.8378 19.5433 23.6146 20.4999 23.0623C21.4565 22.51 22.6797 22.8378 23.232 23.7944C23.7843 24.7509 23.4565 25.9741 22.4999 26.5264C21.5433 27.0787 20.3202 26.7509 19.7679 25.7944Z"}),(0,n.jsx)("path",{d:"M25.9999 19.0001C24.8953 19.0001 23.9999 18.1047 23.9999 17.0001C23.9999 15.8956 24.8953 15.0001 25.9999 15.0001C27.1045 15.0001 27.9999 15.8956 27.9999 17.0001C27.9999 18.1047 27.1045 19.0001 25.9999 19.0001Z"}),(0,n.jsx)("path",{d:"M14.232 25.7942C13.6797 26.7508 12.4565 27.0786 11.4999 26.5263C10.5433 25.974 10.2156 24.7508 10.7679 23.7942C11.3201 22.8376 12.5433 22.5099 13.4999 23.0622C14.4565 23.6145 14.7842 24.8376 14.232 25.7942Z"}),(0,n.jsx)("path",{d:"M10.7679 10.2059C10.2157 9.24936 10.5434 8.02618 11.5 7.4739C12.4566 6.92161 13.6798 7.24936 14.232 8.20595C14.7843 9.16253 14.4566 10.3857 13.5 10.938C12.5434 11.4903 11.3202 11.1625 10.7679 10.2059Z"}),(0,n.jsx)("path",{d:"M7.99999 19.0002C6.89542 19.0002 5.99999 18.1047 5.99999 17.0002C5.99999 15.8956 6.89542 15.0002 7.99999 15.0002C9.10456 15.0002 9.99999 15.8956 9.99999 17.0002C9.99999 18.1047 9.10456 19.0002 7.99999 19.0002Z"}),(0,n.jsx)("path",{d:"M25.8659 3.64359C25.5898 4.12188 24.9782 4.28575 24.4999 4.00961C24.0216 3.73347 23.8577 3.12188 24.1339 2.64359C24.41 2.16529 25.0216 2.00142 25.4999 2.27756C25.9782 2.5537 26.1421 3.16529 25.8659 3.64359Z"}),(0,n.jsx)("path",{d:"M33.0001 18.0002C32.4478 18.0002 32.0001 17.5524 32.0001 17.0002C32.0001 16.4479 32.4478 16.0002 33.0001 16.0002C33.5523 16.0002 34.0001 16.4479 34.0001 17.0002C34.0001 17.5524 33.5523 18.0002 33.0001 18.0002Z"}),(0,n.jsx)("path",{d:"M31.3561 9.86594C30.8778 10.1421 30.2663 9.97821 29.9901 9.49992C29.714 9.02162 29.8778 8.41003 30.3561 8.13389C30.8344 7.85775 31.446 8.02162 31.7222 8.49992C31.9983 8.97821 31.8344 9.5898 31.3561 9.86594Z"}),(0,n.jsx)("path",{d:"M30.3563 25.866C29.878 25.5899 29.7141 24.9783 29.9903 24.5C30.2664 24.0217 30.878 23.8578 31.3563 24.134C31.8346 24.4101 31.9985 25.0217 31.7223 25.5C31.4462 25.9783 30.8346 26.1422 30.3563 25.866Z"}),(0,n.jsx)("path",{d:"M16.0001 33.0001C16.0001 32.4478 16.4478 32.0001 17.0001 32.0001C17.5524 32.0001 18.0001 32.4478 18.0001 33.0001C18.0001 33.5524 17.5524 34.0001 17.0001 34.0001C16.4478 34.0001 16.0001 33.5524 16.0001 33.0001Z"}),(0,n.jsx)("path",{d:"M24.134 31.3566C23.8579 30.8783 24.0218 30.2667 24.5001 29.9905C24.9784 29.7144 25.59 29.8783 25.8661 30.3566C26.1422 30.8349 25.9784 31.4464 25.5001 31.7226C25.0218 31.9987 24.4102 31.8349 24.134 31.3566Z"}),(0,n.jsx)("path",{d:"M9.86593 31.3564C9.58978 31.8347 8.97819 31.9986 8.4999 31.7224C8.02161 31.4463 7.85773 30.8347 8.13388 30.3564C8.41002 29.8781 9.02161 29.7142 9.4999 29.9904C9.97819 30.2665 10.1421 30.8781 9.86593 31.3564Z"}),(0,n.jsx)("path",{d:"M1 18.0001C0.447715 18.0001 -3.44684e-08 17.5524 0 17.0001C3.44684e-08 16.4478 0.447715 16.0001 1 16.0001C1.55228 16.0001 2 16.4478 2 17.0001C2 17.5524 1.55228 18.0001 1 18.0001Z"}),(0,n.jsx)("path",{d:"M3.64329 25.866C3.16499 26.1422 2.5534 25.9783 2.27726 25.5C2.00112 25.0217 2.16499 24.4101 2.64329 24.134C3.12158 23.8578 3.73317 24.0217 4.00931 24.5C4.28545 24.9783 4.12158 25.5899 3.64329 25.866Z"}),(0,n.jsx)("path",{d:"M2.6435 9.86602C2.1652 9.58987 2.00133 8.97828 2.27747 8.49999C2.55361 8.0217 3.1652 7.85782 3.6435 8.13397C4.12179 8.41011 4.28566 9.0217 4.00952 9.49999C3.73338 9.97828 3.12179 10.1422 2.6435 9.86602Z"}),(0,n.jsx)("path",{d:"M16.0001 1C16.0001 0.447715 16.4478 -4.87226e-08 17.0001 0C17.5524 4.87226e-08 18.0001 0.447715 18.0001 1C18.0001 1.55228 17.5524 2 17.0001 2C16.4478 2 16.0001 1.55228 16.0001 1Z"}),(0,n.jsx)("path",{d:"M8.13398 3.64371C7.85783 3.16542 8.02171 2.55383 8.5 2.27768C8.97829 2.00154 9.58988 2.16542 9.86603 2.64371C10.1422 3.122 9.97829 3.73359 9.5 4.00973C9.02171 4.28588 8.41012 4.122 8.13398 3.64371Z"})]})}},5458:function(e,t,r){"use strict";r.d(t,{Navbar:function(){return p}});var n=r(7437),s=r(5622),i=r(9841),l=r(888),o=r(809);r(5014);var a=r(4839);function c(e){let{className:t="",children:r}=e;return(0,n.jsx)("div",{className:t,children:r})}function d(e){let{className:t="",children:r}=e;return(0,n.jsxs)("div",{className:(0,a.W)(t,"group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]"),children:[(0,n.jsxs)("div",{"aria-hidden":"true",className:"absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2",children:[(0,n.jsx)("div",{className:"absolute inset-x-0 top-0 border-t border-black/5"}),(0,n.jsx)("div",{className:"absolute inset-x-0 top-2 border-t border-black/5"}),(0,n.jsx)("div",{className:"absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"}),(0,n.jsx)("div",{className:"absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"})]}),r]})}function u(e){let{className:t="",children:r}=e;return(0,n.jsxs)("div",{className:(0,a.W)(t,"group/item relative"),children:[(0,n.jsx)(m,{placement:"top left",className:"hidden group-first/item:block"}),(0,n.jsx)(m,{placement:"top right"}),(0,n.jsx)(m,{placement:"bottom left",className:"hidden group-last/row:group-first/item:block"}),(0,n.jsx)(m,{placement:"bottom right",className:"hidden group-last/row:block"}),r]})}function m(e){let{className:t="",placement:r}=e,[s,i]=r.split(" ");return(0,n.jsx)("svg",{viewBox:"0 0 15 15","aria-hidden":"true",className:(0,a.W)(t,"absolute size-[15px] fill-black/10","top"===s?"-top-2":"-bottom-2","left"===i?"-left-2":"-right-2"),children:(0,n.jsx)("path",{d:"M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"})})}let h=[{href:"/pricing",label:"Pricing"},{href:"/company",label:"Company"}];function f(){return(0,n.jsx)("nav",{className:"relative hidden lg:flex",children:h.map(e=>{let{href:t,label:r}=e;return(0,n.jsx)(u,{className:"relative flex",children:(0,n.jsx)(o.r,{href:t,className:"flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]",children:r})},t)})})}function v(){return(0,n.jsx)(s.DisclosureButton,{className:"flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden","aria-label":"Open main menu",children:(0,n.jsx)(i.Z,{className:"size-6"})})}function x(){return(0,n.jsxs)(s.DisclosurePanel,{className:"lg:hidden",children:[(0,n.jsx)("div",{className:"flex flex-col gap-6 py-4",children:h.map((e,t)=>{let{href:r,label:s}=e;return(0,n.jsx)(l.E.div,{initial:{opacity:0,rotateX:-90},animate:{opacity:1,rotateX:0},transition:{duration:.15,ease:"easeInOut",rotateX:{duration:.3,delay:.1*t}},children:(0,n.jsx)(o.r,{href:r,className:"text-base font-medium text-gray-950",children:s})},r)})}),(0,n.jsxs)("div",{className:"absolute left-1/2 w-screen -translate-x-1/2",children:[(0,n.jsx)("div",{className:"absolute inset-x-0 top-0 border-t border-black/5"}),(0,n.jsx)("div",{className:"absolute inset-x-0 top-2 border-t border-black/5"})]})]})}function p(e){let{banner:t}=e;return(0,n.jsxs)(s.Disclosure,{as:"header",className:"pt-12 sm:pt-16",children:[(0,n.jsx)(c,{children:(0,n.jsxs)(d,{className:"relative flex justify-between",children:[(0,n.jsxs)("div",{className:"relative flex gap-6",children:[(0,n.jsx)(u,{className:"py-3 px-4",children:(0,n.jsx)(o.r,{href:"/",title:"Home",className:"w-full flex items-center",children:(0,n.jsx)("span",{className:"text-3xl",children:"OpsCloudly"})})}),t&&(0,n.jsx)("div",{className:"relative hidden items-center py-3 lg:flex",children:t})]}),(0,n.jsx)(f,{}),(0,n.jsx)(v,{})]})}),(0,n.jsx)(x,{})]})}},7451:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var n=r(9047);function s(e,t,r){var s;if("string"==typeof e){let i=document;t&&((0,n.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),r?(null!==(s=r[e])&&void 0!==s||(r[e]=i.querySelectorAll(e)),e=r[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},5282:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});var n=r(2265),s=r(804),i=r(9791),l=r(458);function o(e){let t=(0,l.h)(()=>(0,s.BX)(e)),{isStatic:r}=(0,n.useContext)(i._);if(r){let[,r]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",r),[])}return t}},6391:function(e,t,r){"use strict";r.d(t,{q:function(){return u}});var n=r(2265),s=r(8322),i=r(5282),l=r(9791),o=r(9033),a=r(2332),c=r(6219);function d(e){return"number"==typeof e?e:parseFloat(e)}function u(e,t={}){let{isStatic:r}=(0,n.useContext)(l._),u=(0,n.useRef)(null),m=(0,i.c)((0,s.i)(e)?d(e.get()):e),h=(0,n.useRef)(m.get()),f=(0,n.useRef)(()=>{}),v=()=>{let e=u.current;e&&0===e.time&&e.sample(c.frameData.delta),x(),u.current=(0,a.y)({keyframes:[m.get(),h.current],velocity:m.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:f.current})},x=()=>{u.current&&u.current.stop()};return(0,n.useInsertionEffect)(()=>m.attach((e,t)=>r?t(e):(h.current=e,f.current=t,c.Wi.update(v),m.get()),x),[JSON.stringify(t)]),(0,o.L)(()=>{if((0,s.i)(e))return e.on("change",e=>m.set(d(e)))},[m]),m}}},function(e){e.O(0,[501,893,971,23,744],function(){return e(e.s=4932)}),_N_E=e.O()}]);