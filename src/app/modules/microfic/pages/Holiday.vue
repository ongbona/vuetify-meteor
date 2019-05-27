<template>
<div>
    <v-card
        light
        class="shadow-box pa-3">
        <div class="title font-weight-light">New</div>
        <v-layout
            row
            wrap>
            <v-flex class="lg4 md4 sm12 xs12 pl-2 pr-2">
                <v-flex ma-2>
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px">
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="date"
                                label="Holiday date"
                                prepend-inner-icon="event"
                                readonly
                                v-on="on"></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            @input="menu = false"></v-date-picker>
                    </v-menu>
                </v-flex>
            </v-flex>

            <v-flex class="lg4 md4 sm12 xs12 pl-2 pr-2">
                <v-flex ma-2>
                    <v-text-field
                        v-model="name"
                        label="Name" />
                </v-flex>
            </v-flex>

            <v-flex
                lg4
                md4
                sm12
                xs12
                pr-2
                pl-2>
                <v-flex ma-2>
                    <v-text-field
                        v-model="memo"
                        label="Memo" />
                </v-flex>
            </v-flex>
        </v-layout>
        <v-btn
            color="primary"
            @click="btnNew">New</v-btn>
    </v-card>
</div>
</template>

<script>
export default {
    name: "MicroHoliday",
    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            name: '',
            memo: '',
        };
    },

    methods: {
        btnNew() {
            let doc = {
                date: this.date,
                name: this.name,
                memo: this.memo
            }
            console.log(doc)
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
