(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={message:"Notification_message__1iffz"}},11:function(e,t,n){e.exports={list:"Statistics_list__2fklZ"}},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(5),s=n.n(o),r=(n(19),n(6)),l=n(7),u=n(8),d=n(13),b=n(12),j=n(4),h=n.n(j);function f(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:h.a.container,children:[Object(c.jsx)("h2",{className:h.a.title,children:t}),n]})}var v=n(2),g=n.n(v),p=n(9),O=n.n(p);function x(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e,t){return Object(c.jsx)("button",{type:"button",className:O.a.button,onClick:function(){return n(e)},children:e},t)}))}x.propTipes={options:g.a.arrayOf(g.a.string.isRequired),onLeaveFeedback:g.a.func.isRequired};var k=n(10),F=n.n(k);function _(e){var t=e.message;return Object(c.jsx)("p",{className:F.a.message,children:t})}var m=n(11),P=n.n(m);function N(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,o=e.positivePercentage;return Object(c.jsx)("div",{children:i>0?Object(c.jsxs)("ul",{className:P.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",i]}),Object(c.jsxs)("li",{children:["PositivePercentage: ",o,"%"]})]}):Object(c.jsx)(_,{message:"No feedback given"})})}var S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.options=Object.keys(e.state),e.handleFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.options.reduce((function(t,n){return t+e.state[n]}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return t?Math.round(n/t*100):0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{title:"Please leave feedback",children:Object(c.jsx)(x,{options:this.options,onLeaveFeedback:this.handleFeedback})}),Object(c.jsx)(f,{title:"Statistics",children:Object(c.jsx)(N,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),T()},4:function(e,t,n){e.exports={container:"Section_container__1gxTd",title:"Section_title__3Cc3l"}},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__1SodR"}}},[[22,1,2]]]);
//# sourceMappingURL=main.9ff6d1d2.chunk.js.map