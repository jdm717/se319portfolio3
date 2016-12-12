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

		if(this.state.hovered) {
			className = "hovered";
		}
		if(this.props.item == selected) {
			className += " active";
		}

		return (
			<Row
				onMouseEnter={this._handleItemHoverEnter}
				onMouseLeave={this._handleItemHoverExit}
				onClick={this._handleItemClick}
				className={className}
			>
				<Glyphicon glyph="folder-close"/>
				<a href="#">{this.props.item.name}</a>
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
	}
});





