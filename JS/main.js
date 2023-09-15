


$(document).ready(function(){
    $("#imagen1").hide();
    $("#imagen2").hide();
   
  });

  $("#boton1").click(function(){
    $("#imagen1").show();
    $("#imagen2").hide();
  });



  $("#boton2").click(function(){
    $("#imagen2").show();
    $("#imagen1").hide();
  });


  //-----------------------------



    $("#formId").submit(function(e){
      e.preventDefault();
          $("#lista1").append(" <li> "+$("#test").val()+"-"+$("#test2").val()+"</li> ");
     });


  //------------------------------

    
      $("#botonF").click(function(){
        $("#listaId").css("background-color", "green");
        $("#listaId").css("color", "white");
      });

  
    
      
  

 
