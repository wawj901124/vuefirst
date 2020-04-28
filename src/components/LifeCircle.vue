<template>
    <div>
      <p>组件生命周期</p>
      <p v-if="isShow">{{str1}}</p>
      <p v-else>{{str2}}</p>
      <button @click="destory">销毁</button>
    </div>
</template>

<script>
    export default {
        name: "LifeCircle",
        beforeCreate(){
          console.log('1:执行beforeCreate()');
        },
        data(){
          return{
            isShow:false,
            str1:'撩课学院',
            str2:'itLike.com',

          }
        },
        methods:{
          destory(){
            this.$destroy();  //使用this调用$destroy()函数，直接销毁当前组件
          },

        },
        //data()和methods两个钩子函数是在组件生命周期的beforeCreate和created之间执行
        created(){
          console.log('2:执行created()');
        },
        beforeMount(){
          console.log('3:执行beforeMount()');
          console.log('开始编译，生成dom节点等');
        },
        mounted(){
          console.log('4:执行mounted()');
          //定时器，定时器是绑定全局的，即使当前组件销毁，依然会继续执行
          //使用this.intervalId为定时器设置一个id，以便组件销毁后进行定时器的清除
          //不进行定时器的清除，定时器是不会自动清除的
          //setInterval()，设置定时器
          this.intervalId = setInterval(()=>{
            console.log('+++++++++++++++++++')
            this.isShow = !this.isShow;
          },1000);   //()=>{}:表示一个借读函数，1000，表示每隔1秒执行一次这个借读函数
        },
        beforeUpdate(){
          console.log('5:执行beforeUpdate()');
        },
        updated(){
          console.log('6:执行updated()');
        },
        beforeDestroy(){
          console.log('7:执行beforeDestroy()');
          //清除定时器
          clearInterval(this.intervalId)  //使用clearInterval()函数来清除定时器
        },
        destroyed(){
          console.log('8:执行destroyed()');
        }




    }
</script>

<style scoped>

</style>
