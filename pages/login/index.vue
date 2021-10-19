<template>
  <div class="login-wrapper">
    <h1 style="text-align: center">登录页</h1>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="Note">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender">
        <a-select
          v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            male
          </a-select-option>
          <a-select-option value="female">
            female
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
        <a-button type="primary" @click="back" style="margin-left: 12px">返 回</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: null
    }
  },
  methods: {
    handleSubmit() {

    },
    handleSelectChange() {

    },
    back() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>
