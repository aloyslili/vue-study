<template>
  <div>
  <button>显示学生信息</button>
  <h2>学校名称：{{name}}</h2>
  <h2>学校地址：{{addrss}}</h2>
  </div>
</template>

<script>

  export default {
    name: 'School',
    data() {
      return {
        name: '万宁',
        addrss: '海南'
      }
    },
  }
</script>

<style lang="sass" scoped>

</style>