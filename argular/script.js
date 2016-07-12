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
