var checkedRows = [];
var loginCheck=false;
var starter = [
  { "no": 1, "dishname": "Fried Chicken", "price":130 }, 
  { "no": 2, "dishname": "Tandoori(Half)", "price":150 },
  { "no": 3, "dishname": "Tandoori(Full)", "price":280 },
  { "no": 4, "dishname": "prawn Fry", "price":165 },
  { "no": 5, "dishname": "Crab Finger(4 pcs)", "price":120 },
  { "no": 6, "dishname": "Fish Fry", "price":140 }, 
  { "no": 7, "dishname": "Kabab", "price":110 },
  { "no": 8, "dishname": "Beef Roll(1 pc)", "price":100 },
  { "no": 9, "dishname": "Chicken Lollipop", "price":120 },
  { "no": 10, "dishname": "Chicken Tikka", "price":140 },
];
var maindish = [
  { "no": 11, "dishname": "Chicken Biriyani", "price":110 }, 
  { "no": 12, "dishname": "Mutton Biriyani", "price":130 },
  { "no": 13, "dishname": "Prawn Biriyani", "price":145 },
  { "no": 14, "dishname": "Mixed Biriyani(Chicken+prawn)", "price":160 },
  { "no": 15, "dishname": "Chicken Fried Rice", "price":130 },
  { "no": 16, "dishname": "Mutton Fried Rice", "price":150 }, 
  { "no": 17, "dishname": "Mixed Fried Rice(Chicken+prawn)", "price":170 },
  { "no": 18, "dishname": "Chicken Noodles", "price":130 },
  { "no": 19, "dishname": "Mixed Noodles(Chicken+prawn)", "price":140 },
  { "no": 20, "dishname": "Chicken American Chopsey", "price":130 },
];
var vegstarter = [
  { "no": 21, "dishname": "Mushroom Fry", "price":100 }, 
  { "no": 22, "dishname": "Potato Fry", "price":120 },
  { "no": 23, "dishname": "Mixed Potato and Onion Fry", "price":150 }
];
var vegmaindish = [
  { "no": 24, "dishname": "Veg Biriyani", "price":80 }, 
  { "no": 25, "dishname": "Pulav", "price":110 },
  { "no": 26, "dishname": "Veg Fried Rice", "price":120 },
  { "no": 27, "dishname": "Schewan Veg Fried Rice", "price":130 }, 
  { "no": 28, "dishname": "Veg Noodles", "price":120 },
  { "no": 29, "dishname": "Vegetable American Chopsey", "price":120 },
  { "no": 30, "dishname": "Nan", "price":100 }
];
var ice = [
  { "no": 31, "dishname": "Vanila", "price":80 }, 
  { "no": 32, "dishname": "Chocolate", "price":110 },
  { "no": 33, "dishname": "Butterscotch", "price":120 },
  { "no": 34, "dishname": "Strawberry", "price":130 } 
];
var juices = [
  { "no": 35, "dishname": "Apple", "price":130 },
  { "no": 36, "dishname": "Grapes", "price":90 },
  { "no": 37, "dishname": "Pine Apple", "price":110 }, 
  { "no": 38, "dishname": "Guvua", "price":100 },
  { "no": 39, "dishname": "Orange", "price":100 },
  { "no": 40, "dishname": "Mango", "price":100 },
  { "no": 41, "dishname": "Faluda", "price":150 }
];
$( document ).ready(function() {
  $('#edit').click(function(){
   $('#edt').hide();
   $('#can').show();
   $(':text').attr('disabled', false);
   $('#padd').attr('disabled', false);
});
$('#cancel').click(function(){
   $('#edt').show();
   $('#can').hide();
   $(':text').attr('disabled', true);
   $('#padd').attr('disabled', true);
});
$('#cpwd').click(function(){
   $('#opass').attr('disabled', false);  
   $('#newpwd').hide();
   $('#cgpwd').hide();
   $('#changepassword').modal('show');
});
  $( "#datepicker" ).datepicker({dateFormat:"dd M yy",minDate:+0}).datepicker("setDate",new Date());
  $('#timepicker').timepicker(); 
$('#table1').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.no, name: row.dishname, price: row.price});
});
$('#table1').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
$('#table2').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.no,name: row.dishname, price: row.price});
});
$('#table2').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
$('#table3').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.no,name: row.dishname, price: row.price});
});
$('#table3').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
$('#table4').on('check.bs.table', function (e, row) {
   checkedRows.push({name: row.dishname, price: row.price});
});
$('#table4').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
$('#table5').on('check.bs.table', function (e, row) {
   checkedRows.push({name: row.dishname, price: row.price});
});
$('#table5').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
$('#table6').on('check.bs.table', function (e, row) {
   checkedRows.push({name: row.dishname, price: row.price});
});
$('#table6').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no === row.no) {
      checkedRows.splice(index,1);
    }
  });
 });
 $("#show-password").on('change' , function(){
    if($(this).is(':checked')){
	$('#logpwd').tooltip({title : $('#logpwd').val(), placement:'bottom',trigger:'auto'})
        $('#logpwd').tooltip('show');
    }
else
	{
	$('#logpwd').tooltip('destroy');
	}
});

