<template>
  <!-- <h1>a:{{a}}</h1>
  <h1>b:{{b}}</h1>
  <button @click="handle">按钮</button> -->
  <div>firstName:<input type="text" v-model="firstName" ></div>
  <div>latstName:<input type="text" v-model="lasstName" ></div>
  <div>{{fullName}}</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, toRefs} from 'vue';


export default defineComponent({
  name: 'HomeView',
    // data() {
    //   return {
    //     a:1,
    //     b:2
    //   };
    // },
    setup(){
      // console.log("setup");
      // // ref是一个方法
      // let a = ref(1);
      // let b = ref(2);
      // const handle = () => {
      //   console.log("handle");
      //   a.value++;
      //   b.value++;
      // }
      // // 暴露变量给模板用
      // return {
      //   a,
      //   b,
      //   handle
      // }
      const user = reactive({
        firstName: "李",
        lasstName: "四"
      });
      const fullName = computed(()=> {
        return user.firstName + user.lasstName
      });
      return {
        ...toRefs(user),
        fullName
      }
    }
});
</script>
