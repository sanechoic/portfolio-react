(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[19],{170:function(e,t,n){"use strict";n.r(t);var o=n(37),a=n(0),i=n.n(a),r=n(52),c=(n(19),n(13)),l=n(40);var s=function(e){for(var t=Object(l.a)(),n=0;n<t.length;n++)if(t[n].key===e.projectKey){var o=t[n];break}return i.a.createElement("div",{className:"",style:{width:"100%"}},i.a.createElement(c.b,{to:o.link},i.a.createElement("div",{className:"homepageProject",onMouseOver:function(t){return t.currentTarget.style.background=e.colour},onMouseOut:function(e){return e.currentTarget.style.background="white"}},i.a.createElement("div",{className:"homepageProject-img set-bg grow",style:{backgroundImage:"url("+o.image+")"}}),i.a.createElement("div",{className:"hp-inner ".concat(e.textVis?"hpAppear":"hpDisappear")},i.a.createElement("h4",{className:"project-number"},e.number+" / "+e.total),i.a.createElement("h2",{className:""}," "+o.title),i.a.createElement("h3",{className:"project-question"},o.question),i.a.createElement("h5",{className:"fa fa-long-arrow-right strike"}," see more")))))};t.default=function(e){var t=Object(a.useState)(0),n=Object(o.a)(t,2),l=n[0],u=n[1],m=Object(a.useState)(!0),g=Object(o.a)(m,2),d=g[0],p=g[1],f=Object(a.useRef)(null);return Object(a.useEffect)((function(){document.title="WP | Design Engineer",setTimeout((function(){f.current.onResize()}),0)}),[]),i.a.createElement("div",null,i.a.createElement(r.a,{beforeSlide:function(e){p(!1),setTimeout((function(){p(!0)}),500)},afterSlide:function(e,t){u(e)},slideIndex:l,enableKeyboardControls:!0,disableEdgeSwiping:!0,heightMode:"max",speed:500,className:"carousel",width:"100%",vertical:!1,ref:f,renderCenterLeftControls:null,renderCenterRightControls:null,renderBottomLeftControls:function(e){var t=e.previousSlide;e.slideCount;return i.a.createElement("button",{className:"carouselPrev shift-left ".concat(0===l?"invis":""),onClick:t,style:{left:"100%"}},i.a.createElement("i",{className:"fa fa-angle-left"}))},renderBottomRightControls:function(e){var t=e.nextSlide,n=e.slideCount;return i.a.createElement("button",{className:"carouselNext ".concat(l===n-1?"shift-left":"shift-right"),onClick:l===n-1?function(){return u(0)}:t,style:{right:"100%"}},i.a.createElement("i",{className:"".concat(l===n-1?"fa fa-angle-double-left":"fa fa-angle-right")}))},defaultControlsConfig:{pagingDotsStyle:{fill:"#4A03FF"}}},i.a.createElement("div",{className:"intro-wrapper",onMouseOver:function(e){return e.currentTarget.style.background="#6121ff"},onMouseOut:function(e){return e.currentTarget.style.background="white"}},i.a.createElement("a",null,"Design engineer based in London."),i.a.createElement("a",{style:{opacity:0}},"--"),i.a.createElement("h5",{className:"fa fa-long-arrow-right strike",onClick:function(){return u(1)}},"featured work")),i.a.createElement(s,{projectKey:"panaseer",key:"01",number:"01",total:"03",colour:"#0FFFB0",textVis:d}),i.a.createElement(s,{projectKey:"joyStory",key:"02",number:"02",total:"03",colour:"#FF491C",textVis:d}),i.a.createElement(s,{projectKey:"spiro",key:"03",number:"03",total:"03",colour:"#FFEE1C",textVis:d})),i.a.createElement(c.b,{to:{pathname:"/projects",activeCategory:"all"},className:"similarProjects ".concat(3===l?"slideUp":"slideDown")},i.a.createElement("span",null,"more work")))}},38:function(e,t,n){e.exports=n.p+"static/media/thumbnail.c70de397.png"},39:function(e,t,n){e.exports=n.p+"static/media/thumbnail.36387f11.jpg"},40:function(e,t,n){"use strict";var o=[{key:"panaseer",link:"/panaseer",image:n(41),title:"Panaseer",question:"Leveraging a novel innovation in food sensing to help Allergy Sufferers",col:"col-md-4",category:["des"],month:"March",year:"2019",contribution:"Solo"},{key:"joyStory",link:"/joyStory",image:n(42),title:"JoyStory",question:"Building Relationships with a Collaborative Game",col:"col-md-4",category:["cod","str"],month:"March",year:"2020",contribution:"Coding + Electronics | Data Analysis + Insights Business Strategy"},{key:"beatbox",link:"/beatbox",image:n(43),title:"Beatbox",question:"Visualising Heart Rate using Mechatronics",col:"col-md-4",category:["cod"],month:"December",year:"2017",contribution:"Coding + Electronics"},{key:"embla",link:"/embla",image:n(44),title:"Embla",question:"Workplace Environments to Reduce Stress",col:"col-md-8",category:["str","des"],month:"April",year:"2019",contribution:"System Design + Market Analysis"},{key:"blueNote",link:"/blueNote",image:n(45),title:"BlueNote",question:"Delivering Timely Notifications with Bluetooth Low Energy",col:"col-md-4",category:["cod","str"],month:"January",year:"2020",contribution:"Solo"},{key:"spiro",link:"/spiro",image:n(46),title:"Spiro",question:"A cost-effective way to Measure Lung Capacity",col:"col-md-4",category:["cod","str"],month:"June",year:"2017",contribution:"Coding + Electronics"},{key:"pause",link:"/pause",image:n(47),title:"Pause",question:"Addressing Social Media Addiction using Behavioural Psychology",col:"col-md-4",category:["des"],month:"March",year:"2020",contribution:"Concept Development + App Mockup",moreAbout:"https://xd.adobe.com/view/5d6dff6e-7b41-4313-40cf-58da54d90e0d-2b5c/?fullscreen"},{key:"peoplePod",link:"/peoplePod",image:n(48),title:"ModPod",question:"An Autonomous Vehicle to tackle the Last Mile Problem",col:"col-md-4",category:["str","des"],month:"June",year:"2016",contribution:"Chair Design + System Design "},{key:"balancingRobot",link:"/balancingRobot",image:n(49),title:"Strip The Willow",question:"Using Signal Processing to create a Dancing Robot",col:"col-md-4",category:["cod"],month:"April",year:"2018",contribution:"Coding + Electronics"},{key:"pacman",link:"/pacman",image:n(50),title:"Pacman",question:"Automating and Optimising Pacman",col:"col-md-4",category:["cod"],month:"December",year:"2016",contribution:"Pacman Algorithm Design + Coding"},{key:"leapfrog",link:"/leapfrog",image:n(38),title:"LeapFrog",question:"Designing a Jumping Robot using Mechanics, Finite Element Analysis and 3D Modelling",col:"col-md-4",category:["eng"],month:"April",year:"2018",contribution:"Solo"},{key:"reveng",link:"/reveng",image:n(39),title:"RevEng",question:"Making Products more Sustainable using Thermodynamics and Material Analysis",col:"col-md-8",category:["str","eng"],month:"March",year:"2016",contribution:"Material Analysis"}];t.a=function(){return o}},41:function(e,t,n){e.exports=n.p+"static/media/9.4ab57ba5.png"},42:function(e,t,n){e.exports=n.p+"static/media/thumbnail.4177b0d1.png"},43:function(e,t,n){e.exports=n.p+"static/media/thumbnail.7855949a.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/thumbnail.69e50423.png"},45:function(e,t,n){e.exports=n.p+"static/media/thumbnail.48f4cdc7.png"},46:function(e,t,n){e.exports=n.p+"static/media/thumbnail.e500561e.png"},47:function(e,t,n){e.exports=n.p+"static/media/thumbnail.760f0ced.png"},48:function(e,t,n){e.exports=n.p+"static/media/thumbnail.012ac32a.png"},49:function(e,t,n){e.exports=n.p+"static/media/thumbnail.0812166e.png"},50:function(e,t,n){e.exports=n.p+"static/media/thumbnail.8819f735.png"}}]);
//# sourceMappingURL=19.8eec2467.chunk.js.map