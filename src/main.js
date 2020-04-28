// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局配置的css样式,可以全局使用css样式
import './assets/index.css'

//vant按钮组件的使用，步骤1-导入
import { Button } from 'vant';
Vue.use(Button);

//vant 单元格组件的使用，步骤1-导入
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

//vant 时间选择组件的使用，步骤1-导入
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);

//element插件配置-步骤2-引入配置插件js
import './plugins/element.js'


// 阻止启动生产消息
Vue.config.productionTip = true;



// 自定义指令分为全局指令和局部指令
// 全局指令可以作用于所有组件
// 局部指令只作用于本组件
// 全局指令一般在，main.js中定义
/*
* 注册全局指令，用Vue的directive函数
* id是为指令取一个名字
* definition是为指令定义指令的函数功能
* el是作用于哪个标签,第一项，如下upper-word
* binding,和指令相关的容器对象,属性 通过binding，第二项，如下
* 通过el中的textContent来设置内容
* 通过binding中的value来拿到元素的内容，元素的属性，数据等
* toUpperCase()函数可以将内容转化为大写
* */
Vue.directive('upper-word',(el,binding)=>{
  console.log(el,binding);
  el.textContent = binding.value.toUpperCase();
});

//注册全局过滤器
//Vue，为全局的实例
//.filter,可以通过它自定义全局过滤器
//第一项为过滤器的名字
//第二项为过滤器的方法，括号中的参数时要过滤的属性,一般为value,即内容值
Vue.filter('wholeMoneyFormat',(value)=>{
  return '￥' + Number(value).toFixed(4);
});

//全局格式化日期
import moment from 'moment'
Vue.filter('wholeTimeFormat',(value,format='YYYY-MM-DD HH:mm:ss')=>{
  return moment(value).format(format);  //以format变量值的形式格式化输出value变量的值
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


