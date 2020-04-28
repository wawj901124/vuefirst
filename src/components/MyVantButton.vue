<template>
    <div>
      <p>vant button使用</p>
      <!--vant按钮组件的使用，步骤2-使用-->
      <van-button class="btn" type="default">默认按钮</van-button>
      <van-button disabled size="large"class="btn" type="primary">主要按钮</van-button>
      <van-button loading loading-text="加载中..."  class="btn" type="info">信息按钮</van-button>
      <van-button block class="btn" type="warning">警告按钮</van-button>
      <van-button to="index" icon="star-o" class="btn" type="danger">危险按钮</van-button>
    </div>
</template>

<script>
    export default {
        name: "MyVantButton"
    }
</script>

<style scoped>
  .btn{
    margin: 10px;
  }

</style>
