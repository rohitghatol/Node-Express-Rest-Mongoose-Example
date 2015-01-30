/**
 * Created by rohitghatol on 1/23/15.
 */


angular.module("todo")
  .service("TodoService",['$http',function($http){
    var service = {};

    service.todos=[];
    $http.get('/api/todos').success(function(items){
      items.forEach(function(item,index){
        service.todos.push(item);
      })

    });
    service.add=function(item){

      $http.post('/api/todos',item).success(function(result){
        service.todos.push(result);
      });


    };

    service.delete=function(item){
      $http.delete('/api/todos/'+item._id).success(function(result){
        service.todos.splice(service.todos.indexOf(item),1);
      });

    }

    service.clearCompleted=function(){
      for(var index=this.todos.length-1;index>=0;index--){
        if(service.todos[index].completed===true){
          service.todos.splice(index,1);
        }
      }

    }

    return service;

  }]);