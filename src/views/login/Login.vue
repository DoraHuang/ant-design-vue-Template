<template>
  <div class="common-layout">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo" class="logo" :src="logoImg" />
          <span class="title">u-Planning</span>
        </div>
      </div>
      <div class="login">
        <!-- Email: <a-input v-model="email" :disabled="isAuthenticated" />

        <a-button @click="login" :disabled="isAuthenticated"> login </a-button>

        <a-button @click="logout" :disabled="!isAuthenticated"> logout </a-button>

        <div class="warning">
          <p v-for="(err, idx) in errorMessages" :key="idx">
            {{ err }}
          </p>
        </div> -->
        <a-form  v-model:value="form">
          <a-tabs size="large" :tabBarStyle="{ textAlign: 'center' }" style="padding: 0 2px">
            <a-tab-pane tab="登入" key="1">
              <a-alert
                type="error"
                :closable="true"
                v-show="error"
                :message="error"
                showIcon
                style="margin-bottom: 24px"
              />
              <a-form-item name="account">
                <!-- <a-input v-model:value="email" placeholder="email" :disabled="isAuthenticated">
                  <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                </a-input> -->
                <a-input v-model:value="form.user_name" placeholder="TestUser">
                  <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                </a-input>
                <a-input v-model:value="form.password" type="password" placeholder="0000">
                  <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
                </a-input>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
          <!-- <div>
            <a-checkbox :checked="true">記住我</a-checkbox>
          </div> -->

          <a-button
            :loading="logging"
            style="width: 100%; margin-top: 24px"
            size="large"
            htmlType="submit"
            type="primary"
            :disabled="isAuthenticated"
            @click="login"
            >登入</a-button
          >
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed, ref,onMounted } from 'vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import { createRouter, createWebHistory, useRouter } from 'vue-router';
  import logo from '/@/assets/plan.png';
  import { modalInfo, modalError } from '/@/components/Modal.js';
  import { Login, Logout, GetUserInfo } from '/@/api/api.js';

  import { useStore } from 'vuex';
  export default defineComponent({
    name: 'Login',
    components: { UserOutlined, LockOutlined },

    setup() {
      const store = useStore();
      const isAuthenticated = computed(() => store.state.isAuthenticated);
      const form = ref({ user_name: 'TestUser', password: '0000' });
      const router = useRouter();
      function onSubmit(e, value) {
        if (form.value.user_name == 'admin' && form.value.password == '123456')
          router.push('/versionTable');
        else modalError('Error', 'UserName:TestUser,Password:0000');
      }
      const email = computed({
        get() {
          return store.state.claims.emailaddress;
        },
        set(value) {
          store.state.claims.emailaddress = value;
        },
      });
      const errorMessages = ref([]);
      const logindata = computed(() => {
        console.log('logindata');
        return { email: email.value };
      });
      onMounted(()=>{
        console.log()
       if(store.state.isAuthenticated == true)
            router.push('/versionlist/demandStatus');
      })
      function login() {
        Login(form.value, store)
          .then((data) => {
            store.state.isAuthenticated = true;
            GetUserInfo(store);
            router.push('/versionlist/demandStatus');
            errorMessages.value = [];
          })
          .catch(function (response) {
            console.log(response);
            if (!!response.rtnMsg) modalError('Error', 'ErrorMessage：' + response.rtnMsg);
            else modalError('Error', '帳號或密碼錯誤');
          });
      }
      function logout() {
        Logout(store);
      }

      return {
        logoImg: ref(logo),
        logging: false,
        error: '',
        router,
        onSubmit,
        form,
        isAuthenticated,
        email,
        errorMessages,
        login,
        logout,
      };
    },
  });
</script>

<style lang="less" scoped>
  .common-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background-color: @layout-body-background;
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 110px;
    background-size: 100%;
    .content {
      padding: 32px 0;
      flex: 1;
      @media (min-width: 768px) {
        padding: 112px 0 24px;
      }
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: @title-color;
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: @text-color-second;
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .login {
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button {
          font-size: 14px;
        }
      }
      .ant-col {
        width: 100% !important ;
      }
      .ant-form-item-control-wrapper {
        width: 100% !important;
      }
      .icon {
        font-size: 24px;
        color: @text-color-second;
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: @primary-color;
        }
      }
    }
  }
</style>
