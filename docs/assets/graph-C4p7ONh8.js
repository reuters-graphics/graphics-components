import{c as ie,t as M,a as pe,g as K,k as p,i as se,d as ve,e as Ee}from"./_baseClone-BMmn5UJb.js";import{t as ue,M as Ae,u as me,U as Y,l as Z,q as J,S as F,v as Oe,w as Le,i as we,c as Pe,x as S,b as Q}from"./_initCloneObject-D0ofMy5o.js";import{i as A,a as be}from"./toString-DnxJX3Gz.js";import{ap as ae,aq as Ce,ar as ye,as as Re,at as N,au as X}from"./intro-NBq-T5Lc.js";import{S as I,a as W}from"./isSymbol-Br3Fhm6g.js";import{i as Ne}from"./isObject-C3e4t58V.js";import{a as Te}from"./parseCss-CUU1xmUw.js";function De(){}function Fe(n,e,r,t){for(var i=n.length,s=r+-1;++s<i;)if(e(n[s],s,n))return s;return-1}function Ie(n){return n!==n}function Me(n,e,r){for(var t=r-1,i=n.length;++t<i;)if(n[t]===e)return t;return-1}function Se(n,e,r){return e===e?Me(n,e,r):Fe(n,Ie,r)}function xe(n,e){var r=n==null?0:n.length;return!!r&&Se(n,e,0)>-1}function fe(n,e){e=ie(e,n);for(var r=0,t=e.length;n!=null&&r<t;)n=n[M(e[r++])];return r&&r==t?n:void 0}function Ge(n,e,r){var t=n==null?void 0:fe(n,e);return t===void 0?r:t}var z=I?I.isConcatSpreadable:void 0;function $e(n){return A(n)||ue(n)||!!(z&&n&&n[z])}function Ue(n,e,r,t,i){var s=-1,u=n.length;for(r||(r=$e),i||(i=[]);++s<u;){var a=n[s];r(a)?pe(i,a):t||(i[i.length]=a)}return i}var He="__lodash_hash_undefined__";function Be(n){return this.__data__.set(n,He),this}function qe(n){return this.__data__.has(n)}function C(n){var e=-1,r=n==null?0:n.length;for(this.__data__=new Ae;++e<r;)this.add(n[e])}C.prototype.add=C.prototype.push=Be;C.prototype.has=qe;function Ke(n,e){for(var r=-1,t=n==null?0:n.length;++r<t;)if(e(n[r],r,n))return!0;return!1}function de(n,e){return n.has(e)}var Ye=1,Ze=2;function he(n,e,r,t,i,s){var u=r&Ye,a=n.length,f=e.length;if(a!=f&&!(u&&f>a))return!1;var g=s.get(n),l=s.get(e);if(g&&l)return g==e&&l==n;var d=-1,h=!0,c=r&Ze?new C:void 0;for(s.set(n,e),s.set(e,n);++d<a;){var o=n[d],_=e[d];if(t)var v=u?t(_,o,d,e,n,s):t(o,_,d,n,e,s);if(v!==void 0){if(v)continue;h=!1;break}if(c){if(!Ke(e,function(m,O){if(!de(c,O)&&(o===m||i(o,m,r,t,s)))return c.push(O)})){h=!1;break}}else if(!(o===_||i(o,_,r,t,s))){h=!1;break}}return s.delete(n),s.delete(e),h}function Je(n){var e=-1,r=Array(n.size);return n.forEach(function(t,i){r[++e]=[i,t]}),r}function U(n){var e=-1,r=Array(n.size);return n.forEach(function(t){r[++e]=t}),r}var Qe=1,Xe=2,We="[object Boolean]",ze="[object Date]",Ve="[object Error]",je="[object Map]",ke="[object Number]",en="[object RegExp]",nn="[object Set]",rn="[object String]",tn="[object Symbol]",sn="[object ArrayBuffer]",un="[object DataView]",V=I?I.prototype:void 0,x=V?V.valueOf:void 0;function an(n,e,r,t,i,s,u){switch(r){case un:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case sn:return!(n.byteLength!=e.byteLength||!s(new Y(n),new Y(e)));case We:case ze:case ke:return me(+n,+e);case Ve:return n.name==e.name&&n.message==e.message;case en:case rn:return n==e+"";case je:var a=Je;case nn:var f=t&Qe;if(a||(a=U),n.size!=e.size&&!f)return!1;var g=u.get(n);if(g)return g==e;t|=Xe,u.set(n,e);var l=he(a(n),a(e),t,i,s,u);return u.delete(n),l;case tn:if(x)return x.call(n)==x.call(e)}return!1}var fn=1,dn=Object.prototype,hn=dn.hasOwnProperty;function ln(n,e,r,t,i,s){var u=r&fn,a=K(n),f=a.length,g=K(e),l=g.length;if(f!=l&&!u)return!1;for(var d=f;d--;){var h=a[d];if(!(u?h in e:hn.call(e,h)))return!1}var c=s.get(n),o=s.get(e);if(c&&o)return c==e&&o==n;var _=!0;s.set(n,e),s.set(e,n);for(var v=u;++d<f;){h=a[d];var m=n[h],O=e[h];if(t)var q=u?t(O,m,h,e,n,s):t(m,O,h,n,e,s);if(!(q===void 0?m===O||i(m,O,r,t,s):q)){_=!1;break}v||(v=h=="constructor")}if(_&&!v){var y=n.constructor,R=e.constructor;y!=R&&"constructor"in n&&"constructor"in e&&!(typeof y=="function"&&y instanceof y&&typeof R=="function"&&R instanceof R)&&(_=!1)}return s.delete(n),s.delete(e),_}var gn=1,j="[object Arguments]",k="[object Array]",T="[object Object]",on=Object.prototype,ee=on.hasOwnProperty;function _n(n,e,r,t,i,s){var u=A(n),a=A(e),f=u?k:Z(n),g=a?k:Z(e);f=f==j?T:f,g=g==j?T:g;var l=f==T,d=g==T,h=f==g;if(h&&J(n)){if(!J(e))return!1;u=!0,l=!1}if(h&&!l)return s||(s=new F),u||Oe(n)?he(n,e,r,t,i,s):an(n,e,f,r,t,i,s);if(!(r&gn)){var c=l&&ee.call(n,"__wrapped__"),o=d&&ee.call(e,"__wrapped__");if(c||o){var _=c?n.value():n,v=o?e.value():e;return s||(s=new F),i(_,v,r,t,s)}}return h?(s||(s=new F),ln(n,e,r,t,i,s)):!1}function H(n,e,r,t,i){return n===e?!0:n==null||e==null||!W(n)&&!W(e)?n!==n&&e!==e:_n(n,e,r,t,H,i)}var cn=1,pn=2;function vn(n,e,r,t){var i=r.length,s=i;if(n==null)return!s;for(n=Object(n);i--;){var u=r[i];if(u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++i<s;){u=r[i];var a=u[0],f=n[a],g=u[1];if(u[2]){if(f===void 0&&!(a in n))return!1}else{var l=new F,d;if(!(d===void 0?H(g,f,cn|pn,t,l):d))return!1}}return!0}function le(n){return n===n&&!Ne(n)}function En(n){for(var e=p(n),r=e.length;r--;){var t=e[r],i=n[t];e[r]=[t,i,le(i)]}return e}function ge(n,e){return function(r){return r==null?!1:r[n]===e&&(e!==void 0||n in Object(r))}}function An(n){var e=En(n);return e.length==1&&e[0][2]?ge(e[0][0],e[0][1]):function(r){return r===n||vn(r,n,e)}}function mn(n,e){return n!=null&&e in Object(n)}function oe(n,e,r){e=ie(e,n);for(var t=-1,i=e.length,s=!1;++t<i;){var u=M(e[t]);if(!(s=n!=null&&r(n,u)))break;n=n[u]}return s||++t!=i?s:(i=n==null?0:n.length,!!i&&Le(i)&&we(u,i)&&(A(n)||ue(n)))}function On(n,e){return n!=null&&oe(n,e,mn)}var Ln=1,wn=2;function Pn(n,e){return se(n)&&le(e)?ge(M(n),e):function(r){var t=Ge(r,n);return t===void 0&&t===e?On(r,n):H(e,t,Ln|wn)}}function bn(n){return function(e){return e==null?void 0:e[n]}}function Cn(n){return function(e){return fe(e,n)}}function yn(n){return se(n)?bn(M(n)):Cn(n)}function _e(n){return typeof n=="function"?n:n==null?ae:typeof n=="object"?A(n)?Pn(n[0],n[1]):An(n):yn(n)}function Rn(n,e){return n&&Ce(n,e,p)}function Nn(n,e){return function(r,t){if(r==null)return r;if(!Pe(r))return n(r,t);for(var i=r.length,s=-1,u=Object(r);++s<i&&t(u[s],s,u)!==!1;);return r}}var B=Nn(Rn);function Tn(n){return typeof n=="function"?n:ae}function L(n,e){var r=A(n)?ve:B;return r(n,Tn(e))}function Dn(n,e){var r=[];return B(n,function(t,i,s){e(t,i,s)&&r.push(t)}),r}function D(n,e){var r=A(n)?Ee:Dn;return r(n,_e(e))}var Fn=Object.prototype,In=Fn.hasOwnProperty;function Mn(n,e){return n!=null&&In.call(n,e)}function E(n,e){return n!=null&&oe(n,e,Mn)}function Sn(n,e){return be(e,function(r){return n[r]})}function G(n){return n==null?[]:Sn(n,p(n))}function P(n){return n===void 0}function xn(n,e,r,t,i){return i(n,function(s,u,a){r=t?(t=!1,s):e(r,s,u,a)}),r}function Gn(n,e,r){var t=A(n)?Te:xn,i=arguments.length<3;return t(n,_e(e),r,i,B)}var $n=1/0,Un=S&&1/U(new S([,-0]))[1]==$n?function(n){return new S(n)}:De,Hn=200;function Bn(n,e,r){var t=-1,i=xe,s=n.length,u=!0,a=[],f=a;if(s>=Hn){var g=Un(n);if(g)return U(g);u=!1,i=de,f=new C}else f=a;e:for(;++t<s;){var l=n[t],d=l;if(l=l!==0?l:0,u&&d===d){for(var h=f.length;h--;)if(f[h]===d)continue e;a.push(l)}else i(f,d,r)||(f!==a&&f.push(d),a.push(l))}return a}var qn=ye(function(n){return Bn(Ue(n,1,Re,!0))}),Kn="\0",w="\0",ne="";class ce{constructor(e={}){this._isDirected=E(e,"directed")?e.directed:!0,this._isMultigraph=E(e,"multigraph")?e.multigraph:!1,this._isCompound=E(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=N(void 0),this._defaultEdgeLabelFn=N(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[w]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return Q(e)||(e=N(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return p(this._nodes)}sources(){var e=this;return D(this.nodes(),function(r){return X(e._in[r])})}sinks(){var e=this;return D(this.nodes(),function(r){return X(e._out[r])})}setNodes(e,r){var t=arguments,i=this;return L(e,function(s){t.length>1?i.setNode(s,r):i.setNode(s)}),this}setNode(e,r){return E(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=r),this):(this._nodes[e]=arguments.length>1?r:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=w,this._children[e]={},this._children[w][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return E(this._nodes,e)}removeNode(e){var r=this;if(E(this._nodes,e)){var t=function(i){r.removeEdge(r._edgeObjs[i])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],L(this.children(e),function(i){r.setParent(i)}),delete this._children[e]),L(p(this._in[e]),t),delete this._in[e],delete this._preds[e],L(p(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(P(r))r=w;else{r+="";for(var t=r;!P(t);t=this.parent(t))if(t===e)throw new Error("Setting "+r+" as parent of "+e+" would create a cycle");this.setNode(r)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=r,this._children[r][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var r=this._parent[e];if(r!==w)return r}}children(e){if(P(e)&&(e=w),this._isCompound){var r=this._children[e];if(r)return p(r)}else{if(e===w)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var r=this._preds[e];if(r)return p(r)}successors(e){var r=this._sucs[e];if(r)return p(r)}neighbors(e){var r=this.predecessors(e);if(r)return qn(r,this.successors(e))}isLeaf(e){var r;return this.isDirected()?r=this.successors(e):r=this.neighbors(e),r.length===0}filterNodes(e){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var t=this;L(this._nodes,function(u,a){e(a)&&r.setNode(a,u)}),L(this._edgeObjs,function(u){r.hasNode(u.v)&&r.hasNode(u.w)&&r.setEdge(u,t.edge(u))});var i={};function s(u){var a=t.parent(u);return a===void 0||r.hasNode(a)?(i[u]=a,a):a in i?i[a]:s(a)}return this._isCompound&&L(r.nodes(),function(u){r.setParent(u,s(u))}),r}setDefaultEdgeLabel(e){return Q(e)||(e=N(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return G(this._edgeObjs)}setPath(e,r){var t=this,i=arguments;return Gn(e,function(s,u){return i.length>1?t.setEdge(s,u,r):t.setEdge(s,u),u}),this}setEdge(){var e,r,t,i,s=!1,u=arguments[0];typeof u=="object"&&u!==null&&"v"in u?(e=u.v,r=u.w,t=u.name,arguments.length===2&&(i=arguments[1],s=!0)):(e=u,r=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],s=!0)),e=""+e,r=""+r,P(t)||(t=""+t);var a=b(this._isDirected,e,r,t);if(E(this._edgeLabels,a))return s&&(this._edgeLabels[a]=i),this;if(!P(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(r),this._edgeLabels[a]=s?i:this._defaultEdgeLabelFn(e,r,t);var f=Yn(this._isDirected,e,r,t);return e=f.v,r=f.w,Object.freeze(f),this._edgeObjs[a]=f,re(this._preds[r],e),re(this._sucs[e],r),this._in[r][a]=f,this._out[e][a]=f,this._edgeCount++,this}edge(e,r,t){var i=arguments.length===1?$(this._isDirected,arguments[0]):b(this._isDirected,e,r,t);return this._edgeLabels[i]}hasEdge(e,r,t){var i=arguments.length===1?$(this._isDirected,arguments[0]):b(this._isDirected,e,r,t);return E(this._edgeLabels,i)}removeEdge(e,r,t){var i=arguments.length===1?$(this._isDirected,arguments[0]):b(this._isDirected,e,r,t),s=this._edgeObjs[i];return s&&(e=s.v,r=s.w,delete this._edgeLabels[i],delete this._edgeObjs[i],te(this._preds[r],e),te(this._sucs[e],r),delete this._in[r][i],delete this._out[e][i],this._edgeCount--),this}inEdges(e,r){var t=this._in[e];if(t){var i=G(t);return r?D(i,function(s){return s.v===r}):i}}outEdges(e,r){var t=this._out[e];if(t){var i=G(t);return r?D(i,function(s){return s.w===r}):i}}nodeEdges(e,r){var t=this.inEdges(e,r);if(t)return t.concat(this.outEdges(e,r))}}ce.prototype._nodeCount=0;ce.prototype._edgeCount=0;function re(n,e){n[e]?n[e]++:n[e]=1}function te(n,e){--n[e]||delete n[e]}function b(n,e,r,t){var i=""+e,s=""+r;if(!n&&i>s){var u=i;i=s,s=u}return i+ne+s+ne+(P(t)?Kn:t)}function Yn(n,e,r,t){var i=""+e,s=""+r;if(!n&&i>s){var u=i;i=s,s=u}var a={v:i,w:s};return t&&(a.name=t),a}function $(n,e){return b(n,e.v,e.w,e.name)}export{ce as G,_e as a,Ue as b,Fe as c,B as d,Tn as e,L as f,Rn as g,E as h,P as i,fe as j,On as k,D as l,Gn as r,G as v};