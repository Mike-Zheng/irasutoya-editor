(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8e69c9c"],{"37bc":function(t,e,o){"use strict";o("fdbb")},d6fd:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.unfocus,expression:"unfocus"}],ref:"widgetBox",staticClass:"sketch-comp-inner widget-container",staticStyle:{width:"100%",height:"100%"},style:{"background-color":t.config.style.fills["enabled"]?t.config.style.fills["color"]:"transparent","border-style":t.config.style.border["enabled"]?t.config.style.border["style"]:"none","border-color":t.config.style.border["color"],"border-width":t.config.style.border["width"]+"px","border-radius":t.config.style.border["radius"].reduce((function(t,e){return t+(e+"px ")}),""),visibility:t.config.edit.visible?"visible":"hidden",opacity:t.config.edit.opacity},on:{dblclick:t.focus}},[o("contenteditable",{staticClass:"contenteditable-area",style:{color:t.config.style.text["fontColor"],fontSize:t.config.style.text["fontSize"]+"px",fontWeight:t.config.style.text["bold"]?"bold":"normal",fontStyle:t.config.style.text["italic"]?"italic":"normal",textDecoration:t.config.style.text["underline"]?"underline":"initial",textTransform:t.config.style.text["textTransform"],textAlign:t.config.style.text["textAlign"],fontFamily:t.config.style.text["fontFamily"]},attrs:{tag:"div",contenteditable:t.isFocus,"no-n-l":!1,"no-h-t-m-l":!0},model:{value:t.config.style.text.text,callback:function(e){t.$set(t.config.style.text,"text",e)},expression:"config.style.text.text"}})],1)},i=[],c=o("27d4"),l={name:"ItemText",props:{config:{type:Object,default:function(){return c["a"]["default"]["ItemText"]}},dataSource:{type:Array,default:function(){return[{label:"label",value:!1,type:"boolean"}]}},mode:{type:String,default:"editor"}},data:function(){return{isFocus:!1}},computed:{},mounted:function(){},methods:{editableChange:function(){this.$nextTick((function(){}))},unfocus:function(){if(this.isFocus){console.log("unfocus");var t=document.createElement("input");document.body.appendChild(t),t.focus(),document.body.removeChild(t),this.isFocus=!1}},focus:function(){console.log("focus"),this.isFocus=!0}}},s=l,r=(o("37bc"),o("2877")),a=Object(r["a"])(s,n,i,!1,null,"30bb7144",null);e["default"]=a.exports},fdbb:function(t,e,o){}}]);