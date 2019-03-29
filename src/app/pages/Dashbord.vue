<template>
  <div>
    <v-container fluid grid-list-xl class="pa-0">
      <v-layout row wrap>
        <v-flex lg3 sm6 xs12 class="mb-3 mt-3">
          <mini-statistic icon="thumb_up" title="100+" sub-title="Likes" color="indigo"></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12 class="mb-3 mt-3">
          <mini-statistic icon="record_voice_over" title="150+" sub-title="Connections" color="red"></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12 class="mb-3 mt-3">
          <mini-statistic icon="group_add" title="200+" sub-title="Followers" color="light-blue"></mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12 class="mb-3 mt-3">
          <mini-statistic icon="share" title="20+" sub-title="Shares" color="purple"></mini-statistic>
        </v-flex>

        <v-flex lg8 md8 sm12 xs12>
          <v-card color="#fff">
            <v-toolbar color="transparent" text dense flat style="height:45px">
              <v-toolbar-title>
                <span class="vw-title">Sale Increase</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <!-- Copy btn -->
            <v-btn
              absolute
              dark
              fab
              small
              top
              right
              color="blue darken-4"
              class="elevation-1"
              style="z-index: 1;"
            >
              <v-icon>file_copy</v-icon>
            </v-btn>

            <!-- Chart -->
            <canvas ref="chart" responsive></canvas>

            <!-- Share btn -->
            <!-- <v-card-actions>
              <v-badge overlap color="red">
                <v-btn outline small color="indigo">
                  <v-icon dark>share</v-icon>Share
                </v-btn>
                <span slot="badge">6</span>
              </v-badge>
            </v-card-actions>-->
          </v-card>
        </v-flex>

        <v-flex lg4 md4 sm12 xs12>
          <v-card color="#fff" :dark="computeCardDark" class="pb-3 mb-4">
            <!-- Chart -->
            <canvas ref="chartPie1" responsive></canvas>
          </v-card>

          <v-card color="#fff" :dark="computeCardDark" class="pb-3">
            <!-- Chart -->
            <canvas ref="chartPie2" responsive></canvas>
          </v-card>
        </v-flex>

        <v-flex lg4 md4 sm12 xs12>
          <v-card>
            <v-card-title>
              <div class="layout row ma-0 justify-space-between pb-1">
                <div class="subheading">Sales</div>
                <div class="icon">
                  <v-icon mini color="success">trending_up</v-icon>
                </div>
              </div>
            </v-card-title>
            <v-card-text class="pt-2">
              <h3 class="headline">Sales increase</h3>
              <v-progress-linear value="15" height="5" color="success"></v-progress-linear>
              <span class="caption">{{linnerCaption(15,'Sales increase')}}</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 md4 sm12 xs12>
          <v-card>
            <v-card-title>
              <div class="layout row ma-0 justify-space-between pb-1">
                <div class="subheading">Orders</div>
                <div class="icon">
                  <v-icon mini color="pink">trending_up</v-icon>
                </div>
              </div>
            </v-card-title>
            <v-card-text class="pt-2">
              <h3 class="headline">Orders increase</h3>
              <v-progress-linear value="30" height="5" color="pink"></v-progress-linear>
              <span class="caption">{{linnerCaption(30,'Orders increase')}}</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 md4 sm12 xs12>
          <v-card>
            <v-card-title>
              <div class="layout row ma-0 justify-space-between pb-1">
                <div class="subheading">Revenue</div>
                <div class="icon">
                  <v-icon mini color="primary">trending_up</v-icon>
                </div>
              </div>
            </v-card-title>

            <v-card-text class="pt-2">
              <h3 class="headline">Revenue increase</h3>
              <v-progress-linear value="50" height="5" color="primary"></v-progress-linear>
              <span class="caption">{{linnerCaption(50,'Revenue increase')}}</span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Chart from "chart.js";
import Material from "vuetify/es5/util/colors";
import MiniStatistic from "../components/MiniStatistic.vue";
export default {
  name: "Home",
  components: { MiniStatistic },
  data() {
    return {
      chart: "",
      chartPie1: "",
      chartPie2: "",
      color: Material,
      bottomNav: "recent",
      sparkValue: [423, 446, 675, 510, 590, 610, 760]
    };
  },
  computed: {
    computeCardDark() {
      return this.cardColor !== "white";
    }
  },
  mounted() {
    this.chartData();
  },
  methods: {
    linnerCaption(value, subTitle) {
      return value + "% " + subTitle;
    },
    chartData() {
      let ctx = this.$refs.chart;
      ctx.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      this.chart = new Chart(ctx, {
        type: "bar",
        responsive: true,
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          datasets: [
            {
              label: "2018",
              data: [68, 70, 81, 76, 69, 83, 91, 79, 86, 69, 83, 90],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(97, 24, 44, 0.8)",
                "rgba(106, 176, 76,0.8)",
                "rgba(27, 156, 252,0.8)",
                "rgba(234, 181, 67,0.8)",
                "rgba(179, 55, 113, 0.8)",
                "rgba(24, 44, 97, 0.8)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(97, 24, 44, 1)",
                "rgba(106, 176, 76,1)",
                "rgba(27, 156, 252,1)",
                "rgba(234, 181, 67,1)",
                "rgba(179, 55, 113,1)",
                "rgba(24, 44, 97, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: false,
            text: "Year rewind"
          },
          legend: {
            display: false
          },
          tooltips: {
            cornerRadius: 20
          },
          layout: {
            padding: {
              left: 10,
              right: 0,
              top: 30,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  max: 100,
                  min: 50
                },
                gridLines: {
                  display: true
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }
      });

      this.chartPie1 = new Chart(this.$refs.chartPie1, {
        type: "doughnut",
        responsive: true,
        data: {
          labels: ["Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "2018",
              data: [30, 80, 20, 25],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Customer"
          }
        }
      });

      this.chartPie2 = new Chart(this.$refs.chartPie2, {
        type: "pie",
        responsive: true,
        data: {
          labels: ["Coca", "Fanta", "Pepsi", "7up"],
          datasets: [
            {
              label: "2018",
              data: [90, 35, 30, 40],
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Best Montly Sale"
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vw-title {
  font-weight: normal !important;
  font-size: 17px !important;
}
</style>
