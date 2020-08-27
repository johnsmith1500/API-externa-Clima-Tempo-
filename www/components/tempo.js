// This is a JavaScript file
$(document).on("click","#buscar", function(){
  $(location).attr("href","listar.html");
});


$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",//como you enviar
    url:"http://apiadvisor.climatempo.com.br/api/v1/forecast/region/"+$("#regiao").val()+"?token=e45005750837d09bb0498c1405e6de94",//para onde enviar
    sucess: function listar(record){//executar se der certo
      var Lista = "";
      $.each(record.data, function(i,dados){
        Lista += "<p><strong>Região: </strong>"+dados.region+"</p>";
        Lista += "<p><strong>Data: </strong>"+dados.date_br+"</p>";
        Lista += "<p>"+dados.image+"</p>";
        Lista += "<p>"+dados.text+"</p>";
      });
      $("#listarDados").html(Lista);
    },
    error: function(data){
        navigator.notification.alert("Erro ao buscar registro");
      }
  });
});