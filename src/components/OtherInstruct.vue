<template>
    <div>
      <!--v-text和v-html-->
      <!--v-text:是往里注入文字信息-->
      <!--v-html:是往里注入html标签内容-->
      <p>{{vtestcontent}}(Like IT,IT like)</p>
      <!--v-text适合全部替换掉-->
      <p v-text="vtestcontent">使用v-text</p>
      <!--v-html可以解析内容中html标签,一般不建议使用，会出现xss攻击风险-->
      <p v-html="vtestcontent">使用v-html</p>
      <!--v-pre 跳过这个元素和它的子元素的编译过程,不会编译，直接显示原字符-->
      <p v-pre>{{intro}}</p>
      <!--v-cloak,防止闪现，留白,需要配合style中加入 [v-cloak]{display: none;}一起使用-->
      <!--表示在没有渲染完成前是不会进行显示的，以此来防止闪现，一旦渲染完成，再去显示-->
      <!--在工程化的项目中很少用-->
      <!--在非工程化的项目中有时候会用到-->
      <p v-cloak>{{mes}}</p>
      <!--v-once ,只渲染一次，之后视为静态资源，不会再去渲染-->
      <p v-once>{{oncename}}</p>
      <p>{{oncename}}</p>
      <input type="text" placeholder="请输入姓名" v-model="oncename">

      <!--ref,给元素或子组件注册引用信息-->
      <p ref="fish">我是一只鱼</p>
      <p ref="fishtwo">我是两只鱼</p>
      <button @click="log">输出内容</button>

      <!--使用在main.js中自定义的指令-->
      <p>{{word1}}</p>
      <p v-upper-word="word1">{{word1}}</p>
      <p v-upper-word="word1"></p>

      <!--使用在本组件中的directives定义的局部指令,凡是指令，都要加一个v-来-->
      <p>{{word2}}</p>
      <p v-lower-word="word2">{{word2}}</p>
    </div>
</template>

<script>
    export default {
      name: "OtherInstruct",
      data() {
        return {
          vtestcontent: '<a href="http://www.itlike.com">聊科学院</a>',
          intro: 'Like It',
          mes: '还有半个小时就10：30',
          oncename: '小撩',
          word1:'It like,like it',
          word2:'Local Define',
        }
      },
      methods: {
        log() {   // 通过$refs会拿到所有通过ref注册的内容，是一个数组
          alert(0)
          console.log(this.$refs.fish);   //拿到refs中的fish标签的内容
          console.log(this.$refs.fish.innerHTML);  //输出便签中的innerHTML属性的内容
          console.log(this.$refs.fishtwo.innerHTML);  //输出便签中的innerHTML属性的内容
        }
      },

      //自定义局部指令，使用directives钩子函数
      //大写变为小写
      directives:{
        'lower-word'(el,binding){
          console.log(el,binding);
          el.textContent=binding.value.toLowerCase();  //标签的属性值value转为小写

        }

      }



    }
</script>

<style scoped>
  [v-cloak]{
    display: none;
  }

</style>
