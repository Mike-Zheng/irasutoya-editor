(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023cabee"],{"04d1":function(t,e,a){var i=a("342f"),n=i.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"4e82":function(t,e,a){"use strict";var i=a("23e7"),n=a("e330"),l=a("59ed"),o=a("7b0b"),s=a("07fa"),r=a("577e"),c=a("d039"),d=a("addb"),u=a("a640"),p=a("04d1"),f=a("d998"),v=a("2d00"),h=a("512ce"),m=[],x=n(m.sort),b=n(m.push),g=c((function(){m.sort(void 0)})),C=c((function(){m.sort(null)})),S=u("sort"),y=!c((function(){if(v)return v<70;if(!(p&&p>3)){if(f)return!0;if(h)return h<603;var t,e,a,i,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)m.push({k:e+i,v:a})}for(m.sort((function(t,e){return e.v-t.v})),i=0;i<m.length;i++)e=m[i].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}})),_=g||!C||!S||!y,w=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:r(e)>r(a)?1:-1}};i({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&l(t);var e=o(this);if(y)return void 0===t?x(e):x(e,t);var a,i,n=[],r=s(e);for(i=0;i<r;i++)i in e&&b(n,e[i]);d(n,w(t)),a=n.length,i=0;while(i<a)e[i]=n[i++];while(i<r)delete e[i++];return e}})},"512ce":function(t,e,a){var i=a("342f"),n=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},addb:function(t,e,a){var i=a("4dae"),n=Math.floor,l=function(t,e){var a=t.length,r=n(a/2);return a<8?o(t,e):s(t,l(i(t,0,r),e),l(i(t,r),e),e)},o=function(t,e){var a,i,n=t.length,l=1;while(l<n){i=l,a=t[l];while(i&&e(t[i-1],a)>0)t[i]=t[--i];i!==l++&&(t[i]=a)}return t},s=function(t,e,a,i){var n=e.length,l=a.length,o=0,s=0;while(o<n||s<l)t[o+s]=o<n&&s<l?i(e[o],a[s])<=0?e[o++]:a[s++]:o<n?e[o++]:a[s++];return t};t.exports=l},d998:function(t,e,a){var i=a("342f");t.exports=/MSIE|Trident/.test(i)},f682:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"att-container"},[a("div",[a("div",{staticClass:"style-panel"},[a("div",{staticClass:"style-panel__header"},[a("div",{staticClass:"style-panel__header__wrapper",on:{click:function(e){t.collapse.title=!t.collapse.title}}},[a("div",{staticClass:"style-panel__header__collapse"},[t.collapse.title?a("i",{staticClass:"el-icon-arrow-up"}):a("i",{staticClass:"el-icon-arrow-down"})]),a("div",{staticClass:"style-panel__header__title"},[t._v(" "+t._s(t.$t("Props.Text"))+" ")])]),a("div",{staticClass:"style-panel__header__tools"})]),t.collapse.title?t._e():a("div",{staticClass:"style-panel__content"},[a("div",{staticClass:"style-item"},[a("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Style"))+" ")]),a("div",{staticClass:"style-item__content"},[a("div",{staticClass:"item-inline",staticStyle:{width:"calc(50% - 15px)","margin-right":"15px"}},[a("div",{staticClass:"item-inline att-checkbox-card",class:{actived:t.text["bold"]}},[a("el-checkbox",{attrs:{disabled:!t.text["enabled"]},on:{change:t.valueUpdated},model:{value:t.text["bold"],callback:function(e){t.$set(t.text,"bold",e)},expression:"text['bold']"}},[a("svg-icon",{attrs:{"icon-class":"bold"}})],1)],1),a("div",{staticClass:"item-inline att-checkbox-card",class:{actived:t.text["italic"]},staticStyle:{margin:"0 10px"}},[a("el-checkbox",{attrs:{disabled:!t.text["enabled"]},on:{change:t.valueUpdated},model:{value:t.text["italic"],callback:function(e){t.$set(t.text,"italic",e)},expression:"text['italic']"}},[a("svg-icon",{attrs:{"icon-class":"italic"}})],1)],1),a("div",{staticClass:"item-inline att-checkbox-card",class:{actived:t.text["underline"]}},[a("el-checkbox",{attrs:{disabled:!t.text["enabled"]},on:{change:t.valueUpdated},model:{value:t.text["underline"],callback:function(e){t.$set(t.text,"underline",e)},expression:"text['underline']"}},[a("svg-icon",{attrs:{"icon-class":"underline"}})],1)],1)]),a("div",{staticClass:"att-radio-card item-inline"},[a("el-radio-group",{attrs:{disabled:!t.text["enabled"],size:"medium"},on:{change:t.valueUpdated},model:{value:t.text["textAlign"],callback:function(e){t.$set(t.text,"textAlign",e)},expression:"text['textAlign']"}},[a("el-radio-button",{attrs:{label:"left"}},[a("svg-icon",{attrs:{"icon-class":"text-align-left"}})],1),a("el-radio-button",{attrs:{label:"center"}},[a("svg-icon",{attrs:{"icon-class":"text-align-center"}})],1),a("el-radio-button",{attrs:{label:"right"}},[a("svg-icon",{attrs:{"icon-class":"text-align-right"}})],1)],1)],1)])]),a("div",{staticClass:"style-item"},[a("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Font"))+" ")]),a("div",{staticClass:"style-item__content"},[a("div",{staticClass:"item-inline att-select",staticStyle:{width:"calc(100% - 48px)","margin-right":"15px"}},[a("el-select",{attrs:{"popper-class":"att-select-dropdown",placeholder:"",disabled:!t.text["enabled"]},on:{change:t.valueUpdated},model:{value:t.text["fontFamily"],callback:function(e){t.$set(t.text,"fontFamily",e)},expression:"text['fontFamily']"}},[a("el-option",{style:{"font-family":"inherit"},attrs:{label:t.$t("Props.Default"),value:"inherit"}}),t._l(t.fontList,(function(t,e){return a("el-option",{key:e,style:{"font-family":t},attrs:{label:t,value:t}})}))],2)],1),a("div",{staticClass:"item-inline att-colorpicker",staticStyle:{width:"32px"}},[a("color-picker",{attrs:{color:t.text["fontColor"]},on:{"update:color":function(e){return t.$set(t.text,"fontColor",e)},change:t.valueUpdated}})],1)])]),a("div",{staticClass:"style-item"},[a("div",{staticClass:"style-item__text"},[t._v(" "+t._s(t.$t("Props.Type_and_Size"))+" ")]),a("div",{staticClass:"style-item__content"},[a("div",{staticClass:"att-select item-inline",staticStyle:{width:"calc(50% - 12px)","margin-right":"15px"}},[a("el-select",{attrs:{"popper-class":"att-select-dropdown",placeholder:"",disabled:!t.text["enabled"]},on:{change:t.valueUpdated},model:{value:t.text["textTransform"],callback:function(e){t.$set(t.text,"textTransform",e)},expression:"text['textTransform']"}},[a("el-option",{attrs:{label:t.$t("Props.None"),value:"none"}}),a("el-option",{attrs:{label:t.$t("Props.Uppercase"),value:"uppercase"}}),a("el-option",{attrs:{label:t.$t("Props.Lowercase"),value:"lowercase"}}),a("el-option",{attrs:{label:t.$t("Props.Capitalize"),value:"capitalize"}})],1)],1),a("div",{staticClass:"att-input-num item-inline",staticStyle:{width:"calc(50% - 12px)"}},[a("el-input-number",{attrs:{disabled:!t.text["enabled"],"controls-position":"right",min:10,max:300},on:{change:t.valueUpdated},model:{value:t.text["fontSize"],callback:function(e){t.$set(t.text,"fontSize",e)},expression:"text['fontSize']"}})],1)])])])])])])},n=[],l=a("2909"),o=a("b85c"),s=a("1da1"),r=(a("96cf"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("4e82"),[]),c=new Set(["Arial","Arial Black","Bahnschrift","Calibri","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier New","Ebrima","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Ink Free","Javanese Text","Leelawadee UI","Lucida Console","Lucida Sans Unicode","Malgun Gothic","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Mongolian Baiti","MS Gothic","MV Boli","Myanmar Text","Nirmala UI","Palatino Linotype","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Historic","Segoe UI Emoji","Segoe UI Symbol","SimSun","Sitka","Sylfaen","Symbol","Tahoma","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic","American Typewriter","Andale Mono","Arial","Arial Black","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Avenir","Avenir Next","Avenir Next Condensed","Baskerville","Big Caslon","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bradley Hand","Brush Script MT","Chalkboard","Chalkboard SE","Chalkduster","Charter","Cochin","Comic Sans MS","Copperplate","Courier","Courier New","Didot","DIN Alternate","DIN Condensed","Futura","Geneva","Georgia","Gill Sans","Helvetica","Helvetica Neue","Herculanum","Hoefler Text","Impact","Lucida Grande","Luminari","Marker Felt","Menlo","Microsoft Sans Serif","Monaco","Noteworthy","Optima","Palatino","Papyrus","Phosphate","Rockwell","Savoye LET","SignPainter","Skia","Snell Roundhand","Tahoma","Times","Times New Roman","Trattatello","Trebuchet MS","Verdana","Zapfino","Liberation Mono","Bitstream Charter","URW Palladio L","Ubuntu","Ubuntu Mono","Noto Mono","Caladea","Cantarell","Montserrat","Noto Serif","Noto Color Emoji"].sort());Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,document.fonts.ready;case 2:e=new Set,a=Object(o["a"])(c.values());try{for(a.s();!(i=a.n()).done;)n=i.value,document.fonts.check('12px "'.concat(n,'"'))&&e.add(n)}catch(s){a.e(s)}finally{a.f()}r=Object(l["a"])(e.values());case 6:case"end":return t.stop()}}),t)})))();var d=a("4940"),u={name:"PropText",components:{},props:{text:{type:Object,default:function(){return Object(d["k"])()}}},data:function(){return{fontList:r,collapse:{dataSource:!1,style:!1,basic:!1,title:!1,unit:!1}}},computed:{defaultWidgetSize:function(){return this.$store.state.editor.defaultWidgetSize},widgetSize:function(){return{width:this.defaultWidgetSize*this.widget.w,height:this.defaultWidgetSize*this.widget.h}}},mounted:function(){},methods:{valueUpdated:function(){this.$emit("updated")}}},p=u,f=a("2877"),v=Object(f["a"])(p,i,n,!1,null,"206b7806",null);e["default"]=v.exports}}]);