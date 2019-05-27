<template>
    <div>
        <v-layout class="elevation-4 LAYOUT">
            <v-flex
              >
                <v-text-field
                v-model="form.name"
                    solo
                    placeholder="Name"></v-text-field>
                <v-text-field
                v-model="form.age"
                    solo
                    placeholder="Age"></v-text-field>
               <v-select
               v-model="form.gender"
               solo
                    :items="items"
                    label="Select gender"></v-select>
                <v-text-field
                    v-model="form.address"
                    solo
                    placeholder="Address"></v-text-field>
                <v-text-field
                    v-model="form.phone"
                    type="phone"
                    mask="phone"
                    solo
                    placeholder="Phone"></v-text-field>
                <v-text-field
                    v-model="form.email"
                    type="email"
                    solo
                    placeholder="Email"></v-text-field>
                <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="form.date"
                    persistent
                    lazy
                    full-width
                    width="290px">
                    <v-text-field
                        solo
                        slot="activator"
                        v-model="form.date"
                        label="Picker in dialog"
                        append-icon="event"
                        readonly></v-text-field>
                    <v-date-picker
                        v-model="form.date"
                        scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                            flat
                            color="primary"
                            @click="modal = false">Cancel</v-btn>
                        <v-btn
                            flat
                            color="primary"
                            @click="$refs.dialog.save(form.date)">OK</v-btn>
                    </v-date-picker>
                </v-dialog>
                

                <v-btn color="orange" @click="btnSubmit">Submit</v-btn>
                <v-btn color="orange">Back</v-btn>

            </v-flex>
        </v-layout>
        <list-customer :customers="customers"></list-customer>
    </div>
</template>

<script>
import ListCustomer from './ListCustomer'
export default {
    name: '',
    components:{
        ListCustomer,
    },
    data() {
        return {

            modal: false,
            items: ['Male', 'Female'],
            form: {
                phone: null,
                name: null,
                age: null,
                gender: null,
                address: null,
                email: null,
                date: new Date().toISOString().substr(0, 10),
            },
            customers:[]
        }
    },
    methods:{
        btnSubmit(){
            this.customers.push({
                name:this.form.name,
                age:this.form.age,
                gender:this.form.gender,
                address:this.form.address,
                phone:this.form.phone,
                email:this.form.email,
                date:this.form.date,
            })
        }
    }

}
</script>

<style>
.CARD {
    padding-left: 5%;
    padding-right: 5%;
    margin-left: 10%;
    margin-right: 10%;
    padding-top: 10%;
}
</style>
