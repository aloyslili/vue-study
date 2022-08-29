<template>
  <div>
    <h2>选项卡</h2>
    <div class="menu">
      <ul>
        <li :class="{ active: isActive == 0 }" @click="selectActive(1)">娱乐新闻</li>
        <li :class="{ active: isActive == 1 }" @click="selectActive(2)">体育新闻</li>
        <li :class="{ active: isActive == 2 }" @click="selectActive(3)">汽车新闻</li>
      </ul>
    </div>
    <div class="main">
      <ul>
        <li v-for="(item,i) in list[0]" :key="i">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1,
      list: [
        ['娱乐新闻', '新闻1', '新闻2', '新闻3'],
        ['体育新闻', '新闻1', '新闻2', '新闻3'],
        ['汽车新闻', '新闻1', '新闻2', '新闻3'],
      ],
    };
  },
  methods: {
    selectActive(i) {
      this.isActive = 0;
    },
  },
  computed: {},
  watch: {},
  mounted() {},
};
</script>

<style scoped>
.menu {
  width: 800px;
  /* flex布局 */
  /* display: flex; */
  margin: 0 auto;
}
.active {
  color: red;
}
ul {
  display: flex;
  margin: 0;
  padding: 100px;
  list-style-type: none;
  justify-content: space-around;
}
</style>
