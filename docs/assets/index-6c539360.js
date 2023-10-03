import{R as i,r as f}from"./index-6197e462.js";function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,r){if(e==null)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r.indexOf(n=o[a])>=0||(t[n]=e[n]);return t}function E(e){var r=f.useRef(e),n=f.useRef(function(a){r.current&&r.current(a)});return r.current=e,n.current}var k=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=1),e>n?n:e<r?r:e},x=function(e){return"touches"in e},O=function(e){return e&&e.ownerDocument.defaultView||self},L=function(e,r,n){var a=e.getBoundingClientRect(),t=x(r)?function(o,u){for(var l=0;l<o.length;l++)if(o[l].identifier===u)return o[l];return o[0]}(r.touches,n):r;return{left:k((t.pageX-(a.left+O(e).pageXOffset))/a.width),top:k((t.pageY-(a.top+O(e).pageYOffset))/a.height)}},B=function(e){!x(e)&&e.preventDefault()},j=i.memo(function(e){var r=e.onMove,n=e.onKey,a=C(e,["onMove","onKey"]),t=f.useRef(null),o=E(r),u=E(n),l=f.useRef(null),s=f.useRef(!1),c=f.useMemo(function(){var M=function(v){B(v),(x(v)?v.touches.length>0:v.buttons>0)&&t.current?o(L(t.current,v,l.current)):y(!1)},H=function(){return y(!1)};function y(v){var d=s.current,m=O(t.current),w=v?m.addEventListener:m.removeEventListener;w(d?"touchmove":"mousemove",M),w(d?"touchend":"mouseup",H)}return[function(v){var d=v.nativeEvent,m=t.current;if(m&&(B(d),!function(G,ee){return ee&&!x(G)}(d,s.current)&&m)){if(x(d)){s.current=!0;var w=d.changedTouches||[];w.length&&(l.current=w[0].identifier)}m.focus(),o(L(m,d,l.current)),y(!0)}},function(v){var d=v.which||v.keyCode;d<37||d>40||(v.preventDefault(),u({left:d===39?.05:d===37?-.05:0,top:d===40?.05:d===38?-.05:0}))},y]},[u,o]),h=c[0],b=c[1],_=c[2];return f.useEffect(function(){return _},[_]),i.createElement("div",p({},a,{onTouchStart:h,onMouseDown:h,className:"react-colorful__interactive",ref:t,onKeyDown:b,tabIndex:0,role:"slider"}))}),N=function(e){return e.filter(Boolean).join(" ")},D=function(e){var r=e.color,n=e.left,a=e.top,t=a===void 0?.5:a,o=N(["react-colorful__pointer",e.className]);return i.createElement("div",{className:o,style:{top:100*t+"%",left:100*n+"%"}},i.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},g=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=Math.pow(10,r)),Math.round(n*e)/n},re={grad:.9,turn:360,rad:360/(2*Math.PI)},T=function(e){return Y(R(e))},R=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?g(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?g(parseInt(e.substring(6,8),16)/255,2):1}},ne=function(e,r){return r===void 0&&(r="deg"),Number(e)*(re[r]||1)},ae=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?te({h:ne(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},te=function(e){var r=e.s,n=e.l;return{h:e.h,s:(r*=(n<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:e.a}},F=function(e){return le(X(e))},P=function(e){var r=e.s,n=e.v,a=e.a,t=(200-r)*n/100;return{h:g(e.h),s:g(t>0&&t<200?r*n/100/(t<=100?t:200-t)*100:0),l:g(t/2),a:g(a,2)}},z=function(e){var r=P(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},I=function(e){var r=P(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},X=function(e){var r=e.h,n=e.s,a=e.v,t=e.a;r=r/360*6,n/=100,a/=100;var o=Math.floor(r),u=a*(1-n),l=a*(1-(r-o)*n),s=a*(1-(1-r+o)*n),c=o%6;return{r:g(255*[a,l,u,u,s,a][c]),g:g(255*[s,a,a,l,u,u][c]),b:g(255*[u,u,s,a,a,l][c]),a:g(t,2)}},oe=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?Y({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},q=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},le=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,o=t<1?q(g(255*t)):"";return"#"+q(r)+q(n)+q(a)+o},Y=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,o=Math.max(r,n,a),u=o-Math.min(r,n,a),l=u?o===r?(n-a)/u:o===n?2+(a-r)/u:4+(r-n)/u:0;return{h:g(60*(l<0?l+6:l)),s:g(o?u/o*100:0),v:g(o/255*100),a:t}},V=i.memo(function(e){var r=e.hue,n=e.onChange,a=N(["react-colorful__hue",e.className]);return i.createElement("div",{className:a},i.createElement(j,{onMove:function(t){n({h:360*t.left})},onKey:function(t){n({h:k(r+360*t.left,0,360)})},"aria-label":"Hue","aria-valuenow":g(r),"aria-valuemax":"360","aria-valuemin":"0"},i.createElement(D,{className:"react-colorful__hue-pointer",left:r/360,color:z({h:r,s:100,v:100,a:1})})))}),$=i.memo(function(e){var r=e.hsva,n=e.onChange,a={backgroundColor:z({h:r.h,s:100,v:100,a:1})};return i.createElement("div",{className:"react-colorful__saturation",style:a},i.createElement(j,{onMove:function(t){n({s:100*t.left,v:100-100*t.top})},onKey:function(t){n({s:k(r.s+100*t.left,0,100),v:k(r.v-100*t.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(r.s)+"%, Brightness "+g(r.v)+"%"},i.createElement(D,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:z(r)})))}),J=function(e,r){if(e===r)return!0;for(var n in e)if(e[n]!==r[n])return!1;return!0},Q=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},U=function(e,r){return e.toLowerCase()===r.toLowerCase()||J(R(e),R(r))};function W(e,r,n){var a=E(n),t=f.useState(function(){return e.toHsva(r)}),o=t[0],u=t[1],l=f.useRef({color:r,hsva:o});f.useEffect(function(){if(!e.equal(r,l.current.color)){var c=e.toHsva(r);l.current={hsva:c,color:r},u(c)}},[r,e]),f.useEffect(function(){var c;J(o,l.current.hsva)||e.equal(c=e.fromHsva(o),l.current.color)||(l.current={hsva:o,color:c},a(c))},[o,e,a]);var s=f.useCallback(function(c){u(function(h){return Object.assign({},h,c)})},[]);return[o,s]}var ue=typeof window<"u"?f.useLayoutEffect:f.useEffect,ie=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},S=new Map,Z=function(e){ue(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!S.has(r)){var n=r.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,S.set(r,n);var a=ie();a&&n.setAttribute("nonce",a),r.head.appendChild(n)}},[])},ce=function(e){var r=e.className,n=e.colorModel,a=e.color,t=a===void 0?n.defaultColor:a,o=e.onChange,u=C(e,["className","colorModel","color","onChange"]),l=f.useRef(null);Z(l);var s=W(n,t,o),c=s[0],h=s[1],b=N(["react-colorful",r]);return i.createElement("div",p({},u,{ref:l,className:b}),i.createElement($,{hsva:c,onChange:h}),i.createElement(V,{hue:c.h,onChange:h,className:"react-colorful__last-control"}))},se={defaultColor:"000",toHsva:T,fromHsva:function(e){return F({h:e.h,s:e.s,v:e.v,a:1})},equal:U},be=function(e){return i.createElement(ce,p({},e,{colorModel:se}))},fe=function(e){var r=e.className,n=e.hsva,a=e.onChange,t={backgroundImage:"linear-gradient(90deg, "+I(Object.assign({},n,{a:0}))+", "+I(Object.assign({},n,{a:1}))+")"},o=N(["react-colorful__alpha",r]),u=g(100*n.a);return i.createElement("div",{className:o},i.createElement("div",{className:"react-colorful__alpha-gradient",style:t}),i.createElement(j,{onMove:function(l){a({a:l.left})},onKey:function(l){a({a:k(n.a+l.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},i.createElement(D,{className:"react-colorful__alpha-pointer",left:n.a,color:I(n)})))},K=function(e){var r=e.className,n=e.colorModel,a=e.color,t=a===void 0?n.defaultColor:a,o=e.onChange,u=C(e,["className","colorModel","color","onChange"]),l=f.useRef(null);Z(l);var s=W(n,t,o),c=s[0],h=s[1],b=N(["react-colorful",r]);return i.createElement("div",p({},u,{ref:l,className:b}),i.createElement($,{hsva:c,onChange:h}),i.createElement(V,{hue:c.h,onChange:h}),i.createElement(fe,{hsva:c,onChange:h,className:"react-colorful__last-control"}))},de={defaultColor:"0001",toHsva:T,fromHsva:F,equal:U},_e=function(e){return i.createElement(K,p({},e,{colorModel:de}))},he={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ae,fromHsva:I,equal:Q},ye=function(e){return i.createElement(K,p({},e,{colorModel:he}))},ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:oe,fromHsva:function(e){var r=X(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:Q},ke=function(e){return i.createElement(K,p({},e,{colorModel:ge}))},ve=/^#?([0-9A-F]{3,8})$/i,me=function(e){var r=e.color,n=r===void 0?"":r,a=e.onChange,t=e.onBlur,o=e.escape,u=e.validate,l=e.format,s=e.process,c=C(e,["color","onChange","onBlur","escape","validate","format","process"]),h=f.useState(function(){return o(n)}),b=h[0],_=h[1],M=E(a),H=E(t),y=f.useCallback(function(d){var m=o(d.target.value);_(m),u(m)&&M(s?s(m):m)},[o,s,u,M]),v=f.useCallback(function(d){u(d.target.value)||_(o(n)),H(d)},[n,o,u,H]);return f.useEffect(function(){_(o(n))},[n,o]),i.createElement("input",p({},c,{value:l?l(b):b,spellCheck:"false",onChange:y,onBlur:v}))},A=function(e){return"#"+e},we=function(e){var r=e.prefixed,n=e.alpha,a=C(e,["prefixed","alpha"]),t=f.useCallback(function(u){return u.replace(/([^0-9A-F]+)/gi,"").substring(0,n?8:6)},[n]),o=f.useCallback(function(u){return function(l,s){var c=ve.exec(l),h=c?c[1].length:0;return h===3||h===6||!!s&&h===4||!!s&&h===8}(u,n)},[n]);return i.createElement(me,p({},a,{escape:t,format:r?A:void 0,process:A,validate:o}))},xe={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};export{ke as H,we as O,be as Z,xe as c,_e as n,ye as u};
//# sourceMappingURL=index-6c539360.js.map