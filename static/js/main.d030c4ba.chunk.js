(this["webpackJsonptodo-app-for-jm"]=this["webpackJsonptodo-app-for-jm"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(8),o=n.n(s),i=n(2),r=n(3),l=n(5),j=n(4),d=(n(15),n(16),function(){return Object(c.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})}),u=function(){return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:"todos"}),Object(c.jsx)(d,{})]})},b=n(7),O=n(9),h=(n(17),n(22)),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={done:!1},e.onDoneClick=function(){e.setState((function(e){return{done:!e.done}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.status,a=e.addingDate,s=e.id,o=e.itemDestroy,i=n;return this.state.done&&(i="completed"),Object(c.jsxs)("li",{className:i,children:[Object(c.jsxs)("div",{className:"view",children:[Object(c.jsx)("input",{className:"toggle",type:"checkbox",onClick:this.onDoneClick}),Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:"description",children:t}),Object(c.jsx)("span",{className:"created",children:Object(h.a)(a)})]}),Object(c.jsx)("button",{className:"icon icon-edit"}),Object(c.jsx)("button",{className:"icon icon-destroy",onClick:function(){return o(s)}})]}),"editing"===n?Object(c.jsx)("input",{type:"text",className:"edit",defaultValue:t}):null]})}}]),n}(a.Component),p=function(e){var t=e.todos,n=e.itemDestroy,a=t.map((function(e){var t=e.id,a=Object(O.a)(e,["id"]);return Object(c.jsx)(m,Object(b.a)(Object(b.a)({},a),{},{itemDestroy:function(){return n(t)}}),t)}));return Object(c.jsx)("ul",{className:"todo-list",children:a})},f=(n(18),n(19),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("ul",{className:"filters",children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"selected",children:"All"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"Active"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{children:"Completed"})})]})}}]),n}(a.Component)),x=function(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("span",{className:"todo-count",children:"1 items left"}),Object(c.jsx)(f,{}),Object(c.jsx)("button",{className:"clear-completed",children:"Clear completed"})]})},v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={todoData:[{label:"Completed",addingDate:new Date,id:1},{label:"Editing",status:"editing",addingDate:new Date,id:2},{label:"Active",addingDate:new Date,id:3}]},e.itemDestroy=function(t){e.setState((function(e){return{todoData:e.todoData.reduce((function(e,n){return n.id!==t&&e.push(n),e}),[])}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.todoData;return Object(c.jsxs)("section",{className:"todoapp",children:[Object(c.jsx)(u,{}),Object(c.jsx)("section",{className:"main",children:Object(c.jsx)(p,{todos:e,itemDestroy:this.itemDestroy})}),Object(c.jsx)(x,{})]})}}]),n}(a.Component);o.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d030c4ba.chunk.js.map