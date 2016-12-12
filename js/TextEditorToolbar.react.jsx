var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

var TextEditorToolbar = React.createClass({
	propTypes: {

	},
	render: function() {
		var cancelStyle = {
			position: "relative"
		}

		var saveStyle = {
			position: "relative",
			float: "right"
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