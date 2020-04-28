<template>
  <!--<div id="app">-->
  <div>
    <p>demo</p>
    <!--第一部分-->
    <fieldset>
      <legend>指令综合小练习</legend>
      <div>
        <span>姓名：</span>
        <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
      </div>
      <div>
        <span>年龄：</span>
        <input type="text" placeholder="请输入年龄" v-model="newPerson.name">
      </div>
      <div>
        <span>性别：</span>
        <select v-model="newPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>手机：</span>
        <input type="text" placeholder="请输入手机号码" v-model="newPerson.phone">
      </div>
      <button @click="createNewPerson">创建新用户</button>
    </fieldset>
    <!--第二部分-->
    <table>
      <thead>
      <tr>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
        <td>手机</td>
        <td>删除</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(p,index) in persons">
        <td v-text="p.name"></td>
        <td v-text="p.sex"></td>
        <td v-text="p.age"></td>
        <td v-text="p.phone"></td>
        <td>
          <button @click="delPerson(index)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
    export default {
        name: "LianXi"
    }
</script>

<style scoped>

</style>
