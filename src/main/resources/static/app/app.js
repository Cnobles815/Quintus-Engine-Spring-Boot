/**
 * Created by christophernobles on 10/19/16.
 */
(function(angular) {
    angular.module("myApp.controllers", "myApp.gameController", []);
    angular.module("myApp.services", []);
    angular.module("myApp", ["ngResource", "myApp.controllers", "myApp.services"]);
}(angular));