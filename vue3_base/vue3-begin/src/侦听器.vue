<script>

export default {
    data(){
      return {
        message: '你好啊！',
        age: 20,
        user: {
          name: 'zs'
        }
    }
  },
  methods: {
    //
  },
  computed: {
  },
  watch: {
    // 监听数据的变化
    // 每当数据发生变化时，就会调用这个函数
    // 一个数据影响多个数据
    // 当发生变化才会进行监听
    // message: function (newMessage, oldMessage) {
    //   console.log(newMessage);
    //   console.log(oldMessage);
    //   // 异步操作，或者更复杂的操作
    // }
    // 写成一个对象的形式
    // 监听不到数据对象属性的变化，需要使用深度监听 deep 属于布尔值 深度侦听器一层一层的向下遍历，给对象每个属性都添加上侦听器
    message: {
      immediate: true, //初始化的时候调用额的函数
      handle: function(nemValue) {
        if (nemValue.length < 2 || nemValue > 5) {
          console.log("hahhha");
        }
      }
    },
    // user: {
    //   handle: function (newValue) {
    //     console.log(newValue);
    //   },
    //   deep: true //deep 属于布尔值 深度侦听器一层一层的向下遍历，给对象每个属性都添加上侦听器
    // }

    // 只监听name
     'user.name': {
      handle: function (newValue) {
        console.log(newValue);
      },
      deep: true //deep 属于布尔值 深度侦听器一层一层的向下遍历，给对象每个属性都添加上侦听器
    }
  }
}
</script>

<template>
  <div>
  <p>{{message}}</p>
  <button @click="message='你好'">改变message</button>
  <!-- v-model 数据的双向绑定 -->
  <input type="text" v-model="message">
  <h2>{{user.name}}</h2>
  <button @click="handle">监听</button>
  </div>
</template>

<style scoped>

</style>
