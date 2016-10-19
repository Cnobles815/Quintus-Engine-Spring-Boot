/**
 * Created by christophernobles on 10/19/16.
 */
(function(angular) {
    var ItemFactory = function($resource) {
        return $resource('/items/:id', {
            id: '@id'
        }, {
            update: {
                method: "PUT"
            },
            remove: {
                method: "DELETE"
            }
        });
    };

    ItemFactory.$inject = ['$resource'];
    angular.module("myApp.services").factory("Item", ItemFactory);
}(angular));