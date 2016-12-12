var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var FormGroup = ReactBootstrap.FormGroup;
var InputGroup = ReactBootstrap.InputGroup;
var FormControl = ReactBootstrap.FormControl;
var Glyphicon = ReactBootstrap.Glyphicon;
var Row = ReactBootstrap.Row;

function setup_app() {
	ReactDOM.render(<AppMain data={items} text={textContent}/>, document.getElementById("content"));
}

var AppMain = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired,
		text: React.PropTypes.string
	},
	getInitialState: function() {
		return {

		};
	},
	render: function() {
		var app = null;

		if(inEditMode) {
			app = 
				<div>
					<TextEditor text={this.props.text} />
					<TextEditorToolbar />
				</div>
		}
		else {
			app =
				<FileSystem
					data={this.props.data}
				/>
		}


		return (
			<div style={{margin: "5px 0 0 0 "}}>
				{app}
			</div>
		);
	}
});