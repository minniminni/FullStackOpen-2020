(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),c=t(13),o=t.n(c),r=t(2),l=(t(19),function(e){return u.a.createElement("div",null,e.show.map((function(n,t){return u.a.createElement("p",{key:t},"".concat(n.name," ").concat(n.number," "),u.a.createElement("button",{onClick:function(){return e.handleDelete(n.id)}},"delete"))})))}),i=function(e){return u.a.createElement("form",{onSubmit:e.add},u.a.createElement("label",null," name: "),u.a.createElement("input",{value:e.name,onChange:e.handleName}),u.a.createElement("label",null," number: "),u.a.createElement("input",{value:e.number,onChange:e.handleNumber}),u.a.createElement("b",null),u.a.createElement("button",{type:"submit"},"add"))},m=function(e){return u.a.createElement("form",null,u.a.createElement("label",null,"filter shown with "),u.a.createElement("input",{value:e.showOnly,onChange:e.onChange}))},f=function(e){return null===e.message?null:u.a.createElement("div",{className:"error"},e.message)},d=t(3),s=t.n(d),h="/api/persons",b=function(){return s.a.get(h).then((function(e){return e.data}))},E=function(e){return s.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),s=d[0],h=d[1],g=Object(a.useState)(""),v=Object(r.a)(g,2),O=v[0],j=v[1],C=Object(a.useState)(""),y=Object(r.a)(C,2),k=y[0],D=y[1],N=Object(a.useState)(null),S=Object(r.a)(N,2),T=S[0],L=S[1];Object(a.useEffect)((function(){b().then((function(e){c(e)}))}),[]);var A=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(f,{message:T}),u.a.createElement(m,{showOnly:k,onChange:function(e){D(e.target.value)}}),u.a.createElement("h3",null,"Add a new"),u.a.createElement(i,{add:function(e){e.preventDefault();var n={name:s,number:O},a=t.map((function(e){return e.name.toLowerCase()})),u=t.find((function(e){return e.name===s}));a.includes(s.toLowerCase())?window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one"))&&p(u.id,n).then((function(e){L("".concat(n.name," number changed to ").concat(n.number)),setTimeout((function(){L(null)}),4e3),c(t.map((function(n){return n.id!==u.id?n:e})))})):(console.log(" PersonObject = ".concat(n)),E(n).then((function(e){L("Added ".concat(n.name)),setTimeout((function(){L(null)}),3e3),c(t.concat(e)),h(""),j("")})).catch((function(e){return L(e.response.data.error)})),setTimeout((function(){L(null)}),4e3))},name:s,number:O,handleName:function(e){h(e.target.value)},handleNumber:function(e){j(e.target.value)}}),u.a.createElement("h3",null,"Numbers"),u.a.createElement(l,{show:A,handleDelete:function(e){console.log(" Delete id: ".concat(e," is"));var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&w(e).then((function(a){L("Deleted ".concat(n.name)),setTimeout((function(){L(null)}),3e3),c(t.filter((function(n){return n.id!==e})))})).catch((function(e){L("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){L(null)}),4e3)}))}}))};t(37);o.a.render(u.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.666eb315.chunk.js.map