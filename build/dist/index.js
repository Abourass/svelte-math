var Be=Object.defineProperty;var ft=s=>Be(s,"__esModule",{value:!0});var pt=(s,n)=>{ft(s);for(var i in n)Be(s,i,{get:n[i],enumerable:!0})};var we={};pt(we,{MODE:()=>mt,NODE_ENV:()=>ht,SSR:()=>gt});var mt="production",ht="production",gt=!1;function k(){}function He(s){return s()}function Pe(){return Object.create(null)}function se(s){s.forEach(He)}function bt(s){return typeof s=="function"}function Q(s,n){return s!=s?n==n:s!==n||s&&typeof s=="object"||typeof s=="function"}function vt(s){return Object.keys(s).length===0}function Z(s,...n){if(s==null)return k;let i=s.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function P(s,n,i){s.$$.on_destroy.push(Z(n,i))}function R(s,n,i=n){return s.set(i),n}function C(s,n){s.appendChild(n)}function N(s,n,i){s.insertBefore(n,i||null)}function A(s){s.parentNode.removeChild(s)}function ae(s,n){for(let i=0;i<s.length;i+=1)s[i]&&s[i].d(n)}function I(s){return document.createElement(s)}function j(s){return document.createTextNode(s)}function O(){return j(" ")}function _e(){return j("")}function $(s,n,i,r){return s.addEventListener(n,i,r),()=>s.removeEventListener(n,i,r)}function M(s,n,i){i==null?s.removeAttribute(n):s.getAttribute(n)!==i&&s.setAttribute(n,i)}function yt(s){return Array.from(s.childNodes)}function B(s,n){n=""+n,s.wholeText!==n&&(s.data=n)}function le(s,n){s.value=n==null?"":n}var ue;function ce(s){ue=s}function wt(){if(!ue)throw new Error("Function called outside component initialization");return ue}function Ce(s){wt().$$.on_mount.push(s)}var ie=[],Fe=[],de=[],We=[],_t=Promise.resolve(),xe=!1;function Ct(){xe||(xe=!0,_t.then(Qe))}function Le(s){de.push(s)}var Ee=!1,Ie=new Set;function Qe(){if(!Ee){Ee=!0;do{for(let s=0;s<ie.length;s+=1){let n=ie[s];ce(n),xt(n.$$)}for(ce(null),ie.length=0;Fe.length;)Fe.pop()();for(let s=0;s<de.length;s+=1){let n=de[s];Ie.has(n)||(Ie.add(n),n())}de.length=0}while(ie.length);for(;We.length;)We.pop()();xe=!1,Ee=!1,Ie.clear()}}function xt(s){if(s.fragment!==null){s.update(),se(s.before_update);let n=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,n),s.after_update.forEach(Le)}}var fe=new Set,K;function Te(){K={r:0,c:[],p:K}}function Se(){K.r||se(K.c),K=K.p}function U(s,n){s&&s.i&&(fe.delete(s),s.i(n))}function J(s,n,i,r){if(s&&s.o){if(fe.has(s))return;fe.add(s),K.c.push(()=>{fe.delete(s),r&&(i&&s.d(1),r())}),s.o(n)}}function oe(s){s&&s.c()}function ee(s,n,i){let{fragment:r,on_mount:o,on_destroy:d,after_update:m}=s.$$;r&&r.m(n,i),Le(()=>{let f=o.map(He).filter(bt);d?d.push(...f):se(f),s.$$.on_mount=[]}),m.forEach(Le)}function te(s,n){let i=s.$$;i.fragment!==null&&(se(i.on_destroy),i.fragment&&i.fragment.d(n),i.on_destroy=i.fragment=null,i.ctx=[])}function Lt(s,n){s.$$.dirty[0]===-1&&(ie.push(s),Ct(),s.$$.dirty.fill(0)),s.$$.dirty[n/31|0]|=1<<n%31}function Y(s,n,i,r,o,d,m=[-1]){let f=ue;ce(s);let c=s.$$={fragment:null,ctx:null,props:d,update:k,not_equal:o,bound:Pe(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:Pe(),dirty:m,skip_bound:!1},b=!1;if(c.ctx=i?i(s,n.props||{},(h,p,..._)=>{let T=_.length?_[0]:p;return c.ctx&&o(c.ctx[h],c.ctx[h]=T)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](T),b&&Lt(s,h)),p}):[],c.update(),b=!0,se(c.before_update),c.fragment=r?r(c.ctx):!1,n.target){if(n.hydrate){let h=yt(n.target);c.fragment&&c.fragment.l(h),h.forEach(A)}else c.fragment&&c.fragment.c();n.intro&&U(s.$$.fragment),ee(s,n.target,n.anchor),Qe()}ce(f)}var V=class{$destroy(){te(this,1),this.$destroy=k}$on(n,i){let r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(i),()=>{let o=r.indexOf(i);o!==-1&&r.splice(o,1)}}$set(n){this.$$set&&!vt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}};var ne=[];function F(s,n=k){let i,r=[];function o(f){if(Q(s,f)&&(s=f,i)){let c=!ne.length;for(let b=0;b<r.length;b+=1){let h=r[b];h[1](),ne.push(h,s)}if(c){for(let b=0;b<ne.length;b+=2)ne[b][0](ne[b+1]);ne.length=0}}}function d(f){o(f(s))}function m(f,c=k){let b=[f,c];return r.push(b),r.length===1&&(i=n(o)||k),f(s),()=>{let h=r.indexOf(b);h!==-1&&r.splice(h,1),r.length===0&&(i(),i=null)}}return{set:o,update:d,subscribe:m}}var qe=F([]),pe=F(0),me=F(0),he=F(null),ge=F(0);var Ge=F(["a","s","s","d","d","d","m","m","f","p","e"]),re=F([]);function*G(s,n){for(let i=s;i<=n;i++)yield i}function Xe(s){let n;return{c(){n=j(s[2])},m(i,r){N(i,n,r)},p(i,r){r&4&&B(n,i[2])},d(i){i&&A(n)}}}function Et(s){let n,i,r,o,d,m,f,c,b,h,p=s[2]&&Xe(s);return{c(){n=I("div"),i=I("span"),r=j(s[0]),o=O(),d=I("span"),d.textContent="\xA0=\xA0",m=O(),f=I("input"),c=O(),p&&p.c(),M(i,"class","question"),M(f,"class","answer svelte-1towznt"),M(f,"type","text"),M(n,"class","row svelte-1towznt")},m(_,T){N(_,n,T),C(n,i),C(i,r),C(n,o),C(n,d),C(n,m),C(n,f),le(f,s[3]),C(n,c),p&&p.m(n,null),b||(h=$(f,"input",s[5]),b=!0)},p(_,[T]){T&1&&B(r,_[0]),T&8&&f.value!==_[3]&&le(f,_[3]),_[2]?p?p.p(_,T):(p=Xe(_),p.c(),p.m(n,null)):p&&(p.d(1),p=null)},i:k,o:k,d(_){_&&A(n),p&&p.d(),b=!1,h()}}}function It(s,n,i){let r,o=k,d=()=>(o(),o=Z(c,p=>i(3,r=p)),c);s.$$.on_destroy.push(()=>o());let{question:m}=n,{answer:f}=n,{userAnswer:c}=n;d();let{answerSymbol:b}=n;function h(){r=this.value,c.set(r)}return s.$$set=p=>{"question"in p&&i(0,m=p.question),"answer"in p&&i(4,f=p.answer),"userAnswer"in p&&d(i(1,c=p.userAnswer)),"answerSymbol"in p&&i(2,b=p.answerSymbol)},[m,c,b,r,f,h]}var Ue=class extends V{constructor(n){super();Y(this,n,It,Et,Q,{question:0,answer:4,userAnswer:1,answerSymbol:2})}},Ve=Ue;var be=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function St(s,n,i){return i={path:n,exports:{},require:function(r,o){return Tt(r,o==null?i.path:o)}},s(i,i.exports),i.exports}function Tt(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var qt=St(function(s,n){(function(i,r){s.exports=r(i)})(typeof be!="undefined"?be:window||be.window||be.global,function(i){var r={},o="iziToast";document.querySelector("body");var d=!!/Mobi/.test(navigator.userAgent),m=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),f=typeof InstallTrigger!="undefined",c="ontouchstart"in document.documentElement,b=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],h={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},p=568,_={};r.children={};var T={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var v=function(a,l){l=l||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(a,l.bubbles,l.cancelable,l.detail),e};v.prototype=window.Event.prototype,window.CustomEvent=v}var x=function(a,l,e){if(Object.prototype.toString.call(a)==="[object Object]")for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&l.call(e,a[t],t,a);else if(a)for(var g=0,w=a.length;g<w;g++)l.call(e,a[g],g,a)},E=function(a,l){var e={};return x(a,function(t,g){e[g]=a[g]}),x(l,function(t,g){e[g]=l[g]}),e},z=function(a){var l=document.createDocumentFragment(),e=document.createElement("div");for(e.innerHTML=a;e.firstChild;)l.appendChild(e.firstChild);return l},W=function(a){var l=btoa(encodeURIComponent(a));return l.replace(/=/g,"")},S=function(a){return a.substring(0,1)=="#"||a.substring(0,3)=="rgb"||a.substring(0,3)=="hsl"},H=function(a){try{return btoa(atob(a))==a}catch(l){return!1}},X=function(){return{move:function(a,l,e,t){var g,w=.3,u=180;t!==0&&(a.classList.add(o+"-dragged"),a.style.transform="translateX("+t+"px)",t>0?(g=(u-t)/u,g<w&&l.hide(E(e,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),a,"drag")):(g=(u+t)/u,g<w&&l.hide(E(e,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),a,"drag")),a.style.opacity=g,g<w&&((m||f)&&(a.style.left=t+"px"),a.parentNode.style.opacity=w,this.stopMoving(a,null)))},startMoving:function(a,l,e,t){t=t||window.event;var g=c?t.touches[0].clientX:t.clientX,w=a.style.transform.replace("px)","");w=w.replace("translateX(","");var u=g-w;e.transitionIn&&a.classList.remove(e.transitionIn),e.transitionInMobile&&a.classList.remove(e.transitionInMobile),a.style.transition="",c?document.ontouchmove=function(y){y.preventDefault(),y=y||window.event;var L=y.touches[0].clientX,q=L-u;X.move(a,l,e,q)}:document.onmousemove=function(y){y.preventDefault(),y=y||window.event;var L=y.clientX,q=L-u;X.move(a,l,e,q)}},stopMoving:function(a,l){c?document.ontouchmove=function(){}:document.onmousemove=function(){},a.style.opacity="",a.style.transform="",a.classList.contains(o+"-dragged")&&(a.classList.remove(o+"-dragged"),a.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){a.style.transition=""},400))}}}();return r.setSetting=function(a,l,e){r.children[a][l]=e},r.getSetting=function(a,l){return r.children[a][l]},r.destroy=function(){x(document.querySelectorAll("."+o+"-overlay"),function(a,l){a.remove()}),x(document.querySelectorAll("."+o+"-wrapper"),function(a,l){a.remove()}),x(document.querySelectorAll("."+o),function(a,l){a.remove()}),this.children={},document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),_={}},r.settings=function(a){r.destroy(),_=a,T=E(T,a||{})},x(h,function(a,l){r[l]=function(e){var t=E(_,e||{});t=E(a,t||{}),this.show(t)}}),r.progress=function(a,l,e){var t=this,g=l.getAttribute("data-iziToast-ref"),w=E(this.children[g],a||{}),u=l.querySelector("."+o+"-progressbar div");return{start:function(){typeof w.time.REMAINING=="undefined"&&(l.classList.remove(o+"-reseted"),u!==null&&(u.style.transition="width "+w.timeout+"ms "+w.progressBarEasing,u.style.width="0%"),w.time.START=new Date().getTime(),w.time.END=w.time.START+w.timeout,w.time.TIMER=setTimeout(function(){clearTimeout(w.time.TIMER),l.classList.contains(o+"-closing")||(t.hide(w,l,"timeout"),typeof e=="function"&&e.apply(t))},w.timeout),t.setSetting(g,"time",w.time))},pause:function(){if(typeof w.time.START!="undefined"&&!l.classList.contains(o+"-paused")&&!l.classList.contains(o+"-reseted")){if(l.classList.add(o+"-paused"),w.time.REMAINING=w.time.END-new Date().getTime(),clearTimeout(w.time.TIMER),t.setSetting(g,"time",w.time),u!==null){var y=window.getComputedStyle(u),L=y.getPropertyValue("width");u.style.transition="none",u.style.width=L}typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}},resume:function(){typeof w.time.REMAINING!="undefined"?(l.classList.remove(o+"-paused"),u!==null&&(u.style.transition="width "+w.time.REMAINING+"ms "+w.progressBarEasing,u.style.width="0%"),w.time.END=new Date().getTime()+w.time.REMAINING,w.time.TIMER=setTimeout(function(){clearTimeout(w.time.TIMER),l.classList.contains(o+"-closing")||(t.hide(w,l,"timeout"),typeof e=="function"&&e.apply(t))},w.time.REMAINING),t.setSetting(g,"time",w.time)):this.start()},reset:function(){clearTimeout(w.time.TIMER),delete w.time.REMAINING,t.setSetting(g,"time",w.time),l.classList.add(o+"-reseted"),l.classList.remove(o+"-paused"),u!==null&&(u.style.transition="none",u.style.width="100%"),typeof e=="function"&&setTimeout(function(){e.apply(t)},10)}}},r.hide=function(a,l,e){typeof l!="object"&&(l=document.querySelector(l));var t=this,g=E(this.children[l.getAttribute("data-iziToast-ref")],a||{});g.closedBy=e||null,delete g.time.REMAINING,l.classList.add(o+"-closing"),function(){var y=document.querySelector("."+o+"-overlay");if(y!==null){var L=y.getAttribute("data-iziToast-ref");L=L.split(",");var q=L.indexOf(String(g.ref));q!==-1&&L.splice(q,1),y.setAttribute("data-iziToast-ref",L.join()),L.length===0&&(y.classList.remove("fadeIn"),y.classList.add("fadeOut"),setTimeout(function(){y.remove()},700))}}(),g.transitionIn&&l.classList.remove(g.transitionIn),g.transitionInMobile&&l.classList.remove(g.transitionInMobile),d||window.innerWidth<=p?g.transitionOutMobile&&l.classList.add(g.transitionOutMobile):g.transitionOut&&l.classList.add(g.transitionOut);var w=l.parentNode.offsetHeight;l.parentNode.style.height=w+"px",l.style.pointerEvents="none",(!d||window.innerWidth>p)&&(l.parentNode.style.transitionDelay="0.2s");try{var u=new CustomEvent(o+"-closing",{detail:g,bubbles:!0,cancelable:!0});document.dispatchEvent(u)}catch(y){console.warn(y)}setTimeout(function(){l.parentNode.style.height="0px",l.parentNode.style.overflow="",setTimeout(function(){delete t.children[g.ref],l.parentNode.remove();try{var y=new CustomEvent(o+"-closed",{detail:g,bubbles:!0,cancelable:!0});document.dispatchEvent(y)}catch(L){console.warn(L)}typeof g.onClosed!="undefined"&&g.onClosed.apply(null,[g,l,e])},1e3)},200),typeof g.onClosing!="undefined"&&g.onClosing.apply(null,[g,l,e])},r.show=function(a){var l=this,e=E(_,a||{});if(e=E(T,e),e.time={},e.id===null&&(e.id=W(e.title+e.message+e.color)),e.displayMode===1||e.displayMode=="once")try{if(document.querySelectorAll("."+o+"#"+e.id).length>0)return!1}catch(u){console.warn("["+o+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}if(e.displayMode===2||e.displayMode=="replace")try{x(document.querySelectorAll("."+o+"#"+e.id),function(u,y){l.hide(e,u,"replaced")})}catch(u){console.warn("["+o+"] Could not find an element with this selector: #"+e.id+". Try to set an valid id.")}e.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[e.ref]=e;var t={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:e.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};t.toast.setAttribute("data-iziToast-ref",e.ref),t.toast.appendChild(t.toastBody),t.toastCapsule.appendChild(t.toast),function(){if(t.toast.classList.add(o),t.toast.classList.add(o+"-opening"),t.toastCapsule.classList.add(o+"-capsule"),t.toastBody.classList.add(o+"-body"),t.toastTexts.classList.add(o+"-texts"),d||window.innerWidth<=p?e.transitionInMobile&&t.toast.classList.add(e.transitionInMobile):e.transitionIn&&t.toast.classList.add(e.transitionIn),e.class){var u=e.class.split(" ");x(u,function(y,L){t.toast.classList.add(y)})}e.id&&(t.toast.id=e.id),e.rtl&&(t.toast.classList.add(o+"-rtl"),t.toast.setAttribute("dir","rtl")),e.layout>1&&t.toast.classList.add(o+"-layout"+e.layout),e.balloon&&t.toast.classList.add(o+"-balloon"),e.maxWidth&&(isNaN(e.maxWidth)?t.toast.style.maxWidth=e.maxWidth:t.toast.style.maxWidth=e.maxWidth+"px"),(e.theme!==""||e.theme!=="light")&&t.toast.classList.add(o+"-theme-"+e.theme),e.color&&(S(e.color)?t.toast.style.background=e.color:t.toast.classList.add(o+"-color-"+e.color)),e.backgroundColor&&(t.toast.style.background=e.backgroundColor,e.balloon&&(t.toast.style.borderColor=e.backgroundColor))}(),function(){e.image&&(t.cover.classList.add(o+"-cover"),t.cover.style.width=e.imageWidth+"px",H(e.image.replace(/ /g,""))?t.cover.style.backgroundImage="url(data:image/png;base64,"+e.image.replace(/ /g,"")+")":t.cover.style.backgroundImage="url("+e.image+")",e.rtl?t.toastBody.style.marginRight=e.imageWidth+10+"px":t.toastBody.style.marginLeft=e.imageWidth+10+"px",t.toast.appendChild(t.cover))}(),function(){e.close?(t.buttonClose=document.createElement("button"),t.buttonClose.type="button",t.buttonClose.classList.add(o+"-close"),t.buttonClose.addEventListener("click",function(u){u.target,l.hide(e,t.toast,"button")}),t.toast.appendChild(t.buttonClose)):e.rtl?t.toast.style.paddingLeft="18px":t.toast.style.paddingRight="18px"}(),function(){e.progressBar&&(t.progressBar=document.createElement("div"),t.progressBarDiv=document.createElement("div"),t.progressBar.classList.add(o+"-progressbar"),t.progressBarDiv.style.background=e.progressBarColor,t.progressBar.appendChild(t.progressBarDiv),t.toast.appendChild(t.progressBar)),e.timeout&&(e.pauseOnHover&&!e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(u){l.progress(e,t.toast).pause()}),t.toast.addEventListener("mouseleave",function(u){l.progress(e,t.toast).resume()})),e.resetOnHover&&(t.toast.addEventListener("mouseenter",function(u){l.progress(e,t.toast).reset()}),t.toast.addEventListener("mouseleave",function(u){l.progress(e,t.toast).start()})))}(),function(){e.iconUrl?(t.icon.setAttribute("class",o+"-icon"),t.icon.setAttribute("src",e.iconUrl)):e.icon&&(t.icon.setAttribute("class",o+"-icon "+e.icon),e.iconText&&t.icon.appendChild(document.createTextNode(e.iconText)),e.iconColor&&(t.icon.style.color=e.iconColor)),(e.icon||e.iconUrl)&&(e.rtl?t.toastBody.style.paddingRight="33px":t.toastBody.style.paddingLeft="33px",t.toastBody.appendChild(t.icon))}(),function(){e.title.length>0&&(t.strong=document.createElement("strong"),t.strong.classList.add(o+"-title"),t.strong.appendChild(z(e.title)),t.toastTexts.appendChild(t.strong),e.titleColor&&(t.strong.style.color=e.titleColor),e.titleSize&&(isNaN(e.titleSize)?t.strong.style.fontSize=e.titleSize:t.strong.style.fontSize=e.titleSize+"px"),e.titleLineHeight&&(isNaN(e.titleSize)?t.strong.style.lineHeight=e.titleLineHeight:t.strong.style.lineHeight=e.titleLineHeight+"px")),e.message.length>0&&(t.p=document.createElement("p"),t.p.classList.add(o+"-message"),t.p.appendChild(z(e.message)),t.toastTexts.appendChild(t.p),e.messageColor&&(t.p.style.color=e.messageColor),e.messageSize&&(isNaN(e.titleSize)?t.p.style.fontSize=e.messageSize:t.p.style.fontSize=e.messageSize+"px"),e.messageLineHeight&&(isNaN(e.titleSize)?t.p.style.lineHeight=e.messageLineHeight:t.p.style.lineHeight=e.messageLineHeight+"px")),e.title.length>0&&e.message.length>0&&(e.rtl?t.strong.style.marginLeft="10px":e.layout!==2&&!e.rtl&&(t.strong.style.marginRight="10px"))}(),t.toastBody.appendChild(t.toastTexts);var g;(function(){e.inputs.length>0&&(t.inputs.classList.add(o+"-inputs"),x(e.inputs,function(u,y){t.inputs.appendChild(z(u[0])),g=t.inputs.childNodes,g[y].classList.add(o+"-inputs-child"),u[3]&&setTimeout(function(){g[y].focus()},300),g[y].addEventListener(u[1],function(L){var q=u[2];return q(l,t.toast,this,L)})}),t.toastBody.appendChild(t.inputs))})(),function(){e.buttons.length>0&&(t.buttons.classList.add(o+"-buttons"),x(e.buttons,function(u,y){t.buttons.appendChild(z(u[0]));var L=t.buttons.childNodes;L[y].classList.add(o+"-buttons-child"),u[2]&&setTimeout(function(){L[y].focus()},300),L[y].addEventListener("click",function(q){q.preventDefault();var dt=u[1];return dt(l,t.toast,this,q,g)})})),t.toastBody.appendChild(t.buttons)}(),e.message.length>0&&(e.inputs.length>0||e.buttons.length>0)&&(t.p.style.marginBottom="0"),(e.inputs.length>0||e.buttons.length>0)&&(e.rtl?t.toastTexts.style.marginLeft="10px":t.toastTexts.style.marginRight="10px",e.inputs.length>0&&e.buttons.length>0&&(e.rtl?t.inputs.style.marginLeft="8px":t.inputs.style.marginRight="8px")),function(){t.toastCapsule.style.visibility="hidden",setTimeout(function(){var u=t.toast.offsetHeight,y=t.toast.currentStyle||window.getComputedStyle(t.toast),L=y.marginTop;L=L.split("px"),L=parseInt(L[0]);var q=y.marginBottom;q=q.split("px"),q=parseInt(q[0]),t.toastCapsule.style.visibility="",t.toastCapsule.style.height=u+q+L+"px",setTimeout(function(){t.toastCapsule.style.height="auto",e.target&&(t.toastCapsule.style.overflow="visible")},500),e.timeout&&l.progress(e,t.toast).start()},100)}(),function(){var u=e.position;if(e.target)t.wrapper=document.querySelector(e.target),t.wrapper.classList.add(o+"-target"),e.targetFirst?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule);else{if(b.indexOf(e.position)==-1){console.warn("["+o+`] Incorrect position.
It can be \u203A `+b);return}d||window.innerWidth<=p?e.position=="bottomLeft"||e.position=="bottomRight"||e.position=="bottomCenter"?u=o+"-wrapper-bottomCenter":e.position=="topLeft"||e.position=="topRight"||e.position=="topCenter"?u=o+"-wrapper-topCenter":u=o+"-wrapper-center":u=o+"-wrapper-"+u,t.wrapper=document.querySelector("."+o+"-wrapper."+u),t.wrapper||(t.wrapper=document.createElement("div"),t.wrapper.classList.add(o+"-wrapper"),t.wrapper.classList.add(u),document.body.appendChild(t.wrapper)),e.position=="topLeft"||e.position=="topCenter"||e.position=="topRight"?t.wrapper.insertBefore(t.toastCapsule,t.wrapper.firstChild):t.wrapper.appendChild(t.toastCapsule)}isNaN(e.zindex)?console.warn("["+o+"] Invalid zIndex."):t.wrapper.style.zIndex=e.zindex}(),function(){e.overlay&&(document.querySelector("."+o+"-overlay.fadeIn")!==null?(t.overlay=document.querySelector("."+o+"-overlay"),t.overlay.setAttribute("data-iziToast-ref",t.overlay.getAttribute("data-iziToast-ref")+","+e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1)):(t.overlay.classList.add(o+"-overlay"),t.overlay.classList.add("fadeIn"),t.overlay.style.background=e.overlayColor,t.overlay.setAttribute("data-iziToast-ref",e.ref),!isNaN(e.zindex)&&e.zindex!==null&&(t.overlay.style.zIndex=e.zindex-1),document.querySelector("body").appendChild(t.overlay)),e.overlayClose?(t.overlay.removeEventListener("click",{}),t.overlay.addEventListener("click",function(u){l.hide(e,t.toast,"overlay")})):t.overlay.removeEventListener("click",{}))}(),function(){if(e.animateInside){t.toast.classList.add(o+"-animateInside");var u=[200,100,300];(e.transitionIn=="bounceInLeft"||e.transitionIn=="bounceInRight")&&(u=[400,200,400]),e.title.length>0&&setTimeout(function(){t.strong.classList.add("slideIn")},u[0]),e.message.length>0&&setTimeout(function(){t.p.classList.add("slideIn")},u[1]),(e.icon||e.iconUrl)&&setTimeout(function(){t.icon.classList.add("revealIn")},u[2]);var y=150;e.buttons.length>0&&t.buttons&&setTimeout(function(){x(t.buttons.childNodes,function(L,q){setTimeout(function(){L.classList.add("revealIn")},y),y=y+150})},e.inputs.length>0?150:0),e.inputs.length>0&&t.inputs&&(y=150,x(t.inputs.childNodes,function(L,q){setTimeout(function(){L.classList.add("revealIn")},y),y=y+150}))}}(),e.onOpening.apply(null,[e,t.toast]);try{var w=new CustomEvent(o+"-opening",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(w)}catch(u){console.warn(u)}setTimeout(function(){t.toast.classList.remove(o+"-opening"),t.toast.classList.add(o+"-opened");try{var u=new CustomEvent(o+"-opened",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(u)}catch(y){console.warn(y)}e.onOpened.apply(null,[e,t.toast])},1e3),e.drag&&(c?(t.toast.addEventListener("touchstart",function(u){X.startMoving(this,l,e,u)},!1),t.toast.addEventListener("touchend",function(u){X.stopMoving(this,u)},!1)):(t.toast.addEventListener("mousedown",function(u){u.preventDefault(),X.startMoving(this,l,e,u)},!1),t.toast.addEventListener("mouseup",function(u){u.preventDefault(),X.stopMoving(this,u)},!1))),e.closeOnEscape&&document.addEventListener("keyup",function(u){u=u||window.event,u.keyCode==27&&l.hide(e,t.toast,"esc")}),e.closeOnClick&&t.toast.addEventListener("click",function(u){l.hide(e,t.toast,"toast")}),l.toast=t.toast},r})}),ke=qt;var ve=(s,n)=>(s=Math.ceil(s),n=Math.floor(n),Math.floor(Math.random()*(n-s+1))+s);var Ae=class{constructor(){this.question=void 0,this.answer=void 0,this.random=n=>ve(1,n)}easyDigits(n=100,i=100){return{digitA:this.random(n),digitB:this.random(i)}}mediumDigits(n=500,i=500){return{digitA:this.random(n),digitB:this.random(i)}}hardDigits(n=1e3,i=1e3){return{digitA:this.random(n),digitB:this.random(i)}}chooseDigits(n){return n==="easy"?this.easyDigits():n==="medium"?this.mediumDigits():this.hardDigits()}},D=Ae;var Me=class extends D{constructor(){super()}mathFn(n){let{digitA:i,digitB:r}=this.chooseDigits(n);return this.answer=i+r,this.question=`${i} + ${r}`,{question:this.question,answer:this.answer}}},Ke=Me;var Ne=class extends D{constructor(){super()}easyDigits(){return super.easyDigits(100,50)}mathFn(n){let{digitA:i,digitB:r}=this.chooseDigits(n);return this.answer=i-r,this.question=`${i} - ${r}`,{question:this.question,answer:this.answer}}},Je=Ne;var je=class extends D{constructor(){super()}easyDigits(n=12,i=12){return super.easyDigits(n,i)}mediumDigits(n=25,i=25){return super.mediumDigits(n,i)}hardDigits(n=100,i=100){return super.hardDigits(n,i)}mathFn(n){let{digitA:i,digitB:r}=this.chooseDigits(n);return this.answer=i*r,this.question=`${i} x ${r}`,{question:this.question,answer:this.answer}}},Ye=je;var ze=class extends D{constructor(){super()}mathFn(n){let{digitA:i,digitB:r}=this.chooseDigits(n),o=i/r;return this.answer=o.toString().length>2?Number(o.toFixed(2)):o,this.question=`${i} / ${r}`,{question:this.question,answer:this.answer}}},Ze=ze;var Oe=class extends D{constructor(){super();this.answerSymbol="%"}mathFn(n){let{digitA:i,digitB:r}=this.chooseDigits(n);function o(d,m){let f=100*d/m;return f.toString().length>2?Number(f.toFixed(2)):f}return this.answer=o(i,r),this.question=`${i} is what percent of ${r}?`,{question:this.question,answer:this.answer,symbol:this.answerSymbol}}},$e=Oe;var De=class extends D{constructor(){super()}mathFn(n=this.random(9)){let i=[...G(1,n)];return this.answer=i.reduce((r,o)=>r*o),this.question=`${n}!`,{question:this.question,answer:this.answer}}},et=De;var Re=class extends D{constructor(){super()}mathFn(){let n=[...G(0,10),2,2,2,2,2,2,2,2,2],i=[...G(0,4),2,2,2],r=n[Math.floor(Math.random()*n.length)],o=i[Math.floor(Math.random()*i.length)];return this.answer=r**o,this.question=`${r} ^ ${o}`,{question:this.question,answer:this.answer}}},tt=Re;function ye(s,n,i,r=!1){let o=[];for(let d=0;d<s;d++)switch(n[ve(0,n.length-1)]){case"a":{o.push(new Ke().mathFn(i));break}case"s":{o.push(new Je().mathFn(i));break}case"m":{o.push(new Ye().mathFn(i));break}case"d":{o.push(new Ze().mathFn(i));break}case"p":{o.push(new $e().mathFn(i));break}case"f":{o.push(new et().mathFn());break}case"e":{o.push(new tt().mathFn());break}}return r&&console.log({problems:o}),o}function nt(s,n,i){let r=s.slice();return r[20]=n[i],r}function st(s,n,i){let r=s.slice();return r[17]=n[i],r[19]=i,r}function kt(s){let n,i,r,o,d,m;return{c(){n=I("div"),i=I("h3"),i.textContent="Sorry No More Tries Left",r=O(),o=I("button"),o.textContent="Try Again",M(o,"class","btn")},m(f,c){N(f,n,c),C(n,i),C(n,r),C(n,o),d||(m=$(o,"click",s[6]),d=!0)},p:k,i:k,o:k,d(f){f&&A(n),d=!1,m()}}}function At(s){var T;let n,i,r,o,d,m=s[4].length+1+"",f,c,b,h,p=[...G(1,s[3])].sort(ot),_=[];for(let v=0;v<p.length;v+=1)_[v]=it(nt(s,p,v));return r=new Ve({props:{question:s[2][0].question,answer:s[2][0].answer,userAnswer:he,answerSymbol:(T=s[2][0])==null?void 0:T.symbol}}),{c(){n=I("div");for(let v=0;v<_.length;v+=1)_[v].c();i=O(),oe(r.$$.fragment),o=O(),d=I("div"),f=j(m),c=j(" / "),b=j(s[0]),M(n,"class","row")},m(v,x){N(v,n,x);for(let E=0;E<_.length;E+=1)_[E].m(n,null);N(v,i,x),ee(r,v,x),N(v,o,x),N(v,d,x),C(d,f),C(d,c),C(d,b),h=!0},p(v,x){var z;if(x&8){let W=p.length;p=[...G(1,v[3])].sort(ot);let S;for(S=W;S<p.length;S+=1){let H=nt(v,p,S);_[S]||(_[S]=it(H),_[S].c(),_[S].m(n,null))}for(S=p.length;S<W;S+=1)_[S].d(1);_.length=p.length}let E={};x&4&&(E.question=v[2][0].question),x&4&&(E.answer=v[2][0].answer),x&4&&(E.answerSymbol=(z=v[2][0])==null?void 0:z.symbol),r.$set(E),(!h||x&16)&&m!==(m=v[4].length+1+"")&&B(f,m),(!h||x&1)&&B(b,v[0])},i(v){h||(U(r.$$.fragment,v),h=!0)},o(v){J(r.$$.fragment,v),h=!1},d(v){v&&A(n),ae(_,v),v&&A(i),te(r,v),v&&A(o),v&&A(d)}}}function Mt(s){let n,i,r,o=s[4],d=[];for(let m=0;m<o.length;m+=1)d[m]=rt(st(s,o,m));return{c(){n=I("h3"),n.textContent="Congratulations",i=O();for(let m=0;m<d.length;m+=1)d[m].c();r=_e()},m(m,f){N(m,n,f),N(m,i,f);for(let c=0;c<d.length;c+=1)d[c].m(m,f);N(m,r,f)},p(m,f){if(f&16){o=m[4];let c;for(c=0;c<o.length;c+=1){let b=st(m,o,c);d[c]?d[c].p(b,f):(d[c]=rt(b),d[c].c(),d[c].m(r.parentNode,r))}for(;c<d.length;c+=1)d[c].d(1);d.length=o.length}},i:k,o:k,d(m){m&&A(n),m&&A(i),ae(d,m),m&&A(r)}}}function it(s){let n;return{c(){n=I("div"),n.innerHTML="<span>\xA0</span>",M(n,"class","try-indicator svelte-bga17v")},m(i,r){N(i,n,r)},d(i){i&&A(n)}}}function rt(s){let n,i,r,o,d=s[17].question+"",m,f,c,b,h=s[17].answer+"",p,_,T,v,x=s[17].tries+"",E,z,W;return{c(){n=I("div"),i=I("div"),r=I("span"),o=j("Problem: "),m=j(d),f=O(),c=I("span"),b=j("Answer: "),p=j(h),_=O(),T=I("span"),v=j("Tries: "),E=j(x),z=O(),M(i,"class","column svelte-bga17v"),M(n,"class","slide-show"),M(n,"data-index",W=s[19])},m(S,H){N(S,n,H),C(n,i),C(i,r),C(r,o),C(r,m),C(i,f),C(i,c),C(c,b),C(c,p),C(i,_),C(i,T),C(T,v),C(T,E),C(n,z)},p(S,H){H&16&&d!==(d=S[17].question+"")&&B(m,d),H&16&&h!==(h=S[17].answer+"")&&B(p,h),H&16&&x!==(x=S[17].tries+"")&&B(E,x)},d(S){S&&A(n)}}}function Nt(s){let n,i,r,o,d,m,f=[Mt,At,kt],c=[];function b(h,p){return h[4].length===h[0]?0:h[3]>=1?1:2}return i=b(s,-1),r=c[i]=f[i](s),{c(){n=I("div"),r.c(),M(n,"class","card svelte-bga17v")},m(h,p){N(h,n,p),c[i].m(n,null),o=!0,d||(m=$(window,"keydown",s[7]),d=!0)},p(h,[p]){let _=i;i=b(h,p),i===_?c[i].p(h,p):(Te(),J(c[_],1,1,()=>{c[_]=null}),Se(),r=c[i],r?r.p(h,p):(r=c[i]=f[i](h),r.c()),U(r,1),r.m(n,null))},i(h){o||(U(r),o=!0)},o(h){J(r),o=!1},d(h){h&&A(n),c[i].d(),d=!1,m()}}}var ot=(s,n)=>n-s;function jt(s,n,i){let r,o,d,m,f,c,b=k,h=()=>(b(),b=Z(E,a=>i(13,c=a)),E),p,_;P(s,re,a=>i(2,r=a)),P(s,Ge,a=>i(10,o=a)),P(s,me,a=>i(11,m=a)),P(s,pe,a=>i(12,f=a)),P(s,qe,a=>i(4,p=a)),P(s,he,a=>i(14,_=a)),s.$$.on_destroy.push(()=>b());let{totalQuestions:T=10}=n,{triesPerQuestion:v=3}=n,{difficulty:x="easy"}=n,{time:E}=n;h();let z=F(v);P(s,z,a=>i(3,d=a));let W=()=>{R(re,r=[...ye(T,o,x,!0)],r),R(z,d=v,d),R(me,m=0,m),R(pe,f=0,f),R(E,c=0,c)},S=()=>{ke.error({title:"Incorrect",message:"Try Again",position:"topRight"}),me.update(a=>a+1),z.update(a=>a-1)},H=()=>{ke.success({title:"Correct",message:"Great Job!",position:"topRight"});let a=()=>({question:r[0].question,answer:r[0].answer,tries:v-d+1,timeStamp:c});R(qe,p=[...p,a()],p),R(re,r=[...r.slice(1)],r),R(he,_=null,_),pe.update(l=>l+1),R(z,d=v,d)},X=a=>{a.key==="Enter"&&(d>=1?Number(_)===r[0].answer?H():S():W())};return R(re,r=[...ye(T,o,x,!0)],r),s.$$set=a=>{"totalQuestions"in a&&i(0,T=a.totalQuestions),"triesPerQuestion"in a&&i(8,v=a.triesPerQuestion),"difficulty"in a&&i(9,x=a.difficulty),"time"in a&&h(i(1,E=a.time))},[T,E,r,d,p,z,W,X,v,x]}var at=class extends V{constructor(n){super();Y(this,n,jt,Nt,Q,{totalQuestions:0,triesPerQuestion:8,difficulty:9,time:1})}},lt=at;function zt(s){let n,i,r,o,d,m,f,c,b;return r=new lt({props:{time:ge}}),{c(){n=I("div"),i=I("header"),oe(r.$$.fragment),o=O(),d=I("footer"),m=I("p"),f=I("code"),c=j(s[0]),M(i,"class","App-header svelte-ed9oo3"),M(f,"class","svelte-ed9oo3"),M(m,"class","svelte-ed9oo3"),M(n,"class","App svelte-ed9oo3")},m(h,p){N(h,n,p),C(n,i),ee(r,i,null),C(n,o),C(n,d),C(d,m),C(m,f),C(f,c),b=!0},p(h,[p]){(!b||p&1)&&B(c,h[0])},i(h){b||(U(r.$$.fragment,h),b=!0)},o(h){J(r.$$.fragment,h),b=!1},d(h){h&&A(n),te(r)}}}function Ot(s,n,i){let r;return P(s,ge,o=>i(0,r=o)),Ce(()=>{let o=setInterval(()=>ge.update(d=>d+1),1e3);return()=>{clearInterval(o)}}),[r]}var ut=class extends V{constructor(n){super();Y(this,n,Ot,zt,Q,{})}},ct=ut;var Dt={};Dt.env=we;var Rt=new ct({target:document.body}),Bt=Rt;export{Bt as default};
