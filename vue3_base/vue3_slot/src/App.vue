<template>
  <div id="app">
    <Countent>
      <button>按钮</button>
    </Countent>
    <Countent>
      <!-- 这就是具名插槽 -->
      <template v-slot:a><button>按钮1</button></template>
    </Countent>
  </div>
</template>

<script>
import Countent from './components/Countent.vue';
export default {
  data() {
    return {};
  },
  components: {
    Countent,
  },
};
</script>

<style lang="scss"></style>
