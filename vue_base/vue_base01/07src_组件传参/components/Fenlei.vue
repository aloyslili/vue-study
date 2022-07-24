<template>
  <div class="box">
  <!-- 默认插槽 -->
   <slot></slot>
  <h3>分类</h3>
  <ul>
    <li>{{title}}</li>
    <li v-for="(item, index) in listData" :key="index">{{item}}</li>
  </ul>
  </div>
</template>

<script>

  export default {
    name: 'School',
    data() {
      return {
      }
    },
    // 接受值 父亲传过来的
    props:["title", "listData"]
  }
</script>

<style>
  .box{
    background-color: red;
    width: 200px;
    height: 200px;
  }
</style>