(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),u=t(13),c=t.n(u),r=t(2),l=(t(19),function(e){return o.a.createElement("div",null,e.show.map((function(n,t){return o.a.createElement("p",{key:t},"".concat(n.name," ").concat(n.number," "),o.a.createElement("button",{onClick:function(){return e.handleDelete(n.id)}},"delete"))})))}),i=function(e){return o.a.createElement("form",{onSubmit:e.add},o.a.createElement("label",null," name: "),o.a.createElement("input",{value:e.name,onChange:e.handleName}),o.a.createElement("label",null," number: "),o.a.createElement("input",{value:e.number,onChange:e.handleNumber}),o.a.createElement("b",null),o.a.createElement("button",{type:"submit"},"add"))},m=function(e){return o.a.createElement("form",null,o.a.createElement("label",null,"filter shown with "),o.a.createElement("input",{value:e.showOnly,onChange:e.onChange}))},f=function(e){return null===e.message?null:o.a.createElement("div",{className:"error"},e.message)},s=t(3),d=t.n(s),h="/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},p=function(e){return d.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(r.a)(c,2),d=s[0],h=s[1],g=Object(a.useState)(""),v=Object(r.a)(g,2),C=v[0],O=v[1],j=Object(a.useState)(""),y=Object(r.a)(j,2),k=y[0],D=y[1],L=Object(a.useState)(null),N=Object(r.a)(L,2),S=N[0],T=N[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var A=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(f,{message:S}),o.a.createElement(m,{showOnly:k,onChange:function(e){D(e.target.value)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(i,{add:function(e){e.preventDefault();var n={name:d,number:C},a=t.map((function(e){return e.name.toLowerCase()})),o=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}));a.includes(d.toLowerCase())&&(console.log("Change person: ".concat(o)),window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one"))&&C.length>7&&(n.name=o.name,E(o.id,n).then((function(e){T("".concat(n.name," number changed to ").concat(n.number)),setTimeout((function(){T(null)}),4e3),u(t.map((function(n){return n.id!==o.id?n:e})))}))));p(n).then((function(e){T("Added ".concat(n.name)),setTimeout((function(){T(null)}),3e3),u(t.concat(e)),h(""),O("")})).catch((function(e){return T(e.response.data.error)})),setTimeout((function(){T(null)}),4e3)},name:d,number:C,handleName:function(e){h(e.target.value)},handleNumber:function(e){O(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(l,{show:A,handleDelete:function(e){console.log(" Delete id: ".concat(e));var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&w(e).then((function(a){T("Deleted ".concat(n.name)),setTimeout((function(){T(null)}),3e3),u(t.filter((function(n){return n.id!==e})))})).catch((function(e){T("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){T(null)}),4e3)}))}}))};t(37);c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.19e318e4.chunk.js.map