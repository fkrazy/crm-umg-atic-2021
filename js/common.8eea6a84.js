(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["common"],{1148:function(t,e,r){"use strict";var a=r("a691"),n=r("1d80");t.exports=function(t){var e=String(n(this)),r="",o=a(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1b08":function(t,e,r){"use strict";r("1ebf")},"1da1":function(t,e,r){"use strict";function a(t,e,r,a,n,o,i){try{var s=t[o](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(a,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return n}))},"1ebf":function(t,e,r){},"383b":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-12"},[r("card",{attrs:{type:"chart"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"title d-inline"},[t._v("Ventas Acumuladas")]),r("h3",{staticClass:"d-inline pull-right"},[t._v("Q "+t._s(t.totalAcumulado))])]},proxy:!0}])},[r("div",{staticClass:"chart-area"},[r("line-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.chartDataAcumulada,"extra-options":t.chartOptions}})],1)])],1),r("div",{staticClass:"col-12"},[r("card",{attrs:{type:"chart"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"title d-inline"},[t._v("Ventas del Ultimo Año")]),r("h3",{staticClass:"d-inline pull-right"},[t._v("Q "+t._s(t.totalAnio))])]},proxy:!0}])},[r("div",{staticClass:"chart-area"},[r("line-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.chartData,"extra-options":t.chartOptions}})],1)])],1),r("div",{staticClass:"col-12"},[r("card",{attrs:{type:"chart"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"title d-inline"},[t._v("Ventas del Ultimo Mes"),r("h3",{staticClass:"d-inline pull-right"},[t._v("Q "+t._s(t.totalMes))])])]},proxy:!0}])},[r("div",{staticClass:"chart-area"},[r("line-chart",{staticStyle:{height:"100%"},attrs:{"chart-data":t.chartDataMonth,"extra-options":t.chartOptions}})],1)])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12"},[r("div",{staticClass:"h1"},[t._v("Reporte de Ventas del cliente Frank Orozco")])])}],o=r("1da1"),i=(r("96cf"),r("a434"),r("159b"),r("b680"),r("b0c0"),r("6636")),s=r("db49"),c=r("bc3a"),l={name:"ClientReport",components:{LineChart:i["a"]},data:function(){return{dataAcumulada:[],labelsAcumulada:[],dataLastYear:[],labelLastYear:[],dataDataMonth:[],labelDataMonth:[],chartOptions:{maintainAspectRatio:!1,legend:{display:!1},responsive:!0}}},created:function(){var t=this,e=JSON.parse(sessionStorage.getItem("token")),r=this.$route.params.id;c.get("https://crm-umg.herokuapp.com/api/clientes/"+r,{headers:{Authorization:"Bearer ".concat(e.access)}}).then((function(e){var r=e.data;t.dataAcumulada.splice(0),t.labelsAcumulada.splice(0),r.ventas_acumuladas.reverse().forEach((function(e){t.dataAcumulada.push(e.total),t.labelsAcumulada.push(e.desde)})),t.dataLastYear.splice(0),t.labelLastYear.splice(0),r.ventas_ultimo_anio.reverse().forEach((function(e){t.dataLastYear.push(e.total),t.labelLastYear.push(e.desde)})),t.dataDataMonth.splice(0),t.labelDataMonth.splice(0),r.ventas_ultimo_mes.forEach((function(e){t.dataDataMonth.push(e.total),t.labelDataMonth.push(e.fecha)}))})).catch((function(e){return t.showError(e.response.data.detail)}))},computed:{totalAcumulado:function(){var t=this.chartDataAcumulada.datasets[0].data.reduce((function(t,e){return t+e}),0);return t.toFixed(2)},totalAnio:function(){var t=this.chartData.datasets[0].data.reduce((function(t,e){return t+e}),0);return t.toFixed(2)},totalMes:function(){var t=this.chartDataMonth.datasets[0].data.reduce((function(t,e){return t+e}),0);return t.toFixed(2)},chartDataAcumulada:function(){return{datasets:[{fill:!0,borderColor:s["a"].colors.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:s["a"].colors.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:s["a"].colors.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.dataAcumulada}],labels:this.labelsAcumulada}},chartData:function(){return{datasets:[{fill:!0,borderColor:s["a"].colors.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:s["a"].colors.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:s["a"].colors.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.dataLastYear}],labels:this.labelLastYear}},chartDataMonth:function(){return{datasets:[{fill:!0,borderColor:s["a"].colors.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:s["a"].colors.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:s["a"].colors.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.dataDataMonth}],labels:this.labelDataMonth}}},methods:{deleteCourse:function(t){this.$swal({title:"Estas Seguro?",text:"Se va a eliminar el colegio ".concat(t.data().name),showCancelButton:!0}).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.isConfirmed&&t.ref.delete();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},validateSchool:function(t){var e=this;this.$swal({title:"Estas Seguro?",text:"Se va a validar el colegio ".concat(t.data().name),showCancelButton:!0}).then(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.isConfirmed){r.next=4;break}return r.next=3,t.ref.update({state:"validated"});case 3:e.$swal("Colegio Validado");case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())}}},u=l,d=(r("1b08"),r("0c7c")),f=Object(d["a"])(u,a,n,!1,null,"548cf4e4",null);e["default"]=f.exports},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"503f":function(t,e,r){"use strict";r("fb5e")},7054:function(t,e,r){},"7c3d":function(t,e,r){"use strict";r("cba2")},"841c":function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),o=r("1d80"),i=r("129f"),s=r("14c3");a("search",1,(function(t,e,r){return[function(e){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r):new RegExp(e)[t](String(r))},function(t){var a=r(e,t,this);if(a.done)return a.value;var o=n(t),c=String(this),l=o.lastIndex;i(l,0)||(o.lastIndex=0);var u=s(o,c);return i(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"96cf":function(t,e,r){var a=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var n=e&&e.prototype instanceof v?e:v,o=Object.create(n.prototype),i=new A(a||[]);return o._invoke=E(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function v(){}function b(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(B([])));_&&_!==r&&a.call(_,o)&&(y=_);var C=g.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;function o(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function E(t,e,r){var a=d;return function(n,o){if(a===h)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw o;return D()}r.method=n,r.arg=o;while(1){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var c=u(t,e,r);if("normal"===c.type){if(a=r.done?p:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function S(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function B(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:D}}function D(){return{value:e,done:!0}}return b.prototype=C.constructor=g,g.constructor=b,b.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new k(l(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(C),c(C,s,"Generator"),C[o]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=B,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:B(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),h=r("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},w=!b||!g;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,a,n,o,i=s(this),d=u(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],y(o)){if(n=c(o.length),f+n>m)throw TypeError(v);for(r=0;r<n;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=m)throw TypeError(v);l(d,f++,o)}return d.length=f,d}})},"9e6e":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("card",[r("h5",{staticClass:"title",attrs:{"slot:header":""}},[t._v("Crear Cliente")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Nombres",state:!t.errors["nombres"]||0===t.errors["nombres"].length}},[r("b-form-input",{model:{value:t.cliente.nombres,callback:function(e){t.$set(t.cliente,"nombres",e)},expression:"cliente.nombres"}}),t._l(t.errors["nombres"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Apellidos",state:!t.errors["apellidos"]||0===t.errors["apellidos"].length}},[r("b-form-input",{model:{value:t.cliente.apellidos,callback:function(e){t.$set(t.cliente,"apellidos",e)},expression:"cliente.apellidos"}}),t._l(t.errors["apellidos"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Dirección",state:!t.errors["direccion"]||0===t.errors["direccion"].length}},[r("b-form-input",{model:{value:t.cliente.direccion,callback:function(e){t.$set(t.cliente,"direccion",e)},expression:"cliente.direccion"}}),t._l(t.errors["direccion"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Telefono",state:!t.errors["telefono"]||0===t.errors["telefono"].length}},[r("b-form-input",{model:{value:t.cliente.telefono,callback:function(e){t.$set(t.cliente,"telefono",e)},expression:"cliente.telefono"}}),t._l(t.errors["telefono"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"E-mail",state:!t.errors["email"]||0===t.errors["email"].length}},[r("b-form-input",{model:{value:t.cliente.email,callback:function(e){t.$set(t.cliente,"email",e)},expression:"cliente.email"}}),t._l(t.errors["email"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Fecha de Nacimiento",state:!t.errors["fecha_nacimiento"]||0===t.errors["fecha_nacimiento"].length}},[r("b-form-datepicker",{staticClass:"mb-2",staticStyle:{},model:{value:t.cliente.fecha_nacimiento,callback:function(e){t.$set(t.cliente,"fecha_nacimiento",e)},expression:"cliente.fecha_nacimiento"}}),t._l(t.errors["fecha_nacimiento"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Codigo",state:!t.errors["codigo"]||0===t.errors["codigo"].length}},[r("b-form-input",{staticClass:"mb-2",staticStyle:{},model:{value:t.cliente.codigo,callback:function(e){t.$set(t.cliente,"codigo",e)},expression:"cliente.codigo"}}),t._l(t.errors["codigo"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Estado",state:!t.errors["estado"]||0===t.errors["estado"].length}},[r("b-form-select",{attrs:{options:t.estados},model:{value:t.cliente.estado,callback:function(e){t.$set(t.cliente,"estado",e)},expression:"cliente.estado"}}),t._l(t.errors["estado"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{label:"Departamento",state:!t.errors["departamento"]||0===t.errors["departamento"].length}},[r("b-form-select",{attrs:{options:t.departamentos},model:{value:t.cliente.departamento,callback:function(e){t.$set(t.cliente,"departamento",e)},expression:"cliente.departamento"}}),t._l(t.errors["departamento"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-danger pull-right"},[r("router-link",{attrs:{to:"/clients"}},[t._v("Cancelar")])],1),r("button",{staticClass:"btn btn-success pull-right",on:{click:function(e){t.editing?t.edit():t.save()}}},[t._v(t._s(t.editing?"Editar":"Guardar"))])])])])],1)])},n=[],o=(r("d81d"),r("ac1f"),r("5319"),r("2af9")),i=r("c1df"),s=r.n(i),c=r("a18c"),l=r("bc3a"),u=[{text:"Activo",value:1},{text:"Inactivo",value:0}],d={name:"ColegioList",components:{BaseInput:o["d"],BaseDropdown:o["c"]},data:function(){return{editing:!1,estados:u,isBusy:!0,departamentos:[],errors:{nombres:"",apellidos:"",direccion:"",telefono:"",email:"",fecha_nacimiento:"",codigo:"",estado:1,departamento:null},cliente:{nombres:"",apellidos:"",direccion:"",telefono:"",email:"",fecha_creacion:s()(Date.now()).format(),fecha_nacimiento:"",codigo:"",estado:1,departamento:null}}},created:function(){var t=this,e=JSON.parse(sessionStorage.getItem("token"));l.get("https://crm-umg.herokuapp.com/api/departamentos/",{headers:{Authorization:"Bearer ".concat(e.access)}}).then((function(e){var r=e.data;t.departamentos=r.map((function(t){return{text:t.nombre,value:t.id}}))})).catch((function(e){return t.showError(e.response.data.detail)}));var r=this.$route.params.id;this.editing=!!r,this.editing&&l.get("https://crm-umg.herokuapp.com/api/clientes/"+r,{headers:{Authorization:"Bearer ".concat(e.access)}}).then((function(e){var r=e.data;r.departamento=r.departamento.id,t.cliente=r})).catch((function(e){return t.showError(e.response.data.detail)}))},methods:{save:function(){var t=this,e=JSON.parse(sessionStorage.getItem("token"));l.post("https://crm-umg.herokuapp.com/api/clientes/",this.cliente,{headers:{Authorization:"Bearer ".concat(e.access)}}).then((function(){t.showSucces("Cliente creado exitosamente"),c["a"].replace({name:"clientes"})})).catch((function(e){t.errors=e.response.data,e.response.data.detail&&t.showError(e.response.data.detail)}))},edit:function(){var t=this,e=JSON.parse(sessionStorage.getItem("token"));l.put("https://crm-umg.herokuapp.com/api/clientes/".concat(this.cliente.id,"/"),this.cliente,{headers:{Authorization:"Bearer ".concat(e.access)}}).then((function(){t.showSucces("Cliente editado exitosamente"),c["a"].replace({name:"clientes"})})).catch((function(e){return t.showError(e.response.data.detail)}))}}},f=d,h=(r("7c3d"),r("0c7c")),p=Object(h["a"])(f,a,n,!1,null,"36256b24",null);e["default"]=p.exports},a7d2:function(t,e,r){"use strict";r("7054")},b680:function(t,e,r){"use strict";var a=r("23e7"),n=r("a691"),o=r("408a"),i=r("1148"),s=r("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},d=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},f=function(t,e,r){var a=-1,n=r;while(++a<6)n+=e*t[a],t[a]=n%1e7,n=l(n/1e7)},h=function(t,e){var r=6,a=0;while(--r>=0)a+=t[r],t[r]=l(a/e),a=a%e*1e7},p=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var a=String(t[e]);r=""===r?a:r+i.call("0",7-a.length)+a}return r},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));a({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,r,a,s,c=o(this),l=n(t),m=[0,0,0,0,0,0],v="",b="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,r=e<0?c*u(2,-e,1):c/u(2,e,1),r*=4503599627370496,e=52-e,e>0){f(m,0,r),a=l;while(a>=7)f(m,1e7,0),a-=7;f(m,u(10,a,1),0),a=e-1;while(a>=23)h(m,1<<23),a-=23;h(m,1<<a),f(m,1,1),h(m,2),b=p(m)}else f(m,0,r),f(m,1<<-e,0),b=p(m)+i.call("0",l);return l>0?(s=b.length,b=v+(s<=l?"0."+i.call("0",l-s)+b:b.slice(0,s-l)+"."+b.slice(s-l))):b=v+b,b}})},cba2:function(t,e,r){},ccb3:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("card",{scopedSlots:t._u([{key:"header",fn:function(){return[r("h5",{staticClass:"title d-inline"},[t._v("LISTADO DE CLIENTES")]),r("router-link",{attrs:{to:{name:"crear"}}},[r("button",{staticClass:"btn btn-success pull-right"},[t._v("Agregar")])])]},proxy:!0}])},[r("div",{staticClass:"table-responsive"},[r("b-table",{attrs:{items:t.clients,fields:t.fields},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[r("router-link",{attrs:{to:{name:"reporte",params:{id:e.value}}}},[r("button",{staticClass:"btn btn-secondary btn-sm"},[r("font-awesome-icon",{attrs:{icon:"eye"}})],1)]),r("router-link",{attrs:{to:{name:"edit",params:{id:e.value}}}},[r("button",{staticClass:"btn btn-warning ml-3 btn-sm"},[r("font-awesome-icon",{attrs:{icon:"edit"}})],1)]),r("button",{staticClass:"btn btn-danger ml-3 btn-sm",on:{click:function(r){return t.deleteClient(e.value)}}},[r("font-awesome-icon",{attrs:{icon:"times"}})],1)]}}])})],1)])],1)])},n=[],o=r("1da1"),i=(r("96cf"),r("ac1f"),r("841c"),r("4de4"),r("d81d"),r("99af"),r("2af9")),s=(r("a18c"),r("bc3a")),c={name:"ClientList",components:{BaseTable:i["e"]},data:function(){return{fields:[{key:"nombre",label:"Nombre"},{key:"telefono",label:"Telefono"},{key:"estado",label:"Estado"},{key:"departamento",label:"Departamento"},{key:"actions",label:"Acciones"}],clients:[],isBusy:!0}},created:function(){var t,e=this,r=JSON.parse(sessionStorage.getItem("token"));t=this.$route.params.search?s.post("https://crm-umg.herokuapp.com/api/clientes_search/",{search:this.$route.params.search},{headers:{Authorization:"Bearer ".concat(r.access)}}).then((function(t){var r=t.data;e.setList(r.results)})):s.get("https://crm-umg.herokuapp.com/api/clientes/",{headers:{Authorization:"Bearer ".concat(r.access)}}).then((function(t){var r=t.data;e.setList(r)})),t.catch((function(t){return e.showError(t.response.data.detail)}))},methods:{deleteClient:function(t){var e=this;this.$swal({title:"Estas Seguro?",text:"Se va a eliminar el cliente ".concat(t),showCancelButton:!0}).then(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=JSON.parse(sessionStorage.getItem("token")),a.isConfirmed&&s.delete("https://crm-umg.herokuapp.com/api/clientes/"+t,{headers:{Authorization:"Bearer ".concat(n.access)}}).then((function(r){e.showSucces("Cliente eliminado correctamente"),e.clients=e.clients.filter((function(e){return e.actions!==t}))})).catch((function(t){return e.showError(t.response.data.detail)}));case 2:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())},setList:function(t){return this.clients=t.map((function(t){return{nombre:"".concat(t.nombres," ").concat(t.apellidos),telefono:t.telefono,estado:t.estado,departamento:t.departamento.nombre,actions:t.id}}))}}},l=c,u=(r("503f"),r("0c7c")),d=Object(u["a"])(l,a,n,!1,null,"d7487490",null);e["default"]=d.exports},efcf:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 p-5"},[r("card",[r("h5",{staticClass:"title",attrs:{"slot:header":""}},[t._v("Ingreso")]),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{state:!t.errors["username"]||0===t.errors["username"].length,label:"Usuario"}},[r("b-form-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._l(t.errors["username"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"w-100"}),r("div",{staticClass:"col-md-5 pr-md-1"},[r("b-form-group",{attrs:{state:!t.errors["username"]||0===t.errors["password"].length,label:"Contraseña"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[r("b-form-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._l(t.errors["password"],(function(e){return r("b-form-invalid-feedback",{attrs:{state:!1}},[t._v(t._s(e))])}))],2)],1),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-success pull-right",on:{click:t.ingresar}},[t._v("Ingresar")])])])])],1)])])},n=[],o=(r("ac1f"),r("5319"),r("2af9")),i=r("a18c"),s=r("bc3a"),c={name:"LoginView",components:{BaseInput:o["d"]},data:function(){return{username:"",password:"",isBusy:!0,errors:{username:[],password:[]}}},created:function(){},methods:{ingresar:function(){var t=this;s.post(" https://crm-umg.herokuapp.com/api/token/",{username:this.username,password:this.password}).then((function(t){sessionStorage.setItem("token",JSON.stringify(t.data)),i["a"].replace("/")})).catch((function(e){t.errors=e.response.data,e.response.data.detail&&t.showError(e.response.data.detail)}))}}},l=c,u=(r("a7d2"),r("0c7c")),d=Object(u["a"])(l,a,n,!1,null,"22adca84",null);e["default"]=d.exports},fb5e:function(t,e,r){}}]);
//# sourceMappingURL=common.8eea6a84.js.map