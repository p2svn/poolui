'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "p2s.com.vn",
		api_url : 'http://p2s.com.vn/api',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});
