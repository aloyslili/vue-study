<template>
  <div>
    <Content></Content>
  </div>
</template>

<script>
// 1引入组件
import Content from './components/Content.vue';
export default {
  data() {
    return {
      message: 'hello233',
    };
  },
  // 组合式api，将同一个逻辑关注点相关代码收集在一起
  set() {
    // 通过ref响应式定义变量
    const counter = ref(0);
    // 暴露出去变量
    return { counter };
  },
  methods: {},
  //2 组件化
  components: { Content },
};
</script>

<style lang="scss" scoped></style>
