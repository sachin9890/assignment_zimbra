(this.webpackJsonpassignment_zimbra=this.webpackJsonpassignment_zimbra||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),o=a.n(r),l=(a(32),a(33),a(51)),m=a(52),s=a(53),u=a(54),i=(a(34),a(19)),d=a(20),g=a(25),E=a(21),h=a(26),y=a(43),p=a(44),f=a(45),v=a(46),b=a(55),C=a(47),j=a(48),N=a(49),w=a(50),I=a(10),O=a(14),k={Accept:"application/json","Content-Type":"application/json;charet=UTF-8"},x=function(e,t,a){var n=a?Object(O.a)({},k,{method:t,body:JSON.strigify(a)}):Object(O.a)({},k,{method:t});return fetch("".concat("https://whispering-fjord-31677.herokuapp.com").concat(e),n)},S=(a(35),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={products:[],category:[],selectedCategoryId:"",selectedCategoryName:""},a.onCategoryChange=function(e){var t=e.target,n=t.value,c=t.selectedIndex;a.setState({selectedCategoryId:n,selectedCategoryName:a.state.category[c].name,products:[]}),a.getProducts(n)},a.getProducts=function(e){x("/products?categoryId=".concat(e),"GET").then((function(e){return e.json()})).then((function(e){a.setState({products:e})}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;x("/categories","GET").then((function(e){return e.json()})).then((function(t){var a=e.state;if(a.category=t,t.length>0){var n=t[0],c=n.id,r=n.name;a.selectedCategoryId=c,a.selectedCategoryName=r}e.setState(a,(function(){e.getProducts(a.selectedCategoryId)}))}))}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.category,r=e.selectedCategoryId,o=e.selectedCategoryName;return c.a.createElement(n.Fragment,null,c.a.createElement(y.a,null,c.a.createElement(p.a,{sm:"6",className:"mx-auto"},c.a.createElement(f.a,{row:!0},c.a.createElement(v.a,{for:"category",sm:2,className:"text-right"},"Category"),c.a.createElement(p.a,{sm:4},c.a.createElement(b.a,{type:"select",name:"category",id:"category",onChange:this.onCategoryChange,value:r},a.map((function(e,t){return c.a.createElement("option",{key:t,value:e.id},e.name)}))))))),c.a.createElement("hr",null),c.a.createElement(y.a,{className:"ml-3 mr-3 mt-3"},t.map((function(e,t){return c.a.createElement(p.a,{sm:"3",className:"mb-4",key:t},c.a.createElement(I.b,{to:"/product/".concat(e.categoryId,"/").concat(o,"/").concat(e.name)},c.a.createElement(C.a,{className:"p-3 minHeight"},c.a.createElement(j.a,{src:e.imageUrl,alt:"Card image cap"}),c.a.createElement(N.a,null,c.a.createElement(w.a,null,e.name)))))}))))}}]),t}(n.Component)),T=a(24),P=a(9),G=(a(41),function(){var e=Object(P.f)(),t=e.categoryId,a=e.category,r=e.name,o=Object(n.useState)([]),l=Object(T.a)(o,2),m=l[0],s=l[1];return Object(n.useEffect)((function(){x("/productDetails?categoryId=".concat(t,"&name=").concat(r),"GET").then((function(e){return e.json()})).then((function(e){s(e[0])}))}),[t,a,r]),c.a.createElement(y.a,null,c.a.createElement(p.a,{sm:"6",className:"mx-auto"},c.a.createElement(C.a,{className:"customCard"},c.a.createElement(y.a,null,c.a.createElement(p.a,{sm:"4"},c.a.createElement("img",{width:"100%",src:m.imageUrl,alt:m.name})),c.a.createElement(p.a,{sm:"8"},c.a.createElement("div",null,c.a.createElement("h2",null,a)),c.a.createElement("div",null,c.a.createElement("h3",null,m.name)),c.a.createElement("div",null,m.description))))))});var J=function(){return c.a.createElement(I.a,null,c.a.createElement("div",null,c.a.createElement(l.a,{color:"secondary",light:!0,expand:"md"},c.a.createElement(m.a,{href:"/"},"Zimbra"),c.a.createElement(s.a,{className:"mr-auto",navbar:!0},c.a.createElement(u.a,null,c.a.createElement(I.c,{to:"/",className:"nav-link"},"Products")))),c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/"},c.a.createElement(S,null)),c.a.createElement(P.a,{path:"/product/:categoryId/:category/:name"},c.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.aea1f887.chunk.js.map