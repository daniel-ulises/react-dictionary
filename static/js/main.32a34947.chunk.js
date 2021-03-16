(this["webpackJsonpreact-dictionary"]=this["webpackJsonpreact-dictionary"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(21),s=n.n(r),a=n(5),o=n(0);var l=function(e){return Object(o.jsx)("div",{className:"search",children:Object(o.jsxs)("form",{onSubmit:e.submit,children:[Object(o.jsx)("input",{placeholder:"Search for a word",type:"search",name:"search",id:"search",onChange:e.value}),Object(o.jsx)("button",{type:"submit",children:"Search"})]})})};var j=function(e){return Object(o.jsx)("div",{className:"container",children:e.content})};var d=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("a",{href:"https://github.com/daniel-ulises/react-dictionary",target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{class:"fab fa-github"})})})};var b=function(){return Object(o.jsx)("div",{className:"container-loader",children:Object(o.jsx)("div",{className:"loader"})})};var u=function(){return Object(o.jsxs)("div",{class:"welcome-msg",children:[Object(o.jsx)("h3",{children:"Welcome to React Dictionary"}),Object(o.jsxs)("p",{children:["This is a simple React App that serves as a dictionary. It uses the"," ",Object(o.jsx)("a",{href:"https://owlbot.info",target:"_blank",rel:"noopener noreferrer",children:"OwlBot"})," ","API in order to retrieve the definitions and examples. To start using it just type in a word, it will provide your search query, how it is pronounced and one definition or more, if available. In some cases it will also provide a picture related to what you have searched for."]})]})},h=n(22),m=n.n(h);n(72);var p=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),h=s[0],p=s[1],x=m()("ef94bd0bac8c270294d3fa57c37bd05518290b56");return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{submit:function(e){e.preventDefault(),e.target.reset(),x.define(h).then((function(e){return i(e)}))},value:function(e){p(e.target.value)}}),h?Object(o.jsx)(j,{content:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"result-word",children:[Object(o.jsx)("span",{className:"word",children:n.word}),Object(o.jsx)("span",{className:"emoji",children:n.definitions?n.definitions[0].emoji:null}),Object(o.jsx)("span",{className:"pronunciation",children:n.pronunciation})]}),Object(o.jsx)("div",{className:"result-definitions",children:n.definitions?n.definitions.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"def-group",children:[Object(o.jsx)("span",{className:"def-type",children:e.type}),Object(o.jsx)("p",{className:"def-definition",children:e.definition}),e.example?Object(o.jsxs)("div",{className:"def-example",children:[Object(o.jsx)("span",{children:"example"}),Object(o.jsx)("p",{children:e.example.replace(/<\/?[^>]+>/gi,"")})]}):null]}),e.image_url?Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:e.image_url,alt:n.name})}):null]})})):Object(o.jsx)(b,{})})]})}):Object(o.jsx)(u,{}),Object(o.jsx)(d,{})]})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.32a34947.chunk.js.map