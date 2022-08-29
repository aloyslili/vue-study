<template>
  <div>
    <!-- 父子组件的访问方式 -->
    <!-- 父组件访问子组件：$refs $children -->
    <!-- 子组件访问父组件：$parent -->
    <!-- 子组件访问根组件： $root  -->
    <Hello ref="hello"></Hello>
  </div>
</template>

<script>
import Hello from './Hello.vue';
export default {
  data() {
    // data为什么是一个函数，让每一个组件对象都返回一个新的对象，不会造成数据污染
    return {
      msg:"hello word"
    }
  },
  methods: {
    //1、 在子组件中，通过$emit来触发事件
    sendParent() {
      // this.$emit('自定义事件名称','发送的事件的参数')
      this.$emit('injectMsg',this.msg)
    }
  },
  mounted() {
    console.log(this.$refs)
  },
  components: {
    Hello,
  },
};
</script>

<style lang="scss" scoped></style>
