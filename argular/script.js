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
		template:"<div></div>",
		link:function(scope,element,attrs){
			var sb = scope.name;
			element.append("<div>name:" + sb + "</div>");
	                //ksdjfkjf	
			//sdjafdsjf
		}
	}
});

function namecardCtrl($scope){
//	$scope.name = "kanglirong";
}


