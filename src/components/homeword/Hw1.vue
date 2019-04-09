<template>
    <div id="Hw1">
      <div class="inp"><label>姓名:</label><el-input placeholder="请输入名字" v-model="name" style="width:86%;margin:4px 20px;"></el-input></div>
      <div class="inp"><label>年龄:</label><el-input placeholder="请输入年龄" v-model="age" style="width:86%;margin:4px 20px;"></el-input></div>
      <div class="inp"><label>性别:</label><el-input placeholder="请输入性别" v-model="sex" style="width:86%;margin:4px 20px;"></el-input></div>
      <div class="inp"><label>住址:</label><el-input placeholder="请输入住址" v-model="address" style="width:86%;margin:4px 20px;"></el-input></div>
      <el-button type="primary" style="margin-top:20px" v-on:click="addPerson">添加用户</el-button>
      <hwc :tableData="personList"></hwc>
    </div>
</template>

<script>
import hwc from '../../components/homeword/hwcomponent/Hwc'
export default {
    data(){
        return{
            name:'',
            age:'',
            sex:'',
            address:'',
            personList:[]
        }
    },
    created(){

    },
    methods:{
        addPerson(){
            this.personList.push({
                name:this.name,
                age:this.age,
                sex:this.sex,
                address:this.address
            })
        }
    },
    components:{
        hwc
    }
}
</script>

<style>
    #Hw1{
        text-align: center;
    }
    .inp{
        width:100%;
    }
</style>
