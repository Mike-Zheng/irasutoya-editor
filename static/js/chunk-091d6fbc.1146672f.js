(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-091d6fbc"],{"0028":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"widgetBox",staticClass:"sketch-comp-inner widget-container widget-group",staticStyle:{width:"100%",height:"100%",position:"relative"},style:{"border-style":e.config.style.border["enabled"]?e.config.style.border["style"]:"none","border-color":e.config.style.border["color"],"border-width":e.config.style.border["width"]+"px","border-radius":e.config.style.border["radius"].map((function(e){return e+"px"})).join(" "),visibility:e.config.edit.visible?"visible":"hidden",opacity:e.config.edit.opacity}},e._l(e.config.layers,(function(t){return i("sketch-comps",{key:t.$id,staticClass:"sketch-comp",staticStyle:{visiblity:"inherit"},attrs:{"iner-comp":t.$id,w:t.frame.width,h:t.frame.height,x:t.frame.x,y:t.frame.y,parent:!1,draggable:!1,resizable:!1,"scale-ratio":e.editScale,"class-name-handle":"sketch-comp__handle"}},["group"===t.$class?i("item-group",{attrs:{mode:"editor",config:t}}):i(t.type._template,{tag:"component",attrs:{mode:"editor",config:t}})],1)})),1)},n=[],r=i("27d4"),a={name:"ItemGroup",props:{config:{type:Object,default:function(){return r["a"]["default"]["group"]}},dataSource:{type:Array,default:function(){return[{label:"label",value:!1,type:"boolean"}]}},mode:{type:String,default:"editor"}},data:function(){return{}},computed:{editScale:function(){return this.$store.state.editor.viewOption.editScale}},mounted:function(){},methods:{editableChange:function(){this.$nextTick((function(){}))}}},c=a,d=(i("f532"),i("2877")),s=Object(d["a"])(c,o,n,!1,null,"1f979c14",null);t["default"]=s.exports},dfaf:function(e,t,i){},f532:function(e,t,i){"use strict";i("dfaf")}}]);