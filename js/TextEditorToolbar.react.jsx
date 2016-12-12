var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

var TextEditorToolbar = React.createClass({
	propTypes: {

	},
	render: function() {
		var cancelStyle = {
			position: "fixed",
			left: "9.30%",
			bottom: "25px"
		}

		var saveStyle = {
			position: "fixed",
			right: "9.30%",
			bottom: "25px"
		}	

		return (
			<div>
				<Button 
					style={saveStyle}
					onClick={this._handleSave}
				>
					Save
				</Button>
				<Button 
					style={cancelStyle}
					onClick={this._handleCancel}
				>
					Cancel
				</Button>
			</div>
		);
	},
	_handleCancel: function(e) {
		exitEditMode();
	},
	_handleSave: function(e) {
		saveDocument();
	}
});