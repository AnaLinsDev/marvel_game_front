(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9,10,11],{416:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r(428),o=r(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),f=Object(o.h)("v-card__title");n.a},417:function(e,t,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("7132a15d",content,!0,{sourceMap:!1})},418:function(e,t,r){var n=r(31)(!1);n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=n},421:function(e,t,r){"use strict";r(23);var n={data:function(){return{rules:{required:function(e){return!!e||"Required."},pass_min_6:function(e){return e.length>=6||"Password must have at least 6 characters"},name_min_3:function(e){return e&&e.length>=3||"Name must have at least 3 characters"},name_max_10:function(e){return e&&e.length<=10||"Name must be less than 10 characters"},email_valid:function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}}}}},o=r(47),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.a=component.exports},423:function(e,t,r){"use strict";r(14),r(10),r(16),r(5),r(20),r(15),r(21);var n=r(2),o=(r(417),r(56));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},439:function(e,t,r){var content=r(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("11ce98f9",content,!0,{sourceMap:!1})},446:function(e,t,r){"use strict";var n=r(2),o=(r(55),r(79),r(197),r(16),r(5),r(15),r(62),r(195),r(14),r(10),r(20),r(21),r(26)),c=r(124),l=r(196);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},447:function(e,t,r){"use strict";r(439)},448:function(e,t,r){var n=r(31)(!1);n.push([e.i,".black{color:#000!important;margin:2vh auto}",""]),e.exports=n},474:function(e,t,r){var content=r(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(32).default)("1b7833da",content,!0,{sourceMap:!1})},477:function(e,t,r){"use strict";r.r(t);r(14),r(10),r(16),r(5),r(20),r(15),r(21);var n=r(17),o=r(2),c=(r(82),r(35),r(421)),l=r(53);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Login",mixins:[c.a],data:function(){return{valid:!0,showPass:!1,name:"",password:""}},methods:f(f(f({},Object(l.c)("alert",["openAlert","closeAlert"])),Object(l.b)("user",["loginUser"])),{},{login:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={username:e.name,password:e.password},t.next=3,e.loginUser(r).then((function(){return e.closeAlert()})).catch((function(t){return e.openAlert({message:t.response.data.message,type:e.types.ERROR,code:t.response.status})}));case 3:case"end":return t.stop()}}),t)})))()}}),computed:f({},Object(l.d)("alert",["types"]))},h=r(47),m=r(57),O=r.n(m),w=r(188),_=r(428),y=r(416),j=r(446),x=r(534),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{elevation:"0"}},[r("v-card-title",{staticClass:"px-0"},[e._v("Login")]),e._v(" "),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:[e.rules.required,e.rules.name_min_3,e.rules.name_max_10],label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.pass_min_6],type:e.showPass?"text":"password",label:"Password"},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"mx-auto pa-4 ma-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.login}},[e._v("\n      Login\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:w.a,VCard:_.a,VCardActions:y.a,VCardTitle:y.b,VForm:j.a,VTextField:x.a})},478:function(e,t,r){"use strict";r.r(t);r(14),r(10),r(16),r(5),r(20),r(15),r(21);var n=r(17),o=r(2),c=(r(82),r(35),r(421)),l=r(53);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Register",mixins:[c.a],data:function(){return{valid:!0,showPass:!1,showPassConfirm:!1,name:"",email:"",password:"",passwordConfirm:""}},methods:f(f(f({},Object(l.c)("alert",["openAlert","closeAlert"])),Object(l.b)("user",["registerUser"])),{},{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={username:e.name,email:e.email,password:e.password},t.next=3,e.registerUser(r).then((function(){return e.closeAlert()})).catch((function(t){return e.openAlert({message:t.response.data.message,type:e.types.ERROR,code:t.response.status})}));case 3:case"end":return t.stop()}}),t)})))()}}),computed:f(f({},Object(l.d)("alert",["types"])),{},{repeatPassErrorMessage:function(){return this.password===this.passwordConfirm?"":"Password must match"}})},h=r(47),m=r(57),O=r.n(m),w=r(188),_=r(428),y=r(416),j=r(446),x=r(534),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{elevation:"0"}},[r("v-card-title",{staticClass:"px-0"},[e._v("Register")]),e._v(" "),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:[e.rules.required,e.rules.name_min_3,e.rules.name_max_10],label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email_valid],label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.showPass?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.pass_min_6],type:e.showPass?"text":"password",label:"Password"},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.showPassConfirm?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.pass_min_6],type:e.showPassConfirm?"text":"password","error-messages":e.repeatPassErrorMessage,label:"Confirm Password"},on:{"click:append":function(t){e.showPassConfirm=!e.showPassConfirm}},model:{value:e.passwordConfirm,callback:function(t){e.passwordConfirm=t},expression:"passwordConfirm"}})],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"mx-auto pa-4 ma-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.register}},[e._v("\n      Register\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:w.a,VCard:_.a,VCardActions:y.a,VCardTitle:y.b,VForm:j.a,VTextField:x.a})},480:function(e,t,r){"use strict";r.r(t);r(447);var n=r(47),o=r(57),c=r.n(o),l=r(428),d=r(423),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"pa-5 black",attrs:{color:"yellow","max-width":"500px",elevation:"10",rounded:""}},[r("span",[r("h2",[e._v("Do not use any personal password !!!")]),e._v(" "),r("h3",[e._v("That site was made only to practice some web development tools.")]),e._v(" "),r("h3",[e._v('Use passwords like "133456" or "abcdefg"')])]),e._v(" "),r("v-divider",{staticClass:"black my-5"}),e._v(" "),r("span",[r("h2",[e._v("Não use nenhuma senha pessoal !!!")]),e._v(" "),r("h3",[e._v("\n      Esse site foi feito apenas para praticar algumas ferramentas de\n      desenvolvimento.\n    ")]),e._v(" "),r("h3",[e._v('Use senhas como "133456" ou "abcdefg"')])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:l.a,VDivider:d.a})},532:function(e,t,r){"use strict";r(474)},533:function(e,t,r){var n=r(31)(!1);n.push([e.i,".card-user-login{margin:2vh auto}a{color:grey!important}",""]),e.exports=n},542:function(e,t,r){"use strict";r.r(t);r(14),r(10),r(16),r(5),r(20),r(15),r(21);var n=r(2),o=r(477),c=r(478),l=r(480),d=r(53);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"IndexPage",components:{Login:o.default,Register:c.default,WarningPassword:l.default},data:function(){return{current_page:0,page_type:{LOGIN:0,REGISTER:1}}},computed:v(v({},Object(d.d)("user",{loggedIn:function(e){return e.loggedIn}})),{},{isLogin:function(){return this.current_page===this.page_type.LOGIN}}),watch:{loggedIn:function(e){e&&this.$router.push({path:"game/config"})}},mounted:function(){this.getCurrentUser()},methods:v(v({},Object(d.b)("user",["getCurrentUser"])),{},{toRegister:function(){this.current_page=this.page_type.REGISTER},toLogin:function(){this.current_page=this.page_type.LOGIN}})},m=(r(532),r(47)),O=r(57),w=r.n(O),_=r(428),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("WarningPassword"),e._v(" "),r("v-card",{staticClass:"card-user-login pa-6",attrs:{light:"","max-width":"500px",elevation:"10px",rounded:""}},[e.isLogin?r("span",[r("Login"),e._v(" "),r("a",{on:{click:e.toRegister}},[e._v("Don't have an account yet ?? Go to Register")])],1):r("span",[r("Register"),e._v(" "),r("a",{on:{click:e.toLogin}},[e._v("Already have an account ?? Go to Login")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VCard:_.a})}}]);