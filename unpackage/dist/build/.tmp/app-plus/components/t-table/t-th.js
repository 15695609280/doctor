(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/t-table/t-th"],{"385b":function(t,e,n){"use strict";n.r(e);var r=n("b46c"),i=n("cb3b");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("3b93");var o=n("2877"),c=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"3b93":function(t,e,n){"use strict";var r=n("aa3a"),i=n.n(r);i.a},5863:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{align:String},data:function(){return{thBorder:"1",borderColor:"#d0dee5",fontSize:"15",color:"#3b4246",thAlign:"center"}},inject:["table","tr"],created:function(){this.thBorder=this.table.border,this.borderColor=this.table.borderColor,this.fontSize=this.tr.fontSize,this.color=this.tr.color,this.align?this.thAlign=this.align:this.thAlign=this.tr.align},computed:{thAlignCpd:function(){var t="";switch(this.thAlign){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break;default:t="center";break}return t}}};e.default=r},aa3a:function(t,e,n){},b46c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},cb3b:function(t,e,n){"use strict";n.r(e);var r=n("5863"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/t-table/t-th-create-component',
    {
        'components/t-table/t-th-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("385b"))
        })
    },
    [['components/t-table/t-th-create-component']]
]);
