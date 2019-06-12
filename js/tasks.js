new Vue({
	el: '#app',
	data: {
		tasks: []
	},
	methods: {
		modify: function(index) {
			let task = this.tasks[index];
			task.index = index;
			localStorage.setItem('tarea-param', JSON.stringify(task)); // escribe un nuevo item para abrirlo en la otra página
			location.href = 'home.html';
		},
		deleteTask: function(index) {
			if(confirm(`¿Estas seguro de querer eliminar la tarea ${this.tasks[index].title}?`)) {
				this.tasks.splice(index, 1);
				localStorage.setItem('tareas-vue', JSON.stringify(this.tasks));
			}
		},
		changeState: function(index) {
			this.tasks[index].state = !this.tasks[index].state;
			localStorage.setItem('tareas-vue', JSON.stringify(this.tasks));
		}
	},
	created: function() {
		let data = JSON.parse(localStorage.getItem('tareas-vue'));
		if (data != null) {
			this.tasks = data;
		}
	}
});