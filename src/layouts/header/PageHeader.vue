<template>
  <a-layout-header class="layout-header">
    <div class="left-options">
      <MenuFoldOutlined
        style="font-size: 18px; padding: 0 24px"
        v-if="!collapsed"
        @click="toggleCollapse"
      />
      <MenuUnfoldOutlined
        style="font-size: 18px; padding: 0 24px"
        v-if="collapsed"
        @click="toggleCollapse"
      />
      <a-breadcrumb>
        <template v-for="routeItem in route.matched" :key="routeItem.name">
          <a-breadcrumb-item>
            <a>{{ routeItem.meta.title }}</a>
          </a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
    <div class="right-options">
      <div class="header-item">
        <a-dropdown>
          <div class="header-avatar ant-dropdown-link" @click.prevent style="cursor: pointer">
            <UserOutlined style="font-size: 18px; color: #08c" /> {{ userName }}
          </div>
          <template #overlay>
            <a-menu :class="['avatar-menu']">
              <a-menu-item @click="router.push('/changePassword')">
                <a href="javascript:;"><UserOutlined style="margin-right: 8px" />個人中心</a>
              </a-menu-item>
              <a-menu-item @click="logout">
                <a href="javascript:;"> <PoweroffOutlined style="margin-right: 8px" />登出</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
  import { useRouter, useRoute } from 'vue-router';
  import { defineComponent, reactive, toRefs, createVNode, ref, onBeforeMount ,computed} from 'vue';
  import { useStore } from 'vuex';
  import { Logout } from '/@/api/api.js';
  import {
    // menu
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PoweroffOutlined,
    UserOutlined,
  } from '@ant-design/icons-vue';
  export default defineComponent({
    name: 'AdminHeader',
    components: {
      MenuFoldOutlined,
      MenuUnfoldOutlined,
      PoweroffOutlined,
      UserOutlined,
    },
    props: ['collapsed'],
    setup(props, context) {
      const store = useStore();
      const router = useRouter();
      const route = useRoute();
      const state = reactive({
        username: store.state.claims.name,
        fullscreenIcon: 'FullscreenOutlined',
      });
      const userName = computed(() => store.state.claims.name);

      const logout = () => {
        Logout(store)
          .then((response) => {
            store.state.claims = {};
            router.push('/login');
          })
          .catch(function (response) {
            if (!!response.response.data.rtnMsg)
              modalError('Error', 'ErrorMessage：' + response.response.data.rtnMsg);
            else modalError('Error', 'Load datas error,Please try again');
          })
          .finally(() => {});
      };
      const toggleCollapse = () => {
        context.emit('toggleCollapse');
      };
      const onSelect = (obj) => {
        context.emit('menuSelect', obj);
      };
      return { ...toRefs(state), logout, toggleCollapse, onSelect, router, route,userName };
    },
  });
</script>

<style lang="less" scoped>
  @import './index';
</style>
