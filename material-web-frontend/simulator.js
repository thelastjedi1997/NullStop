console.log("HELLO");

var option = -1;
var suboption = -1;

$('#opt1').on('click', function(event){
	option = 1;
	suboption = 0;
	console.log("OPTION = " ,  option);
	console.log("SUB = " , suboption);
	M.toast({html: 'You have bought kept your order.'});
});

$('#opt2').on('click', function(event){
	option = 2;
	suboption = 0;
	console.log("OPTION = " ,  option);
	console.log("SUB = " , suboption);
	M.toast({html: 'You have cancelled your order.'});
});

$('#opt3').on('click', function(event){
	option = 3;
	suboption = 0;
	console.log("OPTION = " ,  option);
	console.log("SUB = " , suboption);
	M.toast({html: 'You have returned your order.'});
});

$('#donebutton').on('click', function(event){
	event.preventDefault();

	var sumulation = {
			"user_id": readCookie('user_id'),
		 	"simulation_option" : option,
		 	"simulation_sub_option" : suboption,
		};

	$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/simulation/',
		data: JSON.stringify(sumulation),
		dataType: 'json',
		success: function(data){
			console.log("Done!");
		},
		error: function(data) {
			alert("There was an error!");
		}
	});

});

$('#logout').on('click', function(event){
	event.preventDefault();

	var user_id_obj = {
			"user_id": readCookie('user_id'),
		};

	$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/logout/',
		data: JSON.stringify(user_id_obj),
		dataType: 'json',
		success: function(data){
			window.location.href = "login.html";
		},
		error: function(data) {
			alert("There was an error!");
		}
	});

});

