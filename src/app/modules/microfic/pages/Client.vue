<template>
  <div>
    <TableToolbar v-model="tableFilters" @new="addNew"/>
  </div>
</template>

<script>
import TableToolbar from "../../../components/TableToolbar.vue";
export default {
  name: "Client",
  components: { TableToolbar },
  data() {
    return {
      tableFilters: [
        {
          prop: [
            "_id",
            "name",
            "gender",
            "dateOfBirth",
            "address",
            "telephone",
            "status"
          ],
          value: ""
        }
      ]
    };
  },
  methods: {
    // Add new
    addNew() {
      //   this.currentModal = ClientNew
      //   this.$nextTick(() => {
      //     this.modalVisible = true
      //   })
    }
  }
};
</script>
