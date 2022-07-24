<template>
  <div>
  <h2>姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// 局部混合
  import hunhe from '../mixin.js'
  export default {
    name: 'School',
    data() {
      return {
        name: '张三',
        sex: 'girl'
      }
    },
  mixins:[hunhe]
  }
</script>

<style lang="sass" scoped>

</style>