var checkedRows = [];
var loginCheck=false;
var starter = [],maindish=[],vegstarter=[],vegmaindish=[],ice=[],juices=[];
$( document ).ready(function() {
	var pwd;
	/*$('input[type="checkbox"]').change(function() {
    alert ("The element with id " + this.id + " changed.");
   });*/
	$("#pwd").change(function() {
		pwd=$('#pwd').val();
		var cnt1=0;
		for(i=0;i<pwd.length;i++)
		{
		if(pwd[i]=="@" || pwd[i]=="." || pwd[i]==","){
			cnt1=cnt1+1;
		}
		}
		if(pwd.length<6 || cnt1!=1 )	
		{	
		$("#pwd").css('border','1px red solid');
		$("#pwderror").css('display','block');
		$("#pwderror").css('color','red');
		$("#pwd").focus();
	  }else{
		$("#pwd").css('border','1px solid #ccc');
		$("#pwderror").css('display','none');
	  } 
	});
	
	$("#mailid").change(function() {
		var mail=$('#mailid').val();
		var cnt=0;
	for(i=0;i<mail.length;i++)
	{
	if(mail[i]=="@"){
	cnt=cnt+1;
	}
	}
	if(cnt==1){
	var dotCheck=mail.substring(mail.indexOf("@"));
	if(mail.indexOf("@")==0||mail.indexOf(" ")!=-1||mail.indexOf("@")+1==mail.indexOf(".")||mail.indexOf(".")==mail.length-1||mail.indexOf("@")==mail.length-1||mail.indexOf(".")==mail.length-1||dotCheck.indexOf(".")<dotCheck.length-4){
	$("#mailid").css('border','1px red solid');
	$("#mailerror").css('display','block');
	$("#mailerror").css('color','red');
	$("#mailid").focus();
	}else{
	$("#mailid").css('border','1px solid #ccc');
	$("#mailerror").css('display','none');
	}
	}else{
	$("#mailid").css('border','1px red solid');
	$("#mailerror").css('display','block');
	$("#mailerror").css('color','red');
	$("#mailid").focus();
	}		
	});
	$("#rpwd").change(function() {
	var rpwd=$('#rpwd').val();
	if(pwd!=rpwd)
	{
		$("#rpwd").css('border','1px red solid');
		$("#rpwderror").css('display','block');
		$("#rpwderror").css('color','red');
		$("#rpwd").focus();
	}
	else {
		$("#rpwd").css('border','1px solid #ccc');
		$("#rpwderror").css('display','none');
	}
	});
	$("#mob").change(function() {
		var mob=$('#mob').val();
		if(mob.length!=10 || isNaN(mob))
		{
		$("#mob").css('border','1px red solid');
		$("#moberror").css('display','block');
		$("#moberror").css('color','red');
		$("#mob").focus();
	}else{
		$("#mob").css('border','1px solid #ccc');
		$("#moberror").css('display','none');
	}
	});
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
   $('#changepassword').modal({
			backdrop: 'static',
			keyboard: false
			})
   $('#changepassword').modal('show');
});
  var min=new Date();
  $( "#datepicker" ).datepicker({
	  dateFormat:"dd M yy",
	  minDate: new Date(),
	 onSelect: function(selected,evnt) {
         var Stime= new Date(selected);
		 var Ctime=new Date();
		 var time;
		 if(Stime.setHours(0,0,0,0)==Ctime.setHours(0,0,0,0)){
			 time=min.getHours() + 2 + ':'+ (min.getHours()+2 >= 12 ? 'pm' : 'am')
		 }else{
			 time='10';
		 }
		 $('#timepicker').timepicker('option','minTime',time);
	 }
    });
	  //}).datepicker("setDate",min);
  $('#timepicker').timepicker({
    maxTime: '11:00pm',
    dropdown: true,
    scrollbar: true
    }); 
