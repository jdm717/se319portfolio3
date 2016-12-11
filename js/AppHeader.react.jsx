var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Glyphicon = ReactBootstrap.Glyphicon;

function setup_appheader() {
	ReactDOM.render(<AppHeader />, document.getElementById("header"));
}

var AppHeader = React.createClass({
	propTypes: {
		
	},
	render: function() {
		var toolbarStyle = {
			padding: "20.5px 0 0 0"
		}


		return (
			<div>
				<ButtonGroup style={toolbarStyle}>
					<Button><Glyphicon glyph="download"/></Button>
					<Button><Glyphicon glyph="upload"/></Button>
				</ButtonGroup>
			</div>
		);
	}
});