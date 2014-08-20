Meteor.publish('theJobs', function() {
	return Jobs.find({ publish: true });
});


Meteor.startup(function () {
  // code to run on server at startup
});
