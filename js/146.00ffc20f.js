"use strict";(self["webpackChunkel_table_virtual_scroll"]=self["webpackChunkel_table_virtual_scroll"]||[]).push([[146],{8799:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",[e("virtual-scroll",{ref:"virtualScroll",attrs:{data:t.list,"item-size":62,"key-prop":"id"},on:{"update:data":function(e){t.list=e},change:e=>t.tableData=e}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"500px",border:"","row-key":"id"}},[e("virtual-column",{attrs:{label:"id",prop:"id",type:"tree",load:t.onload}}),e("el-table-column",{attrs:{label:"内容",prop:"text"}}),e("el-table-column",{attrs:{label:"内容省略",prop:"text","show-overflow-tooltip":""}})],1)],1)],1)},o=[],i=a(2852),n={components:{VirtualScroll:i.ZP,VirtualColumn:i.Fg},data(){return{loading:!1,list:[],tableData:[]}},methods:{fetchData(){this.loading=!0,this.list=[],setTimeout((()=>{this.list=[];for(let t=1;t<2e3;t++){const e=this.getRandomContent(),a=this.getRandomContent();this.list.push({id:t,show:!1,text:e,text2:a,hasChildren:!0})}this.loading=!1}),1e3)},getRandomContent(){const t=["这是一条测试数据","君不见黄河之水天上来，奔流到海不复回。","十年生死两茫茫","寻寻觅觅，冷冷清清，凄凄惨惨戚戚。","桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。","明月几时有，把酒问青天。","槛菊愁烟兰泣露，罗幕轻寒，","寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？","红豆生南国，春来发几枝。","黄鹂"],e=Math.floor(10*Math.random());return t[e]},onload(t,e){this.count||(this.count=3e3),setTimeout((()=>{if(Math.random()>.5)return void e([]);const t=[];for(let e=0;e<10;e++)t.push({id:this.count++,show:!1,text:this.getRandomContent(),text2:this.getRandomContent()});e(t)}),1e3)}},created(){this.fetchData()}},s=n,r=a(3736),d=(0,r.Z)(s,l,o,!1,null,"ff762434",null),u=d.exports}}]);
//# sourceMappingURL=146.00ffc20f.js.map