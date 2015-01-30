/**
 * Created by rohitghatol on 1/23/15.
 */

angular.module("todo")
  .controller("MainCtrl",['$scope','TodoService',function($scope,TodoService){


    $scope.todos = TodoService.todos;

    $scope.criteria = 'All';

    $scope.keypress=function(){
      if(event.keyCode===13){
        $scope.add();
      }
    }

    $scope.add=function(){
      console.log($scope.newTodo);
      TodoService.add($scope.newTodo);
      $scope.newTodo={};
    }

    $scope.delete=function(item){
      TodoService.delete(item);
    }

    $scope.clearCompleted=function(){
      TodoService.clearCompleted();
    }
  }]);