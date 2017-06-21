<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <a href="" class="button is-primary">ss</a>
      <a class="button is-primary is-outlined">Outlined</a>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
// import axios from 'axios'

export default {
  components: {
    Logo
  },
  props: {
    // propA: {
    //   type: String,
    //   required: true
    // },
  },
  data: function () {
    return {
        //
    }
  },
  methods: {
    //
  },
  watch: {
    //
  },
  mounted: function () {
    this.$axios.get('api/test')
      .then(response => {
        console.log(response.data)
      })
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
