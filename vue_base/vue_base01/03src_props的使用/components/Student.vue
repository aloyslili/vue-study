<template>
  <div>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{myAge+1}}</h2>
  <!-- 不能在子组件中修改父组件的值 -->
 <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        myAge: this.age
      }
    },
    // 传递的信息 接受信息
    // props:['name', 'age'] //单接收的形式

    // 对象形式 接受时对数据类型限制
    // props:{
    //   name: String,
    //   age: Number
    // }
    methods:{
      updateAge(){
        this.myAge++
      }
    },
    props:['name', 'age']
    // props: {
    //   name:{
    //     type:String, //name的类型是字符串
    //     required: true //name是必要的
    //   },
    //   age:{
    //     type: Number,
    //     default: 99 //默认值
    //   }
    // }
  }
</script>

<style lang="sass" scoped>

</style>