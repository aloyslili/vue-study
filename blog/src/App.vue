<template>
  <div id="app">
  <!-- <AddMyBlog></AddMyBlog> -->
  <!-- <ShowBlogs></ShowBlogs> -->
  <BlogHeader></BlogHeader>
  <router-view></router-view>
  </div>
</template>

<script>
import AddMyBlog from './components/AddMyBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
 export default {
  name: 'app',
  components: {
    AddMyBlog,
    ShowBlogs,
    BlogHeader
  }
 }
</script>
<style lang="scss">

</style>
