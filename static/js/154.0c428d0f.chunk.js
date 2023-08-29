"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[154],{5154:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(2938),a=t(168),c=t(6088).Z.div(r||(r=(0,a.Z)(["\n  width: ",";\n  height: ",";\n  & img {\n    width: ",";\n    height: ",";\n  }\n"])),(function(n){return n.style.width}),(function(n){return n.style.height}),(function(n){return n.style.width}),(function(n){return n.style.height})),o=t(184);var u=function(n){var e=n.path,t=n.name,r=n.style;return(0,o.jsx)(c,{style:r,children:(0,o.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w300/".concat(e):i,alt:t})})}},4154:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,a,c,o,u=t(9439),s=t(2791),d=t(7689),h=t(609),p=t(168),l=t(6088),f=t(1087),v=l.Z.div(r||(r=(0,p.Z)(["\n  width: 100%;\n  margin-top: 40px;\n  display: flex;\n  gap: 30px;\n  padding-bottom: 50px;\n  color: ",";\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.text})),x=(0,l.Z)(f.OL)(i||(i=(0,p.Z)(["\n  margin-top: 20px;\n  font-size: 20px;\n  display: inline-flex;\n  gap: 10px;\n  align-content: center;\n  color: ",";\n  &:hover,\n  :focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.hover})),m=l.Z.div(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 30px;\n  &.active {\n    background-color: ",";\n    border-radius: 15px;\n    color: white;\n  }\n"])),(function(n){return n.theme.accent})),g=(0,l.Z)(f.OL)(c||(c=(0,p.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: ",";\n  &:active,\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: ",";\n    border-radius: 5px;\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.accent})),Z=l.Z.div(o||(o=(0,p.Z)(["\n  max-width: 100%;\n  & .homepage {\n    color: ",";\n  }\n  & .homepage:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.theme.hover})),j=t(7394),w=t(5154),b=t(184),y=function(n){var e=n.theme,t=n.movieDetails,r=t.title,i=t.id,a=t.release_date,c=t.poster_path,o=t.production_countries,u=t.vote_average,s=t.overview,d=t.original_language,h=t.budget,p=t.homepage,l=null===o||void 0===o?void 0:o.map((function(n){return n.name})).join(", ");return(0,b.jsxs)(v,{theme:e,children:[(0,b.jsx)(w.Z,{id:i,path:c,name:r,style:{width:"300px",height:"450px"}}),(0,b.jsxs)(Z,{theme:e,children:[(0,b.jsxs)("h2",{children:['"',r,'"']}),(0,b.jsxs)("p",{children:["Release date: ",(0,b.jsx)("b",{children:a})]}),(0,b.jsxs)("p",{children:["Productions countries: ",(0,b.jsx)("b",{children:l})]}),(0,b.jsxs)("p",{children:["Rating: ",(0,b.jsx)("b",{children:u})]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("b",{children:"Overview:"})," ",s]}),(0,b.jsxs)("p",{children:["Original language: ",(0,b.jsx)("b",{children:d})]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("b",{children:"Budget:"})," ",h,"$"]}),(0,b.jsxs)("p",{children:["Home page:"," ",(0,b.jsx)("a",{href:p,target:"_blank",rel:"noreferrer noopenner",className:"homepage",children:p})]}),(0,b.jsxs)(m,{theme:e,children:[(0,b.jsx)(g,{theme:e,to:"cast",children:"Cast"}),(0,b.jsx)(g,{theme:e,to:"reviews",children:"Reviews"})]})]})]})},_=function(n){var e,t,r=n.theme,i=(0,s.useState)(null),a=(0,u.Z)(i,2),c=a[0],o=a[1],p=(0,d.UO)().movieId,l=(0,d.TH)(),f=(0,s.useRef)(null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");if((0,s.useEffect)((function(){(0,h.TP)(p).then((function(n){o(n)}))}),[p]),c)return(0,b.jsxs)("div",{children:[(0,b.jsxs)(x,{to:f.current,theme:r,children:[(0,b.jsx)(j.Z,{})," Go to previous page"]}),(0,b.jsx)(y,{theme:r,movieDetails:c}),(0,b.jsx)("div",{children:(0,b.jsx)(d.j3,{})})]})}},609:function(n,e,t){t.d(e,{TP:function(){return d},UF:function(){return u},qF:function(){return s},tx:function(){return p},zv:function(){return h}});var r=t(4165),i=t(5861),a=t(1243),c=t(8348);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"155fd1058fa7dc1bb176bb56763cf055",include_adult:!1,page:1};var o={headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmZDEwNThmYTdkYzFiYjE3NmJiNTY3NjNjZjA1NSIsInN1YiI6IjY0ODcwYjQ3ZDJiMjA5MDBjYTIwOTE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReF_4djAJ8MaS0bbNh3cwWkp4GrcY4fs260diJiCPl4")},accept:"application/json"},u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"day",n.prev=1,n.next=4,a.Z.get("/trending/movie/".concat(e,"?"),o);case 4:return t=n.sent,i=t.data,n.abrupt("return",i);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",c.Am.error("Oops, there are no movies"));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,a.Z.get("/search/movie?query=".concat(e,"&page=").concat(t),o);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e),o);case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/credits"),o);case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/reviews"),o);case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7394:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),c=(0,i.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");e.Z=c},2938:function(n,e,t){n.exports=t.p+"static/media/imgnotfound.a573b6549d35f288d82d.jpg"}}]);
//# sourceMappingURL=154.0c428d0f.chunk.js.map