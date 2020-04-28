<template>
    <div>
      <!--v-model:界面数据的双相绑定，是一个高级语法糖-->
      <label>姓：<input type="text" placeholder="请输入姓氏" v-model="firstName"></label><br/>
      <label>名：<input type="text" placeholder="请输入名字" v-model="lastName"></label>
      <p>-------------------------------------------------------------------</p>
      <!--单向，只设置get方法-->
      <label>姓名（computed单向）：<input type="text" placeholder="请输入姓名" v-model="fullNameOne"></label>
      <p></p>
      <!--双向，get方法和set方法都设置-->
      <label>姓名（computed双向）：<input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label>
      <p></p>
      <!--单向，watch监听，watch只能监听值的变化，不能做成双向的，只能是单向的-->
      <label>姓名（watch单向）：<input type="text" placeholder="请输入姓名（watch监听）" v-model="fullNameThree"></label>


    </div>
</template>

<script>
    export default {
        name: "ComputeAndWatch",
        data(){
          return{
            firstName:'', // 姓
            lastName:'',  // 名
            //  被watch监听改变，需要先定义，否者无法使用，此处进行定义
            fullNameThree:'',
          }
        },
      // 计算属性组件使用computed
      // 配置计算属性
      computed:{
          // 计算属性 姓名
          //计算组件的属性是通过函数的形式来体现
          // 一个属性有两个方法，一个是get,一个是set,一个取，一个入
          fullNameOne:{
            get(){
              // 凡是组件上的属性，都可以通过this来获取
              return this.firstName + '.' + this.lastName
            }
          },
          fullNameTwo:{
            get(){
              console.log('调用了fullNameTwo的getter方法')
              // 凡是组件上的属性，都可以通过this来获取
              return this.firstName + '.' + this.lastName
            },
            set(value){
                console.log(`调用了fullNameTwo的setter方法,值：${value}`)
              //  更新firstName和lastName
                let names = value.split('.')
                console.log(names)
                this.firstName = names[0]
                this.lastName = names[1]
            }

          }
      },

      // watch组件
      watch:{
        //    监听firstName
          firstName(value){
            console.log(`watch监听到firstName发生改变：${value}`)
            // 更新fullNameThree
            this.fullNameThree = value + '.'+ this.lastName
          },
          //    监听lastName
          lastName(value){
            console.log(`watch监听到lastName发生改变：${value}`)
            // 更新fullNameThree
            this.fullNameThree = this.firstName + '.'+ value
          }
      }

    }
</script>

<style scoped>

</style>
