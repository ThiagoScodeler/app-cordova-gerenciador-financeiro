var GerenciadorController = {

    init: function () {
        //Register events via framework7
        $$(document).on("click", "#btnAddLancamento", GerenciadorController.goToAdd);
        $$(document).on("click", "#btnLancamentos", GerenciadorController.goToLancamentos);
        $$(document).on("click", ".form-to-data", GerenciadorController.addLancamento);
        $$(document).on("click", ".form-to-cancel", GerenciadorController.cancel);

        //load main view
        GerenciadorController.backToMainView();
    },

    goToAdd: function () {
        //Framework7 carregando a página Form - Add Lançamentos
        mainView.router.loadPage("form.html");
    },

    goToLancamentos: function () {
        //Framework7 carregando a página Lançamentos - Listar
        mainView.router.loadPage("lancamentos.html");
    },

    addLancamento: function () {
        //Adicionando Lançamento
        var formData = myApp.formToData('#my-form');
        //alert(JSON.stringify(formData));
        GerenciadorService.add(formData.data, formData.descricao, formData.valor, formData.tipo);

        //refresh lista de lançamentos
        mainView.router.loadPage("lancamentos.html");
    },

    cancel: function () {
        GerenciadorController.backToMainView();
    },

    backToMainView: function () {
        //back to view
        /** 
         * Forçando a volta para view principal
         * carregando e ignorando o cache default do Framework7
        */
        mainView.router.back({
            url: "index.html",
            reload: true,
            ignoreCache: true
        });
    },

    buildList: function (data) {
        for (var i = 0; i < data.length; i++) {
            $('#tabelaLancamentos > tbody:last-child')
            .append('<tr><td>'+ data[i].data + '</td>' + '<td>'+ data[i].descricao + '</td>' + 
            '<td>'+ data[i].valor + '</td>' + '<td>'+ data[i].tipo + '</td></tr>');
        }
    },

    buildStatusList: function (status) {
        $('#status').append('<p> <span class="glyphicon glyphicon-usd"></span> Saldo: ' + status.saldo + '</p>'+
        '<p> <span class="glyphicon glyphicon-arrow-right"></span> Entradas: ' + status.entrada + '</p>' +
        '<p> <span class="glyphicon glyphicon-shopping-cart"></span> Compras / Saídas: ' + status.saida + '</p>' +
        '<p> <span class="glyphicon glyphicon-flag"></span> Contas à pagar: ' + status.apagar + '</p>');
    }
}