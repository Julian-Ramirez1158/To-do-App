(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),s=n(7),i=n.n(s),d=(n(14),n(8)),r=n(2),l=n(3),h=n(5),u=n(4),j=n.p+"static/media/check-circle-regular.f1ff1dd8.svg",b=function(t){var e=t.todos,n=t.deleteTodo,a=e.length?e.map((function(t){return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("span",{className:"list-item",children:t.content}),Object(c.jsx)("img",{src:j,onClick:function(){n(t.id)},alt:"Check packed item",className:"check-icon"})]},t.id)})):Object(c.jsx)("div",{className:"collection-item complete",children:Object(c.jsx)("span",{id:"complete",className:"list-item",children:"You have nothing left to pack, yay!"})});return Object(c.jsx)("div",{className:"todos collection",children:a})},m=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={content:""},t.handleChange=function(e){t.setState({content:e.target.value.trim()})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),t.setState({content:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{className:"Label white-text",children:"What do you need to pack? :"}),Object(c.jsx)("input",{className:"white-text",type:"text",onChange:this.handleChange,value:this.state.content,required:!0}),Object(c.jsx)("button",{className:"btn waves-effect waves-light z-depth-5",type:"submit",children:"Submit"})]})})}}]),n}(a.Component),p=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:1,content:"Pack toothbrush"},{id:2,content:"Pack hair gel"},{id:3,content:"Pack dress shirts"}]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(d.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"todo-app container",children:[Object(c.jsx)("h1",{className:"Header center white-text",children:"Travel Bag"}),Object(c.jsx)("h6",{className:"Instructions center white-text",children:"Add items you need to pack and check them off as you go!"}),Object(c.jsx)(b,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(c.jsx)(m,{addTodo:this.addTodo})]})}}]),n}(a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.d560c523.chunk.js.map