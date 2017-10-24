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
    }
};
app.initialize();