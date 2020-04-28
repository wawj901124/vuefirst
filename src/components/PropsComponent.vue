<template>
    <div>
      <p>组将属性通信</p>
      <!--props适合父组件向子组件传递信息，不适合子组件向父组件传递信息-->
      <!--props传递必须是逐层传递；父-子-孙等-->
      <!--兄弟之间的传递也需要通过父组件来完成-->
      <!--比较适合中小型项目，在小的，一两个模块的那种-->
      <h4>姓名：{{name}}</h4>
      <h4>年龄：{{age}}</h4>
      <p>{{person}}</p>
      <!--<h4>性别：{{sex}}</h4>-->
      <!--<button @click="btnClick">点我</button>-->
      <button @click="logPerson('大料人',18)">调用方法</button>
    </div>
</template>

<script>
    export default {
        name: "PropsComponent",
        //props，外部组件调用本组件，props就提供了两个传入参数的路径，namne和age
        // props:['name','age'],  //使用props属性，可以接受一个数组[]，也可以接受一个对象{}，此处接受一个数组
        //以数组传入的参数无法进行参数类型的限制，而要进行参数类型的限制，需要使用对象形式
        // props:{
        // name: String,   //String，表示字符串类型
        // age: Number,   // Number，表示数字类型
        // person:Object, // Object,表示为一个对象
        // logPerson: Function, //表示接受父组件传入的是一个函数
        // },
        //另一种写法
        props:{
          //类型为String，表示字符串类型，
          // required:true,表示必须传入
          // default:'撩课'，表示默认值为撩课
          name:{type:String,required:true,default:'撩课'},   //类型为String，表示字符串类型
          age: {type:Number,required:true,default:0},   // Number，表示数字类型
          person:Object, // Object,表示为一个对象
          logPerson: Function, //表示接受父组件传入的是一个函数
        },

        methods:{
          // btnClick(){
          //   console.log(this.props.sex);
          // }
        }


    }
</script>

<style scoped>

</style>
