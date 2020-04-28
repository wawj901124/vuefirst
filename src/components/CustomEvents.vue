<template>
    <div>
      <!--自定义事件通信适合于子组件向父组件通信，不适合父组件向子组件或兄弟组件之间的通信-->
      <p>组件通信-自定义事件</p>
      <button @click="btnClick">删除父组件的p标签</button>
      <button @click="btnClickTwo">删除父组件的p标签（传递参数）</button>
    </div>
</template>

<script>
    export default {
        name: "CustomEvents",
        methods:{
          btnClick(){
            alert(0);
            //告诉父组件，我点击了按钮
            this.$emit("btnClick");  //使用this.$emit()方法，告诉外界（父组件），我这边触发了一个btnClick事件
          },
          btnClickTwo(){
            alert(0);
            //告诉父组件，我点击了按钮
            //传递参数要在$emit中定义相应的参数，如下的{name:'hahaha',sex:'男'}，这个就是要传递的参数
            this.$emit("btnClickTwo",{name:'hahaha',sex:'男'});  //使用this.$emit()方法，告诉外界（父组件），我这边触发了一个btnClick事件
          },
        },
    }
</script>

<style scoped>

</style>
