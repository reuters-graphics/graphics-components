import{i as y}from"./isObject-C3e4t58V.js";import{r as M}from"./isSymbol-Br3Fhm6g.js";import{t as W}from"./toNumber-BrygkUtK.js";var x=function(){return M.Date.now()},S="Expected a function",_=Math.max,F=Math.min;function N(d,t,n){var r,a,g,l,i,f,o=0,E=!1,c=!1,v=!0;if(typeof d!="function")throw new TypeError(S);t=W(t)||0,y(n)&&(E=!!n.leading,c="maxWait"in n,g=c?_(W(n.maxWait)||0,t):g,v="trailing"in n?!!n.trailing:v);function T(e){var u=r,m=a;return r=a=void 0,o=e,l=d.apply(m,u),l}function C(e){return o=e,i=setTimeout(s,t),E?T(e):l}function b(e){var u=e-f,m=e-o,R=t-u;return c?F(R,g-m):R}function k(e){var u=e-f,m=e-o;return f===void 0||u>=t||u<0||c&&m>=g}function s(){var e=x();if(k(e))return I(e);i=setTimeout(s,b(e))}function I(e){return i=void 0,v&&r?T(e):(r=a=void 0,l)}function p(){i!==void 0&&clearTimeout(i),o=0,r=f=a=i=void 0}function L(){return i===void 0?l:I(x())}function h(){var e=x(),u=k(e);if(r=arguments,a=this,f=e,u){if(i===void 0)return C(f);if(c)return clearTimeout(i),i=setTimeout(s,t),T(f)}return i===void 0&&(i=setTimeout(s,t)),l}return h.cancel=p,h.flush=L,h}var O="Expected a function";function j(d,t,n){var r=!0,a=!0;if(typeof d!="function")throw new TypeError(O);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),N(d,t,{leading:r,maxWait:t,trailing:a})}export{j as t};