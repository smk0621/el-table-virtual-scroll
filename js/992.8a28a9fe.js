"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[992],{5385:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.mList,"item-size":62,"key-prop":"id"},on:{change:e=>t.tableData=e}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark","row-key":"id"},on:{"sort-change":t.onSortChange}},[e("el-table-column",{attrs:{label:"随机数",prop:"count",width:"300",sortable:"count"}}),e("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.date))]}}])}),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":""}})],1)],1)],1)},n=[],r=o(2852),l=o(9879),i={name:"RadioDemo",components:{VirtualScroll:r.ZP},data(){const t=(0,l.c)(0,2e3);return{list:t,mList:[...t],originList:[],tableData:[]}},methods:{onSortChange({prop:t,order:e}){e?this.mList.sort(((o,a)=>"ascending"===e?o[t]-a[t]:"descending"===e?a[t]-o[t]:void 0)):this.mList=[...this.originList]}},created(){this.originList=[...this.mList]}},s=i,c=o(3736),u=(0,c.Z)(s,a,n,!1,null,"029892a8",null),d=u.exports},9879:function(t,e,o){function a(t,e){const o=[];for(let a=0;a<e;a++){const e=r(),l=r();o.push({id:t++,index:a,text:e,text2:l,show:!1,checked:!1,date:(new Date).toLocaleString(),name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",shop:"王小虎夫妻店",shopId:"10333",count:n(0,1e3)})}return o}function n(t,e){return Math.floor(Math.random()*(e-t))+t}function r(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]}o.d(e,{c:function(){return a}})}}]);
//# sourceMappingURL=992.8a28a9fe.js.map