<template>
  <div>
    <component :is="currentLayout"></component>
    <!--  Snackbar -->
    <snackbar/>
  </div>
</template>

<script>
import layout from "./layout";
import Snackbar from "../components/Snackbar.vue";

export default {
  name: "App",
  components: { Snackbar },
  computed: {
    currentLayout() {
      const currentLayout = this.$route.meta.layout
        ? layout[this.$route.meta.layout]
        : layout.main;

      return currentLayout;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  display: block;
  text-align: center;
  padding-right: 16px;
  text-decoration: none;
  cursor: pointer;
}
</style>
