(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModel_backdrop__1e0ke",modal:"ErrorModel_modal__i9_wE",header:"ErrorModel_header__2sgsf",content:"ErrorModel_content__1agcd",actions:"ErrorModel_actions__1scYU"}},,,,,function(e,t,n){e.exports={button:"Button_button__1bQbd"}},function(e,t,n){e.exports={Card:"Card_Card__1Y6UH"}},function(e,t,n){e.exports={input:"AddUser_input__E14-R"}},function(e,t,n){e.exports={users:"UsersList_users__1_5IQ"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=(n(17),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("button",{className:l.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("div",{className:"".concat(b.a.Card," ").concat(e.className),children:e.children})},h=n(10),O=n.n(h),x=n(3),p=n.n(x),_=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.backdrop,onClick:e.onconfirm}),Object(d.jsxs)(m,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(u,{onClick:e.onconfirm,children:"OKAY!!!"})})]})]})},f=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(),h=Object(i.a)(b,2),x=h[0],p=h[1];return Object(d.jsxs)("div",{children:[x&&Object(d.jsx)(_,{title:x.titile,message:x.message,onconfirm:function(){p(null)}}),Object(d.jsx)(m,{className:O.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==r.trim().length&&0!==l.trim().length?l<1?p({title:"invalid age",message:"please enter the valid age(>0)."}):(e.onAddUser(r,l),a(""),j("")):p({title:"invalid input",message:"please enter the valid name and age(non-empty values) "})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{id:"username",type:"text",onChange:function(e){a(e.target.value)},value:r}),Object(d.jsx)("label",{htmlFor:"age",children:"Age(years)"}),Object(d.jsx)("input",{id:"age",type:"number",onChange:function(e){j(e.target.value)},value:l}),Object(d.jsx)(u,{type:"submit",children:"addUser"})]})})]})},g=n(11),v=n.n(g),k=function(e){return Object(d.jsx)(m,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{onAddUser:function(e,t){r((function(n){return[].concat(Object(s.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(k,{users:n})]})};a.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.700f8375.chunk.js.map