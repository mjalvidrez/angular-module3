(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);


    // The NarrowItDownController should be injected with the 
    // MenuSearchService. The controller should call the 
    // getMatchedMenuItems method when appropriate and store the result 
    // in a property called found attached to the controller instance
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

    }


    // Declare and create MenuSearchService. The service should have the 
    // following method: getMatchedMenuItems(searchTerm). That method will 
    // be responsible for reaching out to the server (using the $http 
    // service) to retrieve the list of all the menu items. Once it 
    // gets all the menu items, it should loop through them to pick out 
    // the ones whose description matches the searchTerm. Once a list of 
    // found items is compiled, it should return that list (wrapped in a 
    // promise). Remember that the then function itself returns a promise. 
    // Your method would roughly look like this:
    MenuSearchService.$inject = ['http']
    function MenuSearchService('http') {
        var service = this;
    }


    service.getMatchedMenuItems = function (searchTerm) {

        return $http(...).then(function (result) {

        });
    }
    

})();