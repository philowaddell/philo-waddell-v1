(self.webpackChunkphilo_waddell_v1=self.webpackChunkphilo_waddell_v1||[]).push([[886],{648:function(t,e,n){var r=n(7854),i=n(1694),a=n(614),o=n(4326),l=n(5112)("toStringTag"),c=r.Object,s="Arguments"==o(function(){return arguments}());t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=c(t),l))?n:s?o(e):"Object"==(r=o(e))&&a(e.callee)?"Arguments":r}},6135:function(t,e,n){"use strict";var r=n(4948),i=n(3070),a=n(9114);t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,a(0,n)):t[o]=n}},9974:function(t,e,n){var r=n(1702),i=n(9662),a=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:a?a(t,e):function(){return t.apply(e,arguments)}}},1246:function(t,e,n){var r=n(648),i=n(8173),a=n(7497),o=n(5112)("iterator");t.exports=function(t){if(null!=t)return i(t,o)||i(t,"@@iterator")||a[r(t)]}},8554:function(t,e,n){var r=n(7854),i=n(6916),a=n(9662),o=n(9670),l=n(6330),c=n(1246),s=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(a(n))return o(i(n,t));throw s(l(t)+" is not iterable")}},7659:function(t,e,n){var r=n(5112),i=n(7497),a=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[a]===t)}},408:function(t,e,n){var r=n(7854),i=n(9974),a=n(6916),o=n(9670),l=n(6330),c=n(7659),s=n(6244),u=n(7976),d=n(8554),f=n(1246),p=n(9212),g=r.TypeError,m=function(t,e){this.stopped=t,this.result=e},v=m.prototype;t.exports=function(t,e,n){var r,x,h,b,Z,y,w,k=n&&n.that,j=!(!n||!n.AS_ENTRIES),z=!(!n||!n.IS_ITERATOR),N=!(!n||!n.INTERRUPTED),E=i(e,k),O=function(t){return r&&p(r,"normal",t),new m(!0,t)},S=function(t){return j?(o(t),N?E(t[0],t[1],O):E(t[0],t[1])):N?E(t,O):E(t)};if(z)r=t;else{if(!(x=f(t)))throw g(l(t)+" is not iterable");if(c(x)){for(h=0,b=s(t);b>h;h++)if((Z=S(t[h]))&&u(v,Z))return Z;return new m(!1)}r=d(t,x)}for(y=r.next;!(w=a(y,r)).done;){try{Z=S(w.value)}catch(D){p(r,"throw",D)}if("object"==typeof Z&&Z&&u(v,Z))return Z}return new m(!1)}},9212:function(t,e,n){var r=n(6916),i=n(9670),a=n(8173);t.exports=function(t,e,n){var o,l;i(t);try{if(!(o=a(t,"return"))){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){l=!0,o=c}if("throw"===e)throw n;if(l)throw o;return i(o),n}},7497:function(t){t.exports={}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},8559:function(t,e,n){var r=n(2109),i=n(408),a=n(6135);r({target:"Object",stat:!0},{fromEntries:function(t){var e={};return i(t,(function(t,n){a(e,t,n)}),{AS_ENTRIES:!0}),e}})},7385:function(t,e,n){"use strict";n.d(e,{dD:function(){return a},mu:function(){return i}});var r=n(7294);var i=function(t){var e=r.useState(0),n=e[0],i=e[1],a=(0,r.useRef)(!1);(0,r.useEffect)((function(){t&&t.addEventListener("wheel",(function(t){0!==t.deltaY&&a.current&&(o(),i(Math.sign(t.deltaY)))}))}),[t]);var o=function(){a.current=!1};return[n,function(){i(0),a.current=!0}]};function a(){var t=r.useState(void 0),e=t[0],n=t[1];return r.useEffect((function(){var t=void 0===window.navigator?"":navigator.userAgent,e=Boolean(t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));n(e)}),[]),{isMobile:e}}},6198:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return J}});var r=n(7462),i=n(7294),a=n(1756),o=n(3431),l=function(t){var e=t.current,n=t.children;return(0,o.tZ)(i.Fragment,null,(0,o.tZ)("div",{id:"root"},(0,o.tZ)(a.Z,{current:e},n)))},c=n(6771);var s=(0,c.Z)("header",{target:"e1eycll30"})({name:"fjbttp",styles:"grid-area:1/1/1/4;z-index:1"}),u=function(t){return(0,o.tZ)(s,null,(0,o.tZ)(m,t))},d=n(448);var f=(0,c.Z)("nav",{target:"e1wk70og2"})("display:grid;grid:1fr/1fr 7fr;padding:0px 40px;height:100px;align-items:center;.links-outer{grid-area:1/2;justify-self:flex-end;ol{padding:0;margin:0px ",(function(t){return t.current?"150px":"0px"})," 0px 0px;transition:all 250ms 1200ms cubic-bezier(0.645, 0.045, 0.355, 1);li{display:inline;margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-md);}}}.resume-button{grid-area:1/2;justify-self:flex-end;}"),p=(0,c.Z)("button",{target:"e1wk70og1"})("color:",(function(t){return t.active?"var(--highlight)":"var(--text2)"}),";background-color:transparent;padding:0.75rem 1rem;border:none;margin-right:10px;cursor:pointer;transition:var(--transition);&:hover{color:var(--highlight);}&:before{content:'0' counter(item) '.';margin-right:5px;color:var(--highlight);transition:var(--transition);}"),g=(0,c.Z)("button",{target:"e1wk70og0"})({name:"r322f3",styles:"justify-self:center;grid-area:1/1;color:var(--highlight);font-size:var(--fz-xl);background-color:transparent;width:70px;height:70px;border:2px solid var(--highlight);border-radius:35px;padding:0.75rem 1rem;cursor:pointer;transition:var(--transition);&:hover{background-color:var(--tint);outline:none;}"}),m=function(t){var e=t.current,n=t.setIncrement,r=i.useState(0),a=r[0],l=r[1],c=i.useState(!1),s=c[0],u=c[1],m=(0,i.useRef)(null);(0,i.useEffect)((function(){l(e)}),[e]);return(0,o.tZ)(f,{current:e,active:a,onTransitionEnd:function(t){t.target===m.current&&e>0&&u(!0)}},(0,o.tZ)(g,{onClick:function(){n(0-e)}},"PW"),(0,o.tZ)("div",{className:"links-outer"},(0,o.tZ)("ol",{ref:m},d.navLinks&&d.navLinks.map((function(t,r){t.url;var i=t.name;return(0,o.tZ)("li",{key:r},(0,o.tZ)(p,{onClick:function(){return n((t=r+1)-e),void l(t);var t},active:a===r+1},i))})))),(0,o.tZ)(Y,{current:e,visible:s,setVisible:u}))};var v=n(7385),x=["id","heading","current","setCurrent","next","increment","setIncrement"],h=(0,c.Z)("section",{target:"eo73fwq0"})("id:",(function(t){return t.id?t.id:void 0}),";display:flex;flex-direction:column;grid-area:1/1/-1/-1;height:100%;width:100%;justify-content:center;animation:",(function(t){return t.animation})," 1s ease forwards;"),b={entrance:"slidein-bottom",exit:"slideout-top"},Z={entrance:"slidein-top",exit:"slideout-bottom"},y="slidein-right",w=function(t){var e=t.id,n=t.heading,r=t.current,a=t.setCurrent,l=t.next,c=t.increment,s=t.setIncrement,u=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,x),d=i.useState(),f=d[0],p=d[1],g=i.useState("none"),m=g[0],w=g[1],k=i.useState(!1),j=k[0],z=k[1],N=(0,v.mu)(f),O=N[0],S=N[1],D=(0,i.useCallback)((function(t){p(t)}),[]);(0,i.useEffect)((function(){r===e&&(C(),z(!0))}),[r]),(0,i.useEffect)((function(){if(r===e)return r+O<0||r+O>4?S():void s(O)}),[O]),(0,i.useEffect)((function(){r===e&&0!==c&&(l.current=r+c,C())}),[c]);var I=function(){S(),s(0)},P=function(){z(!1),a(l.current)},C=function(){return l.current===r&&c<0?w(Z.entrance):l.current===r&&c>0?w(b.entrance):l.current!==r&&c>0?w(b.exit):l.current!==r&&c<0?w(Z.exit):l.current===r&&0===c?w(y):"none"};return(0,o.tZ)(i.Fragment,null,j&&(0,o.tZ)(h,{id:e,ref:D,animation:m,onAnimationEnd:function(t){var n=t.animationName;if(r===e)return n===y||n===b.entrance||n===Z.entrance?I():n===b.exit||n===Z.exit?P():void 0}},(0,o.tZ)(E,{sectionID:e,heading:n},u.children)))},k=n(396);var j=(0,c.Z)("div",{target:"eg58ukk0"})({name:"1rbbtiy",styles:"position:relative;.wrapper{z-index:0;display:inline-flex;position:relative;border-radius:var(--border-radius);&:hover,&:focus{background:transparent;.image{filter:none;mix-blend-mode:normal;}}.image{z-index:-1;position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);top:0;left:0;background-color:var(--primary1);mix-blend-mode:screen;}}"}),z=function(t){var e=t.image,n=t.alt;return(0,o.tZ)(j,null,(0,o.tZ)("div",{className:"wrapper"},(0,o.tZ)(k.G,{className:"image",image:(0,k.d)(e),alt:n||""})))},N=(0,c.Z)("div",{target:"e133qmsh0"})("padding:0% 15%;.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px, 5vw, var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;counter-increment:section;content:'0' '",(function(t){return t.sectionID||"x"}),"' '.';margin-right:10px;color:var(--highlight);font-family:var(--font-mono);font-size:clamp(var(--fz-md), 3vw, var(--fz-xl));font-weight:400;@media (max-width: 480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:'';display:block;position:relative;top:-5px;width:100%;height:1px;margin-left:20px;background-color:var(--text1);}}"),E=function(t){var e=t.sectionID,n=t.heading,r=t.children;return(0,o.tZ)(N,{sectionID:e},n&&(0,o.tZ)("h2",{className:"numbered-heading"},n),r)};var O=(0,c.Z)("div",{target:"e5sox390"})({name:"qf4xjf",styles:".sub-heading{color:var(--text2);font-size:clamp(12px, 2.5vw, 21px);}"}),S=function(t){return(0,o.tZ)(w,t,(0,o.tZ)(O,null,(0,o.tZ)("h1",{className:"big-heading"},"Philo Waddell"),(0,o.tZ)("h2",{className:"sub-heading"},"Full Stack Engineer & Machine Learning Enthusiast"),(0,o.tZ)(Y,{current:1,visible:!0,setVisible:function(){return!0}})))},D=n(2102),I=n(1597);var P,C=(0,c.Z)("div",{target:"e1n1ucvc0"})({name:"6nkbc9",styles:".about-text{font-size:var(--fz-xl);color:var(--text2);ul{display:grid;grid-template-columns:repeat(3, minmax(140px, 200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-md);&:before{content:'▹';position:absolute;left:0;color:var(--highlight);font-size:var(--fz-md);line-height:12px;}}}}"}),A=function(t){var e=(0,I.K2)("2560819558").allMdx.nodes[0],n=e.frontmatter,i=e.body,a=n.heading;return(0,o.tZ)(w,(0,r.Z)({heading:a},t),(0,o.tZ)(C,null,(0,o.tZ)("div",{className:"about-text"},(0,o.tZ)(D.MDXRenderer,null,i))))};n(8559);var M=(0,c.Z)("li",{target:"ecrkh8w0"})("display:flex;margin:15px 20px 15px 20px;animation:fadeInUp 500ms ",(function(t){return t.transitionDelay||"1500"}),"ms ease 1 both;.skill-title{color:var(--highlight);font-family:var(--font-mono);margin:0px;min-width:130px;}.skill-bar-outer{display:flex;flex-grow:1;.skill-bar-inner{background:var(--highlight);width:0px;height:2px;border-radius:10px/10px;align-self:center;animation:",(function(t){return R(t.width)})," 1s ",(function(t){return t.transitionDelay+500}),"ms cubic-bezier(0.27, 0.63, 0.36, 1) 1 forwards;}}.skill-percent{font-size:var(--fz-md);color:var(--highlight);}"),R=function(t){return(0,o.F4)(P||(e=["\n  from { width: 0px; }\n  to { width: ","%; }\n"],n||(n=e.slice(0)),e.raw=n,P=e),t);var e,n},T=function(t){var e=t.transitionDelay,n=t.skill,r=t.width;return(0,o.tZ)(M,{transitionDelay:e,width:r},(0,o.tZ)("h5",{className:"skill-title"},n),(0,o.tZ)("div",{className:"skill-bar-outer"},(0,o.tZ)("div",{className:"skill-bar-inner"})))};var B=(0,c.Z)("div",{target:"e1r0jigy0"})({name:"qh0e13",styles:"display:grid;grid:auto/5fr 4fr;.experience-skills{grid-area:1/2/3/3;.skills-heading{font-family:var(--font-mono);padding-bottom:15px;color:var(--highlight);&:after{content:'';display:block;position:relative;bottom:-10px;width:100%;height:1px;background-color:var(--highlight);}}ul{display:flex;flex-direction:column;padding:0px;margin:0px 0px 0px 40px;list-style-type:none;li{margin-left:0px;}}}.experience-text{font-size:var(--fz-xl);color:var(--text2);}.experience-tools{grid-area:2/1/3/2;display:grid;grid:auto/repeat(5, 1fr);align-items:center;justify-content:center;.tool-logo{justify-self:center;padding:10px 10px 0px 10px;}}"}),_=function(t){var e=(0,I.K2)("2160304737").allMdx.nodes[0],n=e.frontmatter,i=e.body,a=n.heading,l=n.skills,c=n.tools,s=Object.fromEntries(l.map((function(t){return t.split(",")})));return(0,o.tZ)(w,(0,r.Z)({heading:a},t),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"experience-text"},(0,o.tZ)(D.MDXRenderer,null,i)),(0,o.tZ)("div",{className:"experience-skills"},(0,o.tZ)("ul",null,(0,o.tZ)("h3",{className:"skills-heading"},"Languages"),Object.entries(s).map((function(t,e){var n=t[0],r=t[1];return(0,o.tZ)(T,{key:e,transitionDelay:1500,skill:n,width:r})})))),(0,o.tZ)("div",{className:"experience-tools"},c.map((function(t,e){return(0,o.tZ)("div",{className:"tool-logo",key:e},(0,o.tZ)(z,{key:e,image:t}))})))))},F=n(4942),L=function(){return(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github"},(0,o.tZ)("title",null,"GitHub"),(0,o.tZ)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))},q=(0,c.Z)("div",{target:"e1rp2pjq0"})("display:grid;grid:1fr/repeat(6, 1fr);height:380px;animation:",(function(t){return t.animation})," 1s ease forwards;.project-image{z-index:1;grid-area:1/4/1/7;align-self:center;}.project-content{z-index:2;grid-area:1/1/1/5;text-align:left;align-self:center;.project-title{display:inline-flex;margin-bottom:20px;.title-text{margin:0px 20px 0px 0px;font-size:clamp(24px, 5vw, 28px);color:var(--text1);}a{align-self:center;svg{width:20px;height:20px;color:var(--highlight);}}}.project-description{padding:25px;font-size:var(--fz-xl);color:var(--text2);background-color:var(--primary2);border-radius:var(--border-radius);}.box-shadow{box-shadow:0 10px 30px -15px var(--shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--shadow);}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--text2);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width: 768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--text1);}}}}"),V=function(t){var e=t.id,n=t.totalProjects,r=t.data,a=t.current,l=t.setCurrent,c=t.increment,s=t.setIncrement,u=i.useState(!1),d=u[0],f=u[1],p=i.useState(!1),g=p[0],m=p[1],v=r.title,x=r.body,h=r.github,b=r.image,Z=r.imageAlt,y=r.tech;(0,i.useEffect)((function(){a===e&&(m(!0),f(!0))}),[a,e]);return(0,o.tZ)(i.Fragment,null,d&&(0,o.tZ)(q,{animation:function(){return g&&1===c?"slidein-right":g||1!==c?g||-1!==c?g&&-1===c?"slidein-left":"none":"slideout-right":"slideout-left"},onAnimationEnd:function(){return function(){if(g)return s(0);f(!1),l((function(t){return t+c}))}()}},(0,o.tZ)("div",{className:"project-content"},(0,o.tZ)("div",{className:"project-title"},(0,o.tZ)("h3",{className:"title-text"},v),(0,o.tZ)("a",{href:h,target:"_blank",rel:"noreferrer"},(0,o.tZ)(L,null))),(0,o.tZ)("div",{className:"project-description box-shadow"},(0,o.tZ)(D.MDXRenderer,null,x)),(0,o.tZ)("ul",{className:"project-tech-list"},y&&y.map((function(t,e){return(0,o.tZ)("li",{key:e},t)}))),(0,o.tZ)("div",{className:"project-links"}),(0,o.tZ)("div",{className:"project-nav"},a>0&&(0,o.tZ)("button",{className:"smallButton",onClick:function(){return m(!1),void s(-1)}},"Prev"),a<n-1&&(0,o.tZ)("button",{className:"smallButton",onClick:function(){return m(!1),void s(1)}},"Next"))),(0,o.tZ)("div",{className:"project-image"},(0,o.tZ)(z,{image:b,alt:Z}))))};function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){(0,F.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W=function(t){var e=i.useState(0),n=e[0],a=e[1],l=i.useState(0),c=l[0],s=l[1],u=(0,I.K2)("4159063897").allMdx.edges;return(0,o.tZ)(w,(0,r.Z)({heading:"Projects"},t),u.map((function(t,e){var r=t.node,i=r.frontmatter,l=r.body,d=i.order;return(0,o.tZ)(V,{key:e,id:d,totalProjects:u.length,data:U(U({},i),{},{body:l}),current:n,setCurrent:a,increment:c,setIncrement:s})})))};var X=(0,c.Z)("div",{target:"e2yd77d0"})({name:"17o31zp",styles:"display:grid;justify-items:center;.contact-heading{font-size:clamp(20px, 12vw, 50px);}.contact-text{width:320px;font-size:var(--fz-xl);color:var(--text2);text-align:center;}.contact-button{width:140px;height:60px;margin:20px;}"}),G=function(t){var e=(0,I.K2)("1199023874").allMdx.nodes[0],n=e.frontmatter,r=e.body,a=n.heading,l=i.useRef("");return(0,o.tZ)(w,t,(0,o.tZ)(X,null,(0,o.tZ)("h1",{className:"contact-heading"},a),(0,o.tZ)("div",{className:"contact-text"},(0,o.tZ)(D.MDXRenderer,null,r)),(0,o.tZ)("button",{className:"smallButton contact-button",onClick:function(){l.current="mailto:"+atob(d.contactDetails.email)+"?subject="+atob(d.contactDetails.subject)||0,window.location.href=l.current}},"Say Hello")))},H=(0,c.Z)("a",{target:"e150etfq0"})("animation:",(function(t){return t.animation||"none"})," 1000ms ease both;"),Y=function(t){var e=t.current,n=t.visible,r=t.setVisible,a=i.useState(!1),l=a[0],c=a[1];(0,i.useEffect)((function(){if(0===e)return r(!1)}),[e]),(0,i.useEffect)((function(){if(n)return c(!0)}),[n]);return(0,o.tZ)(i.Fragment,null,l&&(0,o.tZ)(H,{className:"smallButton resume-button",href:"https://docs.google.com/uc?export=download&id="+d.resumeFileID,animation:function(){return l&&n?"fadeInUp":l&&!n?"fadeOutDown":"none"},onAnimationEnd:function(t){0===e&&(c(!1),r(!1))},onClick:function(){}},"Download CV"))},J=function(){var t=i.useState(0),e=t[0],n=t[1],a=(0,i.useRef)(e),c=i.useState(0),s=c[0],d=c[1],f={current:e,setCurrent:n,next:a,increment:s,setIncrement:d};return(0,o.tZ)(l,{current:e},(0,o.tZ)(u,{current:e,setIncrement:d}),(0,o.tZ)(S,(0,r.Z)({id:0},f)),(0,o.tZ)(A,(0,r.Z)({id:1},f)),(0,o.tZ)(_,(0,r.Z)({id:2},f)),(0,o.tZ)(W,(0,r.Z)({id:3},f)),(0,o.tZ)(G,(0,r.Z)({id:4},f)))}}}]);
//# sourceMappingURL=9919df9460af8d794527a74dee443a7b0b0b501d-8220468650b055de572e.js.map