// This is a JavaScript file

$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",//como you enviar
    url:"http://apiadvisor.climatempo.com.br/api/v1/forecast/region/"+$("#regiao").val()+"?token=e45005750837d09bb0498c1405e6de94",//para onde enviar
    sucess: function(data){//executar se der certo
      var conteudo;
      conteudo = "<p><strong>Região: </strong>"+data.region+"</p>";
      conteudo += "<p><strong>Data: </strong>"+data.date_br+"</p>";
      conteudo += "<p>"+data.image+"</p>";
      conteudo += "<p>"+data.text+"</p>";

      $("#dados").html(conteudo);
    },
    error: function(){//executar se der erro
      alert("deu erro:");
    }
  });
});