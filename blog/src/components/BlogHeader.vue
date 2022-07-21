<template>
  <div>
  <nav>
    <ul>
      <li>
      <router-link to='/' exact>博客</router-link>
      <router-link to='/add' exact>写博客</router-link>
      </li>
    </ul>
  </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0 auto;

  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  nav {
    width: 540px;
    background: crimson;
    padding: 30px  0;
    margin-bottom: 40px;
  }
  .router-link-active {
    background: rgba(255, 255, 255, 0.8);
    color: #444;
  }
</style>