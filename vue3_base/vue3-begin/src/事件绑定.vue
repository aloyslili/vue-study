
<template>
  <div>
    <!-- 事件监听使用v-on @; 来监听DOM事件并触发执行一些JavaScript -->
    <!-- 绑定参数不需要参数 -->
    <button @click="changeCounter">{{counter}}</button>

    <!-- 绑定需要参数 -->
    <button @click="change(20)">{{counter}}</button>

    <!-- 事件对象 -->

    <!-- 绑定多个事件(函数) 半丁多个函数要添加括号 -->
   <button @click="change(20),changeAge()">{{counter}}{{age}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      age: 18
    }
  },
  methods: {
    change: function (a) {
      this.counter += a
    },
    // 只有一个形参,只有一个事件对象e
    changeCounter: function (e) {
      this.counter++
      console.log(e)
    },
    changeAge: function () {
      this.age++
    }
  }
}
</script>

<style>

</style>