<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md3 lg3>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="/imgs/rabbit.png" alt="Vue Material Admin" width="120" height="120">
                  <h1 class="flex my-4 rabbit--text">Rabbit IT Solution</h1>
                </div>
                <v-form>
                  <!-- User name -->
                  <v-text-field
                    append-icon="person"
                    color="orange darken-4"
                    name="login"
                    label="Login"
                    type="text"
                  >
                    <v-progress-linear
                      v-if="custom"
                      slot="progress"
                      :value="progress"
                      :color="color"
                      height="7"
                    ></v-progress-linear>
                  </v-text-field>

                  <!-- Password -->
                  <v-text-field
                    append-icon="lock"
                    color="orange darken-4"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block class="rabbit" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return { loading: false };
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/");
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="css">
.container.fill-height > .layout {
  margin-top: 7%;
}
.rabbit {
  background-color: #f47321 !important;
  color: white;
}
.rabbit--text {
  color: #f47321 !important;
}
</style>

