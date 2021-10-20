<template>
<!--  <Tutorial></Tutorial>-->
  <div class="wrapper" style="margin-top: 50px;;text-align: center">
    <a-button type="primary">
      <nuxt-link to="/login">跳转</nuxt-link>
    </a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    onJumpTo() {

    }
  },
  layout: "blog",
  asyncData({ params, error }) {
    return axios
      .get(`https://my-api/posts/${params.id}`)
      .then(res => {
        return { title: res.data.title }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>
