<template>
  <!--<div id="app">-->
    <!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
    <!--&lt;!&ndash;<router-view/>&ndash;&gt;-->
    <!--&lt;!&ndash;3.使用注册的组件&ndash;&gt;-->
    <!--&lt;!&ndash;<Template></Template>&ndash;&gt;-->
    <!--&lt;!&ndash;<ComputeAndWatch></ComputeAndWatch>&ndash;&gt;-->
    <!--&lt;!&ndash;<ClassAndStyle></ClassAndStyle>&ndash;&gt;-->
    <!--&lt;!&ndash;<IfAndShow></IfAndShow>&ndash;&gt;-->
    <!--&lt;!&ndash;<ListRender></ListRender>&ndash;&gt;-->
    <!--&lt;!&ndash;<ListRenderTwo></ListRenderTwo>&ndash;&gt;-->
    <!--&lt;!&ndash;<OtherInstruct></OtherInstruct>&ndash;&gt;-->
    <!--&lt;!&ndash;<MyDemo></MyDemo>&ndash;&gt;-->
    <!--&lt;!&ndash;<LianXi></LianXi>&ndash;&gt;-->
    <!--&lt;!&ndash;<DealEvents></DealEvents>&ndash;&gt;-->
    <!--&lt;!&ndash;<LkFilters></LkFilters>&ndash;&gt;-->
    <!--&lt;!&ndash;<TransitionAndAnimate></TransitionAndAnimate>&ndash;&gt;-->
    <!--&lt;!&ndash;<TransitionAndAnimateTwo></TransitionAndAnimateTwo>&ndash;&gt;-->
    <!--&lt;!&ndash;<TransitionAndAnimateThree></TransitionAndAnimateThree>&ndash;&gt;-->
    <!--&lt;!&ndash;<LifeCircle></LifeCircle>&ndash;&gt;-->
    <!--&lt;!&ndash;父组件调用子组件，通过属性，给子组件传入参数&ndash;&gt;-->
    <!--&lt;!&ndash;组件间传递参数，除了字符串类型的，其他类型的参数都需要动态绑定，要使用冒号&ndash;&gt;-->
    <!--&lt;!&ndash;父组件往子组件中传递任何类型的数据都可以&ndash;&gt;-->
    <!--&lt;!&ndash;<PropsComponent name="小撩妹妹" :age=18 :person="p" :logPerson="logPerson"></PropsComponent>&ndash;&gt;-->
    <!--&lt;!&ndash;子组件中定义了name为比传项，而父组件中没有传递name参数，则会有警告提示信息&ndash;&gt;-->
    <!--&lt;!&ndash;<PropsComponent  :age=18 :person="p" :logPerson="logPerson"></PropsComponent>&ndash;&gt;-->
    <!--&lt;!&ndash;ref，给元素或组件注册引用信息&ndash;&gt;-->
    <!--&lt;!&ndash;<p ref="word" class="word">我是即将被删除的</p>&ndash;&gt;-->
    <!--&lt;!&ndash;父组件绑定监听子组件通过$emit传递出的btnClick事件，然后触发父组件中的函数deleteP执行&ndash;&gt;-->
    <!--&lt;!&ndash;<CustomEvents @btnClick="deleteP"></CustomEvents>&ndash;&gt;-->
    <!--&lt;!&ndash;传递参数,父组件的函数deletePTwo要有相应的参数&ndash;&gt;-->
    <!--&lt;!&ndash;<CustomEvents @btnClickTwo="deletePTwo"></CustomEvents>&ndash;&gt;-->
    <!--<ProjectHeader></ProjectHeader>-->
    <!--<ProjectList></ProjectList>-->
    <!--<ProjectItem></ProjectItem>-->
    <!--<ProjectFooter></ProjectFooter>-->
  <!--</div>-->

    <!--&lt;!&ndash;project工程项目的div层&ndash;&gt;-->
    <!--<div class="todo-container">-->
        <!--<div class="todo-wrap">-->
          <!--&lt;!&ndash;头部组件进行数据插入&ndash;&gt;-->
          <!--&lt;!&ndash;<ProjectHeader :addTodo="addTodo"></ProjectHeader>&ndash;&gt;-->

          <!--&lt;!&ndash;使用监听的方式进行与ProjectHeader组件的添加数据交互，步骤2&ndash;&gt;-->
          <!--&lt;!&ndash;使用ref对组件进行注册，可以使用this.$refs.header进行调用&ndash;&gt;-->
          <!--<ProjectHeader ref="header"></ProjectHeader>-->

          <!--&lt;!&ndash;Vue中，除了字符串类型的不需要动态绑定的，其他类型的参数都需要用冒号动态绑定&ndash;&gt;-->
          <!--&lt;!&ndash;:todos="todos",父组件向子组件传入参数，参数为一个数组，要用冒号进行动态绑定&ndash;&gt;-->
          <!--&lt;!&ndash;:delTodo="delTodo",父组件向子组件传入参数，参数为一个函数，要用冒号进行动态绑定&ndash;&gt;-->
          <!--<ProjectList :todos="todos" :delTodo="delTodo"></ProjectList>-->
          <!--&lt;!&ndash;底部组件传入todos,selectedAllTodo&ndash;&gt;npm-->
          <!--&lt;!&ndash;<ProjectFooter :todos="todos"&ndash;&gt;-->
                         <!--&lt;!&ndash;:selectedAllTodo="selectedAllTodo"&ndash;&gt;-->
                         <!--&lt;!&ndash;:delFinishedTodos="delFinishedTodos"&ndash;&gt;-->
          <!--&lt;!&ndash;&gt;</ProjectFooter>&ndash;&gt;-->
          <!--&lt;!&ndash;插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤1&ndash;&gt;-->
          <!--<ProjectFooter>-->
            <!--&lt;!&ndash;插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤3，插入相应的插槽&ndash;&gt;-->
            <!--&lt;!&ndash;此处插入的标签要带一个slot属性，slot内容对应的就是子组件中插槽的名字&ndash;&gt;-->
            <!--<input slot="isCheck" type="checkbox" v-model="isCheck"/>-->
            <!--<span slot="finish">已完成{{finishedCount}}件 /总计{{todos.length}}件</span>-->
            <!--<button slot="delete" class="btn btn-warning" @click="delFinishedTodos">清除已完成任务</button>-->
          <!--</ProjectFooter>-->
        <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;vant的使用&ndash;&gt;-->
    <!--<div id="app">-->
        <!--<MyVantButton></MyVantButton>-->
        <!--<MyVantCell></MyVantCell>-->
        <!--<MyVantDatetimePicker></MyVantDatetimePicker>-->
    <!--</div>-->

    <!--&lt;!&ndash;Element饿了么PC端组件的使用&ndash;&gt;-->
    <!--<div id="app">-->
      <!--&lt;!&ndash;<MyElementDatePicker></MyElementDatePicker>&ndash;&gt;-->
      <!--<MyElementContainer></MyElementContainer>-->
    <!--</div>-->

    <!--路由Vue-Router学习-->
    <div id="app">
      <Home></Home>


    </div>
