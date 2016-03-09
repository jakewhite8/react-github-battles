var React = require('react');
var transparentBg = require('../styles').transparentBg;

var Battle = function(props) {
	return (
			<div>
				<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
					<h1>Battle Page New</h1>
					<h3>{props.playerOne} vs {props.playerTwo}</h3>
				</div>
			</div>
	);
}

module.exports = Battle;