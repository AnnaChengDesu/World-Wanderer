"use strict";(self.webpackChunkwhereintheworld=self.webpackChunkwhereintheworld||[]).push([[416],{6416:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(7689),o=a(1087),r=a(4838),i=a(6151),l=a(9201),s=a(184);const c=(0,l.Z)((0,s.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");var d=a(4651),h=a(3877);const u=function(){const e=(0,n.UO)(),{data:t,isLoading:a,isFetching:l}=(0,d.qW)(e.code);return(0,s.jsx)("div",{className:r.Z.root,children:(0,s.jsxs)("div",{className:r.Z.navigateBack,children:[(0,s.jsx)(i.Z,{color:"neutral",to:"/",component:o.rU,startIcon:(0,s.jsx)(c,{}),children:"Back"}),(()=>{if(a||l)return(0,s.jsx)(h.Z.CountryDetail,{});if(!t)return(0,s.jsxs)("p",{children:["Couldn't find a country by alpha-3 code: \"",e.code,'".']});const{borders:n,capital:i,currencies:c,flag:d,languages:u,name:p,nativeName:m,population:v,region:g,subregion:b,topLevelDomain:x}=t,f={left:[{label:"Native Name",value:m},{label:"Population",value:v},{label:"Region",value:g},{label:"Sub Region",value:b},{label:"Capital",value:i}],right:[{label:"Top Level Domain",value:x},{label:"Currencies",value:c},{label:"Languages",value:u}]};return(0,s.jsxs)("div",{className:r.Z.wrapper,children:[(0,s.jsx)("div",{className:r.Z.flag,children:(0,s.jsx)("img",{src:d,alt:"Country flag of ".concat(p),className:r.Z.flagImage,loading:"lazy"})}),(0,s.jsxs)("div",{className:r.Z.content,children:[(0,s.jsx)("h2",{className:r.Z.title,children:p}),(0,s.jsx)("ul",{className:r.Z.details,children:Object.entries(f).map((e=>{let[t,a]=e;return(0,s.jsx)("li",{className:r.Z.group,children:(0,s.jsx)("ul",{children:a.map((e=>{let{label:t,value:a}=e;return(0,s.jsxs)("li",{children:[(0,s.jsx)("b",{children:t}),a]},t)}))})},t)}))}),(0,s.jsxs)("div",{className:r.Z.borders,children:[(0,s.jsx)("b",{children:"Border Countries:"}),0===n.length?"None":(0,s.jsx)("ul",{className:r.Z.borderList,children:n.map((e=>(0,s.jsx)(o.rU,{to:"/country/".concat(e.alpha3Code),children:(0,s.jsx)("li",{className:r.Z.borderListItem,children:e.name})},e)))})]})]})]})})()]})})}},3877:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7047),o=a(1473),r=a(184);const i=function(){return(0,r.jsx)("div",{className:o.Z.cards,children:[...Array(8).keys()].map((e=>(0,r.jsx)(n.Z,{variant:"rectangular",width:265,height:340},e)))})};var l=a(4838);const s={HomeCountryCards:i,CountryDetail:function(){return(0,r.jsxs)("div",{className:l.Z.wrapper,children:[(0,r.jsx)("div",{className:l.Z.content,children:(0,r.jsx)(n.Z,{className:l.Z.flag,variant:"rectangular",width:"100%",height:"100%"})}),(0,r.jsxs)("div",{className:l.Z.content,children:[(0,r.jsx)(n.Z,{variant:"text",width:125,height:32,style:{marginBottom:20}}),(0,r.jsx)(n.Z,{variant:"rectangular",height:145,style:{marginBottom:60}}),(0,r.jsx)(n.Z,{variant:"rectangular",height:36})]})]})}}},6151:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(3366),o=a(7462),r=a(2791),i=a(8182),l=a(5735),s=a(4419),c=a(2065),d=a(4923),h=a(1046),u=a(533),p=a(4036),m=a(5878),v=a(1217);function g(e){return(0,v.Z)("MuiButton",e)}const b=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const x=r.createContext({});var f=a(184);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["".concat(a.variant).concat((0,p.Z)(a.color))],t["size".concat((0,p.Z)(a.size))],t["".concat(a.variant,"Size").concat((0,p.Z)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:a}=e;var n,r;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],l="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,o.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat((t.vars||t).palette[a.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}),"&:active":(0,o.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(b.focusVisible)]:(0,o.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(b.disabled)]:(0,o.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"contained"===a.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):"1px solid ".concat((0,c.Fq)(t.palette[a.color].main,.5))},"contained"===a.variant&&{color:t.vars?t.vars.palette.text.primary:null==(n=(r=t.palette).getContrastText)?void 0:n.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(b.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(b.disabled)]:{boxShadow:"none"}}})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t["iconSize".concat((0,p.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},Z(t))})),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t["iconSize".concat((0,p.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},Z(t))})),_=r.forwardRef((function(e,t){const a=r.useContext(x),c=(0,l.Z)(a,e),d=(0,h.Z)({props:c,name:"MuiButton"}),{children:u,color:m="primary",component:v="button",className:b,disabled:Z=!1,disableElevation:_=!1,disableFocusRipple:z=!1,endIcon:k,focusVisibleClassName:j,fullWidth:N=!1,size:I="medium",startIcon:R,type:B,variant:M="text"}=d,L=(0,n.Z)(d,y),F=(0,o.Z)({},d,{color:m,component:v,disabled:Z,disableElevation:_,disableFocusRipple:z,fullWidth:N,size:I,type:B,variant:M}),D=(e=>{const{color:t,disableElevation:a,fullWidth:n,size:r,variant:i,classes:l}=e,c={root:["root",i,"".concat(i).concat((0,p.Z)(t)),"size".concat((0,p.Z)(r)),"".concat(i,"Size").concat((0,p.Z)(r)),"inherit"===t&&"colorInherit",a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,p.Z)(r))],endIcon:["endIcon","iconSize".concat((0,p.Z)(r))]},d=(0,s.Z)(c,g,l);return(0,o.Z)({},l,d)})(F),W=R&&(0,f.jsx)(w,{className:D.startIcon,ownerState:F,children:R}),E=k&&(0,f.jsx)(C,{className:D.endIcon,ownerState:F,children:k});return(0,f.jsxs)(S,(0,o.Z)({ownerState:F,className:(0,i.Z)(a.className,D.root,b),component:v,disabled:Z,focusRipple:!z,focusVisibleClassName:(0,i.Z)(D.focusVisible,j),ref:t,type:B},L,{classes:D,children:[W,u,E]}))}))},7047:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(168),o=a(3366),r=a(7462),i=a(2791),l=a(8182),s=a(2554),c=a(4419);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function h(e){return parseFloat(e)}var u=a(2065),p=a(4923),m=a(1046),v=a(5878),g=a(1217);function b(e){return(0,g.Z)("MuiSkeleton",e)}(0,v.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,f,y,Z,S=a(184);const w=["animation","className","component","height","style","variant","width"];let C,_,z,k;const j=(0,s.F4)(C||(C=x||(x=(0,n.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),N=(0,s.F4)(_||(_=f||(f=(0,n.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((e=>{let{theme:t,ownerState:a}=e;const n=d(t.shape.borderRadius)||"px",o=h(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,u.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(n,"/").concat(Math.round(o/.6*10)/10).concat(n),"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,s.iv)(z||(z=y||(y=(0,n.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),j)}),(e=>{let{ownerState:t,theme:a}=e;return"wave"===t.animation&&(0,s.iv)(k||(k=Z||(Z=(0,n.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),N,(a.vars||a).palette.action.hover)})),R=i.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:i,component:s="span",height:d,style:h,variant:u="text",width:p}=a,v=(0,o.Z)(a,w),g=(0,r.Z)({},a,{animation:n,component:s,variant:u,hasChildren:Boolean(v.children)}),x=(e=>{const{classes:t,variant:a,animation:n,hasChildren:o,width:r,height:i}=e,l={root:["root",a,n,o&&"withChildren",o&&!r&&"fitContent",o&&!i&&"heightAuto"]};return(0,c.Z)(l,b,t)})(g);return(0,S.jsx)(I,(0,r.Z)({as:s,ref:t,className:(0,l.Z)(x.root,i),ownerState:g},v,{style:(0,r.Z)({width:p,height:d},h)}))}))},4838:(e,t,a)=>{a.d(t,{Z:()=>n});const n={root:"CountryDetail_root__42BKz",navigateBack:"CountryDetail_navigateBack__qusY7",wrapper:"CountryDetail_wrapper__caFa1",flag:"CountryDetail_flag__esZk-",flagImage:"CountryDetail_flagImage__myfQQ",content:"CountryDetail_content__UXF3P",title:"CountryDetail_title__6TXDb",details:"CountryDetail_details__sQM1W",group:"CountryDetail_group__xfK2S",borders:"CountryDetail_borders__lJHqk",borderList:"CountryDetail_borderList__vr4gt",borderListItem:"CountryDetail_borderListItem__78bXZ"}},1473:(e,t,a)=>{a.d(t,{Z:()=>n});const n={toolbar:"Home_toolbar__4nT4M",search:"Home_search__FUu1d",searchClear:"Home_searchClear__CVmL7",filter:"Home_filter__+bTsy",cards:"Home_cards__7nfX+",loadMore:"Home_loadMore__QkFnl"}}}]);
//# sourceMappingURL=416.552cff5d.chunk.js.map