(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItems);



    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        // this is where we will be calling functions from the ctrl
        var ctrl = this;
        ctrl.finder = function() {
            ctrl.find = MenuSearchService.getMatchedMenuItems(ctrl.something);
            ctrl.find.then(value => console.log(value));
            console.log(ctrl.find);
        }
    }
 
    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            // need to see if the term we are searching is null or empty 
            if (searchTerm === null || searchTerm === undefined) {
                searchTerm = " ";
            }
            return $http({
                method : "GET",
                url : ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            })
            .then(function (result) {
                var foundItems = result.data;
                var myitems = [];
                // this is where we need to search through the list to get what we need
                for (const temp in foundItems) {
                    for (const item in foundItems[temp].menu_items) {
                        // do something so you are able to get the searched term and put it into a list 
                        if(foundItems[temp].menu_items[item].description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            myitems.push(foundItems[temp].menu_items[item]);
                        }
                    }
                }
    
                return myitems;
            });
        }
    }

    // this is the directory that we are going to be using 
    function foundItems() {
        
        var ddo = {
            templateUrl : "index.html",
            restrict : 'E',
            scope: {
                item: "<",
                arrayName: '@'
            },
            controller : NarrowItDownController,
            controllerAs : 'ctrl',
            bindToController: true,
        };
        return ddo;
    }
    
})();