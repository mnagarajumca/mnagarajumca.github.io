$(function () {
	jQuery.validator.addMethod("email_domain", function(value) {
		var str=value.split('@').slice(1);
		var notAllowedDomains = ['sapient.com'];
		if ($.inArray(str[0], notAllowedDomains) == 0) {
			return false;
		}
		else{
		return true;	
		}
}, "Invalid domain sapient.com");
/*jQuery.validator.addMethod("email_domain", function(email) {
var str = email.split('@').slice(1);
colsole.log(str);
var notAllowedDomains = ['sapient.com'];//add your whitelist domains here
if ($.inArray(str[0], notAllowedDomains) !== -1) {
    console.log('invalid')
return false;
}else{
 console.log('Vaild')
return true;
}
}, "Invalid domain sapient.com");*/
    jQuery.validator.addMethod("pwd", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9~_&*%@$]{6,}$/i.test(value);
    }, "Enter only Chars,Numbers and ~_&*%@$");
	
    $('#form1').validate({
        rules: {
            firstname_lastname: "required",
            password: {
                required: true,
                minlength: 6,
                pwd: true
            },
            c_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true,
				email_domain:true
            },
            website: "required",
			
        },
        messages: {
            password: {
                required: "Please Enter password",
                minlength: "Password must be 6 characters long",
                pwd: "Enter only Chars,Numbers and ~_&*%@$"
            },
            c_password: {
                required: "Please Enter password",
                minlength: "Password must be 6 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: {
                required: "Enter a valid email address"
            },
            website: "Invalid Website URL"
        }
    });
});