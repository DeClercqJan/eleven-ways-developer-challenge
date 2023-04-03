/**
 * The App custom element.
 * Elements with only 1 word as their name will be prefixed with "al-"
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
const App = Function.inherits('Alchemy.Element', function App() {
	App.super.call(this);
});

/**
 * Mark this as an "abstract" class
 * This will make sure this isn't registered as an `<al-app>` element
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
App.makeAbstractClass(true);