
<template>
  <v-snackbar v-model="show" :color="color" :absolute="absolute" top>
    {{message}}
    <v-btn :dark="$vuetify.dark" text @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "primary",
      absolute: false
    };
  },
  created() {
    this.$store.watch(
      state => state.app.snackbar.msg,
      () => {
        const msg = this.$store.state.app.snackbar.msg;
        if (msg !== "") {
          this.show = true;
          this.message = this.$store.state.app.snackbar.msg;
          this.color = this.$store.state.app.snackbar.color;
          this.absolute = this.$store.state.app.snackbar.absolute;
          const snackOpts = {
            msg: "",
            color: "",
            absoulute: false
          }

          this.$store.commit("app/snackbar/setSnack", snackOpts);
        }
      }
    );
  }
};
</script>