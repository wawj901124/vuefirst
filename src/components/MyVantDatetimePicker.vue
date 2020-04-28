<template>
    <div>
      <p>vant 时间选择插件</p>
      <!--vant 时间选择组件的使用，步骤2-使用-->
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </div>
</template>

<script>
    export default {
        name: "MyVantDatetimePicker",
        // vant 时间选择组件的使用，步骤3-设置数据
        data() {
          return {
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
          };
        },
    }
</script>

<style scoped>

</style>
