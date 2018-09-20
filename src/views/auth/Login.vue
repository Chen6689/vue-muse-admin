<template>
  <div class="login">
    <mu-form ref="form" :model="loginForm" label-position="top" class="login-container">
      <h3 class="title">系统登录</h3>
      <mu-form-item label="用户名" prop="account" :rules="accountRules" label-width="50px">
        <mu-text-field v-model="loginForm.account" prop="account"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" prop="password" :rules="passwordRules" label-width="30px">
          <mu-text-field type="password" v-model="loginForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="checkbox">
        <mu-checkbox v-model="loginForm.checkbox" label="记住密码"></mu-checkbox>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" style="width:100%;" @click.native.prevent="onSubmit">登录</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>

<script>
import ls from '../../utils/localStorage.js'
export default {
  name:'Login',
  data () {
    return {
      // loading: false,
      loginForm: {
        account: 'admin',
        password: '123456',
        checkbox: false,
      },
      accountRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
    }
  },
  methods:{
    onSubmit () {
      this.$refs.form.validate().then((isValid) => {
        if(isValid) {
          this.$nProgress.start();

          var param = {
            name: this.loginForm.account,
            password: this.loginForm.password,
          }

          this.$https.login(param).then(data => {
            this.$nProgress.done();
            let {status, result } = data;

              if (status == 'false') {
                this.$toast.message(result);
              } else {
                setTimeout(() => {
                    ls.setItem('user', result);
                    this.$router.push({ path: '/' });
                    this.$toast.message('登录成功！');
                }, 100)
              }
          })
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
</style>

