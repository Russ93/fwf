//------------------------- Routes -------------------------//
angular.module('app' , ['ngRoute']);

$routeProvider
	when(path, route)

$locationProvider
	html5Mode(mode)

//------------------------- Routing Parts -------------------------//
$routeProvider.
	.when('/view1', {
		controller: ' ',
		templateUrl: ' '
	}). //notice the period '.'
    .when('/view2', {
        controller: ' ',
        templateUrl: ' '
    }). //notice the period '.'
    .otherwise({redirectTo: '/view1'});

//------------------------- $http -------------------------//
1.$http.get('/somethingUrl').sucess(successCallback);
2.$http.post('/somethingUrl', data).ajaxSuccess
    (successCallback)
$http({
    url: user.details_path,
    method: "GET",
    params: {user_id: user.id}
})

//------------------------- JSONP -------------------------//
$http.jsonp('url&callback=JSON_CALLBACK').success(funciton(json)){
        console.log(json);
}

//------------------------- Lab -------------------------//
$http.jsonp("http://otagtekin.com/lab4.php?action=getAds&username="student"&password="1234"&callback=JSON_CALLBACK")
    .success(funciton(json)){
        console.log(json);
    }