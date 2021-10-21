<template>
<!--  <Tutorial></Tutorial>-->
  <div class="wrapper" style="margin-top: 50px;;text-align: center">
    <a-button type="primary">
      <nuxt-link to="/login">跳转</nuxt-link>
    </a-button>
    <div class="result" style="text-align: center">
      <span>结果:</span>
      <button @click="onTest"> 测试</button>
      <br>
      {{errorCode}}
    </div>
  </div>
</template>

<script>
import api from "../api"
export default {
  data() {
    return {

    }
  },
  methods: {
    onJumpTo() {

    },
    onTest() {

      console.log(this.$api)
    }
  },
  layout: "blog",
  asyncData({ params, error }) {
    // return axios
    //   .get(`https://my-api/posts/${params.id}`)
    //   .then(res => {
    //     return { title: res.data.title }
    //   })
    //   .catch(e => {
    //     error({ statusCode: 404, message: 'Post not found' })
    //   })
    console.log("环境：", process.server);
    console.log("环境：", process);
    console.log("参数：", params);
    // return api.questTest().then(res => {
    //   // debugger;
    //   return { errorCode: res.errorCode }
    // })
  }
}
</script>
