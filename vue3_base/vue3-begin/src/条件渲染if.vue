<template>
  <div>
    <h3 v-if="age > 18">条件渲染</h3>
    <h3 v-if="age <= 18">条件渲染2</h3>

    <!-- 在template 元素上使用v-if渲染分组 -->
    <!-- template就是一个包裹元素，是不可见的，在浏览器上是不可见的 -->
    <!-- v-show 也是条件渲染 -->
    <!-- v-show 的元素始终会被渲染并被保留在DOM中，v-show知识简单的display：none 只是被隐藏了 但是界面上还有 -->
    <!-- v-show不支持template，也不支持v-else  -->
    <template v-if="age > 18">
      <div>你好强</div>
      <div>你好强</div>
      <div>你好强</div>
      <div>你好强</div>
    </template>
    <div v-show="sex == 'man'">男人</div>
    <div v-show="sex != 'man'">男人</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
      sex: 'man'
    };
  },
};
</script>

<style>

</style>
