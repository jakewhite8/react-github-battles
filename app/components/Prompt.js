var React = require('react')
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var Input = require('./Input');

var Prompt = function (props) {
	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
			< Input 
				onSubmitUser={props.onSubmitUser}
				onUpdateUser={props.onUpdateUser}
				username={props.username} />
			</div>
		</div>
	);
}


//type checking
Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func.isRequired,
	onSubmitUser: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired
}

module.exports = Prompt;

