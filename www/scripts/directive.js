var directive = angular.module('myApp.directive',[]);
directive.directive('autoFocusWhen',['$timeout',function($timeout){
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            autoFocusWhen : '=',
            ngModel: '='
        },
        link:function(scope,element,attrs,controller){
            scope.$watch('autoFocusWhen',function(newValue){
                if (newValue) {
                     $timeout(function(){
                         element[0].focus();
                         scope.autoFocusWhen = false;
                     })
                  }
            })
            element.on('blur keyup change', function() {
                scope.$apply(read);
            });
            function read() {
                scope.ngModel = element.val();
            }
        }
    }
}]);

