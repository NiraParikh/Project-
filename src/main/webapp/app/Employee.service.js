angular.module('crudApp').factory('Employee', Employee);

Employee.$inject=['$resource'];

function Employee($resource){
	
	var resouceUrl='api/employee/:id';
	
	return $resource(resourceUrl,{},{
		'update': {
			method:'PUT'
		}
	});
}
