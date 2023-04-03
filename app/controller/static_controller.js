/**
 * The Static Controller class
 *
 * @extends  Alchemy.Controller.App
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Alchemy.Conduit}   conduit
 * @param    {Object}            options
 */
const Static = Function.inherits('Alchemy.Controller.App', function Static(conduit, options) {
	Static.super.call(this, conduit, options);
});

/**
 * The home action
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Alchemy.Conduit}   conduit
 */
Static.setAction(function home(conduit) {

	this.set('project_name', alchemy.settings.title);

	// Render a specific view
	this.render('static/home');
});

/**
 * The info action
 * (It's best to remove this)
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Alchemy.Conduit}   conduit
 */
Static.setAction(function info(conduit) {

	// Set example information variables
	Controller.get('AlchemyInfo').setInfoVariables.call(this);

	// Set the `message` variable to be used inside the view file
	this.set('message', 'This is a standard message set in the <b>home</b> method of the <b>Static</b> controller');

	// Render a specific view
	this.render('static/info');
});