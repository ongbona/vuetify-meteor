<template>
  <v-container fluid class="pa-0 pl-3 pr-3">
    <v-layout row wrap>
      <v-flex sm7 align-self-center>
        <!-- Action -->
        <slot name="action">
          <v-btn color="primary" dark @click="$emit('new')">
            <v-icon>add</v-icon>New
          </v-btn>
        </slot>
      </v-flex>

      <v-flex :span="colSpan.filter" sm3 offset-sm2 class="text-right">
        <!-- Filter -->
        <slot name="filter">
          <v-text-field placeholder="Search ..." v-model="filter"/>
        </slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "TableToolbar",
  props: {
    value: {
      type: Array,
      default: () => [{ value: "" }]
    },
    colSpan: {
      type: Object,
      default: () => ({ action: 7, filter: 3 })
    }
  },
  data() {
    return {
      filter: this.value[0].value,
      colSpanOffset: 12 - (this.colSpan.action + this.colSpan.filter)
    };
  },
  watch: {
    filter(val) {
      this.value[0].value = val;
      this.$emit("input", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
