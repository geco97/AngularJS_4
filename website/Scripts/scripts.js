var app = angular.module("angularApp", ['ngRoute']);
app.controller("restapiController", function ($scope, $http) {
    $http.get('http://localhost:5055/products')
    .then(function(res) {    
        $scope.namelist = res.data;
    });
     
    $scope.filterFields = ['productname', 'Category', 'manufacturer']; 
    $scope.sortColumn = "productname";
    $scope.rowLimits = "10";
     $scope.rowLimitArr = [
       {id: "5",name: "5"},
       {id: "10",name: "10"},
       {id: "20",name: "20"},
       {id: "50",name: "50"},
       {id: "100",name: "100"},
    ];
  
    $scope.search = function(item) {
        if($scope.searchText == undefined) {
            return true;
        }
        else {
            if(
                item.manufacturer.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.Category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            }
        }

        return false;
    }
/* 
    for (var i = 0; i < $scope.namelist.length; i++) {
        if ($scope.namelist[i].rating > 0) {
            $scope[$scope.namelist[i].product] = [];
            for (var j = 0; j < $scope.namelist[i].rating; j++) {
                $scope[$scope.namelist[i].product].push({ j: '' });
            }
            $scope.namelist[i].rating = $scope[$scope.namelist[i].product];
        }
    }*/
    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();
        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })
}) 
app.controller("ColumnViewController", function($scope) {
    $scope.pagetitle = "Home"; 
    document.getElementById("listV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.add('ActiveK');
})
app.controller("ListViewController", function($scope) {
    $scope.pagetitle = "Home";
    document.getElementById("listV").classList.remove('ActiveK');
    document.getElementById("columnV").classList.remove('ActiveK');
    document.getElementById("listV").classList.add('ActiveK');
});
