webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"app"},i,!1,function(t){e("dbHi")},null,null).exports,r=e("/ocq"),u=e("BO1k"),c=e.n(u),o={name:"item",data:function(){return{num:0}},props:{itemData:{type:Array,default:function(){return[]}}},methods:{plus:function(){this.num++},minus:function(){0!==this.num&&this.num--}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return"精品名"!==t.itemData[0]&&""!==t.itemData[0]&&""!==t.itemData[1]?e("div",{staticClass:"container"},[e("span",{staticClass:"name"},[t._v(t._s(t.itemData[0]))]),t._v(" "),e("div",[e("span",{staticClass:"price"},[t._v(t._s(t.itemData[1]))]),t._v(" "),e("button",{on:{click:t.minus}},[t._v(" - ")]),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.num))]),t._v(" "),e("button",{staticClass:"plus",on:{click:t.plus}},[t._v(" + ")])])]):t._e()},staticRenderFns:[]};var m={name:"main-page",components:{cItem:e("VU/8")(o,l,!1,function(t){e("nfig")},"data-v-02707394",null).exports},data:function(){return{obj:{},result:0}},methods:{getData:function(){var t=this;this.$http.get("static/json/test.json").then(function(n){t.obj=n.data})},getSum:function(){this.result=0;var t=!0,n=!1,e=void 0;try{for(var a,i=c()(this.$children);!(t=(a=i.next()).done);t=!0){var s=a.value;s.num&&0!==s.num&&(this.result+=s.num*s.itemData[1])}}catch(t){n=!0,e=t}finally{try{!t&&i.return&&i.return()}finally{if(n)throw e}}}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content"},[e("header",[e("button",{staticClass:"get-data",on:{click:t.getData}},[t._v("获取数据")]),t._v(" "),e("div",[e("span",{staticClass:"price"},[t._v("总价格: "+t._s(t.result))]),t._v(" "),e("button",{on:{click:t.getSum}},[t._v("计算")])])]),t._v(" "),t._l(t.obj.content,function(t){return e("c-item",{attrs:{"item-data":t}})})],2)])},staticRenderFns:[]};var v=e("VU/8")(m,p,!1,function(t){e("iPF3")},"data-v-d7445aac",null).exports;a.a.use(r.a);var d=new r.a({routes:[{path:"/",name:"main-page",component:v}]}),f=e("mtWM"),_=e.n(f).a.create({timeout:1e4});a.a.prototype.$http=_,a.a.config.productionTip=!1,new a.a({el:"#app",router:d,template:"<App/>",components:{App:s}})},dbHi:function(t,n){},iPF3:function(t,n){},nfig:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.07fa56ae66a8e84531d7.js.map