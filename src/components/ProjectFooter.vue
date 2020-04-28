<template>

    <div class="todo-footer" >
      <!--插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤2-->
      <!--组件中的各个元素留个插槽，插槽的函数为slot-->
      <label>
        <!--使用v-model来双向绑定isCheck函数，input选项的属性值等于isCheck中get函数的返回值-->
        <!--点选选项时，就会进入到isCheck中的set函数-->
        <!--<input type="checkbox" v-model="isCheck"/>-->

        <!--插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤2-->
        <!--input留一个插槽-->
        <!--直接来一个slot标签，就是一个匿名插槽，谁都可以插-->
        <!--加上name属性后，就是一个实名插槽，名字对了，才能插-->
        <!--从此的插槽就是对应要插入的input选项框的东西-->
        <slot name="isCheck"></slot>
      </label>
      <span>
        <!--使用length函数来计算数组的长度-->
        <!--<span>已完成{{finishedCount}}件</span>/总计{{todos.length}}件-->

        <!--插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤2-->
        <!--留一个实名为finish的插槽-->
        <slot name="finish"></slot>
      </span>
      <!--<button class="btn btn-warning" @click="delFinishedTodos">清除已完成任务</button>-->

      <!--插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤2-->
      <!--留一个实名为delete的插槽,作删除用-->
      <slot name="delete"></slot>
    </div>
</template>

<script>
    export default {
        name: "ProjectFooter",
        // props:{
        //   todos:Array,  //接受一个数组
        //   selectedAllTodo:Function, //接受一个函数
        //   delFinishedTodos:Function, //接受一个函数，参数名为delFinishedTodos，传入时需要用冒号动态绑定
        // },

        //计算组件
        // computed:{
        //   finishedCount(){
        //     // reduce函数，一个数组方法，遍历数组，查出符合条件的就加1
        //     // total，不赋值时，默认为0
        //     // reduce遍历数组的一项命名为todo
        //     //如果一项中的finished字段的值为true,则返回1，为false，则返回0
        //     // total 加1或者加0
        //     //最后一个0 ，表示初始值为0，默认初始值也为0
        //     // ()=> ,为一个借读函数
        //     return this.todos.reduce(
        //       (total,todo)=> total + (todo.finished ? 1: 0),0
        //     );
        //   },
        //
        //   //控制是否选中，有多个逻辑，可以使用冒号，大括号，里面写多个函数逻辑
        //   //每个属性都有get和set的方法
        //   isCheck:{
        //     //获取
        //     get(){
        //       //如果选中的和总长度恒等于（===）
        //       //并且数组todos的长度大于0
        //       return this.finishedCount ===this.todos.length &&  this.todos.length>0;
        //     },
        //     //设置，点击单选按钮的时候，就会进入set函数,value为选项input的value值
        //     // 点击的时候，会自动把value传进来
        //     set(value){
        //       this.selectedAllTodo(value);  //调用selectedAllTodo函数，并传入属性值
        //     },
        //   },
        // },
    }
</script>

<style scoped>
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

  .todo-footer button{
    float: right;
    margin-top: 5px;
  }
</style>
