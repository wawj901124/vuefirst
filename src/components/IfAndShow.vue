<template>
    <div>
      <!--使用v-if和v-else来确定显示哪个层-->
      <div v-if="showflag">今晚要上课!</div>
      <div v-else>今晚不上课!</div>
      <p></p>
      <!--@click绑定一个点击事件，事件的内容为赋标识变量showflag的非值给标识变量showfla-->
      <button @click="showflag = !showflag">切换</button>

      <p>----------------------------------------------------</p>
      <!--使用v-show来确定显示哪个层,一个为标识为的值，一个为标志位的值取反的值-->
      <div v-show="showflag">今晚讲Vue!</div>
      <div v-show="!showflag">今晚不讲Vue!</div>
      <p></p>
      <!--@click绑定一个点击事件，事件的内容为赋标识变量showflag的非值给标识变量showfla-->
      <button @click="showflag = !showflag">切换</button>
    </div>

</template>

<script>
    export default {
        name: "IfAndShow",
        data(){
          return{
            showflag:false, //上课与否的标识
          }
        }
    }
</script>

<style scoped>

</style>
