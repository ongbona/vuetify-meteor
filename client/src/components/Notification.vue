<template>
    <div>
        <v-layout>
            <v-snackbar
                :color="items.color"
                v-model="snackbar"
                :timeout="timeout"
                :top="y === 'top'">
                <h3>{{ text }}</h3>
                <v-btn
                    small
                    icon
                    class="elevation-5"
                    color="black"
                    @click="snackbar = false">
                    <v-icon color="white">{{items.icon}}</v-icon>
                </v-btn>
            </v-snackbar>
        </v-layout>
    </div>
</template>

<script>
export default {
    props: ['text'],
    data() {
        return {
            snackbar: true,
            y: 'top',
            timeout: 3000,
            items: {
                icon: 'close',
                text: 'This is a notify !',
                color: 'success',
            }

        }
    },
    
}
</script>

<style>
</style>
