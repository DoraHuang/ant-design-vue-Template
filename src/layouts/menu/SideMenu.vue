<template>
  <a-layout-sider
    theme="light"
    class="side-menu beauty-scroll shadow"
    collapsible
    v-model:collapsed="collapsed"
    :trigger="null"
    width="256px"
  >
    <Logo :show-title="!collapsed" />

    <a-menu
      v-model:selected-keys="selectedKeys"
      mode="inline"
      v-model:open-keys="openKeys"
    >
      <a-menu-item key="demo" @click="goRouter($event, 'demo/test')">
        <SettingOutlined />
        <span>Demo</span>
      </a-menu-item>
      <!--  <a-sub-menu key="versionlist">
        <template #title>
          <TableOutlined />
          <span>Version & Status</span>
        </template>
         <a-menu-item key="demandStatus" @click="goRouter($event, 'versionlist/demandStatus')"
          >Demand(正逆推)</a-menu-item
        >
        <a-menu-item key="uploadDemandFile" @click="goRouter($event, '')"
          >MPS</a-menu-item
        > 
        <a-menu-item key="othersInputStatus" @click="goRouter($event, 'versionlist/othersInputStatus')"
          >Others Input</a-menu-item
        >
      </a-sub-menu>-->
      <!--   <a-sub-menu key="uploadfile">
        <template #title>
          <FileAddOutlined />
          <span>Upload File</span>
        </template>
        <a-menu-item key="uploadDemandFile" @click="goRouter($event, 'uploadfile/uploadDemandFile')"
          >Upload Demand File</a-menu-item
        >
        <a-menu-item key="uploadMPS" @click="goRouter($event, 'uploadfile/uploadMPS')"
          >Upload MPS File</a-menu-item
        > 
        <a-menu-item key="uploadOthersInput" @click="goRouter($event,'uploadfile/uploadOthersInput')">
          Upload Others Input</a-menu-item
        >
      </a-sub-menu>-->
      <!-- <a-sub-menu key="demandConfirmationSimulation">
        <template #title>
          <SketchOutlined />
          <span>Demand Confirmation Simulation</span>
        </template>
        <a-menu-item
          key="forecastoutputdate"
          @click="goRouter($event, 'demandConfirmationSimulation/forecastoutputdate')"
          >Forecast Output Date</a-menu-item
        >
        <a-menu-item
          key="forecastmove"
          @click="goRouter($event, 'demandConfirmationSimulation/forecastmove')"
          >Forecast Move</a-menu-item
        >
        <a-menu-item
          key="forecastdailyoutput"
          @click="goRouter($event, 'demandConfirmationSimulation/forecastdailyoutput')"
          >Forecast Daily Output</a-menu-item
        >
        <a-menu-item
          key="machineloading"
          @click="goRouter($event, 'demandConfirmationSimulation/machineloading')"
          >Machine Loading</a-menu-item
        >
        <a-menu-item
          key="inlinecycletimeforproductlayer"
          @click="goRouter($event, 'demandConfirmationSimulation/inlinecycletimeforproductlayer')"
          >In Line CycleTime For Product Layer</a-menu-item
        >
        <a-menu-item
          key="inlinecycletimeforfactory"
          @click="goRouter($event, 'demandConfirmationSimulation/inlinecycletimeforfactory')"
          >In Line CycleTime For Factory</a-menu-item
        >
      </a-sub-menu> -->
      <!-- <a-sub-menu key="optimalDemandConfirmation">
        <template #title>
          <CoffeeOutlined />
          <span>Optimal Demand Confirmation</span>
        </template>
        <a-menu-item key="ODCIndex" @click="goRouter($event, 'optimalDemandConfirmation/ODCIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu> -->
      <!-- <a-sub-menu key="demandFulfillment">
        <template #title>
          <CrownOutlined />
          <span>Demand Fulfillment</span>
        </template>
        <a-menu-item key="targetmove" @click="goRouter($event, 'demandFulfillment/targetmove')">
          Target Move</a-menu-item
        >
        <a-menu-item
          key="machineloadingfortarget"
          @click="goRouter($event, 'demandFulfillment/machineloadingfortarget')"
          >Machine Loading For Target Move</a-menu-item
        >
      </a-sub-menu> -->
      <!-- <a-sub-menu key="mpsSimulation">
        <template #title>
          <RiseOutlined />
          <span>MPS Simulation</span>
        </template>
         <a-menu-item
          key="mpsuploadothers"
          @click="goRouter($event, 'mpssimulation/mpsuploadothers')"
        >
          Upload Others Input</a-menu-item
        > 
         <a-menu-item
          key="machineloadingfortarget"
          @click="goRouter($event, 'demandFulfillment/machineloadingfortarget')"
          >Machine Loading For Target Move</a-menu-item
        >
      </a-sub-menu> -->
      <!-- <a-sub-menu key="optimalPM">
        <template #title>
          <PieChartOutlined />
          <span>Optimal PM </span>
        </template>
        <a-menu-item key="PMIndex" @click="goRouter($event, 'optimalPM/PMIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="redunantWIP">
        <template #title>
          <DribbbleOutlined />
          <span>Redundant WIP </span>
        </template>
        <a-menu-item key="RedunantIndex" @click="goRouter($event, 'redunantWIP/RedunantIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="moveGapDetractor">
        <template #title>
          <RadarChartOutlined />
          <span>Move Gap Detractor</span>
        </template>
        <a-menu-item key="DMAIndex" @click="goRouter($event, 'moveGapDetractor/DMAIndex')"
          >Data Result</a-menu-item
        >
      </a-sub-menu> -->
      <!-- <a-sub-menu key="user" v-if="userRole == 'A'">
        <template #title>
          <RadarChartOutlined />
          <span>User</span>
        </template>
        <a-menu-item key="User" @click="goRouter($event, 'user/userList')">User</a-menu-item>
      </a-sub-menu> -->
      <!-- <a-menu-item key="role" @click="goRouter($event, 'role')"  v-if="user.role=='A'">
         <UserOutlined />
        <span>Role</span>
      </a-menu-item> -->
      <!-- <a-menu-item key="setting" @click="goRouter($event, 'setting')" v-if="userRole == 'A'">
        <SettingOutlined />
        <span>Setting</span>
      </a-menu-item> -->
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from "/@/components/Logo.vue";
import {
  defineComponent,
  computed,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  toRefs,
  reactive,
  watch,
} from "vue";
import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  DribbbleOutlined,
  RedditOutlined,
  SketchOutlined,
  FileAddOutlined,
  CoffeeOutlined,
  TableOutlined,
  RadarChartOutlined,
  UserOutlined,
  SettingOutlined,
  RiseOutlined,
  // header
  HomeFilled,
  CrownOutlined,
} from "@ant-design/icons-vue";
import { mapState } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "SideMenu",
  components: {
    Logo,
    PieChartOutlined,
    DesktopOutlined,
    DribbbleOutlined,
    RedditOutlined,
    FileAddOutlined,
    SketchOutlined,
    CoffeeOutlined,
    HomeFilled,
    RadarChartOutlined,
    TableOutlined,
    DribbbleOutlined,
    CrownOutlined,
    SettingOutlined,
    UserOutlined,
    RiseOutlined,
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const user = ref({});
    //const selectedKeys = ref(['versionTable']);
    //const openKeys = ref(['']);
    var onSelect = (obj) => {
      this.$emit("menuSelect", obj);
    };
    // 获取当前打开的子菜单
    const getOpenKeys = () => [route.matched[1]?.name];
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [route.name],
    });
    onBeforeMount(() => {
      user.value = store.state.claims;
    });
    const userRole = computed(() => store.state.claims.role);
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [route.name];
      }
    );

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => route.fullPath,
      () => {
        if (route.name == "login" || props.collapsed) return;
        state.openKeys = getOpenKeys();
        state.selectedKeys = [route.name];
      }
    );

    const goRouter = (e, value) => {
      router.push(`/${value}`);
    };
    return {
      ...toRefs(state),
      onSelect,
      goRouter,
      user,
      userRole,
      // openKeys,
      // selectedKeys,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index";
</style>
