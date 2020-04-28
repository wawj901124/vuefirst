<template>
    <div>
      <h3>遍历数组</h3>
      <ul>
        <!--使用v-for遍历数组-->
        <!--使用:key，绑定一个key,优点：可以快速定位到这个节点，缺点：不能复用-->
        <li v-for="(person,index) in persons" :key="personsKeys[index]">
          ID:{{personsKeys[index]}} -------{{index}}） 姓名：{{person.name}}, 年龄：{{person.age}}, 性别：{{person.sex}}
        </li>
      </ul>
      <p>-----------------------------------------------------</p>
      <h3>遍历对象</h3>
      <ul>
        <!--使用v-for遍历对象,对象一般不用index,而是用key-->
        <!--使用:key，绑定一个key,优点：可以快速定位到这个节点，缺点：不能复用-->
        <li v-for="(item,key) in persons[0]" >
          {{key}}  ---{{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    // 导入shortid,来引用
    import shortId from 'shortid'
    export default {
        name: "ListRender",
        data(){
          return{
            persons:[
              {name:'张三',age:18, sex:'男'},
              {name:'赵四',age:28, sex:'女'},
              {name:'王五',age:48, sex:'男'},
              {name:'李六',age:38, sex:'女'}
            ],
            personsKeys:[

            ]
          }
        },
        // mounted为钩子函数，直接动态赋值
        mounted(){
          //map对数组person遍历，遍历的同时，使用shortId下generate函数的给数组persons产生id内容
          this.personsKeys = this.persons.map(v=>shortId.generate())

        }
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }

</style>
