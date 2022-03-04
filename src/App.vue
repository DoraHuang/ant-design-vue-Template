<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script>
  import { ref, nextTick, provide, defineComponent, computed } from 'vue';
  import Logo from '/@/components/Logo.vue';
  import { createRouter, createWebHistory, useRouter, useRoute } from 'vue-router';
  import {
    // menu
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    // header
    HomeFilled,
    SettingFilled,
  } from '@ant-design/icons-vue';
  import { Modal } from 'ant-design-vue';
  import { useStore } from 'vuex';
  //import { IsLogin, GetUserInfo } from '/@/api/api.js';
  export default defineComponent({
    name: 'App',
    components: {
      Logo,
      PieChartOutlined,
      DesktopOutlined,
      UserOutlined,
      TeamOutlined,
      FileOutlined,
      HomeFilled,
      SettingFilled,
    },
    setup() {
      const isRouterAlive = ref(true);
      const reload = () => {
        isRouterAlive.value = false;
        nextTick(() => {
          isRouterAlive.value = true;
        });
      };

      // const router = useRouter();
      // const route = useRoute();
      // provide('reload', reload);
      // const store = useStore();
      // const unauthInfo = 'You are not log in';
      // const authInfo = computed(() => {
      //   return `Hi, ${store.state.claims.name}! You are now log in!`;
      // });

      // const authenticationInfo = computed(() => {
      //   return store.state.isAuthenticated ? authInfo.value : unauthInfo;
      // });

      // IsLogin().then((response) => {
      //   store.state.isAuthenticated = Boolean(response.data);
      //   console.log(route.path);
      //   if (store.state.isAuthenticated) {
      //     GetUserInfo(store);
      //   } else { 
      //     Modal.error({
      //       title: '請重新登入',
      //       content: '',
      //       onOk() {
      //         router.push('/login');
      //       },
      //     });
      //   }
      // });
      return {
        isRouterAlive,
        //authenticationInfo,
      };
    },
  });
</script>
