<template>
  <div>
    <h2>我是Content的组件内容</h2>
    <div>
      <slot></slot>
      <slot name="a"></slot>
      <slot name="b"></slot>
      <slot name="c"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>


