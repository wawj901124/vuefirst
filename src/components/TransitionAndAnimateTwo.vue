<template>
    <div>
      <p>动画</p>
      <!--点击事件：变量show的非值赋值给变量show-->
      <button @click="flag = !flag">切换</button><br>

      <!--Vue中，要做动画或者过渡都需要加一个transition标签-->
      <transition name="bounce">
        <!--使用冒号动态绑定src地址，否则不会识别pic-->
        <!--v-if决定是否显示-->
        <img v-if="flag" :src="pic" alt="">

      </transition>
    </div>
</template>

<script>
    import pic from '@/assets/img_02.jpg'  //使用@,就自动到当前项目的src目录下
    export default {
        name: "TransitionAndAnimateTwo",
        data(){
          return{
            pic:pic,
            flag:true,
          }
        }
    }
</script>

<style scoped>
  .bounce-enter-active{  /*进入生效动画*/
    animation: bounce .5s;   /*0.5秒内完成bounce动画，下面使用@keyframes定义的动画*/

  }
  .bounce-leave-active{ /*离开生效动画*/
    animation: bounce .5s reverse;   /*0.5秒内完成bounce动画，下面使用@keyframes定义的动画*/
                                     /*reverse，反转，反着出去*/

  }
  @keyframes bounce {  /*用 @keyframes 来自己写动画，分三个档，0%，50%，100%*/
    0%{
      transform: scale(0);   /*倍数为0，即不显示*/
    }
    25%{
      transform: scale(0.2);   /*倍数为1.5，即显示1.5倍大*/

    }
    50%{
      transform: scale(0.4);   /*倍数为1.5，即显示1.5倍大*/

    }
    75%{
      transform: scale(0.6);   /*倍数为1.5，即显示1.5倍大*/

    }
    100%{
      transform: scale(1);   /*倍数为1，即正常显示*/
    }
  }

</style>
