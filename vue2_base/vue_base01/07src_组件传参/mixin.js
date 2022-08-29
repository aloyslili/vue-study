// 共同的配置，然后暴露出去
export const hunhe = {
  methods: {
    showMess() {
      alert(this.name)
    }
  },
  // 挂载
  mounted() {
    console.log('你好啊！')
  }
}