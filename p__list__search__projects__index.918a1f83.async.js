(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9987],{73715:function(q,g){"use strict";var t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};g.Z=t},82574:function(q,g,t){"use strict";var o=t(35361),d=t(50959),b=t(5590),I=t(69164),E=function(v,j){return d.createElement(I.Z,(0,o.Z)((0,o.Z)({},v),{},{ref:j,icon:b.Z}))};E.displayName="DownOutlined",g.Z=d.forwardRef(E)},1861:function(q,g,t){"use strict";var o=t(35361),d=t(50959),b=t(73715),I=t(69164),E=function(v,j){return d.createElement(I.Z,(0,o.Z)((0,o.Z)({},v),{},{ref:j,icon:b.Z}))};E.displayName="UpOutlined",g.Z=d.forwardRef(E)},94368:function(q,g,t){"use strict";t.d(g,{O:function(){return o}});var o=Array.from({length:12}).map(function(d,b){return{value:"cat".concat(b+1),label:"\u7C7B\u76EE".concat(b+1)}})},56684:function(q,g,t){"use strict";t.r(g),t.d(g,{default:function(){return Q}});var o=t(26068),d=t.n(o),b=t(29670),I=t(26935),E=t(15922),m=t(60600),v=t(16965),j=t(48966),H=t(61323),_=t(46545),ee=t(5726),F=t.n(ee),W=t(92117),te=t.n(W),U=t(94368),ae=t(67825),A=t.n(ae),P=t(82092),C=t.n(P),ne=t(27850),K=t(74629),Ee=t(82187),de=t.n(Ee),V=t(50959),w=t(95815),Ie=(0,w.kc)(function(h){var a=h.token;return{avatarList:{display:"inline-block",ul:{display:"inline-block",marginLeft:"8px",fontSize:"0"}},avatarItem:{display:"inline-block",width:a.controlHeight,height:a.controlHeight,marginLeft:"-8px",fontSize:a.fontSize,".ant-avatar":{border:"1px solid ".concat(a.colorBorder)}},avatarItemLarge:{width:a.controlHeightLG,height:a.controlHeightLG},avatarItemSmall:{width:a.controlHeightSM,height:a.controlHeightSM},avatarItemMini:{width:"20px",height:"20px",".ant-avatar":{width:"20px",height:"20px",lineHeight:"20px",".ant-avatar-string":{fontSize:"12px",lineHeight:"18px"}}}}}),Ce=Ie,n=t(11527),Se=["children","size","maxLength","excessItemsStyle"],Te=function(a,i){return de()(i.avatarItem,C()(C()(C()({},i.avatarItemLarge,a==="large"),i.avatarItemSmall,a==="small"),i.avatarItemMini,a==="mini"))},e=function(a){var i=a.src,c=a.size,f=a.tips,S=a.onClick,D=S===void 0?function(){}:S,L=Ce(),G=L.styles,x=Te(c,G);return(0,n.jsx)("li",{className:x,onClick:D,children:f?(0,n.jsx)(ne.Z,{title:f,children:(0,n.jsx)(K.C,{src:i,size:c,style:{cursor:"pointer"}})}):(0,n.jsx)(K.C,{src:i,size:c})})},s=function(a){var i=a.children,c=a.size,f=a.maxLength,S=f===void 0?5:f,D=a.excessItemsStyle,L=A()(a,Se),G=Ce(),x=G.styles,y=V.Children.count(i),T=S>=y?y:S,J=V.Children.toArray(i),oe=J.slice(0,T).map(function(Ne){return V.cloneElement(Ne,{size:c})});if(T<y){var ye=Te(c,x);oe.push((0,n.jsx)("li",{className:ye,children:(0,n.jsx)(K.C,{size:c,style:D,children:"+".concat(y-S)})},"exceed"))}return(0,n.jsx)("div",d()(d()({},L),{},{className:x.avatarList,children:(0,n.jsxs)("ul",{children:[" ",oe," "]})}))};s.Item=e;var u=s,r=(0,w.kc)(function(h){var a=h.token;return{standardFormRow:{display:"flex",width:"100%",marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px dashed ".concat(a.colorSplit),".ant-form-item, .ant-legacy-form-item":{marginRight:"24px"},".ant-form-item-label, .ant-legacy-form-item-label":{label:{marginRight:"0",color:a.colorText}},".ant-form-item-label, .ant-legacy-form-item-label, .ant-form-item-control, .ant-legacy-form-item-control":{padding:"0",lineHeight:"32px"}},label:{flex:"0 0 auto",marginRight:"24px",color:a.colorTextHeading,fontSize:a.fontSize,textAlign:"right","& > span":{display:"inline-block",height:"32px",lineHeight:"32px","&::after":{content:"'\uFF1A'"}}},content:{flex:"1 1 0",".ant-form-item, .ant-legacy-form-item":{"&:last-child":{display:"block",marginRight:"0"}}},standardFormRowLast:{marginBottom:"0",paddingBottom:"0",border:"none"},standardFormRowBlock:{".ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper":{display:"block"}},standardFormRowGrid:{".ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper":{display:"block"},".ant-form-item-label, .ant-legacy-form-item-label":{float:"left"}}}}),l=r,$=["title","children","last","block","grid"],p=function(a){var i=a.title,c=a.children,f=a.last,S=a.block,D=a.grid,L=A()(a,$),G=l(),x=G.styles,y=de()(x.standardFormRow,C()(C()(C()({},x.standardFormRowBlock,S),x.standardFormRowLast,f),x.standardFormRowGrid,D));return(0,n.jsxs)("div",d()(d()({className:y},L),{},{children:[i&&(0,n.jsx)("div",{className:x.label,children:(0,n.jsx)("span",{children:i})}),(0,n.jsx)("div",{className:x.content,children:c})]}))},N=p,R=t(15558),re=t.n(R),z=t(48305),se=t.n(z),X=t(1861),k=t(82574),ue=t(59084),me=t(96771),Z=(0,w.kc)(function(h){var a=h.token;return{tagSelect:{position:"relative",maxHeight:"32px",marginLeft:"-8px",overflow:"hidden",lineHeight:"32px",transition:"all 0.3s",userSelect:"none",".ant-tag":{marginRight:"24px",padding:"0 8px",fontSize:a.fontSize}},trigger:{position:"absolute",top:"0",right:"0","span.anticon":{fontSize:"12px"}},expanded:{maxHeight:"200px",transition:"all 0.3s"},hasExpandTag:{paddingRight:"50px"}}}),ge=Z,ve=ue.Z.CheckableTag,he=function(a){var i=a.children,c=a.checked,f=a.onChange,S=a.value;return(0,n.jsx)(ve,{checked:!!c,onChange:function(L){return f&&f(S,L)},children:i},S)};he.isTagSelectOption=!0;var fe=function(a){var i=ge(),c=i.styles,f=a.children,S=a.hideCheckAll,D=S===void 0?!1:S,L=a.className,G=a.style,x=a.expandable,y=a.actionsText,T=y===void 0?{}:y,J=(0,V.useState)(!1),oe=se()(J,2),ye=oe[0],Ne=oe[1],Ke=(0,me.C8)(a.defaultValue||[],{value:a.value,defaultValue:a.defaultValue,onChange:a.onChange}),ze=se()(Ke,2),ce=ze[0],Ze=ze[1],De=function(M){return M&&M.type&&(M.type.isTagSelectOption||M.type.displayName==="TagSelectOption")},He=function(){var M=V.Children.toArray(f),le=M.filter(function(Y){return De(Y)}).map(function(Y){return Y.props.value});return le||[]},Ve=function(M){var le=[];M&&(le=He()),Ze(le)},we=function(M,le){var Y=re()(ce||[]),Re=Y.indexOf(M);le&&Re===-1?Y.push(M):!le&&Re>-1&&Y.splice(Re,1),Ze(Y)},ke=He().length===(ce==null?void 0:ce.length),Fe=T.expandText,Ge=Fe===void 0?"\u5C55\u5F00":Fe,We=T.collapseText,Xe=We===void 0?"\u6536\u8D77":We,Ue=T.selectAllText,Qe=Ue===void 0?"\u5168\u90E8":Ue,Je=de()(c.tagSelect,L,C()(C()({},c.hasExpandTag,x),c.expanded,ye));return(0,n.jsxs)("div",{className:Je,style:G,children:[D?null:(0,n.jsx)(ve,{checked:ke,onChange:Ve,children:Qe},"tag-select-__all__"),f&&V.Children.map(f,function(B){return De(B)?V.cloneElement(B,{key:"tag-select-".concat(B.props.value),value:B.props.value,checked:ce&&ce.indexOf(B.props.value)>-1,onChange:we}):B}),x&&(0,n.jsx)("a",{className:c.trigger,onClick:function(){Ne(!ye)},children:ye?(0,n.jsxs)(n.Fragment,{children:[Xe," ",(0,n.jsx)(X.Z,{})]}):(0,n.jsxs)(n.Fragment,{children:[Ge,(0,n.jsx)(k.Z,{})]})})]})};fe.Option=he;var ie=fe,Pe=t(90228),O=t.n(Pe),$e=t(87999),Le=t.n($e);function Ae(h){return pe.apply(this,arguments)}function pe(){return pe=Le()(O()().mark(function h(a){return O()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,b.request)("/api/fake_list",{params:a}));case 1:case"end":return c.stop()}},h)})),pe.apply(this,arguments)}var be=(0,w.kc)(function(h){var a=h.token;return{card:{".ant-card-meta-title":{marginBottom:"4px","& > a":{display:"inline-block",maxWidth:"100%",color:a.colorTextHeading}},".ant-card-meta-description":{height:"44px",overflow:"hidden",lineHeight:"22px"},"&:hover":{".ant-card-meta-title > a":{color:a.colorPrimary}}},cardItemContent:{display:"flex",height:"20px",marginTop:"16px",marginBottom:"-4px",lineHeight:"20px","& > span":{flex:"1",color:a.colorTextSecondary,fontSize:"12px"}},avatarList:{flex:"0 1 auto"},cardList:{marginTop:"24px"},coverCardList:{".ant-list .ant-list-item-content-single":{maxWidth:"100%"}}}}),Be=be;F().extend(te());var xe=I.Z.Item,je=E.Z.Paragraph,Me=function(a,i){return"".concat(a,"-").concat(i)},Oe=function(){var a=Be(),i=a.styles,c=(0,b.useRequest)(function(y){return console.log("form data",y),Ae({count:8})}),f=c.data,S=c.loading,D=c.run,L=(f==null?void 0:f.list)||[],G=L&&(0,n.jsx)(m.Z,{rowKey:"id",loading:S,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:L,renderItem:function(T){return(0,n.jsx)(m.Z.Item,{children:(0,n.jsxs)(v.Z,{className:i.card,hoverable:!0,cover:(0,n.jsx)("img",{alt:T.title,src:T.cover}),children:[(0,n.jsx)(v.Z.Meta,{title:(0,n.jsx)("a",{children:T.title}),description:(0,n.jsx)(je,{ellipsis:{rows:2},children:T.subDescription})}),(0,n.jsxs)("div",{className:i.cardItemContent,children:[(0,n.jsx)("span",{children:F()(T.updatedAt).fromNow()}),(0,n.jsx)("div",{className:i.avatarList,children:(0,n.jsx)(u,{size:"small",children:T.members.map(function(J,oe){return(0,n.jsx)(u.Item,{src:J.avatar,tips:J.name},Me(T.id,oe))})})})]})]})})}}),x={wrapperCol:{xs:{span:24},sm:{span:16}}};return(0,n.jsxs)("div",{className:i.coverCardList,children:[(0,n.jsx)(v.Z,{bordered:!1,children:(0,n.jsxs)(I.Z,{layout:"inline",onValuesChange:function(T,J){D(J)},children:[(0,n.jsx)(N,{title:"\u6240\u5C5E\u7C7B\u76EE",block:!0,style:{paddingBottom:11},children:(0,n.jsx)(xe,{name:"category",children:(0,n.jsx)(ie,{expandable:!0,children:U.O.map(function(y){return(0,n.jsx)(ie.Option,{value:y.value,children:y.label},y.value)})})})}),(0,n.jsx)(N,{title:"\u5176\u5B83\u9009\u9879",grid:!0,last:!0,children:(0,n.jsxs)(j.Z,{gutter:16,children:[(0,n.jsx)(H.Z,{lg:8,md:10,sm:10,xs:24,children:(0,n.jsx)(xe,d()(d()({},x),{},{label:"\u4F5C\u8005",name:"author",children:(0,n.jsx)(_.Z,{placeholder:"\u4E0D\u9650",style:{maxWidth:200,width:"100%"},options:[{label:"\u738B\u662D\u541B",value:"lisa"}]})}))}),(0,n.jsx)(H.Z,{lg:8,md:10,sm:10,xs:24,children:(0,n.jsx)(xe,d()(d()({},x),{},{label:"\u597D\u8BC4\u5EA6",name:"rate",children:(0,n.jsx)(_.Z,{placeholder:"\u4E0D\u9650",style:{maxWidth:200,width:"100%"},options:[{label:"\u4F18\u79C0",value:"good"},{label:"\u666E\u901A",value:"normal"}]})}))})]})})]})}),(0,n.jsx)("div",{className:i.cardList,children:G})]})},Q=Oe},59084:function(q,g,t){"use strict";t.d(g,{Z:function(){return Te}});var o=t(50959),d=t(22410),b=t(82187),I=t.n(b),E=t(60811),m=t(17005),v=t(68300),j=t(92576),H=t(25446),_=t(99978),ee=t(55985),F=t(37324),W=t(87077);const te=e=>{const{paddingXXS:s,lineWidth:u,tagPaddingHorizontal:r,componentCls:l,calc:$}=e,p=$(r).sub(u).equal(),N=$(s).sub(u).equal();return{[l]:Object.assign(Object.assign({},(0,ee.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:p,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,H.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${l}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${l}-close-icon`]:{marginInlineStart:N,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${l}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${l}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:p}}),[`${l}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},U=e=>{const{lineWidth:s,fontSizeIcon:u,calc:r}=e,l=e.fontSizeSM;return(0,F.TS)(e,{tagFontSize:l,tagLineHeight:(0,H.bf)(r(e.lineHeightSM).mul(l).equal()),tagIconSize:r(u).sub(r(s).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},ae=e=>({defaultBg:new _.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var A=(0,W.I$)("Tag",e=>{const s=U(e);return te(s)},ae),P=function(e,s){var u={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(u[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)s.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(u[r[l]]=e[r[l]]);return u},ne=o.forwardRef((e,s)=>{const{prefixCls:u,style:r,className:l,checked:$,onChange:p,onClick:N}=e,R=P(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:re,tag:z}=o.useContext(j.E_),se=ge=>{p==null||p(!$),N==null||N(ge)},X=re("tag",u),[k,ue,me]=A(X),Z=I()(X,`${X}-checkable`,{[`${X}-checkable-checked`]:$},z==null?void 0:z.className,l,ue,me);return k(o.createElement("span",Object.assign({},R,{ref:s,style:Object.assign(Object.assign({},r),z==null?void 0:z.style),className:Z,onClick:se})))}),K=t(61281);const Ee=e=>(0,K.Z)(e,(s,u)=>{let{textColor:r,lightBorderColor:l,lightColor:$,darkColor:p}=u;return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:r,background:$,borderColor:l,"&-inverse":{color:e.colorTextLightSolid,background:p,borderColor:p},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var de=(0,W.bk)(["Tag","preset"],e=>{const s=U(e);return Ee(s)},ae);function V(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const w=(e,s,u)=>{const r=V(u);return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:e[`color${u}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Ie=(0,W.bk)(["Tag","status"],e=>{const s=U(e);return[w(s,"success","Success"),w(s,"processing","Info"),w(s,"error","Error"),w(s,"warning","Warning")]},ae),Ce=function(e,s){var u={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&s.indexOf(r)<0&&(u[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)s.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(u[r[l]]=e[r[l]]);return u};const n=(e,s)=>{const{prefixCls:u,className:r,rootClassName:l,style:$,children:p,icon:N,color:R,onClose:re,closeIcon:z,closable:se,bordered:X=!0}=e,k=Ce(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:ue,direction:me,tag:Z}=o.useContext(j.E_),[ge,ve]=o.useState(!0);o.useEffect(()=>{"visible"in k&&ve(k.visible)},[k.visible]);const he=(0,E.o2)(R),fe=(0,E.yT)(R),ie=he||fe,Pe=Object.assign(Object.assign({backgroundColor:R&&!ie?R:void 0},Z==null?void 0:Z.style),$),O=ue("tag",u),[$e,Le,Ae]=A(O),pe=I()(O,Z==null?void 0:Z.className,{[`${O}-${R}`]:ie,[`${O}-has-color`]:R&&!ie,[`${O}-hidden`]:!ge,[`${O}-rtl`]:me==="rtl",[`${O}-borderless`]:!X},r,l,Le,Ae),be=Q=>{Q.stopPropagation(),re==null||re(Q),!Q.defaultPrevented&&ve(!1)},[,Be]=(0,m.Z)(se,z,Q=>Q===null?o.createElement(d.Z,{className:`${O}-close-icon`,onClick:be}):o.createElement("span",{className:`${O}-close-icon`,onClick:be},Q),null,!1),xe=typeof k.onClick=="function"||p&&p.type==="a",je=N||null,Me=je?o.createElement(o.Fragment,null,je,p&&o.createElement("span",null,p)):p,Oe=o.createElement("span",Object.assign({},k,{ref:s,className:pe,style:Pe}),Me,Be,he&&o.createElement(de,{key:"preset",prefixCls:O}),fe&&o.createElement(Ie,{key:"status",prefixCls:O}));return $e(xe?o.createElement(v.Z,{component:"Tag"},Oe):Oe)},Se=o.forwardRef(n);Se.CheckableTag=ne;var Te=Se},92117:function(q){(function(g,t){q.exports=t()})(this,function(){"use strict";return function(g,t,o){g=g||{};var d=t.prototype,b={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function I(m,v,j,H){return d.fromToBase(m,v,j,H)}o.en.relativeTime=b,d.fromToBase=function(m,v,j,H,_){for(var ee,F,W,te=j.$locale().relativeTime||b,U=g.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ae=U.length,A=0;A<ae;A+=1){var P=U[A];P.d&&(ee=H?o(m).diff(j,P.d,!0):j.diff(m,P.d,!0));var C=(g.rounding||Math.round)(Math.abs(ee));if(W=ee>0,C<=P.r||!P.r){C<=1&&A>0&&(P=U[A-1]);var ne=te[P.l];_&&(C=_(""+C)),F=typeof ne=="string"?ne.replace("%d",C):ne(C,v,P.l,W);break}}if(v)return F;var K=W?te.future:te.past;return typeof K=="function"?K(F):K.replace("%s",F)},d.to=function(m,v){return I(m,v,this,!0)},d.from=function(m,v){return I(m,v,this)};var E=function(m){return m.$u?o.utc():o()};d.toNow=function(m){return this.to(E(this),m)},d.fromNow=function(m){return this.from(E(this),m)}}})}}]);
