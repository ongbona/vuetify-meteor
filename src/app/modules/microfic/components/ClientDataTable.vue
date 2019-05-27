<template>
  <v-card flat light class="pa-2">
    <!-- Form -->
    <v-form :v-model="form" ref="form">
      <v-select
        v-model="form.clientType"
        :items="clientTypeOpts"
        item-text="name"
        item-value="_id"
        placeholder="Accounts type"
        flat
        clearable
        @change="handleClientTypeChange"
      ></v-select>

      <v-text-field v-model="form.searchText" placeholder="Search ..."></v-text-field>
    </v-form>

    <!-- Space -->
    <v-spacer class="ma-3"></v-spacer>

    <!-- Data table -->
    <v-data-table
      :headers="tableTitles"
      :items="tableData"
      :items-per-page="5"
      fixed-header
      :height="tableHeight"
      :pagination="tablePagination"
      no-data-text="No Data"
      class="shadow-box"
    ></v-data-table>
  </v-card>
</template>
<script>
import _ from "lodash";
export default {
  name: "MicroClientDataTable",
  data() {
    return {
      loading: false,
      form: {
        clientType: "",
        searchText: ""
      },
      clientTypeOpts: [],
      tableTitles: [
        { text: "Code", align: "left", sortable: false, value: "code" },
        { text: "Name", align: "left", sortable: false, value: "name" }
      ],
      tableData: [],
      tablePagination: null,
      tableHeight: `calc(100vh - 470px)`,
      tableQuery: null,
      activeRow: null
    };
  },
  watch: {
    "form.searchText": _.debounce(function(val) {
      this.getClientDataTable(this.tableQuery);
    }, 300)
  },
  mounted() {
    this.getClientType();
  },
  methods: {
    // Get account type
    getClientType() {
      //   findClientType
      //     .callPromise({})
      //     .then(result => {
      //       this.clientTypeOpts = result;
      //     })
      //     .catch(error => {
      //     });
    },
    // Get data
    getClientDataTable(query) {
      if (query) {
        // this.loading = true;
        // this.tableQuery = query;
        // // Selector
        // let selector = {};
        // if (this.form.clientType) selector.clientTypeId = this.form.clientType;
        // if (this.form.searchText) {
        //   selector.$or = [
        //     { code: { $regex: this.form.searchText, $options: "i" } },
        //     { name: { $regex: this.form.searchText, $options: "i" } }
        //   ];
        // }
        // getClientDataTable
        //   .callPromise({ selector, query })
        //   .then(res => {
        //     this.tableData = res.data;
        //     this.tableTotal = res.total;
        //     this.loading = false;
        //   })
        //   .catch(err => {
        //     this.loading = false;
        //   });
      }
    },
    handleRowClick(row) {
      // Check current row
      if (row._id === (this.activeRow && this.activeRow._id)) {
        this.activeRow = null;
        this.$refs.tableRef.$refs.elTable.setCurrentRow(null);
      } else {
        this.activeRow = row;
      }

      this.$emit("row-click", this.activeRow);
    },
    handleClientTypeChange(val) {
      this.getClientDataTable(this.tableQuery);
    }
  }
};
</script>