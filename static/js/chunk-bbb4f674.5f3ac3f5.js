(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbb4f674"],{"3a5c":function(e,t,r){"use strict";r("5f36")},"5f36":function(e,t,r){},"6d5b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"widgetBox",staticClass:"sketch-comp-inner widget-container img-chunk",class:{"is-loaded":e.base64},staticStyle:{width:"100%",height:"100%",overflow:"hidden"},style:{"background-color":e.config.style.fills["enabled"]?e.config.style.fills["color"]:"transparent","border-style":e.config.style.border["enabled"]?e.config.style.border["style"]:"none","border-color":e.config.style.border["color"],"border-width":e.config.style.border["width"]+"px","border-radius":e.config.style.border["radius"].reduce((function(e,t){return e+(t+"px ")}),""),visibility:e.config.edit.visible?"visible":"hidden",opacity:e.config.edit.opacity}},[e.config.style.img.url?r("img",{style:{width:"100%",height:"100%"},attrs:{alt:"",src:e.base64||e.config.style.img.url}}):r("img",{style:{width:"100%",height:"100%"},attrs:{src:e.config.style.img.base64,alt:""}})])},i=[],a=r("1da1"),c=(r("96cf"),r("d3b7"),r("27d4")),o=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(r=e.sent,200===r.status){e.next=5;break}return e.abrupt("return","");case 5:return e.next=7,r.blob();case 7:return n=e.sent,e.abrupt("return",new Promise((function(e){var t=new FileReader;t.readAsDataURL(n),t.onloadend=function(){var r=t.result;e(r)}})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s={name:"ItemImage",props:{config:{type:Object,default:function(){return c["a"]["basic"]["image"]}},dataSource:{type:Array,default:function(){return[{label:"label",value:!1,type:"boolean"}]}},mode:{type:String,default:"editor"}},data:function(){return{base64:""}},computed:{},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=["","https://api.allorigins.win/raw?url=","https://cors.eu.org/","https://scrappy-php.herokuapp.com/?url="],n=0,i=r;case 2:if(!(n<i.length)){t.next=19;break}return a=i[n],t.prev=4,t.next=7,o(a+e.config.style.img.url);case 7:c=t.sent,e.base64=c,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](4),console.log(a+e.config.style.img.url+" "+t.t0);case 14:if(""===e.base64){t.next=16;break}return t.abrupt("break",19);case 16:n++,t.next=2;break;case 19:case"end":return t.stop()}}),t,null,[[4,11]])})))()},editableChange:function(){this.$nextTick((function(){}))}}},u=s,l=(r("3a5c"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,"3245b0d3",null);t["default"]=d.exports}}]);