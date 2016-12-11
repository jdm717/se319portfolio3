var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var FormGroup = ReactBootstrap.FormGroup;
var InputGroup = ReactBootstrap.InputGroup;
var FormControl = ReactBootstrap.FormControl;
var Glyphicon = ReactBootstrap.Glyphicon;

function setup_appheader() {
	var test = Draft;

	ReactDOM.render(<AppHeader />, document.getElementById("header"));
}

var AppHeader = React.createClass({
	propTypes: {
		
	},
	render: function() {
		var toolbarStyle = {
			margin: "20.5px 0 0 0",
			display: "inline"
		}

		var inputStyle = {
			display: "inline",
			width: "100px"
		}

		return (
			<div style={{margin: "20.5px 0 0 0 "}}>
				<ButtonGroup style={toolbarStyle}>
					<Button><Glyphicon glyph="download"/></Button>
					<Button><Glyphicon glyph="upload"/></Button>
					<Button><Glyphicon glyph="plus"/></Button>
					<Button onClick={this._newTextDocument}><Glyphicon glyph="text-color"/></Button>
				</ButtonGroup>
				<FormGroup style={{display: "inline", float: "right"}}>
			      <InputGroup style={{display: "inline"}}>
			        <FormControl type="text" placeholder="Share..." style={inputStyle}/>
			        <Button><Glyphicon glyph="share"/></Button>
			      </InputGroup>
			    </FormGroup>
			</div>
		);
	},
	_newTextDocument: function(e) {
		if(1) {

		}
	}
});