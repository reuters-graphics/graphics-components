import{p as M,d as _,s as R}from"./styles-b83b31c9-DRBEoOoJ.js";import{l as d,c,h as w,u as B,_ as G,$ as D,a0 as E,a1 as C,j as $}from"./intro-NBq-T5Lc.js";import{G as z}from"./graph-C4p7ONh8.js";import{r as P}from"./index-01f381cb-BAd4NaZo.js";import"./dayjs.min-BIwLhz4I.js";import"./layout-CpEiAgfU.js";import"./docsPage-CrCNk6vV.js";import"./index-DwChlhAQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-CswL0fy2.js";import"./index-lnWGua5u.js";import"./iframe-DpI0ciXx.js";import"../sb-preview/runtime.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./_initCloneObject-D0ofMy5o.js";import"./isSymbol-Br3Fhm6g.js";import"./toString-DnxJX3Gz.js";import"./isObject-C3e4t58V.js";import"./Table-BWfy3k97.js";import"./parseCss-CUU1xmUw.js";import"./index-CROxjmim.js";import"./_color-UiaLB_4F.js";import"./_baseClone-BMmn5UJb.js";import"./clone-BwatiCUu.js";import"./edges-066a5561-3tkdYwXb.js";import"./createText-ca0c5216-Di1j98Ha.js";import"./line-BlXTYoGZ.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./toNumber-BrygkUtK.js";import"./_baseSet-DBo-XiK2.js";const S=s=>$.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,e,m,a){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(i){var o,r;const l=s[i],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};e.setNode(l.id,p),A(l.classes,e,m,a,l.id),d.info("setNode",p)})},A=function(s,e,m,a,t){const i=Object.keys(s);d.info("keys:",i),d.info(s),i.filter(o=>s[o].parent==t).forEach(function(o){var r,l;const n=s[o],p=n.cssClasses.join(" "),y=D(n.styles),u=n.label??n.id,b=0,f={labelStyle:y.labelStyle,shape:"class_box",labelText:S(u),classData:n,rx:b,ry:b,class:p,style:y.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,t)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};e.setNode(n.id,f),t&&e.setParent(n.id,t),d.info("setNode",f)})},F=function(s,e,m,a){d.info(s),s.forEach(function(t,i){var o,r;const l=t,n="",p={labelStyle:"",style:""},y=l.text,u=0,h={labelStyle:p.labelStyle,shape:"note",labelText:S(y),noteData:l,rx:u,ry:u,class:n,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(e.setNode(l.id,h),d.info("setNode",h),!l.class||!(l.class in a))return;const f=m+i,x={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:E(k.curve,C)};e.setEdge(l.id,l.class,x,f)})},H=function(s,e){const m=c().flowchart;let a=0;s.forEach(function(t){var i;a++;const o={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${a}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:N(t.relation.type1),arrowTypeEnd:N(t.relation.type2),style:"fill:none",labelStyle:"",curve:E(m==null?void 0:m.curve,C)};if(d.info(o,t),t.style!==void 0){const r=D(t.style);o.style=r.style,o.labelStyle=r.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+t.text+"</span>"):(o.labelType="text",o.label=t.text.replace($.lineBreakRegex,`
`),t.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),e.setEdge(t.id1,t.id2,o,a)})},V=function(s){k={...k,...s}},W=async function(s,e,m,a){d.info("Drawing class - ",e);const t=c().flowchart??c().class,i=c().securityLevel;d.info("config:",t);const o=(t==null?void 0:t.nodeSpacing)??50,r=(t==null?void 0:t.rankSpacing)??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),p=a.db.getClasses(),y=a.db.getRelations(),u=a.db.getNotes();d.info(y),q(n,l,e,a),A(p,l,e,a),H(y,l),F(u,l,y.length+1,p);let b;i==="sandbox"&&(b=w("#i"+e));const h=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),f=h.select(`[id="${e}"]`),x=h.select("#"+e+" g");if(await P(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),B.insertTitle(f,"classTitleText",(t==null?void 0:t.titleTopMargin)??5,a.db.getDiagramTitle()),G(l,f,t==null?void 0:t.diagramPadding,t==null?void 0:t.useMaxWidth),!(t!=null&&t.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function N(s){let e;switch(s){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}const J={setConf:V,draw:W},Lt={parser:M,db:_,renderer:J,styles:R,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{Lt as diagram};