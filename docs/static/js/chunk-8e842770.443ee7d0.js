(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e842770"],{"0342":function(e,t,a){(function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function a(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}function s(e){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(e)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function n(e,t){e.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function i(e){var t=e.g.offsetWidth,a=t+100;return e.j.style.width=a+"px",e.i.scrollLeft=a,e.h.scrollLeft=e.h.scrollWidth+100,e.l!==t&&(e.l=t,!0)}function r(e,a){function s(){var e=n;i(e)&&null!==e.g.parentNode&&a(e.l)}var n=e;t(e.h,s),t(e.i,s),i(e)}function o(e,t,a){t=t||{},a=a||window,this.family=e,this.style=t.style||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"normal",this.context=a}var l=null,c=null,d=null,h=null;function u(e){return null===c&&(g(e)&&/Apple/.test(window.navigator.vendor)?(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!e&&603>parseInt(e[1],10)):c=!1),c}function g(e){return null===h&&(h=!!e.document.fonts),h}function f(e,t){var a=e.style,s=e.weight;if(null===d){var n=document.createElement("div");try{n.style.font="condensed 100px sans-serif"}catch(i){}d=""!==n.style.font}return[a,s,d?e.stretch:"","100px",t].join(" ")}o.prototype.load=function(e,t){var i=this,o=e||"BESbswy",c=0,d=t||3e3,h=(new Date).getTime();return new Promise((function(e,t){if(g(i.context)&&!u(i.context)){var p=new Promise((function(e,t){function a(){(new Date).getTime()-h>=d?t(Error(d+"ms timeout exceeded")):i.context.document.fonts.load(f(i,'"'+i.family+'"'),o).then((function(t){1<=t.length?e():setTimeout(a,25)}),t)}a()})),m=new Promise((function(e,t){c=setTimeout((function(){t(Error(d+"ms timeout exceeded"))}),d)}));Promise.race([m,p]).then((function(){clearTimeout(c),e(i)}),t)}else a((function(){function a(){var t;(t=-1!=v&&-1!=x||-1!=v&&-1!=y||-1!=x&&-1!=y)&&((t=v!=x&&v!=y&&x!=y)||(null===l&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=l&&(v==w&&x==w&&y==w||v==b&&x==b&&y==b||v==k&&x==k&&y==k)),t=!t),t&&(null!==N.parentNode&&N.parentNode.removeChild(N),clearTimeout(c),e(i))}function u(){if((new Date).getTime()-h>=d)null!==N.parentNode&&N.parentNode.removeChild(N),t(Error(d+"ms timeout exceeded"));else{var e=i.context.document.hidden;!0!==e&&void 0!==e||(v=g.g.offsetWidth,x=p.g.offsetWidth,y=m.g.offsetWidth,a()),c=setTimeout(u,50)}}var g=new s(o),p=new s(o),m=new s(o),v=-1,x=-1,y=-1,w=-1,b=-1,k=-1,N=document.createElement("div");N.dir="ltr",n(g,f(i,"sans-serif")),n(p,f(i,"serif")),n(m,f(i,"monospace")),N.appendChild(g.g),N.appendChild(p.g),N.appendChild(m.g),i.context.document.body.appendChild(N),w=g.g.offsetWidth,b=p.g.offsetWidth,k=m.g.offsetWidth,u(),r(g,(function(e){v=e,a()})),n(g,f(i,'"'+i.family+'",sans-serif')),r(p,(function(e){x=e,a()})),n(p,f(i,'"'+i.family+'",serif')),r(m,(function(e){y=e,a()})),n(m,f(i,'"'+i.family+'",monospace'))}))}))},e.exports=o})()},"0481":function(e,t,a){"use strict";var s=a("23e7"),n=a("a2bf"),i=a("7b0b"),r=a("07fa"),o=a("5926"),l=a("65f0");s({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),a=r(t),s=l(t,0);return s.length=n(s,t,t,a,0,void 0===e?1:o(e)),s}})},"0994":function(e,t,a){},4069:function(e,t,a){var s=a("44d2");s("flat")},"4e82":function(e,t,a){"use strict";var s=a("23e7"),n=a("e330"),i=a("59ed"),r=a("7b0b"),o=a("07fa"),l=a("577e"),c=a("d039"),d=a("addb"),h=a("a640"),u=a("04d1"),g=a("d998"),f=a("2d00"),p=a("512ce"),m=[],v=n(m.sort),x=n(m.push),y=c((function(){m.sort(void 0)})),w=c((function(){m.sort(null)})),b=h("sort"),k=!c((function(){if(f)return f<70;if(!(u&&u>3)){if(g)return!0;if(p)return p<603;var e,t,a,s,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)m.push({k:t+s,v:a})}for(m.sort((function(e,t){return t.v-e.v})),s=0;s<m.length;s++)t=m[s].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),N=y||!w||!b||!k,C=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:l(t)>l(a)?1:-1}};s({target:"Array",proto:!0,forced:N},{sort:function(e){void 0!==e&&i(e);var t=r(this);if(k)return void 0===e?v(t):v(t,e);var a,s,n=[],l=o(t);for(s=0;s<l;s++)s in t&&x(n,t[s]);d(n,C(e)),a=n.length,s=0;while(s<a)t[s]=n[s++];while(s<l)delete t[s++];return t}})},a2bf:function(e,t,a){"use strict";var s=a("da84"),n=a("e8b5"),i=a("07fa"),r=a("0366"),o=s.TypeError,l=function(e,t,a,s,c,d,h,u){var g,f,p=c,m=0,v=!!h&&r(h,u);while(m<s){if(m in a){if(g=v?v(a[m],m,t):a[m],d>0&&n(g))f=i(g),p=l(e,t,g,f,p,d-1)-1;else{if(p>=9007199254740991)throw o("Exceed the acceptable array length");e[p]=g}p++}m++}return p};e.exports=l},c740:function(e,t,a){"use strict";var s=a("23e7"),n=a("b727").findIndex,i=a("44d2"),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(r)},c7d4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root",staticStyle:{"background-color":"#fff"}},[a("textarea",{ref:"textArea",staticStyle:{display:"none"},on:{keydown:e.handleKeyDown,blur:e.handleBlur}}),e._v(" "),a("el-container",[a("el-container",[a("el-aside",{staticClass:"leftPart",attrs:{width:"4%"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"箭头",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("arrow")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"三角形",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("triangle")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"四边形",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("rect")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"五边形",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("pentagon")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"六边形",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("hexagon")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"椭圆",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("circle")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"弧形",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("arc")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"铅笔",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("line")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1),a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"文字",placement:"right"}},[a("div",{staticStyle:{"font-size":"36px",cursor:"pointer"},on:{click:function(t){return e.changeArrowType("text")}}},[a("svg-icon",{attrs:{"icon-class":"404"}})],1)])],1)],1)],1),a("el-main",[a("v-stage",{ref:"stage",attrs:{config:e.configKonva},on:{mousedown:e.handleMouseDown,mousemove:e.handleMouseMove,mouseup:e.handleMouseUp,click:e.handleClick}},[a("v-layer",{ref:"layer",attrs:{draggable:"true"},on:{dragmove:e.onLayerDragMove,dragend:e.onLayerDragEnd}},[e._l(e.rects,(function(e){return a("v-rect",{key:e.name,attrs:{config:{x:Math.min(e.x,e.x+e.width),y:Math.min(e.y,e.y+e.height),width:Math.abs(e.width),height:Math.abs(e.height),fillEnable:!1,strokeEnabled:!0,stroke:"#000",strokeWidth:1,name:e.name,id:"rect",scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable}}})})),e._l(e.circles,(function(e){return a("v-ellipse",{key:e.name,attrs:{config:{x:e.x,y:e.y,radiusX:Math.abs(e.radiusX),radiusY:Math.abs(e.radiusY),strokeEnabled:!0,stroke:"#000",strokeWidth:1,name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable,fillEnable:!1}}})})),e._l(e.triangles,(function(e){return a("v-regular-polygon",{key:e.name,attrs:{config:{x:e.x,y:e.y,sides:3,radius:Math.abs(e.radius),strokeEnabled:!0,strokeWidth:1,stroke:"#000",name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable,fillEnable:!1}}})})),e._l(e.pentagons,(function(e){return a("v-regular-polygon",{key:e.name,attrs:{config:{x:e.x,y:e.y,sides:5,radius:Math.abs(e.radius),strokeEnabled:!0,strokeWidth:1,stroke:"#000",name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable,fillEnable:!1}}})})),e._l(e.hexagons,(function(e){return a("v-regular-polygon",{key:e.name,attrs:{config:{x:e.x,y:e.y,sides:6,radius:Math.abs(e.radius),strokeEnabled:!0,strokeWidth:1,stroke:"#000",name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable,fillEnable:!1}}})})),e._l(e.arcs,(function(e){return a("v-arc",{key:e.name,attrs:{config:{x:e.x,y:e.y,innerRadius:Math.abs(e.innerRadius),outerRadius:Math.abs(e.outerRadius),angle:e.angle,name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable,strokeEnabled:!0,strokeWidth:1,stroke:"#000",fillEnable:!1}}})})),e._l(e.lines,(function(e){return a("v-line",{key:e.name,attrs:{config:{points:e.points,offset:e.offset,name:e.name,strokeEnabled:!0,strokeWidth:1,stroke:"#000",lineCap:"round",lineJoin:"round",scaleX:e.scaleX,scaleY:e.scaleY,draggable:e.draggable}}})})),e._l(e.texts,(function(t){return a("v-text",{key:t.name,attrs:{config:{x:t.x,y:t.y,offset:t.offset,text:"hello world",fontSize:Math.abs(t.fontSize),fontFamily:"Arial",name:t.name,strokeEnabled:!1,fill:"#000",fillEnabled:!0,scaleX:t.scaleX,scaleY:t.scaleY,draggable:t.draggable}},on:{dblclick:e.editText}})})),a("v-rect",{ref:"rectBox",attrs:{config:Object.assign({},e.rectBox,{stroke:"#1D83FF",strokeWidth:.8,fill:"rgba(29, 131, 255, .2)",listening:!1,id:"selectBox"})}}),a("v-transformer",{ref:"transformer"})],2)],1)],1),a("el-aside",{staticClass:"rightPart",attrs:{width:"16%"}},[a("el-button",{staticClass:"export",attrs:{type:"primary"},on:{click:e.handleExport}},[e._v("导出图片")]),a("h3",[e._v("属性栏")]),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"rect"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'rect'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("宽度")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"width")}},model:{value:e.attr.width,callback:function(t){e.$set(e.attr,"width",t)},expression:"attr.width"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"rect"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'rect'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("高度")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"height")}},model:{value:e.attr.height,callback:function(t){e.$set(e.attr,"height",t)},expression:"attr.height"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"triangle"===e.selectedShapeName.split("-")[0]||"pentagon"===e.selectedShapeName.split("-")[0]||"hexagon"===e.selectedShapeName.split("-")[0],expression:"\n            selectedShapeName.split('-')[0] === 'triangle' ||\n              selectedShapeName.split('-')[0] === 'pentagon' ||\n              selectedShapeName.split('-')[0] === 'hexagon'\n          "}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("半径")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"radius")}},model:{value:e.attr.radius,callback:function(t){e.$set(e.attr,"radius",t)},expression:"attr.radius"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"arc"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'arc'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("内半径")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"innerRadius")}},model:{value:e.attr.innerRadius,callback:function(t){e.$set(e.attr,"innerRadius",t)},expression:"attr.innerRadius"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"arc"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'arc'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("外半径")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"outerRadius")}},model:{value:e.attr.outerRadius,callback:function(t){e.$set(e.attr,"outerRadius",t)},expression:"attr.outerRadius"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"arc"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'arc'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("角度")])]),a("el-col",{attrs:{span:17}},[a("el-slider",{attrs:{min:-180,max:180},on:{change:function(t){return e.handleChange(t,"angle")}},model:{value:e.attr.angle,callback:function(t){e.$set(e.attr,"angle",t)},expression:"attr.angle"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"circle"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'circle'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("X半径")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"radiusX")}},model:{value:e.attr.radiusX,callback:function(t){e.$set(e.attr,"radiusX",t)},expression:"attr.radiusX"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"circle"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'circle'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("Y半径")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,precision:0},on:{change:function(t){return e.handleChange(t,"radiusY")}},model:{value:e.attr.radiusY,callback:function(t){e.$set(e.attr,"radiusY",t)},expression:"attr.radiusY"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"text"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'text'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("字号")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:12,precision:0},on:{change:function(t){return e.handleChange(t,"fontSize")}},model:{value:e.attr.fontSize,callback:function(t){e.$set(e.attr,"fontSize",t)},expression:"attr.fontSize"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"text"===e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] === 'text'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("字体")])]),a("el-col",{attrs:{span:17}},[a("el-select",{attrs:{placeholder:"请选择字体"},on:{change:function(t){return e.handleChange(t,"fontFamily")}},model:{value:e.attr.fontFamily,callback:function(t){e.$set(e.attr,"fontFamily",t)},expression:"attr.fontFamily"}},e._l(e.fontFamily,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-row",{staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("描边")])]),a("el-col",{attrs:{span:17}},[a("el-switch",{staticStyle:{height:"36px",float:"left"},attrs:{disabled:""===e.selectedShapeName,"active-text":"开","inactive-text":"关"},on:{change:function(t){return e.handleChange(t,"strokeEnabled")}},model:{value:e.attr.strokeEnabled,callback:function(t){e.$set(e.attr,"strokeEnabled",t)},expression:"attr.strokeEnabled"}})],1)],1),a("el-row",{staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("描边宽度")])]),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{disabled:""===e.selectedShapeName,min:0,precision:0},on:{change:function(t){return e.handleChange(t,"strokeWidth")}},model:{value:e.attr.strokeWidth,callback:function(t){e.$set(e.attr,"strokeWidth",t)},expression:"attr.strokeWidth"}})],1)],1),a("el-row",{staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("描边颜色")])]),a("el-col",{attrs:{span:6}},[a("el-color-picker",{attrs:{disabled:""===e.selectedShapeName},on:{change:function(t){return e.handleChange(t,"stroke")}},model:{value:e.attr.stroke,callback:function(t){e.$set(e.attr,"stroke",t)},expression:"attr.stroke"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"line"!==e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] !== 'line'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("填充")])]),a("el-col",{attrs:{span:17}},[a("el-switch",{staticStyle:{height:"36px",float:"left"},attrs:{disabled:""===e.selectedShapeName,"active-text":"开","inactive-text":"关"},on:{change:function(t){return e.handleChange(t,"fillEnabled")}},model:{value:e.attr.fillEnabled,callback:function(t){e.$set(e.attr,"fillEnabled",t)},expression:"attr.fillEnabled"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"line"!==e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] !== 'line'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("填充颜色")])]),a("el-col",{attrs:{span:6}},[a("el-color-picker",{attrs:{disabled:""===e.selectedShapeName},on:{change:function(t){return e.handleChange(t,"fill")}},model:{value:e.attr.fill,callback:function(t){e.$set(e.attr,"fill",t)},expression:"attr.fill"}})],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:"line"!==e.selectedShapeName.split("-")[0],expression:"selectedShapeName.split('-')[0] !== 'line'"}],staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("旋转")])]),a("el-col",{attrs:{span:17}},[a("el-slider",{attrs:{disabled:""===e.selectedShapeName,min:-180,max:180},on:{change:function(t){return e.handleChange(t,"rotation")}},model:{value:e.attr.rotate,callback:function(t){e.$set(e.attr,"rotate",t)},expression:"attr.rotate"}})],1)],1),a("el-row",{staticClass:"attr-row"},[a("el-col",{attrs:{span:6}},[a("span",{staticClass:"attr"},[e._v("拖拽")])]),a("el-col",{attrs:{span:17}},[a("el-switch",{staticStyle:{height:"36px",float:"left"},attrs:{disabled:""===e.selectedShapeName,"active-text":"开","inactive-text":"关"},on:{change:function(t){return e.handleChange(t,"draggable")}},model:{value:e.attr.draggable,callback:function(t){e.$set(e.attr,"draggable",t)},expression:"attr.draggable"}})],1)],1)],1)],1)],1)],1)},n=[],i=(a("d81d"),a("ac1f"),a("1276"),a("99af"),a("b0c0"),a("d3b7"),a("7db0"),a("4de4"),a("fb6a"),a("a434"),a("cb29"),a("159b"),a("0481"),a("4069"),a("4e82"),a("362d")),r=a.n(i),o=a("5530"),l=a("2909");a("caad"),a("2532"),a("3ca3"),a("ddb0"),a("5319"),a("25f0"),a("c740"),a("a9e3"),a("0342");function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,a="x"===e?t:3&t|8;return a.toString(16)}))}function d(e,t){var a=t.slice(),s=a.findIndex((function(t){return t.name===e}));return a.splice(s,1),a}function h(e,t,a){var s={draggable:!0,scaleX:1,scaleY:1,rotation:0,name:a+"-"+c()};switch(a){case"rect":s.width=0,s.height=0;break;case"circle":s.radiusX=0,s.radiusY=0;break;case"triangle":case"pentagon":case"hexagon":s.radius=0;break;case"arc":s.innerRadius=0,s.outerRadius=0,s.angle=0;break;case"line":s.points=[Number(e.x),Number(e.y)];break;case"text":s.fontSize=0;break;default:return}return"line"!==a&&(s.x=Number(e.x),s.y=Number(e.y)),[].concat(Object(l["a"])(t),[s])}function u(e,t,a){var s={draggable:t.draggable,rotate:Math.ceil(t.rotation)||0,strokeEnabled:t.strokeEnabled,stroke:t.stroke,strokeWidth:t.strokeWidth};switch(e){case"rect":s.width=t.width,s.height=t.height,s.offset={x:0,y:0};break;case"circle":s.radiusX=t.radiusX,s.radiusY=t.radiusY;break;case"triangle":case"pentagon":case"hexagon":s.radius=t.radius;break;case"arc":s.innerRadius=t.innerRadius,s.outerRadius=t.outerRadius,s.angle=Math.ceil(t.angle);break;case"text":s.fontSize=t.fontSize,s.fontFamily=t.fontFamily,s.offset={x:0,y:0};break;case"line":break;default:return}return"line"!==e&&(s.fillEnabled=t.fillEnabled,s.fill=t.fill),Object(o["a"])(Object(o["a"])({},a),s)}var g,f,p,m,v=.8*document.body.clientWidth,x=window.innerHeight,y="",w=5,b={name:"Konva",data:function(){return{attr:{width:0,height:0,radius:0,radiusX:0,radiusY:0,innerRadius:0,outerRadius:0,angle:0,rotate:0,fontSize:12,draggable:!0,strokeEnabled:!0,strokeWidth:0,stroke:"",fillEnabled:!0,fill:"",fontFamily:""},isDrawing:!1,arrowType:"arrow",down:!1,configKonva:{width:v,height:x},rects:[],circles:[],triangles:[],pentagons:[],hexagons:[],arcs:[],lines:[],texts:[],selectedShapeName:"",rectBox:{visible:!1,width:0,height:0,x:0,y:0},fontFamily:[{value:"'Arial'",label:"默认字体"},{value:"'SimSun'",label:"宋体"},{value:"'SimHei'",label:"黑体"},{value:"'Microsoft YaHei'",label:"微软雅黑"},{value:"'Microsoft JhengHei'",label:"微软正黑体"},{value:"'NSimSun'",label:"新宋体"},{value:"'PMingLiU'",label:"新细明体"},{value:"'MingLiU'",label:"细明体"},{value:"'DFKai-SB'",label:"标楷体"},{value:"'FangSong'",label:"仿宋"},{value:"'KaiTi'",label:"楷体"},{value:"'FangSong_GB2312'",label:"仿宋_GB2312"},{value:"'KaiTi_GB2312'",label:"楷体_GB2312"}]}},mounted:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},destroyed:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keydown",this.onKeyUp)},methods:{onKeyDown:function(e){var t=this;if(46===e.keyCode){var a=y.nodes();a.map((function(e){var a=e.getAttr("name"),s=a.split("-")[0];switch(s){case"rect":t.rects=d(a,t.rects);break;case"circle":t.circles=d(a,t.circles);break;case"triangle":t.triangles=d(a,t.triangles);break;case"pentagon":t.pentagons=d(a,t.pentagons);break;case"hexagon":t.hexagons=d(a,t.hexagons);break;case"arc":t.arcs=d(a,t.arcs);break;case"line":t.lines=d(a,t.lines);break;case"text":t.texts=d(a,t.texts);break;default:return}e.destroy()})),y.nodes([]),y.getLayer().draw()}},onKeyUp:function(e){e.preventDefault()},changeArrowType:function(e){this.arrowType=e},handleMouseDown:function(e){if(e.target===e.target.getStage()){if(this.down=!0,this.isDrawing=!0,"arrow"===this.arrowType&&e.target===e.target.getStage())return g=this.$refs.stage.getNode().getPointerPosition().x,f=this.$refs.stage.getNode().getPointerPosition().y,p=this.$refs.stage.getNode().getPointerPosition().x,m=this.$refs.stage.getNode().getPointerPosition().y,this.rectBox={visible:!0,width:0,height:0,x:0,y:0},y=this.$refs.transformer.getNode(),void y.getLayer().draw();var t=this.$refs.stage.getNode().getPointerPosition();switch(this.arrowType){case"rect":this.rects=h(t,this.rects,"rect");break;case"circle":this.circles=h(t,this.circles,"circle");break;case"triangle":this.triangles=h(t,this.triangles,"triangle");break;case"pentagon":this.pentagons=h(t,this.pentagons,"pentagon");break;case"hexagon":this.hexagons=h(t,this.hexagons,"hexagon");break;case"arc":this.arcs=h(t,this.arcs,"arc");break;case"line":this.lines=h(t,this.lines,"line");break;case"text":this.texts=h(t,this.texts,"text");break;default:return}}},handleMouseMove:function(e){if(this.isDrawing)if("arrow"===this.arrowType){if(!this.rectBox.visible)return;p=this.$refs.stage.getNode().getPointerPosition().x,m=this.$refs.stage.getNode().getPointerPosition().y,this.rectBox={x:Math.min(g,p),y:Math.min(f,m),width:Math.abs(p-g),height:Math.abs(m-f),visible:!0},y.getLayer().batchDraw()}else if("rect"===this.arrowType){var t=this.$refs.stage.getNode().getPointerPosition(),a=this.rects[this.rects.length-1];if(e.evt.shiftKey){var s=t.x-a.x,n=t.y-a.y;a.width=a.height=Math.min(s,n)}else a.width=t.x-a.x,a.height=t.y-a.y}else if("circle"===this.arrowType){var i=this.$refs.stage.getNode().getPointerPosition(),r=this.circles[this.circles.length-1];if(e.evt.shiftKey){var o=Math.min(i.x-r.x,i.y-r.y),l=r.radiusX+o,c=r.radiusY+o;r.radiusX=r.radiusY=Math.min(l,c),r.x=r.x+o,r.y=r.y+o}else r.radiusX=i.x-r.x,r.radiusY=i.y-r.y}else if("triangle"===this.arrowType){var d=this.$refs.stage.getNode().getPointerPosition(),h=this.triangles[this.triangles.length-1],u=Math.min(d.x-h.x,d.y-h.y);h.radius=u}else if("pentagon"===this.arrowType){var v=this.$refs.stage.getNode().getPointerPosition(),x=this.pentagons[this.pentagons.length-1],w=Math.min(v.x-x.x,v.y-x.y);x.radius=w}else if("hexagon"===this.arrowType){var b=this.$refs.stage.getNode().getPointerPosition(),k=this.hexagons[this.hexagons.length-1],N=Math.min(b.x-k.x,b.y-k.y);k.radius=N}else if("arc"===this.arrowType){var C=this.$refs.stage.getNode().getPointerPosition(),S=this.arcs[this.arcs.length-1],E=Math.sqrt(Math.pow(C.x-S.x,2)+Math.pow(C.y-S.y,2)),M=E/2,$=C.x-S.x,T=C.y-S.y,P=180*Math.atan2(T,$)/Math.PI;S.innerRadius=M,S.outerRadius=E,S.angle=P}else if("line"===this.arrowType){var A=this.$refs.stage.getNode().getPointerPosition(),L=this.lines[this.lines.length-1];if(e.evt.shiftKey)L.points=[L.points[0],L.points[1],A.x,A.y];else{var R=L.points.concat([A.x,A.y]);L.points=R}}else if("text"===this.arrowType){var _=this.$refs.stage.getNode().getPointerPosition(),D=this.texts[this.texts.length-1];D.fontSize=Math.max(_.x-D.x,_.y-D.y);var Y=this.$refs.stage.getNode().findOne("."+D.name);D.offset={x:Y.width()/2,y:Y.height()/2}}},handleMouseUp:function(){var e=this;if(this.isDrawing=!1,this.down=!1,"arrow"===this.arrowType){if(!this.rectBox.visible)return;setTimeout((function(){e.rectBox.visible=!1,y.getLayer().batchDraw()}));var t=this.$refs.stage.getNode().find((function(e){if("Ellipse"===e.getClassName()||"rect"===e.id()||"RegularPolygon"===e.getClassName()||"Arc"===e.getClassName()||"Line"===e.getClassName()||"Text"===e.getClassName())return!0})).toArray(),a=this.$refs.rectBox.getNode().getClientRect(),s=t.filter((function(e){return r.a.Util.haveIntersection(a,e.getClientRect())}));if(1===s.length){this.selectedShapeName=s[0].name();var n=s[0].getAttrs(),i=s[0].name().split("-")[0];this.attr=u(i,n,this.attr)}else this.selectedShapeName="";y.nodes(s),y.getLayer().batchDraw()}},handleClick:function(e){if("arrow"===this.arrowType){if(y=this.$refs.transformer.getNode(),this.rectBox.visible)return;if(e.target===e.target.getStage())return this.selectedShapeName="",y.nodes([]),void y.getLayer().draw();if("rect"===e.target.id()||"Ellipse"===e.target.getClassName()||"RegularPolygon"===e.target.getClassName()||"Arc"===e.target.getClassName()||"Line"===e.target.getClassName()||"Text"===e.target.getClassName()){var t=e.evt.shiftKey||e.evt.ctrlKey||e.evt.metaKey,a=y.nodes().indexOf(e.target)>=0;if(t||a){if(t&&a){var s=y.nodes().slice();if(s.splice(s.indexOf(e.target),1),1===s.length){this.selectedShapeName=s[0].name();var n=s[0].getAttrs(),i=s[0].name().split("-")[0];this.attr=u(i,n,this.attr)}else this.selectedShapeName="";y.nodes(s)}else if(t&&!a){var r=y.nodes().concat([e.target]);if(1===r.length){this.selectedShapeName=r[0].name();var o=r[0].getAttrs(),l=r[0].name().split("-")[0];this.attr=u(l,o,this.attr)}else this.selectedShapeName="";y.nodes(r)}}else{this.selectedShapeName=e.target.name();var c=e.target.getAttrs(),d=e.target.name().split("-")[0];this.attr=u(d,c,this.attr),y.nodes([e.target])}y.getLayer().draw()}}},editText:function(e){e.target.hide(),y||(y=this.$refs.transformer.getNode()),this.selectedShapeName=e.target.name();var t=e.target.getAttrs(),a=e.target.name().split("-")[0];this.attr=u(a,t,this.attr),y.nodes([e.target]),y.hide(),y.getLayer().draw();var s=e.target.absolutePosition(),n=this.$refs.stage.getNode().container().getBoundingClientRect(),i=e.target.getAttr("offset"),r={x:n.left+s.x-i.x,y:n.top+s.y-i.y},o=this.$refs.textArea;o.style.display="block",o.value=e.target.text(),o.style.position="absolute",o.style.top=r.y+"px",o.style.left=r.x+"px",o.style.width=e.target.width()-2*e.target.padding()+"px",o.style.height=e.target.height()-2*e.target.padding()+5+"px",o.style.fontSize=e.target.fontSize()+"px",o.style.border="none",o.style.padding="0px",o.style.margin="0px",o.style.overflow="hidden",o.style.background="none",o.style.outline="none",o.style.resize="none",o.style.lineHeight=e.target.lineHeight(),o.style.fontFamily=e.target.fontFamily(),o.style.transformOrigin="left top",o.style.textAlign=e.target.align(),o.style.color=e.target.fill();var l=e.target.rotation(),c="";l&&(c+="rotateZ("+l+"deg)"),o.style.transform=c,o.style.height="auto",o.style.height=o.scrollHeight+3+"px",o.focus()},handleKeyDown:function(e){if(13===e.keyCode&&!e.shiftKey){var t=this.$refs.stage.getNode().findOne("."+this.selectedShapeName);t.text(this.$refs.textArea.value),this.$refs.textArea.style.display="none",t.show(),y.show(),y.getLayer().draw()}},handleBlur:function(e){var t=this.$refs.stage.getNode().findOne("."+this.selectedShapeName);t.text(e.target.value),e.target.style.display="none",t.show(),y.show(),y.getLayer().draw()},handleChange:function(e,t){var a=this.$refs.stage.getNode().findOne("."+this.selectedShapeName),s=this.selectedShapeName.split("-")[0];"rect"===s&&"rotation"===t&&a.rotate(e),"fontFamily"===t?a.fontFamily(e):a.setAttr(t,e),y.getLayer().batchDraw()},handleExport:function(){var e=this.$refs.stage.getNode(),t=e.toDataURL({pixelRatio:3});this.downloadURI(t,"stage.png")},downloadURI:function(e,t){var a=document.createElement("a");a.download=t,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},onLayerDragMove:function(e){var t=this.$refs.layer.getNode();t.find(".guid-line").destroy();var a=this.getLineGuideStops(e.target),s=this.getObjectSnappingEdges(e.target),n=this.getGuides(a,s);n.length&&this.drawGuides(n)},getLineGuideStops:function(e){var t=this.$refs.stage.getNode(),a=[0,t.width()/2,t.width()],s=[0,t.height()/2,t.height()];return t.find("Rect, Ellipse, RegularPolygon, Line, Arc, Text").forEach((function(t){if(t!==e){var n=t.getClientRect();a.push([n.x,n.x+n.width,n.x+n.width/2]),s.push([n.y,n.y+n.height,n.y+n.height/2])}})),{vertical:a.flat(),horizontal:s.flat()}},getObjectSnappingEdges:function(e){var t=e.getClientRect(),a=e.absolutePosition();return{vertical:[{guide:Math.round(t.x),offset:Math.round(a.x-t.x),snap:"start"},{guide:Math.round(t.x+t.width/2),offset:Math.round(a.x-t.x-t.width/2),snap:"center"},{guide:Math.round(t.x+t.width),offset:Math.round(a.x-t.x-t.width),snap:"end"}],horizontal:[{guide:Math.round(t.y),offset:Math.round(a.y-t.y),snap:"start"},{guide:Math.round(t.y+t.height/2),offset:Math.round(a.y-t.y-t.height/2),snap:"center"},{guide:Math.round(t.y+t.height),offset:Math.round(a.y-t.y-t.height),snap:"end"}]}},getGuides:function(e,t){var a=[],s=[];e.vertical.forEach((function(e){t.vertical.forEach((function(t){var s=Math.abs(e-t.guide);s<w&&a.push({lineGuide:e,diff:s,snap:t.snap,offset:t.offset})}))})),e.horizontal.forEach((function(e){t.horizontal.forEach((function(t){var a=Math.abs(e-t.guide);a<w&&s.push({lineGuide:e,diff:a,snap:t.snap,offset:t.offset})}))}));var n=[],i=a.sort((function(e,t){return e.diff-t.diff}))[0],r=s.sort((function(e,t){return e.diff-t.diff}))[0];return i&&n.push({lineGuide:i.lineGuide,offset:i.offset,orientation:"V",snap:i.snap}),r&&n.push({lineGuide:r.lineGuide,offset:r.offset,orientation:"H",snap:r.snap}),n},drawGuides:function(e){var t=this.$refs.layer.getNode();e.forEach((function(e){if("H"===e.orientation){var a=new r.a.Line({points:[-6e3,0,6e3,0],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});t.add(a),a.absolutePosition({x:0,y:e.lineGuide}),t.batchDraw()}else if("V"===e.orientation){var s=new r.a.Line({points:[0,-6e3,0,6e3],stroke:"rgb(0, 161, 255)",strokeWidth:1,name:"guid-line",dash:[4,6]});t.add(s),s.absolutePosition({x:e.lineGuide,y:0}),t.batchDraw()}}))},onLayerDragEnd:function(){var e=this.$refs.layer.getNode();e.find(".guid-line").destroy(),e.batchDraw()}}},k=b,N=(a("f637"),a("2877")),C=Object(N["a"])(k,s,n,!1,null,"3355dd60",null);t["default"]=C.exports},f637:function(e,t,a){"use strict";a("0994")}}]);