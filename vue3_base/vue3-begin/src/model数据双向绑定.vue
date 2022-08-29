<template>
  <div>
    <!-- 表单输入框双向绑定
    v-model 实时的更新视图里面的数据
    v-model 的原理： 通过v-bind绑定一个value属性
                    通过v-on给当前元素添加一个input的事件
    -->
    <input type="text" v-model="msg">
    <h2>{{msg}}</h2>

    <!-- 不适用v-model实现双向绑定事件 v-on:vaule是单向数据绑定，不会双向修改数据 -->
    <!-- 通过事件对象去修改input里面的值 -->
    <input type="text" :value="msg" @input="changeValue">
    <h2>{{msg}}</h2>


    <!-- 复选框中使用v-model -->
    <!-- 单个勾选框，v-model为布尔值 -->
    <input type="checkbox" v-model="checked">
    <h2>{{checked}}</h2>
    <!-- 多个复选框  v-model只是双向绑定 获取的数组并没有获取到值 所以要用value来获取值-->
    <input type="checkbox" v-model="friuts" value="西瓜">西瓜
    <input type="checkbox" v-model="friuts" value="西红柿">西红柿
    <input type="checkbox" v-model="friuts"  value="荔枝">荔枝
    <input type="checkbox" v-model="friuts" value="龙眼">龙眼
    <h2>喜欢的水果：{{friuts}}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0,
      msg: 'hello',
      // 布尔值
      checked: '',
      friuts:[]
    };
  },
  methods: {
    changeValue(e) {
      // 修改input里面的value，实现双向绑定数据
      console.log(e)
      // 实现数据双向修改数据
      this.msg = e.target.value
    }
  }

};
</script>

<style lang="scss" scoped>
</style>


