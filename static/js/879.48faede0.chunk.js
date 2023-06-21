"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[879],{576:function(e,r,t){t.d(r,{Df:function(){return u},TP:function(){return h},cl:function(){return i},tx:function(){return p},zv:function(){return l}});var n=t(861),c=t(757),s=t.n(c),a="4f3b16f8367209c446bd09682fa8b6ff",o="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/trending/movie/day?api_key=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(r,"?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(r,"/credits?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(r,"/reviews?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:return e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},879:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var n=t(861),c=t(439),s=t(757),a=t.n(s),o=t(791),u=t(689),i=t(576),h="Movies_moviesContainer__D1+tn",l="Movies_moviesTitle__DtwfS",p="Movies_moviesInput__6dswK",v="Movies_searchForm__S-9T7",f="Movies_searchBtn__pm9qY",w="Movies_searchImg__fGKAE",m="Movies_moviesList__Un-WS",A="Movies_moviesItem__BPaMl",g="Movies_moviesImg__oCXNc",d="Movies_moviesLink__rgFnl",x=t(686),F=t.n(x),b=t(184),I=function(){var e=(0,o.useState)(""),r=(0,c.Z)(e,2),t=r[0],s=r[1],x=(0,o.useState)([]),I=(0,c.Z)(x,2),B=I[0],C=I[1],j=(0,u.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.cl)(t);case 2:r=e.sent,C(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var D=function(){var e=(0,n.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t){e.next=5;break}F().Notify.failure("Please enter something"),e.next=9;break;case 5:return e.next=7,(0,i.cl)(t);case 7:0===(n=e.sent).length?F().Notify.failure("Sorry, nothing was found!"):(C(n),j("/movies?keyword=".concat(t)));case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("h1",{className:l,children:"Search Movies"}),(0,b.jsxs)("form",{className:v,onSubmit:D,children:[(0,b.jsx)("input",{className:p,type:"text",value:t,onChange:function(e){return s(e.target.value)}}),(0,b.jsx)("button",{className:f,type:"submit",children:(0,b.jsx)("img",{src:"data:image/png;base64,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",alt:"Search Button",className:w})})]}),(0,b.jsx)("ul",{className:m,children:B.map((function(e){return(0,b.jsx)("li",{className:A,children:(0,b.jsxs)("a",{href:"/movies/".concat(e.id),className:d,children:[(r=e.title,r.length>40?r.slice(0,40)+"...":r),e.poster_path&&(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,className:g})]})},e.id);var r}))})]})}}}]);
//# sourceMappingURL=879.48faede0.chunk.js.map