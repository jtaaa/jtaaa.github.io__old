(this["webpackJsonpjtaaa.github.io"]=this["webpackJsonpjtaaa.github.io"]||[]).push([[0],{26:function(e,t,a){e.exports=a(72)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},51:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(20),r=(a(34),a(3)),i=a(4),l=a(6),c=a(5),m=a(75),u=a(77),p=a(74),d=(a(35),a(36),a(24)),f=a(21),b=a.n(f),h=a(25),g=function(e){var t=e.fallbackSrc,a=e.fallbackType,n=e.alt,o=Object(h.a)(e,["fallbackSrc","fallbackType","alt"]);return s.a.createElement("picture",null,s.a.createElement("img",Object.assign({alt:n},o)),t&&s.a.createElement("source",{srcSet:t,type:a}))},v=(a(51),/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),k=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={greyed:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=200+this.props.linkGroups.reduce((function(e,t){return e+50*t.links.length}),0);this.props.linkGroups.forEach((function(a){a.links.forEach((function(a,n){setTimeout((function(){return e.setState((function(e){return{greyed:Object(d.a)({[a.name]:!0},e.greyed)}}))}),t-50*n)})),t-=50*a.links.length}))}},{key:"render",value:function(){for(var e=this,t=this.props.linkGroups,a=[],n=function(n){var o=t[n],r=o.groupName,i=o.title,l=o.links,c=o.size,m=s.a.createElement("div",{key:r,className:"LinkList-group"},s.a.createElement("div",{className:"LinkList-group-title"},i),s.a.createElement("div",{className:"LinkList-group-links"},l.map((function(t){var a=t.name,n=t.href,o=t.src,r=t.fallbackSrc,i=t.alt,l=t.tooltip,m=t.title,u=t.round,p=void 0!==u&&u;return s.a.createElement("div",{key:a,className:"LinkList-link-container"},s.a.createElement("a",{className:"LinkList-link",href:n,target:"_blank",rel:"noopener noreferrer"},s.a.createElement(g,{"data-tip":!0,"data-for":a,className:"\n                  LinkList-link-img\n                  ".concat(p?"LinkList-round-img":"","\n                  ").concat(e.state.greyed[a]?"":"LinkList-color-img","\n                "),style:{width:"small"===c?"24px":"32px"},src:o,alt:i,fallbackSrc:r,fallbackType:"image/png"})),s.a.createElement(b.a,{disable:v,id:a,type:"light",effect:"solid",place:"bottom"},l),m&&s.a.createElement("div",{className:"LinkList-link-title"},m))}))));a.push(m),n!==t.length-1&&a.push(s.a.createElement("div",{key:"LinkList-divider-".concat(n),className:"LinkList-divider"}))},o=0;o<t.length;o++)n(o);return s.a.createElement("div",{className:"LinkList"},a)}}]),a}(n.Component),y=[{groupName:"personal",title:"More about me",links:[{name:"github",href:"https://github.com/jtaaa/",src:"/assets/octocat_small_color.webp",fallbackSrc:"/assets/octocat_small_color.png",alt:"GitHub profile",tooltip:s.a.createElement("span",null,"View GitHub Profile"),title:"GitHub"},{name:"resume",href:"/web-resume",src:"/assets/resume_small.webp",fallbackSrc:"/assets/resume_small_color_short.png",alt:"R\xe9sum\xe9",tooltip:s.a.createElement("span",null,"View R\xe9sum\xe9"),title:"R\xe9sum\xe9"},{name:"email",href:"mailto:joshuatallum@gmail.com",src:"/assets/paperplane_small_color.webp",fallbackSrc:"/assets/paperplane_small_color.png",alt:"Email address",tooltip:s.a.createElement("span",null,"Contact Me"),title:"Email me"}]},{groupName:"affiliations",title:"Companies and Clubs",size:"small",links:[{name:"teleios",href:"https://www.teleios-systems.com/",src:"/assets/teleios_small_color_whitebg.webp",fallbackSrc:"/assets/teleios_small_color_whitebg.png",alt:"Teleios Systems Limited",tooltip:s.a.createElement("span",null,"Teleios Systems Limited")},{name:"massy",href:"http://www.massygroup.com/home.aspx",src:"/assets/massy_small_color.webp",fallbackSrc:"/assets/massy_small_color.png",alt:"Massy Group",tooltip:s.a.createElement("span",null,"Massy Technologies InfoCom")},{name:"ibm",href:"https://www.ibm.com/ca-en",src:"/assets/ibm_small_color.webp",fallbackSrc:"/assets/ibm_small_color.png",alt:"IBM",tooltip:s.a.createElement("span",null,"IBM Canada")},{name:"cognite",href:"https://www.cognite.com/en/",src:"/assets/cognite_small_bw.webp",fallbackSrc:"/assets/cognite_small_bw.png",alt:"Cognite",tooltip:s.a.createElement("span",null,"Cognite AS")},{name:"sellyourstuff",href:"https://github.com/SYSTT/sys-monorepo",src:"/assets/sellyourstuff-logo.webp",fallbackSrc:"/assets/sellyourstuff-logo.jpg",alt:"Sell Your Stuff",tooltip:s.a.createElement("span",null,"Sell Your Stuff Ltd")},{name:"acs",href:"http://uwacs.club",src:"/assets/acs_small_bw.webp",fallbackSrc:"/assets/acs_small_bw.png",alt:"University of Waterloo Association of Caribbean Students",tooltip:s.a.createElement("span",null,"University of Waterloo",s.a.createElement("br",null),"Association of Caribbean Students")},{name:"blueprint",href:"http://uwblueprint.org",src:"/assets/bp_small_color.webp",fallbackSrc:"/assets/bp_small_color.png",alt:"UW Blueprint",tooltip:s.a.createElement("span",null,"Blueprint"),round:!0}]}],E=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={fadedout:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({fadedout:!1})}),750)}},{key:"render",value:function(){return s.a.createElement("div",{className:"HomePage"},s.a.createElement("img",{className:"HomePage-backdrop ".concat(this.state.fadedout?"faded-out":""),src:"/assets/headshot.jpg",alt:"Handsome headshot o.O"}),s.a.createElement("div",{className:"HomePage-content"},s.a.createElement("div",{className:"HomePage-title"},"Joshua Allum"),s.a.createElement("div",{className:"HomePage-subtitle"},"Software Developer"),s.a.createElement("div",{className:"HomePage-description"},"Former Front-end Developer at"," ",s.a.createElement("a",{href:"https://www.cognite.com/en/",target:"_blank",rel:"noopener noreferrer"},"Cognite AS")," ","in Oslo.",s.a.createElement("br",null),"Working on"," ",s.a.createElement("a",{href:"https://github.com/SYSTT/sys-monorepo",target:"_blank",rel:"noopener noreferrer"},"Sell Your Stuff"),"."),s.a.createElement(k,{linkGroups:y})))}}]),a}(n.Component),w=a(12),S=a.n(w),N=a(76),j=(a(63),a(73)),_=(a(64),a(65),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"toggleMenu",value:function(){this.props.onMenuToggle&&this.props.onMenuToggle()}},{key:"render",value:function(){return s.a.createElement("div",{className:"MenuButton-wrapper"},s.a.createElement("div",{className:"MenuButton ".concat(this.props.menuOpen?"MenuButton-open":""),onClick:this.toggleMenu.bind(this)}))}}]),a}(n.Component)),O=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Toolbar"},s.a.createElement(_,this.props),s.a.createElement(j.a,{to:"/",className:"Toolbar-title"},"Joshua Allum"),s.a.createElement("div",null))}}]),a}(n.Component),I=[{logo:"/assets/bp_small_color.png",href:"https://uwblueprint.org/",title:"Blueprint",name:"blueprint",alt:"Blueprint logo",pos:0},{logo:"/assets/acs_small_bw.png",title:"Association of Caribbean Students",href:"http://uwacs.club",name:"acs",alt:"ACS logo",pos:1},{logo:"/assets/teleios_small_color_whitebg.png",title:"Teleios Systems Limited",href:"https://www.teleios-systems.com/",name:"teleios",alt:"Teleios logo",pos:2},{logo:"/assets/massy_small_color.png",title:"Massy Technologies InfoCom",href:"http://www.massygroup.com/home.aspx",name:"massy",alt:"Massy Group logo",pos:3}],T={"/info/blueprint":{name:"blueprint",generalInfo:{description:"Blueprint is a student group that partners with non-profit organizations to develop tech solutions, such as website, mobile apps and backend services, free of charge.",infoPoints:[{label:"Role:",value:"Project Developer"},{label:"Joined:",value:"Jan, 2018"}]},projectsInfo:[{img:"/assets/project_images/bestfriends/pixel_camera.png",alt:"",name:"bestfriends",title:"Best Friends Animal Society",titleLink:"https://bestfriends.org/",description:"Best Friends runs America\u2019s largest no-kill animal sanctuary and aims to achieve nation-wide no-kill status by 2025.",sections:[{name:"bestfriends problem",title:"Problem",subsections:[{name:"bestfriends problem p1",type:"paragraph",contents:["Based on data collected by Best Friends, it was found that the image quality of animal profile pics was the no. 1 factor that determined whether an animal would be adopted or not."]},{name:"bestfriends problem p2",type:"paragraph",contents:["Since animals come to the sanctuary from a number of different shelters nation-wide, image quality was not enforced and varied greatly."]}]},{name:"bestfriends solution",title:"Solution",img:"/assets/project_images/bestfriends/pixel_triple.png",alt:"Three images of bestfriends mobile app",subsections:[{name:"bestfriends solution p1",type:"paragraph",contents:["Our solution was to create a mobile app that allows shelter staff to take photos and be notified of whether they meet Best Friend's image requirements."]},{name:"bestfriends solution p2",type:"breakdown",contents:["The requirements included:","","Good lighting","Animal's face must be centered","Animal's face must be in focus"]},{name:"bestfriends solution p3",type:"paragraph",contents:["Photos are taken in the mobile app and sent to a backend server to be processed. User\u2019s can view what requirements each photo passed and failed before saving."]}]},{name:"bestfriends techused",title:"Tech Used",subsections:[{name:"bestfriends techused p1",title:"Frontend",type:"paragraph",contents:["React Native and the Expo toolchain were used to develop the cross-platform mobile app."]},{name:"bestfriends techused p2",title:"Backend",type:"paragraph",contents:["Python was chosen as the backend language to facilitate the image manipulation and machine learning tasks.","The backend consists of a Flask server that uses OpenCV and Scikit-Image to check the requirements."]}]},{name:"bestfriends mycontribution",title:"My Contribution",subsections:[{name:"bestfriends mycontribution p1",type:"paragraph",contents:["I worked mostly on the backend."]},{name:"bestfriends mycontribution p2",type:"paragraph",contents:["Using OpenCV, I was able to detect the bounding boxes of animals within a photo and determine whether or not they are centered."]},{name:"bestfriends mycontribution p3",type:"paragraph",contents:["Using Skikit-Image I was able to produce statistics describing the brightness and contrast of a photo to determine if it had acceptably lighting."]}]}]}]},"/info/acs":{name:"acs",generalInfo:{description:"The University of Waterloo ACS is a student group that fosters a strong Caribbean community and promotes Caribbean culture.",infoPoints:[{label:"Role:",value:"Web Administrator"},{label:"Joined:",value:"Oct, 2016"}]},projectsInfo:[]},"/info/teleios":{name:"teleios",generalInfo:{description:"Teleios Systems Limited is a leader in cloud, mobile and automation services in the Caribbean, across the government, energy, retail, finance and telecommunications industries.",infoPoints:[{label:"Role:",value:"Software Developer"},{label:"Joined:",value:"June, 2017"}]},projectsInfo:[]},"/info/massy":{name:"massy",generalInfo:{description:"Massy Technologies InfoCom is part of the largest conglomerate in the Caribbean, Massy Holdings Limited, and provides software and IT solutions to customers across the Caribbean.",infoPoints:[{label:"Role:",value:"Software & Data Science Developer"},{label:"Joined:",value:"May, 2018"}]},projectsInfo:[]}},L=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(i.a)(a,[{key:"onMenuToggle",value:function(){this.setState((function(e){return{menuOpen:!e.menuOpen}}))}},{key:"navigateTo",value:function(e){this.props.history.push("/info/".concat(e)),this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t=function(e){switch(e){case"/info/blueprint":return I[0];case"/info/acs":return I[1];case"/info/teleios":return I[2];case"/info/massy":return I[3];default:return{}}}(this.props.location.pathname),a=t.logo,n=t.alt,o=t.title,r=t.pos,i=t.href;return s.a.createElement("div",{className:"Header ".concat(this.state.menuOpen?"Header-menu-open":"")},s.a.createElement(O,{onMenuToggle:this.onMenuToggle.bind(this),menuOpen:this.state.menuOpen}),s.a.createElement(S.a,{component:"div",transitionName:"header-move-".concat(r),transitionEnterTimeout:200,transitionLeaveTimeout:200},a&&!this.state.menuOpen&&s.a.createElement("a",{className:"Header-img-a",href:i,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"Header-img",src:a,alt:n}))),s.a.createElement("div",{className:"Header-menu-list"},I.map((function(t){return s.a.createElement(S.a,{key:t.name,transitionName:"fade",transitionEnterTimeout:300,transitionLeaveTimeout:200},e.state.menuOpen&&s.a.createElement("img",{onClick:function(){return e.navigateTo(t.name)},key:t.name,className:"Header-img Header-menu-img",src:t.logo,alt:t.alt}))}))),s.a.createElement(S.a,{transitionName:"fade-long",transitionEnterTimeout:600,transitionLeaveTimeout:200},o&&!this.state.menuOpen&&s.a.createElement("div",{key:"Header-title",className:"Header-title"},o)),s.a.createElement("div",{className:"Header-underline ".concat(this.state.menuOpen?"Header-underline-long":"")}))}}]),a}(n.Component),C=Object(N.a)(L),P=(a(67),a(68),function(e){var t=e.description,a=e.infoPoints;return s.a.createElement("div",{className:"GeneralInfo"},s.a.createElement("div",{className:"GeneralInfo-description"},t),s.a.createElement("div",{className:"GeneralInfo-info"},a.map((function(e){var t=e.label,a=e.value;return s.a.createElement("div",{key:t,className:"GeneralInfo-info-item"},s.a.createElement("div",{className:"GeneralInfo-info-label"},t),s.a.createElement("div",{className:"GeneralInfo-info-value"},a))}))))}),M=(a(69),a(70),a(71),function(e){var t=e.title,a=e.type,n=e.contents,o=e.backgroundColor,r=e.color;return s.a.createElement("div",{className:"SubSection"},t&&s.a.createElement("div",{className:"SubSection-title"},t),function(){if(n)switch(a){case"paragraph":return n.map((function(e,t){return s.a.createElement("p",{key:t,className:"SubSection-paragraph"},e)}));case"breakdown":case"rundown":case"summary":case"breakdown of de rundown":case"summary of de breakdown of the rundown":return s.a.createElement("div",{className:"SubSection-breakdown",style:{backgroundColor:o,color:r}},n.map((function(e,t){return s.a.createElement("div",{key:t,className:"SubSection-breakdown-point"},e)})));default:return null}return null}())}),H=function(e){var t=e.title,a=e.img,n=e.alt,o=e.subsections;return s.a.createElement("div",{className:"Section"},s.a.createElement("div",{className:"Section-title"},t),s.a.createElement("div",{className:"Section-underline"}),a&&s.a.createElement("img",{className:"Section-img",src:a,alt:n}),o&&o.map((function(e){return s.a.createElement(M,Object.assign({key:e.name},e))})))},B=function(e){var t=e.img,a=e.alt,n=e.title,o=e.titleLink,r=e.description,i=e.sections;return s.a.createElement("div",{className:"ProjectInfo"},s.a.createElement("img",{className:"ProjectInfo-img",src:t,alt:a}),o?s.a.createElement("a",{className:"ProjectInfo-title",href:o,target:"_blank",rel:"noopener noreferrer"},n):s.a.createElement("div",{className:"ProjectInfo-title"},n),s.a.createElement("div",{className:"ProjectInfo-description"},r),i&&i.map((function(e){return s.a.createElement(H,Object.assign({key:e.name},e))})))},A=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=(e=this.props.location.pathname,T[e]);return s.a.createElement("div",{className:"InfoPage"},s.a.createElement("div",{className:"InfoPage-section"},t&&s.a.createElement(P,t.generalInfo)),s.a.createElement("div",{className:"InfoPage-divider"}),s.a.createElement("div",{className:"InfoPage-projects"},s.a.createElement("div",{className:"InfoPage-header"},"Projects"),t.projectsInfo.map((function(e){return s.a.createElement(B,Object.assign({key:e.name},e))}))))}}]),a}(n.Component),G=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(u.a,null,s.a.createElement(p.a,{path:"/info/",render:function(e){return s.a.createElement("div",null,s.a.createElement(C,null),s.a.createElement(A,{location:e.location}))}}),s.a.createElement(p.a,{path:"/",component:E}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=document.getElementById("root");Object(o.render)(s.a.createElement(G,null),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.11b129ea.chunk.js.map