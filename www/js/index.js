var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this),
            false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        StatusBar.backgroundColorByHexString("#092E32");
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        //get the current token
        window.FirebasePlugin.getInstanceId(
            function (token) {
                console.log(token);
            },
            function (error) {
                alert(error);
            }
        );
        
        //subscribe to topic "lancamentos"
        window.FirebasePlugin.subscribe("lancamentos");
        
        window.FirebasePlugin.onNotificationOpen(
            function (notification) {
                alert(JSON.stringify(notification));
            },
            function (error) {
                alert(error);
            }
        );
    }
};
app.initialize();