<template>
  <div>
    <!--
      响应式数组方法有:
      push\poop\shift\unshift\splice\sort\reserve
     -->
  </div>
</template>

<script>
  export default {
  data() {
      return {
        list:[1, 2, 3, 3, 4]
      }
  },
  methods: {
    change: function () {
      // 通过索引值去修改
        this.list[5] =7
      }
    }
  }
</script>

<style>

</style>