document.addEventListener('DOMContentLoaded', function() {
	M.Datepicker.init(document.querySelectorAll('.datepicker'), {
		autoClose: true,
		format: 'mm-dd-yyyy',
		minDate: new Date()
	});
});