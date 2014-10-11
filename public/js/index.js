$("#signup_btn").click(function(){
  var email_ok = false;
  var user_name_ok = false;
  var password_ok = false;
  $("#signup_btn").hide();
  $("#login_form").hide();
  $("#sign_up_form").show();
  $("#sign_up_form input[type='submit']").attr('disabled','disabled');
  $( "#sign_up_form input[name='email']" ).focusout(function() {
      json = {};
      json.email = $( "#sign_up_form input[name='email']" ).val();
      $.get("/email_available",json,function(data){
        if(data["message"] == "yes"){
          email_ok = true;
          console.log("Acceptable Email");
          if(email_ok && user_name_ok && password_ok){
            $("#sign_up_form input[type='submit']").removeAttr('disabled');
          }
        }else{
          email_ok = false;
          console.log("Error, Email is taken");
        }
      });
  });
  $( "#sign_up_form input[name='username']" ).focusout(function() {
      json = {};
      json.user_name = $( "#sign_up_form input[name='username']" ).val();
      $.get("/user_name_available",json,function(data){
        if(data["message"] == "yes"){
          user_name_ok = true;
          console.log("Acceptable Username");
          if(email_ok && user_name_ok && password_ok){
            $("#sign_up_form input[type='submit']").removeAttr('disabled');
          }
        }else{
          user_name_ok = false;
          console.log("Error, Username is taken");
        }
      });
  });
  $( "#sign_up_form input[name='password']" ).focusout(function() {
      //$("#")

      if($("#sign_up_form input[name='password']").val() === $("#sign_up_form input[name='password_confirm']").val()){
        password_ok = true;
      }else{
        password_ok = false;
      }
      if(email_ok && user_name_ok && password_ok){
        $("#sign_up_form input[type='submit']").removeAttr('disabled');
      }else{
        $("#sign_up_form input[type='submit']").attr('disabled','disabled');
      }
  });
  $( "#sign_up_form input[name='password_confirm']" ).focusout(function() {
      //alert( "Handler for focusout called." );
      if($("#sign_up_form input[name='password']").val() === $("#sign_up_form input[name='password_confirm']").val()){
        password_ok = true;
      }else{
        password_ok = false;
      }
      if(email_ok && user_name_ok && password_ok){
        $("#sign_up_form input[type='submit']").removeAttr('disabled');
      }else{
        $("#sign_up_form input[type='submit']").attr('disabled','disabled');
      }
  });
});
$("#sign_up_form").hide();
