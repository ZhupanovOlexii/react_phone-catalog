(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=a(3),m=(a(22),a(1)),s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"Home",className:"header__logo"},c.a.createElement("img",{src:"../img/icons/Logo.svg",alt:"logo"})))},i=(a(28),function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("nav",{className:"footer__nav"},c.a.createElement(s,null),c.a.createElement("ul",{className:"footer__list"},["GITHUB","CONTACTS","RIGHTS"].map((function(e){return c.a.createElement("li",null,c.a.createElement(o.c,{to:"".concat(e),key:e,exact:!0,className:"footer__item",activeClassName:"footer__item__active"},e))}))),c.a.createElement("div",{className:"footer__container"},c.a.createElement("p",{className:"footer__backToTop"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__button",onClick:e},c.a.createElement("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.528575 5.47124C0.268226 5.21089 0.268226 4.78878 0.528575 4.52843L4.52858 0.528433C4.78892 0.268083 5.21103 0.268083 5.47138 0.528433L9.47138 4.52843C9.73173 4.78878 9.73173 5.21089 9.47138 5.47124C9.21103 5.73159 8.78893 5.73159 8.52858 5.47124L4.99998 1.94265L1.47138 5.47124C1.21103 5.73159 0.788925 5.73159 0.528575 5.47124Z",fill:"#313237"}))))))}),u=(a(29),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement(s,null),["home","phones","tablets","accessories"].map((function(e){return c.a.createElement("li",null,c.a.createElement(o.c,{to:"".concat(e),key:e,exact:!0,className:"nav__item",activeClassName:"nav__item--active"},e))}))))}),_=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"Favorites",className:"header__icons--item"},c.a.createElement("img",{src:"../img/icons/favorites.svg",alt:"favorites",className:"header__icons--img"})))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"Cart",className:"header__icons--item"},c.a.createElement("img",{src:"../img/icons/cart.svg",alt:"cart",className:"header__icons--img"})))},p=(a(30),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__nav"},c.a.createElement(u,null)),c.a.createElement("div",{className:"header__icons"},c.a.createElement(_,null),c.a.createElement(E,null)))}),d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"HomePage"))},N=a(9),f=function(e){var t=e.product,a=t.name,n=t.imageUrl,l=t.price,r=t.discount,o=t.screen,m=t.capacity,s=t.ram,i=l-l*(r/100);return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"./".concat(n),alt:a,className:"ProductCard__img"}),c.a.createElement("h3",{className:"ProductCard__name"},a),c.a.createElement("div",{className:"ProductCard__price"},c.a.createElement("span",{className:"ProductCard__price--withDiscount"}," ","$",i),c.a.createElement("span",{className:"ProductCard__price--withoutDiscount"}," ","$",l)),c.a.createElement("ul",{className:"ProductCard__description"},c.a.createElement("li",{className:"ProductCard__element"},c.a.createElement("p",null,"Screen:"),c.a.createElement("p",{className:"ProductCard__title"},o)),c.a.createElement("li",{className:"ProductCard__element"},c.a.createElement("p",null,"Capacity:"),c.a.createElement("p",{className:"ProductCard__title"},m)),c.a.createElement("li",{className:"ProductCard__element"},c.a.createElement("p",null,"RAM:"),c.a.createElement("p",{className:"ProductCard__title"},s))),c.a.createElement("div",{className:"ProductCard__button"},c.a.createElement("button",{type:"button",className:"ProductCard__button--cart"},"Add to cart"),c.a.createElement("button",{type:"button",className:"ProductCard__button--favorites"},c.a.createElement("img",{src:"../img/icons/Favorites.svg",alt:"favorites",className:"ProductCard__icons--img"}))))},v=(a(31),function(e){var t=e.products;return c.a.createElement("div",{className:"ProductCard"},c.a.createElement("ul",{className:"ProductCard__list"},t.map((function(e){return c.a.createElement("li",{className:"ProductCard__item",key:e.id},c.a.createElement(f,{product:e}))}))))}),g="https://mate-academy.github.io/react_phone-catalog/api/products",h=function(){return fetch("".concat(g,".json")).then((function(e){return e.json()}))},b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Sort__container"},c.a.createElement("div",{className:"Sort__item"},c.a.createElement("p",{className:"Sort__title"},"Sort by"),c.a.createElement("select",{className:"Sort__select"},c.a.createElement("option",{value:"age",className:"Sort__option"},"Newest"),c.a.createElement("option",{value:"name",className:"Sort__option"},"Alphabetically"),c.a.createElement("option",{value:"price",className:"Sort__option"},"Cheapest"))),c.a.createElement("div",{className:"Sort__item"},c.a.createElement("p",{className:"Sort__title"},"Items on page"),c.a.createElement("select",{className:"Sort__select"},c.a.createElement("option",{value:"All",className:"Sort__option"},"All"),c.a.createElement("option",{value:"4",className:"Sort__option"},"4"),c.a.createElement("option",{value:"8",className:"Sort__option"},"8"),c.a.createElement("option",{value:"16",className:"Sort__option"},"16")))))},C=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){h().then((function(e){return l(e.filter((function(e){return"phone"===e.type})))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"PhonesPage__title"},c.a.createElement("p",{className:"PhonesPage__name"},"Mobile Phones"),c.a.createElement("span",{className:"PhonesPage__quantity"},a.length," ","models")),c.a.createElement(b,null),c.a.createElement(v,{products:a}))},P=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){h().then((function(e){return l(e.filter((function(e){return"tablet"===e.type})))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"TabletsPage__title"},c.a.createElement("p",{className:"TabletsPage__name"},"Tabetsl"),c.a.createElement("span",{className:"TabletsPage__quantity"},a.length," ","models")),c.a.createElement(b,null),c.a.createElement(v,{products:a}))},S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"AccessoriesPage"))},y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"errorPage"))},w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:d}),c.a.createElement(m.a,{path:"/phones",exact:!0,component:C}),c.a.createElement(m.a,{path:"/tablets",component:P}),c.a.createElement(m.a,{path:"/accessories",component:S}),c.a.createElement(m.a,{path:"/",component:y})),c.a.createElement(i,null))};r.a.render(c.a.createElement(o.a,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d47df70d.chunk.js.map