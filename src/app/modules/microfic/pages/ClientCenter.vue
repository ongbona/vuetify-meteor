<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <!-- Item -->
      <v-flex sm3 pr-3>
        <ClientDataTable class="shadow-box" @row-click="handleItemClick"/>
      </v-flex>

      <!-- Detail -->
      <v-flex sm9 pl-3>
        <v-card light class="shadow-box">
          <v-card-title class="pb-2 pt-2">
            <div class="layout row ma-0 justify-space-between pb-1 align-center">
              <span
                v-if="activeClient"
                class="title font-weight-light"
              >{{ activeClient.code }} : {{ activeClient.name }}, Status: {{ activeClient.status }}</span>
              <span v-else class="title font-weight-light">No item selected</span>

              <span>
                <v-btn
                  v-if="activeClient"
                  icon
                  text
                  small
                  color="primary"
                  class="ma-0"
                  @click="showItem"
                >
                  <i class="fas fa-pencil-alt"/>
                </v-btn>
                <v-btn
                  text
                  small
                  color="primary"
                  icon
                  class="ma-0"
                  @click="handleLinkBtnClick({name: 'MicroClientForm'})"
                >
                  <i class="fas fa-plus"/>
                </v-btn>
                <v-btn
                  text
                  small
                  color="primary"
                  icon
                  class="ma-0"
                  @click="handleLinkBtnClick({name: 'MicroClientSetting'})"
                >
                  <i class="fas fa-cog"/>
                </v-btn>
              </span>
            </div>
          </v-card-title>
          <v-divider></v-divider>

          <v-layout row wrap pa-3>
            <!-- Tool -->
            <v-flex xs5 pr-4 pl-3>
              <v-container grid-list-lg class="pa-0">
                <v-layout row wrap>
                  <v-flex xs6 sm6>
                    <v-btn
                      color="primary"
                      :height="40"
                      depressed
                      block
                      @click="handleLinkBtnClick({name: 'MicroLoanApplicationForm'})"
                    >Loan Account</v-btn>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-btn
                      color="primary"
                      :height="40"
                      depressed
                      block
                      @click="handleLinkBtnClick({name: 'MicroSavingAccountForm'})"
                    >Saving Account</v-btn>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-btn
                      color="primary"
                      :height="40"
                      depressed
                      block
                      @click="handleLinkBtnClick({name: 'MicroSavingTransactionForm'})"
                    >Saving Transaction</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            <!-- Info -->
            <v-flex xs7 pl-4 pr-3>
              <div class="info-box">
                <span class="info-box-icon bg-aqua">
                  <i class="fas fa-info-circle"/>
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">Coming Soon</span>
                  <span class="info-box-number">
                    00
                    <small>%</small>
                  </span>
                </div>
              </div>
            </v-flex>
          </v-layout>

          <v-spacer></v-spacer>

          <!-- Transaction -->
          <!-- <JournalDataTable
            :custom-filter="tranFilter"
            @ref-click="handleTranClick"
          />-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ClientDataTable from "../components/ClientDataTable";

export default {
  name: "MicroClientCenter",
  components: {
    ClientDataTable
  },
  data() {
    return {
      activeClient: null
    };
  },
  computed: {
    tranFilter() {
      let filter = {};
      if (this.activeClient && this.activeClient._id) {
        filter = {
          details: {
            $elemMatch: { chartAccountId: this.activeClient._id }
          }
        };
      }
      return filter;
    }
  },
  mounted() {},
  methods: {
    // Edit Item
    showItem() {
      if (this.activeClient && this.activeClient._id) {
        this.$router.push({
          name: "MicroClientForm",
          params: { showId: this.activeClient._id }
        });
      } else {
      }
    },
    handleLinkBtnClick(route) {
      this.$router.push(route);
    },
    handleItemClick(val) {
      this.activeClient = val;
    },
    handleTranClick(val) {
      this.$router.push({
        name: "JournalForm",
        params: { _id: val._id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-box {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 0.5rem;
  min-height: 70px;
  background: #fff;
  margin-bottom: 1rem !important;
  display: flex !important;
}
.info-box-icon {
  border-radius: 0.25rem;
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
  width: 80px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.info-box .bg-aqua {
  background-color: #17a2b8 !important;
}
.info-box .info-box-content {
  padding: 5px 10px 5px 30px;
  flex: 1;
}
.info-box-text {
  font-weight: bold;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #909399;
  font-size: 16px;
}
.info-box-number {
  display: block;
  font-weight: bold;
  font-size: 22px;
  padding-top: 14px;
  color: #666;
}
</style>
