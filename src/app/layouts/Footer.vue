<template>
  <v-footer height="auto" class="white pa-3 app--footer">
    <v-spacer></v-spacer>
    <span class="caption mr-1">Copyright &copy; {{ new Date().getFullYear() }} - Rabbit Tech</span>
    <v-icon color="pink" small>favorite</v-icon>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
