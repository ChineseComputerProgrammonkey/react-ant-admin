(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[26],{1503:function(e,a,t){},1571:function(e,a,t){"use strict";t.r(a);var n=t(2),s=(t(1099),t(1059)),r=t.n(s),c=t(3),l=(t(996),t(852)),i=t.n(l),o=(t(545),t(154)),u=t.n(o),j=(t(543),t(266)),b=t.n(j),d=(t(860),t(861)),h=t.n(d),m=(t(1499),t(1505)),p=t.n(m),O=(t(1501),t(1504)),x=t.n(O),g=(t(819),t(847)),f=t.n(g),w=(t(189),t(69)),v=t.n(w),y=(t(997),t(998)),P=t.n(y),k=t(11),I=(t(975),t(987)),E=t.n(I),C=t(0),q=(t(1503),t(846)),F=t(25),N=E.a.Option,z=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],S={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},T={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function L(){var e=P.a.useForm(),a=Object(k.a)(e,1)[0],t=Object(q.k)();Object(C.useEffect)((function(){v.a.warn("\u6b64\u9875\u9762\u4f7f\u7528\u4e86 [NEMU_LAYOUT] \u5c5e\u6027 \u63a7\u5236\u5e03\u5c40\uff01")}),[]);var n=Object(C.useCallback)((function(){t.go(-1)}),[t]),s=Object(F.jsx)(P.a.Item,{name:"prefix",noStyle:!0,children:Object(F.jsxs)(E.a,{style:{width:70},children:[Object(F.jsx)(N,{value:"86",children:"+86"}),Object(F.jsx)(N,{value:"87",children:"+87"})]})}),l=Object(C.useState)([]),o=Object(k.a)(l,2),j=o[0],d=o[1],m=j.map((function(e){return{label:e,value:e}}));return Object(F.jsx)("div",{children:Object(F.jsxs)(P.a,Object(c.a)(Object(c.a)({},S),{},{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},className:"index-form",initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[Object(F.jsx)(P.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(F.jsx)(f.a,{})}),Object(F.jsx)(P.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(F.jsx)(f.a.Password,{})}),Object(F.jsx)(P.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(F.jsx)(f.a.Password,{})}),Object(F.jsx)(P.a.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(F.jsx)(f.a,{})}),Object(F.jsx)(P.a.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}],children:Object(F.jsx)(x.a,{options:z})}),Object(F.jsx)(P.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(F.jsx)(f.a,{addonBefore:s,style:{width:"100%"}})}),Object(F.jsx)(P.a.Item,{name:"website",label:"Website",rules:[{required:!0,message:"Please input website!"}],children:Object(F.jsx)(p.a,{options:m,onChange:function(e){d(e?[".com",".org",".net"].map((function(a){return"".concat(e).concat(a)})):[])},placeholder:"website",children:Object(F.jsx)(f.a,{})})}),Object(F.jsx)(P.a.Item,{label:"Captcha",extra:"We must make sure that your are a human.",children:Object(F.jsxs)(u.a,{gutter:8,children:[Object(F.jsx)(h.a,{span:12,children:Object(F.jsx)(P.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:Object(F.jsx)(f.a,{})})}),Object(F.jsx)(h.a,{span:12,children:Object(F.jsx)(b.a,{children:"Get captcha"})})]})}),Object(F.jsx)(P.a.Item,Object(c.a)(Object(c.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},T),{},{children:Object(F.jsxs)(i.a,{children:["I have read the"," ",Object(F.jsx)("a",{href:"/",target:"_blank",children:"agreement"})]})})),Object(F.jsx)(P.a.Item,Object(c.a)(Object(c.a)({},T),{},{children:Object(F.jsxs)(r.a,{children:[Object(F.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"}),Object(F.jsx)(b.a,{onClick:n,children:"\u8fd4\u56de\u4e0a\u4e00\u9875"})]})}))]}))})}a.default=L,L.route=Object(n.a)({path:"/form/index"},"layout","FULLSCREEN")}}]);