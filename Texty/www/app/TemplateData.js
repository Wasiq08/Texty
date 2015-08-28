(function(){
	//'use strict';

	angular.module('route').factory('TemplateData',[TemplateData]);
function TemplateData(){
 var template_db = [];

function flush(){
    template_db=[];
}
        function getTemplates(){
        	return template_db;
        }
        function addTemplates(data){
         template_db.push(data);
        }
        function delete_func(index){
            template_db.splice(index, 1);
        }
	return{
		getTemplates:getTemplates,
		 add:addTemplates,
         flush:flush,
         del:delete_func
	};
};
})();