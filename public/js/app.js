const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  controller.indexOfEditFormToShow = null;
  this.createItem = function(){
    $http({
      method:'POST',
      url:'/items',
      data: {
        name:this.name,
        qty:this.qty,
        price:this.price,
        coupons:this.coupons
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
      console.log(controller.Items);
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
        qty:this.updatedQty,
        price:this.updatedPrice,
        coupons:this.updatedCoupons
      }
    }).then(
      function(response){
        controller.getItems();
        controller.indexOfEditFormToShow = null;
      },
      function(error){

      }
    );
  }
  this.getItems();
}]);
