<template>
    <div>

      <div>
        <h3>排序</h3>
        <button @click="orderByAge(0)">默认</button>
        <button @click="orderByAge(2)">年龄升序</button>
        <button @click="orderByAge(1)">年龄降序</button>
      </div>
      <p>----------------------------------------------------------------------------------</p>
      <h3>搜索列表</h3>
      <!--vue中，一般input内容都是会出现双向绑定的-->
      <!--使用v-model进行动态绑定-->
      <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName">
      <ul>
        <li v-for="(p,index) in filterPersons" :key="personsKeys[index]">
          {{index+1}})姓名：{{p.name}} ---性别：{{p.sex}}---年龄：{{p.age}}---电话：{{p.phone}}
        </li>
      </ul>

    </div>
</template>

<script>
    import shortId from 'shortid'  //导入shortid
    export default {
        name: "ListRenderTwo",
        data(){
          return{
            searchName:'',   //搜索的名字
            persons:[
              {name:'张三',age:18, sex:'男',phone:'17087654321'},
              {name:'赵四',age:28, sex:'女',phone:'17087654321'},
              {name:'王五',age:48, sex:'男',phone:'17087654321'},
              {name:'李六',age:38, sex:'女',phone:'17087654321'},
              {name:'张三',age:16, sex:'男',phone:'17087654321'},
              {name:'赵四',age:26, sex:'女',phone:'17087654321'},
              {name:'王五',age:46, sex:'男',phone:'17087654321'},
              {name:'李六',age:36, sex:'女',phone:'17087654321'}
            ],
            personsKeys:[],   //存放shortid生成的值
            orderType:0   //定义orderType变量，默认为0.用于排序
          }
        },
        // mounted为钩子函数，直接动态赋值
        mounted(){
          //map对数组person遍历，遍历的同时，使用shortId下generate函数的给数组persons产生id内容
          this.personsKeys = this.persons.map(v=>shortId.generate())

        },

        //计算属性
        computed:{
          filterPersons()   //计算属性的属性使用函数的形式
          {
            //1.获取数据
            //这句相当于let searchName=this.serachName
            //          let persons = this.persons
            let {searchName, persons,orderType} = this;  //ES6中的语法
            //2.取出数组中的数据
            let arr = [...persons];   //定义一个数组，预将persons数组中过滤过的数据放到arr数组中,
                                      //...persons表示最开始，arr数组中的内容为persons中的所有值
            //3.过滤数组
            //trim函数就是把两头的空格过滤掉
            if (searchName.trim()){
              //如果searchName中有值则过滤，如果没有则不执行if中的内容
              //通过数组p中的name属性使用indexOf函数匹配searchName,如果不等于-1
              //使用filter函数过滤获得内容，函数括号中的内容为一个条件，满足则返回相应的内容
              arr = persons.filter(p => p.name.indexOf(searchName) !== -1);
            }
            //4.排序
            if(orderType){   //如果orderType有值，则执行if中语句
              arr.sort(
                (p1,p2)=>{
                  if(orderType === 1 ){  //如果orderType恒等于1，则降序
                    return p2.age - p1.age
                  }
                  else{  //否则 升序
                    return p1.age - p2.age

                  }
                }
              );  //调用sort函数进行排序，括号里中内容为一个借读函数

            }
            return arr;   //返回符合条件的数组
          }
        },

        //methods是一个钩子函数，可以在里面写方法
        methods:{
          orderByAge(orderType){
            this.orderType = orderType;  //传入排序标识
          }
        }
    }
</script>

<style scoped>
  ul{
    list-style: none;    /*风格设置无*/
  }
  ul li{
    padding: 4px 0;      /*上下边距设置为4个像素，左右为0*/
  }

</style>
