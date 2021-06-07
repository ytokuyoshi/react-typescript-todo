(this["webpackJsonpreact-typescript-todo"]=this["webpackJsonpreact-typescript-todo"]||[]).push([[0],{126:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),c=t.n(i),o=(t(99),t(80)),l=t(180),s=t(78),d=t.n(s),u=t(172),j=t(5),b=t(167),O=t(173),h=t(175),f=t(166),g=t(171),m=t(174),p=t(168),C=t(185),v=t(74),x=t.n(v),w=t(75),k=t.n(w),D=t(3),N=Object(j.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white}}}))(f.a),y=Object(b.a)((function(){return{table:{},icon:{}}})),R=function(e){var n=e.row,t=e.rowIndex,a=e.isHeader,r=e.handleHeaderClick,i=e.handleRowDeleteClick,c=e.handleRowCopyClick,o=e.handleRowClick,l=e.orderColName,s=e.isOrderAsc,d=y(),u=function(){},j=s?" \u25b2":" \u25bc";return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(p.a,{children:[a?Object(D.jsx)(N,{align:"right",onClick:u,children:"#"},-100):Object(D.jsx)(f.a,{align:"right",children:(null!==t&&void 0!==t?t:0)+1},-100),Array.isArray(n)&&n.map((function(e,n){return a?Object(D.jsxs)(N,{align:"left",onClick:null!==r&&void 0!==r?r:u,children:[e,e===(null!==l&&void 0!==l?l:"")?j:""]},n):Object(D.jsx)(f.a,{align:"left",onClick:o?function(){return o(null!==t&&void 0!==t?t:-1)}:u,children:e},n)})),a?Object(D.jsx)(N,{align:"center",onClick:u},-1):Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(f.a,{align:"center",children:Object(D.jsx)(C.a,{title:"\u524a\u9664",children:Object(D.jsx)(x.a,{className:d.icon,color:"action",onClick:i?function(){return i(null!==t&&void 0!==t?t:-1)}:u})})},-1)}),a?Object(D.jsx)(N,{align:"center",onClick:u},-10):Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(f.a,{align:"center",children:Object(D.jsx)(C.a,{title:"\u30b3\u30d4\u30fc",children:Object(D.jsx)(k.a,{className:d.icon,color:"action",onClick:c?function(){return c(null!==t&&void 0!==t?t:-1)}:u})})},-10)})]})})},S=function(e){var n=e.header,t=e.rows,a=e.handleHeaderClick,r=e.handleRowDeleteClick,i=e.handleRowCopyClick,c=e.handleRowClick,o=e.orderColName,l=e.isOrderAsc,s=y();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(g.a,{component:u.a,children:Object(D.jsxs)(O.a,{className:s.table,"aria-label":"simple table",padding:"default",size:"small",children:[Object(D.jsx)(m.a,{children:Object(D.jsx)(R,{row:n,isHeader:!0,handleHeaderClick:a,orderColName:o,isOrderAsc:l})}),Object(D.jsx)(h.a,{children:Array.isArray(t)&&t.map((function(e,n){return Object(D.jsx)(R,{row:e,rowIndex:n,handleRowDeleteClick:r,handleRowCopyClick:i,handleRowClick:c},n)}))})]})})})},F=t(184),I=t(179),A=t(177),H=t(178),L=t(176),T=function(e){var n=e.isOpen,t=e.onClickCancel,a=e.onClickOK,r=e.title,i=e.description;return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(F.a,{open:n,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(D.jsx)(L.a,{id:"alert-dialog-title",children:r}),Object(D.jsx)(A.a,{children:Object(D.jsx)(H.a,{id:"alert-dialog-description",children:i})}),Object(D.jsxs)(I.a,{children:[Object(D.jsx)(l.a,{onClick:t,variant:"contained",color:"default",children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(D.jsx)(l.a,{onClick:a,variant:"contained",color:"primary",autoFocus:!0,children:"OK"})]})]})})},K=t(21),_=t(14),U=t(182),J=function(e,n,t){return t?e<n?-1:1:e>n?-1:1},P=function(e){for(var n=[],t=0;t<e;t++)n.push("");return n},Y=function(e){var n,t,a,r,i,c;return{pageTitle:null!==(n=e.pageTitle)&&void 0!==n?n:"",pageDescription:null!==(t=e.pageDescription)&&void 0!==t?t:[],colName:null!==(a=e.colName)&&void 0!==a?a:[],rows:null!==(r=e.rows)&&void 0!==r?r:[],editRowIndex:null!==(i=e.editRowIndex)&&void 0!==i?i:-1,isHeaderDisable:null!==(c=e.isHeaderDisable)&&void 0!==c&&c}},E="\u6700\u7d42\u66f4\u65b0\u65e5\u6642",M=Object(b.a)((function(){return{input:{margin:5},formControl:{minWidth:120}}})),B=function(e){var n=e.isOpen,t=e.onClickCancel,r=e.onClickOK,i=e.title,c=e.description,o=e.colName,s=e.editRow,d=M(),u=Object(a.useState)(P(null===o||void 0===o?void 0:o.length)),j=Object(_.a)(u,2),b=j[0],O=j[1];Object(a.useEffect)((function(){if(o)if(s&&Array.isArray(s)){for(var e=[],n=0;n<o.length;n++){o[n]!==E&&e.push(s[n])}O(e)}else{var t=0;o.includes(E)&&(t=1),O(P(o.length-t))}}),[n,o,s]);return Object(D.jsx)("div",{children:Object(D.jsxs)(F.a,{maxWidth:"lg",open:n,onClose:t,"aria-labelledby":"form-dialog-title",children:[Object(D.jsx)(L.a,{id:"form-dialog-title",children:i}),Object(D.jsxs)(A.a,{children:[c?Object(D.jsx)(H.a,{id:"alert-dialog-description",children:c}):null,Array.isArray(o)&&o.map((function(e,n){return e===E?null:Object(D.jsx)(U.a,{className:d.input,variant:"outlined",margin:"normal",id:e,label:e,type:"",onChange:function(e){return function(e,n){var t,a,r=null!==(t=null===(a=e.target)||void 0===a?void 0:a.value)&&void 0!==t?t:"",i=Object(K.a)(b);i[n]=r,O(i)}(e,n)},value:b[n]},n)}))]}),Object(D.jsxs)(I.a,{children:[Object(D.jsx)(l.a,{onClick:t,variant:"contained",color:"default",children:"\u30ad\u30e3\u30f3\u30bb\u30eb"}),Object(D.jsx)(l.a,{onClick:function(){r(b)},variant:"contained",color:"primary",autoFocus:!0,children:"OK"})]})]})})},$=t(181),z=t(186),G="POSITION_LEFT",W="POSITION_RIGHT",q=function(e){var n=e.onChange,t=e.leftLabel,a=e.rightLabel,i=e.defaultIsLeftSelected,c=r.a.useState(i?G:W),o=Object(_.a)(c,2),l=o[0],s=o[1];return Object(D.jsxs)(z.a,{value:l,exclusive:!0,onChange:function(e,t){t&&(s(t),n&&n(t===G))},"aria-label":"text alignment",children:[Object(D.jsx)($.a,{value:G,"aria-label":G,children:t}),Object(D.jsx)($.a,{value:W,"aria-label":W,children:a})]})},Q=Object(b.a)((function(){return{root:{paddingLeft:20,paddingRight:20,paddingTop:20,paddingBottom:20},icon:{verticalAlign:"bottom",marginLeft:10,marginRight:10,marginTop:5,marginBottom:5},button:{marginLeft:0,marginRight:20,marginTop:5,marginBottom:5}}})),V=t(37),X=t(57),Z=t.n(X),ee=t(76),ne=t(77),te=t.n(ne),ae=function(){var e=Object(ee.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.a.get("https://jsonplaceholder.typicode.com/todos/1");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),re=t(51),ie=t.n(re),ce=function(e,n,t){try{var a=new Uint8Array([239,187,191]),r=new Blob([a,e],{type:n}),i=URL.createObjectURL(r),c=document.createElement("a");document.body.appendChild(c),c.download=t,c.href=i,c.click(),c.remove(),setTimeout((function(){URL.revokeObjectURL(i)}),1e4)}catch(o){console.error(o)}},oe="LOCAL_STORAGE_KEY",le=function(e){localStorage.setItem(oe,JSON.stringify(e))},se={pageTitle:"TODO\u30ea\u30b9\u30c8",pageDescription:["\u666e\u901a\u306eTODO\u30ea\u30b9\u30c8\u7528\u9014\u3060\u3051\u3067\u306a\u304f\u3001\u90e8\u5c4b\u306e\u7247\u3065\u3051\u3001\u6301\u3061\u7269\u7ba1\u7406\u306a\u3069\u3001\u4f7f\u3044\u65b9\u6b21\u7b2c\u3067\u8272\u3005\u4f7f\u3048\u307e\u3059","\u30ab\u30e9\u30e0\u306e\u6570\u3068\u30bf\u30a4\u30c8\u30eb\u306fJSON\u3092\u7de8\u96c6\u3057\u518d\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u5909\u66f4\u53ef\u80fd","\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u3068\u8aac\u660e\u6587\u3082JSON\u3067\u7ba1\u7406\u3057\u3066\u3044\u308b\u306e\u3067\u7de8\u96c6\u53ef\u80fd","\u300c\u6700\u7d42\u66f4\u65b0\u65e5\u300d\u306f\u30d8\u30c3\u30c0\u30fc\u540d\u79f0\uff08colName\uff09\u306b1\u304b\u6240\u3060\u3051\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3001\u4f4d\u7f6e\u306f\u79fb\u52d5\u53ef\u80fd","\u300c\u30e1\u30e2\u300d\u300c\u6700\u7d42\u66f4\u65b0\u65e5\u300d\u4ee5\u5916\u306f\u4e0a\u4f4d\u9805\u76ee\u3092\u542b\u3081\u3066\u30bd\u30fc\u30c8\u3057\u307e\u3059\uff08\u300c\u30e1\u30e2\u300d\u300c\u6700\u7d42\u66f4\u65b0\u65e5\u300d\u306f\u53f3\u7aef\u306b\u914d\u7f6e\u3059\u308b\u524d\u63d0\u306e\u4ed5\u69d8\uff09"],colName:["item1","item2",E],rows:[["a_itemName11","c_itemName21","2021/06/01 11:23"],["b_itemName12","a_itemName22","2021/06/01 11:24"],["c_itemName13","b_itemName23","2021/06/01 11:25"]]},de={pageTitle:"\u6301\u3061\u7269\u30ea\u30b9\u30c8",pageDescription:[],colName:["\u5927\u5206\u985e","\u4e2d\u5206\u985e","\u5c0f\u5206\u985e","\u30e1\u30e2",E],rows:[["PC\u30c7\u30b9\u30af","\u5353\u4e0a","27inch FullHD Display","","2021/06/01 11:22"],["PC\u30c7\u30b9\u30af","\u5353\u4e0a","PS4","\u4e0b\u6bb5\u306b\u79fb\u52d5\u3059\u308b","2021/06/01 11:22"],["PC\u30c7\u30b9\u30af","\u4e0b\u6bb5","\u30c7\u30b9\u30af\u30c8\u30c3\u30d7PC","","2021/06/01 11:22"],["PC\u30c7\u30b9\u30af","\u4e0b\u6bb5","BOSE\u30b9\u30fc\u30d1\u30fc\u30a6\u30fc\u30d5\u30a1\u30fc","","2021/06/01 11:22"],["PC\u30c7\u30b9\u30af","\u4e0b\u6bb5","\u304b\u3054","\u8981\u6574\u7406","2021/06/01 11:22"]]},ue=function(){var e=function(){var e,n=null!==(e=localStorage.getItem(oe))&&void 0!==e?e:"";return n.length>0?JSON.parse(n):null}();return e?Y(e):(le(se),Y(se))},je=function(e,n){for(var t=[],a=0,r=0;r<e.length;r++){if(e[r]===E){var i="".concat(ie()().format("YYYY/MM/DD HH:mm"));t.push(i)}else t.push(n[a]),a++}return t},be=function(){Object(a.useEffect)((function(){ae()}),[]);var e=Object(a.useState)(ue()),n=Object(_.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(1),c=Object(_.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)(""),d=Object(_.a)(s,2),u=d[0],j=d[1],b=Object(a.useState)(!0),O=Object(_.a)(b,2),h=O[0],f=O[1],g=Object(a.useState)(!1),m=Object(_.a)(g,2),p=m[0],C=m[1],v=Object(a.useState)(!1),x=Object(_.a)(v,2),w=x[0],k=x[1],D=Object(a.useState)(!1),N=Object(_.a)(D,2),y=N[0],R=N[1],S=Object(a.useState)(""),F=Object(_.a)(S,2),I=F[0],A=F[1],H=Object(a.useState)(""),L=Object(_.a)(H,2),T=L[0],U=L[1],P=Object(a.useState)(!0),M=Object(_.a)(P,2),B=M[0],$=M[1],z=function(){U(""),A("")},G=Object(a.useCallback)((function(e){le(e),r(e)}),[]),W=function(e){var n=Object(V.a)({},t);n.rows=Object(K.a)(e),G(n)},q=Object(a.useCallback)((function(){switch(z(),o){case 2:G(Y(de));break;default:G(Y(se))}j(""),f(!0),C(!1)}),[o,C,f,G,j]),Q=function(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{return JSON.parse(e)}catch(n){return null}}(e.target.result);n?Array.isArray(n.rows)&&n.rows.length>0?(G(n),U("\u30d5\u30a1\u30a4\u30eb\u53d6\u8fbc\u307f\u3092\u884c\u3044\u307e\u3057\u305f\u3002")):A("\u30c7\u30fc\u30bf\u304c\u30bc\u30ed\u4ef6\u3067\u3059\u3002"):A("JSON\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30a8\u30e9\u30fc\u3067\u3059\u3002\u30d5\u30a1\u30a4\u30eb\u3092\u4fee\u6b63\u3057\u3066\u518d\u5ea6\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002")};return{data:t,orderColName:u,isOrderAsc:h,isOpenConfirmDialog:p,isOpenFormDialogIns:w,isOpenFormDialogUpd:y,errorMsg:I,infoMsg:T,isHeaderDisable:function(){var e;return null!==(e=t.isHeaderDisable)&&void 0!==e&&e},setIsHeaderDisable:function(e){var n=Object(V.a)(Object(V.a)({},t),{},{isHeaderDisable:e});le(n),r(n)},handleHeaderClick:function(e){var n,a;z();var r=(null!==(n=null===(a=e.target)||void 0===a?void 0:a.textContent)&&void 0!==n?n:"").replace(" \u25b2","").replace(" \u25bc",""),i=t.colName.indexOf(r),c=!0;u===r&&h&&(c=!1),W(r===E||"\u30e1\u30e2"===r?function(e,n,t){return e.sort((function(e,a){return J(e[n].toLowerCase(),a[n].toLowerCase(),t)}))}(t.rows,i,c):function(e,n,t){return e.sort((function(e,a){for(var r="",i="",c=0;c<=n;c++)r="".concat(r).concat("$$$").concat(e[c]),i="".concat(i).concat("$$$").concat(a[c]);return J(r.toLowerCase(),i.toLowerCase(),t)}))}(t.rows,i,c)),j(r),f(c)},handleRowDeleteClick:function(e){if(z(),B)A("\u30ed\u30c3\u30af\u3092\u89e3\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002");else{for(var n=[],a=0;a<t.rows.length;a++)if(a!==e){var r=t.rows[a];n.push(Object(K.a)(r))}W(n)}},handleRowCopyClick:function(e){z();for(var n=[],a=0;a<t.rows.length;a++){var r=t.rows[a];n.push(Object(K.a)(r)),a===e&&n.push(Object(K.a)(r))}W(n)},handleRowClick:function(e){z(),r(Object(V.a)(Object(V.a)({},t),{},{editRowIndex:e})),R(!0)},handleDownload:function(e){z(),function(e){ce(e,"text/plain","".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"","_").concat(ie()().format("YYYYMMDD_HHmm"),".json"))}(JSON.stringify(e),e.pageTitle)},handleReset:function(e){z(),l(e),C(!0)},handleDialogCancel:function(){z(),C(!1)},handleDialogOK:q,handleFormDialogInsOpen:function(){z(),k(!0)},handleFormDialogInsCancel:function(){z(),k(!1)},handleFormDialogInsOK:function(e){z();var n=[],a=je(t.colName,e);n.push(a);for(var r=0;r<t.rows.length;r++){var i=t.rows[r];n.push(Object(K.a)(i))}W(n),k(!1)},handleFormDialogUpdCancel:function(){z(),R(!1)},handleFormDialogUpdOK:function(e){z();for(var n=[],a=0;a<t.rows.length;a++)if(a===t.editRowIndex){var r=je(t.colName,e);n.push(Object(K.a)(r))}else{var i=t.rows[a];n.push(Object(K.a)(i))}W(n),R(!1)},handleChangeFile:function(e){z();try{var n=e.target.files[0],t=new FileReader;t.onloadend=Q,t.readAsText(n)}catch(a){}},handleChangeDeleteToggle:function(e){z(),$(e)}}},Oe=function(){var e=be(),n=e.data,t=e.orderColName,a=e.isOrderAsc,r=e.isOpenConfirmDialog,i=e.isOpenFormDialogIns,c=e.isOpenFormDialogUpd,s=e.errorMsg,u=e.infoMsg,j=e.isHeaderDisable,b=e.setIsHeaderDisable,O=e.handleHeaderClick,h=e.handleRowDeleteClick,f=e.handleRowCopyClick,g=e.handleRowClick,m=e.handleDownload,p=e.handleReset,C=e.handleDialogCancel,v=e.handleDialogOK,x=e.handleFormDialogInsOpen,w=e.handleFormDialogInsCancel,k=e.handleFormDialogInsOK,N=e.handleFormDialogUpdCancel,y=e.handleFormDialogUpdOK,R=e.handleChangeFile,F=e.handleChangeDeleteToggle,I=Q(),A=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(o.a,{variant:"h4",children:n.pageTitle}),Array.isArray(n.pageDescription)&&n.pageDescription.map((function(e,n){return Object(D.jsxs)(o.a,{variant:"body1",children:["- ",e]},n)})),Object(D.jsx)("br",{}),Object(D.jsx)("input",{className:I.button,type:"file",accept:".json",onChange:function(e){return R(e)}}),Object(D.jsx)(l.a,{className:I.button,variant:"contained",color:"default",onClick:function(){return m(n)},children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),Object(D.jsx)(l.a,{className:I.button,variant:"contained",color:"default",onClick:function(){return p(1)},children:"\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u8aad\u8fbc"}),Object(D.jsx)(l.a,{className:I.button,variant:"contained",color:"default",onClick:function(){return p(2)},children:"\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u8aad\u8fbc2"})]});return Object(D.jsxs)("div",{className:I.root,children:[j()?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("b",{children:n.pageTitle}),"\xa0\xa0\xa0"]}):A,Object(D.jsx)(q,{onChange:function(e){return b(!e)},leftLabel:"\u30d8\u30c3\u30c0\u30fc\u8868\u793a",rightLabel:"\u975e\u8868\u793a",defaultIsLeftSelected:!n.isHeaderDisable}),"\xa0\xa0\xa0",Object(D.jsx)(q,{onChange:F,leftLabel:"\u30ed\u30c3\u30af",rightLabel:"\u89e3\u9664",defaultIsLeftSelected:!0}),Object(D.jsx)(d.a,{className:I.icon,color:"action",fontSize:"large",onClick:x}),Object(D.jsx)(o.a,{variant:"body1",color:"error",children:s}),Object(D.jsx)(o.a,{variant:"body1",children:u}),Object(D.jsx)("br",{}),Object(D.jsx)(S,{header:n.colName,rows:n.rows,handleHeaderClick:O,handleRowDeleteClick:h,handleRowCopyClick:f,handleRowClick:g,orderColName:t,isOrderAsc:a}),Object(D.jsx)(T,{isOpen:r,onClickCancel:C,onClickOK:v,title:"\u6ce8\u610f",description:"\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u8aad\u8fbc\u3092\u5b9f\u884c\u3059\u308b\u3068\u30c7\u30fc\u30bf\u306f\u521d\u671f\u5316\u3055\u308c\u307e\u3059\u3002\u5b9f\u884c\u3059\u308b\u5834\u5408\u306fOK\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(D.jsx)(B,{isOpen:i,onClickCancel:w,onClickOK:function(e){return k(e)},title:"\u30c7\u30fc\u30bf\u767b\u9332",description:"",colName:n.colName}),Object(D.jsx)(B,{isOpen:c,onClickCancel:N,onClickOK:function(e){return y(e)},title:"\u30c7\u30fc\u30bf\u66f4\u65b0",description:"",colName:n.colName,editRow:n.rows?n.rows[n.editRowIndex]:[]})]})};c.a.render(Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Oe,{})}),document.getElementById("root"))},99:function(e,n,t){}},[[126,1,2]]]);
//# sourceMappingURL=main.27789097.chunk.js.map