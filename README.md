# 后台管理系统(angularjs + php + mysql)

在此项目中遇到的坑：

在添加页面(add.html)的模板中的

"<input name="txt_title" type="text" size="40" auto-focus-when="focusTitle" ng-model="txt_title">"

当指令(directive)和ng-model同时使用时，在控制器中无法直接通过 $scope.txt_title 获取页面的值， 而需要在指令中

通过scope.$apply来传播页面输入的数据，代码如下

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


在使用Angular时需要注意以下几点：

1.ngView只能有一个，不能嵌套多个视图

2.在directive里面操作DOM的代码

Angularjs更适合于CRUD的管理系统开发。
