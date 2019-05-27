<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            fixed
            app>
            <v-list dense>
                <template v-for="item in items">
                    <v-layout
                        v-if="item.heading"
                        :key="item.heading"
                        row
                        align-center>
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                        </v-flex>
                        <v-flex
                            xs6
                            class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>

                    <v-list-tile
                        :key="item.text"
                        :to="item.url">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="blue darken-3"
            dark
            app
            fixed>
            <v-toolbar-title>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Rabbit Center</span>
                <v-avatar
                    size="32px"
                    tile>
                    <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
        </v-avatar>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-menu
                    transition="scale-transition"
                    origin="center center">
                    <v-btn
                        small
                        slot="activator"
                        icon>
                        <v-icon>widgets</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile
                            v-for="(n,i) in 5"
                            :key="n"
                            @click="btnDelete(i)">
                            <v-list-tile-title v-text="'Branch ' + n"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

            </v-toolbar-items>

        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    // data: () => ({

    // }),
    data() {
        return {
            dialog: false,
            drawer: null,
            items: [{
                    icon: "home",
                    text: "Home",
                    url: '/'
                },
                {
                    icon: "person",
                    text: "Customer",
                    url: '/customer'
                },
                {
                    icon: "group",
                    text: "List Customer",
                    url: '/customer/list'
                },
                {
                    icon: "menu",
                    text: "My Tab",
                    url: '/tab'
                },
            ]
        };
    },
    props: {
        source: String
    }
};
</script>
