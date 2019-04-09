<template>
	<div id="Hw4">
		<div class="container">
			<h4>学生信息录入系统</h4>
			<div>
				<label>姓名:</label><el-input type="text" placeholder="请输入名字" class="iw" v-model="name"/>
			</div>
			<div><label>年龄:</label><el-input type="number" class="iw" v-model="age"/></div>
				<div><label>性别:</label><el-select v-model="sex" placeholder="男" class="iw">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
  			</el-select></div>
			<div><label>手机:</label><el-input type="text" placeholder="请输入你的手机" class="iw" v-model="phone"/></div>
			<div><el-button type="primary" v-on:click="createUser">创建新用户</el-button></div>
		</div>
		<table width="80%" border="1px red solid" style="margin:30px auto">
			<tr>
				<td width="20%" >姓名</td>
				<td>性别</td>
				<td>年龄</td>
				<td>手机</td>
				<td>删除</td>
			</tr>
			<tr v-for="item in userList" :key="item.index" :id='"td"+item.index'>
				<td>{{item.name}}</td>
				<td>{{item.sex}}</td>
				<td>{{item.age}}</td>
				<td>{{item.phone}}</td>
				<td><el-button type="danger" v-on:click="deleteUser">删除</el-button></td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				name:'',
				age:1,
				sex:'男',
				phone:'',
				index:1,
				userList:[{
					index:0,
					name:'模拟学生1',
					age:21,
					sex:'男',
					phone:'13536235013'
				}]
			}
		},
		created(){
			
		},
		methods:{
			createUser(){
				if(!this.name){
					alert('名字不能为空');
					return
				}
				if(this.age<=0&&!this.age){
					alert('请输入您真实的年龄')
					return
				}
				if(!this.phone){
					alert("请输入您的电话")
					return
				}
				if(this.phone.length!=11){
					alert("手机号长度应为11位")
					return
				}
				this.userList.push({
				index:this.index,
				name:this.name,
				age:this.age,
				sex:this.sex,
				phone:this.phone
			})
			this.index++;
			},
			deleteUser(e){
				let msg = "您确认要删除此学生的信息吗？"
				let isDelete = confirm(msg);
				if(isDelete){
				var newList = [];
				if(e.target.nodeName==="BUTTON"){
					var index = parseInt(e.path[2].id.slice(2))
				}else{
					var index = parseInt(e.path[3].id.slice(2))
				}
				for(let item of this.userList){
					if(item.index!==index){
						newList.push(item)	
					}
				}
				this.userList = newList;
				}
			}
		}
	}
</script>
<style scoped>
	.container{
		width:80%;
		padding:16px 0 16px 0;
		text-align: center;
		border:1px solid #ccc;
		margin:0 auto;
	}
	.iw{
		width:80%;
		margin:10px 0 10px 30px;
	}
	table{
		width:80%;
	}
	table>tr:first-child{
		background:#409EFF;
	}
	table>tr:first-child>td{
		color:#fff;
	}
	tr:not(:first-child){
		border-bottom:1px solid #ddd;
	}
	tr{
		width:100%;
	}
	td{
		width:19.5%;
		border:none;
		text-align: center;
		padding:6px 0;
		
	}
</style>