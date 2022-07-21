<template>
  <div class="show_blog" v-theme:column="'narrow'">
  <h2>博客总览</h2>
  <input type="text" v-model="search" placeholder="搜索">
  <div v-for="blog in filteredBlogs" class="single-blog">
  <!-- 给标题添加一个颜色 -->
  <!-- router-link相当于a标签 -->
  <!-- 路由参数要写v-bind  :-->
    <router-link to="'/blog/' + blog.id">
    <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </router-link>
    <<article>
      {{blog.body | snippet}}
    </article>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogs:[],
        search: ""
      }
    },
    created() {
      // 请求数据
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(data) {
        // console.log(data);
        this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs)
      })
    },
    // 搜索过滤
    computed: {
      filteredBlogs:function() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
  // 局部过滤
 filter: {
    toUpperCase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>

<style>
  .shouw_blog {
    max-width: 800px;
    margin: 0 auto;

  }
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>