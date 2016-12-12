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

		var uploadStyle = {
			display: "inline",
			padding: "0 0 0 60px"
		}

		return (
			<div style={{margin: "20.5px 0 0 0 "}}>
				<ButtonGroup style={toolbarStyle}>
					<Button><Glyphicon glyph="download"/></Button>
					<Button onClick={this._newFolder}><Glyphicon glyph="plus"/></Button>
					<Button onClick={this._newTextDocument}><Glyphicon glyph="text-color"/></Button>
				</ButtonGroup>
				<input type="file" placeholder="Upload" style={uploadStyle}></input>
				<FormGroup style={{display: "inline", float: "right"}}>
			      <InputGroup style={{display: "inline"}}>
			        <FormControl id="share-text" type="text" placeholder="Share..." style={inputStyle}/>
			        <Button onClick={this._shareFolder}><Glyphicon glyph="share"/></Button>
			      </InputGroup>
			    </FormGroup>
			</div>
		);
	},
	_newTextDocument: function(e) {
		if(!selected.name) $('#no-folder-modal').show();
		else enterEditMode();
	},
	_newFolder: function(e) {
		$('#newfolder-modal').show();
	},
	_shareFolder: function(e) {
		shareFolder();
	}
});