"use strict";(self["webpackChunkvue3_week6"]=self["webpackChunkvue3_week6"]||[]).push([[153],{1530:function(e,t,s){function a(e){return{all:e=e||new Map,on:function(t,s){var a=e.get(t);a?a.push(s):e.set(t,[s])},off:function(t,s){var a=e.get(t);a&&(s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var a=e.get(t);a&&a.slice().map((function(e){e(s)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,s)}))}}}s.d(t,{Z:function(){return o}});const l=a();var o=l},7153:function(e,t,s){s.r(t),s.d(t,{default:function(){return P}});var a=s(6252),l=s(3577),o=s(9963);const i={class:"container"},n={class:"mt-4"},r=(0,a._)("h2",{class:"text-center"},"購物車",-1),d={class:"text-end"},c=["disabled"],m={class:"table align-middle"},u=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{style:{width:"25%"}}),(0,a._)("th",{style:{width:"25%"}},"品名"),(0,a._)("th",{style:{width:"10%"}},"數量/單位"),(0,a._)("th",{style:{width:"25%"},class:"text-end"},"單價")])],-1),h=["onClick","disabled"],p={key:0,class:"fas fa-spinner fa-pulse"},f=(0,a.Uk)(" x "),g={class:"input-group input-group-sm"},b={class:"input-group mb-3"},_=["onUpdate:modelValue","onChange","disabled"],v=["value"],w={class:"input-group-text",id:"basic-addon2"},C={class:"text-end"},y=(0,a._)("td",{colspan:"3",class:"text-end"},"總計",-1),k={class:"text-end"},x={class:"my-5 row justify-content-center"},V={class:"mb-3"},L=(0,a._)("label",{for:"email",class:"form-label"}," Email ",-1),I={class:"mb-3"},$=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),W={class:"mb-3"},q=(0,a._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),U={class:"mb-3"},z=(0,a._)("label",{for:"address",class:"form-label"},"收件人地址",-1),D={class:"mb-3"},B=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),O={class:"text-end"},A=["disabled"];function E(e,t,s,E,F,M){const Z=(0,a.up)("VLoading"),j=(0,a.up)("VField"),H=(0,a.up)("ErrorMessage"),K=(0,a.up)("VForm");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",n,[(0,a.Wm)(Z,{active:F.isLoading},null,8,["active"]),r,(0,a._)("div",d,[(0,a._)("button",{class:"btn btn-outline-danger",type:"button",onClick:t[0]||(t[0]=(...e)=>M.deleteAllCarts&&M.deleteAllCarts(...e)),disabled:0===F.cart.carts.length}," 清空購物車 ",8,c)]),(0,a._)("table",m,[u,(0,a._)("tbody",null,[F.cart.carts?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(F.cart.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:t=>M.deleteCartItem(e.id),disabled:F.isLoadingItem===e.id},[F.isLoadingItem===e.id?((0,a.wg)(),(0,a.iD)("i",p)):(0,a.kq)("",!0),f],8,h)]),(0,a._)("td",null,(0,l.zw)(e.product.title),1),(0,a._)("td",null,[(0,a._)("div",g,[(0,a._)("div",b,[(0,a.wy)((0,a._)("select",{id:"",class:"form-select","onUpdate:modelValue":t=>e.qty=t,onChange:t=>M.updateCartItem(e),disabled:F.isLoadingItem===e.id},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(20,(t=>(0,a._)("option",{value:t,key:`${t}-${e.id}`},(0,l.zw)(t),9,v))),64))],40,_),[[o.bM,e.qty]]),(0,a._)("span",w,(0,l.zw)(e.product.unit),1)])])]),(0,a._)("td",C,(0,l.zw)(e.total),1)])))),128)):(0,a.kq)("",!0)]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[y,(0,a._)("td",k,(0,l.zw)(F.cart.total),1)])])])]),(0,a._)("div",x,[(0,a.Wm)(K,{ref:"form",class:"col-md-6",onSubmit:M.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",V,[L,(0,a.Wm)(j,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:F.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>F.form.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(H,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",I,[$,(0,a.Wm)(j,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:F.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=e=>F.form.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(H,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",W,[q,(0,a.Wm)(j,{id:"tel",name:"電話",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:M.isPhone,modelValue:F.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=e=>F.form.user.tel=e)},null,8,["class","rules","modelValue"]),(0,a.Wm)(H,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",U,[z,(0,a.Wm)(j,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:F.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=e=>F.form.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(H,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",D,[B,(0,a.wy)((0,a._)("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>F.form.message=e)},null,512),[[o.nr,F.form.message]])]),(0,a._)("div",O,[(0,a._)("button",{type:"submit",class:"btn btn-danger",disabled:0===F.cart.carts?.length||Object.keys(e).length>0}," 送出訂單 ",8,A)])])),_:1},8,["onSubmit"])])])}var F=s(6455),M=s.n(F),Z=s(1530),j={data(){return{cart:{carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoadingItem:"",isLoading:!1}},methods:{getCart(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/v2/api/rousong/cart";this.$http.get(e).then((e=>{this.cart=e.data.data,Z.Z.emit("get-cart"),this.isLoading=!1})).catch((e=>{console.log(e.data.message)}))},updateCartItem(e){const t={product_id:e.id,qty:e.qty},s=`https://vue3-course-api.hexschool.io/v2/api/rousong/cart/${e.id}`;this.isLoadingItem=e.id,this.$http.put(s,{data:t}).then((()=>{M().fire({position:"center",icon:"success",title:"已更新商品",showConfirmButton:!1,timer:1500}),this.getCart(),this.isLoadingItem=""})).catch((e=>{console.log(e.data.message)}))},deleteCartItem(e){const t=`https://vue3-course-api.hexschool.io/v2/api/rousong/cart/${e}`;this.isLoadingItem=e,this.$http.delete(t).then((()=>{M().fire({position:"center",icon:"success",title:"已刪除商品",showConfirmButton:!1,timer:1500}),this.getCart(),this.isLoadingItem=""})).catch((e=>{console.log(e.data.message)}))},deleteAllCarts(){const e="https://vue3-course-api.hexschool.io/v2/api/rousong/carts";this.$http.delete(e).then((()=>{M().fire({position:"center",icon:"success",title:"已刪除全部商品",showConfirmButton:!1,timer:1500}),this.getCart()})).catch((e=>{console.log(e.data.message)}))},isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的電話號碼"},createOrder(){const e="https://vue3-course-api.hexschool.io/v2/api/rousong/order",t=this.form;this.$http.post(e,{data:t}).then((()=>{M().fire({position:"center",icon:"success",title:"已建立訂單",showConfirmButton:!1,timer:1500}),this.$refs.form.resetForm(),this.form.message="",this.getCart()})).catch((e=>{console.log(e.data.message)}))}},mounted(){this.getCart()}},H=s(3744);const K=(0,H.Z)(j,[["render",E]]);var P=K}}]);
//# sourceMappingURL=153.f939f820.js.map