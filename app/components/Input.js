var React = require('react')

var Input = function (props) {
	return (
		<div>
		<form onSubmit={props.onSubmitUser}>
			<div className="form-group">
				<input 
					className="form-control" 
					placeholder="Github Username" 
					type="text" 
					onChange={props.onUpdateUser} 
					value={props.username}/>
			</div>
			<div className="form-group col-sm-4 col-sm-offset-4">
				<button 
					className="btn btn-block btn-success" 
					type="submit">Continue
				</button>
			</div>
		</form>
		</div>
	)
}

module.exports = Input;