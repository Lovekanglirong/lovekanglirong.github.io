function EmployeeController($scope) {
  $scope.department = 'Engineering';
  $scope.employee = {
    name: 'Joe the Manager',
    reports: [
      {name: 'John Smith'},
      {name: 'Mary Run'}
    ]
  };
}

function subController($scope) {
	$scope.employee = {
	      name: 'John Smith'
	};
}

angular.module("ezstuff",[])
.directive("ezNamecard",function(){
	return {
		restrict:"E",
		replace:true,
		scope:false,
		template:"<div></div>",
		link:function(scope,element,attrs){

			//scope.name = 'kanglirong';
			element.append("<div>name:" + scope.name + "</div>");
			
		        setInterval(function(){
				scope.$apply(scope.name = 'kanglirong');
				//element.append(scope.name);
			},1000);	
		}

	}
})
.run(function($rootScope) {
	$rootScope.someProp = "Hello wife";
});



