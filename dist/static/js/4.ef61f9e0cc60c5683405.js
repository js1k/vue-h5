webpackJsonp([4],{aohH:function(e,t){},ozOQ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("4YfN"),n=s.n(i),c=s("9rMa"),a=(Object(c.c)(["itemNum","level","itemDetail","timer"]),n()({},Object(c.b)(["addNum","initializeData"]),{nextItem:function(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("您还没有选择答案~")},answerTable:function(e){switch(e){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choseAnswer:function(e,t){this.choosedNum=e,this.choosedId=t},submitAnswer:function(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(),this.$router.push("score")):alert("您还没有选择答案哦~")}}),{name:"test",data:function(){return{itemId:null,choosedNum:null,choosedId:null}},computed:Object(c.c)(["itemNum","level","itemDetail","timer"]),mounted:function(){},created:function(){},methods:n()({},Object(c.b)(["addNum","initializeData"]),{nextItem:function(){null!==this.choosedNum?(this.choosedNum=null,this.addNum(this.choosedId)):alert("您还没有选择答案~")},answerTable:function(e){switch(e){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},choseAnswer:function(e,t){this.choosedNum=e,this.choosedId=t},submitAnswer:function(){null!==this.choosedNum?(this.addNum(this.choosedId),clearInterval(),this.$router.push("score")):alert("您还没有选择答案哦~")}})}),o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test-pages"},[s("div",{staticClass:"item-container"},[e.itemDetail.length>0?s("div",{staticClass:"question-title"},[e._v(e._s(e.itemDetail[e.itemNum-1].topic_name))]):e._e(),e._v(" "),s("ul",e._l(e.itemDetail[e.itemNum-1].topic_answer,function(t,i){return s("li",{key:i,staticClass:"question-clumn",class:e.choosedId===t.topic_answer_id?"choosed-class":"",on:{click:function(s){e.choseAnswer(i,t.topic_answer_id)}}},[s("span",{staticClass:"question-clumn-label"},[e._v(e._s(e.answerTable(i)))]),e._v(" "),s("span",[e._v(e._s(t.answer_name))])])}))]),e._v(" "),e.itemNum<e.itemDetail.length?s("div",{staticClass:"item-next",on:{click:e.nextItem}},[s("span",[e._v("下一题")])]):s("div",{staticClass:"item-next",on:{click:e.submitAnswer}},[s("span",[e._v("提交")])])])},staticRenderFns:[]};var u=s("Z0/y")(a,o,!1,function(e){s("aohH")},"data-v-56561094",null);t.default=u.exports}});
//# sourceMappingURL=4.ef61f9e0cc60c5683405.js.map