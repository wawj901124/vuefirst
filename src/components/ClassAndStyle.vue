<template>
    <div>
      <h3>class的使用</h3>
      <!--绑定,冒号等于v-bind-->
      <div :class="oneClass">样式类可以是一个字符串</div>
      <!--{}传一个对象,可以加多个类样式,要加冒号，且后面跟启用与否-->
      <!--对象（即字典，或键值对）中不使用data中的return返回的变量，要直接使用style里面的样式类名-->
      <div :class="{classOne: false,classTwo:true}">样式类可以是对象</div>
      <!--[],传一个数组（即列表）,以中括号表示,直接使用style里面的样式类名,且每一项用单引号引住-->
      <div :class="['classOne','classTwo']">样式类可以是数组</div>
      <!--使用data中的return返回的变量，各项不加单引号-->
      <div :class="[oneClass,twoClass]">样式类可以是数组2</div>

      <p>-------------------------------------------------------------------</p>
      <h3>style的使用</h3>
      <!--绑定,冒号等于v-bind-->
      <div
        style="width: 300px;height: 200px;margin: 10px auto"
        :style="{backgroundColor:bgColor,fontSize:fSize}">样式类可以是一个字符串</div>
    </div>
</template>

<script>
    export default {
        name: "ClassAndStyle",
        data(){
          return {
            oneClass:'classOne',
            twoClass:'classTwo',
            bgColor:'red',   //定义背景色
            fSize:'30px',    //定义字体大小

              }
        }
    }
</script>

<style scoped>
  .classOne{
    font-size: 30px;
    color: red;
  }
  .classTwo{
    width: 400px;
    height: 200px;
    background-color: skyblue;
    margin: 10px auto;
  }
</style>
