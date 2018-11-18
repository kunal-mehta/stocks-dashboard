(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){e.exports=a(382)},187:function(e,t,a){},195:function(e,t,a){},257:function(e,t,a){},352:function(e,t){},355:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(56),i=a.n(r),c=(a(187),a(32)),s=a(29),l=a(30),u=a(33),h=a(31),p=a(34),d=a(85),m=a(92),f=a(384),v=a(385),b=a(386),g=(a(195),a(164)),E=a(86),D=a(90),O=(a(257),a(14)),k=a(41),w=a(118),j=a(69),y=a(114),A=a(93),H=a(170),F=a(171),C=a(172),T=a(2),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.type,n=e.width,r=e.ratio,i=H.discontinuousTimeScaleProvider.inputDateAccessor(function(e){return e.date})(t),c=i.data,s=i.xScale,l=i.xAccessor,u=i.displayXAccessor,h=[l(Object(T.last)(c)),l(c[c.length-20])];return o.a.createElement(w.b,{ratio:r,width:n,height:400,margin:{left:70,right:70,top:20,bottom:30},type:a,pointsPerPxThreshold:1,seriesName:"MSFT",data:c,xAccessor:l,displayXAccessor:u,xScale:s,xExtents:h},o.a.createElement(w.a,{id:1,yExtents:function(e){return[e.high,e.low,e.open,e.close]}},o.a.createElement(y.XAxis,{axisAt:"bottom",orient:"bottom"}),o.a.createElement(y.YAxis,{axisAt:"right",orient:"right",ticks:5}),o.a.createElement(A.MouseCoordinateX,{at:"bottom",orient:"bottom",displayFormat:Object(k.timeFormat)("%Y-%m-%d")}),o.a.createElement(A.MouseCoordinateY,{at:"right",orient:"right",displayFormat:Object(O.format)(".2f")}),o.a.createElement(j.LineSeries,{yAccessor:function(e){return e.open},stroke:"#cc0000"}),o.a.createElement(j.LineSeries,{yAccessor:function(e){return e.close},stroke:"#ff7f0e"}),o.a.createElement(j.LineSeries,{yAccessor:function(e){return e.high},stroke:"#2ca02c"}),o.a.createElement(j.LineSeries,{yAccessor:function(e){return e.low},strokeDasharray:"LongDash"}),o.a.createElement(F.OHLCTooltip,{forChart:1,origin:[-40,0]})),o.a.createElement(A.CrossHairCursor,null))}}]),t}(o.a.Component);L.defaultProps={type:"svg"};var S=L=Object(C.fitWidth)(L),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchHistoricalData()}},{key:"render",value:function(){var e=null,t=[];if(this.props.isHistoricalDataFetched&&this.props.historicalData.length){for(var a=this.props.historicalData.length-1;a>=0;a--){var n=this.props.historicalData[a].split(","),r={date:new Date(parseInt(n[0])),high:parseFloat(n[2]),low:parseFloat(n[3]),open:parseFloat(n[1]),close:parseFloat(n[4])};t.push(r)}e=o.a.createElement(S,{data:t})}else e=o.a.createElement("div",{className:"Loader"}," ",o.a.createElement(D.MoonLoader,null)," Loading Historical Analysis");return o.a.createElement("div",{className:"Home"},e)}}]),t}(n.Component),I=a(173),_=a.n(I),N=function(e){return{type:"LOAD_DATA",data:e}},W=Object(c.b)(function(e){var t=e.Home;return{historicalData:t.historicalData,isFetchingHistoricalData:t.isFetchingHistoricalData,isHistoricalDataFetched:t.isHistoricalDataFetched}},function(e){return{fetchHistoricalData:function(){return e({type:"FETCH_HISTORICAL_DATA",payload:_.a.get("http://kaboom.rksv.net/api/historical")})}}},null,{pure:!1})(x),R=a(91),M=a.n(R),P=a(179),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).socket=null,a.current=null,a.liveData=[],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.socket=M.a.connect("http://kaboom.rksv.net/watch"),this.socket.emit("sub",{state:!0}),this.props.loadData(this.socket)}},{key:"componentWillUnmount",value:function(){this.socket.emit("unsub",{state:!1})}},{key:"render",value:function(){if(this.props.data!==this.current){this.current=this.props.data;var e=this.props.data.split(",");this.liveData.push({date:new Date(parseInt(e[0])).toString(),high:parseFloat(e[2]),low:parseFloat(e[3]),open:parseFloat(e[1]),close:parseFloat(e[4])})}return o.a.createElement("div",{className:"Home"},o.a.createElement(P.a,{columns:[{Header:"Date",accessor:"date"},{Header:"Low",accessor:"low"},{Header:"High",accessor:"high"},{Header:"Open",accessor:"open"},{Header:"Close",accessor:"close"}],data:this.liveData}))}}]),t}(n.Component),X=Object(c.b)(function(e){return{data:e.Table.liveData}},function(e){return{loadData:function(t){t.on("data",function(t,a){setTimeout(function(){a(1),e(N(t))},100)}),t.on("error",function(e){return console.log(e)})}}},null,{pure:!1})(U),B=null,J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).socket=null,a.current=null,a.liveData=[],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.socket=M.a.connect("http://kaboom.rksv.net/watch"),this.socket.emit("sub",{state:!0}),this.props.loadData(this.socket)}},{key:"componentWillUnmount",value:function(){this.socket.emit("unsub",{state:!1})}},{key:"render",value:function(){if(this.props.data!==this.current){this.current=this.props.data;var e=this.props.data.split(","),t={date:new Date(parseInt(e[0])),high:parseFloat(e[2]),low:parseFloat(e[3]),open:parseFloat(e[1]),close:parseFloat(e[4])};this.liveData.push(t),B=this.liveData.length>30?o.a.createElement(S,{data:this.liveData}):o.a.createElement("div",{className:"Loader"}," ",o.a.createElement(D.MoonLoader,null)," Loading ...")}return o.a.createElement("div",{className:"Home"},B)}}]),t}(n.Component),Y=Object(c.b)(function(e){return{data:e.Table.liveData}},function(e){return{loadData:function(t){t.on("data",function(t,a){setTimeout(function(){a(1),e(N(t))},1e3)}),t.on("error",function(e){return console.log(e)})}}},null,{pure:!1})(J),G=(a(355),function(){return o.a.createElement("div",{className:"WrongPage"},o.a.createElement("h3",null,"Sorry, page not found!"))}),$=function(){return o.a.createElement(g.a,null,o.a.createElement(E.a,{path:"/home",exact:!0,component:W}),o.a.createElement(E.a,{path:"/table",exact:!0,component:X}),o.a.createElement(E.a,{path:"/chart",exact:!0,component:Y}),o.a.createElement(E.a,{component:G}))},q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement(f.a,{fluid:!0,collapseOnSelect:!0},o.a.createElement(f.a.Header,null,o.a.createElement(f.a.Brand,null,o.a.createElement(d.a,{to:"/"},"Stocks Dashboard")),o.a.createElement(f.a.Toggle,null)),o.a.createElement(f.a.Collapse,null,o.a.createElement(v.a,{pullRight:!0},o.a.createElement(m.LinkContainer,{to:"/home"},o.a.createElement(b.a,null,"Home")),o.a.createElement(m.LinkContainer,{to:"/table"},o.a.createElement(b.a,null,"Table")),o.a.createElement(m.LinkContainer,{to:"/chart"},o.a.createElement(b.a,null,"Chart"))))),o.a.createElement($,null))}}]),t}(n.Component),z=Object(c.b)(function(){return{}},function(e){return{}},null,{pure:!1})(q),K=a(60),Q=a(61),V={historicalData:[],isFetchingHistoricalData:!1,isHistoricalDataFetched:!1},Z={liveData:null},ee={Home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HISTORICAL_DATA_PENDING":return Object(Q.a)({},e,{isFetchingHistoricalData:!0});case"FETCH_HISTORICAL_DATA_FULFILLED":return Object(Q.a)({},e,{isHistoricalDataFetched:!0,isFetchingHistoricalData:!1,historicalData:t.payload.data});case"FETCH_HISTORICAL_DATA_REJECTED":return Object(Q.a)({},e,{isHistoricalDataFetched:!0,isFetchingHistoricalData:!1});default:return e}},Table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_DATA":return Object(Q.a)({},e,{liveData:t.data});default:return e}}},te=a(181),ae=[Object(te.a)()];var ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var re=a(112);i.a.render(o.a.createElement(re.a,null,o.a.createElement("div",null,o.a.createElement(c.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(K.d)(Object(K.c)(ee),e,K.a.apply(void 0,ae))}()},o.a.createElement(z,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kunal-mehta/stocks-dashboard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/kunal-mehta/stocks-dashboard","/service-worker.js");ne?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):oe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):oe(t,e)})}}()}},[[182,2,1]]]);
//# sourceMappingURL=main.3d19e6f3.chunk.js.map