(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/swipe-action"],{"25ed":function(e,t,n){"use strict";(function(e,o){function i(e,t){return c(e)||s(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],o=!0,i=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done);o=!0)if(n.push(s.value),t&&n.length===t)break}catch(r){i=!0,a=r}finally{try{o||null==c["return"]||c["return"]()}finally{if(i)throw a}}return n}function c(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return n.e("components/lml-layout/col").then(n.bind(null,"41e1"))},u=function(){return n.e("components/lml-layout/row").then(n.bind(null,"2886"))},d=function(){return n.e("components/drag-ball/drag-ball").then(n.bind(null,"f0e5"))},l=function(){return n.e("components/uni-section/uni-section").then(n.bind(null,"6ef2"))},h=function(){return n.e("components/uni-swipe-action/uni-swipe-action").then(n.bind(null,"8d42"))},p=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-swipe-action-item/uni-swipe-action-item")]).then(n.bind(null,"fec3"))},f={components:{uniSection:l,uniSwipeAction:h,uniSwipeActionItem:p,dragball:d,vrow:u,vcol:r},data:function(){return{CustomBar:this.CustomBar,lala:"",modalName:null,radio:"radio1",checkbox:[{value:0,name:"10元",checked:!1,hot:!1},{value:1,name:"20元",checked:!0,hot:!1},{value:2,name:"30元",checked:!0,hot:!0},{value:3,name:"60元",checked:!1,hot:!0},{value:4,name:"80元",checked:!1,hot:!1},{value:5,name:"100元",checked:!1,hot:!1}],stepperList:[{id:10},{id:20}],arrs:[],e:[],m:[],pc:[],isOpened:!1,left:290,top:500,timeOnce:"",number:"",values:"",selectNumber:1,projectCode:"",statusCode:"",orderNo:"",as:"",centerNumber:"",hostipalnum:"",bed:"",checkone:"",options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#dd524d"}}],swipeList:[]}},onReady:function(){var e=this;this.$nextTick(function(){e.isOpened=!0})},onShow:function(){var t=this;e.getStorage({key:"add",success:function(e){t.swipeList=e.data}})},onLoad:function(e){this.checkone=e.checkone,this.projectCode=e.projectCode},methods:{changeNumber:function(e){this.as=e.target.value},yyyy:function(e){this.centerNumber=e},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},hideModalyes:function(t){this.modalName=null,console.log(o(this.centerNumber," at pages\\index\\swipe-action.vue:249"));var n=/^\+?[1-9][0-9]*$/;if(n.test(this.as)){for(var i=0;i<this.swipeList.length;i++)this.swipeList[this.centerNumber].selectNumber=this.as;this.as="",e.setStorage({key:"add",data:this.swipeList})}else e.showToast({title:"请输入数字",duration:2e3})},RadioChange:function(e){this.radio=e.detail.value},ChooseCheckbox:function(e){for(var t=this.checkbox,n=e.currentTarget.dataset.value,o=0,i=t.length;o<i;++o)if(t[o].value==n){t[o].checked=!t[o].checked;break}},value:function(e){this.number=e.target.value},centerOk:function(){var t=this;e.showModal({title:"提示",content:"是否提交人物信息",success:function(n){if(n.confirm){for(var a={},s=[],c={},r=0;r<t.swipeList.length;r++)a.vistNumber=t.swipeList[r].number,a.orderNo=t.swipeList[r].orderNo,c=Object.assign({projectCode:t.projectCode,doctorCode:"admin",doctorName:"管理员",infoType:"门诊"},a),s.push(c);console.log(o(s," at pages\\index\\swipe-action.vue:347")),e.request({url:"http://192.168.0.114:8888/api/app/confirmCharging/addPatientCureRecord",method:"POST",data:JSON.stringify(s),dataType:"json"}).then(function(t){var n=i(t,2),a=(n[0],n[1]);console.log(o(a.data," at pages\\index\\swipe-action.vue:360")),1==a.data?e.showToast({title:"提交成功",duration:1e3}):e.showToast({title:"提交失败",duration:1e3})}),t.swipeList=[],e.setStorage({key:"add",data:t.swipeList}),t.number=""}else n.cancel&&console.log(o("用户点击取消"," at pages\\index\\swipe-action.vue:382"))}})},code:function(){var t=this;e.scanCode({success:function(e){console.log(o("条码内容："+e.result," at pages\\index\\swipe-action.vue:392")),t.number=e.result}})},add:function(){var t=this;this.number?this.number&&e.request({url:"http://192.168.0.114:8888/api/app/confirmCharging/GetPatienInfo?where="+this.number+"&StartTime=2019-09-30&endTime=2019-10-01&projectCode="+this.projectCode,method:"GET"}).then(function(n){var a=i(n,2),s=(a[0],a[1]);console.log(o(s," at pages\\index\\swipe-action.vue:416")),""==s.data&&e.showToast({title:"所查用户不存在",duration:2e3});var c=s.data[0].patientName,r=s.data[0].sex,u=s.data[0].age;t.bed=s.data[0].wardName;var d=s.data[0].visitNumber,l=s.data[0].orderNo;t.hostipalnum=s.data[0].wardName,t.swipeList.push({options:[{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],name:c,orderNo:l,holder:r,age:u,bed:t.bed,number:d,hostipalnum:t.hostipalnum,selectNumber:t.selectNumber}),e.setStorage({key:"add",data:t.swipeList}),t.number=""}):e.showToast({title:"请输入用户信息",duration:1e3})},listItem:function(){},back:function(){e.reLaunch({url:"./check"})},bindClick:function(t){e.showToast({title:"点击了".concat(t.content.text,"按钮"),icon:"none"})},setOpened:function(){this.isOpened=!this.isOpened},change:function(e){this.isOpened=e,console.log(o("返回：",e," at pages\\index\\swipe-action.vue:478"))},swipeChange:function(e){console.log(o("返回：",e," at pages\\index\\swipe-action.vue:481"))},swipeClick:function(t,n){var i=this,a=t.content;"删除"===a.text?e.showModal({title:"提示",content:"是否删除",success:function(t){t.confirm?(i.swipeList.splice(n,1),e.setStorage({key:"add",data:i.swipeList})):t.cancel&&console.log(o("用户点击取消"," at pages\\index\\swipe-action.vue:498"))}}):"添加"===a.text?this.swipeList.length<100?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"}),e.showToast({title:"添加了一条数据",icon:"none"})):e.showToast({title:"最多添加一百条条数据",icon:"none"}):e.showToast({title:"点击了".concat(t.content.text,"按钮"),icon:"none"})}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"2b26":function(e,t,n){"use strict";n.r(t);var o=n("6f76"),i=n("d594");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("6e9d");var s=n("2877"),c=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},5702:function(e,t,n){"use strict";(function(e){n("22cd"),n("921b");o(n("66fd"));var t=o(n("2b26"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"6e9d":function(e,t,n){"use strict";var o=n("9509"),i=n.n(o);i.a},"6f76":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},9509:function(e,t,n){},d594:function(e,t,n){"use strict";n.r(t);var o=n("25ed"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a}},[["5702","common/runtime","common/vendor"]]]);