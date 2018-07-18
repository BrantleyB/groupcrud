const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.indexOfEditFormToShow = 1;
  this.createItem = function(){
    $http({
      method:'POST',
      url:'/items',
      data: {
        name:this.name,
        qty:this.qty
      }
    }).then(function(response){
      controller.getItems();
    })
  }
  this.getItems = function(){
    $http({
      method:'GET',
      url:'/items'
    }).then(function(response){
      controller.Items = response.data;
    })
  }
  this.deleteItem = function(item){
    $http({
      method:'DELETE',
      url: '/items/' + item._id
    }).then(
      function(response){
        controller.getItems();
      },
      function(error){

      }
    );
  }
  this.editItem = function(item){
    $http({
      method:'PUT',
      url: '/items/' + item._id,
      data: {
        name:this.updatedName,
        qty:this.updatedQty
      }
    }).then(
      function(response){
        controller.getItems();
      },
      function(error){

      }
    );
  }
  this.getItems();
}]);
