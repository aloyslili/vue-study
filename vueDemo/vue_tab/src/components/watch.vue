<template>
  <div>
    <h2>侦听属性</h2>
    <input type="text" v-model="num">
  </div>
</template>

<script>
export const name = '';

export default {
  data() {
    return {
      num: 10
    };
  },
  methods: {},
  computed: {},
  watch: {
    // 监听器watch
    // data里面的值有发生变化的时候，就去监听改变
    // wathc里面是没有返回值的
    num() {
      console.log('hh')
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>


