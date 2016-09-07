$( document ).ready(function() {
	var mail,random,names,pwd,address,mob;
Parse.initialize("3nUUnX8eqz20QeCs28KWpGP5hhB61WsWRo46vULK","HLcnr4oCgQgFM2z8O0JLiVr1LpSqiutZOkcQWzHe");
$('#susubmit').click(function(){
	mail=$('#mailid').val();
	pwd=$('#pwd').val();
	var rpwd=$('#rpwd').val();
    mob=$('#mob').val();
    names=$('#name').val();
        var add=$('#address').val();
		var state=$('#state').val();
		var city=$('#city').val();
		var pincode=$('#pin').val();
	 address=add+','+city+','+state+'-'+pincode;
	if(!mail||!pwd||!rpwd||!mob||!names||!add||!state||!city||!pincode){
	$("#emptyerror").css('display','block');
	$("#emptyerror").css('color','red');
	if(!mail){
	 $("#mailid").css('border','1px red solid');
	}
	if(!pwd){
	 $("#pwd").css('border','1px red solid');
	}
	if(!rpwd){
	 $("#rpwd").css('border','1px red solid');
	}
	if(!mob){
	 $("#mob").css('border','1px red solid');
	}
	if(!names){
	 $("#name").css('border','1px red solid');
	}
	if(!add){
	 $("#address").css('border','1px red solid');
	}
	if(!state){
		$("#state").css('border','1px red solid');
	}
	if(!city){
		$("#city").css('border','1px red solid');
	}
	if(!pincode){
		$("#pin").css('border','1px red solid');
	}
	}
	else
        {
	$(".form-control").css('border','1px solid #ccc');
       /* localStorage.name=names;
	localStorage.pwd=pwd;
        localStorage.add=add;
        localStorage.mob=mob;
        localStorage.mail=mail;
	localStorage.uname=name;*/
	$("#emptyerror").css('display','none');
	$("#mailerror").css('display','none');
	$("#nameerror").css('display','none');
	$("#pwderror").css('display','none');
	$("#rpwderror").css('display','none');
	$("#moberror").css('display','none');
       /* $("#acname").html(localStorage.name);
	$('#rgsuccess').modal('show');*/
	$('#signup').modal('hide');
	random=Math.floor((Math.random() * 100000) + 1);
    Parse.Cloud.run("register", { email:mail, rand:random}).then(function(result) {
    // make sure the set the enail sent flag on the object
	alert("OTP sent to your MailId.");
	$('#OTP').modal('show');
}, function(error) {
    // error
	alert("Mail Failed.");
});	
	}
	});

$('#lgsubmit').click(function(){
           var usermail=$('#logmail').val();
           var pwd=$('#logpwd').val();
		   var count=0;
           if(!usermail||!pwd){
	     $("#emptyerror1").css('display','block');
		 $("#emptyerror1").css('color','red');
	   if(!usermail){
	    $("#logmail").css('border','1px red solid');
	    }
           if(!pwd){
	   $("#logpwd").css('border','1px red solid');
	   }
           }
           else
           {
	    var UserObject = Parse.Object.extend("User_info");
        var query = new Parse.Query(UserObject);
        query.find({
            success: function (results) {
                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var mailId = object.get('MailId');
                    var pass = object.get('Password');
					var userName=object.get('Name');
					var add=object.get('Address');
					var mob=object.get('Mobile');
					var objId=object.id;
					if(usermail==mailId && pwd==pass){
					$('#login').modal('hide');
					$('#log').hide();
					$('#sign').hide();
					$('#logot').show();
					$('#username').html(userName);
					$('#username').show();
					localStorage.name=userName;
					localStorage.add=add;
					localStorage.mob=mob;
					localStorage.mail=mailId;
					localStorage.obj=objId;
					reset();
					loginCheck=true;
				}else{
					count++;
				}
				}
				if(count==results.length){
					$("#invalid").css('display','block');
				}
            }
        });
		}
	});
	
$('#otpsubmit').click(function(){
var otp=$('#otp').val();
if(otp==random){
    var UserObject = Parse.Object.extend("User_info");
    var userObject = new UserObject();
    userObject.save({MailId: mail,Password:pwd,Name:names,Address:address,Mobile:mob}).then(function(object) {
	alert("Account Created Successfully");
	$('#OTP').modal('hide');
});
}else{
	alert("OTP Incorrect");
}
});	
	
});
			
