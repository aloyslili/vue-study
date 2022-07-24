<template>
  <div id="app">
  <!-- 组件之间的传递
    可以实现组件复用
  -->
    <Student/>
    <School/>
  </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School'
export default {
  name: 'App',
  components: {
    Student,
    School
  },
};
</script>

<style lang="scss"></style>
