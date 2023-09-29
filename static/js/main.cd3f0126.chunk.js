(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(9),n=c.n(s),a=c(8),r=c(16),o=c(6),i=c(14),l=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/SET_QUERY",payload:e}},O=function(){return{type:"filter/CLEAR_QUERY"}},f=function(e){return{type:"filter/SET_STATUS",payload:e}},m={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/CLEAR_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:""});case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"todos/SET",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(o.combineReducers)({currentTodo:j,filter:x,todos:y}),N=Object(o.createStore)(v,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),T=c(3),g=c(17),k=c(0),E=(c(25),c(26),c(12)),S=c.n(E),w=c(1),C=function(e){var t=e.todo,c=e.setPickedTodo,s=e.pickedTodo,n=t.id,a=t.title,r=t.completed;return Object(w.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(w.jsx)("td",{className:"is-vcentered",children:n}),Object(w.jsx)("td",{className:"is-vcentered",children:r&&Object(w.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("td",{className:"is-vcentered is-expanded",children:Object(w.jsx)("p",{className:S()({"has-text-success":r,"has-text-danger":!r}),children:a})}),Object(w.jsx)("td",{className:"has-text-right is-vcentered",children:Object(w.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:S()("far",{"fa-eye":(null===s||void 0===s?void 0:s.id)!==t.id,"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===t.id})})})})})]})},_=function(e){var t=e.todos,c=e.setPickedTodo,s=e.pickedTodo;return Object(w.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:Object(w.jsx)("span",{className:"icon",children:Object(w.jsx)("i",{className:"fas fa-check"})})}),Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:" "})]})}),Object(w.jsx)("tbody",{children:t.map((function(e){return Object(w.jsx)(C,{todo:e,setPickedTodo:c,pickedTodo:s},e.id)}))})]})},R=function(e){var t=e.setFilteredBy,c=e.setQuery,s=e.clearQuery,n=e.query;return Object(w.jsxs)("form",{className:"field has-addons",children:[Object(w.jsx)("p",{className:"control",children:Object(w.jsx)("span",{className:"select",children:Object(w.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"active",children:"Active"}),Object(w.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(w.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(w.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)("span",{className:"icon is-left",children:Object(w.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(w.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(w.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:s})})]})]})},P=(c(28),function(){return Object(w.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(w.jsx)("div",{className:"Loader__content"})})});function Q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(e){var t=e.pickedTodo,c=e.clearPickedTodo,s=Object(k.useState)(!1),n=Object(T.a)(s,2),a=n[0],r=n[1],o=Object(k.useState)(),i=Object(T.a)(o,2),l=i[0],d=i[1],u=t.userId,j=t.id,b=t.title,h=t.completed;return Object(k.useEffect)((function(){r(!0),function(e){return Q("/users/".concat(e))}(u).then(d).finally((function(){return r(!1)}))}),[u]),Object(w.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(w.jsx)("div",{className:"modal-background"}),a?Object(w.jsx)(P,{}):Object(w.jsxs)("div",{className:"modal-card",children:[Object(w.jsxs)("header",{className:"modal-card-head",children:[Object(w.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(j)}),Object(w.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(w.jsxs)("div",{className:"modal-card-body",children:[Object(w.jsx)("p",{className:"block","data-cy":"modal-title",children:b}),Object(w.jsxs)("p",{className:"block","data-cy":"modal-user",children:[h?Object(w.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(w.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(w.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===l||void 0===l?void 0:l.name})]})]})]})]})},A=a.b,L=a.c,U=function(){var e=Object(k.useState)(!1),t=Object(T.a)(e,2),c=t[0],s=t[1],n=L((function(e){return e.todos})),a=L((function(e){return e.filter})),r=L((function(e){return e.currentTodo})),o=A();Object(k.useEffect)((function(){s(!0),Q("/todos").then((function(e){return o(p(e))})).finally((function(){return s(!1)}))}),[]);var i=function(e,t,c){var s=Object(g.a)(e);if(t){var n=t.toLowerCase().trim();s=s.filter((function(e){return e.title.toLowerCase().includes(n)}))}switch(c){case"all":default:return s;case"active":return s.filter((function(e){return!e.completed}));case"completed":return s.filter((function(e){return e.completed}))}}(n,a.query,a.status);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"section",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("h1",{className:"title",children:"Todos:"}),Object(w.jsx)("div",{className:"block",children:Object(w.jsx)(R,{setFilteredBy:function(e){o(f(e))},clearQuery:function(){o(O())},setQuery:function(e){o(h(e))},query:a.query})}),Object(w.jsxs)("div",{className:"block",children:[c&&Object(w.jsx)(P,{}),!c&&n.length>0&&Object(w.jsx)(_,{todos:i,setPickedTodo:function(e){o(d(e))},pickedTodo:r})]})]})})}),r&&Object(w.jsx)(q,{pickedTodo:r,clearPickedTodo:function(){o(u())}})]})},B=function(){return Object(w.jsx)(a.a,{store:N,children:Object(w.jsx)(r.a,{children:Object(w.jsx)(U,{})})})};n.a.render(Object(w.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cd3f0126.chunk.js.map