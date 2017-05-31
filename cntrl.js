angular.module("myapp").controller("myctrl", function($scope, quotelist){
  $scope.test = "this is a test";
  $scope.quotes = quotelist.quotes;


  $scope.addQuote = function(){
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    if(quotelist.addData(newQuote))
    {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor= '';
    }
  }

  $scope.deleteMe = function(quote){
    quotelist.removeData(quote)

  }




})
