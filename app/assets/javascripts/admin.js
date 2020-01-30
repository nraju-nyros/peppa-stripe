$(document).ready(function(){
  // -----Address form on change validation ----------


  // Admin new restaurant form
  $(".restaurant_btn").click(function(){
    $(".new_restaurant").validate({
      // errorPlacement: function(){
      //   return false;  // suppresses error message text
      // }
    });

    $("#restaurant_name").rules("add", {
      required:true,
        minlength:3,
        lettersonly: true,
         messages: {
              required: "Please enter name."
      }
    });

    $("#restaurant_email").rules("add", {
      required:true,
        laxEmail: true,
         messages: {
              required: "Please enter email."
      }
    });


    $("#restaurant_phone").rules("add", {
      required:true,
      numeric: true,
        minlength:10,
        maxlength:10,
        
         messages: {
              required: "Please enter mobile."
      }
    });

    $("#restaurant_pictures_attributes_0_image").rules("add", {
      required:true,
         messages: {
              required: "Please select image."
      }
    });

    $("#restaurant_locations_attributes_0_street").rules("add", {
      required:true,
       
         messages: {
              required: "Please enter street."
      }
    });
    $("#restaurant_locations_attributes_0_city").rules("add", {
      required:true,
         messages: {
              required: "Please enter city."
      }
    });
   
  
    $("#restaurant_locations_attributes_0_state").rules("add", {
      required:true,
         messages: {
              required: "Please enter state."
      }
    });

    $("#restaurant_locations_attributes_0_pincode").rules("add", {
      required:true,
      numeric: true,
       minlength:6,
        maxlength:6,
         messages: {
              required: "Please enter pincode."
      }
    });

  

    $("#restaurant_locations_attributes_0_latitude").rules("add", {
      required:true,
        float: true,
         messages: {
              required: "Please enter latitude."
      }
    });

    $("#restaurant_locations_attributes_0_longitude").rules("add", {
      required:true,
        float: true,
         messages: {
              required: "Please enter longitude."
      }
    });
   

  })
  // End-----Admin new restaurant form

  // Preview image for form image feild
  var preview = $(".upload-preview img");
  $(".file").change(function(event){
     var input = $(event.currentTarget);
     var file = input[0].files[0];
     var reader = new FileReader();
     reader.onload = function(e){
         image_base64 = e.target.result;
         preview.attr("src", image_base64);
         preview.attr("height", "70px");
         preview.attr("width", "70px");
     };
     reader.readAsDataURL(file);
  });


  // Admin Restaurant edit form validation
  $(".restaurant_update").click(function(){
      $(".edit_restaurant").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });
  
      $("#restaurant_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });

      $("#restaurant_email").rules("add", {
        required:true,
          laxEmail: true,
           messages: {
                required: "Please enter email."
        }
      });

      $("#restaurant_phone").rules("add", {
        required:true,
        numeric: true,
          minlength:10,
          maxlength:10,
          
           messages: {
                required: "Please enter mobile."
        }
      });

      $("#restaurant_pictures_attributes_0_image").rules("add", {
        
           messages: {
                required: "Please select image."
        }
      });

      $("#restaurant_locations_attributes_0_street").rules("add", {
        required:true,
         
           messages: {
                required: "Please enter street."
        }
      });
      $("#restaurant_locations_attributes_0_city").rules("add", {
        required:true,
           messages: {
                required: "Please enter city."
        }
      });
     
    
      $("#restaurant_locations_attributes_0_state").rules("add", {
        required:true,
           messages: {
                required: "Please enter state."
        }
      });

      $("#restaurant_locations_attributes_0_pincode").rules("add", {
        required:true,
        numeric: true,
         minlength:6,
          maxlength:6,
           messages: {
                required: "Please enter pincode."
        }
      });

    

      $("#restaurant_locations_attributes_0_latitude").rules("add", {
        required:true,
          float:true,
           messages: {
                required: "Please enter latitude."
        }
      });

      $("#restaurant_locations_attributes_0_longitude").rules("add", {
        required:true,
        float:true,
        
           messages: {
                required: "Please enter longitude."
        }
      });
     

    })
  //---End  Admin Restaurant edit form validation

  // Admin/dish/new
  $(".dish_new").click(function(){
  
      $(".new_dish").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });

      $("#dish_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });


      $("#dish_price").rules("add", {
        required:true,
        numeric: true,
          maxlength:10,
          
           messages: {
                required: "Please enter price."
        }
      });

      $("#dish_pictures_attributes_0_image").rules("add", {
        required:true,
           messages: {
                required: "Please select image."
        }
      });

      $("#dish_category_id").rules("add", {
        required:true,
         
           messages: {
                required: "Please select category."
        }
      });
     
    })
    // End----- Admin/dish/new ----------



  // -----Admin/dish/edit ----------
  $(".dish_edit").click(function(){
      $(".edit_dish").validate({
        // errorPlacement: function(){
        //   return false;  // suppresses error message text
        // }
      });

      $("#dish_name").rules("add", {
        required:true,
          minlength:3,
          lettersonly: true,
           messages: {
                required: "Please enter name."
        }
      });


      $("#dish_price").rules("add", {
        required:true,
        numeric: true,
          maxlength:10,
          
           messages: {
                required: "Please enter price."
        }
      });

      $("#dish_category_id").rules("add", {
        required:true,
         
           messages: {
                required: "Please select category."
        }
      }); 

    })
    // End-----ADmin/dish/edit ----------










})
