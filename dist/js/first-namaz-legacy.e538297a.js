(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["first-namaz"],{"0135":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAQCAMAAAAyGHqxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAeNQTFRFAAAAeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmjeYmj50sY4QAAAKF0Uk5TABI4JQcqfWwjBlHMrjwJAVTh2C0u2v9KAovFAxbJieJ0NOeHGRELDRATHB8mMTM3Oj9AQUJDREZISUtNUlVWWlxfYmVob3N2eYGEio2Pk5aYm52foaOkpqepqqytsLGys9zEDCEIDxUYGh0iKCkrLC8yNT1FR0xOUFheYGRmZ2lrbnBxcnV3eHq4+G3O8ILCxuTV47SMf/3yufnRV9TQtYDsMHdWAAACD0lEQVR4nGNgGGjAyMTMMtBuGBSAlY2dg3OgHTEYABc3Dy8f/0C7YhAAAUEh4YF2w6AAIqJi4gPthkEBJCTFpKQH2hGDAsjIiskNtBsGBxCWF1MYaDcMDqCoJKaMxFVRHTCXgICauoamjIqWNocOq7Cunj6TAa+hkbGJqZm5haW4lZU1l42tnb2Do5OzC7urm7sHm6eXsrePr59/QGBQcEhoWHhEZFR0dAwPTywIxMXHxycQA6B2MyeKJSFq0GSFFCiLKDOAdsWBbeXhiYmOjoqMCA8LDQkOCgzw9/P18Vb28mTzcHdzZXdxdnJ0sLezteGytrISt7QwNzM1MTYy5DVg0tfTFWbV4dDWUpHR1FBXY0jlU1NPU9VMz8jM0k7JZtbJyc3LzxcWESnQLSzU0ysCBo1BsaGxaUmpZVl5hY1tpb1DVbVTTW1dfQN7o2tTc4ubQmure1tbOwh4AEEHMQDm906xrnJ4SCjEa0BZRJkBsgxsa1ube2urgltLc5NrI3tDfV1tjVN1lYN9pa1NRXmZZWmJqbFhsQHQ40V6eoWFugUiIsL5+Xm5OTrM2SnaWZkZ6ZqqaepqfKk0TnEEQLeYWI8IlG3b2zegbhlYINMvJjbBRpOBgZ9DQWmi9kA7ZyBB8SQxsclTpk7zk5o+Q2CgHTOwwGjmLDEwmD1noJ0y0IDZJVRq7rz5CwoH2iEAFBa3pl6TXeEAAAAASUVORK5CYII="},2295:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"tour",class:e.type},[i("div",{staticClass:"content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"section"===e.type,expression:"type === 'section'"}],staticClass:"section-slide"},[i("div",{staticClass:"title"},[e._v(e._s(e.data.title))]),i("div",{staticClass:"short-desc"},[e._v(e._s(e.data.shortDesc))]),i("img",{staticClass:"moon",attrs:{src:a("0135")}}),i("img",{staticClass:"moon-m",attrs:{src:a("d0ae")}}),i("AppButton",{on:{click:e.next}},[e._v("ДАЛЕЕ")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"rukn"===e.type,expression:"type === 'rukn'"}],staticClass:"rukn-slide"},[i("div",{staticClass:"prev",on:{click:e.previous}}),i("Rukn",{ref:"rukn",attrs:{tour:"",rakaat:e.index<16?"1":"2",rakaats:"2",type:e.data.type,title:e.data.title,subTitle:e.data.subTitle,number:e.items[e.index].title,arabic:e.data.arabic,transcription:e.data.transcription,translation:e.data.translation,description:e.data.description,last:e.index===e.items.length-1},on:{next:e.next}}),i("div",{staticClass:"next",on:{click:e.next}})],1)]),i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"to-main",on:{click:function(t){e.$router.push("/")}}},[i("span",[e._v("На главную")])]),i("div",{staticClass:"left item",on:{click:e.slideProgressLeft}}),i("div",{staticClass:"items-viewport"},[i("div",{staticClass:"items",style:{left:e.progressPosition+"px"}},e._l(e.items,function(t,a){return i("div",{key:a,staticClass:"item",class:[t.type,e.$store.state.gender,{active:a===e.index}],on:{click:function(t){e.index=a}}},[t.title?i("div",{staticClass:"title"},[e._v(e._s(t.title))]):e._e(),i("div",{staticClass:"sub-title"},[e._v(e._s(t.subTitle))])])}),0)]),i("div",{staticClass:"right item",on:{click:e.slideProgressRight}})])])},d=[],s=(a("ac6a"),a("28a5"),a("cadf"),a("551c"),a("097d"),a("063c")),o=a("45c2"),n=[{type:"section",subTitle:"Тахарат",data:{title:"ТАХАРАТ",shortDesc:"Для того, чтобы читать намаз, необходимо пребывать в состоянии ритуальной чистоты.\n                Этого можно достичь с помощью полного и малого омовения."}},{type:"rukn ghusl",title:"1",data:{type:"wudu ghusl",title:"ГУСЛЬ",subTitle:"Полное омовение",description:"Совершение намаза требует от мусульманина состояния ритуальной чистоты, которое\n              достигается омовением.</br>\n              </br>\n              <strong>Полное омовение (гусль) требуется</strong> в случае имевшихся половых\n              отношений, даже если они не сопровождались оргазмом. Всего у гусля три действия:</br>\n              </br>\n              1. Омыть водой тело целиком</br>\n              2. Промыть полость рта</br>\n              3. Промыть носовую полость</br>\n              </br>\n              Необходимо, чтобы вода полностью омыла кожу, волосы, все складки\n              и углубления тела."}},{type:"rukn wudu-face",title:"2",data:{type:"wudu face",description:"Аллаху Акбар!"}},{type:"rukn wudu-hands",title:"3",data:{type:"wudu full-hands",description:"Аллаху Акбар!"}},{type:"rukn wudu-head",title:"4",data:{type:"wudu head",description:"Аллаху Акбар!"}},{type:"rukn wudu-legs",title:"5",data:{type:"wudu legs",description:"Аллаху Акбар!"}},{type:"section",title:"1",subTitle:"ракаат",data:{title:"1 РАКААТ",shortDesc:"Обзор первого ракаата учебного намаза. В качестве примера взят утренний намаз Фаджр,\n                состоящий из двух ракаатов. Первый ракаат состоит всего из девяти действий."}},{type:"rukn niet",title:"1",data:{type:"niet",description:"Аллаху Акбар!"}},{type:"rukn takbir",title:"2",data:{type:"takbir",description:"Аллаху Акбар!"}},{type:"rukn qiyam",title:"3",data:{type:"qiyam",description:"Аллаху Акбар!"}},{type:"rukn qiyam",title:"4",data:{type:"qiraat",description:"Аллаху Акбар!"}},{type:"rukn ruku",title:"5",data:{type:"ruku",description:"Аллаху Акбар!"}},{type:"rukn niet",title:"6",data:{type:"straight-up",description:"Аллаху Акбар!"}},{type:"rukn sadjda",title:"7",data:{type:"sadjda",description:"Аллаху Акбар!"}},{type:"rukn sitting",title:"8",data:{type:"sitting",description:"Аллаху Акбар!"}},{type:"rukn sadjda",title:"9",data:{type:"sadjda-2",description:"Аллаху Акбар!"}},{type:"section",title:"2",subTitle:"ракаат",data:{title:"2 РАКААТ",shortDesc:"Продолжаем быстрый обзор учебного намаза и переходим ко второму ракаату,\n                который состоит из одинадцати действий."}},{type:"rukn qiyam",title:"10",data:{type:"qiyam",description:"Аллаху Акбар!"}},{type:"rukn qiyam",title:"11",data:{type:"qiraat",description:"Аллаху Акбар!"}},{type:"rukn ruku",title:"12",data:{type:"ruku",description:"Аллаху Акбар!"}},{type:"rukn niet",title:"13",data:{type:"straight-up",description:"Аллаху Акбар!"}},{type:"rukn sadjda",title:"14",data:{type:"sadjda",description:"Аллаху Акбар!"}},{type:"rukn sitting",title:"15",data:{type:"sitting",description:"Аллаху Акбар!"}},{type:"rukn sadjda",title:"16",data:{type:"sadjda-2",description:"Аллаху Акбар!"}},{type:"rukn sitting",title:"17",data:{type:"tashahhud",description:"Аллаху Акбар!"}},{type:"rukn salam-right",title:"18",data:{type:"salam-right",title:"САЛЯМ",arabic:'<div dir="rtl"><span style="font-size:24px;">السلام عليكم ورحمة \n            <span style="color:#FF0000;">الله</span><br></span></div>',description:"После чтения салавата и дуа молящийся поворачивает голову направо\n                  и произносит салям. При этом молящийся смотрит на край своего плеча.",transcription:"Ассаляму алейкум уа рахматуллах!",translation:"Мир вам и милость Аллаха!"}},{type:"rukn salam-left",title:"19",data:{type:"salam-left",title:"САЛЯМ",arabic:'<div dir="rtl"><span style="font-size:24px;">السلام عليكم ورحمة \n            <span style="color:#FF0000;">الله</span><br></span></div>',description:"Затем, поворачивая голову налево, он второй раз произносит салям.\n                  При этом молящийся смотрит на край своего плеча.",transcription:"Ассаляму алейкум уа рахматуллах!",translation:"Мир вам и милость Аллаха!"}},{type:"rukn dua",title:"20",data:{type:"dua",description:"Аллаху Акбар!"}}],Y=a("bc3a"),r=a.n(Y),m={data:function(){return{index:0,items:n,progressPosition:0}},computed:{type:function(){return this.items[this.index].type.split(" ")[0]},data:function(){return this.items[this.index].data}},watch:{index:function(){var e=this;this.$nextTick(function(){e.$refs.rukn.reset()})}},methods:{previous:function(){this.index>0&&this.index--,this.normalizeProgressPosition()},next:function(){this.index<this.items.length-1&&this.index++,this.normalizeProgressPosition(),this.$scrollTo("body")},normalizeProgressPosition:function(){var e=this.getProgressMaxPosition();this.index<5?this.progressPosition=0:this.index<9?this.progressPosition=e/5:this.index<14?this.progressPosition=e/5*2:this.index<19?this.progressPosition=e/5*3:this.index<23?this.progressPosition=e/5*4:this.progressPosition=e},slideProgressLeft:function(){this.progressPosition+=50,this.progressPosition>0&&(this.progressPosition=0)},slideProgressRight:function(){var e=this.getProgressMaxPosition();this.progressPosition-=50,this.progressPosition<e&&(this.progressPosition=e)},getProgressMaxPosition:function(){var e=document.querySelector(".tour .items-viewport .item").offsetWidth;return-28*e+document.querySelector(".items-viewport").offsetWidth},getData:function(){var e=this,t=this.$store.state.gender;r.a.get("/api/namaz/tour/".concat(t)).then(function(t){t.data.wudu.forEach(function(t,a){var i=e.items[a+2].data;i.title=t.kindLabel.toUpperCase(),i.description=t.text})}),r.a.get("/api/namaz/namaz/".concat(t,"/fadjr/fard")).then(function(t){t.data.rakaats.forEach(function(t,a){var i=0===a?7:17;t.rukns.forEach(function(t,d){if(1===a&&8===d)i++;else{var s=e.items[d+i].data;e.setData(s,t)}})})})},setData:function(e,t){e.title=t.title,e.subTitle=t.subTitle,e.arabic=t.arabic,e.description=t.description,e.transcription=t.transcription,e.translation=t.translation}},created:function(){this.getData(),this.$store.commit("setMobileHeaderStatus","Мой первый намаз")},components:{Rukn:s["a"],AppButton:o["a"]}},c=m,j=(a("e15a"),a("2877")),g=Object(j["a"])(c,i,d,!1,null,"502b2cdf",null);g.options.__file="Tour.vue";t["default"]=g.exports},"6abc":function(e,t,a){},d0ae:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsgAAAAqCAMAAACZZl3kAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtxQTFRFAAAAAICAbYCSbYCbaYeWdYaedYagdYahdYehdYegdIadYICfdYWfdoegdoegdoehdYagdIWhdIWfdoagdYagdIagQICAdoegdYagcYShdIOfdYagdIahdYehdoegc4SgdYOgdYCfdoahdYegdoagbW2SaoCVdYagdYehc4ScdYahAAAAdYagdYafdYegdoehcYeec4aecoSedYWhdYegdoagdYehdoahdoahdoagdYehdYehdYegdoehdYehdoagdYegdoegdYagdYegdYagdYahdYagdYagdYahdYahdoehdYagdoagdoahdoegdoegdYagdoahdoagdYahdYahdYagdYegdYegdYehdYegdYegdYWgdYagdIWhdYagdoagdoagdoagdoahdIehdYagdYahdoWgdYagdoWhdoWfdYagdIefdYagdYafdoWfdYagdoWgdYWgdYWhdIagdYWfdYWgdoefdIafdYWfdIagdYWgdoegdYegdIWgc4ahc4afdoafdoagdISfdIWgdYefdYegdIeedIOedYafdYagcoSfdoSdc4egcoKccoKdcYKfcYKgc4aec4afdoOddYOfcYecdIObcICfb4CZcoSecIWZdICXbYaec4CZa4aUcYCcdoehdoahdYagdYagdoagdYegdoehdYahdoahdYagdYagdoegdYahdYegdoagdIahdoahdoahdYahdYefdIefdYagdIehdYahdYagdoefdYagdoegdIWfdYefdYSgdIShdISec4Whc4Wec4Wfc4SddIaec4efdYWedIWhcIObcoaadoCdb4WbdYahdHSLdYehdoahdoehdoegdoahdoehdYagdYagdYehdYehdYahdYahdYegdoagdIegdIafdIafdIehdoafdYeedYafcYShdIWcdoagcICfdYagdYegZneZdnadZmaZdoagZoCZdoehcXGOdoehdYagVYCAvJ4J5AAAAPR0Uk5TAAIOHBFMi8vYjjkIYMHw/+RcWPXiYwTUvBtAuWf+zD4jGOysngcMr6of8QHKhfp3Il86ZIz9/Pv59/b08u7r6OXf3NrX09HNyMbDvrq4trSx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"},e15a:function(e,t,a){"use strict";var i=a("6abc"),d=a.n(i);d.a}}]);