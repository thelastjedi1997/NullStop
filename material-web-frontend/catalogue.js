console.log("HI"); 

	
	$('#catalogueform').on('submit', function(event){
		event.preventDefault();

		var price = [2699, 3999, 5398, 10800, 42321, 10749, 201000];
		var qty = [];
		var items = [];
		var product_list = [];

		for(i=0;i<7;i++)
		{
			idname = "item" + String(i+1);
			if($('#'+idname).val()!=0)
			{
				items.push(i+1);
				qty.push($('#'+idname).val());
			}
		}
 

		for(i=0;i<items.length;i++)
		{
			product_list.push({
			    'product_id': items[i],
			    'quantity': qty[i],
			    'price': price[items[i]-1],
			});
		}

		var plist = {
			"user_id": readCookie('user_id'),
		 	"product_list": product_list,
		};

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/catalogue/',
		data: JSON.stringify(plist),
		dataType: 'json',
		success: function(data){
			$.each(data,function(index,value){
				if(index=='bill_amount')
					createCookie("bill_amount", value);
				if(index=='product_list')
					createCookie("product_list", JSON.stringify(value));
				window.location.href = "cart.html";
			});
		},
		error: function(){
			alert("There was a problem adding to cart. :(");
		}
	});
});
