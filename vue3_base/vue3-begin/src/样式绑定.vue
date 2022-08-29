<template>
  <div>
    <!-- 第一种 放置字符串-->
    <p style="color: red">hello</p>
    <!-- 第二种放置对象 可以放置多个 -->
    <p :style="{color: activeColor, 'background-color': bcg}">hello</p>
    <!-- 或者可以放在对象里面  属性值来自于data中的属性-->
    <p :style="Obj">hello</p>
    <!-- 对象形式 -->
    <p :style="[Obj, { border: '5px solid red'}]">你好啊</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: 'red',
      bcg: 'yellow',
      Obj:{
      activeColor: 'red',
      bcg: 'yellow'
      }
    };
  },
};
</script>

<style>

</style>
