(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8],{461:function(e,t,r){"use strict";r(25);var n={data:function(){return{rules:{required:function(e){return!!e||"Required."},pass_min_6:function(e){return e.length>=6||"Password must have at least 6 characters"},name_min_3:function(e){return e&&e.length>=3||"Name must have at least 3 characters"},name_max_10:function(e){return e&&e.length<=10||"Name must be less than 10 characters"},email_valid:function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}}}}},o=r(56),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.a=component.exports},466:function(e,t,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("ffc1b84e",content,!0,{sourceMap:!1})},475:function(e,t,r){"use strict";r(466)},476:function(e,t,r){var n=r(21)(!1);n.push([e.i,"@media only screen and (max-width:500px){#history-card{font-size:13px!important;padding:10px!important}#history-card-game{margin-right:0!important;margin-left:0!important}}",""]),e.exports=n},477:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("129850a2",content,!0,{sourceMap:!1})},480:function(e,t,r){"use strict";r.r(t);var n={name:"History",data:function(){return{dialog:!1,gameDialog:{}}},props:{userGames:{type:Array,default:[]}},methods:{closeHistory:function(){this.$emit("close")},openDialog:function(e){this.dialog=!0,this.gameDialog=e},closeDialog:function(){this.dialog=!1}}},o=(r(475),r(56)),l=r(63),c=r.n(l),d=r(204),m=r(458),f=r(512),v=r(468),h=r(192),_=r(555),x=r(449),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"pa-6 overflow-y-auto",attrs:{elevation:"0",id:"history-card","max-height":"calc(100vh - 200px)"}},[r("v-row",[r("v-spacer"),e._v(" "),r("h1",{staticClass:"text-center"},[e._v("History")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.closeHistory}},[r("v-icon",{attrs:{large:""}},[e._v("mdi-close")])],1)],1),e._v(" "),e._l(e.userGames,(function(t,n){return r("v-card",{key:n,staticClass:"pa-6 my-6 mx-10",attrs:{id:"history-card-game",color:t.isWinner?"#0ee86c":"#ed6464"}},[r("span",{staticClass:"d-flex flex-wrap"},[r("span",{staticClass:"mx-4"},[t.isWinner?r("h2",[e._v("Won")]):r("h2",[e._v("Lost")])]),e._v(" "),r("v-spacer"),e._v(" "),r("h2",{staticClass:"mx-4"},[e._v(e._s(t.difficulty))]),e._v(" "),r("v-spacer"),e._v(" "),r("h2",{staticClass:"mx-4"},[r("v-btn",{attrs:{icon:""},on:{click:function(r){return e.openDialog(t)}}},[r("v-icon",{attrs:{large:""}},[e._v("mdi-dots-horizontal")])],1)],1)],1)])})),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"pa-8 pt-6",attrs:{"max-width":"500px",color:e.gameDialog.isWinner?"#0ee86c":"#ed6464",light:""}},[r("v-row",[r("v-spacer"),e._v(" "),r("h1",{staticClass:"text-center"},[e._v("Details")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.closeDialog}},[r("v-icon",{attrs:{large:""}},[e._v("mdi-close")])],1)],1),e._v(" "),r("v-divider",{staticClass:"my-4"}),e._v(" "),r("h2",[e._v("\n        Attempts: "+e._s(e.gameDialog.attempts)+" / "+e._s(e.gameDialog.maxAttempts)+"\n      ")]),e._v(" "),r("h2",[e._v("Date: "+e._s(e.gameDialog.date))]),e._v(" "),r("h2",[e._v("Time: "+e._s(e.gameDialog.time))]),e._v(" "),r("h2",[e._v("Difficulty: "+e._s(e.gameDialog.difficulty))])],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VDialog:f.a,VDivider:v.a,VIcon:h.a,VRow:_.a,VSpacer:x.a})},481:function(e,t,r){"use strict";r(477)},482:function(e,t,r){var n=r(21)(!1);n.push([e.i,".title_profile{text-align:center}@media only screen and (max-width:500px){#info-buttons{flex-direction:column;grid-gap:10px;gap:10px}}@media only screen and (max-width:400px){#info-buttons{margin:0!important}#info-card{padding:0!important}}",""]),e.exports=n},505:function(e,t,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("c6478bb6",content,!0,{sourceMap:!1})},508:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(3),r(14),r(12),r(15);var n=r(23),o=r(2),l=(r(86),r(461)),c=r(60),d=r(480);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Info",mixins:[l.a],components:{History:d.default},data:function(){return{valid:!0,isEdit:!1,showPass:!1,history:!1,userGames:[],user:{username:"",email:"",id:-1},userEdit:{username:"",password:"",email:"",id:-1}}},computed:f({},Object(c.d)("alert",["types"])),methods:f(f(f(f({},Object(c.b)("user",["getCurrentUser","updateUser","deleteUser","getUserById"])),Object(c.b)("game",["getGamesByUser"])),Object(c.c)("alert",["openAlert"])),{},{setTypeProfile:function(){this.isEdit=!this.isEdit,this.userEdit.username=this.user.username,this.userEdit.password=this.user.password,this.userEdit.email=this.user.email,this.userEdit.id=this.user.id},confirmEdit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateUser(e.userEdit).then((function(){return e.updateCurrentUser()})).catch((function(t){return e.openAlert({message:t.response.data.message,type:e.types.ERROR,code:t.response.status})}));case 2:e.isEdit=!1;case 3:case"end":return t.stop()}}),t)})))()},setHistory:function(){var e=this;this.getGamesByUser().then((function(t){e.userGames=t,e.history=!0})).catch((function(t){e.openAlert({message:t.response.data.message,type:e.types.ERROR,code:t.response.status})}))},closeHistory:function(){this.history=!1},confirmDelete:function(){this.deleteUser(this.user.id)},updateCurrentUser:function(){var e=this;this.getCurrentUser().then((function(t){e.user.id=t.id||t[0].id,e.user.password=t.password||t[0].password,e.user.username=t.username||t[0].username,e.user.email=t.email||t[0].email})).catch((function(){}))}}),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateCurrentUser();case 2:case"end":return t.stop()}}),t)})))()}},h=(r(481),r(56)),_=r(63),x=r.n(_),y=r(204),w=r(458),E=r(453),O=r(483),C=r(552),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[e.history?r("History",{attrs:{userGames:e.userGames},on:{close:e.closeHistory}}):r("v-card",{staticClass:"pa-6",attrs:{elevation:"0",id:"info-card",light:""}},[e.isEdit?r("h2",{staticClass:"title_profile"},[e._v("Edit User")]):r("h2",{staticClass:"title_profile"},[e._v("Profile")]),e._v(" "),e.isEdit?r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:[e.rules.required,e.rules.name_min_3,e.rules.name_max_10],label:"Name",required:""},model:{value:e.userEdit.username,callback:function(t){e.$set(e.userEdit,"username",t)},expression:"userEdit.username"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email_valid],label:"E-mail",required:""},model:{value:e.userEdit.email,callback:function(t){e.$set(e.userEdit,"email",t)},expression:"userEdit.email"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.pass_min_6],type:e.showPass?"text":"password",label:"Password"},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.userEdit.password,callback:function(t){e.$set(e.userEdit,"password",t)},expression:"userEdit.password"}})],1):r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Name",readonly:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),e._v(" "),r("v-text-field",{attrs:{label:"E-mail",readonly:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),e.isEdit?r("span",{staticClass:"d-flex justify-space-between ma-6"},[r("v-btn",{attrs:{color:"error"},on:{click:e.setTypeProfile}},[e._v(" Cancel ")]),e._v(" "),r("v-btn",{attrs:{color:"success",disabled:!e.valid},on:{click:e.confirmEdit}},[e._v("\n        Confirm Edit\n      ")])],1):r("span",{staticClass:"d-flex justify-space-between ma-6",attrs:{id:"info-buttons"}},[r("v-btn",{attrs:{color:"info"},on:{click:e.setTypeProfile}},[e._v("Edit")]),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.confirmDelete}},[e._v("Delete")]),e._v(" "),r("v-btn",{attrs:{color:"success"},on:{click:e.setHistory}},[e._v(" History ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:y.a,VCard:w.a,VContainer:E.a,VForm:O.a,VTextField:C.a})},548:function(e,t,r){"use strict";r(505)},549:function(e,t,r){var n=r(21)(!1);n.push([e.i,"@media only screen and (max-width:400px){#profile-card{margin:40px 0!important}}",""]),e.exports=n},561:function(e,t,r){"use strict";r.r(t);var n={name:"ProfilePage",components:{Info:r(508).default}},o=(r(548),r(56)),l=r(63),c=r.n(l),d=r(458),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-card",{staticClass:"ma-10",attrs:{"max-width":"1000px",light:"",id:"profile-card"}},[t("Info")],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a})}}]);