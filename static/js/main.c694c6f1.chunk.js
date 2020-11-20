(this["webpackJsonptodo-app-for-jm"]=this["webpackJsonptodo-app-for-jm"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n(9),r=n.n(c),i=n(2),l=n(7),s=n(3),u=n(4),d=n(6),f=n(5),j=(n(16),n(17),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onKeyDown=function(t){var n=e.state.label,a=e.props.addItem;"Enter"===t.code&&""!==n&&(a(n),e.setState({label:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.label;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"todos"}),Object(a.jsx)("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.onLabelChange,onKeyDown:this.onKeyDown,value:e})]})}}]),n}(o.Component)),b=n(10),h=(n(18),{filters:{all:"All",active:"Active",completed:"Completed"}}),m=n(25),p=(n(19),n(20)),O=function(e){var t=e.label,n=e.addingDate,o=e.id,c=e.done,r=e.editing,i=e.itemDestroy,l=e.onToggleDone,s=e.itemEdit,u=p({"":!0,completed:c,editing:r});return Object(a.jsxs)("li",{className:u,children:[Object(a.jsxs)("div",{className:"view",children:[Object(a.jsx)("input",{className:"toggle",type:"checkbox",checked:c,onClick:function(){return l(o)}}),Object(a.jsxs)("label",{children:[Object(a.jsx)("span",{className:"description",children:t}),Object(a.jsx)("span",{className:"created",children:Object(m.a)(n)})]}),Object(a.jsx)("button",{type:"button","aria-label":"Edit",className:"icon icon-edit",onClick:function(){return s(o)}}),Object(a.jsx)("button",{type:"button","aria-label":"Delete",className:"icon icon-destroy",onClick:function(){return i(o)}})]}),r?Object(a.jsx)("input",{type:"text",className:"edit",defaultValue:t}):null]})},v=function(e){var t=e.todos,n=e.itemDestroy,o=e.onToggleDone,c=e.itemEdit,r=function(e){switch(e){case h.filters.active:return t.filter((function(e){return!e.done}));case h.filters.completed:return t.filter((function(e){return e.done}));default:return t}}(e.filterValue).map((function(e){var t=e.id,r=Object(b.a)(e,["id"]);return Object(a.jsx)(O,Object(i.a)(Object(i.a)({id:t},r),{},{itemDestroy:function(){return n(t)},onToggleDone:function(){return o(t)},itemEdit:function(){return c(t)}}),t)}));return Object(a.jsx)("ul",{className:"todo-list",children:r})},g=(n(21),n(22),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).onFilterClick=function(t){(0,e.props.changeFilter)(t.target.dataset.value)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.filterValue;return Object(a.jsxs)("ul",{className:"filters",onClick:this.onFilterClick,onKeyDown:function(){},role:"presentation",children:[Object(a.jsx)("li",{children:Object(a.jsx)("button",{type:"button",className:e===h.filters.all?"selected":"","data-value":h.filters.all,children:"All"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{type:"button",className:e===h.filters.active?"selected":"","data-value":h.filters.active,children:"Active"})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{type:"button",className:e===h.filters.completed?"selected":"","data-value":h.filters.completed,children:"Completed"})})]})}}]),n}(o.Component)),x=function(e){var t=e.todoCount,n=e.clearComplete,o=e.changeFilter,c=e.filterValue;return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("span",{className:"todo-count",children:[t," items left"]}),Object(a.jsx)(g,{changeFilter:o,filterValue:c}),Object(a.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){return n()},children:"Clear completed"})]})},D=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).currentId=100,e.state={todoData:[e.createTodoItem("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),e.createTodoItem("\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),e.createTodoItem("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")],filterValue:"All"},e.changeFilter=function(t){e.setState((function(){return{filterValue:t}}))},e.addItem=function(t){var n=e.createTodoItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(l.a)(t),[n])}}))},e.itemDestroy=function(t){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return e.id!==t}))}}))},e.itemEdit=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t})),o=n[a],c=Object(i.a)(Object(i.a)({},o),{},{editing:!o.editing});return{todoData:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))},e.clearComplete=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!e.done}))}}))},e.onToggleDone=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t})),o=n[a],c=Object(i.a)(Object(i.a)({},o),{},{done:!o.done});return{todoData:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))},e}return Object(u.a)(n,[{key:"createTodoItem",value:function(e){return{label:e,addingDate:new Date,id:this.currentId+Math.floor(100*Math.random()),done:!1,editing:!1}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.filterValue,o=t.length-t.filter((function(e){return e.done})).length;return Object(a.jsxs)("section",{className:"todoapp",children:[Object(a.jsx)(j,{addItem:this.addItem}),Object(a.jsx)("section",{className:"main",children:Object(a.jsx)(v,{todos:t,filterValue:n,itemDestroy:this.itemDestroy,onToggleDone:this.onToggleDone,itemEdit:this.itemEdit})}),Object(a.jsx)(x,{todoCount:o,clearComplete:this.clearComplete,changeFilter:this.changeFilter,filterValue:n})]})}}]),n}(o.Component);r.a.render(Object(a.jsx)(D,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c694c6f1.chunk.js.map