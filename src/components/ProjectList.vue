<template>
    <div>
        <ul class="todo-main">
            <!--3.使用组件-->
            <!--使用for遍历循环-->
            <!--使用冒号动态绑定向子组件ProjectItem传入对象参数todo-->
            <ProjectItem v-for="(todo,index) in todos"
                         :todo="todo"
                         :index="index"
                         :delTodo="delTodo"
            />
        </ul>
    </div>
</template>

<script>
    //1.导入组件
    import ProjectItem from './ProjectItem'
    export default {
        name: "ProjectList",
        props:{
            todos: Array,    //接受一个数组
            delTodo: Function,  //参数名为delTodo，类型为函数类型
        },
        //2.注册组件
        components:{
          ProjectItem,
        }
    }
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty{
    height: 40px;
    line-height: 40px;
    border:  1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
