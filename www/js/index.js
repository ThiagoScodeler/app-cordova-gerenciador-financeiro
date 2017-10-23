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
        if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString("#333");
        }
    }
};
app.initialize();