<template>
    <div>
      <p>使用第三方动画</p>
      <!--点击事件：变量show的非值赋值给变量show-->
      <button @click="flag = !flag">切换</button><br>

      <!--Vue中，要做动画或者过渡都需要加一个transition标签-->
      <!--enter-active-class="animated tada"，进入生效动画直接使用animated中的tada样式-->
      <!-- leave-active-class="animated bounceOutRight" ，离开生效动画直接使用animated中的bounceOutRight样式-->
      <!--:duration="{enter:1000,leave:500}",表示持续时间，进来花费1000毫秒，即1秒，出去花费500毫秒，即半秒-->
      <transition
        enter-active-class="animated rollIn"
        leave-active-class="animated rollOut"
        :duration="{enter:1000,leave:500}"
      >
        <!--使用冒号动态绑定src地址，否则不会识别pic-->
        <!--v-if决定是否显示-->
        <img v-if="flag" :src="pic" alt="">

      </transition>
    </div>
</template>

<script>
    import pic from '@/assets/img_02.jpg'  //使用@,就自动到当前项目的src目录下
    import animate from 'animate.css'   //导入animate.css
    export default {
        name: "TransitionAndAnimateThree",
        data(){
          return{
            pic:pic,
            flag:true,
          }
        }
    }
</script>

<style scoped>

</style>
