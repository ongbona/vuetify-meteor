<template>
  <div>
    <h3>Vuex State</h3>
    Counter: {{counter}}
    <br>
    <button @click="increaseCounter">Increase Conter</button>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  computed: {
    counter() {
      return this.$store.state.app.test.counter;
    },
  },
  methods: {
    increaseCounter() {
      this.$store.dispatch("app/test/increaseCounter", 1);
    },
  }
};
</script>
