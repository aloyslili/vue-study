<template>
  <div>
  <button @click="showMess">显示学生信息</button>
  <h2>学校名称：{{name}}</h2>
  <h2>学校地址：{{addrss}}</h2>
  </div>
</template>

<script>
// 引入混合
import hunhe from '../mixin.js'
  export default {
    name: 'School',
    data() {
      return {
        name: '万宁',
        addrss: '海南'
      }
    },
    // 使用混合 加s表示多个混合 必须写在数组里面
    mixins:[hunhe]
  }
</script>

<style lang="sass" scoped>

</style>