<!--view层-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <!--使用v-model命令来双相绑定数据-->
    <label><input type="text" v-model="msg"></label>
  </div>
</template>

<!--vm层，data中的数据可以看作是model层，处理数据，这个为vm-->
<script>
export default {
  name: 'HelloWorld',
  // data为钩子函数，用来返回数据
  data () {
    return {
      msg: 'my first vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped:表示style只作用于当前的vue,不会影响其他-->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
