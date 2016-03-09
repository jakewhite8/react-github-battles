var React = require('react');
var Battle = require('../components/Battle');



var BattleContainer = React.createClass({
	getInitialState: function(){
		//automatically runs when function is called
		//location of query params - this.props.location.query		
		console.log(this.props.location.query);
		return {
			playerOne: this.props.location.query.playerOne,
			playerTwo: this.props.location.query.playerTwo
		}
	},
	render: function() {
		return(
				< Battle 
					playerOne={this.state.playerOne} 
					playerTwo={this.state.playerTwo} />
			)
	}
})



module.exports = BattleContainer;