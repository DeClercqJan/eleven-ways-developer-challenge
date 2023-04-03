// Create route with name "Home" that will execute the "home" method of the "Static" controller
Router.add({
	// The unique identifier of this route
	name       : 'Static#home',

	// The supported methods
	methods    : ['get'],

	// The path of this route
	paths      : '/',

	// The handler for this route
	// (If this is not defined, the name is used)
	handler    : 'Static#home',

	// The breadcrumb for this route
	// (for anchor activity)
	breadcrumb : 'static.home'
});

Router.add({
	name       : 'Static#info',
	methods    : ['get'],
	paths      : '/info',
	breadcrumb : 'static.info'
});