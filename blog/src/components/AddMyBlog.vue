<template>
  <div class="add_blog">
  <h2>添加博客</h2>
  <form v-if="!submmited">
  <label>博客标题</label>
  <input type="text" v-model="blog.title" requiry />

  <label>博客内容</label>
  <<textarea v-model="blog.content"></textarea>

  <!-- 博客分类 -->
  <div class="checkboxes">
   <label>vue.js</label>
   <input type="checkbox" value="vue.js" v-model="blog.categories">

    <label>javascript</label>
   <input type="checkbox" value="javascript" v-model="blog.categories">

    <label>html</label>
   <input type="checkbox" value="html" v-model="blog.categories">

    <label>css</label>
   <input type="checkbox" value="css" v-model="blog.categories">
  </div>

  <label>作者：</label>
  <select v-model="blog.author">
   <option v-for="author in authors">{{author}}</option>
  </select>
  <button v-on:click.prevent="post">添加博客</button>
  </form>
  <div v-if="submmited">
    <h3>添加博客成功</h3>
  </div>
  <div>
    <h3>博客总览</h3>
    <p>博客标题:{{blog.title}}</p>
    <p>博客内容:{{blog.content}}</p>
    <p>博客分类：</p>
    <ul>
    <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <p>作者：{{blog.author}}</p>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'add_blog',
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: '',

        },
        authors: ["Hani", "Henry"],
        submmited: false
      }
    },
    methods: {
      post:function() {
        this.$http.post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1

        })
        // 成功时返回的内容
          .then(function(data) {
            console.log(data);
            this.submmited = true;
          })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
