var app = angular.module('myApp',['myApp.service','myApp.directive']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        controller: 'search',
        templateUrl: 'views/search.html'
    }).when('/editor',{
        controller: 'editor',
        templateUrl: 'views/editor.html'
    }).when('/add',{
        controller: 'addNote',
        templateUrl: 'views/add.html'
    }).when('/modify/:id',{
        controller: 'modify',
        templateUrl: 'views/modify.html'
    }).when('/delete',{
        controller: 'deleteNote',
        templateUrl: 'views/delete.html'
    }).when('/intercept',{
        controller: 'intercept',
        templateUrl: 'views/intercept.html'
    }).when('/setPage/:page',{
        controller: 'setPage',
        templateUrl: 'views/setPage.html'
    }).otherwise({redirectTo:'/'})
}])


app.controller('search',['$scope','loadAllinfo','searchInfo',function($scope,loadAllinfo,searchInfo){

    loadAllinfo().then(function(data){
        $scope.allInto = data;
    })
    $scope.search = function(){
        if(!$scope.keyword){
            alert("请输入关键字");
            return
        }
        searchInfo($scope.keyword).then(function(info){
            $scope.allInto = info
        })

    }
}])

app.controller('intercept',['$scope','loadAllinfo',function($scope,loadAllinfo){
    loadAllinfo().then(function(data){
        $scope.allInto = data;
    })
}])

app.controller('setPage',['$scope','setPages',function($scope,setPages){
    setPages().then(function(data){
        $scope.allInto = data.list;
        $scope.left = data.left;
        $scope.right = data.right;
    })
}])


app.controller('deleteNote',['$scope','loadAllinfo','loadinfo','removeNote','$location','searchInfo',function($scope,loadAllinfo,loadinfo,removeNote,$location,searchInfo){
    loadAllinfo().then(function(data){
        $scope.allInto = data;
    })
    $scope.remove = function(id){
        $scope.id = id;
        if($scope.id){
            removeNote($scope.id).then(function(dl){
                if(dl){
                    alert("成功删除");
                    loadAllinfo().then(function(data){
                        $scope.allInto = data;
                    })
                }
            })
        } 
    }
    $scope.search = function(){
        if(!$scope.keyword){
            alert("请输入关键字");
            return
        }
        searchInfo($scope.keyword).then(function(info){
            $scope.allInto = info
        })

    }
}])


app.controller('addNote',['$scope','insert','$location',function($scope,insert,$location){
    $scope.check = function(){
        $scope.focusTitle = false;
        if($scope.txt_title && $scope.txt_content){
            insert($scope.txt_title,$scope.txt_content).then(function(one){
                if(one){
                    $location.path("/");
                }
            })
        }else{
            alert("不能为空");
            $scope.focusTitle = true
            $scope.txt_title = ''
            $scope.txt_content = ''
            return
        }
    } 
}])

app.controller('editor',['$scope','loadAllinfo','searchInfo',function($scope,loadAllinfo,searchInfo){
    loadAllinfo().then(function(data){
        $scope.allInto = data;
    })
    $scope.search = function(){
        if(!$scope.keyword){
            alert("请输入关键字");
            return
        }
        searchInfo($scope.keyword).then(function(info){
            $scope.allInto = info
        })

    }
}])

app.controller('modify',['$scope','loadinfo','$location','updateNote',function($scope,loadinfo,$location,updateNote){
    loadinfo().then(function(data){
        $scope.txt_title = data.title
        $scope.txt_content = data.content
        $scope.id = data.id
    })
    $scope.check = function(){
        $scope.focusTitle = false;
        if($scope.txt_title && $scope.txt_content){
            updateNote($scope.txt_content,$scope.txt_title,$scope.id).then(function(rs){
                if(rs){
                    $location.path("/");
                }
            })
        }else{
            alert("不能为空");
            $scope.focusTitle = true
            $scope.txt_title = ''
            $scope.txt_content = ''
            return
        }
    }
}])