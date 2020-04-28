<template>
    <div id="app">
    <!--<div>-->
      <!--<p>demo</p>-->
      <!--第一部分-->
      <fieldset>
        <legend>指令综合小练习</legend>
        <div>
          <span>姓名：</span>
          <!--使用v-mode实现数据双向绑定-->
          <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
        </div>
        <div>
          <span>年龄：</span>
          <input type="text" placeholder="请输入年龄" v-model="newPerson.age" >
        </div>
        <div>
          <span>性别：</span>
          <select v-model="newPerson.sex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div>
          <span>手机：</span>
          <input type="text" placeholder="请输入手机号码" v-model="newPerson.phone">
        </div>
        <!--函数引用，不传参数的话，加不加小括号都一样-->
        <button @click="createNewPerson">创建新用户</button>
      </fieldset>
      <!--第二部分-->
      <table>
        <thead>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机</td>
          <td>删除</td>
        </tr>
        </thead>
        <tbody>
        <!--for循环获取数据-->
        <tr v-for="(p,index) in persons">
          <!--用v-text显示文本信息-->
          <td v-text="p.name"></td>
          <td v-text="p.sex"></td>
          <td v-text="p.age"></td>
          <td v-text="p.phone"></td>
          <td>
            <!--通过index来定位删除的函数-->
            <button @click="delPerson(index)">删除</button>
          </td>

        </tr>

        </tbody>
      </table>

    </div>
</template>

<script>
    export default {
        name: "MyDemo",
        data(){
          return{
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
            newPerson:{name:'',age:0, sex:'男',phone:''},  //用这个数据与上面做双向绑定来获取操作数据
          }
        },
        //methods是一个对象，可以在里面写函数方法
        methods:{
          //1.添加
          createNewPerson(){
            let {name,age,sex,phone} = this.newPerson   //将newPerson的各个字段赋值给定义的{}中的字段
            // 1.验证内容，校验内容信息
            if(name === ''){   //如果name的内容等于空，则提示不能为空
              alert('姓名不能为空！');
              return;  //返回
            }
            if(age <= 0 ){   //如果age的内容小于等于0，则提示年龄不正确
              alert('年龄不正确！');
              return;  //返回
            }
            if(phone === ''){   //如果phone的内容等于空，则提示手机号码不正确
              alert('手机号码不正确！');
              return;  //返回
            }
            //2.插入数据
            this.persons.unshift(this.newPerson);   //使用unshift方法，将newPerson的内容插入到persons中
            //3.清空或重置数据
            this.newPerson = {name:'',age:0, sex:'男',phone:''};  //将数据重置

          },
          //2.删除
          delPerson(index){
            this.persons.splice(index,1);   //使用splice函数删除persons中对应下表的数据，1表示删除一个
          }

        }
    }
</script>

<style scoped>
  #app{
    margin: 50px;
    width: 600px;
  }
  fieldset{
    border: 1px solod orangered;
    margin-bottom: 20px;
  }
  fieldset input{
    width: 200px;
    height: 30px;
  }
  table{
    width: 600px;
    border: 2px solid orangered;
    text-align: center;
  }
  thead{
    background-color: orangered;
  }

</style>
