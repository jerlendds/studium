(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={override:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;r.push([2,"chunk-vendors"]),a()})({"0d53":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"flex w-full h-full sans",attrs:{id:"app"}},[a("sidebar",{attrs:{showSidebar:!0,activeTab:"Overview"}}),a("div",{staticClass:"flex flex-col w-5/6 items-center h-full w-full font-body"},[a("header",{staticClass:"w-full flex justify-center items-center"},[a("search-bar",{staticClass:"p-3",attrs:{placeholderValue:"Search notes...",searchInput:"",showSearch:!0}})],1),a("stats",{attrs:{notesAddedToday:0,notesAddedMonth:0,notesReviewedToday:0}})],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.showSidebar?a("aside",{staticClass:"flex flex-col w-1/6 p-2 bg-white-50 h-screen"},[a("header",{staticClass:"flex items-center justify-between pt-1 px-2"},[e._m(0),a("button",{staticClass:"no-focus rotate-cog"},[a("settings-icon")],1)]),a("menu",{staticClass:"flex flex-col justify-between  list-none p-0 font-sans text-lg"},e._l(e.sidebarTabs,(function(t){return a("li",{key:t.name,staticClass:"my-1 flex bg-white-300 bg-opacity-0 rounded shadow-none",class:{"bg-opacity-100 shadow-sm":t.name==e.activeSidebarTab}},[a("button",{staticClass:"flex py-2 px-6 items-center justify-start w-full no-focus",on:{click:function(a){e.activeSidebarTab=t.name,t.active=!0}}},[t.name==e.activeSidebarTab?a(t.component,{tag:"component",staticClass:"fill-current text-curious-blue-600"}):e._e(),t.name!=e.activeSidebarTab?a(t.activeComponent,{tag:"component",staticClass:"fill-current text-lightgray-700",class:{"text-curious-blue-600":t.name==e.activeSidebarTab}}):e._e(),a("p",{staticClass:"pl-6 text-gray-700",class:{"text-curious-blue-600":t.name==e.activeSidebarTab}},[e._v(e._s(t.name))])],1)])})),0)]):e._e()},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"font-serif text-2xl font-semibold flex items-center"},[e._v("Studium"),a("sup",{staticClass:"text-sm font-body"},[e._v("FREE")])])}],i=a("0a59"),l=a("bdff"),u=a("b8da"),d=a("7a20"),p=a("3d10"),f=a("bbca"),h=a("2453"),m=a("077e"),b=a("d01d"),v=a("0dda"),y=a("ca39"),x={name:"Sidebar",props:["showSidebar","activeTab"],components:{settingsIcon:i["a"]},data(){return{activeSidebarTab:"Overview",sidebarTabs:[{name:"Overview",component:v["a"],activeComponent:y["a"]},{name:"All Notes",component:u["a"],activeComponent:l["a"]},{name:"Favourites",component:p["a"],activeComponent:d["a"]},{name:"Flashcards",component:f["a"],activeComponent:h["a"]},{name:"Calendar",component:m["a"],activeComponent:b["a"]}]}},mounted(){},methods:{},computed:{getActiveTab:function(){return this.activeSidebarTab=activeTab,this.activeSidebarTab}}},g=x,w=(a("7520"),a("2877")),C=Object(w["a"])(g,o,c,!1,null,"4f17b0c8",null),S=C.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"flex w-11/12 items-center justify-center "},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"bg-lightgray-50 placeholder-lightgray-300 flex-grow font-sans min-w-max p-2 rounded-l",attrs:{type:"text",placeholder:e.searchPlaceholder},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),a("button",{staticClass:"flex"},[a("search-icon",{staticClass:"bg-lightgray-50 p-2 rounded-r"})],1)])},T=[],j=a("bbc4"),O={name:"SearchBar",props:["searchInput","placeholderValue"],components:{searchIcon:j["a"]},data(){return{searchQuery:"",searchPlaceholder:"Search..."}},mounted(){this.getPlaceholder(),this.getSearch()},methods:{getSearch:function(){return this.searchQuery=String(this.searchInput),this.searchQuery},getPlaceholder:function(){return this.searchPlaceholder=this.placeholderValue,this.searchPlaceholder}},computed:{}},P=O,A=Object(w["a"])(P,_,T,!1,null,"4455d995",null),I=A.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"flex items-center justify-center w-full px-6 py-3"},[a("ul",{staticClass:"flex w-9/12 justify-between px-4"},e._l(e.noteStats,(function(t){return a("li",{key:t.description,staticClass:"flex flex-col px-6 py-5"},[a("div",{staticClass:"flex-col items-center flex"},[a("div",{staticClass:"flex shadow-64 items-end font-darkgray-400"},[a("h1",{staticClass:"text-6xl body"},[e._v(e._s(t.value))]),e._e()],1),a("p",{staticClass:"text-lightgray-600 sans text-lg font-medium"},[e._v(e._s(t.description))])])])})),0)])},M=[],Q=a("6cd4"),E=a("ef31"),N=a("ad9b"),R={name:"QuickStats",props:["notesAddedToday","notesAddedMonth","notesReviewedToday"],components:{},data(){return{icons:{upIcon:Q["a"],downIcon:E["a"],neutralIcon:N["a"]},noteStats:[{value:0,description:"Notes Created Today"},{value:0,description:"Notes Created This Month"},{value:0,description:"Notes Reviewed Today"},{value:0,description:"Total Notes"}]}},mounted(){this.getProps()},methods:{getProps(){this.noteStats[0].value=this.notesAddedToday,this.noteStats[1].value=this.notesAddedMonth,this.noteStats[2].value=this.notesReviewedToday}},computed:{}},$=R,F=(a("ed31"),Object(w["a"])($,k,M,!1,null,"27e38747",null)),V=F.exports,B={name:"App",components:{searchIcon:j["a"],sidebar:S,searchBar:I,stats:V},data(){return{}},mounted(){},methods:{},computed:{}},J=B,q=(a("46ad"),Object(w["a"])(J,s,r,!1,null,null,null)),z=q.exports;new n["a"]({el:"#app",render:e=>e(z)})},2:function(e,t,a){e.exports=a("0d53")},2118:function(e,t,a){},"46ad":function(e,t,a){"use strict";a("d772")},7520:function(e,t,a){"use strict";a("ab9e")},ab9e:function(e,t,a){},d772:function(e,t,a){},ed31:function(e,t,a){"use strict";a("2118")}});
//# sourceMappingURL=override.baba44c9.js.map