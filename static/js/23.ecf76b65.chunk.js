(this["webpackJsonpreact-ant-admin"]=this["webpackJsonpreact-ant-admin"]||[]).push([[23],{1211:function(e,a,t){},1360:function(e,a,t){"use strict";t.r(a);var n=t(2),s=(t(966),t(933)),r=t.n(s),l=(t(169),t(64)),c=t.n(l),i=(t(168),t(84)),o=t.n(i),u=(t(250),t(95)),j=t.n(u),d=(t(1207),t(1217)),h=t.n(d),m=(t(1209),t(1212)),b=t.n(m),p=(t(852),t(853)),x=t.n(p),O=(t(880),t(881)),g=t.n(O),f=t(18),w=(t(869),t(861)),v=t.n(w),y=t(0),P=(t(1211),t(9)),I=v.a.Option,k=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],q={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},z={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function C(){var e=g.a.useForm(),a=Object(f.a)(e,1)[0],t=Object(P.jsx)(g.a.Item,{name:"prefix",noStyle:!0,children:Object(P.jsxs)(v.a,{style:{width:70},children:[Object(P.jsx)(I,{value:"86",children:"+86"}),Object(P.jsx)(I,{value:"87",children:"+87"})]})}),s=Object(y.useState)([]),l=Object(f.a)(s,2),i=l[0],u=l[1],d=i.map((function(e){return{label:e,value:e}}));return Object(P.jsx)("div",{children:Object(P.jsxs)(g.a,Object(n.a)(Object(n.a)({},q),{},{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},className:"index-form",initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[Object(P.jsx)(g.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(P.jsx)(x.a,{})}),Object(P.jsx)(g.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(P.jsx)(x.a.Password,{})}),Object(P.jsx)(g.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(P.jsx)(x.a.Password,{})}),Object(P.jsx)(g.a.Item,{name:"nickname",label:"Nickname",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(P.jsx)(x.a,{})}),Object(P.jsx)(g.a.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}],children:Object(P.jsx)(b.a,{options:k})}),Object(P.jsx)(g.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(P.jsx)(x.a,{addonBefore:t,style:{width:"100%"}})}),Object(P.jsx)(g.a.Item,{name:"website",label:"Website",rules:[{required:!0,message:"Please input website!"}],children:Object(P.jsx)(h.a,{options:d,onChange:function(e){u(e?[".com",".org",".net"].map((function(a){return"".concat(e).concat(a)})):[])},placeholder:"website",children:Object(P.jsx)(x.a,{})})}),Object(P.jsx)(g.a.Item,{label:"Captcha",extra:"We must make sure that your are a human.",children:Object(P.jsxs)(c.a,{gutter:8,children:[Object(P.jsx)(j.a,{span:12,children:Object(P.jsx)(g.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:Object(P.jsx)(x.a,{})})}),Object(P.jsx)(j.a,{span:12,children:Object(P.jsx)(o.a,{children:"Get captcha"})})]})}),Object(P.jsx)(g.a.Item,Object(n.a)(Object(n.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject(new Error("Should accept agreement"))}}]},z),{},{children:Object(P.jsxs)(r.a,{children:["I have read the"," ",Object(P.jsx)("a",{href:"/",target:"_blank",children:"agreement"})]})})),Object(P.jsx)(g.a.Item,Object(n.a)(Object(n.a)({},z),{},{children:Object(P.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))})}a.default=C,C.route={path:"/form/index"}}}]);