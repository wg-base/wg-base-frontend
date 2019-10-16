<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">欢迎登陆 & wg-base-frontend</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login/'
export default {
  components: {
      "login-form":LoginForm
  },
  methods: {
    handleSubmit ({ userName, password }) {
        console.log(userName,password)
        this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
