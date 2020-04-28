<template>
    <div>
      <p>事件</p>
      <!--不传递参数默认返回的是一个事件对象-->
      <!--传递参数后，返回传递的参数-->
      <!--传入参数后，不能再直接获取到事件对象，要通过$event,这个引用式的方式获取到-->
      <button @click="clickBtn('撩课',$event)">点我</button>
      <h3>事件修饰符</h3>
      <!--在点击后，连接跳转之前，可以绑定一个事件-->
      <!--使用.prevent可以阻止后续的发生（即链接跳转），只执行点击事件函数-->
      <a href="http://www.baidu.com" @click.prevent="aClick">撩课</a>

      <!--使用.stop组织冒泡的发生-->
      <!--正常，如下，点击里面button按钮的同时其实也点击了父标签div，如果父标签绑定了点击函数-->
      <!--点击里面按钮的同时，也会执行父标签的点击函数，而实际上本意是只执行里面按钮的点击函数-->
      <!--不需要执行父标签的点击函数，为了阻止父标签函数冒泡出现，里面按钮使用.stop,表示-->
      <!--只执行里面点击函数的行为，执行完毕后，不再执行其他（即父标签的点击函数不会被执行）-->
      <!--以此便组织了父标签点击函数的冒泡行为-->
      <div style="width: 100px;height: 100px;background-color: red" @click="divClick">
        <button @click.stop="clickBtnTwo">还是点我</button>
      </div>

      <h3>按键修饰符</h3>
      <!--keyup，表示按键弹起时，执行函数dealKey-->
      <input type="text" @keyup="dealKey" placeholder="任意按键弹起">
      <!--.enter,表示回车按键弹起后，才执行函数dealkeyTwo,其他按键不执行-->
      <!--这个可以使用表示按某个按钮后需要触发什么事件-->
      <input type="text" @keyup.enter="dealKeyTwo" placeholder="回车按键弹起">

    </div>
</template>

<script>
    export default {
        name: "DealEvents",
        methods:{
          clickBtn(args,event){
            alert(0);
            console.log(args);
            console.log(event);
          },
          aClick(){
            alert(0);
          },

          clickBtnTwo(){
            alert('点击了里面的按钮');
          },

          divClick(){
            alert('点击了父标签');
          },

          dealKey(){
            alert(0);
          },
          // 拿到event事件
          dealKeyTwo(event){
            console.log(event.keyCode);   // 输出按键的编码,即回车按键的编码
          }
        }
    }
</script>

<style scoped>

</style>
