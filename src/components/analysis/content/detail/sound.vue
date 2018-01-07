<template>
  <div>
  	<q-toolbar color="teal-6">
	  <q-btn flat @click='back'>
        <q-icon name="assignment return" />
	  </q-btn>
	  <q-toolbar-title>
	    声压传感器
	  </q-toolbar-title>
    </q-toolbar>
    <q-card>
	    <q-card-main >
	      <img :src='image' style="" style="margin:8px auto;"/>
	      <span style="display: block;height: 100px;float:right;margin-bottom: 30px;margin-left: 30px;">
	      	<div>X轴数据<span style="margin-left: 60px;">{{Xdata}}m/s<sup>2</sup></span></div>
	      	<div>Y轴数据<span style="margin-left: 60px;">{{Ydata}}m/s<sup>2</sup></span></div>
	      	<div>Z轴数据<span style="margin-left: 60px;">{{Zdata}}m/s<sup>2</sup></span></div>
	      </span>
	    </q-card-main>
	</q-card>
	<!--图表-->
	<q-card >
	  <q-card-main >
       <div class="rtChart" ref="echarts"></div>
     </q-card-main>
    </q-card>
    <!--当前传感器的详细信息-->
    <q-card >
	    <q-card-main >
	    <p>详细信息</p>
	    <div>测量设备在三个坐标轴x,y,z上面受到的加速度，其中包含重力加速度。</div>
	    <div>加速度传感器使用标准传感器坐标系统。在实际中，这意味着将设备自然放置于水平桌面上时，有以下结果：</div>
	    <div>当从左侧用力推动设备时(将其向远离自己方向运动)，Z轴的加速度值等于A+9.81，而为计算Z轴加速度</div>
	    	</q-card-main >
	</q-card>
  </div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
export default{
  data () {
    return {
      image: '../../../statics/加速度.jpg',
      selectedValue: 2,
      Xdata: 3,
      Ydata: 3,
      Zdata: 3,
      rtChart: {},
      myChart: {}
    }
  },
  methods: {
    back () {
      window.history.go(-1)
    },
    getAccelerate () {
    },
    getrtData (opt) {
      axios.get('/aj/click', {newsid: opt.newsid}).then(res => {
        if (res && res.length === 0) {
          this.renderChart()
        }
        else {
          var xAxis = []
          var series = []
          res.forEach(function (item) {
            xAxis.push(item.time)
            series.push(item.value)
          })
          this.rtChart = {
            xAxis: xAxis,
            series: series
          }
          this.renderChart(this.rtChart)
        }
      })
      axios.get('/aj/queue', {taskid: opt.taskid}).then(res => {
        if (res.data && res.data.length === 0) {
        }
        else {
          this.rtData = res.data.concat()
        }
      })
    },
    renderChart (opt) {
      var option
      if (opt) {
        option = {
          tooltip: {},
          grid: {
            top: '2%',
            bottom: '20%',
            left: '15%',
            right: 0
          },
          xAxis: [{
            data: opt.xAxis,
            axisLabel: {
              show: true,
              interval: Math.round(opt.xAxis.length / 4),
              rotate: -10,
              align: 'left'

            }
          }, {
            data: opt.xAxis,
            axisLabel: {
              show: false,
              interval: Math.round(opt.xAxis.length / 200)
            },
            axisTick: {
              length: 3,
              inside: false,
              lineStyle: {
                color: '#ccc'
              }
            }
          }],
          yAxis: {},
          series: [{
            name: '点击量',
            type: 'line',
            xAxisIndex: 1,
            data: opt.series
          }]
        }
      }
      else {
        option = {
          tooltip: {},
          grid: {
            top: '2%',
            bottom: '20%',
            left: '15%',
            right: 0
          },
          xAxis: {
            data: ['暂无数据']
          },
          yAxis: {},
          series: [{
            name: '点击量',
            type: 'line',
            data: []
          }]
        }
      }
      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.myChart = echarts.init(this.$refs.echarts)
    this.renderChart()
  }
}
</script>
<style lang="stylus">
.topImage
  display: block
  width: 100%
  height: 100px
  position: fixed
  top: 0px
  left: 0px
</style>