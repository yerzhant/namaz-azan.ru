(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shart"],{d201:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"condition"},[s("Banner",{attrs:{type:"shart "+t.$store.state.namaz,title:t.title,shortDesc:t.shortDesc,desc:t.desc,descTopBorder:"",descBottomBorder:"",descStyleBlackBlue0:""}}),s("AppSection",{attrs:{title:t.title,regular:""}},[s("section",{staticClass:"admin-text"},t._l(t.sections,function(e){return s("section",{key:e.id,staticClass:"admin-section"},[e.title?s("h2",{staticClass:"admin-header"},[t._v(t._s(e.title))]):t._e(),s("div",{domProps:{innerHTML:t._s(e.text)}})])}),0)]),s("div",{staticClass:"line"}),t._e(),s("AppSection",{staticClass:"general-provisions",attrs:{title:"ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА",regular:"",bg1:"",fullContentWidth:"",noBottomPadding:""}},[s("GeneralProvisions",{attrs:{initialIndex:t.nextGeneralProvisionIndex}})],1),s("AppSection",{staticClass:"mobile-general-provisions",attrs:{title:"ОБЩИЕ ПОЛОЖЕНИЯ НАМАЗА",regular:""}},[s("MobileGeneralProvisions")],1),s("Banner",{attrs:{type:"namaz-detailed short",title:"НАМАЗ: ПОДРОБНО",shortDesc:"Детализированное обучение намазу",desc:"Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам       понять принцип исполнения большинства намазов. Если Вы научитесь       читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!",descTopBorder:""}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/tutorial/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),s("div",{staticClass:"line"}),s("AppSection",{attrs:{title:"ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ",regular:"",bg1:""}},[s("div",{staticClass:"fards"},[s("Banner",{attrs:{type:"fard fadjr",shadow:"fadjr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ФАДЖР",shortDesc:"Утренний намаз",desc:"Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов               фарда. Фаджр является первым из пяти обязательных намазов."}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/fadjr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),s("Banner",{attrs:{type:"fard dhuhr",shadow:"dhuhr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ЗУХР",shortDesc:"Обеденный намаз",desc:"Детальный обзор обеденного намаза “Зухр”, состоящего из 4 ракаатов               фарда. Зухр является вторым из пяти обязательных намазов."}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/dhuhr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),s("Banner",{attrs:{type:"fard asr",shadow:"asr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"АСР",shortDesc:"Полуденный намаз",desc:"Детальный обзор послеполуденного намаза “Аср”, состоящего из 4               ракаатов фарда. Аср является третьим из пяти обязательных намазов."}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/asr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),s("Banner",{attrs:{type:"fard maghrib",shadow:"maghrib"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"МАГРИБ",shortDesc:"Вечерний намаз",desc:"Детальный обзор вечернего намаза “Магриб”, состоящего из 3 ракаатов               фарда. Магриб является четвёртым из пяти обязательных намазов."}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/maghrib/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),s("Banner",{attrs:{type:"fard isha",shadow:"isha"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ИША",shortDesc:"Ночной намаз",desc:"Детальный обзор ночного намаза “Иша”, состоящего из 4 ракаатов               фарда. Иша является последним из пяти обязательных намазов."}},[s("template",{slot:"buttons"},[s("AppButton",{attrs:{link:t.routePrefix+"/isha/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2)],1)])],1)},r=[],i=s("b5dd"),n=s("45c2"),o=s("84af"),l=s("ba61"),c=s("bfb5"),d=s("f637"),u=s("bc3a"),h=s.n(u),p={data(){return{title:null,shortDesc:null,desc:null,sections:null}},methods:{getData(){let t="Условия намаза";this.isShart||(t="Общие положения");const e=this.$route.params.type;this.$store.commit("setMobileHeaderStatus",t),this.$store.commit("setNamaz",e),this.$store.commit("setMenu",null),h.a.get(`/api/namaz/shart/${e}`).then(t=>{this.title=t.data.title,this.shortDesc=t.data.shortDesc,this.desc=t.data.desc,this.sections=t.data.sections})}},computed:{isShart(){return"shart"===this.$route.params.section},isShuruut(){return"shuruut"===this.$route.params.type},nextGeneralProvisionIndex(){switch(this.$route.params.type){case"ma-hiya":return 1;case"aqsaam":return 2;case"shuruut":return 3;case"azan-iqamat":return 4;case"aadaab":case"fasaad":return 5;default:return 0}}},watch:{$route(){this.getData()}},created(){this.getData()},components:{AppSection:i["a"],AppButton:n["a"],Banner:o["a"],GeneralProvisions:l["a"],MobileGeneralProvisions:c["a"]},mixins:[d["a"]]},m=p,f=(s("da6a"),s("2877")),B=Object(f["a"])(m,a,r,!1,null,"33264be8",null);e["default"]=B.exports},da6a:function(t,e,s){"use strict";var a=s("fd79"),r=s.n(a);r.a},fd79:function(t,e,s){}}]);