"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{576:function(t,e,r){r.d(e,{Df:function(){return u},TP:function(){return p},cl:function(){return i},tx:function(){return l},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),s="4f3b16f8367209c446bd09682fa8b6ff",o="https://api.themoviedb.org/3",u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r.results);case 10:return t.prev=10,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.results);case 10:return t.prev=10,t.t0=t.catch(0),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.cast);case 10:return t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie credits:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n.results);case 10:return t.prev=10,t.t0=t.catch(0),console.error("Error fetching movie reviews:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},275:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(791),u=r(689),i=r(576),p={castContainer:"Cast_castContainer__NIXqj",castTitle:"Cast_castTitle__eoJbw",castList:"Cast_castList__ARoWn",separator:"Cast_separator__gCnGf",castItem:"Cast_castItem__-Jcfe",castItemName:"Cast_castItemName__J2zmW",castItemText:"Cast_castItemText__7xYQk"},f=r(184),l=function(){var t=(0,u.UO)().movieId,e=(0,o.useState)([]),r=(0,a.Z)(e,2),c=r[0],l=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.zv)(t);case 3:r=e.sent,l(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)("div",{className:p.castContainer,children:[(0,f.jsx)("p",{className:p.separator}),(0,f.jsx)("h2",{className:p.castTitle,children:"Cast"}),c.length?(0,f.jsx)("ul",{className:p.castList,children:c.map((function(t){return(0,f.jsxs)("li",{className:p.castItem,children:[t.profile_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"".concat(t.name," profile")}):(0,f.jsx)("img",{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(t.name," profile")}),(0,f.jsxs)("div",{className:p.castItemInfo,children:[(0,f.jsx)("p",{className:p.castItemName,children:t.name}),(0,f.jsxs)("p",{className:p.castItemText,children:["Character: ",t.character]})]})]},t.id)}))}):(0,f.jsx)("p",{children:"We don't have any information about the cast yet."})]})}},861:function(t,e,r){function n(t,e,r,n,a,c,s){try{var o=t[c](s),u=o.value}catch(i){return void r(i)}o.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,c){var s=t.apply(e,r);function o(t){n(s,a,c,o,u,"next",t)}function u(t){n(s,a,c,o,u,"throw",t)}o(void 0)}))}}r.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=275.431ae0eb.chunk.js.map