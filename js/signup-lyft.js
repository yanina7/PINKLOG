var countries=[{name: 'peru', code: 51 },{name: 'mexico', code: 52 },{name: 'brasil', code: 56},{name: 'venezuela', code: 58}];
$(document).ready(function() {
  
  //var countries=[{name: 'peru', code: 51 },{name: 'mexico', code: 52 },{name: 'brasil', code: 56}];

  
  var myselect = $('<select>');
     $.each(countries, function(index,name,code) {
         name = countries[index]['name'];
         code = countries[index]['code'];
         myselect.append( $('<option></option>').val(code).text(name).attr('data-content','<img src="../assets/img/'+name+'.png">') );
       });
      $('#selectCity').append(myselect.html());

   var $country = $('#selectCity');
   var $codePostal = $('#txtNumeroPostal');
   var $next  = $('#btnext');
  $country.on('change', function() {
   // Does some stuff and logs the event to the console
          
     
    for(i=0;i<$(this).children().length;i++){
      if( $(this).val() == $(this).children().eq(i).val()){
      
        $codePostal.val($(this).val());
        $codePostal.focus();
        console.log($(this).val());
      }
    }
    activeButtonNext()
    
  });

  function  validatePhone(){
    return $codePostal.val().substring($country.val().length,$codePostal.val().length).concat("0").length  == 10 ;
  }
  function  activeButtonNext(){
     
     if(validatePhone()){ 
      $next.attr('disabled', false);
      $next.css('background','#FF6F8D');
     }else{
       $next.attr('disabled', true);
       $next.css('background','#ddd');
     }
   }
 
  $codePostal.on('input', function(event) {
       event.preventDefault(); 
   //    $('#txtNumeroPostal').val().substring($('#selectCity').val().length,$('#txtNumeroPostal').val().length).concat("0").length;
     activeButtonNext()
  });

  $next.on('click', function(){
    localStorage.setItem("pais",$country.val());
    localStorage.setItem("numero",$codePostal.val());
         
  }); 


  /* evento input si no hay interaccion es porque hay un evento*/

  var $celular  = $('#txtNumeroPostal');
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checked = $('input[type=checkbox]');
  var $button = $('#signup');
  var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  var PATERNTEL = /^[0-9]+$/;
  // asociando eventos a los inputs
      
   console.log(PATERNEMAIL.test($email.val())); 
   console.log(!PATERNEMAIL.test($email.val()));
  function cleancel(){
  return $celular.text() = "";
  }

  function validateCelular(){   
   return PATERNTEL.test($celular.val());    
  }
  function validateEmail(){
   return PATERNEMAIL.test($email.val());
  } 
  function validatePassword(){
   return $password.val().length >= 6;
  }
  function validateChecked(){
   return $checked.is(':checked');
  }
  function validateAll(){
   return validateEmail() && validatePassword() && validateChecked() ;
  }
  
  $celular.on('input', function(e) {
       e.preventDefault();
       if(validateCelular()){
         console.log("es correcto");
       }else{
         alert("Por favor ingresa solo números");
         $celular.val("");
       }     
  });


  function  msgCelular(){
     
    if(validateAll()){ 
    $button.attr('disabled', false);
    $button.css('background','#BF87F2');
    }else{
     $button.attr('disabled', true);
     $button.css('background','#AC9CB7');
     }
  }

  
   function  activeButton(){
     
     if(validateAll()){ 
     $button.attr('disabled', false);
     $button.css('background','yellow');
       }else{
        $button.attr('disabled', true);
       }
   }
   function  desactiveButton(){
     $button.attr('disabled',true);
     $button.css('background','red');
   }
   
   $email.on('input', function(event) {
       event.preventDefault(); 
       activeButton(); 
   });

    $password.on('input', function(event) {
       activeButton();
   }); 

   $checked.on('click', function(event){
       // event.target.checked;
       
       activeButton();
       //var CheckOption = $(this).is(':checked');
       //   console.log($(this).is(':checked'));
    
    }); 
   
  
 /* function  validateEmail(parambooleam){
        if(parambooleam){
         console.log("hola soy TRUE");
         activeButton();
        }
        else{
         console.log("hola falsazo");
        }
    }
  
  validateEmail(email());


   $email.on('input', function(event) {
       event.preventDefault();  
       // console.log(event.target.value);
      var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
       // variable booleana que sera true o false
        PATERNEMAIL.test($(this).val());
      //validEmail = PATERNEMAIL.test($(this).val()); 
      //validateEmail(validEmail);
   });
   $password.on('input', function(event) {
      // console.log(event.target.value);
      var validPass = $(this).val().length >= 6;
      // console.log(validPass);
      return validPass;
   }); 
    

    /* if(validEmail){
        console.log("hola soy TRUE");
       }
      else{
        console.log("hola falsazo");
      }*/
   

  /*
    is_username_valid = function() {
      return $username_input.val().length >= 3;
    };
  */ 

  // console.log($email.val());
});
  
 