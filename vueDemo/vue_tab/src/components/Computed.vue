<template>
  <div>
    <!-- 属性当成方法使用 -->
    <div>{{getMsg}}</div>
  </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    // computed是一个对象
    // 计算属性是由返回值
    getMsg() {
      return 10
    }
  },
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>


