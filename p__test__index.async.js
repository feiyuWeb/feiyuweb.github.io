(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{Bilc:function(e,t,a){"use strict";a.r(t);a("BZHA");var n=a("i4rf"),l=a("p0pE"),r=a.n(l),o=a("q1tI"),p=a.n(o),s=a("usdK"),i=a("WXbf"),c=p.a.lazy(()=>a.e(15).then(a.bind(null,"VlU3"))),u=p.a.lazy(()=>Promise.all([a.e(0),a.e(13)]).then(a.bind(null,"jBwz")));function d(e){var t={display:"flex",justifyContent:"center"},a=e.numbers,n=a.map(e=>p.a.createElement("li",{key:e.toString()},e));return p.a.createElement("ul",{style:r()({},t)},n)}class m extends o["PureComponent"]{constructor(){super(...arguments),this.handleDelete=(e=>{var t=this.props.dispatch;t({type:"pro/delete",payload:e}),t({type:"app/change",payload:`\u5220\u9664\u7684\u5143\u7d20id\u4e3a${e}`})})}jumpUrl(){s["a"].push({pathname:"/about"})}render(){var e=[1,3,5,8,9],t=this.props.rootState.pro.list,a=this.props.rootState.app.title;return p.a.createElement("div",{style:{padding:"20px"}},p.a.createElement(o["Suspense"],{fallback:p.a.createElement("div",null,"Loading...")},p.a.createElement(u,{onDelete:this.handleDelete,products:t}),p.a.createElement("h3",{style:{color:"pink"}},a),p.a.createElement(n["a"],{type:"primary",onClick:this.jumpUrl.bind(this)},"\u9875\u9762\u8df3\u8f6c"),p.a.createElement(d,{numbers:e}),p.a.createElement(c,{color:"pink",isShow:!0}),p.a.createElement(c,{color:"blue",isShow:!1})))}}t["default"]=Object(i["connect"])(e=>{return{rootState:e}})(m)}}]);