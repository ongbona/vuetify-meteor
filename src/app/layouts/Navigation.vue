<template>
  <div>
    <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      :dark="false"
      class="app-drawer"
      permanent
      fixed
      app
      width="260"
      :disable-route-watcher="true"
    >
      <!-- Toolbar -->
      <v-toolbar color="primary darken-1" dark>
        <img src="/imgs/rabbit.png" height="36" alt="Rabbit Tech">
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">Rabbit Tech</span>
        </v-toolbar-title>
      </v-toolbar>

      <!-- List -->
      <v-list dense expand>
        <template v-for="(item, index) in items">
          <!-- Is Header -->
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

          <!-- Is Divider -->
          <v-divider v-else-if="item.divider" :key="index"></v-divider>

          <!-- Is Group/Children -->
          <v-list-group
            v-else-if="item.children"
            v-model="item.active"
            :key="item.title"
            :group="activeGroup !== item.group ?item.group : undefined"
            :class="['item-list-group',{'item-list-group-mini': mini === true}]"
          >
            <!-- Child Title -->
            <v-list-item slot="activator" class="item-list">
              <v-list-item-action>
                <v-icon
                  small
                  v-if="item.icon ? item.icon : 'folder'"
                  :color="activeGroup === item.group?'primary':''"
                >{{ item.icon ? item.icon : 'folder' }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- Child Items -->
            <v-list-item
              v-for="child in item.children"
              :key="`${item.title}.${child.title}`"
              @click="changeRoute(child.route,child.group)"
              :color="activeRouter === child.route.path?'primary':''"
              :class="[{'white--text': activeRouter === child.route.path},'sub-item-list' ]"
            >
              <v-list-item-action>
                <v-icon
                  small
                  v-if="child.icon"
                  :color="activeRouter === child.route.path?'#fff':''"
                >{{ child.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <!-- <v-menu
            close-on-content-click
            v-else-if="item.children && mini === true"
            :attach="attach"
            :nudge-width="200"
            offset-x
            fixed
            close-on-click
            transition="scale-transition"
            :key="item.title"
            content-class="elevation-3 sub-content-menu"
          >
            <template v-slot:activator="{ on }">
              <v-list-item
                v-on="on"
                :class="[{'item-list-active': activeGroup === item.group}, {'item-list-mini': mini === true},'item-list' ]"
                :color="activeGroup === item.group?'primary':''"
              >
                <v-list-item-action>
                  <v-icon small
                    v-if="item.icon"
                    :color="activeGroup === item.group?'#fff':'#546E7A'"
                  >{{ item.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-card class="elevation-0">
              <v-card-text class="pa-1 mt-0">
                <v-list-item
                  v-for="child in item.children"
                  :key="`${item.title}.${child.title}`"
                  @click="changeRoute(child.route,child.group)"
                  :color="activeRouter === child.route.path?'primary':''"
                  :class="['sub-item-list-mini']"
                >
                  <v-list-item-action>
                    <v-icon small
                      v-if="child.icon"
                      :color="activeRouter === child.route.path?'#fff':'#546E7A'"
                      class="sub-icon-mini"
                    >{{ child.icon }}</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-menu>-->
          <!-- Content -->
          <v-list-item
            v-else
            :key="item.title"
            @click="changeRoute(item.route,item.group)"
            :color="activeRouter === item.route.path?'primary':''"
            :class="[{'white--text': activeRouter === item.route.path},'item-list' ,]"
          >
            <v-list-item-action>
              <v-icon
                small
                v-if="item.icon"
                :color="activeRouter === item.route.path?'#fff':''"
              >{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      dialog: false,
      drawer: true,
      attach: false,
      items: [
        { header: "App" },
        {
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
          route: { path: "/" },
          group: "app"
        },
        {
          title: "Client",
          icon: "fa fa-users",
          route: { path: "/clientCenter" },
          group: "app"
        },
        {
          title: "Setting",
          icon: "fas fa-cogs",
          route: { path: "/setting" },
          group: "app"
        },

        // { header: "View" },
        // Demo Group
        // {
        //   title: "Demo",
        //   active: true, // Expands or Collapse list group
        //   icon: "view_module",
        //   group: "demo",

        //   children: [
        //     {
        //       title: "Vuetify Form",
        //       route: { path: "/vuetifyForm" },
        //       group: "demo",
        //       icon: "ballot"
        //     },
        //     {
        //       title: "Data table",
        //       route: { path: "/dataTable" },
        //       group: "demo",
        //       icon: "table_chart"
        //     },
        //     {
        //       title: "Form Wizard",
        //       route: { path: "/formWizard" },
        //       group: "demo",
        //       icon: "ballot"
        //     },
        //     {
        //       title: "Drawer Form",
        //       route: { path: "/drawerForm" },
        //       group: "demo",
        //       icon: "table_chart"
        //     }
        //   ]
        // }
      ]
    };
  },
  computed: {
    mini: {
      // getter
      get: function() {
        return this.$store.state.app.appDrawer.mini;
      },
      // setter
      set: function(newValue) {}
    },
    activeRouter: {
      // getter
      get: function() {
        return this.$store.state.app.appDrawer.activeRouter;
      },
      // setter
      set: function(newValue) {}
    },
    activeGroup: {
      // getter
      get: function() {
        return this.$store.state.app.appDrawer.activeGroup;
      },
      // setter
      set: function(newValue) {}
    }
  },
  created() {
    this.$store.watch(
      state => state.app.appDrawer.mini,
      () => {
        const mini = this.$store.state.app.appDrawer.mini;
        if (mini === true) {
          setTimeout(() => {
            this.attach = true;
          }, 100);
        } else {
          this.attach = false;
        }
      }
    );
  },
  methods: {
    changeRoute(route, group) {
      this.$store.dispatch("app/appDrawer/setActiveRouter", route.path);
      this.$store.dispatch("app/appDrawer/setActiveGroup", group);
      this.$nextTick(() => {
        this.$router.push(route);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-drawer {
  transition-duration: 0.3s, 0.2s, 0.35s;
}
.sub-content-menu {
  min-width: 200px !important;
  position: fixed;
  margin-left: 5px;
}
.sub-item-list {
  // border-radius: 10px;
}
.item-list-group-mini {
  margin: 0 !important;
}
.sub-item-list-mini {
  border-radius: 3px;
}
.sub-icon-mini {
  font-size: 20px;
}
</style>

