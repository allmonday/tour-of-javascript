angular.module('itemServices', ['ngResource'])

.factory('Item', ['$resource',
    function ($resource) {
        return $resource('items/:id',
            {id: '@id'},  /* @id -> resource.id, id -> url param :id */
            {
                query: {
                    isArray: true,
                    method: 'GET',
                    params: {},
                    transformResponse: function (data) {
                        return angular.fromJson(data).list;  /* get partial */
                    }
                },
                get: {method: 'GET', params: {id: '@id'}},
                save: {method: 'POST'},
                update: {method: 'PUT', params: {id: '@id'}},
                delete: { method: 'DELETE', params: {} }
            });
    }]);