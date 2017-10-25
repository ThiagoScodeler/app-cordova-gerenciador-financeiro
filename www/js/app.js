// Inicializacao
var myApp = new Framework7({
    material: false,
});

// Exportando os seletores
var $$ = Dom7;

// Adicionando uma view principal
var mainView = myApp.addView('.view-main', {
    // Configurado para o modo de navegação dinâmico
    dynamicNavbar: true
});

//evento especifico do cordova
$$(document).on('deviceready', function() {
    GerenciadorController.init();
});

//Na inicializacao da pagina
$$(document).on("page:init", function(e){//O page:init é um evento genérico que é invocado quando uma página é inicializada
    var page = e.detail.page;
    /** 
     * No arquivo lancamentos.html temos uma page chamada chamada "lancamentos"
     * <div data-page="lancamentos" class="page">
     * Neste caso em particular iremos realizar a chamada ajax e montar a lista sempre
     * que essa página for inicializada
     * http://framework7.io/docs/pages.html
    */
    if (page.name === 'lancamentos') {
       var lancamentosList = GerenciadorService.listar(); //retorno da lista de lançamentos
       var buildList = GerenciadorController.buildList(lancamentosList); //montar lista de lançamentos
    }

    /** 
     * No arquivo index.html temos uma page chamada chamada "index"
     * <div data-page="index" class="page">
     * Neste caso em particular iremos realizar a chamada ajax e montar a lista de lançamentos com saldo, entradas, saidas e contas a pagar sempre
     * que essa página for inicializada
     * http://framework7.io/docs/pages.html
    */
    if (page.name === 'index') {
       var statusList = GerenciadorService.listarStatus(); //retorno da lista de status financeiro
       buildStatusList = GerenciadorController.buildStatusList(statusList); //montar lista de status
    }

});