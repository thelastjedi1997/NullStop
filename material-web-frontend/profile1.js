var initial_credit_score = -1;
var current_credit_score = -1;
var initial_buyer_profile_score = -1;
var current_buyer_profile_score = -1;
var table = document.getElementById("myscores");
var ctx = document.getElementById('myChart1').getContext('2d');
var attrs = document.getElementById("myattr");

$('#getscore').on('click', function(event){
		event.preventDefault();
		
		var me = {
			"user_id": readCookie('user_id'),
		};

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/profile/',
		data: JSON.stringify(me),
		dataType: 'json',
		success: function(data){
			$.each(data,function(index,value){
				if(index =='initial_credit_score')
					initial_credit_score = value;
				if(index =='initial_buyer_profile_score')
					initial_buyer_profile_score = value;
				if(index =='current_credit_score')
					current_credit_score = value;
				if(index =='current_buyer_profile_score')
					current_buyer_profile_score = value;
			});
			var row = table.insertRow(0);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = "OLD CREDIT SCORE";
			var cell1 = row.insertCell(1);
			cell1.innerHTML =  initial_credit_score;

			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = "NEW CREDIT SCORE";
			var cell1 = row.insertCell(1);
			cell1.innerHTML =  current_credit_score;

			var row = table.insertRow(2);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = "OLD BUYERS SCORE";
			var cell1 = row.insertCell(1);
			cell1.innerHTML =  initial_buyer_profile_score;

			var row = table.insertRow(3);
			var cell1 = row.insertCell(0);
			cell1.innerHTML = "NEW BUYERS SCORE";
			var cell1 = row.insertCell(1);
			cell1.innerHTML =  current_buyer_profile_score;
			
		var myChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Old BS", "New BS", "Old CS", "New CS"],
    datasets: [{
      data: [initial_buyer_profile_score, current_buyer_profile_score, initial_credit_score, current_credit_score],
      //data: [initial_buyer_profile_score, current_buyer_profile_score],
      backgroundColor: [
        'rgba(255, 255, 0, 0.8)',
        'rgba(0, 255, 255, 0.8)',
        'rgba(255, 255, 0, 0.8)',
        'rgba(0, 255, 255, 0.8)',
      ],
      borderColor: [
        'rgba(255, 255, 0, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(255, 255, 0, 0.8)',
        'rgba(0, 255, 255, 0.8)',
      ],
      borderWidth: 1
    }]
  },
  options: {
  	legend: {
            display: false
         },
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 80
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
		},
		error: function(data) {
			alert("Error! :(")
		}
	});
});
