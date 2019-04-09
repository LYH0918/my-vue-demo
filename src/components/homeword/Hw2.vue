<template>
    <div id="Hw2">
        <button :class="isMin?'noSelect':'disabled'" v-on:click="previous">上一页</button>
        <button  v-for="(item,index) in btnList" :key="index" :class="item.selected?'noSelect mx fs':'selected mx fs'" v-on:click="num">{{item.index}}</button>
        <button :class= "isMax?'noSelect':'disabled'"  v-on:click="next">下一页</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            btnList:[
               {
                   index:1,
                   selected:false
                },
                {
                   index:2,
                   selected:true
                },
                {
                   index:3,
                   selected:true
                },
                {
                   index:4,
                   selected:true
                },
                {
                   index:5,
                   selected:true
                }
            ],
            btnSelect:1,
            isMax:true,
            isMin:false
        }
    },
    created(){},
    updated(){
        
    },
    methods:{
        btnchange(){
            for (var item of this.btnList){
                item.selected=true;
            if(item.index===this.btnSelect){
                item.selected=false;
            }
        }
        },
        next(){
            this.isMin=true;
            if(this.btnSelect<5){
            this.btnSelect++;
            this.btnchange()
            }else{
                this.btnSelect=5;
            }
            if(this.btnSelect==5){
                this.isMax=false;
            }
        },
        previous(){
            this.isMax=true;
            if(this.btnSelect>1){
                this.btnSelect--
                this.btnchange()
            }else{
                this.btnSelect=1;
            }
            if(this.btnSelect==1){
                this.isMin = false;
            }
        },
        num(e){
            if(e.target.innerHTML!="1"){
                this.isMin = true;
            }else{
                this.isMin = false;
            }
            if(e.target.innerHTML!="5"){
                this.isMax = true;
            }else{
                this.isMax = false;
            }
            this.btnSelect = parseInt(e.target.innerHTML);
            this.btnchange()
        }
    },
}
</script>

<style scoped>
    #Hw2{
        text-align: center;
    }
    button{
        padding:6px 12px;
        border-radius:3px;
        outline: none;
    }
    .mx{
        margin:0 1px;
    }
    .fs{
        font-size: 16px;
    }
    .noSelect{
        border:1px #409EFF solid;
        background:#ECF5FF;
        color:#409EFF;
    }
    .selected{
        border:1px #ECF5FF solid;
        background:#409EFF;
        color:#fff;
    }
    .disabled{
        border:1px #909399 solid;
        background:#f4f4f5;
        color:#909399;
    }
</style>