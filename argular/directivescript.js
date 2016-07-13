angular.module("ezstuff",[])
.directive("ezClock",function() {
    return {	
	restrict:"E",
	replace:true,
	template:"<div class='clock'></div>",
	link:function(scope,element,attrs){
		setInterval(function(){
		     var d = new Date();
		     element.text(d.toString());
		},1000);
	}
    }	
	
})
.controller("MyController", function ($scope) {
    $scope.name = "dreamapple";
    $scope.age = 20;
    $scope.changeAge = function(){
        $scope.age = 0;
    }
})
    .directive("myDirective", function () {
    var obj = {
        restrict: "AE",
        scope: {
            name: '@myName',
            age: '=',
            changeAge: '&changeMyAge'
        },
        replace: true,
        template: "<div class='my-directive'>" +
            "My name is:<span ng-bind='name'></span><br/>" +
            "My age is:<span ng-bind='age'></span><br/>" +
            "Modify names here:<input type='text' ng-model='name'><br/>" +
            "<button ng-click='changeAge()'>Modify age:</button>" +
            " </div>"
    }
    return obj;
    });
