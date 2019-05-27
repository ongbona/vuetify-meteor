<template>
    <div class="elevation-5 LAYOUT">
        <v-tabs
            v-model="model"
            color="transparent">
            <v-tab
                v-for="(n,i) in tabs"
                :key="i"
                @click="'text=n.name'">
                {{ n.name }}
                <v-btn
                    small
                    icon
                    @click="btnDelete(i)">
                    <v-icon
                        color="pink"
                        size="10px">clear</v-icon>
                </v-btn>
            </v-tab>
            <v-tab>
                <v-menu
                    transition="scale-transition"
                    origin="center center">
                    <v-btn
                    small
                        slot="activator"
                       icon>
                       <v-icon>menu</v-icon>
                       </v-btn>
                    <v-list>
                        <v-list-tile v-for="(n,i) in 5" :key="n" @click="btnDelete(i)">
                            <v-list-tile-title v-text="'iTer ' + n"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-tab>
        </v-tabs>
        <!-- <v-spacer></v-spacer> -->
        <v-tabs-items v-model="model">
            <v-tab-item
                v-for="n in tabs.length"
                :key="n">
                <v-card>
                    <v-card-text>
                        {{ tabs[model] }}
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: 0,
            tabs: [{
                    name: 'Tab1'
                },
                {
                    name: 'Tab2'
                },
                {
                    name: 'Tab3'
                },
                {
                    name: 'Tab4'
                },
                {
                    name: 'Tab5'
                },
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    methods: {
        btnDelete(i) {
            console.log(i);
            this.tabs.splice(i, 1);
        }
    }
}
</script>
