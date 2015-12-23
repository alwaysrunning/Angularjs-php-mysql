var service = angular.module('myApp.service',[]);

service.factory('loadAllinfo',['$http','$q',function($http,$q){
    return function(){
        var defer = $q.defer();
        $http({
            method: "get",
            url:"database/notes.php"
        }).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('searchInfo',['$http','$q',function($http,$q){
    return function(keyword){
        var defer = $q.defer();
        $http({
            method: "get",
            url:"database/search.php",
            params:{'keyword':keyword}
        }).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('setPages',['$http','$q','$route',function($http,$q,$route){
    return function(){
        var defer = $q.defer();
        $http({
            method: "get",
            url:"database/setPage.php",
            params:{'page':$route.current.params.page}
        }).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('loadinfo',['$http','$q','$route',function($http,$q,$route){
    return function(){
        var defer = $q.defer();
        $http({
            method: "get",
            url:"database/note.php",
            params: {'id':$route.current.params.id}
        }).success(function(data){
            data = data[0]
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('insert',['$http','$q',function($http,$q){
    return function(title,content){
        var defer = $q.defer(),
        data = {
                content: content,
                title:title
            },
        transFn = function(data) {
                return $.param(data);
            },
        postCfg = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: transFn
        };    
        $http.post("database/add.php",data,postCfg).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('updateNote',['$http','$q',function($http,$q){
    return function(content,title,id){
        var defer = $q.defer(),
        data = {
                content: content,
                id: id,
                title:title
            },
        transFn = function(data) {
                return $.param(data);
            },
        postCfg = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: transFn
        };    
        $http.post("database/update.php",data,postCfg).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);


service.factory('removeNote',['$http','$q',function($http,$q){
    return function(id){
        var defer = $q.defer(),
        data = {
                id: id,
            },
        transFn = function(data) {
                return $.param(data);
            },
        postCfg = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: transFn
        };    
        $http.post("database/delete.php",data,postCfg).success(function(data){
            defer.resolve(data)
        }).error(function(data){
            defer.reject(data)
        })
        return defer.promise;
    }
}]);