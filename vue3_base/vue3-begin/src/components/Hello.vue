<template>
  <div>hello</div>
  <h2>{{message}}</h2>
  <div>{{aa}}</div>
</template>

<script>
export const name = '';

export default {
  data() {
    return {};
  },
  methods: {},
  // hello 拿值 通过数组形式 通过属性拿值
  // props:['message', 'aa']


  props: {
    //对象形式俩写
    // message: String
    message: {
      type: String,
      // 传默认值
      default: 'hhh'
      // 必传值 required 是一个布尔值
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


