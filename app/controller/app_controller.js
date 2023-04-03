/**
 * The App Controller class:
 * an abstract Controller class all other controllers can inherit from
 *
 * @extends  Alchemy.Controller
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Alchemy.Conduit}   conduit
 * @param    {Object}            options
 */
const App = Function.inherits('Alchemy.Controller', function App(conduit, options) {
	App.super.call(this, conduit, options);
});

/**
 * Mark this class as being abstract
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
App.makeAbstractClass();