app.controller("AppController", function ($rootScope, $scope, $state, $location) {

    $scope.SearchText = "";

    $scope.SearchProduct = function () {
        $location.path("search/" + $scope.SearchText);
    }
});