console.log("HI");


  $(document).ready(function(){
    $('select').formSelect();
  });

// var phone_type = $("#phonetype").val();


// $('#signup').on('click', function(event){
// var val1 = $('#phonetype').find(":selected").text();
// console.log(val1);});

random_str= "Samsung S8";

	$('#signup').on('submit', function(event){
		event.preventDefault();
		console.log("HELLO");
		var customer = {
			"fname": $('#fname').val(),
		 	"lname": $('#lname').val(),
		 	"phone": $('#phone').val(),
		 	"email": $('#email').val(),
		 	"password": $('#password').val(),
		 	"gender": $('#gender').val(),
		 	"address": $('#address').val(),
		 	"city": $('#city').val(),
		 	"state": $('#state').val(),
		 	"pincode": $('#pincode').val(),
		 	"age": $('#age').val(),
		 	"phone_type" : random_str,
		};

		console.log(customer);

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/signup/',
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data){
			if(data!=-1)
			{
				alert("You have successfully signed up!");
				window.location.href = "login.html";
			}
		},
		error: function(){
			alert("There was a problem signing up. :(");
		}
	});
});
