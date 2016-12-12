var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var FormGroup = ReactBootstrap.FormGroup;
var InputGroup = ReactBootstrap.InputGroup;
var FormControl = ReactBootstrap.FormControl;
var Glyphicon = ReactBootstrap.Glyphicon;
var Row = ReactBootstrap.Row;

function setup_filesystem(items) {
	ReactDOM.render(<FileSystem data={items}/>, document.getElementById("content"));
}

var FileSystem = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	shouldComponentUpdate: function() {
		if(inEditMode) return false;
		else return true;
	},
	render: function() {
		var items = [];

		for(var key in this.props.data) {
			items.push(<FileNode 
							item={this.props.data[key]} 
							onSelectedChange={this._handleSelectedChange}
							key={key}
						/>
					);
		}

		return (
			<div>
				{items}
			</div>
		);
	},
	_handleSelectedChange: function(e) {
		this.forceUpdate();
	}
});

var FileNode = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
		onSelectedChange: React.PropTypes.func.isRequired
	},
	getInitialState: function() {
		return {
			hovered: false
		};
	},
	render: function() {
		var className = "";
		var glyph = "";
		var hoverButtons;

		if(this.state.hovered) {
			className = "hovered";

			hoverButtons =
				<ButtonGroup style={{float: "right"}}>
					<Button bsSize="xsmall" onClick={this._handleDelete}><Glyphicon glyph="remove-sign"/></Button>
				</ButtonGroup>
		}
		if(this.props.item == selected) {
			className += " active";
		}

		if(this.props.item.type == "folder") {
			glyph = "folder-close";
		}
		else {
			glyph = "file";
		}

		return (
			<Row
				onMouseEnter={this._handleItemHoverEnter}
				onMouseLeave={this._handleItemHoverExit}
				onClick={this._handleItemClick}
				className={className}
			>
				<Glyphicon glyph={glyph}/>
				{this.props.item.type == "folder" ?
					<a href="#" onClick={this._handleNavigate}>{this.props.item.name}</a>
					:
					<span className="fileName">{this.props.item.name}</span>
				}
				{hoverButtons}
			</Row>
		);
	},
	_handleItemHoverEnter: function(e) {
		this.setState({
			hovered: true
		});
	},
	_handleItemHoverExit: function(e) {
		this.setState({
			hovered: false
		});
	},
	_handleItemClick: function(e) {
		lastSelected = selected;
		selected = this.props.item;

		this.forceUpdate();

		this.props.onSelectedChange(e);
	},
	_handleNavigate: function(e) {
		navigateToFolder(e, this.props.item);
	},
	_handleDelete: function(e) {
		if(this.props.item.type == "folder") {
			deleteItem = this.props.item;
			$('#delete-folder-modal').show();
		}
		else {
			deleteItem = this.props.item;
			$('#delete-file-modal').show();
		}
	}
});





