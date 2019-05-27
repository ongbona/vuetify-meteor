<template>
  <div>
    <v-card light class="shadow-box">
      <!--Modal Form-->
      <component
        :is="currentModal"
        :form-type="formType"
        :update-doc="updateDoc"
        :visible="modalVisible"
        @modal-close="handleModalClose"
      />

      <!-- Toolbar -->
      <TableToolbar v-model="tableFilters" @new="addNew"/>

      <!-- Data Table -->
      <v-data-table :headers="tableTitles" :items="tableData" class="pa-3">
        <template slot="item" slot-scope="props">
          <tr>
            <td>
              <span
                v-if="props.item.type === 'Province'"
                class="ra-text-link"
                @click="edit(props.item)"
              >{{ props.item.code }}</span>
              <span
                v-if="props.item.type === 'District'"
                style="margin-left:1.25em;"
                class="ra-text-link"
                @click="edit(props.item)"
              >{{ props.item.code }}</span>
              <span
                v-if="props.item.type === 'Commune'"
                style="margin-left:2.50em;"
                class="ra-text-link"
                @click="edit(props.item)"
              >{{ props.item.code }}</span>
              <span
                v-if="props.item.type === 'Village'"
                style="margin-left:3.75em;"
                class="ra-text-link"
                @click="edit(props.item)"
              >{{ props.item.code }}</span>
            </td>

            <td>
              <span v-if="props.item.type === 'Province'">{{ props.item.name }}</span>
              <span
                v-if="props.item.type === 'District'"
                style="margin-left:1.25em;"
              >{{ props.item.name }}</span>
              <span
                v-if="props.item.type === 'Commune'"
                style="margin-left:2.50em;"
              >{{ props.item.name }}</span>
              <span
                v-if="props.item.type === 'Village'"
                style="margin-left:3.75em;"
              >{{ props.item.name }}</span>
            </td>
            <td>{{ props.item.enName }}</td>
            <td>{{ props.item.type }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// import Msg from '/imports/client/lib/message'
// import Notify from '/imports/client/lib/notify'
// import { dateRangePickerOpts } from '/imports/client/lib/date-picker-opts'

// Mixin
// import dataTablesMixin from '/imports/client/mixins/data-tables'

// Table Action
import TableToolbar from "/src/app/components/TableToolbar";
import TableAction from "/src/app/components/TableAction.vue";

// import { findLocation } from '../../api/location/methods'

import LocationForm from "./LocationForm.vue";
import LocationEdit from "./LocationEdit.vue";

export default {
  name: "MicroLocation",
  components: { TableToolbar, TableAction, LocationForm, LocationEdit },
  //   mixins: [dataTablesMixin],
  data() {
    return {
      loading: false,
      formType: "New",
      tableData: [
        {
          code: "01",
          enName: "Battambang",
          name: "Battambang",
          type: "Province",
          _id: "4"
        },
        {
          code: "0100",
          enName: "Battambang",
          name: "Battambang",
          parentId: "01",
          parents: {
            province: "01"
          },
          type: "District",
          _id: "5"
        },
        {
          code: "010001",
          enName: "Chrey Kong",
          name: "Chrey Kong",
          parentId: "0100",
          parents: {
            district: "0100",
            province: "01"
          },
          type: "Commune",
          _id: "6"
        },
        {
          code: "01000101",
          enName: "Slaket",
          name: "Slaket",
          parentId: "010001",
          parents: {
            commune: "010001",
            district: "0100",
            province: "01"
          },
          type: "Village",
          _id: "7"
        }
      ],
      tableTotal: 0,
      tableSearchDate: null,
      pickerOpts: null,
      tableCustomFilters: [{ props: "tableSearch", vals: 0 }],
      tableTitles: [
        {
          text: "Code",
          value: "code"
        },
        { text: "Name", value: "name" },
        { text: "En Name", value: "enName" },
        { text: "Type", value: "type" }
      ],
      tableFilters: [
        {
          prop: ["code", "name", "enName", "type"],
          value: ""
        }
      ],
      // Modal
      currentModal: null,
      modalVisible: false,
      updateDoc: null
    };
  },
  created() {
    // Extend data tables props (Mixin)
    // this.tableProps.defaultSort = {
    //   prop: 'code',
    //   order: 'ascending',
    // }
    // this.tableInitialQuery.sortInfo = {
    //   prop: 'code',
    //   order: 'ascending',
    // }
  },
  mounted() {
    // this.getData(this.tableInitialQuery);
    // this.getData()
  },
  methods: {
    getData() {
      this.loading = true;
      findLocation
        .callPromise({})
        .then(result => {
          this.tableData = result;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          Notify.error({ message: error });
        });
    },
    tableSearchClick() {
      this.tableCustomFilters[0].vals += 1;
    },
    tableQueryChange(tableQuery) {
      this.getData(tableQuery);
    },
    // Add new
    addNew() {
      this.formType = "New";
      this.currentModal = LocationForm;
      this.$nextTick(() => {
        this.modalVisible = true;
      });
    },

    edit(row) {
      let data = {
        _id: row._id,
        code: row.code.slice(-2),
        name: row.name,
        enName: row.enName,
        type: row.type
      };

      if (row.type == "District") {
        data.province = row.parents.province;
      } else if (row.type == "Commune") {
        data.province = row.parents.province;
        data.district = row.parents.district;
      } else if (row.type == "Village") {
        data.province = row.parents.province;
        data.district = row.parents.district;
        data.commune = row.parents.commune;
      }
      this.formType = "Edit";
      this.updateDoc = data;
      this.currentModal = LocationForm;
      this.$nextTick(() => {
        this.modalVisible = true;
      });
    },

    handleModalClose() {
      this.modalVisible = false;
      this.$nextTick(() => {
        this.currentModal = null;
        this.formType = "New";
        this.updateDoc = null;
        this.getData(this.tableInitialQuery);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>