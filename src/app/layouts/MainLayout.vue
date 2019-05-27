<template>
  <v-app id="inspire" class="app" :dark="false">
    <!-- Navigation -->
    <Navigation class="app--drawer"/>

    <!-- Toolbar -->
    <toolbar class="app--toolbar"/>

    <!-- Content -->
    <v-content fluid fill-height class="mt-1 app-content">
      <!-- Breadcrumb -->
      <!-- <v-layout class="align-center layout px-2 app--page-header">
        <v-breadcrumbs divider="-">
          <v-breadcrumbs-item>
            <v-icon larg>home</v-icon>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            Breadcrumbs
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-layout>-->
      <!-- Content -->
      <div class="page-wrapper px-4 py-4">
        <router-view></router-view>
      </div>
    </v-content>

    <!-- Footer -->
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import Navigation from "./Navigation.vue";
import Footer from "./Footer.vue";

export default {
  drawer: null,
  components: {
    Toolbar,
    Navigation,
    Footer
  },
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  created() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #f8f8f9;
}
</style>
