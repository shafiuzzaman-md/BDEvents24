var app = app || angular.module('BDEventsApp', ["ui.router", "ui.bootstrap"]);
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
            .state("home", { url: "/home", templateUrl: "/App/Views/home.html" })
            .state("events", { url: "/events", templateUrl: "/App/Views/events.html" })
            ;

    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';;
});
