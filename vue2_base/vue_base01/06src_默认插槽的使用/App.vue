<template>
  <div id="app">
  <!-- 组件之间的传递
    可以实现组件复用
  -->
  <Fenlei title="美食" :listData="foods">
  <h2>哈哈哈</h2>
  </Fenlei>
  <Fenlei title="游戏" :listData="games"/>
  <Fenlei title="电影" :listData="films"/>
  </div>
</template>

<script>
import Fenlei from './components/Fenlei'
export default {
  name: 'App',
  components: {
    Fenlei
  },
  data() {
    return {
      foods:["火锅", "牛排"],
      games:["吃鸡","王者"],
      films:["你好啊"]
    }
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-around;
}
</style>
