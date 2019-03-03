$('#loginform').on('submit', function(event){
		event.preventDefault();

		var customer = {
			"email": $('#email').val(),
		 	"password": $('#password').val(),
		};

		counter = 0;
		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/login/',
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data){
			console.log("HELLO");
			$.each(data,function(index,value){
				if(data['user_id'] == -1)
				{
					alert("Entered incorrect details!");
					return
				}
				if(data['user_id']!= -1)
				{
					createCookie("user_id", data['user_id']);
					window.location.href = "catalogue.html";
				}
			});
		},
		error: function(data) {
			alert("Could not log in! :( Try again!")
		}
	});
});
