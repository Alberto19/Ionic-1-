var mod = angular.module('tvchat.services.showService', []);


mod.service('ShowsService', function () {

	var self = {
		getShow: function (showId) {
			return _.find(self.shows, {"showid": showId});
		},
		shows: [
			{
				"showid": 28416,
				"link": "http://google.com",
				"name": "2 Broke Girls",
				"classification": "Scripted",
				"country": "US",
				"image": "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
				"genres": [
					"Comedy"
				],
				"network": "CBS"
			}
			
		]
	};
	return self;
});
