var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
//used to specify default - if no other recognized route is enabled
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var BattleContainer = require('../containers/BattleContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='playerOne' header="Player One" component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
			<Route path='battle' component={BattleContainer} />
		</Route>
	</Router>
);

module.exports = routes;