<template>
  <div>
  <h2>学校地址：{{address}}</h2>
  <h2>学校名称：{{name}}</h2>
  <!--
    ref属性
    1、被用来给元素或子组件注册引用的信息
    2、应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象
    ref=""
    获取方法： this.$ref.xxx

   -->
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        address: "海南",
        name: '琼台师院'
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>