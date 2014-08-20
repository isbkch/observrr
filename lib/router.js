Router.map(function(){
  this.route('home', {path: '/'} );
  
  this.route('listings', {path: '/listings'} );

  this.route('job', {
  	path: '/job_details/:id',  
  	data: function(){
      var id = this.params.id;
      console.log(id);
    }
  });

});