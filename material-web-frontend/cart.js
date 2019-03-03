	var product_list = JSON.parse(readCookie('product_list'));
	var bill_amount = readCookie('bill_amount');
	console.log("USER ID = " , readCookie('user_id'))

	console.log(product_list);
	console.log(bill_amount);

	console.log(product_list.length);

	var prod_ids = [];
	var prod_qty = [];
	var prod_price = [];

	counter = 0;

	console.log(counter);

	var table = document.getElementById("mycart");

	var row = table.insertRow(0);

	var cell1 = row.insertCell(0);
	cell1.innerHTML = "PRODUCT ID";

	var cell1 = row.insertCell(1);
	cell1.innerHTML = "QUANTITY";

	var cell1 = row.insertCell(2);
	cell1.innerHTML = "PRICE";

	var rowcounter = 1;
	for(var i=0;i<product_list.length;i++)
	{
		var colcounter = 0;
		var row = table.insertRow(rowcounter);

		var cell1 = row.insertCell(colcounter);
		cell1.innerHTML = product_list[i].product_id;
		colcounter = colcounter+1;

		var cell1 = row.insertCell(colcounter);
		cell1.innerHTML = product_list[i].quantity;
		colcounter = colcounter+1;

		var cell1 = row.insertCell(colcounter);
		cell1.innerHTML = product_list[i].price;
		colcounter = colcounter+1;

		rowcounter = rowcounter + 1;
	}

	var div = document.getElementById("price");
	div.innerHTML +="Your final bill amount is: "
	div.innerHTML += bill_amount

$("#paynow").click(function(){
  var customer = {
			"user_id": readCookie('user_id'),
		};

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/cart/',
		data: JSON.stringify(customer),
		dataType: 'json',
		success: function(data){   
			$.each(data,function(index,value){
				if(index=='current_credit_score')
					createCookie('current_credit_score',value);
				if(index=='quantity')
					createCookie('quantity',value);
				if(index=='current_buyer_profile_score')
					createCookie('current_buyer_profile_score',value);
				if(index=='number_of_transactions')
					createCookie('number_of_transactions',value);
			});
			window.location.href = "buyingoptions.html";
		},
		error: function(){
			alert("Error!");
		}
	});
});