</template>

<script>
  // 1.引入组件，组件首字母大写,小写会报错
  import Template from './components/Template.vue'
  import ComputeAndWatch from './components/ComputeAndWatch.vue'
  import ClassAndStyle from './components/ClassAndStyle'
  import IfAndShow from './components/IfAndShow'
  import ListRender from './components/ListRender'
  import ListRenderTwo from './components/ListRenderTwo'
  import OtherInstruct from './components/OtherInstruct'
  import MyDemo from './components/MyDemo'
  import LianXi from './components/LianXi'
  import DealEvents from './components/DealEvents'
  import LkFilters from './components/LkFilters'
  import TransitionAndAnimate from './components/TransitionAndAnimate'
  import TransitionAndAnimateTwo from './components/TransitionAndAnimateTwo'
  import TransitionAndAnimateThree from './components/TransitionAndAnimateThree'
  import LifeCircle from './components/LifeCircle'
  import PropsComponent from './components/PropsComponent'
  import CustomEvents from './components/CustomEvents'
  import ProjectHeader from './components/ProjectHeader'
  import ProjectList from './components/ProjectList'
  import ProjectFooter from './components/ProjectFooter'
  import MyVantButton from './components/MyVantButton'
  import MyVantCell from './components/MyVantCell'
  import MyVantDatetimePicker from './components/MyVantDatetimePicker'
  import MyElementDatePicker from './components/MyElementDatePicker'
  import MyElementContainer from './components/MyElementContainer'
  import Home from './views/Home'

  //引入工具类
  import localStorageUtil from './utils/localStorageUtil';
  //发布和订阅，改造删除功能，步骤1-父组件导入pubsub-js
  import PubSub from 'pubsub-js'

  export default {
  name: 'App',
  // data(){
  //   return{
  //     p:{
  //       name:'张三丰',
  //       age: 600,
  //     }
  //   }
  // },

  // // project ,工程项目的data函数
  // data(){
  //     return{
  //         //数据
  //         // todos:[
  //         //     {title:'学习Vue的组件通信',finished:true},
  //         //     {title:'学习React的redux',finished:false},
  //         //     {title:'写一个Vue项目',finished:false},
  //         //     {title:'搬一车的砖',finished:true},
  //         // ]
  //         todos:localStorageUtil.readTodos(),  //使用本地存储获取数据
  //     }
  // },

  // //插槽方式改造父组件与ProjectFooter子组件的通信方式，步骤4，将原子组件中的计算属性放到父组件中
  // //因为现在的标签都在父组件中，子组件中只是定义了几个插槽而已
  // // 计算组件
  // computed:{
  //   finishedCount(){
  //     // reduce函数，一个数组方法，遍历数组，查出符合条件的就加1
  //     // total，不赋值时，默认为0
  //     // reduce遍历数组的一项命名为todo
  //     //如果一项中的finished字段的值为true,则返回1，为false，则返回0
  //     // total 加1或者加0
  //     //最后一个0 ，表示初始值为0，默认初始值也为0
  //     // ()=> ,为一个借读函数
  //     return this.todos.reduce(
  //       (total,todo)=> total + (todo.finished ? 1: 0),0
  //     );
  //   },

    // //控制是否选中，有多个逻辑，可以使用冒号，大括号，里面写多个函数逻辑
    // //每个属性都有get和set的方法
    // isCheck:{
    //   //获取
    //   get(){
    //     //如果选中的和总长度恒等于（===）
    //     //并且数组todos的长度大于0
    //     return this.finishedCount ===this.todos.length &&  this.todos.length>0;
    //   },
    //   //设置，点击单选按钮的时候，就会进入set函数,value为选项input的value值
    //   // 点击的时候，会自动把value传进来
    //   set(value){
    //     this.selectedAllTodo(value);  //调用selectedAllTodo函数，并传入属性值
    //   },
    // },
    // },

  // 2.注册组件
  components:{
    LianXi,
    Template,
    ComputeAndWatch,
    ClassAndStyle,
    IfAndShow,
    ListRender,
    ListRenderTwo,
    OtherInstruct,
    MyDemo,
    DealEvents,
    LkFilters,
    TransitionAndAnimate,
    TransitionAndAnimateTwo,
    TransitionAndAnimateThree,
    LifeCircle,
    PropsComponent,
    CustomEvents,
    ProjectHeader,
    ProjectList,
    ProjectFooter,
    MyVantButton,
    MyVantCell,
    MyVantDatetimePicker,
    MyElementDatePicker,
    MyElementContainer,
    Home,





  },

  //组件渲染完成后执行
  mounted(){
    //使用监听的方式进行与ProjectHeader组件的添加数据交互，步骤3
    //绑定自定义事件addTodo(由子组件提交的addTodo事件)监听
    //使用$on来监听header组件中的addTodo事件，监听到后，执行this,addTodo函数
    //不加括号的话，会自动将子组件中传入的todo参数，作为参数，传入到this.addTodo中执行
    this.$refs.header.$on('addTodo',this.addTodo); //$emit与$on是成对的对应的

    //发布和订阅，改造删除功能，步骤4-父组件App订阅子组件ProjectItem发布的删除消息（delTodo及其传入的参数）
    // 使用subscribe()函数来接受发布的消息
    // 第一个参数为接受的发布的函数名字，第二个参数为要执行的函数功能
    // ()=>{} 为一个借读函数
    //其中msg为子组件ProjectItem传入的函数名delTodo，token为子组件传入的参数this.index
    PubSub.subscribe('delTodo',(msg,token)=>{
      console.log(msg, token);   //输出msg和token
      this.delTodo(token);  //调用删除函数，删除相应index对应的内容
    });

  },

  //函数方法
  // methods:{
  //   logPerson(name,age){
  //     alert('来了！');
  //     alert(`姓名：${name}, 年龄：${age}`);
  //   },
  //   deleteP(){
  //     this.$refs.word.remove();  //使用remove()函数来直接删除word元素
  //   },
  //   //带参数
  //   deletePTwo(args){
  //     console.log(args);
  //     this.$refs.word.remove();  //使用remove()函数来直接删除word元素
  //   },
  // },

  //工程project文件的methods
  methods:{
    //插入一条数据
    addTodo(todo){
      this.todos.unshift(todo);  //往数组里插入一个对象，使用unshift方法
    },
    //根据索引删除一条记录
    delTodo(index){
      this.todos.splice(index,1);  //使用splice函数来删除todos对象中相应的列表项内容，1，表示删除一项
    },

    //是否选中所有的任务
    // 传入的是true,则遍历todos数组，将所有项的finished的值都设置为true
    // 传入的是false,则遍历todos数组，将所有项的finished的值都设置为false
    selectedAllTodo(isCheck){
      this.todos.forEach(todo=>{
        todo.finished = isCheck;  //将传入的参数赋值给每一项的finished
      });  //使用forEach函数遍历数组todos中每一项，且命令每一项为todo
    },
    //删除todos中，所有项的finished为ture的项
    delFinishedTodos(){
      //使用filter函数删选数组todos中的每一项，返回每一项的finished属性为false的项，再次赋值给todos
      this.todos = this.todos.filter(todo=> !todo.finished);
    },
  },

  //监视todos的变化
  watch:{
    //深度监视，
    todos:{
      //以下三个键值的顺序是固定的，不要乱写
      //表示一旦监听到变化，就会去保存todos到本地
      handler: localStorageUtil.saveTodos,   //handler后面是一个函数，表示监听到后要做什么内容
      deep:true,  //表示深度监视，不仅能够监视数组中的内容，还能 监视到数组里对象属性值的变化（一般监听，监听不到对象属性的变化）
      immediate:true,  //表示一进来就监听，为false时，表示有变化再监听

    },
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  /*#app{*/
    /*margin: 50px;*/
    /*width: 600px;*/
  /*}*/
  /*fieldset{*/
    /*border: 1px solod orangered;*/
    /*margin-bottom: 20px;*/
  /*}*/
  /*fieldset input{*/
    /*width: 200px;*/
    /*height: 30px;*/
  /*}*/
  /*table{*/
    /*width: 600px;*/
    /*border: 2px solid orangered;*/
    /*text-align: center;*/
  /*}*/
  /*thead{*/
    /*background-color: orangered;*/
  /*}*/
  /*.word{*/
    /*width: 300px;*/
    /*height: 200px;*/
    /*background-color: red;*/
    /*color: #fff;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  /*}*/

  /*project 工程项目的style*/
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
