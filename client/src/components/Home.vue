<template>
    <div>
        <notify v-if="visible" :text="text" ></notify>
        <v-btn @click="visible=!visible">Alert</v-btn>
    </div>
</template>

<script>
import Notify from './Notification'
export default {
    components:{
        Notify,
    },
    data(){
        return{
           text:'From HOme',
           visible:false,
        }
    },
    methods:{
        btnAlert(){
            this.text="Wellcome"
        }
    }
    
}
</script>
