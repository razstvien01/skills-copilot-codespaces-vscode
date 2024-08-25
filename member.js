function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modukes/skills/views/member.html',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}