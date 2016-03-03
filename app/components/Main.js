var React = require('react')


var Main = function (props) {
	return (
		<div className='main-container'>
			Hello From Main
			{props.children}
		</div>
	);
}

module.exports = Main;