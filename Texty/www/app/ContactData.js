(function(){
	//'use strict';

	angular.module('route').factory('ContactData',[ContactData]);
function ContactData(){
 var contacts_db = [];


        function getContacts(){
        	return contacts_db;
        }
        function add(data){
         contacts_db.push(data);
        }
        function delete_func(index){
            contacts_db.splice(index, 1);
        }
	return{
		getContacts:getContacts,
		 add:add,
         del:delete_func
	};
};
})();