"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[298],{6003:function(t,l,e){e.r(l),e.d(l,{default:function(){return d}});var n=function(){var t=this,l=t._self._c;return l("div",[l("el-alert",{attrs:{type:"success",title:"当数据量大于100条时开启虚拟滚动","show-icon":""}}),l("virtual-scroll",{attrs:{data:t.list2,"item-size":62,"key-prop":"id",virtualized:t.list2.length>100},on:{change:l=>t.virtualList2=l}},[l("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.loadMore,expression:"loadMore"}],class:t.loading?"no-empty":"",attrs:{"row-key":"id",stripe:"",data:t.virtualList2,height:"500px"}},[l("el-table-column",{attrs:{label:"id",prop:"id"}}),l("el-table-column",{attrs:{label:"内容",prop:"text"}}),l("el-table-column",{attrs:{label:"详情"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[l("el-button",{attrs:{type:"text"},on:{click:function(t){e.show=!e.show}}},[t._v(t._s(e.show?"隐藏":"显示"))]),e.show?l("div",[t._v(t._s(e.text2))]):t._e()]}}])}),l("el-table-column",{attrs:{label:"第n行",prop:"id"}}),l("el-table-column",{attrs:{label:"第n行",prop:"id"}}),l("el-table-column",{attrs:{label:"第n行",prop:"id"}}),l("el-table-column",{attrs:{label:"第n行",prop:"id"}}),l("el-table-column",{attrs:{label:"第n行",prop:"id"}}),l("el-table-column",{attrs:{label:"操作",width:"260"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v(" "+t._s(e.id)+" "),l("el-button",{on:{click:function(l){return t.onDel2(e)}}},[t._v("删除")]),l("el-button",{on:{click:function(l){return t.onEdit2(e)}}},[t._v("编辑")])]}}])}),t.loading?l("div",{staticStyle:{"text-align":"center",padding:"15px",color:"#999"},attrs:{slot:"append"},slot:"append"},[t._v(" 加载中... ")]):t._e()],1)],1),l("b",[t._v("行数: "+t._s(t.virtualList2.length))])],1)},o=[],i=e(9279),a=e(1475),s={components:{VirtualScroll:i.ZP},directives:{ElTableInfiniteScroll:a.Z},data(){return{count2:0,list2:[],virtualList2:[],loading:!1}},methods:{onEdit(t){t.text=t.text+"__编辑"},onDel2(t){const l=this.list2.findIndex((l=>l===t));l>-1&&this.list2.splice(l,1)},loadMore(){this.loading||(this.loading=!0,setTimeout((()=>{for(let t=0;t<30;t++)this.count2++,this.list2.push({id:this.count2,show:!1,text:this.getRandomContent(),text2:this.getRandomContent()});this.loading=!1}),1e3))},getRandomContent(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],l=Math.floor(10*Math.random());return t[l]}},created(){}},r=s,c=e(1001),u=(0,c.Z)(r,n,o,!1,null,"12066cf2",null),d=u.exports}}]);
//# sourceMappingURL=298.3ac92dc1.js.map