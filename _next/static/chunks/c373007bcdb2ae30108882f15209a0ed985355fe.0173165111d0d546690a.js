(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+165":function(t,e){t.exports=function(t,e){return t.has(e)}},"0qVv":function(t,e,r){var n=r("gKNW"),o=r("u2vY"),a=r("BwbT"),i=r("cTHi");t.exports=function(t){return a(t)?n(i(t)):o(t)}},"2EQx":function(t,e,r){var n=r("9aUh");t.exports=function(t){return t===t&&!n(t)}},"4a20":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"4mhO":function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},"5Avs":function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},"7IP4":function(t,e){t.exports=function(){}},"Akg/":function(t,e,r){var n=r("2EQx"),o=r("h0av");t.exports=function(t){for(var e=o(t),r=e.length;r--;){var a=e[r],i=t[a];e[r]=[a,i,n(i)]}return e}},BAZ7:function(t,e){t.exports=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1}},BQn0:function(t,e,r){"use strict";var n=r("6CzD"),o=r("Fcif"),a=(r("W0B4"),r("nNlS"));var i=function(t){var e=function(e){var r=t(e);return e.css?Object(o.a)(Object(o.a)({},Object(a.a)(r,t(Object(o.a)({theme:e.theme},e.css)))),function(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}(e.css,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css"].concat(Object(n.a)(t.filterProps)),e};var c=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce((function(e,r){var n=r(t);return n?Object(a.a)(e,n):e}),{})};return n.propTypes={},n.filterProps=e.reduce((function(t,e){return t.concat(e.filterProps)}),[]),n},u=r("mK0O"),s=r("Xcpm");function p(t,e){return e&&"string"===typeof e?e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:null}),t):null}var f=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,o=t.themeKey,a=t.transform,i=function(t){if(null==t[e])return null;var r=t[e],i=p(t.theme,o)||{};return Object(s.a)(t,r,(function(t){var e;return"function"===typeof i?e=i(t):Array.isArray(i)?e=i[t]||t:(e=p(i,t)||t,a&&(e=a(e))),!1===n?e:Object(u.a)({},n,e)}))};return i.propTypes={},i.filterProps=[e],i};function l(t){return"number"!==typeof t?t:"".concat(t,"px solid")}var m=c(f({prop:"border",themeKey:"borders",transform:l}),f({prop:"borderTop",themeKey:"borders",transform:l}),f({prop:"borderRight",themeKey:"borders",transform:l}),f({prop:"borderBottom",themeKey:"borders",transform:l}),f({prop:"borderLeft",themeKey:"borders",transform:l}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),d=c(f({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),v=c(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),h=c(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),g=c(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),b=c(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=f({prop:"boxShadow",themeKey:"shadows"});function x(t){return t<=1?"".concat(100*t,"%"):t}var j=f({prop:"width",transform:x}),w=f({prop:"maxWidth",transform:x}),O=f({prop:"minWidth",transform:x}),N=f({prop:"height",transform:x}),k=f({prop:"maxHeight",transform:x}),P=f({prop:"minHeight",transform:x}),_=(f({prop:"size",cssProperty:"width",transform:x}),f({prop:"size",cssProperty:"height",transform:x}),c(j,w,O,N,k,P,f({prop:"boxSizing"}))),E=r("rtwp"),A=c(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),B=r("dV/x"),C=r("mXGw"),S=r.n(C),K=r("PDtE"),z=r("GeWT"),W=r.n(z),Y=r("Ns/9");function T(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}var H=r("qSp0"),M=function(t){var e=function(t){return function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.name,i=Object(B.a)(n,["name"]),c=a,u="function"===typeof e?function(t){return{root:function(r){return e(Object(o.a)({theme:t},r))}}}:{root:e},s=Object(Y.a)(u,Object(o.a)({Component:t,name:a||t.displayName,classNamePrefix:c},i));e.filterProps&&(r=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var p=S.a.forwardRef((function(e,n){var a=e.children,i=e.className,c=e.clone,u=e.component,p=Object(B.a)(e,["children","className","clone","component"]),f=s(e),l=Object(K.a)(f.root,i),m=p;if(r&&(m=T(m,r)),c)return S.a.cloneElement(a,Object(o.a)({className:Object(K.a)(a.props.className,l)},m));if("function"===typeof a)return a(Object(o.a)({className:l},m));var d=u||t;return S.a.createElement(d,Object(o.a)({ref:n,className:l},m),a)}));return W()(p,t),p}}(t);return function(t,r){return e(t,Object(o.a)({defaultTheme:H.a},r))}},R=i(c(m,d,v,h,g,b,y,_,E.b,A)),I=M("div")(R,{name:"MuiBox"});e.a=I},BW49:function(t,e,r){var n=r("sWZd"),o=r("lYsT"),a=r("PqlX"),i=r("q+I6"),c=r("ckUF"),u=r("cTHi");t.exports=function(t,e,r){for(var s=-1,p=(e=n(e,t)).length,f=!1;++s<p;){var l=u(e[s]);if(!(f=null!=t&&r(t,l)))break;t=t[l]}return f||++s!=p?f:!!(p=null==t?0:t.length)&&c(p)&&i(l,p)&&(a(t)||o(t))}},Bk8j:function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"g",(function(){return s}));var n="galleryHistory",o="search_histories",a="comic_config",i="toggle_controls",c="load_more_page",u="jump_page",s={en:"English",zh:"\u7b80\u4f53\u4e2d\u6587",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",kr:"\ud55c\uad6d\uc5b4",ms:"Bahasa Melayu"}},COrk:function(t,e,r){var n=r("E1Sn"),o=r("T9Ud");t.exports=function t(e,r,a,i,c){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!==e&&r!==r:n(e,r,a,i,t,c))}},E1Sn:function(t,e,r){var n=r("WRuO"),o=r("MBdc"),a=r("LdZC"),i=r("ji6j"),c=r("s3t7"),u=r("PqlX"),s=r("tfj2"),p=r("3kU/"),f="[object Object]",l=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,m,d,v){var h=u(t),g=u(e),b=h?"[object Array]":c(t),y=g?"[object Array]":c(e),x=(b="[object Arguments]"==b?f:b)==f,j=(y="[object Arguments]"==y?f:y)==f,w=b==y;if(w&&s(t)){if(!s(e))return!1;h=!0,x=!1}if(w&&!x)return v||(v=new n),h||p(t)?o(t,e,r,m,d,v):a(t,e,b,r,m,d,v);if(!(1&r)){var O=x&&l.call(t,"__wrapped__"),N=j&&l.call(e,"__wrapped__");if(O||N){var k=O?t.value():t,P=N?e.value():e;return v||(v=new n),d(k,P,r,m,v)}}return!!w&&(v||(v=new n),i(t,e,r,m,d,v))}},GE03:function(t,e,r){var n=r("xkFB"),o=r("4mhO"),a=r("4a20");function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},LdZC:function(t,e,r){var n=r("jgJv"),o=r("KjZ+"),a=r("dIZa"),i=r("MBdc"),c=r("rrk0"),u=r("OF9M"),s=n?n.prototype:void 0,p=s?s.valueOf:void 0;t.exports=function(t,e,r,n,s,f,l){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var m=c;case"[object Set]":var d=1&n;if(m||(m=u),t.size!=e.size&&!d)return!1;var v=l.get(t);if(v)return v==e;n|=2,l.set(t,e);var h=i(m(t),m(e),n,s,f,l);return l.delete(t),h;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},MBdc:function(t,e,r){var n=r("GE03"),o=r("5Avs"),a=r("+165");t.exports=function(t,e,r,i,c,u){var s=1&r,p=t.length,f=e.length;if(p!=f&&!(s&&f>p))return!1;var l=u.get(t),m=u.get(e);if(l&&m)return l==e&&m==t;var d=-1,v=!0,h=2&r?new n:void 0;for(u.set(t,e),u.set(e,t);++d<p;){var g=t[d],b=e[d];if(i)var y=s?i(b,g,d,e,t,u):i(g,b,d,t,e,u);if(void 0!==y){if(y)continue;v=!1;break}if(h){if(!o(e,(function(t,e){if(!a(h,e)&&(g===t||c(g,t,r,i,u)))return h.push(e)}))){v=!1;break}}else if(g!==b&&!c(g,b,r,i,u)){v=!1;break}}return u.delete(t),u.delete(e),v}},O6aX:function(t,e,r){"use strict";r.d(e,"a",(function(){return T}));var n=r("kci7"),o=r("W6lt"),a=r("/ZiB"),i=r("aNYv"),c=r("shiU"),u=r("V2/N"),s=r("9dpD"),p=r("Uj2Y"),f=r.n(p),l=r("mXGw"),m=r.n(l),d=r("R82R"),v=r("ozoj"),h=r("f4ym"),g=r("Xasc"),b=r("E2Nf"),y=r("PDtE"),x=r("ynas"),j=r("ReGf"),w=r("Fcif"),O=r("vCr3"),N=m.a.createElement,k=function(t){var e=Object(O.a)(60),r=Object(i.a)(e,2),n=r[0],o=r[1];return N("div",{ref:o},n&&N(j.a,Object(w.a)({name:"rating",size:"small",readOnly:!0,max:5,precision:.5},t)))},P=r("Bk8j"),_=r("TiKg"),E=r.n(_),A=m.a.createElement;function B(t){var e=JSON.parse(localStorage.getItem(P.e)||"[]");e.unshift(t),localStorage.setItem(P.e,JSON.stringify(f()(e,"gid").slice(0,50)))}var C=Object(d.a)((function(t){return Object(v.a)({root:{height:136},img:{width:95,height:136},title:{fontSize:"10pt",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical",textOverflow:"ellipsis",display:"-webkit-box"},full:{height:"100%",width:"100%"},gutterBottom:{marginBottom:t.spacing(.5)},content:{padding:t.spacing(1)}})})),S=function(){var t=C();return A(c.a,{className:t.root},A(u.a,{container:!0,wrap:"nowrap"},A(u.a,{item:!0},A(s.a,{animation:"wave",className:t.img,variant:"rect"})),A(u.a,{item:!0,xs:!0},A("div",{className:Object(y.a)(t.content,t.full)},A(u.a,{container:!0,direction:"column",className:t.full},A(u.a,{item:!0,xs:!0},A(s.a,{animation:"wave",variant:"text",width:"90%"})),A(u.a,{item:!0,container:!0,wrap:"nowrap",className:t.gutterBottom},A(s.a,{animation:"wave",variant:"text",width:"70%"})),A(u.a,{item:!0,container:!0,wrap:"nowrap"},A(s.a,{animation:"wave",variant:"text",width:"30%"})))))))},K=function(t){var e=t.record,r=C(),n=Object(O.a)(600),s=Object(i.a)(n,2),p=s[0],f=s[1];return A(c.a,{className:r.root,ref:f},p&&A(h.a,{naked:!0,href:"/[gid]/[token]",as:"/".concat(e.gid,"/").concat(e.token)},A(o.a,{onClick:function(){return B(e)}},A(u.a,{container:!0,wrap:"nowrap"},A(u.a,{item:!0},A(g.a,{alt:e.title,src:e.thumb,title:e.title,className:r.img,lazy:!0})),A(u.a,{item:!0,xs:!0},A("div",{className:Object(y.a)(r.content,r.full)},A(u.a,{container:!0,direction:"column",className:r.full},A(u.a,{item:!0,xs:!0},A(a.a,{gutterBottom:!0,className:r.title,title:e.title},e.title)),A(u.a,{item:!0,container:!0,wrap:"nowrap",className:r.gutterBottom,spacing:1,alignItems:"center"},A(u.a,{item:!0,xs:!0},A(k,{value:(null===e||void 0===e?void 0:e.rating)?+e.rating:0})),A(u.a,{item:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},/((chinese)|(\u4e2d\u56fd\u7ffb\u8a33)|(\u6c49\u5316))/.test(e.title)&&"ZH")),A(u.a,{item:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},e.filecount+"P"))),A(u.a,{item:!0,container:!0,wrap:"nowrap",alignItems:"center"},A(u.a,{item:!0,xs:!0},A(b.a,{variant:"outlined",label:e.category,size:"small"})),A(u.a,{item:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},E()(e.posted).format("YYYY-MM-DD HH:mm")))))))))))},z=Object(d.a)((function(t){return Object(v.a)({title:{fontSize:"10pt",height:36,overflow:"hidden"},card:{margin:t.spacing(0,"auto")}})})),W=function(){var t=z();return A(c.a,{className:t.card},A(s.a,{variant:"rect",animation:"wave",height:350}),A(s.a,{animation:"wave",height:10,width:"80%",style:{margin:"16px 8px"}}),A(s.a,{animation:"wave",height:10,width:"50%",style:{margin:"16px 8px"}}))},Y=function(t){var e=t.record,r=z();return A(c.a,{className:r.card},A(h.a,{naked:!0,href:"/[gid]/[token]",as:"/".concat(e.gid,"/").concat(e.token)},A(o.a,{onClick:function(){return B(e)}},A(g.a,{alt:e.title,src:e.thumb,title:e.title,height:350,lazy:!0}),A(n.a,null,A(a.a,{gutterBottom:!0,align:"center",className:r.title,component:"h2",title:e.title},e.title),A(u.a,{container:!0,alignItems:"center",justify:"space-between"},A(b.a,{variant:"outlined",label:e.category,size:"small"}),A(k,{value:+e.rating})),A(u.a,{container:!0,spacing:1},A(u.a,{item:!0,xs:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},E()(e.posted).format("YYYY-MM-DD HH:mm"))),A(u.a,{item:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},/((chinese)|(\u4e2d\u56fd\u7ffb\u8a33)|(\u6c49\u5316))/.test(e.title)&&"ZH")),A(u.a,{item:!0},A(a.a,{variant:"body2",color:"textPrimary",component:"span"},e.filecount,"P")))))))},T=function(){return Object(x.b)()?A(u.a,{item:!0,xs:12},A(S,null)):A(u.a,{item:!0,xs:!0},A(W,null))};e.b=function(t){var e=t.record,r=Object(x.b)();return null===r?null:A(r?K:Y,{record:e})}},OF9M:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},Uj2Y:function(t,e,r){var n=r("tDyL"),o=r("i/JN");t.exports=function(t,e){return t&&t.length?o(t,n(e,2)):[]}},VY7S:function(t,e,r){var n=r("WRuO"),o=r("COrk");t.exports=function(t,e,r,a){var i=r.length,c=i,u=!a;if(null==t)return!c;for(t=Object(t);i--;){var s=r[i];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<c;){var p=(s=r[i])[0],f=t[p],l=s[1];if(u&&s[2]){if(void 0===f&&!(p in t))return!1}else{var m=new n;if(a)var d=a(f,l,p,t,e,m);if(!(void 0===d?o(l,f,3,a,m):d))return!1}}return!0}},VbZR:function(t,e){t.exports=function(t){return t!==t}},W6lt:function(t,e,r){"use strict";var n=r("Fcif"),o=r("dV/x"),a=r("mXGw"),i=(r("W0B4"),r("PDtE")),c=r("gbh0"),u=r("x+AB"),s=a.forwardRef((function(t,e){var r=t.children,c=t.classes,s=t.className,p=t.focusVisibleClassName,f=Object(o.a)(t,["children","classes","className","focusVisibleClassName"]);return a.createElement(u.a,Object(n.a)({className:Object(i.a)(c.root,s),focusVisibleClassName:Object(i.a)(p,c.focusVisible),ref:e},f),r,a.createElement("span",{className:c.focusHighlight}))}));e.a=Object(c.a)((function(t){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:t.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(s)},a7YA:function(t,e){t.exports=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}},aCmY:function(t,e){t.exports=function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}},d1lM:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},dtdj:function(t,e,r){var n=r("d1lM"),o=r("BW49");t.exports=function(t,e){return null!=t&&o(t,e,n)}},edSL:function(t,e,r){var n=r("Exs5");t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},gKNW:function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"i/JN":function(t,e,r){var n=r("GE03"),o=r("l3+0"),a=r("BAZ7"),i=r("+165"),c=r("pZIW"),u=r("OF9M");t.exports=function(t,e,r){var s=-1,p=o,f=t.length,l=!0,m=[],d=m;if(r)l=!1,p=a;else if(f>=200){var v=e?null:c(t);if(v)return u(v);l=!1,p=i,d=new n}else d=e?[]:m;t:for(;++s<f;){var h=t[s],g=e?e(h):h;if(h=r||0!==h?h:0,l&&g===g){for(var b=d.length;b--;)if(d[b]===g)continue t;e&&d.push(g),m.push(h)}else p(d,g,r)||(d!==m&&d.push(g),m.push(h))}return m}},ji6j:function(t,e,r){var n=r("2AbI"),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,i,c){var u=1&r,s=n(t),p=s.length;if(p!=n(e).length&&!u)return!1;for(var f=p;f--;){var l=s[f];if(!(u?l in e:o.call(e,l)))return!1}var m=c.get(t),d=c.get(e);if(m&&d)return m==e&&d==t;var v=!0;c.set(t,e),c.set(e,t);for(var h=u;++f<p;){var g=t[l=s[f]],b=e[l];if(a)var y=u?a(b,g,l,e,t,c):a(g,b,l,t,e,c);if(!(void 0===y?g===b||i(g,b,r,a,c):y)){v=!1;break}h||(h="constructor"==l)}if(v&&!h){var x=t.constructor,j=e.constructor;x==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof x&&x instanceof x&&"function"==typeof j&&j instanceof j||(v=!1)}return c.delete(t),c.delete(e),v}},kXPx:function(t,e,r){var n=r("COrk"),o=r("edSL"),a=r("dtdj"),i=r("BwbT"),c=r("2EQx"),u=r("a7YA"),s=r("cTHi");t.exports=function(t,e){return i(t)&&c(e)?u(s(t),e):function(r){var i=o(r,t);return void 0===i&&i===e?a(r,t):n(e,i,3)}}},"l3+0":function(t,e,r){var n=r("ofiy");t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},oagz:function(t,e){t.exports=function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}},ofiy:function(t,e,r){var n=r("aCmY"),o=r("VbZR"),a=r("oagz");t.exports=function(t,e,r){return e===e?a(t,e,r):n(t,o,r)}},pZIW:function(t,e,r){var n=r("b2OE"),o=r("7IP4"),a=r("OF9M"),i=n&&1/a(new n([,-0]))[1]==1/0?function(t){return new n(t)}:o;t.exports=i},rrk0:function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},tDyL:function(t,e,r){var n=r("wiKJ"),o=r("kXPx"),a=r("yoW1"),i=r("PqlX"),c=r("0qVv");t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):n(t):c(t)}},u2vY:function(t,e,r){var n=r("Exs5");t.exports=function(t){return function(e){return n(e,t)}}},wiKJ:function(t,e,r){var n=r("VY7S"),o=r("Akg/"),a=r("a7YA");t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}}}]);