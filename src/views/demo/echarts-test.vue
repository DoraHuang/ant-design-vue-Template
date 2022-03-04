<template>
  <v-chart class="chart" :option="option" autoresize/>
</template>

<script>
  import { ref, defineComponent, onBeforeMount } from 'vue';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { LineChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';

  import alasql from 'alasql';

  use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent]);

  export default defineComponent({
    name: 'HelloWorld',
    components: {
      VChart,
    },
    // provide: {
    //   [THEME_KEY]: 'dark',
    // },

    setup() {
      var data = [
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1234',
          layer: '12',
          wip: '101.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '13',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1234',
          layer: '13',
          wip: '200.0000',
          daysperlayer: '7.0000',
          rank_allfab_layer: '14',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1234',
          layer: '14',
          wip: '500.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '15',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1234',
          layer: '15',
          wip: '400.0000',
          daysperlayer: '6.0000',
          rank_allfab_layer: '16',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1234',
          layer: '16',
          wip: '300.0000',
          daysperlayer: '7.0000',
          rank_allfab_layer: '17',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1235',
          layer: '12',
          wip: '101.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '13',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1235',
          layer: '13',
          wip: '300.0000',
          daysperlayer: '7.0000',
          rank_allfab_layer: '14',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1235',
          layer: '14',
          wip: '500.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '15',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1235',
          layer: '15',
          wip: '550.0000',
          daysperlayer: '6.0000',
          rank_allfab_layer: '16',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1235',
          layer: '16',
          wip: '400.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '17',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '1236',
          layer: '12',
          wip: '101.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '13',
        },
        {
          parentid: '1643b2c6-3018-4e76-82b5-e4a0f83d532b',
          prodcategory: '2945',
          layer: '12',
          wip: '100.0000',
          daysperlayer: '5.0000',
          rank_allfab_layer: '13',
        },
      ];
      const option = ref({});
      onBeforeMount(() => {
        axiosPost();
      });
      function axiosPost() {
        var xAxis = [],
          wip = [],
          daysperlayer = [];
        alasql(
          "select layer,sum(wip) wip,sum(wip*daysperlayer)/sum(wip) as daysperlayer from ? where prodcategory = '" +
            1234 +
            "' group by layer,rank_allfab_layer order by rank_allfab_layer ",
          [data]
        ).forEach(function (o) {
          xAxis.push(o.layer);
          wip.push(o.wip);
          daysperlayer.push(o.daysperlayer);
        });
        option.value = {
          tooltip: { trigger: 'axis', textStyle: { fontSize: 10 } },
          title: { text: 1234 + ' DPL Trend', x: 'center', y: 'top' },
          xAxis: { data: xAxis, position: 'bottom', axisLabel: { fontSize: 10 } },
          yAxis: [
            { name: 'WIP(片)', type: 'value' },
            { name: 'DPL', type: 'value' },
          ],
          series: [
            { name: 'WIP', type: 'bar', symbol: 'circle', showSymbol: false, data: wip },
            {
              name: 'days per layer',
              yAxisIndex: 1,
              type: 'line',
              symbol: 'circle',
              showSymbol: false,
              lineStyle: { width: 4, type: 'solid' },
              data: daysperlayer,
            },
          ],
          grid: { bottom: 120 },
          legend: { data: ['WIP', 'days per layer'], bottom: 35 },
        };
      }
 
      return { axiosPost, option };
    },
  });
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
