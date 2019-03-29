<template>
<div>
    <SecurityForm></SecurityForm>
   
    <v-card>
    <v-card-title>
        List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="item"
      :search="search"
    >
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning" class="ma-2">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</div>
</template>

<script>
import SecurityForm from "./SecurityTypeForm";
export default {
    components: {
        SecurityForm
    },
    data() {
        return {
            search:'',
            headers: [{
                    text: 'Id',
                    align: 'left',
                    sortable: true,
                    value: '_id'
                },
                {
                    text: 'Code',
                    align: 'left',
                    sortable: true,
                    value: 'code'
                },
                {
                    text: 'Name',
                    align: 'left',
                    sortable: true,
                    value: 'name'
                },
                {
                    text: 'Status',
                    align: 'left',
                    sortable: true,
                    value: 'status'
                },

            ],
            item: [{
                    _id: "001",
                    code: "B001",
                    name: "Bla A",
                    status: "void"
                },
                {
                    _id: "002",
                    code: "B001",
                    name: "Bla B",
                    status: "void"
                }
            ]
        };
    }
};
</script>
