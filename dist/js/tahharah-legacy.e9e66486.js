(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tahharah"],{6282:function(t,e,a){},ae32:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"tahharah"},[a("NamazHeader",{attrs:{type:"tahharah "+t.$store.state.namaz,title:"ГУСЛЬ",subTitle:"Полное омовение",shortDesc:"После совершения определенных действий Шариат предписывает                мусульманину совершить ритуальное купание – омовение водой всего                тела целиком. По-арабски полное омовение носит название «гусль»."}}),a("section",{staticClass:"admin-text"},t._l(t.sections,function(e){return a("section",{key:e.id,staticClass:"section",attrs:{id:"section-"+e.id}},[a("h2",{staticClass:"header"},[t._v(t._s(e.title))]),a("div",{domProps:{innerHTML:t._s(e.text)}})])}),0),a("div",{staticClass:"line"}),a("AppSection",{attrs:{title:"ДРУГИЕ ВИДЫ ОЧИЩЕНИЯ"}},[a("div",{staticClass:"fards"},[a("Banner",{attrs:{type:"fard ghusl blue",shadow:"ghusl"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ГУСЛЬ",shortDesc:"Полное омовение",desc:"Полное ритуальное омовение водой всего тела целиком. По-арабски               полное омовение носит название “Гусль”."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/tahharah/ghusl",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard wudu blue",descStyleBlackBlue:"",descWithMargin2:"",title:"ВУДУ (ТАХАРАТ)",shortDesc:"Малое омовение",desc:"Малое омовение является доступным и простым способом очищения               однако, в ряде случаев, для достижения ритуальной чистоты нужен гусль."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/tahharah/wudu",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2)],1)]),a("Banner",{attrs:{type:"namaz-detailed short",title:"НАМАЗ: ПОДРОБНО",shortDesc:"Детализированное обучение намазу",desc:"Детальный обзор намаза “Зухр” состоящий из 4 ракаатов позволит Вам       понять принцип исполнения большинства намазов. Если Вы научитесь       читать “Зухр” - Вы сможете читать и другие намазы. Рекомендуем!",descUpBorder:""}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/tutorial/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("div",{staticClass:"line"}),a("AppSection",{attrs:{title:"ОБЯЗАТЕЛЬНЫЕ НАМАЗЫ",bg1:""}},[a("div",{staticClass:"fards"},[a("Banner",{attrs:{type:"fard fadjr",shadow:"fadjr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ФАДЖР",shortDesc:"Утренний намаз",desc:"Детальный обзор утреннего намаза “Фаджр”, состоящего из 2 ракаатов               фарда. Фаджр является первым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/fadjr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard dhuhr",shadow:"dhuhr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ЗУХР",shortDesc:"Обеденный намаз",desc:"Детальный обзор обеденного намаза “Зухр”, состоящего из 4 ракаатов               фарда. Зухр является вторым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/dhuhr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard asr",shadow:"asr"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"АСР",shortDesc:"Полуденный намаз",desc:"Детальный обзор послеполуденного намаза “Аср”, состоящего из 4               ракаатов фарда. Аср является третьим из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/asr/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard maghrib",shadow:"maghrib"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"МАГРИБ",shortDesc:"Вечерний намаз",desc:"Детальный обзор вечернего намаза “Магриб”, состоящего из 3 ракаатов               фарда. Магриб является четвёртым из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/maghrib/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2),a("Banner",{attrs:{type:"fard isha",shadow:"isha"===t.$store.state.namaz,descStyleBlackBlue:"",descWithMargin2:"",title:"ИША",shortDesc:"Ночной намаз",desc:"Детальный обзор обеденного намаза “Иша”, состоящего из 4 ракаатов               фарда. Иша является последним из пяти обязательных намазов."}},[a("template",{slot:"buttons"},[a("AppButton",{attrs:{link:"/isha/fard",blue:"",height:36}},[t._v("НАЧАТЬ ОБУЧЕНИЕ")])],1)],2)],1)])],1)},r=[],n=(a("cadf"),a("551c"),a("097d"),a("c9a8")),i=a("b5dd"),l=a("45c2"),o=a("063c"),c=a("84af"),d=a("bc3a"),h=a.n(d),u={data:function(){return{sections:null}},methods:{getData:function(){var t=this,e=this.$route.params.type;this.$store.commit("setNamaz",e),this.$store.commit("setMenu","level-2"),h.a.get("/api/namaz/".concat(e)).then(function(e){t.sections=e.data.sections,t.$store.commit("setMenuItems",e.data.menu)})}},created:function(){this.getData(),this.$store.commit("setMobileHeaderStatus","Тахарат")},components:{NamazHeader:n["a"],AppSection:i["a"],AppButton:l["a"],Rukn:o["a"],Banner:c["a"]}},p=u,m=(a("d9f5"),a("2877")),f=Object(m["a"])(p,s,r,!1,null,"7ef4d840",null);f.options.__file="Tahharah.vue";e["default"]=f.exports},d9f5:function(t,e,a){"use strict";var s=a("6282"),r=a.n(s);r.a}}]);