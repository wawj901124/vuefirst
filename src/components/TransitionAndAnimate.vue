<template>
    <div>
      <p>过渡和动画</p>
      <h3>过渡</h3>
      <!--点击事件：变量show的非值赋值给变量show-->
      <button @click="show = !show">切换</button>

      <!--Vue中，要做动画或者过渡都需要加一个transition标签-->
      <transition name="fade">
        <!--用v-if来设置要不要显示-->
        <div class="box" v-if="show">撩课学院</div>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "TransitionAndAnimate",
        data(){
          return{
            show:false,  //默认不显示
          }
        }
    }
</script>

<style scoped>
  .box{
    width: 200px;
    height: 200px;
    background-color: red;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;   /*项居中对齐*/
  }

  /*过渡6个状态，此处只定义了四个*/
  .fade-enter, .fade-leave-to{  /*进入和结束完成的状态*/
    opacity: 0;   /*透明度为0*/
    transform: translateX(200px) scale(3);  /*横向移动200像素,缩放3倍*/
  }
  .fade-enter-active,.fade-leave-active{ /*进入生效和离开生效*/
    transition: all 2s;  /*2秒内完成过渡动画*/
  }
</style>
