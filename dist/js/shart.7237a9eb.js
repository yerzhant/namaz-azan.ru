(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shart"],{"31b3":function(t,e,a){},d201:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"condition"},[a("Banner",{attrs:{type:"shart "+t.$store.state.namaz,title:t.title,shortDesc:t.shortDesc,desc:t.desc,descTopBorder:"",descBottomBorder:"",descStyleBlackBlue0:""}}),a("AppSection",{attrs:{title:t.title,regular:""}},[a("section",{staticClass:"admin-text"},t._l(t.sections,function(e){return a("section",{key:e.id,staticClass:"admin-section"},[e.title?a("h2",{staticClass:"admin-header"},[t._v(t._s(e.title))]):t._e(),a("div",{domProps:{innerHTML:t._s(e.text)}})])}),0)]),a("div",{staticClass:"line"}),t._e(),a("AppSection",{staticClass:"general-provisions",attrs:{title:"ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА",regular:"",bg1:"",fullContentWidth:"",noBottomPadding:""}},[a("GeneralProvisions",{attrs:{initialIndex:t.nextGeneralProvisionIndex}})],1),a("AppSection",{staticClass:"mobile-general-provisions",attrs:{title:"ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА",regular:""}},[a("MobileGeneralProvisions")],1),a("Banner",{attrs:{type:"namaz-detailed short",title:"НАМАЗ: ПОДРОБНО",shortDesc:"Детализированное обучение намазу",desc:"Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам       понять принцип исполнения большинства намазов. Если Вы научитесь       читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!",descTopBorder:""}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/tutorial/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("div",{staticClass:"line"}),a("AppSection",{attrs:{title:"ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ",regular:"",bg1:""}},[a("div",{staticClass:"fards"},[a("Banner",{attrs:{type:"fard fadjr",shadow:"fadjr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ФАДЖР",shortDesc:"Утренний намаз",desc:"Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов               фарда. Фаджр является первым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/fadjr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard dhuhr",shadow:"dhuhr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ЗУХР",shortDesc:"Обеденный намаз",desc:"Детальный обзор обеденного намаза “Зухр”, состоящего из 4 ракаатов               фарда. Зухр является вторым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/dhuhr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard asr",shadow:"asr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"АСР",shortDesc:"Полуденный намаз",desc:"Детальный обзор послеполуденного намаза “Аср”, состоящего из 4               ракаатов фарда. Аср является третьим из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/asr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard maghrib",shadow:"maghrib"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"МАГРИБ",shortDesc:"Вечерний намаз",desc:"Детальный обзор вечернего намаза “Магриб”, состоящего из 3 ракаатов               фарда. Магриб является четвёртым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/maghrib/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard isha",shadow:"isha"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ИША",shortDesc:"Ночной намаз",desc:"Детальный обзор ночного намаза “Иша”, состоящего из 4 ракаатов               фарда. Иша является последним из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:t.routePrefix+"/isha/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2)],1)])],1)},r=[],i=a("b5dd"),n=a("45c2"),o=a("84af"),l=a("ba61"),c=a("bfb5"),u=a("f637"),d=a("bc3a"),h=a.n(d),p={data:function(){return{title:null,shortDesc:null,desc:null,sections:null}},methods:{getData:function(){var t=this,e="Условия намаза";this.isShart||(e="Общие положения");var a=this.$route.params,s=a.type,r=a.madhhab;this.$store.commit("setMobileHeaderStatus",e),this.$store.commit("setNamaz",s),this.$store.commit("setMenu",null),h.a.get("/api/namaz/shart/".concat(r,"/").concat(s)).then(function(e){t.title=e.data.title,t.shortDesc=e.data.shortDesc,t.desc=e.data.desc,t.sections=e.data.sections})}},computed:{isShart:function(){return"shart"===this.$route.params.section},isShuruut:function(){return"shuruut"===this.$route.params.type},nextGeneralProvisionIndex:function(){switch(this.$route.params.type){case"ma-hiya":return 1;case"aqsaam":return 2;case"shuruut":return 3;case"azan-iqamat":return 4;case"aadaab":case"fasaad":return 5;default:return 0}}},watch:{$route:function(){this.getData()}},created:function(){this.getData()},components:{AppSection:i["a"],AppButton:n["a"],Banner:o["a"],GeneralProvisions:l["a"],MobileGeneralProvisions:c["a"]},mixins:[u["a"]]},m=p,f=(a("ee39"),a("2877")),b=Object(f["a"])(m,s,r,!1,null,"9b4a5746",null);e["default"]=b.exports},ee39:function(t,e,a){"use strict";var s=a("31b3"),r=a.n(s);r.a}}]);