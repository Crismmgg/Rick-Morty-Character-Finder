(this.webpackJsonpeval3=this.webpackJsonpeval3||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},25:function(e,a,t){e.exports=t.p+"static/media/rickymorty.6f618031.png"},31:function(e,a,t){e.exports=t(50)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),s=(t(36),t(28)),i=t(19),o=t(20),m=t(29),u=t(21),d=t(30),h=(t(37),t(6)),E=t(22),p=t.n(E);t(38);var f=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("img",{src:p.a,alt:"logo",className:"logo img-fluid"}))};t(39);var v=function(e){var a=function(a){e.handleStatus({inputStatus:a.target.value})};return r.a.createElement("div",{className:"filter__container"},r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault()}},r.a.createElement("label",{className:"filter__label",htmlFor:"buscar"},"Busca tu personaje"),r.a.createElement("input",{type:"text",placeholder:"Ej. MariCarmen",className:"filter__input",onChange:function(a){e.handleSearch({inputValue:a.target.value})},value:e.state}),r.a.createElement("label",{className:"filter__label"},"Estado de tu personaje: "),r.a.createElement("label",{htmlFor:"status",className:"radio-value mr-2 ml-2"},"Vivo"),r.a.createElement("input",{type:"radio",name:"status",value:"Alive",onChange:a,checked:"Alive"===e.checked}),r.a.createElement("label",{htmlFor:"status",className:"radio-value mr-2 ml-4"},"Muerto"),r.a.createElement("input",{type:"radio",name:"status",value:"Dead",onChange:a,checked:"Dead"===e.checked}),r.a.createElement("label",{htmlFor:"status",className:"radio-value mr-2 ml-4"},"Desconocido"),r.a.createElement("input",{type:"radio",name:"status",value:"unknown",onChange:a,checked:"unknown"===e.checked}),r.a.createElement("label",{htmlFor:"status",className:"radio-value mr-2 ml-4"},"Todos"),r.a.createElement("input",{type:"radio",name:"status",value:"",onChange:a,checked:""===e.checked})))},g=t(8);t(40);var _=function(e){var a=e.characters;return r.a.createElement(r.a.Fragment,null,a.map((function(e){var a=e.id,t=e.image,n=e.name,c=e.species,l="/char/".concat(a);return r.a.createElement("li",{key:a,className:"card p-3 m-2 col-5 col-sm-3 col-lg-2 text-center "},r.a.createElement("img",{className:"card__img card-img-top",src:t,alt:n}),r.a.createElement("h5",{className:"card__title card-title pt-4"},"Nombre: ",n),r.a.createElement("p",{className:"card__info card-text"},"Especie: ",c),r.a.createElement(g.b,{to:l},r.a.createElement("button",{className:"card__btn "},"M\xe1s info")))})))},N=(t(45),t(25)),b=t.n(N),k=t(7),y=t(10);var S=function(e){var a=e.filteredCharacters;return 0===a.length?r.a.createElement("div",{className:"notFound"},r.a.createElement("p",{className:"notFound__info"},"Oh oh...no hemos encontrado a tu personaje... ",r.a.createElement("br",null),"\xa1Int\xe9ntalo de nuevo! ",r.a.createElement(k.a,{icon:y.a}))," ",r.a.createElement("img",{className:"notFound__image img-fluid",src:b.a,alt:"Imagen Rick y Morty"})):r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"row container__list justify-content-center"},r.a.createElement(_,{characters:a})))},C=(t(49),t(26));var j=function(e){var a=e.characters,t=a.name,n=a.image,c=a.species,l=a.origin,s=a.episode,i=a.status,o="Alien"===c?r.a.createElement(k.a,{icon:C.a}):r.a.createElement(k.a,{icon:y.e});return r.a.createElement("ul",null,r.a.createElement("li",{className:"detail"},r.a.createElement("h2",{className:"detail__name"},t),r.a.createElement("div",{className:"detail__container"},r.a.createElement("img",{className:"detail__img img-fluid",src:n,alt:t}),r.a.createElement("div",{className:"detail__info"},r.a.createElement("p",{className:"detail__specie"},"Especie: ",c," ",o),r.a.createElement("p",{className:"detail__planet"},"Planeta de origen: ",l.name),r.a.createElement("p",{className:"detail__episodes"},"N\xba Episodios: ",s.length),r.a.createElement("p",{className:"detail__status"},"Estado: ",i," ","Alive"===i?r.a.createElement(k.a,{icon:y.d}):"Dead"===i?r.a.createElement(k.a,{icon:y.c}):r.a.createElement(k.a,{icon:y.b})))),r.a.createElement(g.b,{to:"/"},r.a.createElement("button",{className:"detail__btn "},"Volver"))))},F=t(27),w=t.n(F),x=function(e){var a=e.color;return r.a.createElement(w.a,{type:"spinningBubbles",color:a,height:1e3,width:100,className:"loader"})},D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleSearch=function(e){t.setState(e)},t.handleStatus=function(e){t.setState(e)},t.renderCharDetails=function(e){var a=parseInt(e.match.params.id),n=t.state.characters.find((function(e){return e.id===a}));return void 0===n?r.a.createElement("p",null,"El personaje no existe"):r.a.createElement(j,{characters:n})},t.state={characters:[],inputValue:"",inputStatus:"",checked:"",loading:!0},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json().then((function(e){return e.results}))})).then((function(a){void 0===a?e.setState({loading:!0}):e.setState({characters:a,loading:!1})}))}},{key:"filteredCharacters",value:function(){var e=Object(s.a)(this.state.characters),a=this.state.inputStatus,t=this.state.inputValue;return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).filter((function(e){return""===a||e.status===a}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},this.state.loading?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleSearch:this.handleSearch}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(v,{handleSearch:this.handleSearch,handleStatus:this.handleStatus,state:this.state.inputValue,checked:this.state.inputStatus}),r.a.createElement(S,{filteredCharacters:this.filteredCharacters()})),r.a.createElement(h.a,{path:"/char/:id",render:this.renderCharDetails}))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(g.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.abc4df0f.chunk.js.map