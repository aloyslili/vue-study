<script>
// 声明式渲染，可以提高开发效率

export default {
    data(){
    return{
      num: 0,
      name: "zs",
      c: 90
    }
  },
  // 给vue实例方法
  methods: {
    changeMessage: function() {
      this.name='ls'
    }
  }
}
</script>

<template>
  <div>
    <h2>{{num}}</h2>
    <h2>{{name}}</h2>
    <!-- 不管如何更新，都不会更改 -->
    <span v-once>{{name}}</span>
    <button @click="changeMessage">改变名字</button>
    <!-- v-bind是绑定属性的内容 动态的绑定内容-->
    <p v-bind:c='c'>v--bind绑定</p>
    <!-- v-on 其实就是@符号 -->
  </div>
</template>

<style scoped>

</style>
