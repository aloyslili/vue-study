<template>
  <div id="single-blog">
  <h2>{{blog.title}}</h2>
  <article>{{blog.body}}</article>
  </div>
</template>

<script>
  export default {
    name: 'single-blog',
    data() {
      return {
        // 通过parms获取路由参数
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      // 请求数据
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(function(data) {
        // console.log(data);
        // this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs)
        this.blog = data.body;
      })
    },
  }
</script>

<style lang="sass" scoped>

</style>