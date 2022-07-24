<template>
  <div>
  <h2>姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '张三',
        sex: 'girl'
      }
    },

  }
</script>

<style lang="sass" scoped>

</style>