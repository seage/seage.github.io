(this["webpackJsonpwww.seage.org"]=this["webpackJsonpwww.seage.org"]||[]).push([[0],{63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(12),c=a.n(n),s=(a(63),a(112)),l=a(102),o=a(71),h=a(99),j=a(1),d=function(){return Object(j.jsxs)(o.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(j.jsx)(h.a,{color:"inherit",href:"https://material-ui.com/",children:"seage.org"})," ",(new Date).getFullYear(),"."]})},b=a(107),m=a(5),x=a(104),p=a(106),O=a(100),g=a(103),u=a(105),f=a(101),y=a(73),v=a(50),S=a.n(v),A=a(51),P=a.n(A),k=a(52),w=a.n(k),T=a(53),N=a.n(T),G=a(114),C=Object(m.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},body:{fontSize:14}}}))(O.a),E=Object(m.a)((function(e){return{head:{color:e.palette.common.white,fontSize:14}}}))(O.a),R=Object(m.a)((function(e){return{body:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,fontSize:14}}}))(O.a),B=Object(m.a)((function(e){return{}}))(f.a);function F(e,t){return{id:e,name:t}}var _=[F("GA","Genetic Algorithm"),F("TS","Tabu Search"),F("SA","Simulated Annealing"),F("ACO","Ant Colony"),F("PSO","Particle Swarm"),F("FA","Firefly Algorithm\t")],M=[F("TSP","Traveling Salesman"),F("SAT","Satisfiability"),F("QAP","Quadratic Assignment"),F("JSP","Jobshop Sheduling"),F("FSP","Flowshop Sheduling")],z={ACO:{TSP:"OK",SAT:"OK",QAP:"~",JSP:"~",FSP:"~",VRP:"",GCP:""},FA:{TSP:"-",SAT:"",QAP:"x",JSP:"",FSP:"",VRP:"",GCP:""},GA:{TSP:"OK",SAT:"OK",QAP:"",JSP:"~",FSP:"OK",VRP:"",GCP:""},PSO:{TSP:"",SAT:"",QAP:"x",JSP:"",FSP:"",VRP:"",GCP:""},SA:{TSP:"OK",SAT:"OK",QAP:"~",JSP:"~",FSP:"~",VRP:"",GCP:""},TS:{TSP:"OK",SAT:"OK",QAP:"~",JSP:"~",FSP:"~",VRP:"",GCP:""}},I=Object(l.a)((function(e){return{table:{minWidth:700}}})),W=Object(m.a)((function(e){return{tooltip:{backgroundColor:e.palette.primary.main,fontSize:13}}}))(G.a),D=function(e){switch(e){case"OK":return Object(j.jsx)(W,{title:"Done",color:"primary",children:Object(j.jsx)(S.a,{color:"secondary",tooltip:"asdf"})});case"~":return Object(j.jsx)(W,{title:"Partially Done",children:Object(j.jsx)(P.a,{color:"primary"})});case"x":return Object(j.jsx)(W,{title:"Error",children:Object(j.jsx)(w.a,{color:"primary"})});default:return Object(j.jsx)(W,{title:"Not Implemented",children:Object(j.jsx)(N.a,{color:"primary"})})}};function H(){var e=I();return Object(j.jsx)(g.a,{component:y.a,children:Object(j.jsxs)(x.a,{className:e.table,"aria-label":"customized table",children:[Object(j.jsx)(u.a,{children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(E,{width:"200"}),M.map((function(e){return Object(j.jsx)(C,{align:"center",children:e.name},e.name)}))]},"head")}),Object(j.jsx)(p.a,{children:_.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e){return Object(j.jsxs)(B,{children:[Object(j.jsx)(R,{children:e.name},"problem"),M.map((function(t){return Object(j.jsx)(C,{align:"center",children:D(z[e.id][t.id])},e.id)}))]},e.id)}))})]})})}var K=Object(l.a)((function(e){return{tableGrid:{paddingTop:e.spacing(3),paddingBottom:e.spacing(6)}}})),J=function(){var e=K();return Object(j.jsxs)("div",{children:[Object(j.jsxs)(b.a,{maxWidth:"md",children:[Object(j.jsx)(o.a,{component:"h2",variant:"h3",align:"center",color:"primary",gutterBottom:!0,children:"Basics"}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:["The most basic mission of the ",Object(j.jsx)("b",{children:"SEAGE"})," project is being ",Object(j.jsx)("b",{children:"the library"})," of the optimization ",Object(j.jsx)("b",{children:"problem and algorithm"})," implementations. They are the heart of the SEAGE project. Most of the problems currently implemented are of ",Object(j.jsx)("b",{children:"combinatorial"})," (i.e. discrete) nature. The implementation matrix follows."]}),Object(j.jsx)(o.a,{component:"h2",variant:"h4",align:"center",color:"primary",children:"Problems and Algorithms"})]}),Object(j.jsx)(b.a,{className:e.tableGrid,maxWidth:"md",children:Object(j.jsx)(H,{})}),Object(j.jsx)(b.a,{maxWidth:"md",children:Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:["Any ",Object(j.jsx)("b",{children:"algorithm"})," can be taken ",Object(j.jsx)("b",{children:"as-is"})," and applied to ",Object(j.jsx)("b",{children:"a new optimization problem"})," simply without the need to use any other framework's features. The ",Object(j.jsx)("b",{children:"reference problem"})," implementations serve to playing and ",Object(j.jsx)("b",{children:"experimenting"})," with."]})})]})},Q=a(108),V=a.p+"static/media/architecture.d5b1144d.svg",L=Object(l.a)((function(e){return{arch:{},image:{maxWidth:"100%",paddingTop:e.spacing(1)}}})),U=function(){var e=L();return Object(j.jsx)("div",{children:Object(j.jsxs)(b.a,{maxWidth:"md",children:[Object(j.jsx)(o.a,{component:"h2",variant:"h3",align:"center",color:"primary",gutterBottom:!0,children:"Architecture"}),Object(j.jsxs)(Q.a,{container:!0,spacing:10,className:e.arch,children:[Object(j.jsxs)(Q.a,{item:!0,xs:12,sm:6,md:6,children:[Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:["The SEAGE's ",Object(j.jsx)("b",{children:"architecture"})," can be seen as ",Object(j.jsx)("b",{children:"a set of layers"}),". The upper layer uses the one bellow. The lower layer is not aware of the one above. See ",Object(j.jsx)("b",{children:"the picture"})," on the right."]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:["One of the layers is the ",Object(j.jsx)("b",{children:"Algorithm Abstraction Layer"})," (AAL) which allows to run algorithms in ",Object(j.jsx)("b",{children:"one uniform way"}),"."]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:["Running an ",Object(j.jsx)("b",{children:"algorithm on a problem"})," is seen as an ",Object(j.jsx)("b",{children:"experiment"}),". Defining and ",Object(j.jsx)("b",{children:"evaluating"})," the experiments is the most funny part of this projects and leads to ",Object(j.jsx)("b",{children:"hyper-heuristics"}),"."]})]}),Object(j.jsx)(Q.a,{item:!0,xs:12,sm:6,md:6,children:Object(j.jsx)("div",{className:e.image,children:Object(j.jsx)("img",{src:V,alt:"architecture",align:"right",className:e.image})})})]})]})})},X=Object(l.a)((function(e){return{root:{}}})),Y=function(){var e=X();return Object(j.jsxs)(b.a,{maxWidth:"md",className:e.root,children:[Object(j.jsx)(o.a,{component:"h2",variant:"h3",align:"center",color:"primary",gutterBottom:!0,children:"Hyper-heuristics"}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)("b",{children:"Optimization"})," problems are ",Object(j.jsx)("b",{children:"hard"})," because of their vast ",Object(j.jsx)("b",{children:"state space"}),". The state space is ",Object(j.jsx)("b",{children:"so big"})," that examining every single element could take ",Object(j.jsx)("b",{children:"centuries"}),"."]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)("b",{children:"Heuristics"})," introduce ",Object(j.jsx)("b",{children:"problem specific"})," hints to tackle the vast state space and promise finding a ",Object(j.jsx)("b",{children:"good"})," solution in a ",Object(j.jsx)("b",{children:"reasonable"})," time."]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)("b",{children:"Metaheuristics"})," (often nature inspired like Genetic Algorithm, Ant Colony Optimization, etc.) overcome the barrier of being problem specific and provide good solutions ",Object(j.jsx)("b",{children:"across"})," certain ",Object(j.jsx)("b",{children:"problem domains"}),". The ",Object(j.jsx)("b",{children:"solutions"})," provided by metaheuristics are ",Object(j.jsx)("b",{children:"good"})," but can be even ",Object(j.jsx)("b",{children:"better"}),"?"]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)("b",{children:"Hyper-heuristics"})," try to combine (meta)heuristics based on the problem to be solved and automatically discover best strategies most suitable for a given problem."]}),Object(j.jsxs)(o.a,{variant:"h5",align:"justify",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)("b",{children:"SEAGE"})," is such hyper-heuristic framework for collaboration of metaheuristic algorithms. SEAGE allows to ",Object(j.jsx)("b",{children:"perform"})," various ",Object(j.jsx)("b",{children:"experiments"}),", ",Object(j.jsx)("b",{children:"collect data"})," from the experiments and ",Object(j.jsx)("b",{children:"evaluate"})," them. Based on this ",Object(j.jsx)("b",{children:"feedback"})," the ",Object(j.jsx)("b",{children:"new"})," hyper-heuristic ",Object(j.jsx)("b",{children:"strategies"})," can be developed."]})]})},q=Object(l.a)((function(e){return{root:{}}})),Z=function(){var e=q();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsxs)(b.a,{maxWidth:"md",children:[Object(j.jsx)(o.a,{component:"h2",variant:"h3",align:"center",color:"primary",gutterBottom:!0,children:"Publications"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{variant:"h6",align:"left",color:"textSecondary",paragraph:!0,children:"2011"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)(o.a,{variant:"h6",align:"justify",color:"textSecondary",paragraph:!0,children:["Durkota, K. - Malek, R: ",Object(j.jsx)("b",{children:"Implementation of a Discrete Firefly Algorithm Within the SEAGE Framework."})," Bachelor thesis. Prague: Czech Technical University in Prague, 2011.",Object(j.jsx)("br",{})]}),Object(j.jsx)(h.a,{href:"https://www.researchgate.net/publication/276281855_Implementation_of_a_Discrete_Firefly_Algorithm_for_the_QAP_Problem_within_the_SEAGE_Framework",children:"[ResearchGate]"})]})}),Object(j.jsx)(o.a,{variant:"h6",align:"left",color:"textSecondary",paragraph:!0,children:"2010"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)(o.a,{variant:"h6",align:"justify",color:"textSecondary",paragraph:!0,children:["Malek, R.: ",Object(j.jsx)("b",{children:"An Agent-Based Hyper-Heuristic Approach to Combinatorial Optimization Problems."})," In Proceedings of 2010 IEEE International Conference on Intelligent Computing and Intelligent Systems. New York: IEEE Press, 2010, vol. 3, p. 428-434. ISBN 978-1-4244-6583-5."]}),Object(j.jsx)(h.a,{href:"data/malek10hyper.pdf",children:"[PDF]"}),Object(j.jsx)(h.a,{href:"data/malek10hyper.bib",children:"[BibTeX]"})]})}),Object(j.jsx)(o.a,{variant:"h6",align:"left",color:"textSecondary",paragraph:!0,children:"2009"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)(o.a,{variant:"h6",align:"justify",color:"textSecondary",paragraph:!0,children:["Malek, R.: ",Object(j.jsx)("b",{children:"Collaboration of Metaheuristic Algorithms through a Multi-Agent System."})," In Holonic and Multi-Agent Systems for Manufacturing - HoloMAS 2009. Heidelberg: Springer, 2009, p. 72-81. ISBN 978-3-642-03666-8."]}),Object(j.jsx)(h.a,{href:"data/malek09col.pdf",children:"[PDF]"}),Object(j.jsx)(h.a,{href:"data/malek09col.bib",children:"[BibTeX]"})]})}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)(o.a,{variant:"h6",align:"justify",color:"textSecondary",paragraph:!0,children:["Malek, R.: ",Object(j.jsx)("b",{children:"Global Optimization through Meta-Heuristic Collaboration in a Multi-Agent System."})," Specialised study. Prague: Czech Technical University in Prague, 2009."]}),Object(j.jsx)(h.a,{href:"data/malek09specstudy.pdf",children:"[PDF]"})]})}),Object(j.jsx)(o.a,{variant:"h6",align:"left",color:"textSecondary",paragraph:!0,children:"2007"}),Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)(o.a,{variant:"h6",align:"justify",color:"textSecondary",paragraph:!0,children:["Malek, R.: ",Object(j.jsx)("b",{children:"Alternation of Meta-heuristic Algorithms with Runtime Analysis and Parameter Adaptation"})," Diploma thesis. Prague: Czech Technical University in Prague, 2007."]}),Object(j.jsx)(h.a,{href:"data/malek07thesis.pdf",children:"[PDF]"}),Object(j.jsx)(h.a,{href:"data/malek07thesis.bib",children:"[BibTeX]"})]})})]})]})})},$=a(109),ee=a(54),te=a.n(ee),ae=a(38),re=a.n(ae),ie=a.p+"static/media/researchgate.72d19f9c.svg",ne=Object(l.a)((function(e){return{links:{textAlign:"center"},linksNav:{textAlign:"left",display:"inline-block"},name:{textAlign:"center"},icon:{marginRight:e.spacing(2)}}})),ce=function(){var e=ne();return Object(j.jsx)("div",{children:Object(j.jsxs)(b.a,{maxWidth:"sm",children:[Object(j.jsx)(o.a,{component:"h2",variant:"h3",align:"center",color:"primary",gutterBottom:!0,children:"Contacts"}),Object(j.jsxs)(Q.a,{container:!0,spacing:10,className:e.arch,children:[Object(j.jsx)(Q.a,{item:!0,xs:12,sm:6,md:6,className:e.name,children:Object(j.jsxs)("div",{className:e.linksNav,children:[Object(j.jsx)(o.a,{variant:"h5",color:"primary",paragraph:!0,children:"Richard Malek"}),Object(j.jsx)(o.a,{variant:"h7",color:"textSecondary",paragraph:!0,children:"Prague"}),Object(j.jsx)(o.a,{variant:"h7",color:"textSecondary",paragraph:!0,children:"Czech Republic"})]})}),Object(j.jsx)(Q.a,{item:!0,xs:12,sm:6,md:6,className:e.links,children:Object(j.jsxs)("nav",{align:"left",className:e.linksNav,children:[Object(j.jsxs)(o.a,{variant:"h6",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)(te.a,{className:e.icon}),Object(j.jsx)(h.a,{href:"https://www.linkedin.com/in/malekric",target:"_blank",children:"LinkedIn"})]}),Object(j.jsxs)(o.a,{variant:"h6",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)(re.a,{className:e.icon}),Object(j.jsx)(h.a,{href:"https://github.com/rickq",target:"_blank",children:"GitHub"})]}),Object(j.jsxs)(o.a,{variant:"h6",color:"textSecondary",paragraph:!0,children:[Object(j.jsx)($.a,{className:e.icon,children:Object(j.jsx)("img",{src:ie,height:24,width:24,alt:"rg"})}),Object(j.jsx)(h.a,{href:"https://www.researchgate.net/profile/Richard_Malek",target:"_blank",children:"ResearchGate"})]})]})})]})]})})},se=a(115),le=a.p+"static/media/seage-logo.f4e5cccd.svg",oe=Object(l.a)((function(e){return{heroButtons:{marginTop:e.spacing(4)},icon:{marginRight:e.spacing(2)}}})),he=function(){var e=oe();return Object(j.jsxs)(b.a,{maxWidth:"sm",children:[Object(j.jsxs)(Q.a,{container:!0,spacing:6,justify:"center",alignItems:"center",children:[Object(j.jsx)(Q.a,{item:!0,children:Object(j.jsx)("img",{src:le,alt:"logo",width:"180"})}),Object(j.jsx)(Q.a,{item:!0,children:Object(j.jsx)(o.a,{component:"h1",variant:"h2",align:"center",color:"primary",gutterBottom:!0,children:"SEAGE"})})]}),Object(j.jsx)(o.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"SEAGE is a hyper-heuristic framework for collaboration of metaheuristic algorithms."}),Object(j.jsx)("div",{className:e.heroButtons,children:Object(j.jsxs)(Q.a,{container:!0,spacing:2,justify:"center",children:[Object(j.jsx)(Q.a,{item:!0,children:Object(j.jsxs)(se.a,{variant:"contained",color:"primary",href:"https://github.com/seage/seage",target:"_blank",children:[Object(j.jsx)(re.a,{className:e.icon})," Go to GitHub"]})}),Object(j.jsx)(Q.a,{item:!0,children:Object(j.jsx)(se.a,{variant:"outlined",color:"primary",href:"#basics",children:"Learn more"})})]})})]})},je=a(110),de=a(111),be=Object(l.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},icon:{marginRight:e.spacing(2)},logoText:{color:"white"},logoText2:{fontSize:"55%"},toolbarTitle:{flexGrow:1},nomenu:{marginRight:e.spacing(20)},nav:{flexGrow:1},link:{margin:e.spacing(1,2.5)},linkTarget:{paddingTop:"85px"},menu:{flexGrow:1,textAlign:"center"},image:{width:e.spacing(11),paddingRight:e.spacing(2)}}})),me=function(){var e=be();return Object(j.jsx)(je.a,{position:"fixed",elevation:0,className:e.appBar,children:Object(j.jsxs)(de.a,{className:e.toolbar,children:[Object(j.jsx)(h.a,{href:"#",color:"inherit",underline:"none",children:Object(j.jsx)("img",{src:le,alt:"logo",className:e.image})}),Object(j.jsx)(o.a,{variant:"h5",color:"inherit",noWrap:!0,children:Object(j.jsx)(h.a,{href:"#",color:"inherit",underline:"none",children:Object(j.jsx)("span",{className:e.logoText,children:"SEAGE"})})}),Object(j.jsxs)("nav",{className:e.nav,align:"center",children:[Object(j.jsx)(h.a,{variant:"button",color:"inherit",href:"#basics",className:e.link,children:"Basics"}),Object(j.jsx)(h.a,{variant:"button",color:"inherit",href:"#architecture",className:e.link,children:"Architecture"}),Object(j.jsx)(h.a,{variant:"button",color:"inherit",href:"#hyper-heuristics",className:e.link,children:"Hyper-heuristics"}),Object(j.jsx)(h.a,{variant:"button",color:"inherit",href:"#publications",className:e.link,children:"Publications"}),Object(j.jsx)(h.a,{variant:"button",color:"inherit",href:"#contacts",className:e.link,children:"Contacts"})]}),Object(j.jsx)("div",{className:e.nomenu})]})})},xe=Object(l.a)((function(e){return{link:{paddingRight:e.spacing(7)},linkTarget:{paddingTop:"85px"},main:{paddingTop:e.spacing(5)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6),marginTop:"auto"}}}));function pe(){var e=xe();return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(s.a,{}),Object(j.jsx)(me,{}),Object(j.jsxs)("main",{className:e.main,children:[Object(j.jsx)("div",{className:e.heroContent,children:Object(j.jsx)(he,{})}),Object(j.jsx)("div",{id:"basics",className:e.linkTarget}),Object(j.jsx)(J,{}),Object(j.jsx)("div",{id:"architecture",className:e.linkTarget}),Object(j.jsx)(U,{}),Object(j.jsx)("div",{id:"hyper-heuristics",className:e.linkTarget}),Object(j.jsx)(Y,{}),Object(j.jsx)("div",{id:"publications",className:e.linkTarget}),Object(j.jsx)(Z,{}),Object(j.jsx)("div",{id:"contacts",className:e.linkTarget}),Object(j.jsx)(ce,{})]}),Object(j.jsx)("footer",{className:e.footer,children:Object(j.jsx)(d,{})})]})}var Oe=a(55),ge=a(113),ue=Object(Oe.a)({palette:{primary:{main:"#314d7f"},secondary:{main:"#e37844"}}});var fe=function(){return Object(j.jsx)(ge.a,{theme:ue,children:Object(j.jsx)(pe,{})})};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(fe,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.67ca0c27.chunk.js.map