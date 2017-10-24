// Inicializacao
var myApp = new Framework7({
    material: false
});
// Exportando os seletores
var $$ = Dom7;

// Adicionando uma view principal
var mainView = myApp.addView('.view-main', {
    // Configurado para o modo de navegação dinâmico
    dynamicNavbar: true
});

$$('.form-to-data').on('click', function(){
  var formData = myApp.formToData('#my-form');
  alert(JSON.stringify(formData));
}); 