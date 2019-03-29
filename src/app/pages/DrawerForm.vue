<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-btn color="info" :dark="$vuetify.dark" @click.stop="handleToggleDrawer ">Toggle</v-btn>

      <v-navigation-drawer
        v-model="drawer"
        right
        temporary
        floating
        height="100%"
        style="position:fixed"
        width="400"
      >
        <v-toolbar text class="transparent">
          <v-toolbar-title class="text-xs-center" style="width:100%">Form</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <!-- Container -->
          <v-container grid-list-md>
            <v-layout wrap>
              <!-- Form item -->
              <v-flex xs12 sm12 md6>
                <v-text-field v-model="firstName" :counter="10" label="First name" required></v-text-field>
                <v-text-field v-model="firstName" :counter="10" label="First name" required></v-text-field>
                <v-text-field v-model="firstName" :counter="10" label="First name" required></v-text-field>
              </v-flex>

              <v-flex xs12 sm12 md6>
                <v-text-field v-model="lastName" :counter="10" label="last name" required></v-text-field>
                <v-text-field v-model="lastName" :counter="10" label="last name" required></v-text-field>
                <v-text-field v-model="lastName" :counter="10" label="last name" required></v-text-field>
              </v-flex>
            </v-layout>

            <div class="mt-4 text-xs-center">
              <v-btn color="warning" small @click="handleToggleDrawer">Close</v-btn>
              <v-btn color="info" small @click="handleToggleDrawer">Save</v-btn>
            </div>
          </v-container>
        </v-form>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DrawerForm",
  data() {
    return {
      drawer: null,
      firstName: "",
      lastName: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleToggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>