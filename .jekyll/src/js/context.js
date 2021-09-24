(function() {
    var tipuesearch;
    $(document).ready(function(){
    	// intercept the form submission
    	$("#contact-form").on("submit", function(event) {
    		event.preventDefault();
    		if($(".box-form #first_name_h").val() == ""){
    			var valid = true;
    			//Hide warns
    			$(".empty-name").hide();
    			$(".empty-mail").hide();
    			$(".invalid-mail").hide();
    			$(".empty-phone").hide();
    			$(".empty-msg").hide();
    			//Inputs default border
    			$(".box-form #name").css("border" , "1px #FFF solid");
    			$(".box-form #email").css("border" , "1px #FFF solid");
    			$(".box-form #phone").css("border" , "1px #FFF solid");
    			$(".box-form #msg").css("border" , "1px #FFF solid");
    			if($(".box-form #name").val() == ""){
    				valid = false;
    				$(".box-form #name").css("border" , "1px #F87200 solid");
    				$(".empty-name").show();
    			}
    			if($(".box-form #email").val() == ""){
    				valid = false;
    				$(".box-form #email").css("border" , "1px #F87200 solid");
    				$(".empty-mail").show();
    			}else{
    				if(!isValidEmailAddress($(".box-form #email").val())){
    					$(".invalid-mail").show();
    					$(".box-form #email").css("border" , "1px #F87200 solid");
    					valid = false;
    				}
    			}
    			if($(".box-form #phone").val() == ""){
    				valid = false;
    				$(".box-form #phone").css("border" , "1px #F87200 solid");
    				$(".empty-phone").show();
    			}
    			if(valid){
    				var formEl = $(this);
    				var submitButton = $('input[type=submit]', formEl);
    				$.ajax({
    				type: 'POST',
    				url: formEl.prop('action'),
    				accept: {
    					javascript: 'application/javascript'
    				},
    				data: formEl.serialize(),
    				beforeSend: function() {
    					submitButton.prop('disabled', 'disabled');
    				}
    				}).done(function(data) {
    					$(".contact-pg-title .no-bold").text("Thank you ");
    					$(".contact-pg-title .bold").text("for your interest");
    					$(".success-form").show();
    					$("#contact-form").hide();
    					var name_txt = $(".box-form #name").val();
    					var last_txt = $(".box-form #last").val();
    					var email_txt = $(".box-form #email").val();
    					var phone_txt = $(".box-form #phone").val();
    					var company_txt = $(".box-form #company").val();
    					$("#fname").text(name_txt);
    					$("#lname").text(last_txt);
    					$("#fmail").text(email_txt);
    					$("#fphone").text(phone_txt);
    					$("#fcompany").text(company_txt);
    					$("#contact-form")[0].reset();
    			    });
    			}
    		}
    	});
    	$(".row-docs .sidebar-container span.menu-title").click(function(){
    		window.location.href = $(this).attr("href");
    	});
        $(".copyCode").click(function(){
    		var $parent = $(this).parent().parent();
    		var $string = $parent.find("code").text();
    		var $temp = $("<textarea>");
    		$("body").append($temp);
            $temp.val($string).select();
            document.execCommand("copy");
            $temp.remove();
    	});
    	$(document).foundation();
        $('.number').each(function(index){
            //Começar do 1
            index++;
            //Número de digitos do número
            var size = index.toString().length;
            //Leading zeros 4 digitos no máximo
            var zeros = 4 - size;
            //Adiciona o número do elemento
            $(this).prepend(index);
            for(var i = 0; i < zeros ; i++){
                $(this).prepend(0);
            }
    	});
    });
    function isValidEmailAddress(emailAddress) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(emailAddress);
    }
})();
