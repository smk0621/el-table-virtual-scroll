(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[279],{802:function(t,e,i){var n=i(1990),l=n.Symbol;t.exports=l},6251:function(t,e,i){var n=i(802),l=i(3845),o=i(7760),s="[object Null]",r="[object Undefined]",a=n?n.toStringTag:void 0;function c(t){return null==t?void 0===t?r:s:a&&a in Object(t)?l(t):o(t)}t.exports=c},3349:function(t,e,i){var n=i(3676),l=/^\s+/;function o(t){return t?t.slice(0,n(t)+1).replace(l,""):t}t.exports=o},8371:function(t,e,i){var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},3845:function(t,e,i){var n=i(802),l=Object.prototype,o=l.hasOwnProperty,s=l.toString,r=n?n.toStringTag:void 0;function a(t){var e=o.call(t,r),i=t[r];try{t[r]=void 0;var n=!0}catch(a){}var l=s.call(t);return n&&(e?t[r]=i:delete t[r]),l}t.exports=a},7760:function(t){var e=Object.prototype,i=e.toString;function n(t){return i.call(t)}t.exports=n},1990:function(t,e,i){var n=i(8371),l="object"==typeof self&&self&&self.Object===Object&&self,o=n||l||Function("return this")();t.exports=o},3676:function(t){var e=/\s/;function i(t){var i=t.length;while(i--&&e.test(t.charAt(i)));return i}t.exports=i},8530:function(t,e,i){i(1703);var n=i(359),l=i(9263),o=i(7044),s="Expected a function",r=Math.max,a=Math.min;function c(t,e,i){var c,h,d,u,p,f,v=0,m=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError(s);function w(e){var i=c,n=h;return c=h=void 0,v=e,u=t.apply(n,i),u}function y(t){return v=t,p=setTimeout($,e),m?w(t):u}function x(t){var i=t-f,n=t-v,l=e-i;return g?a(l,d-n):l}function _(t){var i=t-f,n=t-v;return void 0===f||i>=e||i<0||g&&n>=d}function $(){var t=l();if(_(t))return S(t);p=setTimeout($,x(t))}function S(t){return p=void 0,b&&c?w(t):(c=h=void 0,u)}function T(){void 0!==p&&clearTimeout(p),v=0,c=f=h=p=void 0}function k(){return void 0===p?u:S(l())}function C(){var t=l(),i=_(t);if(c=arguments,h=this,f=t,i){if(void 0===p)return y(f);if(g)return clearTimeout(p),p=setTimeout($,e),w(f)}return void 0===p&&(p=setTimeout($,e)),u}return e=o(e)||0,n(i)&&(m=!!i.leading,g="maxWait"in i,d=g?r(o(i.maxWait)||0,e):d,b="trailing"in i?!!i.trailing:b),C.cancel=T,C.flush=k,C}t.exports=c},359:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},6841:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},6619:function(t,e,i){var n=i(6251),l=i(6841),o="[object Symbol]";function s(t){return"symbol"==typeof t||l(t)&&n(t)==o}t.exports=s},9263:function(t,e,i){var n=i(1990),l=function(){return n.Date.now()};t.exports=l},1953:function(t,e,i){i(1703);var n=i(8530),l=i(359),o="Expected a function";function s(t,e,i){var s=!0,r=!0;if("function"!=typeof t)throw new TypeError(o);return l(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),n(t,e,{leading:s,maxWait:e,trailing:r})}t.exports=s},7044:function(t,e,i){var n=i(3349),l=i(359),o=i(6619),s=NaN,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,h=parseInt;function d(t){if("number"==typeof t)return t;if(o(t))return s;if(l(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=l(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var i=a.test(t);return i||c.test(t)?h(t.slice(2),i?2:8):r.test(t)?s:+t}t.exports=d},9279:function(t,e,i){"use strict";i.d(e,{Fg:function(){return $},ZP:function(){return S}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-table-virtual-scroll",class:[t.isExpanding?"is-expanding":"",t.isHideAppend?"hide-append":""]},[t._t("default")],2)},l=[],o=(i(1703),i(1953)),s=i.n(o);function r(t){const e=window.getComputedStyle(t,null),i=["auto","scroll"];return i.includes(e.overflow)||i.includes(e["overflow-y"])}function a(t){let e=t;while(e){if([window,document,document.documentElement].includes(e))return window;if(r(e))return e;e=e.parentNode}return e||window}function c(t){return t===window?window.pageYOffset:t.scrollTop}function h(t){return t===window?window.innerHeight:t.offsetHeight}function d(t,e){t===window?window.scroll(0,e):t.scrollTop=e}const u=[".el-table__body-wrapper",".el-table__fixed-right .el-table__fixed-body-wrapper",".el-table__fixed .el-table__fixed-body-wrapper"];var p={name:"el-table-virtual-scroll",props:{data:{type:Array,required:!0},itemSize:{type:Number,default:60},scrollBox:{type:String},buffer:{type:Number,default:200},keyProp:{type:String,default:"id"},throttleTime:{type:Number,default:10},dynamic:{type:Boolean,default:!0},virtualized:{type:Boolean,default:!0}},provide(){return{virtualScroll:this}},data(){return{sizes:{},start:0,end:void 0,curRow:null,isExpanding:!1,columnVms:[],isHideAppend:!1}},computed:{offsetMap({keyProp:t,itemSize:e,sizes:i,data:n}){if(!this.dynamic)return{};const l={};let o=0;for(let s=0;s<n.length;s++){const r=n[s][t];l[r]=o;const a=i[r],c="number"===typeof a?a:e;o+=c}return l}},methods:{initData(){if(this.renderData=[],this.top=void 0,this.bottom=void 0,this.start=0,this.end=void 0,this.isInnerScroll=!1,this.toTop=0,this.elTable=this.$children[0],!this.elTable||"ElTable"!==this.elTable.$options.name)throw new Error("el-table-virtual-column 组件插槽内必须是el-table");this.scroller=this.getScroller(),this.setToTop(),setTimeout((()=>{this.handleScroll()}),100),this.onScroll=this.throttleTime?s()(this.handleScroll,this.throttleTime):this.handleScroll,this.scroller.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onScroll),this.bindTableExpandEvent()},getScroller(){let t;if(this.scrollBox){if(t=document.querySelector(this.scrollBox),!t)throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`);return r(t)||console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`),t}return this.elTable&&this.elTable.height?(this.isInnerScroll=!0,this.$el.querySelector(".el-table__body-wrapper")):a(this.$el)},setToTop(){this.toTop=this.isInnerScroll?0:this.$el.getBoundingClientRect().top-this.scroller.getBoundingClientRect().top},handleScroll(t=!0){this.virtualized&&(this.removeHoverRows(),this.updateSizes(),this.calcRenderData(),this.calcPosition(),t&&this.updatePosition(),this.$emit("change",this.renderData,this.start,this.end),this.setRowsExpanded())},removeHoverRows(){const t=this.$el.querySelectorAll(".el-table__row.hover-row");t.length>1&&Array.from(t).forEach((t=>{t.classList.remove("hover-row")}))},updateSizes(){if(!this.dynamic)return;let t=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row"),e=!1;t[0]&&t[0].classList.contains("el-table__row--level-0")&&(e=!0,t=this.$el.querySelectorAll(".el-table__body > tbody > .el-table__row.el-table__row--level-0")),Array.from(t).forEach(((t,i)=>{const n=this.renderData[i];if(!n)return;let l=t.offsetHeight;if(t.classList.contains("expanded")&&(l+=t.nextSibling.offsetHeight),e){let e=t.nextSibling;while(e&&"TR"===e.tagName&&!e.classList.contains("el-table__row--level-0"))l+=e.offsetHeight,e=e.nextSibling}const o=n[this.keyProp];this.sizes[o]!==l&&this.$set(this.sizes,o,l)}))},getItemOffsetTop(t){if(!this.dynamic)return this.itemSize*t;const e=this.data[t];return e&&this.offsetMap[e[this.keyProp]]||0},getItemSize(t){if(t<=-1)return 0;const e=this.data[t];if(e){const t=e[this.keyProp];return this.sizes[t]||this.itemSize}return this.itemSize},calcRenderData(){const{scroller:t,data:e,buffer:i}=this,n=c(t)-i-this.toTop,l=c(t)+h(t)+i-this.toTop;let o,s;if(this.dynamic){let t=0,i=e.length-1,r=0;while(t<=i){r=Math.floor((t+i)/2);const e=this.getItemOffsetTop(r);if(e<n){const e=this.getItemOffsetTop(r+1);if(e>n)break;t=r+1}else i=r-1}o=r,s=e.length-1;for(let n=o+1;n<e.length;n++){const t=this.getItemOffsetTop(n);if(t>=l){s=n;break}}}else o=n<=0?0:Math.floor(n/this.itemSize),s=l<=0?0:Math.ceil(l/this.itemSize);o%2&&(o-=1),this.top=n,this.bottom=l,this.start=o,this.end=s,this.renderData=e.slice(o,s+1)},calcPosition(){const t=this.data.length-1,e=this.getItemOffsetTop(t)+this.getItemSize(t),i=this.getItemOffsetTop(this.start);u.forEach((t=>{const n=this.$el.querySelector(t);if(n){if(!n.wrapEl){const t=document.createElement("div"),e=document.createElement("div");t.appendChild(e),e.appendChild(n.children[0]),n.insertBefore(t,n.firstChild),n.wrapEl=t,n.innerEl=e}n.wrapEl&&(n.wrapEl.style.height=e+"px",n.innerEl.style.transform=`translateY(${i}px)`)}}))},updatePosition(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{this.timer&&clearTimeout(this.timer),this.handleScroll(!1)}),this.throttleTime+10)},renderAllData(){this.renderData=this.data,this.$emit("change",this.data,0,this.data.length-1),this.$nextTick((()=>{u.forEach((t=>{const e=this.$el.querySelector(t);e&&e.wrapEl&&(e.wrapEl.style.height="auto",e.innerEl.style.transform="translateY(0px)")}))}))},update(){this.setToTop(),this.handleScroll()},scrollTo(t,e=!1){const i=this.data[t];i&&this.scroller&&(this.updateSizes(),this.calcRenderData(),this.$nextTick((()=>{const i=this.getItemOffsetTop(t);d(this.scroller,i),e||setTimeout((()=>{this.scrollTo(t,!0)}),50)})))},reset(){this.sizes={},this.scrollTo(0,!1)},addColumn(t){this.columnVms.push(t)},removeColumn(t){this.columnVms=this.columnVms.filter((e=>e!==t))},checkAll(t){this.data.forEach((e=>this.$set(e,"$v_checked",t))),this.emitSelectionChange()},checkRow(t,e){this.$set(t,"$v_checked",e),this.emitSelectionChange()},emitSelectionChange(){const t=this.data.filter((t=>t.$v_checked));this.$emit("selection-change",t)},clearSelection(){this.checkAll(!1),this.columnVms.forEach((t=>t.syncCheckStatus()))},toggleRowSelection(t,e){const i="boolean"===typeof e?e:!t.$v_checked;this.checkRow(t,i),this.columnVms.forEach((t=>t.syncCheckStatus()))},bindTableExpandEvent(){this.isExpandType&&this.elTable.$on("expand-change",((t,e)=>{this.$set(t,"$v_expanded",e.includes(t))}))},setRowsExpanded(){this.isExpandType&&this.$nextTick((()=>{const t=this.renderData.filter((t=>t.$v_expanded));0!==t.length&&(t.forEach((t=>{this.elTable.toggleRowExpansion(t,!0)})),this.isExpanding=!0,setTimeout((()=>{this.isExpanding=!1}),10))}))},toggleRowExpansion(t,e){const i="boolean"===typeof e;this.$set(t,"$v_expanded",i?e:!t.$v_expanded),this.renderData.includes(t)&&this.elTable.toggleRowExpansion(t,e)},setCurrentRow(t){this.curRow=t,this.$emit("current-change",t)},updateData(t){this.$emit("update:data",t)},doUpdate(){this.hasDoUpdate||this.scroller&&(this.isHideAppend=!0,this.update(),this.hasDoUpdate=!0,this.$nextTick((()=>{this.hasDoUpdate=!1,this.isHideAppend=!1})))}},watch:{data(){this.virtualized?this.doUpdate():this.renderAllData()},virtualized:{immediate:!0,handler(t){t?this.doUpdate():this.renderAllData()}}},created(){this.$nextTick((()=>{this.initData()}))},beforeDestroy(){this.scroller&&(this.scroller.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll))}},f=p,v=i(1001),m=(0,v.Z)(f,n,l,!1,null,"09debb07",null),g=m.exports,b=function(){var t=this,e=t._self._c;return e("el-table-column",t._g(t._b({attrs:{"class-name":t.isTree?"el-table__row--level":""},scopedSlots:t._u([{key:"header",fn:function(i){return[t._t("header",(function(){return["v-selection"===i.column.type?e("el-checkbox",{attrs:{indeterminate:t.isCheckedImn},on:{change:t.onCheckAllRows},model:{value:t.isCheckedAll,callback:function(e){t.isCheckedAll=e},expression:"isCheckedAll"}}):[t._v(" "+t._s(i.column.label)+" ")]]}),null,i)]}},{key:"default",fn:function(i){return[i.column&&"v-tree"===i.column.type?[e("span",{staticClass:"el-table__indent",style:{paddingLeft:(i.row.$level-1)*t.indent+"px"}}),!1!==i.row.$v_hasChildren?e("div",{staticClass:"el-table__expand-icon",class:i.row.$v_expanded?"el-table__expand-icon--expanded":"",on:{click:function(e){return t.onTreeNodeExpand(i.row)}}},[i.row.$v_loading?e("i",{staticClass:"el-icon-loading"}):e("i",{staticClass:"el-icon-arrow-right"})]):e("span",{staticClass:"el-table__placeholder"})]:t._e(),t._t("default",(function(){return["v-selection"===i.column.type?e("el-checkbox",{attrs:{value:i.row.$v_checked},on:{change:function(e){return t.onCheckRow(i.row,!i.row.$v_checked)}}}):t._e(),"v-radio"===i.column.type?e("el-radio",{attrs:{label:!0,value:t.virtualScroll.curRow===i.row},on:{change:function(e){return t.onRadioChange(i.row)}}},[e("span")]):"v-index"===i.column.type?e("span",[t._v(" "+t._s(t.getIndex(i))+" ")]):[t._v(" "+t._s(i.row[i.column.property])+" ")]]}),null,i)]}}],null,!0)},"el-table-column",t.$attrs,!1),t.$listeners))},w=[],y={name:"el-table-virtual-column",inject:["virtualScroll"],props:{load:{type:Function},indent:{type:Number,default:16}},data(){return{isCheckedAll:!1,isCheckedImn:!1,isTree:!1}},methods:{onCheckAllRows(t){t=!!this.isCheckedImn||t,this.virtualScroll.checkAll(t),this.isCheckedAll=t,this.isCheckedImn=!1},onCheckRow(t,e){this.virtualScroll.checkRow(t,e),this.syncCheckStatus()},syncCheckStatus(){const t=this.virtualScroll.data,e=t.filter((t=>!0===t.$v_checked)).length;0===e?(this.isCheckedAll=!1,this.isCheckedImn=!1):e===t.length?(this.isCheckedAll=!0,this.isCheckedImn=!1):(this.isCheckedAll=!1,this.isCheckedImn=!0)},onRadioChange(t){this.virtualScroll.setCurrentRow(t)},getIndex(t){const e=this.virtualScroll.start+t.$index;return"function"===typeof this.$attrs.index?this.$attrs.index(e):e+1},onTreeNodeExpand(t){this.$set(t,"$v_expanded",!t.$v_expanded),t.$v_expanded?this.loadChildNodes(t):this.hideChildNodes(t)},loadChildNodes(t){if(t.$v_loaded){const e=this.virtualScroll.data,i=e.findIndex((e=>e===t));i>-1&&this.virtualScroll.updateData([...e.slice(0,i+1),...t.$v_hideNodes,...e.slice(i+1)])}else this.$set(t,"$v_loading",!0),this.load&&this.load(t,e.bind(this));function e(e){Array.isArray(!e)&&(e=[]),this.$set(t,"$v_loading",!1),this.$set(t,"$v_loaded",!0),this.$set(t,"$v_hasChildren",!!e.length),e.forEach((e=>{e.$level="number"===typeof t.$level?t.$level+1:2}));const i=this.virtualScroll.data,n=i.findIndex((e=>e===t));n>-1&&this.virtualScroll.updateData([...i.slice(0,n+1),...e,...i.slice(n+1)])}},hideChildNodes(t){const e=this.virtualScroll.data,i=e.findIndex((e=>e===t));if(-1===i)return;const n=[];for(let o=i+1;o<e.length;o++){const i=e[o];if((i.$level||1)<=(t.$level||1))break;n.push(i)}this.$set(t,"$v_hideNodes",n);const l=e.filter((t=>!n.includes(t)));this.virtualScroll.updateData(l),this.virtualScroll.update()}},beforeCreate(){const{type:t}=this.$attrs;["index","selection","radio","tree"].includes(t)&&(this.$attrs.type="v-"+t)},created(){this.virtualScroll.addColumn(this);const{type:t}=this.$attrs;"expand"===t?this.virtualScroll.isExpandType=!0:"v-tree"===t&&(this.isTree=!0)},beforeDestroy(){this.virtualScroll.removeColumn(this)}},x=y,_=(0,v.Z)(x,b,w,!1,null,"4720db4a",null),$=_.exports,S=g}}]);
//# sourceMappingURL=279.fc892430.js.map