$('#fgsubmit').click(function(){
	var mail=$('#rmailid').val();
	if(!mail){
	 $("#rmailid").css('border','1px red solid');
	}else{
	cnt=0;
	for(i=0;i<mail.length;i++)
	{
	if(mail[i]=="@"){
	cnt=cnt+1;
	}
	}
	if(cnt==0||mail.indexOf("@")==0||mail.indexOf(" ")!=-1||mail.indexOf("@")+1==mail.indexOf(".")||cnt>1||mail.indexOf(".")==mail.length-1||mail.indexOf("@")==mail.length-1||mail.indexOf(".")==mail.length-1||mail.indexOf(".")<mail.length-4)
   	{
	$("#rmailid").css('border','1px red solid');
	$("#rmailerror").css('display','block');
	$("#rmailid").focus();
	}
	else
	{
	$('#fgsuccess').modal('show');
	}
	}
});

 $('#rgsubmit').click(function(){
	window.location.href = "HotelMain.html";
	});

$('#fgssubmit').click(function(){
	window.location.href = "HotelMain.html";
	});    
});
function reset()
{
$("input").val("");
$("#address").val("");
$(':text').attr('disabled', false);
$(".form-control").css('border','1px solid #ccc');
$("#mailerror").css('display','none');
$("#nameerror").css('display','none');
$("#pwderror").css('display','none');
$("#pwderror1").css('display','none');
$("#pwderror2").css('display','none');
$("#rpwderror").css('display','none');
$("#moberror").css('display','none');
$("#emptyerror").css('display','none');
$("#emptyerror1").css('display','none');
$("#invalid").css('display','none');
$("#state").val("Select State");
$("#city").val("Select City");
$("#city").attr("disabled", true);
$('#show-password').attr('checked', false);
$('#logpwd').tooltip('destroy');
}
function reset1(){
$(".form-control").css('border','1px solid #ccc');
$("#pwderror1").css('display','none');
$("#pwderror2").css('display','none');
$("#opass").val("");
$("#npass").val("");
$("#cnpass").val("");
}
function signup()
{
$('#signup').modal('show');
}
function forget()
{
$('#forget').modal('show');
}
function login()
{
$('#login').modal('show');
}
function logout()
{
checkedRows = [];
localStorage.clear();
window.location.reload(true);
}
function nonveg()
{
$('#veg').css('display','none');
$('#maincontent').css('display','none');
//$('#nonveg').css("background-image", "url(images/6.jpg)");  
$('#nonveg').css('display','block');
$('#table1').bootstrapTable('load', starter);
$('#table2').bootstrapTable('load', maindish);
}
function veg()
{
$('#maincontent').css('display','none');
$('#nonveg').css('display','none');
//$('#veg').css("background-image", "url(images/7.jpg)");  
$('#veg').css('display','block');
$('#table3').bootstrapTable('load', vegstarter);
$('#table4').bootstrapTable('load', vegmaindish);
}
function juice()
{
$('#maincontent').css('display','none');
$('#nonveg').css('display','none');
//$('#salads').css("background-image", "url(images/9.jpg)");  
$('#veg').css('display','none');
$('#salads').css('display','block');
$('#table5').bootstrapTable('load', ice);
$('#table6').bootstrapTable('load', juices);
}
function home()
{
checkedRows = [];
$('#veg').css('display','none');
$('#salads').css('display','none');
$('#maincontent').css('display','block');
$('#nonveg').css('display','none');
$('#orders').modal('hide');
$('#ordersuccess').modal('hide');
$('#userprofile').modal('hide');
}
function order()
{
    if(loginCheck){
       if(checkedRows.length!=0)
          {
			$("input").prop('disabled', false);
    		var i=1;
    		var total=0;
    		$("#output").empty();
    		$.each(checkedRows, function(index, value) {
     		total=total+value.price;	   
    		$('#output').append($('<p></p><br/>').text(i + " . " + value.name + "       = " + value.price));
    		i++;
    		});
   		 $('#output').append($('<hr/>'));
    		$('#output').append($('<p></p><br/>').text( " Total Amount  = " + total));	
    		$('#orders').modal('show'); 
	  }else{
           $('#error').modal('show');
          }
    }else{
    $('#login').modal('show'); 
}
}
function update()
{
/*localStorage.name=$('#pname').val();
localStorage.add=$('#padd').val();
localStorage.mob=$('#pmob').val();
localStorage.mail=$('#pid').val();
localStorage.uname=$('#puname').val();*/
var Point = Parse.Object.extend("User_info");
var point = new Point();
point.id = localStorage.obj;

// Set a new value on quantity
point.set("Name", $('#pname').val());
point.set("Address", $('#padd').val());
point.set("Mobile", $('#pmob').val());

// Save
point.save(null, {
  success: function(point) {
    // Saved successfully.
	localStorage.name=$('#pname').val();
	localStorage.add=$('#padd').val();
	localStorage.mob=$('#pmob').val();
	alert("Updated Successfully");
	$('#username').html(localStorage.name);
  },
  error: function(point, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
	alert("Fail to Update");
  }
});
home();
}
function change()
{
if($('#npass').val()==$('#cnpass').val()){
var Point = Parse.Object.extend("User_info");
var point = new Point();
point.id = localStorage.obj;

// Set a new value on quantity
point.set("Password", $('#npass').val());

// Save
point.save(null, {
  success: function(point) {
    // Saved successfully.
	alert("Password Updated Successfully");
	$('#changepassword').modal('hide');
	$('#userprofile').modal('hide');
  },
  error: function(point, error) {
    // The save failed.
    // error is a Parse.Error with an error code and description.
	alert("Fail to Update");
  }
});
}else{
	 $('#pwderror2').show();
}
}
function cancel(){
$("#nonveg").html("");
$('#table1').bootstrapTable('load', starter);
}
function success()
{   var i=1;
    var total=0;
    var date=$('#datepicker').val();
    var time=$('#timepicker').val();
    $("#output1").empty();
    $.each(checkedRows, function(index, value) {
     total=total+value.price;	   
    $('#output1').append($('<p></p>').text(i + " . " + value.name + "       = " + value.price));
    i++;
    });
    $('#output1').append($('<hr/>'));
    $('#output1').append($('<p></p>').text( " Total Amount  = " + total));
    $('#output1').append($('<p></p>').text( " Customer Details: "));
    $('#output1').append($('<p></p>').text( " Name  = " + localStorage.name));
    $('#output1').append($('<p></p>').text( " Address  = " + localStorage.add));
    $('#output1').append($('<p></p>').text( " Mobile  = " + localStorage.mob));
    $('#output1').append($('<p></p>').text( " Food Will be deliver on "+ date +" " +time));
    $('#output1').append($('<p></p>').text( " Payment Mode : Cash On Delivery(COD)"));
    $('#ordersuccess').modal('show');
}
function nos(value, row,index) {
    return index+1;
}
function profile()
{
$(':text').attr('disabled', true);
$('#padd').attr('disabled', true);
$('#pname').val(localStorage.name);
$('#padd').val(localStorage.add);
$('#pmob').val(localStorage.mob);
$('#userprofile').modal('show');
}
function check()
{
var pwd=$('#opass').val();
var UserObject = Parse.Object.extend("User_info");
var query = new Parse.Query(UserObject);
query.equalTo("objectId",localStorage.obj);
query.first().then(function(result){
	var object = result;
    var pass = object.get('Password');
	if(pass==pwd){
    $('#newpwd').show();
    $('#cgpwd').show();
    $('#pwderror1').hide();
    $('#ok').hide();
    $('#opass').css('border','1px #ccc solid');
}
else{
   $('#pwderror1').show();
   $('#opass').css('border','1px red solid');
}
});
}
