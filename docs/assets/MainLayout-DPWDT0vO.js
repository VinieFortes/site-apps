import{v as St,c as We,g as Tt,a as Et,u as xt,b as _t,Q as Bt,d as $t}from"./QBtn-B_FCE4xb.js";import{c as P,a as v,h as C,r as E,i as nt,o as U,b as N,n as $e,d as Y,g as M,l as H,e as ze,f as Q,w as k,j as ce,H as Fe,k as V,s as Oe,m as zt,p as Ot,P as Pt,q as Vt,t as Ht,u as ne,v as ye,x as Re,y as ge,z as Ee,A as we,B as Mt,C as lt,D as Dt,E as le,F as Qt,G as At,_ as it,I as at,J as ee,K as ue,L as $,M as B,N as Wt,O as se,Q as xe,R as Ne,S as Ft,T as Rt,U as Nt,V as It,W as Xt}from"./index-BIC1M_qX.js";import{h as I,a as rt,b as Ie,c as jt}from"./render-DMa3vaaW.js";const Ut=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},I(o.default))}}),Yt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},I(o.default))}});function Kt(){const e=E(!nt.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const ut=typeof ResizeObserver<"u",Xe=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},_e=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,i,t={width:-1,height:-1};function l(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:c,offsetHeight:d}=i;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:f}=M();if(f.trigger=l,ut===!0){let c;const d=r=>{i=f.$el.parentNode,i?(c=new ResizeObserver(l),c.observe(i),s()):r!==!0&&Y(()=>{d(!0)})};return U(()=>{d()}),N(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),$e}else{let c=function(){n!==null&&(clearTimeout(n),n=null),b!==void 0&&(b.removeEventListener!==void 0&&b.removeEventListener("resize",l,H.passive),b=void 0)},d=function(){c(),i&&i.contentDocument&&(b=i.contentDocument.defaultView,b.addEventListener("resize",l,H.passive),s())};const{isHydrated:r}=Kt();let b;return U(()=>{Y(()=>{i=f.$el,i&&d()})}),N(c),()=>{if(r.value===!0)return C("object",{class:"q--avoid-card-border",style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:d})}}}}),Gt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=ze(ce,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const l=E(parseInt(e.heightHint,10)),s=E(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||i.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),d=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function S({height:u}){h(l,u),m("size",u)}function L(u){r.value===!0&&h(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(c,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=rt(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(_e,{debounce:0,onResize:S})),C("header",{class:b.value,style:q.value,onFocusin:L},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:i.value},I(o.default))}}),Pe={dark:{type:Boolean,default:null}};function Ve(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}const Jt=["ul","ol"],Zt=P({name:"QList",props:{...Pe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=M(),i=Ve(e,n.proxy.$q),t=v(()=>Jt.includes(e.tag)?null:"list"),l=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:l.value,role:t.value},I(o.default))}});function eo(e,o,n){let i;function t(){i!==void 0&&(Fe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>n.value===!0,handler:o},Fe.add(i)}}}const to={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},oo=["beforeShow","show","beforeHide","hide"];function no({showing:e,canShow:o,hideOnRouteChange:n,handleShow:i,handleHide:t,processOnMount:l}){const s=M(),{props:f,emit:c,proxy:d}=s;let r;function b(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!0),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),i!==void 0?i(u):c("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!1),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&S(u)}function S(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:S)(r)}k(()=>f.modelValue,L),n!==void 0&&St(s)===!0&&k(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),l===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:b};return Object.assign(d,g),g}const lo=[Element,String],io=[null,document,document.body,document.scrollingElement,document.documentElement];function ao(e,o){let n=Tt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return io.includes(n)?window:n}function st(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ct(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function qe(){if(ie!==void 0)return ie;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=o.clientWidth),o.remove(),ie=n-i,ie}function ro(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ke,Ce,Z,Le=!1,je,Ue,Ye,R=null;function uo(e){so(e)&&Oe(e)}function so(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=zt(e),n=e.shiftKey&&!e.deltaX,i=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||i?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const s=o[l];if(ro(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ke(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Ge(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);ke=ct(window),Ce=st(window),je=o.style.left,Ue=o.style.top,Ye=window.location.href,o.style.left=`-${ke}px`,o.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,H.passiveCapture),window.visualViewport.addEventListener("scroll",ae,H.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ke,H.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",uo,H.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ae,H.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,H.passiveCapture)):window.removeEventListener("scroll",Ke,H.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=je,o.style.top=Ue,window.location.href===Ye&&window.scrollTo(ke,Ce),Z=void 0)}function co(e){let o="add";if(e===!0){if(J++,R!==null){clearTimeout(R),R=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){R!==null&&clearTimeout(R),R=setTimeout(()=>{Ge(o),R=null},100);return}}Ge(o)}function fo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,co(o))}}}function vo(){let e=null;const o=M();function n(){e!==null&&(clearTimeout(e),e=null)}return Ot(n),N(n),{removeTimeout:n,registerTimeout(i,t){n(),Et(o)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},mo=Object.keys(He);He.all=!0;function Je(e){const o={};for(const n of mo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?He:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const ho=["INPUT","TEXTAREA"];function Ze(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&ho.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function po(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,o,n){const i=Ee(e);let t,l=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(l),c=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.left===!0&&l<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&l>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:l,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let bo=0;const Te=Vt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function i(l,s){n.mouse===!0&&s===!0?Oe(l):(n.stop===!0&&ge(l),n.prevent===!0&&Re(l))}const t={uid:"qvtp_"+bo++,handler:o,modifiers:n,direction:Je(n),noop:$e,mouseStart(l){Ze(l,t)&&Ht(l)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ze(l,t)){const s=l.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(V.is.firefox===!0&&ye(e,!0),t.lastEvt=l,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Re(d),l.cancelBubble===!0&&ge(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:d}}ge(l)}const{left:f,top:c}=Ee(l);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(l){if(t.event===void 0)return;const s=Ee(l),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=l;const d=t.event.mouse===!0,r=()=>{i(l,d);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),po(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{S(),h()},50):S()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=Se(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(l);return}const b=Math.abs(f),q=Math.abs(c);b!==q&&(t.direction.horizontal===!0&&b>q||t.direction.vertical===!0&&b<q||t.direction.up===!0&&b<q&&c<0||t.direction.down===!0&&b<q&&c>0||t.direction.left===!0&&b>q&&f<0||t.direction.right===!0&&b>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(we(t,"temp"),V.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Se(l===void 0?t.lastEvt:l,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}V.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Je(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),V.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const et=150,yo=P({name:"QDrawer",inheritAttrs:!1,props:{...to,...Pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...oo,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:i}){const t=M(),{proxy:{$q:l}}=t,s=Ve(e,l),{preventBodyScroll:f}=fo(),{registerTimeout:c,removeTimeout:d}=vo(),r=ze(ce,Q);if(r===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let b,q=null,m;const h=E(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),S=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>S.value===!0?e.miniWidth:e.width),g=E(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||dt.value===!0));function p(a,y){if(z(),a!==!1&&r.animate(),O(0),h.value===!0){const _=r.instances[te.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),A(1),r.isContainer.value!==!0&&f(!0)}else A(0),a!==!1&&he(!1);c(()=>{a!==!1&&he(!0),y!==!0&&n("show",a)},et)}function w(a,y){K(),a!==!1&&r.animate(),A(0),O(X.value*L.value),pe(),y!==!0?c(()=>{n("hide",a)},et):d()}const{show:T,hide:x}=no({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:w}),{addToHistory:z,removeFromHistory:K}=eo(g,x,u),F={belowBreakpoint:h,hide:x},D=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),Me=E(0),j=E(!1),de=E(!1),De=E(L.value*X.value),te=v(()=>D.value===!0?"left":"right"),fe=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(D.value?"R":"L")!==-1||l.platform.is.ios===!0&&r.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),dt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ft=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),vt=v(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),Qe=v(()=>D.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),mt=v(()=>D.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),ht=v(()=>{const a={};return r.header.space===!0&&Qe.value===!1&&(ve.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&mt.value===!1&&(ve.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),pt=v(()=>{const a={width:`${L.value}px`,transform:`translateX(${De.value}px)`};return h.value===!0?a:Object.assign(a,ht.value)}),bt=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),yt=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),gt=v(()=>{const a=l.lang.rtl===!0?e.side:te.value;return[[Te,Ct,void 0,{[a]:!0,mouse:!0}]]}),wt=v(()=>{const a=l.lang.rtl===!0?te.value:e.side;return[[Te,Ae,void 0,{[a]:!0,mouse:!0}]]}),qt=v(()=>{const a=l.lang.rtl===!0?te.value:e.side;return[[Te,Ae,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Lt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}k(h,a=>{a===!0?(b=g.value,g.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(g.value===!0?(O(0),A(0),pe()):T(!1))}),k(()=>e.side,(a,y)=>{r.instances[y]===F&&(r.instances[y]=void 0,r[y].space=!1,r[y].offset=0),r.instances[a]=F,r[a].size=L.value,r[a].space=G.value,r[a].offset=fe.value}),k(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(r.isContainer,a=>{g.value===!0&&f(a!==!0),a===!0&&me()}),k(r.scrollbarWidth,()=>{O(g.value===!0?0:void 0)}),k(fe,a=>{W("offset",a)}),k(G,a=>{n("onLayout",a),W("space",a)}),k(D,()=>{O()}),k(L,a=>{O(),be(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{be(a,L.value)}),k(()=>l.lang.rtl,()=>{O()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(kt(),r.animate())}),k(S,a=>{n("miniState",a)});function O(a){a===void 0?Y(()=>{a=g.value===!0?0:L.value,O(X.value*a)}):(r.isContainer.value===!0&&D.value===!0&&(h.value===!0||Math.abs(a)===L.value)&&(a+=X.value*r.scrollbarWidth.value),De.value=a)}function A(a){Me.value=a}function he(a){const y=a===!0?"remove":r.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function kt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,q=setTimeout(()=>{q=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ct(a){if(g.value!==!1)return;const y=L.value,_=re(a.distance.x,0,y);if(a.isFinal===!0){_>=Math.min(75,y)===!0?T():(r.animate(),A(0),O(X.value*y)),j.value=!1;return}O((l.lang.rtl===!0?D.value!==!0:D.value)?Math.max(y-_,0):Math.min(0,_-y)),A(re(_/y,0,1)),a.isFirst===!0&&(j.value=!0)}function Ae(a){if(g.value!==!0)return;const y=L.value,_=a.direction===e.side,oe=(l.lang.rtl===!0?_!==!0:_)?re(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(oe)<Math.min(75,y)===!0?(r.animate(),A(1),O(0)):x(),j.value=!1;return}O(X.value*oe),A(re(1-oe/y,0,1)),a.isFirst===!0&&(j.value=!0)}function pe(){f(!1),he(!0)}function W(a,y){r.update(e.side,a,y)}function Lt(a,y){a.value!==y&&(a.value=y)}function be(a,y){W("size",a===!0?e.miniWidth:y)}return r.instances[e.side]=F,be(e.miniToOverlay,L.value),W("space",G.value),W("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",G.value),n("miniState",S.value),b=e.showIfAbove===!0;const a=()=>{(g.value===!0?p:w)(!1,!0)};if(r.totalWidth.value!==0){Y(a);return}m=k(r.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?T(!1):a()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&pe(),r.instances[e.side]===F&&(r.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Mt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),gt.value)),a.push(Ie("div",{ref:"backdrop",class:ft.value,style:vt.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>qt.value)));const y=S.value===!0&&o.mini!==void 0,_=[C("div",{...i,key:""+y,class:[bt.value,i.class]},y===!0?o.mini():I(o.default))];return e.elevated===!0&&g.value===!0&&_.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Ie("aside",{ref:"content",class:yt.value,style:pt.value},_,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>wt.value)),C("div",{class:"q-drawer-container"},a)}}}),go=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=M(),i=ze(ce,Q);if(i===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;lt(Dt,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},I(o.default))}}),{passive:tt}=H,wo=["both","horizontal","vertical"],qo=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>wo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:lo},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;k(()=>e.scrollTarget,()=>{c(),f()});function s(){i!==null&&i();const b=Math.max(0,st(t)),q=ct(t),m={top:b-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:b,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=ao(l,e.scrollTarget),t.addEventListener("scroll",d,tt),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,tt),t=void 0)}function d(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:r}=M();return k(()=>r.$q.lang.rtl,s),U(()=>{l=r.$el.parentNode,f()}),N(()=>{i!==null&&i(),c()}),Object.assign(r,{trigger:d,getPosition:()=>n}),$e}}),ko=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=E(null),l=E(i.screen.height),s=E(e.container===!0?0:i.screen.width),f=E({position:0,direction:"down",inflectionPoint:0}),c=E(0),d=E(nt.value===!0?0:qe()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(w){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:w.position.top,direction:w.direction,directionChanged:w.directionChanged,inflectionPoint:w.inflectionPoint.top,delta:w.delta.top};f.value=T,e.onScroll!==void 0&&n("scroll",T)}}function S(w){const{height:T,width:x}=w;let z=!1;l.value!==T&&(z=!0,l.value=T,e.onScrollHeight!==void 0&&n("scrollHeight",T),g()),s.value!==x&&(z=!0,s.value=x),z===!0&&e.onResize!==void 0&&n("resize",w)}function L({height:w}){c.value!==w&&(c.value=w,g())}function g(){if(e.container===!0){const w=l.value>c.value?qe():0;d.value!==w&&(d.value=w)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:c,scrollbarWidth:d,totalWidth:v(()=>s.value+d.value),rows:v(()=>{const w=e.view.toLowerCase().split(" ");return{top:w[0].split(""),middle:w[1].split(""),bottom:w[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(w,T,x){p[w][T]=x}};if(lt(ce,p),qe()>0){let w=function(){z=null,K.classList.remove("hide-scrollbar")},T=function(){if(z===null){if(K.scrollHeight>i.screen.height)return;K.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(w,300)},x=function(F){z!==null&&F==="remove"&&(clearTimeout(z),w()),window[`${F}EventListener`]("resize",T)},z=null;const K=document.body;k(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),Qt(()=>{x("remove")})}return()=>{const w=jt(o.default,[C(qo,{onScroll:h}),C(_e,{onResize:S})]),T=C("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},w);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(_e,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[T])])]):T}}}),ot=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},I(o.default))}}),Co=P({name:"QItem",props:{...Pe,...xt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:i}}=M(),t=Ve(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:c,navigateOnClick:d}=_t(),r=E(null),b=E(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=v(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function L(p){m.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?b.value.focus():document.activeElement===b.value&&r.value.focus()),d(p))}function g(p){if(m.value===!0&&At(p,[13,32])===!0){Oe(p),p.qKeyEvent=!0;const w=new MouseEvent("click",p);w.qKeyEvent=!0,r.value.dispatchEvent(w)}n("keyup",p)}function u(){const p=rt(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:r,class:h.value,style:S.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(c.value,p,u())}}}),Lo=at({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function So(e,o,n,i,t,l){return ee(),ue(Co,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:$(()=>[e.icon?(ee(),ue(ot,{key:0,avatar:""},{default:$(()=>[B(Bt,{name:e.icon},null,8,["name"])]),_:1})):Wt("",!0),B(ot,null,{default:$(()=>[B(Be,null,{default:$(()=>[se(xe(e.title),1)]),_:1}),B(Be,{caption:""},{default:$(()=>[se(xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}const To=it(Lo,[["render",So]]),Eo=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],xo=at({name:"MainLayout",components:{EssentialLink:To},data(){return{linksList:Eo,leftDrawerOpen:!1}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen}}});function _o(e,o,n,i,t,l){const s=Ne("EssentialLink"),f=Ne("router-view");return ee(),ue(ko,{view:"lHh Lpr lFf"},{default:$(()=>[B(Gt,{elevated:""},{default:$(()=>[B(Yt,null,{default:$(()=>[B($t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(Ut,null,{default:$(()=>o[1]||(o[1]=[se(" Quasar App ")])),_:1}),Ft("div",null,"Quasar v"+xe(e.$q.version),1)]),_:1})]),_:1}),B(yo,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:$(()=>[B(Zt,null,{default:$(()=>[B(Be,{header:""},{default:$(()=>o[2]||(o[2]=[se(" Essential Links ")])),_:1}),(ee(!0),Rt(It,null,Nt(e.linksList,c=>(ee(),ue(s,Xt({key:c.title,ref_for:!0},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(go,null,{default:$(()=>[B(f)]),_:1})]),_:1})}const Po=it(xo,[["render",_o]]);export{Po as default};
