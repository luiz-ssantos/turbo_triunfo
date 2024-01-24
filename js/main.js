$(document).ready(function () {
  $("#carouselImagens").slick({
    autoplay: true,
  });

  $(".menuHamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 0.0000-0000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
        minlength: 14,
      },
      telefone: {
        required: true,
        // Defina aqui a regra customizada para telefone, se necessário
      },
    },
    messages: {
      name: {
        required: "Por favor, insira seu nome",
      },
      email: {
        required: "Por favor, insira seu e-mail",
        email: "Por favor, insira um e-mail válido",
      },
      telefone: {
        required: "Por favor, insira seu telefone",
        // Adicione aqui a mensagem para a regra customizada de telefone
      },
    },
    errorElement: "div", // Cria um elemento <div> para conter a mensagem de erro
    errorClass: "error-message", // Adiciona uma classe para o elemento <div> de erro
    highlight: function (element, errorClass, validClass) {
      // Adiciona a classe de erro ao elemento de entrada
      $(element).addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function (element, errorClass, validClass) {
      // Adiciona a classe válida ao elemento de entrada
      $(element).removeClass(errorClass).addClass(validClass);
    },
    submitHandler: function (form) {
      console.log(form);
      // Adicione aqui o código para lidar com o envio do formulário
    },
    invalidHandler: function (evento, validador) {
      let camposincorretos = validador.numberOfInvalids();
      console.log(camposincorretos);
    },
  });
});

$(".listaVeiculos button").click(function () {
  const destino = $("#contato");
  const nomeVeiculo = $(this).parent().find("h3").text();

  $("#veiculoInteresse").val(nomeVeiculo);

  $("html, body").animate(
    {
      scrollTop: destino.offset().top,
    },
    1000
  );
});
