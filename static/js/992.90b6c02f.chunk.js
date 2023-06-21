"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[992],{576:function(e,r,t){t.d(r,{Df:function(){return o},TP:function(){return l},cl:function(){return u},tx:function(){return p},zv:function(){return v}});var n=t(861),a=t(757),s=t.n(a),c="4f3b16f8367209c446bd09682fa8b6ff",i="https://api.themoviedb.org/3",o=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/trending/movie/day?api_key=").concat(c));case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/search/movie?api_key=").concat(c,"&query=").concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/movie/").concat(r,"?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/movie/").concat(r,"/credits?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,"/movie/").concat(r,"/reviews?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},992:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(689),u=t(87),l=t(576),v="MovieDetails_movieContainer__78Fk4",p="MovieDetails_movieImg__dR5Cx",h="MovieDetails_movieData__SlHCg",f="MovieDetails_movieTitle__qwoTW",d="MovieDetails_movieInfo__XAfDM",m="MovieDetails_movieItem__Xm+lY",x="MovieDetails_movieOverview__YX5h3",_="MovieDetails_boldText__Vv88w",j="MovieDetails_movieExtraDetails__f035Q",w="MovieDetails_movieExtraItem__AFy0n",k="MovieDetails_movieExtraLink__Qkzl-",g="MovieDetails_additionalTitle__aFc09",N=t(184),b=function(){var e=(0,o.UO)().movieId,r=(0,i.useState)(null),t=(0,a.Z)(r,2),s=t[0],b=t[1],y=(0,i.useState)([]),D=(0,a.Z)(y,2),M=D[0],E=D[1];if((0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,l.TP)(e);case 2:return t=r.sent,r.next=5,(0,l.tx)(e);case 5:n=r.sent,b(t),E(n.results);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[e]),!s)return(0,N.jsx)("div",{children:"Loading..."});var Z=s.vote_average?"".concat((10*s.vote_average).toFixed(0),"%"):"Not rated yet";return(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title,className:p}),(0,N.jsxs)("div",{className:h,children:[(0,N.jsxs)("ul",{className:d,children:[(0,N.jsx)("h2",{className:f,children:s.title}),(0,N.jsx)("li",{className:m,children:(0,N.jsxs)("p",{children:[(0,N.jsx)("span",{className:_,children:"Rating:"})," ",Z]})}),(0,N.jsx)("li",{className:x,children:(0,N.jsx)("p",{children:s.overview})}),(0,N.jsx)("li",{className:m,children:(0,N.jsxs)("p",{children:[(0,N.jsx)("span",{className:_,children:"Genres:"})," ",s.genres.map((function(e){return e.name})).join(", ")]})}),(0,N.jsx)("li",{className:m,children:(0,N.jsxs)("p",{children:[(0,N.jsx)("span",{className:_,children:"Release Date:"})," ",s.release_date]})})]}),(0,N.jsx)("h3",{className:g,children:"Additional information"}),(0,N.jsxs)("ul",{className:j,children:[(0,N.jsx)("li",{className:w,children:(0,N.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),className:k,children:"Cast"})}),(0,N.jsx)("li",{className:w,children:(0,N.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),className:k,children:"Reviews"})})]})]}),(0,N.jsx)(o.j3,{}),M&&M.length>0&&(0,N.jsxs)("div",{children:[(0,N.jsx)("h3",{children:"Reviews"}),(0,N.jsx)("ul",{children:M.map((function(e){return(0,N.jsxs)("li",{children:[(0,N.jsxs)("p",{children:["Author: ",e.author]}),(0,N.jsxs)("p",{children:["Content: ",e.content]})]},e.id)}))})]})]})}},861:function(e,r,t){function n(e,r,t,n,a,s,c){try{var i=e[s](c),o=i.value}catch(u){return void t(u)}i.done?r(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,s){var c=e.apply(r,t);function i(e){n(c,a,s,i,o,"next",e)}function o(e){n(c,a,s,i,o,"throw",e)}i(void 0)}))}}t.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=992.90b6c02f.chunk.js.map