$('#table1').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table1').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table1').on('check-all.bs.table', function (e, name, args) {
	 $.each(starter, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table1').on('uncheck-all.bs.table', function (e, name, args) {
		 for(i=0;i<starter.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == starter[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
});
$('#table2').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table2').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table2').on('check-all.bs.table', function (e, name, args) {
	 $.each(maindish, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table2').on('uncheck-all.bs.table', function (e, name, args) { 
      for(i=0;i<maindish.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == maindish[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
});
$('#table3').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table3').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table3').on('check-all.bs.table', function (e, name, args) {
	 $.each(vegstarter, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table3').on('uncheck-all.bs.table', function (e, name, args) { 
      for(i=0;i<vegstarter.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == vegstarter[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
});
$('#table4').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table4').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table4').on('check-all.bs.table', function (e, name, args) {
	 $.each(vegmaindish, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table4').on('uncheck-all.bs.table', function (e, name, args) { 
     for(i=0;i<vegmaindish.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == vegmaindish[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
});
$('#table5').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table5').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table5').on('check-all.bs.table', function (e, name, args) {
	 $.each(ice, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table5').on('uncheck-all.bs.table', function (e, name, args) { 
      for(i=0;i<ice.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == ice[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
});
$('#table6').on('check.bs.table', function (e, row) {
   checkedRows.push({no:row.MenuId, name: row.MenuName, price: row.MenuPrice});
});
$('#table6').on('uncheck.bs.table', function (e, row) {
  $.each(checkedRows, function(index, value) {
    if (value.no == row.MenuId) {
      checkedRows.splice(index,1);
    }
  });
 });
 $('#table6').on('check-all.bs.table', function (e, name, args) {
	 $.each(juices, function(index, value) {
      checkedRows.push({no:value.MenuId, name: value.MenuName, price: value.MenuPrice});
  });
});
$('#table6').on('uncheck-all.bs.table', function (e, name, args) { 
           for(i=0;i<juices.length;i++){
		  for(j=0;j<checkedRows.length;j++){
			if (checkedRows[j].no == juices[i].MenuId) {
				checkedRows.splice(j,1);
			}
		  }
		 }
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
		$('#fgsuccess').modal({
			backdrop: 'static',
			keyboard: false
			})
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
$('html').css('overflow-y','visible');
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
	$('#signup').modal({
			backdrop: 'static',
			keyboard: false
			})
$('#signup').modal('show');
}
function forget()
{
	$('#forget').modal({
			backdrop: 'static',
			keyboard: false
			})
$('#forget').modal('show');
}
function login()
{
	$('#login').modal({
			backdrop: 'static',
			keyboard: false
			})
$('#login').modal('show');
}
function logout()
{
checkedRows = [];
localStorage.clear();
window.location.reload(true);
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
	 $('html').css("overflow","hidden");
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
			$('#orders').modal({
			backdrop: 'static',
			keyboard: false
			})
    		$('#orders').modal('show'); 
	  }else{
           $('#error').modal('show');
          }
    }else{
		$('#orders').modal({
			backdrop: 'static',
			keyboard: false
			})
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
	localStorage.MAIname=$('#pname').val();
	localStorage.add=$('#padd').val();
	localStorage.mob=$('#pmob').val();
	alert("Updated Successfully");
	$('#username').html(localStorage.MAIname);
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
    $('#output1').append($('<p></p>').text( " Name  = " + localStorage.MAIname));
    $('#output1').append($('<p></p>').text( " Address  = " + localStorage.add));
    $('#output1').append($('<p></p>').text( " Mobile  = " + localStorage.mob));
    $('#output1').append($('<p></p>').text( " Food Will be deliver on "+ date +" " +time));
    $('#output1').append($('<p></p>').text( " Payment Mode : Cash On Delivery(COD)"));
    $('#ordersuccess').modal({
			backdrop: 'static',
			keyboard: false
			})
	$('#ordersuccess').modal('show');
}
function nos(value, row,index) {
    return index+1;
}
function profile()
{
$(':text').attr('disabled', true);
$('#padd').attr('disabled', true);
$('#pname').val(localStorage.MAIname);
$('#padd').val(localStorage.add);
$('#pmob').val(localStorage.mob);
$('#userprofile').modal({
			backdrop: 'static',
			keyboard: false
			})
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
