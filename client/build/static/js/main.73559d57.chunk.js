(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,n){e.exports=n(44)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=(n(21),n(3)),i=n.n(u),l=n(14),s=n(2),m=n(15),p=n.n(m);n(40);function f(e){var t=r.a.createRef(),n=e.search;return r.a.createElement("form",{className:"search",onSubmit:function(e){e.preventDefault(),n(t.current.value)}},r.a.createElement("input",{type:"text",id:"search",ref:t}),r.a.createElement("input",{type:"submit",value:"Search"}))}n(41);function h(e){var t=e.search;return r.a.createElement("header",null,r.a.createElement("h1",null,"Repo Searcher"),r.a.createElement(f,{search:t}))}function v(e){var t=e.repo;return r.a.createElement("div",{className:"repo-card"},r.a.createElement("p",null,t.name),r.a.createElement("p",null))}n(42);function d(e){var t=Object(a.useState)(e.repos),n=Object(s.a)(t,2),c=n[0];n[1];return r.a.createElement("div",{className:"repo-board"},c?c.map((function(e){return r.a.createElement(v,{repo:e,key:e.id})})):"")}n(43);var E=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/".concat(t));case 2:n=e.sent,c(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=n?r.a.createElement(d,{repos:n}):"";return r.a.createElement("div",null,r.a.createElement(h,{search:o}),u)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.73559d57.chunk.js.map