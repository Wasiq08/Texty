(function(){
    'use strict';

    angular.module('route').controller('AddContact',['ContactData','$scope','$state','$stateParams','$ionicPlatform','$cordovaContacts',AddContact]);

function AddContact(ContactData,$scope,$state,$stateParams,$ionicPlatform,$cordovaContacts)
{
    var vm=this;
   
// vm.name=name;
// vm.number=num;
/*var index = $stateParams.index;
    var anotherKey = $stateParams.anotherKey;
    console.log("name: ",index);
vm.name=index;
vm.number=anotherKey;*/


vm.phonebook=function(){
  //alert("OK!!");
  $ionicPlatform.ready(function() {
      $cordovaContacts.pickContact().then(function (contactPicked) {
      $scope.contact = contactPicked;

      vm.name=$scope.contact.displayName;
      var ab= $scope.contact.phoneNumbers[0].value;
      vm.number=parseInt(ab);
     
      });
   /* var name="mudassir";
    var num=123465;
       $state.go('newContact',{ 'index': name, 'anotherKey':  num});
 */
 //alert("ok!!");
       });
}

    vm.update=function(){
         db.transaction(function (tx) {
     tx.executeSql('INSERT INTO AppContact (name,relation,number) VALUES (?,?,?)',[vm.name,vm.relation,vm.number],function(tx,result){
      var insId=result.insertId;

    var data={
          name: vm.name,
        id:insId,
        number:vm.number,
        relation:vm.relation
        };
        ContactData.add(data);

  $state.go('home.contacts');
vm.name="";
    vm.relation="";
    vm.number="";
   // console.log("name after: ",index);

     });
    });
    }
}
})()