$(document).ready(function(){

	$(".modal_btn").click(function(){

    jQuery.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\\ \\.\\]+$/.test(value);
    }, "Letters only please");
    jQuery.validator.addMethod("numeric", function(value, element) {
      return this.optional(element) || /^[0-9]+$/.test(value);
    }, "numbers only please"); 
     
      $(".new_address").validate();
      $(".edit_address").validate();

      $("#address_full_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });
      $("#address_mobile").rules("add", {
        required:true,
          minlength:10,
          maxlength:10,
          numeric: true,
           messages: {
                required: "Please enter mobile."
        }
      });
      $("#address_pincode").rules("add", {
        required:true,
          minlength:6,
          maxlength:6,
          numeric: true,
           messages: {
                required: "Please enter pincode."
        }
      });
      $("#address_house_no").rules("add", {
        required:true,
     
           messages: {
                required: "Please enter house_no."
        }
      });
      $("#address_street").rules("add", {
        required:true,
           messages: {
                required: "Please enter street."
        }
      });
      $("#address_landmark").rules("add", {
        required:true,
           messages: {
                required: "Please enter land_mark."
        }
      });
      $("#address_city").rules("add", {
        required:true,
          lettersonly: true,
           messages: {
                required: "Please enter city."
        }
      });

       $("#address_state").rules("add", {
        required:true,
          lettersonly: true,
           messages: {
                required: "Please enter state."
        }
      });
    })



});
