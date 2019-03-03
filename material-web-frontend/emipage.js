var months3string = "<p><label><input value = \"3\" id = \"emi1\" name=\"group1\" type=\"radio\" /><span>3 months</span></label></p>"
var months6string = "<p><label><input value = \"6\" id = \"emi2\" name=\"group1\" type=\"radio\" /><span>6 months</span></label></p>"
var months12string = "<p><label><input value = \"12\" id = \"emi3\" name=\"group1\" type=\"radio\" /><span>12 months</span></lab6l></p>"

var div = document.getElementById('emioptions');

if(readCookie('months_3') == 1)
	div.innerHTML += months3string;
if(readCookie('months_6') == 1)
	div.innerHTML += months6string;
if(readCookie('months_12') == 1)
	div.innerHTML += months12string;

$('#emiform').on('submit', function(event){
		event.preventDefault();

		var number_of_installments = $('input[name=group1]:checked', '#emiform').val();
		
		var emipref = {
			"user_id": readCookie('user_id'),
		 	"number_of_installments": number_of_installments,
		};

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/emi/',
		data: JSON.stringify(emipref),
		dataType: 'json',
		success: function(data){
			alert("EMI preference chosen!");
			window.location.href = "simulator.html";
			},
		error: function(data) {
			alert("Error! :(")
		}
	});
});

