<template>
  <div id="app">
  <!-- 组件之间的传递
    可以实现组件复用
  -->
    <Student name="李四" age="18"/>
    <!-- 写v-bind可以动态绑定数据 可以写一些表达式 -->

    <Student name="王五" age="18"/>
  </div>
</template>

<script>
import Student from './components/Student';
export default {
  name: 'App',
  components: {
    Student,
  },
};
</script>

<style lang="scss"></style>
