<template>
    <div id="Hw3">
      <div class="inp"><label>名称:</label><el-input placeholder="请输入名字" v-model="name" style="width:86%;margin:4px 20px;"></el-input></div>
      <div class="inp"><label>成绩:</label><el-input placeholder="请输入成绩" v-model="score" style="width:86%;margin:4px 20px;"></el-input></div>
      <el-button type="primary" v-on:click="inp" style="margin-top:10px;">查看结果</el-button>
      <p>{{fname}} 的成绩为: <span style="color:red">{{fscore}}</span></p>
      <p style="margin-top:10px;">成绩判定为: <span style="color:red;">{{fscore=='(未输入成绩)'?'':(fscore>=60?(fscore>=80?"优秀":"及格"):"不及格")}}</span></p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fname:'(未输入名字)',
            fscore:'(未输入成绩)',
            name:'',
            score:'',
        }
    },
    methods:{
        inp(){
            if(this.name===''){
                alert("请输入用户名");
                return
            }
            if(this.score===''){
                alert("请输入成绩")
                return
            }
            this.fname=this.name;
            this.fscore=this.score
        }
    }
}
</script>

<style scoped>
    #Hw3{
        text-align: center;
    }
    #Hw3>p{
        margin-top:30px;
    }
    .inp{
        width:100%;
    }
    
</style>