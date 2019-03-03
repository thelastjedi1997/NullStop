window.onload = function() {

	var table = document.getElementById("myscores");
	var cs_old = 0;
	var bps_old = 0;
    var cs;
    var bps;

    var customer = {
			"user_id": readCookie('user_id'),
		};

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://127.0.0.1:8000/profile/',
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data){   
			$.each(data,function(index,value){
				if(index=='old_credit_score')
				{
					cs_old = value;
				}
				if(index == 'old_buyers_profile_score')
				{
					bps_old = value;
				}
				if(index=='credit_score')
				{
					// var row = table.insertRow(0);
					// var cell1 = row.insertCell(0);
					// cell1.innerHTML = value;
					cs = value;
					console.log(cs);

					var row = table.insertRow(0);
					var cell1 = row.insertCell(0);
					cell1.innerHTML = "OLD CREDIT SCORE";
					var cell1 = row.insertCell(1);
					cell1.innerHTML =  cs_old;

					var row = table.insertRow(1);
					var cell1 = row.insertCell(0);
					cell1.innerHTML = "NEW CREDIT SCORE";
					var cell1 = row.insertCell(1);
					cell1.innerHTML =  cs;
				
				}
				if(index=='buyers_profile_score')
				{
					// var row = table.insertRow(1);
					// var cell1 = row.insertCell(0);
					// cell1.innerHTML = value;
					bps = value;
					console.log(bps);

					var row = table.insertRow(2);
					var cell1 = row.insertCell(0);
					cell1.innerHTML = "OLD BUYERS SCORE";
					var cell1 = row.insertCell(1);
					cell1.innerHTML =  bps_old;

					var row = table.insertRow(3);
					var cell1 = row.insertCell(0);
					cell1.innerHTML = "NEW BUYERS SCORE";
					var cell1 = row.insertCell(1);
					cell1.innerHTML =  bps;
				}
			}

			var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [old_credit_score, credit_score],
        }]
    },

    // Configuration options go here
    options: {}
});

)
		},
		error: function(){
			alert("Error!");
		}
	});
}

var ctx = document.getElementById('myChart').getContext('2d');


// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//     	labels: ["Old credit score" , "New Credit Score"]
//     }
//     options: {}
// })





	
// if(cs_old>cs)
// 					{
// 						M.toast({html: 'Your credit score decreased!'});
// 					}
// 					else if(cs_old<cs)
// 					{
// 						M.toast({html: 'Your credit score increased!'});
// 					}
// 					else if(cs_old == cs)
// 					{
// 						M.toast({html: 'Your credit score reamined the same!'});
// 					}


// if(bps_old>bps)
// 					{
// 						M.toast({html: 'Your buyers score decreased!'});
// 					}
// 					else if(bps_old<bps)
// 					{
// 						M.toast({html: 'Your buyers score increased!'});
// 					}
// 					else if(bps_old == bps)
// 					{
// 						M.toast({html: 'Your buyers score reamined the same!'});
// 					}