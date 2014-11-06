studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [
    { "name":"Sam Schmidt" },
    { "name":"Jessica Martin" },
    { "name":"Sandy Smith" },
    { "name":"Ryan Samuels" },
    { "name":"Brentwood Davis" }
  ]
  $scope.addStudent = function() {
    $scope.students.push({"name": $scope.studentName});
    $scope.studentName = null;
  };
  $scope.deleteStudent = function(student) {
  var index = $scope.students.indexOf(student)
  $scope.students.splice(index, 1);
  };
});
