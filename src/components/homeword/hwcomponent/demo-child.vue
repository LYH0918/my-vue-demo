<template>
    <div id="k">
        <input type="text" v-model="l"><button @click="addMsg">dianji</button>
        <div v-for="item in newList" :key="item.id" :class="item.dir"><p>{{item.value}}</p></div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            l:'',
            n:[],
            t:[],
            index:0,
            tp:1
        }
    },
   
    created(){
    },
    methods:{
        addMsg(){
            if(this.l!==''){
                this.n.push(this.l)
                this.index = this.tp;
                //console.log(this.index)
            }
            
        }
    },
     props:["w"],
     computed:{
         newList:function(){
             console.log(this.index);
             console.log(this.tp)
             if(this.tp!==this.index){
                 this.t.push({dir:"container-left",value:this.w[this.w.length-1]})
             }else{
                 this.t.push({dir:"container-right",value:this.n[this.n.length-1]})
                 this.tp++;
                // console.log(this.index+"====")
                // console.log(this.tp+"=====")
                 console.log(this.w.length+"------")
             }
             return this.t;
         }
     }
}
</script>

<style scoped>
    #k{
        width:200px;
        height:300px;
        border:1px red solid;
    }
    .container-right{
        display: flex;
        justify-content: flex-end;
    }
    .container-left{
        display: flex;
        justify-content: flex-start;
        
    }
    .container-left>p{
        background:#eee;
        border-radius: 3px;
        padding:4px 10px;
        margin:4px 0 4px 2px;
    }
    .container-right>p{
        background:yellowgreen;
        border-radius: 3px;
        padding:4px 10px;
        margin:4px 2px 4px 0px;
    }
</style>
