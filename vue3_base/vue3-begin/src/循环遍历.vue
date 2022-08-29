<template>
  <div>
    <!-- v-for指令基于数组来渲染一个列表 -->
    <!-- v-for 可以有两个参数 -->
    <!-- v-for 中的in 也可以用of -->
    <ul>
      <li v-for="item in person" :key="item">{{item}}</li>
      <!-- item 代表数组中的每一个元素，index表示元素的下标-->
      <li v-for="(item,index) in person" :key="index">{{item}}=={{index}}</li>
      <!-- v-for里面使用对象 item表示键值 -->
      <ul>
        <li v-for="item in personObj" :key="item">{{item}}</li>
      </ul>
    </ul>
    <!-- 为什么添加key值: 为了给key一个提示, 以便跟踪每个节点的身份,从而重用和重新排序现有元素 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      person: ['zs', 'ls', 'ww'],
      personObj:{name: 'zs',age:'女'}
    };
  },
};
</script>

<style>

</style>
