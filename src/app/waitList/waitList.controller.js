(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['partyService', 'textMessageService', 'user'];
    
    function WaitListController(partyService, textMessageService, user) {
        var vm = this;

        vm.parties = partyService.getPartiesByUser(user.uid);
    }
    
})();