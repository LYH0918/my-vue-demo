<template>
    <div id="chat">
        <div class="container">
            <chat1 class="chat" :otherlist="listBox" @push-otherlist="getList"></chat1>
            <chat1 class="chat" :otherlist="listBox" @push-otherlist="getList"></chat1>
        </div>
        
    </div>
</template>

<script>
import chat1 from './hwcomponent/chat1'
export default {
    data(){
        return {
            k:"a",
            j:"b",
            listBox:[]
        }
    },
    methods:{
        getList(msg){
            this.listBox = msg;
           // console.log(this.listBox)
        }
    },
    components:{
        chat1
    }
}
</script>

<style scoped>
    .container{
        width:100%;
        display: flex;
        justify-content: space-around;
    }
</style>
