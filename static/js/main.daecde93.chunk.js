(this["webpackJsonpcvd-19"]=this["webpackJsonpcvd-19"]||[]).push([[0],{219:function(e,t,a){e.exports=a(424)},424:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(27),o=a.n(c),u=a(11),l=a.n(u),s=a(16),i=a(172),m=a(173),d=a(195),p=a(194),f=a(24),v=a(76),h=a(429),b=a(431),E=function(){var e=Object(f.b)(),t=e.colorMode,a=e.toggleColorMode;return r.a.createElement(h.a,{label:"Change theme",placement:"right-end",closeOnClick:!0},r.a.createElement(b.a,{onClick:a,marginTop:6,marginLeft:6},function(e){return"light"===e?r.a.createElement(v.a,{name:"moon"}):r.a.createElement(v.a,{name:"sun"})}(t)))},y=a(427),g=function(e){var t=e.country;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{as:"b",fontSize:"xl",marginBottom:6},function(e){return e||"Global"}(t)))},x=a(179),k=a(428),j=a(10),O=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{spacing:6},t.map((function(e){return r.a.createElement(j.a,{key:e.title,p:4,borderWidth:"3px",rounded:"lg"},r.a.createElement(y.a,{as:"b"},e.title),r.a.createElement("br",null),r.a.createElement(y.a,null,e.value))}))))},w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths;if(!a)return r.a.createElement(x.a,{size:"lg"});var o=[{title:"Confirmed",value:a.value.toLocaleString()},{title:"Recovered",value:n.value.toLocaleString()},{title:"Deaths",value:c.value.toLocaleString()}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{items:o}))},C=a(82),F=a(430),S=a(59),D={backgroundColor:"#1A202C"},K={backgroundColor:"#fff"},L=function(e,t){return Object(S.a)(Object(S.a)({},e),t)},M=function(e,t){return"dark"===e?(t&&L(D,t),Object(S.a)({},D)):(t&&L(K,t),Object(S.a)({},K))},U=a(41),A=a.n(U),B=a(39);A.a.defaults.baseURL="https://covid19.mathdro.id/api",A.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||B.b.error("An unexpected error occurred."),Promise.reject(e)}));var T={get:A.a.get,post:A.a.post,put:A.a.put,delete:A.a.delete},N=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat("/countries","/").concat(t));case 2:return a=e.sent,n=a.data,r=n.confirmed,c=n.recovered,o=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:r,recovered:c,deaths:o,lastUpdate:u});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat("/countries"));case 2:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],u=c[1],i=Object(f.b)().colorMode;return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=u,e.next=4,R();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),e.t2.response&&404===e.t2.response.status&&B.b.error("Failed to fetch country list."),u([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{label:"Select country",placement:"auto",closeOnClick:!0},r.a.createElement(F.a,{variant:"filled",marginTop:8,onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"",style:M(i)},"Global"),o.length&&o.map((function(e,t){return r.a.createElement("option",{key:t,value:e,style:M(i)},e)})))))},G=function(e){return new Intl.NumberFormat("en-US",{maximumFractionDigits:1,notation:"compact",compactDisplay:"short"}).format(e)},I={padding:"5px",border:"1px solid #cccc"},J=function(e){var t=e.active,a=e.payload,n=Object(f.b)().colorMode;return t?r.a.createElement("div",{className:"custom-tooltip",style:M(n,I)},r.a.createElement("label",null,"".concat(a[0].name," : ").concat(G(a[0].value)))):null},P=a(17),W=function(e){var t=e.confirmed,a=e.recovered,n=e.deaths,c=[{name:"confirmed",value:t.value},{name:"recovered",value:a.value},{name:"deaths",value:n.value}],o=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF"];return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(P.g,{width:500,height:300},r.a.createElement(P.f,{data:c,color:"#000000",dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:100,fill:"#8884d8"},c.map((function(e,t){return r.a.createElement(P.b,{key:"cell-".concat(t),fill:o[t%o.length]})}))),r.a.createElement(P.h,{content:r.a.createElement(J,null)}),r.a.createElement(P.c,null)):null)},q={padding:"5px",border:"1px solid #cccc"},H=function(e){var t=e.active,a=e.payload,n=e.label,c=Object(f.b)().colorMode;return t?r.a.createElement("div",{className:"custom-tooltip",style:M(c,q)},r.a.createElement("label",null,"".concat(n)),r.a.createElement("br",null),r.a.createElement("label",null,"".concat(a[0].name," : ").concat(G(a[0].value))),r.a.createElement("br",null),r.a.createElement("label",null,"".concat(a[1].name," : ").concat(G(a[1].value)))):null},Q=function(e){var t=e.data;return t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(P.e,{width:500,height:300,data:t},r.a.createElement(P.d,{type:"monotone",dataKey:"confirmed",stroke:"green"}),r.a.createElement(P.d,{type:"monotone",dataKey:"deaths",stroke:"red"}),r.a.createElement(P.a,{stroke:"#ccc",strokeDasharray:"1 1"}),r.a.createElement(P.i,{dataKey:"date",nameKey:"date"}),r.a.createElement(P.j,{dataKey:"confirmed",nameKey:"confirmed",tickFormatter:G}),r.a.createElement(P.h,{content:r.a.createElement(H,null)}),r.a.createElement(P.c,null)))},V=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat("/daily"));case 2:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),m=Object(C.a)(i,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{marginTop:8},u?r.a.createElement(W,{confirmed:a,recovered:c,deaths:o}):r.a.createElement(Q,{data:d}))},Y=a(52),Z=a(432),$=a(180),_=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat("/"));case 2:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.setCountryData=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setLifetimeData=Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:a=t.sent,e.setState({data:a,country:""});case 4:case"end":return t.stop()}}),t)}))),e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,t.prev=1,!a){t.next=7;break}return t.next=5,e.setCountryData(a);case 5:t.next=9;break;case 7:return t.next=9,e.setLifetimeData();case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0.response&&404===t.t0.response.status&&B.b.error("Failed to fetch country"),e.setState({originalData:n});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null),r.a.createElement(Y.a,null,r.a.createElement(f.a,null,r.a.createElement(Z.a,null),r.a.createElement(E,null),r.a.createElement($.a,{align:"center",justifyContent:"center",marginTop:12},r.a.createElement(k.a,null,r.a.createElement(g,{country:a}),r.a.createElement(w,{data:t}),r.a.createElement(z,{handleCountryChange:this.handleCountryChange}),r.a.createElement(X,{data:t,country:a}))))))}}]),a}(n.Component);a(423);o.a.render(r.a.createElement(ee,null),document.getElementById("root"))}},[[219,1,2]]]);