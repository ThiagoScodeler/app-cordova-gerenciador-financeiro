var GerenciadorService = {

    lancamentos: new Array(),

    add: function (data, descricao, valor, tipo) {
        var lancamento = new Lancamento(data, descricao, valor, tipo);
        lancamento.id = this.lancamentos.length;
        this.lancamentos.push(lancamento);

        NativeStorage.setItem("lancamentos", this.lancamentos,
            function onSuccess(obj) {
                console.log(obj);
            },
            function onError(err) {
                console.log(err.code);
            }
        );

        /* Enviar Notificação após novo Lançamento
        Exemplo de Utilização do FIREBASE CLOUD MESSAGING */
        var keyServer = "AAAADdZ7zYc:APA91bEXgbcn7J2nNtinlcdOjK9_25jyi93jU6O6PX7l-q2XIiPlSxhiQNiZsV2JPf5zbFmGh86IEeOVCmqEgYhm1mpH-ZXSwYUhkCo8aSMKG5FBNYFFAW8Qe3BtS-GFS_vwTHKakQSA";

        var notificationMessage = JSON.stringify({
            "data": {
                "data": lancamento.data,
                "descrição": lancamento.descricao,
                "valor": lancamento.valor,
                "tipo": lancamento.tipo,
            },
            "priority": "high",
            "notification": {
                "body": "Detalhes",
                "title": "Novo Lançamento"
            },
            "to": "/topics/lancamentos"
        })

        $.ajax({
            type: 'POST',
            url: 'https://fcm.googleapis.com/fcm/send',
            headers: {
                Authorization: 'key=' + keyServer,
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: notificationMessage,
            success: function (response) {
                //alert(JSON.stringify(response));
            }, error: function (error) {
                console.log('Erro ao enviar notificação');
                //alert(JSON.stringify(error));
            }
        });
    },

    listar: function () {
        var listaLancamentos = "";

        if (this.lancamentos.length != 0) {
            NativeStorage.getItem("lancamentos",
                function onSuccess(obj) {
                    console.log(obj);
                    listaLancamentos = obj;
                },
                function onError(err) {
                    console.log(err.code);
                }
            );
        }

        return listaLancamentos;
    },

    listarStatus: function () {
        var entrada = 0;
        var saida = 0;
        var apagar = 0;
        var saldo = 0;

        var listaLancamentos = "";
        if (this.lancamentos.length != 0) {
            NativeStorage.getItem("lancamentos",
                function onSuccess(obj) {
                    console.log(obj);
                    listaLancamentos = obj;
                },
                function onError(err) {
                    console.log(err.code);
                }
            );

            for (var i = 0; i < listaLancamentos.length; i++) {
                if (listaLancamentos[i].tipo == 'entrada') {
                    entrada += parseFloat(listaLancamentos[i].valor);
                }
                if (listaLancamentos[i].tipo == 'saida') {
                    saida += parseFloat(listaLancamentos[i].valor);
                } if (listaLancamentos[i].tipo == 'apagar') {
                    apagar += parseFloat(listaLancamentos[i].valor);
                }
            }
        }

        saldo = entrada - saida;

        var status = {
            entrada: entrada,
            saida: saida,
            apagar: apagar,
            saldo: saldo
        };

        NativeStorage.setItem("status", status,
            function onSuccess(obj) {
                console.log(obj);
            },
            function onError(err) {
                console.log(err.code);
            }
        );

        return status;
    }
}