(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports={Backdrop:"Backdrop__Backdrop__efy1y",grow:"Backdrop__grow__36fb6",Open:"Backdrop__Open__hWfH7",Close:"Backdrop__Close__3fmv5",shrink:"Backdrop__shrink__35xhP"}},11:function(e,a,t){e.exports={a:"ReactNote__a__170Rl",Text:"ReactNote__Text__3PEBX"}},2:function(e,a,t){e.exports={MacTerminal:"MacTerminal__MacTerminal__184mc",MacTerminal__head:"MacTerminal__MacTerminal__head__1sy7H",MacTerminal__Body:"MacTerminal__MacTerminal__Body__YobOI",dotRed:"MacTerminal__dotRed__4loHT",dotYellow:"MacTerminal__dotYellow__3RA_V",dotGreen:"MacTerminal__dotGreen__2kL1P",flicker:"MacTerminal__flicker__343Wr",flickerAnimation:"MacTerminal__flickerAnimation__F481c","animate-flicker":"MacTerminal__animate-flicker__soEVD"}},20:function(e,a,t){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",ShadowDiv:"Toolbar__ShadowDiv__3wXFq",OnlyPhone:"Toolbar__OnlyPhone__2PyR6"}},24:function(e,a,t){e.exports={NavItem:"NavItem__NavItem__r-b9L",borderShow:"NavItem__borderShow__2_4LJ"}},25:function(e,a,t){e.exports={ContactLink:"ContactLink__ContactLink__2Evbf",A:"ContactLink__A__gTKGV"}},26:function(e,a,t){e.exports={ContactLinks:"ContactLinks__ContactLinks__2Mbvl"}},39:function(e,a,t){e.exports={App:"App__App__1o-Fp"}},40:function(e,a,t){e.exports={NavItem:"NavItems__NavItem__3neVc",NavItem__Wrapper:"NavItems__NavItem__Wrapper__3m6Cb"}},41:function(e,a,t){e.exports={image:"Greeting__image__2sxg7",p:"Greeting__p__16Z5p",flicker:"Greeting__flicker__25J_F",flickerAnimation:"Greeting__flickerAnimation__3VcV0","animate-flicker":"Greeting__animate-flicker__37ZPw"}},42:function(e,a,t){e.exports={Footer:"Footer__Footer__268PT"}},43:function(e,a,t){e.exports=t(74)},48:function(e,a,t){},53:function(e,a){},55:function(e,a){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(38),c=t.n(l),o=(t(48),t(39)),i=t.n(o),_=t(15),s=t(16),m=t(18),d=t(17),u=t(19),f=r.a.createContext(),p=t(20),v=t.n(p),E=t(24),w=t.n(E),h=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:w.a.NavItem},e.title),r.a.createElement("div",{className:w.a.NavItem__underline}))},k=t(8),N=t.n(k),g=function(e){return r.a.createElement(f.Consumer,null,function(e){return r.a.createElement("div",{className:N.a.Container,onClick:e.MenuToggle},r.a.createElement("div",{className:N.a.Bar}),r.a.createElement("div",{className:N.a.Bar}),r.a.createElement("div",{className:N.a.Bar}))})},b=t(40),T=t.n(b),C=function(e){return r.a.createElement("div",{className:T.a.NavItem__Wrapper},r.a.createElement(h,{title:"Who I am"}),r.a.createElement(h,{title:"Projects"}))},M=function(e){return r.a.createElement("div",{className:v.a.Toolbar},r.a.createElement("div",{className:v.a.OnlyPhone},r.a.createElement(g,null)),r.a.createElement(C,null),r.a.createElement("div",{className:v.a.ShadowDiv}))},B=t(41),D=t.n(B),x=t(2),y=t.n(x),S=function(e){function a(){var e,t;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).date=(new Date).toString(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:y.a.MacTerminal},r.a.createElement("div",{tabIndex:-1,className:y.a.MacTerminal__head},r.a.createElement("div",{className:y.a.dotRed}),r.a.createElement("div",{className:y.a.dotYellow}),r.a.createElement("div",{className:y.a.dotGreen})),r.a.createElement("div",{className:y.a.MacTerminal__Body},r.a.createElement("div",null,"Last login:",this.date),r.a.createElement("div",null,"Hello world!"),r.a.createElement("div",null,"My name is Hermes. I am a software developer"),r.a.createElement("div",null,"Please press any key to continue"),r.a.createElement("div",null,">",r.a.createElement("span",{className:y.a.flicker},"_")))))}}]),a}(n.Component),O=function(e){return r.a.createElement("div",{className:D.a.image},r.a.createElement(S,null))},I=t(9),j=t.n(I),F=t(10),L=t.n(F),A=function(e){return e.show?r.a.createElement("div",{className:[L.a.Backdrop,L.a.Open].join(" "),onClick:e.clicked}):r.a.createElement("div",{className:[L.a.Backdrop,L.a.Close].join(" ")})},P=function(e){var a=[j.a.SideDrawer,j.a.Close];return e.open&&(a=[j.a.SideDrawer,j.a.Open]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:a},r.a.createElement(A,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:a.join(" ")})))},H=t(42),R=t.n(H),G=t(25),W=t.n(G),J=(t(49),function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:W.a.ContactLink},r.a.createElement("a",{href:e.links,className:W.a.A},r.a.createElement("i",{className:e.iconClass}))))}),V=t(26),Y=t.n(V),Z=function(e){return r.a.createElement("div",{className:Y.a.ContactLinks},r.a.createElement(J,{className:Y.a.Link,iconClass:"fab fa-linkedin-in",links:"https://www.linkedin.com/in/hermes-brito-587201122/"}),r.a.createElement(J,{iconClass:"fab fab fa-github",links:"https://github.com/btohermes"}),r.a.createElement(J,{iconClass:"fab fa-twitter",links:"https://twitter.com/Hermes34213439"}))},Q=t(11),X=t.n(Q),q=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:X.a.ReactNote},r.a.createElement("div",{className:X.a.Text},"This site was developed with"),r.a.createElement("div",{className:X.a.Link},r.a.createElement("a",{href:"https://reactjs.org/",className:X.a.a},r.a.createElement("i",{className:"fab fa-react"})))))},K=function(e){return r.a.createElement("div",{className:R.a.Footer},r.a.createElement(Z,null),r.a.createElement(q,null))},$=function(e){function a(){var e,t;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},t.sideDrawerCloseHandler=function(){t.setState({showSideDrawer:!1})},t.sideDrawerToggleHandler=function(){t.setState(function(e){return{showSideDrawer:!t.state.showSideDrawer}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f.Provider,{value:{MenuToggle:this.sideDrawerToggleHandler,showSideDrawer:this.state.showSideDrawer}},r.a.createElement(M,null),r.a.createElement(O,null),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler})),r.a.createElement(K,null))}}]),a}(n.Component);var z=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports={MenuButton:"MenuButton__MenuButton__1QyRQ",Container:"MenuButton__Container__FZltv",Bar:"MenuButton__Bar__2-Plx"}},9:function(e,a,t){e.exports={SideDrawer:"SideDrawer__SideDrawer__3pYt5",Open:"SideDrawer__Open__oreis",Close:"SideDrawer__Close__2n5h8"}}},[[43,1,2]]]);
//# sourceMappingURL=main.1a3265e6.chunk.js.map