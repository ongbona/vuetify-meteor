<template>
    <div>
        <!-- <v-card   class="elevation-5"> -->

        <v-data-table
            class="elevation-5 TABLE"
            :headers="headers"
            :items="customers">
            <template
                slot="items"
                slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.gender }}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.phone }}</td>
                <td>{{ props.item.email}}</td>
                <td>{{ props.item.date}}</td>
                <td>
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)">
                        edit
                    </v-icon>
                     <v-icon
                        small
                        @click="deleteItem(props.item)">
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'ListCustomer',
    props: ['customers'],
    data() {
        return {
            headers: [{
                    text: 'Name',
                    value: 'name',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Age',
                    value: 'age',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Gender',
                    value: 'gender',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Address',
                    value: 'address',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Phone',
                    value: 'phone',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Email',
                    value: 'email',
                    align: 'left'
                },
                {
                     sortable: false,
                    text: 'Date',
                    value: 'date',
                    align: 'left'
                    
                },
                {
                    text:'Action',
                     sortable: false,
                }
            ]
        }
    }
}
</script>
