new Vue({
	el: '#app',
	data: {
		newhw: {
			index: null,
			title: '',
			subject: '',
			date: '',
			description: ''
		},
		hws: [],
		mode: 'create'
	},
	methods: {
		saveHW: function(e) {
			e.preventDefault();
			this.hws.push({
				title: this.newhw.title,
				subject: this.newhw.subject,
				description: this.newhw.description,
				date: document.querySelector('input[name="date"]').value,
				state: false
			});
			this.setNewhw(null, '', '', '', '');
			localStorage.setItem('tareas-vue', JSON.stringify(this.hws));
		},
		deleteHW: function(index) {
			if(confirm(`¿Estas seguro de querer eliminar la tarea ${this.hws[index].title}?`)) {
				this.hws.splice(index, 1);
				localStorage.setItem('tareas-vue', JSON.stringify(this.hws));
			}
		},
		changeState: function(index) {
			this.hws[index].state = !this.hws[index].state;
			localStorage.setItem('tareas-vue', JSON.stringify(this.hws));
		},
		updateHW: function(index) {
			let hw = this.hws[index];
			hw.title = this.newhw.title;
			hw.subject = this.newhw.subject;
			hw.description = this.newhw.description;
			hw.date = document.querySelector('input[name="date"]').value;
			this.setNewhw(null, '', '', '', '');
			this.mode = 'create';
			localStorage.setItem('tareas-vue', JSON.stringify(this.hws));
		},
		modifyHW: function(index) {
			let hw = this.hws[index];
			this.setNewhw(index, hw.title, hw.subject, hw.date, hw.description, hw.state);
			this.mode = 'edit';
		},
		cancelModify: function() {
			this.setNewhw(null, '', '', '', '');
			this.mode = 'create';
		},
		setNewhw: function(index, title, subject, date, description) {
			this.newhw.index = index;
			this.newhw.title = title;
			this.newhw.subject = subject;
			this.newhw.date = date;
			this.newhw.description = description;
		}
	},
	computed: {
		getTasks: function() {
			let date = new Date();
			let today = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
			return this.hws.filter((elem, index) => diff(elem.date, today) <= 7);
		}
	},
	created: function() {
		let data = localStorage.getItem('tareas-vue');
		let task = localStorage.getItem('tarea-param'); 
		
		if (data != null) {
			this.hws = JSON.parse(data);
		}
		if (task != null) {
			task = JSON.parse(task);
			this.setNewhw(task.index, task.title, task.subject, task.date, task.description, task.state);
			this.mode = 'edit';
			localStorage.removeItem('tarea-param');
		}
	}
});