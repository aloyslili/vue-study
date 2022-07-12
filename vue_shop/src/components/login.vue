<template>
  <div class="login_content">
    <div class="login">
      <div class="touxiang">
        <img src="../assets/touxiang.webp" />
      </div>
      <!-- 表单区域 -->
      <el-form :model="loginform" ref="loginFormRef" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input prefix-icon="iconfont icon-user" v-model="loginform.userName"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="iconfont icon-3702mima" v-model="loginform.password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据绑定
      loginform: {
        userName: 'admin',
        password: 123456,
      },
      // 表单验证规则
      loginFormRules: {
        // 验证用户名是否合法
        userName: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4到 15 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      console.log(this);
      // 获取整个对象的值,loginFormRef获取表单的引用对象
      this.$refs.loginFormRef.resetFields();
    },
    // 登录欲验证
    login() {
      this.$refs.loginFormRef.validate(async value => {
        console.log(value);
        // 如果值不对，就不发起请求 直接返回
        if(!value) return;
        // 请求方法
        const { data: res } = await this.$http.post("login",this.loginform)
        console.log(res)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login_content {
  height: 100%;
  background-color: #2b4b6b;
  .login {
    width: 400px;
    height: 300px;
    background-color: rgb(247, 247, 247);
    /* 垂直居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    .touxiang {
      width: 130px;
      height: 130px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}

.btns {
  /* 向右对齐 */
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  top: 80px;
  .el-input {
    margin-top: 20px;
  }
}
</style>
