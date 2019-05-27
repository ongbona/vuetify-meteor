<template>
  <v-container fluid class="pa-0">
    <div class="collapse-list">
      <v-card flat light>
        <v-expansion-panels v-model="activeName">
          <v-expansion-panel active-class="collapse-item-active" class="shadow-box">
            <!-- Header -->
            <v-expansion-panel-header>
              <v-icon class="collapse-title-icon pr-2">view_list</v-icon>General
            </v-expansion-panel-header>

            <!-- Content -->
            <v-expansion-panel-content>
              <v-layout row wrap>
                <v-flex
                  sm4
                  pa-3
                  v-for="(item, index) in generalSetting"
                  :key="index"
                  class="collapse-content"
                >
                  <span class="list-title" @click="handleLink(item.route)">{{ item.title }}</span>
                  <div class="list-memo">{{ item.memo }}</div>
                  <v-divider></v-divider>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MicroSetting",
  data() {
    return {
      activeName: 0,
      generalSetting: [
        {
          route: "MicroLocation",
          title: "Location",
          memo: `
            Location is .....
          `
        },
        {
          route: "MicroHoliday",
          title: "Holiday",
          memo: `
           Holiday is .....
          `
        },
        {
          route: "MicroFund",
          title: "Fund",
          memo: `
            Fund is .....
          `
        },
        {
          route: "MicroSecurityType",
          title: "Security Type",
          memo: `
            Security Type is .....
          `
        },
        {
          route: "MicroPurpose",
          title: "Purpose/EconoMicro Sector",
          memo: `
            Purpose/EconoMicro Sector is .....
          `
        }
      ]
    };
  },
  methods: {
    handleLink(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~src/app/modules/microfic/styles/collapse-list.scss";
</style>