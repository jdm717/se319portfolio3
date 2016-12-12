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
			display: "inline"
		}

		return (
			<div style={{margin: "20.5px 0 0 0 "}}>
				<ButtonGroup style={toolbarStyle}>
					<Button onClick={this._back}><Glyphicon glyph="arrow-left"/></Button>
					<Button onClick={this._help}><Glyphicon glyph="question-sign"/></Button>
					<Button onClick={this._fileDownload}><Glyphicon glyph="download"/></Button>
					<Button onClick={this._newFolder}><Glyphicon glyph="plus"/></Button>
					<Button onClick={this._newTextDocument}><Glyphicon glyph="text-color"/></Button>
				</ButtonGroup>
				<input id="file-upload" onChange={this._fileUploaded} type="file" placeholder="Upload" style={uploadStyle}></input>
				<FormGroup style={{display: "inline", float: "right"}}>
			      <InputGroup style={{display: "inline"}}>
			        <FormControl id="share-text" type="text" placeholder="Share..." style={inputStyle}/>
			        <Button onClick={this._shareFolder}><Glyphicon glyph="share"/></Button>
			      </InputGroup>
			    </FormGroup>
			</div>
		);
	},
	_back: function(e) {
		exitSubFolder();
	},
	_help: function(e) {
		$('#help-modal').show();
	},
	_newTextDocument: function(e) {
		if(!selected.name && !inSubFolder) $('#no-folder-modal').show();
		else enterEditMode();
	},
	_newFolder: function(e) {
		$('#newfolder-modal').show();
	},
	_shareFolder: function(e) {
		shareFolder();
	},
	_fileUploaded: function(e) {
		uploadTextFile();
	},
	_fileDownload: function(e) {
		downloadTextFile();
	}
});