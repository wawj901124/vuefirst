<template>
  <!--<div>-->
    <!--@mouseenter，绑定鼠标进入事件，进入，按钮显示-->
    <!--@mouseleave，绑定鼠标离开事件，离开，按钮隐藏-->
    <!--:sytle="{backgroundColor:bgColor}",动态绑定背景颜色-->
    <li
      @mouseenter="dealShow(true)"
      @mouseleave="dealShow(false)"
      :style="{backgroundColor:bgColor}"
    >
      <label>
        <!--使用v-model，绑定todo.finished内容作为input的value值-->
        <input type="checkbox" v-model="todo.finished"/>
        <span>{{todo.title}}</span>
      </label>
      <!--通过v-show来控制按钮要不要显示-->
      <button v-show="isShowButton" class="btn btn-warning"  @click="delItem">删除</button>
    </li>
  <!--</div>-->

</template>

<script>
    //发布和订阅，改造删除功能，步骤2-子组件导入pubsub-js
    import PubSub from 'pubsub-js'

    export default {
        name: "ProjectItem",
        //接受父组件的传入的参数
        props:{
          todo:Object,  //接受一个对象
          index:Number,  // 接受一个数字类型的变量，记录当前任务在总任务数组中的下标位置
          delTodo:Function,  //函数类型的参数
        },
        data(){
          return{
            //false,隐藏；true:显示
            isShowButton: false,     //定义一个控制按钮是否显示的变量，默认为false
            bgColor: '#fff', //背景颜色，默认白色
          }
        },
        methods:{
          //传入参数isShow
          dealShow(isShow){
            console.log(isShow);
            this.isShowButton = isShow;   //控制删除按钮是否显示
            this.bgColor = isShow ? '#ddd': '#fff';  // 如果isShow的值为true,则显示灰色（#ddd）,否则显示白色（#fff）
          },
          //删除函数
          delItem(){
            //如果点击确定，给一个提示框,点击确认后，进行if语句中的内容
            if(window.confirm(`您确定删除 ${this.todo.title} 吗？`)){
              // this.delTodo(this.index);  //调用删除数据函数，删除对应index的数据

              //发布和订阅，改造删除功能，步骤3-子组件发布删除消息
              //使用publish进行异步消息发布，函数为delTodo，函数的参数为this.index
              // publishSync为发布同步消息
              PubSub.publish('delTodo',this.index);
            }
          },
        },
    }
</script>

<style scoped>
  /*item*/
  li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    /*background-color: red;*/
  }

  li label{
    float: left;
    cursor: pointer;
  }

  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button{
    padding: 4px 10px;   /*内边距，上内边距和下内边距是 4px，  右内边距和左内边距是 10px*/
    float: right;
    margin-top: 3px;
  }

  li:before{
    content: initial;
  }

  li:last-child{
    border-bottom: none;
  }

</style>
