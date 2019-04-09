<template>
	<div id="Hw4">
		<table>
			<tr>
				<td><el-checkbox style="margin-right: 6px;" id="selectAll" label=' ' v-model="selectAll" v-on:change="selectAllchange"></el-checkbox>全选</td>
				<td>商品名称</td>
				<td>商品单价</td>
				<td>购买数量</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in carList" :key="item.index">
				<td><el-checkbox :id="'select'+item.index" :label="'商品'+item.index" v-model="selectList" v-on:change="selectSingle"></el-checkbox></td>
				<td>{{item.name}}</td>
				<td>{{item.price}}</td>
				<td>
					<el-button class="pd" v-on:click="reduce">-</el-button>
					<span :id="'s'+item.index">{{item.count}}</span>
					<el-button class="pd" v-on:click="add">+</el-button>
				</td>
				<td><el-button type="danger" :id="'btn'+item.index" v-on:click="moveCar">移除</el-button></td>
			</tr>
		</table>
		<div class="totlePrice"><p>总价:<span class="span">￥{{newPrice}}</span></p></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				carList:[
					{
						index:1,
						name:'iPhone X',
						price:6188,
						count:1,
						selectName:"商品1"
					},
					{
						index:2,
						name:'iPhone XS',
						price:5888,
						count:1,
						selectName:"商品2"
					},
					{
						index:3,
						name:'iPhone Xsmax',
						price:21488,
						count:1,
						selectName:"商品3"
					}
				],
				totlePrice:0,
				selectAll:[],
				selectList:[],
				snList:[]
			}
		},
		created(){
			this.addList()
			//this.calcPrice()
		},
		methods:{
			addList(){
				this.snList=[]
				for(let item of this.carList){
					this.snList.push(item.selectName)
				}
			},
//			calcPrice(){
//				var sum=0;
//				for(var item of this.carList){
//					for(var some of this.selectList){
//						if(some===item.selectName){
//							sum+=item.price*item.count
//						}
//					}
//				}
//				this.totlePrice = sum;
//			},
			selectAllchange(){
				var $ = function(id){return document.getElementById(id)}
				if($('selectAll').childNodes[0].childNodes[1].checked===true){
					this.selectList = this.snList
				}else{
					this.selectList=[]
				}
				//this.calcPrice()
			},
			selectSingle(){
				var isSelect = this.selectList.length === this.snList.length;
				if(isSelect){
					this.selectAll = [' '];
					console.log(this.selectAll)
				}else{
					this.selectAll = [];
				}
				//this.calcPrice()
			},
			add(e){
				if(e.target.nodeName==="BUTTON"){
					var el = e.path[1].childNodes[2]
					var index = parseInt(el.id.slice(1));
					this.carList[index-1].count++;
					//this.calcPrice()
				}else{
					var el = e.path[2].childNodes[2]
					var index = parseInt(el.id.slice(1));
					this.carList[index-1].count++;
					//this.calcPrice()
				}
			},
			reduce(e){
				if(e.target.nodeName==="BUTTON"){
					var el = e.path[1].childNodes[2]
					var index = parseInt(el.id.slice(1));
					if(this.carList[index-1].count>1)
					this.carList[index-1].count--;
					//this.calcPrice()
				}else{
					var el = e.path[2].childNodes[2]
					var index = parseInt(el.id.slice(1));
					if(this.carList[index-1].count>1)
					this.carList[index-1].count--;
					//this.calcPrice()
				}
			},
			moveCar(e){
				if(e.target.nodeName==="BUTTON"){
					let i = parseInt(e.target.id.slice(3))
					var newList = []
					var sList = [];
					for(var item of this.carList){
						if(item.index!==i){
							newList.push(item)	
						}else{
							for(var el of this.selectList){
								if(el!==item.selectName){
									sList.push(el)
								}
							}
						}
					}
					
					this.carList = newList;
					this.addList()
					this.selectList = sList;
					if(this.snList.length===this.selectList.length){
						this.selectAll = [' '];
					}
					//this.calcPrice()
				}else{
					let i = parseInt(e.path[1].id.slice(3))
					var newList = []
					var sList = []
					for(var item of this.carList){
						if(item.index!==i){
							newList.push(item)
						}else{
							for(var el of this.selectList){
								if(el!==item.selectName){
									sList.push(el)
								}
							}
						}
					}
					this.carList = newList;
					this.addList()
					this.selectList = sList;
					if(this.snList.length===this.selectList.length){
						this.selectAll = [' '];
					}
					
					
					//this.calcPrice()
				}
				if(this.snList.length===0){
						this.selectAll = [''];

				}
			}
		},
		computed:{
			newPrice:function(){
				var sum=0;
				for(var item of this.carList){
					for(var some of this.selectList){
						if(some===item.selectName){
						  sum+=item.price*item.count
						}
					}
				}
				return sum
			}
		}
	}
</script>
<style scoped>
	table{
		border-collapse: collapse;
		width:80%;
		border:1px solid #ddd;
		margin:0 auto;
	}
	table>tr:first-child>td{
		background:#2C83B2;
		color:#fff;
	}
	td{
		border:1px solid #ddd;
		text-align: center;
		padding:6px 0;
	}
	.pd{
		padding:4px;
		height:20px;
		width:20px;
		color:#fff;
		background: #2C83B2;
	}
	.totlePrice{
		width:300px;
		height:30px;
		margin:20px auto;
		text-align:center;
	}
	.span{
		color:red;
	}
</style>