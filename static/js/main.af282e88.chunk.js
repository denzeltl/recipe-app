(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),o=(a(11),a(2)),s=a.n(o),l=a(5),u=a(1),m=(a(13),function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:"recipe"},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a),c.a.createElement("img",{className:"image",src:n,alt:t}))}),p=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),p=o[0],f=o[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),b=d[0],g=d[1],E="https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("9e3163c4","&app_key=").concat("98010d2d06396a5ff6c48c3495b2b490");function v(){return(v=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}(),console.log("asd")}),[b]),c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),g(p),f("")}},c.a.createElement("input",{type:"text",className:"search-bar",value:p,onChange:function(e){f(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"search-button"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(m,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,key:e.recipe.label})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.af282e88.chunk.js.map