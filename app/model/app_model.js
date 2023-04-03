/**
 * The App Model class:
 * an abstract Model class all other models can inherit from
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 *
 * @param    {Object}    options
 */
const App = Function.inherits('Alchemy.Model', function App(options) {
	App.super.call(this, options);
});

/**
 * Mark this class as being abstract
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
App.makeAbstractClass();