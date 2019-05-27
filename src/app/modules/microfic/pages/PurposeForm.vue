<template>
  <div>
    <v-card light class="shadow-box pa-3">
      <div class="title font-weight-light">New</div>
      <v-layout row wrap>
        <v-flex class="lg4 md4 sm12 xs12 pl-2 pr-2">
          <v-flex ma-2>
            <v-text-field v-model="code" label="Code"/>
          </v-flex>
        </v-flex>

        <v-flex class="lg4 md4 sm12 xs12 pl-2 pr-2">
          <v-flex ma-2>
            <v-text-field v-model="name" label="Name"/>
          </v-flex>
        </v-flex>

        <v-flex class="lg4 md4 sm12 xs12 pl-2 pr-2">
          <v-flex ma-2>
            <v-select label="Status" v-model="status" :items="statusOpt"></v-select>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-btn color="primary" @click="btnNew">New</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MicroHoliday",
  data() {
    return {
      code: "",
      status:'',
      statusOpt: ["active", "inactive", "void"],
      name: "",
     
    };
  },

  methods: {
    btnNew() {
      let doc = {
        status: this.status,
        name: this.name,
        code: this.code
      };
      console.log(doc);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
