<template>
    <div>
      <h3>格式化人民币</h3>
      <!--过滤函数的引用，使用|，左边为原数据，右边为过滤函数-->
      <p>局部过滤器{{money | moneyFormat}}</p>
      <p>局部过滤器{{page | moneyFormat}}</p>

      <p>-----------------------------------</p>
      <!--全局过滤器，在main.js中注册-->
      <p>全局过滤器{{money | wholeMoneyFormat}}</p>
      <p>全局过滤器{{page | wholeMoneyFormat}}</p>

      <h3>格式化日期</h3>
      <p>{{nowtime}}</p>
      <p>格式化日期 {{nowtime | timeFormat}}</p>
      <p>格式化日期(只显示年月日) {{nowtime | timeFormat('YYYY-MM-DD')}}</p>
      <p>格式化日期(只显示时分秒) {{nowtime | timeFormat('HH:mm:ss')}}</p>
      <p>-----------------------------------</p>
      <p>全局格式化日期(只显示时分秒) {{nowtime | wholeTimeFormat}}</p>

    </div>
</template>

<script>
    import moment from 'moment'  //导入moment
    export default {
        name: "LkFilters",
        data(){
          return{
            money:22.343,
            page:189.4345,
            nowtime: new Date(),  //使用Date()函数获取当前日期
          }
        },
        //
        mounted(){
          setInterval(()=>{
            this.nowtime = new Date()
          },1000)  //每隔1秒，1000表示1秒，刷新一下时间
        },

        // filters,一个钩子函数，可以把局部过滤后要输出的格式的函数写在这里
        //局部过滤器
        filters:{
          moneyFormat(value){
            return '￥' + Number(value).toFixed(2); //表示将传入的数字，解析后输出带两位小数点的数据，使用四舍五入规则
          },
          // 时间格式化，格式化的的value,格式化的输出类型为format,
          //此处给format一个默认值，如果没有传入值，则使用默认形式，如果传入，则使用传入值
          timeFormat(value,format='YYYY-MM-DD HH:mm:ss'){
            return moment(value).format(format);  //以format变量值的形式格式化输出value变量的值
          }
        }
    }
</script>

<style scoped>

</style>
