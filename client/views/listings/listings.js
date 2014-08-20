Meteor.subscribe('theJobs');

Template.listings.jobs = function(){
  return Jobs.find();
}