"use strict";(self["webpackChunkvue3_week6"]=self["webpackChunkvue3_week6"]||[]).push([[264],{9264:function(e,s,n){n.r(s),n.d(s,{default:function(){return _}});var t=n(6252),r=n(9963);const o={class:"container vh-100"},a={class:"d-flex justify-content-center align-items-center flex-column h-100"},i=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal text-center w-100"},"請先登入",-1),l={class:"mb-3"},u={for:"email",class:"d-block"},c=(0,t.Uk)(" Email "),d=(0,t.Uk)(" Password "),m={for:"password",class:"d-block"},p=(0,t._)("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"},"登入",-1);function h(e,s,n,h,w,f){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",a,[i,(0,t._)("form",{class:"form-signin w-100",onSubmit:s[2]||(s[2]=(0,r.iM)(((...e)=>f.login&&f.login(...e)),["prevent"]))},[(0,t._)("div",l,[(0,t._)("label",u,[c,(0,t.wy)((0,t._)("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>w.user.username=e),id:"email",placeholder:"name@example.com",required:""},null,512),[[r.nr,w.user.username]])])]),(0,t._)("div",null,[d,(0,t._)("label",m,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>w.user.password=e),id:"password",placeholder:"Password",required:""},null,512),[[r.nr,w.user.password]])])]),p],32)])])}var w=n(6455),f=n.n(w),b={data(){return{user:{username:"",password:""}}},methods:{login(){const e="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(e,this.user).then((e=>{const{token:s,expired:n}=e.data;document.cookie=`hexToken=${s};expires=${new Date(n)}`,this.$router.push("/admin/products")})).catch((e=>{f().fire({position:"center",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500})}))}}},k=n(3744);const v=(0,k.Z)(b,[["render",h]]);var _=v}}]);
//# sourceMappingURL=264.b97bf265.js.map