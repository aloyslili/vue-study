<script>
// 声明式渲染，可以提高开发效率

export default {
    data(){
    return{
      message: "helloWord"
    }
  },
  // 给vue实例方法
  methods: {
    //
  },
  computed: {
    // // 计算属性： 只要依赖值不变，那么不会重新计算，计算属性将基于他们的相应依赖关系缓存，提高性能
    // reverseMsg:function(){
    //   // 直接写返回值
    //   return this.message.split('').reverse().join();
    // }
    // 每个计算属性都有一个getter和一个setter方法
    // 计算属性一般没有set方法，计算属性是只读属性
    reverseMsg: {
      set: function (velue) { //set方法在设置或者更改计算属性的时候调用 一般只有一个参数
        console.log(value);
        this.message = velue
      },
      get: function(){
        return this.message.split('').reverse().join('')
      }
    }
  }
}
</script>

<template>
  <div>
  <p>{{message}}</p>
  <!-- 直接调用计算属性 -->
  <p>{{reverseMsg}}</p>
  <p>{{message}}</p>
  <p>{{message}}</p>
  <button @click="reverseMsg = '你好'">改变message</button>
  </div>
</template>

<style scoped>

</style>
