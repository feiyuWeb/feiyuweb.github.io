(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{czJx:function(e,t,a){"use strict";a.r(t);a("Kabc");var n,r,p=a("fv+m"),s=(a("MX62"),a("SVTE")),o=(a("TC19"),a("qM57")),l=(a("e1sI"),a("WACH")),i=a("q1tI"),c=a.n(i),u=a("WXbf"),h=l["a"].Search,d=o["a"].Meta,m=(n=Object(u["connect"])(e=>e),n(r=class extends i["Component"]{constructor(e){super(e),this.inputFouse=c.a.createRef()}setName(e){if(e.trim()){var t=this.props.dispatch;t({type:"app/getInfo",payload:e})}else s["a"].info("\u641c\u7d22\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a")}componentDidMount(){var e=this.props.dispatch;e({type:"app/getInfo",payload:"feiyuWeb"})}render(){var e=this.props.app,t=e.userInfo,a=e.title;return console.log(this.props.app,"66"),c.a.createElement("div",null,c.a.createElement("p",null,a),c.a.createElement(h,{placeholder:"input search text",style:{width:"200px"},onSearch:e=>this.setName(e),enterButton:!0,ref:this.inputFouse}),0===Object.keys(t).length?c.a.createElement(p["a"],{size:"large",tip:"Loading..."}):c.a.createElement("div",null,c.a.createElement(o["a"],{hoverable:!0,style:{width:240},cover:c.a.createElement("img",{alt:"example",src:t.avatar_url})},c.a.createElement(d,{title:t.bio,description:t.html_url}))))}})||r);t["default"]=m}}]);