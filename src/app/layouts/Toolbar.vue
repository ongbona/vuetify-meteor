<template>
  <div>
    <!-- Toolbar -->
    <v-app-bar app color="primary" dark fixed class="app-header-toolbar">
      <v-app-bar-nav-icon @click.stop="handleDrawerToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>{{headerTitle}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- Full Screen -->
      <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>

      <!-- Notify -->
      <v-menu :nudge-bottom="14" offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon text>
            <v-badge color="red" overlap>
              <span slot="badge">4</span>
              <v-icon medium>notifications</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card>
          <v-toolbar text dense color="transparent" class="elevation-0">
            <v-toolbar-title>
              <h4>Notification</h4>
            </v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-list two-line class="pa-0">
              <template v-for="(item, index) in notis">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :key="index"></v-divider>
                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar :color="item.color">
                    <v-icon dark>{{ item.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action class="caption">{{ item.timeLabel }}</v-list-item-action>
                </v-list-item>
              </template>
            </v-list>
            <v-divider></v-divider>
            <v-btn block text class="ma-1">All</v-btn>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-menu>
      <!-- User -->
      <v-menu :nudge-bottom="10" offset-y origin="center center" transition="scale-transition">
        <v-btn slot="activator" icon large text>
          <v-avatar size="30px">
            <img src="/imgs/avatar3.png">
          </v-avatar>
        </v-btn>

        <v-list class="pt-0 pb-0">
          <v-list-item color="#ef6c00">
            <v-list-item-content>
              <v-list-item-title class="text-md-center white--text font-weight-bold">Rabbit Tech</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item
            v-for="(item,index) in items"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            :disabled="item.disabled"
            :target="item.target"
            :key="index"
            ripple="ripple"
            rel="noopener"
            @click="item.click"
            class="pl-3 pr-3"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  name: "Toolbar",
  data() {
    return {
      items: [
        {
          icon: "account_circle",
          color: "#01579B",
          href: "#",
          title: "Profile",
          click: e => {}
        },
        {
          icon: "settings",
          color: "#01579B",
          href: "#",
          title: "Settings",
          click: e => {}
        },
        {
          icon: "directions_walk",
          color: "#f44336",
          href: "login",
          title: "Logout",
          click: () => {
            this.$router.push("/login");
          }
        }
      ],
      notis: [
        {
          title: "New user registered",
          color: "light-green",
          icon: "account_circle",
          timeLabel: "Just now"
        },
        { divider: true, inset: true },
        {
          title: "New order received",
          color: "light-blue",
          icon: "shopping_cart",
          timeLabel: "2 min ago"
        },
        { divider: true, inset: true },
        {
          title: "New payment made",
          color: "cyan",
          icon: "payment",
          timeLabel: "24 min ago"
        },
        { divider: true, inset: true },
        {
          title: "New message from Michael",
          color: "red",
          icon: "email",
          timeLabel: "1 hour ago"
        }
      ]
    };
  },
  computed: {
    headerTitle() {
      let title =
        this.$route.meta && this.$route.meta.headerTitle
          ? this.$route.meta.headerTitle
          : this.$route.name
          ? this.$route.name
          : "Unknwon";
      title = _.startCase(_.lowerCase(title));

      return title;
    }
  },
  watch: {},
  methods: {
    handleDrawerToggle() {
      const miniDrawer = this.$store.state.app.appDrawer.mini;
      this.$store.dispatch("app/appDrawer/toggleMiniDrawer", !miniDrawer);
    },
    logout() {
      this.$router.push("/login");
    },
    handleFullScreen() {
      let doc = window.document;
      let docEl = doc.documentElement;
      let requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
      let cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;
      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.app-header-toolbar {
  width: auto !important;
}
</style>
