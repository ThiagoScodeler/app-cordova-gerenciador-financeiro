# Pós-graduação em Desenvolvimento de Aplicações para Dispositivos Móveis e Cloud Computing

Trabalho Disciplina DM108 - Desenvolvimento de aplicativos móveis multiplataforma com Apache Cordova em HTML, CSS e JS

**Alunos:**

* Rafael William da Silva
* Thiago Scodeler

## Getting Start

### Plugins

Instale os plugins utilizados

```sh
cordova plugin add cordova-plugin-whitelist
cordova plugin add cordova-plugin-firebase
cordova plugin add cordova-plugin-nativestorage
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-statusbar
```

### Plataformas

Adicione as plataformas desejadas

```sh
cordova platform add browser
cordova platform add android
```

## Teste

Para rodar a aplicação execute ```cordova run <platform>``` especificando a plataforma desejada.

## Serviço de Notificação


### Definição do serviço

Copie o arquivo ```google-service.json``` para o diretório raiz do projeto.

### Configuração do aplicativo

No arquivo `config.json` adicione o código abaixo nas configurações da plataforma android(```<platform name="android">```):

```xml
<resource-file src="google-services.json" target="google-services.json" />
```

### Teste do serviço de notificação

No aplicativo de teste de requisições REST [Postman](https://www.getpostman.com/ "Download the free Postman App") importe o arquivo ```DM108.postman_collection.json``` e execute a requisição ```Send Notification```. Verifique no dispositivo se a notificação foi recebida.

Caso deseje executar outra aplicação de requisições REST, crie uma requisição `POST` para a url `https://fcm.googleapis.com/fcm/send` com os seguintes parâmetros:

* Header:

```text
Content-Type: application/json
Authorization: key=AAAADdZ7zYc:APA91bEXgbcn7J2nNtinlcdOjK9_25jyi93jU6O6PX7l-q2XIiPlSxhiQNiZsV2JPf5zbFmGh86IEeOVCmqEgYhm1mpH-ZXSwYUhkCo8aSMKG5FBNYFFAW8Qe3BtS-GFS_vwTHKakQSA
```

* Body:

```json
{
  "data": {
    "data": "28-10-2017",
    "descrição": "salario",
    "valor": "1500",
    "tipo": "entrada"
  },
  "priority": "high",
  "notification": {
    "body": "Detalhes",
    "title": "Novo Lançamento"
  },
  "to": "/topics/lancamentos"
}
```
