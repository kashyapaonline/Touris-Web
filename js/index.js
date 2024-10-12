new vue({

	el: "#app",
	data(){
		return{
			taskList:[],
			task:"",
			color:""
		}
	},
	methods: {
		/*;pk;k;k;okoo */
		addTask:function () {
			if (this.task !=""){
				this.taskList.push(this.task);
				this.task="";
				this.color="#fff";
			}else{
				this.color="#e74c3c";


			}

			},
			removeTask:function(index){
				this.taskList.splice(index,1);
			}	
		

	},

});