<template>
    <div>
      <h1>我是一个组件</h1>
      <h3>双括号表达式</h3>
      <!--双括号表达式引用变量只适用于标签与标签之间，标签的属性不能使用双括号-->
      <div>{{info+10}}</div>
      <!--使用toLocaleUpperCase()函数将其转换为大写-->
      <div>{{info.toLocaleUpperCase()}}</div>
      <!--标签的属性使用-->
      <h3>强制数据绑定,使用v-bind强制绑定属性为变量值</h3>
      <a v-bind:href="site">学习Vue</a>
      <!--冒号就代表v-bind，强制绑定的意思，标签属性的绑定就用冒号进行强制绑定-->
      <a :href="site">学习Vue2</a><br/>

      <h3>绑定事件监听</h3>
      <!--用v-on来监听各种事件，此处监听click事件,触发的事件的内容必须是一个函数-->
      <p><button v-on:click="study">学习Vue按钮</button></p>
      <!--@就代表v-on:,@click就表示监听点击事件-->
      <!--函数study调用，是不需要加后面的括号的-->
      <p><button @click="study">学习Vue按钮2</button></p><br/>

      <!--函数传递参数-->
      <h3>绑定事件监听(函数带参数)</h3>
      <!--不传参数，默认传递的是一个对象-->
      <p><button @click="studyname">学习Vue按钮（带参数）</button></p>
      <!--传递自定义内容，要加括号，括号中为参数内容-->
      <p><button @click="studyname('小朱')">学习Vue按钮2（带参数）</button></p><br/>
      <!--绑定参数-->
      <p><button @click="studyname('{{buttonname}}')">学习Vue按钮3（带参数）</button></p><br/>
      <label><input type="text" v-model="buttonname"></label>


    </div>
</template>

<script>
    //  通过export输出
    export default {
        name: "Template",
      // data构造函数返回数据
      data(){
          return{
            info: 'like it, it like!',
            site: 'http://www.baidu.com',
            buttonname: '小红'
          }
      },
    //  methods也是一个构造函数，用来存放函数,当前组件的方法全部都写在这里
      methods:{
          study(){
            alert('祝你学有所成！')
          },
          studyname(name){
            // 此处使用${}来调用参数name
            alert(`${name},祝你学有所成！`)
          }
      }

    }
</script>

<style scoped>

</style>
