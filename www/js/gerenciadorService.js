var GerenciadorService = {

    lancamentos: new Array(),

    add: function (data, descricao, valor, tipo) {
        var lancamento = new Lancamento(data, descricao, valor, tipo);
        lancamento.id = this.lancamentos.length;
        this.lancamentos.push(lancamento);
    },

    listar: function () {
        return this.lancamentos;
    },

    listarStatus: function () {
        var entrada = 0;
        var saida = 0;
        var apagar = 0;
        var saldo = 0;

        for (var i = 0; i < this.lancamentos.length; i++) {
            if (this.lancamentos[i].tipo == 'entrada') {
                entrada += parseInt(this.lancamentos[i].valor);
            }
            if (this.lancamentos[i].tipo == 'saida') {
                saida += parseInt(this.lancamentos[i].valor);
            } if (this.lancamentos[i].tipo == 'apagar') {
                apagar += parseInt(this.lancamentos[i].valor);
            }
        }

        saldo = entrada - saida;

        var status = {
            entrada: entrada,
            saida: saida,
            apagar: apagar,
            saldo: saldo
        };

        return status;
    }
}