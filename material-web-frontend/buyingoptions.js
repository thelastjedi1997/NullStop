var credit_score = readCookie('current_credit_score');
var quantity = readCookie('quantity');
var buyers_profile_score = readCookie('current_buyer_profile_score');
var number_of_transactions = readCookie('number_of_transactions');


console.log(credit_score);
console.log(quantity);
console.log(buyers_profile_score);
console.log(number_of_transactions);


// 1. CC   2. DC   3. COD   4. EMI   5. Netbanking   6. Mobile Wallets   7. MW + CC    8. MW + DC   9. MW + COD   10. MW + EMI  11. MW+Netbanking

var ccstring = "<p><label><input value = \"1\" id = \"pay1\" name=\"group1\" type=\"radio\" /><span>Credit Card</span></label></p>"
var dcstring = "<p><label><input value = \"2\" id = \"pay2\" name=\"group1\" type=\"radio\" /><span>Debit Card</span></label></p>"
var codstring = "<p><label><input value = \"3\" id = \"pay3\" name=\"group1\" type=\"radio\" /><span>Cash on Delivery</span></label></p>"
var emistring = "<p><label><input value = \"4\" id = \"pay4\" name=\"group1\" type=\"radio\" /><span>EMI</span></label></p>"
var nbstring = "<p><label><input value = \"5\" id = \"pay5\" name=\"group1\" type=\"radio\" /><span>Netbanking</span></label></p>"
var mwstring = "<p><label><input value = \"6\" id = \"pay6\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets</span></label></p>"
var mwccstring = "<p><label><input value = \"7\" id = \"pay7\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets + Credit Card</span></label></p>"
var mwdcstring = "<p><label><input value = \"8\" id = \"pay8\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets + Debit Card</span></label></p>"
var mwcodstring = "<p><label><input value = \"9\" id = \"pay9\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets + Cash on Delivery</span></label></p>"
var mwemistring = "<p><label><input value = \"10\" id = \"pay10\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets + EMI</span></label></p>"
var mwnbstring = "<p><label><input value = \"11\" id = \"pay11\" name=\"group1\" type=\"radio\" /><span>Mobile Wallets + Netbanking</span></label></p>"
var ppwstring = "<p><label><input value = \"12\" id = \"pay12\" name=\"group1\" type=\"radio\" /><span>Postpaid Wallet</span></label></p>"

var div = document.getElementById('options');

if(credit_score<40 && buyers_profile_score<40)
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	//div.innerHTML += codstring;
	//div.innerHTML += emistring;
	div.innerHTML += nbstring;
	div.innerHTML += mwstring;
	div.innerHTML += mwccstring;
	div.innerHTML += mwdcstring;
	//div.innerHTML += mwcodstring;
	//div.innerHTML += mwemistring;
	div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;
}
else if(credit_score<40)
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	div.innerHTML += codstring;
	//div.innerHTML += emistring;
	div.innerHTML += nbstring;
	div.innerHTML += mwstring;
	// div.innerHTML += mwccstring;
	// div.innerHTML += mwdcstring;
	// div.innerHTML += mwcodstring;
	//div.innerHTML += mwemistring;
	//div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;

	M.toast({html: 'You are not eligible for cash on delivery!' ,  classes: 'rounded'});
}
else if(buyers_profile_score<40)
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	//div.innerHTML += codstring;
	// div.innerHTML += emistring;
	// div.innerHTML += nbstring;
	// div.innerHTML += mwstring;
	// div.innerHTML += mwccstring;
	// div.innerHTML += mwdcstring;
	//div.innerHTML += mwcodstring;
	div.innerHTML += mwemistring;
	div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;

	M.toast({html: 'You are not eligible for cash on delivery!' ,  classes: 'rounded'});
}
else if(buyers_profile_score>=40 && buyers_profile_score<60)
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	div.innerHTML += codstring;
	div.innerHTML += nbstring;
	// div.innerHTML += mwstring;
	// div.innerHTML += mwccstring;
	// div.innerHTML += mwdcstring;
	// div.innerHTML += mwcodstring;
	// div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;

	if(quantity==1)
	{
		div.innerHTML += emistring;
		div.innerHTML += mwemistring;
	}
	M.toast({html: 'BENEFIT - You will pay only 5% of your original delivery charge!' ,  classes: 'rounded'});
}
else if(buyers_profile_score>=60 && buyers_profile_score<80)
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	div.innerHTML += codstring;
	div.innerHTML += nbstring;
	div.innerHTML += mwstring;
	// div.innerHTML += mwccstring;
	// div.innerHTML += mwdcstring;
	// div.innerHTML += mwcodstring;
	// div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;
	if(quantity==1)
	{
		div.innerHTML += emistring;
		div.innerHTML += mwemistring;
	}
	M.toast({html: 'BENEFIT - You will pay only 2.5% of your original delivery charge!' ,  classes: 'rounded'});
}
else 
{
	div.innerHTML += ccstring;
	div.innerHTML += dcstring;
	div.innerHTML += codstring;
	div.innerHTML += nbstring;
	div.innerHTML += mwstring;
	// div.innerHTML += mwccstring;
	// div.innerHTML += mwdcstring;
	// div.innerHTML += mwcodstring;
	// div.innerHTML += mwnbstring;
	div.innerHTML += ppwstring;
	if(quantity==1)
	{
		div.innerHTML += emistring;
		div.innerHTML += mwemistring;
	}
	M.toast({html: 'BENEFIT - NO delivery charges!' ,  classes: 'rounded'});
}

$('#payform').on('submit', function(event){

		event.preventDefault();

		var payment_option_id = $('input[name=group1]:checked', '#payform').val();
		console.log(payment_option_id);

		var paymentlist = {
			"user_id": readCookie('user_id'),
		 	"payment_option_id": payment_option_id,
		};

		console.log(paymentlist);

		$.ajax({
		type:'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://10.42.0.148:8000/pay/',
		data: JSON.stringify(paymentlist),
		dataType: 'json',
		success: function(data){
			$.each(data,function(index,value){
				if(index=='months_3')
					createCookie('months_3',value);
				if(index=='months_6')
					createCookie('months_6',value);
				if(index=='months_12')
					createCookie('months_12',value);
			});
			if(readCookie('months_3') == '0' && readCookie('months_6') == '0' && readCookie('months_12') == '0')
			{
				window.location.href = "simulator.html";
			}
			else
			{
				window.location.href = "emipage.html";
			}
		},
		error: function(){
			alert("There was a problem in payment! :(");
		}
	});
});
