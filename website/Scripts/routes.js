app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/ColumnView.html",
        controller: "ColumnViewController" 
    })

    .when("/ColumnView", { 
        templateUrl: "views/ColumnView.html",
        controller: "ColumnViewController" 
    })

    .when("/ListView", { 
        templateUrl: "views/ListView.html",
        controller: "ListViewController" 
    })
})