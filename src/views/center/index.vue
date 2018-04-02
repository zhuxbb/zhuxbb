<template>
  <div>
    <div style='background:#e4e9ee;height:30px;'>欢迎您 13012345678</div>
    <div class="pb-10" style='background:#e4e9ee'>
      <el-row :gutter="10">
        <el-col :span="7">
          <div class="panel-bai">
            <div class="cate-item">
              <div class="t-center cate-item-icon" style='background:#A7E9E5'>
                <i style='font-size:24px;color:#888;' class="iconfont icon-bussinessman"></i>
              </div>
              <div class="cate-item-content">
                <div>企业代码：1123123123</div>
                <div>开通号码：123123123</div>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :span="7">
          <div class="panel-bai">
            <div class="cate-item">
                <div class="t-center cate-item-icon" style='background:#FFF49D'>
                  <i style='font-size:24px;color:#888;' class="iconfont icon-creditlevel"></i>
                </div>
                <div class="cate-item-content">
                  <div>状态：启用</div>
                  <div>有效期：<span class='t-12'>2017-11-11 至 2018-11-11</span></div>
                </div>
            </div>
          </div>
        </el-col>

        <el-col :span="5">
          <div class="panel-bai">
            <div class="cate-item">
              <div class="t-center cate-item-icon" style='background:#50E3C2'>
                <i style='font-size:24px;color:#888;' class="iconfont icon-dollar"></i>
              </div>
              <div class="cate-item-content">
                <div>待续费实例：0</div>
                <div>待支付订单：0</div>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :span="5">
          <div class="panel-bai">
            <div class="cate-item">
              <div class="t-center cate-item-icon" style='background:#7ED321'>
                <i style='font-size:24px;color:#888;' class="iconfont icon-form"></i>
              </div>
              <div class="cate-item-content">
                <div>我的工单：11</div>
                <div>站内信：12</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="pb-10" style='background:#e4e9ee'>
      <div class="panel-bai">
          <div class="t-bold mb-5">数据统计</div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </div>
    </div>
    <!-- <div style='height:2000px;'></div> -->
    <div class="pb-20">
      <div class="panel-bai">
        <el-row>
          <el-col :span="12">
            <div class="t-bold mb-5">饼图统计</div>
            <div ref='pie' class='chart-panel'></div>
          </el-col>
          <el-col :span="12">
            <div class="t-bold mb-5">通话排行榜</div>
            <div ref='bar' class='chart-panel'></div>
          </el-col>
        </el-row>
      </div>
    </div>
    
  </div>
</template>

<script>
const { echarts } = require("~/assets/scripts/echarts.common.min.js");
let charts = {};
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      account_statistics: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ],
      account_statistics_base: [
        "直接访问",
        "邮件营销",
        "联盟广告",
        "视频广告",
        "搜索引擎"
      ],
      recent_7_calls: {
        title: [
          "你",
          "看",
          "到",
          "的",
          "东",
          "西",
          "只",
          "是",
          "一",
          "个",
          "D",
          "E",
          "M",
          "O",
          ",",
          "请",
          "见",
          "谅",
          "谢",
          "谢"
        ],
        data: [
          220,
          182,
          191,
          234,
          290,
          330,
          310,
          123,
          442,
          321,
          90,
          149,
          210,
          122,
          133,
          334,
          198,
          123,
          125,
          220
        ]
      }
    };
  },
  methods: {
    getRows() {
      // this.getData().then(res => {
      this.getPie();
      this.getBar();
      // });
    },
    getPie() {
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          //top:'middle',
          data: ["A", "B", "C", "D", "E"],
          formatter: name => {
            //console.log(name,this.account_statistics_base);
            return `${name}类 ${this.account_statistics_base[name]}个`;
          }
        },
        series: [
          {
            name: "今日客户统计",
            type: "pie",
            //radius: "55%",
            //center: ["50%", "50%"],
            data: this.account_statistics,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      charts.pie.setOption(option);
    },
    getBar() {
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}"
        },
        legend: {
          data: this.recent_7_calls.title
        },
        xAxis: {
          data: this.recent_7_calls.title
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: this.recent_7_calls.data,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#83bff6" },
                  { offset: 0.5, color: "#188df0" },
                  { offset: 1, color: "#188df0" }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      charts.bar.setOption(option);
    }
  },
  mounted() {
    charts = {
      pie: echarts.init(this.$refs.pie),
      bar: echarts.init(this.$refs.bar)
    };
    this.getRows();
  }
};
</script>

<style lang="less" scoped>
.cate-item {
  padding-left: 80px;
  overflow: hidden;
}

.cate-item-content {
  line-height: 30px;
}
.cate-item-icon {
  float: left;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 60px;
  margin-left: -80px;
}
.chart-panel {
  height: 400px;
  width: 500px;
}
</style>

